# Query performance

When it comes to **Drizzle** — we're a thin TypeScript layer on top of SQL with
almost 0 overhead and to make it actual 0, you can utilise our prepared statements API.

**When you run a query on the database, there are several things that happen:**

- all the configurations of the query builder got concatenated to the SQL string
- that string and params are sent to the database driver
- driver compiles SQL query to the binary SQL executable format and sends it to the database

With prepared statements you do SQL concatenation once on the Drizzle ORM side and then database
driver is able to reuse precompiled binary SQL instead of parsing query all the time.
It has extreme performance benefits on large SQL queries.

Different database drivers support prepared statements in different ways and sometimes
Drizzle ORM you can go [**faster than better-sqlite3 driver.**](https://twitter.com/_alexblokh/status/1593593415907909634)

## Prepared statement

\<Tabs items={\["PostgreSQL", "MySQL", "SQLite", "SingleStore"]}> <Tab>
\`\`\`typescript copy {3}
const db = drizzle(...);

````
const prepared = db.select().from(customers).prepare("statement_name");

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```
````

  </Tab> 
  <Tab>
    ```typescript copy {3}
    const db = drizzle(...);

````
const prepared = db.select().from(customers).prepare();

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```
````

  </Tab> 
  <Tab>
    ```typescript copy {3}
    const db = drizzle(...);

````
const prepared = db.select().from(customers).prepare();

const res1 = prepared.all();
const res2 = prepared.all();
const res3 = prepared.all();
```
````

  </Tab> 
  <Tab>
    ```typescript copy {3}
    const db = drizzle(...);

````
const prepared = db.select().from(customers).prepare();

const res1 = await prepared.execute();
const res2 = await prepared.execute();
const res3 = await prepared.execute();
```
````

  </Tab> 
</Tabs>

## Placeholder

Whenever you need to embed a dynamic runtime value - you can use the `sql.placeholder(...)` api
\<Tabs items={\["PostgreSQL", "MySQL", "SQLite", "SingleStore"]}> <Tab>
\`\`\`ts {6,9-10,15,18}
import { sql } from "drizzle-orm";

````
const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare("p1")

await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare("p2");

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```
````

  </Tab>
  <Tab>
    ```ts copy {6,9-10,15,18}
    import { sql } from "drizzle-orm";

````
const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare()

await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare();

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```
````

  </Tab>
  <Tab>
    ```ts copy {6,9-10,15,18}
    import { sql } from "drizzle-orm";

````
const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare()

p1.get({ id: 10 }) // SELECT * FROM customers WHERE id = 10
p1.get({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare();

p2.all({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```
````

  </Tab> 
  <Tab>
    ```ts copy {6,9-10,15,18}
    import { sql } from "drizzle-orm";

````
const p1 = db
  .select()
  .from(customers)
  .where(eq(customers.id, sql.placeholder('id')))
  .prepare()

await p1.execute({ id: 10 }) // SELECT * FROM customers WHERE id = 10
await p1.execute({ id: 12 }) // SELECT * FROM customers WHERE id = 12

const p2 = db
  .select()
  .from(customers)
  .where(sql`lower(${customers.name}) like ${sql.placeholder('name')}`)
  .prepare();

await p2.execute({ name: '%an%' }) // SELECT * FROM customers WHERE name ilike '%an%'
```
````

  </Tab>
</Tabs>

Source: https://orm.drizzle.team/docs/perf-serverless

# Drizzle Serverless performance

You can get immense benefits with `serverless functions` like AWS Lambda or Vercel Server Functions (they're AWS Lambda based),
since they can live up to 15mins and reuse both database connections and prepared statements.

On the other, hand `edge functions` tend to clean up straight after they're invoked which leads to little to no performance benefits.

To reuse your database connection and prepared statements you just have to declare them outside of handler scope:

```ts
const databaseConnection = ...;
const db = drizzle({ client: databaseConnection });
const prepared = db.select().from(...).prepare();

// AWS handler
export const handler = async (event: APIGatewayProxyEvent) => {
  return prepared.execute();
}
```

Source: https://orm.drizzle.team/docs/prisma

import Npm from '@mdx/Npm.astro';
import Tabs from '@mdx/Tabs.astro';
import Tab from '@mdx/Tab.astro';
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Steps from '@mdx/Steps.astro';
