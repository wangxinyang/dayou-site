"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Navbar } from "../navbar";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true); // 滚动超过20px时，设置sticky
      } else {
        setIsSticky(false); // 滚动回顶部时，取消sticky
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isSticky && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="transition-all p-4 block relative z-1"
        >
          <div className="max-w-5xl mx-auto h-[60px] flex justify-between items-center">
            <Logo />
            <Navbar />
          </div>
        </motion.header>
      )}

      {isSticky && (
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="p-4 w-full sticky top-0 z-50 bg-white"
        >
          <div
            id="top"
            className="max-w-5xl mx-auto h-[60px] flex justify-between items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <Logo />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <Navbar />
            </motion.div>
          </div>
        </motion.header>
      )}
    </>
  );
};
