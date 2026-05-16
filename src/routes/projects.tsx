import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import p1 from "@/assets/project-1.webp";
import p2 from "@/assets/project-2.webp";
import p3 from "@/assets/project-3.webp";
import p4 from "@/assets/project-4.webp";
import p5 from "@/assets/project-5.webp";
import p6 from "@/assets/project-6.webp";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Gallery — Completed and Ongoing Builds | Impian Bina" },
      { name: "description", content: "Browse our portfolio of completed and ongoing residential, commercial, and government construction projects across Negeri Sembilan and Melaka." },
      { property: "og:title", content: "Projects — Impian Bina" },
      { property: "og:description", content: "Residential, commercial and government builds across NS and Melaka." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Category = "All" | "Residential" | "Commercial" | "Government";

const projects: { title: string; location: string; category: Exclude<Category, "All">; status: "Completed" | "Ongoing"; img: string }[] = [
  { title: "Bandar Sri Sendayan Bungalow", location: "Seremban, NS", category: "Residential", status: "Completed", img: p1 },
  { title: "Jalan Hang Tuah Shoplots", location: "Melaka City", category: "Commercial", status: "Completed", img: p2 },
  { title: "FT12 Trunk Road Upgrade", location: "Port Dickson, NS", category: "Government", status: "Ongoing", img: p3 },
  { title: "Senawang Logistics Hub", location: "Senawang, NS", category: "Commercial", status: "Completed", img: p4 },
  { title: "Jonker Walk Shophouse Restoration", location: "Melaka City", category: "Residential", status: "Completed", img: p5 },
  { title: "SK Bukit Beruang Rebuild", location: "Melaka", category: "Government", status: "Ongoing", img: p6 },
];

const categories: Category[] = ["All", "Residential", "Commercial", "Government"];

function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Sites we've poured, framed, and finished."
        intro="A selection of completed and ongoing work across our two service states. Filter by category to narrow the list."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-foreground/10 pb-6">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-foreground/15 hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="mono text-[10px] uppercase tracking-widest text-primary">{p.category}</p>
                    <h3 className="font-bold uppercase tracking-tight mt-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.location}</p>
                  </div>
                  <span className={`mono text-[10px] uppercase tracking-widest px-2 py-1 border ${
                    p.status === "Ongoing" ? "border-primary text-primary" : "border-foreground/20 text-muted-foreground"
                  }`}>
                    {p.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
