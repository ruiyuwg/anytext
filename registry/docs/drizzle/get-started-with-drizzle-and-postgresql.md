# Get Started with Drizzle and PostgreSQL

<Prerequisites>
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **node-postgres** - package for querying your PostgreSQL database - [read here](https://node-postgres.com/)
</Prerequisites>

Drizzle has native support for PostgreSQL connections with the `node-postgres` and `postgres.js` drivers.

We will use `node-postgres` for this get started example. But if you want to find more ways to connect to postgresql check
our [PostgreSQL Connection](/docs/get-started-postgresql) page

<FileStructure/>

#### Step 1 - Install **node-postgres** package

<InstallPackages lib='pg' devlib=' @types/pg'/>

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

<Callout title='tips'>
If you don't have a PostgreSQL database yet and want to create one for testing, you can use our guide on how to set up PostgreSQL in Docker.

The PostgreSQL in Docker guide is available [here](/docs/guides/postgresql-local-setup). Go set it up, generate a database URL (explained in the guide), and come back for the next steps </Callout>

#### Step 3 - Connect Drizzle ORM to the database

<ConnectPostgreSQL/>

#### Step 4 - Create a table

<CreateTable />

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='postgresql' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

<QueryDatabase dialect='node-postgres' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/get-started/singlestore-existing

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';
import ConnectSingleStore from '@mdx/get-started/singlestore/ConnectSingleStore.mdx';
import UpdateSchema from '@mdx/get-started/singlestore/UpdateSchema.mdx';
import IntrospectSingleStore from '@mdx/get-started/singlestore/IntrospectSingleStore.mdx';
import QueryDatabase from '@mdx/get-started/QueryDatabase.mdx';
import QueryDatabaseUpdated from '@mdx/get-started/QueryDatabaseUpdated.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import TransferCode from '@mdx/get-started/TransferCode.mdx';

<Breadcrumbs/>
