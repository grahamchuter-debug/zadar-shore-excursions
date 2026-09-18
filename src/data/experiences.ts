import type { GuidePage } from "./types";

export const experiencePages: GuidePage[] = [
  {
    slug: "cruise-port-guide",
    title: "Zadar Cruise Port Guide",
    seoTitle: "Zadar Cruise Port Guide — Gaženica to Old Town",
    metaDescription:
      "Practical Zadar cruise port guide: Gaženica berth, shuttle to the Old Town, timing buffers, Sea Organ tips and when an excursion helps.",
    tagline: "From Gaženica to the historic peninsula — calm logistics for a beautiful day ashore.",
    overview:
      "Most cruise ships berth at Gaženica, south of Zadar’s historic peninsula. A shuttle typically connects toward the Old Town near the Land Gate. From there the city is compact, walkable and rich enough for a full independent day — or a launch point for Krka and the wider coast.",
    body: [
      "Confirm shuttle arrangements and your all-aboard time before leaving the terminal area. Plan backwards from the moment you must be aboard, not from the published departure.",
      "The historic centre rewards slow walking: Roman Forum, St Donatus, cathedral approaches, café squares and the waterfront installations.",
      "Organised excursions become most useful when you leave for Krka, Plitvice or Šibenik — or when you want guided narrative without navigation effort.",
      "Even on an excursion day, protect time for the Sea Organ and Greeting to the Sun if your clock allows.",
    ],
    highlights: [
      "Gaženica berth with shuttle toward Old Town",
      "Compact historic peninsula once you arrive",
      "Sea Organ and Greeting to the Sun on the waterfront",
      "Keep a 60–90 minute return buffer",
    ],
    tips: [
      "Wear comfortable shoes for stone streets",
      "Carry water and sun protection in summer",
      "Photograph sunset light only if all-aboard truly allows",
    ],
    faqs: [
      {
        question: "Is the Old Town walkable from the ship?",
        answer:
          "Not usually as a casual stroll from Gaženica. Use the shuttle (or arranged transfer), then explore on foot within the peninsula.",
      },
      {
        question: "How long do I need in Zadar?",
        answer:
          "Three to five hours covers Old Town highlights and the waterfront without rushing. A longer call supports Krka or a deeper café day.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Our free self-guided route from shuttle to Sea Organ.",
        href: "/guides/explore-independently",
      },
      {
        category: "editors-choice",
        title: "Krka Waterfalls & Skradin",
        description: "Editor’s Choice when you want scenery beyond the city.",
        href: "/shore-excursions/krka-waterfalls-skradin",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-zadar", "cruise-tips"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "one-day-in-zadar",
    title: "One Day in Zadar",
    seoTitle: "One Day in Zadar on a Cruise — How to Spend Your Port Call",
    metaDescription:
      "How to spend one day in Zadar on a cruise: Walk It Yourself, Sea Organ sunset, or Krka National Park — honest timing advice.",
    tagline: "Three outstanding cruise experiences — choose what genuinely suits you.",
    overview:
      "Zadar offers three outstanding ways to spend a cruise day: explore the historic Old Town independently; discover Croatia’s spectacular coastline and national parks; or simply slow down on one of Europe’s most beautiful waterfronts.",
    body: [
      "Option one — Walk It Yourself through Land Gate, Forum, St Donatus, cathedral approaches and the waterfront installations. Ideal if you enjoy history, cafés and atmosphere.",
      "Option two — leave for Krka (Editor’s Choice) or, on a long call, Plitvice. Exceptional scenery beyond the city.",
      "Option three — linger. Harbour cafés, Maraschino heritage and sunset light can be the whole point.",
      "We never push excursions unnecessarily. Match the day to your hours, mobility and curiosity.",
    ],
    highlights: [
      "Independent Old Town day",
      "Krka for national-park drama",
      "Waterfront as a destination in itself",
      "Always protect the return buffer",
    ],
    tips: [
      "Decide before you leave the terminal: city, nature, or slow waterfront",
      "Do not miss Sea Organ / Greeting to the Sun even on excursion days if time remains",
    ],
    faqs: [
      {
        question: "What is the best first-time plan?",
        answer:
          "Most first-timers are happiest with Walk It Yourself plus dedicated waterfront time. Choose Krka when scenery beyond the city is the priority and hours allow.",
      },
    ],
    recommendations: [
      {
        category: "best-independent",
        title: "Walk It Yourself",
        description: "Historic Zadar at your own pace.",
        href: "/guides/explore-independently",
      },
      {
        category: "editors-choice",
        title: "Editor's Choice — Krka",
        description: "Waterfalls and Skradin for a nature-forward day.",
        href: "/shore-excursions/krka-waterfalls-skradin",
      },
    ],
    relatedSlugs: ["cruise-port-guide", "explore-independently", "sea-organ"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "explore-independently",
    title: "Walk It Yourself",
    seoTitle: "Walk It Yourself in Zadar — Free Self-Guided Cruise Walking Route",
    metaDescription:
      "Free Walk It Yourself guide for Zadar cruise passengers: Land Gate, Roman Forum, St Donatus, Sea Organ and Greeting to the Sun with return-to-ship tips.",
    tagline:
      "Historic Zadar on foot — a free self-guided route for one of Croatia’s easiest cruise cities to explore independently.",
    overview:
      "Zadar’s historic peninsula is compact, atmospheric and genuinely rewarding without an organised tour. This Walk It Yourself route takes you from the cruise shuttle through the Old Town to the Sea Organ and Greeting to the Sun — with café pauses and an honest return buffer.",
    body: [
      "Unlike Dubrovnik, Zadar is less about grand monument density and more about atmosphere: Adriatic light, Roman stone, Venetian gates and an artistic waterfront.",
      "You do not need a ticketed itinerary to have a wonderful day. You do need comfortable shoes, water and discipline about all-aboard.",
      "If you later want cascading countryside, our Editor’s Choice Krka day is the natural organised option — never a requirement.",
    ],
    highlights: [
      "Shuttle to Land Gate start",
      "Roman Forum and St Donatus",
      "Sea Organ and Greeting to the Sun",
      "Harbour café culture",
      "No interactive map required — follow the sequence",
    ],
    tips: [
      "Confirm all-aboard before you leave Gaženica",
      "Leave the furthest waterfront stop early enough for shuttle plus buffer",
      "Sunset is magical only when the clock honestly allows",
    ],
    faqs: [
      {
        question: "Is Walk It Yourself free?",
        answer:
          "Yes. This is a self-guided editorial route. You may pay for shuttle fees if charged, café purchases and any optional church or museum entries.",
      },
      {
        question: "How long does the route take?",
        answer:
          "Typically three to five hours with café pauses. Shorten by prioritising Forum, St Donatus and the waterfront installations.",
      },
    ],
    recommendations: [
      {
        category: "editors-choice",
        title: "Krka Waterfalls & Skradin",
        description: "When you want nature beyond this walk.",
        href: "/shore-excursions/krka-waterfalls-skradin",
      },
    ],
    relatedSlugs: ["cruise-port-guide", "sea-organ", "greeting-to-the-sun", "old-town-guide"],
    imageKey: "walking",
    hubPath: "/guides",
    independentWalk: {
      eyebrow: "Free self-guided route",
      idealFor: [
        "Cruise passengers with 4+ hours ashore after the shuttle",
        "First-time visitors who enjoy walking at their own pace",
        "Photographers and café explorers",
        "Guests who want atmosphere more than a monument checklist",
      ],
      duration: "3–5 hours",
      distance: "Approximately 3–5 km within the historic peninsula",
      difficulty: "Easy to moderate — stone streets, largely flat waterfront",
      bestFor: [
        "Independent explorers",
        "Families comfortable with cobbles",
        "Anyone who prefers café pauses over a fixed itinerary",
      ],
      familyFriendly: true,
      wheelchairFriendly: false,
      recommendedReturnBuffer:
        "Aim to be back at the terminal 60–90 minutes before all-aboard, including shuttle time from the Old Town. Independent days fail only when the buffer is optimistic.",
      route: [
        {
          number: 1,
          title: "Cruise shuttle to the Old Town",
          description:
            "From Gaženica, take the cruise shuttle toward the historic peninsula. Confirm the return shuttle pattern and your all-aboard time before you wander. The day begins when you step off near the Old Town approach.",
          durationMinutes: 25,
          tip: "Plan backwards from all-aboard — include shuttle wait time both ways.",
        },
        {
          number: 2,
          title: "Land Gate",
          description:
            "Enter through the Land Gate, the monumental Venetian threshold into the old city. Pause for the photograph, then let the first lanes be about orientation rather than rushing every façade.",
          durationMinutes: 15,
          tip: "If the gate area feels busy, step inside and peel into quieter parallel streets.",
        },
        {
          number: 3,
          title: "People's Square",
          description:
            "People’s Square (Narodni trg) is Zadar’s civic living room — cafés, clock-tower presence and a natural pause for people-watching. Take the atmosphere in; do not let the square consume the whole morning.",
          durationMinutes: 25,
          tip: "A short coffee here sets a Mediterranean pace without derailing the route.",
        },
        {
          number: 4,
          title: "Roman Forum",
          description:
            "The Roman Forum opens the city’s deepest layer — columns, paving and the sense of a Mediterranean civic stage that predates the cruise age by two millennia. Walk the space slowly; this is atmosphere, not a museum queue.",
          durationMinutes: 25,
          tip: "Morning light is kinder for photographs; midday can feel harsher and busier.",
        },
        {
          number: 5,
          title: "Church of St Donatus",
          description:
            "The round pre-Romanesque Church of St Donatus is one of Zadar’s defining silhouettes. Circle the exterior, feel the scale, and decide whether an interior visit fits your time and interest.",
          durationMinutes: 20,
          tip: "You do not need every interior to feel you have arrived — the form alone is memorable.",
        },
        {
          number: 6,
          title: "Cathedral",
          description:
            "Continue toward the Cathedral of St Anastasia and its surrounding approaches. Notice how Roman, medieval and later layers sit within a few minutes’ walk — Zadar’s gift is compression, not sprawl.",
          durationMinutes: 25,
        },
        {
          number: 7,
          title: "Waterfront promenade",
          description:
            "Drift toward the western waterfront promenade where the city meets the Adriatic. The mood shifts from stone lanes to sea air — this is where Zadar becomes quietly theatrical.",
          durationMinutes: 20,
          tip: "Keep an eye on time once you reach the water; the installations invite lingering.",
        },
        {
          number: 8,
          title: "Sea Organ",
          description:
            "Sit on the Sea Organ steps and listen. Waves play the instrument — one of Europe’s most original waterfront experiences. Stay long enough to hear the sea change the music.",
          durationMinutes: 30,
          tip: "Even if you take an excursion another day, do not miss this.",
        },
        {
          number: 9,
          title: "Greeting to the Sun",
          description:
            "A few steps away, the Greeting to the Sun solar circle answers with light — especially evocative toward dusk. By day it is still a striking geometry against the Adriatic.",
          durationMinutes: 20,
          tip: "Sunset here is famous; only chase it if your all-aboard truly allows.",
        },
        {
          number: 10,
          title: "Harbour cafés",
          description:
            "Peel back toward harbour cafés for a Dalmatian pause — coffee, gelato or a light bite. Choose places where locals actually sit, not only the front-row tourist terrace.",
          durationMinutes: 35,
        },
        {
          number: 11,
          title: "Return to ship",
          description:
            "Retrace toward the shuttle point with composure. Include wait time, the ride to Gaženica and your personal buffer. The ship will not wait for one more photograph.",
          durationMinutes: 40,
          tip: "Aim to be at the terminal 60–90 minutes before all-aboard.",
        },
      ],
      dontMiss: [
        {
          category: "Must experience",
          title: "Sea Organ",
          description:
            "The city’s most unique creation — music made by the Adriatic. Worth the sit even if you skip every interior.",
        },
        {
          category: "Must experience",
          title: "Greeting to the Sun",
          description:
            "Solar light installation beside the Organ — unforgettable at dusk when timing allows.",
        },
        {
          category: "History",
          title: "Roman Forum",
          description:
            "Open civic stone that anchors Zadar’s ancient identity without a fortress spectacle.",
        },
        {
          category: "Architecture",
          title: "Church of St Donatus",
          description:
            "The round pre-Romanesque silhouette that defines many first photographs of the city.",
        },
        {
          category: "Photo spots",
          title: "Land Gate",
          description:
            "Venetian monumentality framing your arrival into the Old Town.",
        },
        {
          category: "Photo spots",
          title: "Waterfront promenade light",
          description:
            "Adriatic horizon, stone steps and evening colour — Zadar’s quiet drama.",
        },
      ],
      coffeeStops: [
        {
          name: "People's Square café pause",
          description:
            "Any well-run café on or just off Narodni trg where the terrace feels local rather than performative — espresso, people-watching, reset.",
          specialty: "Coffee and a short pause",
          nearStop: "People's Square",
        },
        {
          name: "Harbour-side table",
          description:
            "After the Sea Organ, choose a harbour café for gelato or a light Dalmatian bite. Look for menus with grilled fish, olive oil and simple salads rather than only cruise-laminate photographs.",
          specialty: "Light bites and Adriatic air",
          nearStop: "Near the waterfront / harbour",
        },
      ],
      localTips: [
        {
          label: "Public toilets",
          detail:
            "Use terminal facilities before the shuttle. In town, cafés and some public facilities near the waterfront are the practical options.",
        },
        {
          label: "Cash / card",
          detail:
            "Cards are widely accepted. A little cash still helps for small purchases.",
        },
        {
          label: "Water",
          detail:
            "Bring a bottle from the ship. Restock at cafés without a long detour.",
        },
        {
          label: "Wi-Fi",
          detail:
            "Ship Wi-Fi fades. Cafés often help if you need a quick schedule check.",
        },
        {
          label: "Safety",
          detail:
            "Zadar’s Old Town is generally comfortable by day. Use normal city awareness in crowded shuttle and waterfront moments.",
        },
        {
          label: "Accessibility",
          detail:
            "Stone paving and steps limit wheelchair access in places. The waterfront promenade is often easier than the densest lanes.",
        },
        {
          label: "Best time to walk",
          detail:
            "Morning is calmer for Forum and churches. Late afternoon light on the waterfront is extraordinary when all-aboard allows.",
        },
      ],
      backToShip: {
        latestDeparture:
          "Leave the Sea Organ / café area early enough for the walk to the shuttle, wait time, transfer to Gaženica and your personal buffer.",
        walkingTime:
          "Budget time from the waterfront back to the shuttle point, then the shuttle to Gaženica — often 30–50 minutes combined depending on waits and pace.",
        taxiAlternative:
          "Taxis can help if legs tire or weather turns — agree Gaženica cruise terminal clearly and watch for queues when multiple ships are in.",
        safetyMargin:
          "Aim to be back at the terminal 60–90 minutes before all-aboard.",
        notes:
          "Comfortable shoes matter more than any packing tip. If sunset tempts you, confirm the maths twice.",
      },
      exploreFurther: {
        excursionSlug: "krka-waterfalls-skradin",
        title: "Want more than a self-guided loop?",
        body: "If you'd like Croatia’s cascading countryside beyond the historic peninsula, our Editor's Choice excursion — Scenic Krka Waterfalls, Lake Cruise & Skradin — is the natural next step. It is never required; it is simply the day we recommend when a walk alone is not quite enough.",
        href: "/shore-excursions/krka-waterfalls-skradin",
        ctaLabel: "Read about Editor’s Choice",
      },
    },
  },
  {
    slug: "sea-organ",
    title: "Sea Organ Guide",
    seoTitle: "Zadar Sea Organ Guide for Cruise Passengers",
    metaDescription:
      "Visit the Zadar Sea Organ on a cruise day — what it is, when to go, how long to stay and how it pairs with Greeting to the Sun.",
    tagline: "Waves that play music — the city’s most unique waterfront experience.",
    overview:
      "The Sea Organ is an architectural instrument on Zadar’s waterfront: steps that sing with the Adriatic. It is the experience many visitors remember longest — and one that should not be missed even if you take a shore excursion.",
    body: [
      "Sit, listen and let the sea change the melody. There is no ticket booth required for the essential experience — only time and attention.",
      "Pair it with the Greeting to the Sun a few steps away. Together they define modern Zadar’s artistic identity beside Roman and Venetian stone.",
      "Crowds gather near sunset. If your all-aboard is early, visit mid-morning or afternoon instead of gambling the light.",
    ],
    highlights: [
      "Free to experience on the waterfront steps",
      "Best with 20–40 unhurried minutes",
      "Pairs naturally with Greeting to the Sun",
      "Memorable even without sunset",
    ],
    tips: [
      "Mind wet steps and sea spray",
      "Keep valuables close in crowds",
      "Do not miss this for another identical café terrace",
    ],
    faqs: [
      {
        question: "Is the Sea Organ free?",
        answer:
          "Yes — the waterfront experience is open. Nearby cafés and purchases are optional.",
      },
    ],
    recommendations: [
      {
        category: "best-photography",
        title: "Best Viewpoints",
        description: "Where to photograph Zadar’s waterfront light.",
        href: "/guides/best-viewpoints",
      },
    ],
    relatedSlugs: ["greeting-to-the-sun", "explore-independently", "best-viewpoints"],
    imageKey: "sea-organ",
    hubPath: "/guides",
  },
  {
    slug: "greeting-to-the-sun",
    title: "Greeting to the Sun Guide",
    seoTitle: "Greeting to the Sun Zadar — Cruise Visitor Guide",
    metaDescription:
      "Greeting to the Sun in Zadar for cruise passengers — solar circle, evening light, timing tips and how it pairs with the Sea Organ.",
    tagline: "A solar circle on the Adriatic — light answering the Sea Organ’s music.",
    overview:
      "The Greeting to the Sun is a circular solar installation on Zadar’s waterfront. By day it is striking geometry; toward dusk it becomes a glowing stage that many visitors associate with Hitchcock’s beloved sunset.",
    body: [
      "Visit with the Sea Organ as a pair. The two installations sit moments apart and complete each other.",
      "Evening is magical when ship timing allows. Otherwise enjoy the site in daylight and keep your return buffer sacred.",
      "Surface can be slippery when wet — move carefully, especially with children.",
    ],
    highlights: [
      "Iconic solar circle beside the Sea Organ",
      "Best near sunset when all-aboard allows",
      "Photogenic day or evening",
      "Essential even on excursion days if time remains",
    ],
    tips: [
      "Confirm all-aboard before committing to sunset",
      "Wear shoes with grip after rain or spray",
    ],
    faqs: [
      {
        question: "Can I see it if my ship leaves mid-afternoon?",
        answer:
          "Yes — visit earlier. The installation is worth seeing in daylight even without the evening show.",
      },
    ],
    recommendations: [
      {
        category: "best-view",
        title: "Sea Organ Guide",
        description: "Listen first, then watch the light.",
        href: "/guides/sea-organ",
      },
    ],
    relatedSlugs: ["sea-organ", "best-viewpoints", "one-day-in-zadar"],
    imageKey: "greeting-to-the-sun",
    hubPath: "/guides",
  },
  {
    slug: "old-town-guide",
    title: "Zadar Old Town Guide",
    seoTitle: "Zadar Old Town Guide for Cruise Passengers",
    metaDescription:
      "Cruise guide to Zadar Old Town — Land Gate, Forum, St Donatus, cathedral approaches and how to enjoy the historic peninsula.",
    tagline: "A compact peninsula of Roman stone, Venetian gates and café life.",
    overview:
      "Zadar’s Old Town occupies a historic peninsula: walkable, layered and more about atmosphere than fortress spectacle. It is the heart of most independent cruise days.",
    body: [
      "Begin at the Land Gate, wander to People’s Square, then open into the Roman Forum and St Donatus.",
      "Cathedral approaches and quieter lanes repay curiosity once you leave the first postcard cluster.",
      "Finish toward the waterfront — the Old Town’s modern artistic chapter.",
    ],
    highlights: [
      "Land Gate arrival",
      "Roman Forum",
      "Church of St Donatus",
      "Café squares and lanes",
    ],
    tips: [
      "Cobbles are uneven — choose footwear carefully",
      "Combine with Sea Organ time rather than treating them as rivals",
    ],
    faqs: [
      {
        question: "How much time do I need in the Old Town?",
        answer:
          "Two to four hours covers highlights without rushing. Add café and waterfront time for a fuller day.",
      },
    ],
    relatedSlugs: ["explore-independently", "cruise-port-guide", "food-guide"],
    imageKey: "historic",
    hubPath: "/guides",
  },
  {
    slug: "food-guide",
    title: "Zadar Food Guide",
    seoTitle: "Zadar Food Guide — Dalmatian Cuisine for Cruise Visitors",
    metaDescription:
      "What to eat in Zadar on a cruise day — Dalmatian seafood, olive oil, café culture and Maraschino cherry liqueur tips for cruise passengers near the Old Town.",
    tagline: "Harbour tables, olive oil and Maraschino — Dalmatia by the plate.",
    overview:
      "Zadar’s food culture is Mediterranean and local: grilled fish, olive oil, simple salads, café rituals and the city’s signature Maraschino cherry liqueur.",
    body: [
      "You do not need a formal food tour to eat well. Harbour and Old Town cafés reward browsing with a little curiosity.",
      "Maraschino tasting appears on private walks if you want structure; otherwise ask at a reputable local bar or shop.",
      "Keep alcohol and timing responsible relative to embarkation.",
    ],
    highlights: [
      "Dalmatian seafood and olive oil",
      "Café culture on People’s Square",
      "Maraschino heritage",
      "Easy to combine with Walk It Yourself",
    ],
    tips: [
      "Eat a proper lunch if you skip an excursion — energy matters on stone streets",
      "Mention allergies early on any tasting experience",
    ],
    faqs: [
      {
        question: "Where should I eat near the Sea Organ?",
        answer:
          "Walk a few minutes toward harbour cafés and choose a place with a simple Dalmatian menu rather than only the closest terrace.",
      },
    ],
    recommendations: [
      {
        category: "best-food",
        title: "Private Maraschino Walk",
        description: "Landmarks plus Zadar’s signature tasting.",
        href: "/shore-excursions/private-zadar-maraschino-walk",
      },
    ],
    relatedSlugs: ["explore-independently", "one-day-in-zadar", "old-town-guide"],
    imageKey: "food",
    hubPath: "/guides",
  },
  {
    slug: "best-viewpoints",
    title: "Best Viewpoints in Zadar",
    seoTitle: "Best Viewpoints in Zadar for Cruise Photographers",
    metaDescription:
      "Best Zadar viewpoints for cruise visitors — Sea Organ steps, Greeting to the Sun, waterfront promenade and Old Town angles.",
    tagline: "Adriatic horizon, solar light and stone steps made for the camera.",
    overview:
      "Zadar’s finest views are waterfront-first: Sea Organ geometry, Greeting to the Sun, promenade horizons and soft evening colour over the Adriatic.",
    body: [
      "Prioritise the western waterfront for signature images.",
      "Old Town lanes and the Land Gate offer tighter architectural frames.",
      "Sunset is famous — only chase it with a verified buffer.",
    ],
    highlights: [
      "Sea Organ steps",
      "Greeting to the Sun",
      "Promenade horizons",
      "Land Gate arrival frame",
    ],
    tips: [
      "Wipe spray from lenses near the Organ",
      "Arrive early for sunset space when ships coincide",
    ],
    faqs: [
      {
        question: "Do I need a tour for photography?",
        answer:
          "No. The best frames are on foot along the waterfront and through the Old Town.",
      },
    ],
    relatedSlugs: ["sea-organ", "greeting-to-the-sun", "explore-independently"],
    imageKey: "photography",
    hubPath: "/guides",
  },
  {
    slug: "cruise-tips",
    title: "Zadar Cruise Tips",
    seoTitle: "Zadar Cruise Tips — Timing, Shuttle and Day Ashore Advice",
    metaDescription:
      "Essential Zadar cruise tips: Gaženica shuttle, all-aboard buffers, Sea Organ timing, Krka vs city and independent exploration.",
    tagline: "Practical advice so atmosphere does not cost you the ship.",
    overview:
      "Successful Zadar days are simple: respect the shuttle, protect the buffer, choose city or nature honestly, and do not miss the waterfront installations.",
    body: [
      "Work from all-aboard, not brochure departure times.",
      "Independence is excellent here; excursions excel beyond the peninsula.",
      "Comfortable shoes, sun protection and water matter more than packing clever gadgets.",
    ],
    highlights: [
      "60–90 minute terminal buffer",
      "Shuttle logistics both ways",
      "City vs Krka decision early",
      "Sea Organ even on excursion days if possible",
    ],
    tips: [
      "Screenshot meeting points and emergency contacts",
      "Agree taxi destinations as Gaženica cruise terminal when needed",
    ],
    faqs: [
      {
        question: "What is the biggest mistake cruise visitors make?",
        answer:
          "Cutting the return fine for sunset photographs, or booking Plitvice on a call that cannot honestly support the road time.",
      },
    ],
    relatedSlugs: ["cruise-port-guide", "one-day-in-zadar", "faq"],
    imageKey: "port",
    hubPath: "/guides",
  },
  {
    slug: "faq",
    title: "Zadar Shore Excursions FAQ",
    seoTitle: "Zadar Shore Excursions FAQ for Cruise Passengers",
    metaDescription:
      "Frequently asked questions about Zadar shore excursions, independent exploration, Krka, the Sea Organ and cruise timing.",
    tagline: "Clear answers for planning a confident day ashore.",
    overview:
      "Common questions from cruise passengers calling at Zadar — independence, Editor’s Choice, waterfront must-sees and timing.",
    body: [
      "Zadar is unusually friendly to independent visitors after the shuttle.",
      "Krka is our Editor’s Choice when you want scenery beyond the city.",
      "Sea Organ and Greeting to the Sun belong on almost every itinerary somehow.",
    ],
    highlights: [
      "Independent exploration is viable",
      "Krka for nature days",
      "Waterfront installations are essential",
      "Buffers beat wishful timing",
    ],
    tips: [
      "Read Walk It Yourself before defaulting to a coach",
      "Compare city vs Krka if undecided",
    ],
    faqs: [
      {
        question: "Do I need a shore excursion in Zadar?",
        answer:
          "Not necessarily. Many guests have a wonderful independent day. Excursions add most value for Krka, Plitvice, Šibenik or guided narrative.",
      },
      {
        question: "What should nobody miss?",
        answer:
          "The Sea Organ and Greeting to the Sun — even if you also take an organised tour.",
      },
      {
        question: "What is Editor's Choice?",
        answer:
          "Scenic Krka Waterfalls, Lake Cruise & Skradin — selected for the strongest overall organised cruise experience beyond the city.",
      },
    ],
    relatedSlugs: ["cruise-tips", "one-day-in-zadar", "explore-independently"],
    imageKey: "compare",
    hubPath: "/guides",
  },
];

export function getExperienceBySlug(slug: string): GuidePage | undefined {
  return experiencePages.find((page) => page.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiencePages.map((page) => page.slug);
}
