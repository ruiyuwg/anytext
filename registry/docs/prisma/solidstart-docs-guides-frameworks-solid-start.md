# SolidStart (/docs/guides/frameworks/solid-start)

Introduction \[#introduction]

Prisma ORM streamlines database access with type-safe queries and a smooth developer experience. SolidStart, a modern framework for building reactive web apps with SolidJS, pairs well with Prisma and Postgres to create a clean and scalable full-stack architecture.

In this guide, you'll learn how to integrate Prisma ORM with a Prisma Postgres database in a SolidStart project from scratch. You can find a complete example of this guide on [GitHub](https://github.com/prisma/prisma-examples/tree/latest/orm/solid-start).

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org)

1. Set up your project \[#1-set-up-your-project]

Begin by creating a new SolidStart app. In your terminal, run:

````
  npm



  pnpm



  yarn



  bun




```bash
npm init solid@latest
```



```bash
pnpm create solid
```



```bash
yarn create solid
```



```bash
bunx create-solid
```
````

Use the following options when prompted:

```
* *Project name:* `my-solid-prisma-app`
* *Is this a SolidStart project:* `Yes`
* *Template:* `bare`
* *Use TypeScript:* `Yes`
```

Next, navigate into your new project, install dependencies, and start the development server:

````
  npm



  pnpm



  yarn



  bun




```bash
cd my-solid-prisma-app
npm install
npm run dev
```



```bash
cd my-solid-prisma-app
pnpm install
pnpm run dev
```



```bash
cd my-solid-prisma-app
yarn install
yarn dev
```



```bash
cd my-solid-prisma-app
bun install
bun run dev
```
````

Once the dev server is running, open `http://localhost:3000` in your browser. You should see the SolidStart welcome screen.

Clean up the default UI by editing the `app.tsx` file and replacing its content with the following code:

```typescript title="src/app.tsx"
import "./app.css";

export default function App() {
  return (
    <main>
      <h1>SolidStart + Prisma</h1>
    </main>
  );
}
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





You'll need to answer a few questions while setting up your Prisma Postgres database. Select the region closest to your location and a memorable name for your database like "My SolidStart Project"
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

3\. Integrate Prisma into SolidStart \[#3-integrate-prisma-into-solidstart]

3.1. Create a Prisma Client \[#31-create-a-prisma-client]

At the root of your project, create a new `lib` folder and a `prisma.ts` file inside it:

```bash
mkdir -p lib && touch lib/prisma.ts
```

Add the following code to create a Prisma Client instance:

```typescript title="lib/prisma.ts"
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
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

3.2. Create an API Route \[#32-create-an-api-route]

Now, let's fetch data from the database using an API route.

Create a new file at `src/routes/api/users.ts`:

```typescript title="src/routes/api/users.ts"
import prisma from "../../../lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
```

3.3. Fetch Data in Your Component \[#33-fetch-data-in-your-component]

In your `app.tsx` file, use `createResource` to fetch data from your new API route:

```typescript title="src/app.tsx"
import "./app.css";
import { createResource } from "solid-js"; // [!code ++]
import { User, Post } from "./generated/prisma/client"; // [!code ++]
 // [!code ++]
type UserWithPosts = User & { // [!code ++]
  posts: Post[]; // [!code ++]
}; // [!code ++]
 // [!code ++]
const fetchUsers = async () => { // [!code ++]
  const res = await fetch("http://localhost:3000/api/users"); // [!code ++]
  return res.json(); // [!code ++]
}; // [!code ++]

export default function App() {
  const [users, { mutate, refetch }] = createResource<UserWithPosts[]>(fetchUsers); // [!code ++]

  return (
    <main>
      <h1>SolidStart + Prisma</h1>
    </main>
  );
}
```

```
`createResource` is a SolidJS hook for managing async data. It tracks loading and error states automatically. [Learn more](https://docs.solidjs.com/reference/basic-reactivity/create-resource#createresource).
```

3.4. Display the Data \[#34-display-the-data]

To show the users and their posts, use SolidJS's `<For>` component:

```typescript title="src/app.tsx"
import "./app.css";
import { createResource, For } from "solid-js"; // [!code highlight]
import { User, Post } from "./generated/prisma/client";

type UserWithPosts = User & {
  posts: Post[];
};

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export default function App() {
  const [users, { mutate, refetch }] =
    createResource<UserWithPosts[]>(fetchUsers);

  return (
    <main>
      <h1>SolidJS + Prisma</h1>
      <For each={users() ?? []}> // [!code ++]
        {(user) => ( // [!code ++]
          <div> // [!code ++]
            <h3>{user.name}</h3> // [!code ++]
            <For each={user.posts}>{(post) => <p>{post.title}</p>}</For> // [!code ++]
          </div> // [!code ++]
        )} // [!code ++]
      </For> // [!code ++]
    </main>
  );
}
```

```
`<For>` loops through an array reactively. Think of it like `.map()` in React. [Learn more](https://docs.solidjs.com/reference/components/for)
```

3.5. Add Loading and Error States \[#35-add-loading-and-error-states]

Use SolidJS's `<Show>` component to handle loading and error conditions:

```typescript title="src/app.tsx"
import "./app.css";
import { createResource, For, Show } from "solid-js"; // [!code highlight]
import { User, Post } from "./generated/prisma/client";

type UserWithPosts = User & {
  posts: Post[];
};

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
};

export default function App() {
  const [users, { mutate, refetch }] =
    createResource<UserWithPosts[]>(fetchUsers);

  return (
    <main>
      <h1>SolidJS + Prisma</h1>
      <Show when={!users.loading} fallback={<p>Loading...</p>}> // [!code ++]
        <Show when={!users.error} fallback={<p>Error loading data</p>}> // [!code ++]
          <For each={users()}>
            {(user) => (
              <div>
                <h3>{user.name}</h3>
                <For each={user.posts}>{(post) => <p>{post.title}</p>}</For>
              </div>
            )}
          </For>
        </Show> // [!code ++]
      </Show> // [!code ++]
    </main>
  );
}
```

```
`<Show>` conditionally renders content. It's similar to an `if` statement. [Learn more](https://docs.solidjs.com/reference/components/show)
```

You're done! You've just created a SolidStart app connected to a Prisma Postgres database.

Next Steps \[#next-steps]

Now that you have a working SolidStart app connected to a Prisma Postgres database, you can:

- Extend your Prisma schema with more models and relationships
- Add create/update/delete routes and forms
- Explore authentication, validation, and optimistic updates
- Enable query caching with [Prisma Postgres](/postgres/database/caching) for better performance

More Info \[#more-info]

- [Prisma ORM Docs](/orm)
- [SolidStart Documentation](https://start.solidjs.com/)
