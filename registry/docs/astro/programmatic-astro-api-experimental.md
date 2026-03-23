# Programmatic Astro API (experimental)

If you need more control when running Astro, the `"astro"` package exports APIs to programmatically run the CLI commands. There are also two `astro:config` helpers that can programmatically [validate](#validateconfig) and [merge](#mergeconfig) configurations.

These APIs are experimental and their API signature may change. Any updates will be mentioned in the [Astro changelog](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md) and the information below will always show the current, up-to-date information.

## Commands

[Section titled “Commands”](#commands)

The following [CLI commands](/en/reference/cli-reference/) can be run programmatically.

### `dev()`

[Section titled “dev()”](#dev)

**Type:** `(inlineConfig: AstroInlineConfig) => Promise<DevServer>`

Similar to [`astro dev`](/en/reference/cli-reference/#astro-dev), it runs Astro’s development server.

```js
import { dev } from "astro";


const devServer = await dev({
  root: "./my-project",
});


// Stop the server if needed
await devServer.stop();
```

#### `DevServer`

[Section titled “DevServer”](#devserver)

```ts
export interface DevServer {
  address: AddressInfo;
  handle: (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => void;
  watcher: vite.FSWatcher;
  stop(): Promise<void>;
}
```

##### `DevServer.address`

[Section titled “DevServer.address”](#devserveraddress)

**Type:** `AddressInfo`

The address the dev server is listening on.

This property contains the value returned by Node’s [`net.Server#address()` method](https://nodejs.org/api/net.html#serveraddress).

##### `DevServer.handle()`

[Section titled “DevServer.handle()”](#devserverhandle)

**Type:** `(req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => void`

A handle for raw Node HTTP requests. You can call `handle()` with an [`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage) and an [`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse) instead of sending a request through the network.

##### `DevServer.watcher`

[Section titled “DevServer.watcher”](#devserverwatcher)

**Type:** `vite.FSWatcher`

The [Chokidar file watcher](https://github.com/paulmillr/chokidar#getting-started) as exposed by [Vite’s development server](https://vite.dev/guide/api-javascript#vitedevserver).

##### `DevServer.stop()`

[Section titled “DevServer.stop()”](#devserverstop)

**Type:** `Promise<void>`

Stops the development server. This closes all idle connections and stops listening for new connections.

Returns a `Promise` that resolves once all pending requests have been fulfilled and all idle connections have been closed.

### `build()`

[Section titled “build()”](#build)

**Type:** `(inlineConfig: AstroInlineConfig, options?: BuildOptions) => Promise<void>`

Similar to [`astro build`](/en/reference/cli-reference/#astro-build), it builds your site for deployment.

```js
import { build } from "astro";


await build({
  root: "./my-project",
});
```

#### `BuildOptions`

[Section titled “BuildOptions”](#buildoptions)

```ts
export interface BuildOptions {
  devOutput?: boolean;
  teardownCompiler?: boolean;
}
```

##### `BuildOptions.devOutput`

[Section titled “BuildOptions.devOutput”](#buildoptionsdevoutput)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.4.0`

Output a development-based build similar to code transformed in `astro dev`. This can be useful to test build-only issues with additional debugging information included.

##### `BuildOptions.teardownCompiler`

[Section titled “BuildOptions.teardownCompiler”](#buildoptionsteardowncompiler)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@5.4.0`

Teardown the compiler WASM instance after build. This can improve performance when building once but may cause a performance hit if building multiple times in a row.

When building multiple projects in the same execution (e.g. during tests), disabling this option can greatly increase performance and reduce peak memory usage at the cost of higher sustained memory usage.

### `preview()`

[Section titled “preview()”](#preview)

**Type:** `(inlineConfig: AstroInlineConfig) => Promise<PreviewServer>`

Similar to [`astro preview`](/en/reference/cli-reference/#astro-preview), it starts a local server to serve your build output.

If no adapter is set in the configuration, the preview server will only serve the built static files. If an adapter is set in the configuration, the preview server is provided by the adapter. Adapters are not required to provide a preview server, so this feature may not be available depending on your adapter of choice.

```js
import { preview } from "astro";


const previewServer = await preview({
  root: "./my-project",
});


// Stop the server if needed
await previewServer.stop();
```

### `sync()`

[Section titled “sync()”](#sync)

**Type:** `(inlineConfig: AstroInlineConfig) => Promise<void>`

Similar to [`astro sync`](/en/reference/cli-reference/#astro-sync), it generates TypeScript types for all Astro modules.

```js
import { sync } from "astro";


await sync({
  root: "./my-project",
});
```

## Utilities

[Section titled “Utilities”](#utilities)

The following utilities can be [imported from `astro/config`](/en/reference/modules/astro-config/#imports-from-astroconfig) and used to manipulate or validate the configuration before passing it to CLI commands.

### `mergeConfig()`

[Section titled “mergeConfig()”](#mergeconfig)

**Type:** `(defaults: AstroConfig, overrides: DeepPartial<AstroConfig>) => AstroConfig`

**Added in:** `astro@5.4.0`

Takes an Astro configuration object and a partial object containing any set of valid Astro configuration options, and returns a valid Astro configuration combining the two values such that:

- Arrays are concatenated (including integrations and remark plugins).
- Objects are merged recursively.
- Vite options are merged using [Vite’s own `mergeConfig()` function](https://vite.dev/guide/api-javascript#mergeconfig) with the default `isRoot` flag.
- Options that can be provided as functions are wrapped into new functions that recursively merge the return values from both configurations with these same rules.
- All other options override the existing config.

```ts
import { mergeConfig } from "astro/config";


mergeConfig(
  {
    output: "static",
    site: "https://example.com",
    integrations: [partytown()],
    server: ({command}) => ({
      port: command === "dev" ? 4321 : 1234,
    }),
    build: {
      client: "./custom-client",
    },
  },
  {
    output: "server",
    base: "/astro",
    integrations: [mdx()],
    server: ({command}) => ({
      host: command === "dev" ? "localhost" : "site.localhost",
    }),
    build: {
      server: "./custom-server",
    },
  }
);


// Result is equivalent to:
{
  output: "server",
  site: "https://example.com",
  base: "/astro",
  integrations: [partytown(), mdx()],
  server: ({command}) => ({
    port: command === "dev" ? 4321 : 1234,
    host: command === "dev" ? "localhost" : "site.localhost",
  }),
  build: {
    client: "./custom-client",
    server: "./custom-server",
  },
}
```

### `validateConfig()`

[Section titled “validateConfig()”](#validateconfig)

**Type:** `(userConfig: any, root: string, cmd: string) => Promise<AstroConfig>`

**Added in:** `astro@5.4.0`

Validates an object as if it were exported from `astro.config.mjs` and imported by Astro. This takes the following arguments:

- The configuration to be validated.
- The [root directory of the project](/en/reference/configuration-reference/#root).
- The [Astro command that is being executed](/en/reference/cli-reference/#astro-commands) (e.g. `build`, `dev`, `sync`)

The returned promise resolves to the validated configuration, filled with all default values appropriate for the given Astro command.

```ts
import { validateConfig } from "astro/config";


const config = await validateConfig({
  integrations: [partytown()],
}, "./my-project", "build");


// defaults are applied
await rm(config.outDir, { recursive: true, force: true });
```

## `astro` types

[Section titled “astro types”](#astro-types)

```ts
import type {
  AstroInlineConfig,
  PreviewServer,
} from "astro";
```

### `AstroInlineConfig`

[Section titled “AstroInlineConfig”](#astroinlineconfig)

The `AstroInlineConfig` type is used by all of the [command APIs](#commands). It extends from the user [Astro config](/en/reference/configuration-reference/) type:

```ts
interface AstroInlineConfig extends AstroUserConfig {
  configFile?: string | false;
  mode?: string;
  logLevel?: "debug" | "info" | "warn" | "error" | "silent";
}
```

#### `AstroInlineConfig.configFile`

[Section titled “AstroInlineConfig.configFile”](#astroinlineconfigconfigfile)

**Type:** `string | false`\
**Default:** `undefined`

A custom path to the Astro config file.

If this value is undefined (default) or unset, Astro will search for an `astro.config.(js,mjs,ts,mts)` file relative to the `root` and load the config file if found.

If a relative path is set, it will resolve based on the `root` option.

Set to `false` to disable loading any config files.

The inline config passed in this object will take highest priority when merging with the loaded user config.

#### `AstroInlineConfig.mode`

[Section titled “AstroInlineConfig.mode”](#astroinlineconfigmode)

**Type:** `string`\
**Default:** `"development"` when running `astro dev`, `"production"` when running `astro build`

**Added in:** `astro@5.0.0`

The mode used when developing or building your site (e.g. `"production"`, `"testing"`).

This value is passed to Vite using [the `--mode` flag](/en/reference/cli-reference/#--mode-string) when the `astro build` or `astro dev` commands are run to determine the value of `import.meta.env.MODE`. This also determines which `.env` files are loaded, and therefore the values of `astro:env`. See the [environment variables page](/en/guides/environment-variables/) for more details.

To output a development-based build, you can run `astro build` with the [`--devOutput` flag](/en/reference/cli-reference/#--devoutput).

#### `AstroInlineConfig.logLevel`

[Section titled “AstroInlineConfig.logLevel”](#astroinlineconfigloglevel)

**Type:** `"debug" | "info" | "warn" | "error" | "silent"`\
**Default:** `"info"`

The logging level to filter messages logged by Astro.

- `"debug"`: Log everything, including noisy debugging diagnostics.
- `"info"`: Log informational messages, warnings, and errors.
- `"warn"`: Log warnings and errors.
- `"error"`: Log errors only.
- `"silent"`: No logging.

### `PreviewServer`

[Section titled “PreviewServer”](#previewserver)

```ts
export interface PreviewServer {
  host?: string;
  port: number;
  closed(): Promise<void>;
  stop(): Promise<void>;
}
```

#### `PreviewServer.host`

[Section titled “PreviewServer.host”](#previewserverhost)

**Type:** `string`

The host where the server is listening for connections.

Adapters are allowed to leave this field unset. The value of `host` is implementation-specific.

#### `PreviewServer.port`

[Section titled “PreviewServer.port”](#previewserverport)

**Type:** `number`

The port where the server is listening for connections.

#### `PreviewServer.stop()`

[Section titled “PreviewServer.stop()”](#previewserverstop)

**Type:** `Promise<void>`

Asks the preview server to close, stop accepting requests, and drop idle connections.

The returned `Promise` resolves when the close request has been sent. This does not mean that the server has closed yet. Use the [`closed()`](#previewserverclosed) method if you need to ensure the server has fully closed.

#### `PreviewServer.closed()`

[Section titled “PreviewServer.closed()”](#previewserverclosed)

**Type:** `Promise<void>`

Returns a `Promise` that will resolve once the server is closed and reject if an error happens on the server.
