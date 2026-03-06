# Get Started with Drizzle and MSSQL

<Callout type='error'>
This page explains concepts available on drizzle versions `1.0.0-beta.2` and higher.
</Callout>

<br/>

<Prerequisites>
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **node-mssql** - package for querying your MSSQL database - [read here](https://github.com/tediousjs/node-mssql)
</Prerequisites>

Drizzle has native support for PostgreSQL connections with the `node-mssql` driver.

<FileStructure/>

#### Step 1 - Install **mssql** package

<Npm>
  drizzle-orm@beta mssql dotenv
  -D drizzle-kit@beta tsx
</Npm>

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

{/\* <Callout title='tips'>
If you don't have a PostgreSQL database yet and want to create one for testing, you can use our guide on how to set up PostgreSQL in Docker.

The PostgreSQL in Docker guide is available [here](/docs/guides/postgresql-local-setup). Go set it up, generate a database URL (explained in the guide), and come back for the next steps </Callout> \*/}

#### Step 3 - Connect Drizzle ORM to the database

<ConnectMSSQL/>

#### Step 4 - Create a table

<CreateTable />

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='mssql' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

<QueryDatabase dialect='node-mssql' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/get-started/mysql-existing

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';
import ConnectMySQL from '@mdx/get-started/mysql/ConnectMySQL.mdx';
import CreateTable from '@mdx/get-started/mysql/CreateTable.mdx';
import UpdateSchema from '@mdx/get-started/mysql/UpdateSchema.mdx';
import IntrospectMySQL from '@mdx/get-started/mysql/IntrospectMySQL.mdx';
import QueryDatabase from '@mdx/get-started/QueryDatabase.mdx';
import QueryDatabaseUpdated from '@mdx/get-started/QueryDatabaseUpdated.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import TransferCode from '@mdx/get-started/TransferCode.mdx';

<Breadcrumbs/>
