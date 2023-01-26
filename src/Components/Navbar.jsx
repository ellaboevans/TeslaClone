import React from "react";
import logo from "../assets/Tesla-logo.svg";

export default function Navbar({modalHandler}) {
  // console.log(props);
  return (
    <header className="px-8 font-medium text-gray-700 text-sm font-Gotham relative">
      <nav className="flex justify-between items-center fixed top-0 left-0 right-0 backdrop-blur shadow-lg z-10">
        <div id="logo" className="w-36 -mt-4 ">
          <img
            src={logo}
            alt="Tesla-company-logo"
            className="object-contain h-20 w-full cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex flex items-center -mts-4 gap-1">
          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Model S
            </li>
          </a>

          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Model 3
            </li>
          </a>

          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Model X
            </li>
          </a>

          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Model Y
            </li>
          </a>

          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Solar Roof
            </li>
          </a>

          <a href="#">
            <li className="hover:bg-slate-400 hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
              Solar Panels
            </li>
          </a>
        </ul>
        <div className="-mts-4 flex items-center gap-1">
          <a
            href="#"
            className="hover:bg-slate-400 hover:backdrop-blur hidden md:inline-flex transition esase-out duration-700 py-1 px-4 rounded"
          >
            Shop
          </a>
          <a
            href="#"
            className="hover:bg-slate-400 hover:backdrop-blur hidden md:inline-flex transition esase-out duration-700 py-1 px-4 rounded"
          >
            Account
          </a>
          <button
            className="hover:bg-slate-400 mr-4 md:mr-0 bg-slate-400 md:bg-transparent hover:backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4 rounded"
            onClick={modalHandler}
          >
            Menu
          </button>
        </div>
      </nav>
    </header>
  );
}
