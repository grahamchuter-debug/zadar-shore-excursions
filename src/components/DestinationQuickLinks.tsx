import Link from "next/link";

const links = [
  {
    title: "City or Krka?",
    description:
      "Compare historic Zadar on foot with Editor’s Choice Krka waterfalls — honest trade-offs for your hours ashore.",
    href: "/compare/city-or-krka",
  },
  {
    title: "Zadar cruise port guide",
    description: "Gaženica shuttle, Old Town arrival and return-to-ship timing.",
    href: "/guides/cruise-port-guide",
  },
  {
    title: "Walk It Yourself",
    description: "Free self-guided route from Land Gate to the Sea Organ.",
    href: "/guides/explore-independently",
  },
  {
    title: "Zadar cruise schedules",
    description: "Ship-call framework for planning — live entries publish when verified.",
    href: "/ship-schedules",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-y border-coastal-100">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Quick links</p>
          <h2 className="section-title mt-2">Plan Zadar with clarity</h2>
          <p className="section-subtitle">
            Start with the decision that matches your hours, mobility and curiosity — whether you stay
            in the Old Town or travel to Krka.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-card">
              <h3 className="font-display text-xl font-bold text-gray-900">{link.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{link.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-maple-600">Open →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/guides" className="text-sm font-semibold text-coastal-800 hover:underline">
            All Zadar planning guides →
          </Link>
        </div>
      </div>
    </section>
  );
}
