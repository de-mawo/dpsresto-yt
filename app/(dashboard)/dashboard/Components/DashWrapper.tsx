"use client";

import { useState } from "react";
import DashHeader from "./DashHeader";
import DashSideBar from "./DashSideBar";

type DashWrapperProps = {
  children: React.ReactNode;
};

const DashWrapper = ({ children }: DashWrapperProps) => {
  const [show, setShow] = useState(false);
  const showSideBar = () => {
    setShow(!show);
  };
  return (
    <div className="min-h-screen bg-slate-200 ">
      <DashSideBar show={show} showSideBar={showSideBar} />

      <section
        className={`relative  ml-[6.5rem]  transition-all duration-1000 ease-out    ${
          show && " md:ml-[10rem]"
        }`}
      >
        <DashHeader />
        {children}
      </section>
    </div>
  );
};

export default DashWrapper;
