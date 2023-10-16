"use client";

import { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import Modal from "@/app/components/Common/Modal";

const UserEditAccountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const closeModal = () => setIsOpen(false);
  const OpenModal = () => setIsOpen(true);

  return (
    <>
      <button
        className="flex items-center px-4 py-2 space-x-4 bg-green-600 text-white rounded-full"
        onClick={OpenModal}
      >
        <span>Edit Profile</span>
        <FaChevronRight className=" shrink-0" />
      </button>
      <Modal isOpen={isOpen} title="Account Info" closeModal={closeModal}>
        <form className="flex flex-col space-y-8 ">
          <div>
            <h2>Basic Info</h2>
          </div>
          <div className="flex flex-col space-y-8 ">
            <div className="">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                className="form-input"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="email" className="form-label">
                Name
              </label>
              <input
                className="form-input"
                placeholder="Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <HiPencil className="mr-1 -ml-1 w-4 h-4" fill="currentColor" />
            Add Profile
          </button>
        </form>
      </Modal>
    </>
  );
};

export default UserEditAccountModal;
