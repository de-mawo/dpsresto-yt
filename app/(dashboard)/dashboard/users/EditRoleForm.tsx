"use client";

import { User } from "@prisma/client";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { HiUser } from "react-icons/hi2";

type Props = {
    user: User
}

const EditRoleForm = ({user}: Props) => {
  const ROLES = ["USER", "ADMIN", "DELIVERY"];

  const [role, setRole] = useState(ROLES[0]);
  const [showChangeRole, setShowChangeRole] = useState(false);

  return (
    <>
      <div className="my-8 space-y-4 ">
        <div>
          <label htmlFor="surname" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="formInput"
            placeholder="Email"
            value={user.email as string}
            disabled
          />
        </div>
        <div className="flex mt-5">
          <input
            className="w-6 h-6 text-slate-900 bg-slate-100 rounded focus:outline-none "
            type="checkbox"
            checked={showChangeRole}
            onChange={(e) => {
              setShowChangeRole(e.target.checked);
            }}
          />
          <div className="flex ml-3">
            {" "}
            <HiUser className="mr-2 h-5 w-5 text-green-700" />{" "}
            <span className="text-slate-400">Change Role</span>{" "}
          </div>
        </div>

        {showChangeRole ? (
          <div>
            <label htmlFor="brand" className="form-label">
              User Type
            </label>

            <div className="relative inline-block w-full">
              <select
                id="leave-type"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="block w-full rounded-md appearance-none bg-white border
                 border-green-400 px-4 py-2 pr-8 leading-tight  focus:outline-none  "
              >
                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                <GoChevronDown className="dark:text-gray-300" />
              </div>
            </div>

            <button type="button" className="mt-4 form-button">
              Change Role
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EditRoleForm;
