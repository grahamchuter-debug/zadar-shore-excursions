/**
 * World 2.0 Destination Configuration — Zadar Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "zadar",
  name: "Zadar Shore Excursions",
  destination: "Zadar",
  descriptor: "Shore Excursions",
  strapline: "Croatia's City of Sunsets",
  domain: "zadarshoreexcursions.com",
  url: "https://zadarshoreexcursions.com",
  description: "Croatia's City of Sunsets — independent cruise shore excursions, Walk It Yourself guidance and honest port advice for Zadar.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "ZD",
  pagesProject: "zadar-shore-excursions",
  paymentsWorkerName: "zadar-payments",
  d1DatabaseName: "zadar-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@zadarshoreexcursions.com",
    bookings: "bookings@zadarshoreexcursions.com",
    privacy: "privacy@zadarshoreexcursions.com",
  },
  legal: {
    tradingName: "Zadar Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "zadar",
    meetingPointLabel: "Zadar Cruise Port",
    country: "Croatia",
  },
  seo: {
    defaultKeywords: [
      "Zadar shore excursions",
      "Zadar cruise excursions",
      "Zadar cruise port guide",
      "Krka from Zadar",
      "Sea Organ Zadar",
      "Zadar Old Town",
      "Walk It Yourself Zadar",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Editor's Choice",
    "Historic Cities",
    "Nature",
    "Food & Wine",
    "Private",
    "Family Friendly",
    "Coastal",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
