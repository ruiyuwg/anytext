# SvelteKit (/docs/v6/guides/sveltekit)

Introduction \[#introduction]

Prisma ORM simplifies database access with type-safe queries, and when paired with [SvelteKit](https://svelte.dev/docs/kit), it creates a robust and scalable full-stack architecture.

In this guide, you'll learn to integrate Prisma ORM with a Prisma Postgres database in a SvelteKit project from scratch. You can find a complete example of this guide on [GitHub](https://github.com/prisma/prisma-examples/tree/latest/orm/sveltekit).

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org)
- [Svelte VSCode extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) (Recommended by Svelte)

1. Set up your project \[#1-set-up-your-project]

You'll be using [Svelte CLI](https://github.com/sveltejs/cli) instead of `npx create svelte@latest`. This CLI provides a more interactive setup and built-in support for popular tooling like ESLint and Prettier

Create a new Svelte project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx sv create sveltekit-prisma
```



```bash
pnpm dlx sv create sveltekit-prisma
```



```bash
yarn dlx sv create sveltekit-prisma
```



```bash
bunx --bun sv create sveltekit-prisma
```
````

It will prompt you to customize your setup. Here are the options you'll choose:

```
* *Which template would you like?* `SvelteKit minimal`
* *Add type checking with TypeScript?* `Yes, using TypeScript syntax`
* *What would you like to add to your project?*
  * `prettier`
  * `eslint`
* *Which package manager do you want to install dependencies with?* `npm`
```

Once the setup completes, navigate into your project and start the development server:

````
  npm



  pnpm



  yarn



  bun




```bash
cd sveltekit-prisma
npm run dev
```



```bash
cd sveltekit-prisma
pnpm run dev
```



```bash
cd sveltekit-prisma
yarn dev
```



```bash
cd sveltekit-prisma
bun run dev
```
````

That's it! Svelte makes it a very simple process to get up and running. At this point, your project is ready to integrate Prisma and connect to a Prisma Postgres database.

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





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/v6/orm/overview/databases/database-drivers).
````

Once installed, initialize Prisma in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db --output src/generated/prisma
```



```bash
pnpm dlx prisma init --db --output src/generated/prisma
```



```bash
yarn dlx prisma init --db --output src/generated/prisma
```



```bash
bunx --bun prisma init --db --output src/generated/prisma
```





You'll need to answer a few questions while setting up your Prisma Postgres database. Select the region closest to your location and a memorable name for your database like "My SvelteKit Project"
````

This will create:

- A `prisma` directory with a `schema.prisma` file.
- A `prisma.config.ts` file for configuring Prisma
- A Prisma Postgres database.
- A `.env` file containing the `DATABASE_URL` at the project root.
- An `output` directory for the generated Prisma Client as `src/generated/prisma`.

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

2.4. Configure the Prisma Client generator \[#24-configure-the-prisma-client-generator]

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

2.5. Seed the database \[#25-seed-the-database]

Add some seed data to populate the database with sample users and posts.

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

main();
```

Now, tell Prisma how to run this script by updating your `prisma.config.ts`:

```ts title="prisma.config.ts"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: `tsx prisma/seed.ts`, // [!code ++]
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

3\. Integrate Prisma into SvelteKit \[#3-integrate-prisma-into-sveltekit]

3.1. Create a Prisma Client \[#31-create-a-prisma-client]

Inside your `/src/lib` directory, rename `index.ts` to `prisma.ts`. This file will be used to create and export your Prisma Client instance.

```
Files in `src/lib` can be accessed from anywhere using the `$lib` alias.
```

The `DATABASE_URL` is stored in the `.env` file. To access it, you'll need to import it from the [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) namespace.

Set up the Prisma client like this:

```tsx title="src/lib/prisma.ts"
import { PrismaClient } from "../generated/prisma/client.js";
import { DATABASE_URL } from "$env/static/private";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: DATABASE_URL,
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

3.2. Create a server route \[#32-create-a-server-route]

To fetch data from the database on the server side, create a `+page.server.ts` file in your `routes` directory. This file should export a `load` function, which runs on the server before your page renders.

Use the `findMany()` method within a basic `load` function to get a list of users.

Update your `+page.server.ts` file like this:

```typescript title="src/routes/+page.server.ts"
import prisma from "$lib/prisma";

export async function load() {
  const users = await prisma.user.findMany({});
  return {
    users,
  };
}
```

At this point, you're only getting data directly on the `User` model — no relations like posts are included yet.

To also fetch each user's posts, we can expand the query using the `include` option. This tells Prisma to join the related `Posts` table in the result.

Update your `findMany()` call like this:

```typescript title="src/routes/+page.server.ts"
import prisma from "$lib/prisma";

export async function load() {
  const users = await prisma.user.findMany({
    include: {
      // [!code ++]
      posts: true, // [!code ++]
    }, // [!code ++]
  });

  return {
    users,
  };
}
```

Now, every user in the result will also include a `posts` array.

3.3. Populate the page \[#33-populate-the-page]

In `src/routes/+page.svelte`, strip the file down to the basics and add a `<script>` fragment. The file should look like this:

```html title="src/routes/+page.svelte"
<script lang="ts"></script>

<h1>SvelteKit + Prisma</h1>
```

We need to grab the data exported from `+page.server.ts`:

```html title="src/routes/+page.svelte"
<script lang="ts">
  let { data } = $props(); // [!code ++]
</script>

<h1>SvelteKit + Prisma</h1>
```

Now that we have the data, let's map through the users and their posts with Svelte's [`each`](https://svelte.dev/docs/svelte/each) block:

```html title="src/routes/+page.svelte"
<script lang="ts">
  let { data } = $props();
</script>

<h1>SvelteKit + Prisma</h1>

{#each data.users as user}
<!-- [!code ++] -->
<h2>{user.name}</h2>
<!-- [!code ++] -->
{#each user.posts as post}
<!-- [!code ++] -->
<ul>
  <!-- [!code ++] -->
  <li><a href="{post.content}">{post.title}</a></li>
  <!-- [!code ++] -->
</ul>
<!-- [!code ++] -->
{/each} {/each}
<!-- [!code ++] -->
```

You're done! You've just created a SvelteKit app with Prisma ORM. Below are some next steps to explore, as well as some more resources to help you get started expanding your project.

Next Steps \[#next-steps]

Now that you have a working SvelteKit app connected to a Prisma Postgres database, you can:

- Extend your Prisma schema with more models and relationships
- Add create/update/delete routes and forms
- Explore authentication and validation
- Enable query caching with [Prisma Postgres](/v6/postgres/database/caching) for better performance

More Info \[#more-info]

- [Prisma Documentation](/v6/orm/overview/introduction/what-is-prisma)
- [SvelteKit Documentation](https://svelte.dev/docs/kit)
