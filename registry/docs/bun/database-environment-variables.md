## Database Environment Variables

`sql` connection parameters can be configured using environment variables. The client checks these variables in a specific order of precedence and automatically detects the database type based on the connection string format.

### Automatic Database Detection

When using `Bun.sql()` without arguments or `new SQL()` with a connection string, the adapter is automatically detected based on the URL format:

#### MySQL Auto-Detection

MySQL is automatically selected when the connection string matches these patterns:

- `mysql://...` - MySQL protocol URLs
- `mysql2://...` - MySQL2 protocol URLs (compatibility alias)

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// These all use MySQL automatically (no adapter needed)
const sql1 = new SQL("mysql://user:pass@localhost/mydb");
const sql2 = new SQL("mysql2://user:pass@localhost:3306/mydb");

// Works with DATABASE_URL environment variable
DATABASE_URL="mysql://user:pass@localhost/mydb" bun run app.js
DATABASE_URL="mysql2://user:pass@localhost:3306/mydb" bun run app.js
```

#### SQLite Auto-Detection

SQLite is automatically selected when the connection string matches these patterns:

- `:memory:` - In-memory database
- `sqlite://...` - SQLite protocol URLs
- `sqlite:...` - SQLite protocol without slashes
- `file://...` - File protocol URLs
- `file:...` - File protocol without slashes

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// These all use SQLite automatically (no adapter needed)
const sql1 = new SQL(":memory:");
const sql2 = new SQL("sqlite://app.db");
const sql3 = new SQL("file://./database.db");

// Works with DATABASE_URL environment variable
DATABASE_URL=":memory:" bun run app.js
DATABASE_URL="sqlite://myapp.db" bun run app.js
DATABASE_URL="file://./data/app.db" bun run app.js
```

#### PostgreSQL Auto-Detection

PostgreSQL is the default for connection strings that don't match MySQL or SQLite patterns:

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
# PostgreSQL is detected for these patterns
DATABASE_URL="postgres://user:pass@localhost:5432/mydb" bun run app.js
DATABASE_URL="postgresql://user:pass@localhost:5432/mydb" bun run app.js

# Or any URL that doesn't match MySQL or SQLite patterns
DATABASE_URL="localhost:5432/mydb" bun run app.js
```

### MySQL Environment Variables

MySQL connections can be configured via environment variables:

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
# Primary connection URL (checked first)
MYSQL_URL="mysql://user:pass@localhost:3306/mydb"

# Alternative: DATABASE_URL with MySQL protocol
DATABASE_URL="mysql://user:pass@localhost:3306/mydb"
DATABASE_URL="mysql2://user:pass@localhost:3306/mydb"
```

If no connection URL is provided, MySQL checks these individual parameters:

| Environment Variable     | Default Value | Description                      |
| ------------------------ | ------------- | -------------------------------- |
| `MYSQL_HOST`             | `localhost`   | Database host                    |
| `MYSQL_PORT`             | `3306`        | Database port                    |
| `MYSQL_USER`             | `root`        | Database user                    |
| `MYSQL_PASSWORD`         | (empty)       | Database password                |
| `MYSQL_DATABASE`         | `mysql`       | Database name                    |
| `MYSQL_URL`              | (empty)       | Primary connection URL for MySQL |
| `TLS_MYSQL_DATABASE_URL` | (empty)       | SSL/TLS-enabled connection URL   |

### PostgreSQL Environment Variables

The following environment variables can be used to define the PostgreSQL connection:

| Environment Variable        | Description                                |
| --------------------------- | ------------------------------------------ |
| `POSTGRES_URL`              | Primary connection URL for PostgreSQL      |
| `DATABASE_URL`              | Alternative connection URL (auto-detected) |
| `PGURL`                     | Alternative connection URL                 |
| `PG_URL`                    | Alternative connection URL                 |
| `TLS_POSTGRES_DATABASE_URL` | SSL/TLS-enabled connection URL             |
| `TLS_DATABASE_URL`          | Alternative SSL/TLS-enabled connection URL |

If no connection URL is provided, the system checks for the following individual parameters:

| Environment Variable | Fallback Variables           | Default Value | Description       |
| -------------------- | ---------------------------- | ------------- | ----------------- |
| `PGHOST`             | -                            | `localhost`   | Database host     |
| `PGPORT`             | -                            | `5432`        | Database port     |
| `PGUSERNAME`         | `PGUSER`, `USER`, `USERNAME` | `postgres`    | Database user     |
| `PGPASSWORD`         | -                            | (empty)       | Database password |
| `PGDATABASE`         | -                            | username      | Database name     |

### SQLite Environment Variables

SQLite connections can be configured via `DATABASE_URL` when it contains a SQLite-compatible URL:

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
# These are all recognized as SQLite
DATABASE_URL=":memory:"
DATABASE_URL="sqlite://./app.db"
DATABASE_URL="file:///absolute/path/to/db.sqlite"
```

**Note:** PostgreSQL-specific environment variables (`POSTGRES_URL`, `PGHOST`, etc.) are ignored when using SQLite.

***

## Runtime Preconnection

Bun can preconnect to PostgreSQL at startup to improve performance by establishing database connections before your application code runs. This is useful for reducing connection latency on the first database query.

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
# Enable PostgreSQL preconnection
bun --sql-preconnect index.js

# Works with DATABASE_URL environment variable
DATABASE_URL=postgres://user:pass@localhost:5432/db bun --sql-preconnect index.js

# Can be combined with other runtime flags
bun --sql-preconnect --hot index.js
```

The `--sql-preconnect` flag will automatically establish a PostgreSQL connection using your configured environment variables at startup. If the connection fails, it won't crash your application - the error will be handled gracefully.

***
