import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["thai"] });

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
      <body className={`${inter.className} ${notoSansThai.className}`}>
        {children}
      </body>
    </html>
  );
}
