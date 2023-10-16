


import { HiMapPin } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";

const LocationBtn = () => {
  return (
    <>
      <button
        className="flex items-center px-4 py-2 bg-slate-200 rounded-full md:max-w-sm  md:rounded-lg"
      >
        <HiMapPin className="shrink-0 text-green-600" />
        <span className="h-2 w-2 mx-2 bg-gray-600 shrink-0 rounded-full hidden md:block "> </span>
        <span className="truncate max-w-[8rem]  text-sm text-gray-500 md:max-w-[12rem]" >
          9/13 Hay St, Haymarket NSW 2000, Australia
        </span>
        <FaChevronRight className=" shrink-0 text-green-600" />
      </button>
    </>
  );
};

export default LocationBtn;
