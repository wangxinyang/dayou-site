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
          <span className="sr-only">About Us - DAYOU International</span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
        </h2>
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/aboutus.jpg"
            alt="DAYOU International - 日本企業の東南アジア進出をサポート"
            width={1248}
            height={600}
            className="w-full h-auto object-cover"
            priority
            style={{ width: "auto", height: "auto" }}
          />
          <div className="absolute top-0 left-0 lg:p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-0 left-20 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 sm:right-[15%] max-w-[85%] sm:max-w-md p-3 sm:p-6 sm:rounded-lg">
            <h3 className="text-sm lg:text-3xl font-bold mb-2 sm:mb-4 text-[#555555] font-sans text-center">
              私達について
            </h3>
            <p className="text-xs lg:text-lg leading-snug sm:leading-relaxed font-sans text-[#555555] text-left pl-4">
              <span className="inline-block w-[2em]"></span>
              私たちは日本に根ざし、東南アジア市場を積極的に開拓しています。
              専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急
              成長を力強くサポート。「大有」を選ぶことは、未来の成功を共に築
              くことです！
            </p>
            <p className="text-xs lg:text-lg leading-snug sm:leading-relaxed font-sans text-[#a1787f] mt-1 text-left sm:text-left pl-4">
              Connect Japan to Asia through Beauty!
            </p>
          </div>
        </div>
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg hover-card">
          <Image
            src="/assets/map.jpg"
            alt="東南アジア市場への進出戦略 - DAYOU International"
            width={1248}
            height={572}
            className="w-full h-auto object-cover"
            style={{ width: "auto" }}
          />
          <div className="absolute top-0 left-6 lg:left-12 lg:p-2 sm:p-3 rounded-br-lg backdrop-blur-sm">
            <SubLogo />
          </div>
          <div className="absolute bottom-[-5px] left-0 right-0 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 sm:right-[15%] max-w-full sm:max-w-md p-3 sm:p-6 text-black">
            <p className="text-[8px] sm:text-xs lg:text-lg leading-tight sm:leading-relaxed font-sans text-left">
              <span className="inline-block w-[2em]"></span>
              東南アジアは、いまだ成長の余地を残す数少ない成長型市場として、
              いまや世界中のブランドが注目し、争奪の焦点となっています。
              激化する競争の中で、「品質」と「ブランド価値」の両立が成功の鍵
              を握ります。
            </p>
            <p className="text-[8px] sm:text-xs lg:text-lg leading-tight sm:leading-relaxed font-sans text-left">
              <span className="inline-block w-[2em]"></span>
              大有国際は、日本の優れたサプライチェーンの強みと、東南アジア
              市場への深い洞察を活かし、市場に密着した高効率な商品企画体制を
              構築しています。
            </p>
            <p className="text-[8px] sm:text-xs lg:text-lg leading-tight sm:leading-relaxed font-sans text-left">
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
            <CarouselContent className="-ml-1 md:-ml-2">
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city1.jpg"
                      alt="インドネシア・ジャカルタの都市景観 - 赤道の未来都市"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city2.jpg"
                      alt="インドネシア・ジャカルタのショッピングモール - 東南アジアの消費市場"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city3.jpg"
                      alt="インドネシアの都市風景 - 東南アジアの発展する市場"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city4.png"
                      alt="インドネシアの近代的なビジネス地区 - 東南アジアのビジネスチャンス"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city5.jpg"
                      alt="インドネシアの商業施設 - 東南アジアの消費者市場"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      赤道の未来都市・インドネシア
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city7.jpg"
                      alt="ベトナム・ホーチミンの都市景観 - 霧の摩天楼"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city8.jpg"
                      alt="ベトナム・ホーチミンのショッピングモール - 東南アジアの小売市場"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city9.jpg"
                      alt="ベトナムの都市風景 - 東南アジアの成長市場"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city10.png"
                      alt="ベトナムの近代的な都市景観 - 東南アジアの発展"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      霧の摩天楼・ベトナム
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city11.jpg"
                      alt="タイ・バンコクの夜景 - 夜の黄金国"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city12.jpg"
                      alt="タイの商業施設 - 東南アジアのビジネス機会"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city13.jpg"
                      alt="タイの夜の都市景観 - 東南アジアの市場展開"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
                      夜の黄金国・タイ
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 pl-1 md:pl-2">
                <div className="p-1">
                  <div className="relative group h-[250px]">
                    <Image
                      src="/assets/city14.jpg"
                      alt="タイの都市風景 - 東南アジア市場への進出"
                      width={350}
                      height={250}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-[#555555] text-sm font-bold text-center px-2 py-1 rounded font-sans bg-white/40 backdrop-blur-[2px] shadow-sm">
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
