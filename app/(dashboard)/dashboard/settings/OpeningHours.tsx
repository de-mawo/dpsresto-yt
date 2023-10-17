"use client";
import { useState } from "react";

type OpeningHours = {
  day: string;
  openingTime: string;
  closingTime: string;
};

const OpeningHoursForm = () => {
  const [openingHours, setOpeningHours] = useState<OpeningHours[]>([]);
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleTimeChange = (
    day: string,
    field: "openingTime" | "closingTime",
    value: string
  ) => {
    const updatedOpeningHours = [...openingHours];
    const index = updatedOpeningHours.findIndex((oh) => oh.day === day);

    if (index !== -1) {
      updatedOpeningHours[index][field] = value;
    } else {
      updatedOpeningHours.push({ day, openingTime: "", closingTime: "" });
      updatedOpeningHours[updatedOpeningHours.length - 1][field] = value;
    }

    setOpeningHours(updatedOpeningHours);
  };

  const saveOpeningHours = () => {
    console.log(openingHours);
  };

  return (
    <section className="py-16 px-4 space-y-3 bg-white">
      <div className="text-center ">
        <h2 className="text-2xl py-4 leading-tight tracking-tight text-gray-600 ">
          Opening Hours
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {daysOfWeek.map((day) => (
          <div key={day}>
            <div className="text-center font-semibold">
              <label>{day}:</label>
            </div>
            <div className="space-x-2 py-2">
              <span>Opening Time:</span>

              <input
                type="time"
                name="ct"
                id="op"
                onChange={(e) =>
                  handleTimeChange(day, "openingTime", e.target.value)
                }
                className=" rounded-md border border-slate-300 bg-white py-2 px-6 text-base font-medium text-gray-600 outline-none focus:border-green-600 focus:shadow-md"
              />
            </div>
            <div className="space-x-2">
              <span className=" mr-2">Closing Time:</span>

              <input
                type="time"
                name="ct"
                id="ct"
                onChange={(e) =>
                  handleTimeChange(day, "closingTime", e.target.value)
                }
                className=" rounded-md border border-slate-300 bg-white py-2 px-6 text-base font-medium text-gray-600 outline-none focus:border-green-600 focus:shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        className="py-2 px-4 
              border border-transparent shadow-sm text-sm font-medium rounded-md
               text-white bg-green-600 hover:bg-green-700 focus:outline-none 
               focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        onClick={saveOpeningHours}
      >
        Save Opening Hours
      </button>
    </section>
  );
};

export default OpeningHoursForm;