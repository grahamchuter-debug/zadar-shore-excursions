export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Zadar waterfront and Adriatic light — Croatia's City of Sunsets",
  ),
  ogDefault: img(
    "og-default",
    "Zadar shore excursions — Old Town, Sea Organ and Dalmatian coast",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Zadar Shore Excursions",
  },
  port: img("cruise-port", "Zadar cruise port arrangements toward the historic Old Town"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Zadar Old Town streets and landmarks"),
  coast: img("coastal", "Dalmatian Adriatic coastline near Zadar"),
  coastal: img("coastal", "Croatian coastal scenery from Zadar"),
  walking: img("walking", "Walking Zadar Old Town from the cruise shuttle"),
  food: img("food-and-wine", "Dalmatian food and café culture in Zadar"),
  "food-and-wine": img("food-and-wine", "Dalmatian cuisine and Maraschino heritage in Zadar"),
  private: img("private", "Private Zadar shore excursion experience"),
  photography: img("photography", "Photography viewpoints along the Zadar waterfront"),
  wine: img("wine", "Local tasting and Adriatic dining in Zadar"),
  compare: img("compare", "Comparing Zadar shore excursion options"),
  port: img("cruise-port", "Zadar cruise port and shuttle arrival"),
  highlights: img("highlights", "Zadar shore excursion highlights"),
  city: img("city", "Exploring Zadar on a cruise day"),
  "hero-home": img("hero", "Zadar Adriatic sunset hero image"),
  nature: img("nature", "Krka National Park nature day from Zadar"),
  family: img("family", "Family-friendly Zadar shore experiences"),
  "old-town": img("old-town", "Zadar Old Town historic peninsula"),
  "sea-organ": img("sea-organ", "Zadar Sea Organ on the Adriatic waterfront"),
  "greeting-to-the-sun": img(
    "greeting-to-the-sun",
    "Greeting to the Sun installation in Zadar",
  ),
  "krka-waterfalls": img("krka-waterfalls", "Krka waterfalls shore excursion from Zadar"),
  adriatic: img("adriatic", "Adriatic Sea light along the Zadar waterfront"),
  plitvice: img("plitvice", "Plitvice Lakes day trip from Zadar"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "krka-waterfalls-skradin": "krka-waterfalls",
  "old-town-historical-walk": "old-town",
  "plitvice-lakes": "plitvice",
  "sibenik-old-town-walk": "coastal",
  "private-krka-national-park": "krka-waterfalls",
  "private-zadar-and-nin": "historic",
  "private-zadar-maraschino-walk": "food",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("adriatic");

const highlightImageKeys: Record<string, string> = {
  "zadar-old-town": "old-town",
  "sea-organ": "sea-organ",
  "greeting-to-the-sun": "greeting-to-the-sun",
  "krka-from-zadar": "krka-waterfalls",
  "dalmatian-coast": "coastal",
};

const comparisonImageKeys: Record<string, string> = {
  "city-or-krka": "compare",
  "first-time-zadar-day": "historic",
  "tour-or-independent": "walking",
  "krka-or-plitvice": "nature",
  "private-tour-vs-coach-tour": "private",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  food: "food",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  photography: "photography",
  "sea-organ": "sea-organ",
  "greeting-to-the-sun": "greeting-to-the-sun",
  nature: "nature",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
