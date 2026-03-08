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

# Delete connection (/docs/management-api/endpoints/connections/delete-connections-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Deletes the connection with the given ID.

# Get connection (/docs/management-api/endpoints/connections/get-connections-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the connection with the given ID.

# List connections (/docs/management-api/endpoints/connections/get-connections)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all connections the actor has access to, with optional database filter.

# Create connection (/docs/management-api/endpoints/connections/post-connections)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Creates a new connection for the specified database.

# Get list of backups (/docs/management-api/endpoints/database-backups/get-databases-by-database-id-backups)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns backups for the specified database.

# Get database usage metrics (/docs/management-api/endpoints/database-usage/get-databases-by-database-id-usage)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns usage metrics for the specified database.

# Delete database (/docs/management-api/endpoints/databases/delete-databases-by-database-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Deletes the database with the given ID.

# Get database (/docs/management-api/endpoints/databases/get-databases-by-database-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the database with the given ID.

# List databases (/docs/management-api/endpoints/databases/get-databases)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all databases the token has access to. Optionally filter by project ID.

# Get list of databases (/docs/management-api/endpoints/databases/get-projects-by-project-id-databases)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns databases for the given project.

# Update database (/docs/management-api/endpoints/databases/patch-databases-by-database-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Updates the database with the given ID.

# Create database (/docs/management-api/endpoints/databases/post-databases)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Creates a new database in the specified project.

# Create database (/docs/management-api/endpoints/databases/post-projects-by-project-id-databases)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Creates a new database for the given project.

# Get list of database connections (/docs/management-api/endpoints/databases-connections/get-databases-by-database-id-connections)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all connections for the given database.

# Create database connection string (/docs/management-api/endpoints/databases-connections/post-databases-by-database-id-connections)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Creates a new connection string for the given database.

# Delete integration (/docs/management-api/endpoints/integrations/delete-integrations-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Revokes the integration tokens by integration ID.

# Revoke integration tokens (/docs/management-api/endpoints/integrations/delete-workspaces-by-workspace-id-integrations-by-client-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Revokes the integration tokens with the given client ID.

# Get integration by ID (/docs/management-api/endpoints/integrations/get-integrations-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns a single integration by its ID.

# Get list of integrations (/docs/management-api/endpoints/integrations/get-integrations)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns integrations filtered by workspace ID.

# Get list of integrations (/docs/management-api/endpoints/integrations/get-workspaces-by-workspace-id-integrations)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns integrations for the given workspace.

# Get Prisma Accelerate regions (/docs/management-api/endpoints/misc/get-regions-accelerate)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all available regions for Prisma Accelerate.

# Get Prisma Postgres regions (/docs/management-api/endpoints/misc/get-regions-postgres)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all available regions for Prisma Postgres.

# Delete project (/docs/management-api/endpoints/projects/delete-projects-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Deletes the project with the given ID.

# Get project (/docs/management-api/endpoints/projects/get-projects-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the project with the given ID.

# Get list of projects (/docs/management-api/endpoints/projects/get-projects)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the list of projects the token has access to.

# Update project (/docs/management-api/endpoints/projects/patch-projects-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Updates the project with the given ID.

# Transfer project (/docs/management-api/endpoints/projects/post-projects-by-id-transfer)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Transfer the project with the given ID to the new owner's workspace

# Create project with a postgres database (/docs/management-api/endpoints/projects/post-projects)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Creates a new project with a postgres database.

# Get all regions (/docs/management-api/endpoints/regions/get-regions)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns all available regions across products. Optionally filter by product.

# Get workspace (/docs/management-api/endpoints/workspaces/get-workspaces-by-id)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the workspace with the given ID.

# Get list of workspaces (/docs/management-api/endpoints/workspaces/get-workspaces)

{/\* This file was generated by Fumadocs. Do not edit this file directly. Any changes should be made by running the generation command again. \*/}

Returns the list of workspaces the current token can access.
