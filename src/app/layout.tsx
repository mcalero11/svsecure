import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Metadata } from "next";
import MetadataObject from "@/core/metadata.json";

export const metadata: Metadata = {
  title: MetadataObject.title,
  description: MetadataObject.description,
};

const WorkSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={MetadataObject.language} className={WorkSans.className}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
