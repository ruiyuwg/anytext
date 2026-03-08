"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CodeBlock({
  children,
  highlighted,
  label,
  variant = "default",
}: {
  children: string;
  highlighted?: React.ReactNode;
  label?: string;
  variant?: "default" | "card";
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const isCard = variant === "card";

  return (
    <div className={`group relative ${isCard ? "rounded-lg border bg-muted/50" : ""}`}>
      {label && (
        <div className="border-b px-6 py-2 text-xs text-muted-foreground font-mono">
          {label}
        </div>
      )}
      <div className="relative flex items-center">
        <pre className={`overflow-x-auto text-sm font-mono text-foreground ${isCard ? "px-4 py-3" : "px-6 py-4"}`}>
          <code>{highlighted ?? children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={`absolute right-4 rounded-md p-1.5 text-muted-foreground transition-opacity hover:text-foreground ${isCard ? "opacity-0 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
