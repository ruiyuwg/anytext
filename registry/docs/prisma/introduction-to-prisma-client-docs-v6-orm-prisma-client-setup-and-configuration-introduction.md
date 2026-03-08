# Introduction to Prisma Client (/docs/v6/orm/prisma-client/setup-and-configuration/introduction)

Prisma Client is an auto-generated and type-safe query builder that's *tailored* to your data. The easiest way to get started with Prisma Client is by following the **[Quickstart](/v6/prisma-orm/quickstart/sqlite)**.

[⭐ Quickstart (5 min)](/v6/prisma-orm/quickstart/sqlite)

The setup instructions [below](#set-up) provide a high-level overview of the steps needed to set up Prisma Client. If you want to get started using Prisma Client with your own database, follow one of these guides:

[🚀 Set up a new project from scratch](/v6/prisma-orm/quickstart/postgresql)

[➕ Add Prisma to an existing project](/v6/prisma-orm/add-to-existing-project/postgresql)

Set up \[#set-up]

1. Prerequisites \[#1-prerequisites]

In order to set up Prisma Client, you need a [Prisma schema file](/v6/orm/prisma-schema/overview) with your database connection, the Prisma Client generator, and at least one model:

```prisma title="schema.prisma"
datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

model User {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
}
```

Also make sure to [install the Prisma CLI](/v6/orm/tools/prisma-cli#installation):

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
    npx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma
    ```
  </CodeBlockTab>
</CodeBlockTabs>

2. Installation \[#2-installation]

Install Prisma Client in your project with the following command:

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

3. Importing Prisma Client \[#3-importing-prisma-client]

There are multiple ways to import Prisma Client in your project depending on your use case:

<CodeBlockTabs defaultValue="TypeScript">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="TypeScript">
      TypeScript
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="JavaScript">
  JavaScript
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="TypeScript">
    ```ts
    import { PrismaClient } from "./generated/prisma";

````
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
```
````

  </CodeBlockTab>

  <CodeBlockTab value="JavaScript">
    ```js
    const { PrismaClient } = require("./generated/prisma");

````
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
```
````

  </CodeBlockTab>
</CodeBlockTabs>

For edge environments, you can import Prisma Client as follows:

<CodeBlockTabs defaultValue="TypeScript">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="TypeScript">
      TypeScript
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="JavaScript">
  JavaScript
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="TypeScript">
    ```ts
    import { PrismaClient } from "./generated/prisma/edge";

````
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
```
````

  </CodeBlockTab>

  <CodeBlockTab value="JavaScript">
    ```js
    const { PrismaClient } = require("./generated/prisma/edge");

````
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
```
````

  </CodeBlockTab>
</CodeBlockTabs>

> **Note**: If you're using [driver adapters](/v6/orm/overview/databases/database-drivers#driver-adapters), you can import from the location specified in your generator's `output` path directly, e.g. `./src/generated/prisma`. No need to import from `./src/generated/prisma/edge`.

4. Use Prisma Client to send queries to your database \[#4-use-prisma-client-to-send-queries-to-your-database]

Once you have instantiated `PrismaClient`, you can start sending queries in your code:

```ts
// run inside `async` function
const newUser = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
  },
});

const users = await prisma.user.findMany();
```

<CalloutContainer type="info">
  <CalloutDescription>
    All Prisma Client methods return an instance of [`PrismaPromise`](/v6/orm/reference/prisma-client-reference#prismapromise-behavior) which only executes when you call `await` or `.then()` or `.catch()`.
  </CalloutDescription>
</CalloutContainer>

5. Evolving your application \[#5-evolving-your-application]

Whenever you make changes to your database that are reflected in the Prisma schema, you need to manually re-generate Prisma Client to update the generated code in your output directory:

```
prisma generate
```
