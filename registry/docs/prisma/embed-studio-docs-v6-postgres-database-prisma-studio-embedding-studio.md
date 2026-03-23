# Embed Studio (/docs/v6/postgres/database/prisma-studio/embedding-studio)

Embed Prisma Studio in your own application \[#embed-prisma-studio-in-your-own-application]

Prisma Studio can be embedded in your own application via the [`@prisma/studio-core`](https://www.npmjs.com/package/@prisma/studio-core) package.

It provides `Studio`, a React component which renders Prisma Studio for your database. The `Studio` component accepts an executor that calls a `/studio` endpoint in your backend. The backend uses your `DATABASE_URL` (connection string) to connect to the correct Prisma Postgres instance and execute the SQL query.

```
If you want to see what embedded Studio looks like, **[check out the demo](https://github.com/prisma/studio-core-demo) on GitHub**!
```

Use cases \[#use-cases]

You can embed Prisma Studio in your own app in various scenarios:

- Create an quick admin dashboard for editing data
- Multi-tenant application where every user has their own DB
- Provide an easy way to view and edit data to your users

Prerequisites \[#prerequisites]

- Frontend: A React application
- Backend:
  - A server-side application to expose the `/studio` endpoint (e.g. with Express or Hono)
  - A Prisma Postgres instance (you can create one with `npx prisma init --db`)

    The embeddable version of Prisma Studio will be available for other databases in combination with Prisma ORM soon.

Installation \[#installation]

Install the npm package:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/studio-core
```



```bash
pnpm add @prisma/studio-core
```



```bash
yarn add @prisma/studio-core
```



```bash
bun add @prisma/studio-core
```
````

Frontend setup \[#frontend-setup]

In your React app, you can use the `Studio` component to render the tables in your database via Prisma Studio. It receives an *executor* which is responsible for packaging the current SQL query in an HTTP request (also allowing for custom headers/payloads) and sending it to the `/studio` endpoint in your backend.

> Check out the [demo](https://github.com/prisma/studio-core-demo/blob/main/frontend/index.tsx) on GitHub for a full reference implementation.

Minimal implementation \[#minimal-implementation]

Here's what a minimal implementation looks like:

```tsx
import { Studio } from "@prisma/studio-core/ui";
import { createPostgresAdapter } from "@prisma/studio-core/data/postgres-core";
import { createStudioBFFClient } from "@prisma/studio-core/data/bff";
import "@prisma/studio-core/ui/index.css";

function App() {
  const adapter = useMemo(() => {
    // 1. Create a client that points to your backend endpoint
    const executor = createStudioBFFClient({
      url: "http://localhost:4242/studio",
    });

    // 2. Create a Postgres adapter with the executor
    const adapter = createPostgresAdapter({ executor });
    return adapter;
  }, []);

  return (
    <Layout>
      <Studio adapter={adapter} />
    </Layout>
  );
}
```

Custom headers/payload implementation \[#custom-headerspayload-implementation]

Here's what an implementation with custom headers/payload looks like:

```tsx
import { Studio } from "@prisma/studio-core/ui";
import { createPostgresAdapter } from "@prisma/studio-core/data/postgres-core";
import { createStudioBFFClient } from "@prisma/studio-core/data/bff";
import "@prisma/studio-core/ui/index.css";

function App() {
  const adapter = useMemo(() => {
    // 1. Create a client that points to your backend endpoint
    const executor = createStudioBFFClient({
      url: "http://localhost:4242/studio",
      customHeaders: {
        "X-Custom-Header": "example-value", // Pass any custom headers
      },
      customPayload: {
        customValue: "example-value", // Pass any custom data
      },
    });

    // 2. Create a Postgres adapter with the executor
    const adapter = createPostgresAdapter({ executor });
    return adapter;
  }, []);

  return (
    <Layout>
      <Studio adapter={adapter} />
    </Layout>
  );
}
```

Custom styling \[#custom-styling]

You can customize the look and feel of Prisma Studio so that it matches your application’s design. This is done by passing a custom theme to the `Studio` component. A theme is simply a set of CSS variables that define colors, spacing, and other style properties for both light and dark modes.

Here's an example of applying a custom theme:

```tsx
import { Studio } from "@prisma/studio-core/ui";
import { createPostgresAdapter } from "@prisma/studio-core/data/postgres-core";
import { createStudioBFFClient } from "@prisma/studio-core/data/bff";
import "@prisma/studio-core/ui/index.css";

const customTheme = `
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 20 14.3% 4.1%;
    --primary: 47.9 95.8% 53.1%;
    --primary-foreground: 26 83.3% 14.1%;
    --border: 20 5.9% 90%;
    --input: 20 5.9% 90%;
    --ring: 20 14.3% 4.1%;
    --radius: 0rem;
  }

  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 60 9.1% 97.8%;
    --primary: 47.9 95.8% 53.1%;
    --primary-foreground: 26 83.3% 14.1%;
    --border: 12 6.5% 15.1%;
    --input: 12 6.5% 15.1%;
    --ring: 35.5 91.7% 32.9%;
  }
}
`;

function App() {
  const adapter = useMemo(() => {
    const executor = createStudioBFFClient({
      url: "http://localhost:4242/studio",
    });
    return createPostgresAdapter({ executor });
  }, []);

  return (
    <Layout>
      <Studio theme={customTheme} adapter={adapter} />
    </Layout>
  );
}
```

With this setup, Studio inherits your custom colors, borders, and typography rules, making it feel like a natural part of your app rather than a separate tool. You can define as many or as few variables as you need depending on the level of customization you want.

Concepts \[#concepts]

Here's an overview of the key concepts in your frontend:

- **Executor**: The bridge between Studio and your backend, it's created using the `createStudioBFFClient` function
- **Adapter**: Handles Postgres-specific query formatting
- **Custom headers**: Pass authentication tokens, user info, etc.
- **Custom payload**: Send additional context/data with each request

Backend setup \[#backend-setup]

Your backend needs to expose a `/studio` endpoint where the frontend sends its requests. The implementation below uses `createPrismaPostgresHttpClient` from `@prisma/studio-core`.

The backend also needs to have access to the Prisma Postgres API key, we recommend setting it as an environment variable as a best practice.

> Check out the [demo](https://github.com/prisma/studio-core-demo/blob/main/server/index.ts) on GitHub for a full reference implementation.

Minimal implementation \[#minimal-implementation-1]

Here's what a minimal implementation for the `/studio` endpoint looks like with [Hono](https://hono.dev/). This assumes that your connection URL is available via the `DATABASE_URL` env var:

```ts
import { Hono } from "hono";
import { createPrismaPostgresHttpClient } from "@prisma/studio-core/data/ppg";
import { serializeError } from "@prisma/studio-core/data/bff";

const app = new Hono().use("*", cors());

app.post("/studio", async (c) => {
  // 1. Extract the query and custom data from the request
  const { query } = await c.req.json();

  // 2. Read DB URL from env vars
  const url = process.env.DATABASE_URL;

  // 3. Execute the query against Prisma Postgres
  const [error, results] = await createPrismaPostgresHttpClient({ url }).execute(query);

  // 6. Return results or errors
  if (error) {
    return c.json([serializeError(error)]);
  }

  return c.json([null, results]);
});
```

Custom headers/payload implementation \[#custom-headerspayload-implementation-1]

Here's what a slightly more advanced implementation for the `/studio` endpoint looks like with [Hono](https://hono.dev/). In this case, a multi-tenant scenario is assumed where the frontend sends over a user ID and authentication token which is used on the backend to determine the Prisma Postgres instance that belongs to that user via a hypothetical `determineUrlFromContext` function:

```ts
// server/index.ts
import { Hono } from "hono";
import { createPrismaPostgresHttpClient } from "@prisma/studio-core/data/ppg";
import { serializeError } from "@prisma/studio-core/data/bff";

const app = new Hono().use("*", cors());

app.post("/studio", async (c) => {
  // 1. Extract the query and custom data from the request
  const { query, customPayload } = await c.req.json();

  // 2. Access custom headers (great for auth!)
  const customHeader = c.req.header("X-Custom-Header");
  console.log("Received headers:", { customHeader });

  // 3. Use custom payload data
  console.log("Received value:", customPayload.customValue);

  // 4. Determine the URL (this is where you'd implement your auth logic)
  const url = determineUrlFromContext(customHeader, customPayload);

  // 5. Execute the query using Prisma Postgres or Prisma Accelerate
  const [error, results] = await createPrismaPostgresHttpClient({ url }).execute(query);

  // 6. Return results or errors
  if (error) {
    return c.json([serializeError(error)]);
  }

  return c.json([null, results]);
});
```

Concepts \[#concepts-1]

- Query object: Contains the SQL query and parameters from Studio
- Custom payload: Additional data sent with each request
- Prisma Postgres client: Executes queries against your database
- Error handling: Properly serialize errors for Studio to display

Execution flow \[#execution-flow]

Here's an overview of the execution flow in your embedded Prisma Studio version:

Adding user authentication \[#adding-user-authentication]

When you want to authenticate the users of your app against Prisma Studio, you can do that by adding custom logic around your embedded Prisma Studio version.

On the frontend, you can ensure to pass the `Authorization` header and other data (e.g. a user ID) when creating the executor:

```tsx
const executor = createStudioBFFClient({
  url: "http://localhost:4242/studio",
  customHeaders: {
    "X-User-ID": currentUser.id,
    Authorization: `Bearer ${userToken}`,
  },
});
```

In your server-side implementation, you can then retrieve these values from the incoming request and extract the Prisma Postgres API key that's needed for this user's query:

```typescript
const userId = c.req.header("X-User-ID");
const token = c.req.header("Authorization");

const userApiKey = await getUserApiKey(userId, token);
```

Licensing \[#licensing]

Embeddable Prisma Studio (Free) is licensed under Apache 2.0.

✔️ Free for production use\
⚠️ Prisma branding must remain visible and unaltered\
🔐 To remove our branding or to inquire about upcoming partner-only features, ping us here: <partnerships@prisma.io>

Telemetry \[#telemetry]

This package includes anonymized telemetry to help us improve Prisma Studio.\
Use implies consent. Learn more in our [Privacy Policy](https://www.prisma.io/privacy).

# Prisma Studio (/docs/v6/postgres/database/prisma-studio)

Overview \[#overview]

Prisma Postgres comes with Prisma Studio built-in. You can use it in several ways:

- Run `npx prisma studio --url "postgresql://user:password@localhost:5432/dbname"` to use Studio locally on your machine (also works with any other database)
- Find the **Studio** tab in your project in the [Prisma Console](https://console.prisma.io) to use Studio online
- Install the [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) to use Studio directly in VS Code
- [Embed Prisma Studio](/v6/postgres/database/prisma-studio/embedding-studio) in your own app (e.g. as an admin dashboard)

  If you want to use Prisma Studio with another database than Prisma Postgres, check the docs [here](/v6/orm/tools/prisma-studio).

# Studio in VS Code (/docs/v6/postgres/database/prisma-studio/studio-in-vs-code)

Overview \[#overview]

You can use Prisma Studio directly in VS Code via the [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma).

```
Supported databases



Prisma Studio currently supports PostgreSQL, MySQL, and SQLite. Support for CockroachDB and MongoDB is not available yet but may be added in future releases.

For detailed database support information, including SQLite requirements, see [Databases supported by Prisma Studio](/v6/orm/tools/prisma-studio#databases-supported-by-prisma-studio).
```

Usage \[#usage]

1. Install the [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
2. Find the **Prisma logo** in the VS Code Activity Bar
3. Sign in to [Prisma Console](https://console.prisma.io)
4. Once authenticated, select the database you want to explore in Prisma Studio
