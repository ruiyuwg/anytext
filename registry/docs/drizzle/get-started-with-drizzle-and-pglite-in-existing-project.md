# Get Started with Drizzle and PGLite in existing project

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

#### Step 3 - Setup Drizzle config file

<SetupConfig dialect='postgresql' env_variable='DATABASE_URL'/>

#### Step 4 - Introspect your database

<IntrospectPostgreSQL/>

#### Step 5 - Transfer code to your actual schema file

<TransferCode/>

#### Step 6 - Connect Drizzle ORM to the database

<ConnectPgLite/>

#### Step 7 - Query the database

<QueryDatabase dialect='pglite' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

#### Step 9 - Update your table schema (optional)

<UpdateSchema/>

#### Step 10 - Applying changes to the database (optional)

<ApplyChanges />

#### Step 11 - Query the database with a new field (optional)

<QueryDatabaseUpdated dialect='pglite' env_variable='DATABASE_URL' />

Source: https://orm.drizzle.team/docs/get-started/pglite-new

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from "@mdx/CodeTabs.astro";
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import ConnectPgLite from '@mdx/get-started/postgresql/ConnectPgLite.mdx'
import CreateTable from '@mdx/get-started/postgresql/CreateTable.mdx'
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import QueryDatabase from '@mdx/get-started/QueryDatabase.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';

<Breadcrumbs/>
