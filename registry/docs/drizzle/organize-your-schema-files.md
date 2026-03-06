## Organize your schema files

You can declare your SQL schema directly in TypeScript either in a single `schema.ts` file,
or you can spread them around — whichever you prefer, all the freedom!

#### Schema in 1 file

The most common way to declare your schema with Drizzle is to put all your tables into one `schema.ts` file.

> Note: You can name your schema file whatever you like. For example, it could be `models.ts`, or something else.

This approach works well if you don't have too many table models defined, or if you're okay with keeping them all in one file

Example:

```plaintext
📦
 └ 📂 src
    └ 📂 db
       └ 📜 schema.ts
```

In the `drizzle.config.ts` file, you need to specify the path to your schema file. With this configuration, Drizzle will
read from the `schema.ts` file and use this information during the migration generation process. For more information
about the `drizzle.config.ts` file and migrations with Drizzle, please check: [link](/docs/drizzle-config-file)

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/db/schema.ts",
});
```

#### Schema in multiple files

You can place your Drizzle models — such as tables, enums, sequences, etc. — not only in one file but in any file you prefer.
The only thing you must ensure is that you export all the models from those files so that the Drizzle kit can import
them and use them in migrations.

One use case would be to separate each table into its own file.

```plaintext
📦
 └ 📂 src
    └ 📂 db
       └ 📂 schema
          ├ 📜 users.ts
          ├ 📜 countries.ts
          ├ 📜 cities.ts
          ├ 📜 products.ts
          ├ 📜 clients.ts
          └ 📜 etc.ts
```

In the `drizzle.config.ts` file, you need to specify the path to your schema folder. With this configuration, Drizzle will
read from the `schema` folder and find all the files recursively and get all the drizzle tables from there. For more information
about the `drizzle.config.ts` file and migrations with Drizzle, please check: [link](/docs/drizzle-config-file)

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  schema: "./src/db/schema",
});
```

You can also group them in any way you like, such as creating groups for user-related tables, messaging-related tables, product-related tables, etc.

```plaintext
📦
 └ 📂 src
    └ 📂 db
       └ 📂 schema
          ├ 📜 users.ts
          ├ 📜 messaging.ts
          └ 📜 products.ts
```
