# What is Prisma ORM? (/docs/v6/orm/overview/introduction/what-is-prisma)

Prisma ORM is an [open-source](https://github.com/prisma/prisma) next-generation ORM. It consists of the following parts:

- **Prisma Client**: Auto-generated and type-safe query builder for Node.js & TypeScript
- **Prisma Migrate**: Migration system
- **Prisma Studio**: GUI to view and edit data in your database.

  <CalloutContainer type="info">
    <CalloutDescription>
      **Prisma Studio** is the only part of Prisma ORM that is not open source. You can only run Prisma Studio locally.
    </CalloutDescription>
  </CalloutContainer>

Prisma Client can be used in *any* Node.js (supported versions) or TypeScript backend application (including serverless applications and microservices). This can be a [REST API](/v6/orm/overview/prisma-in-your-stack/rest), a [GraphQL API](/v6/orm/overview/prisma-in-your-stack/graphql), a gRPC API, or anything else that needs a database.

<div style={{ textAlign: "center", margin: "2em auto" }} class="videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/EEDGwLB55bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
</div>

How does Prisma ORM work? \[#how-does-prisma-orm-work]

The Prisma schema \[#the-prisma-schema]

Every project that uses a tool from the Prisma ORM toolkit starts with a [Prisma schema](/v6/orm/prisma-schema/overview). The Prisma schema allows developers to define their *application models* in an intuitive data modeling language. It also contains the connection to a database and defines a *generator*:

<CodeBlockTabs defaultValue="Relational databases">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Relational databases">
      Relational databases
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="MongoDB">
  MongoDB
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Relational databases">
    ```prisma
    datasource db {
      provider = "postgresql"
    }

````
generator client {
provider = "prisma-client"
output = "./generated"
}

model Post {
id Int @id @default(autoincrement())
title String
content String?
published Boolean @default(false)
author User? @relation(fields: [authorId], references: [id])
authorId Int?
}

model User {
id Int @id @default(autoincrement())
email String @unique
name String?
posts Post[]
}
```
````

  </CodeBlockTab>

  <CodeBlockTab value="MongoDB">
    ```prisma
    datasource db {
      provider = "mongodb"
      url      = env("DATABASE_URL")
    }

````
generator client {
  provider = "prisma-client-js"
}

model Post {
  id        String  @id @default(auto()) @map("_id") @db.ObjectId
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields: [authorId], references: [id])
  authorId  String  @db.ObjectId
}

model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String  @unique
  name  String?
  posts Post[]
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

> **Note**: The Prisma schema has powerful data modeling features. For example, it allows you to define "Prisma-level" [relation fields](/v6/orm/prisma-schema/data-model/relations) which will make it easier to work with [relations in the Prisma Client API](/v6/orm/prisma-client/queries/relation-queries). In the case above, the `posts` field on `User` is defined only on "Prisma-level", meaning it does not manifest as a foreign key in the underlying database.

In this schema, you configure three things:

- **Data source**: Specifies your database connection. Database connection URLs are configured in `prisma.config.ts`.
- **Generator**: Indicates that you want to generate Prisma Client
- **Data model**: Defines your application models

Configuring database connections \[#configuring-database-connections]

Database connection URLs are configured in a `prisma.config.ts` file. Create a `prisma.config.ts` file in your project root:

```ts title="prisma.config.ts"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx ./prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

<CalloutContainer type="info">
  <CalloutDescription>
    When using Prisma CLI commands, environment variables are not automatically loaded. You'll need to use a package like `dotenv` to load environment variables from a `.env` file, or ensure your environment variables are set in your shell.
  </CalloutDescription>
</CalloutContainer>

The Prisma schema data model \[#the-prisma-schema-data-model]

On this page, the focus is on the data model. You can learn more about [Data sources](/v6/orm/prisma-schema/overview/data-sources) and [Generators](/v6/orm/prisma-schema/overview/generators) on the respective docs pages.

Functions of Prisma schema data models \[#functions-of-prisma-schema-data-models]

The data model is a collection of [models](/v6/orm/prisma-schema/data-model/models#defining-models). A model has two major functions:

- Represent a table in relational databases or a collection in MongoDB
- Provide the foundation for the queries in the Prisma Client API

Getting a data model \[#getting-a-data-model]

There are two major workflows for "getting" a data model into your Prisma schema:

- Manually writing the data model and mapping it to the database with [Prisma Migrate](/v6/orm/prisma-migrate/getting-started)
- Generating the data model by [introspecting](/v6/orm/prisma-schema/introspection) a database

Once the data model is defined, you can [generate Prisma Client](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client) which will expose CRUD and more queries for the defined models. If you're using TypeScript, you'll get full type-safety for all queries (even when only retrieving the subsets of a model's fields).

Accessing your database with Prisma Client \[#accessing-your-database-with-prisma-client]

Generating Prisma Client \[#generating-prisma-client]

The first step when using Prisma Client is installing the `@prisma/client` and `prisma` npm packages:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma --save-dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma --dev
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma --dev
    ```
  </CodeBlockTab>
</CodeBlockTabs>

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install @prisma/client
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add @prisma/client
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add @prisma/client
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add @prisma/client
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Then, you can run `prisma generate`:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma generate
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma generate
    ```
  </CodeBlockTab>
</CodeBlockTabs>

The `prisma generate` command reads your Prisma schema and *generates* Prisma Client code. The code is generated into the path specified in the `output` field of your generator block (e.g., `./generated` as shown in the schema example above).

After you change your data model, you'll need to manually re-generate Prisma Client by running `prisma generate` to ensure the generated code gets updated.

Using Prisma Client to send queries to your database \[#using-prisma-client-to-send-queries-to-your-database]

Once Prisma Client has been generated, you can import it in your code and send queries to your database. This is what the setup code looks like.

Import and instantiate Prisma Client \[#import-and-instantiate-prisma-client]

<CodeBlockTabs defaultValue="import">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="import">
      import
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="require">
  require
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="import">
    ```ts
    import { PrismaClient } from "./generated/client";

````
const prisma = new PrismaClient();
```
````

  </CodeBlockTab>

  <CodeBlockTab value="require">
    ```js
    const { PrismaClient } = require("./generated/client");

````
const prisma = new PrismaClient();
```
````

  </CodeBlockTab>
</CodeBlockTabs>

Now you can start sending queries via the generated Prisma Client API, here are a few sample queries. Note that all Prisma Client queries return *plain old JavaScript objects*.

Learn more about the available operations in the [Prisma Client API reference](/v6/orm/prisma-client/setup-and-configuration/introduction).

Retrieve all User records from the database \[#retrieve-all-user-records-from-the-database]

```ts
// Run inside `async` function
const allUsers = await prisma.user.findMany();
```

Include the posts relation on each returned User object \[#include-the-posts-relation-on-each-returned-user-object]

```ts
// Run inside `async` function
const allUsers = await prisma.user.findMany({
  include: { posts: true },
});
```

Filter all Post records that contain "prisma" \[#filter-all-post-records-that-contain-prisma]

```ts
// Run inside `async` function
const filteredPosts = await prisma.post.findMany({
  where: {
    OR: [{ title: { contains: "prisma" } }, { content: { contains: "prisma" } }],
  },
});
```

Create a new User and a new Post record in the same query \[#create-a-new-user-and-a-new-post-record-in-the-same-query]

```ts
// Run inside `async` function
const user = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: { title: "Join us for Prisma Day 2020" },
    },
  },
});
```

Update an existing Post record \[#update-an-existing-post-record]

```ts
// Run inside `async` function
const post = await prisma.post.update({
  where: { id: 42 },
  data: { published: true },
});
```

Usage with TypeScript \[#usage-with-typescript]

Note that when using TypeScript, the result of this query will be *statically typed* so that you can't accidentally access a property that doesn't exist (and any typos are caught at compile-time). Learn more about leveraging Prisma Client's generated types on the [Advanced usage of generated types](/v6/orm/prisma-client/type-safety/operating-against-partial-structures-of-model-types) page in the docs.

Typical Prisma ORM workflows \[#typical-prisma-orm-workflows]

As mentioned above, there are two ways for "getting" your data model into the Prisma schema. Depending on which approach you choose, your main Prisma ORM workflow might look different.

Prisma Migrate \[#prisma-migrate]

With **Prisma Migrate**, Prisma ORM's integrated database migration tool, the workflow looks as follows:

1. Manually adjust your [Prisma schema data model](/v6/orm/prisma-schema/data-model/models)
2. Migrate your development database using the `prisma migrate dev` CLI command
3. Use Prisma Client in your application code to access your database

<img alt="Typical workflow with Prisma Migrate" src="/img/orm/prisma-migrate-development-workflow.png" width="1600" height="924" />

To learn more about the Prisma Migrate workflow, see:

- [Deploying database changes with Prisma Migrate](/v6/orm/prisma-client/deployment/deploy-database-changes-with-prisma-migrate)

* [Developing with Prisma Migrate](/v6/orm/prisma-migrate/getting-started)

SQL migrations and introspection \[#sql-migrations-and-introspection]

If for some reason, you can not or do not want to use Prisma Migrate, you can still use introspection to update your Prisma schema from your database schema.
The typical workflow when using **SQL migrations and introspection** is slightly different:

1. Manually adjust your database schema using SQL or a third-party migration tool
2. (Re-)introspect your database
3. Optionally [(re-)configure your Prisma Client API](/v6/orm/prisma-client/setup-and-configuration/custom-model-and-field-names)
4. (Re-)generate Prisma Client
5. Use Prisma Client in your application code to access your database

<img alt="Introspect workflow" src="/img/orm/prisma-evolve-app-workflow.png" width="1600" height="712" />

To learn more about the introspection workflow, please refer the [introspection section](/v6/orm/prisma-schema/introspection).
