import React from "react";
import Form from "../../components/Form";
import logo from "../../img/logo.jpg";
import {Link} from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="all grid justify-items-center items-center translate-y-11">
        <img src={logo} alt="" className="w-1/12" />
        <h1 className="mt-3">Register</h1>
        <h3 className="text-xs">Create your account</h3>
      </div>
      <Form></Form>
      <div className="all grid justify-items-center items-center translate-y-11">
        <div className="form text-xs w-1/4 mt-4">
          <div className="termsof mt-4">
            <p>
              By creating an account, you agree to our{" "}
              <a href="" className="termsofservice hover:underline">
                Terms of Service
              </a>{" "}
              and
              <a href="" className="termsofservice hover:underline">
                {" "}
                Privacy Policy
              </a>
            </p>
            <p className="mt-4 flex justify-center gap-1">
              Already signed up?
              <Link to="/" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
