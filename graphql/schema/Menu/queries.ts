import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.prismaObject("Menu", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    shortDescr: t.exposeString("shortDescr"),
    longDescr: t.exposeString("longDescr", { nullable: true }),
    price: t.exposeFloat("price"),
    sellingPrice: t.exposeFloat("sellingPrice", { nullable: true }),
    image: t.exposeString("image"),
    prepType: t.exposeStringList("prepType"),
    onPromo: t.exposeBoolean("onPromo"),
    category: t.exposeString("category"),
  }),
});

builder.queryFields((t) => ({
  getMenu: t.prismaField({
    type: "Menu",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args) => {
      const menu = await prisma.menu.findFirst({
        ...query,
        where: {
          id: args.id,
        },
      });
      if (!menu) {
        throw new GraphQLError("menu not found");
      }
      return menu;
    },
  }),

  getMenus: t.prismaConnection({
    type: "Menu",
    cursor: "id",
    resolve: async (query, _parent, _args, _context) => {
      const menus = await prisma.menu.findMany({ ...query });
      return menus;
    },
  }),

  getMenuUserFavorites: t.prismaField({
    type: ["Menu"],
    args: {
      userEmail: t.arg.string({ required: true }),
      menuIds: t.arg.stringList({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const isLoggedIn = !(await context).user;
      if (isLoggedIn) {
        throw new GraphQLError("You must be logged in  to perform this action");
      }
      if ((await context).user?.email !== args.userEmail) {
        throw new GraphQLError(
          "You cannot alter a favorite to an account which is not yours"
        );
      }
      const menuIds = args.menuIds
      const menus = await prisma.menu.findMany({
        ...query,
        where: {
          id: {
            in: menuIds,
          },
        },
      });
    
      return menus;
      
    },
  }),
}));
