# Hono — Context API

The Context object `c` is passed to every handler. It provides access to the request, response helpers, and utilities.

## Request Data

### Query Parameters

```typescript
// GET /search?q=hono&page=1
app.get("/search", (c) => {
  const q = c.req.query("q");         // "hono"
  const page = c.req.query("page");   // "1"
  const all = c.req.queries("tag");   // string[] for repeated params
  return c.json({ q, page });
});
```

### Path Parameters

```typescript
app.get("/users/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ id });
});
```

### Headers

```typescript
app.get("/", (c) => {
  const auth = c.req.header("Authorization");
  const contentType = c.req.header("Content-Type");
  return c.text("OK");
});
```

### Body Parsing

```typescript
// JSON body
app.post("/json", async (c) => {
  const body = await c.req.json();
  return c.json(body);
});

// Form data
app.post("/form", async (c) => {
  const body = await c.req.parseBody();
  const name = body["name"];
  return c.text(`Hello ${name}`);
});

// Raw text
app.post("/text", async (c) => {
  const text = await c.req.text();
  return c.text(text);
});

// ArrayBuffer
app.post("/binary", async (c) => {
  const buf = await c.req.arrayBuffer();
  return c.body(buf);
});
```

### Validated Data

When using a validator middleware (e.g., zod-validator):

```typescript
app.post("/users", validator("json", schema), (c) => {
  const data = c.req.valid("json"); // Typed validated data
  return c.json(data);
});
```

## Response Helpers

### c.text(text, status?)

```typescript
c.text("Hello");          // 200 text/plain
c.text("Not Found", 404); // 404 text/plain
```

### c.json(data, status?)

```typescript
c.json({ ok: true });          // 200 application/json
c.json({ error: "fail" }, 400); // 400 application/json
```

### c.html(html, status?)

```typescript
c.html("<h1>Hello</h1>");      // 200 text/html
```

### c.redirect(url, status?)

```typescript
c.redirect("/new-path");       // 302 redirect
c.redirect("/new-path", 301);  // 301 permanent redirect
```

### c.body(data, status?, headers?)

```typescript
c.body("raw body");
c.body(arrayBuffer, 200, { "Content-Type": "application/octet-stream" });
```

### c.notFound()

```typescript
app.get("/maybe", (c) => {
  if (!found) return c.notFound();
  return c.json(data);
});
```

## Setting Response Headers

```typescript
app.get("/", (c) => {
  c.header("X-Custom", "value");
  c.header("Cache-Control", "max-age=3600");
  return c.json({ ok: true });
});
```

## Status Code

```typescript
c.status(201);
return c.json({ created: true });
```

## Variables (per-request state)

```typescript
// Set in middleware
app.use(async (c, next) => {
  c.set("user", { id: 1, name: "Alice" });
  await next();
});

// Access in handler
app.get("/me", (c) => {
  const user = c.get("user");
  return c.json(user);
});
```

## c.req.url and c.req.path

```typescript
app.get("/info", (c) => {
  c.req.url;   // "http://localhost:3000/info?foo=bar"
  c.req.path;  // "/info"
  c.req.method; // "GET"
  return c.text("OK");
});
```
