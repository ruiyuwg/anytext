# Proxy HTTP requests using fetch()

Source: https://bun.com/docs/guides/http/proxy

In Bun, `fetch` supports sending requests through an HTTP or HTTPS proxy. This is useful on corporate networks or when you need to ensure a request is sent through a specific IP address.

```ts proxy.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await fetch("https://example.com", {
  // The URL of the proxy server
  proxy: "https://username:password@proxy.example.com:8080",
});
```

***

The `proxy` option can be a URL string or an object with `url` and optional `headers`. The URL can include the username and password if the proxy requires authentication. It can be `http://` or `https://`.

***

## Custom proxy headers

To send custom headers to the proxy server (useful for proxy authentication tokens, custom routing, etc.), use the object format:

```ts proxy-headers.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
await fetch("https://example.com", {
  proxy: {
    url: "https://proxy.example.com:8080",
    headers: {
      "Proxy-Authorization": "Bearer my-token",
      "X-Proxy-Region": "us-east-1",
    },
  },
});
```

The `headers` property accepts a plain object or a `Headers` instance. These headers are sent directly to the proxy server in `CONNECT` requests (for HTTPS targets) or in the proxy request (for HTTP targets).

If you provide a `Proxy-Authorization` header, it will override any credentials specified in the proxy URL.

***

## Environment variables

You can also set the `$HTTP_PROXY` or `$HTTPS_PROXY` environment variable to the proxy URL. This is useful when you want to use the same proxy for all requests.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
HTTPS_PROXY=https://username:password@proxy.example.com:8080 bun run index.ts
```

# Common HTTP server usage

Source: https://bun.com/docs/guides/http/server

This starts an HTTP server listening on port `3000`. It demonstrates basic routing with a number of common responses and also handles POST data from standard forms or as JSON.

See [`Bun.serve`](/runtime/http/server) for details.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // respond with text/html
    if (path === "/") return new Response("Welcome to Bun!");

    // redirect
    if (path === "/abc") return Response.redirect("/source", 301);

    // send back a file (in this case, *this* file)
    if (path === "/source") return new Response(Bun.file(import.meta.path));

    // respond with JSON
    if (path === "/api") return Response.json({ some: "buns", for: "you" });

    // receive JSON data to a POST request
    if (req.method === "POST" && path === "/api/post") {
      const data = await req.json();
      console.log("Received JSON:", data);
      return Response.json({ success: true, data });
    }

    // receive POST data from a form
    if (req.method === "POST" && path === "/form") {
      const data = await req.formData();
      console.log(data.get("someField"));
      return new Response("Success");
    }

    // 404s
    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
```

# Write a simple HTTP server

Source: https://bun.com/docs/guides/http/simple

This starts an HTTP server listening on port `3000`. It responds to all requests with a `Response` with status `200` and body `"Welcome to Bun!"`.

See [`Bun.serve`](/runtime/http/server) for details.

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});

console.log(`Listening on ${server.url}`);
```
