import React, { useState } from "react";
import logo from "./assets/tesla-logo.png";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleLink(){
    window.open("https:/www.tesla.com");
    console.log("opened")
  }
  return (
    <div className="flex flex-col justify-center items-center h-80">
      <img
        src={logo}
        alt=""
        className="w-4/6 h-4/6 object-contain -mb-16 mt-64"
      />
      <div className="m-8">
        <h1 className="text-center font-semibold text-3xl font-Gotham ">
          Yet to start some{" "}
          <a onClick={handleLink} className="cursor-pointer">
            <span className="uppercase tracking-wider text-red-600 underline">
              tesla
            </span>
          </a>{" "}
          side project
        </h1>
        <p className="font-Gotham tracking-wide  text-center text-xl mt-8 bg-gray-400 py-8  rounded shadow-lg ">
          Do some counting
          <span className="font-bold text-3xl block text-red-600">{count}</span>
        </p>
      </div>
      <button
        onClick={handleClick}
        className="py-4 px-8 rounded-lg text-white bg-blue-500  hover:bg-blue-600 transition-all duration-200 "
      >
        Let's start counting
      </button>
      <p className="mt-8">
        <small>
          Powered <strong>CodeConcept</strong>
        </small>
      </p>
    </div>
  );
}
