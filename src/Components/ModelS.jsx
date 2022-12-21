import React, { useEffect } from "react";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ModelS() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="p-2 md:bg-model-s-desktop bg-model-s-mobile bg-no-repeat  md:bg-center h-screen bg-cover overflow-hidden"
      data-aos="fade-in"
    >
      <div className="flex flex-col h-3/4 items-center mt-12 py-20 md:py-0">
        <div
          id="hero-tex"
          className=" text-center font-Gotham p-8 md:p-8"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:-mt-6 font-medium text-gray-800">
            Model S
          </h1>
          <a href="#" className="text-sm text-gray-700 underline">
            Schedule a Test Drive
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center md:p-11 p-4 mt-60 md:mdt-72   ">
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
      </div>
    </section>
  );
}
