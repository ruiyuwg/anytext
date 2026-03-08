# CLI Usage

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run <file or script>
```

### General Execution Options

Don't print the script command

Exit without an error if the entrypoint does not exist

Evaluate argument as a script. Alias: -e

Evaluate argument as a script and print the result. Alias: -p

Display this menu and exit. Alias: -h

### Workspace Management

Number of lines of script output shown when using --filter (default: 10). Set to 0 to show all lines

Run a script in all workspace packages matching the pattern. Alias: -F

Run a script in all workspace packages (from the workspaces field in package.json)

Run multiple scripts or workspace scripts concurrently with prefixed output

Run multiple scripts or workspace scripts one after another with prefixed output

When using --parallel or --sequential, continue running other scripts when one fails

### Runtime & Process Control

Force a script or package to use Bun's runtime instead of Node.js (via symlinking node). Alias: -b

Control the shell used for package.json scripts. Supports either bun or system

Use less memory, but run garbage collection more often

Expose gc() on the global object. Has no effect on Bun.gc()

Suppress all reporting of the custom deprecation

Determine whether or not deprecation warnings result in errors

Set the process title

Boolean to force Buffer.allocUnsafe(size) to be zero-filled

Throw an error if process.dlopen is called, and disable export condition node-addons

One of strict, throw, warn, none, or
warn-with-error-code

Set the default depth for console.log object inspection (default: 2)

### Development Workflow

Automatically restart the process on file change

Enable auto reload in the Bun runtime, test runner, or bundler

Disable clearing the terminal screen on reload when --hot or --watch is enabled

### Debugging

Activate Bun's debugger

Activate Bun's debugger, wait for a connection before executing

Activate Bun's debugger, set breakpoint on first line of code and wait

### Dependency & Module Resolution

Import a module before other modules are loaded. Alias: -r

Alias of --preload, for Node.js compatibility

Alias of --preload, for Node.js compatibility

Disable auto install in the Bun runtime

Configure auto-install behavior. One of auto (default, auto-installs when no node\_modules),
fallback (missing packages only), force (always)

Auto-install dependencies during execution. Equivalent to --install=fallback

Skip staleness checks for packages in the Bun runtime and resolve from disk

Use the latest matching versions of packages in the Bun runtime, always checking npm

Pass custom conditions to resolve

Main fields to lookup in package.json. Defaults to --target dependent

Preserve symlinks when resolving files

Preserve symlinks when resolving the main entry point

Defaults to: .tsx,.ts,.jsx,.js,.json

### Transpilation & Language Features

Specify custom tsconfig.json. Default $cwd/tsconfig.json

Substitute K:V while parsing, e.g. --define process.env.NODE\_ENV:"development". Values are parsed as
JSON. Alias: -d

Remove function calls, e.g. --drop=console removes all console.\* calls

Parse files with .ext:loader, e.g. --loader .js:jsx. Valid loaders: js,
jsx, ts, tsx, json, toml, text,
file, wasm, napi. Alias: -l

Disable macros from being executed in the bundler, transpiler and runtime

Changes the function called when compiling JSX elements using the classic JSX runtime

Changes the function called when compiling JSX fragments

Declares the module specifier to be used for importing the jsx and jsxs factory functions. Default: react

automatic (default) or classic

Treat JSX elements as having side effects (disable pure annotations)

Ignore tree-shaking annotations such as @**PURE**

### Networking & Security

Set the default port for Bun.serve

Preconnect to a URL while code is loading

Set the maximum size of HTTP headers in bytes. Default is 16KiB

Set the default order of DNS lookup results. Valid orders: verbatim (default), ipv4first,
ipv6first

Use the system's trusted certificate authorities

Use OpenSSL's default CA store

Use bundled CA store

Preconnect to $REDIS\_URL at startup

Preconnect to PostgreSQL at startup

Set the default User-Agent header for HTTP requests

### Global Configuration & Context

Load environment variables from the specified file(s)

Absolute path to resolve files & entry points from. This just changes the process' cwd

Specify path to Bun config file. Default $cwd/bunfig.toml. Alias: -c

## Examples

Run a JavaScript or TypeScript file:

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run ./index.js
bun run ./index.tsx
```

Run a package.json script:

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run dev
bun run lint
```
