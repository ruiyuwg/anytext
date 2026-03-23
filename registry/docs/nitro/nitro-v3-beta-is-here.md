# Nitro v3 Beta is here!

## A Brief History

Nitro started as the server engine for [Nuxt 3](https://nuxt.com){rel=""nofollow""}, designed to solve a specific problem: deployment-agnostic servers.
Over time, Nitro grew beyond Nuxt. It became the foundation for many meta-frameworks and a toolkit for building standalone servers.

With Nitro v3, we took the opportunity to rethink the fundamentals. leaner APIs, Web standards, first-class [Rolldown](https://rolldown.rs/){rel=""nofollow""} and [Vite v8](https://vite.dev/){rel=""nofollow""} integration, and a better experience for both humans and agents (more on that later!)

Since we quietly announced v3 [alpha.0](https://github.com/nitrojs/nitro/releases/tag/v3.0.1-alpha.0){rel=""nofollow""} (11 Oct 2025) at the first [Vite Conf](https://viteconf.amsterdam/){rel=""nofollow""}, Nitro v3 has been adopted by many users ([~280k](https://npmtrends.com/nitro-vs-nitro-nightly){rel=""nofollow""} weekly downloads!) and refined through amazing contributions and feedback. including [Tanstack Start](https://tanstack.com/start/latest/docs/framework/react/guide/hosting#nitro){rel=""nofollow""}, [Vercel Workflows](https://useworkflow.dev/docs/getting-started){rel=""nofollow""}, and production apps like [T3Chat](https://t3.chat/){rel=""nofollow""}.

A huge thanks to the VoidZero (Vite and Rolldown), Nuxt ([v5 is coming!](https://nitro.build/#nuxt-v5)) and TanStack Start teams and every contributor who helped bring Nitro v3 to this milestone. ❤️

## Why Build Servers?

We don't ship raw source files to the browser. We use build tools because they solve real problems: **HMR** for instant feedback, **code splitting** to load only what a route needs, **tree shaking** to eliminate dead code, and **minification** for smaller payloads. Tools like Webpack and then [Vite](https://vite.dev/){rel=""nofollow""} transformed frontend development from painful to productive.

But frontend apps don't exist in isolation, they need APIs, databases, authentication, real-time data. They need a server.

With the rise of serverless and edge computing, the server side now faces the same constraints the frontend solved years ago. **Cold starts** mean every millisecond of startup matters. **Memory limits** are strict — bloated dependencies can push you over. **Bundle size** directly impacts deploy speed and boot time. And your code needs to run everywhere: Node.js, Deno, Bun, Cloudflare Workers, Vercel, etc. Yet most server frameworks still ship unoptimized, unbundled code, assuming a long-running process where none of this matters.

Nitro brings the build-tool philosophy to the backend. The same great DX you expect from frontend tooling: HMR for fast iteration and optimized builds powered by Rolldown with tree-shaken production output that performs as close to bare-metal as possible. \**One codebase, any runtime, any platform.*\*

## ⚡ First-Class Vite Integration

Nitro now has a native [Vite](https://vite.dev){rel=""nofollow""} plugin to build full stack apps.

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [nitro()],
});
```

Adding `nitro()` to your Vite apps gives you:

- **API routes** via filesystem routing
- **Server-side rendering** integrated with your frontend build
- **A production server** — a single `vite build` produces an optimized `.output/` folder with both frontend and backend, ready to deploy

This means you can add a full backend to any Vite project — See [examples](https://nitro.build/examples) with [React](https://nitro.build/examples/vite-ssr-react), [Vue](https://nitro.build/examples/vite-ssr-vue-router) and [Solid.js](https://nitro.build/examples/vite-ssr-solid).

## 🚀 Performance by Default, Zero Bloat

Nitro compiles your routes at build time. There is no runtime router — each route loads on demand. Only the code needed to handle a specific request is loaded and executed.

Minimal server bundle built with the `standard` preset is less than `10kB`, can be served with [srvx](https://srvx.h3.dev/){rel=""nofollow""} at close to native speeds, and includes all the good features from [H3](https://h3.dev/){rel=""nofollow""}.

We have also significantly reduced the number of dependencies, down to [less than 20](https://npmgraph.js.org/?q=nitro-nightly){rel=""nofollow""} from [321 dependencies](https://npmgraph.js.org/?q=nitropack){rel=""nofollow""}.

## 🖌️ New Identity: `nitro`

Nitro v3 ships under a new NPM package: [`nitro`](https://npmx.dev/package/nitro){rel=""nofollow""}, replacing the legacy `nitropack`.

All imports now use clean `nitro/*` subpaths:

```ts
import { defineNitroConfig } from "nitro/config";
import { defineHandler } from "nitro";
import { useStorage } from "nitro/storage";
import { useDatabase } from "nitro/database";
```

No more deep `nitropack/runtime/*` paths, plus, you can import nitro subpaths outside of builder useful for unit testing.

## 🔧 Bring Your Own Framework

Nitro v3 is not opinionated about your HTTP layer. You can use the built-in filesystem routing, or take full control with a `server.ts` entry file and bring any framework you prefer:

```ts [server.ts]
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("Hello from Hono!"));

export default app;
```

## 🌐 H3 (v2) with Web Standards

Nitro v3 upgrades to [H3 v2](https://h3.dev){rel=""nofollow""}, which has been fully rewritten around web standard primitives — [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request){rel=""nofollow""}, [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response){rel=""nofollow""}, [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers){rel=""nofollow""}, and [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL){rel=""nofollow""}.

The result is cleaner, more portable server code:

```ts [routes/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler((event) => {
  const ua = event.req.headers.get("user-agent");
  return { message: "Hello Nitro v3!", ua };
});
```

Reading request bodies uses native APIs:

```ts [routes/submit.ts]
import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
  const body = await event.req.json();
  return { received: body };
});
```

No wrappers, no abstractions for things the platform already provides. If you know the Web API, you know H3 v2.

[Elysia](https://elysiajs.com/){rel=""nofollow""}, [h3](https://h3.dev){rel=""nofollow""}, [Hono](https://hono.dev){rel=""nofollow""} — anything that speaks web standards works with Nitro.

## 🗄️ Built-in Primitives

Nitro ships with powerful but small and **fully opt-in** agnostic server primitives that work across every runtime.

::note
When not used, nothing extra will be added to the server bundle. You can still use native platform primitives alongside Nitro's built-in ones.
We are also bringing first class emulation for platform-specific primitives for dev See [env-runner](https://github.com/unjs/env-runner){rel=""nofollow""} and [nitrojs/nitro#4088](https://github.com/nitrojs/nitro/pull/4088){rel=""nofollow""} for more details.
::

### Storage

A runtime-agnostic key-value layer with 20+ drivers — FS, Redis, S3, Cloudflare KV, Vercel Blob and [more](https://unstorage.unjs.io/drivers){rel=""nofollow""}. Attach drivers to namespaces and swap them without changing your application code.

```ts
import { useStorage } from "nitro/storage";

const storage = useStorage();
await storage.setItem("user:1", { name: "Nitro" });
```

:read-more{to="https://nitro.build/docs/storage"}

### Caching

Cache server routes and functions, backed by the storage layer. Supports stale-while-revalidate, TTL, and custom cache keys out of the box.

```ts
import { defineCachedHandler } from "nitro/cache";

export default defineCachedHandler((event) => {
  return "I am cached for an hour";
}, { maxAge: 60 * 60 });
```

:read-more{to="https://nitro.build/docs/cache"}

### Database

A built-in SQL database that defaults to SQLite for development and can connect to Postgres, MySQL, and [more](https://db0.unjs.io/connectors){rel=""nofollow""} using the same API.

```ts
import { useDatabase } from "nitro/database";

const db = useDatabase();
const users = await db.sql`SELECT * FROM users`;
```

:read-more{to="https://nitro.build/docs/database"}

## 🌍 Deploy Anywhere

Build your server into an optimized `.output/` folder compatible with:

- **Runtimes**: Node.js, Bun, Deno
- **Platforms**: Cloudflare Workers, Netlify, Vercel, AWS Lambda, Azure, Firebase, Deno Deploy, and more

No configuration needed — Nitro auto-detects your deployment target. Take advantage of platform features like ISR, SWR, and edge rendering without changing a single line of code.

## 🎨 Server-Side Rendering

Render HTML with your favorite templating engine, or use component libraries like React, Vue, or Svelte directly on the server. Go full universal rendering with client-side hydration.

Nitro provides the foundation and a progressive approach — start with API routes, add rendering when you need it, and scale to full SSR at your own pace.

:read-more{to="https://nitro.build/docs/renderer"}

## 🟢 Nuxt v5

Nitro v3 will power the next major version of [Nuxt](https://nuxt.com){rel=""nofollow""}.

[Nuxt v5](https://nuxt.com/blog/roadmap-v4){rel=""nofollow""} will ship with Nitro v3 and H3 v2 at its core, bringing web-standard request handling, Rolldown-powered builds, and the Vite Environment API to the Nuxt ecosystem.

If you're a Nuxt user, you can already start preparing by familiarizing yourself with Nitro v3's new APIs, which will carry directly into Nuxt 5, and you can [follow progress](https://github.com/nuxt/nuxt/discussions/34504){rel=""nofollow""} on adopting Nitro v3 in Nuxt

## 🏁 Getting Started

### Create a New Project

:pm-x{command="create-nitro-app"}

See the [quick start guide](https://nitro.build/docs/quick-start) for a full step-by-step walkthrough.

## 🔄 Migrating from v2

Nitro v3 introduces intentional breaking changes to set a cleaner foundation. Here are the key ones:

- `nitropack` → `nitro` (package rename)
- `nitropack/runtime/*` → `nitro/*` (clean subpath imports)
- `eventHandler` → `defineHandler` (H3 v2)
- `createError` → `HTTPError` (H3 v2)
- Web standard `event.req` headers and body APIs
- Node.js minimum version: **20**
- Preset renames and consolidation (e.g., `cloudflare` → `cloudflare_module`)

For a complete list, see the [migration guide](https://nitro.build/docs/migration).

***

Thank you to everyone who has contributed to Nitro over the years. We can't wait to see what you build with the new Nitro! ❤️

- [GitHub](https://github.com/nitrojs/nitro){rel=""nofollow""} — Issues and discussions
- [Discord](https://discord.nitro.build){rel=""nofollow""} — Chat with the community

# Blog

Nitro blog posts.
