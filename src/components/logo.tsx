import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/assets/logo.jpg" alt="logo" width={35} height={35} />
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl leading-8 tracking-wide">大有国際株式会社</h1>
        <span className="text-lg tracking-wide">
          DAYOU International Co.,Ltd
        </span>
      </div>
    </div>
  );
};
