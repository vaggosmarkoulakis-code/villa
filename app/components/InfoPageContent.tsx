/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CSSProperties } from "react";
import { copy, logoSrc, routes, venue, type Locale } from "../content";
import { EventCard } from "./EventCard";
import { NightRail } from "./NightRail";
import { SignatureCard } from "./SignatureCard";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type InfoPageContentProps = {
  locale: Locale;
};

export function InfoPageContent({ locale }: InfoPageContentProps) {
  const t = copy[locale];
  const route = routes[locale];

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} />
      <NightRail />

      <section className="hero-minimal" aria-labelledby="villa-hero-title">
        <div className="hero-center reveal">
          <img className="hero-logo" src={logoSrc} alt="Villa logo" width={430} height={386} />
          <h1 className="sr-only" id="villa-hero-title">
            Villa
          </h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <p className="hero-line">{t.hero.line}</p>
          <a className="btn-reserve hero-cta" href={`tel:${venue.phonePrimaryHref}`}>
            {t.actions.reserve}
          </a>
        </div>
      </section>

      <section className="pillars" aria-label={t.nav.info}>
        {t.highlights.map((item, index) => (
          <article className="pillar" style={{ "--i": index } as CSSProperties} key={item.title}>
            <span className="section-kicker">{item.kicker}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="atmosphere-section" id="info" aria-labelledby="statement-title">
        <div className="atmosphere-media atmosphere-media-main">
          <img src="/villa-scenes/terrace-night.jpg" alt="Villa courtyard bar at night" loading="lazy" />
        </div>
        <div className="atmosphere-copy">
          <span className="section-kicker">{t.home.statementLabel}</span>
          <h2 id="statement-title">{t.home.statementTitle}</h2>
        </div>
        <div className="atmosphere-media atmosphere-media-side">
          <img src="/villa-scenes/bar-interior.jpg" alt="Villa bar interior" loading="lazy" />
        </div>
      </section>

      <section className="menu-preview" id="menu-preview" aria-labelledby="menu-preview-title">
        <div className="menu-preview-copy">
          <h2 id="menu-preview-title">{t.home.signaturesTitle}</h2>
          <Link className="text-link" href={route.menu}>
            {t.actions.menu}
          </Link>
        </div>
        <div className="signature-row">
          {t.signatures.map((item, index) => (
            <SignatureCard
              key={item.title}
              index={index}
              group={item.group}
              href={route.menu}
              image={item.image}
              label={t.menu.categories[item.group]}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <section className="events-section" id="events" aria-labelledby="events-title">
        <div className="events-heading">
          <h2 id="events-title">{t.home.eventsTitle}</h2>
        </div>

        <div className="events-grid">
          {t.events.map((event, index) => (
            <EventCard
              key={event.title}
              index={index}
              detail={event.detail}
              href={`tel:${venue.phonePrimaryHref}`}
              image={event.image}
              kicker={event.kicker}
              title={event.title}
            />
          ))}
        </div>
      </section>

      <section className="location-section" aria-labelledby="location-title">
        <div className="section-copy">
          <h2 id="location-title">{t.home.locationTitle}</h2>
          <a className="text-link" href={venue.map} target="_blank" rel="noreferrer">
            {t.actions.map}
          </a>
        </div>

        <div className="map-panel" aria-label={venue.location}>
          <div className="map-logo-badge" aria-hidden="true">
            <img src={logoSrc} alt="" width={126} height={114} />
          </div>
          <img
            className="map-screenshot"
            src="/location/villa-map.png"
            alt={t.home.locationTitle}
            width={765}
            height={445}
            loading="lazy"
          />
          <div className="map-details">
            <strong>{t.venue.locationTitle}</strong>
          </div>
        </div>

        <div className="contact-strip" aria-label="Reservations and location">
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
