# Vercel (/docs/v6/postgres/integrations/vercel)

The [Vercel Marketplace integration for Prisma Postgres](https://www.vercel.com/marketplace/prisma) connects your Vercel projects with Prisma Postgres instances. Once connected, the integration will automatically set the following environment variable on your deployed Vercel app:

- `DATABASE_URL`: The [direct TCP connection URL](/v6/postgres/database/direct-connections) starting with `postgres://...`

These enable you to connect to the Prisma Postgres instances via any ORM or database library you want to use (Prisma ORM, Drizzle, Kysely, ...).

Features \[#features]

- Create and use Prisma Postgres instances without leaving the Vercel dashboard.
- Automatic generation of Prisma Postgres URLs for production and preview environments.
- Simplified environment configuration for your Vercel project.
- Billing workflows to up-/ and downgrade your Prisma Postgres pricing plan.
- Ready-to-deploy fullstack templates for Next.js, Nuxt, SvelteKit and with various ORMs and DB libraries.

Templates \[#templates]

The easiest way to use Prisma Postgres on the Vercel Marketplace is via one of the templates:

- [Prisma ORM + NextAuth Starter](https://vercel.com/templates/next.js/prisma-postgres)
- [Postgres + Kysely Next.js Starter](https://vercel.com/templates/next.js/postgres-kysely)
- [Postgres + Drizzle Next.js Starter](https://vercel.com/templates/next.js/postgres-drizzle)
- [Postgres + SvelteKit Starter](https://vercel.com/templates/svelte/postgres-sveltekit)

Usage \[#usage]

Install the extension \[#install-the-extension]

To install the extension, click **Install** at the top of the [Prisma Postgres integration page](https://www.vercel.com/marketplace/prisma).

The integration will now show up on your list of integrations, e.g. `https://vercel.com/<VERCEL-TEAM>/~/integrations`.

Create a new database \[#create-a-new-database]

Once installed, you can navigate to the **Storage** tab and click **Create Database**.

Select **Prisma Postgres** and click **Continue**. Then select the **Region** for the database and a **Pricing Plan**, and click **Continue** again.

Finally, give the database a **Name** and click **Create**.

The database is now ready and can be connected to your Vercel projects.

Connect database to Vercel project \[#connect-database-to-vercel-project]

In your Vercel project, you can now click the **Storage** tab, select the database you just created and then click **Connect**. This will automatically set the `DATABASE_URL` environment variable in that project and enable your application to access your newly created Prisma Postgres instance.

Viewing and editing data in Prisma Studio \[#viewing-and-editing-data-in-prisma-studio]

To view and edit the data in your Prisma Postgres instance, you can use the local version of [Prisma Studio](/v6/orm/tools/prisma-studio).

In the local version of your project where you have your `DATABASE_URL` set, run the following command to open Prisma Studio:

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
    npx prisma studio
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx prisma studio
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx prisma studio
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun prisma studio
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Additional considerations when using with Prisma ORM \[#additional-considerations-when-using-with-prisma-orm]

Ensure your project uses the correct environment variable \[#ensure-your-project-uses-the-correct-environment-variable]

Ensure that the data source in your `prisma.config.ts` file is configured to use the `DATABASE_URL` environment variable:

```ts
import "dotenv/config";
import { defineConfig, env } from "@prisma/config";
export default defineConfig({
  datasource: {
    url: env("DATABASE_URL"),
  },
  schema: "./prisma/schema.prisma",
});
```

Generate Prisma Client in a postinstall script in package.json \[#generate-prisma-client-in-a-postinstall-script-in-packagejson]

To ensure the generated Prisma Client library is available on your deployed Vercel project, you should add a `postinstall` script to the `scripts` section of your `package.json` file:

```js title="package.json"
{
  // ...
  "scripts": {
    // ...
    "postinstall": "prisma generate" // [!code ++]
  }
  //
}
```
