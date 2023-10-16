"use client";
import { useState } from "react";
import {
  HiChevronDown,
  HiClock,
  HiMapPin,
  HiStar,
} from "react-icons/hi2";
import Modal from "../Common/Modal";
import { Disclosure } from "@headlessui/react";

const RestaurantDetailsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openingTimes = [
    { day: "Monday", times: "09:00hrs - 17:00hrs" },
    { day: "Tuesday", times: "09:00hrs - 17:00hrs" },
    { day: "Wednesday", times: "09:00hrs - 17:00hrs" },
    { day: "Thursday", times: "09:00hrs - 17:00hrs" },
    { day: "Friday", times: "12:00hrs - 00:00hrs" },
    { day: "Saturday", times: "09:00hrs - 22:00hrs" },
    { day: "Sunday", times: "13:00hrs - 21:00hrs" },
  ];
  return (
    <>
      <button
        className="underline text-lg text-green-700 cursor-pointer font-semibold"
        onClick={openModal}
      >
        More Info
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="flex flex-col space-y-5">
          <div></div>
          <div>
            <h1 className="text-3xl">DPS Resto</h1>
          </div>
          <div className="flex items-center ">
            <HiMapPin className="shrink-0 mr-2" size={26} />
            <span>27 BrickField Road, Darwin , Australia </span>
          </div>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between   focus:outline-none ">
                  <div className="flex items-center">
                    <HiClock className="shrink-0 mr-2" size={26} />
                    <p className="mx-1 ">Opening Times:</p>
                  </div>
                  <HiChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5  `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                  {openingTimes.map((openT) => (
                    <div
                      className="flex items-center justify-between"
                      key={openT.day}
                    >
                      <p className="shrink-0 ">{openT.day}</p>
                      <p className="mx-1 "> {openT.times}</p>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="flex items-center ">
            <HiStar className="shrink-0 mr-2" size={26} />
            <p className="mx-1 "> 4.5 rating </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RestaurantDetailsModal;