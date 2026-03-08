# PlanetScale (/docs/v6/prisma-orm/add-to-existing-project/planetscale)

[PlanetScale](https://planetscale.com) is a serverless database platform. This guide covers **PlanetScale MySQL**, which is built on Vitess and offers database branching, non-blocking schema changes, and automatic backups. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to PlanetScale MySQL, introspect your existing database schema, and start querying with type-safe Prisma Client.

<CalloutContainer type="info">
  <CalloutDescription>
    PlanetScale also offers PostgreSQL databases. If you're using **PlanetScale PostgreSQL**, follow the [Add to existing PostgreSQL project guide](/v6/prisma-orm/add-to-existing-project/postgresql) instead.
  </CalloutDescription>
</CalloutContainer>

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
    npm install prisma @types/node --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma @types/node --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma @types/node --dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma @types/node --dev
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
    npm install @prisma/client @prisma/adapter-planetscale undici dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/client @prisma/adapter-planetscale undici dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/client @prisma/adapter-planetscale undici dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/client @prisma/adapter-planetscale undici dotenv
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db pull`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`@prisma/adapter-planetscale`** - The PlanetScale driver adapter that connects Prisma Client to your database
- **`undici`** - A fast HTTP/1.1 client required by the PlanetScale adapter
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
    npx prisma init --datasource-provider mysql --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma init --datasource-provider mysql --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma init --datasource-provider mysql --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma init --datasource-provider mysql --output ../generated/prisma
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
  provider     = "mysql"
  relationMode = "prisma"
}
```

<CalloutContainer type="info">
  <CalloutDescription>
    PlanetScale requires `relationMode = "prisma"` because it doesn't support foreign key constraints.
  </CalloutDescription>
</CalloutContainer>

3. Connect your database \[#3-connect-your-database]

Update the `.env` file with your PlanetScale connection URL:

```bash title=".env"
DATABASE_URL="mysql://username:password@host.connect.psdb.cloud/mydb?sslaccept=strict"
```

You can find your connection string in the PlanetScale dashboard.

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

5. Generate Prisma ORM types \[#5-generate-prisma-orm-types]

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

6. Instantiate Prisma Client \[#6-instantiate-prisma-client]

Create a utility file to instantiate Prisma Client. You need to pass an instance of Prisma ORM's driver adapter to the `PrismaClient` constructor:

```typescript title="lib/prisma.ts"
import "dotenv/config";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "../generated/prisma/client";
import { fetch as undiciFetch } from "undici";

const adapter = new PrismaPlanetScale({ url: process.env.DATABASE_URL, fetch: undiciFetch });
const prisma = new PrismaClient({ adapter });

export { prisma };
```

7. Query your database \[#7-query-your-database]

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

8. Evolve your schema \[#8-evolve-your-schema]

PlanetScale uses a branching workflow instead of traditional migrations. To make changes to your database schema:

8.1. Update your Prisma schema file \[#81-update-your-prisma-schema-file]

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

8.2. Push the changes to your development branch: \[#82-push-the-changes-to-your-development-branch]

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
    npx prisma db push
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma db push
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma db push
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma db push
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command will:

- Apply the schema changes to your PlanetScale database
- Regenerate Prisma Client

<CalloutContainer type="info">
  <CalloutDescription>
    For production deployments, use PlanetScale's [branching workflow](https://planetscale.com/docs/concepts/branching) to create deploy requests.
  </CalloutDescription>
</CalloutContainer>

9. Explore your data with Prisma Studio \[#9-explore-your-data-with-prisma-studio]

Next steps \[#next-steps]

More info \[#more-info]

- [PlanetScale database connector](/v6/orm/overview/databases/planetscale)
- [Prisma Config reference](/v6/orm/reference/prisma-config-reference)
- [Database introspection](/v6/orm/prisma-schema/introspection)
- [PlanetScale branching workflow](https://planetscale.com/docs/concepts/branching)
