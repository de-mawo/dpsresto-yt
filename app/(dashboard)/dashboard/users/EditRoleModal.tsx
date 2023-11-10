"use client";


import Modal from "@/app/components/Common/Modal";
import {  useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import EditRoleForm from "./EditRoleForm";
import { User } from "@prisma/client";

type Props = {
    user: User
}


const EditRoleModal = ({user}: Props) => { 
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <HiOutlinePencilSquare
        onClick={openModal}
        className="cursor-pointer h-6 w-6"
      />
      <Modal isOpen={isOpen} closeModal={closeModal} title="Edit Role" >
        <EditRoleForm user={user} />
      </Modal>
    </>
  );
};

export default EditRoleModal;