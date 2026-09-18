import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Zadar Cruise Port Guide",
  subtitle:
    "Gaženica berth, shuttle to the Old Town, Sea Organ timing, food, transport toward Krka and Šibenik, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Gaženica cruise port",
      quay: "Cruise berths at Gaženica, south of Zadar’s historic peninsula",
      usedBy: "Most cruise ships calling at Zadar on Adriatic itineraries",
      cityAccess:
        "Shuttle typically connects toward the Old Town near the Land Gate; taxis available at peak turnaround",
    },
    {
      name: "Alternative harbour positions",
      quay: "Occasional alternative berths within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking and shuttle times vary — follow terminal signage and allow a conservative buffer",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Zadar",
      paragraphs: [
        "Cruise ships typically use Gaženica, south of the historic peninsula. Unlike ports where the old town sits at the gangway, Zadar usually requires a shuttle or short transfer before the walkable core begins.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth.",
        "Once you reach the Land Gate area, Zadar is compact and rewarding on foot. Krka, Plitvice and Šibenik are separate journeys requiring road time and different timing.",
      ],
    },
    {
      heading: "Shuttle and arrival into the Old Town",
      paragraphs: [
        "From Gaženica, follow signs for the cruise shuttle toward the historic centre rather than wandering the working port.",
        "Confirm return shuttle frequency before you linger at sunset installations.",
        "If mobility, weather or time pressure matter, take a taxi and agree Gaženica cruise terminal clearly for the return.",
      ],
    },
    {
      heading: "Zadar Old Town highlights",
      paragraphs: [
        "Land Gate, People’s Square, the Roman Forum and Church of St Donatus frame most first visits.",
        "Cathedral approaches and quieter lanes repay curiosity once you leave the first postcard cluster.",
        "The western waterfront holds the Sea Organ and Greeting to the Sun — Zadar’s signature modern chapter.",
      ],
    },
    {
      heading: "Food and Dalmatian flavour",
      paragraphs: [
        "Café culture and harbour tables sit inside a walkable historic centre — you do not need a long transfer to eat well.",
        "Build lunch into your Old Town loop so you stay oriented toward the shuttle and ship.",
        "Maraschino cherry liqueur is a local signature if you want a tasting with structure.",
      ],
    },
    {
      heading: "Transport beyond the Old Town",
      paragraphs: [
        "Taxis wait at or near the terminal when ships are in port. Show the driver Gaženica cruise terminal or your ship name for the return.",
        "Krka and Plitvice need operators who plan backwards from all-aboard — a best-case journey time is not an adequate return plan.",
        "Šibenik offers another historic coastal town when you want Dalmatian stone without national-park hiking.",
      ],
    },
    {
      heading: "A realistic independent city day",
      paragraphs: [
        "Shuttle in, walk Land Gate to Forum and St Donatus, then the waterfront installations.",
        "Add café time without inventing a second city.",
        "Return with shuttle wait + transfer + 60–90 minutes at the terminal before all-aboard.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "How far is the Old Town from the cruise port?",
      answer:
        "Gaženica sits south of the historic peninsula. Most guests use a shuttle or taxi rather than walking the full distance.",
    },
    {
      question: "Can I explore independently?",
      answer:
        "Yes. After the shuttle, Zadar is one of Croatia’s easiest cruise cities for independent exploration.",
    },
    {
      question: "Should I still see the Sea Organ if I book Krka?",
      answer:
        "Yes if hours remain. The Sea Organ and Greeting to the Sun should not be missed when timing allows.",
    },
  ] satisfies FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
