import { useState } from "react";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi2";
import Modal from "@/app/components/Common/Modal";
import { Menu } from "@prisma/client";


type Props = {
  menu: Menu;
};

const AdminPreviewMenu = ({ menu }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  return (
    <>
      <HiOutlineEye
        onClick={OpenModal}
        className="cursor-pointer h-6 w-6 text-slate-700"
      />

      <Modal isOpen={isOpen} closeModal={closeModal} title={menu.title}>
        <div className="relative">
          <Image
            src={menu.image}
            alt="chefy"
            width={360}
            height={200}
            className="h-56 w-full object-cover rounded-t-lg "
          />
        </div>
        <div className="my-2">
          <h3 className="font-semibold text-gray-600">Price:</h3>
          <p className=" text-green-600 font-semibold">${menu.price}</p>
        </div>
        <div className="my-2">
          <h3 className="font-semibold text-gray-600">Long Description:</h3>
          <p className="text-sm text-gray-400">{menu.longDescr}</p>
        </div>
        <div className="my-2">
          <h3 className="font-semibold text-gray-600">Short Description:</h3>
          <p className="text-sm text-gray-400">{menu.shortDescr}</p>
        </div>

        <div className="my-4">
          <h3 className="font-semibold text-gray-600">Category:</h3>
          <p className="text-gray-400 mb-3">{menu.category} </p>
        </div>
      </Modal>
    </>
  );
};

export default AdminPreviewMenu;