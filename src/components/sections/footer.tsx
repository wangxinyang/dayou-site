"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { UseMedia } from "@/hooks/use_media";

export const Footer = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const { isMobile } = UseMedia();

  useEffect(() => {
    if (!isMobile) {
      setWidth(300);
      setHeight(300);
    } else {
      setWidth(200);
      setHeight(200);
    }
  }, [isMobile]);

  return (
    <footer className="w-full flex flex-col justify-center items-center gap-2 pt-10 pb-4 lg:pt-32 lg:pb-10">
      <Image
        src="/assets/logo+name.jpg"
        alt="logo"
        width={width}
        height={height}
      />
      <p className="text-[10px] lg:text-base ml-16 mr-10">
        © 2025 大有国際株式会社 DAYOU International Co,.Ltd. All Rights
        Reserved.
      </p>
    </footer>
  );
};
