# Cloudflare D1 (/docs/guides/deployment/cloudflare-d1)

Introduction \[#introduction]

This guide shows you how to use Prisma ORM with Cloudflare D1, a serverless SQL database that runs on Cloudflare's edge network. You'll learn how to set up Prisma ORM with D1, handle migrations, and deploy your application to Cloudflare Workers. You can find a [deployment-ready example on GitHub](https://github.com/prisma/prisma-examples/blob/latest/deployment-platforms/edge/cloudflare-workers/with-d1).

Prerequisites \[#prerequisites]

Before starting this guide, make sure you have:

- A Cloudflare account
- Node.js installed (version 20 or higher)
- Wrangler CLI installed (version 3.39.0 or higher)
- Basic familiarity with Cloudflare Workers and D1

1. Create a new Cloudflare Worker and initialize Prisma ORM \[#1-create-a-new-cloudflare-worker-and-initialize-prisma-orm]

Run the following command to create a [new Cloudflare Worker project](https://developers.cloudflare.com/d1/get-started/#1-create-a-worker):

````
  npm



  pnpm



  yarn



  bun




```bash
npm create cloudflare@latest d1-tutorial -- --type=hello-world --ts=true --git=true --deploy=false
```



```bash
pnpm create cloudflare d1-tutorial --type=hello-world --ts=true --git=true --deploy=false
```



```bash
yarn create cloudflare d1-tutorial --type=hello-world --ts=true --git=true --deploy=false
```



```bash
bunx create-cloudflare d1-tutorial --type hello-world --ts=true --git=true --deploy=false
```
````

Then navigate into the newly created directory:

```bash
cd d1-tutorial
```

And initialize Prisma ORM in the project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider sqlite
```



```bash
pnpm dlx prisma init --datasource-provider sqlite
```



```bash
yarn dlx prisma init --datasource-provider sqlite
```



```bash
bunx --bun prisma init --datasource-provider sqlite
```
````

And install the Prisma ORM CLI as a development dependency:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install --save-dev prisma
```



```bash
pnpm add --save-dev prisma
```



```bash
yarn add --dev prisma
```



```bash
bun add --dev prisma
```
````

2\. Configure Prisma schema \[#2-configure-prisma-schema]

In your Prisma schema, set the `provider` of the `datasource` to `sqlite`. If you just bootstrapped the Prisma schema with `prisma init`, also be sure to add the `runtime = "cloudflare"` to the generator block and the following `User` model:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
  runtime  = "cloudflare"
}

datasource db {
  provider = "sqlite"
}

model User { // [!code ++]
  id    Int     @id @default(autoincrement()) // [!code ++]
  email String  @unique // [!code ++]
  name  String? // [!code ++]
} // [!code ++]
```

3. Install dependencies \[#3-install-dependencies]

Next, install the required packages:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client @prisma/adapter-d1 dotenv
```



```bash
pnpm add @prisma/client @prisma/adapter-d1 dotenv
```



```bash
yarn add @prisma/client @prisma/adapter-d1 dotenv
```



```bash
bun add @prisma/client @prisma/adapter-d1 dotenv
```
````

Also, be sure to use a version of the Wrangler CLI that's above [`wrangler@^3.39.0`](https://github.com/cloudflare/workers-sdk/releases/tag/wrangler%403.39.0), otherwise the `--remote` flag that's used in the next sections won't be available.

4. Create a D1 database \[#4-create-a-d1-database]

Run the following command to create a new D1 database:

````
  npm



  pnpm



  yarn



  bun




```bash
npx wrangler@latest d1 create __YOUR_D1_DATABASE_NAME__
```



```bash
pnpm dlx wrangler@latest d1 create __YOUR_D1_DATABASE_NAME__
```



```bash
yarn dlx wrangler@latest d1 create __YOUR_D1_DATABASE_NAME__
```



```bash
bunx --bun wrangler@latest d1 create __YOUR_D1_DATABASE_NAME__
```





The `__YOUR_D1_DATABASE_NAME__` is a placeholder that should be replaced with the name you want to give your D1 database. For example, you can use `prisma-d1-example`.
````

This command will authenticate you with Cloudflare and ask you to select a Cloudflare account. After that, it will create a new D1 database and output the database ID and name:

```bash
✅ Successfully created DB '__YOUR_D1_DATABASE_NAME__' in region __REGION__
Created your new D1 database.

{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "__YOUR_D1_DATABASE_NAME__",
      "database_id": "<unique-ID-for-your-database>"
    }
  ]
}
```

Copy the terminal output and add the content to your `wrangler.jsonc` file. This file is used to configure your Cloudflare Worker and its bindings.

To connect your Workers with the D1 instance, add the following binding to your `wrangler.jsonc`:

```json title="wrangler.jsonc"
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "d1-tutorial",
  "main": "src/index.ts",
  "compatibility_date": "2025-08-05",
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "__YOUR_D1_DATABASE_NAME__", // to be replaced
      "database_id": "__YOUR_D1_DATABASE_ID__" // to be replaced
    }
  ]
}
```

```
The `__YOUR_D1_DATABASE_NAME__` and `__YOUR_D1_DATABASE_ID__` in the snippet above are placeholders that should be replaced with the database name and ID of your own D1 instance.

If you weren't able to grab the database ID from the terminal output, you can also find it in the Cloudflare Dashboard or by running `npx wrangler d1 list` and `npx wrangler d1 info __YOUR_D1_DATABASE_NAME__` in your terminal.
```

5\. Set up database migrations \[#5-set-up-database-migrations]

For Cloudflare D1, you'll use Prisma's migration workflow combined with Wrangler CLI to manage your database schema. Since D1 is a serverless SQLite database, we'll use `prisma migrate diff` to generate migration SQL and then apply it using Wrangler.

5.1 Set up environment variables \[#51-set-up-environment-variables]

Add a `.env` file in the root of your project with your local database URL:

```text title=".env"
DATABASE_URL="file:./prisma/db.sqlite"
```

Also create a `prisma.config.ts` file in the root of your project:

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

5.2 Generate migration SQL \[#52-generate-migration-sql]

First, create a migrations directory inside the `prisma` folder and create a file named `0001_init.sql`:

```bash
mkdir -p prisma/migrations
```

Now use `prisma migrate diff` to generate the SQL needed to create your database schema:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/0001_init.sql
```



```bash
pnpm dlx prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/0001_init.sql
```



```bash
yarn dlx prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/0001_init.sql
```



```bash
bunx --bun prisma migrate diff \
  --from-empty \
  --to-schema prisma/schema.prisma \
  --script > prisma/migrations/0001_init.sql
```
````

This command generates a SQL file that contains the statements needed to create your database tables. You can inspect the generated SQL in `prisma/migrations/0001_init.sql`.

5.3 Apply migrations to D1 \[#53-apply-migrations-to-d1]

Now apply the migration to both your local and remote D1 databases using Wrangler:

````
  npm



  pnpm



  yarn



  bun




```bash
# Apply to local database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --local --file="./prisma/migrations/0001_init.sql"

# Apply to remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --remote --file="./prisma/migrations/0001_init.sql"
```



```bash
# Apply to local database
pnpm dlx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --local --file="./prisma/migrations/0001_init.sql"

# Apply to remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --remote --file="./prisma/migrations/0001_init.sql"
```



```bash
# Apply to local database
yarn dlx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --local --file="./prisma/migrations/0001_init.sql"

# Apply to remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --remote --file="./prisma/migrations/0001_init.sql"
```



```bash
# Apply to local database
bun x wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --local --file="./prisma/migrations/0001_init.sql"

# Apply to remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --remote --file="./prisma/migrations/0001_init.sql"
```





Replace `__YOUR_D1_DATABASE_NAME__` with the actual name of your D1 database that you created in step 4.
````

5.4 Add sample data \[#54-add-sample-data]

Let's create some dummy data that we can query once the Worker is running:

````
  npm



  pnpm



  yarn



  bun




```bash
# For the local database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Local)');" --local

# For the remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Remote)');" --remote
```



```bash
# For the local database
pnpm dlx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Local)');" --local

# For the remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Remote)');" --remote
```



```bash
# For the local database
yarn dlx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Local)');" --local

# For the remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Remote)');" --remote
```



```bash
# For the local database
bun x wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Local)');" --local

# For the remote database
npx wrangler d1 execute __YOUR_D1_DATABASE_NAME__ --command "INSERT INTO \"User\" (\"email\", \"name\") VALUES ('jane@prisma.io', 'Jane Doe (Remote)');" --remote
```





For future schema changes, you can generate new migration files using:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx prisma migrate diff \
      --from-local-d1 \
      --to-schema prisma/schema.prisma \
      --script > migrations/0002_add_new_field.sql
    ```
  

  
    ```bash
    pnpm dlx prisma migrate diff \
      --from-local-d1 \
      --to-schema prisma/schema.prisma \
      --script > migrations/0002_add_new_field.sql
    ```
  

  
    ```bash
    yarn dlx prisma migrate diff \
      --from-local-d1 \
      --to-schema prisma/schema.prisma \
      --script > migrations/0002_add_new_field.sql
    ```
  

  
    ```bash
    bunx --bun prisma migrate diff \
      --from-local-d1 \
      --to-schema prisma/schema.prisma \
      --script > migrations/0002_add_new_field.sql
    ```
  


Then apply them using the same `wrangler d1 execute` commands as shown above.
````

6\. Implement the Worker \[#6-implement-the-worker]

Before adding a Prisma Client query to your Worker, you need to generate Prisma Client with the following command:

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

In order to query your database from the Worker using Prisma ORM, you need to:

1. Add the `DB` binding to the `Env` interface. This `DB` name matches the binding name you configured in `wrangler.jsonc`. (Alternatively, you can run [`npx wrangler types`](https://developers.cloudflare.com/workers/wrangler/commands/#types) to generate the `Env` type from the binding in a separate file called `worker-configuration.d.ts`.)
2. Instantiate `PrismaClient` using the `PrismaD1` driver adapter, passing `env.DB` which accesses your D1 database binding.
3. Send a query using Prisma Client and return the result.

Open `src/index.ts` and replace the entire content with the following:

```typescript title="src/index.ts"
import { PrismaClient } from "./generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const adapter = new PrismaD1(env.DB);
    const prisma = new PrismaClient({ adapter });

    const users = await prisma.user.findMany();
    const result = JSON.stringify(users);
    ctx.waitUntil(prisma.$disconnect()); // or just await prisma.$disconnect()
    return new Response(result);
  },
};
```

We explicitly call `prisma.$disconnect()` here to guarantee timely release of resources or else the
worker might run out of memory.

7. Run the Worker locally \[#7-run-the-worker-locally]

With the database query in place and Prisma Client generated, you can run the Worker locally.

If your Worker needs any environment variables, create a `.dev.vars` file in the root of your project. For this example, we don't need any additional environment variables since the D1 binding is already configured in `wrangler.jsonc`.

Now run the Worker locally:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run dev
```



```bash
pnpm run dev
```



```bash
yarn dev
```



```bash
bun run dev
```
````

Now you can open your browser at [`http://localhost:8787`](http://localhost:8787/) to see the result of the database query:

```js no-copy
[{ id: 1, email: "jane@prisma.io", name: "Jane Doe (Local)" }];
```

8. Deploy the Worker \[#8-deploy-the-worker]

To deploy the Worker, run the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npm run deploy
```



```bash
pnpm run deploy
```



```bash
yarn deploy
```



```bash
bun run deploy
```
````

Your deployed Worker is accessible via `https://d1-tutorial.USERNAME.workers.dev` (replace `USERNAME` with your Cloudflare account username). If you navigate your browser to that URL, you should see the following data that's queried from your remote D1 database:

```js no-copy
[{ id: 1, email: "jane@prisma.io", name: "Jane Doe (Remote)" }];
```

Next steps \[#next-steps]

Now that you've set up Prisma ORM with Cloudflare D1, you can:

- Add more complex queries using Prisma's powerful query API
- Set up Prisma Studio for database management
- Implement database monitoring
- Add automated tests

For more information:

- [Prisma ORM documentation](/orm)
- [Prisma Client API reference](/orm/prisma-client/setup-and-configuration/introduction)
- [Cloudflare D1 documentation](https://developers.cloudflare.com/d1)
