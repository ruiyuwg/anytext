# Add Sentry to a Bun app

Source: https://bun.com/docs/guides/ecosystem/sentry

[Sentry](https://sentry.io) is a developer-first error tracking and performance monitoring platform. Sentry has a first-class SDK for Bun, `@sentry/bun`, that instruments your Bun application to automatically collect error and performance data.

Don't already have an account and Sentry project established? Head over to [sentry.io](https://sentry.io/signup/), then return to this page.

***

To start using Sentry with Bun, first install the Sentry Bun SDK.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add @sentry/bun
```

***

Then, initialize the Sentry SDK with your Sentry DSN in your app's entry file. You can find your DSN in your Sentry project settings.

```ts sentry.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import * as Sentry from "@sentry/bun";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "__SENTRY_DSN__",

  // Add Performance Monitoring by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
```

***

You can verify that Sentry is working by capturing a test error:

```ts sentry.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  }
}, 99);
```

To view and resolve the recorded error, log into [sentry.io](https://sentry.io/) and open your project. Clicking on the error's title will open a page where you can see detailed information and mark it as resolved.

***

To learn more about Sentry and using the Sentry Bun SDK, view the [Sentry documentation](https://docs.sentry.io/platforms/javascript/guides/bun).

# Build an app with SolidStart and Bun

Source: https://bun.com/docs/guides/ecosystem/solidstart

Initialize a SolidStart app with `create-solid`. You can specify the `--solidstart` flag to create a SolidStart project, and `--ts` for TypeScript support. When prompted for a template, select `basic` for a minimal starter app.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun create solid my-app --solidstart --ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
┌
 Create-Solid v0.6.11
│
◇  Project Name
│  my-app
│
◇  Which template would you like to use?
│  basic
│
◇  Project created 🎉
│
◇  To get started, run: ─╮
│                        │
│  cd my-app             │
│  bun install           │
│  bun dev               │
│                        │
├────────────────────────╯
```

***

As instructed by the `create-solid` CLI, install the dependencies.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
cd my-app
bun install
```

Then run the development server with `bun dev`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun dev
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
$ vinxi dev
vinxi v0.5.8
vinxi starting dev server

  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose
```

Open [localhost:3000](http://localhost:3000). Any changes you make to `src/routes/index.tsx` will be hot-reloaded automatically.

***

Refer to the [SolidStart website](https://docs.solidjs.com/solid-start) for complete framework documentation.

# Server-side render (SSR) a React component

Source: https://bun.com/docs/guides/ecosystem/ssr-react

To get started, install `react` & `react-dom`:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Any package manager can be used
bun add react react-dom
```

***

To render a React component to an HTML stream server-side (SSR):

```tsx ssr-react.tsx icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { renderToReadableStream } from "react-dom/server";

function Component(props: { message: string }) {
  return (
    <body>
      <h1>{props.message}</h1>
    </body>
  );
}

const stream = await renderToReadableStream(<Component message="Hello from server!" />);
```

***

Combining this with `Bun.serve()`, we get a simple SSR HTTP server:

```tsx server.tsx icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  async fetch() {
    const stream = await renderToReadableStream(<Component message="Hello from server!" />);
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});
```

***

React `19` and later includes an [SSR optimization](https://github.com/facebook/react/pull/25597) that takes advantage of Bun's "direct" `ReadableStream` implementation. If you run into an error like `export named 'renderToReadableStream' not found`, please make sure to install version `19` of `react` & `react-dom`, or import from `react-dom/server.browser` instead of `react-dom/server`. See [facebook/react#28941](https://github.com/facebook/react/issues/28941) for more information.

# Build an HTTP server using StricJS and Bun

Source: https://bun.com/docs/guides/ecosystem/stric

[StricJS](https://github.com/bunsvr) is a Bun framework for building high-performance web applications and APIs.

- **Fast** — Stric is one of the fastest Bun frameworks. See [benchmark](https://github.com/bunsvr/benchmark) for more details.
- **Minimal** — The basic components like `@stricjs/router` and `@stricjs/utils` are under 50kB and require no external dependencies.
- **Extensible** — Stric includes with a plugin system, dependency injection, and optional optimizations for handling requests.

***

Use `bun init` to create an empty project.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
mkdir myapp
cd myapp
bun init
bun add @stricjs/router @stricjs/utils
```

***

To implement a simple HTTP server with StricJS:

```ts index.ts icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Router } from "@stricjs/router";

export default new Router().get("/", () => new Response("Hi"));
```

***

To serve static files from `/public`:

```ts index.ts icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { dir } from "@stricjs/utils";

export default new Router().get("/", () => new Response("Hi")).get("/*", dir("./public"));
```

***

Run the file in watch mode to start the development server.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --watch run index.ts
```

***

For more info, see Stric's [documentation](https://stricjs.netlify.app).
