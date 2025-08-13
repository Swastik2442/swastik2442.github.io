"use client";

import dynamic from "next/dynamic";
import { tertiaryFont } from "@/config";
import Header from "@/components/header";

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
    <body className={`mainBody ${tertiaryFont.className}`}>
      <Header />
      <VCBorders>
        {children}
      </VCBorders>
    </body>
  );
}
