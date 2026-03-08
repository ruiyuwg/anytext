# Next.js (/docs/orm/more/troubleshooting/nextjs)

Prisma ORM and Next.js form a powerful combination for building modern web applications. This guide covers best practices, common issues, and solutions.

Best practices for using Prisma Client in development \[#best-practices-for-using-prisma-client-in-development]

Avoid multiple Prisma Client instances \[#avoid-multiple-prisma-client-instances]

When developing a Next.js application, one common issue is accidentally creating multiple instances of the Prisma Client. This often occurs due to Next.js's hot-reloading feature in development.

Why this happens \[#why-this-happens]

Next.js's hot-reloading feature reloads modules frequently to reflect code changes instantly. However, this can lead to multiple instances of Prisma Client being created, which consumes resources and might cause unexpected behavior.

Recommended solution \[#recommended-solution]

To avoid this, create a single Prisma Client instance by using a global variable:

```typescript
// lib/prisma.ts
import { PrismaClient } from "../prisma/generated/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Using this approach ensures that only one instance of Prisma Client exists, even during hot-reloading in development.

Setting Up Prisma ORM in a Monorepo \[#setting-up-prisma-orm-in-a-monorepo]

Challenges of using Prisma ORM in monorepos \[#challenges-of-using-prisma-orm-in-monorepos]

Monorepos allow multiple projects to share code and dependencies, making them a popular choice for modern development. However, using Prisma ORM in a monorepo can present challenges related to dependency resolution and schema management.

Key issues \[#key-issues]

1. **Dependency Resolution**: Multiple packages in a monorepo might lead to conflicts if they use different version of Prisma ORM.
2. **Schema Centralization**: Managing a single Prisma Schema across multiple projects can be complex.

Best practices for monorepo integration \[#best-practices-for-monorepo-integration]

- **Centralize the Prisma Schema**: Place the `schema.prisma` file in a shared package, such as `@myorg/db`, to ensure consistency.
- **Use a custom output directory for generated client**: Define a [custom output directory](/orm/reference/prisma-schema-reference#fields-for-prisma-client-provider) for the generated Prisma Client to maintain consistency across packages.
- **Install dependencies in the root**: To prevent version conflicts, install Prisma ORM at the root of the monorepo.
- **Use NPM Scripts for Generation**:

  ```json
  {
    "scripts": {
      "prisma:generate": "prisma generate --schema=./packages/db/schema.prisma"
    }
  }
  ```

Dynamic usage of Prisma Client in Next.js \[#dynamic-usage-of-prisma-client-in-nextjs]

Handling dynamic scenarios \[#handling-dynamic-scenarios]

Dynamic use cases, such as working with tenant-specific databases, require additional consideration when using Prisma ORM with Next.js.

Problem \[#problem]

Each tenant might have its own database, necessitating the creation of separate Prisma Clients at runtime. This can be complex in Next.js due to its hybrid rendering model.

Solution \[#solution]

Use a factory function to dynamically create Prisma Clients based on tenant-specific configurations:

```typescript
// lib/prismaDynamic.ts
import { PrismaClient } from "../prisma/generated/client";

type TenantConfig = {
  databaseUrl: string;
};

export function createPrismaClient(config: TenantConfig): PrismaClient {
  return new PrismaClient({
    datasources: {
      db: {
        url: config.databaseUrl,
      },
    },
  });
}
```

Ensure that you manage the lifecycle of dynamically created Prisma Clients to avoid resource exhaustion.

Vercel build dependency caching \[#vercel-build-dependency-caching]

Problem \[#problem-1]

If you deploy an application using Prisma ORM to [Vercel](https://vercel.com/), you may run into the following error message on deployment:

```
Prisma has detected that this project was built on Vercel, which caches dependencies.
This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered.
To fix this, make sure to run the `prisma generate` command during the build process.

Learn how: https://pris.ly/d/vercel-build
```

This occurs because Vercel caches the dependencies of your project until one of those dependencies changes. Prisma ORM uses a `postinstall` hook to generate Prisma Client when dependencies are installed. Because Vercel uses cached modules, this `postinstall` hook never gets run in subsequent deployments after the initial deployment.

Solution \[#solution-1]

This issue can be solved by explicitly generating Prisma Client on every deployment. Running `prisma generate` before each deployment will ensure Prisma Client is up-to-date.

Option 1: Custom postinstall script (Recommended) \[#option-1-custom-postinstall-script-recommended]

Within the `scripts` section of your project's `package.json` file, add `prisma generate` to the `postinstall` script:

```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

Option 2: Add to build script \[#option-2-add-to-build-script]

Prepend `prisma generate` to your build command:

```json
{
  "scripts": {
    "build": "prisma generate && <actual-build-command>"
  }
}
```

Option 3: Vercel UI build settings \[#option-3-vercel-ui-build-settings]

Within your project's dashboard, go to **Settings** > **General** > **Build & Development Settings** and prepend `prisma generate` to the Build Command field.

Netlify build dependency caching \[#netlify-build-dependency-caching]

Problem \[#problem-2]

If you deploy an application using Prisma ORM to [Netlify](https://www.netlify.com/), you may encounter a similar caching error:

```
Prisma has detected that this project was built on Netlify, which caches dependencies.
This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered.
To fix this, make sure to run the `prisma generate` command during the build process.

Learn how: https://pris.ly/d/netlify-build
```

Solution \[#solution-2]

The same solutions apply as for Vercel:

Option 1: Custom postinstall script (Recommended) \[#option-1-custom-postinstall-script-recommended-1]

```json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
```

Option 2: Add to build script \[#option-2-add-to-build-script-1]

```json
{
  "scripts": {
    "build": "prisma generate && <actual-build-command>"
  }
}
```

Option 3: Netlify UI build settings \[#option-3-netlify-ui-build-settings]

Within your project's dashboard, go to **Site Settings** > **Build & deploy** > **Continuous deployment** > **Build settings** and prepend `prisma generate` to the Build command field.

# Nuxt (/docs/orm/more/troubleshooting/nuxt)

```
The `@prisma/nuxt` module is deprecated and no longer recommended. Please follow our [Nuxt guide](/guides/frameworks/nuxt) for the recommended approach to integrating Prisma ORM with your Nuxt application.
```
