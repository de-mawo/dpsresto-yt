import prisma from "@/lib/prisma";
import { builder } from "@/graphql/builder";
import { Role } from "./enum";
import { GraphQLError } from "graphql";



builder.prismaObject("User", {
    fields: (t) => ({
        id: t.exposeID("id", {}),
        name: t.exposeString("name", { nullable: true }),
        email: t.exposeString("email", { nullable: true }),
        image: t.exposeString("image", { nullable: true }),
        role: t.expose("role", { type: Role }),
        // profile: t.relation("profile", {nullable: true}),
        // favorite: t.relation("favorite",{nullable: true}),
        order: t.relation("order", {nullable: true})
      }),
})

builder.queryFields((t) => ({
    getUsers: t.prismaField({
    type: ["User"],
    resolve: async (query, _, _args, context) => {
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You don't have permission to perfom this action");
      }
      const adminUsers = await prisma.user.findMany({
        ...query,
      });
      return adminUsers;
    },
  }),

  getUser: t.prismaField({
    type: "User",
    args: {
      email: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {    
      const userRole = (await context).user?.role;
      if (userRole !== "USER" && userRole !== "ADMIN") {
        throw new GraphQLError(
          "You must be logged in as a user or an admin to perform this action"
        );
      }
      const user = await prisma.user.findUniqueOrThrow({
        ...query,
        where: { email: args?.email },
      });
      return user;
    },
  }),

}))