# Cloudflare Workers (/docs/guides/deployment/cloudflare-workers)

Introduction \[#introduction]

Prisma ORM provides type-safe database access, and [Cloudflare Workers](https://workers.cloudflare.com/) enables you to deploy serverless code at the edge. Together with [Prisma Postgres](https://www.prisma.io/postgres), you get a globally distributed backend with low-latency database access.

In this guide, you'll learn to integrate Prisma ORM with a Prisma Postgres database in a Cloudflare Workers project. You can find a complete example of this guide on [GitHub](https://github.com/prisma/prisma-examples/tree/latest/orm/cloudflare-workers).

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up/workers-and-pages)

1. Set up your project \[#1-set-up-your-project]

Create a new Cloudflare Workers project:

````
  npm



  pnpm



  yarn



  bun




```bash
npm create cloudflare@latest prisma-cloudflare-worker -- --type=hello-world --ts=true --git=true --deploy=false
```



```bash
pnpm create cloudflare prisma-cloudflare-worker --type=hello-world --ts=true --git=true --deploy=false
```



```bash
yarn create cloudflare prisma-cloudflare-worker --type=hello-world --ts=true --git=true --deploy=false
```



```bash
bunx create-cloudflare prisma-cloudflare-worker --type hello-world --ts=true --git=true --deploy=false
```
````

Navigate into the newly created project directory:

```bash
cd prisma-cloudflare-worker
```

2. Install and configure Prisma \[#2-install-and-configure-prisma]

2.1. Install dependencies \[#21-install-dependencies]

To get started with Prisma, you'll need to install a few dependencies:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma dotenv-cli @types/pg --save-dev
```



```bash
pnpm add prisma dotenv-cli @types/pg --save-dev
```



```bash
yarn add prisma dotenv-cli @types/pg --dev
```



```bash
bun add prisma dotenv-cli @types/pg --dev
```






  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
pnpm add @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
yarn add @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
bun add @prisma/client @prisma/adapter-pg dotenv pg
```





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/orm/core-concepts/supported-databases/database-drivers).
````

Once installed, initialize Prisma in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db
```



```bash
pnpm dlx prisma init --db
```



```bash
yarn dlx prisma init --db
```



```bash
bunx --bun prisma init --db
```





You'll need to answer a few questions while setting up your Prisma Postgres database. Select the region closest to your location and a memorable name for your database like "My Cloudflare Workers Project"
````

This will create:

- A `prisma/` directory with a `schema.prisma` file
- A `prisma.config.ts` file with your Prisma configuration
- A `.env` file with a `DATABASE_URL` already set

2.2. Enable Node.js compatibility in Cloudflare Workers \[#22-enable-nodejs-compatibility-in-cloudflare-workers]

Cloudflare Workers needs Node.js compatibility enabled to work with Prisma. Add the `nodejs_compat` compatibility flag to your `wrangler.jsonc`:

```json title="wrangler.jsonc"
{
  "name": "prisma-cloudflare-worker",
  "main": "src/index.ts",
  "compatibility_flags": ["nodejs_compat"], // [!code ++]
  "compatibility_date": "2024-01-01"
}
```

2.3. Define your Prisma Schema \[#23-define-your-prisma-schema]

In the `prisma/schema.prisma` file, add the following `User` model and set the runtime to `cloudflare`:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  runtime  = "cloudflare" // [!code ++]
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User { // [!code ++]
  id    Int    @id @default(autoincrement()) // [!code ++]
  email String // [!code ++]
  name  String // [!code ++]
} // [!code ++]
```

```
Both the `cloudflare` and `workerd` runtimes are supported. Read more about runtimes [here](/orm/prisma-schema/overview/generators#field-reference).
```

This creates a `User` model with an auto-incrementing ID, email, and name.

2.4. Configure Prisma scripts \[#24-configure-prisma-scripts]

Add the following scripts to your `package.json` to work with Prisma in the Cloudflare Workers environment:

```json title="package.json"
{
  "scripts": {
    "migrate": "prisma migrate dev", // [!code ++]
    "generate": "prisma generate", // [!code ++]
    "studio": "prisma studio" // [!code ++]
    // ... existing scripts
  }
}
```

2.5. Run migrations and generate Prisma Client \[#25-run-migrations-and-generate-prisma-client]

Now, run the following command to create the database tables:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run migrate
```



```bash
pnpm run migrate
```



```bash
yarn migrate
```



```bash
bun run migrate
```
````

When prompted, name your migration (e.g., `init`).

Then generate the Prisma Client:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run generate
```



```bash
pnpm run generate
```



```bash
yarn generate
```



```bash
bun run generate
```
````

This generates the Prisma Client in the `src/generated/prisma/client` directory.

3. Integrate Prisma into Cloudflare Workers \[#3-integrate-prisma-into-cloudflare-workers]

3.1. Import Prisma Client and configure types \[#31-import-prisma-client-and-configure-types]

At the top of `src/index.ts`, import the generated Prisma Client and the PostgreSQL adapter, and define the `Env` interface for type-safe environment variables:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client"; // [!code ++]
import { PrismaPg } from "@prisma/adapter-pg"; // [!code ++]
// [!code ++]
export interface Env {
  // [!code ++]
  DATABASE_URL: string; // [!code ++]
} // [!code ++]

export default {
  async fetch(request, env, ctx): Promise<Response> {
    return new Response("Hello World!");
  },
} satisfies ExportedHandler<Env>;
```

3.2. Handle favicon requests \[#32-handle-favicon-requests]

Add a check to filter out favicon requests, which browsers automatically send and can clutter your logs:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const path = new URL(request.url).pathname; // [!code ++]
    if (path === "/favicon.ico")
      // [!code ++]
      return new Response("Resource not found", {
        // [!code ++]
        status: 404, // [!code ++]
        headers: {
          // [!code ++]
          "Content-Type": "text/plain", // [!code ++]
        }, // [!code ++]
      }); // [!code ++]

    return new Response("Hello World!");
  },
} satisfies ExportedHandler<Env>;
```

3.3. Initialize the Prisma Client \[#33-initialize-the-prisma-client]

Create a database adapter and initialize Prisma Client with it. This must be done for each request in edge environments:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === "/favicon.ico")
      return new Response("Resource not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });

    const adapter = new PrismaPg({
      // [!code ++]
      connectionString: env.DATABASE_URL, // [!code ++]
    }); // [!code ++]
    // [!code ++]
    const prisma = new PrismaClient({
      // [!code ++]
      adapter, // [!code ++]
    }); // [!code ++]

    return new Response("Hello World!");
  },
} satisfies ExportedHandler<Env>;
```

```
In edge environments like Cloudflare Workers, you create a new Prisma Client instance per request. This is different from long-running Node.js servers where you typically instantiate a single client and reuse it.
```

3.4. Create a user and query the database \[#34-create-a-user-and-query-the-database]

Now use Prisma Client to create a new user and count the total number of users:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === "/favicon.ico")
      return new Response("Resource not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });

    const adapter = new PrismaPg({
      connectionString: env.DATABASE_URL,
    });

    const prisma = new PrismaClient({
      adapter,
    });

    const user = await prisma.user.create({
      // [!code ++]
      data: {
        // [!code ++]
        email: `Prisma-Postgres-User-${Math.ceil(Math.random() * 1000)}@gmail.com`, // [!code ++]
        name: "Jon Doe", // [!code ++]
      }, // [!code ++]
    }); // [!code ++]
    // [!code ++]
    const userCount = await prisma.user.count(); // [!code ++]

    return new Response("Hello World!");
  },
} satisfies ExportedHandler<Env>;
```

3.5. Return the results \[#35-return-the-results]

Finally, update the response to display the newly created user and the total user count:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const path = new URL(request.url).pathname;
    if (path === "/favicon.ico")
      return new Response("Resource not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });

    const adapter = new PrismaPg({
      connectionString: env.DATABASE_URL,
    });

    const prisma = new PrismaClient({
      adapter,
    });

    const user = await prisma.user.create({
      data: {
        email: `Prisma-Postgres-User-${Math.ceil(Math.random() * 1000)}@gmail.com`,
        name: "Jon Doe",
      },
    });

    const userCount = await prisma.user.count();

    return new Response(`\ // [!code highlight]
      Created new user: ${user.name} (${user.email}). // [!code highlight]
      Number of users in the database: ${userCount}. // [!code highlight]
    `); // [!code highlight]
  },
} satisfies ExportedHandler<Env>;
```

3.6. Test your Worker locally \[#36-test-your-worker-locally]

First, generate the TypeScript types for your Worker environment:

````
  npm



  pnpm



  yarn



  bun




```bash
npx wrangler types --no-strict-vars
```



```bash
pnpm dlx wrangler types --no-strict-vars
```



```bash
yarn dlx wrangler types --no-strict-vars
```



```bash
bunx --bun wrangler types --no-strict-vars
```
````

Then start the development server:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run dev
```



```bash
pnpm run dev
```



```bash
yarn dev
```



```bash
bun run dev
```
````

Open [`http://localhost:8787`](http://localhost:8787) in your browser. Each time you refresh the page, a new user will be created. You should see output similar to:

```
Created new user: Jon Doe (Prisma-Postgres-User-742@gmail.com).
Number of users in the database: 5.
```

3.7. Inspect your data with Prisma Studio \[#37-inspect-your-data-with-prisma-studio]

To view your database contents, open Prisma Studio:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run studio
```



```bash
pnpm run studio
```



```bash
yarn studio
```



```bash
bun run studio
```
````

This will open a browser window where you can view and edit your `User` table data.

4. Deploy to Cloudflare Workers \[#4-deploy-to-cloudflare-workers]

4.1. Set your database URL as a secret \[#41-set-your-database-url-as-a-secret]

Before deploying, you need to set your `DATABASE_URL` as a secret in Cloudflare Workers. This keeps your database connection string secure in production.

````
  npm



  pnpm



  yarn



  bun




```bash
npx wrangler secret put DATABASE_URL
```



```bash
pnpm dlx wrangler secret put DATABASE_URL
```



```bash
yarn dlx wrangler secret put DATABASE_URL
```



```bash
bunx --bun wrangler secret put DATABASE_URL
```
````

When prompted, paste your database connection string from the `.env` file.

4.2. Deploy your Worker \[#42-deploy-your-worker]

Deploy your Worker to Cloudflare:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run deploy
```



```bash
pnpm run deploy
```



```bash
yarn deploy
```



```bash
bun run deploy
```
````

Once deployed, Cloudflare will provide you with a URL where your Worker is live (e.g., `https://prisma-postgres-worker.your-subdomain.workers.dev`).

Visit the URL in your browser, and you'll see your Worker creating users in production!

Summary \[#summary]

You've successfully created a Cloudflare Workers application with Prisma ORM connected to a Prisma Postgres database. Your Worker is now running at the edge with low-latency database access.

Next steps \[#next-steps]

Now that you have a working Cloudflare Workers app connected to a Prisma Postgres database, you can:

- Add routes to handle different HTTP methods (GET, POST, PUT, DELETE)
- Extend your Prisma schema with more models and relationships
- Implement authentication and authorization
- Use [Hono](https://hono.dev/) for a more robust routing framework with Cloudflare Workers (see our [Hono guide](/guides/frameworks/hono))
- Enable query caching with [Prisma Postgres](/postgres/database/caching) for better performance

More info \[#more-info]

- [Prisma Documentation](/orm)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Deploy to Cloudflare](/orm/prisma-client/deployment/edge/deploy-to-cloudflare)
