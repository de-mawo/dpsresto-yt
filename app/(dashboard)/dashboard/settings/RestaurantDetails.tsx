"use client";
import { useState } from "react";
import Image from "next/image";

import { HiPencil } from "react-icons/hi2";
import UploadImg from "../Components/UploadImg";

const RestaurantDetails = () => {
  const [image, setImage] = useState("");

  return (
    <>
      <div className="flex items-center justify-center  p-4 text-2xl  text-slate-700 bg-white">
        <h2>Edit Restaurant Details </h2>
        <HiPencil />
      </div>

      <form className="grid w-full px-4 py-8 gap-4 md:grid-cols-2 bg-white ">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div className="sm:col-span-2 border-gray-300">
            <Image
              src="/img/banner.jpg"
              alt="chefy"
              width={360}
              height={200}
              className="h-32 w-full object-cover rounded-md "
            />
          </div>
          <div>
            <label htmlFor="name" className="form-label ">
              Name
            </label>
            <input type="text" name="name" id="name" className="form-input" />
          </div>
          <div>
            <label htmlFor="price" className="form-label ">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="serviceFee" className="form-label ">
              Service Fee
            </label>
            <input type="number" name="serviceFee" className="form-input" />
          </div>
          <div>
            <label htmlFor="deliveryFee" className="form-label ">
              Delivery Fee
            </label>
            <input type="number" name="deliveryFee" className="form-input" />
          </div>
        </div>
        <div>
          <UploadImg id="restDetails" />
        </div>

        <div className="">
          <button
          type="submit"
            className="py-2 px-4 
              border border-transparent shadow-sm text-sm font-medium rounded-md
               text-white bg-green-600 hover:bg-green-700 focus:outline-none 
               focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Save Restaurant Details
          </button>
        </div>
      </form>
    </>
  );
};

export default RestaurantDetails;
