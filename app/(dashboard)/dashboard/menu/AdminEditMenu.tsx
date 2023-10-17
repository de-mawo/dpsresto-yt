import {  useState } from "react";
import Image from "next/image";
import { HiOutlinePencil, HiOutlinePencilSquare } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { categoriesData } from "@/data/categories-data";
import Modal from "@/app/components/Common/Modal";
import UploadImg from "../Components/UploadImg";

type Props = {
  menu: Menu;
};

const AdminEditMenu = ({ menu }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(menu.title);
  const [category, setCategory] = useState(menu.category);
  const [longDescr, setLongDescr] = useState(menu.longDescr);
  const [shortDescr, setShortDescr] = useState(menu.shortDescr);
  const [price, setPrice] = useState(menu.price);
  const [prepType, setPrepType] = useState<string[]>([]);
  const [image, setImage] = useState(menu.image);
  // const [onPromo, setOnPromo] = useState(false)

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
      <HiOutlinePencilSquare
        onClick={OpenModal}
        className="cursor-pointer h-6 w-6 text-green-600"
      />
      <Modal isOpen={isOpen} title={title} closeModal={closeModal}>
        <form >
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div className="sm:col-span-2 border-gray-300">
              <Image
                src={menu.image}
                alt="chefy"
                width={360}
                height={200}
                className="h-32 w-full object-cover rounded-md "
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
            <div>
              <label htmlFor="onPromo" className="form-label">
                Promo?
              </label>
              <input
                type="checkbox"
                className="w-6 h-6 accent-green-600  rounded focus:ring-green-500"
              />
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

          <UploadImg  />

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
            Edit Menu
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AdminEditMenu;