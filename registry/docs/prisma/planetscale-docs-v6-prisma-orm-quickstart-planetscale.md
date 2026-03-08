# PlanetScale (/docs/v6/prisma-orm/quickstart/planetscale)

[PlanetScale](https://planetscale.com) is a serverless database platform. This guide covers **PlanetScale MySQL**. In this guide, you will learn how to set up a new TypeScript project from scratch, connect it to PlanetScale MySQL using Prisma ORM, and generate a Prisma Client for easy, type-safe access to your database.

<CalloutContainer type="info">
  <CalloutDescription>
    PlanetScale also offers PostgreSQL databases. If you're using **PlanetScale PostgreSQL**, follow the [PostgreSQL quickstart guide](/v6/prisma-orm/quickstart/postgresql) instead.
  </CalloutDescription>
</CalloutContainer>

Prerequisites \[#prerequisites]

You also need:

- A [PlanetScale](https://planetscale.com) database
- Database connection string from PlanetScale

1. Create a new project \[#1-create-a-new-project]

2. Install required dependencies \[#2-install-required-dependencies]

Install the packages needed for this quickstart:

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

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma migrate`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`@prisma/adapter-planetscale`** - The PlanetScale driver adapter that connects Prisma Client to your database
- **`undici`** - A fast HTTP/1.1 client required by the PlanetScale adapter
- **`dotenv`** - Loads environment variables from your `.env` file

3. Configure ESM support \[#3-configure-esm-support]

Update `tsconfig.json` for ESM compatibility:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "target": "ES2023",
    "strict": true,
    "esModuleInterop": true,
    "ignoreDeprecations": "6.0"
  }
}
```

Update `package.json` to enable ESM:

```json title="package.json"
{
  "type": "module" // [!code ++]
}
```

4. Initialize Prisma ORM \[#4-initialize-prisma-orm]

You can now invoke the Prisma CLI by prefixing it with `npx`:

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
    npx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Next, set up your Prisma ORM project by creating your [Prisma Schema](/v6/orm/prisma-schema/overview) file with the following command:

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

- Creates a `prisma/` directory with a `schema.prisma` file containing your database connection and schema models
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
  provider = "mysql"
}
```

Update your schema to include `relationMode = "prisma"` for PlanetScale:

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

Update your `.env` file with your PlanetScale connection string:

```text title=".env"
DATABASE_URL="mysql://username:password@host.connect.psdb.cloud/mydb?sslaccept=strict"
```

Replace with your actual PlanetScale connection string from your database dashboard.

5. Define your data model \[#5-define-your-data-model]

Open `prisma/schema.prisma` and add the following models:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider     = "mysql"
  relationMode = "prisma"
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
  content   String? @db.Text // [!code ++]
  published Boolean @default(false) // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
  authorId  Int // [!code ++]

  @@index([authorId]) // [!code ++]
} // [!code ++]
```

<CalloutContainer type="info">
  <CalloutDescription>
    Note the `@@index([authorId])` on the `Post` model. PlanetScale requires indexes on foreign keys when using `relationMode = "prisma"`.
  </CalloutDescription>
</CalloutContainer>

6. Push your schema to PlanetScale \[#6-push-your-schema-to-planetscale]

PlanetScale uses a branching workflow instead of traditional migrations. Push your schema directly:

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

This command creates the database tables based on your schema.

Now run the following command to generate the Prisma Client:

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

7. Instantiate Prisma Client \[#7-instantiate-prisma-client]

Now that you have all the dependencies installed, you can instantiate Prisma Client. You need to pass an instance of Prisma ORM's driver adapter to the `PrismaClient` constructor:

```typescript title="lib/prisma.ts"
import "dotenv/config";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "../generated/prisma/client";
import { fetch as undiciFetch } from "undici";

const adapter = new PrismaPlanetScale({ url: process.env.DATABASE_URL, fetch: undiciFetch });
const prisma = new PrismaClient({ adapter });

export { prisma };
```

8. Write your first query \[#8-write-your-first-query]

Create a `script.ts` file to test your setup:

```typescript title="script.ts"
import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with a post
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: {
          title: "Hello World",
          content: "This is my first post!",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });
  console.log("Created user:", user);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
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

You should see the created user and all users printed to the console!

9. Explore your data with Prisma Studio \[#9-explore-your-data-with-prisma-studio]

Prisma Studio is a visual editor for your database. Launch it with:

```shell
npx prisma studio
```

This opens a web interface where you can view and edit your data.

<CalloutContainer type="info">
  <CalloutTitle>
    Supported databases
  </CalloutTitle>

  <CalloutDescription>
    Prisma Studio currently supports PostgreSQL, MySQL, and SQLite. For more details, see [Databases supported by Prisma Studio](/studio#supported-databases).
  </CalloutDescription>
</CalloutContainer>

Next steps \[#next-steps]

More info \[#more-info]

- [PlanetScale database connector](/v6/orm/overview/databases/planetscale)
- [Prisma Config reference](/v6/orm/reference/prisma-config-reference)
- [Database connection management](/v6/orm/prisma-client/setup-and-configuration/databases-connections)
