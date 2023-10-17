import React from "react";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { HiOutlineCurrencyDollar, HiOutlineUserGroup } from "react-icons/hi2";
import { BiWalk } from "react-icons/bi";
import {  VscLayoutMenubar } from "react-icons/vsc";

const TotalCards = () => {
  const totalVisits = 3500;
  const percentageVisits = 45;
  const totalProfit = 5000;
  const percentageProfit = -25;
  const totalProducts = 200;
  const percentageProducts = 50;
  const totalUsers = 20000;
  const percentageUsers = -12;
  const totals = [
    {
      title: "Total Visits",
      total: totalVisits,
      percentage: percentageVisits,
      icon: BiWalk,
    },
    {
        title: "Total Profit",
        total: totalProfit,
        percentage: percentageProfit,
        icon: HiOutlineCurrencyDollar,
      },
      {
        title: "Total Products",
        total: totalProducts,
        percentage: percentageProducts,
        icon: VscLayoutMenubar,
      },
      {
        title: "Total Users",
        total: totalUsers,
        percentage: percentageUsers,
        icon: HiOutlineUserGroup,
      },
  ];
  return (
    <section className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 ">
      {totals.map((total) => (
        <div className="p-3 shadow-md bg-white rounded-md" key={total.title}>
          <button className="p-2 bg-slate-200 rounded-full  hover:bg-green-200 text-green-600">
            {React.createElement(total.icon, {
              size: 24,
            })}
          </button>

          <h2 className="font-semibold text-2xl py-2">{total.total}</h2>
          <div className="flex justify-between items-center">
            <p className="text-slate-500">{total.title} </p>
            <p className="flex items-center">
              {" "}
              <span>{total.percentage}%</span>
              {total.percentage > 0 ?
              <HiArrowSmUp className=" text-green-500 mb-2" size={24} />
              :
              <HiArrowSmDown className=" text-red-500 mb-2" size={24} />
              
              }
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TotalCards;