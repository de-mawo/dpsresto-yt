"use client";

import { HiOutlineChevronLeft } from "react-icons/hi2";
import Link from "next/link";

import { MenuData } from "@/data/menu-data";
import Container from "@/app/components/Common/Container";
import FavoriteModal from "./FavoriteModal";


const FavoritesSection = () => {

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
        {MenuData?.map((favorite) => (
          <FavoriteModal
            key={favorite.id}
            favorite={favorite as Menu}
           
          />
        ))}
      </section>
    </Container>
  );
};

export default FavoritesSection;