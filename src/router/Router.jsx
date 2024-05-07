import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Section1 from "../pages/Section1";
import SideBar from "../components/SideBar";

function RouterApp() {
  return (
    <>
      {/* <SideBar>
          <Link to="/home"></Link>
        </SideBar> */}
      <Router>
        <Routes>
          <Route path={"/"} element={<Login />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/home"} element={<Home />}>
            <Route path={"section1"} element={<Section1 />} />
          </Route>
          {/* <Route path={"home/section1"} element={<Section1/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default RouterApp;
