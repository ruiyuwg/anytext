# MongoDB (/docs/v6/prisma-orm/quickstart/mongodb)

[MongoDB](https://www.mongodb.com) is a popular NoSQL document database. In this guide, you will learn how to set up a new TypeScript project from scratch, connect it to MongoDB using Prisma ORM, and generate a Prisma Client for easy, type-safe access to your database.

<CalloutContainer type="warning">
  <CalloutTitle>
    MongoDB support for Prisma ORM v7
  </CalloutTitle>

  <CalloutDescription>
    **MongoDB support for Prisma ORM v7 is coming in the near future.** In the meantime, please use **Prisma ORM v6.19** (the latest v6 release) when working with MongoDB.

```
This guide uses Prisma ORM v6.19 to ensure full compatibility with MongoDB.
```

  </CalloutDescription>
</CalloutContainer>

Prerequisites \[#prerequisites]

- Node.js installed in your system [with the supported version](/v6/orm/more/upgrades/to-v7#minimum-supported-nodejs--typescript-versions)
- A [MongoDB](https://www.mongodb.com/) database accessible via connection string

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
    npm install prisma@6.19 @types/node --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma@6.19 @types/node --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma@6.19 @types/node --dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma@6.19 @types/node --dev
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
    npm install @prisma/client@6.19 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/client@6.19 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/client@6.19 dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/client@6.19 dotenv
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutTitle>
    Why Prisma v6.19?
  </CalloutTitle>

  <CalloutDescription>
    This is the latest stable version of Prisma ORM v6 that fully supports MongoDB. MongoDB support for Prisma ORM v7 is coming soon.

```
You can also install `prisma@6` and `@prisma/client@6` to automatically get the latest v6 release.
```

  </CalloutDescription>
</CalloutContainer>

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db push`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`dotenv`** - Loads environment variables from your `.env` file

<CalloutContainer type="info">
  <CalloutDescription>
    MongoDB doesn't require driver adapters since Prisma ORM connects directly to MongoDB.
  </CalloutDescription>
</CalloutContainer>

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
    npx prisma init --datasource-provider mongodb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma init --datasource-provider mongodb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma init --datasource-provider mongodb --output ../generated/prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma init --datasource-provider mongodb --output ../generated/prisma
    ```
  </CodeBlockTab>
</CodeBlockTabs>

This command does a few things:

- Creates a `prisma/` directory with a `schema.prisma` file for your database connection and schema models
- Creates a `.env` file in the root directory for environment variables
- Creates a `prisma.config.ts` file for Prisma configuration

<CalloutContainer type="info">
  <CalloutDescription>
    Prisma Client will be generated in the `generated/prisma/` directory when you run `npx prisma generate` later in this guide.
  </CalloutDescription>
</CalloutContainer>

The generated `prisma.config.ts` file looks like this:

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Add `dotenv` to `prisma.config.ts` so that Prisma can load environment variables from your `.env` file:

```typescript title="prisma.config.ts"
import "dotenv/config"; // [!code ++]
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
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
  provider = "mongodb"
  url = env("DATABASE_URL")
}
```

Update your `.env` file with your MongoDB connection string:

```text title=".env"
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/mydb"
```

<CalloutContainer type="info">
  <CalloutDescription>
    Replace `username`, `password`, `cluster`, and `mydb` with your actual MongoDB credentials and database name. You can get your connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or your MongoDB deployment.
  </CalloutDescription>
</CalloutContainer>

5. Define your data model \[#5-define-your-data-model]

Open `prisma/schema.prisma` and add the following models:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "mongodb"
  url = env("DATABASE_URL")
}

model User { // [!code ++]
  id    String  @id @default(auto()) @map("_id") @db.ObjectId // [!code ++]
  email String  @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]

model Post { // [!code ++]
  id        String  @id @default(auto()) @map("_id") @db.ObjectId // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean @default(false) // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
  authorId  String  @db.ObjectId // [!code ++]
} // [!code ++]
```

6. Push your schema to MongoDB \[#6-push-your-schema-to-mongodb]

MongoDB doesn't support migrations like relational databases. Instead, use `db push` to sync your schema:

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

This command:

- Creates the collections in MongoDB based on your schema
- Automatically generates Prisma Client

<CalloutContainer type="info">
  <CalloutDescription>
    Unlike relational databases, MongoDB uses a flexible schema. The `db push` command ensures your Prisma schema is reflected in your database without creating migration files.
  </CalloutDescription>
</CalloutContainer>

7. Instantiate Prisma Client \[#7-instantiate-prisma-client]

Now that you have all the dependencies installed, you can instantiate Prisma Client:

```typescript title="lib/prisma.ts"
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

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

9. Explore your data \[#9-explore-your-data]

You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), the MongoDB shell, or MongoDB Compass to view and manage your data.

[Prisma Studio](/v6/orm/tools/prisma-studio) does not currently support MongoDB. Support may be added in a future release. See [Databases supported by Prisma Studio](/v6/orm/tools/prisma-studio#databases-supported-by-prisma-studio) for more information.

Next steps \[#next-steps]

Troubleshooting \[#troubleshooting]

Error in connector: SCRAM failure: Authentication failed. \[#error-in-connector-scram-failure-authentication-failed]

If you see the `Error in connector: SCRAM failure: Authentication failed.` error message, you can specify the source database for the authentication by [adding](https://github.com/prisma/prisma/discussions/9994#discussioncomment-1562283) `?authSource=admin` to the end of the connection string.

Raw query failed. Error code 8000 (AtlasError): empty database name not allowed. \[#raw-query-failed-error-code-8000-atlaserror-empty-database-name-not-allowed]

If you see the `Raw query failed. Code: unknown. Message: Kind: Command failed: Error code 8000 (AtlasError): empty database name not allowed.` error message, be sure to append the database name to the database URL. You can find more info in this [GitHub issue](https://github.com/prisma/web/issues/5562).

More info \[#more-info]

- [MongoDB database connector](/v6/orm/overview/databases/mongodb)
- [MongoDB data modeling patterns](/v6/orm/overview/databases/mongodb#type-mapping-between-mongodb-and-the-prisma-schema)
- [MongoDB deployment considerations](/v6/orm/overview/databases/mongodb#differences-to-connectors-for-relational-databases)
