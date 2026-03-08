# No Rust engine (/docs/v6/orm/prisma-client/setup-and-configuration/no-rust-engine)

As of [v6.16.0](https://pris.ly/release/6.16.0), usage of Prisma ORM without [Rust engine](/v6/orm/more/internals/engines) binaries on PostgreSQL, CockroachDB, Neon, MySQL, PlanetScale, SQLite, D1 & MS SQL Server databases has been [Generally Available](/v6/orm/more/releases#generally-available-ga).

This page gives an overview of how to use this version of Prisma ORM.

Prisma ORM without Rust engines \[#prisma-orm-without-rust-engines]

The main technical differences if you're using Prisma ORM without a Rust engine are:

- no `binaryTargets` field on the `generator` block
- no query engine binary that's downloaded into the directory with your generated Prisma Client
- `engineType` needs to be set to `"client"` on the `generator` block
- required usage of [driver adapters](/v6/orm/overview/databases/database-drivers#driver-adapters) for database connection management

<CalloutContainer type="warning">
  <CalloutDescription>
    The Rust-free version of Prisma ORM has been thoroughly tested with the `prisma-client` generator (see below), not with `prisma-client-js`. Use the old generator at your discretion.
  </CalloutDescription>
</CalloutContainer>

Usage \[#usage]

Prerequisites \[#prerequisites]

- Prisma ORM v6.15.0 (or later)

1. Set engineType on the generator block \[#1-set-enginetype-on-the-generator-block]

```prisma title="schema.prisma"
generator client {
  provider        = "prisma-client" // or `prisma-client-js`
  output          = "../generated/prisma"
  engineType      = "client" // enable Prisma ORM without Rust
}
```

2. Re-generate Prisma Client \[#2-re-generate-prisma-client]

To make the configuration take effect, you need re-generate Prisma Client:

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
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

3. Install the driver adapter \[#3-install-the-driver-adapter]

Depending on the database you use, you need to install a different driver adapter library:

<CodeBlockTabs defaultValue="PostgreSQL">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="PostgreSQL">
      PostgreSQL
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="SQLite">
  SQLite
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="D1">
  D1
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="MySQL/MariaDB">
  MySQL/MariaDB
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="PlanetScale">
  PlanetScale
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="MSSQL">
  MSSQL
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="CockroachDB">
  CockroachDB
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Neon Serverless">
  Neon Serverless
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="PostgreSQL">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-pg
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="SQLite">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-better-sqlite3
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="D1">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-d1
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-d1
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="MySQL/MariaDB">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-mariadb
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-mariadb
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-mariadb
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-mariadb
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="PlanetScale">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-planetscale
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-planetscale
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-planetscale
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-planetscale
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="MSSQL">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-mssql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-mssql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-mssql
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-mssql
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="CockroachDB">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-pg
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-pg
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>

  <CodeBlockTab value="Neon Serverless">
    <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="npm">
          npm
        </CodeBlockTabsTrigger>

````
    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/adapter-neon
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/adapter-neon
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/adapter-neon
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/adapter-neon
    ```
  </CodeBlockTab>
</CodeBlockTabs>
````

  </CodeBlockTab>
</CodeBlockTabs>

4. Instantiate Prisma Client \[#4-instantiate-prisma-client]

Finally, instantiate Prisma Client which you can do using the driver adapter and the connection URL for the database instance you're using:

<CodeBlockTabs defaultValue="PostgreSQL">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="PostgreSQL">
      PostgreSQL
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="SQLite">
  SQLite
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="D1">
  D1
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="MySQL/MariaDB">
  MySQL/MariaDB
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="PlanetScale">
  PlanetScale
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="MSSQL">
  MSSQL
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="CockroachDB">
  CockroachDB
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Neon Serverless">
  Neon Serverless
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="PostgreSQL">
    ```typescript
    import { PrismaPg } from '@prisma/adapter-pg'
    import { PrismaClient } from '../generated/prisma/client'

````
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
```
````

  </CodeBlockTab>

  <CodeBlockTab value="SQLite">
    ```typescript
    import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
    import { PrismaClient } from '../generated/prisma/client';

````
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter });
```
````

  </CodeBlockTab>

  <CodeBlockTab value="D1">
    ```typescript
    import { PrismaClient } from '../generated/prisma/client'
    import { PrismaD1 } from '@prisma/adapter-d1'

````
export interface Env {
  DB: D1Database
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const adapter = new PrismaD1(env.DB)
    const prisma = new PrismaClient({ adapter })
    // …
    // ... query your DB
  },
}
```
````

  </CodeBlockTab>

  <CodeBlockTab value="MySQL/MariaDB">
    ```typescript
    import { PrismaMariaDb } from '@prisma/adapter-mariadb';
    import { PrismaClient } from '../generated/prisma/client';

````
const adapter = new PrismaMariaDb({
host: "localhost",
port: 3306,
connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });
```
````

  </CodeBlockTab>

  <CodeBlockTab value="PlanetScale">
    ```typescript
    import { PrismaPlanetScale } from '@prisma/adapter-planetscale'
    import { PrismaClient } from '../generated/prisma/client'
    import { fetch as undiciFetch } from 'undici'

````
const adapter = new PrismaPlanetScale({ url: process.env.DATABASE_URL, fetch: undiciFetch })
const prisma = new PrismaClient({ adapter })
```
````

  </CodeBlockTab>

  <CodeBlockTab value="MSSQL">
    ```typescript
    import { PrismaMssql } from '@prisma/adapter-mssql';
    import { PrismaClient } from '../generated/prisma/client';

````
const sqlConfig = {
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
server: process.env.HOST,
pool: {
max: 10,
min: 0,
idleTimeoutMillis: 30000
},
options: {
encrypt: true, // for azure
trustServerCertificate: false // change to true for local dev / self-signed certs
}
}

const adapter = new PrismaMssql(sqlConfig)
const prisma = new PrismaClient({ adapter });
```
````

  </CodeBlockTab>

  <CodeBlockTab value="CockroachDB">
    ```typescript
    import { PrismaPg } from '@prisma/adapter-pg'
    import { PrismaClient } from '../generated/prisma/client'

````
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })
```
````

  </CodeBlockTab>

  <CodeBlockTab value="Neon Serverless">
    ```typescript
    import { PrismaClient } from '../generated/prisma/client'
    import { PrismaNeon } from '@prisma/adapter-neon'
    import dotenv from 'dotenv'

````
dotenv.config()
const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })
```
````

  </CodeBlockTab>
</CodeBlockTabs>

5. Query your database \[#5-query-your-database]

If you went through the previous steps, you can query your database as you're used to with Prisma Client. No other changes are needed.

Usage with Prisma Accelerate or Prisma Postgres \[#usage-with-prisma-accelerate-or-prisma-postgres]

When using the Rust-free version of Prisma ORM with [Prisma Accelerate](/v6/accelerate) or [Prisma Postgres](/v6/postgres), you **should not** use driver adapters. Instead, you can directly instantiate Prisma Client with the appropriate extension.

1. Set engineType on the generator block \[#1-set-enginetype-on-the-generator-block-1]

```prisma title="schema.prisma"
generator client {
  provider        = "prisma-client" // or `prisma-client-js`
  output          = "../generated/prisma"
  engineType      = "client" // enable Prisma ORM without Rust
}
```

2. Re-generate Prisma Client \[#2-re-generate-prisma-client-1]

To make the configuration take effect, you need re-generate Prisma Client:

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
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

3. Instantiate Prisma Client with Accelerate \[#3-instantiate-prisma-client-with-accelerate]

Import and instantiate Prisma Client with the Accelerate extension:

```typescript
import { PrismaClient } from "../generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());
```

4. Query your database \[#4-query-your-database]

If you went through the previous steps, you can query your database as you're used to with Prisma Client. No other changes are needed.

Usage with older versions (Preview) \[#usage-with-older-versions-preview]

The Rust-free version of Prisma ORM has been in Preview from versions v6.7.0 to v.6.14.0. Expand below if you're using any of these versions and are unable to upgrade to the latest one.

<details>
  <summary>
    Expand to see instructions for Prisma ORM v6.7.0 to v6.14.0
  </summary>

Prerequisites \[#prerequisites-1]

- Any Prisma ORM version between 6.7.0 and 6.14.0

1. Set feature flags \[#1-set-feature-flags]

Usage of the new architecture requires the `driverAdapters` and `queryCompiler` feature flags to be set:

```prisma title="schema.prisma"
generator client {
  provider        = "prisma-client"
  previewFeatures = ["queryCompiler", "driverAdapters"]
  output          = "../generated/prisma"
}
```

2. Re-generate Prisma Client \[#2-re-generate-prisma-client-2]

To make the feature flags take effect, you need re-generate Prisma Client:

  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

````
  <CodeBlockTabsTrigger value="pnpm">
    pnpm
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="yarn">
    yarn
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="bun">
    bun
  </CodeBlockTabsTrigger>
</CodeBlockTabsList>

<CodeBlockTab value="npm">
  ```bash
  npx prisma generate
  ```
</CodeBlockTab>

<CodeBlockTab value="pnpm">
  ```bash
  pnpm dlx prisma generate
  ```
</CodeBlockTab>

<CodeBlockTab value="yarn">
  ```bash
  yarn dlx prisma generate
  ```
</CodeBlockTab>

<CodeBlockTab value="bun">
  ```bash
  bunx --bun prisma generate
  ```
</CodeBlockTab>
````

  </CodeBlockTabs>

3. Install the driver adapter \[#3-install-the-driver-adapter-1]

Depending on the database you use, you need to install a different driver adapter library:

  <CodeBlockTabs defaultValue="PostgreSQL">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="PostgreSQL">
        PostgreSQL
      </CodeBlockTabsTrigger>

````
  <CodeBlockTabsTrigger value="SQLite">
    SQLite
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="D1">
    D1
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="MySQL/MariaDB">
    MySQL/MariaDB
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="PlanetScale">
    PlanetScale
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="MSSQL">
    MSSQL
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="CockroachDB">
    CockroachDB
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="Neon Serverless">
    Neon Serverless
  </CodeBlockTabsTrigger>
</CodeBlockTabsList>

<CodeBlockTab value="PostgreSQL">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-pg
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="SQLite">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-better-sqlite3
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-better-sqlite3
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-better-sqlite3
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-better-sqlite3
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="D1">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-d1
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-d1
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-d1
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-d1
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="MySQL/MariaDB">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-mariadb
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-mariadb
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-mariadb
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-mariadb
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="PlanetScale">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-planetscale
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-planetscale
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-planetscale
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-planetscale
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="MSSQL">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-mssql
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-mssql
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-mssql
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-mssql
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="CockroachDB">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-pg
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-pg
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>

<CodeBlockTab value="Neon Serverless">
  <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="npm">
        npm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="pnpm">
        pnpm
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="yarn">
        yarn
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="bun">
        bun
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="npm">
      ```bash
      npm install @prisma/adapter-neon
      ```
    </CodeBlockTab>

    <CodeBlockTab value="pnpm">
      ```bash
      pnpm add @prisma/adapter-neon
      ```
    </CodeBlockTab>

    <CodeBlockTab value="yarn">
      ```bash
      yarn add @prisma/adapter-neon
      ```
    </CodeBlockTab>

    <CodeBlockTab value="bun">
      ```bash
      bun add @prisma/adapter-neon
      ```
    </CodeBlockTab>
  </CodeBlockTabs>
</CodeBlockTab>
````

  </CodeBlockTabs>

4. Instantiate Prisma Client \[#4-instantiate-prisma-client-1]

Finally, you need to instantiate Prisma Client which you can do using the driver adapter and the connection URL for the database instance you're using.

  <CodeBlockTabs defaultValue="PostgreSQL">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="PostgreSQL">
        PostgreSQL
      </CodeBlockTabsTrigger>

````
  <CodeBlockTabsTrigger value="SQLite">
    SQLite
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="D1">
    D1
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="MySQL/MariaDB">
    MySQL/MariaDB
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="PlanetScale">
    PlanetScale
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="MSSQL">
    MSSQL
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="CockroachDB">
    CockroachDB
  </CodeBlockTabsTrigger>

  <CodeBlockTabsTrigger value="Neon Serverless">
    Neon Serverless
  </CodeBlockTabsTrigger>
</CodeBlockTabsList>

<CodeBlockTab value="PostgreSQL">
  ```typescript
  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from '../generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })
  ```
</CodeBlockTab>

<CodeBlockTab value="SQLite">
  ```typescript
  import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
  import { PrismaClient } from '../generated/prisma/client';

  const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter });
  ```
</CodeBlockTab>

<CodeBlockTab value="D1">
  ```typescript
  import { PrismaClient } from '../generated/prisma/client'
  import { PrismaD1 } from '@prisma/adapter-d1'

  export interface Env {
    DB: D1Database
  }

  export default {
    async fetch(
      request: Request,
      env: Env,
      ctx: ExecutionContext
    ): Promise<Response> {
      const adapter = new PrismaD1(env.DB)
      const prisma = new PrismaClient({ adapter })

      // ... query your DB

  },
  }
  ```
</CodeBlockTab>

<CodeBlockTab value="MySQL/MariaDB">
  ```typescript
  import { PrismaMariaDb } from '@prisma/adapter-mariadb';
  import { PrismaClient } from '../generated/prisma/client';

  const adapter = new PrismaMariaDb({
    host: "localhost",
    port: 3306,
    connectionLimit: 5
  });
  const prisma = new PrismaClient({ adapter });
  ```
</CodeBlockTab>

<CodeBlockTab value="PlanetScale">
  ```typescript
  import { PrismaPlanetScale } from '@prisma/adapter-planetscale'
  import { PrismaClient } from '../generated/prisma/client'
  import { fetch as undiciFetch } from 'undici'

  const adapter = new PrismaPlanetScale({ url: process.env.DATABASE_URL, fetch: undiciFetch })
  const prisma = new PrismaClient({ adapter })
  ```
</CodeBlockTab>

<CodeBlockTab value="MSSQL">
  ```typescript
  import { PrismaMssql } from '@prisma/adapter-mssql';
  import { PrismaClient } from '../generated/prisma/client';

  const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.HOST,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }

  const adapter = new PrismaMssql(sqlConfig)
  const prisma = new PrismaClient({ adapter });
  ```
</CodeBlockTab>

<CodeBlockTab value="CockroachDB">
  ```typescript
  import { PrismaPg } from '@prisma/adapter-pg'
  import { PrismaClient } from '../generated/prisma/client'

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })
  ```
</CodeBlockTab>

<CodeBlockTab value="Neon Serverless">
  ```typescript
  import { PrismaClient } from '../generated/prisma/client'
  import { PrismaNeon } from '@prisma/adapter-neon'
  import dotenv from 'dotenv'

  dotenv.config()
  const connectionString = `${process.env.DATABASE_URL}`

  const adapter = new PrismaNeon({ connectionString })
  const prisma = new PrismaClient({ adapter })
  ```
</CodeBlockTab>
````

  </CodeBlockTabs>

5. Query your database \[#5-query-your-database-1]

If you went through the previous steps, you can query your database as you're used to with Prisma Client. No other changes are needed.

</details>
