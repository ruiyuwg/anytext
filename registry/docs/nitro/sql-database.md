# SQL Database

The default database connection is **preconfigured** with [SQLite](https://db0.unjs.io/connectors/sqlite){rel=""nofollow""} and works out of the box for development mode and any Node.js compatible production deployments. By default, data will be stored in `.data/db.sqlite3`.

::tip
You can change default connection or define more connections to any of the [supported databases](https://db0.unjs.io/connectors/sqlite){rel=""nofollow""}.
::

::tip
You can integrate database instance to any of the [supported ORMs](https://db0.unjs.io/integrations){rel=""nofollow""}.
::

:read-more{title="DB0 Documentation" to="https://db0.unjs.io"}

## Opt-in to the experimental feature

::important
Database support is currently experimental.
Refer to the [db0 issues](https://github.com/unjs/db0/issues){rel=""nofollow""} for status and bug report.
::

In order to enable database layer you need to enable experimental feature flag.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  experimental: {
    database: true
  }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    experimental: {
      database: true
    }
  }
})
```

::

## Usage

```ts [index.ts]
export default defineEventHandler(async () => {
  const db = useDatabase();

  // Create users table
  await db.sql`DROP TABLE IF EXISTS users`;
  await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

  // Add a new user
  const userId = String(Math.round(Math.random() * 10_000));
  await db.sql`INSERT INTO users VALUES (${userId}, 'John', 'Doe', '')`;

  // Query for users
  const { rows } = await db.sql`SELECT * FROM users WHERE id = ${userId}`;

  return {
    rows,
  };
});
```

## Configuration

You can configure database connections using `database` config:

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  database: {
    default: {
      connector: 'sqlite',
      options: { name: 'db' }
    },
    users: {
      connector: 'postgresql',
      options: {
        url: 'postgresql://username:password@hostname:port/database_name'
      }
    }
  }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    database: {
      default: {
        connector: 'sqlite',
        options: { name: 'db' }
      },
      users: {
        connector: 'postgresql',
        options: {
          url: 'postgresql://username:password@hostname:port/database_name'
        }
      }
    }
  }
})
```

::

::tip
You can use the `devDatabase` config to overwrite the database configuration only for development mode.
::
