import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/assets/logo.jpg"
        alt="logo"
        width={28}
        height={28}
        className="sm:w-[35px] sm:h-[35px]"
      />
      <div className="flex flex-col justify-start">
        <h1 className="text-xl sm:text-2xl lg:text-3xl leading-6 sm:leading-8 tracking-wide">
          大有国際株式会社
        </h1>
        <span className="text-sm sm:text-base lg:text-lg tracking-wide">
          DAYOU International Co.,Ltd
        </span>
      </div>
    </div>
  );
};
