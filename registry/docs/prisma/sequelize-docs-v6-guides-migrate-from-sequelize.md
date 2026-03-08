# Sequelize (/docs/v6/guides/migrate-from-sequelize)

Introduction \[#introduction]

This guide shows you how to migrate your application from Sequelize to Prisma ORM. We'll use an extended version of the [Sequelize Express example](https://github.com/sequelize/express-example) as a [sample project](https://github.com/prisma/migrate-from-sequelize-to-prisma) to demonstrate the migration steps.

This migration guide uses PostgreSQL as the example database, but it equally applies to any other relational database that's [supported by Prisma ORM](/v6/orm/reference/supported-databases). You can learn how Prisma ORM compares to Sequelize on the [Prisma ORM vs Sequelize](/v6/orm/more/comparisons/prisma-and-sequelize) page.

Prerequisites \[#prerequisites]

Before starting this guide, make sure you have:

- A Sequelize project you want to migrate
- Node.js installed (version 20 or higher)
- PostgreSQL or another supported database
- Basic familiarity with Sequelize and Express.js

1. Prepare for migration \[#1-prepare-for-migration]

1.1. Understand the migration process \[#11-understand-the-migration-process]

The steps for migrating from Sequelize to Prisma ORM are always the same, no matter what kind of application or API layer you're building:

1. Install the Prisma CLI
2. Introspect your database
3. Create a baseline migration
4. Install Prisma Client
5. Gradually replace your Sequelize queries with Prisma Client

These steps apply whether you're building a REST API (e.g., with Express, Koa, or NestJS), a GraphQL API (e.g., with Apollo Server, TypeGraphQL, or Nexus), or any other kind of application that uses Sequelize for database access.

1.2. Set up Prisma configuration \[#12-set-up-prisma-configuration]

Create a new Prisma schema file:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --output ../generated/prisma
```



```bash
pnpm dlx prisma init --output ../generated/prisma
```



```bash
yarn dlx prisma init --output ../generated/prisma
```



```bash
bunx --bun prisma init --output ../generated/prisma
```
````

This command created a new directory called `prisma` with the following files for you:

- `schema.prisma`: Your Prisma schema that specifies your database connection and models
- `.env`: A [`dotenv`](https://github.com/motdotla/dotenv) to configure your database connection URL as an environment variable

The Prisma schema currently looks as follows:

```prisma title="prisma/schema.prisma" showLineNumbers
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client"
  output   = "./generated/prisma"
}
```

```
If you're using VS Code, be sure to install the [Prisma VS Code extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) for syntax highlighting, formatting, auto-completion and a lot more cool features.
```

Update the `DATABASE_URL` in the `.env` file with your database connection string:

```text
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

1.3. Configure Prisma \[#13-configure-prisma]

Create a `prisma.config.ts` file in the root of your project with the following content:

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

````
You'll need to install the `dotenv` package to load environment variables. If you haven't already, install it using your package manager:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npm install dotenv
    ```
  

  
    ```bash
    pnpm add dotenv
    ```
  

  
    ```bash
    yarn add dotenv
    ```
  

  
    ```bash
    bun add dotenv
    ```
  
````

2\. Migrate the database schema \[#2-migrate-the-database-schema]

2.1. Introspect your database \[#21-introspect-your-database]

Run Prisma's introspection to create the Prisma schema from your existing database:

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

This will create a `schema.prisma` file with your database schema.

2.2. Create a baseline migration \[#22-create-a-baseline-migration]

To continue using Prisma Migrate to evolve your database schema, you will need to [baseline your database](/v6/orm/prisma-migrate/getting-started).

First, create a `migrations` directory and add a directory inside with your preferred name for the migration. In this example, we will use `0_init` as the migration name:

```bash
mkdir -p prisma/migrations/0_init
```

Next, generate the migration file with `prisma migrate diff`. Use the following arguments:

- `--from-empty`: assumes the data model you're migrating from is empty
- `--to-schema`: the current database state using the URL in the `datasource` block
- `--script`: output a SQL script

  ```
  npm



  pnpm



  yarn



  bun
  ```

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

  ```
  npm



  pnpm



  yarn



  bun
  ```

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

The command will mark `0_init` as applied by adding it to the `_prisma_migrations` table.

You now have a baseline for your current database schema. To make further changes to your database schema, you can update your Prisma schema and use `prisma migrate dev` to apply the changes to your database.

3. Update your application code \[#3-update-your-application-code]

3.1. Install Prisma Client \[#31-install-prisma-client]

As a next step, you can install Prisma Client in your project so that you can start replacing the database queries in your project that are currently made with Sequelize:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client
```



```bash
pnpm add @prisma/client
```



```bash
yarn add @prisma/client
```



```bash
bun add @prisma/client
```
````

After installing Prisma Client, you can generate the Prisma Client code:

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

3.2. Replace Sequelize queries \[#32-replace-sequelize-queries]

In this section, we'll show a few sample queries that are being migrated from Sequelize to Prisma Client based on the example routes from the sample REST API project. For a comprehensive overview of how the Prisma Client API differs from Sequelize, check out the [API comparison](/v6/orm/more/comparisons/prisma-and-sequelize#api-comparison) page.

````
  Sequelize



  Prisma Client




```typescript
// Find one
const user = await User.findOne({
  where: { id: 1 },
});

// Create
const user = await User.create({
  email: "alice@prisma.io",
  name: "Alice",
});

// Update
await User.update(
  { name: "New name" },
  {
    where: { id: 1 },
  },
);

// Delete
await User.destroy({
  where: { id: 1 },
});
```



```typescript
// Find one
const user = await prisma.user.findUnique({
  where: { id: 1 },
});

// Create
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
    name: "Alice",
  },
});

// Update
await prisma.user.update({
  where: { id: 1 },
  data: { name: "New name" },
});

// Delete
await prisma.user.delete({
  where: { id: 1 },
});
```
````

3.3. Update your controllers \[#33-update-your-controllers]

Update your Express controllers to use Prisma Client. For example, here's how to update a user controller:

```typescript
import { prisma } from "../client";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, name } = req.body;

    const result = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return res.json(result);
  }
}
```

Next steps \[#next-steps]

Now that you've migrated to Prisma ORM, you can:

- Add more complex queries using Prisma's powerful query API
- Set up Prisma Studio for database management
- Implement database monitoring
- Add automated tests using Prisma's testing utilities

For more information:

- [Prisma ORM documentation](/v6/orm)
- [Prisma Client API reference](/v6/orm/prisma-client/setup-and-configuration/introduction)
