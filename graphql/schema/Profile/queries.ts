import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";

builder.prismaObject("Profile", {
  fields: (t) => ({
    id: t.exposeID("id"),
    phone: t.exposeString("phone", { nullable: true }),
    img: t.exposeString("img", { nullable: true }),
    name: t.exposeString("name", { nullable: true }),
    email: t.relation("user"),
  }),
});

builder.queryFields((t) => ({
  getProfile: t.prismaField({
    type: "Profile",
    args: {
        email: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const isLoggedIn = !(await context).user;
      if (isLoggedIn) {
        throw new GraphQLError("You must be logged in  to perform this action");
      }
      const profile = await prisma.profile.findUniqueOrThrow({
        ...query,
        where: { email: args.email },
      });
      return profile;
    },
  }),
  getProfiles: t.prismaField({
    type: ["Profile"],
    resolve: async (query, _, _args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You don't have permission to perfom this action");
      }
      const adminProfiles = await prisma.profile.findMany({
        ...query,
      });
      return adminProfiles;
    },
  }),
}));