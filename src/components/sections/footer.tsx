"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UseMedia } from "@/hooks/use_media";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <footer className="w-full bg-gradient-to-b from-background to-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/assets/logo+name.jpg"
              alt="大有国際 Logo"
              width={width}
              height={height}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <Link
                href="#aboutus"
                className="text-sm text-muted-foreground relative group"
              >
                <span className="relative">
                  私達について
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
              <Link
                href="#products"
                className="text-sm text-muted-foreground relative group"
              >
                <span className="relative">
                  取扱商品
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground relative group"
              >
                <span className="relative">
                  お問い合わせ
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <div className="h-px bg-border/60 w-full my-3" />

              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  会社名:
                </div>
                <div className="font-medium whitespace-nowrap">
                  大有国際株式会社
                </div>

                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  所在地:
                </div>
                <div className="whitespace-nowrap">
                  神奈川県横浜市港北区新吉田東五丁目70番16号
                </div>

                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  郵便番号:
                </div>
                <div className="whitespace-nowrap">〒223-0058</div>

                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  メール:
                </div>
                <div className="hover:text-primary transition-colors whitespace-nowrap">
                  <a href="mailto:DAYOU-international@mori-dx.jp">
                    DAYOU-international@mori-dx.jp
                  </a>
                </div>

                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  電話番号:
                </div>
                <div className="whitespace-nowrap">03-6909-6800</div>

                <div className="text-right text-muted-foreground/70 whitespace-nowrap">
                  FAX番号:
                </div>
                <div className="whitespace-nowrap">03-6909-6801</div>
              </div>

              <div className="h-px bg-border/60 w-full my-3" />
            </div>

            <p className="text-sm text-muted-foreground/80 text-center">
              © 2025 大有国際株式会社 DAYOU International Co,.Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
