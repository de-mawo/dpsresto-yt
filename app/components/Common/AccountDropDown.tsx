import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import Image from "next/image";


export default function AccountDropDown() {
 
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="bg-slate-200 p-1  rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600">
            <Image
              src='/img/humans/h1.jpg'
              alt="avatar"
              width={30}
              height={30}
              className=" object-cover bg-white  rounded-full  dark:bg-slate-600"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-56 
          origin-top-right divide-y divide-gray-100 rounded-md
           bg-white shadow-lg ring-1 ring-black ring-opacity-5 
           focus:outline-none"
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex items-center py-4 pl-3 rounded-md text-gray-500 transition-all  hover:bg-green-200 hover:text-green-600 ">
                  <Image
                    src='/img/humans/h1.jpg'
                    alt="avatar"
                    width={30}
                    height={30}
                    className=" object-cover bg-white  rounded-full  dark:bg-slate-600"
                  />
                  <span className="pl-4 ">De Mawo </span>
                </div>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href="/user"
                  className="flex items-center py-4 pl-3 rounded-md text-gray-500 transition-all  hover:bg-green-200 hover:text-green-600"
                >
                  <HiOutlineUserPlus className="h-6 w-6 mr-4 shrink-0" />
                  <span className="pl-4 ">Profile </span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="flex items-center py-4 pl-3
                 w-full rounded-md text-gray-500 transition-all 
                  hover:bg-green-200 hover:text-green-600"
                
                >
                  <HiOutlineArrowRightOnRectangle className="h-6 w-6 mr-4 shrink-0" />
                  <span className="pl-4">Sign Out </span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}