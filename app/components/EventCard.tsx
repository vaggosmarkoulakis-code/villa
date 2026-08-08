"use client";

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { usePointerField } from "./hooks/usePointerField";

type EventCardProps = {
  kicker: string;
  title: string;
  detail: string;
  image: string;
  index: number;
  href: string;
};

/**
 * The photo, the wash and the copy sit on three planes and move at different
 * rates under the pointer, so the card gains depth without anything sliding
 * far enough to be read as a glitch.
 */
export function EventCard({ kicker, title, detail, image, index, href }: EventCardProps) {
  const ref = usePointerField<HTMLAnchorElement>();

  return (
    <a className="event-card" href={href} ref={ref} style={{ "--i": index } as CSSProperties}>
      <img src={image} alt={title} loading="lazy" />
      <div className="event-card-copy">
        <span>{kicker}</span>
        <h3>{title}</h3>
        <strong>{detail}</strong>
      </div>
    </a>
  );
}
