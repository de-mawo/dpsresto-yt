
import { getCurrentUser } from "@/lib/session";
import FavoritesSection from "./FavoritesSection";
import { User } from "@prisma/client";

export default async function Favorites () {
  const user = await getCurrentUser()
  return <FavoritesSection user={user as User} />;
};

