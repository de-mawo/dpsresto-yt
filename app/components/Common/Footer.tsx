"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";
import FooterMobile from "./FooterMobile";




const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="bg-slate-200">
      {/* Footer Smaller Screen */}

      <FooterMobile  />

      {/* Footer Large Screen */}
      <section className="hidden md:flex  justify-around items-center border-t border-slate-100 py-12 px-12 ">
        <div className="items-center">
          <Image src="/img/logo.png" alt="logo" width={70} height={70} />
        </div>

        <div className=" flex flex-col space-y-2">
          <h2 className="font-semibold">ABOUT</h2>
          <Link href="/contact-us">Contact Us</Link>
          <Link href={"/help"}>Help Center</Link>
          <Link href={"/faqs"}>FAQ</Link>
        </div>

        <div className=" flex flex-col  space-y-2">
          <h4 className=" font-semibold">HELP & GUIDE</h4>
          <Link href="/terms-of-use">Term Of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/shipping">Shipping & Delivery</Link>
        </div>
      </section>
      <section className="hidden md:flex py-12 px-12 justify-center">
        <p> {Year} DPS Resto (Pty) Ltd</p>
      </section>
    </footer>
  );
};

export default Footer;