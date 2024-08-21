import type { Metadata, Viewport } from "next";
import { ownerName, siteTitle, siteDescription, siteLogo, siteHost, verificationGoogle, twitterUsername, secondaryFont } from "@/config";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{"name": ownerName}],
  icons: "favicon.ico",
  openGraph: {
    type: "website",
    url: siteHost,
    title: siteTitle,
    description: siteDescription,
    siteName: siteTitle,
    images: [{
      url: siteLogo,
    }],
  },
  twitter: {
    card: "summary",
    creator: `@${twitterUsername}`,
    "images": siteLogo,
  },
  verification: {
    google: verificationGoogle,
  },
  appleWebApp: {
    capable: false,
  },
  other: {
    "mobile-web-app-capable": "no",
  }
};

export const viewport: Viewport = {
  themeColor: "#f8f6f4",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={secondaryFont.className} style={{ background: "none" }}>
        {children}
      </body>
    </html>
  );
}
