import Image from "next/image";

import { HiOutlinePencil, HiOutlinePencilSquare } from "react-icons/hi2";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Modal from "@/app/components/Common/Modal";
import UploadImg from "../Components/UploadImg";
import { Category } from "@prisma/client";

type Props = {
  cat: Category;
};

const AdminEditCategory = ({ cat }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(cat.title);
  const [desc, setDesc] = useState(cat.desc);
  const [image, setImage] = useState(cat.img);

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  const getCategoryImgFile = async (file: File) => {
    console.log(file); 
  };


  return (
    <>
      <HiOutlinePencilSquare
        onClick={OpenModal}
        className="cursor-pointer h-6 w-6 text-green-600"
      />
      <Modal isOpen={isOpen} title={cat.title} closeModal={closeModal}>
        <form>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div className="sm:col-span-2 border-gray-300">
              <Image
                src={cat.img}
                alt="chefy"
                width={360}
                height={200}
                className="h-16 w-16 object-cover rounded-md "
              />
            </div>
            <div>
              <label htmlFor="name" className="form-label ">
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price" className="form-label ">
                Description
              </label>
              <input
                type="text"
                name="desc"
                id="desc"
                className="form-input"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>

          <UploadImg handleCallBack={getCategoryImgFile} id="editCategory" />

          <button
            type="submit"
            className="text-white inline-flex items-center bg-green-600
         hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <HiOutlinePencil
              className="mr-1 -ml-1 w-4 h-4"
              fill="currentColor"
            />
            Edit Category
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AdminEditCategory;
