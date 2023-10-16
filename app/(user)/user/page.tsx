import { HiHome, HiOutlineChevronLeft } from "react-icons/hi2";

import Link from "next/link";
import UserDetails from "./UserDetails";
import UserData from "./UserData";
import UserPrefs from "./UserPrefs";


export default async function  User  ()  {


  return (
    <div className="flex flex-col items-center justify-center   py-8 px-6 mb-24">
      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center
           bg-green-600 text-lg   px-4 py-1 text-white 
            border border-green-500 space-x-2 rounded-full
             hover:text-green-700 hover:bg-green-200  "
        >
          <HiOutlineChevronLeft/>
          <span>Back to Home</span>
          <HiHome size={20} />
        </Link>
      </div>
      <div className="w-full  rounded-lg shadow-xl max-w-md   py-4">
        <h2 className="text-lg text-center py-5 md:text-2xl lg:text-3xl  leading-tight tracking-tight text-gray-600 sm:text-4xl ">
          My Profile
        </h2>
        <UserDetails  />
        <UserData  />
        <UserPrefs />
      </div>
    </div>
  );
};

