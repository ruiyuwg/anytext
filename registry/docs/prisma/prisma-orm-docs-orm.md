# Prisma ORM (/docs/orm)

Prisma ORM is [open-source](https://github.com/prisma/prisma) and consists of:

- [**Prisma Client**](/orm/prisma-client/setup-and-configuration/introduction): Auto-generated, type-safe **ORM interface**
- [**Prisma Migrate**](/orm/prisma-migrate): Database migration system
- [**Prisma Studio**](https://www.prisma.io/studio): GUI to view and edit your data

Prisma Client works with any Node.js or TypeScript backend, whether you're deploying to traditional servers, serverless functions, or microservices.

Why Prisma ORM \[#why-prisma-orm]

Traditional database tools force a tradeoff between **productivity** and **control**. Raw SQL gives full control but is error-prone and lacks type safety. Traditional ORMs improve productivity but abstract too much, leading to the [object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object-relational_impedance_mismatch) and performance pitfalls like the n+1 problem.

Prisma takes a different approach:

- **Type-safe queries** validated at compile time with full autocompletion
- **Thinking in objects** without the complexity of mapping relational data
- **Plain JavaScript objects** returned from queries, not complex model instances
- **Single source of truth** in the Prisma schema for database and application models
- **Healthy constraints** that prevent common pitfalls and anti-patterns

When to use Prisma \[#when-to-use-prisma]

**Prisma is a good fit if you:**

- Build server-side applications (REST, GraphQL, gRPC, serverless)
- Value type safety and developer experience
- Work in a team and want a clear, declarative schema
- Need migrations, querying, and data modeling in one toolkit

**Consider alternatives if you:**

- Need full control over every SQL query (use raw SQL drivers)
- Want a no-code backend (use a BaaS like Supabase or Firebase)
- Need an auto-generated CRUD GraphQL API (use Hasura or PostGraphile)

How it works \[#how-it-works]

1. Define your schema \[#1-define-your-schema]

The [Prisma schema](/orm/prisma-schema/overview) defines your data models and database connection:

```prisma
datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client"
  output   = "./generated"
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}
```

2. Configure your connection \[#2-configure-your-connection]

Create a `prisma.config.ts` file in your project root:

```ts title="prisma.config.ts"
import "dotenv/config";
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

3. Run migrations \[#3-run-migrations]

Use [Prisma Migrate](/orm/prisma-migrate) to create and apply migrations:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev
```



```bash
pnpm dlx prisma migrate dev
```



```bash
yarn dlx prisma migrate dev
```



```bash
bunx --bun prisma migrate dev
```
````

Or [introspect](/orm/prisma-schema/introspection) an existing database:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db pull
```



```bash
pnpm dlx prisma db pull
```



```bash
yarn dlx prisma db pull
```



```bash
bunx --bun prisma db pull
```
````

4\. Query with Prisma Client \[#4-query-with-prisma-client]

Generate and use the type-safe client:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client
npx prisma generate
```



```bash
pnpm add @prisma/client
pnpm dlx prisma generate
```



```bash
yarn add @prisma/client
yarn dlx prisma generate
```



```bash
bun add @prisma/client
bun x prisma generate
```
````

```ts
import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient();

// Find all users with their posts
const users = await prisma.user.findMany({
  include: { posts: true },
});

// Create a user with a post
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    posts: {
      create: { title: "Hello World" },
    },
  },
});
```

Next steps \[#next-steps]

- [**Prisma schema**](/orm/prisma-schema/overview) - Learn the schema language
- [**Prisma Client**](/orm/prisma-client/setup-and-configuration/introduction) - Explore the query API
