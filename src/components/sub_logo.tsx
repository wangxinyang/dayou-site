"use client";

import React from "react";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const SubLogo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const width = isMobile ? 20 : 35;
  const height = isMobile ? 20 : 35;

  return (
    <div className="flex items-start lg:items-center gap-2">
      <Image src="/assets/logo.jpg" alt="logo" width={width} height={height} />
      <div className="flex flex-col justify-start">
        <h1 className="text-xs lg:text-3xl lg:leading-8 tracking-wide">
          大有国際株式会社
        </h1>
        <span className="text-xs lg:text-lg tracking-wide">
          DAYOU International Co.,Ltd
        </span>
      </div>
    </div>
  );
};
