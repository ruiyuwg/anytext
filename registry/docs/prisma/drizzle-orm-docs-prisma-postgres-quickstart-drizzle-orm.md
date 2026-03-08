# Drizzle ORM (/docs/prisma-postgres/quickstart/drizzle-orm)

[Drizzle ORM](https://orm.drizzle.team) is a TypeScript ORM. In this guide, you'll learn how to connect Drizzle ORM to [Prisma Postgres](/postgres).

Prerequisites \[#prerequisites]

- Node.js version 16 or higher
- TypeScript version 5.0 or higher

1. Create a new project \[#1-create-a-new-project]

Create a new directory for your project and initialize it with npm:

````
  npm



  pnpm



  yarn



  bun




```bash
mkdir drizzle-quickstart
cd drizzle-quickstart
npm init -y
```



```bash
mkdir drizzle-quickstart
cd drizzle-quickstart
pnpm init -y
```



```bash
mkdir drizzle-quickstart
cd drizzle-quickstart
yarn init -y
```



```bash
mkdir drizzle-quickstart
cd drizzle-quickstart
bun init -y
```
````

Install TypeScript and initialize it:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install --save-dev typescript
```



```bash
pnpm add --save-dev typescript
```



```bash
yarn add --dev typescript
```



```bash
bun add --dev typescript
```






  npm



  pnpm



  yarn



  bun




```bash
npx tsc --init
```



```bash
pnpm dlx tsc --init
```



```bash
yarn dlx tsc --init
```



```bash
bunx --bun tsc --init
```
````

In your `package.json`, set the `type` to `module`:

```json title="package.json"
{
  // ...
  "type": "module" // [!code ++]
  // ...
}
```

2. Create a Prisma Postgres database \[#2-create-a-prisma-postgres-database]

You can create a Prisma Postgres database using the `create-db` CLI tool. Follow these steps to create your Prisma Postgres database:

````
  npm



  pnpm



  yarn



  bun




```bash
npx create-db
```



```bash
pnpm dlx create-db
```



```bash
yarn dlx create-db
```



```bash
bunx --bun create-db
```
````

Then the CLI tool should output:

```bash
┌  🚀 Creating a Prisma Postgres database
│
│  Provisioning a temporary database in us-east-1...
│
│  It will be automatically deleted in 24 hours, but you can claim it.
│
◇  Database created successfully!
│
│
●  Database Connection
│
│
│    Connection String:
│
│    postgresql://hostname:password@db.prisma.io:5432/postgres?sslmode=require
│
│
◆  Claim Your Database
│
│    Keep your database for free:
│
│    https://create-db.prisma.io/claim?CLAIM_CODE
│
│    Database will be deleted on 11/18/2025, 1:55:39 AM if not claimed.
│
└
```

Create a `.env` file and add the connection string from the output:

```text title=".env"
DATABASE_URL="postgresql://hostname:password@db.prisma.io:5432/postgres?sslmode=require"
```

```
**Never commit `.env` files to version control.** Add `.env` to your `.gitignore` file to keep credentials secure.
```

The database created is temporary and will be deleted in 24 hours unless claimed. Claiming moves the database into your [Prisma Data Platform](https://console.prisma.io) account. Visit the claim URL from the output to keep your database.

```
To learn more about the `create-db` CLI tool, see the [create-db documentation](/postgres/npx-create-db).
```

3\. Install dependencies \[#3-install-dependencies]

Install Drizzle ORM and the PostgreSQL driver:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install drizzle-orm pg dotenv
```



```bash
pnpm add drizzle-orm pg dotenv
```



```bash
yarn add drizzle-orm pg dotenv
```



```bash
bun add drizzle-orm pg dotenv
```






  npm



  pnpm



  yarn



  bun




```bash
npm install --save-dev drizzle-kit @types/pg tsx
```



```bash
pnpm add --save-dev drizzle-kit @types/pg tsx
```



```bash
yarn add --dev drizzle-kit @types/pg tsx
```



```bash
bun add --dev drizzle-kit @types/pg tsx
```
````

**Package breakdown:**

- `drizzle-orm`: The lightweight TypeScript ORM
- `pg`: PostgreSQL driver for Node.js
- `dotenv`: Loads environment variables from `.env` file
- `drizzle-kit`: CLI tool for migrations and schema management
- `@types/pg`: TypeScript type definitions for the pg driver
- `tsx`: TypeScript execution engine for running `.ts` files directly

4. Run a query \[#4-run-a-query]

Create a `src/script.ts` file:

```typescript title="src/script.ts"
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle({ client: pool });

async function main() {
  const result = await db.execute("select 1");
  console.log("Query result:", result);
}

main()
  .then(async () => {
    await pool.end();
    console.log("Connection closed");
  })
  .catch(async (error) => {
    console.error("Error:", error);
    await pool.end();
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
npx tsx src/script.ts
```



```bash
pnpm dlx tsx src/script.ts
```



```bash
yarn dlx tsx src/script.ts
```



```bash
bunx --bun tsx src/script.ts
```
````

You should receive output similar to:

```bash
Query result: Result {
  command: 'SELECT',
  rowCount: 1,
  oid: null,
  rows: [ { '?column?': 1 } ],
  fields: [
    Field {
      name: '?column?',
      tableID: 0,
      columnID: 0,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: parseInteger] ],
  _types: { getTypeParser: [Function: getTypeParser] },
  RowCtor: null,
  rowAsArray: false,
  _prebuiltEmptyResultObject: { '?column?': null }
}
Connection closed
```

Next steps \[#next-steps]

You've successfully connected Drizzle ORM to Prisma Postgres! For more advanced features like schemas, migrations, and queries, see the [Drizzle ORM documentation](https://orm.drizzle.team/docs/get-started).
