import React from "react";
import { Logo } from "../logo";
import { Navbar } from "../navbar";

export const Hero = () => {
  return (
    <div id="top" className="flex justify-between items-center">
      <Logo />
      <Navbar />
    </div>
  );
};
