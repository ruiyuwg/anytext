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

Defines environment variables to be enforced by Zod validation and for which TypeScript support (e.g. autocompletion, type-safety) is available. Each key corresponds to the variable name and the value to the data type and validations [defined with `envField`](/en/reference/modules/astro-config/#envfield).

Four data types are supported: string, number, enumeration, and boolean. Each type requires a `context` (client or server), an `access` level (public or secret), and additional validations, such as a `default` value and an indication of whether the variable is `optional` (defaults to `false`).

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
