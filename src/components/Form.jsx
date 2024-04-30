import React from "react";
import "../components/Form.css";

function showPassword() {
  let showpassword = document.getElementById("show_password_id");
  if (showpassword.type === "password") {
    showpassword.type = "text";
  } else {
    showpassword.type = "password";
  }
}

export default function Form() {
  return (
    <div className="dsa">
      <div className="all grid justify-items-center items-center translate-y-11">
        <div className="form text-xs w-1/4 mt-4">
          <div className="email_input">
            <p className="mb-1">Email address</p>
            <input
              type="text"
              className="border-2 border-gray-300 rounded w-full h-8 p-1"
            />
          </div>
          <div className="password_input">
            <p className="mt-4 mb-1">Password</p>
            <input
              type="text"
              className="border-2 border-gray-300 rounded w-full h-8 p-1"
              id="show_password_id"
              onClick={showPassword}
            />
          </div>
          <div className="checkboxes flex mt-4 gap-1 items-center ">
            <input
              type="checkbox"
              className=""
              onClick={showPassword}
              id="checkboxx"
            />
            <div className="justify-between flex-grow">
              <label htmlFor="checkboxx">Show password</label>
            </div>
            <a href="" className="text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="button w-full mt-4 border-2 border-transparent rounded bg-black h-9 flex items-center justify-center hover:bg-gray-600 active:bg-gray-500 focus:outline-none cursor-pointer ease-in duration-150">
            <button className="text-white flex gap-2 " type="submit">
              Submit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
