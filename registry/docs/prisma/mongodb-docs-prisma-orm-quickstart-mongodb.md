# MongoDB (/docs/prisma-orm/quickstart/mongodb)

[MongoDB](https://www.mongodb.com) is a popular NoSQL document database. In this guide, you will learn how to set up a new TypeScript project from scratch, connect it to MongoDB using Prisma ORM, and generate a Prisma Client for easy, type-safe access to your database.

```
MongoDB support for Prisma ORM v7



**MongoDB support for Prisma ORM v7 is coming in the near future.** In the meantime, please use **Prisma ORM v6.19** (the latest v6 release) when working with MongoDB.

This guide uses Prisma ORM v6.19 to ensure full compatibility with MongoDB.
```

Prerequisites \[#prerequisites]

- Node.js installed in your system [with the supported version](/guides/upgrade-prisma-orm/v6#minimum-supported-nodejs-versions)
- A [MongoDB](https://www.mongodb.com/) database accessible via connection string

1. Create a new project \[#1-create-a-new-project]

```shell
mkdir hello-prisma
cd hello-prisma
```

Initialize a TypeScript project:

````
  npm



  pnpm



  yarn



  bun




```bash
npm init -y
npm install typescript tsx @types/node --save-dev
npx tsc --init
```



```bash
npm init -y
npm install typescript tsx @types/node --save-dev
pnpm dlx tsc --init
```



```bash
npm init -y
npm install typescript tsx @types/node --save-dev
yarn dlx tsc --init
```



```bash
npm init -y
npm install typescript tsx @types/node --save-dev
bun x tsc --init
```
````

2\. Install required dependencies \[#2-install-required-dependencies]

Install the packages needed for this quickstart:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma@6.19 @types/node --save-dev
```



```bash
pnpm add prisma@6.19 @types/node --save-dev
```



```bash
yarn add prisma@6.19 @types/node --dev
```



```bash
bun add prisma@6.19 @types/node --dev
```






  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client@6.19 dotenv
```



```bash
pnpm add @prisma/client@6.19 dotenv
```



```bash
yarn add @prisma/client@6.19 dotenv
```



```bash
bun add @prisma/client@6.19 dotenv
```





Why Prisma v6.19?



This is the latest stable version of Prisma ORM v6 that fully supports MongoDB. MongoDB support for Prisma ORM v7 is coming soon. You can also install `prisma@6` and `@prisma/client@6` to automatically get the latest v6 release.
````

Here's what each package does:

- **`prisma`** - The Prisma CLI for running commands like `prisma init`, `prisma db push`, and `prisma generate`
- **`@prisma/client`** - The Prisma Client library for querying your database
- **`dotenv`** - Loads environment variables from your `.env` file

  MongoDB doesn't require driver adapters since Prisma ORM connects directly to MongoDB.

3. Configure ESM support \[#3-configure-esm-support]

Update `tsconfig.json` for ESM compatibility:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "bundler",
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

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma
```



```bash
pnpm dlx prisma
```



```bash
yarn dlx prisma
```



```bash
bunx --bun prisma
```
````

Next, set up your Prisma ORM project by creating your [Prisma Schema](/orm/prisma-schema/overview) file with the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider mongodb --output ../generated/prisma
```



```bash
pnpm dlx prisma init --datasource-provider mongodb --output ../generated/prisma
```



```bash
yarn dlx prisma init --datasource-provider mongodb --output ../generated/prisma
```



```bash
bunx --bun prisma init --datasource-provider mongodb --output ../generated/prisma
```
````

This command does a few things:

- Creates a `prisma/` directory with a `schema.prisma` file for your database connection and schema models
- Creates a `.env` file in the root directory for environment variables
- Creates a `prisma.config.ts` file for Prisma configuration

  Prisma Client will be generated in the `generated/prisma/` directory when you run `npx prisma generate` later in this guide.

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

The generated schema uses [the ESM-first `prisma-client` generator](/orm/prisma-schema/overview/generators#prisma-client) with a custom output path:

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

```
Replace `username`, `password`, `cluster`, and `mydb` with your actual MongoDB credentials and database name. You can get your connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or your MongoDB deployment.
```

5\. Define your data model \[#5-define-your-data-model]

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

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push
```



```bash
pnpm dlx prisma db push
```



```bash
yarn dlx prisma db push
```



```bash
bunx --bun prisma db push
```
````

This command:

- Creates the collections in MongoDB based on your schema
- Automatically generates Prisma Client

  Unlike relational databases, MongoDB uses a flexible schema. The `db push` command ensures your Prisma schema is reflected in your database without creating migration files.

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

You should see the created user and all users printed to the console!

9. Explore your data \[#9-explore-your-data]

You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), the MongoDB shell, or MongoDB Compass to view and manage your data.

```
[Prisma Studio](/studio) does not currently support MongoDB. Support may be added in a future release. See [Databases supported by Prisma Studio](/studio#supported-databases) for more information.
```

Next steps \[#next-steps]

You've successfully set up Prisma ORM. Here's what you can explore next:

- **Learn more about Prisma Client**: Explore the [Prisma Client API](/orm/prisma-client/setup-and-configuration/introduction) for advanced querying, filtering, and relations
- **Database migrations**: Learn about [Prisma Migrate](/orm/prisma-migrate) for evolving your database schema
- **Performance optimization**: Discover [query optimization techniques](/orm/prisma-client/queries/advanced/query-optimization-performance)
- **Build a full application**: Check out our [framework guides](/guides) to integrate Prisma ORM with Next.js, Express, and more
- **Join the community**: Connect with other developers on [Discord](https://pris.ly/discord)

Troubleshooting \[#troubleshooting]

- **Authentication failed** — If you see a `SCRAM failure: Authentication failed` error, [add `?authSource=admin`](https://github.com/prisma/prisma/discussions/9994#discussioncomment-1562283) to the end of your connection string.
- **Empty database name** — If you see an `Error code 8000 (AtlasError): empty database name not allowed` error, append the database name to your connection URL. See this [GitHub issue](https://github.com/prisma/web/issues/5562) for details.

More info \[#more-info]

- [MongoDB database connector](/orm/core-concepts/supported-databases/mongodb)
- [MongoDB data modeling patterns](/orm/core-concepts/supported-databases/mongodb#type-mapping-between-mongodb-and-the-prisma-schema)
- [MongoDB deployment considerations](/orm/core-concepts/supported-databases/mongodb#differences-to-connectors-for-relational-databases)
