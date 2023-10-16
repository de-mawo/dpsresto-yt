import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { TbReceipt } from "react-icons/tb";

const UserData = () => {
  return (
    <div className="flex flex-col mt-3 space-y-4">
      <div className="p-2 bg-slate-100">
        <h2 className="text-gray-500  font-medium">CONTENT</h2>
      </div>
      <Link
        href="/user/favorites"
        className="flex items-center justify-between p-2 text-gray-500"
      >
        <div className="flex items-center">
          <AiOutlineHeart size={28} className="mr-3" />
          <h3 className="text-lg font-medium">Favorites</h3>
        </div>

        <FaChevronRight className="shrink-0" />
      </Link>
      <Link
        href="/user/orders"
        className="flex items-center justify-between p-2 text-gray-500"
      >
        <div className="flex items-center">
          <TbReceipt size={28} className="mr-3" />
          <h3 className="text-lg font-medium">Orders</h3>
        </div>

        <FaChevronRight className="shrink-0" />
      </Link>
    </div>
  );
};

export default UserData;