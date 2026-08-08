import type { Metadata } from "next";
import { InfoPageContent } from "./components/InfoPageContent";
import { copy } from "./content";

export const metadata: Metadata = {
  title: copy.el.seo.home.title,
  description: copy.el.seo.home.description,
  alternates: {
    canonical: "/",
    languages: { el: "/", en: "/en" },
  },
  openGraph: {
    locale: "el_GR",
    title: copy.el.seo.home.title,
    description: copy.el.seo.home.description,
  },
};

export default function InfoPage() {
  return <InfoPageContent locale="el" />;
}
