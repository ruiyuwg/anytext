### MySQL

To set current timestamp as a default value in MySQL, you can use the `defaultNow()` method or `sql` operator with `now()` function which returns the current date and time `(YYYY-MM-DD HH-MM-SS)`:

<Section>
```ts copy {6,9,12}
import { sql } from 'drizzle-orm';
import { mysqlTable, serial, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
id: serial('id').primaryKey(),
timestamp1: timestamp('timestamp1').notNull().defaultNow(),
timestamp2: timestamp('timestamp2', { mode: 'string' })
.notNull()
.default(sql`now()`),
timestamp3: timestamp('timestamp3', { fsp: 3 }) // fractional seconds part
.notNull()
.default(sql`now(3)`),
});

````

```sql
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`timestamp1` timestamp NOT NULL DEFAULT now(),
	`timestamp2` timestamp NOT NULL DEFAULT now(),
	`timestamp3` timestamp(3) NOT NULL DEFAULT now(3),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
````

</Section>

`fsp` option defines the number of fractional seconds to include in the timestamp. The default value is `0`.
The `mode` option defines how values are handled in the application. Values with `string` mode are treated as `string` in the application, but stored as timestamps in the database.

<Section>
```plaintext
// Data stored in the database
+----+---------------------+---------------------+-------------------------+
| id | timestamp1          | timestamp2          | timestamp3              |
+----+---------------------+---------------------+-------------------------+
|  1 | 2024-04-11 15:24:53 | 2024-04-11 15:24:53 | 2024-04-11 15:24:53.236 |
+----+---------------------+---------------------+-------------------------+
```

```ts
// Data returned by the application
[
  {
    id: 1,
    timestamp1: 2024-04-11T15:24:53.000Z, // Date object
    timestamp2: '2024-04-11 15:24:53', // string
    timestamp3: 2024-04-11T15:24:53.236Z // Date object
  }
]
```

</Section>

To set unix timestamp as a default value in MySQL, you can use the `sql` operator and `unix_timestamp()` function which returns the number of seconds since `1970-01-01 00:00:00 UTC`:

<Section>
```ts copy {8}
import { sql } from 'drizzle-orm';
import { mysqlTable, serial, int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
id: serial('id').primaryKey(),
timestamp: int('timestamp')
.notNull()
.default(sql`(unix_timestamp())`),
});

````

```sql
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`timestamp` int NOT NULL DEFAULT (unix_timestamp()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
````

```plaintext
// Data stored in the database
+----+------------+
| id | timestamp  |
+----+------------+
|  1 | 1712847986 |
+----+------------+
```

```ts
// Data returned by the application
[
  {
    id: 1,
    timestamp: 1712847986, // number
  },
];
```

</Section>
