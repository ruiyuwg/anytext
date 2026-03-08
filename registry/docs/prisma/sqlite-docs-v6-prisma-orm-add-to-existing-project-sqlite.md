# SQLite (/docs/v6/prisma-orm/add-to-existing-project/sqlite)

[SQLite](https://sqlite.org) is a lightweight, file-based database that's perfect for development, prototyping, and small applications. It requires no setup and stores data in a local file. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to SQLite, introspect your existing database schema, and start querying with type-safe Prisma Client.

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
    npm install prisma @types/node @types/better-sqlite3 --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma @types/node @types/better-sqlite3 --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma @types/node @types/better-sqlite3 --dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma @types/node @types/better-sqlite3 --dev
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
    npm install @prisma/client @prisma/adapter-better-sqlite3 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/client @prisma/adapter-better-sqlite3 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/client @prisma/adapter-better-sqlite3 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/client @prisma/adapter-better-sqlite3 dotenv
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db pull`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`@prisma/adapter-better-sqlite3`** - The SQLite driver adapter that connects Prisma Client to your database
- **`@types/better-sqlite3`** - TypeScript type definitions for better-sqlite3
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
    npx prisma init --datasource-provider sqlite --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma init --datasource-provider sqlite --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma init --datasource-provider sqlite --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma init --datasource-provider sqlite --output ../generated/prisma
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
  provider = "sqlite"
}
```

A `.env` file should be created with the following value:

```text title=".env"
DATABASE_URL="file:./dev.db"
```

3. Connect your database \[#3-connect-your-database]

Update the `.env` file to point to your existing SQLite database file:

```bash title=".env"
DATABASE_URL="file:./path/to/your/database.db"
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
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
```

<CalloutContainer type="info">
  <CalloutTitle>
    Using SQLite with Bun
  </CalloutTitle>

  <CalloutDescription>
    Bun doesn't support the native SQLite driver that `better-sqlite3` relies on (see the [`node:sqlite` reference](https://bun.com/reference/node/sqlite)). When targeting Bun, use the `@prisma/adapter-libsql` adapter instead:

````
```ts
import "dotenv/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? "",
});

const prisma = new PrismaClient({ adapter });

export { prisma };
```
````

  </CalloutDescription>
</CalloutContainer>

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

10. Explore your data with Prisma Studio \[#10-explore-your-data-with-prisma-studio]

<CalloutContainer type="info">
  <CalloutTitle>
    SQLite requirements for Prisma Studio
  </CalloutTitle>

  <CalloutDescription>
    * File paths must have a `file:` protocol right now in the database url for SQLite
    * **Node.js 22.5+**: Works out of the box with the built-in `node:sqlite` module
      * May require `NODE_OPTIONS=--experimental-sqlite` environment variable
    * **Node.js 20**: Requires installing `better-sqlite3` as a dependency
      * If using pnpm 10+ with `pnpx`, you'll need the [`--allow-build=better-sqlite3`](https://pnpm.io/cli/dlx#--allow-build) flag
    * **Deno >= 2.2**: Supported via [built-in SQLite module](https://docs.deno.com/api/node/sqlite/)
    * **Bun**: Support for Prisma Studio with SQLite is coming soon and is not available yet
  </CalloutDescription>
</CalloutContainer>

<CalloutContainer type="info">
  <CalloutTitle>
    Using 

```
`npx`

 with 

`better-sqlite3`
```

  </CalloutTitle>

  <CalloutDescription>
    If you don't have `node:sqlite` available in your runtime or prefer not to install `better-sqlite3` as a hard dependency (it adds \~10MB), you can use `npx` to temporarily install the required packages:

````
<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx -p better-sqlite3 -p prisma prisma studio --url file:./path/to/your/database.db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx -p better-sqlite3 -p prisma prisma studio --url file:./path/to/your/database.db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx -p better-sqlite3 -p prisma prisma studio --url file:./path/to/your/database.db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun -p better-sqlite3 -p prisma prisma studio --url file:./path/to/your/database.db
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command:

* Temporarily installs `better-sqlite3` without adding it to your project dependencies
* Runs Prisma Studio with the specified SQLite database file
* Avoids the 10MB overhead of `better-sqlite3` in your project
````

  </CalloutDescription>
</CalloutContainer>

Next steps \[#next-steps]

More info \[#more-info]

- [SQLite database connector](/v6/orm/overview/databases/sqlite)
- [Prisma Config reference](/v6/orm/reference/prisma-config-reference)
- [Database introspection](/v6/orm/prisma-schema/introspection)
- [Prisma Migrate](/v6/orm/prisma-migrate/getting-started)
