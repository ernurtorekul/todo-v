import React, { useState } from "react";
import home from "../img/icons/home.svg";
import menu from "../img/icons/menu.png";
import "../components/Form.css";
import "../router/Router"
import {Link} from "react-router-dom"

// function ShrinkButton {
//     const shrinkButton = document.getElementById
// }

function SideBar() {

  const [isSmallSidebar, setSmallSidebar] = useState(false);
  const clickSidebar = () => {
    setSmallSidebar(!isSmallSidebar);
  };

  const [selectedSection, setSelectedSection] = useState(null);
  const handleClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <div className="h-screen justify-between">
      <div
        className={`all flex-col w-2/12 h-full flex bg-gray-200 ${
          isSmallSidebar ? "w-24" : "w-64"
        } sidebar-transition`}
      >
        <div
          className="mt-4 mb-4 flex justify-center on"
          onClick={clickSidebar}
        >
          <button onClick={clickSidebar} className="">
            <img
              src={menu}
              alt=""
              className={`w-8 ${isSmallSidebar ? "hidden" : ""}`}
            />
          </button>
          <button onClick={clickSidebar} className="">
            <img
              src={menu}
              alt=""
              className={`w-8 ${isSmallSidebar ? "" : "hidden"}`}
            />
          </button>
        </div>
        <div className="logo_name mb-20 flex justify-center items-center h-12 w-full bg-gray-300">
          <h1
            className={`italic font-semibold font-thin  ${
              isSmallSidebar ? "text-sm" : "text-3xl"
            } sidebar-transition`}
          >
            Todo_v
          </h1>
        </div>
        {/* <div
          className={`sidebar_list list-none w-full bg-gray-300 text-sm md:text-xl flex-col flex ${
            isSmallSidebar ? "items-center" : ""
          } ${selectedSection ? "bg-gray-700" : ""}`}
        > */}
        <div
          className={`sidebar_list list-none w-full bg-gray-300 text-sm md:text-xl flex-col flex ${
            isSmallSidebar ? "items-center" : ""}
          } ${selectedSection === "plans" ? "bg-gray-700" : ""}`}
        >
          <Link
            to="/home/section1"
            className={`flex h-12 items-center mx-8 `}
            onClick={() => handleClick("plans")}
          >
            <img
              src={home}
              alt=""
              className={`mr-2 md:w-6 ${isSmallSidebar ? "mr-0" : " "}`}
            />
            <span className={`${isSmallSidebar ? "hidden" : ""}`}>Plans</span>
          </Link>
        </div>
        <div
          className={`sidebar_list list-none w-full bg-gray-300 text-sm md:text-xl flex-col flex ${
            isSmallSidebar ? "items-center" : ""
          } ${selectedSection === "done" ? "bg-gray-700" : ""}`}
        >
          <button
            className="flex h-12 items-center mx-8 "
            onClick={() => handleClick("done")}
          >
            <img
              src={home}
              alt=""
              className={`mr-2 md:w-6 ${isSmallSidebar ? "mr-0" : ""}`}
            />
            <span className={`${isSmallSidebar ? "hidden" : ""}`}>Done</span>
          </button>
        </div>
        <div
          className={`sidebar_list list-none w-full bg-gray-300 text-sm md:text-xl flex-col flex ${
            isSmallSidebar ? "items-center" : ""
          } ${selectedSection === "other" ? "bg-gray-700" : ""}`}
        >
          <button
            className="flex h-12 items-center mx-8 "
            onClick={() => handleClick("other")}
          >
            <img
              src={home}
              alt=""
              className={`mr-2 md:w-6 ${isSmallSidebar ? "mr-0" : ""}`}
            />
            <span className={`${isSmallSidebar ? "hidden" : ""}`}>Other</span>
          </button>
        </div>
        <div className="sidebar_list mt-auto">
          <button className=" flex bg-gray-300 w-full p-3 justify-center">
            <img
              src={home}
              alt=""
              className={`mr-2 ${isSmallSidebar ? "mr-0" : ""}`}
            />
            <span className={`${isSmallSidebar ? "hidden" : ""}`}>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
