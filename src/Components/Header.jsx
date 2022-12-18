import React from "react";
import logo from "../assets/tesla-logo.png";
import chevron from "../assets/chevron.svg"
import Button from "./Button";

export default function Header() {
  return (
    <section className="md:bg-hero-image-desktop  outline bg-hero-image-mobile bg-no-repeat lg:bg-top md:bg-center h-screen bg-cover">
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
      <div className="flex flex-col h-screen items-center justify-evenly ">
        <div id="hero-tex" className=" text-center font-Gotham -mt-">
          <h1 className="text-5xl font-medium mb-2 text-gray-800">Model 3</h1>
          <a href="#" className="text-sm text-gray-700 underline">
            Schedule a Test Drive
          </a>
        </div>
        <div className="flex justify-between gap-4 items-center mt-32">
          <Button btnColor="bg-btn-bg text-white backdrop-blur">Buy Now</Button>
          <Button btnColor="bg-white text-btn-bg backdrop-blur opacity-80">
            Customer Order
          </Button>
        </div>
        <div className="w-12 h-12">
          <img src={chevron} alt="" className="w-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
