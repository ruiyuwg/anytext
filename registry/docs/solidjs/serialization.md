Advanced

# Serialization

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/serialization.mdx)

SolidStart serializes server function arguments and return values so they can travel between server and client. It uses Seroval under the hood and streams payloads to keep responses responsive.

***

## [Configuration](/solid-start/advanced/serialization#configuration)

Configure serialization in your `app.config.ts` with `defineConfig`:

v1v2

```
import { defineConfig } from "@solidjs/start/config";
export default defineConfig({  serialization: {    mode: "js",  },});
```

```
import { defineConfig } from "vite";import { solidStart } from "@solidjs/start";
export default defineConfig({  plugins: [    solidStart({      serialization: {        mode: "json",      },    }),  ],});
```

See the full config reference in [`defineConfig`](/solid-start/reference/config/define-config#serialization).

***

## [Modes](/solid-start/advanced/serialization#modes)

- `json`: Uses `JSON.parse` on the client. Best for strict CSP because it avoids `eval`. Payloads can be slightly larger.
- `js`: Uses Seroval's JS serializer for smaller payloads and better performance, but it requires `unsafe-eval` in CSP.

v2 Breaking Change: Defaults

SolidStart v1 defaults to `js` for backwards compatibility. SolidStart v2 defaults to `json` for CSP compatibility.

***

## [Supported types (default)](/solid-start/advanced/serialization#supported-types-default)

SolidStart enables Seroval plus a default set of web platform plugins. These plugins add support for:

- `AbortSignal`, `CustomEvent`, `DOMException`, `Event`
- `FormData`, `Headers`, `ReadableStream`
- `Request`, `Response`
- `URL`, `URLSearchParams`

Seroval supports additional value types. The compatibility list is broader than what SolidStart enables by default, so treat it as a superset. See the [Seroval compatibility docs](https://github.com/lxsmnsyc/seroval/blob/main/docs/COMPATIBILITY.md).

***

## [Limits and exclusions](/solid-start/advanced/serialization#limits-and-exclusions)

- `RegExp` is disabled by default.
- JSON mode enforces a maximum serialization depth of 64. If you exceed this, flatten the structure or return a simpler payload.

***

## [Related guidance](/solid-start/advanced/serialization#related-guidance)

- Configure modes and defaults in [`defineConfig`](/solid-start/reference/config/define-config#serialization).
- CSP implications and nonce examples live in the [Security guide](/solid-start/guides/security#content-security-policy-csp).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/serialization.mdx\&page=https://docs.solidjs.com/solid-start/advanced/serialization)

On this page

1. [Overview](#_top)
2. [Configuration](#configuration)
3. [Modes](#modes)
4. [Supported types (default)](#supported-types-default)
5. [Limits and exclusions](#limits-and-exclusions)
6. [Related guidance](#related-guidance)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/advanced/serialization.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/advanced/serialization.mdx\&page=https://docs.solidjs.com/solid-start/advanced/serialization)
