import { HiPlus } from "react-icons/hi2";

import { useState } from "react";

import { useRouter } from "next/navigation";
import Modal from "@/app/components/Common/Modal";
import UploadImg from "../Components/UploadImg";

const AdminAddCategory = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);
  const getCategoryImgFile = async (file: File) => {
    console.log(file);
    
  };



  return (
    <>
      <button
        type="button"
        className="text-white inline-flex items-center whitespace-nowrap bg-green-600
         hover:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        onClick={OpenModal}
      >
        <HiPlus className="mr-1 -ml-1 w-4 h-4" />
        Add Category
      </button>
      <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
        <form>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
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

          <UploadImg handleCallBack={getCategoryImgFile} id="addCategory" />

          <button
            type="submit"
            className="text-white inline-flex items-center bg-green-600
         hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <HiPlus className="mr-1 -ml-1 w-4 h-4" fill="currentColor" />
            Add Category
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AdminAddCategory;
