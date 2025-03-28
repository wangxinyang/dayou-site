"use client";

import Image from "next/image";
import React, { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SubLogo } from "../sub_logo";
import AutoScroll from "embla-carousel-auto-scroll";

export const AboutUs = () => {
  const plugin = useRef(AutoScroll({ speed: 1, stopOnInteraction: false }));

  return (
    <div id="aboutus" className="w-full flex flex-col gap-6 items-center pt-8">
      <h1 className="w-[220px] flex justify-center text-lg lg:text-3xl border border-stone-950 p-4 rounded-md">
        私達について
      </h1>
      <div className="relative">
        <Image
          src="/assets/aboutus.jpg"
          alt="logo"
          width={1248}
          height={572}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 lg:top-2 lg:left-2">
          <SubLogo />
        </div>
        <div className="absolute w-[50%] bottom-10 lg:bottom-36 right-2 text-xs lg:text-3xl">
          大有国際 -
          日本に根ざし、東南アジア市場を開拓。私たちは、専門的な実力と的確な戦略で、日本のブランドが東南アジア市場で迅速に成長するお手伝いをします。大有を選び、共に未来を切り拓きましょう！
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/map.png"
          alt="logo"
          width={1248}
          height={572}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 lg:top-2 lg:left-2">
          <SubLogo />
        </div>
        <div className="absolute w-[80%] lg:w-[52%] bottom-10 lg:bottom-36 right-4 text-[0.5rem] lg:text-lg">
          <p className="line-clamp-6 lg:line-clamp-none">
            日本製品の輸出が加速し、東南アジア市場の潜在力が解き放たれる中、国際貿易の状況は急速に変化しています。多くの企業がベトナム、タイ、インドネシアなどの新興市場への進出を加速させ、地域間での競争が激化しています。東南アジアは、依然として高い成長可能性を持つ貴重な市場として、世界中のブランドが注目し、投資を行う重要な拠点となっています。商品品質を確保しつつ、ブランド価値を維持し、市場でのパフォーマンスを向上させ続けることが、今後の鍵となる課題です。
            大有インターナショナルは、日本国内の供給チェーンに対する深い知見と、東南アジアの消費者動向に関する深い洞察を活かし、効率的で市場に密着した商品企画・開発システムを確立しています。私たちは、東南アジア現地の専門チームを擁しており、複数の言語や文化に対応し、現地の顧客と直接コミュニケーションを取ることができます。市場からのフィードバックをもとに迅速に戦略を調整し、定期的に提案と振り返りを行い、商品構成と販売戦略を最適化し続けています。これにより、供給と需要の精密なマッチングと、最大の価値創出を実現しています。
          </p>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem className="basis-1/13">
            <div className="pt-1">
              <Image
                src="/assets/city1.jpg"
                alt="city1"
                width={335}
                height={335}
                layout="fixed"
              />
            </div>
            <div>
              <Image
                src="/assets/city2.jpg"
                alt="city2"
                width={335}
                height={335}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city3.jpg"
                alt="city3"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city4.png"
                alt="city4"
                width={295}
                height={295}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city5.jpg"
                alt="city5"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city7.jpg"
                alt="city7"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city8.jpg"
                alt="city8"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city9.jpg"
                alt="city9"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city10.png"
                alt="city10"
                width={295}
                height={295}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city11.jpg"
                alt="city11"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city12.jpg"
                alt="city12"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city13.jpg"
                alt="city13"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/13">
            <div className="p-1">
              <Image
                src="/assets/city14.jpg"
                alt="city14"
                width={350}
                height={350}
                layout="fixed"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
