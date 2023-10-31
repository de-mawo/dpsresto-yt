import prisma from "@/lib/prisma";
import { GraphQLError } from "graphql";
import { builder } from "@/graphql/builder";
import { OrderStatus} from './enum'


builder.prismaObject("Order", {
    fields: (t) => ({
      id: t.exposeString("id"),
      orderNumber: t.exposeString("orderNumber"),
      cart: t.expose("cart", { type: "JSON" }),
      orderDate: t.expose("orderDate", { type: "DateTime" }),
      deliveryTime: t.expose("deliveryTime", { type: "DateTime", nullable: true }),
      userName: t.exposeString("userName"),
      user: t.relation("user"),
      userEmail: t.exposeString("userEmail"),
      userPhone: t.exposeString("userPhone"),
      paymentToken: t.exposeString("paymentToken",{nullable: true}),
      paid: t.exposeBoolean("paid"), 
      deliveryAddress: t.exposeString("deliveryAddress"),
      deliveryFee: t.exposeFloat("deliveryFee"),
      serviceFee: t.exposeFloat("serviceFee"),
      status: t.expose("status", { type: OrderStatus }),
      note: t.exposeString("note",{nullable: true}),
      discount: t.exposeFloat("discount",{nullable: true}),
      total: t.exposeFloat("total"),
    }),
  });
  
  builder.queryFields((t) => ({
    getOrder: t.prismaField({
      type: "Order",
      args: {
        id: t.arg.string({ required: true }),
      },
      resolve: async (query, _, args, context) => {
        const isLoggedIn = !(await context).user;
        if (isLoggedIn) {
          throw new GraphQLError("You must be logged in  to perform this action");
        }
        const order = await prisma.order.findFirst({
          ...query,
          where: {
            id: args.id,
          },
        });
        if (!order) {
          throw new GraphQLError("order not found");
        }
        return order;
      },
    }), 
    //Get Admin Orders
    getOrders: t.prismaConnection({
      type: "Order",
      cursor: 'id',
      resolve: async (query, _, args, context) => {
        if ((await context).user?.role !== "ADMIN") {
          throw new GraphQLError(
            "You don't have permission to perfom this action"
          );
        }
        const adminOrders = await prisma.order.findMany({ ...query });
        return adminOrders;
      },
    }),
  }));