import { Metadata } from "next";
import { Banner } from "@/components/sections/banner";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import GoogleMap from "@/components/googleMap";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { AboutUs } from "@/components/sections/about_us";
import { SchemaOrgScript } from "@/components/schema_org";

export const metadata: Metadata = {
  title: "DAYOU International - 日本企業の東南アジア進出をサポート",
  description:
    "大有国際は、東南アジア市場を積極的に開拓。専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急成長を力強くサポートします。Connect Japan to Asia through Beauty!",
  alternates: {
    canonical: "https://dayou-international.com",
  },
  openGraph: {
    images: [
      {
        url: "https://dayou-international.com/assets/hero.jpg",
        width: 1200,
        height: 630,
        alt: "DAYOU International - トップページ",
      },
    ],
  },
  twitter: {
    images: ["https://dayou-international.com/assets/hero.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrgScript />
      <div className="min-h-screen bg-background flex justify-center">
        <div className="w-full max-w-7xl">
          <Hero />
          <div className="px-4 sm:px-6 lg:px-8 mt-[80px] sm:mt-[100px]">
            <Banner />
            <AboutUs />
            <Products />

            <div className="w-full py-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#555555] font-sans relative mb-8 text-center sm:text-center">
                アジア市場
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
              </h2>
              <div className="shadow-lg rounded-xl overflow-hidden">
                <GoogleMap />
              </div>
            </div>

            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
