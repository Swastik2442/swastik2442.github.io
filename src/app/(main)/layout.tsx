import type { Metadata, Viewport } from "next";
import { Notable } from 'next/font/google';
import { ownerName, siteTitle, siteDescription, siteLogo, siteHost, verifyGoogle, twitterUsername } from "../config";
import Header from "../_components/header";
import Footer from "../_components/footer";
import Borders from "../_components/vcBorders";
import "./globals.css";

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
    google: verifyGoogle,
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

const primaryFont = Notable({ weight: "400", subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <div className="main">
          <Header />
          {children}
          <Borders />
          <Footer />
        </div>
      </body>
    </html>
  );
}
