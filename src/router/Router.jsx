import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterApp;
