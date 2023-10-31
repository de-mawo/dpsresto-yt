import { builder } from "@/graphql/builder";



export const OrderStatus = builder.enumType("OrderStatus", {
    values: ["PREPARING", "UNASSIGNED", "COLLECTED", "DELIVERED"] as const,
    description: "Order status",
})