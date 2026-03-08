## Builder

This object is passed to the `adapt` function of adapters.
It contains various methods and properties that are useful for adapting the app.

```dts
interface Builder {/*…*/}
```

```dts
log: Logger;
```

Print messages to the console. `log.info` and `log.minor` are silent unless Vite's `logLevel` is `info`.

```dts
rimraf: (dir: string) => void;
```

Remove `dir` and all its contents.

```dts
mkdirp: (dir: string) => void;
```

Create `dir` and any required parent directories.

```dts
config: ValidatedConfig;
```

The fully resolved Svelte config.

```dts
prerendered: Prerendered;
```

Information about prerendered pages and assets, if any.

```dts
routes: RouteDefinition[];
```

An array of all routes (including prerendered)

```dts
createEntries: (fn: (route: RouteDefinition) => AdapterEntry) => Promise<void>;
```

- `fn` A function that groups a set of routes into an entry point
- deprecated Use `builder.routes` instead

Create separate functions that map to one or more routes of your app.

```dts
findServerAssets: (routes: RouteDefinition[]) => string[];
```

Find all the assets imported by server files belonging to `routes`

```dts
generateFallback: (dest: string) => Promise<void>;
```

Generate a fallback page for a static webserver to use when no route is matched. Useful for single-page apps.

```dts
generateEnvModule: () => void;
```

Generate a module exposing build-time environment variables as `$env/dynamic/public`.

```dts
generateManifest: (opts: { relativePath: string; routes?: RouteDefinition[] }) => string;
```

- `opts` a relative path to the base directory of the app and optionally in which format (esm or cjs) the manifest should be generated

Generate a server-side manifest to initialise the SvelteKit [server](/docs/kit/@sveltejs-kit#Server) with.

```dts
getBuildDirectory: (name: string) => string;
```

- `name` path to the file, relative to the build directory

Resolve a path to the `name` directory inside `outDir`, e.g. `/path/to/.svelte-kit/my-adapter`.

```dts
getClientDirectory: () => string;
```

Get the fully resolved path to the directory containing client-side assets, including the contents of your `static` directory.

```dts
getServerDirectory: () => string;
```

Get the fully resolved path to the directory containing server-side code.

```dts
getAppPath: () => string;
```

Get the application path including any configured `base` path, e.g. `my-base-path/_app`.

```dts
writeClient: (dest: string) => string[];
```

- `dest` the destination folder
- returns an array of files written to `dest`

Write client assets to `dest`.

```dts
writePrerendered: (dest: string) => string[];
```

- `dest` the destination folder
- returns an array of files written to `dest`

Write prerendered files to `dest`.

```dts
writeServer: (dest: string) => string[];
```

- `dest` the destination folder
- returns an array of files written to `dest`

Write server-side code to `dest`.

```dts
copy: (
	from: string,
	to: string,
	opts?: {
		filter?(basename: string): boolean;
		replace?: Record<string, string>;
	}
) => string[];
```

- `from` the source file or directory
- `to` the destination file or directory
- `opts.filter` a function to determine whether a file or directory should be copied
- `opts.replace` a map of strings to replace
- returns an array of files that were copied

Copy a file or directory.

```dts
hasServerInstrumentationFile: () => boolean;
```

- returns true if the server instrumentation file exists, false otherwise
- available since v2.31.0

Check if the server instrumentation file exists.

```dts
instrument: (args: {
	entrypoint: string;
	instrumentation: string;
	start?: string;
	module?:
		| {
				exports: string[];
		  }
		| {
				generateText: (args: { instrumentation: string; start: string }) => string;
		  };
}) => void;
```

- `options` an object containing the following properties:
- `options.entrypoint` the path to the entrypoint to trace.
- `options.instrumentation` the path to the instrumentation file.
- `options.start` the name of the start file. This is what `entrypoint` will be renamed to.
- `options.module` configuration for the resulting entrypoint module.
- `options.module.generateText` a function that receives the relative paths to the instrumentation and start files, and generates the text of the module to be traced. If not provided, the default implementation will be used, which uses top-level await.
- available since v2.31.0

Instrument `entrypoint` with `instrumentation`.

Renames `entrypoint` to `start` and creates a new module at
`entrypoint` which imports `instrumentation` and then dynamically imports `start`. This allows
the module hooks necessary for instrumentation libraries to be loaded prior to any application code.

Caveats:

- "Live exports" will not work. If your adapter uses live exports, your users will need to manually import the server instrumentation on startup.
- If `tla` is `false`, OTEL auto-instrumentation may not work properly. Use it if your environment supports it.
- Use `hasServerInstrumentationFile` to check if the user has a server instrumentation file; if they don't, you shouldn't do this.

```dts
compress: (directory: string) => Promise<void>;
```

- `directory` The directory containing the files to be compressed

Compress files in `directory` with gzip and brotli, where appropriate. Generates `.gz` and `.br` files alongside the originals.

## ClientInit

Available since 2.10.0

The [`init`](/docs/kit/hooks#Shared-hooks-init) will be invoked once the app starts in the browser

```dts
type ClientInit = () => MaybePromise<void>;
```

## Config

See the [configuration reference](/docs/kit/configuration) for details.
