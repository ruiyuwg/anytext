## Embed assets & files

Standalone executables support embedding files directly into the binary. This lets you ship a single executable that contains images, JSON configs, templates, or any other assets your application needs.

### How it works

Use the `with { type: "file" }` [import attribute](https://github.com/tc39/proposal-import-attributes) to embed a file:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import icon from "./icon.png" with { type: "file" };

console.log(icon);
// During development: "./icon.png"
// After compilation: "$bunfs/icon-a1b2c3d4.png" (internal path)
```

The import returns a **path string** that points to the embedded file. At build time, Bun:

1. Reads the file contents
2. Embeds the data into the executable
3. Replaces the import with an internal path (prefixed with `$bunfs/`)

You can then read this embedded file using `Bun.file()` or Node.js `fs` APIs.

### Reading embedded files with Bun.file()

`Bun.file()` is the recommended way to read embedded files:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import icon from "./icon.png" with { type: "file" };
import { file } from "bun";

// Get file contents as different types
const bytes = await file(icon).arrayBuffer(); // ArrayBuffer
const text = await file(icon).text(); // string (for text files)
const blob = file(icon); // Blob

// Stream the file in a response
export default {
  fetch(req) {
    return new Response(file(icon), {
      headers: { "Content-Type": "image/png" },
    });
  },
};
```

### Reading embedded files with Node.js fs

Embedded files work seamlessly with Node.js file system APIs:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import icon from "./icon.png" with { type: "file" };
import config from "./config.json" with { type: "file" };
import { readFileSync, promises as fs } from "node:fs";

// Synchronous read
const iconBuffer = readFileSync(icon);

// Async read
const configData = await fs.readFile(config, "utf-8");
const parsed = JSON.parse(configData);

// Check file stats
const stats = await fs.stat(icon);
console.log(`Icon size: ${stats.size} bytes`);
```

### Practical examples

#### Embedding a JSON config file

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import configPath from "./default-config.json" with { type: "file" };
import { file } from "bun";

// Load the embedded default configuration
const defaultConfig = await file(configPath).json();

// Merge with user config if it exists
const userConfig = await file("./user-config.json")
  .json()
  .catch(() => ({}));
const config = { ...defaultConfig, ...userConfig };
```

#### Serving static assets in an HTTP server

Use `static` routes in `Bun.serve()` for efficient static file serving:

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import favicon from "./favicon.ico" with { type: "file" };
import logo from "./logo.png" with { type: "file" };
import styles from "./styles.css" with { type: "file" };
import { file, serve } from "bun";

serve({
  static: {
    "/favicon.ico": file(favicon),
    "/logo.png": file(logo),
    "/styles.css": file(styles),
  },
  fetch(req) {
    return new Response("Not found", { status: 404 });
  },
});
```

Bun automatically handles Content-Type headers and caching for static routes.

#### Embedding templates

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import templatePath from "./email-template.html" with { type: "file" };
import { file } from "bun";

async function sendWelcomeEmail(user: { name: string; email: string }) {
  const template = await file(templatePath).text();
  const html = template.replace("{{name}}", user.name).replace("{{email}}", user.email);

  // Send email with the rendered template...
}
```

#### Embedding binary files

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import wasmPath from "./processor.wasm" with { type: "file" };
import fontPath from "./font.ttf" with { type: "file" };
import { file } from "bun";

// Load a WebAssembly module
const wasmBytes = await file(wasmPath).arrayBuffer();
const wasmModule = await WebAssembly.instantiate(wasmBytes);

// Read binary font data
const fontData = await file(fontPath).bytes();
```

### Embed SQLite databases

If your application wants to embed a SQLite database into the compiled executable, set `type: "sqlite"` in the import attribute and the `embed` attribute to `"true"`.

The database file must already exist on disk. Then, import it in your code:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import myEmbeddedDb from "./my.db" with { type: "sqlite", embed: "true" };

console.log(myEmbeddedDb.query("select * from users LIMIT 1").get());
```

Finally, compile it into a standalone executable:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile ./index.ts --outfile mycli
```

The database file must exist on disk when you run `bun build --compile`. The `embed: "true"` attribute tells the
bundler to include the database contents inside the compiled executable. When running normally with `bun run`, the
database file is loaded from disk just like a regular SQLite import.

In the compiled executable, the embedded database is read-write, but all changes are lost when the executable exits (since it's stored in memory).

### Embed N-API Addons

You can embed `.node` files into executables.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const addon = require("./addon.node");

console.log(addon.hello());
```

Unfortunately, if you're using `@mapbox/node-pre-gyp` or other similar tools, you'll need to make sure the `.node` file is directly required or it won't bundle correctly.

### Embed directories

To embed a directory with `bun build --compile`, include file patterns in your build:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile ./index.ts ./public/**/*.png
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Glob } from "bun";

// Expand glob pattern to file list
const glob = new Glob("./public/**/*.png");
const pngFiles = Array.from(glob.scanSync("."));

await Bun.build({
  entrypoints: ["./index.ts", ...pngFiles],
  compile: {
    outfile: "./myapp",
  },
});
```
````

Then, you can reference the files in your code:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import icon from "./public/assets/icon.png" with { type: "file" };
import { file } from "bun";

export default {
  fetch(req) {
    // Embedded files can be streamed from Response objects
    return new Response(file(icon));
  },
};
```

This is honestly a workaround, and we expect to improve this in the future with a more direct API.

### Listing embedded files

`Bun.embeddedFiles` gives you access to all embedded files as `Blob` objects:

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import "./icon.png" with { type: "file" };
import "./data.json" with { type: "file" };
import "./template.html" with { type: "file" };
import { embeddedFiles } from "bun";

// List all embedded files
for (const blob of embeddedFiles) {
  console.log(`${blob.name} - ${blob.size} bytes`);
}
// Output:
//   icon-a1b2c3d4.png - 4096 bytes
//   data-e5f6g7h8.json - 256 bytes
//   template-i9j0k1l2.html - 1024 bytes
```

Each item in `Bun.embeddedFiles` is a `Blob` with a `name` property:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
embeddedFiles: ReadonlyArray<Blob>;
```

This is useful for dynamically serving all embedded assets using `static` routes:

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import "./public/favicon.ico" with { type: "file" };
import "./public/logo.png" with { type: "file" };
import "./public/styles.css" with { type: "file" };
import { embeddedFiles, serve } from "bun";

// Build static routes from all embedded files
const staticRoutes: Record<string, Blob> = {};
for (const blob of embeddedFiles) {
  // Remove hash from filename: "icon-a1b2c3d4.png" -> "icon.png"
  const name = blob.name.replace(/-[a-f0-9]+\./, ".");
  staticRoutes[`/${name}`] = blob;
}

serve({
  static: staticRoutes,
  fetch(req) {
    return new Response("Not found", { status: 404 });
  },
});
```

`Bun.embeddedFiles` excludes bundled source code (`.ts`, `.js`, etc.) to help protect your application's source.

#### Content hash

By default, embedded files have a content hash appended to their name. This is useful for situations where you want to serve the file from a URL or CDN and have fewer cache invalidation issues. But sometimes, this is unexpected and you might want the original name instead:

To disable the content hash, configure asset naming:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --asset-naming="[name].[ext]" ./index.ts
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    outfile: "./myapp",
  },
  naming: {
    asset: "[name].[ext]",
  },
});
```
````

***

## Minification

To trim down the size of the executable, enable minification:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --minify ./index.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    outfile: "./myapp",
  },
  minify: true, // Enable all minification
});

// Or granular control:
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    outfile: "./myapp",
  },
  minify: {
    whitespace: true,
    syntax: true,
    identifiers: true,
  },
});
```
````

This uses Bun's minifier to reduce the code size. Overall though, Bun's binary is still way too big and we need to make it smaller.

***

## Windows-specific flags

When compiling a standalone executable on Windows, there are platform-specific options to customize metadata on the generated `.exe` file:

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Custom icon
bun build --compile --windows-icon=path/to/icon.ico ./app.ts --outfile myapp

# Hide console window (for GUI apps)
bun build --compile --windows-hide-console ./app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.ts"],
  compile: {
    outfile: "./myapp",
    windows: {
      icon: "./path/to/icon.ico",
      hideConsole: true,
      // Additional Windows metadata:
      title: "My Application",
      publisher: "My Company",
      version: "1.0.0",
      description: "A standalone Windows application",
      copyright: "Copyright 2024",
    },
  },
});
```
````

Available Windows options:

- `icon` - Path to `.ico` file for the executable icon
- `hideConsole` - Disable the background terminal (for GUI apps)
- `title` - Application title in file properties
- `publisher` - Publisher name in file properties
- `version` - Version string in file properties
- `description` - Description in file properties
- `copyright` - Copyright notice in file properties

These flags currently cannot be used when cross-compiling because they depend on Windows APIs.

***

## Code signing on macOS

To codesign a standalone executable on macOS (which fixes Gatekeeper warnings), use the `codesign` command.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
codesign --deep --force -vvvv --sign "XXXXXXXXXX" ./myapp
```

We recommend including an `entitlements.plist` file with JIT permissions.

```xml icon="xml" title="info.plist" theme={"theme":{"light":"github-light","dark":"dracula"}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>com.apple.security.cs.allow-jit</key>
    <true/>
    <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
    <true/>
    <key>com.apple.security.cs.disable-executable-page-protection</key>
    <true/>
    <key>com.apple.security.cs.allow-dyld-environment-variables</key>
    <true/>
    <key>com.apple.security.cs.disable-library-validation</key>
    <true/>
</dict>
</plist>
```

To codesign with JIT support, pass the `--entitlements` flag to `codesign`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
codesign --deep --force -vvvv --sign "XXXXXXXXXX" --entitlements entitlements.plist ./myapp
```

After codesigning, verify the executable:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
codesign -vvv --verify ./myapp
./myapp: valid on disk
./myapp: satisfies its Designated Requirement
```

Codesign support requires Bun v1.2.4 or newer.

***

## Code splitting

Standalone executables support code splitting. Use `--compile` with `--splitting` to create an executable that loads code-split chunks at runtime.

````
```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --splitting ./src/entry.ts --outdir ./build
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./src/entry.ts"],
  compile: true,
  splitting: true,
  outdir: "./build",
});
```
````

```ts src/entry.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
console.log("Entrypoint loaded");
const lazy = await import("./lazy.ts");
lazy.hello();
```

```ts src/lazy.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
export function hello() {
  console.log("Lazy module loaded");
}
```

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
./build/entry
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Entrypoint loaded
Lazy module loaded
```

***

## Using plugins

Plugins work with standalone executables, allowing you to transform files during the build process:

```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import type { BunPlugin } from "bun";

const envPlugin: BunPlugin = {
  name: "env-loader",
  setup(build) {
    build.onLoad({ filter: /\.env\.json$/ }, async args => {
      // Transform .env.json files into validated config objects
      const env = await Bun.file(args.path).json();

      return {
        contents: `export default ${JSON.stringify(env)};`,
        loader: "js",
      };
    });
  },
};

await Bun.build({
  entrypoints: ["./cli.ts"],
  compile: {
    outfile: "./mycli",
  },
  plugins: [envPlugin],
});
```

Example use case - embedding environment config at build time:

```ts cli.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import config from "./config.env.json";

console.log(`Running in ${config.environment} mode`);
console.log(`API endpoint: ${config.apiUrl}`);
```

Plugins can perform any transformation: compile YAML/TOML configs, inline SQL queries, generate type-safe API clients, or preprocess templates. Refer to the [plugin documentation](/bundler/plugins) for more details.

***

## Unsupported CLI arguments

Currently, the `--compile` flag can only accept a single entrypoint at a time and does not support the following flags:

- `--outdir` — use `outfile` instead (except when using with `--splitting`).
- `--public-path`
- `--target=node`
- `--target=browser` (without HTML entrypoints — see [Standalone HTML](/bundler/standalone-html) for `--compile --target=browser` with `.html` files)
- `--no-bundle` - we always bundle everything into the executable.

***
