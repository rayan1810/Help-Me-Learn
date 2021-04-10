import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = (props) => {
  //   const inputClass =
  //     "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full " +
  //     (props.rightIcon ? "pr-10 " : "") +
  //     (props.leftIcon ? "pl-10 " : "");
  //   console.log(inputClass);
  const history = useHistory();
  function handleClick(url) {
    history.push("/" + url);
  }
  return (
    <div
      className={
        "relative flex bg-gray-100 flex-wrap mb-3 px-4 items-center " +
        props.layoutProps
      }
    >
      <div className="px-4 pr-8">Help Me Learn</div>
      <div className="flex-1"></div>
      <a onClick={() => handleClick("")}>
        <div className="cursor-pointer py-4 px-10 bg-gray-200 hover:bg-blue-400">Home</div>
      </a>
      <a onClick={() => handleClick("login")}>
        <div className="cursor-pointer py-4 px-10 bg-gray-200 hover:bg-blue-400">Login</div>
      </a>
      <a onClick={() => handleClick("signup")}>
        <div className="cursor-pointer py-4 px-10 bg-gray-200 hover:bg-blue-400">Signup</div>
      </a>
    </div>
  );
};
export default NavBar;
