import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";



builder.prismaObject("Favorite", {
    fields: (t) => ({
      id: t.exposeString("id"),
      menu: t.exposeStringList("menu"),
      user: t.relation("user"),
      userEmail: t.exposeString("userEmail"),
    }),
  });

  builder.queryFields((t) => ({
 
    //Get Admin Favorites
    getFavorites: t.prismaField({
      type: ["Favorite"],
      resolve: async (query, _, args, context) => {
        if ((await context).user?.role !== "ADMIN") {
          throw new GraphQLError(
            "You don't have permission to perfom this action"
          );
        }
        const adminFavorites = await prisma.favorite.findMany({ ...query });
        return adminFavorites;
      },
    }),
      //Get Admin Favorites
      getUserFavorites: t.prismaField({
        type: "Favorite",
        args: {
          userEmail: t.arg.string({ required: true }),
        },
        resolve: async (query, _, args, context) => {
          
          if (!(await context)) {
            throw new GraphQLError(
              "You must be logged in  to perform this action"
            );
          }
          
          const favorite = await prisma.favorite.findUnique({
            ...query,
            where: {
              userEmail: args.userEmail,
            },
          });
          if (!favorite) {
            throw new GraphQLError("no favourite found");
          }
          return favorite ;
        },
      }),
  }));