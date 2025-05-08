import { tertiaryFont } from "@/config";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Borders from "@/components/vcBorders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={tertiaryFont.className}>
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
      <Borders />
    </body>
  );
}
