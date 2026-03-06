# Drizzle extension for Prisma

If you have an existing project with Prisma and want to try Drizzle or gradually adopt it,
you can use our first-class extension that will add Drizzle API to your Prisma client. It will allow you to
use Drizzle alongside your Prisma queries reusing your existing DB connection.

## How to use

<Steps>
#### Install dependencies

You need to install Drizzle itself and a generator package that will create Drizzle schema from the Prisma schema. <Npm>
drizzle-orm@latest
-D drizzle-prisma-generator </Npm>

#### Update your Prisma schema

Add Drizzle generator to your Prisma schema. `output` is the path where generated Drizzle schema TS files will be placed.

```prisma copy filename="schema.prisma" {5-8}
generator client {
  provider = "prisma-client-js"
}

generator drizzle {
  provider = "drizzle-prisma-generator"
  output   = "./drizzle" // Where to put generated Drizle tables
}

// Rest of your Prisma schema

datasource db {
  provider = "postgresql"
  url      = env("DB_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}

...
```

#### Generate Drizzle schema

```bash
prisma generate
```

#### Add Drizzle extension to your Prisma client

\<CodeTabs items={\["PostgreSQL", "MySQL", "SQLite"]}> <CodeTab>

```ts copy
import { PrismaClient } from "@prisma/client";
import { drizzle } from "drizzle-orm/prisma/pg";

const prisma = new PrismaClient().$extends(drizzle());
```

</CodeTab>
<CodeTab>
```ts copy
import { PrismaClient } from '@prisma/client';
import { drizzle } from 'drizzle-orm/prisma/mysql';

const prisma = new PrismaClient().$extends(drizzle());

````
</CodeTab>
<CodeTab>
```ts copy
import { PrismaClient } from '@prisma/client';
import { drizzle } from 'drizzle-orm/prisma/sqlite';

const prisma = new PrismaClient().$extends(drizzle());
````

</CodeTab>
</CodeTabs>

#### Run Drizzle queries via `prisma.$drizzle` ✨

In order to use Drizzle query builder, you need references to Drizzle tables.
You can import them from the output path that you specified in the generator config.

```ts copy
import { User } from "./drizzle";

await prisma.$drizzle
  .insert()
  .into(User)
  .values({ email: "sorenbs@drizzle.team", name: "Søren" });
const users = await prisma.$drizzle.select().from(User);
```

</Steps>

## Limitations

- [Relational queries](/docs/rqb) are not supported due to a [Prisma driver limitation](https://github.com/prisma/prisma/issues/17576). Because of it, Prisma is unable to return query results in array format, which is required for relational queries to work.
- In SQLite, `.values()` (e.g. `await db.select().from(table).values()`) is not supported, because of the same reason as above.
- [Prepared statements](/docs/perf-queries#prepared-statement) support is limited - `.prepare()` will only build the SQL query on Drizzle side, because there is no Prisma API for prepared queries.

Source: https://orm.drizzle.team/docs/query-utils

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Section from '@mdx/Section.astro';
import IsSupportedChipGroup from '@mdx/IsSupportedChipGroup.astro';
import $count from '@mdx/$count.mdx';

# Drizzle query utils

### $count

<$count/>

Source: https://orm.drizzle.team/docs/quick

import Npm from "@mdx/Npm.astro";

# Quick start

Lets build a quick start app with `PostgreSQL` + `postgresjs` and run our first migration.

The first thing we need to do is to install `drizzle-orm` and `drizzle-kit`:

<Npm>
drizzle-orm postgres
-D drizzle-kit
</Npm>

Lets declare our `schema.ts`:

```plaintext {4}
📦
 ├ ...
 ├ 📂 src
 │ └ 📜 schema.ts
 └ 📜 package.json
```

```ts copy filename="schema.ts"
import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  role: text("role").$type<"admin" | "customer">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
```

Now lets add drizzle configuration file:

```plaintext {4}
📦
 ├ ...
 ├ 📂 src
 ├ 📜 drizzle.config.ts
 └ 📜 package.json
```

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
});
```

Add `generate` and `migrate` commands to `package.json` and run our first migrations generation:

```json filename="package.json" {5,6}
{
  "name": "first time?",
  "version": "0.0.1",
  "scripts": {
    "generate": "drizzle-kit generate",
    "migrate": "drizzle-kit migrate"
  }
}
```

```shell filename="terminal"
$ npm run generate
...

[✓] Your SQL migration file ➜ drizzle/20242409125510_pale_mister_fear/migration.sql 🚀
```

Done! We now have our first SQL migration file 🥳

```plaintext {4}
📦
 ├ 📂 drizzle
 │ ├ 📂 20242409125510_pale_mister_fear
 ├ 📂 src
 ├ 📜 drizzle.config.ts
 └ 📜 package.json
```

Now lets run our first migration to the database:

```shell filename="terminal"
$ npm run migrate
```

That's it, folks!

**My personal congratulations 🎉**

Source: https://orm.drizzle.team/docs/read-replicas

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
