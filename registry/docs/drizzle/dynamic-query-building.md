# Dynamic query building

By default, as all the query builders in Drizzle try to conform to SQL as much as possible, you can only invoke most of the methods once.
For example, in a `SELECT` statement there might only be one `WHERE` clause, so you can only invoke `.where()` once:

```ts
const query = db
	.select()
	.from(users)
	.where(eq(users.id, 1))
	.where(eq(users.name, 'John')); // ❌ Type error - where() can only be invoked once
```

In the previous ORM versions, when such restrictions weren't implemented, this example in particular was a source of confusion for many users, as they expected the query builder to "merge" multiple `.where()` calls into a single condition.

This behavior is useful for conventional query building, i.e. when you create the whole query at once.
However, it becomes a problem when you want to build a query dynamically, i.e. if you have a shared function that takes a query builder and enhances it.
To solve this problem, Drizzle provides a special 'dynamic' mode for query builders, which removes the restriction of invoking methods only once.
To enable it, you need to call `.$dynamic()` on a query builder.

Let's see how it works by implementing a simple `withPagination` function that adds `LIMIT` and `OFFSET` clauses to a query based on the provided page number and an optional page size:

```ts
function withPagination(
	qb: T,
	page: number = 1,
	pageSize: number = 10,
) {
	return qb.limit(pageSize).offset((page - 1) * pageSize);
}

const query = db.select().from(users).where(eq(users.id, 1));
withPagination(query, 1); // ❌ Type error - the query builder is not in dynamic mode

const dynamicQuery = query.$dynamic();
withPagination(dynamicQuery, 1); // ✅ OK
```

Note that the `withPagination` function is generic, which allows you to modify the result type of the query builder inside it, for example by adding a join:

```ts
function withFriends(qb: T) {
	return qb.leftJoin(friends, eq(friends.userId, users.id));
}

let query = db.select().from(users).where(eq(users.id, 1)).$dynamic();
query = withFriends(query);
```

This is possible, because `PgSelect` and other similar types are specifically designed to be used in dynamic query building. They can only be used in dynamic mode.

Here is the list of all types that can be used as generic parameters in dynamic query building:

{

<table>
	<thead align='center'>
		<tr>
			<td>
				<b>Dialect</b>
			</td>
			<td colspan='4'>
				<b>Type</b>
			</td>
		</tr>
		<tr>
			<td>
				<b>Query</b>
			</td>
			<td>
				<b>Select</b>
			</td>
			<td>
				<b>Insert</b>
			</td>
			<td>
				<b>Update</b>
			</td>
			<td>
				<b>Delete</b>
			</td>
		</tr>
	</thead>
	<tbody>
		<tr align='center'>
			<td rowspan='2'>Postgres</td>
			<td>
				<code>PgSelect</code>
			</td>
			<td rowspan='2'>
				<code>PgInsert</code>
			</td>
			<td rowspan='2'>
				<code>PgUpdate</code>
			</td>
			<td rowspan='2'>
				<code>PgDelete</code>
			</td>
		</tr>
		<tr align='center'>
			<td>
				<code>PgSelectQueryBuilder</code>
			</td>
		</tr>
		<tr align='center'>
			<td rowspan='2'>MySQL</td>
			<td>
				<code>MySqlSelect</code>
			</td>
			<td rowspan='2'>
				<code>MySqlInsert</code>
			</td>
			<td rowspan='2'>
				<code>MySqlUpdate</code>
			</td>
			<td rowspan='2'>
				<code>MySqlDelete</code>
			</td>
		</tr>
		<tr align='center'>
			<td>
				<code>MySqlSelectQueryBuilder</code>
			</td>
		</tr>
		<tr align='center'>
			<td rowspan='2'>SQLite</td>
			<td>
				<code>SQLiteSelect</code>
			</td>
			<td rowspan='2'>
				<code>SQLiteInsert</code>
			</td>
			<td rowspan='2'>
				<code>SQLiteUpdate</code>
			</td>
			<td rowspan='2'>
				<code>SQLiteDelete</code>
			</td>
		</tr>
		<tr align='center'>
			<td>
				<code>SQLiteSelectQueryBuilder</code>
			</td>
		</tr>
	</tbody>
</table>

}

<Callout type='info'>
	The `...QueryBuilder` types are for usage with [standalone query builder
	instances](/docs/goodies#standalone-query-builder). DB query builders are
	subclasses of them, so you can use them as well.

````
```ts
	import { QueryBuilder } from 'drizzle-orm/pg-core';

	function withFriends<T extends PgSelectQueryBuilder>(qb: T) {
		return qb.leftJoin(friends, eq(friends.userId, users.id));
	}

	const qb = new QueryBuilder();
	let query = qb.select().from(users).where(eq(users.id, 1)).$dynamic();
	query = withFriends(query);
```
````

</Callout>

Source: https://orm.drizzle.team/docs/effect-schema

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';

<Callout type="error">
Drizzle+Effect Schema integration is available starting from `drizzle-orm@1.0.0-beta.15`
</Callout>

# effect-schema

Allows you to generate [effect](https://effect.website/) schemas from Drizzle ORM schemas.

**Features**

- Create a select schema for tables, views and enums.
- Create insert and update schemas for tables.
- Supported dialects: CockroachDB, MSSQL, MySQL, PostgreSQL, SingleStore, SQLite.

#### Usage

```ts
import { pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema, createUpdateSchema } from 'drizzle-orm/effect-schema';
import { Schema } from 'effect';

const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	role: text('role', { enum: ['admin', 'user'] }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Schema for inserting a user - can be used to validate API requests
const UserInsert = createInsertSchema(users);

// Schema for updating a user - can be used to validate API requests
const UserUpdate = createUpdateSchema(users);

// Schema for selecting a user - can be used to validate API responses
const UserSelect = createSelectSchema(users);

// Overriding the fields
const UserInsert = createInsertSchema(users, {
	role: Schema.String,
});

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
const UserInsert = createInsertSchema(users, {
	id: (schema) => schema.pipe(Schema.greaterThanOrEqualTo(0)),
	role: Schema.String,
});

// Usage

const program = Effect.gen(function*() {
	const parsedUser = yield* Schema.validate(UserInsert)({
		name: 'John Doe',
		email: 'johndoe@test.com',
		role: 'admin',
	});
});
```

Source: https://orm.drizzle.team/docs/eslint-plugin

import Tabs from '@mdx/Tabs.astro';
import Tab from '@mdx/Tab.astro';
import Npm from '@mdx/Npm.astro';
