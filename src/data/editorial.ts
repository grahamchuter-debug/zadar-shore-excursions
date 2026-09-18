import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall choice for a well-timed Zadar cruise day.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Roman Forum, St Donatus and Venetian layers on the peninsula.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Walk It Yourself",
    description:
      "A realistic self-guided Zadar day within easy reach of the shuttle — when independence is genuinely best.",
  },
  {
    id: "best-coastal",
    label: "Best Coastal Experience",
    shortLabel: "Coastal",
    description: "Adriatic waterfront, Šibenik stone and Dalmatian coastal light.",
  },
  {
    id: "best-view",
    label: "Best Views",
    shortLabel: "Views",
    description: "Sunset waterfront, Greeting to the Sun and Adriatic outlooks.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description: "Our future Zadar small-group flagship, currently in preparation.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Manageable walks and flexible private pacing with children aboard.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Sea Organ steps, sunset light and national-park cascades.",
  },
  {
    id: "best-food",
    label: "Best Food & Wine",
    shortLabel: "Food & Wine",
    description: "Harbour cafés, Dalmatian cuisine and Maraschino heritage.",
  },
  {
    id: "best-luxury",
    label: "Best Private Tour",
    shortLabel: "Private",
    description: "Dedicated transport and flexible pacing for your own party.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Quieter lanes and local pauses beyond the busiest waterfront edge.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary transfers or expense.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Old Town and waterfront highlights when usable hours are limited.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Scenic Krka Waterfalls, Lake Cruise & Skradin — our strongest overall cruise experience beyond the city.",
    href: "/shore-excursions/krka-waterfalls-skradin",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🌅",
    label: "Best First-Time Day",
    description:
      "Walk It Yourself through historic Zadar — often the finest introduction for first-time cruise visitors.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open Walk It Yourself",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Historic Walk",
    description:
      "Old Town Historical Walk — Roman and Venetian layers with a guide when you want the stories.",
    href: "/shore-excursions/old-town-historical-walk",
    cta: "Explore with a guide",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food Experience",
    description:
      "Private Zadar Walk & Maraschino Tasting — landmark streets with the city’s signature liqueur.",
    href: "/shore-excursions/private-zadar-maraschino-walk",
    cta: "Taste Zadar",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Beyond the City",
    description:
      "Krka or Plitvice when your port call supports the road time — scenery beyond the peninsula.",
    href: "/compare/city-or-krka",
    cta: "Compare city vs Krka",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description:
      "Sea Organ, Greeting to the Sun and sunset light — Zadar’s most photogenic waterfront.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description:
      "Private Krka or a gentle Old Town walk keeps pacing flexible for mixed-age parties.",
    href: "/shore-excursions/private-krka-national-park",
    cta: "See private options",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description:
      "Land Gate to Sea Organ — a free self-guided route with an honest return-to-ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Adriatic Zadar Discovery",
    description:
      "A future maximum-eight-guest Zadar day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
