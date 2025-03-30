"use client";

import React, { useRef } from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Products = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div id="products" className="w-full flex flex-col gap-6 items-center pt-8">
      <h1 className="w-[220px] flex justify-center text-lg lg:text-3xl border border-stone-950 p-4 rounded-md">
        取扱商品
      </h1>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="flex justify-center p-1">
              <Image
                src="/assets/product1.png"
                alt="logo"
                width={900}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center p-1">
              <Image
                src="/assets/product2.png"
                alt="logo"
                width={900}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center p-1">
              <Image
                src="/assets/product3.png"
                alt="logo"
                width={900}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center p-1">
              <Image
                src="/assets/product4.png"
                alt="logo"
                width={900}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex justify-center p-1">
              <Image
                src="/assets/product5.png"
                alt="logo"
                width={900}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
