/**
 * The evening rail. One brass hairline down the page margin, stamped with the
 * only two times Villa publishes. The lit dot marks how far into the night the
 * reader has scrolled. Decorative here — the hours are stated as text in the
 * facts table, so this is hidden from assistive tech rather than repeated.
 */
export function NightRail() {
  return (
    <div className="night-rail" aria-hidden="true">
      <span className="night-rail-time">18:00</span>
      <span className="night-rail-line">
        <span className="night-rail-dot" />
      </span>
      <span className="night-rail-time">03:00</span>
    </div>
  );
}
