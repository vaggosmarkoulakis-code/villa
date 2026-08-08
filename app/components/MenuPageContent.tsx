import { copy, venue, type Locale } from "../content";
import { MenuExplorer } from "../menu/MenuExplorer";
import { NightRail } from "./NightRail";
import { SignatureCard } from "./SignatureCard";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type MenuPageContentProps = {
  locale: Locale;
};

export function MenuPageContent({ locale }: MenuPageContentProps) {
  const t = copy[locale];

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} section="menu" />
      <NightRail />

      <section className="menu-page-hero" aria-labelledby="menu-title">
        <span className="section-kicker">{t.hero.tagline}</span>
        <h1 id="menu-title">{t.menu.title}</h1>
      </section>

      <section className="menu-signatures" aria-labelledby="signature-title">
        <div className="section-copy compact">
          <h2 id="signature-title">{t.menu.signatureTitle}</h2>
        </div>

        <div className="signature-grid">
          {t.signatures.map((item, index) => (
            <SignatureCard
              key={item.title}
              index={index}
              group={item.group}
              image={item.image}
              label={t.menu.categories[item.group]}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <MenuExplorer locale={locale} />

      <section className="menu-reserve" aria-labelledby="menu-reserve-title">
        <div className="section-copy compact">
          <h2 id="menu-reserve-title">{t.menu.reserveTitle}</h2>
          <div className="link-row">
            <a className="btn-reserve" href={`tel:${venue.phonePrimaryHref}`}>
              {t.actions.reserve}
            </a>
          </div>
        </div>
        <div className="contact-strip">
          <a href={`tel:${venue.phonePrimaryHref}`}>{venue.phonePrimary}</a>
          <a href={`tel:${venue.phoneSecondaryHref}`}>{venue.phoneSecondary}</a>
          <span>{t.venue.addressFull}</span>
          <a href={venue.map} target="_blank" rel="noreferrer">
            {t.menu.map}
          </a>
          <a href={venue.instagram} target="_blank" rel="noreferrer">
            {t.footer.instagram}
          </a>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
