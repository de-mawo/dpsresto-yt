"use client";

import React, { createElement, useState } from "react";
import DialogComponent from "./DialogComponent";
import { BsHeartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { FaReceipt } from "react-icons/fa";
import { HiHome, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { useSideBarDrawer } from "@/lib/store";

const Links = [
  { title: "Home", icon: HiHome, url: "/" },
  { title: "Orders", icon: FaReceipt, url: "/user/orders" },
  { title: "Favorites", icon: BsHeartFill, url: "/user/favorites" },
  { title: "Help", icon: MdHelp, url: "/user/help" },
];

const SideBar = () => {
  
    const {isSideBarOpen, onSideBarClose} = useSideBarDrawer()

  return (
    <DialogComponent isVisible={isSideBarOpen} onClose={onSideBarClose}>
      <div className="flex flex-col gap-y-6 px-6 pt-8">
        <div className="flex justify-center my-3">
          <Link href="/" className="outline-none">
            <Image src="/img/logo.png" width={40} height={40} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center p-3 transition-all font-semibold">
          <Image
            src="/img/humans/h1.jpg"
            width={40}
            height={40}
            alt="user-img"
            className="object-cover rounded-full"
          />
          <div className="flex flex-col space-y-2 text-xs">
            <span className="pl-4">De Mawo</span>
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
        <button className="flex items-center p-3 transition-all font-semibold">
          <HiOutlineArrowRightOnRectangle className="mr-4 shrink-0" size={26} />
          <span className="pl-2">Sign Out</span>
        </button>
      </div>
    </DialogComponent>
  );
};

export default SideBar;
