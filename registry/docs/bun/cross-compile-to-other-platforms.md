## Cross-compile to other platforms

The `--target` flag lets you compile your standalone executable for a different operating system, architecture, or version of Bun than the machine you're running `bun build` on.

To build for Linux x64 (most servers):

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --target=bun-linux-x64 ./index.ts --outfile myapp

# To support CPUs from before 2013, use the baseline version (nehalem)
bun build --compile --target=bun-linux-x64-baseline ./index.ts --outfile myapp

# To explicitly only support CPUs from 2013 and later, use the modern version (haswell)
# modern is faster, but baseline is more compatible.
bun build --compile --target=bun-linux-x64-modern ./index.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Standard Linux x64
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    target: "bun-linux-x64",
    outfile: "./myapp",
  },
});

// Baseline (pre-2013 CPUs)
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    target: "bun-linux-x64-baseline",
    outfile: "./myapp",
  },
});

// Modern (2013+ CPUs, faster)
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    target: "bun-linux-x64-modern",
    outfile: "./myapp",
  },
});
```
````

To build for Linux ARM64 (e.g. Graviton or Raspberry Pi):

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
# Note: the default architecture is x64 if no architecture is specified.
bun build --compile --target=bun-linux-arm64 ./index.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./index.ts"],
  compile: {
    target: "bun-linux-arm64",
    outfile: "./myapp",
  },
});
```
````

To build for Windows x64:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --target=bun-windows-x64 ./path/to/my/app.ts --outfile myapp

# To support CPUs from before 2013, use the baseline version (nehalem)
bun build --compile --target=bun-windows-x64-baseline ./path/to/my/app.ts --outfile myapp

# To explicitly only support CPUs from 2013 and later, use the modern version (haswell)
bun build --compile --target=bun-windows-x64-modern ./path/to/my/app.ts --outfile myapp

# note: if no .exe extension is provided, Bun will automatically add it for Windows executables
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// Standard Windows x64
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-windows-x64",
    outfile: "./myapp", // .exe added automatically
  },
});

// Baseline or modern variants
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-windows-x64-baseline",
    outfile: "./myapp",
  },
});
```
````

To build for Windows arm64:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --target=bun-windows-arm64 ./path/to/my/app.ts --outfile myapp

# note: if no .exe extension is provided, Bun will automatically add it for Windows executables
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-windows-arm64",
    outfile: "./myapp", // .exe added automatically
  },
});
```
````

To build for macOS arm64:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --target=bun-darwin-arm64 ./path/to/my/app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-darwin-arm64",
    outfile: "./myapp",
  },
});
```
````

To build for macOS x64:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --target=bun-darwin-x64 ./path/to/my/app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    target: "bun-darwin-x64",
    outfile: "./myapp",
  },
});
```
````

### Supported targets

The order of the `--target` flag does not matter, as long as they're delimited by a `-`.

| --target             | Operating System | Architecture | Modern | Baseline | Libc  |
| -------------------- | ---------------- | ------------ | ------ | -------- | ----- |
| bun-linux-x64        | Linux            | x64          | ✅      | ✅        | glibc |
| bun-linux-arm64      | Linux            | arm64        | ✅      | N/A      | glibc |
| bun-windows-x64      | Windows          | x64          | ✅      | ✅        | -     |
| bun-windows-arm64    | Windows          | arm64        | ✅      | N/A      | -     |
| bun-darwin-x64       | macOS            | x64          | ✅      | ✅        | -     |
| bun-darwin-arm64     | macOS            | arm64        | ✅      | N/A      | -     |
| bun-linux-x64-musl   | Linux            | x64          | ✅      | ✅        | musl  |
| bun-linux-arm64-musl | Linux            | arm64        | ✅      | N/A      | musl  |

On x64 platforms, Bun uses SIMD optimizations which require a modern CPU supporting AVX2 instructions. The `-baseline`
build of Bun is for older CPUs that don't support these optimizations. Normally, when you install Bun we automatically
detect which version to use but this can be harder to do when cross-compiling since you might not know the target CPU.
You usually don't need to worry about it on Darwin x64, but it is relevant for Windows x64 and Linux x64. If you or
your users see `"Illegal instruction"` errors, you might need to use the baseline version.

***

## Build-time constants

Use the `--define` flag to inject build-time constants into your executable, such as version numbers, build timestamps, or configuration values:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --define BUILD_VERSION='"1.2.3"' --define BUILD_TIME='"2024-01-15T10:30:00Z"' src/cli.ts --outfile mycli
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./src/cli.ts"],
  compile: {
    outfile: "./mycli",
  },
  define: {
    BUILD_VERSION: JSON.stringify("1.2.3"),
    BUILD_TIME: JSON.stringify("2024-01-15T10:30:00Z"),
  },
});
```
````

These constants are embedded directly into your compiled binary at build time, providing zero runtime overhead and enabling dead code elimination optimizations.

For comprehensive examples and advanced patterns, see the [Build-time constants
guide](/guides/runtime/build-time-constants).

***
