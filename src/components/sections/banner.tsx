"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden rounded-xl shadow-lg"
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/carousel1.png"
                alt="Banner 1"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/carousel2.png"
                alt="Banner 2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/carousel3.png"
                alt="Banner 3"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};
