# Get Started with Drizzle and Effect PostgreSQL

<Callout type='error'>
This page explains concepts available on drizzle versions `1.0.0-beta.13` and higher.

Effect is only available for PostgreSQL right now and soon be implemented for all other dialects

On how to upgrade (read more [here](/docs/upgrade-v1)) </Callout>

<Prerequisites>
  - **Effect** - Effect is a powerful TS library designed to help developers easily create complex, synchronous, and asynchronous programs. - [read more](https://effect.website/docs)
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **@effect/sql-pg** - A PostgreSQL toolkit for Effect - [read here](https://effect-ts.github.io/effect/docs/sql-pg)
</Prerequisites>

Drizzle has native support for Effect PostgreSQL connections with the `@effect/sql-pg` driver.

<FileStructure/>

#### Step 1 - Install required packages

<InstallPackages lib='effect @effect/sql-pg pg' devlib=' @types/pg'/>

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

<Callout title='tips'>
If you don't have a PostgreSQL database yet and want to create one for testing, you can use our guide on how to set up PostgreSQL in Docker.

The PostgreSQL in Docker guide is available [here](/docs/guides/postgresql-local-setup). Go set it up, generate a database URL (explained in the guide), and come back for the next steps </Callout>

#### Step 3 - Connect Drizzle ORM to the database

<ConnectEffect />

#### Step 4 - Create a table

<CreateTable />

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='postgresql' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

Let's **update** the `src/index.ts` file with queries to create, read, update, and delete users

```ts
import 'dotenv/config';
import * as PgDrizzle from 'drizzle-orm/effect-postgres';
import { PgClient } from '@effect/sql-pg';
import * as Effect from 'effect/Effect';
import * as Redacted from 'effect/Redacted';
import { types } from 'pg';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';

const PgClientLive = PgClient.layer({
  url: Redacted.make(process.env.DATABASE_URL!),
  types: {
    getTypeParser: (typeId, format) => {
      if ([1184, 1114, 1082, 1186, 1231, 1115, 1185, 1187, 1182].includes(typeId)) {
        return (val: any) => val;
      }
      return types.getTypeParser(typeId, format);
    },
  },
});

const program = Effect.gen(function*() {
  const db = yield* PgDrizzle.makeWithDefaults();

  const user: typeof usersTable.$inferInsert = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  yield* db.insert(usersTable).values(user);
  console.log('New user created!')

  const users = yield* db.select().from(usersTable);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  yield* db
    .update(usersTable)
    .set({
      age: 31,
    })
    .where(eq(usersTable.email, user.email));
  console.log('User info updated!')

  yield* db.delete(usersTable).where(eq(usersTable.email, user.email));
  console.log('User deleted!')
});

Effect.runPromise(program.pipe(Effect.provide(PgClientLive)));
```

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/get-started/expo-existing

import Breadcrumbs from '@mdx/Breadcrumbs.astro';

<Breadcrumbs/>

# Get Started with Drizzle and Expo in existing project

We don't have a proper guide for getting started with Expo in an existing project, and we believe that
all the information from this [getting started guide](/docs/get-started/expo-new) should be sufficient

Source: https://orm.drizzle.team/docs/get-started/expo-new

import Npm from '@mdx/Npm.astro';
import Npx from '@mdx/Npx.astro';
import Callout from '@mdx/Callout.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import TransferCode from '@mdx/get-started/TransferCode.mdx';
import QueryDatabase from '@mdx/get-started/QueryDatabase.mdx';
import QueryDatabaseUpdated from '@mdx/get-started/QueryDatabaseUpdated.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';
import CreateTable from '@mdx/get-started/sqlite/CreateTable.mdx';
import ConnectLibsql from '@mdx/get-started/sqlite/ConnectLibsql.mdx';

<Breadcrumbs/>
