import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const PriceDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const priceRange = ["0 - 5", "6 - 10", "11 - 15", "15+"];
  return (
    <div className="relative inline-block bg-white  hover:block cursor-pointer ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:w-auto flex items-center justify-center py-2 px-4 text-sm  text-gray-900 focus:outline-none bg-white  border-b-2 border-gray-400 hover:bg-gray-100 hover:text-green-700"
      >
        Price
        <HiChevronDown className="ml-1 mr-1.5 w-5 h-5" />
      </button>
      {isOpen && (
        <div className=" absolute  mt-2 -mr-1 w-56 bg-white rounded-md shadow-lg z-10 ">
          <div className="text-center py-3">
            {" "}
            <h3> Filter by Price</h3>{" "}
          </div>
          <ul className="space-y-2 text-sm p-3">
            {priceRange.map((range, index) => (
              <li className="flex items-center" key={index}>
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-green-600 bg-gray-100  border-gray-300 rounded focus:ring-green-500 "
                />

                <label
                  htmlFor="price-range"
                  className="ml-2 text-sm font-medium text-gray-600 "
                >
                  ${range}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PriceDropDown;