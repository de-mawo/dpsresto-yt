"use client";

import { HiOutlineChevronLeft } from "react-icons/hi2";
import Link from "next/link";

import { MenuData } from "@/data/menu-data";
import Container from "@/app/components/Common/Container";
import FavoriteModal from "./FavoriteModal";
import { Menu, User } from "@prisma/client";
import { useQuery } from "@urql/next";
import { GetMenuUserFavoritesDocument, GetMenuUserFavoritesQuery, GetMenuUserFavoritesQueryVariables, GetUserFavoritesDocument, GetUserFavoritesQuery, GetUserFavoritesQueryVariables } from "@/graphql/generated";

type Props = {
  user: User;
};

const FavoritesSection = ({ user }: Props) => {

  const userEmail = user?.email as string;

  const [{ data, fetching: FavsFetch, error: FavsErr }] = useQuery<
    GetUserFavoritesQuery,
    GetUserFavoritesQueryVariables
  >({ query: GetUserFavoritesDocument, variables: { userEmail } });

  const menuIds = data?.getUserFavorites.menu as string[];

  const [{ data: userFavorites, fetching, error }] = useQuery<
    GetMenuUserFavoritesQuery,
    GetMenuUserFavoritesQueryVariables
  >({ query: GetMenuUserFavoritesDocument, variables: { menuIds, userEmail } });

  const Favorites = userFavorites?.getMenuUserFavorites;

  return (
    <Container>
      <div className="mt-6 text-center">
        <h2 className="text-lg md:text-2xl lg:text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          My Favorites
        </h2>
        <Link
          href="/user"
          className="inline-flex items-center justify-center
           bg-green-600 text-lg   px-4 py-1 text-white 
            border border-green-500 space-x-2 rounded-full
             hover:text-green-700 hover:bg-green-200  "
        >
          {" "}
          <HiOutlineChevronLeft /> <span>Back to my Profile</span>{" "}
        </Link>
      </div>

      <section className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8">
        {Favorites?.map((favorite) => (
          <FavoriteModal
            key={favorite.id}
            favorite={favorite as Menu}
            user={user}
          />
        ))}
      </section>
    </Container>
  );
};

export default FavoritesSection;