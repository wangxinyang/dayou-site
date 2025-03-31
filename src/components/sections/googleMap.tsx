"use client";

import React from "react";
import { motion } from "framer-motion";

export const GoogleMap = () => {
  return (
    <section id="map" className="w-full py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 sm:gap-6 items-center"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground relative">
          会社概要
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-primary rounded-full" />
        </h2>
        <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280305550287!2d139.76454677612345!3d35.68123597999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd3f79e1f%3A0x95129e85c2be4b7c!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1647891234567!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground relative">
          地図
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-primary rounded-full" />
        </h3>
      </motion.div>
    </section>
  );
};
