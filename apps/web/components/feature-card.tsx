export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-6 transition-colors hover:border-foreground/20">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-muted">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
