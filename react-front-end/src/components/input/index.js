import React from "react";

const Input = (props) => {
  const inputClass =
    "px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full " +
    (props.rightIcon ? "pr-10 " : "") +
    (props.leftIcon ? "pl-10 " : "");
  console.log(inputClass);

  return (
    <div
      className={
        "relative flex  flex-wrap items-stretch mb-3 mx-4 " + props.layoutProps
      }
    >
      {props.leftIcon ? (
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          {props.leftIcon}
        </span>
      ) : (
        <></>
      )}
      <input type="text" placeholder="Placeholder" className={inputClass} />
      {props.rightIcon ? (
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          {props.rightIcon}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Input;
