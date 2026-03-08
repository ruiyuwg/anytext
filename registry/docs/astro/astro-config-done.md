### `astro:config:done`

[Section titled “astro:config:done”](#astroconfigdone)

**Previous hook:** [`astro:routes:resolved`](#astroroutesresolved)

**Next hook:** [`astro:server:setup`](#astroserversetup) when running in “dev” mode, or [`astro:build:start`](#astrobuildstart) during production builds

**When:** After the Astro config has resolved and other integrations have run their `astro:config:setup` hooks.

**Why:** To retrieve the final config for use in other hooks.

```js
'astro:config:done'?: (options: {
  config: AstroConfig;
  setAdapter: (adapter: AstroAdapter) => void;
  injectTypes: (injectedType: InjectedType) => URL;
  logger: AstroIntegrationLogger;
  buildOutput: 'static' | 'server';
}) => void | Promise<void>;
```

#### `config` option

[Section titled “config option”](#config-option-1)

**Type:** `AstroConfig`

A read-only copy of the user-supplied [Astro config](/en/reference/configuration-reference/). This is resolved *after* other integrations have run.

#### `setAdapter()` option

[Section titled “setAdapter() option”](#setadapter-option)

**Type:** `(adapter: AstroAdapter) => void;`

Makes the integration an adapter. Read more in the [adapter API](/en/reference/adapter-reference/).

#### `injectTypes()` option

[Section titled “injectTypes() option”](#injecttypes-option)

**Type:** `(injectedType: { filename: string; content: string }) => URL`

**Added in:** `astro@4.14.0`

Allows you to inject types into your user’s project by adding a new `*.d.ts` file.

The `filename` property will be used to generate a file at `/.astro/integrations/<normalized_integration_name>/<normalized_filename>.d.ts` and must end with `".d.ts"`.

The `content` property will create the body of the file and must be valid TypeScript.

Additionally, `injectTypes()` returns a URL to the normalized path so you can overwrite its content later on, or manipulate it in any way you want.

```js
const path = injectTypes({
  filename: "types.d.ts",
  content: "declare module 'virtual:integration' {}"
})
console.log(path) // URL
```

#### `buildOutput` option

[Section titled “buildOutput option”](#buildoutput-option)

**Type:** `'static' | 'server'`

**Added in:** `astro@5.0.0`

Allows you to adapt the logic of your integration depending on the user’s project output.
