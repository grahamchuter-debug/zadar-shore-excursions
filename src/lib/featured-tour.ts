/**
 * Featured-tour helpers — Krka Editor's Choice flagship used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("krka-waterfalls-skradin");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "krka-waterfalls-skradin",
      path: "/shore-excursions/krka-waterfalls-skradin",
      bookingPath: "/book/krka-waterfalls-skradin",
      cardName: "Scenic Krka Waterfalls, Lake Cruise & Skradin",
      fullName: "Scenic Krka Waterfalls, Lake Cruise & Skradin Shore Excursion",
    };
