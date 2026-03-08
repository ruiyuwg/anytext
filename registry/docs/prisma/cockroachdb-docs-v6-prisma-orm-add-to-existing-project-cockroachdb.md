# CockroachDB (/docs/v6/prisma-orm/add-to-existing-project/cockroachdb)

[CockroachDB](https://www.cockroachlabs.com/) is a distributed SQL database designed for cloud applications, offering horizontal scalability, strong consistency, and high availability. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to CockroachDB, introspect your existing database schema, and start querying with type-safe Prisma Client.

Prerequisites \[#prerequisites]

1. Set up Prisma ORM \[#1-set-up-prisma-orm]

Navigate to your existing project directory and install the required dependencies:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma @types/node @types/pg --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma @types/node @types/pg --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma @types/node @types/pg --dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma @types/node @types/pg --dev
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/client @prisma/adapter-pg pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/client @prisma/adapter-pg pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/client @prisma/adapter-pg pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/client @prisma/adapter-pg pg dotenv
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db pull`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`@prisma/adapter-pg`** - The [`node-postgres` driver adapter](/v6/orm/overview/databases/postgresql#using-the-node-postgres-driver) that connects Prisma Client to your database (CockroachDB is PostgreSQL-compatible)
- **`pg`** - The node-postgres database driver
- **`@types/pg`** - TypeScript type definitions for node-postgres
- **`dotenv`** - Loads environment variables from your `.env` file

2. Initialize Prisma ORM \[#2-initialize-prisma-orm]

Set up your Prisma ORM project by creating your [Prisma Schema](/v6/orm/prisma-schema/overview) file with the following command:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma init --datasource-provider cockroachdb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma init --datasource-provider cockroachdb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma init --datasource-provider cockroachdb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma init --datasource-provider cockroachdb --output ../generated/prisma
    ```
  </CodeBlockTab>
</CodeBlockTabs>

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

The generated schema uses [the ESM-first `prisma-client` generator](/v6/orm/prisma-schema/overview/generators#prisma-client) with a custom output path:

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

```bash title=".env"
DATABASE_URL="postgresql://user:password@host:26257/mydb?sslmode=require"
```

The [format of the connection URL](/v6/orm/reference/connection-urls) for CockroachDB looks as follows:

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require
```

4. Introspect your database \[#4-introspect-your-database]

Run the following command to introspect your existing database:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma db pull
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma db pull
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma db pull
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma db pull
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command reads the `DATABASE_URL` environment variable, connects to your database, and introspects the database schema. It then translates the database schema from SQL into a data model in your Prisma schema.

<img alt="Introspect your database with Prisma ORM" src="/img/getting-started/prisma-db-pull-generate-schema.png" width="1600" height="750" />

After introspection, your Prisma schema will contain models that represent your existing database tables.

5. Baseline your database \[#5-baseline-your-database]

To use Prisma Migrate with your existing database, you need to [baseline your database](/v6/orm/prisma-migrate/getting-started).

First, create a `migrations` directory:

```bash
mkdir -p prisma/migrations/0_init
```

Next, generate the migration file with `prisma migrate diff`:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Review the generated migration file to ensure it matches your database schema.

Then, mark the migration as applied:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma migrate resolve --applied 0_init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate resolve --applied 0_init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate resolve --applied 0_init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate resolve --applied 0_init
    ```
  </CodeBlockTab>
</CodeBlockTabs>

You now have a baseline for your current database schema.

6. Generate Prisma ORM types \[#6-generate-prisma-orm-types]

Generate Prisma Client based on your introspected schema:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This creates a type-safe Prisma Client tailored to your database schema in the `generated/prisma` directory.

7. Instantiate Prisma Client \[#7-instantiate-prisma-client]

Create a utility file to instantiate Prisma Client. You need to pass an instance of Prisma ORM's driver adapter to the `PrismaClient` constructor:

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

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx tsx script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx tsx script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx tsx script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun tsx script.ts
    ```
  </CodeBlockTab>
</CodeBlockTabs>

9. Evolve your schema \[#9-evolve-your-schema]

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

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma migrate dev --name your_migration_name
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma migrate dev --name your_migration_name
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma migrate dev --name your_migration_name
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma migrate dev --name your_migration_name
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command will:

- Create a new SQL migration file
- Apply the migration to your database
- Regenerate Prisma Client

10. Explore your data \[#10-explore-your-data]

Explore the options suggested by [CockroachDB](https://www.cockroachlabs.com/blog/cockroachdb-gui-options/) to view and manage your data.

[Prisma Studio](/v6/orm/tools/prisma-studio) does not currently support CockroachDB. Support may be added in a future release. See [Databases supported by Prisma Studio](/v6/orm/tools/prisma-studio#databases-supported-by-prisma-studio) for more information.

Next steps \[#next-steps]

More info \[#more-info]

- [CockroachDB database connector](/v6/orm/overview/databases/cockroachdb)
- [Prisma Config reference](/v6/orm/reference/prisma-config-reference)
- [Database introspection](/v6/orm/prisma-schema/introspection)
- [Prisma Migrate](/v6/orm/prisma-migrate/getting-started)
