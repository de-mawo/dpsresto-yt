import React, { useState } from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import Image from "next/image";
import { HiBuildingLibrary } from "react-icons/hi2";
import Modal from "@/app/components/Common/Modal";
import AppMap from "@/app/components/Common/AppMap";

const ViewDeliveryStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button className="px-3 py-1 rounded-full text-sm bg-red-600 text-white" onClick={openModal}>
        View
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Delivery Status">
        <AppMap width={400} height={200} />
        <div className="my-4">
          <h3 className="p-3">Delivery Details</h3>
          <ol className="relative border-l border-slate-200">
            <li className="mb-10 ml-6">
              <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ">
                <HiLocationMarker className="" />
              </div>

              <h5 className=" ">DPS Resto</h5>
              <p className="mb-1 text-sm font-normal leading-none ">
                26 Dublin Street, X215, Darwin
              </p>
            </li>
            <li className="mb-10 ml-6">
              <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3">
                <span className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></span>
              </div>
              <h5 className=" ">Order Collected</h5>
              <p className="text-xs">Received by</p>
              <div className="flex items-center justify-between bg-blue-100 p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/humans/h9.jpg"
                    className="rounded-full"
                    alt="driver"
                    width={30}
                    height={30}
                  />
                  <div>
                    <h6>Josie Macmillan</h6>
                    <a href="tel:+44756235-89" className="text-xs">
                      +44 756 235-89
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+44756235-89"
                  className="flex items-center justify-center w-8 h-8 rounded-md bg-white cursor-pointer"
                >
                  <HiPhone size={24} />
                </a>
              </div>
            </li>
            <li className="mb-10 ml-6">
              <div className="absolute flex items-center justify-center w-6 h-6 bg-red-100 text-red-900 rounded-full -left-3 ">
                <HiBuildingLibrary className="" />
              </div>

              <h5 className=" ">Delivering To: </h5>
              <div className="flex items-center justify-between bg-red-100 text-red-950 p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/humans/h7.jpg"
                    className="rounded-full"
                    alt="driver"
                    width={30}
                    height={30}
                  />
                  <div className="space-y-2">
                    <h6>Sammie L&apos;homme</h6>
                    <a href="tel:+44756235-89" className="text-xs">
                      +44 753 2399
                    </a>
                    <p className="mb-1 text-xs font-normal leading-none ">
                      88 Bulwer St,Perth, Western Australia
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+44756235-89"
                  className="flex items-center justify-center w-8 h-8 rounded-md bg-white cursor-pointer"
                >
                  <HiPhone size={24} />
                </a>
              </div>
            </li>
          </ol>
        </div>
      </Modal> 
    </>
  );
};

export default ViewDeliveryStatus;