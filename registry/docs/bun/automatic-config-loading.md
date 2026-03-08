## Automatic config loading

Standalone executables can automatically load configuration files from the directory where they are run. By default:

- **`tsconfig.json`** and **`package.json`** loading is **disabled** — these are typically only needed at development time, and the bundler already uses them when compiling
- **`.env`** and **`bunfig.toml`** loading is **enabled** — these often contain runtime configuration that may vary per deployment

  In a future version of Bun, `.env` and `bunfig.toml` may also be disabled by default for more deterministic behavior.

### Enabling config loading at runtime

If your executable needs to read `tsconfig.json` or `package.json` at runtime, you can opt in with the new CLI flags:

```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
# Enable runtime loading of tsconfig.json
bun build --compile --compile-autoload-tsconfig ./app.ts --outfile myapp

# Enable runtime loading of package.json
bun build --compile --compile-autoload-package-json ./app.ts --outfile myapp

# Enable both
bun build --compile --compile-autoload-tsconfig --compile-autoload-package-json ./app.ts --outfile myapp
```

### Disabling config loading at runtime

To disable `.env` or `bunfig.toml` loading for deterministic execution:

````
```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
# Disable .env loading
bun build --compile --no-compile-autoload-dotenv ./app.ts --outfile myapp

# Disable bunfig.toml loading
bun build --compile --no-compile-autoload-bunfig ./app.ts --outfile myapp

# Disable all config loading
bun build --compile --no-compile-autoload-dotenv --no-compile-autoload-bunfig ./app.ts --outfile myapp
```



```ts build.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await Bun.build({
  entrypoints: ["./app.ts"],
  compile: {
    // tsconfig.json and package.json are disabled by default
    autoloadTsconfig: true, // Enable tsconfig.json loading
    autoloadPackageJson: true, // Enable package.json loading

    // .env and bunfig.toml are enabled by default
    autoloadDotenv: false, // Disable .env loading
    autoloadBunfig: false, // Disable bunfig.toml loading
    outfile: "./myapp",
  },
});
```
````

***

## Act as the Bun CLI

New in Bun v1.2.16

You can run a standalone executable as if it were the `bun` CLI itself by setting the `BUN_BE_BUN=1` environment variable. When this variable is set, the executable will ignore its bundled entrypoint and instead expose all the features of Bun's CLI.

For example, consider an executable compiled from a simple script:

```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
echo "console.log(\"you shouldn't see this\");" > such-bun.js
bun build --compile ./such-bun.js
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
[3ms] bundle 1 modules
[89ms] compile such-bun
```

Normally, running `./such-bun` with arguments would execute the script.

```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
# Executable runs its own entrypoint by default
./such-bun install
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
you shouldn't see this
```

However, with the `BUN_BE_BUN=1` environment variable, it acts just like the `bun` binary:

```bash icon="terminal" terminal theme={"theme":{"light":"github-light","dark":"dracula"}}
# With the env var, the executable acts like the `bun` CLI
BUN_BE_BUN=1 ./such-bun install
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
bun install v1.2.16-canary.1 (1d1db811)
Checked 63 installs across 64 packages (no changes) [5.00ms]
```

This is useful for building CLI tools on top of Bun that may need to install packages, bundle dependencies, run different or local files and more without needing to download a separate binary or install bun.

***
