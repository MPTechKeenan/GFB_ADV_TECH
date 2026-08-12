import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CapabilityCard from "@/components/CapabilityCard";
import HeroVisual from "@/components/HeroVisual";
import ContractingInformation from "@/components/ContractingInformation";
import { homeCapabilities } from "@/lib/capabilities";
import { company } from "@/lib/company";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#3b6ea5"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
                {company.shortName}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Data. Architecture. Intelligence. Mission Ready.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {company.positioning}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
                >
                  Explore Our Capabilities
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroVisual className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="What We Do"
            subtitle="Four focused capability areas applied to federal and defense data environments."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {homeCapabilities.map((cap) => (
              <CapabilityCard
                key={cap.title}
                title={cap.title}
                summary={cap.summary}
              />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/capabilities"
              className="inline-flex items-center text-sm font-semibold text-accent-light transition-colors hover:text-foreground"
            >
              View detailed capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Complex Federal Data Environments */}
      <section className="border-y border-border/40 bg-surface section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Built for Complex Federal Data Environments"
            subtitle="GFB Federal Solutions helps organizations turn fragmented systems, policies, requirements, and datasets into structured, governed, usable information."
          />
        </div>
      </section>

      <ContractingInformation />
    </>
  );
}
