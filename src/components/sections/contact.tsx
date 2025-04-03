"use client";

import React from "react";
import ContactForm from "../contactForm";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 items-center px-4"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground relative mb-4 sm:mb-6">
            お問い合わせ
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1 bg-primary rounded-full" />
          </h2>
          <div className="space-y-2 text-muted-foreground">
            <p className="text-sm sm:text-base lg:text-lg">
              ご不明点などお気軽にお問い合わせください。
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              後日、担当者より メールまたはお電話にて
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              ご回答させていただきます。
            </p>
          </div>
        </div>

        <div className="w-full bg-card rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};
