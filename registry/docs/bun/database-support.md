## Database Support

`Bun.SQL` provides a unified API for multiple database systems:

### PostgreSQL

PostgreSQL is used when:

- The connection string doesn't match SQLite or MySQL patterns (it's the fallback adapter)
- The connection string explicitly uses `postgres://` or `postgresql://` protocols
- No connection string is provided and environment variables point to PostgreSQL

```ts title="db.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { sql } from "bun";
// Uses PostgreSQL if DATABASE_URL is not set or is a PostgreSQL URL
await sql`SELECT ...`;

import { SQL } from "bun";
const pg = new SQL("postgres://user:pass@localhost:5432/mydb");
await pg`SELECT ...`;
```

### MySQL

MySQL support is built into Bun.SQL, providing the same tagged template literal interface with full compatibility for MySQL 5.7+ and MySQL 8.0+:

```ts title="db.ts" icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

// MySQL connection
const mysql = new SQL("mysql://user:password@localhost:3306/database");
const mysql2 = new SQL("mysql2://user:password@localhost:3306/database"); // mysql2 protocol also works

// Using options object
const mysql3 = new SQL({
  adapter: "mysql",
  hostname: "localhost",
  port: 3306,
  database: "myapp",
  username: "dbuser",
  password: "secretpass",
});

// Works with parameters - automatically uses prepared statements
const users = await mysql`SELECT * FROM users WHERE id = ${userId}`;

// Transactions work the same as PostgreSQL
await mysql.begin(async tx => {
  await tx`INSERT INTO users (name) VALUES (${"Alice"})`;
  await tx`UPDATE accounts SET balance = balance - 100 WHERE user_id = ${userId}`;
});

// Bulk inserts
const newUsers = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
];
await mysql`INSERT INTO users ${mysql(newUsers)}`;
```

MySQL accepts various URL formats for connection strings:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Standard mysql:// protocol
new SQL("mysql://user:pass@localhost:3306/database");
new SQL("mysql://user:pass@localhost/database"); // Default port 3306

// mysql2:// protocol (compatibility with mysql2 npm package)
new SQL("mysql2://user:pass@localhost:3306/database");

// With query parameters
new SQL("mysql://user:pass@localhost/db?ssl=true");

// Unix socket connection
new SQL("mysql://user:pass@/database?socket=/var/run/mysqld/mysqld.sock");
```

MySQL databases support:

- **Prepared statements**: Automatically created for parameterized queries with statement caching
- **Binary protocol**: For better performance with prepared statements and accurate type handling
- **Multiple result sets**: Support for stored procedures returning multiple result sets
- **Authentication plugins**: Support for mysql\_native\_password, caching\_sha2\_password (MySQL 8.0 default), and sha256\_password
- **SSL/TLS connections**: Configurable SSL modes similar to PostgreSQL
- **Connection attributes**: Client information sent to server for monitoring
- **Query pipelining**: Execute multiple prepared statements without waiting for responses

### SQLite

SQLite support is built into Bun.SQL, providing the same tagged template literal interface:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

// In-memory database
const memory = new SQL(":memory:");
const memory2 = new SQL("sqlite://:memory:");

// File-based database
const sql1 = new SQL("sqlite://myapp.db");

// Using options object
const sql2 = new SQL({
  adapter: "sqlite",
  filename: "./data/app.db",
});

// For simple filenames, specify adapter explicitly
const sql3 = new SQL("myapp.db", { adapter: "sqlite" });
```

SQLite accepts various URL formats for connection strings:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Standard sqlite:// protocol
new SQL("sqlite://path/to/database.db");
new SQL("sqlite:path/to/database.db"); // Without slashes

// file:// protocol (also recognized as SQLite)
new SQL("file://path/to/database.db");
new SQL("file:path/to/database.db");

// Special :memory: database
new SQL(":memory:");
new SQL("sqlite://:memory:");
new SQL("file://:memory:");

// Relative and absolute paths
new SQL("sqlite://./local.db"); // Relative to current directory
new SQL("sqlite://../parent/db.db"); // Parent directory
new SQL("sqlite:///absolute/path.db"); // Absolute path

// With query parameters
new SQL("sqlite://data.db?mode=ro"); // Read-only mode
new SQL("sqlite://data.db?mode=rw"); // Read-write mode (no create)
new SQL("sqlite://data.db?mode=rwc"); // Read-write-create mode (default)
```

```
Simple filenames without a protocol (like `"myapp.db"`) require explicitly specifying `{ adapter: "sqlite" }` to avoid ambiguity with PostgreSQL.
```

SQLite databases support additional configuration options:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = new SQL({
  adapter: "sqlite",
  filename: "app.db",

  // SQLite-specific options
  readonly: false, // Open in read-only mode
  create: true, // Create database if it doesn't exist
  readwrite: true, // Open for reading and writing

  // Additional Bun:sqlite options
  strict: true, // Enable strict mode
  safeIntegers: false, // Use JavaScript numbers for integers
});
```

Query parameters in the URL are parsed to set these options:

- `?mode=ro` → `readonly: true`
- `?mode=rw` → `readonly: false, create: false`
- `?mode=rwc` → `readonly: false, create: true` (default)

## Inserting data

You can pass JavaScript values directly to the SQL template literal and escaping will be handled for you.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { sql } from "bun";

// Basic insert with direct values
const [user] = await sql`
  INSERT INTO users (name, email) 
  VALUES (${name}, ${email})
  RETURNING *
`;

// Using object helper for cleaner syntax
const userData = {
  name: "Alice",
  email: "alice@example.com",
};

const [newUser] = await sql`
  INSERT INTO users ${sql(userData)}
  RETURNING *
`;
// Expands to: INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')
```

### Bulk Insert

You can also pass arrays of objects to the SQL template literal and it will be expanded to a `INSERT INTO ... VALUES ...` statement.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const users = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
];

await sql`INSERT INTO users ${sql(users)}`;
```

### Picking columns to insert

You can use `sql(object, ...string)` to pick which columns to insert. Each of the columns must be defined on the object.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const user = {
  name: "Alice",
  email: "alice@example.com",
  age: 25,
};

await sql`INSERT INTO users ${sql(user, "name", "email")}`;
// Only inserts name and email columns, ignoring other fields
```

***

## Query Results

By default, Bun's SQL client returns query results as arrays of objects, where each object represents a row with column names as keys. However, there are cases where you might want the data in a different format. The client provides two additional methods for this purpose.

### `sql``.values()` format

The `sql``.values()` method returns rows as arrays of values rather than objects. Each row becomes an array where the values are in the same order as the columns in your query.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const rows = await sql`SELECT * FROM users`.values();
console.log(rows);
```

This returns something like:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
[
  ["Alice", "alice@example.com"],
  ["Bob", "bob@example.com"],
];
```

`sql``.values()` is especially useful if duplicate column names are returned in the query results. When using objects (the default), the last column name is used as the key in the object, which means duplicate column names overwrite each other — but when using `sql``.values()`, each column is present in the array so you can access the values of duplicate columns by index.

### `sql``.raw()` format

The `.raw()` method returns rows as arrays of `Buffer` objects. This can be useful for working with binary data or for performance reasons.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const rows = await sql`SELECT * FROM users`.raw();
console.log(rows); // [[Buffer, Buffer], [Buffer, Buffer], [Buffer, Buffer]]
```

***
