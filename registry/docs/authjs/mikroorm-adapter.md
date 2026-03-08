[Getting Started](/getting-started "Getting Started")[Adapters](/getting-started/adapters/azure-tables "Adapters")MikroORM

![](/img/adapters/mikro-orm.svg)

# MikroORM Adapter

## Resources[](#resources)

-   [MikroORM documentation](https://mikro-orm.io/docs/installation)

## Setup[](#setup)

### Installation[](#installation)

npmpnpmyarnbun

```
npm install @mikro-orm/core @auth/mikro-orm-adapter
```

```
pnpm add @mikro-orm/core @auth/mikro-orm-adapter
```

```
yarn add @mikro-orm/core @auth/mikro-orm-adapter
```

```
bun add @mikro-orm/core @auth/mikro-orm-adapter
```

### Environment Variables[](#environment-variables)

```
DATABASE_CONNECTION_STRING=./db.sqlite
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

./auth.ts

```
import NextAuth from "next-auth"
import { MikroOrmAdapter } from "@auth/mikro-orm-adapter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MikroOrmAdapter({
    // MikroORM options object - https://mikro-orm.io/docs/next/configuration#driver
    dbName: process.env.DATABASE_CONNECTION_STRING,
    type: "sqlite",
    debug: true,
  }),
  providers: [],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import { MikroOrmAdapter } from "@auth/mikro-orm-adapter"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
    adapter: MikroOrmAdapter({
      // MikroORM options object - https://mikro-orm.io/docs/next/configuration#driver
      dbName: import.meta.env.DATABASE_CONNECTION_STRING,
      type: "sqlite",
      debug: true,
    }),
  })
)
```

./src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { MikroOrmAdapter } from "@auth/mikro-orm-adapter"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: MikroOrmAdapter({
    // MikroORM options object - https://mikro-orm.io/docs/next/configuration#driver
    dbName: process.env.DATABASE_CONNECTION_STRING,
    type: "sqlite",
    debug: true,
  }),
  providers: [],
})
```

./src/routes/auth.route.ts

```
import { ExpressAuth } from "@auth/express"
import { MikroOrmAdapter } from "@auth/mikro-orm-adapter"
 
const app = express()
 
app.set("trust proxy", true)
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [],
    adapter: MikroOrmAdapter({
      // MikroORM options object - https://mikro-orm.io/docs/next/configuration#driver
      dbName: process.env.DATABASE_CONNECTION_STRING,
      type: "sqlite",
      debug: true,
    }),
  })
)
```

### Advanced usage[](#advanced-usage)

#### Passing custom entities[](#passing-custom-entities)

The MikroORM adapter ships with its own set of entities. If you’d like to extend them, you can optionally pass them to the adapter.

> This schema is adapted for use in MikroORM and based upon our main [schema](https://authjs.dev/reference/core/adapters#models)

./auth.ts

```
import config from "config/mikro-orm.ts"
import {
  Cascade,
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  Unique,
} from "@mikro-orm/core"
import { defaultEntities } from "@auth/mikro-orm-adapter"
 
const type { Account, Session } = defaultEntities
 
@Entity()
export class User implements defaultEntities.User {
  @PrimaryKey()
  id: string = randomUUID()
 
  @Property({ nullable: true })
  name?: string
 
  @Property({ nullable: true })
  @Unique()
  email?: string
 
  @Property({ type: "Date", nullable: true })
  emailVerified: Date | null = null
 
  @Property({ nullable: true })
  image?: string
 
  @OneToMany({
    entity: () => Session,
    mappedBy: (session) => session.user,
    hidden: true,
    orphanRemoval: true,
    cascade: [Cascade.ALL],
  })
  sessions = new Collection<Session>(this)
 
  @OneToMany({
    entity: () => Account,
    mappedBy: (account) => account.user,
    hidden: true,
    orphanRemoval: true,
    cascade: [Cascade.ALL],
  })
  accounts = new Collection<Account>(this)
 
  @Enum({ hidden: true })
  role = "ADMIN"
}
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MikroOrmAdapter(config, { entities: { User } }),
})
```

#### Including default entities[](#including-default-entities)

You may want to include the defaultEntities in your MikroORM configuration to include them in Migrations etc.

To achieve that include them in your “entities” array:

config/mikro-orm.ts

```
import { Options } from "@mikro-orm/core"
import { defaultEntities } from "@auth/mikro-orm-adapter"
 
const config: Options = {
  entities: [VeryImportantEntity, ...Object.values(defaultEntities)],
}
 
export default config
```

[Kysely](/getting-started/adapters/kysely "Kysely")[MongoDB](/getting-started/adapters/mongodb "MongoDB")
