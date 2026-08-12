import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContractingInformation from "@/components/ContractingInformation";

export const metadata: Metadata = {
  title: "About | GFB Federal Solutions",
  description:
    "GFB Federal Solutions is a specialized federal technology consulting firm focused on enterprise data architecture, engineering, governance, analytics, and AI solutions.",
};

const emphasis = [
  "Mission-focused delivery",
  "Practical, implementable solutions",
  "Deep data and architecture expertise",
  "Experience in federal technology environments",
  "Support from architecture through implementation",
];

export default function AboutPage() {
  return (
    <>
      <div className="section-padding">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="About" className="mb-12" />

          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
            <p>
              GFB Federal Solutions is a technology consulting firm focused on
              helping federal organizations solve complex data and information
              management challenges. We combine enterprise architecture, data
              engineering, governance, analytics, and emerging AI capabilities
              to help mission teams make better use of their information.
            </p>
            <p>
              We are a specialized, agile consulting firm — not a general
              technology services provider. Our work stays within the areas we
              know deeply: data architecture, engineering, governance, quality,
              analytics, and applied AI for document- and policy-heavy federal
              processes.
            </p>
            <p>
              That focus keeps our delivery grounded in practical outcomes,
              clear communication, and solutions that hold up in real federal
              operating environments.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-foreground">
              What we emphasize
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {emphasis.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-border/60 bg-surface px-5 py-4 text-sm text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ContractingInformation />
    </>
  );
}
