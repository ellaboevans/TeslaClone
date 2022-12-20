import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Button({
  children,
  btnColor = "",
  processing,
  type = "button",
}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <button
      type={type}
      className={` ${btnColor} inline-flex items-center justify-center w-80  h-12 md:w-72 md:h-10 rounded text-sm capitalize font-bold ${processing}`}
      disabled={processing}
      data-aos="fade-down"
    >
      {children}
    </button>
  );
}
