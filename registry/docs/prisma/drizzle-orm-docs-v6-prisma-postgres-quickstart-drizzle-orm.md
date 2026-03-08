# Drizzle ORM (/docs/v6/prisma-postgres/quickstart/drizzle-orm)

[Drizzle ORM](https://orm.drizzle.team) is a TypeScript ORM. In this guide, you'll learn how to connect Drizzle ORM to [Prisma Postgres](/v6/postgres).

Prerequisites \[#prerequisites]

- Node.js version 16 or higher
- TypeScript version 5.0 or higher

1. Create a new project \[#1-create-a-new-project]

Create a new directory for your project and initialize it with npm:

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
    mkdir drizzle-quickstart
    cd drizzle-quickstart
    npm init -y
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    mkdir drizzle-quickstart
    cd drizzle-quickstart
    pnpm init -y
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    mkdir drizzle-quickstart
    cd drizzle-quickstart
    yarn init -y
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    mkdir drizzle-quickstart
    cd drizzle-quickstart
    bun init -y
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Install TypeScript and initialize it:

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
    npm install --save-dev typescript
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add --save-dev typescript
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add --dev typescript
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add --dev typescript
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
    npx tsc --init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx tsc --init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx tsc --init
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun tsc --init
    ```
  </CodeBlockTab>
</CodeBlockTabs>

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
    npx create-db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx create-db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx create-db
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun create-db
    ```
  </CodeBlockTab>
</CodeBlockTabs>

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

<CalloutContainer type="warning">
  <CalloutDescription>
    **Never commit `.env` files to version control.** Add `.env` to your `.gitignore` file to keep credentials secure.
  </CalloutDescription>
</CalloutContainer>

The database created is temporary and will be deleted in 24 hours unless claimed. Claiming moves the database into your [Prisma Data Platform](https://console.prisma.io) account. Visit the claim URL from the output to keep your database.

<CalloutContainer type="info">
  <CalloutDescription>
    To learn more about the `create-db` CLI tool, see the [create-db documentation](/v6/postgres/introduction/npx-create-db).
  </CalloutDescription>
</CalloutContainer>

3. Install dependencies \[#3-install-dependencies]

Install Drizzle ORM and the PostgreSQL driver:

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
    npm install drizzle-orm pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add drizzle-orm pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add drizzle-orm pg dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add drizzle-orm pg dotenv
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
    npm install --save-dev drizzle-kit @types/pg tsx
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add --save-dev drizzle-kit @types/pg tsx
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add --dev drizzle-kit @types/pg tsx
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add --dev drizzle-kit @types/pg tsx
    ```
  </CodeBlockTab>
</CodeBlockTabs>

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
    npx tsx src/script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx tsx src/script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx tsx src/script.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun tsx src/script.ts
    ```
  </CodeBlockTab>
</CodeBlockTabs>

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
