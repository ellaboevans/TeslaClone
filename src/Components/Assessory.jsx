import React from "react";
import Button from "./Button";
import Footer from "./Footer";

export default function Assessory() {
  return (
    <section className="p-2 md:bg-Accessory-desktop bg-Accessory-mobile bg-no-repeat bg-center h-screen bg-cover overflow-hidden">
      <div className="flex flex-col h-3/4 items-center mt-20 py-20 md:py-0">
        <div id="hero-tex" className=" text-center font-Gotham p-8 md:p-8">
          <h1 className="text-4xl md:-mt-6 font-medium text-gray-800">
            Accessories
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-12 md:p-11 p-4 mt-56 md:mt-60   ">
          <a href="#">
            <Button btnColor="bg-btn-bg text-white backdrop-blur opacity-100">
              Shop Now
            </Button>
          </a>
        </div>
      </div>
      <div className="flex justify-center -mt-8">
        <Footer />
      </div>
    </section>
  );
}
