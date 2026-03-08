[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Neon

![](/img/adapters/neon.svg)

# Neon Adapter

## Resources[](#resources)

-   [Neon documentation](https://neon.tech/docs/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/neon-adapter @neondatabase/serverless
```

```
pnpm add @auth/neon-adapter @neondatabase/serverless
```

```
yarn add @auth/neon-adapter @neondatabase/serverless
```

```
bun add @auth/neon-adapter @neondatabase/serverless
```

### Environment Variables[](#environment-variables)

```
DATABASE_URL=
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
 
// *DO NOT* create a `Pool` here, outside the request handler.
 
export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: NeonAdapter(pool),
    providers: [],
  }
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
 
// *DO NOT* create a `Pool` here, outside the request handler.
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => {
    // Create a `Pool` inside the request handler.
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    return {
      adapter: NeonAdapter(pool),
      providers: [],
    }
  }
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
 
// *DO NOT* create a `Pool` here, outside the request handler.
 
export const { handle, signIn, signOut } = SvelteKitAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: NeonAdapter(pool),
    providers: [],
  }
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
 
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: NeonAdapter(pool),
  })
)
```

### Schema[](#schema)

The SQL schema for the tables used by this adapter is as follows. Learn more about the models at our doc page on [Database Models](/guides/creating-a-database-adapter).

```
CREATE TABLE verification_token
(
  identifier TEXT NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  token TEXT NOT NULL,
 
  PRIMARY KEY (identifier, token)
);
 
CREATE TABLE accounts
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  "providerAccountId" VARCHAR(255) NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at BIGINT,
  id_token TEXT,
  scope TEXT,
  session_state TEXT,
  token_type TEXT,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE sessions
(
  id SERIAL,
  "userId" INTEGER NOT NULL,
  expires TIMESTAMPTZ NOT NULL,
  "sessionToken" VARCHAR(255) NOT NULL,
 
  PRIMARY KEY (id)
);
 
CREATE TABLE users
(
  id SERIAL,
  name VARCHAR(255),
  email VARCHAR(255),
  "emailVerified" TIMESTAMPTZ,
  image TEXT,
 
  PRIMARY KEY (id)
);
 
```

[Neo4j](/getting-started/adapters/neo4j "Neo4j")[PostgreSQL](/getting-started/adapters/pg "PostgreSQL")
