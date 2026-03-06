# Get Started with Drizzle and SingleStore

<Prerequisites>  
  - **dotenv** - package for managing environment variables - [read here](https://www.npmjs.com/package/dotenv)
  - **tsx** - package for running TypeScript files - [read here](https://tsx.is/)
  - **mysql2** - package for querying your MySQL database - [read here](https://github.com/sidorares/node-mysql2)
</Prerequisites>

To use Drizzle with a SingleStore database, you should use the `singlestore` driver

According to the **[official website](https://github.com/sidorares/node-mysql2)**,
`mysql2` is a MySQL client for Node.js with focus on performance.

Drizzle ORM natively supports `mysql2` with `drizzle-orm/singlestore` package for SingleStore database.

<FileStructure/>

#### Step 1 - Install **mysql2** package

<InstallPackages lib='mysql2'/>

#### Step 2 - Setup connection variables

<SetupEnv env_variable='DATABASE_URL' />

#### Step 3 - Connect Drizzle ORM to the database

<ConnectSingleStore/>

#### Step 4 - Create a table

<CreateSingleStoreTable/>

#### Step 5 - Setup Drizzle config file

<SetupConfig dialect='singlestore' env_variable='DATABASE_URL'/>

#### Step 6 - Applying changes to the database

<ApplyChanges />

#### Step 7 - Seed and Query the database

<QueryDatabase dialect='singlestore' env_variable='DATABASE_URL'/>

#### Step 8 - Run index.ts file

<RunFile/>

Source: https://orm.drizzle.team/docs/get-started/sqlite-cloud-existing

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Npm from "@mdx/Npm.astro";
import Callout from '@mdx/Callout.astro';
import Steps from '@mdx/Steps.astro';
import AnchorCards from '@mdx/AnchorCards.astro';
import Breadcrumbs from '@mdx/Breadcrumbs.astro';
import CodeTabs from "@mdx/CodeTabs.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import IntrospectSQLite from '@mdx/get-started/sqlite/IntrospectSqlite.mdx';
import FileStructure from '@mdx/get-started/FileStructure.mdx';
import InstallPackages from '@mdx/get-started/InstallPackages.mdx';
import SetupConfig from '@mdx/get-started/SetupConfig.mdx';
import SetupEnv from '@mdx/get-started/SetupEnv.mdx';
import TransferCode from '@mdx/get-started/TransferCode.mdx';
import ApplyChanges from '@mdx/get-started/ApplyChanges.mdx';
import RunFile from '@mdx/get-started/RunFile.mdx';
import ConnectSQLiteCloud from '@mdx/get-started/sqlite/ConnectSQLiteCloud.mdx';
import QueryDatabase from '@mdx/get-started/QueryDatabase.mdx';
import QueryDatabaseUpdated from '@mdx/get-started/QueryDatabaseUpdated.mdx';
import UpdateSchema from '@mdx/get-started/sqlite/UpdateSchema.mdx';

<Breadcrumbs/>
