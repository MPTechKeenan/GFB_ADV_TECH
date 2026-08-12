import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy | GFB Federal Solutions",
  description: "Privacy policy for GFB Federal Solutions.",
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-muted leading-relaxed">
          <p>
            {company.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy. This page describes how information submitted
            through this website may be collected and used.
          </p>
          <p>
            When you contact us through the website form or by email, we may
            collect information you provide such as your name, organization,
            email address, phone number, and message content. We use this
            information solely to respond to your inquiry and communicate about
            potential services.
          </p>
          <p>
            We do not sell personal information. We take reasonable measures to
            protect information submitted through this site, but no internet
            transmission is completely secure.
          </p>
          <p>
            For questions about this policy, contact us at{" "}
            <a
              href={`mailto:${company.email}`}
              className="text-accent-light hover:text-foreground"
            >
              {company.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
