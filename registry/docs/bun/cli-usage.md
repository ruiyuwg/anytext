## CLI Usage

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build <entry points>
```

### General Configuration

Set NODE\_ENV=production and enable minification

Use a bytecode cache when compiling

Intended execution environment for the bundle. One of browser, bun, or node

Pass custom resolution conditions

Inline environment variables into the bundle as process.env.$. To inline variables matching a
prefix, use a glob like FOO\_PUBLIC\_\*

### Output & File Handling

Output directory (used when building multiple entry points)

Write output to a specific file

Generate source maps. One of linked, inline, external, or none

Add a banner to the output (e.g. "use client" for React Server Components)

Add a footer to the output (e.g. // built with bun!)

Module format of the output bundle. One of esm, cjs, or iife. Defaults to
cjs when --bytecode is used.

### File Naming

Customize entry point filenames

Customize chunk filenames

Customize asset filenames

### Bundling Options

Root directory used when bundling multiple entry points

Enable code splitting for shared modules

Prefix to be added to import paths in bundled code

Exclude modules from the bundle (supports wildcards). Alias: -e

How to treat dependencies: external or bundle

Transpile only — do not bundle

Chunk CSS files together to reduce duplication (only when multiple entry points import CSS)

### Minification & Optimization

Re-emit Dead Code Elimination annotations. Disabled when --minify-whitespace is used

Enable all minification options

Minify syntax and inline constants

Minify whitespace

Minify variable and function identifiers

Preserve original function and class names when minifying

### Development Features

Rebuild automatically when files change

Don’t clear the terminal when rebuilding with --watch

Enable React Fast Refresh transform (for development testing)

### Standalone Executables

Generate a standalone Bun executable containing the bundle. Implies --production

Prepend arguments to the standalone executable’s execArgv

### Windows Executable Details

Prevent a console window from opening when running a compiled Windows executable

Set an icon for the Windows executable

Set the Windows executable product name

Set the Windows executable company name

Set the Windows executable version (e.g. 1.2.3.4)

Set the Windows executable description

Set the Windows executable copyright notice

### Experimental & App Building

(EXPERIMENTAL) Build a web app for production using Bun Bake

(EXPERIMENTAL) Enable React Server Components

When --app is set, dump all server files to disk even for static builds

When --app is set, disable all minification
