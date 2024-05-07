import React from "react";
import SideBar from "../components/SideBar";
import "../components/Form.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
