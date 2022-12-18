import React from "react";
import logo from "../assets/tesla-logo.png";

export default function Header() {
  return (
    <section className="md:bg-hero-image-desktop bg-hero-image-mobile bg-no-repeat bg-top h-screen bg-cover">
      <header className="p-4 font-medium text-gray-700 text-sm  font-Gotham">
        <nav className="flex justify-between items-center">
          <div id="logo" className="w-2/12 cursor-pointer">
            <img src={logo} alt="" />
          </div>
          <ul className="hidden md:flex flex items-center gap-1">
            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model S
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model 3
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model X
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Model Y
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Solar Roof
              </li>
            </a>

            <a href="#">
              <li className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4  cursor-pointer rounded">
                Solar Panels
              </li>
            </a>
          </ul>
          <div className=" flex gap-1">
            <a
              href="#"
              className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4 rounded"
            >
              Shop
            </a>
            <a
              href="#"
              className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4 rounded"
            >
              Account
            </a>
            <a
              href="#"
              className="hover:bg-gray-300 transition esase-out duration-700 py-1 px-4 rounded"
            >
              Menu
            </a>
          </div>
        </nav>
      </header>
      <div id="hero-tex" className=" text-center mt-16 font-Gotham">
        <h1 className="text-5xl font-medium mb-2 text-gray-800">Model 3</h1>
        <a href="#" className="text-sm text-gray-700 underline">Schedule a Test Drive</a>
      </div>
    </section>
  );
}
