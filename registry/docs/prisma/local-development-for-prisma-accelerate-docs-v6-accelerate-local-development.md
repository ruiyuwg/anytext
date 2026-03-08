# Local development for Prisma Accelerate (/docs/v6/accelerate/local-development)

Prisma Accelerate efficiently scales production traffic with integrated connection pooling and a global database cache.

In development environments, you may want to use a local database to minimize expenses. Furthermore, you may consider extending Prisma Client with the Accelerate client extension once so that you can use a local database in development and a hosted database with Accelerate’s connection pooling and caching enabled. This eliminates the need for conditional logic to switch clients between development and production.

This guide will explain how to use Prisma Accelerate client extension in a development environment with a local database.

Using Prisma Accelerate client extension in development and production \[#using-prisma-accelerate-client-extension-in-development-and-production]

Accelerate does not work with a local database. However, in a development environment, you can still use Prisma Client with the Accelerate client extension. This setup will not provide Accelerate's connection pooling and caching features.

The following steps outline how to use Prisma ORM and Prisma Accelerate with a local PostgreSQL database.

1. Update the `DATABASE_URL` environment variable with your local database's connection string:

   ```bash
   DATABASE_URL="postgres://username:password@127.0.0.1:5432/localdb"
   ```

2. Generate a Prisma Client:

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
   ````

   > Note: The `--no-engine` flag should only be used in preview and production environments. The command generates Prisma Client artifacts without a [Query Engine](/v6/orm/more/internals/engines) file, which requires an Accelerate connection string.

3. Set up Prisma Client with the Accelerate client extension:

   ```typescript
   import { PrismaClient } from "@prisma/client";
   import { withAccelerate } from "@prisma/extension-accelerate";

   const prisma = new PrismaClient().$extends(withAccelerate());
   ```

   > The extended instance of Prisma Client will use the local database. Hence, Prisma Accelerate will not be used in your development environment to respond to your Prisma Client queries.

If an Accelerate connection string is used as the `DATABASE_URL` environment variable, Prisma Client will route your queries through Accelerate.

Using Prisma Accelerate locally in an edge function \[#using-prisma-accelerate-locally-in-an-edge-function]

When using an edge function, e.g., [Vercel's edge runtime](https://vercel.com/docs/functions/runtimes/edge-runtime), for your development environment, update your Prisma Client import as follows:

```typescript
import { PrismaClient } from "@prisma/client/edge";
```

Generally, edge function environments lack native support for existing APIs enabling TCP-based database connections. Prisma Accelerate provides a connection string that allows querying your database over HTTP, a protocol supported in all edge runtimes.

# Static IP (/docs/v6/accelerate/static-ip)

You can enable static IP for Accelerate when your security setup requires IP allowlisting or if you're implementing firewalls that only permit access from trusted IPs, ensuring controlled and secure database connections.

```
To enable static IP support for Accelerate within an existing or a new project environment, your workspace will need to be on our Pro or Business plans. Take a look at the [pricing page](https://www.prisma.io/pricing#accelerate) for more information.
```

Enable static IP in Accelerate \[#enable-static-ip-in-accelerate]

You can opt-in to use static IP for Accelerate in the [Platform Console](https://pris.ly/pdp) in two ways:

1. When enabling Accelerate for your project environment: \[#1-when-enabling-accelerate-for-your-project-environment]

2. Specify your database connection string and connection pool region.

3. Enable static IP by toggling the **Static IP** switch in the **Network restrictions** section.

4. Click on the **Enable Accelerate** button.

5. For projects already using Accelerate: \[#2-for-projects-already-using-accelerate]

6. Navigate to the Accelerate **Settings** tab in the project environment.

7. Enable static IP by toggling the **Static IP** switch in the **Network restrictions** section.

Enabling static IP for Accelerate will provide you with a list of static IPv4 and IPv6 addresses.

Once you have these addresses, configure your database firewall to allow incoming connections only from these IPs and any other trusted IPs that need access to your database.

```
Since you cannot enable static IP for an existing Accelerate-enabled environment, we recommend opting for static IP when enabling Accelerate in a new environment. Use the same database URL as your existing Accelerate environment to instantly access static IP support for Accelerate.
```
