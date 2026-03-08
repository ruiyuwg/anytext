## Logs and errors

On failure, `Bun.build` returns a rejected promise with an `AggregateError`. This can be logged to the console for pretty printing of the error list, or programmatically read with a try/catch block.

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
try {
  const result = await Bun.build({
    entrypoints: ["./index.tsx"],
    outdir: "./out",
  });
} catch (e) {
  // TypeScript does not allow annotations on the catch clause
  const error = e as AggregateError;
  console.error("Build Failed");

  // Example: Using the built-in formatter
  console.error(error);

  // Example: Serializing the failure as a JSON string.
  console.error(JSON.stringify(error, null, 2));
}
```

Most of the time, an explicit try/catch is not needed, as Bun will neatly print uncaught exceptions. It is enough to just use a top-level await on the `Bun.build` call.

Each item in `error.errors` is an instance of `BuildMessage` or `ResolveMessage` (subclasses of `Error`), containing detailed information for each error.

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
class BuildMessage {
  name: string;
  position?: Position;
  message: string;
  level: "error" | "warning" | "info" | "debug" | "verbose";
}

class ResolveMessage extends BuildMessage {
  code: string;
  referrer: string;
  specifier: string;
  importKind: ImportKind;
}
```

On build success, the returned object contains a `logs` property, which contains bundler warnings and info messages.

```ts title="build.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await Bun.build({
  entrypoints: ["./index.tsx"],
  outdir: "./out",
});

if (result.logs.length > 0) {
  console.warn("Build succeeded with warnings:");
  for (const message of result.logs) {
    // Bun will pretty print the message object
    console.warn(message);
  }
}
```
