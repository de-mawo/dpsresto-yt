import { useState } from "react";
import MenuCard from "./MenuCard";
import Modal from "../Common/Modal";
import Image from "next/image";
import FavoritesBtn from "../Common/FavoritesBtn";
import { Disclosure } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";

type Props = {
  menu: Menu;
  user: User
};

const MenuModal = ({ menu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <MenuCard menu={menu} openModal={openModal} />
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <div className="relative">
          <Image
            src={menu.image}
            width={360}
            height={200}
            alt="menu-img"
            className="h-56 w-full object-cover rounded-t-lg"
          />
          <div
            className="absolute -top-[10px] -left-[15px] w-12 h-12 
      rounded-full bg-white
      "
          >
            <FavoritesBtn />
          </div>
        </div>
        <div className="mt-2">
            <p className="text-sm text-gray-500">{menu.longDescr}</p>
        </div>
        {menu.prepType && ( 
        <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-green-900  focus:outline-none ">
                  <span> Preparation</span>
                  <HiChevronDown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5  text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                  {menu.prepType?.map((prep, index) => (
                    <div key={index} className="flex my-2">
                      <input
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
            <input type="text" className="w-full h-16 rounded bg-green-50 border border-green-500 focus:outline-none focus-visible:ring-green-500" />
          </div>
          <div className="mt-4">
            <button className="form-button">
                Add to Cart :$ {menu.price}
            </button>
          </div>

      </Modal>
    </>
  );
};

export default MenuModal;
