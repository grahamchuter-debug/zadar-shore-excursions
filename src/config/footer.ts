/**
 * Destination-specific footer link columns.
 * Clone procedure: replace labels/hrefs for the new port only.
 */

export type FooterLink = { href: string; label: string };

export type FooterColumns = {
  blurb: string;
  chooseTitle: string;
  choose: FooterLink[];
  planTitle: string;
  plan: FooterLink[];
  bookTitle: string;
  book: FooterLink[];
  independenceClause: string;
};

export const footerColumns: FooterColumns = {
  blurb:
    "Helping cruise passengers plan a confident day ashore in Zadar with honest independent advice — Old Town, Sea Organ and Krka.",
  chooseTitle: "Choose your day",
  choose: [
    { href: "/compare/city-or-krka", label: "City or Krka?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/shore-excursions/krka-waterfalls-skradin", label: "Editor's Choice" },
    { href: "/wow-collection", label: "The Wow Collection" },
  ],
  planTitle: "Plan your port day",
  plan: [
    { href: "/cruise-planner", label: "Cruise Planner" },
    { href: "/shore-excursions", label: "Shore Excursions" },
    { href: "/cruise-port-guide", label: "Port Guide" },
    { href: "/guides/sea-organ", label: "Sea Organ Guide" },
  ],
  bookTitle: "Book & contact",
  book: [
    { href: "/ship-schedules", label: "Cruise Ship Schedule" },
    { href: "/enquire", label: "Contact concierge" },
    { href: "/faq", label: "FAQ" },
  ],
  independenceClause: "not affiliated with any cruise line or the local port authority.",
};
