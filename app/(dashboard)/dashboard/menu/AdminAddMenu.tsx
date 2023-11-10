import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { HiPlus } from "react-icons/hi2";
import { useMutation } from "@urql/next";
import toast from "react-hot-toast";
import { CustomCategory } from "@/types";
import { SupabaseImageUpload } from "@/lib/supabaseStorage";
import { AddMenuDocument, AddMenuMutation, AddMenuMutationVariables } from "@/graphql/generated";
import Modal from "@/app/components/Common/Modal";
import { categoriesData } from "@/data/categories-data";
import UploadImg from "../Components/UploadImg";

const AdminAddMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [longDescr, setLongDescr] = useState("");
  const [shortDescr, setShortDescr] = useState("");
  const [price, setPrice] = useState(0);
  const [prepType, setPrepType] = useState<string[]>([]);
  const [image, setImage] = useState("");

  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  const clearForm = async () => {
    setTitle("");
    setCategory("");
    setLongDescr("");
    setShortDescr("");
    setPrice(0);
    setPrepType([""]);
    setImage("");
  };

  const [preparationInput, setPreparationInput] = useState("");

  const addPreparation = () => {
    const tempData = prepType;
    tempData.push(preparationInput);
    setPrepType(prepType);
    setPreparationInput("");
  };
  // A callback function to get the file from the child UploadImg which will be used by SupabaseImage Upload func
  const getMenuImageFile = async (file: File) => {
    try {
      const res = await SupabaseImageUpload(file);
      if (res) {
        setImage(res);
      }
    } catch (error) {
      toast.error(`Error uploading image: ${error}`, { duration: 3000 });
    }
  };

  const [_, addMenu] = useMutation<AddMenuMutation, AddMenuMutationVariables>(
    AddMenuDocument
  );

  const handleAddMenu = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = [
      image,
      title,
      category,
      shortDescr,
      prepType,
      price,
    ];

    if (requiredFields.some((field) => !field)) {
      toast.error("Please fill in all required fields", { duration: 3000 });
      return;
    }

    try {
      const res = await addMenu({
        image,
        title,
        category,
        longDescr,
        shortDescr,
        prepType,
        price,
      });

      if (res.data?.addMenu) {
        toast.success("Menu Added Successfully", { duration: 1000 });
        await clearForm();
        setTimeout(closeModal, 3000);
        router.refresh();
      } else {
        toast.error("An error occurred", { duration: 1000 });
      }
    } catch (error) {
      console.error("Error adding menu:", error);
      toast.error("An error occurred", { duration: 1000 });
    }
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
        <form onSubmit={handleAddMenu}>
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
                  <option key={cat.id}>{cat.title}</option>
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

          <UploadImg handleCallBack={getMenuImageFile} id="addAdminMenu" />

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