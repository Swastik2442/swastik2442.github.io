"use client";

import dynamic from "next/dynamic";
import { tertiaryFont } from "@/config";
import Header from "@/components/header";
import Footer from "@/components/footer";

const VCBorders = dynamic(
  () => import("@/components/vcBorders"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={tertiaryFont.className} style={{ minHeight: "100%" }}>
      <Header />
      <VCBorders>
        {children}
      </VCBorders>
      <Footer />
    </body>
  );
}
