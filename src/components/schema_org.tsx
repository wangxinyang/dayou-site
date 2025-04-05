"use client";

import Script from "next/script";

export function SchemaOrgScript() {
  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DAYOU International",
          url: "https://dayou-international.com",
          logo: "https://dayou-international.com/logo.png",
          description:
            "大有国際は、日本に根ざし、東南アジア市場を積極的に開拓しています。専門的な実力と的確な戦略で、日本ブランドの東南アジア市場での急成長を力強くサポート。",
          slogan: "Connect Japan to Asia through Beauty!",
          areaServed: [
            {
              "@type": "Country",
              name: "インドネシア",
            },
            {
              "@type": "Country",
              name: "ベトナム",
            },
            {
              "@type": "Country",
              name: "タイ",
            },
          ],
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "15.870032",
              longitude: "100.992541",
            },
            geoRadius: "2000",
          },
        }),
      }}
    />
  );
}
