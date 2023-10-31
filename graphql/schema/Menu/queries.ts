import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.prismaObject("Menu", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    shortDescr: t.exposeString("shortDescr"),
    longDescr: t.exposeString("longDescr"),
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
}));
