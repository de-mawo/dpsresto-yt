
import { Menu } from "@prisma/client";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";

type Props = {
  favorite: Menu;
  OpenModal: () => void
};

const FavoriteCard = ({ favorite, OpenModal }: Props) => {
  return (
    <div className="flex items-center justify-around shadow-lg p-3 rounded-lg">
      <div className="w-16 h-16 overflow-hidden  rounded-full">
        <Image
          src={favorite.image}
          alt="logo"
          width={70}
          height={70}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="pl-4 font-semibold ">{favorite.title}</span>
        <p className="pl-4 text-xs">
          Category: <span className=" italic text-gray-500">{favorite.category}</span>
        </p>
        
        <p className="pl-4 text-xs">
          Price: <span className="font-semibold  text-green-600">${favorite.price}</span>
        </p>
      </div>
      <button className="p-2 rounded-full bg-slate-200 hover:bg-green-200 hover:text-green-500" onClick={OpenModal}>
      <FaCartArrowDown className=" text-green-600" size={28} />
      </button>
    </div>
  );
};

export default FavoriteCard;