import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";


builder.prismaObject("Category", {
    fields: (t) => ({
      id: t.exposeID("id"),
      title: t.exposeString("title"),
      desc: t.exposeString("desc"),
      img: t.exposeString("img"),
    }),
  });


  builder.queryFields((t) => ({
    getCategory: t.prismaField({
      type: "Category",
      args: {
        id: t.arg.string({ required: true }),
      },
      resolve: async (query, _, args) => {
        const category = await prisma.category.findFirst({
          ...query,
          where: {
            id: args.id,
          },
        });
        if (!category) {
          throw new GraphQLError("category not found");
        }
        return category;
      },
    }),
    getCategories: t.prismaField({
      type: ["Category"],
      resolve: (query) => prisma.category.findMany(query),
    }),
    
  }));