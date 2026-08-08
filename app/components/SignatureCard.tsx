"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { CSSProperties } from "react";
import type { SignatureGroup } from "../content";
import { usePointerField } from "./hooks/usePointerField";

type SignatureCardProps = {
  title: string;
  label: string;
  group: SignatureGroup;
  image: string;
  index: number;
  /** Omit to render a static card — no tilt, no lift, nothing promising a click. */
  href?: string;
};

export function SignatureCard({ title, label, group, image, index, href }: SignatureCardProps) {
  const ref = usePointerField<HTMLAnchorElement>();
  const style = { "--i": index } as CSSProperties;

  const inner = (
    <>
      <div className="signature-photo">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="signature-copy">
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      {href ? <span className="card-sheen" aria-hidden="true" /> : null}
    </>
  );

  if (!href) {
    return (
      <article className="signature-card" data-group={group} style={style}>
        {inner}
      </article>
    );
  }

  return (
    <Link className="signature-card" data-group={group} href={href} ref={ref} style={style}>
      {inner}
    </Link>
  );
}
