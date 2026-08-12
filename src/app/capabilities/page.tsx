import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { capabilities } from "@/lib/capabilities";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Capabilities | GFB Federal Solutions",
  description:
    "Enterprise data architecture, data engineering, governance, analytics, AI/LLM solutions, and federal data modernization services.",
};

export default function CapabilitiesPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Capabilities"
          subtitle={company.positioning}
          className="mb-16"
        />

        <div className="space-y-16">
          {capabilities.map((cap) => (
            <section
              key={cap.id}
              id={cap.id}
              className="scroll-mt-24 border-b border-border/40 pb-16 last:border-0"
            >
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                {cap.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
                {cap.summary}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cap.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
