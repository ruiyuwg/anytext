[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")Neo4j

![](/img/adapters/neo4j.svg)

# Neo4j Adapter

## Resources[](#resources)

-   [Neo4j documentation](https://neo4j.com/docs/)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/neo4j-adapter neo4j-driver
```

```
pnpm add @auth/neo4j-adapter neo4j-driver
```

```
yarn add @auth/neo4j-adapter neo4j-driver
```

```
bun add @auth/neo4j-adapter neo4j-driver
```

### Environment Variables[](#environment-variables)

```
NEO4J_URI=bolt://localhost
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=abc
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@auth/neo4j-adapter"
 
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
)
 
const neo4jSession = driver.session()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: Neo4jAdapter(neo4jSession),
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@auth/neo4j-adapter"
 
const driver = neo4j.driver(
  import.meta.env.NEO4J_URI,
  neo4j.auth.basic(
    import.meta.env.NEO4J_USERNAME,
    import.meta.env.NEO4J_PASSWORD
  )
)
 
const neo4jSession = driver.session()
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: Neo4jAdapter(neo4jSession),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@auth/neo4j-adapter"
 
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
)
 
const neo4jSession = driver.session()
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [],
  adapter: Neo4jAdapter(neo4jSession),
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@auth/neo4j-adapter"
 
const app = express()
 
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
)
 
const neo4jSession = driver.session()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: Neo4jAdapter(neo4jSession),
  })
)
```

### Schema[](#schema)

#### Node labels[](#node-labels)

The following node labels are used.

-   User
-   Account
-   Session
-   VerificationToken

#### Relationships[](#relationships)

The following relationships and relationship labels are used.

-   `(:User)-[:HAS_ACCOUNT]->(:Account)`
-   `(:User)-[:HAS_SESSION]->(:Session)`

#### Properties[](#properties)

This schema is adapted for use in Neo4j and is based upon our main [models](https://authjs.dev/reference/core/adapters#models). Please check there for the node properties. Relationships have no properties.

#### Indexes[](#indexes)

Optimum indexes will vary on your edition of Neo4j i.e. community or enterprise, and in case you have your own additional data on the nodes. Below are basic suggested indexes.

1.  For **both** Community Edition & Enterprise Edition create constraints and indexes

```
CREATE CONSTRAINT user_id_constraint IF NOT EXISTS
ON (u:User) ASSERT u.id IS UNIQUE;
 
CREATE INDEX user_id_index IF NOT EXISTS
FOR (u:User) ON (u.id);
 
CREATE INDEX user_email_index IF NOT EXISTS
FOR (u:User) ON (u.email);
 
CREATE CONSTRAINT session_session_token_constraint IF NOT EXISTS
ON (s:Session) ASSERT s.sessionToken IS UNIQUE;
 
CREATE INDEX session_session_token_index IF NOT EXISTS
FOR (s:Session) ON (s.sessionToken);
```

2a. For Community Edition **only** create single-property indexes

```
CREATE INDEX account_provider_index IF NOT EXISTS
FOR (a:Account) ON (a.provider);
 
CREATE INDEX account_provider_account_id_index IF NOT EXISTS
FOR (a:Account) ON (a.providerAccountId);
 
CREATE INDEX verification_token_identifier_index IF NOT EXISTS
FOR (v:VerificationToken) ON (v.identifier);
 
CREATE INDEX verification_token_token_index IF NOT EXISTS
FOR (v:VerificationToken) ON (v.token);
```

2b. For Enterprise Edition **only** create composite node key constraints and indexes

```
CREATE CONSTRAINT account_provider_composite_constraint IF NOT EXISTS
ON (a:Account) ASSERT (a.provider, a.providerAccountId) IS NODE KEY;
 
CREATE INDEX account_provider_composite_index IF NOT EXISTS
FOR (a:Account) ON (a.provider, a.providerAccountId);
 
CREATE CONSTRAINT verification_token_composite_constraint IF NOT EXISTS
ON (v:VerificationToken) ASSERT (v.identifier, v.token) IS NODE KEY;
 
CREATE INDEX verification_token_composite_index IF NOT EXISTS
FOR (v:VerificationToken) ON (v.identifier, v.token);
```

[MongoDB](/getting-started/adapters/mongodb "MongoDB")[Neon](/getting-started/adapters/neon "Neon")
