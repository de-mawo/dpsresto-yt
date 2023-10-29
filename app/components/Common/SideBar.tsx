"use client";

import React, { createElement, useState } from "react";
import DialogComponent from "./DialogComponent";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { useLoginModal, useSideBarDrawer } from "@/lib/store";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

type Props = {
  user: User;
};

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Orders", icon: FaReceipt, url: "/user/orders" },
  { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
  { title: "Help", icon: MdHelp, url: "/user/help" },
];

const SideBar = ({ user }: Props) => {
  const { isSideBarOpen, onSideBarClose } = useSideBarDrawer();
  const { onOpen } = useLoginModal();

  const showLoginComponent = () => {
    onSideBarClose();
    onOpen();
  };

  return (
    <DialogComponent isVisible={isSideBarOpen} onClose={onSideBarClose}>
      <div className="flex flex-col gap-y-6 px-6 pt-8">
        {user ? (
          <>
            <div className="flex justify-center my-3">
              <Link href="/" className="outline-none">
                <Image src="/img/logo.png" width={40} height={40} alt="logo" />
              </Link>
            </div>
            <div className="flex items-center p-3 transition-all font-semibold">
              <Image
                src={user?.image!}
                width={40}
                height={40}
                alt="user-img"
                className="object-cover rounded-full"
              />
              <div className="flex flex-col space-y-2 text-xs">
                <span className="pl-4">{user?.name} </span>
                <Link href="/user" className="pl-4 text-green-600">
                  View Account
                </Link>
              </div>
            </div>

            {Links.map((link) => (
              <Link
                href={link.url}
                className="flex items-center p-3 transition-all font-semibold hover:text-green-500 hover:bg-green-100 rounded-md"
                key={link.title}
              >
                {createElement(link.icon, {
                  className: "h-5 w-5 mr-4 shrink-0",
                })}
                <span className="pl-2">{link.title}</span>
              </Link>
            ))}
            <button className="flex items-center p-3 transition-all font-semibold"
            onClick={() => signOut({ callbackUrl: "/" })}
            >
              <HiOutlineArrowRightOnRectangle
                className="mr-4 shrink-0"
                size={26}
              />
              <span className="pl-2">Sign Out</span>
            </button>
          </>
        ) : (
          <button
            className="bg-green-600 text-white text-center
           hover:bg-green-200  hover:text-green-700  p-3 rounded  focus:outline-none "
            onClick={showLoginComponent}
          >
            Login / Signup
          </button>
        )}

        <div className="flex flex-col border-t ">
          {user?.role === "ADMIN" && (
            <div className="mt-5">
              <Link
                href="/dashboard"
                className="bg-green-600  text-white text-center hover:bg-green-200  hover:text-green-700  p-3 rounded "
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </DialogComponent>
  );
};

export default SideBar;
