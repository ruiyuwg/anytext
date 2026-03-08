import { Copy } from "lucide-react";

export function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <div className="group relative rounded-lg border bg-card">
      {label && (
        <div className="border-b px-4 py-2 text-xs text-muted-foreground font-mono">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm font-mono text-foreground">
        <code>{children}</code>
      </pre>
      <button
        className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
        aria-label="Copy to clipboard"
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}
