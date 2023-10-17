"use client";


import TableWrapper from "../Components/TableWrapper";
import { OrderData } from "@/data/order-data";
import { HiCheck, HiXCircle } from "react-icons/hi2";
import AdminOrderModal from "./AdminOrderModal";
;

const AdminOrderTable = () => {
  
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
          <tbody>
        {OrderData.map((order) => (
          <tr className="bg-white whitespace-nowrap" key={order.id}>
            <td className="px-6 py-3">{order.orderNumber} </td>
            <td className="px-6 py-3 ">{order.paymentToken}</td>
            <td className="px-6 py-3">{order.orderDate} </td>
            <td className="px-6 py-3">{order.userName} </td>
            <td className="px-6 py-3 max-w-xs ">
              {" "}
              <p className="truncate ...">
                {order.deliveryAddress}{" "}
              </p>{" "}
            </td>
            <td className="px-6 py-3 ">
              {order.paid ? (
                <HiCheck className=" w-5 h-5 font-bold text-green-600" />
              ) : (
                <HiXCircle className="text-red-600" size={20} />
              )}
            </td>
            <td className="px-6 py-3 ">
              {order.status === "COLLECTED" ||
              order.status === "DELIVERED" ? (
                <HiCheck className=" font-bold text-green-600" size={20} />
              ) : (
                <button
                  className="rounded text-xs font-semibold bg-green-100 px-2 py-1 text-green-500 "
                 
                >
                  Mark Collected
                </button>
              )}
            </td>
            <td className="px-6 py-3 ">
              {order.status === "DELIVERED" ? (
                <HiCheck className=" font-bold text-green-600" size={20} />
              ) : (
                <button
                  className="rounded text-xs font-semibold bg-red-100 px-2 py-1 text-red-400 "
                  
                >
                  Mark Delivered
                </button>
              )}
            </td>

            <td className="px-6 py-3">
              <AdminOrderModal order={order as Order} />{" "}
            </td>
          </tr>
        ))}
      </tbody>
        </table>
    
    </TableWrapper>
  );
};

export default AdminOrderTable;