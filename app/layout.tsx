import Footer from "@/components/footer/Footer";
import NavBar from "@/components/nav-bar/NavBar";
import SectionCta from "@/components/section-cta/SectionCta";
import type { Metadata, Viewport } from "next";
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
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#c1ffce" },
  ],
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
