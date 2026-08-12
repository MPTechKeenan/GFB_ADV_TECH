import CapabilityStatementButton from "./CapabilityStatementButton";
import { company } from "@/lib/company";

export default function ContractingInformation() {
  const { contracting } = company;

  const fields = [
    { label: "Legal Business Name", value: contracting.legalBusinessName },
    { label: "UEI", value: contracting.uei },
    { label: "CAGE Code", value: contracting.cageCode },
    { label: "SAM.gov Status", value: contracting.samStatus },
    { label: "NAICS Codes", value: contracting.naicsCodes },
    {
      label: "Business Classification",
      value: contracting.businessClassification,
    },
  ];

  return (
    <section
      id="contracting-information"
      className="border-t border-border/40 bg-surface section-padding"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Contracting Information
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Registration and classification details for federal contracting
          review. Values are updated as official registrations are completed.
        </p>

        <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <div
              key={field.label}
              className="border-l-2 border-border pl-4 sm:pl-5"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                {field.label}
              </dt>
              <dd className="mt-1.5 text-foreground">{field.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <CapabilityStatementButton />
        </div>
      </div>
    </section>
  );
}
