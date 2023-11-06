import { useState } from "react";
import { HiBuildingLibrary } from "react-icons/hi2";
import Image from "next/image";

import { GiScooter } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

import { HiLocationMarker } from "react-icons/hi";
import { UserOrderCollected, UserOrderPreparing } from "./ViewUserOrderStatus";
import Modal from "@/app/components/Common/Modal";
import AppMap from "@/app/components/Common/AppMap";
import { Order, User } from "@prisma/client";

type Props = {
  order: Order;
  
};
const UserOnDeliveryModal = ({ order }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        className="flex justify-between p-1 items-center rounded-md bg-slate-50  text-slate-700"
        onClick={openModal}
      >
        <span className="flex items-center space-x-2 ">
          <GiScooter className=" animate-bounce " size={28} />
          <span>Order on the way</span>
        </span>

        <FaChevronRight className="shrink-0" />
      </button>

      <Modal
        isOpen={isOpen}
        title={`Order: ${order.orderNumber}`}
        closeModal={closeModal}
      >
        {order.status !== "DELIVERED" && <AppMap width={400} height={200} />}
        <div className="my-4">
          <h3 className="p-3">Delivery Details</h3>
          <ol className="relative border-l border-slate-200">
            <li className="mb-10 ml-6">
              <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ">
                <HiLocationMarker className="" />
              </div>

              <h5 className=" ">DPS Resto</h5>
              <p className="mb-1 text-sm font-normal leading-none ">
                {order.deliveryAddress}
              </p>
            </li>

            {order.status === "PREPARING" || order.status === "UNASSIGNED" ? (
              <UserOrderPreparing />
            ) : (
              <UserOrderCollected />
            )}

            <li className="mb-10 ml-6">
              <div className="absolute flex items-center justify-center w-6 h-6 bg-red-100 text-red-900 rounded-full -left-3 ">
                <HiBuildingLibrary className="" />
              </div>

              <h5 className=" ">Delivering To: </h5>
              <div className="flex items-center justify-between bg-red-100 text-red-950 p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/humans/h1.jpg"
                    className="rounded-full"
                    alt="driver"
                    width={30}
                    height={30}
                  />
                  <div className="space-y-2">
                    <h6>{order?.userName}</h6>
                    <p className="mb-1 text-xs font-normal leading-none ">
                      {order.deliveryAddress}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </Modal>
    </>
  );
};

export default UserOnDeliveryModal;
