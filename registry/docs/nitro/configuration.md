# Configuration

::read-more{to="https://nitro.build/config"}
See [config reference](https://nitro.build/config) for available options.
::

You can customize your Nitro builder with a configuration file.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  // Nitro options
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    // Nitro options
  }
})
```

::

::important
If you are using [Nuxt](https://nuxt.com){rel=""nofollow""}, use the `nitro` option in your Nuxt config instead.
::

::tip
Nitro loads the configuration using [c12](https://github.com/unjs/c12){rel=""nofollow""}, giving more possibilities such as using `.nitrorc` file in current working directory or in the user's home directory.
::

## Runtime configuration

Nitro provides a runtime config API to expose configuration within your application, with the ability to update it at runtime by setting environment variables. This is useful when you want to expose different configuration values for different environments (e.g. development, staging, production). For example, you can use this to expose different API endpoints for different environments or to expose different feature flags.

First, you need to define the runtime config in your configuration file.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  runtimeConfig: {
    apiToken: "dev_token", // `dev_token` is the default value
  }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  runtimeConfig: {
    apiToken: "dev_token", // `dev_token` is the default value
  }
})
```

::

You can now access the runtime config using `useRuntimeConfig(event)`. Use `useRuntimeConfig(event)` within event handlers and utilities and **avoid** calling it in ambient global contexts. This could lead to unexpected behavior such as sharing the same runtime config across different requests.

```ts [server/api/example.get.ts]
export default defineEventHandler((event) => {
  return useRuntimeConfig(event).apiToken // Returns `dev_token`
});
```

### Local development

Finally, you can update the runtime config using environment variables. You can use a `.env` file in development and use platform variables in production (see below).

Create an `.env` file in your project root:

```bash [.env]
NITRO_API_TOKEN="123"
```

Re-start the development server, fetch the `/api/example` endpoint and you should see `123` as the response instead of `dev_token`.

Do not forget that you can still universally access environment variables using `import.meta.env` or `process.env` but avoid using them in ambiant global contexts to prevent unexpected behavior.

### Production

You can define variables in your production environment to update the runtime config. All variables must be prefixed with `NITRO_` to be applied to the runtime config. They will override the runtime config variables defined within your `nitro.config.ts` file.

::code-group

```bash [.env (nitro)]
NITRO_API_TOKEN="123"
```

```bash [.env (nuxt)]
NUXT_API_TOKEN="123"
```

::

In runtime config, define key using camelCase. In environment variables, define key using snake\_case and uppercase.

```ts
{
  helloWorld: "foo"
}
```

```bash
NITRO_HELLO_WORLD="foo"
```

# TypeScript

## `tsconfig.json`

To leverage type hints within your project, create a `tsconfig.json` file that extends auto-generated types.

::code-group

```json [tsconfig.json (nitro)]
{
  "extends": "./.nitro/types/tsconfig.json"
}
```

```json [server/tsconfig.json (nuxt)]
{
  "extends": "../.nuxt/tsconfig.server.json"
}
```

::

::tip
Starter templates have this file by default and usually you don't need to do anything. If this file does not exists, you can manually create it.
::

## Prepare types

You can use `prepare` command to auto generate the types.
This can be useful in a CI environment or as a `postinstall` command in your `package.json`.

:pm-x{command="nitro prepare"}

::tip
When using `nitro dev` command, types are also auto-generated!
::

::note
For [Nuxt](https://nuxt.com){rel=""nofollow""} you should use `nuxi generate`
::

# Nightly Channel

You can opt-in to the nightly release channel by updating your `package.json`:

::code-group

```diff [Nitro]
{
  "devDependencies": {
--    "nitropack": "^2.0.0"
++    "nitropack": "npm:nitropack-nightly@latest"
  }
}
```

```diff [Nuxt]
{
  "devDependencies": {
--    "nuxt": "^3.0.0"
++    "nuxt": "npm:nuxt-nightly@latest"
  }
}
```

::

::note
If you are using Nuxt, [use the Nuxt nightly channel](https://nuxt.com/docs/guide/going-further/nightly-release-channel#opting-in){rel=""nofollow""} as it already includes `nitropack-nightly`.
::

Remove the lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, or `bun.lockb`) and reinstall the dependencies.
