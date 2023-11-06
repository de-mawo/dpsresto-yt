"use client";
import {  useCartStore, useLoginModal, useSideBarDrawer } from "@/lib/store";
import Link from "next/link";
import { HiBars3, HiOutlineShoppingCart } from "react-icons/hi2";
import LocationBtn from "./LocationBtn";
import { User } from "@prisma/client";
import AccountDropDown from "./AccountDropDown";

type HeaderProps = {
  user: User
}

const Header = ({user}:HeaderProps) => {

  const {onOpen} = useLoginModal()
  const { menus } = useCartStore();

    const {onSideBarOpen} = useSideBarDrawer()

    
  return (
    <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 bg-white">
      {/* Left Area  */}

      <div className="flex items-center gap-x-8">
        <button className="p-2 rounded-full bg-slate-200 text-gray-500 hover:bg-green-200 hover:text-green-600"
        onClick={onSideBarOpen}
        >
          <HiBars3 size={28} className="cursor-pointer shrink-0" />
        </button>

        <LocationBtn />
      </div>
      {/* Right Area  */}

      <div className="hidden md:flex  items-center justify-end space-x-4">
        <Link
          href="/cart"
          className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600 "
        >
          <HiOutlineShoppingCart className="pr-1" size={28} />
          <span className="absolute top-0 right-1 font-bold text-green-600">
          { menus ? menus.length : 0 }
          </span>
        </Link>
        {
          user ? (
            <AccountDropDown user={user} />
          ): (

        <button className="bg-slate-200 text-gray-500 px-4 py-1 rounded-full"
        onClick={onOpen}
        >
          Login/Signup
        </button>
          )
        }
      </div>
    </header>
  );
};

export default Header;
