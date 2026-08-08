/* eslint-disable @next/next/no-img-element */
import { copy, logoSrc, type Locale } from "../content";

type SiteFooterProps = {
  locale: Locale;
};

/**
 * Deliberately bare. The contact strip sits directly above it with the phones,
 * the address, the map and Instagram, and the header carries the same set at
 * the top — a third copy here would be the fourth time on the page.
 */
export function SiteFooter({ locale }: SiteFooterProps) {
  const t = copy[locale];

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={logoSrc} alt="Villa" width={132} height={118} />
      </div>
      <span className="footer-credit">{t.footer.credit}</span>
    </footer>
  );
}
