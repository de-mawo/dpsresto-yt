"use client";

import { CartData } from "@/data/cart-data";
import { useCartStore } from "@/lib/store";
import toast from "react-hot-toast";
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";

const CartList = () => {
  const {menus, increaseCartItem, decreaseCartItem, deleteFromcart } = useCartStore()

  const handleRemoveFromCart = (id: string) => {
    deleteFromcart(id);
    toast.success("Item removed from Cart", { duration: 1000 });
  };


  return (
    <div className="">
      <p>Your Items</p>

      {menus &&
        menus?.map((item) => (
        <div className="flex justify-between items-center mt-3" key={item.id}>
          <div className="flex space-x-3 border rounded-full px-2 ">
            <button onClick={() => decreaseCartItem(menus, item.id)} disabled={item.quantity === 1 ? true : false}>
              <HiOutlineMinus />
            </button >
            <p> {item.quantity}</p>
            <button onClick={() => increaseCartItem(menus, item.id)}>
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
            <HiOutlineTrash className="cursor-pointer text-green-700"
            onClick={() => handleRemoveFromCart(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
