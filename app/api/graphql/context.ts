import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

// This function prohibits a client without  apiKey to access our graphql endpoint
function validateGraphApiKey(request: NextRequest): boolean {
  const expectedApiKey = process.env.GRAPHQL_API_KEY;
// Check if the API key is in the request headers
const apiKeyFromHeaders = request.headers.get("Authorization");
// Check if the API key is in the request query parameters (e.g., apiKey=your-api-key)
const apiKeyFromQuery = new URL(request.url).searchParams.get("apiKey");
// Validate the API key
return (
  apiKeyFromHeaders === `Bearer ${expectedApiKey}` ||
  apiKeyFromQuery === expectedApiKey
);
}

export async function createContext({ req }: { req: NextRequest }) {


  // Disable this function when testing in Apollo SandBox
  if (!validateGraphApiKey(req)) {
    throw new Error("Unauthorized: No Access"); // Throw an error if API key validation fails
  }

  const session = await getServerSession(authOptions);

  // if the user is not logged in, return an empty object
  if (!session || typeof session === "undefined") return {};
  const { user } = session;
  return { user };
}
