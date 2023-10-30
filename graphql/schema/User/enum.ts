import { builder } from "@/graphql/builder";


export const Role = builder.enumType("Role", {
    values: ["USER", "ADMIN", "DELIVERY"] as const,
    description: "User Role",
})