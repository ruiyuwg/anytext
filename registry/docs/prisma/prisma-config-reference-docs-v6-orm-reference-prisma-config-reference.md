# Prisma Config reference (/docs/v6/orm/reference/prisma-config-reference)

Overview \[#overview]

The Prisma Config file configures the Prisma CLI, including subcommands like `migrate` and `studio`, using TypeScript.

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    Starting with Prisma ORM v7, when you run `prisma init`, a `prisma.config.ts` file is automatically created. The database connection URL is now configured in this file instead of in the `schema.prisma` file. See [Using environment variables](#using-environment-variables) for setup details.
  </CalloutDescription>
</CalloutContainer>

You can define your config in either of two ways:

- Using the `defineConfig` helper:

  ```ts
  import "dotenv/config";
  import { defineConfig, env } from "prisma/config";

  export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
      path: "prisma/migrations",
      seed: "tsx prisma/seed.ts",
    },
    datasource: {
      url: env("DATABASE_URL"),
    },
  });
  ```

- Using TypeScript's `satisfies` operator with the `PrismaConfig` type:

  ```ts
  import "dotenv/config";
  import type { PrismaConfig } from "prisma";
  import { env } from "prisma/config";

  export default {
    schema: "prisma/schema.prisma",
    migrations: {
      path: "prisma/migrations",
      seed: "tsx prisma/seed.ts",
    },
    datasource: {
      url: env("DATABASE_URL"),
    },
  } satisfies PrismaConfig;
  ```

Configuration interface \[#configuration-interface]

Here is a simplified version of the `PrismaConfig` type:

```ts
export declare type PrismaConfig = {
  // Whether features with an unstable API are enabled.
  experimental: {
    externalTables: boolean;
  };

  // The path to the schema file, or path to a folder that shall be recursively searched for *.prisma files.
  schema?: string;

  // Configuration for Prisma migrations.
  migrations?: {
    path: string;
    seed: string;
    initShadowDb: string;
  };

  // Configuration for the database view entities.
  views?: {
    path: string;
  };

  // Configuration for the `typedSql` preview feature.
  typedSql?: {
    path: string;
  };

  // Database connection configuration
  datasource?: {
    url: string;
    shadowDatabaseUrl?: string;
  };
};
```

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v6.19 and earlier
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v6.19 and earlier, the configuration interface also included:

```
* `experimental.adapter` and `experimental.studio` flags
* `adapter` property for configuring driver adapters
* `studio` property for Prisma Studio configuration
* `datasource.directUrl` property for direct database connections
* `engine` property for choosing between `classic` and `js` engines

These have been removed in Prisma ORM v7. See the individual property sections below for migration guidance.
```

  </CalloutDescription>
</CalloutContainer>

Supported file extensions \[#supported-file-extensions]

Prisma Config files can be named as `prisma.config.*` or `.config/prisma.*` with the extensions `js`, `ts`, `mjs`, `cjs`, `mts`, or `cts`. Other extensions are supported to ensure compatibility with different TypeScript compiler settings.

<CalloutContainer type="info">
  <CalloutTitle>
    Recommendation
  </CalloutTitle>

  <CalloutDescription>
    * Use **`prisma.config.ts`** for small TypeScript projects.
    * Use **`.config/prisma.ts`** for larger TypeScript projects with multiple configuration files (following the [`.config` directory proposal](https://github.com/pi0/config-dir)).
  </CalloutDescription>
</CalloutContainer>

Options reference \[#options-reference]

schema \[#schema]

Configures how Prisma ORM locates and loads your schema file(s). Can be a file or folder path. Relative paths are resolved relative to the `prisma.config.ts` file location. See [here](/v6/orm/prisma-schema/overview/location#multi-file-prisma-schema) for more info about schema location options.

| Property | Type     | Required | Default                                        |
| -------- | -------- | -------- | ---------------------------------------------- |
| `schema` | `string` | No       | `./prisma/schema.prisma` and `./schema.prisma` |

tables.external and enums.external \[#tablesexternal-and-enumsexternal]

These options declare tables and enums in your database that are **managed externally** (not by Prisma Migrate). You can still query them with Prisma Client, but they will be ignored by migrations.

| Property          | Type       | Required | Default |
| ----------------- | ---------- | -------- | ------- |
| `tables.external` | `string[]` | No       | `[]`    |
| `enums.external`  | `string[]` | No       | `[]`    |

**Example:**

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
  experimental: {
    externalTables: true,
  },
  tables: {
    external: ["public.users"],
  },
  enums: {
    external: ["public.role"],
  },
});
```

Learn more about the [`externalTables` feature here](/v6/orm/prisma-schema/data-model/externally-managed-tables).

migrations.path \[#migrationspath]

The path to the directory where Prisma should store migration files, and look for them.

| Property          | Type     | Required | Default |
| ----------------- | -------- | -------- | ------- |
| `migrations.path` | `string` | No       | none    |

migrations.seed \[#migrationsseed]

This option allows you to define a script that Prisma runs when you execute the `npx prisma db seed` command. The string should be a command that can be executed in your terminal, such as with `node`, `ts-node`, or `tsx`.

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v7, seeding is only triggered explicitly via `npx prisma db seed`. In Prisma ORM v6 and earlier, the seed script also ran automatically after `prisma migrate dev` and `prisma migrate reset`.
  </CalloutDescription>
</CalloutContainer>

| Property          | Type     | Required | Default |
| ----------------- | -------- | -------- | ------- |
| `migrations.seed` | `string` | No       | none    |

**Example:**

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx db/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

migrations.initShadowDb \[#migrationsinitshadowdb]

This option allows you to define SQL statements that Prisma runs on the **shadow database** before creating migrations. It is useful when working with [external managed tables](/v6/orm/prisma-schema/data-model/externally-managed-tables), as Prisma needs to know about the structure of these tables to correctly generate migrations.

| Property                  | Type     | Required | Default |
| ------------------------- | -------- | -------- | ------- |
| `migrations.initShadowDb` | `string` | No       | none    |

**Example:**

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    initShadowDb: `
      CREATE TABLE public.users (id SERIAL PRIMARY KEY);
    `,
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
  experimental: {
    externalTables: true,
  },
  tables: {
    external: ["public.users"],
  },
});
```

Learn more about the [`externalTables` feature here](/v6/orm/prisma-schema/data-model/externally-managed-tables).

views.path \[#viewspath]

The path to the directory where Prisma should look for the SQL view definitions.

| Property     | Type     | Required | Default |
| ------------ | -------- | -------- | ------- |
| `views.path` | `string` | No       | none    |

typedSql.path \[#typedsqlpath]

The path to the directory where Prisma should look for the SQL files used for generating typings via [`typedSql`](/v6/orm/prisma-client/using-raw-sql/typedsql).

| Property        | Type     | Required | Default |
| --------------- | -------- | -------- | ------- |
| `typedSql.path` | `string` | No       | none    |

experimental \[#experimental]

Enables specific experimental features in the Prisma CLI.

| Property         | Type      | Required | Default |
| ---------------- | --------- | -------- | ------- |
| `externalTables` | `boolean` | No       | `false` |

Example:

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
  experimental: {
    externalTables: true,
  },
});
```

<CalloutContainer type="info">
  <CalloutDescription>
    If you use the `externalTables` feature without enabling the experimental flag, Prisma will throw an error:

````
```bash
Failed to load config file "~" as a TypeScript/JavaScript module. Error: Error: The `externalTables` configuration requires `experimental.externalTables` to be set to `true`.
```
````

  </CalloutDescription>
</CalloutContainer>

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v6.19 and earlier
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v6.19 and earlier, the `experimental` object also included `adapter` and `studio` flags. These have been removed in Prisma ORM v7. See the [`adapter`](#adapter-removed) and [`studio`](#studio-removed) sections for details.
  </CalloutDescription>
</CalloutContainer>

datasource.url \[#datasourceurl]

Connection URL including authentication info. Most connectors use [the syntax provided by the database](/v6/orm/reference/connection-urls#format).

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v7, the `url` field is configured in `prisma.config.ts` instead of in [the `datasource` block of your `schema.prisma`](/v6/orm/prisma-schema/overview/data-sources) file. When you run `prisma init`, the generated `schema.prisma` file will not include a `url` property in the `datasource` block.

```
For Prisma ORM v6.19 and earlier, the `url` field remains in the `schema.prisma` file's `datasource` block.
```

  </CalloutDescription>
</CalloutContainer>

| Property         | Type     | Required | Default |
| ---------------- | -------- | -------- | ------- |
| `datasource.url` | `string` | Yes      | `''`    |

**Example:**

```ts
import "dotenv/config";
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

datasource.shadowDatabaseUrl \[#datasourceshadowdatabaseurl]

Connection URL to the shadow database used by Prisma Migrate. Allows you to use a cloud-hosted database as the shadow database.

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v7, the `shadowDatabaseUrl` field is configured in `prisma.config.ts` instead of in the `datasource` block of your `schema.prisma` file.

```
For Prisma ORM v6.19 and earlier, the `shadowDatabaseUrl` field remains in the `schema.prisma` file's `datasource` block.
```

  </CalloutDescription>
</CalloutContainer>

| Property                       | Type     | Required | Default |
| ------------------------------ | -------- | -------- | ------- |
| `datasource.shadowDatabaseUrl` | `string` | No       | `''`    |

datasource.directUrl (Removed) \[#datasourcedirecturl-removed]

<CalloutContainer type="warning">
  <CalloutTitle>
    Removed in Prisma ORM v7
  </CalloutTitle>

  <CalloutDescription>
    The `datasource.directUrl` property has been removed in Prisma ORM v7 in favor of the [`url` property](#datasourceurl).
  </CalloutDescription>
</CalloutContainer>

<details>
  <summary>
    For Prisma ORM v6.19 and earlier
  </summary>

Connection URL for direct connection to the database.

If you use a connection pooler URL in the `url` argument (for example, pgBouncer), Prisma CLI commands that require a direct connection to the database use the URL in the `directUrl` argument.

The `directUrl` property is supported by Prisma Studio from version 5.1.0 upwards. The `directUrl` property is not needed when using [Prisma Postgres](/v6/postgres) database.

| Property               | Type     | Required | Default |
| ---------------------- | -------- | -------- | ------- |
| `datasource.directUrl` | `string` | No       | `''`    |

</details>

adapter (Removed) \[#adapter-removed]

<CalloutContainer type="warning">
  <CalloutTitle>
    Removed in Prisma ORM v7
  </CalloutTitle>

  <CalloutDescription>
    The `adapter` property has been removed in Prisma ORM v7. Migrations for driver adapters work automatically without additional configuration in `prisma.config.ts` as of Prisma ORM v7.
  </CalloutDescription>
</CalloutContainer>

<details>
  <summary>
    For Prisma ORM v6.19 and earlier
  </summary>

A function that returns a Prisma driver adapter instance which is used by the Prisma CLI to run migrations. The function should return a `Promise` that resolves to a valid Prisma driver adapter.

| Property  | Type                                                   | Required | Default |
| --------- | ------------------------------------------------------ | -------- | ------- |
| `adapter` | `() => Promise<SqlMigrationAwareDriverAdapterFactory>` | No       | none    |

Example using the Prisma ORM D1 driver adapter:

```ts
import path from "node:path";
import type { PrismaConfig } from "prisma";
import { PrismaD1 } from "@prisma/adapter-d1";

export default {
  experimental: {
    adapter: true,
  },
  engine: "js",
  schema: path.join("prisma", "schema.prisma"),
  async adapter() {
    return new PrismaD1({
      CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN,
      CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
      CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID,
    });
  },
} satisfies PrismaConfig;
```

  <CalloutContainer type="info">
    <CalloutDescription>
      As of [Prisma ORM v6.11.0](https://github.com/prisma/prisma/releases/tag/6.11.0), the D1 adapter has been renamed from `PrismaD1HTTP` to `PrismaD1`.
    </CalloutDescription>
  </CalloutContainer>
</details>

engine (Removed) \[#engine-removed]

<CalloutContainer type="warning">
  <CalloutTitle>
    Removed in Prisma ORM v7
  </CalloutTitle>

  <CalloutDescription>
    The `engine` property has been removed in Prisma ORM v7.
  </CalloutDescription>
</CalloutContainer>

<details>
  <summary>
    For Prisma ORM v6.19 and earlier
  </summary>

Configure the schema engine your project should use.

| Property | Type              | Required | Default   |
| -------- | ----------------- | -------- | --------- |
| `engine` | `classic` or `js` | No       | `classic` |

By default it is set to use the classic engine, which requires that `datasource` be set in your `prisma.config.ts`.

```ts
import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
  schema: path.join("prisma", "schema.prisma"),
});
```

</details>

studio (Removed) \[#studio-removed]

<CalloutContainer type="warning">
  <CalloutTitle>
    Removed in Prisma ORM v7
  </CalloutTitle>

  <CalloutDescription>
    The `studio` property has been removed in Prisma ORM v7. To run Prisma Studio, use:

````
<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma studio --config ./prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma studio --config ./prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma studio --config ./prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma studio --config ./prisma.config.ts
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Prisma Studio now uses the connection configuration from the `datasource` property automatically. See the [Prisma Studio documentation](/v6/orm/reference/prisma-cli-reference#studio) for more details.
````

  </CalloutDescription>
</CalloutContainer>

<details>
  <summary>
    For Prisma ORM v6.19 and earlier
  </summary>

Configures how Prisma Studio connects to your database. See sub-options below for details.

| Property | Type     | Required | Default |
| -------- | -------- | -------- | ------- |
| `studio` | `object` | No       | none    |

studio.adapter (Removed) \[#studioadapter-removed]

A function that returns a Prisma driver adapter instance. The function receives an `env` parameter containing environment variables and should return a `Promise` that resolves to a valid Prisma driver adapter.

| Property          | Type                                                           | Required | Default |
| ----------------- | -------------------------------------------------------------- | -------- | ------- |
| `studio.adapter ` | `(env: Env) => Promise<SqlMigrationAwareDriverAdapterFactory>` | No       | none    |

Example using the Prisma ORM LibSQL driver adapter:

```ts
import type { PrismaConfig } from "prisma";

export default {
  experimental: {
    studio: true,
  },
  engine: "js",
  studio: {
    adapter: async (env: Env) => {
      const { PrismaLibSQL } = await import("@prisma/adapter-libsql");
      const { createClient } = await import("@libsql/client");

      const libsql = createClient({
        url: env.DOTENV_PRISMA_STUDIO_LIBSQL_DATABASE_URL,
      });
      return new PrismaLibSQL(libsql);
    },
  },
} satisfies PrismaConfig;
```

</details>

Common patterns \[#common-patterns]

Setting up your project \[#setting-up-your-project]

To get started with Prisma Config, create a `prisma.config.ts` file in your project root. You can use either of these approaches:

Using `defineConfig`:

```ts
import "dotenv/config";
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

Using TypeScript types:

```ts
import "dotenv/config";
import type { PrismaConfig } from "prisma";
import { env } from "prisma/config";

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
} satisfies PrismaConfig;
```

Using environment variables \[#using-environment-variables]

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v7, when you run `prisma init`, the generated `prisma.config.ts` file includes `import 'dotenv/config'` by default. You must install the `dotenv` package to use environment variables.
  </CalloutDescription>
</CalloutContainer>

When using `prisma.config.ts`, environment variables from `.env` files need to be loaded explicitly. There are several approaches depending on your runtime and Node version:

Using dotenv (Recommended for Prisma ORM v7) \[#using-dotenv-recommended-for-prisma-orm-v7]

1. Install the `dotenv` package:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add dotenv
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add dotenv
    ```
  </CodeBlockTab>
</CodeBlockTabs>

2. Import `dotenv/config` at the top of your `prisma.config.ts` file:

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Using Node.js v20+ or tsx with --env-file flag \[#using-nodejs-v20-or-tsx-with---env-file-flag]

If using Node.js v20+ or `tsx`, you can pass a `--env-file` flag to automatically load environment variables:

```bash
tsx --env-title=".env" src/index.ts
tsx watch --env-title=".env" --env-title=".local.env" src/index.ts
tsx --env-title=".env" ./prisma/seed.ts
```

Using Bun \[#using-bun]

For Bun, `.env` files are automatically loaded without additional configuration. The `import 'dotenv/config'` line that `prisma init` generates is not needed when using Bun and can be safely removed from your `prisma.config.ts` file.

<CalloutContainer type="info">
  <CalloutDescription>
    When running Prisma CLI commands with Bun, use the `--bun` flag (e.g., `bunx --bun prisma init`) to ensure Prisma uses the Bun runtime instead of falling back to Node.js.
  </CalloutDescription>
</CalloutContainer>

Type-safe environment variables \[#type-safe-environment-variables]

Use the `env()` helper function to provide type-safe access to environment variables:

```ts
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

type Env = {
  DATABASE_URL: string;
};

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

Handling optional environment variables \[#handling-optional-environment-variables]

The `env()` helper function from `prisma/config` **throws an error** if the specified environment variable is not defined. This is important to understand because:

- Every Prisma CLI command loads the `prisma.config.ts` file
- Only **some** commands actually need the `datasource.url` value (e.g., `prisma db *`, `prisma migrate *`, `prisma generate --sql`)
- Commands like `prisma generate` don't need a database URL, but will still fail if `env()` throws an error when loading the config file

For example, if you run `prisma generate` without `DATABASE_URL` set, and your config uses `env('DATABASE_URL')`, you'll see:

```bash
Error: PrismaConfigEnvError: Missing required environment variable: DATABASE_URL
```

**Solution:** If your environment variable isn't guaranteed to exist (e.g., in CI/CD pipelines where you only run `prisma generate` for type-checking), don't use the `env()` helper. Instead, access the environment variable directly:

```ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL!, // Or use: process.env.DATABASE_URL ?? '' to provide a fallback value
  },
});
```

<CalloutContainer type="info">
  <CalloutDescription>
    Use the `env()` helper when you want to **enforce** that an environment variable exists. Use `process.env` directly when the variable may be optional depending on the command being run.
  </CalloutDescription>
</CalloutContainer>

Using multi-file schemas \[#using-multi-file-schemas]

If you want to split your Prisma schema into multiple files, you need to specify the path to your Prisma schema folder via the `schema` property:

```ts
import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  schema: path.join("prisma", "schema"),
} satisfies PrismaConfig;
```

In that case, your `migrations` directory must be located next to the `.prisma` file that defines the `datasource` block.

For example, assuming `schema.prisma` defines the `datasource`, here's how how need to place the migrations folder:

```
# `migrations` and `schema.prisma` are on the same level
.
├── migrations
├── models
│   ├── posts.prisma
│   └── users.prisma
└── schema.prisma
```

Path resolution \[#path-resolution]

Prisma CLI commands such as `prisma validate` or `prisma migrate` use `prisma.config.ts` (or `.config/prisma.ts`) to locate your Prisma schema and other resources.

**Key rules:**

- Paths defined in the config file (e.g., `schema`, `migrations`) are always resolved **relative to the location of the config file**, not where you run the CLI command from.
- The CLI must first **find the config file** itself, which depends on how Prisma is installed and the package manager used.

Behavior with pnpm prisma \[#behavior-with-pnpm-prisma]

When Prisma is installed locally and run via `pnpm prisma`, the config file is detected automatically whether you run the command from the project root or a subdirectory.

Example project tree:

```
.
├── node_modules
├── package.json
├── prisma-custom
│   └── schema.prisma
├── prisma.config.ts
└── src
```

Example run from the project root:

```bash
pnpm prisma validate
# → Loaded Prisma config from ./prisma.config.ts
# → Prisma schema loaded from prisma-custom/schema.prisma
```

Example run from a subdirectory:

```bash
cd src
pnpm prisma validate
# → Still finds prisma.config.ts and resolves schema correctly
```

Behavior with npx prisma or bunx --bun prisma \[#behavior-with-npx-prisma-or-bunx---bun-prisma]

When running via `npx prisma` or `bunx --bun prisma`, the CLI only detects the config file if the command is run from the **project root** (where `package.json` declares Prisma).

<CalloutContainer type="info">
  <CalloutDescription>
    The `--bun` flag is required when using Bun to ensure Prisma runs with the Bun runtime. Without it, Prisma falls back to Node.js due to the `#!/usr/bin/env node` shebang in the CLI.
  </CalloutDescription>
</CalloutContainer>

Example run from the project root:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma validate
    # → Works as expected
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma validate
    # → Works as expected
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma validate
    # → Works as expected
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma validate
    # → Works as expected
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Run from a subdirectory (fails):

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    cd src
    npx prisma validate
    # → Error: Could not find Prisma Schema...
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    cd src
    pnpm dlx prisma validate
    # → Error: Could not find Prisma Schema...
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    cd src
    yarn dlx prisma validate
    # → Error: Could not find Prisma Schema...
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    cd src
    bun x prisma validate
    # → Error: Could not find Prisma Schema...
    ```
  </CodeBlockTab>
</CodeBlockTabs>

To fix this, you can use the `--config` flag:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma validate --config ../prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma validate --config ../prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma validate --config ../prisma.config.ts
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma validate --config ../prisma.config.ts
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Global Prisma installations \[#global-prisma-installations]

If Prisma is installed globally (`npm i -g prisma`), it may not find your `prisma.config.ts` or `prisma/config` module by default.
To avoid issues:

- Prefer local Prisma installations in your project.
- Or use `prisma/config` locally and pass `--config` to point to your config file.

Monorepos \[#monorepos]

- If Prisma is installed in the **workspace root**, `pnpm prisma` will detect the config file from subdirectories.
- If Prisma is installed in a **subpackage** (e.g., `./packages/db`), run commands from that package directory or deeper.

Custom config location \[#custom-config-location]

You can specify a custom location for your config file when running Prisma CLI commands:

```bash
prisma validate --config ./path/to/myconfig.ts
```

Loading environment variables \[#loading-environment-variables]

<CalloutContainer type="info">
  <CalloutTitle>
    Prisma ORM v7 changes
  </CalloutTitle>

  <CalloutDescription>
    In Prisma ORM v7, `prisma init` generates a `prisma.config.ts` file automatically. To load environment variables with `dotenv`, do the following:

```
1. Install the `dotenv` package.
2. Add `import 'dotenv/config'` at the top of your `prisma.config.ts` file.

This is required for Prisma to read values from your `.env` file.
```

  </CalloutDescription>
</CalloutContainer>

To load environment variables in your Prisma application, you can use the `prisma.config.ts` file along with the `env` helper from `prisma/config`. This approach provides better type safety and configuration management.

1. Install the `dotenv` package:

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npm install dotenv
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm add dotenv
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn add dotenv
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bun add dotenv
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

2. Create a `.env` file in your project root (if it doesn't exist) and add your database connection string:

   ```text
   DATABASE_URL="your_database_connection_string_here"
   ```

3. Ensure your `prisma.config.ts` file imports `dotenv/config` at the top:

   ```ts title="prisma.config.ts"
   import "dotenv/config"; // [!code ++]
   import { defineConfig, env } from "prisma/config";

   export default defineConfig({
     schema: "prisma/schema.prisma",
     migrations: {
       path: "prisma/migrations",
       seed: "tsx prisma/seed.ts",
     },
     datasource: {
       url: env("DATABASE_URL"),
     },
   });
   ```
