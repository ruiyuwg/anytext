# Schema location (/docs/v6/orm/prisma-schema/overview/location)

The default name for the Prisma Schema is a single file `schema.prisma` in your `prisma` folder. When your schema is named like this, the Prisma CLI will detect it automatically.

Prisma Schema location \[#prisma-schema-location]

The Prisma CLI looks for the Prisma Schema in the following locations, in the following order:

1. The location specified by the [`--schema` flag](/v6/orm/reference/prisma-cli-reference), which is available when you `introspect`, `generate`, `migrate`, and `studio`:

   ```bash
   prisma generate --schema=./alternative/schema.prisma
   ```

2. The location specified in the `package.json` file (version 2.7.0 and later):

   ```json
   "prisma": {
     "schema": "db/schema.prisma"
   }
   ```

3. Default locations:
   - `./prisma/schema.prisma`
   - `./schema.prisma`

The Prisma CLI outputs the path of the schema that will be used. The following example shows the terminal output for `prisma db pull`:

```text
Environment variables loaded from .env
Prisma Schema loaded from prisma/schema.prisma

Introspecting based on datasource defined in prisma/schema.prisma …

✔ Introspected 4 models and wrote them into prisma/schema.prisma in 239ms

Run prisma generate to generate Prisma Client.
```

Multi-file Prisma schema \[#multi-file-prisma-schema]

If you prefer splitting your Prisma schema into multiple files, you can have a setup that looks as follows:

```
prisma/
├── migrations
├── models
│   ├── posts.prisma
│   ├── users.prisma
│   └── ... other `.prisma` files
└── schema.prisma
```

```
Multi-file Prisma schemas are Generally Available since [v6.7.0](https://pris.ly/release/6.7.0). Before that, they could be used via the `prismaSchemaFolder` Preview feature flag.
```

Usage \[#usage]

When using a multi-file Prisma schema, you must always explicitly specify the location of the directory that contains your schema files (including the main `schema.prisma` file with your `generator` block).

You can do this in either of three ways:

- pass the `--schema` option to your Prisma CLI command (e.g. `prisma migrate dev --schema ./prisma`)
- set the `prisma.schema` field in `package.json`:
  ```jsonc
  // package.json
  {
    "prisma": {
      "schema": "./prisma",
    },
  }
  ```
- set the `schema` property in [`prisma.config.ts`](/v6/orm/reference/prisma-config-reference#schema) ( for Prisma ORM v7):

  ```ts
  import { defineConfig, env } from "prisma/config";
  import "dotenv/config";

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

  ```
  We recommend using the [Prisma Config file](/v6/orm/reference/prisma-config-reference#schema) to specify the location of your Prisma schema. This is the most flexible way to specify the location of your Prisma schema alongside other configuration options.
  ```

  The `schema.prisma` file (which contains your `generator` block) must be located in the same directory that you specify in your schema configuration. For example, if you configure `schema: 'prisma'`, your `schema.prisma` file must be at `prisma/schema.prisma`, not in a subdirectory like `prisma/models/schema.prisma`.

You also must place the `migrations` directory at the same level as your `schema.prisma` file.

For example, assuming `schema.prisma` defines the `generator` block, here's the correct directory structure:

```
# All files must be inside the `prisma/` directory
# `migrations` and `schema.prisma` must be at the same level
prisma/
├── migrations
├── models
│   ├── posts.prisma
│   └── users.prisma
└── schema.prisma  # Contains generator block
```

```
If your schema files are in a `prisma/` directory (as shown above), the Prisma CLI commands like `prisma generate` and `prisma migrate dev` will work without additional configuration, as `./prisma/schema.prisma` is a default location.
```

Tips for multi-file Prisma Schema \[#tips-for-multi-file-prisma-schema]

We've found that a few patterns work well with this feature and will help you get the most out of it:

- Organize your files by domain: group related models into the same file. For example, keep all user-related models in `user.prisma` while post-related models go in `post.prisma`.
- Use clear naming conventions: schema files should be named clearly and succinctly. Use names like `user.prisma` and `post.prisma` and not `myModels.prisma` or `CommentFeaturesSchema.prisma`.
- Have an obvious "main" schema file: while you can now have as many schema files as you want, you'll still need a place where you define your `generator` block. We recommend having a single schema file that's obviously the "main" file so that this block is easy to find. `main.prisma`, `schema.prisma`, and `base.prisma` are a few we've seen that work well.

# Prisma Error Reference (/docs/v6/orm/reference/errors)

This section provides information about common errors you might encounter when using Prisma ORM and how to resolve them.

Error Categories \[#error-categories]

Prisma Client Errors \[#prisma-client-errors]

- [**Connection Pool Issues**](/v6/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool) - Troubleshoot connection pooling problems

Prisma Migrate Errors \[#prisma-migrate-errors]

- [**Migration Overview**](/v6/orm/prisma-migrate/understanding-prisma-migrate/overview) - Understanding migration concepts
- [**Shadow Database Issues**](/v6/orm/prisma-migrate/understanding-prisma-migrate/shadow-database) - Troubleshoot shadow database problems
- [**Baselining Issues**](/v6/orm/prisma-migrate/workflows/baselining) - Issues with baseline migrations

MongoDB Errors \[#mongodb-errors]

- [**Replica Set Configuration**](/v6/orm/overview/databases/mongodb) - MongoDB replica set requirements

Full Error Reference \[#full-error-reference]

For a complete list of error codes and their meanings, see the [Error Reference](/v6/orm/reference/error-reference).
