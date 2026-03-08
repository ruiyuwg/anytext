# Getting Started (/docs/v6/optimize/getting-started)

Prerequisites \[#prerequisites]

Before you begin with Prisma Optimize, ensure you have the following:

- A [Prisma Data Platform account](https://console.prisma.io/optimize?utm_source=docs\&utm_medium=optimize-page).
- A project using [Prisma Client](/v6/orm/prisma-client/setup-and-configuration/introduction) version `5.0.0` or higher (we recommend using the latest version).
- A PostgreSQL, MySQL/MariaDB, CockroachDB, or MS SQL Server database.

  Prisma Optimize is intended for use in local environments. Learn more in the [FAQ](/v6/postgres/faq#can-i-enable-query-optimizations-for-prisma-postgres-in-production).

1. Launch Optimize \[#1-launch-optimize]

2. Log in to your [Prisma Data Platform account](https://console.prisma.io/optimize?utm_source=docs\&utm_medium=optimize-page).

3. Follow the instructions

   to access and launch Prisma Optimize.

4. Add Optimize to your application \[#2-add-optimize-to-your-application]

2.1. Install the Optimize Prisma Client extension \[#21-install-the-optimize-prisma-client-extension]

Install Prisma Client and the Optimize extension:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/client@latest @prisma/extension-optimize
```



```bash
pnpm add @prisma/client@latest @prisma/extension-optimize
```



```bash
yarn add @prisma/client@latest @prisma/extension-optimize
```



```bash
bun add @prisma/client@latest @prisma/extension-optimize
```





Enabling tracing in older versions of Prisma ORM
````

For versions of Prisma ORM between `4.2.0` and `6.1.0`, you need to enable the `tracing` preview feature in your Prisma schema file.

```prisma
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["tracing"]
}
```

2.2. Add the Optimize API Key to your .env file \[#22-add-the-optimize-api-key-to-your-env-file]

Generate a Prisma Optimize API key

and add it to your `.env` file:

```bash
OPTIMIZE_API_KEY="YOUR_OPTIMIZE_API_KEY"
```

2.3. Extend your Prisma Client instance \[#23-extend-your-prisma-client-instance]

Extend your existing Prisma Client instance with the Optimize extension:

```ts
import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

const prisma = new PrismaClient().$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }));
```

Using the Optimize extension with other extensions \[#using-the-optimize-extension-with-other-extensions]

Since [extensions are applied one after another](/v6/orm/prisma-client/client-extensions#conflicts-in-combined-extensions), make sure you apply them in the correct order. Extensions cannot share behavior and the last extension applied takes precedence.

If you are using [Prisma Accelerate](/v6/accelerate) in your application, make sure you apply it *after* the Optimize extension. For example:

```ts
const prisma = new PrismaClient().$extends(withOptimize()).$extends(withAccelerate());
```

2.5. Use Prisma Optimize to generate insights \[#25-use-prisma-optimize-to-generate-insights]

Follow these steps to start generating query insights with Prisma Optimize:

1. In the Optimize dashboard, click the **Start recording** button, then run your app and execute some Prisma queries while recording is active.
2. After your app runs and generates insights based on the executed Prisma queries, click the **Stop recording** button.
3. Explore [individual query details](/v6/postgres/query-optimization/recordings#data-captured-in-a-recording-session) by clicking on them, and check the **Recommendations** tab for any suggested improvements to enhance query performance.

   ```
   Use [Prisma AI](/v6/postgres/query-optimization/prisma-ai) to understand recommendations and apply them within your Prisma model context.
   ```

For a hands-on learning experience, try out the [step-by-step example](https://github.com/prisma/prisma-examples/tree/latest/optimize/starter).

Need help? \[#need-help]

If you need assistance, reach out in the `#help-and-questions` channel on our [Discord](https://pris.ly/discord?utm_source=docs\&utm_medium=generated_text_cta), or connect with [our community](https://www.prisma.io/community) to see how others are using Optimize.

# Prisma Optimize (/docs/v6/optimize)

[Prisma Optimize](https://www.prisma.io/optimize) helps you generate insights and provides recommendations that can help you make your database queries faster.

This helps you to:

- Generate insights about your database queries
- Identify errors to help debug your database queries
- Receive recommendations and discuss them with an AI assistant to enhance query performance.

Optimize aims to help developers of all skill levels write efficient database queries, reducing database load and making applications more responsive.

Supported databases \[#supported-databases]

Optimize works with the database you already have.

- PostgreSQL
- MySQL
- MariaDB
- CockroachDB
- MS SQL Server

Getting started \[#getting-started]

- [Getting started](/v6/optimize/getting-started) - Start analyzing queries in 5 minutes
- [Recommendations](/v6/optimize/recommendations) - Performance optimization recommendations
- [Prisma AI](/v6/optimize/prisma-ai) - AI-powered query optimization assistance
