## Connection Options

You can configure your database connection manually by passing options to the SQL constructor. Options vary depending on the database adapter:

### MySQL Options

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

const sql = new SQL({
  // Required for MySQL when using options object
  adapter: "mysql",

  // Connection details
  hostname: "localhost",
  port: 3306,
  database: "myapp",
  username: "dbuser",
  password: "secretpass",

  // Unix socket connection (alternative to hostname/port)
  // socket: "/var/run/mysqld/mysqld.sock",

  // Connection pool settings
  max: 20, // Maximum connections in pool (default: 10)
  idleTimeout: 30, // Close idle connections after 30s
  maxLifetime: 0, // Connection lifetime in seconds (0 = forever)
  connectionTimeout: 30, // Timeout when establishing new connections

  // SSL/TLS options
  ssl: "prefer", // or "disable", "require", "verify-ca", "verify-full"
  // tls: {
  //   rejectUnauthorized: true,
  //   ca: "path/to/ca.pem",
  //   key: "path/to/key.pem",
  //   cert: "path/to/cert.pem",
  // },

  // Callbacks
  onconnect: client => {
    console.log("Connected to MySQL");
  },
  onclose: (client, err) => {
    if (err) {
      console.error("MySQL connection error:", err);
    } else {
      console.log("MySQL connection closed");
    }
  },
});
```

### PostgreSQL Options

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

const sql = new SQL({
  // Connection details (adapter is auto-detected as PostgreSQL)
  url: "postgres://user:pass@localhost:5432/dbname",

  // Alternative connection parameters
  hostname: "localhost",
  port: 5432,
  database: "myapp",
  username: "dbuser",
  password: "secretpass",

  // Connection pool settings
  max: 20, // Maximum connections in pool
  idleTimeout: 30, // Close idle connections after 30s
  maxLifetime: 0, // Connection lifetime in seconds (0 = forever)
  connectionTimeout: 30, // Timeout when establishing new connections

  // SSL/TLS options
  tls: true,
  // tls: {
  //   rejectUnauthorized: true,
  //   requestCert: true,
  //   ca: "path/to/ca.pem",
  //   key: "path/to/key.pem",
  //   cert: "path/to/cert.pem",
  //   checkServerIdentity(hostname, cert) {
  //     ...
  //   },
  // },

  // Callbacks
  onconnect: client => {
    console.log("Connected to PostgreSQL");
  },
  onclose: client => {
    console.log("PostgreSQL connection closed");
  },
});
```

### SQLite Options

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

const sql = new SQL({
  // Required for SQLite
  adapter: "sqlite",
  filename: "./data/app.db", // or ":memory:" for in-memory database

  // SQLite-specific access modes
  readonly: false, // Open in read-only mode
  create: true, // Create database if it doesn't exist
  readwrite: true, // Allow read and write operations

  // SQLite data handling
  strict: true, // Enable strict mode for better type safety
  safeIntegers: false, // Use BigInt for integers exceeding JS number range

  // Callbacks
  onconnect: client => {
    console.log("SQLite database opened");
  },
  onclose: client => {
    console.log("SQLite database closed");
  },
});
```

- **Connection Pooling**: SQLite doesn't use connection pooling as it's a file-based database. Each `SQL` instance represents a single connection.
- **Transactions**: SQLite supports nested transactions through savepoints, similar to PostgreSQL.
- **Concurrent Access**: SQLite handles concurrent access through file locking. Use WAL mode for better concurrency.
- **Memory Databases**: Using `:memory:` creates a temporary database that exists only for the connection lifetime.

***

## Dynamic passwords

When clients need to use alternative authentication schemes such as access tokens or connections to databases with rotating passwords, provide either a synchronous or asynchronous function that will resolve the dynamic password value at connection time.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
import { SQL } from "bun";

const sql = new SQL(url, {
  // Other connection config
  ...
  // Password function for the database user
  password: async () => await signer.getAuthToken(),
});
```

***

## SQLite-Specific Features

### Query Execution

SQLite executes queries synchronously, unlike PostgreSQL which uses asynchronous I/O. However, the API remains consistent using Promises:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sqlite = new SQL("sqlite://app.db");

// Works the same as PostgreSQL, but executes synchronously under the hood
const users = await sqlite`SELECT * FROM users`;

// Parameters work identically
const user = await sqlite`SELECT * FROM users WHERE id = ${userId}`;
```

### SQLite Pragmas

You can use PRAGMA statements to configure SQLite behavior:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sqlite = new SQL("sqlite://app.db");

// Enable foreign keys
await sqlite`PRAGMA foreign_keys = ON`;

// Set journal mode to WAL for better concurrency
await sqlite`PRAGMA journal_mode = WAL`;

// Check integrity
const integrity = await sqlite`PRAGMA integrity_check`;
```

### Data Type Differences

SQLite has a more flexible type system than PostgreSQL:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// SQLite stores data in 5 storage classes: NULL, INTEGER, REAL, TEXT, BLOB
const sqlite = new SQL("sqlite://app.db");

// SQLite is more lenient with types
await sqlite`
  CREATE TABLE flexible (
    id INTEGER PRIMARY KEY,
    data TEXT,        -- Can store numbers as strings
    value NUMERIC,    -- Can store integers, reals, or text
    blob BLOB         -- Binary data
  )
`;

// JavaScript values are automatically converted
await sqlite`INSERT INTO flexible VALUES (${1}, ${"text"}, ${123.45}, ${Buffer.from("binary")})`;
```

***
