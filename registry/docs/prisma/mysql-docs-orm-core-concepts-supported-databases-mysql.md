# MySQL (/docs/orm/core-concepts/supported-databases/mysql)

Prisma ORM supports MySQL and MariaDB databases, including self-hosted servers and serverless PlanetScale.

Setup \[#setup]

Configure the MySQL provider in your Prisma schema:

```prisma title="schema.prisma"
datasource db {
  provider = "mysql"
}
```

**Self-hosted MySQL/MariaDB:**

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"), // mysql://user:pass@host:3306/db
  },
});
```

**PlanetScale:**

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"), // Uses connection string from PlanetScale
  },
});
```

Using driver adapters \[#using-driver-adapters]

Use JavaScript database drivers via [driver adapters](/orm/core-concepts/supported-databases/database-drivers#driver-adapters):

**With `mariadb` driver:**

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/adapter-mariadb
```



```bash
pnpm add @prisma/adapter-mariadb
```



```bash
yarn add @prisma/adapter-mariadb
```



```bash
bun add @prisma/adapter-mariadb
```
````

```ts
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma";

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
```

**PlanetScale serverless:**

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/adapter-planetscale undici
```



```bash
pnpm add @prisma/adapter-planetscale undici
```



```bash
yarn add @prisma/adapter-planetscale undici
```



```bash
bun add @prisma/adapter-planetscale undici
```
````

```ts
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "./generated/prisma";
import { fetch as undiciFetch } from "undici"; // Only for Node.js <18

const adapter = new PrismaPlanetScale({
  url: process.env.DATABASE_URL,
  fetch: undiciFetch,
});
const prisma = new PrismaClient({ adapter });
```

Supported variants \[#supported-variants]

Self-hosted MySQL/MariaDB \[#self-hosted-mysqlmariadb]

Standard MySQL (5.6+) or MariaDB (10.0+) servers.

- Connection URL: `mysql://user:pass@host:3306/database`
- Full Prisma Migrate support
- Use `prisma migrate dev` for development
- Both MySQL and MariaDB use the same `mysql` provider

**Connection string arguments:**

| Argument          | Default                | Description                    |
| ----------------- | ---------------------- | ------------------------------ |
| `connect_timeout` | `5`                    | Seconds to wait for connection |
| `sslcert`         |                        | Path to server certificate     |
| `sslidentity`     |                        | Path to PKCS12 certificate     |
| `sslaccept`       | `accept_invalid_certs` | Certificate validation mode    |

PlanetScale \[#planetscale]

Serverless MySQL-compatible database built on Vitess clustering system.

- Connection URL: Update host to `aws.connect.psdb.cloud`
- Uses Vitess for horizontal scaling
- Database branching workflow (development/production branches)
- Non-blocking schema changes

**Key features:**

- Enterprise scalability across multiple servers
- Database branches for schema testing
- Non-blocking schema deployments
- Serverless-optimized (avoids connection limits)

**Branch workflow:**

1. **Development branches** - Test schema changes freely
2. **Production branches** - Protected, require deploy requests
3. **Deploy requests** - Merge dev changes to production

**Schema changes:**

Use `prisma db push` (not `prisma migrate`):

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push
```



```bash
pnpm dlx prisma db push
```



```bash
yarn dlx prisma db push
```



```bash
bunx --bun prisma db push
```
````

PlanetScale generates its own schema diff when merging branches.

**Referential integrity options:**

**Option 1: Emulate relations (recommended for default PlanetScale)**

Set `relationMode = "prisma"` to handle relations in Prisma Client:

```prisma title="schema.prisma"
datasource db {
  provider     = "mysql"
  relationMode = "prisma"
}
```

Add indexes on foreign keys manually:

```prisma
model Post {
  id       Int       @id @default(autoincrement())
  title    String
  comments Comment[]
}

model Comment {
  id     Int    @id @default(autoincrement())
  postId Int
  post   Post   @relation(fields: [postId], references: [id])

  @@index([postId]) // Required when using relationMode = "prisma"
}
```

**Option 2: Enable foreign key constraints**

[Enable foreign key constraints](https://planetscale.com/docs/concepts/foreign-key-constraints) in PlanetScale settings to use standard relations without `relationMode = "prisma"`.

**Resources:** [PlanetScale docs](https://planetscale.com/docs) • [Prisma integration](https://planetscale.com/docs/prisma/automatic-prisma-migrations)

Type mappings \[#type-mappings]

Type mapping between MySQL and Prisma schema \[#type-mapping-between-mysql-and-prisma-schema]

| Prisma     | MySQL/MariaDB    |
| ---------- | ---------------- |
| `String`   | `VARCHAR(191)`   |
| `Boolean`  | `TINYINT(1)`     |
| `Int`      | `INT`            |
| `BigInt`   | `BIGINT`         |
| `Float`    | `DOUBLE`         |
| `Decimal`  | `DECIMAL(65,30)` |
| `DateTime` | `DATETIME(3)`    |
| `Json`     | `JSON`           |
| `Bytes`    | `LONGBLOB`       |

See [full type mapping reference](/orm/reference/prisma-schema-reference#model-field-scalar-types) for complete details.

Common patterns \[#common-patterns]

**SSL connections:**

```bash
DATABASE_URL="mysql://user:pass@host:3306/db?sslcert=./cert.pem&sslaccept=strict"
```

**Unix socket connections:**

```bash
DATABASE_URL="mysql://user:pass@localhost/db?socket=/var/run/mysqld/mysqld.sock"
```

**PlanetScale sharding (Preview):**

Define shard keys in your schema:

```prisma
generator client {
  provider        = "prisma-client"
  output          = "./generated/prisma"
  previewFeatures = ["shardKeys"]
}

model User {
  id     String @default(uuid())
  region String @shardKey
}
```

**Connection troubleshooting:**

PlanetScale production branches are read-only for direct DDL. If you get error P3022, ensure you're:

- Using `prisma db push` instead of `prisma migrate`
- Working on a development branch, or
- Using a deploy request to update production
