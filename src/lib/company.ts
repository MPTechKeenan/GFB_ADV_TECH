/**
 * Single source of truth for company and contracting details.
 * Update values here as official registration information becomes available.
 */
export const company = {
  legalName: "GFB Federal Solutions",
  shortName: "GFB Federal Solutions",
  tagline: "Federal Technology | Data | Architecture | AI",
  email: "info@gfbfederalsolutions.com",
  positioning:
    "Enterprise data architecture, data engineering, governance, data quality, analytics, and AI solutions for complex federal and defense data environments.",
  contracting: {
    legalBusinessName: "GFB Federal Solutions",
    uei: "Pending",
    cageCode: "Pending",
    samStatus: "Registration In Progress",
    naicsCodes: "Coming Soon",
    businessClassification: "Coming Soon",
  },
  /** Set to a public path (e.g. "/gfb-capability-statement.pdf") once the PDF is available. */
  capabilityStatementUrl: null as string | null,
};
