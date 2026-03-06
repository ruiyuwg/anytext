# Hono — Routing

## HTTP Methods

```typescript
import { Hono } from "hono";

const app = new Hono();

app.get("/posts", (c) => c.json([]));
app.post("/posts", (c) => c.json({ created: true }, 201));
app.put("/posts/:id", (c) => c.json({ updated: true }));
app.delete("/posts/:id", (c) => c.json({ deleted: true }));
app.patch("/posts/:id", (c) => c.json({ patched: true }));

// Match all methods
app.all("/any", (c) => c.text("Any method"));

// Match specific methods
app.on("PURGE", "/cache", (c) => c.text("Purged"));

// Match multiple methods
app.on(["PUT", "PATCH"], "/posts/:id", (c) => c.json({ updated: true }));
```

## Path Parameters

```typescript
// Single parameter
app.get("/users/:id", (c) => {
  const id = c.req.param("id");
  return c.json({ id });
});

// Multiple parameters
app.get("/posts/:postId/comments/:commentId", (c) => {
  const { postId, commentId } = c.req.param();
  return c.json({ postId, commentId });
});

// Optional parameter
app.get("/api/:version?/users", (c) => {
  const version = c.req.param("version") ?? "v1";
  return c.json({ version });
});
```

## Wildcards

```typescript
// Match any path under /api
app.get("/api/*", (c) => {
  return c.text("API catch-all");
});

// Access the wildcard value
app.get("/files/*", (c) => {
  const path = c.req.path; // e.g., "/files/images/photo.jpg"
  return c.text(`File: ${path}`);
});
```

## Route Grouping

```typescript
const app = new Hono();

// Group with basePath
const api = new Hono().basePath("/api");

api.get("/users", (c) => c.json([]));
api.get("/posts", (c) => c.json([]));

app.route("/", api);
// Creates: GET /api/users, GET /api/posts
```

### Nested Groups

```typescript
const app = new Hono();
const v1 = new Hono();
const users = new Hono();

users.get("/", (c) => c.json([]));
users.get("/:id", (c) => c.json({ id: c.req.param("id") }));

v1.route("/users", users);
app.route("/api/v1", v1);
// Creates: GET /api/v1/users, GET /api/v1/users/:id
```

## Chained Routes

```typescript
app
  .get("/posts", (c) => c.json([]))
  .post((c) => c.json({ created: true }, 201))
  .put((c) => c.json({ updated: true }));
```

## Route Priority

Routes are matched in the order they are defined. The first match wins:

```typescript
app.get("/users/me", (c) => c.json({ me: true }));    // Matched first
app.get("/users/:id", (c) => c.json({ id: c.req.param("id") })); // Fallback
```
