"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { MenuData } from "@/data/menu-data";
import TableWrapper from "../Components/TableWrapper";
import AdminPreviewMenu from "./AdminPreviewMenu";
import AdminEditMenu from "./AdminEditMenu";
import AdminDeleteMenu from "./AdminDeleteMenu";

const AdminMenuTable = () => {

  return (
    <TableWrapper title={"All Menus"}>
      <table className="w-full    text-left  text-slate-500 ">
        <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              <input
                className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                type="checkbox"
              />
            </th>
            <th scope="col" className="px-6 py-3  ">
              Product
            </th>

            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Pre-View
            </th>

            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
        {MenuData.map((menu) => (
          <tr className="bg-white " key={menu.id}>
            <td className="px-6 py-2">
              <input
                className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                type="checkbox"
              />
            </td>
            <td className="px-6 py-2">
              {" "}
              <Image
                src={menu.image as string}
                width={50}
                height={50}
                alt="avatar"
                className="rounded-md object-cover"
              />{" "}
            </td>
            <td className="px-6 py-2">{menu.title} </td>
            <td className="px-6 py-2">
              {" "}
              <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded ">
                {" "}
                {menu.category}
              </span>{" "}
            </td>
            <td className="px-6 py-2">{menu.price}</td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminPreviewMenu menu={menu as Menu} />{" "}
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminEditMenu menu={menu as Menu} />{" "}
            </td>
            <td className="px-6 py-2 whitespace-nowrap">
              {" "}
              <AdminDeleteMenu menu={menu as Menu} />{" "}
            </td>
          </tr>
        ))}
      </tbody>
    
      </table>
   
    </TableWrapper>
  );
};

export default AdminMenuTable;