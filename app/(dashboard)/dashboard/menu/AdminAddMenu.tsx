import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiPlus } from "react-icons/hi2";

import { categoriesData } from "@/data/categories-data";
import Modal from "@/app/components/Common/Modal";
import UploadImg from "../Components/UploadImg";

const AdminAddMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [longDescr, setLongDescr] = useState("");
  const [shortDescr, setShortDescr] = useState("");
  const [price, setPrice] = useState(0);
  const [prepType, setPrepType] = useState<string[]>([]);
  //   const [image, setImage] = useState("");

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  const [preparationInput, setPreparationInput] = useState("");

  const addPreparation = () => {
    const tempData = prepType;
    tempData.push(preparationInput);
    setPrepType(prepType);
    setPreparationInput("");
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
        Add Menu
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
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-input"
                placeholder="$"
                value={price}
                onChange={(e) => setPrice(e.target.valueAsNumber)}
              />
            </div>
            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                id="category"
                className="form-input"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                {categoriesData.map((cat) => (
                  <option key={cat.id}>{cat.category}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="form-label">
                Long Description
              </label>
              <textarea
                id="description"
                rows={2}
                className="form-input"
                placeholder="Long description here"
                value={longDescr}
                onChange={(e) => setLongDescr(e.target.value)}
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="form-label">
                Short Description
              </label>
              <textarea
                id="description"
                rows={2}
                className="form-input"
                placeholder="Short description here"
                value={shortDescr}
                onChange={(e) => setShortDescr(e.target.value)}
              ></textarea>
            </div>
            <div className=" sm:col-span-2">
              <label htmlFor="price" className="form-label ">
                Preparation Types
              </label>

              <div className="flex  sm:col-span-2">
                <input
                  type="text"
                  className="form-input"
                  value={preparationInput}
                  onChange={(e) => setPreparationInput(e.target.value)}
                  placeholder="Enter text"
                />
                <button
                  type="button"
                  className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                  onClick={addPreparation}
                >
                  Add
                </button>
              </div>
            </div>
            {prepType.length ? (
              <ul className="list-none flex flex-wrap space-x-2">
                {prepType.map((value, index) => {
                  return (
                    <li key={index} className="">
                      <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-0.5 rounded">
                        {value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <UploadImg />

          <button
            type="submit"
            className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-4 
                       font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <HiPlus className="mr-1 -ml-1 w-4 h-4" fill="currentColor" />
            Add Menu
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AdminAddMenu;
