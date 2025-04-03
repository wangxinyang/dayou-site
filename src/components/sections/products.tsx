"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export const Products = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="products" className="w-full py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 items-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground relative">
          取扱商品
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
        </h2>

        <div className="relative w-full">
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
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover-card">
                  <Image
                    src="/assets/product1.png"
                    alt="Product 1"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover-card">
                  <Image
                    src="/assets/product2.png"
                    alt="Product 2"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover-card">
                  <Image
                    src="/assets/product3.png"
                    alt="Product 3"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover-card">
                  <Image
                    src="/assets/product4.png"
                    alt="Product 4"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg hover-card">
                  <Image
                    src="/assets/product5.png"
                    alt="Product 5"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};
