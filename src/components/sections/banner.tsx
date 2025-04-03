"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/carousel1.png",
    alt: "Banner 1",
  },
  {
    src: "/assets/carousel2.png",
    alt: "Banner 2",
  },
  {
    src: "/assets/carousel3.png",
    alt: "Banner 3",
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      // 过渡结束后重置状态
      setTimeout(() => {
        setTransitioning(false);
      }, 2500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden rounded-xl shadow-lg aspect-[16/9] bg-black"
    >
      {/* 始终显示前一张图片作为背景 */}
      <div className="absolute inset-0">
        <Image
          src={images[previousIndex].src}
          alt={images[previousIndex].alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 新图片淡入 */}
      {transitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
};
