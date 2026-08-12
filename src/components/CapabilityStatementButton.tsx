import { company } from "@/lib/company";

export default function CapabilityStatementButton() {
  const href = company.capabilityStatementUrl;

  if (href) {
    return (
      <a
        href={href}
        download
        className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
      >
        Download Capability Statement
      </a>
    );
  }

  return (
    <div>
      <button
        type="button"
        disabled
        aria-describedby="capability-statement-note"
        className="inline-flex cursor-not-allowed items-center rounded-md border border-border bg-surface-light px-6 py-3 text-sm font-semibold text-muted"
      >
        Download Capability Statement
      </button>
      <p id="capability-statement-note" className="mt-2 text-xs text-muted">
        Capability statement coming soon.
      </p>
    </div>
  );
}
