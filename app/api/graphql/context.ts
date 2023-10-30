import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function createContext({ req }: { req: NextRequest }) {
  const session = await getServerSession(authOptions);

  // if the user is not logged in, return an empty object
  if (!session || typeof session === "undefined") return {};
  const { user } = session;
  return { user };
}
