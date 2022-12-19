import React from "react";


export default function Footer(){
    return (
      <footer>
        <div className="flex md:flex-row flex-col text-center items-center md:gap-6 text-gray-600">
          <a href="#">
            <small>
              Tesla &#169; <span>2022</span>
            </small>
          </a>
          <a href="#">
            <small>Privacy & Legal</small>
          </a>
          <a href="#">
            <small>Vehicle Recalls</small>
          </a>
          <a href="#" className="hidden md:inline-flex">
            <small>Contact</small>
          </a>
          <a href="#">
            <small>Careers</small>
          </a>
          <a href="#">
            <small>News</small>
          </a>
          <a href="#" className="hidden md:inline-flex">
            <small>Engage </small>
          </a>
          <a href="#" className="hidden md:inline-flex">
            <small>Locations</small>
          </a>
        </div>
      </footer>
    );
}