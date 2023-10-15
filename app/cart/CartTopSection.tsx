import Link from "next/link";
import Image from "next/image";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const CartTopSection = () => {
  return (
    <div>
      <Link href={"/"} className="flex  justify-center">
        <button className="bg-slate-200 p-4 rounded-full hover:bg-green-200">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="mx-auto   "
          />
        </button>
      </Link>

      <h1 className="text-xl text-center my-5  leading-tight tracking-tight text-gray-500 md:text-2xl ">
        Cart
      </h1>
      <div className="mb-8">
        <Link
          href="/"
          className="flex items-center justify-center bg-green-600 text-lg   px-4 py-1 text-white  border border-green-500 space-x-2 rounded-full hover:text-green-700 hover:bg-green-200  "
        >
          <HiOutlineChevronLeft /> <span>Back to Menu</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CartTopSection;