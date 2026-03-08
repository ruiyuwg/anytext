# Getting started (/docs/optimize/getting-started)

Prerequisites \[#prerequisites]

Before you begin with Prisma Optimize, ensure you have:

- A [Prisma Data Platform account](https://console.prisma.io/optimize?utm_source=docs\&utm_medium=optimize-page)
- A project using [Prisma Client](/orm/prisma-client/setup-and-configuration/introduction)
- A PostgreSQL, MySQL/MariaDB, CockroachDB, or MS SQL Server database

  Prisma Optimize is intended for use in local development environments. Learn more in the [FAQ](/optimize/more/faq).

1. Launch Optimize \[#1-launch-optimize]

2. Log in to your [Prisma Data Platform account](https://console.prisma.io/optimize?utm_source=docs\&utm_medium=optimize-page)

3. Click the **Optimize** tab in the left navigation

4. Click **Generate API key**

5. Copy the API key and save it securely

6. Click through the setup screens until you see **Finish & optimize**

7. Add Optimize to your application \[#2-add-optimize-to-your-application]

Install the extension \[#install-the-extension]

````
  npm



  pnpm



  yarn



  bun




```bash
npm install @prisma/extension-optimize
```



```bash
pnpm add @prisma/extension-optimize
```



```bash
yarn add @prisma/extension-optimize
```



```bash
bun add @prisma/extension-optimize
```
````

Add API key to .env \[#add-api-key-to-env]

```bash
OPTIMIZE_API_KEY="YOUR_OPTIMIZE_API_KEY"
```

Extend Prisma Client \[#extend-prisma-client]

```ts
import { PrismaClient } from "@prisma/client";
import { withOptimize } from "@prisma/extension-optimize";

const prisma = new PrismaClient().$extends(
  withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY })
);
```

**Using with other extensions:**

Extensions are applied sequentially. If using [Prisma Accelerate](/accelerate), apply it after Optimize:

```ts
const prisma = new PrismaClient()
  .$extends(withOptimize())
  .$extends(withAccelerate());
```

3. Generate insights \[#3-generate-insights]

4. In the Optimize dashboard, click **Start recording**

5. Run your app and execute Prisma queries

6. Click **Stop recording** when done

7. Explore query details and check the **Recommendations** tab

   Use [Prisma AI](/optimize/prisma-ai) to understand recommendations and apply them within your Prisma model context.

Next steps \[#next-steps]

- [Recommendations](/optimize/recommendations) - Learn about performance recommendations
- [Recordings](/optimize/recordings) - Understand recording sessions
- [Examples](https://github.com/prisma/prisma-examples/tree/latest/optimize/starter) - Try a hands-on example

Need help? \[#need-help]

Reach out in the `#help-and-questions` channel on [Discord](https://pris.ly/discord?utm_source=docs\&utm_medium=generated_text_cta), or connect with [our community](https://www.prisma.io/community).

# Prisma Optimize (/docs/optimize)

[Prisma Optimize](https://www.prisma.io/optimize) helps you generate insights and provides recommendations that can help you make your database queries faster.

What you can do \[#what-you-can-do]

- **Generate insights** about your database queries
- **Identify errors** to help debug your database queries
- **Receive recommendations** with AI-powered assistance to enhance query performance

Optimize helps developers of all skill levels write efficient database queries, reducing database load and making applications more responsive.

Supported databases \[#supported-databases]

- PostgreSQL
- MySQL
- MariaDB
- CockroachDB
- MS SQL Server

Getting started \[#getting-started]

- [Getting started](/optimize/getting-started) - Learn how to quickly set up and start using Prisma Optimize
- [Recommendations](/optimize/recommendations) - Comprehensive guide to improving database performance
- [Prisma AI](/optimize/prisma-ai) - Learn about using Optimize's Prisma AI feature

# Performance metrics (/docs/optimize/performance-metrics)

An Optimize recording session provides detailed insights into the latencies of executed queries, capturing key metrics such as average duration, 50th percentile, 99th percentile, and maximal query execution time.

Total query durations \[#total-query-durations]

Prisma Optimize measures total latency for query patterns, enabling you to analyze and debug slow queries effectively.

Average query duration (AVG) \[#average-query-duration-avg]

The average query duration reveals the mean execution time across all queries, helping you assess overall performance trends and identify inefficiencies that impact the user experience.

50th percentile (P50) \[#50th-percentile-p50]

The 50th percentile, or median, query duration indicates the time within which half of your queries complete. This metric offers a clear view of typical user performance, unaffected by outliers.

99th percentile (P99) \[#99th-percentile-p99]

The 99th percentile query duration highlights the execution time for the slowest 1% of queries. This metric is crucial for uncovering and addressing performance bottlenecks that, while infrequent, can significantly impact user satisfaction.

Maximal query duration (MAX) \[#maximal-query-duration-max]

The maximal query duration measures the time taken by the single slowest query. This metric helps identify extreme cases, providing insights into the worst performance scenarios your system might face, so you can diagnose and resolve outliers.

# Prisma AI (/docs/optimize/prisma-ai)

Prisma AI enables you to ask follow-up questions on a provided [recommendation](/optimize/recommendations) for additional clarity.

Using Prisma AI \[#using-prisma-ai]

To interact with Prisma AI:

1. Select a recommendation from an Optimize [recording](/optimize/recordings)
2. Click the **Ask AI** button

Prisma AI helps you gain deeper insights into a recommendation and learn how to apply it effectively to your Prisma model.
