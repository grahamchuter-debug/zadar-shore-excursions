import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Zadar without an excursion?",
    answer:
      "Yes. Zadar is one of Croatia’s easiest cruise cities for independent exploration after the shuttle. Many visitors enjoy history, cafés and the waterfront without an organised tour.",
  },
  {
    question: "How do I get from the cruise port to the Old Town?",
    answer:
      "Ships typically berth at Gaženica. A shuttle usually connects toward the historic centre near the Land Gate — confirm arrangements on the day.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Krka, Plitvice, Šibenik, guided narrative or private tasting structure. Skip when you prefer self-paced wandering, cafés and the Sea Organ.",
  },
  {
    question: "What should nobody miss?",
    answer:
      "The Sea Organ and Greeting to the Sun — even if you also take a shore excursion.",
  },
  {
    question: "Is Zadar suitable for limited mobility?",
    answer:
      "Parts of the Old Town include uneven stone. The waterfront promenade is often easier. Ask about private pacing and consider a taxi from Gaženica.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day, including shuttle time. Longer Krka or Plitvice days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Scenic Krka Waterfalls, Lake Cruise & Skradin — our strongest overall organised cruise experience beyond the city.",
  },
  {
    question: "What currency is used?",
    answer:
      "Croatia uses the euro (EUR). We do not convert or publish placeholder prices; live booking opens once selling prices are verified.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
