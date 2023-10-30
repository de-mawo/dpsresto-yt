import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { createContext } from "./context";
import { schema } from "@/graphql/schema";


const server = new ApolloServer({
schema,

})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req) => await createContext({req})
})

export async function GET(req: Request) {
    return handler(req)
}

export async function POST(req: Request) {
    return handler(req)
}