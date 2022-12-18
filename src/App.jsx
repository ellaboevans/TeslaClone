import React, { useState } from "react";
import Hero from "./Components/Hero";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  // function handleLink(){
  //   window.open("https:/www.tesla.com");
  //   console.log("opened")
  // }
  return (
    <div className="">
      <Hero />
    </div>
  );
}
