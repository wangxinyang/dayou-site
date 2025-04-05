import { Metadata } from "next";
import { AboutUs } from "@/components/sections/about_us";

export const metadata: Metadata = {
  title:
    "私達について | DAYOU International - 日本企業の東南アジア進出をサポート",
  description:
    "大有国際は、日本に根ざし東南アジア市場を積極的に開拓。専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急成長を力強くサポートします。",
  keywords:
    "大有国際, DAYOU International, 東南アジア市場, 日本企業, 海外展開, インドネシア, ベトナム, タイ, 市場開拓",
  alternates: {
    canonical: "https://dayou-international.com/about",
  },
  openGraph: {
    title: "私達について | DAYOU International",
    description:
      "大有国際は、専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急成長を力強くサポート。",
    url: "https://dayou-international.com/about",
    siteName: "DAYOU International",
    images: [
      {
        url: "https://dayou-international.com/assets/aboutus.jpg",
        width: 1200,
        height: 630,
        alt: "DAYOU International - 日本企業の東南アジア進出をサポート",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "私達について | DAYOU International",
    description:
      "大有国際は、日本ブランドの東南アジア市場での急成長を力強くサポート。",
    images: ["https://dayou-international.com/assets/aboutus.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutUs />
    </main>
  );
}
