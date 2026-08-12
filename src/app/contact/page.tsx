import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact | GFB Federal Solutions",
  description:
    "Contact GFB Federal Solutions to discuss federal data, architecture, analytics, and AI-enabled mission support.",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              title="Let's Discuss Your Mission"
              subtitle="Share your data, architecture, or modernization challenge. We'll respond as soon as possible."
            />
            <div className="mt-10 space-y-4 text-muted">
              <p className="text-sm font-medium uppercase tracking-wider text-foreground">
                Email
              </p>
              <a
                href={`mailto:${company.email}`}
                className="text-lg text-accent-light transition-colors hover:text-foreground"
              >
                {company.email}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border/80 bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
