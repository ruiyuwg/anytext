## `sql``.simple()`

The PostgreSQL wire protocol supports two types of queries: "simple" and "extended". Simple queries can contain multiple statements but don't support parameters, while extended queries (the default) support parameters but only allow one statement.

To run multiple statements in a single query, use `sql``.simple()`:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Multiple statements in one query
await sql`
  SELECT 1;
  SELECT 2;
`.simple();
```

Simple queries are often useful for database migrations and setup scripts.

Note that simple queries cannot use parameters (`${value}`). If you need parameters, you must split your query into separate statements.

### Queries in files

You can use the `sql.file` method to read a query from a file and execute it, if the file includes $1, $2, etc you can pass parameters to the query. If no parameters are used it can execute multiple commands per file.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const result = await sql.file("query.sql", [1, 2, 3]);
```

### Unsafe Queries

You can use the `sql.unsafe` function to execute raw SQL strings. Use this with caution, as it will not escape user input. Executing more than one command per query is allowed if no parameters are used.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Multiple commands without parameters
const result = await sql.unsafe(`
  SELECT ${userColumns} FROM users;
  SELECT ${accountColumns} FROM accounts;
`);

// Using parameters (only one command is allowed)
const result = await sql.unsafe("SELECT " + dangerous + " FROM users WHERE id = $1", [id]);
```

### Execute and Cancelling Queries

Bun's SQL is lazy, which means it will only start executing when awaited or executed with `.execute()`.
You can cancel a query that is currently executing by calling the `cancel()` method on the query object.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
const query = sql`SELECT * FROM users`.execute();
setTimeout(() => query.cancel(), 100);
await query;
```

***
