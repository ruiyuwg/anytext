# TypeORM (/docs/prisma-postgres/quickstart/typeorm)

[TypeORM](https://typeorm.io) is a TypeScript ORM. In this guide, you'll learn how to connect TypeORM to [Prisma Postgres](/postgres).

Prerequisites \[#prerequisites]

- Node.js version 16 or higher
- TypeScript version 4.5 or higher

1. Generate a TypeORM project \[#1-generate-a-typeorm-project]

Use the TypeORM CLI to generate a starter project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx typeorm init --name typeorm-quickstart --database postgres
```



```bash
pnpm dlx typeorm init --name typeorm-quickstart --database postgres
```



```bash
yarn dlx typeorm init --name typeorm-quickstart --database postgres
```



```bash
bunx --bun typeorm init --name typeorm-quickstart --database postgres
```
````

This command will generate a new project with the following structure:

```
typeorm-quickstart
├── src
│   ├── entity
│   │   └── User.ts       # Sample entity
│   ├── migration         # Migrations folder
│   ├── data-source.ts    # Data source configuration
│   └── index.ts          # Application entry point
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

2. Install dependencies \[#2-install-dependencies]

Navigate to the project directory and install dependencies:

````
  npm



  pnpm



  yarn



  bun




```bash
cd typeorm-quickstart
npm install
```



```bash
cd typeorm-quickstart
pnpm install
```



```bash
cd typeorm-quickstart
yarn install
```



```bash
cd typeorm-quickstart
bun install
```
````

Install dotenv to load environment variables:

````
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

3\. Create a Prisma Postgres database \[#3-create-a-prisma-postgres-database]

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

4\. Configure database connection \[#4-configure-database-connection]

Update the `src/data-source.ts` file to use your Prisma Postgres connection:

```typescript title="src/data-source.ts"
import "reflect-metadata";
import "dotenv/config"; // [!code ++]
import { DataSource } from "typeorm";
import { User } from "./entity/User";

// Parse DATABASE_URL into connection parameters // [!code ++]
function parseConnectionString(url: string) {
  // [!code ++]
  const parsed = new URL(url); // [!code ++]
  return {
    // [!code ++]
    host: parsed.hostname, // [!code ++]
    port: parseInt(parsed.port), // [!code ++]
    username: parsed.username, // [!code ++]
    password: parsed.password, // [!code ++]
    database: parsed.pathname.slice(1), // Remove leading '/' // [!code ++]
  }; // [!code ++]
} // [!code ++]

const connectionParams = parseConnectionString(process.env.DATABASE_URL!); // [!code ++]

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", // [!code --]
  port: 5432, // [!code --]
  username: "test", // [!code --]
  password: "test", // [!code --]
  database: "test", // [!code --]
  ...connectionParams, // [!code ++]
  ssl: true, // [!code ++]
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
```

5. Run the application \[#5-run-the-application]

Start the application:

````
  npm



  pnpm



  yarn



  bun




```bash
npm start
```



```bash
pnpm start
```



```bash
yarn start
```



```bash
bun start
```
````

You should see output indicating the connection was successful and a new user was inserted into the database:

```bash
Inserting a new user into the database...
Saved a new user with id: 1
Loading users from the database...
Loaded users:  [ User { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 } ]
```

Next steps \[#next-steps]

You've successfully connected TypeORM to Prisma Postgres! For more advanced features like entities, migrations, and queries, see the [TypeORM documentation](https://typeorm.io/docs/getting-started).
