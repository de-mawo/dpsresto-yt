"use client";

import React, { useState } from "react";
import { MdOutlineQuestionMark } from "react-icons/md";

const RequestHelpForm = () => {
  const HelpType = [
    "Order Delivery",
    "Payment ",
    "Customer Service ",
    "Account Related ",
    "Other",
  ];

  const [helpType, SetHelpType] = useState("");
  const [descr, setDescr] = useState("");

  return (
    <form>
      <div className="flex flex-col space-y-8 ">
        <div className="">
          <label htmlFor="category" className="form-label">
            What kind of help do you need ?
          </label>
          <select
            id="helpType"
            className="form-input"
            onChange={(e) => SetHelpType(e.target.value)}
            value={helpType}
          >
            {HelpType.map((help) => (
              <option key={help}>{help}</option>
            ))}
          </select>
        </div>

        <div className="">
          <label htmlFor="description" className="form-label">
            Describe the issue
          </label>
          <textarea
            rows={2}
            className="form-input"
            placeholder="Describe the issue here"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        <MdOutlineQuestionMark
          className="mr-1 -ml-1 w-4 h-4"
          fill="currentColor"
        />
        Submit Query
      </button>
    </form>
  );
};

export default RequestHelpForm;