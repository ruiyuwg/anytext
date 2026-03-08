# Server-Sent Events (SSE) with Bun

Source: https://bun.com/docs/guides/http/sse

[Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) let you push a stream of text events to the browser over a single HTTP response. The client consumes them via [`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

In Bun, you can implement an SSE endpoint by returning a `Response` whose body is a streaming source and setting the `Content-Type` header to `text/event-stream`.

`Bun.serve` closes idle connections after **10 seconds** by default. A quiet SSE stream counts as idle, so the
examples below call `server.timeout(req, 0)` to disable the timeout for the stream. See
[`idleTimeout`](/runtime/http/server#idletimeout) for details.

## Using an async generator

In Bun, `new Response` accepts an async generator function directly. This is usually the simplest way to write an SSE endpoint — each `yield` flushes a chunk to the client, and if the client disconnects, the generator's `finally` block runs so you can clean up.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  port: 3000,
  routes: {
    "/events": (req, server) => {
      // SSE streams are often quiet between events. By default,
      // Bun.serve closes connections after 10 seconds of inactivity.
      // Disable the idle timeout for this request so the stream
      // stays open indefinitely.
      server.timeout(req, 0);

      return new Response(
        async function* () {
          yield `data: connected at ${Date.now()}\n\n`;

          // Emit a tick every 5 seconds until the client disconnects.
          // When the client goes away, the generator is returned
          // (cancelled) and this loop stops automatically.
          while (true) {
            await Bun.sleep(5000);
            yield `data: tick ${Date.now()}\n\n`;
          }
        },
        {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
          },
        },
      );
    },
  },
});
```

## Using a `ReadableStream`

If your events originate from callbacks — message brokers, timers, external pushes — rather than a linear `await` flow, a `ReadableStream` often fits better. When the client disconnects, Bun calls the stream's `cancel()` method automatically, so you can release any resources you set up in `start()`.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  port: 3000,
  routes: {
    "/events": (req, server) => {
      server.timeout(req, 0);

      let timer: Timer;
      const stream = new ReadableStream({
        start(controller) {
          controller.enqueue(`data: connected at ${Date.now()}\n\n`);

          timer = setInterval(() => {
            controller.enqueue(`data: tick ${Date.now()}\n\n`);
          }, 5000);
        },
        cancel() {
          // Called automatically when the client disconnects.
          clearInterval(timer);
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
        },
      });
    },
  },
});
```

# Stream a file as an HTTP Response

Source: https://bun.com/docs/guides/http/stream-file

This snippet reads a file from disk using [`Bun.file()`](/runtime/file-io#reading-files-bun-file). This returns a `BunFile` instance, which can be passed directly into the `new Response` constructor.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const path = "/path/to/file.txt";
const file = Bun.file(path);
const resp = new Response(file);
```

***

The `Content-Type` is read from the file and automatically set on the `Response`.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
new Response(Bun.file("./package.json")).headers.get("Content-Type");
// => application/json;charset=utf-8

new Response(Bun.file("./test.txt")).headers.get("Content-Type");
// => text/plain;charset=utf-8

new Response(Bun.file("./index.tsx")).headers.get("Content-Type");
// => text/javascript;charset=utf-8

new Response(Bun.file("./img.png")).headers.get("Content-Type");
// => image/png
```

***

Putting it all together with [`Bun.serve()`](/runtime/http/server).

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
// static file server
Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;
    const file = Bun.file(path);
    return new Response(file);
  },
});
```

***

See [Docs > API > File I/O](/runtime/file-io#writing-files-bun-write) for complete documentation of `Bun.write()`.

# Streaming HTTP Server with Async Iterators

Source: https://bun.com/docs/guides/http/stream-iterator

In Bun, [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects can accept an async generator function as their body. This allows you to stream data to the client as it becomes available, rather than waiting for the entire response to be ready.

```ts stream-iterator.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(
      // An async generator function
      async function* () {
        yield "Hello, ";
        await Bun.sleep(100);
        yield "world!";

        // you can also yield a TypedArray or Buffer
        yield new Uint8Array(["\n".charCodeAt(0)]);
      },
      { headers: { "Content-Type": "text/plain" } },
    );
  },
});
```

***

You can pass any async iterable directly to `Response`:

```ts stream-iterator.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response(
      {
        [Symbol.asyncIterator]: async function* () {
          yield "Hello, ";
          await Bun.sleep(100);
          yield "world!";
        },
      },
      { headers: { "Content-Type": "text/plain" } },
    );
  },
});
```

# Streaming HTTP Server with Node.js Streams

Source: https://bun.com/docs/guides/http/stream-node-streams-in-bun

In Bun, [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects can accept a Node.js [`Readable`](https://nodejs.org/api/stream.html#stream_readable_streams).

This works because Bun's `Response` object allows any async iterable as its body. Node.js streams are async iterables, so you can pass them directly to `Response`.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Readable } from "stream";
import { serve } from "bun";
serve({
  port: 3000,
  fetch(req) {
    return new Response(Readable.from(["Hello, ", "world!"]), {
      headers: { "Content-Type": "text/plain" },
    });
  },
});
```

# Configure TLS on an HTTP server

Source: https://bun.com/docs/guides/http/tls

Set the `tls` key to configure TLS. Both `key` and `cert` are required. The `key` should be the contents of your private key; `cert` should be the contents of your issued certificate. Use [`Bun.file()`](/runtime/file-io#reading-files-bun-file) to read the contents.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch: request => new Response("Welcome to Bun!"),
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem"),
  },
});
```

***

By default Bun trusts the default Mozilla-curated list of well-known root CAs. To override this list, pass an array of certificates as `ca`.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch: request => new Response("Welcome to Bun!"),
  tls: {
    cert: Bun.file("cert.pem"),
    key: Bun.file("key.pem"),
    ca: [Bun.file("ca1.pem"), Bun.file("ca2.pem")],
  },
});
```

# Guides

Source: https://bun.com/docs/guides/index

A collection of code samples and walkthroughs for performing common tasks with Bun.

# Add a dependency

Source: https://bun.com/docs/guides/install/add

To add an npm package as a dependency, use `bun add`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod
```

***

This will add the package to `dependencies` in `package.json`. By default, the `^` range specifier will be used, to indicate that any future minor or patch versions are acceptable.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    "zod": "^3.0.0" // [!code ++]
  }
}
```

***

To "pin" to an exact version of the package, use `--exact`. This will add the package to `dependencies` without the `^`, pinning your project to the exact version you installed.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod --exact
```

***

To specify an exact version or a tag:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod@3.0.0
bun add zod@next
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add a development dependency

Source: https://bun.com/docs/guides/install/add-dev

To add an npm package as a development dependency, use `bun add --development`.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod --dev
bun add zod -d # shorthand
```

***

This will add the package to `devDependencies` in `package.json`.

```json theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "devDependencies": {
    "zod": "^3.0.0" // [!code ++]
  }
}
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add a Git dependency

Source: https://bun.com/docs/guides/install/add-git

Bun supports directly adding GitHub repositories as dependencies of your project.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add github:lodash/lodash
```

***

This will add the following line to your `package.json`:

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    "lodash": "github:lodash/lodash"
  }
}
```

***

Bun supports a number of protocols for specifying Git dependencies.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add git+https://github.com/lodash/lodash.git
bun add git+ssh://github.com/lodash/lodash.git#4.17.21
bun add git@github.com:lodash/lodash.git
bun add github:colinhacks/zod
```

**Note:** GitHub dependencies download via HTTP tarball when possible for faster installation.

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add an optional dependency

Source: https://bun.com/docs/guides/install/add-optional

To add an npm package as an optional dependency, use the `--optional` flag.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod --optional
```

***

This will add the package to `optionalDependencies` in `package.json`.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "optionalDependencies": {
    "zod": "^3.0.0" // [!code ++]
  }
}
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add a peer dependency

Source: https://bun.com/docs/guides/install/add-peer

To add an npm package as a peer dependency, use the `--peer` flag.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add @types/bun --peer
```

***

This will add the package to `peerDependencies` in `package.json`.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "peerDependencies": {
    "@types/bun": "^1.3.3" // [!code ++]
  }
}
```

***

Running `bun install` will install peer dependencies by default, unless marked optional in `peerDependenciesMeta`.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "peerDependencies": {
    "@types/bun": "^1.3.3"
  },
  "peerDependenciesMeta": {
    "@types/bun": { // [!code ++]
      "optional": true // [!code ++]
    } // [!code ++]
  }
}
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add a tarball dependency

Source: https://bun.com/docs/guides/install/add-tarball

Bun's package manager can install any publicly available tarball URL as a dependency of your project.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod@https://registry.npmjs.org/zod/-/zod-3.21.4.tgz
```

***

Running this command will download, extract, and install the tarball to your project's `node_modules` directory. It will also add the following line to your `package.json`:

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    "zod": "https://registry.npmjs.org/zod/-/zod-3.21.4.tgz" // [!code ++]
  }
}
```

***

The package `"zod"` can now be imported as usual.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { z } from "zod";
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.
