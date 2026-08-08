import type { Metadata } from "next";
import { MenuPageContent } from "../components/MenuPageContent";
import { copy } from "../content";

export const metadata: Metadata = {
  title: copy.el.seo.menu.title,
  description: copy.el.seo.menu.description,
  alternates: {
    canonical: "/menu",
    languages: { el: "/menu", en: "/en/menu" },
  },
  openGraph: {
    locale: "el_GR",
    title: copy.el.seo.menu.title,
    description: copy.el.seo.menu.description,
  },
};

export default function MenuPage() {
  return <MenuPageContent locale="el" />;
}
