"use client";
import React, { useState } from "react";
import { TbLetterO, TbLetterQ, TbLetterS } from "react-icons/tb";
import { NotifyData } from "@/data/notify-data";

const NotificationsList = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const isTabActive = (tab: string) => {
    return activeTab === tab;
  };

  return (
    <>
      <section className="mt-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 items-center">
          <h1 className="text-lg text-center md:text-3xl">Notifications</h1>
          <div className="flex justify-center">
            <button className="text-green-600 p-2 rounded-md hover:bg-green-200">
              Mark all as read
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-3 border-b p-2">
          <button
            className={`p-1  ${
              isTabActive("all") &&
              "border-b-2 border-green-600 text-green-700 bg-green-50"
            }`}
            onClick={() => handleTabChange("all")}
          >
            All
          </button>
          <button
            className={`p-1  ${
              isTabActive("read") &&
              "border-b-2 border-green-600 text-green-700 bg-green-50"
            }`}
            onClick={() => handleTabChange("read")}
          >
            Read
          </button>
          <button
            className={`p-1  ${
              isTabActive("unread") &&
              "border-b-2 border-green-600 text-green-700 bg-green-50"
            }`}
            onClick={() => handleTabChange("unread")}
          >
            Unread
          </button>
        </div>
        <div className="p-4 max-h-[80vh] space-y-3 overflow-y-auto scrollbar-hide">
          {NotifyData.map((message) => (
            <div className="flex items-center space-x-2" key={message.id}>
              <div>
                <button
                  className={`p-2 text-white rounded-full ${
                    (message.type === "Signup" && "bg-purple-700") ||
                    (message.type === "Order" && "bg-green-700") ||
                    (message.type === "Query" && "bg-orange-700")
                  } `}
                >
                  {message.type === "Signup" && <TbLetterS size={28} />}
                  {message.type === "Query" && <TbLetterQ size={28} />}
                  {message.type === "Order" && <TbLetterO size={28} />}
                </button>
              </div>

              <div
                className={`flex flex-col flex-1 p-1 rounded-md cursor-pointer
                ${
                  message.opened
                    ? ""
                    : "bg-slate-100 text-green-800 hover:bg-green-100"
                }`}
              >
                <h3 className={message.opened ? "" : "font-semibold"}>
                  {message.type}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="truncate">{message.message}</p>
                  <p className="text-xs">{message.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NotificationsList;