import { NotifyData } from "@/data/notify-data";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import {
   HiOutlineBellAlert,
} from "react-icons/hi2";

export default function NotificationDropDown() {
  return (
   
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="relative p-2 bg-slate-200 rounded-full text-gray-500 hover:bg-green-200 hover:text-green-600">
            <span className="absolute top-1 right-0 z-1 h-3 w-3 rounded-full bg-green-500 inline">
              <span className="absolute -z-1 inline-flex h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></span>
            </span>
            <HiOutlineBellAlert className="h-7 w-7 pr-1 " />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="text-center py-3">
              {" "}
              <h3> Notifications</h3>{" "}
            </div>
            <div className="pl-3  overflow-y-auto  h-60 overflow-x-hidden scrollbar-hide">
              {NotifyData.map((message) => (
                <Menu.Item key={message.id}>
                  <Link href="/dashboard/notifications" className="">
                    <p className="border-t py-3 hover:bg-slate-100">
                      <span>{message.type}: </span>{" "}
                      <span className="text-xs text-slate-500 truncate">
                        {message.message}
                      </span>{" "}
                      <span className="text-xs text-green-600">
                        {message.time}
                      </span>{" "}
                    </p>
                  </Link>
                  {/*  */}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
   
  );
}