"use client";

import AssignDriver from "./AssignDriver";
import ViewDeliveryStatus from "./ViewDeliveryStatus";
import OrderDelivered from "./OrderDelivered";
import TableWrapper from "../Components/TableWrapper";
import { DeliveriesData } from "@/data/deliveries-data";

const DeliveriesTable = () => {
  return (
    <TableWrapper title="Deliveries">
      <table className="w-full     text-left  text-slate-500 ">
        <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order#
            </th>
            <th scope="col" className="px-6 py-3  ">
              Status
            </th>

            <th scope="col" className="px-6 py-3">
              Delivery Address
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {DeliveriesData.map((delivery) => (
            <tr className="bg-white " key={delivery.id}>
              <td className="px-6 py-2 whitespace-nowrap">
                {delivery.order_number}{" "}
              </td>
              <td className="px-6 py-2 ">
                {" "}
                <span
                  className={`p-1 rounded-md text-xs ${
                    (delivery.status === "unassigned" &&
                      "bg-orange-100 text-orange-600") ||
                    (delivery.status === "collected" &&
                      "bg-red-100 text-red-600") ||
                    (delivery.status === "delivered" &&
                      "bg-green-100 text-green-600")
                  }`}
                >
                  {delivery.status}
                </span>
              </td>
              <td className="px-6 py-2 whitespace-nowrap">
                {delivery.address}
              </td>
              <td className="px-6 py-2">{delivery.date}</td>
              <td className="px-6 py-2 whitespace-nowrap">
                {delivery.status === "unassigned" && <AssignDriver />}

                {delivery.status === "collected"  &&  <ViewDeliveryStatus />}
                {delivery.status === "delivered"  &&  <OrderDelivered />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default DeliveriesTable;