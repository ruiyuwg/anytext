# Neon (/docs/guides/switch-to-prisma-postgres/from-neon)

This guide walks you through migrating data from Neon to Prisma Postgres using `pg_dump` and `pg_restore`.

Prerequisites \[#prerequisites]

- A Neon database connection URL
- A [Prisma Data Platform](https://console.prisma.io) account
- PostgreSQL CLI tools (`pg_dump`, `pg_restore`) version 17

  If you don't have them installed, install PostgreSQL 17 client tools:

  ```bash
  # macOS
  brew install libpq
  brew link --force libpq

  # Debian / Ubuntu
  sudo apt-get install postgresql-client-17

  # Windows (via installer)
  # Download from https://www.postgresql.org/download/windows/
  # Select "Command Line Tools" during installation
  ```

  Make sure your PostgreSQL tools match the Prisma Postgres version

  Prisma Postgres runs PostgreSQL 17. Run `pg_dump --version` or `pg_restore --version` to confirm.

1. Create a new Prisma Postgres database \[#1-create-a-new-prisma-postgres-database]

2. Log in to [Prisma Data Platform](https://console.prisma.io/) and open the Console.

3. In a [workspace](/console/concepts#workspace) of your choice, click **New project**.

4. Name your project, then click **Get started** under **Prisma Postgres**.

5. Select a region and click **Create project**.

Once provisioned, get your direct connection string:

1. Click the **API Keys** tab in your project's sidenav.

2. Click **Create API key**, give it a name, and click **Create**.

3. Copy the connection string starting with `postgres://` — you'll need this in step 3.

4. Export data from Neon \[#2-export-data-from-neon]

Copy a **non-pooled** connection string from Neon (disable **Connection pooling**) and ensure it includes `sslmode=require`:

```text
postgresql://USER:PASSWORD@YOUR-NEON-HOST/DATABASE?sslmode=require
```

Export the connection string as an environment variable. Use single quotes so that special characters in your password (like `!`, `$`, or `#`) are not interpreted by the shell:

```bash
export NEON_DATABASE_URL='postgresql://USER:PASSWORD@YOUR-NEON-HOST/DATABASE?sslmode=require'
```

Then run:

```bash
pg_dump \
  -Fc \
  -d "$NEON_DATABASE_URL" \
  -n public \
  -f neon_dump.bak
```

3. Import data into Prisma Postgres \[#3-import-data-into-prisma-postgres]

Export your [direct connection string](/postgres/database/direct-connections) from step 1 as an environment variable:

```bash
export PRISMA_POSTGRES_DATABASE_URL='postgres://...'
```

Then restore:

```bash
pg_restore \
  --no-owner \
  --no-acl \
  -d "$PRISMA_POSTGRES_DATABASE_URL" \
  neon_dump.bak
```

The `--no-owner` and `--no-acl` flags skip Neon-specific role assignments that don't exist in Prisma Postgres.

```
You can safely ignore the warning `schema "public" already exists`. The `public` schema is pre-created in every Prisma Postgres database, so the `CREATE SCHEMA public` command from the dump is redundant. Your data is still imported correctly.
```

To validate the import, open [Prisma Studio](/studio) from the **Studio** tab in your project, or run:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio
```



```bash
pnpm dlx prisma studio
```



```bash
yarn dlx prisma studio
```



```bash
bunx --bun prisma studio
```
````

4\. Update your application \[#4-update-your-application]

Already using Prisma ORM \[#already-using-prisma-orm]

Update `DATABASE_URL` in your `.env` file:

```text title=".env"
DATABASE_URL="postgres://USER:PASSWORD@db.prisma.io:5432/?sslmode=require"
```

Then regenerate Prisma Client:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate
```



```bash
pnpm dlx prisma generate
```



```bash
yarn dlx prisma generate
```



```bash
bunx --bun prisma generate
```





See the [Prisma ORM with Prisma Postgres quickstart](/prisma-orm/quickstart/prisma-postgres) for driver adapter configuration and best practices.
````

Not yet using Prisma ORM \[#not-yet-using-prisma-orm]

Follow [Add Prisma ORM to an existing project](/prisma-orm/add-to-existing-project/prisma-postgres) to introspect your database, generate a schema, and migrate your queries.
