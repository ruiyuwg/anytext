## env

[Section titled “env”](#env)

**Type:** `object`\
**Default:** `{}`

**Added in:** `astro@5.0.0`

Configuration options for type-safe environment variables.

See our guide for more information on [environment variables in Astro](/en/guides/environment-variables/).

### env.schema

[Section titled “env.schema”](#envschema)

**Type:** `EnvSchema`\
**Default:** `{}`

**Added in:** `astro@5.0.0`

An object that uses `envField` to define the data type and properties of your environment variables: `context` (client or server), `access` (public or secret), a `default` value to use, and whether or not this environment variable is `optional` (defaults to `false`).

astro.config.mjs

```js
import { defineConfig, envField } from "astro/config"


export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({ context: "client", access: "public", optional: true }),
      PORT: envField.number({ context: "server", access: "public", default: 4321 }),
      API_SECRET: envField.string({ context: "server", access: "secret" }),
    }
  }
})
```

`envField` supports four data types: string, number, enum, and boolean. `context` and `access` are required properties for all data types. The following shows the complete list of properties available for each data type:

```js
import { envField } from "astro/config"


envField.string({
   // context & access
   optional: true,
   default: "foo",
   max: 20,
   min: 1,
   length: 13,
   url: true,
   includes: "oo",
   startsWith: "f",
   endsWith: "o",
})
envField.number({
   // context & access
   optional: true,
   default: 15,
   gt: 2,
   min: 1,
   lt: 3,
   max: 4,
   int: true,
})
envField.boolean({
   // context & access
   optional: true,
   default: true,
})
envField.enum({
   // context & access
   values: ['foo', 'bar', 'baz'], // required
   optional: true,
   default: 'baz',
})
```

### env.validateSecrets

[Section titled “env.validateSecrets”](#envvalidatesecrets)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@5.0.0`

Whether or not to validate secrets on the server when starting the dev server or running a build.

By default, only public variables are validated on the server when starting the dev server or a build, and private variables are validated at runtime only. If enabled, private variables will also be checked on start. This is useful in some continuous integration (CI) pipelines to make sure all your secrets are correctly set before deploying.

astro.config.mjs

```js
import { defineConfig, envField } from "astro/config"


export default defineConfig({
  env: {
    schema: {
      // ...
    },
    validateSecrets: true
  }
})
```
