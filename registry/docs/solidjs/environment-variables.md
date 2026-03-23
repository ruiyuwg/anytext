Configuration

# Environment variables

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/configuration/environment-variables.mdx)

Solid is built on top of [Vite](https://vitejs.dev/), which offers a convenient way to handle environment variables.

***

## [Public Environment Variables](/configuration/environment-variables#public-environment-variables)

Public variables are considered safe to expose to the client-side code. These variables are prefixed with `VITE_` and are injected into the client-side code during compilation time.

In the root directory of the project, create a file called `.env`. This file will store environment variables in the `key = value` format.

If working with TypeScript it is possible to make such variables type-safe and enable your TypeScript Language Service Provider (LSP) to autocomplete them by creating a file called `env.d.ts` in the root directory of the project.

```
interface ImportMetaEnv {  readonly VITE_USER_ID: string;  readonly VITE_PUBLIC_ENDPOINT: string;}
interface ImportMeta {  readonly env: ImportMetaEnv;}
```

note

To prevent accidental exposure of environment variables to the client, only variables prefixed with `VITE_` will be exposed.

For example:

```
VITE_SECRET_KEY = 123helloDB_PASSWORD = foobar
```

Only the `VITE_SECRET_KEY` will be exposed to client source code, while `DB_PASSWORD` will not, as shown below.

```
console.log(import.meta.env.VITE_SECRET_KEY); // 123helloconsole.log(import.meta.env.DB_PASSWORD); // undefined
```

```
function MyComponent() {  return (    <div>      <h2>        Component with environment variable used{" "}        {import.meta.env.VITE_VARIABLE_NAME}        the value will be replaced during compilation time.      </h2>    </div>  );}
```

***

## [Private Environment Variables](/configuration/environment-variables#private-environment-variables)

These variables should only be accessed in your backend code, so it's best not to use the `VITE_` prefix for them. Instead, use `process.env` to access them. Depending on the [Nitro preset](https://nitro.build/deploy) chosen, they'll be made available automatically or they will require an external dependency such as [dotenv](https://www.npmjs.com/package/dotenv).

```
DB_HOST = "somedb://192.110.0";DB_PASSWORD = super_secret_password_hash;
```

To access them, within your backend code, use `process.env`. For an example, check the pseudo-code below.

```
  "use server"
  const client = new DB({    host: process.env.DB_URL,    password: process.env.DB_PASSWORD  });}
```

It is also possible to make `process.env` type-safe via the same `env.d.ts` file.

```
declare namespace NodeJS {  interface ProcessEnv {    readonly DB_URL: string;    readonly DB_PASSWORD: string;  }}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/configuration/environment-variables.mdx\&page=https://docs.solidjs.com/configuration/environment-variables)

On this page

1. [Overview](#_top)
2. [Public Environment Variables](#public-environment-variables)
3. [Private Environment Variables](#private-environment-variables)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/configuration/environment-variables.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/configuration/environment-variables.mdx\&page=https://docs.solidjs.com/configuration/environment-variables)
