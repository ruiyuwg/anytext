"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative">
      {label && (
        <div className="border-b px-6 py-2 text-xs text-muted-foreground font-mono">
          {label}
        </div>
      )}
      <div className="relative flex items-center">
        <pre className="overflow-x-auto px-6 py-4 text-sm font-mono text-foreground">
          <code>{children}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute right-4 rounded-md p-1.5 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
