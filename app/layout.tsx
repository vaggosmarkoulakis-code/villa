import type { Metadata } from "next";
import { Mansalva, Manrope, Zen_Old_Mincho } from "next/font/google";
import { copy, venue } from "./content";
import "./globals.css";

// The house voice — written by hand. Headings and the hero line.
const villaDisplay = Mansalva({
  variable: "--font-display",
  subsets: ["greek", "latin"],
  weight: "400",
  fallback: ["Georgia", "serif"],
});

// The food's voice. A mincho serif for the plates, which is where the sushi
// side of the kitchen earns it. Dish names only.
const villaDish = Zen_Old_Mincho({
  variable: "--font-dish",
  subsets: ["greek", "latin"],
  weight: ["400", "500"],
  fallback: ["Georgia", "serif"],
});

// The practical layer: labels, nav, buttons, the short paragraphs.
const villaBody = Manrope({
  variable: "--font-body",
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: copy.el.seo.home.title,
  description: copy.el.seo.home.description,
  keywords: [
    "Villa Τυμπάκι",
    "bar Τυμπάκι",
    "sushi Τυμπάκι",
    "cocktails Ηράκλειο",
    "Villa Tympaki",
    "bar Tympaki Crete",
  ],
  applicationName: venue.name,
  other: {
    "codex-preview": "development",
  },
  alternates: {
    canonical: "/",
    languages: {
      el: "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: venue.name,
    locale: "el_GR",
    alternateLocale: ["en_GB"],
    title: copy.el.seo.home.title,
    description: copy.el.seo.home.description,
  },
  icons: {
    icon: "/brand/villa-logo-trimmed.png",
    shortcut: "/brand/villa-logo-trimmed.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${villaDisplay.variable} ${villaDish.variable} ${villaBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
