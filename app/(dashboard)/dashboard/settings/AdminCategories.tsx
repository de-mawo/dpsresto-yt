"use client";

import Image from "next/image";

import AdminAddCategory from "./AdminAddCategory";
import AdminEditCategory from "./AdminEditCategory";
import AdminDeleteCategory from "./AdminDeleteCategory";

import { categoriesData } from "@/data/categories-data";
import { Category } from "@prisma/client";

const AdminCategories = () => {
  return (
    <>
      <div className="flex items-center justify-around ">
        <h2 className="text-2xl py-4 leading-tight tracking-tight text-gray-600 ">
          Categories
        </h2>
        <AdminAddCategory />
      </div>
      <table className="w-full    text-left  text-slate-500 ">
        <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>

            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
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
          {categoriesData?.map((cat) => (
            <tr className="bg-white " key={cat.id}>
              <td className="px-6 py-2">
                <Image
                  src={cat.imageSrc}
                  width={50}
                  height={50}
                  alt="avatar"
                  className="rounded-md object-cover"
                />
              </td>
              <td className="px-6 py-2">{cat.title} </td>
              <td className="px-6 py-2">{cat.desc}</td>

              <td className="px-6 py-2 whitespace-nowrap">
                <AdminEditCategory cat={cat as unknown as Category} />
              </td>
              <td className="px-6 py-2 whitespace-nowrap">
                <AdminDeleteCategory  />
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </>
  );
};

export default AdminCategories;
