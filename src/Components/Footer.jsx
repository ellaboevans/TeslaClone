import React from "react";

export default function Footer({date}) {

  return (
    <footer>
      <div className="flex md:flex-row flex-col text-center items-center md:gap-6 text-gray-600">
        <a
          href="#"
          className="hover:scale-110 transition-all ease duration-300"
        >
          <small>
            Tesla &#169; <span>{date.getFullYear()}</span>
          </small>
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all ease duration-300"
        >
          <small>Privacy & Legal</small>
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all ease duration-300"
        >
          <small>Vehicle Recalls</small>
        </a>
        <a
          href="#"
          className="hidden md:inline-flex hover:scale-110 transition-all ease duration-300"
        >
          <small>Contact</small>
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all ease duration-300"
        >
          <small>Careers</small>
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-all ease duration-300"
        >
          <small>News</small>
        </a>
        <a
          href="#"
          className="hidden md:inline-flex hover:scale-110 transition-all ease duration-300"
        >
          <small>Engage </small>
        </a>
        <a
          href="#"
          className="hidden md:inline-flex hover:scale-110 transition-all ease duration-300"
        >
          <small>Locations</small>
        </a>
      </div>
    </footer>
  );
}
