"use client";


import TableWrapper from "../Components/TableWrapper";
import { useState } from "react";
import { AdminFetchedOrders } from "./AdminFetchedOrders";



const AdminOrderTable = () => {

  const [pageVariables, setPageVariables] = useState([
    {
      first: 4,
      after: null as null | string,
    },
  ]);

  
  return (
    <TableWrapper title={"All Orders"}>
        <table className="w-full   text-left  text-slate-500 ">
          <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order-Number
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Token
              </th>
              <th scope="col" className="px-6 py-3  ">
                Order-Date
              </th>
              <th scope="col" className="px-6 py-3  ">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Delivery Address
              </th>
              <th scope="col" className="px-6 py-3">
                Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Collected
              </th>
              <th scope="col" className="px-6 py-3">
                Delivered
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
            </tr>
          </thead>
          {pageVariables.map((variables, i) => (
            <AdminFetchedOrders
              key={"" + variables.after}
              variables={variables}
              isLastPage={i === pageVariables.length - 1}
              onLoadMore={(after) =>
                setPageVariables([...pageVariables, { after, first: 4 }])
              }
            />
          ))}
        </table>
    
    </TableWrapper>
  );
};

export default AdminOrderTable;