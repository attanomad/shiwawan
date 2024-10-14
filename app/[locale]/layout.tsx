import Footer from "@/components/footer/Footer";
import NavBar from "@/components/nav-bar/NavBar";
import SectionCta from "@/components/section-cta/SectionCta";
import { routing } from "@/i18n/routing";
import type { Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-en" });
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-th",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: "Shiwawan Studio",
    description: "Web design and development studio",
    icons: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#c1ffce" },
    ],
    manifest: "/site.webmanifest",
    other: {
      "msapplication-TileColor": "#da532c",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${notoSansThai.variable} ${notoSansThai.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <SectionCta />
          <Footer />
          <NavBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
