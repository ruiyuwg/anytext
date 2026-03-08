[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Prisma

![](/img/adapters/prisma.svg)

# Prisma Adapter

## Resources[](#resources)

-   [Prisma documentation](https://www.prisma.io/docs)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @prisma/client @prisma/extension-accelerate @auth/prisma-adapter
npm install prisma --save-dev
```

```
pnpm add @prisma/client @prisma/extension-accelerate @auth/prisma-adapter
pnpm add prisma --save-dev
```

```
yarn add @prisma/client @prisma/extension-accelerate @auth/prisma-adapter
yarn add prisma --dev
```

```
bun add @prisma/client @prisma/extension-accelerate @auth/prisma-adapter
bun add prisma --dev
```

### Environment Variables[](#environment-variables)

If you’re using Prisma Postgres, the `DATABASE_URL` will be automatically set up during initialization. For other databases, you’ll need to manually configure the `DATABASE_URL` environment variable. For more information, read the [docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql).

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

### Configuration[](#configuration)

First, initialize Prisma in your project. If you’re using Prisma Postgres, run:

```
npx prisma init --db --output ./src/generated/prisma
```

This will create a Prisma Postgres database, set up your schema file, and configure the output directory for the generated Prisma Client.

For other databases, run:

```
npx prisma init --output ./src/generated/prisma
```

Then manually configure your `DATABASE_URL` in the `.env` file.

To improve performance using `Prisma ORM`, we can set up the Prisma instance to ensure only one instance is created throughout the project and then import it from any file as needed. This approach avoids recreating instances of PrismaClient every time it is used. Finally, we can import the Prisma instance from the `auth.ts` file configuration.

prisma.ts

```
import { PrismaClient } from "../src/generated/client"
import { withAccelerate } from "@prisma/extension-accelerate"
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
```

If you’re not using Prisma Postgres with Accelerate, you can omit the `withAccelerate()` extension and delete `.$extends(withAccelerate())`.

⚠️

We recommend using version `@prisma/client@5.12.0` or above if using proxy (or middleware in older Next.js versions) or any other edge runtime(s). In Next.js 16+, `proxy.ts` runs on the Node.js runtime, so this may no longer be necessary. See [edge compatibility](#edge-compatibility) below for more information.

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: PrismaAdapter(prisma),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: PrismaAdapter(prisma),
  })
)
```

### Edge Compatibility[](#edge-compatibility)

Prisma has shipped edge runtime support for their client in version `5.12.0`. You can read more about it on their [edge documentation](https://www.prisma.io/docs/orm/prisma-client/deployment/edge/overview). This requires specific database drivers and therefore is only compatible with certain database types / hosting providers. Check their [list of supported drivers](https://www.prisma.io/docs/orm/prisma-client/deployment/edge/overview#which-database-drivers-are-edge-compatible) before getting started. You can check out an example Auth.js application with `next-auth` and Prisma on the edge [here](https://github.com/ndom91/authjs-prisma-edge-example).

For more about edge compatibility in general, check out our [edge compatibility guide](/guides/edge-compatibility).

The original database edge-runtime workaround, to split your `auth.ts` configuration into two, will be kept below.

#### Old Edge Workaround[](#old-edge-workaround)

At the moment, Prisma is still working on being fully compatible with edge runtimes like Vercel’s. See the issue being tracked [here](https://github.com/prisma/prisma/issues/20560), and Prisma’s announcement about early edge support in the `5.9.1` [changelog](https://github.com/prisma/prisma/releases/tag/5.9.0). There are two options to deal with this issue:

-   Use the Prisma’s [Accelerate](https://pris.ly/d/accelerate) feature
-   Follow our [Edge Compatibility](/guides/edge-compatibility) page as the workaround. This uses the `jwt` session strategy and separates the `auth.ts` configuration into two files.

Using Prisma with the `jwt` session strategy and `@prisma/client@5.9.1` or above doesn’t require any additional modifications, other than ensuring you don’t do any database queries in your proxy (or middleware in older Next.js versions).

Since `@prisma/client@5.9.1`, Prisma no longer throws about being incompatible with the edge runtime at instantiation, but at query time. Therefore, it is possible to import it in files being used in your proxy as long as you do not execute any queries in your proxy.

### Schema[](#schema)

You need to use at least Prisma `2.26.0`. Create a schema file at `prisma/schema.prisma` with the following models.

PostgreSQL

MySQL

SQLite

MongoDB

### Apply Schema[](#apply-schema)

This will create an SQL migration file and execute it:

npmpnpmyarnbun

```
npm exec prisma migrate dev
```

```
pnpm exec prisma migrate dev
```

```
yarn prisma migrate dev
```

```
bunx prisma migrate dev
```

Note that you will need to specify your database connection string in the environment variable `DATABASE_URL`. You can do this by setting it in a `.env` file at the root of your project.

### Generate Prisma Client[](#generate-prisma-client)

`prisma migrate dev` will also generate the Prisma client, but if you need to generate it again manually you can run the following command.

npmpnpmyarnbun

```
npm exec prisma generate
```

```
pnpm exec prisma generate
```

```
yarn prisma generate
```

```
bunx prisma generate
```

### Development Workflow[](#development-workflow)

When you’re working on your application and making changes to your database schema, you’ll need to run the migrate command again every time you make changes to the schema in order for Prisma to (1) generate a migration file and apply it to the underlying database and (2) regenerate the Prisma client in your project with the latest types and model methods.

npmpnpmyarnbun

```
npm exec prisma migrate dev
```

```
pnpm exec prisma migrate dev
```

```
yarn prisma migrate dev
```

```
bunx prisma migrate dev
```

### Naming Conventions[](#naming-conventions)

If mixed `snake_case` and `camelCase` column names is an issue for you and/or your underlying database system, we recommend using Prisma’s [`@map()` feature](https://www.prisma.io/docs/concepts/components/prisma-schema/names-in-underlying-database) to change the field names. This won’t affect Auth.js, but will allow you to customize the column names to whichever naming convention you prefer.

For example, moving to `snake_case` and plural table names.

schema.prisma

```
model Account {
  id                 String  @id @default(cuid())
  userId             String  @map("user_id")
  type               String
  provider           String
  providerAccountId  String  @map("provider_account_id")
  refresh_token      String? @db.Text
  access_token       String? @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String? @db.Text
  session_state      String?
 
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@unique([provider, providerAccountId])
  @@map("accounts")
}
 
model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique @map("session_token")
  userId       String   @map("user_id")
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
 
  @@map("sessions")
}
 
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  accounts      Account[]
  sessions      Session[]
 
  @@map("users")
}
 
model VerificationToken {
  identifier String
  token      String
  expires    DateTime
 
  @@unique([identifier, token])
  @@map("verification_tokens")
}
```

[PouchDB](/getting-started/adapters/pouchdb "PouchDB")[Sequelize](/getting-started/adapters/sequelize "Sequelize")
