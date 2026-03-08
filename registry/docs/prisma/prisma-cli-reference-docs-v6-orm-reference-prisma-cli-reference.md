# Prisma CLI reference (/docs/v6/orm/reference/prisma-cli-reference)

This document describes the Prisma CLI commands, arguments, and options.

Commands \[#commands]

version (-v) \[#version--v]

The `version` command outputs information about your current `prisma` version, platform, and engine binaries.

Options \[#options]

The `version` command recognizes the following options to modify its behavior:

| Option   | Required | Description                                 |
| -------- | -------- | ------------------------------------------- |
| `--json` | No       | Outputs version information in JSON format. |

Examples \[#examples]

Output version information \[#output-version-information]

```bash
prisma version
```

```text no-copy
Environment variables loaded from .env
prisma               : 2.21.0-dev.4
@prisma/client       : 2.21.0-dev.4
Current platform     : windows
Query Engine         : query-engine 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6 (at C:\Users\veroh\AppData\Roaming\npm\node_modules\@prisma\cli\query-engine-windows.exe)
Migration Engine     : migration-engine-cli 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6 (at C:\Users\veroh\AppData\Roaming\npm\node_modules\@prisma\cli\migration-engine-windows.exe)
Format Binary        : prisma-fmt 60ba6551f29b17d7d6ce479e5733c70d9c00860e (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash : 60ba6551f29b17d7d6ce479e5733c70d9c00860e
Studio               : 0.365.0
```

Output version information (-v) \[#output-version-information--v]

```bash
prisma -v
```

```text no-copy
Environment variables loaded from .env
prisma               : 2.21.0-dev.4
@prisma/client       : 2.21.0-dev.4
Current platform     : windows
Query Engine         : query-engine 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6 (at C:\Users\veroh\AppData\Roaming\npm\node_modules\@prisma\cli\query-engine-windows.exe)
Migration Engine     : migration-engine-cli 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6 (at C:\Users\veroh\AppData\Roaming\npm\node_modules\@prisma\cli\migration-engine-windows.exe)
Format Binary        : prisma-fmt 60ba6551f29b17d7d6ce479e5733c70d9c00860e (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash : 60ba6551f29b17d7d6ce479e5733c70d9c00860e
Studio               : 0.365.0
```

Output version information as JSON \[#output-version-information-as-json]

```bash
prisma version --json
```

```text no-copy
Environment variables loaded from .env
{
  "prisma": "2.21.0-dev.4",
  "@prisma/client": "2.21.0-dev.4",
  "current-platform": "windows",
  "query-engine": "query-engine 60ba6551f29b17d7d6ce479e5733c70d9c00860e (at node_modules\\@prisma\\engines\\query-engine-windows.exe)",
  "migration-engine": "migration-engine-cli 60ba6551f29b17d7d6ce479e5733c70d9c00860e (at node_modules\\@prisma\\engines\\migration-engine-windows.exe)",
  "format-binary": "prisma-fmt 60ba6551f29b17d7d6ce479e5733c70d9c00860e (at node_modules\\@prisma\\engines\\prisma-fmt-windows.exe)",
  "default-engines-hash": "60ba6551f29b17d7d6ce479e5733c70d9c00860e",
  "studio": "0.365.0"
}
```

init \[#init]

Bootstraps a fresh Prisma ORM project within the current directory.

The `init` command does not interpret any existing files. Instead, it creates a `prisma` directory containing a bare-bones `schema.prisma` file within your current directory.

By default, the project sets up a [local Prisma Postgres](/v6/postgres/database/local-development) instance but you can choose a different database using the `--datasource-provider` option.

Arguments \[#arguments]

| Argument                 | Required | Description                                                                                                                                                                                        | Default               |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `--datasource-provider`  | No       | Specifies the value for the `provider` field in the `datasource` block. Options are `prisma+postgres`, `sqlite`, `postgresql`, `mysql`, `sqlserver`, `mongodb` and `cockroachdb`.                  | `postgresql`          |
| `--db`                   | No       | Shorthand syntax for `--datasource-provider prisma+postgres`; creates a new [Prisma Postgres](/v6/postgres) instance. Requires authentication in the [PDP Console](https://console.prisma.io).     |                       |
| `--prompt` (or `--vibe`) | No       | Scaffolds a Prisma schema based on the prompt and deploys it to a fresh Prisma Postgres instance. Requires authentication in the [PDP Console](https://console.prisma.io).                         |                       |
| `--url`                  | No       | Define a custom `datasource` url.                                                                                                                                                                  |                       |
| `--generator-provider`   | No       | Define the generator provider to use.                                                                                                                                                              | `prisma-client`       |
| `--preview-feature`      | No       | Define the [Preview features](/v6/orm/reference/preview-features) to use. To define multiple Preview features, you have to provide the flag multiple times for each Preview feature. See examples. |                       |
| `--output`               | No       | Specifies the [output location for the generated client](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client#using-a-custom-output-path).                                       | `../generated/prisma` |
| `--with-model`           | No       | Adds a simple `User` model to the initial Prisma schema. Available since version `5.14.0`.                                                                                                         |                       |

Examples \[#examples-1]

**Run `prisma init`**

```bash
prisma init
```

```text no-copy wrap
npx prisma init

Initialized Prisma in your project

  prisma/
    schema.prisma
  prisma.config.ts

Next, choose how you want to set up your database:

CONNECT EXISTING DATABASE:
  1. Configure your DATABASE_URL in `prisma.config.ts`
  2. Run `npx prisma db pull` to introspect your database.

CREATE NEW DATABASE:
  Local: npx prisma dev (runs Postgres locally in your terminal)
  Cloud: npx create-db (creates a free Prisma Postgres database)

  Then, define your models in `prisma/schema.prisma` and run `npx prisma migrate dev` to apply your schema.

Learn more: https://pris.ly/getting-started
```

Next, run the `prisma dev` command to interact with your local Prisma Postgres instance (e.g. to run migrations or execute queries).

**Run `prisma init --datasource-provider sqlite`**

```bash
prisma init --datasource-provider sqlite
```

The command output contains helpful information on how to use the generated files and begin using Prisma ORM with your project.

**Run `prisma init --db`**

```bash
prisma init --db
```

```text no-copy wrap
✓ Select an authentication method Google
Authenticating to Prisma Platform via browser.

Visit the following URL in your browser to authenticate:
https://console.prisma.io/auth/cli?state=eyJjb6ll...

Successfully authenticated as amanyoyoyo@gmail.com.
Let's set up your Prisma Postgres database!
✓ Select your region: ap-southeast-1 - Asia Pacific (Singapore)
✓ Enter a project name: My Prisma Project
✓ Success! Your Prisma Postgres database is ready ✅

We found an existing schema.prisma file in your current project directory.

--- Database URL ---

Connect Prisma ORM to your Prisma Postgres database with this URL:

--- Next steps ---

Go to https://pris.ly/ppg-init for detailed instructions.

1. Install the Postgres adapter
npm install @prisma/adapter-pg

...and add it to your Prisma Client instance:

import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

2. Apply migrations
Run the following command to create and apply a migration:
npx prisma migrate dev

3. Manage your data
View and edit your data locally by running this command:
npx prisma studio

...or online in Console:
https://console.prisma.io/cmhyn0uwl0q6903foel16ff31/cmhyn143t074tyLfoezs684ag/cmhyn143t074uylfon8hfre5z/studio

4. Send queries from your app
If you already have an existing app with Prisma ORM, you can now run it and it will send queries against your newly created Prisma Postgres instance.

5. Learn more
For more info, visit the Prisma Postgres docs: https://pris.ly/ppg-docs
```

The command creates a new [Prisma Postgres](https://www.prisma.io/postgres) instance. Note that it requires you to be authenticated with the [PDP Console](https://console.prisma.io), If you run it for the first time without being authenticated, the command will open the browser for you to log into Console.

**Run `prisma init --prompt "Simple habit tracker application"`**

```bash
prisma init --prompt "Simple habit tracker application"
```

The command scaffolds a Prisma schema and deploys it to a fresh [Prisma Postgres](https://www.prisma.io/postgres) instance. Note that it requires you to be authenticated with the [PDP Console](https://console.prisma.io), If you run it for the first time without being authenticated, the command will open the browser for you to log into Console.

**Run `prisma init --preview-feature`**

```bash
prisma init --preview-feature metrics
```

```prisma
datasource db {
  provider = "postgresql"
}

generator client {
  provider        = "prisma-client"
  previewFeatures = ["metrics"]
}
```

```bash
prisma init --preview-feature view --preview-feature metrics
```

```prisma
datasource db {
  provider = "postgresql"
}

generator client {
  provider        = "prisma-client"
  previewFeatures = ["views", "metrics"]
}
```

Generated Assets \[#generated-assets]

**`prisma/schema.prisma`**

An initial `schema.prisma` file to define your schema in:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}
```

**`prisma.config.ts`**

A TypeScript configuration file for Prisma that defines your datasource URL and other settings:

```typescript
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

See the [Prisma Config reference](/v6/orm/reference/prisma-config-reference) for more details.

**`.env`**

A file to define environment variables for your project:

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

**`.gitignore`**

A file to specify what folders/files git should ignore in your project.

```bash
node_modules
# Keep environment variables out of version control
.env

/generated/prisma
```

**Run `prisma init --url mysql://user:password@localhost:3306/mydb`**

The `init` command with the `--url` argument allows you to specify a custom datasource URL during Prisma initialization, instead of relying on a placeholder database URL:

```bash
prisma init --url mysql://user:password@localhost:3306/mydb
```

Generated Assets \[#generated-assets-1]

**`prisma/schema.prisma`**

A minimal `schema.prisma` file to define your schema in:

```prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

datasource db {
  provider = "mysql"
}

generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}
```

**`prisma.config.ts`**

A TypeScript configuration file for Prisma with the custom URL:

```typescript
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

**`.env`**

A file to define environment variables for your project:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://user:password@localhost:3306/mydb"
```

generate \[#generate]

The `generate` command generates assets like Prisma Client based on the [`generator`](/v6/orm/prisma-schema/overview/generators) and [`data model`](/v6/orm/prisma-schema/data-model/models) blocks defined in your `prisma/schema.prisma` file.

The `generate` command is most often used to generate Prisma Client with the `prisma-client` generator. This does the following:

1. Inspects the current directory to find a Prisma Schema to process.
2. Generates a customized Prisma Client based on your schema into the output directory specified in the generator block.

Prerequisites \[#prerequisites]

To use the `generate` command, you must add a generator definition in your `schema.prisma` file. The `prisma-client` generator, used to generate Prisma Client, can be added by including the following in your `schema.prisma` file:

```prisma
generator client {
  provider = "prisma-client"
  output   = "./generated"
}
```

Options \[#options-1]

| Option              | Required | Description                                                                                                                                                                                                                            | Default |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `--data-proxy`      | No       | The `generate` command will generate Prisma Client for use with [Prisma Accelerate](/v6/accelerate) prior to Prisma 5.0.0. Mutually exclusive with `--accelerate` and `--no-engine`.                                                   |         |
| `--accelerate`      | No       | The `generate` command will generate Prisma Client for use with [Prisma Accelerate](/v6/accelerate). Mutually exclusive with `--data-proxy` and `--no-engine`. Available in Prisma 5.1.0 and later.                                    |         |
| `--no-engine`       | No       | The `generate` command will generate Prisma Client without an accompanied engine for use with [Prisma Accelerate](/v6/accelerate). Mutually exclusive with `--data-proxy` and `--accelerate`. Available in Prisma ORM 5.2.0 and later. |         |
| `--no-hints`        | No       | The `generate` command will generate Prisma Client without usage hints, surveys or info banners being printed to the terminal. Available in Prisma ORM 5.16.0 and later.                                                               |         |
| `--allow-no-models` | No       | The `generate` command will generate Prisma Client without generating any models.                                                                                                                                                      |         |
| `--watch`           | No       | The `generate` command will continue to watch the `schema.prisma` file and re-generate Prisma Client on file changes.                                                                                                                  |         |

```
**Deprecation Warning**

As of Prisma 5.2.0, `--data-proxy` and `--accelerate` are deprecated in favor of `--no-engine` as Prisma Client no longer requires an option to work with Prisma Accelerate. All options are available and work similarly, but we recommend `--no-engine` as it prevents an engine from being downloaded which will greatly impact the size of apps deployed to serverless and edge functions.
```

Arguments \[#arguments-1]

| Argument      | Required | Description                                                                                                                                                                                  | Default                                     |   |
| ------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | - |
| `--schema`    | No       | Specifies the path to the desired `schema.prisma` file to be processed instead of the default path. Both absolute and relative paths are supported.                                          | `./schema.prisma`, `./prisma/schema.prisma` |   |
| `--generator` | No       | Specifies which generator to use to generate assets. This option may be provided multiple times to include multiple generators. By default, all generators in the target schema will be run. |                                             |   |

Examples \[#examples-2]

Generate Prisma Client using the default schema.prisma path \[#generate-prisma-client-using-the-default-schemaprisma-path]

```bash
prisma generate
```

```text no-copy
✔ Generated Prisma Client to ./node_modules/.prisma/client in 61ms

You can now start using Prisma Client in your code:

import { PrismaClient } from '../prisma/generated/client'
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

Explore the full API: https://pris.ly/d/client
```

Generate Prisma Client using a non-default schema.prisma path \[#generate-prisma-client-using-a-non-default-schemaprisma-path]

```bash
prisma generate --schema=./alternative/schema.prisma
```

Continue watching the schema.prisma file for changes to automatically re-generate Prisma Client \[#continue-watching-the-schemaprisma-file-for-changes-to-automatically-re-generate-prisma-client]

```bash
prisma generate --watch
```

```text no-copy
Watching... /home/prismauser/prisma/prisma-play/prisma/schema.prisma

✔ Generated Prisma Client to ./node_modules/.prisma/client in 45ms
```

Run the generate command with only a specific generator \[#run-the-generate-command-with-only-a-specific-generator]

```bash
prisma generate --generator client
```

Run the generate command with multiple specific generators \[#run-the-generate-command-with-multiple-specific-generators]

```bash
prisma generate --generator client --generator zod_schemas
```

Generated Assets \[#generated-assets-2]

The `prisma-client` generator creates a customized client for working with your database in a custom output directory specified by the `output` field - you can [customize the output folder](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client#using-a-custom-output-path).

validate \[#validate]

Validates the [Prisma Schema Language](/v6/orm/prisma-schema/overview) of the Prisma schema file.

Arguments \[#arguments-2]

| Argument   | Required | Description                                                                                                                                         | Default                                     |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired `schema.prisma` file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma`, `./prisma/schema.prisma` |

Examples \[#examples-3]

Validate a schema without errors \[#validate-a-schema-without-errors]

```bash
prisma validate
```

```text no-copy
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
The schema at /absolute/path/prisma/schema.prisma is valid 🚀
```

Validate a schema with validation errors \[#validate-a-schema-with-validation-errors]

```bash
prisma validate
```

```text no-copy
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Error: Schema validation error - Error (query-engine-node-api library)
Error code: P1012
error: The preview feature "unknownFeatureFlag" is not known. Expected one of: [...]
  */}  schema.prisma:3
   |
 2 |     provider        = "prisma-client"
 3 |     previewFeatures = ["unknownFeatureFlag"]
   |

Validation Error Count: 1
[Context: getDmmf]

Prisma CLI Version : 4.5.0
```

format \[#format]

Formats the Prisma schema file, which includes validating, formatting, and persisting the schema.

Arguments \[#arguments-3]

| Argument   | Required | Description                                                                                                                                         | Default                                     |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired `schema.prisma` file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma`, `./prisma/schema.prisma` |
| `--check`  | No       | Fails if any files are unformatted. This can be used in CI to detect if the schema is formatted correctly                                           |                                             |

Examples \[#examples-4]

Validate a schema without errors \[#validate-a-schema-without-errors-1]

```bash
prisma format
```

```text no-copy
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Formatted prisma/schema.prisma in 116ms �
```

Formatting a schema with validation errors \[#formatting-a-schema-with-validation-errors]

```bash
prisma format
```

```text no-copy
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Error: Schema validation error - Error (query-engine-node-api library)
Error code: P1012
error: The preview feature "unknownFeatureFlag" is not known. Expected one of: [...]
  */}  schema.prisma:3
   |
 2 |     provider        = "prisma-client"
 3 |     previewFeatures = ["unknownFeatureFlag"]
   |

Validation Error Count: 1
[Context: getDmmf]

Prisma CLI Version : 4.5.0
```

debug \[#debug]

Prints information for debugging and bug reports.

```
This is available from version 5.6.0 and newer.
```

Arguments \[#arguments-4]

| Argument         | Required | Description                                                                                                                                         | Default                                     |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `--schema`       | No       | Specifies the path to the desired `schema.prisma` file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma`, `./prisma/schema.prisma` |
| `--help` / `--h` | No       | Displays the help message                                                                                                                           |                                             |

Example \[#example]

```bash
prisma debug
```

```text no-copy
-- Prisma schema --
Path: /prisma/schema.prisma

-- Local cache directory for engines files --
Path: /.cache/prisma

-- Environment variables --
When not set, the line is dimmed and no value is displayed.
When set, the line is bold and the value is inside the `` backticks.

For general debugging
 - CI:
 - DEBUG:
 - NODE_ENV:
 - RUST_LOG:
 - RUST_BACKTRACE:
 - NO_COLOR:
 - TERM: `xterm-256color`
 - NODE_TLS_REJECT_UNAUTHORIZED:
 - NO_PROXY:
 - http_proxy:
 - HTTP_PROXY:
 - https_proxy:
 - HTTPS_PROXY:

For more information see our [environment variable documentation](/v6/orm/reference/environment-variables-reference)

For hiding messages
 - PRISMA_DISABLE_WARNINGS:
 - PRISMA_HIDE_PREVIEW_FLAG_WARNINGS:
 - PRISMA_HIDE_UPDATE_MESSAGE:

For downloading engines
 - PRISMA_ENGINES_MIRROR:
 - PRISMA_BINARIES_MIRROR (deprecated):
 - PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING:
 - BINARY_DOWNLOAD_VERSION:

For configuring the Query Engine Type
 - PRISMA_CLI_QUERY_ENGINE_TYPE: (Not supported in Prisma ORM v7)
 - PRISMA_CLIENT_ENGINE_TYPE: (Not supported in Prisma ORM v7)

For custom engines
 - PRISMA_QUERY_ENGINE_BINARY: (Not supported in Prisma ORM v7)
 - PRISMA_QUERY_ENGINE_LIBRARY: (Not supported in Prisma ORM v7)
 - PRISMA_SCHEMA_ENGINE_BINARY:
 - PRISMA_MIGRATION_ENGINE_BINARY:

For the "postinstall" npm hook
 - PRISMA_GENERATE_SKIP_AUTOINSTALL: (Not supported in Prisma ORM v7)
 - PRISMA_SKIP_POSTINSTALL_GENERATE: (Not supported in Prisma ORM v7)
 - PRISMA_GENERATE_IN_POSTINSTALL: (Not supported in Prisma ORM v7)

For "prisma generate"
 - PRISMA_GENERATE_DATAPROXY: (Not supported in Prisma ORM v7)
 - PRISMA_GENERATE_NO_ENGINE: (Not supported in Prisma ORM v7)

For Prisma Client
 - PRISMA_SHOW_ALL_TRACES:
 - PRISMA_CLIENT_NO_RETRY (Binary engine only): (Not supported in Prisma ORM v7)

For Prisma Migrate
 - PRISMA_SCHEMA_DISABLE_ADVISORY_LOCK:
 - PRISMA_MIGRATE_SKIP_GENERATE: (Not supported in Prisma ORM v7)
 - PRISMA_MIGRATE_SKIP_SEED: (Not supported in Prisma ORM v7)

For Prisma Studio
 - BROWSER:

-- Terminal is interactive? --
true

-- CI detected? --
false
```

If you're using an older version of Prisma, you can use this command by running:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma@latest debug
```



```bash
pnpm dlx prisma@latest debug
```



```bash
yarn dlx prisma@latest debug
```



```bash
bunx --bun prisma@latest debug
```
````

dev \[#dev]

The `dev` command starts a [local Prisma Postgres](/v6/postgres/database/local-development) database that you can run Prisma ORM commands against. It is useful for development and testing purposes and also allows you to switch to [Prisma Postgres](/v6/postgres) in production easily.

Arguments \[#arguments-5]

| Argument              | Required | Description                                                                                                                                            | Default |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `--name` (or `-n`)    | No       | Enables targeting a specific database instance. [Learn more](/v6/postgres/database/local-development#using-different-local-prisma-postgres-instances). |         |
| `--port` (or `-p`)    | No       | Main port number the local Prisma Postgres HTTP server will listen on.                                                                                 | `51213` |
| `--db-port` (or `-P`) | No       | Port number the local Prisma Postgres database server will listen on.                                                                                  | `51214` |
| `--shadow-db-port`    | No       | Port number the shadow database server will listen on.                                                                                                 | `51215` |
| `--debug`             | No       | Enable debug logging.                                                                                                                                  | `false` |

Examples \[#examples-5]

**Run `prisma dev`**

```bash
prisma dev
```

```bash no-copy wrap
$ npx prisma dev
Fetching latest updates for this subcommand...
✔  Great Success! 😉👍

   Your  prisma dev  server default is ready and listening on ports 63567-63569.

╭──────────────────────────────╮
│[q]uit  [h]ttp url  [t]cp urls│
╰──────────────────────────────╯
```

**Run `prisma dev` with a specific name**

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --name="mydbname"
```



```bash
pnpm dlx prisma dev --name="mydbname"
```



```bash
yarn dlx prisma dev --name="mydbname"
```



```bash
bunx --bun prisma dev --name="mydbname"
```
````

This creates a named instance called `mydbname` that you can later start, stop, or manage using the instance management commands.

dev start \[#dev-start]

Starts existing [local Prisma Postgres](/v6/postgres/database/local-development) instances in the background.

````
This command only works with instances that already exist.






  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start 
```



```bash
pnpm dlx prisma dev start 
```



```bash
yarn dlx prisma dev start 
```



```bash
bunx --bun prisma dev start 
```
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be started, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
pnpm dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
yarn dlx prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```



```bash
bunx --bun prisma dev start mydb # starts a DB called `mydb` in the background (only if it already exists)
```
````

To start all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
yarn dlx prisma dev start mydb* # starts all existing DBs starting with `mydb`
```



```bash
bunx --bun prisma dev start mydb* # starts all existing DBs starting with `mydb`
```
````

This enables background instance management outside of the VS Code extension.

dev ls \[#dev-ls]

Lists all available [local Prisma Postgres](/v6/postgres/database/local-development) instances:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev ls
```



```bash
pnpm dlx prisma dev ls
```



```bash
yarn dlx prisma dev ls
```



```bash
bunx --bun prisma dev ls
```
````

This command shows all instances on your system with their current status and configuration.

dev stop \[#dev-stop]

Stops one or more [local Prisma Postgres](/v6/postgres/database/local-development) databases:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop 
```



```bash
pnpm dlx prisma dev stop 
```



```bash
yarn dlx prisma dev stop 
```



```bash
bunx --bun prisma dev stop 
```
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be stopped, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
pnpm dlx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
yarn dlx prisma dev stop mydb # stops a DB called `mydb`
```



```bash
bunx --bun prisma dev stop mydb # stops a DB called `mydb`
```
````

To stop all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
yarn dlx prisma dev stop mydb* # stops all DBs starting with `mydb`
```



```bash
bunx --bun prisma dev stop mydb* # stops all DBs starting with `mydb`
```





The `stop` command is interactive and includes safety prompts to prevent accidental operations.
````

dev rm \[#dev-rm]

Removes the data of one or more [local Prisma Postgres](/v6/postgres/database/local-development) databases from your file system:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm 
```



```bash
pnpm dlx prisma dev rm 
```



```bash
yarn dlx prisma dev rm 
```



```bash
bunx --bun prisma dev rm 
```
````

`<glob>` is a placeholder for a glob pattern to specify which local Prisma Postgres instances should be removed, for example:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
pnpm dlx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
yarn dlx prisma dev rm mydb # removes a DB called `mydb`
```



```bash
bunx --bun prisma dev rm mydb # removes a DB called `mydb`
```
````

To remove all databases that begin with `mydb` (e.g. `mydb-dev` and `mydb-prod`), you can use a glob:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
pnpm dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
yarn dlx prisma dev rm mydb* # removes all DBs starting with `mydb`
```



```bash
bunx --bun prisma dev rm mydb* # removes all DBs starting with `mydb`
```





The `rm` command is interactive and includes safety prompts to prevent accidental data loss.
````

db \[#db]

db pull \[#db-pull]

The `db pull` command connects to your database and adds Prisma models to your Prisma schema that reflect the current database schema.

```
**Warning**: The command will overwrite the current `schema.prisma` file with the new schema. Some manual changes or customization can be lost. Be sure to back up your current `schema.prisma` file (or commit your current state to version control to be able to revert any changes) before running `db pull` if it contains important modifications.





Introspection with the `db pull` command on the [MongoDB connector](/v6/orm/overview/databases/mongodb) samples the data instead of reading a schema.
```

Prerequisites \[#prerequisites-1]

Before using the `db pull` command, you must configure your database connection in your `prisma.config.ts` file.

For example:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options-2]

| Option    | Required | Description                                                                                                           | Default |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------- | ------- |
| `--force` | No       | Force overwrite of manual changes made to schema. The generated schema will be based on the introspected schema only. |         |
| `--print` | No       | Prints the created `schema.prisma` to the screen instead of writing it to the filesystem.                             |         |

Arguments \[#arguments-6]

| Argument   | Required | Description                                                                                                                                         | Default                                     |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired `schema.prisma` file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma`, `./prisma/schema.prisma` |

Examples \[#examples-6]

Analyze the database and write its schema to the schema.prisma file \[#analyze-the-database-and-write-its-schema-to-the-schemaprisma-file]

```bash
prisma db pull
```

```text no-copy
Introspecting based on datasource defined in schema.prisma …

✔ Introspected 2 models and wrote them into schema.prisma in 38ms

Run prisma generate to generate Prisma Client.
```

Specify an alternative schema.prisma file to read and write to \[#specify-an-alternative-schemaprisma-file-to-read-and-write-to]

```bash
prisma db pull --schema=./alternative/schema.prisma
```

```text no-copy
Introspecting based on datasource defined in alternative/schema.prisma …

✔ Introspected 2 models and wrote them into alternative/schema.prisma in 60ms

Run prisma generate to generate Prisma Client.
```

Display the generated schema.prisma file instead of writing it to the filesystem \[#display-the-generated-schemaprisma-file-instead-of-writing-it-to-the-filesystem]

```bash
prisma db pull --print
```

```prisma no-copy
generator client {
  provider = "prisma-client"
  output   = "./generated"
}

datasource db {
  provider = "sqlite"
  url      = "file:./hello-prisma.db"
}

model User {
  email   String    @unique
  name    String?
  user_id Int       @id @default(autoincrement())
  post    Post[]
  profile Profile[]
}

model Post {
  content   String?
  post_id   Int     @id @default(autoincrement())
  title     String
  author    User?   @relation(fields: [author_id], references: [user_id])
  author_id Int?
}

model Profile {
  bio        String?
  profile_id Int     @id @default(autoincrement())
  user       User    @relation(fields: [user_id], references: [user_id])
  user_id    Int     @unique
}
```

db push \[#db-push]

The `db push` command pushes the state of your Prisma schema to the database without using migrations. It creates the database if the database does not exist.

This command is a good choice when you do not need to version schema changes, such as during prototyping and local development.

See also:

- [Conceptual overview of `db push` and when to use it over Prisma Migrate](/v6/orm/prisma-migrate/workflows/prototyping-your-schema)
- [Schema prototyping with `db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema)

Prerequisites \[#prerequisites-2]

Before using the `db push` command, you must configure your database connection in your `prisma.config.ts` file.

For example:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options-3]

| Options              | Required | Description                                                                                                                |
| :------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| `--force-reset`      | No       | Resets the database and then updates the schema - useful if you need to start from scratch due to unexecutable migrations. |
| `--accept-data-loss` | No       | Ignore data loss warnings. This option is required if as a result of making the schema changes, data may be lost.          |
| `--help` / `--h`     | No       | Displays the help message                                                                                                  |

```
The `--skip-generate` flag was removed in Prisma 7. `db push` no longer runs `prisma generate` automatically. Run it explicitly if needed.
```

Arguments \[#arguments-7]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-7]

Push the schema:

```bash
prisma db push
```

Push the schema, accepting data loss:

```bash
prisma db push --accept-data-loss
```

Push the schema with a custom schema location:

```bash
prisma db push --schema=/tmp/schema.prisma
```

db seed \[#db-seed]

`db seed` changed from Preview to Generally Available (GA) in 3.0.1.

See [Seeding your database](/v6/orm/prisma-migrate/workflows/seeding)

Options \[#options-4]

| Options          | Required | Description                                               |
| :--------------- | :------- | :-------------------------------------------------------- |
| `--help` / `--h` | No       | Displays the help message                                 |
| `--`             | No       | Allows the use of custom arguments defined in a seed file |

The `--` argument/ [delimiter](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02)/ double-dash is available from version 4.15.0 or later.

Examples \[#examples-8]

```bash
prisma db seed
```

db execute \[#db-execute]

```
The `db execute` command is Generally Available in versions 3.13.0 and later. If you're using a version between 3.9.0 and 3.13.0, it is available behind a `--preview-feature` CLI flag.





This command is currently not supported on [MongoDB](/v6/orm/overview/databases/mongodb).
```

This command applies a SQL script to the database without interacting with the Prisma migrations table. The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

The output of the command is connector-specific, and is not meant for returning data, but only to report success or failure.

See also:

- [Migration troubleshooting in production](/v6/orm/prisma-migrate/workflows/patching-and-hotfixing#fixing-failed-migrations-with-migrate-diff-and-db-execute)

Prerequisites \[#prerequisites-3]

Before using the `db execute` command, you must configure your database connection in your `prisma.config.ts` file.

For example:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

This how your `prisma.config.ts` file should look like:

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options-5]

| Options    | Required | Description                                                           |
| :--------- | :------- | :-------------------------------------------------------------------- |
| `--file`   | Yes\*    | Path to a file. The content will be sent as the script to be executed |
| `--stdin`  | No       | Use the terminal standard input as the script to be executed          |
| `--config` | No       | Custom path to your Prisma config file                                |
| `--help`   | No       | Displays the help message                                             |

\* Either `--file` or `--stdin` is required to provide the script input.

```
**Prisma 7 breaking change**: The `--schema` and `--url` options have been removed. Configure your database connection in `prisma.config.ts` instead.
```

Examples \[#examples-9]

- Execute the content of a SQL script file using the datasource configured in `prisma.config.ts`:

  ```bash
  prisma db execute --file ./script.sql
  ```

- Execute the SQL script from stdin using the configured datasource:

  ```bash wrap
  echo 'TRUNCATE TABLE dev;' | prisma db execute --stdin
  ```

Prisma Migrate \[#prisma-migrate]

Prisma Migrate changed from Preview to Generally Available (GA) in 2.19.0.

```
**Does not apply for MongoDB** 
Instead of `migrate dev` and related commands, [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) is used for [MongoDB](/v6/orm/overview/databases/mongodb).
```

migrate dev \[#migrate-dev]

**For use in development environments only, requires shadow database**

The `migrate dev` command:

1. Reruns the existing migration history in the [shadow database](/v6/orm/prisma-migrate/understanding-prisma-migrate/shadow-database) in order to detect schema drift (edited or deleted migration file, or a manual changes to the database schema)
2. Applies pending migrations to the shadow database (for example, new migrations created by colleagues)
3. Generates a new migration from any changes you made to the Prisma schema before running `migrate dev`
4. Applies all unapplied migrations to the development database and updates the `_prisma_migrations` table

   This command is not supported on [MongoDB](/v6/orm/overview/databases/mongodb). Use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) instead.

   **Prisma 7**: `migrate dev` no longer automatically triggers `prisma generate` or seed scripts. Run `prisma generate` explicitly if needed.

See also:

- [Conceptual overview of Prisma Migrate](/v6/orm/prisma-migrate/getting-started)
- [Developing with Prisma Migrate](/v6/orm/prisma-migrate/getting-started)

Options \[#options-6]

| Option          | Required | Description                                                                                                                                                                                        | Default |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |
| `--create-only` | No       | Creates a new migration but does not apply it. This also works if you haven't made any changes to your schema (in that case, an empty migration is created). Run `migrate dev` to apply migration. |         |
| `--name` / `-n` | No       | Name the migration (e.g. `prisma migrate dev --name added_job_title`)                                                                                                                              |         |
| `--help` / `-h` | No       | Displays the help message                                                                                                                                                                          |         |

```
The `--skip-generate` and `--skip-seed` flags were removed in Prisma 7. `migrate dev` no longer runs `prisma generate` or seeds automatically. Run them explicitly if needed.





If a [schema drift](/v6/orm/prisma-migrate/understanding-prisma-migrate/shadow-database#detecting-schema-drift) is detected while running `prisma migrate dev` using `--create-only`, you will be prompted to reset your database.
```

Arguments \[#arguments-8]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--name`   | No       | The name of the migration. If no name is provided, the CLI will prompt you.                                                                       |                                                  |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-10]

Apply all migrations, then create and apply any new migrations:

```bash
prisma migrate dev
```

Apply all migrations and create a new migration if there are schema changes, but do not apply it:

```bash
prisma migrate dev --create-only
```

migrate reset \[#migrate-reset]

**For use in development environments only**

This command:

1. Drops the database/schema if possible, or performs a soft reset if the environment does not allow deleting databases/schemas
2. Creates a new database/schema with the same name if the database/schema was dropped
3. Applies all migrations
4. Runs seed scripts

   This command is not supported on [MongoDB](/v6/orm/overview/databases/mongodb). Use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) instead.

Options \[#options-7]

| Option            | Required | Description                                             | Default |
| :---------------- | :------- | :------------------------------------------------------ | :------ |
| `--force`         | No       | Skip the confirmation prompt                            |         |
| `--skip-generate` | No       | Skip triggering generators (for example, Prisma Client) |         |
| `--skip-seed`     | No       | Skip triggering seed                                    |         |
| `--help` / `--h`  | No       | Displays the help message                               |         |

Arguments \[#arguments-9]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-11]

```bash
prisma migrate reset
```

AI Safety guardrails for prisma migrate reset \[#ai-safety-guardrails-for-prisma-migrate-reset]

Prisma ORM includes built-in safety checks to prevent **accidental destructive commands** when run through AI coding assistants. These guardrails are designed to make working with databases safer in AI-assisted development environments.

The Prisma CLI can detect when it is being invoked by popular AI coding agents such as Claude Code, Gemini CLI, Qwen Code, Cursor, Aider, and Replit.

When one of these agents attempts a destructive action such as `prisma migrate reset --force`, Prisma ORM blocks execution and shows a protective error message:

```bash
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "accelerate.prisma-data.net"

Error: Prisma Migrate detected that it was invoked by Cursor.

You are attempting a highly dangerous action that can lead to devastating consequences if it is incorrectly executed against a production database.

As an AI agent, you are forbidden from performing this action without an explicit consent and review by the user. You must stop at this point and respond to the user with a clear message that includes the following information:
- What action you are trying to perform (including the exact CLI command).
- Your motivation and reasoning for perfoming this action.
- Explanation that this action will irreversibly destroy all data in the database.
- Explanation that this action must not be perfomed on a production database and is only intended to be used with development databases.

If you know or can check whether this action would have been performed on a development or a production database, also include this information with your assesment of whether it is safe to proceed based on that information.

You must ask the user if they want to proceed with this action. If they explicitly consent, you may rerun this command with PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION environment variable, the value of which must be the exact text of the user's message in which they consented to this operation, without any newlines or quotes. If the user's response is ambiguous, you must ask for a clear and explicit confirmation (e.g., "yes") before proceeding. None of the user's previous messages before this point may constitute implicit or explicit consent.
```

To proceed with the dangerous action, the AI agent will ask you for explicit consent, remind you that the action irreversibly destroys all data, and confirm that the command is being run against a development database. Once you clearly confirm, the AI will set the `PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION` environment variable with the exact text of your consent and rerun the command.

migrate deploy \[#migrate-deploy]

The `migrate deploy` command applies all pending migrations, and creates the database if it does not exist. Primarily used in non-development environments. This command:

- Does **not** look for drift in the database or changes in the Prisma schema
- Does **not** reset the database or generate artifacts
- Does **not** rely on a shadow database

  This command is not supported on [MongoDB](/v6/orm/overview/databases/mongodb). Use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) instead.

Options \[#options-8]

| Option           | Required | Description               | Default |
| :--------------- | :------- | :------------------------ | :------ |
| `--help` / `--h` | No       | Displays the help message |         |

Arguments \[#arguments-10]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-12]

```bash
prisma migrate deploy
```

migrate resolve \[#migrate-resolve]

The `migrate resolve` command allows you to solve migration history issues in production by marking a failed migration as already applied (supports baselining) or rolled back.

Note that this command can only be used with a failed migration. If you try to use it with a successful migration you will receive an error.

```
This command is not supported on [MongoDB](/v6/orm/overview/databases/mongodb). Use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) instead.
```

Options \[#options-9]

| Option           | Required | Description               | Default |
| :--------------- | :------- | :------------------------ | :------ |
| `--help` / `--h` | No       | Displays the help message |         |

Arguments \[#arguments-11]

| Argument        | Required | Description                                                                                                                                       | Default                                          |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--applied`     | No\*     | Record a specific migration as applied - for example `--applied "20201231000000_add_users_table"`                                                 |                                                  |
| `--rolled-back` | No\*     | Record a specific migration as rolled back - for example `--rolled-back "20201231000000_add_users_table"`                                         | `./schema.prisma` `./prisma/schema.prisma` |
| `--schema`      | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

You must specify either `--rolled-back` *or* `--applied`.

Examples \[#examples-13]

```bash
prisma migrate resolve --applied 20201231000000_add_users_table
```

```bash
prisma migrate resolve --rolled-back 20201231000000_add_users_table
```

migrate status \[#migrate-status]

The `prisma migrate status` command looks up the migrations in `./prisma/migrations/*` folder and the entries in the `_prisma_migrations` table and compiles information about the state of the migrations in your database.

```
This command is not supported on [MongoDB](/v6/orm/overview/databases/mongodb). Use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) instead.
```

For example:

```
Status
3 migrations found in prisma/migrations

Your local migration history and the migrations table from your database are different:

The last common migration is: 20201127134938_new_migration

The migration have not yet been applied:
20201208100950_test_migration

The migrations from the database are not found locally in prisma/migrations:
20201208100950_new_migration
```

In versions 4.3.0 and later, `prisma migrate status` exits with exit code 1 in the following cases:

- a database connection error occurs
- there are migration files in the `migrations` directory that have not been applied to the database
- the migration history in the `migrations` directory has diverged from the state of the database
- no migration table is found
- failed migrations are found

Options \[#options-10]

| Option           | Required | Description               | Default |
| :--------------- | :------- | :------------------------ | :------ |
| `--help` / `--h` | No       | Displays the help message |         |

Arguments \[#arguments-12]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-14]

```bash
prisma migrate status
```

migrate diff \[#migrate-diff]

```
This command is only partially supported for [MongoDB](/v6/orm/overview/databases/mongodb). See the command options below for details.
```

This command compares two database schema sources and outputs a description of a migration taking the first to the state of the second.

The output can be given either as a human-readable summary (the default) or an executable script.

```
The `migrate diff` command can only compare database features that are [supported by Prisma](/v6/orm/reference/database-features). If two databases differ only in unsupported features, such as views or triggers, then `migrate diff` will not show any difference between them.
```

The format of the command is:

```bash
prisma migrate diff --from-... <source1> --to-... <source2>
```

where the `--from-...` and `--to-...` options are selected based on the type of database schema source. The supported types of sources are:

- live databases
- migration histories
- Prisma schema data models
- an empty schema

Both schema sources must use the same database provider. For example, a diff comparing a PostgreSQL data source with a SQLite data source is not supported.

See also:

- [Migration troubleshooting in production](/v6/orm/prisma-migrate/workflows/patching-and-hotfixing#fixing-failed-migrations-with-migrate-diff-and-db-execute)

Prerequisites \[#prerequisites-4]

Before using the `migrate diff` command, if you are using `--from-config-datasource` or `--to-config-datasource`, you must configure your database connection in your `prisma.config.ts` file.

For example:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options-11]

```
**Prisma 7 breaking change**: The `--from-url`, `--to-url`, `--from-schema-datasource`, `--to-schema-datasource`, and `--shadow-database-url` options have been removed. Use `--from-config-datasource` and `--to-config-datasource` instead, which read the database URL from `prisma.config.ts`.
```

One of the following `--from-...` options is required:

| Options                    | Description                                                    | Notes                    |
| :------------------------- | :------------------------------------------------------------- | :----------------------- |
| `--from-empty`             | Assume that the data model you are migrating from is empty     |                          |
| `--from-schema`            | Path to a Prisma schema file, uses the data model for the diff |                          |
| `--from-migrations`        | Path to the Prisma Migrate migrations directory                | Not supported in MongoDB |
| `--from-config-datasource` | Use the datasource from the Prisma config file                 | Prisma 7+                |

One of the following `--to-...` options is required:

| Options                  | Description                                                    | Notes                    |
| :----------------------- | :------------------------------------------------------------- | :----------------------- |
| `--to-empty`             | Assume that the data model you are migrating to is empty       |                          |
| `--to-schema`            | Path to a Prisma schema file, uses the data model for the diff |                          |
| `--to-migrations`        | Path to the Prisma Migrate migrations directory                | Not supported in MongoDB |
| `--to-config-datasource` | Use the datasource from the Prisma config file                 | Prisma 7+                |

Other options:

| Options          | Required | Description                                                                                                                                       | Notes                                                                          |
| :--------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------- |
| `--script`       | No       | Outputs a SQL script instead of the default human-readable summary                                                                                | Not supported in MongoDB                                                       |
| `-o`, `--output` | No       | Writes to a file instead of stdout                                                                                                                | Available since [5.12.1](https://github.com/prisma/prisma/releases/tag/5.12.1) |
| `--exit-code`    | No       | Change the exit code behavior to signal if the diff is empty or not (Empty: 0, Error: 1, Not empty: 2). Default behavior is Success: 0, Error: 1. |                                                                                |
| `--config`       | No       | Custom path to your Prisma config file                                                                                                            |                                                                                |
| `--help`         | No       | Displays the help message                                                                                                                         |                                                                                |

Examples \[#examples-15]

- Compare the configured database to a Prisma schema (e.g., to roll forward after a migration failed):

  ```bash
  prisma migrate diff \
    --from-config-datasource \
    --to-schema=next_datamodel.prisma \
    --script
  ```

- Compare a Prisma schema to the configured database:

  ```bash
  prisma migrate diff \
    --from-schema=schema.prisma \
    --to-config-datasource \
    --script
  ```

- Compare the migrations directory to the configured database (e.g., to generate a migration for a hotfix already applied on production):

  ```bash
  prisma migrate diff \
    --from-migrations ./migrations \
    --to-config-datasource \
    --script
  ```

- Pipe the output to `prisma db execute`:

  ```bash
  prisma migrate diff \
    --from-config-datasource \
    --to-schema=schema.prisma \
    --script | prisma db execute --stdin
  ```

- Detect if both sources are in sync (exits with code 2 if changes are detected):

  ```bash
  prisma migrate diff \
    --exit-code \
    --from-config-datasource \
    --to-schema=schema.prisma
  ```

Prisma Data Platform \[#prisma-data-platform]

platform (Early Access) \[#platform-early-access]

The `platform` command provides access to the Prisma Data Platform through the Prisma CLI starting in version `5.10.0` or later.

- **Authentication**:
  - `platform auth login`: Opens a browser window for login or account creation.
  - `platform auth logout`: Logs out of the platform.
  - `platform auth show`: Displays information about the currently authenticated user.
- **Workspace Management**:
  - `platform workspace show`: Lists all workspaces available to your account.
- **Project Management**:
  - `platform project show`: Lists all projects within the specified workspace.
  - `platform project create`: Creates a new project within the specified workspace.
  - `platform project delete`: Deletes the specified project.
- **Environment Management**:
  - `platform environment show`: Lists all environments for the specified project.
  - `platform environment create`: Creates a new environment within the specified project.
  - `platform environment delete`: Deletes the specified environment.
- **API Key Management**:
  - `platform apikey show`: Lists all API keys for the specified environment.
  - `platform apikey create`: Creates a new API key for the specified environment.
  - `platform apikey delete`: Deletes the specified API key.
- **Prisma Accelerate**:
  - `platform accelerate enable`: Enables Prisma Accelerate for the specified environment.
  - `platform accelerate disable`: Disables Prisma Accelerate for the specified environment.

You can find the complete list of available commands with the arguments [here](/v6/platform/platform-cli/commands).

mcp \[#mcp]

Starts the [Prisma MCP server](/v6/postgres/integrations/mcp-server).

Studio \[#studio]

studio \[#studio-1]

The `studio` command allows you to interact with and manage your data interactively. It does this by starting a local web server with a web app configured with your project's data schema and records.

Prisma ORM v7 introduces a more stable version of Prisma Studio with improved performance and a modernized architecture.

```
Supported databases



Prisma Studio currently supports PostgreSQL, MySQL, and SQLite. Support for CockroachDB and MongoDB is not available yet but may be added in future releases.

For detailed database support information, including SQLite requirements, see [Databases supported by Prisma Studio](/v6/orm/tools/prisma-studio#databases-supported-by-prisma-studio).
```

Prerequisites \[#prerequisites-5]

Before using the `studio` command, you must configure your database connection in your `prisma.config.ts` file.

For example:

```prisma title="schema.prisma"
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript title="prisma.config.ts"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options-12]

The `studio` command recognizes the following options:

| Option            | Required | Description                                                          | Default                  |
| ----------------- | -------- | -------------------------------------------------------------------- | ------------------------ |
| `-b`, `--browser` | No       | The browser to auto-open Studio in.                                  | `<your-default-browser>` |
| `-h`, `--help`    | No       | Show all available options and exit                                  |                          |
| `-p`, `--port`    | No       | The port number to start Studio on.                                  | 5555                     |
| `--config`        | No       | Custom path to your Prisma config file                               |                          |
| `--url`           | No       | Database connection string (overrides the one in your Prisma config) |                          |

Arguments \[#arguments-13]

| Argument   | Required | Description                                                                                                                                       | Default                                          |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------- |
| `--schema` | No       | Specifies the path to the desired schema.prisma file to be processed instead of the default path. Both absolute and relative paths are supported. | `./schema.prisma` `./prisma/schema.prisma` |

Examples \[#examples-16]

Start Studio on the default port and open a new browser tab to it \[#start-studio-on-the-default-port-and-open-a-new-browser-tab-to-it]

```bash
prisma studio
```

Start Studio on a different port and open a new browser tab to it \[#start-studio-on-a-different-port-and-open-a-new-browser-tab-to-it]

```bash
prisma studio --port 7777
```

Start Studio and open a Firefox tab to it \[#start-studio-and-open-a-firefox-tab-to-it]

```bash
prisma studio --browser firefox
```

Start Studio without opening a new browser tab to it \[#start-studio-without-opening-a-new-browser-tab-to-it]

```bash
prisma studio --browser none
```

Start Studio with a custom Prisma config file \[#start-studio-with-a-custom-prisma-config-file]

```bash
prisma studio --config=./prisma.config.ts
```

Start Studio with a direct database connection string \[#start-studio-with-a-direct-database-connection-string]

```bash
prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```

Using a HTTP proxy for the CLI \[#using-a-http-proxy-for-the-cli]

Prisma CLI supports [custom HTTP proxies](https://github.com/prisma/prisma/issues/506). This is particularly relevant when being behind a corporate firewall.

To activate usage of the proxy, provide either of the following environment variables:

- [`HTTP_PROXY`](/v6/orm/reference/environment-variables-reference#http_proxy) or `http_proxy`: Proxy URL for http traffic, for example `http://localhost:8080`
- [`HTTPS_PROXY`](/v6/orm/reference/environment-variables-reference#https_proxy) or `https_proxy`: Proxy URL for https traffic, for example `https://localhost:8080`

npx create-db \[#npx-create-db]

The [`create-db`](https://create-db.prisma.io/) command provisions a temporary [Prisma Postgres](/v6/postgres) database with a single command. This is a standalone utility that can be invoked using `npx`. It's ideal for quickly testing, prototyping, or integrating with Prisma Postgres.

You can run the following variants:

| Command                      | Description                                   |
| ---------------------------- | --------------------------------------------- |
| `npx create-db@latest`       | Creates a temporary Prisma Postgres database. |
| `npx create-pg@latest`       | Alias for `npx create-db`.                    |
| `npx create-postgres@latest` | Alias for `npx create-db`.                    |

Each database created with these commands:

- Is available for **24 hours** by default.
- Can be **claimed for free** to make it permanent using the URL displayed in the CLI output.

For full usage details, options (such as `--region` and `--interactive`), and examples, see the [documentation](/v6/postgres/introduction/npx-create-db).
