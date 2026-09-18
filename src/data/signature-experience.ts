import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureDalmatianExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Adriatic Zadar Discovery",
  seoTitle: "Signature Adriatic Zadar Discovery — Future Small-Group Day",
  metaDescription:
    "Preview a future small-group Zadar shore experience — maximum eight guests, flexible Old Town and Adriatic discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through artistic Zadar and Adriatic light — designed around your ship, not a generic day tour.",
  overview:
    "Signature Adriatic Zadar Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Zadar through the historic peninsula and waterfront atmosphere in a luxury vehicle or walking-led format, with café pauses and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description:
        "A proposed small-group format intended to support personal attention and unhurried pacing.",
    },
    {
      emoji: "🌅",
      title: "Waterfront atmosphere",
      description:
        "Sea Organ, Greeting to the Sun and Adriatic light at the heart of the concept.",
    },
    {
      emoji: "🏛️",
      title: "Historic peninsula",
      description: "Roman Forum, St Donatus and Venetian layers with narrative context.",
    },
    {
      emoji: "📸",
      title: "Photography pauses",
      description: "Time for waterfront and Old Town photographs rather than rushed checklists.",
    },
    {
      emoji: "🍽️",
      title: "Local café culture",
      description: "A relaxed Dalmatian pause proposed as part of the experience.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description:
        "Routing designed to adapt to ship times, weather, mobility and the interests of each group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description:
        "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Adriatic Zadar Discovery now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What should I consider in the meantime?",
      answer:
        "Walk It Yourself for an independent Old Town day, or our Editor's Choice Krka excursion when you want scenery beyond the city. Live booking opens once verified.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureDalmatianExperience.title,
    description:
      "A future maximum-eight-guest Zadar experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}

/** @deprecated Platform alias */
export const signatureRivieraExperience = signatureDalmatianExperience;
