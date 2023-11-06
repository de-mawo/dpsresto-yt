"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import Modal from "@/app/components/Common/Modal";
import FavoritesBtn from "@/app/components/Common/FavoritesBtn";
import FavoriteCard from "./FavoriteCard";
import { Menu, User } from "@prisma/client";
import { useCartStore } from "@/lib/store";
import toast from "react-hot-toast";


type Props = {
  favorite: Menu;
 user: User
};

const FavoriteModal = ({ favorite, user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prepare, setPrepare] = useState("");
  const [instructions, setInstructions] = useState("");

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  const { addToCart } = useCartStore();

  const MenuToAdd = { ...favorite, quantity: 1, prepare, instructions };

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const PutItemsInCart = () => {
    addToCart(MenuToAdd);
    toast.success("Menu Added to Cart", { duration: 4000 });
    setTimeout(closeModal, 2000);
  };


  return (
    <>
      <FavoriteCard favorite={favorite} OpenModal={OpenModal} /> 
      <Modal isOpen={isOpen} title={favorite.title} closeModal={closeModal}>
        <div className="relative">
          <Image
            src={favorite.image}
            alt="chefy"
            width={360}
            height={200}
            className="h-56 w-full object-cover rounded-t-lg "
          />
         <div
            className="absolute -top-[10px] -left-[15px] w-12 h-12 
      rounded-full bg-white
      "
          >
            <FavoritesBtn menuId={favorite.id} user={user}/>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{favorite.longDescr}</p>
        </div>

        {favorite.prepType && (
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className="flex w-full justify-between rounded-lg
               bg-gray-100 px-4 py-2 text-left text-sm font-medium text-green-900  focus:outline-none "
                >
                  <span> Preparation</span>
                  <HiChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5  text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                  {favorite.prepType?.map((prep, index) => (
                    <div key={index} className="flex my-2">
                      <input
                        checked={prepare === prep}
                        onChange={(e) => setPrepare(prep)}
                        className="w-6 h-6 text-green-600 bg-gray-100 rounded border-green-500 focus:ring-green-500  focus:ring-2 "
                        type="checkbox"
                      />
                      <span className="ml-3">{prep}</span>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )}

        <div className="mt-4">
          <p className="text-center mb-3">Special Instructions</p>
          <input
            onChange={(e) => setInstructions(e.target.value)}
            type="text"
            className="w-full h-24 rounded bg-green-50 border border-green-500
           focus:border-green-500  focus:outline-none focus-visible:ring-green-500 "
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="form-button"
            onClick={PutItemsInCart}
          >
            Add to Cart :${favorite.price}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FavoriteModal;