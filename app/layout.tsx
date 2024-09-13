import Footer from "@/components/footer/Footer";
import NavBar from "@/components/nav-bar/NavBar";
import SectionCta from "@/components/section-cta/SectionCta";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-th",
});

export const metadata: Metadata = {
  title: "Shiwawan Studio",
  description: "Web design and development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSansThai.variable} ${notoSansThai.className}`}
      >
        {children}
        <SectionCta />
        <Footer />
        <NavBar />
      </body>
    </html>
  );
}
