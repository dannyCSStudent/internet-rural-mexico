"use client";

export type ReferralClickEvent = {
  destination: string;
  label: string;
  page: string;
  result: string;
};

const eventName = "irm:referral-click";

export function trackReferralClick(event: ReferralClickEvent) {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: {
        ...event,
        timestamp: new Date().toISOString(),
      },
    }),
  );

  if (process.env.NODE_ENV === "development") {
    console.info(eventName, event);
  }
}
