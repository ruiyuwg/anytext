# PlanetScale (/docs/prisma-orm/add-to-existing-project/planetscale)

[PlanetScale](https://planetscale.com) is a serverless database platform. This guide covers both **PlanetScale MySQL** and **PlanetScale Postgres**. In this guide, you will learn how to add Prisma ORM to an existing TypeScript project, connect it to PlanetScale, introspect your existing database schema, and start querying with type-safe Prisma Client.

Prerequisites \[#prerequisites]

1. Set up Prisma ORM \[#1-set-up-prisma-orm]

Navigate to your existing project directory and install the required dependencies:

MySQL \[#mysql]

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma @types/node --save-dev
npm install @prisma/client @prisma/adapter-planetscale undici dotenv
```



```bash
pnpm add prisma @types/node --save-dev
pnpm add @prisma/client @prisma/adapter-planetscale undici dotenv
```



```bash
yarn add prisma @types/node --dev
yarn add @prisma/client @prisma/adapter-planetscale undici dotenv
```



```bash
bun add prisma @types/node --dev
bun add @prisma/client @prisma/adapter-planetscale undici dotenv
```
````

Postgres \[#postgres]

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
pnpm add prisma @types/pg --save-dev
pnpm add @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
yarn add prisma @types/pg --dev
yarn add @prisma/client @prisma/adapter-pg pg dotenv
```



```bash
bun add prisma @types/pg --dev
bun add @prisma/client @prisma/adapter-pg pg dotenv
```
````

2\. Initialize Prisma ORM \[#2-initialize-prisma-orm]

Set up your Prisma ORM project by creating your [Prisma Schema](/orm/prisma-schema/overview) file with the following command:

MySQL \[#mysql-1]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider mysql --output ../generated/prisma
```



```bash
pnpm dlx prisma init --datasource-provider mysql --output ../generated/prisma
```



```bash
yarn dlx prisma init --datasource-provider mysql --output ../generated/prisma
```



```bash
bunx --bun prisma init --datasource-provider mysql --output ../generated/prisma
```
````

Postgres \[#postgres-1]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```



```bash
pnpm dlx prisma init --datasource-provider postgresql --output ../generated/prisma
```



```bash
yarn dlx prisma init --datasource-provider postgresql --output ../generated/prisma
```



```bash
bunx --bun prisma init --datasource-provider postgresql --output ../generated/prisma
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

````
  MySQL



  Postgres




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



```prisma title="prisma/schema.prisma" 
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}
```





**PlanetScale MySQL** requires `relationMode = "prisma"` because it doesn't support foreign key constraints.
````

3\. Connect your database \[#3-connect-your-database]

Update the `.env` file with your PlanetScale connection URL:

````
  MySQL



  Postgres




```text title=".env" 
DATABASE_URL="mysql://username:password@host.connect.psdb.cloud/mydb?sslaccept=strict"
```



```text title=".env" 
DATABASE_URL="postgresql://{username}:{password}@{host}:6432/postgres?sslmode=verify-full"
```
````

You can find your connection string in the PlanetScale dashboard.

```
**PlanetScale Postgres connection types:**

| Type          | Port   | Use case                                                       |
| ------------- | ------ | -------------------------------------------------------------- |
| **Direct**    | `5432` | Prisma CLI commands (migrations, introspection), Prisma Studio |
| **PgBouncer** | `6432` | Application connections, serverless environments               |

For production applications, we recommend using PgBouncer (port 6432) for application connections.
```

4\. Introspect your database \[#4-introspect-your-database]

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

5. Generate Prisma ORM types \[#5-generate-prisma-orm-types]

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

6. Instantiate Prisma Client \[#6-instantiate-prisma-client]

Create a utility file to instantiate Prisma Client. You need to pass an instance of the Prisma ORM driver adapter adapter to the `PrismaClient` constructor:

````
  MySQL



  Postgres




```typescript title="lib/prisma.ts" 
import "dotenv/config";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "../generated/prisma/client";
import { fetch as undiciFetch } from "undici";

const adapter = new PrismaPlanetScale({ url: process.env.DATABASE_URL, fetch: undiciFetch });
const prisma = new PrismaClient({ adapter });

export { prisma };
```



```typescript title="lib/prisma.ts" 
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
```
````

7\. Query your database \[#7-query-your-database]

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

8\. Evolve your schema \[#8-evolve-your-schema]

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

This command will:

- Apply the schema changes to your PlanetScale database
- Regenerate Prisma Client

  For production deployments, use PlanetScale's [branching workflow](https://planetscale.com/docs/concepts/branching) to create deploy requests.

9. Explore your data with Prisma Studio \[#9-explore-your-data-with-prisma-studio]

```shell
npx prisma studio
```

Next steps \[#next-steps]

You've successfully set up Prisma ORM. Here's what you can explore next:

- **Learn more about Prisma Client**: Explore the [Prisma Client API](/orm/prisma-client/setup-and-configuration/introduction) for advanced querying, filtering, and relations
- **Database migrations**: Learn about [Prisma Migrate](/orm/prisma-migrate) for evolving your database schema
- **Performance optimization**: Discover [query optimization techniques](/orm/prisma-client/queries/advanced/query-optimization-performance)
- **Build a full application**: Check out our [framework guides](/guides) to integrate Prisma ORM with Next.js, Express, and more
- **Join the community**: Connect with other developers on [Discord](https://pris.ly/discord)

More info \[#more-info]

- [PlanetScale database connector](/orm/core-concepts/supported-databases/mysql#planetscale)
- [Prisma Config reference](/orm/reference/prisma-config-reference)
- [Database introspection](/orm/prisma-schema/introspection)
- [PlanetScale branching workflow](https://planetscale.com/docs/concepts/branching)
