/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Zadar take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided Old Town and waterfront route for one of Croatia’s easiest cruise cities to explore on foot.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Krka Waterfalls, lake cruise and Skradin — our strongest organised day beyond the city.",
    href: "/shore-excursions/krka-waterfalls-skradin",
    icon: "luxury",
  },
  {
    id: "sea-organ",
    title: "Sea Organ",
    body: "Waves that play music on stone steps — Zadar’s most unique waterfront experience.",
    href: "/guides/sea-organ",
    icon: "sunrise",
  },
  {
    id: "history",
    title: "History",
    body: "Roman Forum, St Donatus and Venetian gates on a compact historic peninsula.",
    href: "/guides/old-town-guide",
    icon: "route",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Sunset light, Greeting to the Sun and Adriatic viewpoints made for the camera.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "food",
    title: "Food",
    body: "Harbour cafés, Dalmatian plates and Maraschino heritage near the Old Town.",
    href: "/guides/food-guide",
    icon: "food",
  },
  {
    id: "families",
    title: "Families",
    body: "Manageable walks and flexible private days when travelling with children.",
    href: "/shore-excursions/private-zadar-maraschino-walk",
    icon: "family",
  },
];
