# Turborepo (/docs/v6/guides/turborepo)

Prisma is a powerful ORM for managing databases, and [Turborepo](https://turbo.build/) simplifies monorepo workflows. By combining these tools, you can create a scalable, modular architecture for your projects.

This guide will show you how to set up Prisma as a standalone package in a Turborepo monorepo, enabling efficient configuration, type sharing, and database management across multiple apps.

What you'll learn: \[#what-youll-learn]

- How to set up Prisma in a Turborepo monorepo.
- Steps to generate and reuse PrismaClient across packages.
- Integrating the Prisma package into other applications in the monorepo.

Prerequisites \[#prerequisites]

- [Node.js 20+](https://nodejs.org/)

1. Set up your project \[#1-set-up-your-project]

To set up a Turborepo monorepo named `turborepo-prisma`, run the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx create-turbo@latest turborepo-prisma
```



```bash
pnpm dlx create-turbo@latest turborepo-prisma
```



```bash
yarn dlx create-turbo@latest turborepo-prisma
```



```bash
bunx --bun create-turbo@latest turborepo-prisma
```
````

You'll be prompted to select your package manager, this guide will use `npm`:

```
* *Which package manager do you want to use?* `npm`
```

After the setup, choose a package manager for the project. Navigate to the project root directory and install Turborepo as a development dependency:

````
  npm



  pnpm



  yarn



  bun




```bash
cd turborepo-prisma
npm install turbo --save-dev
```



```bash
cd turborepo-prisma
pnpm add turbo --save-dev
```



```bash
cd turborepo-prisma
yarn add turbo --dev
```



```bash
cd turborepo-prisma
bun add turbo --dev
```
````

For more information about installing Turborepo, refer to the [official Turborepo guide](https://turbo.build/repo/docs/getting-started/installation).

2. Add a new database package to the monorepo \[#2-add-a-new-database-package-to-the-monorepo]

2.1 Create the package and install Prisma \[#21-create-the-package-and-install-prisma]

Create a `database` package within the `packages` directory. Then, create a `package.json` file for the package by running:

```bash
cd packages/
mkdir database
cd database
touch package.json
```

Define the `package.json` file as follows:

```json title="packages/database/package.json"
{
  "name": "@repo/db",
  "version": "0.0.0"
}
```

Next, install the required dependencies to use Prisma ORM. Use your preferred package manager:

````
  npm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npm install prisma @types/pg --save-dev
    ```
  

  
    ```bash
    pnpm add prisma @types/pg --save-dev
    ```
  

  
    ```bash
    yarn add prisma @types/pg --dev
    ```
  

  
    ```bash
    bun add prisma @types/pg --dev
    ```
  







  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
pnpm add @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
yarn add @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
bun add @prisma/client @prisma/adapter-pg dotenv pg
```






  yarn



  pnpm




```bash
yarn add prisma @types/pg --dev
yarn add @prisma/client @prisma/adapter-pg dotenv pg
```



```bash
pnpm add prisma @types/pg --save-dev
pnpm add @prisma/client @prisma/adapter-pg dotenv pg
```





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/v6/orm/overview/databases/database-drivers).
````

2.2. Initialize Prisma and define models \[#22-initialize-prisma-and-define-models]

Inside the `database` directory, initialize prisma by running:

````
  npm



  yarn



  pnpm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx prisma init --db --output ../generated/prisma
    ```
  

  
    ```bash
    pnpm dlx prisma init --db --output ../generated/prisma
    ```
  

  
    ```bash
    yarn dlx prisma init --db --output ../generated/prisma
    ```
  

  
    ```bash
    bunx --bun prisma init --db --output ../generated/prisma
    ```
  




```bash
yarn prisma init --db --output ../generated/prisma
```



```bash
pnpm prisma init --db --output ../generated/prisma
```
````

This will create several files inside `packages/database`:

- A `prisma` directory with a `schema.prisma` file.
- A `prisma.config.ts` file for configuring Prisma
- A Prisma Postgres database.
- A `.env` file containing the `DATABASE_URL` at the project root.
- An `output` directory for the generated Prisma Client as `generated/prisma`.

In the `packages/database/prisma/schema.prisma` file, add the following models:

```prisma title="packages/database/prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User { // [!code ++]
  id    Int     @id @default(autoincrement()) // [!code ++]
  email String  @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]
 // [!code ++]
model Post { // [!code ++]
  id        Int     @id @default(autoincrement()) // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean @default(false) // [!code ++]
  authorId  Int // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]
```

The `prisma.config.ts` file created in the `packages/database` directory should look like this:

```typescript title="packages/database/prisma.config.ts"
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

```
It is recommended to add `../generated/prisma` to the `.gitignore` file because it contains platform-specific binaries that can cause compatibility issues across different environments.
```

The importance of generating Prisma types in a custom directory \[#the-importance-of-generating-prisma-types-in-a-custom-directory]

In the `schema.prisma` file, we specify a custom [`output`](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client#using-a-custom-output-path) path where Prisma will generate its types. This ensures Prisma's types are resolved correctly across different package managers.

```
In this guide, the types will be generated in the `database/generated/prisma` directory.
```

2.3. Add scripts and run migrations \[#23-add-scripts-and-run-migrations]

Let's add some scripts to the `package.json` inside `packages/database`:

```json title="packages/database/package.json"
{
  "name": "@repo/db",
  "version": "0.0.0",
  "scripts": {
    // [!code ++]
    "db:generate": "prisma generate", // [!code ++]
    "db:migrate": "prisma migrate dev --skip-generate", // [!code ++]
    "db:deploy": "prisma migrate deploy" // [!code ++]
  }, // [!code ++]
  "devDependencies": {
    "prisma": "^6.6.0"
  },
  "dependencies": {
    "@prisma/client": "^6.6.0"
  }
}
```

Let's also add these scripts to `turbo.json` in the root and ensure that `DATABASE_URL` is added to the environment:

```json title="turbo.json"
{
"$schema": "https://turbo.build/schema.json",
"ui": "tui",
"tasks": {
  "build": {
    "dependsOn": ["^build"],
    "inputs": ["$TURBO_DEFAULT$", ".env*"],
    "outputs": [".next/**", "!.next/cache/**"],
    "env": ["DATABASE_URL"] // [!code ++]
  },
  "lint": {
    "dependsOn": ["^lint"]
  },
  "check-types": {
    "dependsOn": ["^check-types"]
  },
  "dev": {
    "cache": false,
    "persistent": true
  },
  "db:generate": { // [!code ++]
    "cache": false // [!code ++]
  }, // [!code ++]
  "db:migrate": { // [!code ++]
    "cache": false, // [!code ++]
    "persistent": true // This is necessary to interact with the CLI and assign names to your database migrations. // [!code ++]
  }, // [!code ++]
  "db:deploy": { // [!code ++]
    "cache": false // [!code ++]
  } // [!code ++]
}
```

Migrate your `prisma.schema` and generate types

Navigate to the project root and run the following command to automatically migrate our database:

````
  npm



  yarn



  pnpm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx turbo db:migrate
    ```
  

  
    ```bash
    pnpm dlx turbo db:migrate
    ```
  

  
    ```bash
    yarn dlx turbo db:migrate
    ```
  

  
    ```bash
    bunx --bun turbo db:migrate
    ```
  




```bash
yarn turbo db:migrate
```



```bash
pnpm turbo db:migrate
```
````

Generate your `schema.prisma`

To generate the types from Prisma schema, from the project root run:

````
  npm



  yarn



  pnpm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx turbo db:generate
    ```
  

  
    ```bash
    pnpm dlx turbo db:generate
    ```
  

  
    ```bash
    yarn dlx turbo db:generate
    ```
  

  
    ```bash
    bunx --bun turbo db:generate
    ```
  




```bash
yarn turbo db:generate
```



```bash
pnpm turbo db:generate
```
````

2.4. Export the Prisma client and types \[#24-export-the-prisma-client-and-types]

Next, export the generated types and an instance of `PrismaClient` so it can used in your applications.

In the `packages/database` directory, create a `src` folder and add a `client.ts` file. This file will define an instance of `PrismaClient`:

```ts title="packages/database/src/client.ts"
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Then create an `index.ts` file in the `src` folder to re-export the generated prisma types and the `PrismaClient` instance:

```ts title="packages/database/src/index.ts"
export { prisma } from "./client"; // exports instance of prisma
export * from "../generated/prisma/client"; // exports generated types from prisma
```

Follow the [Just-in-Time packaging pattern](https://turbo.build/repo/docs/core-concepts/internal-packages#just-in-time-packages) and create an entrypoint to the package inside `packages/database/package.json`:

```
If you're not using a bundler, use the [Compiled Packages](https://turborepo.com/docs/core-concepts/internal-packages#compiled-packages) strategy instead.
```

```json title="packages/database/package.json"
{
  "name": "@repo/db",
  "version": "0.0.0",
  "scripts": {
    "db:generate": "npx prisma generate",
    "db:migrate": "npx prisma migrate dev --skip-generate",
    "db:deploy": "npx prisma migrate deploy"
  },
  "devDependencies": {
    "prisma": "^6.6.0"
  },
  "dependencies": {
    "@prisma/client": "^6.6.0"
  },
  "exports": {
    // [!code ++]
    ".": "./src/index.ts" // [!code ++]
  } // [!code ++]
}
```

By completing these steps, you'll make the Prisma types and `PrismaClient` instance accessible throughout the monorepo.

3. Import the database package in the web app \[#3-import-the-database-package-in-the-web-app]

The `turborepo-prisma` project should have an app called `web` at `apps/web`. Add the `database` dependency to `apps/web/package.json`:

````
  npm



  yarn



  pnpm




```json
{
  // ...
  "dependencies": {
    "@repo/db": "*" // [!code ++]
    // ...
  }
  // ...
}
```



```json
{
  // ...
  "dependencies": {
    "@repo/db": "*" // [!code ++]
    // ...
  }
  // ...
}
```



```json
{
  // ...
  "dependencies": {
    "@repo/db": "workspace:*" // [!code ++]
    // ...
  }
  // ...
}
```
````

Run your package manager's install command inside the `apps/web` directory:

````
  npm



  yarn



  pnpm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    cd apps/web
    npm install
    ```
  

  
    ```bash
    cd apps/web
    pnpm install
    ```
  

  
    ```bash
    cd apps/web
    yarn install
    ```
  

  
    ```bash
    cd apps/web
    bun install
    ```
  




```bash
cd apps/web
yarn install
```



```bash
cd apps/web
pnpm install
```
````

Let's import the instantiated `prisma` client from the `database` package in the `web` app.

In the `apps/web/app` directory, open the `page.tsx` file and add the following code:

```tsx title="apps/web/app/page.tsx"
import styles from "./page.module.css";
import { prisma } from "@repo/db";

export default async function Home() {
  const user = await prisma.user.findFirst();
  return <div className={styles.page}>{user?.name ?? "No user added yet"}</div>;
}
```

Then, create a `.env` file in the `web` directory and copy into it the contents of the `.env` file from the `/database` directory containing the `DATABASE_URL`:

```text title="apps/web/.env"
DATABASE_URL="Same database url as used in the database directory" # [!code ++]
```

```
If you want to use a single `.env` file in the root directory across your apps and packages in a Turborepo setup, consider using a package like [`dotenvx`](https://dotenvx.com/docs/monorepos/turborepo).

To implement this, update the `package.json` files for each package or app to ensure they load the required environment variables from the shared `.env` file. For detailed instructions, refer to the [`dotenvx` guide for Turborepo](https://dotenvx.com/docs/monorepos/turborepo).

Keep in mind that Turborepo [recommends using separate `.env` files for each package](https://turbo.build/repo/docs/crafting-your-repository/using-environment-variables#use-env-files-in-packages) to promote modularity and avoid potential conflicts.
```

4\. Configure task dependencies in Turborepo \[#4-configure-task-dependencies-in-turborepo]

The `db:generate` and `db:deploy` scripts are not yet optimized for the monorepo setup but are essential for the `dev` and `build` tasks.

If a new developer runs `turbo dev` on an application without first running `db:generate`, they will encounter errors.

To prevent this, ensure that `db:generate` is always executed before running `dev` or `build`. Additionally, make sure both `db:deploy` and `db:generate` are executed before `db:build`. Here's how to configure this in your `turbo.json` file:

```json title="turbo.json"
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build", "^db:generate"], // [!code highlight]
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**"],
      "env": ["DATABASE_URL"] // [!code ++]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "dependsOn": ["^db:generate"], // [!code ++]
      "cache": false,
      "persistent": true
    },
    "db:generate": {
      "cache": false
    },
    "db:migrate": {
      "cache": false,
      "persistent": true
    },
    "db:deploy": {
      "cache": false
    }
  }
}
```

5. Run the project in development \[#5-run-the-project-in-development]

   Before starting the development server, note that if you are using Next.js v15.2.0, do not use Turbopack as there is a known [issue](https://github.com/vercel/next.js/issues/76497). Remove Turbopack from your dev script by updating your `apps/web/package.json`

   ```json title="apps/web/package.json"
   "script":{
       "dev": "next dev --port 3000", // [!code highlight]
   }
   ```

Then from the project root run the project:

````
  npm



  yarn



  pnpm





  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npx turbo run dev --filter=web
    ```
  

  
    ```bash
    pnpm dlx turbo run dev --filter=web
    ```
  

  
    ```bash
    yarn dlx turbo run dev --filter=web
    ```
  

  
    ```bash
    bunx --bun turbo run dev --filter=web
    ```
  




```bash
yarn turbo run dev --filter=web
```



```bash
pnpm turbo run dev --filter=web
```
````

Navigate to the `http://localhost:3000` and you should see the message:

```
No user added yet
```

````
You can add users to your database by creating a seed script or manually by using [Prisma Studio](/v6/orm/tools/prisma-studio).

To use Prisma Studio to add manually data via a GUI, navigate inside the `packages/database` directory and run `prisma studio` using your package manager:


  
    
      npm
    

    
      yarn
    

    
      pnpm
    
  

  
    
      
        
          npm
        

        
          pnpm
        

        
          yarn
        

        
          bun
        
      

      
        ```bash
        npx prisma studio
        ```
      

      
        ```bash
        pnpm dlx prisma studio
        ```
      

      
        ```bash
        yarn dlx prisma studio
        ```
      

      
        ```bash
        bunx --bun prisma studio
        ```
      
    
  

  
    ```bash
    yarn prisma studio
    ```
  

  
    ```bash
    pnpm prisma studio
    ```
  


This command starts a server with a GUI at [http://localhost:5555](http://localhost:5555), allowing you to view and modify your data.
````

Congratulations, you're done setting up Prisma for Turborepo!

Next Steps \[#next-steps]

- Expand your Prisma models to handle more complex data relationships.
- Implement additional CRUD operations to enhance your application's functionality.
- Check out [Prisma Postgres](https://www.prisma.io/postgres) to see how you can scale your application.

More Info \[#more-info]

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma ORM Docs](/v6/orm/overview/introduction/what-is-prisma)
