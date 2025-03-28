"use client";

import { useRef } from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Image
              src="/assets/carousel1.png"
              alt="logo"
              width={984}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Image
              src="/assets/carousel2.png"
              alt="logo"
              width={984}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Image
              src="/assets/carousel3.png"
              alt="logo"
              width={984}
              height={560}
              className="w-full h-auto"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
