## Authentication

Bun supports SCRAM-SHA-256 (SASL), MD5, and Clear Text authentication. SASL is recommended for better security. Check [Postgres SASL Authentication](https://www.postgresql.org/docs/current/sasl-authentication.html) for more information.

### SSL Modes Overview

PostgreSQL supports different SSL/TLS modes to control how secure connections are established. These modes determine the behavior when connecting and the level of certificate verification performed.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = new SQL({
  hostname: "localhost",
  username: "user",
  password: "password",
  ssl: "disable", // | "prefer" | "require" | "verify-ca" | "verify-full"
});
```

| SSL Mode      | Description                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `disable`     | No SSL/TLS used. Connections fail if server requires SSL.                                                            |
| `prefer`      | Tries SSL first, falls back to non-SSL if SSL fails. Default mode if none specified.                                 |
| `require`     | Requires SSL without certificate verification. Fails if SSL cannot be established.                                   |
| `verify-ca`   | Verifies server certificate is signed by trusted CA. Fails if verification fails.                                    |
| `verify-full` | Most secure mode. Verifies certificate and hostname match. Protects against untrusted certificates and MITM attacks. |

### Using With Connection Strings

The SSL mode can also be specified in connection strings:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Using prefer mode
const sql = new SQL("postgres://user:password@localhost/mydb?sslmode=prefer");

// Using verify-full mode
const sql = new SQL("postgres://user:password@localhost/mydb?sslmode=verify-full");
```

***

## Connection Pooling

Bun's SQL client automatically manages a connection pool, which is a pool of database connections that are reused for multiple queries. This helps to reduce the overhead of establishing and closing connections for each query, and it also helps to manage the number of concurrent connections to the database.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = new SQL({
  // Pool configuration
  max: 20, // Maximum 20 concurrent connections
  idleTimeout: 30, // Close idle connections after 30s
  maxLifetime: 3600, // Max connection lifetime 1 hour
  connectionTimeout: 10, // Connection timeout 10s
});
```

No connection will be made until a query is made.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = Bun.SQL(); // no connection are created

await sql`...`; // pool is started until max is reached (if possible), first available connection is used
await sql`...`; // previous connection is reused

// two connections are used now at the same time
await Promise.all([
  sql`INSERT INTO users ${sql({ name: "Alice" })}`,
  sql`UPDATE users SET name = ${user.name} WHERE id = ${user.id}`,
]);

await sql.close(); // await all queries to finish and close all connections from the pool
await sql.close({ timeout: 5 }); // wait 5 seconds and close all connections from the pool
await sql.close({ timeout: 0 }); // close all connections from the pool immediately
```

***

## Reserved Connections

Bun enables you to reserve a connection from the pool, and returns a client that wraps the single connection. This can be used for running queries on an isolated connection.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Get exclusive connection from pool
const reserved = await sql.reserve();

try {
  await reserved`INSERT INTO users (name) VALUES (${"Alice"})`;
} finally {
  // Important: Release connection back to pool
  reserved.release();
}

// Or using Symbol.dispose
{
  using reserved = await sql.reserve();
  await reserved`SELECT 1`;
} // Automatically released
```

***

## Prepared Statements

By default, Bun's SQL client automatically creates named prepared statements for queries where it can be inferred that the query is static. This provides better performance. However, you can change this behavior by setting `prepare: false` in the connection options:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const sql = new SQL({
  // ... other options ...
  prepare: false, // Disable persisting named prepared statements on the server
});
```

When `prepare: false` is set:

Queries are still executed using the "extended" protocol, but they are executed using [unnamed prepared statements](https://www.postgresql.org/docs/current/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY), an unnamed prepared statement lasts only until the next Parse statement specifying the unnamed statement as destination is issued.

- Parameter binding is still safe against SQL injection
- Each query is parsed and planned from scratch by the server
- Queries will not be [pipelined](https://www.postgresql.org/docs/current/protocol-flow.html#PROTOCOL-FLOW-PIPELINING)

You might want to use `prepare: false` when:

- Using PGBouncer in transaction mode (though since PGBouncer 1.21.0, protocol-level named prepared statements are supported when configured properly)
- Debugging query execution plans
- Working with dynamic SQL where query plans need to be regenerated frequently
- More than one command per query will not be supported (unless you use `sql``.simple()`)

Note that disabling prepared statements may impact performance for queries that are executed frequently with different parameters, as the server needs to parse and plan each query from scratch.

***
