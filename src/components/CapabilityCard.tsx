interface CapabilityCardProps {
  title: string;
  summary: string;
}

export default function CapabilityCard({
  title,
  summary,
}: CapabilityCardProps) {
  return (
    <article className="rounded-lg border border-border/80 bg-surface p-6">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{summary}</p>
    </article>
  );
}
