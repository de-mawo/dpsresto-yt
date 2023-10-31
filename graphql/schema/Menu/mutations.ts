import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.mutationFields((t) => ({
  addMenu: t.prismaField({
    type: "Menu",
    args: {
      title: t.arg.string({ required: true }),
      shortDescr: t.arg.string({ required: true }),
      longDescr: t.arg.string({ required: true }),
      price: t.arg.float({ required: true }),
      sellingPrice: t.arg.float(),
      image: t.arg.string({ required: true }),
      category: t.arg.string({ required: true }),
      prepType: t.arg.stringList({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }
      const menu = await prisma.menu.findFirst({
        ...query,
        where: { title: args.title },
      });
      if (menu) {
        throw new GraphQLError("Menu Already Exist");
      }

      const newMenu = await prisma.menu.create({
        data: { ...args },
      });
      return newMenu;
    },
  }),

  editMenu: t.prismaField({
    type: "Menu",
    args: {
      id: t.arg.string({ required: true }),
      title: t.arg.string({ required: true }),
      shortDescr: t.arg.string({ required: true }),
      longDescr: t.arg.string({ required: true }),
      price: t.arg.float({ required: true }),
      sellingPrice: t.arg.float(),
      image: t.arg.string({ required: true }),
      category: t.arg.string({ required: true }),
      prepType: t.arg.stringList({ required: true }),
    },
    resolve: async (_query, _, args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }

      const updatedMenu = await prisma.menu.update({
        where: { id: args.id },
        data: { ...args },
      });
      return updatedMenu;
    },
  }),

  deleteMenu: t.prismaField({
    type: "Menu",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (_query, _, args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }

      const deleteMenu = await prisma.menu.delete({
        where: { id: args.id },
      });
      return deleteMenu;
    },
  }),
}));
