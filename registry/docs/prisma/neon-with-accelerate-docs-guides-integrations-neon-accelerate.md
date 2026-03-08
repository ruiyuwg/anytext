# Neon with Accelerate (/docs/guides/integrations/neon-accelerate)

Introduction \[#introduction]

This guides teaches you how to add connection pooling to a PostgreSQL database hosted on [Neon](https://neon.tech/) using [Prisma Accelerate](/accelerate).

Prisma Accelerate is a robust and mature connection pooler enabling your database to function properly during traffic spikes and high load scenarios. Check out this [video](https://www.youtube.com/watch?v=cnL75if6Aq0) demonstrating how it performs in a load test or [learn why connection pooling is important](https://www.prisma.io/blog/saving-black-friday-with-connection-pooling).

Prerequisites \[#prerequisites]

To successfully complete this guide, you need **a connection string for a PostgreSQL instance hosted on Neon**. It typically looks similar to this:

```bash no-copy
postgresql://neondb_owner:[YOUR-PASSWORD]@ep-lingering-hat-a2e7tkt3.eu-central-1.aws.neon.tech/neondb?sslmode=require
```

If you already have a project using Prisma ORM, you can skip the first two steps and jump ahead to [Step 3. Install the Accelerate extension](#3-install-the-accelerate-extension).

1. Set up Prisma ORM \[#1-set-up-prisma-orm]

Start by installing the Prisma CLI in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install prisma --save-dev
```



```bash
pnpm add prisma --save-dev
```



```bash
yarn add prisma --dev
```



```bash
bun add prisma --dev
```
````

Then, run the following command to initialize a new project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init
```



```bash
pnpm dlx prisma init
```



```bash
yarn dlx prisma init
```



```bash
bunx --bun prisma init
```
````

This will create a new `prisma` directory with a `schema.prisma` file and add a `.env` file with the `DATABASE_URL` environment variable.

Update the file and set the `DATABASE_URL` to your Neon connection string:

```text title=".env"
DATABASE_URL="postgresql://neondb_owner:[YOUR-PASSWORD]@ep-lingering-hat-a2e7tkt3.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```

Create a `prisma.config.ts` file to configure Prisma:

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
You'll need to install the `dotenv` package to load environment variables:


  
    
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

2\. Introspect your database \[#2-introspect-your-database]

Next, run the following command to introspect your database and create your data model:

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

This command reads your database schema and creates new models in your `schema.prisma` file that match the tables in your database.

```
If you want to use Prisma Migrate in the future, you also need to [baseline your database](/orm/prisma-migrate/workflows/baselining).
```

3\. Install the Accelerate extension \[#3-install-the-accelerate-extension]

Install the Prisma Client extension for Accelerate:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/extension-accelerate
```



```bash
pnpm add @prisma/extension-accelerate
```



```bash
yarn add @prisma/extension-accelerate
```



```bash
bun add @prisma/extension-accelerate
```
````

This is needed to access Prisma Accelerate's connection pool.

4. Set up Accelerate in the Prisma Console \[#4-set-up-accelerate-in-the-prisma-console]

To set up Accelerate in the Prisma Console, follow these steps:

1. Log into the [Prisma Console](https://console.prisma.io).
2. Select **New project**
3. Choose a **Name** for your project
4. In the **Choose your starting product** section, find the **Accelerate** card and click **Get started**
5. In the field for your **Database connection string**, paste your Neon connection string
6. Select the **Region** that's closest to your database
7. Click **Create project**
8. On the next screen, click **Enable Accelerate**

Once you went through these steps, you'll be redirected to another page where you need to the click the **Generate API key** button.

You'll then be shown a new connection URL which enables you to connect to Prisma Accelerate's connection pool. This needs to be set as the new `DATABASE_URL` in your `.env` file:

```text title=".env"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=ey..."
```

````
If you want to use Prisma Migrate with Prisma Accelerate, you need to provide a direct database URL in your `prisma.config.ts` file. The Accelerate URL (starting with `prisma://`) is used for queries via PrismaClient, while the direct database URL is used for migrations.

Update your `prisma.config.ts`:

```typescript title="prisma.config.ts"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DIRECT_URL"), // Direct database URL for migrations
  },
});
```

And add the `DIRECT_URL` to your `.env` file:

```text title=".env"
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=ey..."
DIRECT_URL="postgresql://neondb_owner:[YOUR-PASSWORD]@ep-lingering-hat-a2e7tkt3.eu-central-1.aws.neon.tech/neondb?sslmode=require"
```
````

5\. Generate Prisma Client \[#5-generate-prisma-client]

With your Prisma schema in place, you can go ahead and generate Prisma Client:

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





In Prisma v7, the `--no-engine` flag is no longer required when using Prisma Accelerate. Previously, you would run `prisma generate --no-engine`, but now the standard `prisma generate` command works for all use cases.
````

6\. Send queries through the connection pool \[#6-send-queries-through-the-connection-pool]

In your application code, you now need to apply the Accelerate extension to your Prisma Client instance:

```ts
import { PrismaClient } from "./generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());
```

At this point, you can now start sending queries which will be routed through the connection pool to your database.
