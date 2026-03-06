# Hono — Middleware

## Custom Middleware

```typescript
import { Hono } from "hono";

const app = new Hono();

// Middleware runs before the handler
app.use(async (c, next) => {
  console.log(`${c.req.method} ${c.req.path}`);
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  c.header("X-Response-Time", `${ms}ms`);
});

// Path-scoped middleware
app.use("/api/*", async (c, next) => {
  const token = c.req.header("Authorization");
  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  await next();
});
```

## Built-in Middleware

### CORS

```typescript
import { cors } from "hono/cors";

// Allow all origins
app.use(cors());

// Configure
app.use(cors({
  origin: "https://example.com",
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400,
  credentials: true,
}));

// Multiple origins
app.use(cors({
  origin: ["https://example.com", "https://app.example.com"],
}));

// Dynamic origin
app.use(cors({
  origin: (origin) => origin.endsWith(".example.com") ? origin : null,
}));
```

### Bearer Auth

```typescript
import { bearerAuth } from "hono/bearer-auth";

app.use("/api/*", bearerAuth({ token: "my-secret-token" }));

// With custom verification
app.use("/api/*", bearerAuth({
  verifyToken: async (token, c) => {
    return token === await getValidToken();
  },
}));
```

### Basic Auth

```typescript
import { basicAuth } from "hono/basic-auth";

app.use("/admin/*", basicAuth({
  username: "admin",
  password: "secret",
}));
```

### JWT

```typescript
import { jwt } from "hono/jwt";

app.use("/api/*", jwt({ secret: "my-secret" }));

app.get("/api/me", (c) => {
  const payload = c.get("jwtPayload");
  return c.json(payload);
});
```

### Logger

```typescript
import { logger } from "hono/logger";

app.use(logger());
// Logs: <-- GET /
//       --> GET / 200 3ms
```

### Pretty JSON

```typescript
import { prettyJSON } from "hono/pretty-json";

app.use(prettyJSON());
// GET /api/users?pretty → formatted JSON output
```

### Compress

```typescript
import { compress } from "hono/compress";

app.use(compress());
```

### ETag

```typescript
import { etag } from "hono/etag";

app.use(etag());
```

### Secure Headers

```typescript
import { secureHeaders } from "hono/secure-headers";

app.use(secureHeaders());
// Sets X-Content-Type-Options, X-Frame-Options, etc.
```

## Error Handling

```typescript
import { HTTPException } from "hono/http-exception";

// Throw HTTP errors
app.get("/protected", (c) => {
  throw new HTTPException(403, { message: "Forbidden" });
});

// Global error handler
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ error: err.message }, err.status);
  }
  console.error(err);
  return c.json({ error: "Internal Server Error" }, 500);
});

// Not found handler
app.notFound((c) => {
  return c.json({ error: "Not Found" }, 404);
});
```

## Middleware Execution Order

Middleware executes in the order it's registered. Use `await next()` to pass control to the next middleware or handler:

```typescript
app.use(async (c, next) => {
  // Before handler
  console.log("1. First middleware - before");
  await next();
  // After handler
  console.log("4. First middleware - after");
});

app.use(async (c, next) => {
  console.log("2. Second middleware - before");
  await next();
  console.log("3. Second middleware - after");
});
```
