import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// 定义日本ゴシック体字体
const gothic = localFont({
  src: [
    {
      path: "../fonts/NotoSansJP-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansJP-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/NotoSansJP-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dayou-international.com"),
  title: {
    default: "DAYOU International - 日本企業の東南アジア進出をサポート",
    template: "%s | DAYOU International",
  },
  description:
    "大有国際は、日本企業の東南アジア市場進出を専門的にサポート。インドネシア、ベトナム、タイなどの市場への展開戦略を提供します。",
  keywords:
    "大有国際, DAYOU International, 東南アジア市場, 日本企業, 海外展開, インドネシア, ベトナム, タイ",
  authors: [{ name: "DAYOU International" }],
  creator: "DAYOU International",
  publisher: "DAYOU International",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "DAYOU International",
    title: "DAYOU International - 日本企業の東南アジア進出をサポート",
    description: "大有国際は、日本企業の東南アジア市場進出を専門的にサポート。",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAYOU International",
    description: "大有国際は、日本企業の東南アジア市場進出を専門的にサポート。",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`scroll-smooth bg-slate-100 ${gothic.variable}`}>
      <body className={`overflow-x-hidden text-foreground font-gothic`}>
        {children}
      </body>
    </html>
  );
}
