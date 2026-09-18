import { SIGNATURE_EXPERIENCE_PATH, signatureDalmatianExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Zadar explorer",
    description: "A low-risk city day using the shuttle, walking, cafés and your own return buffer.",
  },
  {
    id: "historic",
    label: "First-time historic Zadar visitor",
    description: "A guided Old Town introduction with context and free time for the waterfront.",
  },
  {
    id: "waterfront",
    label: "Sea Organ & sunset traveller",
    description: "Waterfront installations, photography and Adriatic light at a human pace.",
  },
  {
    id: "nature",
    label: "Nature & national-park traveller",
    description: "Krka or Plitvice when your port call supports the road time.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "old-town", label: "Zadar Old Town" },
  { id: "sea-organ", label: "Sea Organ & waterfront" },
  { id: "krka", label: "Krka National Park" },
  { id: "plitvice", label: "Plitvice Lakes" },
  { id: "food", label: "Food & Maraschino" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "historic" | "waterfront" | "nature";

export const ZADAR_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Zadar Old Town",
    summary:
      "The most flexible choice: shuttle to the Land Gate, walk the Forum and St Donatus, then the Sea Organ and harbour cafés.",
    minimumHours: 4,
    links: [
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Free self-guided route with return-to-ship timing.",
      },
      {
        label: "Zadar Cruise Port Guide",
        href: "/guides/cruise-port-guide",
        why: "Shuttle logistics and Gaženica arrival advice.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Shuttle from Gaženica and enter via the Land Gate." },
      { time: "Late morning", text: "Roman Forum, St Donatus and cathedral approaches." },
      { time: "Afternoon", text: "Sea Organ, Greeting to the Sun and café time — then return with a buffer." },
    ],
  },
  historic: {
    headline: "Historic Zadar introduction",
    summary:
      "A guided Old Town walk with historical context and free time afterwards for waterfront installations.",
    minimumHours: 5,
    links: [
      {
        label: "Old Town Historical Walk",
        href: "/shore-excursions/old-town-historical-walk",
        why: "Guided orientation through Zadar’s historic core.",
      },
      {
        label: "Private Maraschino Walk",
        href: "/shore-excursions/private-zadar-maraschino-walk",
        why: "Private pacing with a local tasting.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your guide near the Old Town / shuttle arrival area." },
      { time: "Guided highlights", text: "Forum, churches and historic lanes with commentary." },
      { time: "Free time", text: "Sea Organ and cafés before returning to Gaženica." },
    ],
  },
  waterfront: {
    headline: "Sea Organ & Adriatic light",
    summary:
      "Prioritise the artistic waterfront — Sea Organ, Greeting to the Sun and photography — with Old Town context around it.",
    minimumHours: 4,
    links: [
      {
        label: "Sea Organ Guide",
        href: "/guides/sea-organ",
        why: "Listening tips and timing advice.",
      },
      {
        label: "Best Viewpoints",
        href: "/guides/best-viewpoints",
        why: "Waterfront frames and sunset realism.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Light Old Town orientation via Forum and St Donatus." },
      { time: "Midday", text: "Waterfront promenade, Sea Organ and Greeting to the Sun." },
      { time: "Afternoon", text: "Café pause and composed shuttle return — sunset only if the clock allows." },
    ],
  },
  nature: {
    headline: "Croatia beyond the city",
    summary:
      "Krka waterfalls (Editor’s Choice) or Plitvice on a long call — only when usable hours support the road time.",
    minimumHours: 7,
    links: [
      {
        label: "Krka Waterfalls & Skradin",
        href: "/shore-excursions/krka-waterfalls-skradin",
        why: "Editor’s Choice nature day from Zadar.",
      },
      {
        label: "Plitvice Lakes",
        href: "/shore-excursions/plitvice-lakes",
        why: "UNESCO lakes for long, unhurried port calls only.",
      },
    ],
    dayPlan: [
      { time: "Depart", text: "Leave Zadar with cruise-aware transport." },
      { time: "Experience", text: "National-park scenery and town pauses as chosen." },
      { time: "Return", text: "Drive back with a generous all-aboard buffer." },
    ],
  },
};

/** @deprecated Compatibility alias */
export const SAVONA_DAY_PLANS = ZADAR_DAY_PLANS;

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (interests.includes("krka") || interests.includes("plitvice")) {
    return hours >= 7 ? "nature" : "independent";
  }
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("old-town") ||
    hours < 6
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      return interests.includes("sea-organ") || interests.includes("photography")
        ? "waterfront"
        : "historic";
    }
    return interests.includes("sea-organ") || interests.includes("photography")
      ? "waterfront"
      : "independent";
  }
  if (interests.includes("photography") || interests.includes("sea-organ")) return "waterfront";
  if (interests.includes("food") && hours < 7) return "independent";
  return hours >= 6 ? "historic" : "independent";
}

export function generateZadarPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = ZADAR_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureDalmatianExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Zadar concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("food") && key === "independent") {
    excursions.push({
      label: "Zadar Food Guide",
      href: "/guides/food-guide",
      why: "Dalmatian plates and Maraschino context without a road day.",
    });
  }

  return {
    headline: plan.headline,
    summary:
      `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer the Old Town and waterfront on foot.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Zadar Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Gaženica shuttle, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Zadar Ship Schedule",
        href: "/ship-schedules/zadar",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Zadar options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long road day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Gaženica terminal 60–90 minutes before all-aboard; Krka and Plitvice days require additional road traffic contingency.",
      },
    ],
  };
}

/** @deprecated Compatibility aliases */
export function generateSavonaPlan(input: PlannerInput): PlannerResult {
  return generateZadarPlan(input);
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateZadarPlan(input);
}

export function generateTallinnPlan(input: PlannerInput): PlannerResult {
  return generateZadarPlan(input);
}
