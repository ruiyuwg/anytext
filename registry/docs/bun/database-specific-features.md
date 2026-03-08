## Database-Specific Features

#### Authentication Methods

MySQL supports multiple authentication plugins that are automatically negotiated:

- **`mysql_native_password`** - Traditional MySQL authentication, widely compatible
- **`caching_sha2_password`** - Default in MySQL 8.0+, more secure with RSA key exchange
- **`sha256_password`** - SHA-256 based authentication

The client automatically handles authentication plugin switching when requested by the server, including secure password exchange over non-SSL connections.

#### Prepared Statements & Performance

MySQL uses server-side prepared statements for all parameterized queries:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// This automatically creates a prepared statement on the server
const user = await mysql`SELECT * FROM users WHERE id = ${userId}`;

// Prepared statements are cached and reused for identical queries
for (const id of userIds) {
  // Same prepared statement is reused
  await mysql`SELECT * FROM users WHERE id = ${id}`;
}

// Query pipelining - multiple statements sent without waiting
const [users, orders, products] = await Promise.all([
  mysql`SELECT * FROM users WHERE active = ${true}`,
  mysql`SELECT * FROM orders WHERE status = ${"pending"}`,
  mysql`SELECT * FROM products WHERE in_stock = ${true}`,
]);
```

#### Multiple Result Sets

MySQL can return multiple result sets from multi-statement queries:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const mysql = new SQL("mysql://user:pass@localhost/mydb");

// Multi-statement queries with simple() method
const multiResults = await mysql`
  SELECT * FROM users WHERE id = 1;
  SELECT * FROM orders WHERE user_id = 1;
`.simple();
```

#### Character Sets & Collations

Bun.SQL automatically uses `utf8mb4` character set for MySQL connections, ensuring full Unicode support including emojis. This is the recommended character set for modern MySQL applications.

#### Connection Attributes

Bun automatically sends client information to MySQL for better monitoring:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// These attributes are sent automatically:
// _client_name: "Bun"
// _client_version: <bun version>
// You can see these in MySQL's performance_schema.session_connect_attrs
```

#### Type Handling

MySQL types are automatically converted to JavaScript types:

| MySQL Type                              | JavaScript Type          | Notes                                                                                                |
| --------------------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| INT, TINYINT, MEDIUMINT                 | number                   | Within safe integer range                                                                            |
| BIGINT                                  | string, number or BigInt | If the value fits in i32/u32 size will be number otherwise string or BigInt Based on `bigint` option |
| DECIMAL, NUMERIC                        | string                   | To preserve precision                                                                                |
| FLOAT, DOUBLE                           | number                   |                                                                                                      |
| DATE                                    | Date                     | JavaScript Date object                                                                               |
| DATETIME, TIMESTAMP                     | Date                     | With timezone handling                                                                               |
| TIME                                    | number                   | Total of microseconds                                                                                |
| YEAR                                    | number                   |                                                                                                      |
| CHAR, VARCHAR, VARSTRING, STRING        | string                   |                                                                                                      |
| TINY TEXT, MEDIUM TEXT, TEXT, LONG TEXT | string                   |                                                                                                      |
| TINY BLOB, MEDIUM BLOB, BLOG, LONG BLOB | string                   | BLOB Types are alias for TEXT types                                                                  |
| JSON                                    | object/array             | Automatically parsed                                                                                 |
| BIT(1)                                  | boolean                  | BIT(1) in MySQL                                                                                      |
| GEOMETRY                                | string                   | Geometry data                                                                                        |

#### Differences from PostgreSQL

While the API is unified, there are some behavioral differences:

1. **Parameter placeholders**: MySQL uses `?` internally but Bun converts `$1, $2` style automatically
2. **RETURNING clause**: MySQL doesn't support RETURNING; use `result.lastInsertRowid` or a separate SELECT
3. **Array types**: MySQL doesn't have native array types like PostgreSQL

### MySQL-Specific Features

We haven't implemented `LOAD DATA INFILE` support yet

### PostgreSQL-Specific Features

We haven't implemented these yet:

- `COPY` support
- `LISTEN` support
- `NOTIFY` support

We also haven't implemented some of the more uncommon features like:

- GSSAPI authentication
- `SCRAM-SHA-256-PLUS` support
- Point & PostGIS types
- All the multi-dimensional integer array types (only a couple of the types are supported)

***

## Common Patterns & Best Practices

### Working with MySQL Result Sets

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Getting insert ID after INSERT
const result = await mysql`INSERT INTO users (name) VALUES (${"Alice"})`;
console.log(result.lastInsertRowid); // MySQL's LAST_INSERT_ID()

// Handling affected rows
const updated = await mysql`UPDATE users SET active = ${false} WHERE age < ${18}`;
console.log(updated.affectedRows); // Number of rows updated

// Using MySQL-specific functions
const now = await mysql`SELECT NOW() as current_time`;
const uuid = await mysql`SELECT UUID() as id`;
```

### MySQL Error Handling

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
try {
  await mysql`INSERT INTO users (email) VALUES (${"duplicate@email.com"})`;
} catch (error) {
  if (error.code === "ER_DUP_ENTRY") {
    console.log("Duplicate entry detected");
  } else if (error.code === "ER_ACCESS_DENIED_ERROR") {
    console.log("Access denied");
  } else if (error.code === "ER_BAD_DB_ERROR") {
    console.log("Database does not exist");
  }
  // MySQL error codes are compatible with mysql/mysql2 packages
}
```

### Performance Tips for MySQL

1. **Use connection pooling**: Set appropriate `max` pool size based on your workload
2. **Enable prepared statements**: They're enabled by default and improve performance
3. **Use transactions for bulk operations**: Group related queries in transactions
4. **Index properly**: MySQL relies heavily on indexes for query performance
5. **Use `utf8mb4` charset**: It's set by default and handles all Unicode characters

***

## Frequently Asked Questions

````
The plan was to add more database drivers in the future. Now with MySQL support added, this unified API supports PostgreSQL, MySQL, and SQLite.



The adapter is automatically detected from the connection string:

* URLs starting with `mysql://` or `mysql2://` use MySQL
* URLs matching SQLite patterns (`:memory:`, `sqlite://`, `file://`) use SQLite
* Everything else defaults to PostgreSQL



Yes, stored procedures are fully supported including OUT parameters and multiple result sets:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Call stored procedure
const results = await mysql`CALL GetUserStats(${userId}, @total_orders)`;

// Get OUT parameter
const outParam = await mysql`SELECT @total_orders as total`;
```



Yes, you can use any MySQL-specific syntax:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// MySQL-specific syntax works fine
await mysql`SET @user_id = ${userId}`;
await mysql`SHOW TABLES`;
await mysql`DESCRIBE users`;
await mysql`EXPLAIN SELECT * FROM users WHERE id = ${id}`;
```
````

***

## Why not just use an existing library?

npm packages like postgres.js, pg, and node-postgres can be used in Bun too. They're great options.

Two reasons why:

1. We think it's simpler for developers to have a database driver built into Bun. The time you spend library shopping is time you could be building your app.
2. We leverage some JavaScriptCore engine internals to make it faster to create objects that would be difficult to implement in a library

## Credits

Huge thanks to [@porsager](https://github.com/porsager)'s [postgres.js](https://github.com/porsager/postgres) for the inspiration for the API interface.
