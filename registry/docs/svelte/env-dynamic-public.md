# $env/dynamic/public

This module provides access to environment variables set *dynamically* at runtime and that are *publicly* accessible.

|         | Runtime                                                                    | Build time                                                               |
| ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Private | [`$env/dynamic/private`](/docs/kit/$env-dynamic-private) | [`$env/static/private`](/docs/kit/$env-static-private) |
| Public  | [`$env/dynamic/public`](/docs/kit/$env-dynamic-public)   | [`$env/static/public`](/docs/kit/$env-static-public)   |

Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](/docs/kit/cli)), this is equivalent to `process.env`.

***Public* access:**

- This module *can* be imported into client-side code
- **Only** variables that begin with [`config.kit.env.publicPrefix`](/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included

> \[!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.

> \[!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
>
> ```env
> MY_FEATURE_FLAG=
> ```
>
> You can override `.env` values from the command line like so:
>
> ```sh
> MY_FEATURE_FLAG="enabled" npm run dev
> ```

For example, given the following runtime environment:

```env
ENVIRONMENT=production
PUBLIC_BASE_URL=http://example.com
```

With the default `publicPrefix` and `privatePrefix`:

```ts
import { env } from '$env/dynamic/public';
console.log(env.ENVIRONMENT); // => undefined, not public
console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
```

```
```

# $env/static/private

This module provides access to environment variables that are injected *statically* into your bundle at build time and are limited to *private* access.

|         | Runtime                                                                    | Build time                                                               |
| ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Private | [`$env/dynamic/private`](/docs/kit/$env-dynamic-private) | [`$env/static/private`](/docs/kit/$env-static-private) |
| Public  | [`$env/dynamic/public`](/docs/kit/$env-dynamic-public)   | [`$env/static/public`](/docs/kit/$env-static-public)   |

Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.

***Private* access:**

- This module cannot be imported into client-side code
- This module only includes variables that *do not* begin with [`config.kit.env.publicPrefix`](/docs/kit/configuration#env) *and do* start with [`config.kit.env.privatePrefix`](/docs/kit/configuration#env) (if configured)

For example, given the following build time environment:

```env
ENVIRONMENT=production
PUBLIC_BASE_URL=http://site.com
```

With the default `publicPrefix` and `privatePrefix`:

```ts
import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';

console.log(ENVIRONMENT); // => "production"
console.log(PUBLIC_BASE_URL); // => throws error during build
```

The above values will be the same *even if* different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.

# $env/static/public

This module provides access to environment variables that are injected *statically* into your bundle at build time and are *publicly* accessible.

|         | Runtime                                                                    | Build time                                                               |
| ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Private | [`$env/dynamic/private`](/docs/kit/$env-dynamic-private) | [`$env/static/private`](/docs/kit/$env-static-private) |
| Public  | [`$env/dynamic/public`](/docs/kit/$env-dynamic-public)   | [`$env/static/public`](/docs/kit/$env-static-public)   |

Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.

***Public* access:**

- This module *can* be imported into client-side code
- **Only** variables that begin with [`config.kit.env.publicPrefix`](/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included

For example, given the following build time environment:

```env
ENVIRONMENT=production
PUBLIC_BASE_URL=http://site.com
```

With the default `publicPrefix` and `privatePrefix`:

```ts
import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';

console.log(ENVIRONMENT); // => throws error during build
console.log(PUBLIC_BASE_URL); // => "http://site.com"
```

The above values will be the same *even if* different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.

# $lib

SvelteKit automatically makes files under `src/lib` available using the `$lib` import alias.

```svelte
<!--- file: src/lib/Component.svelte --->
A reusable component
```

```svelte
<!--- file: src/routes/+page.svelte --->
<script>
    import Component from '$lib/Component.svelte';
</script>

<Component />
```

# $service-worker

```js
// @noErrors
import { base, build, files, prerendered, version } from '$service-worker';
```

This module is only available to [service workers](/docs/kit/service-workers).

## base

The `base` path of the deployment. Typically this is equivalent to `config.kit.paths.base`, but it is calculated from `location.pathname` meaning that it will continue to work correctly if the site is deployed to a subdirectory.
Note that there is a `base` but no `assets`, since service workers cannot be used if `config.kit.paths.assets` is specified.

```dts
const base: string;
```

## build

An array of URL strings representing the files generated by Vite, suitable for caching with `cache.addAll(build)`.
During development, this is an empty array.

```dts
const build: string[];
```

## files

An array of URL strings representing the files in your static directory, or whatever directory is specified by `config.kit.files.assets`. You can customize which files are included from `static` directory using [`config.kit.serviceWorker.files`](/docs/kit/configuration#serviceWorker)

```dts
const files: string[];
```

## prerendered

An array of pathnames corresponding to prerendered pages and endpoints.
During development, this is an empty array.

```dts
const prerendered: string[];
```

## version

See [`config.kit.version`](/docs/kit/configuration#version). It's useful for generating unique cache names inside your service worker, so that a later deployment of your app can invalidate old caches.

```dts
const version: string;
```
