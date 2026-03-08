# Hono (/docs/v6/guides/hono)

Introduction \[#introduction]

Prisma ORM offers type-safe database access, and [Hono](https://hono.dev/) is built for fast, lightweight web apps. Together with [Prisma Postgres](https://www.prisma.io/postgres), you get a fast, lightweight backend, that can be deployed through Node.js, Cloudflare, or many other runtimes.

In this guide, you'll learn to integrate Prisma ORM with a Prisma Postgres database in a Hono backend application. You can find a complete example of this guide on [GitHub](https://github.com/prisma/prisma-examples/tree/latest/orm/hono).

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org)

1. Set up your project \[#1-set-up-your-project]

Create a new Hono project:

````
  npm



  pnpm



  yarn



  bun




```bash
npm create hono@latest
```



```bash
pnpm create hono
```



```bash
yarn create hono
```



```bash
bunx create-hono
```





* *Target directory?* `my-app`
* *Which template do you want to use?* `nodejs`
* *Install dependencies? (recommended)* `Yes`
* *Which package manager do you want to use?* `npm`
````

2\. Install and configure Prisma \[#2-install-and-configure-prisma]

2.1. Install dependencies \[#21-install-dependencies]

To get started with Prisma, you'll need to install a few dependencies:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma tsx @types/pg --save-dev
```



```bash
pnpm add prisma tsx @types/pg --save-dev
```



```bash
yarn add prisma tsx @types/pg --dev
```



```bash
bun add prisma tsx @types/pg --dev
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





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/v6/orm/overview/databases/database-drivers).
````

Once installed, initialize Prisma in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db --output ../src/generated/prisma
```



```bash
pnpm dlx prisma init --db --output ../src/generated/prisma
```



```bash
yarn dlx prisma init --db --output ../src/generated/prisma
```



```bash
bunx --bun prisma init --db --output ../src/generated/prisma
```





You'll need to answer a few questions while setting up your Prisma Postgres database. Select the region closest to your location and a memorable name for your database like "My Hono Project"
````

This will create:

- A `prisma/` directory with a `schema.prisma` file
- A `prisma.config.ts` with your Prisma configuration
- A `.env` file with a `DATABASE_URL` already set

2.2. Define your Prisma Schema \[#22-define-your-prisma-schema]

In the `prisma/schema.prisma` file, add the following models and change the generator to use the `prisma-client` provider:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User { // [!code ++]
  id    Int     @id @default(autoincrement()) // [!code ++]
  email String  @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]

model Post { // [!code ++]
  id        Int     @id @default(autoincrement()) // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean @default(false) // [!code ++]
  authorId  Int // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]
```

This creates two models: `User` and `Post`, with a one-to-many relationship between them.

In `prisma.config.ts`, import `dotenv` at the top of the file

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";
import "dotenv/config"; // [!code ++]

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

2.3. Configure the Prisma Client generator \[#23-configure-the-prisma-client-generator]

Now, run the following command to create the database tables and generate the Prisma Client:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name init
```



```bash
pnpm dlx prisma migrate dev --name init
```



```bash
yarn dlx prisma migrate dev --name init
```



```bash
bunx --bun prisma migrate dev --name init
```






  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate
```



```bash
pnpm dlx prisma generate
```



```bash
yarn dlx prisma generate
```



```bash
bunx --bun prisma generate
```
````

2.4. Seed the database \[#24-seed-the-database]

Let's add some seed data to populate the database with sample users and posts.

Create a new file called `seed.ts` in the `prisma/` directory:

```typescript title="prisma/seed.ts"
import { PrismaClient, Prisma } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Now, tell Prisma how to run this script by updating your `prisma.config.ts`:

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", // [!code ++]
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Run the seed script:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db seed
```



```bash
pnpm dlx prisma db seed
```



```bash
yarn dlx prisma db seed
```



```bash
bunx --bun prisma db seed
```
````

And open Prisma Studio to inspect your data:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio
```



```bash
pnpm dlx prisma studio
```



```bash
yarn dlx prisma studio
```



```bash
bunx --bun prisma studio
```
````

3\. Integrate Prisma into Hono \[#3-integrate-prisma-into-hono]

3.1. Create a Prisma middleware \[#31-create-a-prisma-middleware]

Inside of `/src`, create a `lib` directory and a `prisma.ts` file inside it. This file will be used to create and export your Prisma Client instance. Set up the Prisma client like this:

```tsx title="src/lib/prisma.ts"
import type { Context, Next } from "hono";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({
  connectionString: databaseUrl,
});

const prisma = new PrismaClient({ adapter });

function withPrisma(c: Context, next: Next) {
  if (!c.get("prisma")) {
    c.set("prisma", prisma);
  }
  return next();
}

export default withPrisma;
```

```
We recommend using a connection pooler (like [Prisma Accelerate](https://www.prisma.io/accelerate)) to manage database connections efficiently.

If you choose not to use one, in long-lived environments (for example, a Node.js server) instantiate a single `PrismaClient` and reuse it across requests to avoid exhausting database connections. In serverless environments or when using a pooler (for example, Accelerate), creating a client per request is acceptable.
```

3.2 Environment Variables & Types \[#32-environment-variables--types]

By default, Hono does not load any environment variables from a `.env`. `dotenv` handles this and will be read that file and expose them via `process.env`. Hono can get additional types to know that the `withPrisma` middleware will set a `prisma`
key on the Hono context

```ts title="src/index.ts"
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import type { PrismaClient } from "./generated/prisma/client.js"; // [!code ++]

type ContextWithPrisma = {
  // [!code ++]
  Variables: {
    // [!code ++]
    prisma: PrismaClient; // [!code ++]
  }; // [!code ++]
}; // [!code ++]

const app = new Hono<ContextWithPrisma>(); // [!code highlight]

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
```

If using Cloudflare Workers, the environment variables will automatically be set to Hono's contenxt, so `dotenv` can be skipped.

3.3. Create A GET Route \[#33-create-a-get-route]

Fetch data from the database using Hono's `app.get` function. This will perform any database queries
and return the data as JSON.

Create a new route inside of `src/index.ts`:

Now, create a GET route that fetches the `Users` data from your database, making sure to include each user's `Posts` by adding them to the `include` field:

```ts title="src/index.ts"
import withPrisma from "./lib/prisma.js";

app.get("/users", withPrisma, async (c) => {
  const prisma = c.get("prisma");
  const users = await prisma.user.findMany({
    include: { posts: true },
  });
  return c.json({ users });
});
```

3.4. Display The Data \[#34-display-the-data]

Start the Hono app by call the `dev` script in the `package.json`

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

There should be a "Server is running on <http://localhost:3000>" log printed out. From here, the data
can be viewed by visting `http://localhost:3000/users` or by running `curl` from the command line

```bash
curl http://localhost:3000/users | jq
```

You're done! You've created a Hono app with Prisma that's connected to a Prisma Postgres database.
For next steps there are some resources below for you to explore as well as next steps for expanding
your project.

Next Steps \[#next-steps]

Now that you have a working Hono app connected to a Prisma Postgres database, you can:

- Extend your Prisma schema with more models and relationships
- Add create/update/delete routes and forms
- Explore authentication and validation
- Enable query caching with [Prisma Postgres](/v6/postgres/database/caching) for better performance

More Info \[#more-info]

- [Prisma Documentation](/v6/orm/overview/introduction/what-is-prisma)
- [Hono Documentation](https://hono.dev/docs/)
