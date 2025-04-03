"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SubLogo } from "../sub_logo";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

export const AboutUs = () => {
  const plugin = useRef(AutoScroll({ speed: 1, stopOnInteraction: true }));

  return (
    <section id="aboutus" className="w-full py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12 items-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground relative">
          私達について
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
        </h2>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/aboutus.jpg"
            alt="About Us"
            width={1248}
            height={572}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 bg-black/30 p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-2 sm:bottom-8 right-2 sm:right-8 max-w-[85%] sm:max-w-xl text-white">
            <h3 className="text-base sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-4">
              大有国際
            </h3>
            <p className="text-[10px] sm:text-sm lg:text-lg opacity-90 leading-tight sm:leading-relaxed">
              日本に根ざし、東南アジア市場を開拓。私たちは、専門的な実力と的確な戦略で、日本のブランドが東南アジア市場で迅速に成長するお手伝いをします。大有を選び、共に未来を切り拓きましょう！
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/map.png"
            alt="Market Map"
            width={1248}
            height={572}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 bg-black/30 p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-2 sm:bottom-8 right-2 sm:right-8 max-w-[85%] sm:max-w-2xl text-white">
            <h3 className="text-base sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-4">
              市場分析
            </h3>
            <p className="text-[10px] sm:text-sm lg:text-lg opacity-90 leading-tight sm:leading-relaxed">
              日本製品の輸出が加速し、東南アジア市場の潜在力が解き放たれる中、国際貿易の状況は急速に変化しています。多くの企業がベトナム、タイ、インドネシアなどの新興市場への進出を加速させ、地域間での競争が激化しています。東南アジアは、依然として高い成長可能性を持つ貴重な市場として、世界中のブランドが注目し、投資を行う重要な拠点となっています。
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Carousel
            plugins={[plugin.current]}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/13">
                <div className="pt-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city1.jpg"
                      alt="city1"
                      width={335}
                      height={335}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative group">
                    <Image
                      src="/assets/city2.jpg"
                      alt="city2"
                      width={335}
                      height={335}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city3.jpg"
                      alt="city3"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city4.png"
                      alt="city4"
                      width={295}
                      height={295}
                      className="h-[510px] w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city5.jpg"
                      alt="city5"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city7.jpg"
                      alt="city7"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city8.jpg"
                      alt="city8"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city9.jpg"
                      alt="city9"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city10.png"
                      alt="city10"
                      width={295}
                      height={295}
                      className="h-[510px] w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city11.jpg"
                      alt="city11"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city12.jpg"
                      alt="city12"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city13.jpg"
                      alt="city13"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/13">
                <div className="p-1">
                  <div className="relative group">
                    <Image
                      src="/assets/city14.jpg"
                      alt="city14"
                      width={350}
                      height={350}
                      className="w-[100%] h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-bold text-center bg-black/30 px-2 py-1 rounded">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};
