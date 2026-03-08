# CockroachDB (/docs/prisma-orm/add-to-existing-project/cockroachdb)

[CockroachDB](https://www.cockroachlabs.com/) is a distributed SQL database designed for cloud applications, offering horizontal scalability, strong consistency, and high availability. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to CockroachDB, introspect your existing database schema, and start querying with type-safe Prisma Client.

Prerequisites \[#prerequisites]

1. Set up Prisma ORM \[#1-set-up-prisma-orm]

Navigate to your existing project directory and install the required dependencies:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma @types/node @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
pnpm add prisma @types/node @types/pg --save-dev
pnpm add @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
yarn add prisma @types/node @types/pg --dev
yarn add @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
bun add prisma @types/node @types/pg --dev
bun add @prisma/client @prisma/adapter-pg pg dotenv
```
````

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db pull`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`@prisma/adapter-pg`** - The [`node-postgres` driver adapter](/orm/core-concepts/supported-databases/postgresql#using-driver-adapters) that connects Prisma Client to your database (CockroachDB is PostgreSQL-compatible)
- **`pg`** - The node-postgres database driver
- **`@types/pg`** - TypeScript type definitions for node-postgres
- **`dotenv`** - Loads environment variables from your `.env` file

2. Initialize Prisma ORM \[#2-initialize-prisma-orm]

Set up your Prisma ORM project by creating your [Prisma Schema](/orm/prisma-schema/overview) file with the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider cockroachdb --output ../generated/prisma
```



```bash
pnpm dlx prisma init --datasource-provider cockroachdb --output ../generated/prisma
```



```bash
yarn dlx prisma init --datasource-provider cockroachdb --output ../generated/prisma
```



```bash
bunx --bun prisma init --datasource-provider cockroachdb --output ../generated/prisma
```
````

This command does a few things:

- Creates a `prisma/` directory with a `schema.prisma` file containing your database connection configuration
- Creates a `.env` file in the root directory for environment variables
- Creates a `prisma.config.ts` file for Prisma configuration

The generated `prisma.config.ts` file looks like this:

```typescript title="prisma.config.ts"
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

The generated schema uses [the ESM-first `prisma-client` generator](/orm/prisma-schema/overview/generators#prisma-client) with a custom output path:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "cockroachdb"
}
```

3. Connect your database \[#3-connect-your-database]

Update the `.env` file with your CockroachDB connection URL:

```text title=".env"
DATABASE_URL="postgresql://user:password@host:26257/mydb?sslmode=require"
```

The [format of the connection URL](/orm/reference/connection-urls) for CockroachDB looks as follows:

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require
```

4. Introspect your database \[#4-introspect-your-database]

Run the following command to introspect your existing database:

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

This command reads the `DATABASE_URL` environment variable, connects to your database, and introspects the database schema. It then translates the database schema from SQL into a data model in your Prisma schema.

After introspection, your Prisma schema will contain models that represent your existing database tables.

5. Baseline your database \[#5-baseline-your-database]

To use Prisma Migrate with your existing database, you need to [baseline your database](/orm/prisma-migrate/getting-started).

First, create a `migrations` directory:

```bash
mkdir -p prisma/migrations/0_init
```

Next, generate the migration file with `prisma migrate diff`:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```



```bash
pnpm dlx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```



```bash
yarn dlx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```



```bash
bunx --bun prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
```
````

Review the generated migration file to ensure it matches your database schema.

Then, mark the migration as applied:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate resolve --applied 0_init
```



```bash
pnpm dlx prisma migrate resolve --applied 0_init
```



```bash
yarn dlx prisma migrate resolve --applied 0_init
```



```bash
bunx --bun prisma migrate resolve --applied 0_init
```
````

You now have a baseline for your current database schema.

6. Generate Prisma ORM types \[#6-generate-prisma-orm-types]

Generate Prisma Client based on your introspected schema:

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

This creates a type-safe Prisma Client tailored to your database schema in the `generated/prisma` directory.

7. Instantiate Prisma Client \[#7-instantiate-prisma-client]

Create a utility file to instantiate Prisma Client. You need to pass an instance of the Prisma ORM driver adapter adapter to the `PrismaClient` constructor:

```typescript title="lib/prisma.ts"
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
```

8. Query your database \[#8-query-your-database]

Now you can use Prisma Client to query your database. Create a `script.ts` file:

```typescript title="script.ts"
import { prisma } from "./lib/prisma";

async function main() {
  // Example: Fetch all records from a table
  // Replace 'user' with your actual model name
  const allUsers = await prisma.user.findMany();
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Run the script:

````
  npm



  pnpm



  yarn



  bun




```bash
npx tsx script.ts
```



```bash
pnpm dlx tsx script.ts
```



```bash
yarn dlx tsx script.ts
```



```bash
bunx --bun tsx script.ts
```
````

9\. Evolve your schema \[#9-evolve-your-schema]

To make changes to your database schema:

9.1. Update your Prisma schema file \[#91-update-your-prisma-schema-file]

Update your Prisma schema file to reflect the changes you want to make to your database schema. For example, add a new model:

```prisma title="prisma/schema.prisma"
model Post { // [!code ++]
  id        Int      @id @default(autoincrement()) // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean  @default(false) // [!code ++]
  authorId  Int // [!code ++]
  author    User     @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]

model User { // [!code ++]
  id    Int    @id @default(autoincrement()) // [!code ++]
  email String @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]
```

9.2. Create and apply a migration: \[#92-create-and-apply-a-migration]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name your_migration_name
```



```bash
pnpm dlx prisma migrate dev --name your_migration_name
```



```bash
yarn dlx prisma migrate dev --name your_migration_name
```



```bash
bunx --bun prisma migrate dev --name your_migration_name
```
````

This command will:

- Create a new SQL migration file
- Apply the migration to your database
- Regenerate Prisma Client

10. Explore your data \[#10-explore-your-data]

Explore the options suggested by [CockroachDB](https://www.cockroachlabs.com/blog/cockroachdb-gui-options/) to view and manage your data.

```
[Prisma Studio](/studio) does not currently support CockroachDB. Support may be added in a future release. See [Databases supported by Prisma Studio](/studio#supported-databases) for more information.
```

Next steps \[#next-steps]

You've successfully set up Prisma ORM. Here's what you can explore next:

- **Learn more about Prisma Client**: Explore the [Prisma Client API](/orm/prisma-client/setup-and-configuration/introduction) for advanced querying, filtering, and relations
- **Database migrations**: Learn about [Prisma Migrate](/orm/prisma-migrate) for evolving your database schema
- **Performance optimization**: Discover [query optimization techniques](/orm/prisma-client/queries/advanced/query-optimization-performance)
- **Build a full application**: Check out our [framework guides](/guides) to integrate Prisma ORM with Next.js, Express, and more
- **Join the community**: Connect with other developers on [Discord](https://pris.ly/discord)

More info \[#more-info]

- [CockroachDB database connector](/orm/core-concepts/supported-databases/postgresql#cockroachdb)
- [Prisma Config reference](/orm/reference/prisma-config-reference)
- [Database introspection](/orm/prisma-schema/introspection)
- [Prisma Migrate](/orm/prisma-migrate)
