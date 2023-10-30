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
        // order: t.relation("order", {nullable: true})
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
}))