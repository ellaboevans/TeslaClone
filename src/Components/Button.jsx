import React from "react";

export default function Button({
  children,
  btnColor = "",
  processing,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={` ${btnColor} inline-flex items-center justify-center w-80  h-12 md:w-60 md:h-10 rounded text-sm capitalize font-bold ${processing}`}
      disabled={processing}
    >
      {children}
    </button>
  );
}
