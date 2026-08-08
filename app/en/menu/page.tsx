import type { Metadata } from "next";
import { MenuPageContent } from "../../components/MenuPageContent";
import { copy } from "../../content";

export const metadata: Metadata = {
  title: copy.en.seo.menu.title,
  description: copy.en.seo.menu.description,
  alternates: {
    canonical: "/en/menu",
    languages: { el: "/menu", en: "/en/menu" },
  },
  openGraph: {
    locale: "en_GB",
    title: copy.en.seo.menu.title,
    description: copy.en.seo.menu.description,
  },
};

export default function EnglishMenuPage() {
  return <MenuPageContent locale="en" />;
}
