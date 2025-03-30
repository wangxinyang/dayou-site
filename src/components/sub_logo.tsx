"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { UseMedia } from "@/hooks/use_media";

export const SubLogo = () => {
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
  const { isMobile } = UseMedia();

  useEffect(() => {
    if (!isMobile) {
      setWidth(35);
      setHeight(35);
    } else {
      setWidth(20);
      setHeight(20);
    }
  }, [isMobile]);

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
