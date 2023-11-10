import { createContext } from "@/app/api/graphql/context";
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from '@pothos/plugin-prisma';
import { DateTimeResolver, JSONResolver } from "graphql-scalars";
import RelayPlugin from '@pothos/plugin-relay';
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "../lib/prisma";



export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes;
    Context: ReturnType<typeof createContext>;
    Scalars: {
        DateTime: {Input: Date; Output: Date};
        JSON: {
            Input: any; // https://pothos-graphql.dev/docs/guide/scalars#adding-scalars-from-graphql-scalars
            Output: any
        }
    }
}>({
   plugins: [PrismaPlugin, RelayPlugin],
   relayOptions: {},
   prisma: {client: prisma}
})

// in GraphQL the Query type and Mutation type can each only be called once. So we call it here and will add fields to them on the go
builder.queryType({});
builder.mutationType({});

// This is where we've created the new date scalar
builder.addScalarType("DateTime", DateTimeResolver, {});
builder.addScalarType('JSON', JSONResolver, {});