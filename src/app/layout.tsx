import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { Metadata } from "next";
import "@fontsource/work-sans";

export const metadata: Metadata = {
  title: "svsecure",
  description:
    "Nos dedicamos a brindar info sobre los delítos informáticos más comunes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body id="__next">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
