import React from "react";
import ContactForm from "../contactForm";

export const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col gap-4 items-center pt-8">
      <h1 className="w-[220px] flex justify-center text-lg lg:text-3xl border border-stone-950 p-4 rounded-md">
        お問い合わせ
      </h1>
      <section className="tracking-wide text-xs lg:text-lg">
        <p>ご不明点などお気軽にお問い合わせください。</p>
        <p>後日、担当者より メールまたはお電話にて</p>
        <p>ご回答させていただきます。</p>
      </section>
      <ContactForm />
    </div>
  );
};
