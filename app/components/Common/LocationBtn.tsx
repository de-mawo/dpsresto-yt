

"use client";

import {  useEffect, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import LocationSearchForm from "./LocationSearchForm";
import Modal from "./Modal";

const LocationBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [retrievedAddress, setRetrievedAddress] = useState<string | null>('')

  useEffect(() => {
    const retrievedAddress = localStorage?.getItem("delivery_address");
    setRetrievedAddress(retrievedAddress)
  }, [])
  

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setShowChange(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`flex items-center px-4 py-2 bg-slate-200 rounded-full md:max-w-sm  md:rounded-lg`}
      >
        {" "}
        <HiMapPin className="shrink-0 text-green-600" />{" "}
        <span className="h-2 w-2 mx-2 bg-gray-600 shrink-0 rounded-full hidden md:block ">
          {" "}
        </span>{" "}
        <span
          className={
            "truncate max-w-[8rem]  text-sm text-gray-500 md:max-w-[12rem]"
          }
        >
          {retrievedAddress ? retrievedAddress : "Enter Delivery Address"}
        </span>
        <FaChevronRight className=" shrink-0 text-green-600" />
      </button>

      <Modal title="Delivery Address" isOpen={isOpen} closeModal={closeModal}>
        {showChange ? (
          <div className="mt-2">
            <LocationSearchForm />
          </div>
        ) : (
          <div className="flex items-center mt-8 justify-between">
            <div>
              <p className="truncate max-w-[10rem] md:max-w-xs">
                {retrievedAddress ? retrievedAddress : "Click change..."}
              </p>{" "}
            </div>

            <div>
              {" "}
              <button
                className="px-4 py-1 text-slate-600 bg-green-100 hover:bg-green-200 border border-green-500 focus-visible:ring-2 rounded-full"
                onClick={() => setShowChange(true)}
              >
                Change
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 mx-12">
          <button
            type="submit"
            className="px-4 py-1 w-full text-white bg-green-600 hover:bg-green-500 border border-green-600 focus-visible:ring-2 rounded-full"
            onClick={closeModal}
          >
            Done
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LocationBtn;