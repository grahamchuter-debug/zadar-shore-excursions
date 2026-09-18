import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships typically berth at Gaženica cruise port, south of Zadar’s historic peninsula. A shuttle usually connects to the Old Town area near the Land Gate — confirm arrangements on the day. For Krka, Plitvice or Šibenik, confirm meeting instructions and plan from your ship’s all-aboard time, not merely the published departure. Aim to be back at the terminal 60–90 minutes early; longer countryside days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes: "Partner network — confirm availability for your sailing",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Zadar cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "krka-waterfalls-skradin",
    title: "Scenic Krka Waterfalls, Lake Cruise & Skradin",
    seoTitle: "Krka Waterfalls Shore Excursion from Zadar | Editor's Choice",
    metaDescription:
      "Editor's Choice Zadar shore excursion to Krka National Park — waterfalls, lake cruise and Skradin town, planned around your cruise day.",
    category: "Editor's Choice",
    tagline:
      "Croatia’s cascading national-park day — waterfalls, a lake cruise and Skradin, timed from Zadar.",
    duration: "Approximately 6 hours",
    pace: "Moderate",
    bestFor:
      "Cruise guests who want Croatia’s dramatic scenery beyond the city without stretching to a full Plitvice day",
    overview:
      "This Editor’s Choice day leaves Zadar for Krka National Park: cascading waterfalls, a serene lake cruise and time in the waterside town of Skradin — sequenced for a cruise call rather than a rushed checklist.",
    body: [
      "We selected this experience because it delivers the strongest overall cruise day from Zadar when you want more than the peninsula Old Town. Krka’s waterfalls and gorge country feel a world away from café tables — yet the journey remains more manageable than Plitvice for many ship schedules.",
      "From Gaženica you travel inland toward the park. Guided exploration, free time to wander and a boat element toward Skradin combine scenery with breathing room.",
      "Guests who prefer history, cafés and the Sea Organ may be happier walking Zadar independently — and that is a perfectly good choice from this port.",
      "Exact sequencing flexes with traffic, ship timing and park conditions. Protecting the return buffer remains the planning priority.",
    ],
    highlights: [
      "Krka National Park waterfall scenery",
      "Lake cruise and Skradin town time",
      "Cruise-timed routing from Zadar",
      "Nature beyond the walkable Old Town",
      "Stronger overall day than a city-only coach tour for scenery seekers",
    ],
    itinerary: [
      {
        title: "Meet in Zadar",
        detail:
          "Meet near the cruise terminal / designated meeting point and confirm the day’s timing against your all-aboard.",
      },
      {
        title: "Transfer toward Krka",
        detail: "Scenic inland drive toward Krka National Park with orientation from your guide.",
      },
      {
        title: "Waterfalls & park time",
        detail:
          "Explore cascading falls and park paths with time for photographs and guided context.",
      },
      {
        title: "Lake cruise & Skradin",
        detail:
          "Continue with a lake cruise element and free time in Skradin as the itinerary allows.",
      },
      {
        title: "Return to Zadar",
        detail: "Drive back to the cruise port with a deliberate buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Zadar",
      "Transport toward Krka / Skradin",
      "English-speaking guide commentary",
      "Park and cruise elements as stated on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes — park paths and boardwalks",
      "Bring sun protection; open viewpoints can be exposed",
      "If you want maximum Old Town and Sea Organ time, Walk It Yourself may suit you better",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "Among available Shore Excursions Group offerings from Zadar, Krka delivers the strongest combination of scenery, cruise-day pacing and a genuine sense of Croatia beyond the city — without the longer commitment of Plitvice on many calls.",
      },
      {
        question: "Is Krka better than staying in Zadar?",
        answer:
          "Different rewards. Zadar’s Old Town, Sea Organ and waterfront are outstanding on foot. Krka is for guests who specifically want national-park scenery and accept less city time.",
      },
      {
        question: "How much travelling is involved?",
        answer:
          "Expect meaningful road time each way. It is more travelling than an Old Town walk, and usually less demanding than a full Plitvice day.",
      },
    ],
    relatedExcursionSlugs: [
      "plitvice-lakes",
      "private-krka-national-park",
      "old-town-historical-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — park paths and boardwalks",
    cruiseSuitability: "Best with a solid half day or more usable time ashore",
    editorChoice: true,
    whyWeChose: {
      lead: "When you want Croatia’s cascading countryside from Zadar, Krka is the day that earns the miles.",
      whyRecommended:
        "First-time visitors often ask for something beyond the historic peninsula. Krka answers with waterfalls, a lake cruise and Skradin — scenery you cannot invent on foot from the Land Gate.",
      whoItSuits:
        "Nature lovers, first-time Dalmatian visitors with generous hours ashore, and guests who will still return for the Sea Organ another way or later in the day.",
      whatMakesItSpecial:
        "You leave with thunderous cascades and green gorge light — not only Roman stones and café tables.",
      cruiseFit:
        "Road time is meaningful but typically more realistic than Plitvice on a standard call, which makes protecting a return buffer more achievable.",
      theExperience:
        "You understand why Zadar is both a destination and a gateway — then still have a composed path back to Gaženica.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "old-town-historical-walk",
    title: "Old Town Historical Walk & Golden Treasures",
    seoTitle: "Zadar Old Town Historical Walk Shore Excursion",
    metaDescription:
      "Guided Zadar Old Town walking shore excursion — Roman Forum, churches, Sea Organ context and Golden Treasures, timed for cruise passengers.",
    category: "Historic Cities",
    tagline:
      "Roman stones, Venetian gates and artistic waterfront — Zadar’s historic core with a guide.",
    duration: "Approximately 2 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want narrative and orientation in the Old Town without a long transfer",
    overview:
      "A guided walking introduction through Zadar’s peninsular Old Town — landmarks, layered history and the atmosphere that makes this port feel different from Dubrovnik’s monument density.",
    body: [
      "Zadar rewards a human pace. A guide helps decode the Roman Forum, Church of St Donatus, cathedral approaches and the waterfront culture that frames the Sea Organ.",
      "The Golden Treasures / Church of Art collection adds a quieter cultural layer when included on your voucher.",
      "Afterwards you can linger for sunset installations, harbour cafés or independent wandering — one of Zadar’s real advantages as a cruise city.",
      "If you want national-park scenery, choose Krka instead of trying to invent both in a rushed half day.",
    ],
    highlights: [
      "Guided Old Town orientation",
      "Roman and medieval landmark context",
      "Sea Organ and waterfront atmosphere",
      "Short duration close to shuttle drop-off",
      "Ideal when you also want café or sunset time after",
    ],
    itinerary: [
      {
        title: "Meet near the Old Town",
        detail: "Join your guide close to the historic peninsula / shuttle arrival area.",
      },
      {
        title: "Historic core walking",
        detail:
          "Explore key squares, the Forum area and landmark exteriors with commentary.",
      },
      {
        title: "Cultural stop & waterfront",
        detail:
          "Continue toward church treasures where included, then the waterfront character of Zadar.",
      },
    ],
    included: [
      "English-speaking walking guide",
      "Old Town highlights orientation",
      "Cruise-aware pacing near the historic centre",
    ],
    notIncluded: [
      "Entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
      "Shuttle fees if charged separately by the port",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for stone streets",
      "Even with a guide, leave time for the Sea Organ and Greeting to the Sun",
      "Limited-mobility guests should ask about step-heavy sections in advance",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Do I need a tour to see Zadar Old Town?",
        answer:
          "No. Many guests explore independently after the shuttle. A guided walk adds narrative if you prefer context over wandering alone.",
      },
      {
        question: "Does this include the Sea Organ?",
        answer:
          "Most historic walks include waterfront context or nearby time. Confirm the exact route on your voucher; the installations are also easy to visit independently.",
      },
    ],
    relatedExcursionSlugs: [
      "krka-waterfalls-skradin",
      "private-zadar-maraschino-walk",
      "private-zadar-and-nin",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets and uneven surfaces",
    cruiseSuitability: "Excellent for shorter calls or guests who want free time after",
    editorChoice: false,
    whyWeChose: {
      lead: "Zadar’s Old Town is compact enough that a short guided walk can unlock centuries without consuming the whole day.",
      whyRecommended:
        "Ideal when you want stories behind the stones, then freedom for cafés, the Sea Organ and sunset light.",
      whoItSuits:
        "History-curious guests, first-timers who prefer orientation, and anyone saving energy for the waterfront.",
      whatMakesItSpecial:
        "Roman Forum to artistic waterfront in a human-scaled peninsula — atmosphere first.",
      cruiseFit:
        "Minimal road risk and a natural finish near the installations and harbour cafés.",
      theExperience:
        "You step back toward the shuttle oriented, unhurried and ready to linger where Zadar is most itself.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "plitvice-lakes",
    title: "Natural Wonders of Plitvice Lakes",
    seoTitle: "Plitvice Lakes Shore Excursion from Zadar",
    metaDescription:
      "Full-day Plitvice Lakes National Park shore excursion from Zadar — UNESCO waterfalls and boardwalks with cruise-timed return planning.",
    category: "Nature",
    tagline:
      "UNESCO lakes and cascading boardwalks — Croatia’s most famous national park from Zadar.",
    duration: "Approximately 8 hours",
    pace: "Moderate",
    bestFor:
      "Guests with a long port call who specifically want Plitvice and accept substantial road time",
    overview:
      "A full-day journey from Zadar to Plitvice Lakes National Park: wooden footbridges, turquoise lakes and cascading waterfalls — rewarding when your ship hours honestly allow.",
    body: [
      "Plitvice is spectacular and distant. Compared with Krka, expect a longer day on the road and less margin for error before all-aboard.",
      "Inside the park, boardwalks weave between lakes and falls. Paths can be crowded in peak season; pace yourself and watch footing.",
      "This is the right choice only when usable hours ashore comfortably cover transfers, park time and a generous return buffer.",
      "If your call is shorter, Krka or an Old Town day is usually the wiser Zadar decision.",
    ],
    highlights: [
      "UNESCO Plitvice Lakes scenery",
      "Boardwalks through cascading lakes",
      "Full-day nature immersion",
      "Pickup from Zadar cruise arrangements",
      "Honest trade-off versus city and Sea Organ time",
    ],
    itinerary: [
      {
        title: "Depart Zadar",
        detail: "Meet at the designated point and begin the inland transfer toward Plitvice.",
      },
      {
        title: "Plitvice Lakes exploration",
        detail: "Walk selected park routes among lakes, falls and forest boardwalks.",
      },
      {
        title: "Return to Zadar",
        detail: "Drive back with a conservative buffer ahead of all-aboard.",
      },
    ],
    included: [
      "Round-trip transport from Zadar arrangements",
      "English-speaking guide or escort as stated on voucher",
      "Cruise-aware timing",
    ],
    notIncluded: [
      "Park entrance fees unless stated on your voucher",
      "Lunch and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Only book on a long, unhurried port call",
      "Wear sturdy shoes — boardwalks can be wet",
      "Do not cut the return fine",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Krka or Plitvice from Zadar?",
        answer:
          "Krka is usually the more cruise-friendly scenery day. Plitvice is the icon if hours and stamina support the longer journey.",
      },
      {
        question: "Is this suitable for a short call?",
        answer:
          "No. Short calls are better spent in Zadar Old Town or on a nearer experience such as Krka when timing allows.",
      },
    ],
    relatedExcursionSlugs: [
      "krka-waterfalls-skradin",
      "private-krka-national-park",
      "sibenik-old-town-walk",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — park boardwalks and uneven paths",
    cruiseSuitability: "Only with a long day in port",
    editorChoice: false,
    whyWeChose: {
      lead: "Plitvice is Croatia’s postcard wilderness — and from Zadar it demands honesty about the clock.",
      whyRecommended:
        "Choose this when the lakes are your priority and ship hours are generous enough to travel without anxiety.",
      whoItSuits:
        "Nature-first travellers on long calls who accept less Zadar city time.",
      whatMakesItSpecial:
        "Layered lakes and falls on a scale few European cruise ports can match.",
      cruiseFit:
        "Only when usable hours comfortably cover the long road, park exploration and buffer.",
      theExperience:
        "You trade peninsula atmosphere for UNESCO wilderness — knowingly.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "sibenik-old-town-walk",
    title: "Šibenik Old Town, Cathedral & Coffee Culture",
    seoTitle: "Šibenik Old Town Shore Excursion from Zadar",
    metaDescription:
      "Shore excursion from Zadar to Šibenik — Cathedral of St James, historic squares and Dalmatian coffee culture with cruise-timed return.",
    category: "Historic Cities",
    tagline:
      "A quieter Dalmatian stone town — UNESCO cathedral, squares and a proper coffee pause.",
    duration: "Approximately 5 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want another historic Adriatic town without a full national-park day",
    overview:
      "Travel from Zadar to Šibenik for a guided old-town walk: Poljana Square character, the Cathedral of St James, promenade atmosphere and a coffee or rakija pause before returning to the ship.",
    body: [
      "Šibenik feels less theatrical than some Dalmatian icons — which is precisely its charm. Stone lanes, a UNESCO cathedral and harbour light reward unhurried attention.",
      "The day combines scenic transfer with walking exploration and a cultural beverage stop as described on your voucher.",
      "It suits visitors who want coast-and-town character beyond Zadar without committing to Krka’s park paths.",
      "You will still want Sea Organ time in Zadar either before departure or after return if hours allow — do not let the day erase the waterfront entirely.",
    ],
    highlights: [
      "Guided Šibenik old-town walk",
      "Cathedral of St James context",
      "Promenade and coffee culture pause",
      "Scenic transfer from Zadar",
      "Different texture from Zadar’s peninsula",
    ],
    itinerary: [
      {
        title: "Leave Zadar",
        detail: "Meet and transfer along the Dalmatian coast toward Šibenik.",
      },
      {
        title: "Šibenik walking highlights",
        detail: "Explore key squares, cathedral approaches and historic lanes with your guide.",
      },
      {
        title: "Coffee or rakija pause",
        detail: "Taste local hospitality on the promenade as included on your voucher.",
      },
      {
        title: "Return to Zadar",
        detail: "Transfer back to the cruise terminal with ship buffer.",
      },
    ],
    included: [
      "Round-trip transport from Zadar",
      "English-speaking guide",
      "Beverage stop as stated on voucher",
      "Cruise-aware timing",
    ],
    notIncluded: [
      "Additional food and drinks",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for stone streets",
      "A good choice when you want townscape over waterfalls",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Šibenik worth it if I already like Zadar?",
        answer:
          "Yes if you enjoy comparing Dalmatian towns. If you prefer nature, choose Krka; if you prefer one deep city day, stay in Zadar.",
      },
    ],
    relatedExcursionSlugs: [
      "krka-waterfalls-skradin",
      "old-town-historical-walk",
      "private-zadar-and-nin",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets and slopes",
    cruiseSuitability: "Best with roughly half a day or more ashore",
    editorChoice: false,
    whyWeChose: {
      lead: "Dalmatia’s quieter stone towns repay curiosity — Šibenik is a graceful day beyond Zadar’s peninsula.",
      whyRecommended:
        "For guests who want coastal-town character and cathedral grandeur without a national-park hiking day.",
      whoItSuits:
        "Culture travellers, café lovers and visitors collecting Dalmatian townscapes.",
      whatMakesItSpecial:
        "UNESCO stonework and promenade hospitality in a less crowded frame than the biggest icons.",
      cruiseFit:
        "Transfer time is real but typically more contained than Plitvice.",
      theExperience:
        "You return with another shade of Adriatic stone and light — still oriented to your ship.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-krka-national-park",
    title: "Private Krka National Park & Waterfalls",
    seoTitle: "Private Krka National Park Shore Excursion from Zadar",
    metaDescription:
      "Private Krka National Park shore excursion from Zadar — Skradinski Buk, Roški Slap viewpoints and flexible pacing for your party.",
    category: "Private",
    tagline:
      "Thunderous falls and Insta-worthy cascades — Krka at your party’s pace.",
    duration: "Approximately 6 hours",
    pace: "Moderate",
    bestFor:
      "Families and small parties who want Krka with private timing and flexibility",
    overview:
      "A private journey from Zadar to Krka National Park focused on waterfall highlights such as Skradinski Buk and Roški Slap viewpoints — paced around your group rather than a fixed coach clock.",
    body: [
      "Private transport shines when ages, mobility or photography goals differ within one party.",
      "You still need honest hours ashore: park walking and road time remain, but stops can flex.",
      "Confirm inclusions for park tickets and boat elements on your voucher before travel day.",
    ],
    highlights: [
      "Private vehicle for your party",
      "Krka waterfall highlights",
      "Flexible pacing versus shared departures",
      "Cruise-timed return planning",
    ],
    itinerary: [
      {
        title: "Private meet in Zadar",
        detail: "Meet your driver-guide and confirm timing against all-aboard.",
      },
      {
        title: "Krka waterfalls",
        detail: "Explore selected falls and viewpoints with time shaped around your group.",
      },
      {
        title: "Return to ship",
        detail: "Private transfer back to Gaženica with buffer.",
      },
    ],
    included: [
      "Private transport from Zadar arrangements",
      "Driver-guide as stated on voucher",
      "Cruise-aware routing",
    ],
    notIncluded: [
      "Park fees unless stated",
      "Meals and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Ideal for families needing flexible stops",
      "Still protect a 60–90 minute terminal buffer",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How does this differ from the shared Krka day?",
        answer:
          "Private pacing and vehicle control. Scenery goals are similar; the day bends around your party rather than a shared group.",
      },
    ],
    relatedExcursionSlugs: [
      "krka-waterfalls-skradin",
      "plitvice-lakes",
      "private-zadar-and-nin",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — park paths",
    cruiseSuitability: "Best with a solid half day or longer",
    editorChoice: false,
    whyWeChose: {
      lead: "Same waterfalls, calmer logistics — private Krka when your party needs the day shaped around you.",
      whyRecommended:
        "Choose private when shared timing would frustrate children, mobility needs or photography goals.",
      whoItSuits: "Families, couples and small groups valuing flexibility.",
      whatMakesItSpecial: "Your clock, your pauses, the same cascading Croatia.",
      cruiseFit: "Still requires disciplined return planning — privacy is not a substitute for buffer.",
      theExperience: "Krka without negotiating every stop with strangers on a shared van.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-zadar-and-nin",
    title: "Private Dalmatia: Ancient Zadar & Nin",
    seoTitle: "Private Zadar and Nin Shore Excursion",
    metaDescription:
      "Private shore excursion combining historic Zadar and ancient Nin — two Dalmatian stories with flexible cruise-day timing and ship buffers.",
    category: "Private",
    tagline:
      "Two captivating Croatian towns — Zadar’s layers and Nin’s ancient shoreline character.",
    duration: "Approximately 5 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want Zadar plus a second historic town without a national-park hiking day",
    overview:
      "A private discovery linking Zadar’s historic peninsula with Nin — ancient shoreline atmosphere and a second Dalmatian narrative beyond a single old-town loop.",
    body: [
      "Zadar alone can fill a day; pairing Nin adds contrast — salt-flat light, ancient church heritage and a calmer coastal scale.",
      "Private routing helps you protect Sea Organ time if that matters to your party.",
      "Confirm exact stops and walking expectations on your voucher.",
    ],
    highlights: [
      "Private Zadar orientation",
      "Time in historic Nin",
      "Flexible party pacing",
      "Dalmatian history without a long park transfer",
    ],
    itinerary: [
      {
        title: "Zadar highlights",
        detail: "Private introduction to key historic and waterfront points in Zadar.",
      },
      {
        title: "Continue to Nin",
        detail: "Travel to Nin for ancient-town atmosphere and landmark context.",
      },
      {
        title: "Return toward the ship",
        detail: "Transfer back with buffer for Gaženica embarkation.",
      },
    ],
    included: [
      "Private transport and driver-guide as vouchered",
      "Cruise-aware timing",
    ],
    notIncluded: [
      "Entrance fees unless stated",
      "Meals and personal purchases",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Ask to include Sea Organ / Greeting to the Sun if not already sequenced",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Nin far from Zadar?",
        answer:
          "It is a short regional transfer relative to Krka or Plitvice, making this a manageable half-day private pairing on many calls.",
      },
    ],
    relatedExcursionSlugs: [
      "old-town-historical-walk",
      "private-zadar-maraschino-walk",
      "krka-waterfalls-skradin",
    ],
    featured: false,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets",
    cruiseSuitability: "Best with roughly half a day ashore",
    editorChoice: false,
    whyWeChose: {
      lead: "Two towns, one private clock — Zadar’s depth plus Nin’s ancient shoreline calm.",
      whyRecommended:
        "When you want history beyond a single peninsula walk without committing to waterfalls.",
      whoItSuits: "Private parties who enjoy layered heritage and flexible pacing.",
      whatMakesItSpecial: "Contrast between artistic Zadar and intimate Nin.",
      cruiseFit: "Shorter road exposure than national-park days on many schedules.",
      theExperience: "You collect two Dalmatian moods and still protect the ship.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-zadar-maraschino-walk",
    title: "Private Zadar Walk & Maraschino Tasting",
    seoTitle: "Private Zadar Walking Tour with Maraschino Tasting",
    metaDescription:
      "Private Zadar walking shore excursion with Maraschino cherry liqueur tasting — landmarks, architecture and local flavour.",
    category: "Food & Wine",
    tagline:
      "Zadar’s soul on foot — landmarks, architecture and the city’s signature cherry liqueur.",
    duration: "Approximately 4 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want a private Old Town walk with a distinctive local tasting",
    overview:
      "A private walking tour through Zadar’s historic core with architectural highlights and a Maraschino cherry liqueur tasting — local flavour woven into the city’s story.",
    body: [
      "Maraschino is part of Zadar’s identity. Tasting it in context turns a walk into a sensory introduction to the city.",
      "Private pacing lets you linger at the Forum, churches and waterfront according to interest.",
      "Build in time for the Sea Organ and Greeting to the Sun — even on a guided day, those installations should not be missed.",
    ],
    highlights: [
      "Private guided Old Town walk",
      "Maraschino tasting experience",
      "Architectural and historic highlights",
      "Flexible party pacing",
    ],
    itinerary: [
      {
        title: "Private meet",
        detail: "Join your guide near the historic centre / shuttle area.",
      },
      {
        title: "Landmark walking",
        detail: "Explore iconic streets, squares and façades at your group’s pace.",
      },
      {
        title: "Maraschino tasting",
        detail: "Pause for Zadar’s signature cherry liqueur tasting as vouchered.",
      },
    ],
    included: [
      "Private walking guide",
      "Maraschino tasting as stated on voucher",
      "Historic orientation",
    ],
    notIncluded: [
      "Additional drinks and food",
      "Entrance fees unless stated",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Come curious about local flavour, not expecting a full meal replacement",
      "Leave margin for the waterfront installations",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is Maraschino strong?",
        answer:
          "It is a distinctive cherry liqueur. Taste responsibly and confirm non-alcoholic alternatives in advance if needed.",
      },
    ],
    relatedExcursionSlugs: [
      "old-town-historical-walk",
      "private-zadar-and-nin",
      "krka-waterfalls-skradin",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — historic streets",
    cruiseSuitability: "Excellent when you want culture close to the Old Town",
    editorChoice: false,
    whyWeChose: {
      lead: "Zadar is a city you taste as well as walk — Maraschino makes the story local.",
      whyRecommended:
        "For private parties who want landmark context and a signature flavour without leaving the walkable core.",
      whoItSuits: "Food-curious travellers, couples and small groups.",
      whatMakesItSpecial: "Cherry-liqueur heritage woven through artistic, historic streets.",
      cruiseFit: "Low transfer risk with room for Sea Organ light afterwards.",
      theExperience: "You remember Zadar with your feet and a glass — then stroll toward the Adriatic steps.",
    },
    supplier: SEG_SUPPLIER,
  },
];

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getEditorsChoiceExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.editorChoice === true);
}

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}
