import { useState } from "react";
import Image from "next/image";
import { HiPlus, HiStar } from "react-icons/hi";
import { DriversData } from "@/data/deliveries-data";
import Modal from "@/app/components/Common/Modal";


const AssignDriver = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button
        className="px-3 py-1 rounded-full text-sm bg-orange-400 text-white"
        onClick={openModal}
      >
        Assign Driver
      </button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title="Assign Delivery Driver"
      >
        {DriversData.map((driver) => (
          <div className="flex items-center p-3 border-b justify-between" key={driver.id}>
            <div className="relative">
              <Image
                src={driver.img}
                width={50}
                height={50}
                alt="driver"
                className="rounded-full"
              />
              <div className="absolute w-12 h-12  top-[1.2px] left-8 -z-10 rounded-full">
                <Image
                  src={driver.vehicle}
                  width={46}
                  height={46}
                  alt="driver"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center  space-y-1">
              <h3>{driver.name}</h3>
              <p className="inline-flex text-sm items-center">
                {driver.status === "online" ? (
                  <span className="bg-green-600 h-3 w-3 rounded-full mr-2"></span>
                ) : (
                  <span className="bg-slate-600 h-3 w-3 rounded-full mr-2"></span>
                )}

                {driver.status}
              </p>
              <span className="inline-flex items-center p-1 text-xs bg-blue-100 text-blue-500 rounded-full">
                <HiStar className="mr-1" /> - Top Rated Driver
              </span>
            </div>
            {driver.status === "online" ? (
              <button className="flex  justify-center items-center p-1 w-12 h-12 cursor-pointer bg-blue-100 text-blue-500 rounded-full hover:bg-blue-300">
                <HiPlus size={24} />
              </button>
            ) : (
             <button></button>
            )
          }
          </div>
        ))}
      </Modal>
    </>
  );
};

export default AssignDriver;