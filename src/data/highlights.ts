import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "zadar-old-town",
    title: "Zadar Old Town",
    seoTitle: "Zadar Old Town from the Cruise Port",
    metaDescription:
      "Visit Zadar’s historic Old Town from Gaženica cruise port — Land Gate, Roman Forum, St Donatus and how long you need ashore on a cruise day.",
    attractionName: "Zadar Old Town",
    tagline: "A compact peninsula of Roman stone, Venetian gates and café life.",
    overview:
      "Zadar’s Old Town is the heart of most cruise days: Land Gate, Forum, St Donatus, cathedral approaches and lanes that feel lived-in rather than staged.",
    body: [
      "Arrive by shuttle from Gaženica, then explore on foot.",
      "Atmosphere matters more than ticking every interior.",
      "Finish toward the Sea Organ waterfront whenever you can.",
    ],
    distanceFromPort: "Shuttle from Gaženica, then walkable peninsula",
    travelTime: "Shuttle typically required from the cruise berth",
    timeNeeded: "2–4 hours for highlights; longer with cafés and waterfront",
    gettingThere: [
      {
        method: "Cruise shuttle",
        detail: "From Gaženica toward the Old Town / Land Gate area — confirm on the day.",
        time: "Varies by berth and waits",
        cost: "Often included or low fee — confirm onboard",
      },
      {
        method: "Taxi",
        detail: "Direct transfer if mobility, weather or time pressure matter.",
        time: "Often 15–25 min",
        cost: "Moderate",
      },
    ],
    highlights: [
      "Land Gate arrival",
      "Roman Forum",
      "Church of St Donatus",
      "Café squares",
    ],
    tips: [
      "Wear stone-ready shoes",
      "Protect shuttle + terminal buffer before all-aboard",
    ],
    faqs: [
      {
        question: "Can I see the Old Town without a tour?",
        answer:
          "Yes. Many passengers explore independently. Book a tour when you want historical narrative or structured pacing.",
      },
    ],
    relatedAttractionSlugs: ["roman-forum", "sea-organ", "greeting-to-the-sun"],
    relatedExcursionSlug: "old-town-historical-walk",
  },
  {
    slug: "roman-forum",
    title: "Roman Forum",
    seoTitle: "Zadar Roman Forum — Cruise Visitor Guide",
    metaDescription:
      "Visit Zadar’s Roman Forum on a cruise day — open civic stone, atmosphere beside St Donatus, photography light and practical timing tips for passengers.",
    attractionName: "Roman Forum",
    tagline: "Open civic stone at the heart of the historic peninsula.",
    overview:
      "The Roman Forum anchors Zadar’s ancient identity — a Mediterranean civic stage still framing everyday walks.",
    body: [
      "Walk the paving slowly; this is atmosphere more than a ticketed ruin.",
      "Pair with St Donatus beside the Forum space.",
    ],
    distanceFromPort: "Inside Old Town after shuttle",
    travelTime: "Part of Old Town stroll",
    timeNeeded: "20–40 minutes",
    gettingThere: [
      {
        method: "Walk via Old Town",
        detail: "From Land Gate / People’s Square toward the Forum and St Donatus.",
        time: "Part of peninsula walk",
        cost: "Free",
      },
    ],
    highlights: ["Ancient paving and columns", "Adjacent St Donatus silhouette", "Central orientation point"],
    tips: ["Morning light photographs more kindly"],
    faqs: [
      {
        question: "Is there an entrance fee?",
        answer: "The Forum area is generally experienced as an open public space; optional interiors nearby may charge.",
      },
    ],
    relatedAttractionSlugs: ["zadar-old-town", "sea-organ"],
    relatedExcursionSlug: "old-town-historical-walk",
  },
  {
    slug: "sea-organ",
    title: "Sea Organ",
    seoTitle: "Zadar Sea Organ from the Cruise Port",
    metaDescription:
      "Experience the Zadar Sea Organ on a cruise day — listening tips, how long to stay, timing advice and pairing with Greeting to the Sun nearby.",
    attractionName: "Sea Organ",
    tagline: "Waves that play music on stone steps.",
    overview:
      "The Sea Organ is Zadar’s most unique waterfront creation — an architectural instrument played by the Adriatic.",
    body: [
      "Sit and listen; let the sea change the melody.",
      "Pair with Greeting to the Sun a few steps away.",
      "Do not miss this even if you take a shore excursion.",
    ],
    distanceFromPort: "Western waterfront of the Old Town peninsula",
    travelTime: "Short walk within Old Town after shuttle",
    timeNeeded: "20–40 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "From the Forum / Old Town toward the western waterfront promenade.",
        time: "10–20 min within peninsula",
        cost: "Free",
      },
    ],
    highlights: ["Wave-powered music", "Waterfront steps", "Pairs with Greeting to the Sun"],
    tips: ["Mind wet steps", "Sunset crowds gather — visit earlier if sailing is early"],
    faqs: [
      {
        question: "Is it free?",
        answer: "Yes — the waterfront experience is open.",
      },
    ],
    relatedAttractionSlugs: ["greeting-to-the-sun", "zadar-old-town"],
    relatedExcursionSlug: "old-town-historical-walk",
  },
  {
    slug: "greeting-to-the-sun",
    title: "Greeting to the Sun",
    seoTitle: "Greeting to the Sun Zadar — Cruise Guide",
    metaDescription:
      "Visit Greeting to the Sun in Zadar — solar circle geometry, dusk light, slippery-surface tips and cruise timing advice beside the Sea Organ.",
    attractionName: "Greeting to the Sun",
    tagline: "A solar circle answering the Sea Organ with light.",
    overview:
      "Greeting to the Sun is a circular solar installation on Zadar’s waterfront — striking by day and luminous toward dusk.",
    body: [
      "Visit with the Sea Organ as a pair.",
      "Chase sunset only when all-aboard truly allows.",
    ],
    distanceFromPort: "Beside the Sea Organ on the waterfront",
    travelTime: "Moments from the Sea Organ",
    timeNeeded: "15–30 minutes",
    gettingThere: [
      {
        method: "Walk",
        detail: "Adjacent to the Sea Organ on the western waterfront.",
        time: "Immediate",
        cost: "Free",
      },
    ],
    highlights: ["Solar circle geometry", "Evening glow when timing allows", "Photogenic day or dusk"],
    tips: ["Surface can be slippery when wet"],
    faqs: [
      {
        question: "Worth it without sunset?",
        answer: "Yes — daylight visits are still memorable, especially with the Sea Organ.",
      },
    ],
    relatedAttractionSlugs: ["sea-organ", "zadar-old-town"],
    relatedExcursionSlug: "old-town-historical-walk",
  },
  {
    slug: "krka-national-park",
    title: "Krka National Park",
    seoTitle: "Krka National Park from Zadar Cruise Port",
    metaDescription:
      "Visit Krka National Park from Zadar on a cruise day — cascading waterfalls, Skradin town time and honest road-time advice for protecting your return to ship.",
    attractionName: "Krka National Park",
    tagline: "Cascading waterfalls and gorge country beyond the city.",
    overview:
      "Krka is the strongest nature day from Zadar for many cruise calls — waterfalls, park paths and Skradin with meaningful but manageable road time versus Plitvice.",
    body: [
      "Organised transport protects return timing.",
      "Our Editor’s Choice excursion sequences waterfalls, lake cruise elements and Skradin.",
    ],
    distanceFromPort: "Inland transfer from Zadar",
    travelTime: "Significant road time each way — confirm on the day",
    timeNeeded: "Most of a half day or more including transfers",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Cruise-timed pickup from Zadar arrangements — recommended for ship buffers.",
        time: "Full excursion window",
        cost: "Tour price when live booking opens",
      },
    ],
    highlights: ["Waterfall scenery", "Park atmosphere", "Skradin town time"],
    tips: ["Only when hours ashore honestly allow", "Wear sturdy shoes"],
    faqs: [
      {
        question: "Krka or stay in Zadar?",
        answer:
          "Different rewards. City for atmosphere and Sea Organ; Krka for cascading countryside.",
      },
    ],
    relatedAttractionSlugs: ["zadar-old-town", "sea-organ"],
    relatedExcursionSlug: "krka-waterfalls-skradin",
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
