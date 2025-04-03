import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/logo.jpg"
        alt="logo"
        width={45}
        height={45}
        className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] lg:w-[65px] lg:h-[65px]"
      />
      <div className="flex flex-col justify-center ml-2">
        <h1 className="text-xl sm:text-2xl lg:text-3xl leading-6 sm:leading-8 tracking-wide font-medium">
          大有国際株式会社
        </h1>
        <span className="text-sm sm:text-base lg:text-lg tracking-wide">
          DAYOU International Co.,Ltd
        </span>
      </div>
    </div>
  );
};
