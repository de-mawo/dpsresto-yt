import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.mutationFields((t) => ({
    addFavorite: t.prismaField({
      type: "Favorite",
      args: {
        userEmail: t.arg.string({ required: true }),
        menuId: t.arg.string({ required: true }),
      },
      resolve: async (query, _, args, context) => {
        const isLoggedIn = !(await context).user;
        if (isLoggedIn) {
          throw new GraphQLError("You must be logged in  to perform this action");
        }
        if ((await context).user?.email !== args.userEmail) {
          throw new GraphQLError(
            "You cannot add a favorite to an account which is not yours"
          ); //Allow only users who are logged in their own accounts to edit their own tables. Much like RLS
        }
        // find If Favorite entry of this user exists in the DB
        const favorite = await prisma.favorite.findFirst({
          ...query,
          where: { userEmail: args.userEmail },
        });
        // Create an entry if it does does not exist
        if (!favorite) {
          const newFav = args.menuId;
          const newFavorite = await prisma.favorite.create({
            data: { userEmail: args.userEmail, menu: [newFav] },
          });
          return newFavorite;
        }
        //
        const menuId = args.menuId;
        if (favorite.menu.includes(menuId)) {
          throw new GraphQLError("Favorite Already Exists");
        }
        let menuIds = [...(favorite.menu || [])];
  
        menuIds.push(menuId);
  
        const updatedFavorite = await prisma.favorite.update({
          where: { id: favorite.id },
          data: { menu: menuIds },
        });
        return updatedFavorite;
      },
    }),
  
    removeFavorite: t.prismaField({
      type: "Favorite",
      args: {
        menuId: t.arg.string({ required: true }),
        userEmail: t.arg.string({ required: true }),
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
  
        const favorite = await prisma.favorite.findFirst({
          ...query,
          where: { userEmail: args.userEmail },
        });
        if (!favorite) {
          throw new GraphQLError("No Favorite found");
        }
        const menuId = args.menuId;
  
        const menuIds = [...favorite.menu];
        const newMenuIds = menuIds.filter((item) => item !== menuId);
  
        const updatedFavorite = await prisma.favorite.update({
          where: { id: favorite.id },
          data: { menu: newMenuIds },
        });
        return updatedFavorite;
      },
    }),
  }));