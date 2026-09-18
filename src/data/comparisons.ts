import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "city-or-krka",
    title: "City or Krka?",
    seoTitle: "Zadar Old Town or Krka National Park?",
    metaDescription:
      "Zadar Old Town or Krka National Park on a cruise day? Honest comparison of atmosphere, road time and Sea Organ access for passengers.",
    kind: "versus",
    optionA: "Historic Zadar",
    optionB: "Krka National Park",
    summary:
      "Zadar’s peninsula offers atmosphere, cafés and the Sea Organ on foot after the shuttle. Krka delivers cascading national-park scenery beyond the city — our Editor’s Choice when hours allow.",
    verdict:
      "Choose the city when you want history, waterfront art and a flexible café day. Choose Krka when dramatic countryside is the priority and your port call supports the road time.",
    overview: [
      "Independence is excellent in Zadar after the shuttle to the Old Town.",
      "Krka cannot be invented on foot from the Land Gate — organised transport matters.",
      "Even on a Krka day, try to protect Sea Organ time if the clock allows.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Atmosphere & waterfront", optionB: "Waterfalls & scenery" },
      { category: "Transfer", optionA: "Shuttle + walking", optionB: "Inland road time" },
      { category: "Effort", optionA: "Easy to moderate", optionB: "Moderate park walking" },
      { category: "Return timing", optionA: "Your buffer + shuttle", optionB: "Cruise-aware operator planning" },
      { category: "Sea Organ", optionA: "Easy to include", optionB: "Only if hours remain" },
    ],
    faqs: [
      {
        question: "Can I do both?",
        answer:
          "Rarely deeply on a standard call. Prioritise one, then add a short waterfront visit if time remains.",
      },
      {
        question: "What is Editor's Choice?",
        answer:
          "Krka Waterfalls, Lake Cruise & Skradin — the strongest organised day beyond the city.",
      },
    ],
    relatedSlugs: ["tour-or-independent", "first-time-zadar-day", "krka-or-plitvice"],
    imageKey: "compare",
  },
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Zadar Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Book a Zadar shore excursion or explore independently? Compare Old Town walking, Sea Organ time and organised tours for cruise days.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Zadar is one of Croatia’s easiest cruise cities to explore after the shuttle. Independence wins for flexible café and waterfront days; a guided tour wins for narrative, private pacing, or Krka / Plitvice / Šibenik.",
    verdict:
      "Choose independence when the Old Town and Sea Organ are your priority. Choose a tour when you want stories, structured pacing, or scenery beyond the peninsula.",
    overview: [
      "Many guests explore the historic peninsula without an organised excursion.",
      "Guided Old Town walks add context while leaving free time afterwards.",
      "National-park days almost always need organised transport to protect return timing.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible Old Town + waterfront", optionB: "Narrative or beyond-city reach" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced stone streets", optionB: "Guided pace on historic or park paths" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the city", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Zadar without an excursion?",
        answer: "Yes. Independent Old Town and waterfront days are common and often excellent.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want historical narrative, private tasting structure, or Krka / Plitvice / Šibenik within limited hours.",
      },
    ],
    relatedSlugs: ["city-or-krka", "first-time-zadar-day"],
    imageKey: "walking",
  },
  {
    slug: "first-time-zadar-day",
    title: "Best First-Time Zadar Day",
    seoTitle: "Best First-Time Zadar Cruise Day — Honest Picks",
    metaDescription:
      "Best first-time Zadar cruise day: Walk It Yourself, a guided Old Town walk, or Editor’s Choice Krka — with honest timing advice.",
    kind: "guide",
    optionA: "Walk It Yourself",
    optionB: "Krka Editor's Choice",
    summary:
      "Most first-timers should start with the historic peninsula and Sea Organ. Choose Krka when scenery beyond the city is clearly the goal and hours allow.",
    verdict:
      "Default to Walk It Yourself plus waterfront time. Upgrade to Editor’s Choice Krka when national-park drama matters more than café lingering.",
    overview: [
      "Zadar rewards atmosphere over monument checklists.",
      "Do not miss the Sea Organ and Greeting to the Sun somehow in the day.",
      "Plitvice is a longer commitment than most first-time calls need.",
    ],
    comparisonTable: [
      { category: "First-time default", optionA: "Old Town + waterfront", optionB: "Krka scenery day" },
      { category: "Stress level", optionA: "Lower", optionB: "Higher road discipline" },
      { category: "Signature memory", optionA: "Sea Organ & sunset light", optionB: "Waterfalls & Skradin" },
      { category: "Best hours", optionA: "3–5+ ashore after shuttle", optionB: "Solid half day or more" },
    ],
    faqs: [
      {
        question: "What should first-timers not miss?",
        answer:
          "Sea Organ and Greeting to the Sun — even if you also take an organised tour.",
      },
    ],
    relatedSlugs: ["city-or-krka", "tour-or-independent", "krka-or-plitvice"],
    imageKey: "historic",
  },
  {
    slug: "krka-or-plitvice",
    title: "Krka or Plitvice?",
    seoTitle: "Krka or Plitvice from Zadar Cruise Port?",
    metaDescription:
      "Krka vs Plitvice from Zadar on a cruise day — compare road time, waterfall scenery and which national park honestly fits your ship clock and return buffer.",
    kind: "versus",
    optionA: "Krka",
    optionB: "Plitvice",
    summary:
      "Both are exceptional. From Zadar, Krka is usually the more cruise-friendly scenery day; Plitvice is the UNESCO icon when hours are long and you accept more road time.",
    verdict:
      "Choose Krka for most cruise calls. Choose Plitvice only when usable hours comfortably cover the longer journey and buffer.",
    overview: [
      "Krka is our Editor’s Choice beyond the city.",
      "Plitvice rewards long calls; short calls should stay nearer.",
    ],
    comparisonTable: [
      { category: "Road time", optionA: "More manageable", optionB: "Longer" },
      { category: "Icon status", optionA: "Outstanding cascades", optionB: "UNESCO lakes fame" },
      { category: "Cruise fit", optionA: "Stronger on many calls", optionB: "Long calls only" },
      { category: "Editor's Choice", optionA: "Yes", optionB: "No — longer commitment" },
    ],
    faqs: [
      {
        question: "Which is Editor's Choice?",
        answer: "Krka Waterfalls, Lake Cruise & Skradin.",
      },
    ],
    relatedSlugs: ["city-or-krka", "first-time-zadar-day"],
    imageKey: "nature",
  },
  {
    slug: "private-tour-vs-coach-tour",
    title: "Private Tour vs Shared Tour",
    seoTitle: "Private vs Shared Zadar Shore Excursions",
    metaDescription:
      "Compare private and shared Zadar shore excursions — pacing, cost and when private Krka days or Old Town walks are worth it for families and small parties.",
    kind: "versus",
    optionA: "Shared / small-group",
    optionB: "Private",
    summary:
      "Shared departures work well for Editor’s Choice Krka and classic walks. Private shines for families, mixed mobility and custom pacing across Zadar, Nin or Krka.",
    verdict:
      "Choose shared when the published itinerary fits. Choose private when your party needs the day bent around children, photography or timing.",
    overview: [
      "Private is not a substitute for a generous return buffer.",
      "Editorial quality matters more than vehicle type alone.",
    ],
    comparisonTable: [
      { category: "Pacing", optionA: "Shared clock", optionB: "Your party’s clock" },
      { category: "Cost", optionA: "Lower per guest typically", optionB: "Higher" },
      { category: "Best for", optionA: "Solo / couples on set routes", optionB: "Families & custom needs" },
    ],
    faqs: [
      {
        question: "Is private required for Krka?",
        answer:
          "No. The shared Krka day is our Editor’s Choice. Private is optional flexibility.",
      },
    ],
    relatedSlugs: ["city-or-krka", "tour-or-independent"],
    imageKey: "private",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
