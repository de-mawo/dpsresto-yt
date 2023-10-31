import { GraphQLError } from "graphql";
import prisma from "@/lib/prisma";
import { builder } from "@/graphql/builder";
import { OrderStatus } from './enum'



builder.mutationFields((t) => ({
    addOrder: t.prismaField({
        type: "Order",
        args: {
            orderNumber: t.arg.string({required: true}),
            cart: t.arg( { type: "JSON", required: true }),
            userName: t.arg.string({required: true}),
            userEmail: t.arg.string({required: true}),
            userPhone: t.arg.string({required: true}),
            paymentToken: t.arg.string(),
            deliveryAddress: t.arg.string({required: true}),
            deliveryFee: t.arg.float({required: true}),
            serviceFee: t.arg.float({required: true}),
            note: t.arg.string(),
            discount: t.arg.float(),
            total: t.arg.float({required: true}),
        },
        resolve: async (query, _, args, context) => {
          const isLoggedIn = !(await context).user;
          if (isLoggedIn) {
            throw new GraphQLError("You must be logged in  to perform this action");
          }
          const order = await prisma.order.findFirst({
            ...query,
            where: { orderNumber: args.orderNumber },
          });
          if (order) return order;   
    
          const newOrder = await prisma.order.create({
            data: { ...args },
          });
          return newOrder;
        },
      }),

      editOrder: t.prismaField({
        type: "Order",
        args: {
          id: t.arg.string({ required: true }),
          status: t.arg({type: OrderStatus, required: true}),
          deliveryTime: t.arg({type: "DateTime"})
        },
        resolve: async (_query, _, args, context) => {
          const isLoggedIn = !(await context).user;
          if (isLoggedIn) {
            throw new GraphQLError("You must be logged in  to perform this action");
          }
          const updatedOrder = await prisma.order.update({
            where: { id: args.id },
            data: { ...args },
          });
          return updatedOrder;
        },
      }),

      editOrderOnPayment: t.prismaField({
        type: "Order",
        args: {
          id: t.arg.string({ required: true }),
          paymentToken: t.arg.string(),
        },
        resolve: async (_query, _, args, context) => {
          const isLoggedIn = !(await context).user;
          if (isLoggedIn) {
            throw new GraphQLError("You must be logged in  to perform this action");
          }
          const updatedOrder = await prisma.order.update({
            where: { id: args.id },
            data: { ...args, paid: true },
          });
          return updatedOrder;
        },
      }),
}))