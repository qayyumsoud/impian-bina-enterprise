import { createFileRoute, Link } from "@tanstack/react-router";
import { CertStrip } from "@/components/site/CertStrip";
import heroImg from "@/assets/hero-construction.webp";
import concreteImg from "@/assets/hero-concrete.webp";
import residentialImg from "@/assets/service-residential.webp";
import commercialImg from "@/assets/service-commercial.webp";
import infraImg from "@/assets/service-infrastructure.webp";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project6 from "@/assets/project-6.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Impian Bina — CIDB G7 Contractor in Negeri Sembilan & Melaka" },
      {
        name: "description",
        content:
          "CIDB G7 licensed construction company in Negeri Sembilan and Melaka. Residential, commercial, government, and infrastructure projects since 2008.",
      },
      { name: "keywords", content: "construction Negeri Sembilan, kontraktor Melaka, CIDB G7, SPKK contractor, renovation Seremban, government projects Malaysia" },
      { property: "og:title", content: "Impian Bina — Building the Future with Local Precision" },
      { property: "og:description", content: "CIDB G7 licensed contractor serving Negeri Sembilan and Melaka." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

const services = [
  { idx: "01", name: "Residential", blurb: "Custom bungalows and modern housing tailored to Malaysian living.", img: residentialImg },
  { idx: "02", name: "Commercial", blurb: "Shoplots, offices, and retail builds engineered for tenant turnover.", img: commercialImg },
  { idx: "03", name: "Infrastructure", blurb: "Roads, drainage, and civil works to JKR and CIDB specifications.", img: infraImg },
];

const featuredProjects = [
  { title: "Bandar Sri Sendayan Bungalow", category: "Residential", img: project1 },
  { title: "Seremban Commercial Lot", category: "Commercial", img: project2 },
  { title: "Sekolah Kebangsaan Rebuild", category: "Government", img: project6 },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 border-b border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-12 items-end">
          <div className="md:col-span-8 fade-in-up">
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">
              Established 2008 · Negeri Sembilan & Melaka
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-balance mb-8 uppercase">
              Building the{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px var(--color-foreground)" }}
              >
                Future
              </span>{" "}
              with Local Precision.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
              Impian Bina delivers residential, infrastructure, and government contracts
              across Negeri Sembilan and Melaka — from concrete pour to finishing touch.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors"
              >
                Get Quotation
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border border-foreground/15 font-bold uppercase text-xs tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div
            className="md:col-span-4 fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src={heroImg}
              alt="Concrete and steel rebar construction site at sunset"
              width={1600}
              height={1200}
              className="w-full aspect-[3/4] object-cover grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      <CertStrip />

      {/* Services */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Core Services</h2>
            <span className="mono text-xs text-muted-foreground">01 — 05 Expertise</span>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {services.map((s) => (
              <article
                key={s.idx}
                className="group bg-card p-10 md:p-12 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span className="mono text-xs mb-8 block opacity-50">{s.idx}</span>
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full aspect-[4/3] object-cover mb-8 grayscale-[15%]"
                />
                <h3 className="text-2xl font-bold mb-3 tracking-tight uppercase">{s.name}</h3>
                <p className="text-sm leading-relaxed opacity-70 group-hover:opacity-100">{s.blurb}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex mono text-xs uppercase tracking-widest text-primary hover:text-foreground"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-foreground/10 pb-8 gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Featured Projects</h2>
            <Link to="/projects" className="mono text-xs uppercase tracking-widest text-primary hover:text-foreground">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
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
                <p className="mono text-[10px] uppercase tracking-widest text-primary mt-4">{p.category}</p>
                <h3 className="font-bold uppercase tracking-tight mt-1">{p.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage band */}
      <section className="bg-background border-y border-foreground/10 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Service Area</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6">
              Negeri Sembilan<br/>& Melaka.
            </h2>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Headquartered in Seremban with a regional office in Melaka City. Projects
              outside these states require a minimum contract value of <strong className="text-foreground">RM250,000</strong>.
            </p>
            <Link to="/coverage" className="mono text-xs uppercase tracking-widest text-primary hover:text-foreground">
              Coverage details →
            </Link>
          </div>
          <div className="relative">
            <img
              src={concreteImg}
              alt="Concrete texture"
              loading="lazy"
              width={900}
              height={1200}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-8 md:p-10 max-w-xs">
              <p className="mono text-[10px] uppercase tracking-widest opacity-70 mb-2">Min. Project</p>
              <p className="text-3xl font-black tracking-tighter">RM 250,000</p>
              <p className="text-[10px] mt-3 opacity-70 uppercase tracking-widest">For projects outside NS & Melaka</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mono text-[11px] uppercase tracking-[0.3em] text-primary mb-6">Ready to build?</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
            Let's pour the foundation of your next project.
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-xs tracking-widest hover:bg-background hover:text-foreground transition-colors">
              Contact Us
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white/20 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-accent transition-colors">
              Request Quotation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
