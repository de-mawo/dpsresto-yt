import Image from "next/image";
import { HiPhone } from "react-icons/hi2";

export const UserOrderPreparing = () => {
  return (
    <li className="mb-10 ml-6">
      <div className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></span>
      </div>
      <h5 className=" ">Order is Being Prepared</h5>
      <div className="flex items-center justify-between bg-blue-100 p-2 rounded-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/img/objects/chef.png"
            className="rounded-full"
            alt="chef"
            width={30}
            height={30}
          />
          <div>
            <h6>Chef: Manuel</h6>
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
  );
};

export const UserOrderCollected = () => {
  return (
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
  );
};
