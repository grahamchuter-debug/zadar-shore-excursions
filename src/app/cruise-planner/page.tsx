import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Zadar cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Dalmatian coast recommendations.";

export const metadata = buildMetadata({
  title: "Zadar Cruise Planner — Dalmatian coast Port Day Itinerary",
  description,
  path,
  keywords: ["Zadar cruise planner", "Dalmatian coast cruise day plan", "Zadar port day itinerary", "Krka from Zadar planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Zadar Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Zadar Cruise Planner", description, path })]} />
      <PageHero
        title="Zadar Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for the historic centre, Krka, Zadar Old Town and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
