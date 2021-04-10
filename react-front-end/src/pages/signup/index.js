import React from "react";
import Input from "../../components/input";

const SignupPage = () => {
  return (
    <div className="  min-h-screen justify-center flex">
      <div className="bg-gray-50 md:w-6/12 m-10 w-full shadow-md p-8">
        <span className="text-3xl font-sans font-semibold text-gray-700 ml-5">
          Signup
        </span>
        <div className="border-t-2 mt-5 border-gray-50 flex-1 shadow  mb-10"></div>
        <Input
          placeholder="Username or Email Address"
          label="Username"
          _label="px-2 text-gray-500"
          rightIcon={<i class="fas fa-user text-indigo-600"></i>}
          //   layoutProps="mt-5"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          _label="px-2 text-gray-500"
          rightIcon={<i class="fas fa-lock text-indigo-600"></i>}
          //   layoutProps="mt-5"
        />
        <div className="flex justify-center">
          <button class="px-10 py-2 my-5 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-lg">
            Login
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-t-2 mx-8 border-gray-50 flex-1 shadow"></div>
          <span>OR</span>
          <div className="border-t-2 mx-8 border-gray-50 flex-1 shadow"></div>
        </div>
        <div className="flex justify-center mt-8 items-center">
          <a className="mx-4">New User? Signup</a>
          <span>|</span>
          <a className="mx-4">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
