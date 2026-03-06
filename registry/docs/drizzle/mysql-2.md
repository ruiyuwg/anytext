### MySQL

To implement an upsert query in MySQL with Drizzle you can use `.onDuplicateKeyUpdate()` method. MySQL will automatically determine the conflict target based on the primary key and unique indexes, and will update the row if any unique index conflicts.

This is how you can do it:

<Section>
```ts copy {4}
await db
  .insert(users)
  .values({ id: 1, name: 'John' })
  .onDuplicateKeyUpdate({ set: { name: 'Super John' } });
```

```sql
insert into users (`id`, `first_name`) values (1, 'John')
  on duplicate key update first_name = 'Super John';
```

</Section>

To upsert multiple rows in one query in MySQL you can use `sql operator` and `values()` function. `values()` function refers to the value of column that would be inserted if duplicate-key conflict hadn't occurred.

\<CodeTabs items={\["index.ts", "schema.ts"]}> <CodeTab>
\`\`\`ts copy {21,24}
import { sql } from 'drizzle-orm';
import { users } from './schema';

````
const values = [
  {
    id: 1,
    lastLogin: new Date(),
  },
  {
    id: 2,
    lastLogin: new Date(Date.now() + 1000 * 60 * 60),
  },
  {
    id: 3,
    lastLogin: new Date(Date.now() + 1000 * 60 * 120),
  },
];

await db
  .insert(users)
  .values(values)
  .onDuplicateKeyUpdate({
    set: {
      lastLogin: sql`values(${users.lastLogin})`,
    },
  });
```

```sql
insert into users (`id`, `last_login`)
  values
    (1, '2024-03-15 23:08:27.025'),
    (2, '2024-03-15 00:08:27.025'),
    (3, '2024-03-15 01:08:27.025')
  on duplicate key update last_login = values(last_login);
```
````

  </CodeTab>
  ```ts copy
  import { mysqlTable, serial, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
id: serial('id').primaryKey(),
lastLogin: timestamp('last_login', { mode: 'date' }).notNull(),
});

````
</CodeTabs>

Drizzle has simple and flexible API, which lets you easily create custom solutions. This is how you do custom function for updating specific columns in multiple rows due to the conflict in MySQL:

<CodeTabs items={["index.ts", "schema.ts"]}>
<CodeTab>
  ```ts copy {36,38}
  import { SQL, getColumns, sql } from 'drizzle-orm';
  import { MySqlTable } from 'drizzle-orm/mysql-core';
  import { users } from './schema';

  const buildConflictUpdateColumns = <T extends MySqlTable, Q extends keyof T['_']['columns']>(
    table: T,
    columns: Q[],
  ) => {
    const cls = getColumns(table);
    return columns.reduce((acc, column) => {
      acc[column] = sql`values(${cls[column]})`;
      return acc;
    }, {} as Record<Q, SQL>);
  };

  const values = [
    {
      id: 1,
      lastLogin: new Date(),
      active: true,
    },
    {
      id: 2,
      lastLogin: new Date(Date.now() + 1000 * 60 * 60),
      active: true,
    },
    {
      id: 3,
      lastLogin: new Date(Date.now() + 1000 * 60 * 120),
      active: true,
    },
  ];

  await db
    .insert(users)
    .values(values)
    .onDuplicateKeyUpdate({
      set: buildConflictUpdateColumns(users, ['lastLogin', 'active']),
    });
  ```

  ```sql
  insert into users (`id`, `last_login`, `active`)
    values
      (1, '2024-03-16 15:23:28.013', true),
      (2, '2024-03-16 16:23:28.013', true),
      (3, '2024-03-16 17:23:28.013', true)
    on duplicate key update last_login = values(last_login), active = values(active);
  ```
</CodeTab>
```ts copy
import { boolean, mysqlTable, serial, timestamp } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  lastLogin: timestamp('last_login', { mode: 'date' }).notNull(),
  active: boolean('active').notNull().default(false),
});
````

</CodeTabs>

If you want to update all columns except of specific one, you can leave the previous value like this:

<Section>
```ts copy {15}
import { sql } from 'drizzle-orm';
import { users } from './schema';

const data = {
id: 1,
name: 'John',
email: 'john@email.com',
age: 29,
};

await db
.insert(users)
.values(data)
.onDuplicateKeyUpdate({
set: { ...data, email: sql`${users.email}` }, // leave email as it was
});

````

```sql
insert into users (`id`, `name`, `email`, `age`) values (1, 'John', 'john@email.com', 29)
  on duplicate key update id = 1, name = 'John', email = email, age = 29;
````

</Section>

Source: https://orm.drizzle.team/docs/vector-similarity-search

import Section from "@mdx/Section.astro";
import IsSupportedChipGroup from "@mdx/IsSupportedChipGroup.astro";
import Prerequisites from "@mdx/Prerequisites.astro";
import CodeTabs from '@mdx/CodeTabs.astro';
import CodeTab from '@mdx/CodeTab.astro';
import Npm from "@mdx/Npm.astro";

<Prerequisites>
- Get started with [PostgreSQL](/docs/get-started-postgresql)
- [Select statement](/docs/select)
- [Indexes](/docs/indexes-constraints#indexes)
- [sql operator](/docs/sql)
- [pgvector extension](/docs/extensions/pg#pg_vector)
- [Drizzle kit](/docs/kit-overview)
- You should have installed the `openai` [package](https://www.npmjs.com/package/openai) for generating embeddings. 
<Npm>
  openai
</Npm>
- You should have `drizzle-orm@0.31.0` and `drizzle-kit@0.22.0` or higher.  
</Prerequisites>

To implement vector similarity search in PostgreSQL with Drizzle ORM, you can use the `pgvector` extension. This extension provides a set of functions to work with vectors and perform similarity search.

As for now, Drizzle doesn't create extension automatically, so you need to create it manually. Create an empty migration file and add SQL query:

<Section>
```bash
npx drizzle-kit generate --custom
```

```sql
CREATE EXTENSION vector;
```

</Section>

To perform similarity search, you need to create a table with a vector column and an `HNSW` or `IVFFlat` index on this column for better performance:

\<CodeTabs items={\["schema.ts", "migration.sql"]}> <CodeTab>

```ts copy {10, 13}
import { index, pgTable, serial, text, vector } from "drizzle-orm/pg-core";

export const guides = pgTable(
  "guides",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    url: text("url").notNull(),
    embedding: vector("embedding", { dimensions: 1536 }),
  },
  (table) => [
    index("embeddingIndex").using(
      "hnsw",
      table.embedding.op("vector_cosine_ops"),
    ),
  ],
);
```

  </CodeTab>
  ```sql
  CREATE TABLE IF NOT EXISTS "guides" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" text NOT NULL,
    "description" text NOT NULL,
    "url" text NOT NULL,
    "embedding" vector(1536)
  );
  --> statement-breakpoint
  CREATE INDEX IF NOT EXISTS "embeddingIndex" ON "guides" USING hnsw (embedding vector_cosine_ops);
  ```
</CodeTabs>

The `embedding` column is used to store vector embeddings of the guide descriptions. Vector embedding is just a representation of some data. It converts different types of data into a common format (vectors) that language models can process. This allows us to perform mathematical operations, such as measuring the distance between two vectors, to determine how similar or different two data items are.

In this example we will use `OpenAI` model to generate [embeddings](https://platform.openai.com/docs/guides/embeddings) for the description:

```ts copy
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll("\n", " ");

  const { data } = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input,
  });

  return data[0].embedding;
};
```

To search for similar guides by embedding, you can use `gt` and `sql` operators with `cosineDistance` function to calculate the similarity between the `embedding` column and the generated embedding:

<Section>
```ts copy {10,15,16}
import { cosineDistance, desc, gt, sql } from 'drizzle-orm';
import { generateEmbedding } from './embedding';
import { guides } from './schema';

const db = drizzle(...);

const findSimilarGuides = async (description: string) => {
const embedding = await generateEmbedding(description);

const similarity = sql`1 - (${cosineDistance(guides.embedding, embedding)})`;

const similarGuides = await db
.select({ name: guides.title, url: guides.url, similarity })
.from(guides)
.where(gt(similarity, 0.5))
.orderBy((t) => desc(t.similarity))
.limit(4);

return similarGuides;
};

````

```ts
const description = 'Guides on using Drizzle ORM with different platforms';

const similarGuides = await findSimilarGuides(description);
````

```json
[
  {
    "name": "Drizzle with Turso",
    "url": "/docs/tutorials/drizzle-with-turso",
    "similarity": 0.8642314333984994
  },
  {
    "name": "Drizzle with Supabase Database",
    "url": "/docs/tutorials/drizzle-with-supabase",
    "similarity": 0.8593631126014918
  },
  {
    "name": "Drizzle with Neon Postgres",
    "url": "/docs/tutorials/drizzle-with-neon",
    "similarity": 0.8541051184461372
  },
  {
    "name": "Drizzle with Vercel Edge Functions",
    "url": "/docs/tutorials/drizzle-with-vercel-edge-functions",
    "similarity": 0.8481551084241092
  }
]
```

</Section>

Source: https://orm.drizzle.team/docs/indexes-constraints

import Tab from '@mdx/Tab.astro';
import Tabs from '@mdx/Tabs.astro';
import Callout from '@mdx/Callout.astro';
import Section from '@mdx/Section.astro';

# Indexes & Constraints
