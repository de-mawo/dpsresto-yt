"use client";

import Image from "next/image";
import { UsersData } from "@/data/users-data";
import TableWrapper from "../Components/TableWrapper";
import EditRoleModal from "./EditRoleModal";
import { User } from "@prisma/client";

const AdminUserTable = () => {
  return (
    <TableWrapper title="All Users">
      <table className="w-full border    text-left  text-slate-500 ">
        <thead className=" text-xs  overflow-x-auto whitespace-nowrap text-slate-700 uppercase bg-slate-100  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Avatar
            </th>
            <th scope="col" className="px-6 py-3  ">
              Name
            </th>

            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              role
            </th>

            <th scope="col" className="px-6 py-3">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {UsersData.map((user) => (
            <tr className="bg-white " key={user.id}>
              <td className="px-6 py-2">
                {" "}
                <Image
                  src={user.img}
                  width={50}
                  height={50}
                  alt="avatar"
                  className="rounded-full object-cover"
                />{" "}
              </td>
              <td className="px-6 py-2">{user.name} </td>
              <td className="px-6 py-2">{user.email} </td>
              <td className="px-6 py-2">{user.role}</td>
              <td className="px-6 py-2 whitespace-nowrap">
                <EditRoleModal user={user as unknown as User} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default AdminUserTable;