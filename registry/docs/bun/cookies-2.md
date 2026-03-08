# Cookies

Source: https://bun.com/docs/runtime/http/cookies

Work with cookies in HTTP requests and responses using Bun's built-in Cookie API.

Bun provides a built-in API for working with cookies in HTTP requests and responses. The `BunRequest` object includes a `cookies` property that provides a `CookieMap` for easily accessing and manipulating cookies. When using `routes`, `Bun.serve()` automatically tracks `request.cookies.set` and applies them to the response.

## Reading cookies

Read cookies from incoming requests using the `cookies` property on the `BunRequest` object:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  routes: {
    "/profile": req => {
      // Access cookies from the request
      const userId = req.cookies.get("user_id");
      const theme = req.cookies.get("theme") || "light";

      return Response.json({
        userId,
        theme,
        message: "Profile page",
      });
    },
  },
});
```

## Setting cookies

To set cookies, use the `set` method on the `CookieMap` from the `BunRequest` object.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  routes: {
    "/login": req => {
      const cookies = req.cookies;

      // Set a cookie with various options
      cookies.set("user_id", "12345", {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        secure: true,
        path: "/",
      });

      // Add a theme preference cookie
      cookies.set("theme", "dark");

      // Modified cookies from the request are automatically applied to the response
      return new Response("Login successful");
    },
  },
});
```

`Bun.serve()` automatically tracks modified cookies from the request and applies them to the response.

## Deleting cookies

To delete a cookie, use the `delete` method on the `request.cookies` (`CookieMap`) object:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  routes: {
    "/logout": req => {
      // Delete the user_id cookie
      req.cookies.delete("user_id", {
        path: "/",
      });

      return new Response("Logged out successfully");
    },
  },
});
```

Deleted cookies become a `Set-Cookie` header on the response with the `maxAge` set to `0` and an empty `value`.

# Error Handling

Source: https://bun.com/docs/runtime/http/error-handling

Learn how to handle errors in Bun's development server

To activate development mode, set `development: true`.

```ts title="server.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  development: true, // [!code ++]
  fetch(req) {
    throw new Error("woops!");
  },
});
```

In development mode, Bun will surface errors in-browser with a built-in error page.

### `error` callback

To handle server-side errors, implement an `error` handler. This function should return a `Response` to serve to the client when an error occurs. This response will supersede Bun's default error page in `development` mode.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
Bun.serve({
  fetch(req) {
    throw new Error("woops!");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
```

[Learn more about debugging in Bun](/runtime/debugger)

# Metrics

Source: https://bun.com/docs/runtime/http/metrics

Monitor server activity with built-in metrics

### `server.pendingRequests` and `server.pendingWebSockets`

Monitor server activity with built-in counters:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch(req, server) {
    return new Response(
      `Active requests: ${server.pendingRequests}\n` + `Active WebSockets: ${server.pendingWebSockets}`,
    );
  },
});
```

### `server.subscriberCount(topic)`

Get count of subscribers for a WebSocket topic:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const server = Bun.serve({
  fetch(req, server) {
    const chatUsers = server.subscriberCount("chat");
    return new Response(`${chatUsers} users in chat`);
  },
  websocket: {
    message(ws) {
      ws.subscribe("chat");
    },
  },
});
```
