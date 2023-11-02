import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.mutationFields((t) => ({
  addCategory: t.prismaField({
    type: "Category",
    args: {
      title: t.arg.string({ required: true }),
      desc: t.arg.string({ required: true }),
      img: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      if (!(await context).user) {
        throw new GraphQLError(
          "You have to be logged in to perform this action"
        );
      }
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }
      
      const category = await prisma.category.findFirst({
        ...query,
        where: { title: args.title },
      });

      if (category) {
        throw new GraphQLError("This Category already exists");
      }

      const newCategory = await prisma.category.create({
        data: { ...args },
      });

      return newCategory;
    },
  }),

  editCategory: t.prismaField({
    type: "Category",
    args: {
      id: t.arg.string({ required: true }),
      title: t.arg.string({ required: true }),
      desc: t.arg.string({ required: true }),
      img: t.arg.string({ required: true }),
    },
    resolve: async (_query, _, args, context) => {
      if (!(await context).user) {
        throw new GraphQLError(
          "You have to be logged in to perform this action"
        );
      }
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }

      const updatedCategory = await prisma.category.update({
        where: { id: args.id },
        data: { ...args },
      });
      return updatedCategory;
    },
  }),
  deleteCategory: t.prismaField({
    type: "Category",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (_query, _, args, context) => {
      if (!(await context).user) {
        throw new GraphQLError(
          "You have to be logged in to perform this action"
        );
      }
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }

      const deleteCat = await prisma.category.delete({
        where: { id: args.id },
      });
      return deleteCat;
    },
  }),
}));