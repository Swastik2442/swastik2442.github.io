import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const ownerName = "Swastik Kulshreshtha", ownerBio = "Yet another Human from Earth", ownerLogo = "https://avatars.githubusercontent.com/u/135314424";
export const siteHost = "https://swastik2442.github.io", siteTitle = ownerName, twitterTag = "swastik2442";

export const metadata: Metadata = {
  title: siteTitle,
  description: ownerBio,
  authors: [{"name": ownerName}],
  icons: "favicon.ico",
  openGraph: {
    type: "website",
    url: siteHost,
    title: siteTitle,
    description: ownerBio,
    siteName: siteTitle,
    images: [{
      url: ownerLogo,
    }],
  },
  twitter: {
    card: "summary",
    creator: `@${twitterTag}`,
    "images": ownerLogo,
  },
  verification: {
    google: "39d45a3da377d5a6",
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

const pricedownFont = localFont({ src: '../../../fonts/PricedownBl-regular.otf' })
const rageItalicFont = localFont({ src: '../../../fonts/Rage Italic.ttf' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pricedownFont.className}>
        <div className="topNames">
          <div className={`leftName ${rageItalicFont.className}`}>
            <strong>{ownerName}</strong>
          </div>
          <div className="rightName">
            {ownerName}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
