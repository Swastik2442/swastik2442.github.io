import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Alex_Brush, Notable } from 'next/font/google'
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

// Local Fonts
const primaryFont = localFont({ src: "../../../fonts/PricedownBl-regular.otf" });
const titleFont = localFont({ src: "../../../fonts/Rage Italic.ttf" });

// Alternative Fonts - https://fonts.google.com/share?selection.family=Notable|Alex+Brush
// const primaryFont = Notable({ weight: "400", subsets: ['latin'] });
// const titleFont =  Alex_Brush({ weight: "400", subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>
        <div className="main">
          <div className="topNames">
            <div className={`leftName ${titleFont.className}`}>
              <strong>{ownerName}</strong>
            </div>
            <div className="rightName">
              pause menu
            </div>
          </div>
          {children}
          <div className="borderOne"></div>
          <div className="borderTwo"></div>
          <div className="borderThree"></div>
          <div className="borderFour"></div>
        </div>
      </body>
    </html>
  );
}
