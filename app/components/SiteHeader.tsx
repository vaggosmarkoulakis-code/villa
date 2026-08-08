/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { copy, logoSrc, routes, venue, type Locale } from "../content";

type SiteHeaderProps = {
  locale: Locale;
  section?: "home" | "menu";
};

const iconProps = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 14.5s5-4.2 5-8a5 5 0 0 0-10 0c0 3.8 5 8 5 8Z" />
      <circle cx="8" cy="6.4" r="1.9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5.6 2.2 7 5 5.7 6.4a8.4 8.4 0 0 0 3.9 3.9L11 9l2.8 1.4v2.4c0 .6-.5 1-1.1 1A11.2 11.2 0 0 1 2.2 3.3c0-.6.5-1.1 1.1-1.1h2.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2.4" y="2.4" width="11.2" height="11.2" rx="3.4" />
      <circle cx="8" cy="8" r="2.7" />
      <circle cx="11.3" cy="4.7" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteHeader({ locale, section = "home" }: SiteHeaderProps) {
  const t = copy[locale];
  const route = routes[locale];
  const alternateHref = section === "menu" ? route.alternateMenu : route.alternateHome;

  return (
    <header className="site-header">
      <div className="header-utility">
        <a className="utility-address" href={venue.map} target="_blank" rel="noreferrer">
          <PinIcon />
          {t.venue.addressFull}
        </a>
        <a className="utility-phone" href={`tel:${venue.phonePrimaryHref}`}>
          <PhoneIcon />
          {venue.phonePrimary}
        </a>
        <a className="utility-instagram" href={venue.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon />
          {t.footer.instagram}
        </a>
        <Link className="language-switch" href={alternateHref} aria-label={t.nav.switchLabel}>
          {route.code}
        </Link>
      </div>

      <nav className="site-nav" aria-label="Villa navigation">
        <Link className="villa-lockup" href={route.home} aria-label="Villa home">
          <img src={logoSrc} alt="" width={92} height={82} />
        </Link>
        <div className="nav-links">
          <Link
            aria-current={section === "home" ? "page" : undefined}
            className={section === "home" ? "is-current" : undefined}
            href={route.home}
          >
            {t.nav.info}
          </Link>
          <Link
            aria-current={section === "menu" ? "page" : undefined}
            className={section === "menu" ? "is-current" : undefined}
            href={route.menu}
          >
            {t.nav.menu}
          </Link>
          <Link href={`${route.home}#events`}>{t.nav.events}</Link>
        </div>
        <div className="nav-actions">
          <a className="btn-reserve btn-compact" href={`tel:${venue.phonePrimaryHref}`}>
            {t.actions.reserve}
          </a>
        </div>
      </nav>
    </header>
  );
}
