# Schema management in teams (/docs/guides/database/schema-changes)

Introduction \[#introduction]

When working in a team, managing database schema changes can be challenging. This guide shows you how to effectively collaborate on schema changes using Prisma Migrate, ensuring that all team members can safely contribute to and incorporate schema changes.

Prerequisites \[#prerequisites]

Before starting this guide, make sure you have:

- Node.js installed (version 20 or higher)
- A Prisma project set up with migrations
- A relational database (PostgreSQL, MySQL, SQLite, SQL Server, etc.)
- Basic understanding of Git
- Basic familiarity with Prisma Migrate

  This guide **does not apply for MongoDB**.
  Instead of `migrate dev`, [`db push`](/orm/prisma-migrate/workflows/prototyping-your-schema) is used for [MongoDB](/orm/core-concepts/supported-databases/mongodb).

1. Understand migration basics \[#1-understand-migration-basics]

1.1. Migration order \[#11-migration-order]

Migrations are **applied in the same order as they were created**. The creation date is part of the migration subfolder name - for example, `20210316081837-updated-fields` was created on `2021-03-16-08:18:37`.

1.2. Source control requirements \[#12-source-control-requirements]

You should commit the following files to source control:

- The contents of the `.prisma/migrations` folder, including the `migration_lock.toml` file
- The Prisma Schema (`schema.prisma`)

Source-controlling the `schema.prisma` file is not enough - you must include your migration history because:

- Customized migrations contain information that cannot be represented in the Prisma schema
- The `prisma migrate deploy` command only runs migration files

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

2\. Incorporate team changes \[#2-incorporate-team-changes]

2.1. Pull latest changes \[#21-pull-latest-changes]

To incorporate changes from collaborators:

1. Pull the changed Prisma schema and `./prisma/migrations` folder
2. Run the migrate command:

   npm

   pnpm

   yarn

   bun

   ```bash
   npx prisma migrate dev
   ```

   ```bash
   pnpm dlx prisma migrate dev
   ```

   ```bash
   yarn dlx prisma migrate dev
   ```

   ```bash
   bunx --bun prisma migrate dev
   ```

2.2. Example scenario \[#22-example-scenario]

Let's walk through a sample scenario with three developers sharing schema changes:

````
  Before



  After




```prisma title="schema.prisma" 
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}
```



```prisma title="schema.prisma" 
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  Int?
}

model User {
  id              Int     @id @default(autoincrement())
  email           String  @unique
  name            String?
  favoriteColor   String? // Added by Ania // [!code ++]
  bestPacmanScore Int? // Added by you // [!code ++]
  posts           Post[]
}

// Added by Javier // [!code ++]
model Tag { // [!code ++]
  tagName     String   @id // [!code ++]
  tagCategory Category // [!code ++]
} // [!code ++]
```
````

3\. Handle concurrent changes \[#3-handle-concurrent-changes]

3.1. Developer A's changes \[#31-developer-as-changes]

Ania adds a new field:

```prisma
model User {
  /* ... */
  favoriteColor String?
}
```

And generates a migration:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name new-field
```



```bash
pnpm dlx prisma migrate dev --name new-field
```



```bash
yarn dlx prisma migrate dev --name new-field
```



```bash
bunx --bun prisma migrate dev --name new-field
```






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

3.2. Developer B's changes \[#32-developer-bs-changes]

Javier adds a new model:

```prisma
model Tag {
  tagName     String   @id
  tagCategory Category
}
```

And generates a migration:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name new-model
```



```bash
pnpm dlx prisma migrate dev --name new-model
```



```bash
yarn dlx prisma migrate dev --name new-model
```



```bash
bunx --bun prisma migrate dev --name new-model
```






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

3.3. Merge changes \[#33-merge-changes]

The migration history now has two new migrations:

4. Integrate your changes \[#4-integrate-your-changes]

4.1. Pull team changes \[#41-pull-team-changes]

1. Pull the most recent changes:
   - Two new migrations
   - Updated schema file

2. Review the merged schema:

```prisma
model User {
  /* ... */
  favoriteColor   String?
  bestPacmanScore Int?
}

model Tag {
  tagName     String   @id
  tagCategory Category
  posts       Post[]
}
```

4.2. Generate your migration \[#42-generate-your-migration]

Run the migrate command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev
```



```bash
pnpm dlx prisma migrate dev
```



```bash
yarn dlx prisma migrate dev
```



```bash
bunx --bun prisma migrate dev
```






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

This will:

1. Apply your team's migrations
2. Create a new migration for your changes
3. Apply your new migration

4.3. Commit changes \[#43-commit-changes]

Commit:

- The merged `schema.prisma`
- Your new migration file

Next steps \[#next-steps]

Now that you understand team schema management, you can:

- Learn about [customizing migrations](/orm/prisma-migrate/workflows/customizing-migrations)
- Explore [deployment workflows](/orm/prisma-migrate/workflows/development-and-production)

For more information:

- [Prisma Migrate documentation](/orm/prisma-migrate)
- [Team development workflows](/orm/prisma-migrate/workflows/development-and-production)
