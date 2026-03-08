# MongoDB (/docs/v6/prisma-orm/add-to-existing-project/mongodb)

[MongoDB](https://www.mongodb.com/) is a popular document-based NoSQL database known for its flexibility, scalability, and developer-friendly features. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to MongoDB, introspect your existing database schema, and start querying with type-safe Prisma Client.

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

<CalloutContainer type="info">
  <CalloutDescription>
    If you're migrating to Prisma ORM from Mongoose, see our [Migrate from Mongoose guide](/v6/guides/migrate-from-mongoose).
  </CalloutDescription>
</CalloutContainer>

Prerequisites \[#prerequisites]

In order to successfully complete this guide, you need:

- [Node.js](https://nodejs.org/en/) installed on your machine (see [system requirements](/v6/orm/more/upgrades/to-v7#minimum-supported-nodejs--typescript-versions) for officially supported versions)
- An existing TypeScript project with a `package.json` file
- Access to a MongoDB 4.2+ server with a replica set deployment. We recommend using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

<CalloutContainer type="warning">
  <CalloutDescription>
    The MongoDB database connector uses transactions to support nested writes. Transactions **requires** a [replica set](https://www.mongodb.com/docs/manual/tutorial/deploy-replica-set/) deployment. The easiest way to deploy a replica set is with [Atlas](https://www.mongodb.com/docs/atlas/getting-started/). It's free to get started.
  </CalloutDescription>
</CalloutContainer>

Make sure you have your database [connection URL](/v6/orm/reference/connection-urls) (that includes your authentication credentials) at hand!

<CalloutContainer type="info">
  <CalloutDescription>
    If your project contains multiple directories with `package.json` files (e.g., `frontend`, `backend`, etc.), note that Prisma ORM is specifically designed for use in the API/backend layer. To set up Prisma, navigate to the appropriate backend directory containing the relevant `package.json` file and configure Prisma there.
  </CalloutDescription>
</CalloutContainer>

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

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db pull`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`dotenv`** - Loads environment variables from your `.env` file

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

- Creates a `prisma/` directory with a `schema.prisma` file containing your database connection configuration
- Creates a `.env` file in the root directory for environment variables
- Creates a `prisma.config.ts` file for Prisma configuration

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

3. Connect your database \[#3-connect-your-database]

Update the `.env` file with your MongoDB connection URL:

```bash title=".env"
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/mydb"
```

For MongoDB Atlas, the connection URL format is:

```
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/DATABASE
```

Self-hosted MongoDB connection URL format:

```
mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE
```

Connection URL components:

- **`USERNAME`**: Your database user name
- **`PASSWORD`**: Your database user password
- **`HOST`**: The host where [`mongod`](https://www.mongodb.com/docs/manual/reference/program/mongod/#mongodb-binary-bin.mongod) or [`mongos`](https://www.mongodb.com/docs/manual/reference/program/mongos/#mongodb-binary-bin.mongos) is running
- **`PORT`**: The port where your database server is running (typically `27017`)
- **`DATABASE`**: The name of your database

<CalloutContainer type="info">
  <CalloutDescription>
    For MongoDB Atlas, you can manually append the database name to the connection URL, as Atlas doesn't include it by default.
  </CalloutDescription>
</CalloutContainer>

Troubleshooting connection issues \[#troubleshooting-connection-issues]

Error in connector: SCRAM failure: Authentication failed. \[#error-in-connector-scram-failure-authentication-failed]

If you see the `Error in connector: SCRAM failure: Authentication failed.` error message, you can specify the source database for the authentication by [adding](https://github.com/prisma/prisma/discussions/9994#discussioncomment-1562283) `?authSource=admin` to the end of the connection string.

Raw query failed. Error code 8000 (AtlasError): empty database name not allowed. \[#raw-query-failed-error-code-8000-atlaserror-empty-database-name-not-allowed]

If you see the `Raw query failed. Code: unknown. Message: Kind: Command failed: Error code 8000 (AtlasError): empty database name not allowed.` error message, be sure to append the database name to the database URL. You can find more info in this [GitHub issue](https://github.com/prisma/web/issues/5562).

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

This command:

- Reads the `DATABASE_URL` from your `.env` file
- Connects to your MongoDB database
- Samples documents in your collections to infer the schema
- Generates Prisma models in your `schema.prisma` file

<img alt="Introspect your database with Prisma ORM" src="/img/getting-started/prisma-db-pull-generate-schema.png" width="1600" height="750" />

<CalloutContainer type="info">
  <CalloutDescription>
    **MongoDB introspection limitations:** Prisma introspects MongoDB by sampling documents. You may need to manually:

```
* Add relation fields using the `@relation` attribute
* Adjust field types if the sampling didn't capture all variations
* Add indexes and constraints not detected during introspection
```

  </CalloutDescription>
</CalloutContainer>

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

Create a utility file to instantiate Prisma Client:

```typescript title="lib/prisma.ts"
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

export { prisma };
```

7. Query your database \[#7-query-your-database]

Now you can use Prisma Client to query your database. Create a `script.ts` file:

```typescript title="script.ts"
import { prisma } from "./lib/prisma";

async function main() {
  // Example: Fetch all records from a collection
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

MongoDB doesn't support migrations like relational databases. Instead, use `db push` to sync schema changes:

8.1. Update your Prisma schema file \[#81-update-your-prisma-schema-file]

Modify your Prisma schema file with the changes you want. For example, add a new model:

```prisma title="prisma/schema.prisma"
model Post { // [!code ++]
  id        String   @id @default(auto()) @map("_id") @db.ObjectId // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean  @default(false) // [!code ++]
  authorId  String   @db.ObjectId // [!code ++]
  author    User     @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]

model User { // [!code ++]
  id    String @id @default(auto()) @map("_id") @db.ObjectId // [!code ++]
  email String @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]
```

<CalloutContainer type="info">
  <CalloutDescription>
    In MongoDB, the `id` field is mapped to `_id` and uses `@db.ObjectId` type. Relations use `String` type with `@db.ObjectId` annotation.
  </CalloutDescription>
</CalloutContainer>

8.2. Push the changes to your database \[#82-push-the-changes-to-your-database]

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

- Applies schema changes to your MongoDB database
- Automatically regenerates Prisma Client

<CalloutContainer type="info">
  <CalloutTitle>
    Why 

```
`db push`

 instead of migrations?
```

  </CalloutTitle>

  <CalloutDescription>
    MongoDB uses a flexible schema model. Prisma Migrate (which creates migration files) is not supported for MongoDB. Always use `prisma db push` to sync your schema changes.
  </CalloutDescription>
</CalloutContainer>

9. Explore your data \[#9-explore-your-data]

You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), the MongoDB shell, or MongoDB Compass to view and manage your data.

[Prisma Studio](/v6/orm/tools/prisma-studio) does not currently support MongoDB. Support may be added in a future release. See [Databases supported by Prisma Studio](/v6/orm/tools/prisma-studio#databases-supported-by-prisma-studio) for more information.

Next steps \[#next-steps]

More info \[#more-info]

- [MongoDB database connector](/v6/orm/overview/databases/mongodb)
- [Prisma Config reference](/v6/orm/reference/prisma-config-reference)
- [Database introspection](/v6/orm/prisma-schema/introspection)
