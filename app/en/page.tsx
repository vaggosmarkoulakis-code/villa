import type { Metadata } from "next";
import { InfoPageContent } from "../components/InfoPageContent";
import { copy } from "../content";

export const metadata: Metadata = {
  title: copy.en.seo.home.title,
  description: copy.en.seo.home.description,
  alternates: {
    canonical: "/en",
    languages: { el: "/", en: "/en" },
  },
  openGraph: {
    locale: "en_GB",
    title: copy.en.seo.home.title,
    description: copy.en.seo.home.description,
  },
};

export default function EnglishInfoPage() {
  return <InfoPageContent locale="en" />;
}
