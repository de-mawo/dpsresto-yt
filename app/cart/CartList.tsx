"use client";

import { CartData } from "@/data/cart-data";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";

const CartList = () => {
  return (
    <div className="">
      <p>Your Items</p>

      {CartData?.map((item) => (
        <div className="flex justify-between items-center mt-3" key={item.id}>
          <div className="flex space-x-3 border rounded-full px-2 ">
            <button>
              <HiOutlineMinus />
            </button>
            <p> {item.quantity}</p>
            <button>
              <HiOutlinePlus />
            </button>
          </div>
          <div className="px-3">
            <p>
              {" "}
              <span className="text-sm">{item.shortDescr}: </span>{" "}
              <span className="text-xs italic">({item.instructions}) </span>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <p>{item.price} </p>
            <HiOutlineTrash className="cursor-pointer text-green-700" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
