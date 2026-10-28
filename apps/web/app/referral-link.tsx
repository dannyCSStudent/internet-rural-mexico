"use client";

import type { ReactNode } from "react";

import { trackReferralClick } from "./analytics";
import { starlinkReferralUrl } from "./site-content";

type ReferralLinkProps = {
  children: ReactNode;
  className: string;
  label: string;
  page: string;
};

export function ReferralLink({
  children,
  className,
  label,
  page,
}: ReferralLinkProps) {
  return (
    <a
      aria-label={`${label}. Enlace de referencia; se abre en una pestaña nueva.`}
      className={className}
      href={starlinkReferralUrl}
      onClick={() =>
        trackReferralClick({
          destination: starlinkReferralUrl,
          label,
          page,
          result: "direct",
        })
      }
      rel="noreferrer"
      target="_blank"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
