import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Croatia's City of Sunsets.";

export const homepageSubheading =
  "Relaxed, coastal and quietly artistic — explore historic Zadar on foot, discover Krka’s waterfalls, or simply slow down on one of Europe’s most beautiful waterfronts.";

export const homepageDestinationLine =
  "Old Town · Sea Organ · Greeting to the Sun · Krka · Dalmatian coast";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Zadar for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to the historic peninsula, the Sea Organ waterfront, or a longer Krka day — with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Zadar",
    shortLabel: "First visit",
    description:
      "Compare walking the Old Town independently, a guided historic introduction, or Krka National Park before you choose.",
    href: "/compare/first-time-zadar-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Walk It Yourself",
    description:
      "Zadar is one of Croatia’s easiest cruise cities to explore on foot after the shuttle — history, cafés and waterfront installations at your pace.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored Zadar plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across historic Zadar, Krka, Šibenik and Dalmatian scenery — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & city guides",
    description:
      "Honest advice on the shuttle into town, Walk It Yourself, the Sea Organ, Greeting to the Sun and when an organised tour actually helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Zadar will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Adriatic light. Roman stone. A sunset Hitchcock admired.",
  body: [
    "Zadar sits where the Adriatic meets a compact peninsula of Roman forum and Venetian gates — not a city that shouts with grand monuments, but one that gathers you into atmosphere. Salt air, café tables, church domes and a waterfront that feels quietly theatrical at dusk.",
    "Alfred Hitchcock called the sunset here the most beautiful in the world. Whether or not you chase the perfect photograph, you understand the claim when the light softens over the steps of the Sea Organ and the Greeting to the Sun begins to glow.",
    "The Sea Organ sings with the waves; the solar circle answers with light. Together they make Zadar feel contemporary and ancient at once — artistic without pretension, historic without stiffness.",
    "That is why this port quietly becomes many visitors’ favourite Croatian call: less spectacle, more presence. Stay for the Old Town. Leave for Krka if the countryside calls. Either way, protect time for the waterfront — it is the city’s signature.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "Independence is a first-class option",
    body: "Zadar’s historic peninsula is one of Croatia’s easiest cruise cities to explore after the shuttle. History, cafés and waterfront walks can make a wonderful day without an organised tour.",
  },
  {
    title: "Excursions shine beyond the city",
    body: "Krka National Park and the surrounding coastline deliver exceptional value when you want Croatia’s dramatic scenery beyond the peninsula.",
  },
  {
    title: "Do not miss the waterfront installations",
    body: "Even if you take a shore excursion, leave time for the Sea Organ and Greeting to the Sun — experiences that should not be missed.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Zadar without an excursion?",
      answer:
        "Yes. Zadar is one of Croatia’s easiest cruise cities for independent exploration. After the shuttle to the Old Town area, many visitors walk the historic peninsula, café-hop and enjoy the waterfront installations with a sensible return buffer.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Scenic Krka Waterfalls, Lake Cruise & Skradin — our strongest overall cruise experience beyond the city when hours ashore allow.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when you want Krka, Plitvice, Šibenik or guided historic narrative. Skip a tour when you prefer flexible wandering, cafés and self-paced time at the Sea Organ and Greeting to the Sun.",
    },
    {
      question: "How do I get from the cruise port to the Old Town?",
      answer:
        "Ships typically berth at Gaženica. A shuttle usually connects toward the historic centre near the Land Gate — confirm arrangements on the day and keep your all-aboard time in mind.",
    },
  ];
}

export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice-krka",
    type: "guided",
    title: "Krka National Park",
    eyebrow: "Editor's Choice",
    description:
      "Cascading waterfalls, a lake cruise and Skradin — our strongest organised day beyond the city.",
    href: "/shore-excursions/krka-waterfalls-skradin",
    cta: "View Editor's Choice",
    imageKey: "nature",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Historic Zadar",
    eyebrow: "Walk It Yourself",
    description:
      "A free self-guided route through the Old Town and waterfront — often the finest day ashore.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "3–5 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "sea-organ-sunset",
    type: "photography",
    title: "Sea Organ & Sunset",
    eyebrow: "The city's most unique experience",
    description:
      "Waves that play music and a solar circle that glows at dusk — Zadar’s signature waterfront.",
    href: "/guides/sea-organ",
    cta: "Read the Sea Organ guide",
    imageKey: "sea-organ",
  },
  {
    slug: "croatian-coast",
    type: "nature",
    title: "Croatian Coast",
    eyebrow: "Islands & Adriatic scenery",
    description:
      "Dalmatian coastline, Šibenik stone and Adriatic light when you want scenery beyond the peninsula.",
    href: "/shore-excursions/sibenik-old-town-walk",
    cta: "Explore the coast",
    imageKey: "coastal",
  },
  {
    slug: "food-local-life",
    type: "food-wine",
    title: "Food & Local Life",
    eyebrow: "Dalmatian cuisine & cafés",
    description:
      "Harbour tables, Maraschino heritage and café culture that make Zadar feel lived-in.",
    href: "/guides/food-guide",
    cta: "Taste Zadar",
    imageKey: "food",
  },
];

export const experienceCards: ExperienceCard[] = [
  ...featuredExperienceCards,
  {
    slug: "history",
    type: "history",
    title: "History",
    description: "Roman Forum, St Donatus and Venetian layers on the historic peninsula.",
    href: "/guides/old-town-guide",
    cta: "Explore historic Zadar",
    imageKey: "historic",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description: "Manageable Old Town walks and flexible private pacing with children aboard.",
    href: "/shore-excursions/private-krka-national-park",
    cta: "See family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description: "Flexible private pacing when your party wants the day shaped around you.",
    href: "/shore-excursions",
    cta: "Browse private options",
    imageKey: "private",
  },
  {
    slug: "luxury",
    type: "luxury",
    title: "Signature days",
    description: "Future small-group Adriatic concepts currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview signature ideas",
    imageKey: "wine",
  },
];

export const homepageHero = {
  eyebrow: "Zadar Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Zadar?",
  subtitle:
    "Explore the historic Old Town independently, discover Croatia’s spectacular coastline and national parks, or simply slow down on one of Europe’s most beautiful waterfronts — three clear paths shaped around your hours ashore.",
  cards: [
    {
      slug: "explore-historic-zadar",
      emoji: "🚶",
      title: "Explore Historic Zadar",
      tagline:
        "Land Gate to Roman Forum, St Donatus, the Sea Organ and harbour cafés — atmosphere over monuments, at your own pace.",
      highlights: [
        "One of Croatia’s easiest cruise cities on foot",
        "Roman and Venetian layers on a compact peninsula",
        "Sea Organ and Greeting to the Sun",
        "Ideal for history, cafés and waterfront walks",
        "No excursion required for a wonderful day",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-krka",
      emoji: "💧",
      title: "Discover Krka National Park",
      tagline:
        "Cascading waterfalls, a lake cruise and Skradin — Croatia’s dramatic scenery beyond the city when your hours allow.",
      highlights: [
        "Editor’s Choice nature day from Zadar",
        "Waterfalls and national-park atmosphere",
        "Skradin town time",
        "Best on a solid, unhurried port call",
        "Honest trade-off versus Old Town lingering",
      ],
      cta: "Plan Krka",
      href: "/shore-excursions/krka-waterfalls-skradin",
      imageKey: "nature",
      wide: true,
    },
    {
      slug: "editors-choice-adventure",
      emoji: "⭐",
      title: "Editor's Choice Adventure",
      tagline:
        "Our strongest overall organised cruise experience from Zadar — Krka’s waterfalls sequenced with a composed return to ship.",
      highlights: [
        "Selected for exceptional cruise-day value",
        "Scenery you cannot invent on foot from the Land Gate",
        "Guided pacing with free time built in",
        "Clearer than Plitvice on many ship clocks",
        "Still leave margin for the Sea Organ if you can",
      ],
      cta: "View Editor’s Choice",
      href: "/shore-excursions/krka-waterfalls-skradin",
      imageKey: "krka-waterfalls",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Zadar?",
  subtitle:
    "The honest answer: Zadar is one of Croatia’s easiest cruise cities to explore independently. If you enjoy history, cafés and waterfront walks, you can have a wonderful day without joining an excursion. If you wish to experience Croatia’s dramatic scenery beyond the city, excursions to Krka National Park or the surrounding coastline provide exceptional value.",
  independent: {
    title: "You can explore Zadar independently — and many passengers do",
    body: "After the shuttle to the historic peninsula, a flexible, lower-cost day is realistic for most guests:",
    items: [
      "Land Gate, People’s Square and Roman Forum",
      "Church of St Donatus and the cathedral",
      "Waterfront promenade, Sea Organ and Greeting to the Sun",
      "Harbour cafés before returning to the ship",
    ],
    note: "Even if you take a shore excursion, the Sea Organ and Greeting to the Sun should not be missed. Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When an organised day is the better choice",
    body: "Guided transport and disciplined timing matter when you leave the walkable Old Town:",
    items: [
      {
        label: "Krka National Park",
        detail: "waterfalls, lake cruise and Skradin — our Editor’s Choice beyond the city",
      },
      {
        label: "Plitvice Lakes",
        detail: "UNESCO wilderness on a long call only — more road time than Krka",
      },
      {
        label: "Šibenik",
        detail: "cathedral stone and coffee culture along the Dalmatian coast",
      },
      {
        label: "Private Zadar walks",
        detail: "narrative and Maraschino tasting when you want structure without distance",
      },
    ],
  },
  links: [
    { href: "/compare/city-or-krka", label: "City or Krka?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/sea-organ", label: "Sea Organ guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Zadar experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
