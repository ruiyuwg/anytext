# Migrations with Drizzle Kit

<Prerequisites>
- Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
- Drizzle schema fundamentals - [read here](/docs/sql-schema-declaration)
- Database connection basics - [read here](/docs/connect-overview)
- Drizzle migrations fundamentals - [read here](/docs/migrations)
- Drizzle Kit [overview](/docs/kit-overview) and [config file](/docs/drizzle-config-file)
- `drizzle-kit generate` command - [read here](/docs/drizzle-kit-generate)
- `drizzle-kit migrate` command - [read here](/docs/drizzle-kit-migrate)
</Prerequisites>

Drizzle lets you generate empty migration files to write your own custom SQL migrations
for DDL alternations currently not supported by Drizzle Kit or data seeding, which you can then run with [`drizzle-kit migrate`](/docs/drizzle-kit-migrate) command.

```shell
drizzle-kit generate --custom --name=seed-users
```

<Section>
```plaintext {5}
📦 
 ├ 📂 drizzle
 │ ├ 📂 20242409125510_init_sql
 │ └ 📂 20242409135510_delicate_seed-users
 ├ 📂 src
 └ …
```
```sql
-- ./drizzle/0001_seed-users.sql

INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');

```
</Section>

### Running JavaScript and TypeScript migrations
We will add ability to run custom JavaScript and TypeScript migration/seeding scripts in the upcoming release, you can follow [github discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2832).

Source: https://orm.drizzle.team/docs/kit-migrations-for-teams

# Drizzle migrations for teams

This section will be updated right after our release of the next version of migrations folder structure. 
You can read an extended [github discussion](https://github.com/drizzle-team/drizzle-orm/discussions/2832) and subscribe to the updates!


Source: https://orm.drizzle.team/docs/kit-overview

import CodeTab from '@mdx/CodeTab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import Section from '@mdx/Section.astro';
import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';
import Npx from '@mdx/Npx.astro';
import Steps from '@mdx/Steps.astro';
import Prerequisites from "@mdx/Prerequisites.astro"

# Migrations with Drizzle Kit
<Prerequisites>
- Get started with Drizzle and `drizzle-kit` - [read here](/docs/get-started)
- Drizzle schema fundamentals - [read here](/docs/sql-schema-declaration)
- Database connection basics - [read here](/docs/connect-overview)
- Drizzle migrations fundamentals - [read here](/docs/migrations)
</Prerequisites>


**Drizzle Kit** is a CLI tool for managing SQL database migrations with Drizzle.
<Npm>
  -D drizzle-kit
</Npm>
<Callout type="warning">
Make sure to first go through Drizzle [get started](/docs/get-started) and [migration fundamentals](/docs/migrations) and pick SQL migration flow that suits your business needs best. 
</Callout>

Based on your schema, Drizzle Kit let's you generate and run SQL migration files, 
push schema directly to the database, pull schema from database, spin up drizzle studio and has a couple of utility commands.
<Npx>
drizzle-kit generate
drizzle-kit migrate
drizzle-kit push
drizzle-kit pull
drizzle-kit check
drizzle-kit up
drizzle-kit studio
</Npx>


|                                                      |                                                                                                                                                                    |
| :--------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`drizzle-kit generate`](/docs/drizzle-kit-generate) | lets you generate SQL migration files based on your Drizzle schema either upon declaration or on subsequent changes, [see here](/docs/drizzle-kit-generate).       |
| [`drizzle-kit migrate`](/docs/drizzle-kit-migrate)   | lets you apply generated SQL migration files to your database, [see here](/docs/drizzle-kit-migrate).                                                              |
| [`drizzle-kit pull`](/docs/drizzle-kit-pull)         | lets you pull(introspect) database schema, convert it to Drizzle schema and save it to your codebase, [see here](/docs/drizzle-kit-pull)                           |
| [`drizzle-kit push`](/docs/drizzle-kit-push)         | lets you push your Drizzle schema to database either upon declaration or on subsequent schema changes, [see here](/docs/drizzle-kit-push)                          |
| [`drizzle-kit studio`](/docs/drizzle-kit-studio)     | will connect to your database and spin up proxy server for Drizzle Studio which you can use for convenient database browsing, [see here](/docs/drizzle-kit-studio) |
| [`drizzle-kit check`](/docs/drizzle-kit-check)       | will walk through all generate migrations and check for any race conditions(collisions) of generated migrations, [see here](/docs/drizzle-kit-check)               |
| [`drizzle-kit up`](/docs/drizzle-kit-up)             | used to upgrade snapshots of previously generated migrations, [see here](/docs/drizzle-kit-up)                                                                     |
<br/>

Drizzle Kit is configured through [drizzle.config.ts](/docs/drizzle-config-file) configuration file or via CLI params.<br/>
It's required to at least provide SQL `dialect` and `schema` path for Drizzle Kit to know how to generate migrations.
```

📦
├ 📂 drizzle
├ 📂 src
├ 📜 .env
├ 📜 drizzle.config.ts  <--- Drizzle config file
├ 📜 package.json
└ 📜 tsconfig.json

````

<CodeTabs items={["simple config", "extended config"]}>
```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
});
````

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/schema.ts",

  driver: "pglite",
  dbCredentials: {
    url: "./database/",
  },

  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",

  introspect: {
    casing: "camel",
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  breakpoints: true,
  strict: true,
  verbose: true,
});
```

</CodeTabs>

You can provide Drizzle Kit config path via CLI param, it's very useful when you have multiple database stages or multiple databases or different databases on the same project:

<Npx>
  drizzle-kit push --config=drizzle-dev.drizzle.config
  drizzle-kit push --config=drizzle-prod.drizzle.config
</Npx>
```plaintext {5-6}
📦 
 ├ 📂 drizzle
 ├ 📂 src
 ├ 📜 .env
 ├ 📜 drizzle-dev.config.ts
 ├ 📜 drizzle-prod.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```

Source: https://orm.drizzle.team/docs/kit-seed-data

import CodeTab from '@mdx/CodeTab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import Section from '@mdx/Section.astro';
import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';
import Npx from '@mdx/Npx.astro';
import Steps from '@mdx/Steps.astro';
import Prerequisites from "@mdx/Prerequisites.astro"

# Drizzle Kit data seeding

This section will be updated right after our release of `drizzle-seed` package.

Source: https://orm.drizzle.team/docs/kit-web-mobile

import CodeTab from '@mdx/CodeTab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import Section from '@mdx/Section.astro';
import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Npm from '@mdx/Npm.astro';
import Npx from '@mdx/Npx.astro';
import Steps from '@mdx/Steps.astro';
import Prerequisites from "@mdx/Prerequisites.astro"

# Drizzle migrations in web and mobile environments

This section will be updated in the next release.

For **Expo SQLite**, **OP SQLite** and **React Native** migrations - please refer to our [Get Started](/docs/get-started/expo-new) guide.

Source: https://orm.drizzle.team/docs/migrations

export const a = 10;

import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import CodeTab from '@mdx/CodeTab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import Section from '@mdx/Section.astro';
import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from '@mdx/Npm.astro';
import Tag from '@mdx/Tag.astro'
