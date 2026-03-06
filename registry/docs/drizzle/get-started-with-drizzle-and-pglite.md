# Get Started with Drizzle and PGlite

<Prerequisites>
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **ElectricSQL** - [website](https://electric-sql.com/)
  - **pglite driver** - [docs](https://pglite.dev/) & [GitHub](https://github.com/electric-sql/pglite)
</Prerequisites>

<FileStructure/>

#### Step 1 - Install all needed packages

<InstallPackages lib='@electric-sql/pglite' />

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

#### Step 3 - Connect Drizzle ORM to the database

<ConnectPgLite/>

#### Step 4 - Create a table

<CreateTable />

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='postgresql' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

<QueryDatabase dialect='pglite' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/get-started/planetscale-existing

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import WhatsNextPostgres from "@mdx/WhatsNextPostgres.astro";
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';
import ConnectPlanetScale from '@mdx/get-started/mysql/ConnectPlanetScale.mdx';
import CreateTable from '@mdx/get-started/mysql/CreateTable.mdx';
import UpdateSchema from '@mdx/get-started/mysql/UpdateSchema.mdx';
import IntrospectMySQL from '@mdx/get-started/mysql/IntrospectMySQL.mdx';
import QueryPlanetScale from '@mdx/get-started/mysql/QueryPlanetScale.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import TransferCode from '@mdx/get-started/TransferCode.mdx';

<Breadcrumbs/>
