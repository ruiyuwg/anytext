## Deploying to production

Compiled executables reduce memory usage and improve Bun's start time.

Normally, Bun reads and transpiles JavaScript and TypeScript files on `import` and `require`. This is part of what makes so much of Bun "just work", but it's not free. It costs time and memory to read files from disk, resolve file paths, parse, transpile, and print source code.

With compiled executables, you can move that cost from runtime to build-time.

When deploying to production, we recommend the following:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --minify --sourcemap ./path/to/my/app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    outfile: "./myapp",
  },
  minify: true,
  sourcemap: "linked",
});
```
````

### Bytecode compilation

To improve startup time, enable bytecode compilation:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --minify --sourcemap --bytecode ./path/to/my/app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./path/to/my/app.ts"],
  compile: {
    outfile: "./myapp",
  },
  minify: true,
  sourcemap: "linked",
  bytecode: true,
});
```
````

Using bytecode compilation, `tsc` starts 2x faster:

![Bytecode performance comparison](https://github.com/user-attachments/assets/dc8913db-01d2-48f8-a8ef-ac4e984f9763)

Bytecode compilation moves parsing overhead for large input files from runtime to bundle time. Your app starts faster, in exchange for making the `bun build` command a little slower. It doesn't obscure source code.

Bytecode compilation supports both `cjs` and `esm` formats when used with `--compile`.

### What do these flags do?

The `--minify` argument optimizes the size of the transpiled output code. If you have a large application, this can save megabytes of space. For smaller applications, it might still improve start time a little.

The `--sourcemap` argument embeds a sourcemap compressed with zstd, so that errors & stacktraces point to their original locations instead of the transpiled location. Bun will automatically decompress & resolve the sourcemap when an error occurs.

The `--bytecode` argument enables bytecode compilation. Every time you run JavaScript code in Bun, JavaScriptCore (the engine) will compile your source code into bytecode. We can move this parsing work from runtime to bundle time, saving you startup time.

***

## Embedding runtime arguments

**`--compile-exec-argv="args"`** - Embed runtime arguments that are available via `process.execArgv`:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
bun build --compile --compile-exec-argv="--smol --user-agent=MyBot" ./app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.ts"],
  compile: {
    execArgv: ["--smol", "--user-agent=MyBot"],
    outfile: "./myapp",
  },
});
```
````

```ts app.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// In the compiled app
console.log(process.execArgv); // ["--smol", "--user-agent=MyBot"]
```

### Runtime arguments via `BUN_OPTIONS`

The `BUN_OPTIONS` environment variable is applied to standalone executables, allowing you to pass runtime flags without recompiling:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Enable CPU profiling on a compiled executable
BUN_OPTIONS="--cpu-prof" ./myapp

# Enable heap profiling with markdown output
BUN_OPTIONS="--heap-prof-md" ./myapp

# Combine multiple flags
BUN_OPTIONS="--smol --cpu-prof-md" ./myapp
```

This is useful for debugging or profiling production executables without rebuilding them.

***
