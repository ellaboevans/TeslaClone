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
      className={` ${btnColor} inline-flex items-center justify-center w-60 h-10 rounded text-sm capitalize font-bold ${processing}`}
      disabled={processing}
    >
      {children}
    </button>
  );
}
