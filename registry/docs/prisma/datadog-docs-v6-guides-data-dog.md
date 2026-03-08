# Datadog (/docs/v6/guides/data-dog)

Introduction \[#introduction]

In this guide, you'll learn how to set up Datadog tracing for a new Prisma project. By combining the `@prisma/instrumentation` package with Prisma Client extensions, you can capture detailed spans for every database query. These spans are enriched with query metadata and sent to Datadog [using `dd-trace`](https://www.npmjs.com/package/dd-trace), Datadog's official APM library for Node.js, enabling you to monitor, analyze, and gain visibility into your application's database activity.

What are spans and tracing? \[#what-are-spans-and-tracing]

- **Spans** are the individual operations or units of work within a distributed system or complex application. Each database query, service call, or external request is represented by a span.
- **Tracing** ties these spans together to form a complete, end-to-end picture of a request’s lifecycle. With tracing, you can visualize bottlenecks, identify problematic queries, and pinpoint where errors occur from your queries.

Why use Datadog with Prisma ORM? \[#why-use-datadog-with-prisma-orm]

[Datadog](https://www.datadoghq.com/) provides application performance monitoring (APM), metrics, logs, and dashboards to help you observe and debug production systems.

While Prisma ORM abstracts away SQL and boosts developer productivity, it can obscure query performance without proper instrumentation. By integrating Datadog with Prisma using `@prisma/instrumentation` and [`dd-trace`](https://www.npmjs.com/package/dd-trace), you can automatically capture spans for every database query.

This enables you to:

- Measure latency per query.
- Inspect query arguments and raw SQL.
- Trace Prisma operations in the context of application-level requests.
- Identify bottlenecks related to database access.

This integration provides runtime visibility into Prisma queries with minimal effort, helping you catch slow queries and errors in real time.

Prerequisites \[#prerequisites]

Before you begin, ensure you have the following:

- **Node.js** installed (v18+ recommended).
- A local or hosted **PostgreSQL** database.
- A **Datadog** account. If you do not have one, [sign up here](https://www.datadoghq.com/).
- The **Datadog Agent** installed and running on your machine or server where this application will run. You can follow the [Datadog Agent installation docs](https://docs.datadoghq.com/agent/) to set it up.

1. Create a new project \[#1-create-a-new-project]

We will start by creating a new Node.js project to demonstrate tracing with Datadog and Prisma ORM. This will be a minimal, standalone setup focused on running and tracing Prisma queries, to understand the instrumentation flow in isolation.

If you're integrating tracing into an existing Prisma project, you can skip this step and directly follow from [the setup tracing section](#4-set-up-datadog-tracing). Just make sure you apply the changes in your project's equivalent folder structure.

````
  npm



  pnpm



  yarn



  bun




```bash
mkdir prisma-datadog-tracing
cd prisma-datadog-tracing
npm init -y
```



```bash
mkdir prisma-datadog-tracing
cd prisma-datadog-tracing
pnpm init -y
```



```bash
mkdir prisma-datadog-tracing
cd prisma-datadog-tracing
yarn init -y
```



```bash
mkdir prisma-datadog-tracing
cd prisma-datadog-tracing
bun init -y
```
````

In this setup, you'll:

- Define a Prisma schema with basic models.
- Connect to a Postgres database (Prisma Postgres or your own).
- Configure Datadog tracing for all queries using `@prisma/instrumentation` and `dd-trace`.
- Run a sample script that executes Prisma operations and sends spans to Datadog.

2. Set up Prisma ORM \[#2-set-up-prisma-orm]

In this section, you will install Prisma, create your schema, and generate the Prisma Client. This prepares your application to run database queries—queries that you will trace with Datadog.

2.1. Install and initialize Prisma ORM \[#21-install-and-initialize-prisma-orm]

Run the following commands to install Prisma and a minimal TypeScript runner:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install -D prisma tsx
```



```bash
pnpm add -D prisma tsx
```



```bash
yarn add --dev prisma tsx
```



```bash
bun add --dev prisma tsx
```
````

Then initialize Prisma with the `--db` flag to create a [new Prisma Postgres](/v6/postgres) instance:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db --output ../src/generated/prisma
```



```bash
pnpm dlx prisma init --db --output ../src/generated/prisma
```



```bash
yarn dlx prisma init --db --output ../src/generated/prisma
```



```bash
bunx --bun prisma init --db --output ../src/generated/prisma
```





You will be prompted to name your database and select the closest region. For clarity, choose a memorable name (e.g., `My Datadog Project`).
````

This command does the following:

- Creates a `prisma` directory with a `schema.prisma` file.
- Generates the Prisma Client in the `/src/generated/prisma` directory (as specified in the `--output` flag).
- Creates a `.env` file at the project root with your database connection string (`DATABASE_URL`).

The `.env` file should contain a standard connection string:

```bash title=".env"
# Placeholder url you have to replace
DATABASE_URL="postgresql://janedoe:mypassword@localhost:5432/mydb?schema=sample"
```

Install the driver adapter for PostgreSQL:

````
  npm



  pnpm



  yarn



  bun




```bash
npm i @prisma/adapter-pg pg
```



```bash
pnpm add @prisma/adapter-pg pg
```



```bash
yarn add @prisma/adapter-pg pg
```



```bash
bun add @prisma/adapter-pg pg
```






  npm



  pnpm



  yarn



  bun




```bash
npm i -D @types/pg
```



```bash
pnpm add -D @types/pg
```



```bash
yarn add --dev @types/pg
```



```bash
bun add --dev @types/pg
```





If you are using a different database provider (MySQL, SQL Server, SQLite), install the corresponding driver adapter package instead of `@prisma/adapter-pg`. For more information, see [Database drivers](/v6/orm/overview/databases/database-drivers).
````

2.2. Define models \[#22-define-models]

Now, open `prisma/schema.prisma` and update your generator block and models. Replace the `generator` block with the following, and add a `User` and a `Post` model:

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client"
  output = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
}

model User { // [!code ++]
  id    Int     @id @default(autoincrement()) // [!code ++]
  email String  @unique // [!code ++]
  name  String? // [!code ++]
  posts Post[] // [!code ++]
} // [!code ++]

model Post { // [!code ++]
  id        Int     @id @default(autoincrement()) // [!code ++]
  title     String // [!code ++]
  content   String? // [!code ++]
  published Boolean @default(false) // [!code ++]
  authorId  Int // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]
```

Create a `prisma.config.ts` file to configure Prisma:

```typescript title="prisma.config.ts"
import "dotenv/config"; // [!code ++]
import { defineConfig, env } from "prisma/config"; // [!code ++]

export default defineConfig({
  // [!code ++]
  schema: "prisma/schema.prisma", // [!code ++]
  migrations: {
    // [!code ++]
    path: "prisma/migrations", // [!code ++]
  }, // [!code ++]
  datasource: {
    // [!code ++]
    url: env("DATABASE_URL"), // [!code ++]
  }, // [!code ++]
}); // [!code ++]
```

````
You'll need to install the `dotenv` package if you haven't already:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npm install dotenv
    ```
  

  
    ```bash
    pnpm add dotenv
    ```
  

  
    ```bash
    yarn add dotenv
    ```
  

  
    ```bash
    bun add dotenv
    ```
  
````

2.3. Generate the Prisma Client and run migrations \[#23-generate-the-prisma-client-and-run-migrations]

Generate the Prisma Client and apply your schema to your database:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate
```



```bash
pnpm dlx prisma generate
```



```bash
yarn dlx prisma generate
```



```bash
bunx --bun prisma generate
```






  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name "init"
```



```bash
pnpm dlx prisma migrate dev --name "init"
```



```bash
yarn dlx prisma migrate dev --name "init"
```



```bash
bunx --bun prisma migrate dev --name "init"
```
````

This creates the tables according to your schema in the Postgres database and generates a client for you to interact with the database.

3. Install required dependencies for tracing \[#3-install-required-dependencies-for-tracing]

In addition to Prisma, you will need the following packages for Datadog tracing:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/instrumentation \
  dd-trace
```



```bash
pnpm add @prisma/instrumentation \
  dd-trace
```



```bash
yarn add @prisma/instrumentation \
  dd-trace
```



```bash
bun add @prisma/instrumentation \
  dd-trace
```
````

Also ensure you have development dependencies for TypeScript:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install -D typescript
```



```bash
pnpm add -D typescript
```



```bash
yarn add --dev typescript
```



```bash
bun add --dev typescript
```
````

Here's a quick overview:

- **`@prisma/instrumentation`**: Instruments Prisma queries so they appear as spans in your tracer.
- **`dd-trace`**: Official Node.js tracing library from Datadog.

4. Set up Datadog tracing \[#4-set-up-datadog-tracing]

Create a `tracer.ts` file in the `src` folder to instantiate your tracing logic:

```bash
touch src/tracer.ts
```

4.1. Configure the tracer \[#41-configure-the-tracer]

Open `src/tracer.ts` and add the following code:

```ts title="src/tracer.ts"
import tracer from "dd-trace";

tracer.init({
  profiling: true,
  logInjection: true,
  runtimeMetrics: true,
  dbmPropagationMode: "full",
  env: "dev",
  sampleRate: 1,
  service: "prisma-datadog-tracing",
  version: "1.0.0",
});

export { tracer };
```

Explanation \[#explanation]

- **`tracer.init`** configures `dd-trace` with a `service` name. This name appears in Datadog under your `APM` > `Services` list.
- **`@prisma/instrumentation`** automatically logs each Prisma query as a Datadog span.

5. Instantiate Prisma and run queries \[#5-instantiate-prisma-and-run-queries]

5.1. Create the Prisma Client instance \[#51-create-the-prisma-client-instance]

Create a `src/client.ts` to hold your Prisma Client instantiation:

```ts title="src/client.ts"
import { tracer } from "./tracer";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
  log: [{ emit: "event", level: "query" }],
})
  .$on("query", (e) => {
    const span = tracer.startSpan(`prisma_raw_query`, {
      childOf: tracer.scope().active() || undefined,
      tags: {
        "prisma.rawquery": e.query,
      },
    });
    span.finish();
  })
  .$extends({
    query: {
      async $allOperations({ operation, model, args, query }) {
        const span = tracer.startSpan(`prisma_query_${model?.toLowerCase()}_${operation}`, {
          tags: {
            "prisma.operation": operation,
            "prisma.model": model,
            "prisma.args": JSON.stringify(args),
            "prisma.rawQuery": query,
          },
          childOf: tracer.scope().active() || undefined,
        });

        try {
          const result = await query(args);
          span.finish();
          return result;
        } catch (error) {
          span.setTag("error", error);
          span.finish();
          throw error;
        }
      },
    },
  });

export { prisma };
```

The setup above gives you more control over how queries are traced:

- Tracing is initialized as early as possible by importing the `tracer` before creating the Prisma Client.
- The `$on("query")` hook captures raw SQL queries and sends them as standalone spans.
- The `$allOperations` extension wraps all Prisma operations in custom spans, allowing you to tag them with metadata like the model, operation type, and arguments.

Unlike the `@prisma/instrumentation` package, which offers automatic tracing out of the box, this manual setup gives you full control over how each span is structured and tagged. It's helpful when you need custom span names, additional metadata, a simpler setup, or when working around limitations or compatibility issues in the OpenTelemetry ecosystem. It also allows you to adapt tracing behavior based on query context, which can be especially useful in complex applications.

5.2. Add a script that performs queries \[#52-add-a-script-that-performs-queries]

Create a `src/index.ts` file and add code to perform queries to your database and send traces to Datadog:

```typescript title="src/index.ts"
import { tracer } from "./tracer";
import { PrismaInstrumentation, registerInstrumentations } from "@prisma/instrumentation";
import { prisma } from "./client";

const provider = new tracer.TracerProvider();

registerInstrumentations({
  instrumentations: [new PrismaInstrumentation()],
  tracerProvider: provider,
});

provider.register();

async function main() {
  const user1Email = `alice${Date.now()}@prisma.io`;
  const user2Email = `bob${Date.now()}@prisma.io`;

  let alice, bob;

  // 1. Create users concurrently
  try {
    [alice, bob] = await Promise.all([
      prisma.user.create({
        data: {
          email: user1Email,
          name: "Alice",
          posts: {
            create: {
              title: "Join the Prisma community on Discord",
              content: "https://pris.ly/discord",
              published: true,
            },
          },
        },
        include: { posts: true },
      }),
      prisma.user.create({
        data: {
          email: user2Email,
          name: "Bob",
          posts: {
            create: [
              {
                title: "Check out Prisma on YouTube",
                content: "https://pris.ly/youtube",
                published: true,
              },
              {
                title: "Follow Prisma on Twitter",
                content: "https://twitter.com/prisma/",
                published: false,
              },
            ],
          },
        },
        include: { posts: true },
      }),
    ]);
    console.log(
      `✅ Created users: ${alice.name} (${alice.posts.length} post) and ${bob.name} (${bob.posts.length} posts)`,
    );
  } catch (err) {
    console.error("❌ Error creating users:", err);
    return;
  }

  // 2. Fetch all published posts
  try {
    const publishedPosts = await prisma.post.findMany({
      where: { published: true },
    });
    console.log(`✅ Retrieved ${publishedPosts.length} published post(s).`);
  } catch (err) {
    console.error("❌ Error fetching published posts:", err);
  }

  // 3. Create & publish a post for Alice
  let post;
  try {
    post = await prisma.post.create({
      data: {
        title: "Join the Prisma Discord community",
        content: "https://pris.ly/discord",
        published: false,
        author: { connect: { email: user1Email } },
      },
    });
    console.log(`✅ Created draft post for Alice (ID: ${post.id})`);
  } catch (err) {
    console.error("❌ Error creating draft post for Alice:", err);
    return;
  }

  try {
    post = await prisma.post.update({
      where: { id: post.id },
      data: { published: true },
    });
    console.log("✅ Published Alice’s post:", post);
  } catch (err) {
    console.error("❌ Error publishing Alice's post:", err);
  }

  // 4. Fetch all posts by Alice
  try {
    const alicePosts = await prisma.post.findMany({
      where: { author: { email: user1Email } },
    });
    console.log(`✅ Retrieved ${alicePosts.length} post(s) by Alice.`, alicePosts);
  } catch (err) {
    console.error("❌ Error fetching Alice's posts:", err);
  }
}

// Entrypoint
main()
  .catch((err) => {
    console.error("❌ Unexpected error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("🔌 Disconnected from database.");
  });
```

````
If you encounter a linting error on the line `tracerProvider: provider` due to incompatible types, it's likely caused by a version mismatch in the `@opentelemetry/api` package.

To resolve this, add the following override to your package.json:

```json
"overrides": { // [!code ++]
  "@opentelemetry/api": "1.8.0" // [!code ++]
} // [!code ++]
```

This is necessary because [`dd-trace` does not yet support version `1.9.0` or above of `@opentelemetry/api`](https://github.com/DataDog/dd-trace-js#datadog-with-opentelemetery).

After updating the `package.json`, reinstall your dependencies:


  
    
      npm
    

    
      pnpm
    

    
      yarn
    

    
      bun
    
  

  
    ```bash
    npm i
    ```
  

  
    ```bash
    pnpm i
    ```
  

  
    ```bash
    yarn install
    ```
  

  
    ```bash
    bun install
    ```
  


This should resolve the linting error.
````

6\. Run your queries and see the traces \[#6-run-your-queries-and-see-the-traces]

Run the queries:

````
  npm



  pnpm



  yarn



  bun




```bash
npx tsx src/index.ts
```



```bash
pnpm dlx tsx src/index.ts
```



```bash
yarn dlx tsx src/index.ts
```



```bash
bunx --bun tsx src/index.ts
```
````

This executes your script, which:

- Registers the Datadog tracer.
- Performs multiple Prisma queries.
- Logs the result of each operation.

Then, confirm the traces in Datadog:

- Open your [Datadog APM page](https://docs.datadoghq.com/tracing/).
- Navigate to **APM > Traces > Explorer** in the side panel.
- Explore the list of traces and spans, each representing a Prisma query (e.g. `prisma:query`).

  Depending on your Datadog setup, it may take a minute or two for new data to appear. Refresh or wait briefly if you do not see traces right away.

Next steps \[#next-steps]

You have successfully:

- Created a Prisma ORM project with [Prisma Postgres](/v6/postgres).
- Set up Datadog tracing using `@prisma/instrumentation` and `dd-trace`.
- Verified that database operations show up as spans in Datadog.

To improve your observability further:

- Add more instrumentation for your HTTP server or other services (e.g., Express, Fastify).
- [Create Dashboards to view](https://docs.datadoghq.com/dashboards/) key metrics from your data.

For additional guidance, check out:

- [Datadog APM documentation](https://docs.datadoghq.com/tracing/).
- [Prisma tracing docs](/v6/orm/prisma-client/observability-and-logging/opentelemetry-tracing).
