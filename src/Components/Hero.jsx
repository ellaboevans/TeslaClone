import React from "react";
import chevron from "../assets/chevron.svg";
import Button from "./Button";
import Navbar from "./Navbar";
import ModelY from "./ModelY";
import ModelS from "./ModelS";
import ModelX from "./ModelX";
import SolarPanel from "./SolarPanel";
import SolarRoof from "./SolarRoof";
import Assessory from "./Assessory";

export default function Header() {
  return (
    <>
      <section className="p-2 md:bg-hero-image-desktop bg-hero-image-mobile bg-no-repeat  md:bg-center h-screen bg-cover overflow-hidden">
        <Navbar />
        <div className="flex flex-col h-3/4 items-center mt-20 py-20 md:py-0">
          <div id="hero-tex" className=" text-center font-Gotham p-8 md:p-8">
            <h1 className="text-4xl md:-mt-6 font-medium text-gray-800">
              Model 3
            </h1>
            <a href="#" className="text-sm text-gray-700 underline">
              Schedule a Test Drive
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center md:p-11 p-4 mt-44 md:mt-60   ">
            <a href="#">
              <Button btnColor="bg-btn-bg text-white backdrop-blur opacity-95">
                Buy Now
              </Button>
            </a>
            <a href="#">
              <Button btnColor="bg-white text-btn-bg backdrop-blur opacity-90">
                Customer Order
              </Button>
            </a>
          </div>
          <div className="w-8 pb-8">
            <img
              src={chevron}
              alt=""
              className="w-full animate-bounce cursor-pointer"
            />
          </div>
        </div>
      </section>
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarPanel />
      <SolarRoof />
      <Assessory />
    </>
  );
}
