import React from "react";
import Form from "../../components/Form";
import logo from "../../img/logo.jpg";

function Login() {
  return (
    <div>
      <div className="all grid justify-items-center items-center translate-y-11">
        <img src={logo} alt="" className="w-1/12" />
        <h1 className="mt-3">Sign in </h1>
        <h3 className="text-xs">Please enter your details</h3>
      </div>
      <Form></Form>
      <div className="all grid justify-items-center items-center translate-y-11">
        <div className="form text-xs w-1/4 mt-4">
          <div className="termsof mt-4">
            <p>
              By signing in, you agree to our{" "}
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
              Don't have an account?
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
