## SQL Fragments

A common need in database applications is the ability to construct queries dynamically based on runtime conditions. Bun provides safe ways to do this without risking SQL injection.

### Dynamic Table Names

When you need to reference tables or schemas dynamically, use the `sql()` helper to ensure proper escaping:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Safely reference tables dynamically
await sql`SELECT * FROM ${sql("users")}`;

// With schema qualification
await sql`SELECT * FROM ${sql("public.users")}`;
```

### Conditional Queries

You can use the `sql()` helper to build queries with conditional clauses. This allows you to create flexible queries that adapt to your application's needs:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Optional WHERE clauses
const filterAge = true;
const minAge = 21;
const ageFilter = sql`AND age > ${minAge}`;
await sql`
  SELECT * FROM users
  WHERE active = ${true}
  ${filterAge ? ageFilter : sql``}
`;
```

### Dynamic columns in updates

You can use `sql(object, ...string)` to pick which columns to update. Each of the columns must be defined on the object. If the columns are not informed all keys will be used to update the row.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
await sql`UPDATE users SET ${sql(user, "name", "email")} WHERE id = ${user.id}`;
// uses all keys from the object to update the row
await sql`UPDATE users SET ${sql(user)} WHERE id = ${user.id}`;
```

### Dynamic values and `where in`

Value lists can also be created dynamically, making where in queries simple too. Optionally you can pass a array of objects and inform what key to use to create the list.

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
await sql`SELECT * FROM users WHERE id IN ${sql([1, 2, 3])}`;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
await sql`SELECT * FROM users WHERE id IN ${sql(users, "id")}`;
```

### `sql.array` helper

The `sql.array` helper creates PostgreSQL array literals from JavaScript arrays:

```ts theme={"theme":{"light":"github-light","dark":"dracula"}}
// Create array literals for PostgreSQL
await sql`INSERT INTO tags (items) VALUES (${sql.array(["red", "blue", "green"])})`;
// Generates: INSERT INTO tags (items) VALUES (ARRAY['red', 'blue', 'green'])

// Works with numeric arrays too
await sql`SELECT * FROM products WHERE ids = ANY(${sql.array([1, 2, 3])})`;
// Generates: SELECT * FROM products WHERE ids = ANY(ARRAY[1, 2, 3])
```

`sql.array` is PostgreSQL-only. Multi-dimensional arrays and NULL elements may not be supported yet.

***
