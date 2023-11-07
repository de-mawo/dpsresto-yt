"use client";

import { Suspense, useState } from "react";

import { AdminFetchedMenus } from "./AdminFetchedMenus";
import TableWrapper from "../Components/TableWrapper";
import DataLoading from "@/app/components/Common/ClientLoaders";

const AdminMenuTable = () => {
  const [pageVariables, setPageVariables] = useState([
    {
      first: 4,
      after: null as null | string,
    },
  ]);

  return (
    <TableWrapper title={"All Menus"}>
      <Suspense fallback={DataLoading()}> 
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

        {pageVariables.map((variables, i) => (
          <AdminFetchedMenus
            key={"" + variables.after}
            variables={variables}
            isAdminLastPage={i === pageVariables.length - 1}
            onLoadMore={(after) =>
              setPageVariables([...pageVariables, { after, first: 4 }])
            }
          />
        ))}
      </table>
      </Suspense>
    </TableWrapper>
  );
};

export default AdminMenuTable;