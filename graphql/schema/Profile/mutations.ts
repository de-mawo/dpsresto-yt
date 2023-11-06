import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.mutationFields((t) => ({
  addProfile: t.prismaField({
    type: "Profile",
    args: {
        email: t.arg.string({ required: true }),
      phone: t.arg.string(),
      img: t.arg.string(),
      name: t.arg.string(),
    },
    resolve: async (query, _, args, context) => {

      const isLoggedIn = !(await context).user;
      if (isLoggedIn) {
        throw new GraphQLError("You must be logged in  to perform this action");
      }
      
      if ((await context).user?.email !== args.email) {
        throw new GraphQLError("You cannot add a profile which is not yours");
      } //Allow only users who are logged in their own accounts to edit their own profiles. Much like RLS
      const profile = await prisma.profile.findFirst({
        ...query,
        where: { email: args.email },
      });
      if (profile) return profile;

      const newProfile = await prisma.profile.create({
        data: { ...args },
      });
      return newProfile;
    },
  }),
  editProfile: t.prismaField({
    type: "Profile",
    args: {
        email: t.arg.string({ required: true }),
      phone: t.arg.string(),
      img: t.arg.string(),
      name: t.arg.string(),
    },
    resolve: async (_query, _, args, context) => {
      const isLoggedIn = (await context).user;
      if (!isLoggedIn) {
        throw new GraphQLError("You must be logged in  to perform this action");
      }
      const newProfile = await prisma.profile.update({
        where: { email: args.email },
        data: { ...args, email: args.email },
      });

      return newProfile;
    },
  }),
}));