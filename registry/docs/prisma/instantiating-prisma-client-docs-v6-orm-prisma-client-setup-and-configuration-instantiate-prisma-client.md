# Instantiating Prisma Client (/docs/v6/orm/prisma-client/setup-and-configuration/instantiate-prisma-client)

The following example demonstrates how to import and instantiate your [generated client](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client) from the [default path](/v6/orm/prisma-client/setup-and-configuration/generating-prisma-client#using-a-custom-output-path):

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
    import { PrismaClient } from "../prisma/generated/client";

````
const prisma = new PrismaClient();
```
````

  </CodeBlockTab>

  <CodeBlockTab value="JavaScript">
    ```js
    const { PrismaClient } = require("../prisma/generated/client");

````
const prisma = new PrismaClient();
```
````

  </CodeBlockTab>
</CodeBlockTabs>

<CalloutContainer type="info">
  <CalloutDescription>
    You can further customize `PrismaClient` with [constructor parameters](/v6/orm/reference/prisma-client-reference#prismaclient) — for example, set [logging levels](/v6/orm/prisma-client/observability-and-logging/logging), [transaction options](/v6/orm/prisma-client/queries/transactions#transaction-options) or customize [error formatting](/v6/orm/prisma-client/setup-and-configuration/error-formatting).
  </CalloutDescription>
</CalloutContainer>

The number of PrismaClient instances matters \[#the-number-of-prismaclient-instances-matters]

Your application should generally only create **one instance** of `PrismaClient`. How to achieve this depends on whether you are using Prisma ORM in a [long-running application](/v6/orm/prisma-client/setup-and-configuration/databases-connections#prismaclient-in-long-running-applications) or in a [serverless environment](/v6/orm/prisma-client/setup-and-configuration/databases-connections#prismaclient-in-serverless-environments) .

The reason for this is that each instance of `PrismaClient` manages a connection pool, which means that a large number of clients can **exhaust the database connection limit**. This applies to all database connectors.

If you use the **MongoDB connector**, connections are managed by the MongoDB driver connection pool. If you use a **relational database connector**, connections are managed by Prisma ORM's [connection pool](/v6/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool). Each instance of `PrismaClient` creates its own pool.

1. Each client creates its own instance of the [query engine](/v6/orm/more/internals/engines).

2. Each query engine creates a [connection pool](/v6/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool) with a default pool size of:
   - `num_physical_cpus * 2 + 1` for relational databases
   - [`100` for MongoDB](https://www.mongodb.com/docs/manual/reference/connection-string-options/#mongodb-urioption-urioption.maxPoolSize)

3. Too many connections may start to **slow down your database** and eventually lead to errors such as:

   ```
   Error in connector: Error querying the database: db error: FATAL: sorry, too many clients already
       at PrismaClientFetcher.request
   ```
