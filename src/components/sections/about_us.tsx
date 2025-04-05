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
    <section id="aboutus" className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12 items-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-[#555555] font-sans relative">
          私達について
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
        </h2>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/aboutus.jpg"
            alt="About Us"
            width={1248}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 lg:p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-0 left-20 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 right-0 sm:right-[15%] max-w-[85%] sm:max-w-md p-3 sm:p-6 sm:rounded-lg">
            <h3 className="text-sm lg:text-3xl font-bold mb-2 sm:mb-4 text-[#555555] font-sans text-center">
              私達について
            </h3>
            <p className="text-xs lg:text-lg leading-snug sm:leading-relaxed font-sans text-[#555555] text-left pl-4">
              <span className="inline-block w-[2em]"></span>
              私たちは日本に根ざし、東南アジア市場を積極的に開拓しています。
              専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急
              成長を力強くサポート。「大有」を選ぶことは、未来の成功を共に築
              くことです！
              <p className="text-xs lg:text-lg leading-snug sm:leading-relaxed font-sans text-[#a1787f] mt-1 text-left sm:text-left">
                Connect Japan to Asia through Beauty!
              </p>
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/map.jpg"
            alt="Market Map"
            width={1248}
            height={572}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-6 lg:left-12 lg:p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-0 left-20 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 right-0 sm:right-[15%] max-w-[85%] sm:max-w-md p-3 sm:p-6 sm:rounded-lg">
            <p className="text-xs sm:text-sm lg:text-lg leading-snug sm:leading-relaxed font-sans text-black text-center sm:text-left">
              <span className="inline-block w-[2em]"></span>
              東南アジアは、いまだ成長の余地を残す数少ない成長型市場として、
              いまや世界中のブランドが注目し、争奪の焦点となっています。
              激化する競争の中で、「品質」と「ブランド価値」の両立が成功の鍵
              を握ります。
            </p>
            <p className="text-xs sm:text-sm lg:text-lg leading-snug sm:leading-relaxed font-sans text-black text-center sm:text-left">
              <span className="inline-block w-[2em]"></span>
              大有国際は、日本の優れたサプライチェーンの強みと、東南アジア
              市場への深い洞察を活かし、市場に密着した高効率な商品企画体制を
              構築しています。
            </p>
            <p className="text-xs sm:text-sm lg:text-lg leading-snug sm:leading-relaxed font-sans text-black text-center sm:text-left">
              <span className="inline-block w-[2em]"></span>
              また、現地チームは多言語・多文化に対応できる体制を備え、顧客
              とダイレクトにつながることで、迅速なフィードバックを実現。それ
              に基づき、商品や戦略の継続的な改善を行い、供給と需要の最適なマッ
              チングと価値向上を図っています。
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans">
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
