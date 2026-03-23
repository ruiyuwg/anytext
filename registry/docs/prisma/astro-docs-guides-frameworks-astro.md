# Astro (/docs/guides/frameworks/astro)

Introduction \[#introduction]

Prisma ORM offers type-safe database access, and [Astro](https://astro.build/) is built for performance. Together with [Prisma Postgres](https://www.prisma.io/postgres), you get a fast, content-first stack with zero cold starts and end-to-end speed.

In this guide, you'll learn to integrate Prisma ORM with a Prisma Postgres database in an Astro project from scratch. You can find a complete example of this guide on [GitHub](https://github.com/prisma/prisma-examples/tree/latest/orm/astro).

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org)
- [Astro VSCode extension (recommended)](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

1. Set up your project \[#1-set-up-your-project]

Create a new Astro project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx create-astro@latest
```



```bash
pnpm dlx create-astro@latest
```



```bash
yarn dlx create-astro@latest
```



```bash
bunx --bun create-astro@latest
```





* *Where should we create your new project?* `astro-prisma`
* *How would you like to start your new project?* `Use minimal (empty) template `
* *Install dependencies? (recommended)* `Yes`
* *Initialize a new git repository? (optional)* `Yes`
````

Navigate into the newly created project directory:

```bash
cd astro-prisma
```

2. Install and Configure Prisma \[#2-install-and-configure-prisma]

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





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/orm/core-concepts/supported-databases/database-drivers).
````

Once installed, initialize Prisma in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db --output ../prisma/generated
```



```bash
pnpm dlx prisma init --db --output ../prisma/generated
```



```bash
yarn dlx prisma init --db --output ../prisma/generated
```



```bash
bunx --bun prisma init --db --output ../prisma/generated
```





You'll need to answer a few questions while setting up your Prisma Postgres database. Select the region closest to your location and a memorable name for your database like "My Astro Project"
````

This will create:

- A `prisma/` directory with a `schema.prisma` file
- A `prisma.config.ts` file for configuring Prisma
- A `.env` file with a `DATABASE_URL` already set

2.2. Define your Prisma Schema \[#22-define-your-prisma-schema]

In the `prisma/schema.prisma` file, add the following models and change the generator to use the `prisma-client` provider:

```prisma title="prisma/schema.prisma"
generator client {
  provider   = "prisma-client"
  output     = "../prisma/generated"
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
 // [!code ++]
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

2.3 Add dotenv to prisma.config.ts \[#23-add-dotenv-to-prismaconfigts]

To get access to the variables in the `.env` file, they can either be loaded by your runtime, or by using `dotenv`.
Include an import for `dotenv` at the top of the `prisma.config.ts`

```ts
import "dotenv/config"; // [!code ++]
import { defineConfig, env } from "prisma/config";
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

2.4. Run migrations and generate Prisma Client \[#24-run-migrations-and-generate-prisma-client]

Now, run the following command to create the database tables:

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
````

Then generate Prisma Client:

````
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

2.5. Seed the database \[#25-seed-the-database]

Let's add some seed data to populate the database with sample users and posts.

Create a new file called `seed.ts` in the `prisma/` directory:

```typescript title="prisma/seed.ts"
import { PrismaClient, Prisma } from "../prisma/generated/client";
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
  console.log("Starting to seed...");

  for (const u of userData) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
  }

  console.log("Seeding finished.");
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

```ts title="prisma.config.ts"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: `tsx prisma/seed.ts`,
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

3\. Integrate Prisma into Astro \[#3-integrate-prisma-into-astro]

3.1. Create TypeScript environment definitions \[#31-create-typescript-environment-definitions]

First, create an `env.d.ts` file in your `src` directory to provide TypeScript definitions for environment variables:

```typescript title="src/env.d.ts"
interface ImportMetaEnv {
  readonly DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

3.2. Create a Prisma Client \[#32-create-a-prisma-client]

Inside of `/src`, create a `lib` directory and a `prisma.ts` file inside it. This file will be used to create and export your Prisma Client instance.

```bash
mkdir src/lib
touch src/lib/prisma.ts
```

Set up the Prisma client like this:

```typescript title="src/lib/prisma.ts"
import { PrismaClient } from "../../prisma/generated/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: import.meta.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
```

```
We recommend using a connection pooler (like [Prisma Accelerate](https://www.prisma.io/accelerate)) to manage database connections efficiently.

If you choose not to use one, **avoid** instantiating `PrismaClient` globally in long-lived environments. Instead, create and dispose of the client per request to prevent exhausting your database connections.
```

3.3. Create an API route \[#33-create-an-api-route]

An API route is the best way to fetch data from your database in an Astro app.

Create a new file called `api/users.ts` in the `src/pages` directory:

```bash
mkdir src/pages/api
touch src/pages/api/users.ts
```

Now, create a GET route that fetches the `Users` data from your database, making sure to include each user's `Posts` by adding them to the `include` field:

```typescript title="src/pages/api/users.ts"
import type { APIRoute } from "astro";
import prisma from "../../lib/prisma";

export const GET: APIRoute = async () => {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};
```

3.4. Fetch the data from the API route (Recommended Method) \[#34-fetch-the-data-from-the-api-route-recommended-method]

Instead of using `fetch()` with HTTP requests, Astro recommends importing endpoint functions directly. This approach is more efficient and avoids URL parsing issues.

Start by creating a new type that combines the `User` and `Post` models called `UserWithPosts`:

```tsx title="src/pages/index.astro"
---
import type { User, Post } from "../../prisma/generated/client"; // [!code ++]
import { GET } from "./api/users.ts"; // [!code ++]
 // [!code ++]
type UserWithPosts = User & { posts: Post[] }; // [!code ++]
 // [!code ++]
const response = await GET(Astro); // [!code ++]
const users: UserWithPosts[] = await response.json(); // [!code ++]
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro + Prisma</title>
  </head>
  <body>
    <h1>Astro + Prisma</h1>
    <ul> // [!code ++]
      {users.map((user: UserWithPosts) => ( // [!code ++]
        <li> // [!code ++]
          <h2>{user.name}</h2> // [!code ++]
          <ul> // [!code ++]
            {user.posts.map((post: Post) => ( // [!code ++]
              <li>{post.title}</li> // [!code ++]
            ))} // [!code ++]
          </ul> // [!code ++]
        </li> // [!code ++]
      ))} // [!code ++]
    </ul> // [!code ++]
  </body>
</html>
```

3.5. Run your app \[#35-run-your-app]

Now start your development server to see your Astro app in action:

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

Open your browser at [`http://localhost:4321`](http://localhost:4321) to see the users and their posts displayed on the page.

Summary \[#summary]

You're done! You've just created an Astro app with Prisma that's connected to a Prisma Postgres database. Below are some next steps to explore, as well as some more resources to help you get started expanding your project.

Next Steps \[#next-steps]

Now that you have a working Astro app connected to a Prisma Postgres database, you can:

- Extend your Prisma schema with more models and relationships
- Add create/update/delete routes and forms
- Explore authentication and validation

More Info \[#more-info]

- [Prisma Documentation](/orm)
- [Astro Documentation](https://astro.build/docs)
