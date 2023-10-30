import prisma from "@/lib/prisma";
import { builder } from "@/graphql/builder";
import { Role } from "./enum";
import { GraphQLError } from "graphql";



builder.mutationFields((t) => ({
    editUserRole: t.prismaField({
    type: "User",
    args: {
      role: t.arg({ type: Role, required: true }),
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _, args, context) => {
      const roleEnum: any = args.role; 
      if ((await context).user?.role !== "ADMIN") {
        throw new GraphQLError("You are not authorized to perform this action");
      }

      const newRole = await prisma.user.update({
        where: { id: args.id },
        data: { role: roleEnum },
      });

      return newRole;
    },
  }),
}))