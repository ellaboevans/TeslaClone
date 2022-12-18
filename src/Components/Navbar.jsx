import React from "react"
import logo from "../assets/Tesla-logo.svg";


export default function Navbar(){
    return (
       <header className="px-8 font-medium text-gray-700 text-sm font-Gotham">
        <nav className="flex justify-between items-center">
          <div id="logo" className="w-36 -mt-4 cursor-pointer">
            <img src={logo} alt="" className="object-contain w-full" />
          </div>
          <ul className="hidden md:flex flex items-center -mt-4 gap-1">
            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model S
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model 3
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model X
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model Y
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Solar Roof
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-slate-400 backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Solar Panels
              </li>
            </a>
          </ul>
          <div className=" flex gap-1">
            <a
              href="#"
              className="hover:bg-slate-400 backdrop-blur hidden md:inline-flex transition esase-out duration-700 py-1 px-4 rounded"
            >
              Shop
            </a>
            <a
              href="#"
              className="hover:bg-slate-400 backdrop-blur hidden md:inline-flex transition esase-out duration-700 py-1 px-4 rounded"
            >
              Account
            </a>
            <a
              href="#"
              className="hover:bg-slate-400 bg-slate-400 md:bg-transparent backdrop-blur inline-flex transition esase-out duration-700 py-1 px-4 rounded"
            >
              Menu
            </a>
          </div>
        </nav>
      </header>
    )
}