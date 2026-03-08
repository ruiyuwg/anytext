# Fly.io (/docs/v6/postgres/integrations/flyio)

[Fly.io](https://fly.io/) is a cloud application platform that lets you deploy full-stack applications globally. This guide shows you how to deploy a Node.js application using Prisma Postgres to Fly.io.

Prerequisites \[#prerequisites]

- A [Fly.io account](https://fly.io/docs/getting-started/launch/)
- The [Fly CLI](https://fly.io/docs/flyctl/install/) installed
- An existing application using [Prisma Postgres](/v6/postgres) (see [Quickstart](/v6/prisma-postgres/quickstart/prisma-orm))

Deploy your application \[#deploy-your-application]

1. Generate Prisma Client in postinstall \[#1-generate-prisma-client-in-postinstall]

Ensure your `package.json` includes a `postinstall` script to generate Prisma Client during deployment:

```json title="package.json"
{
  // ...
  "scripts": {
    // ...
    "postinstall": "prisma generate" // [!code ++]
  }
}
```

2. Launch your app with Fly.io \[#2-launch-your-app-with-flyio]

From your project directory, run:

```bash
fly launch
```

Follow the prompts to configure your application. Fly.io will auto-detect your Node.js application and create the necessary configuration.

3. Set your database connection string \[#3-set-your-database-connection-string]

Add your Prisma Postgres `DATABASE_URL` as a secret in Fly.io:

```bash
fly secrets set DATABASE_URL="your-prisma-postgres-connection-string"
```

<CalloutContainer type="info">
  <CalloutDescription>
    You can find your `DATABASE_URL` in your `.env` file or in the [Prisma Console](https://console.prisma.io).
  </CalloutDescription>
</CalloutContainer>

4. Deploy \[#4-deploy]

If not already deployed during `fly launch`, deploy your application:

```bash
fly deploy
```

Once the deployment completes, you'll see a success message with your app's URL:

```
🎉  SUCCESS! Your app is live and ready to use!  🎉

Visit: https://your-app-name.fly.dev/
```

<CalloutContainer type="info">
  <CalloutDescription>
    In the Fly.io dashboard, your app's status may show as "Pending" initially. It typically transitions to "Deployed" within a few minutes.
  </CalloutDescription>
</CalloutContainer>

Additional considerations \[#additional-considerations]

Ensure your project uses the correct environment variable \[#ensure-your-project-uses-the-correct-environment-variable]

Ensure that the data source in your `prisma.config.ts` file is configured to use the `DATABASE_URL` environment variable:

```ts title="prisma.config.ts"
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  datasource: {
    url: env("DATABASE_URL"),
  },
  schema: "./prisma/schema.prisma",
});
```

Running migrations in production \[#running-migrations-in-production]

To run migrations on your deployed Fly.io app, you can use:

```bash
fly ssh console -C "npx prisma migrate deploy"
```

Or add a release command to your `fly.toml`:

```toml title="fly.toml"
[deploy]
  release_command = "npx prisma migrate deploy"
```

Scaling and regions \[#scaling-and-regions]

Fly.io lets you scale and place your application in [multiple regions](https://fly.io/docs/reference/regions/). For optimal performance, deploy your app in a region close to your Prisma Postgres database region.

```bash
fly scale count 2 --region iad
```

Troubleshooting \[#troubleshooting]

Prisma schema not found or Client not generated correctly \[#prisma-schema-not-found-or-client-not-generated-correctly]

If you're using a custom Dockerfile and your build fails because the Prisma Client cannot be found, it's likely due to one of two reasons:

1. **Order of operations**: `npm install` (which runs `postinstall`) runs before the schema is copied.
2. **Incorrect copy path**: The schema is copied to the root instead of the `prisma` folder.

**Solution:** In your Dockerfile, copy the `prisma/` directory to `./prisma` **before** running `npm install`:

```dockerfile
# ❌ Wrong order or path
COPY package*.json ./
COPY prisma .                   # Copies contents to root (wrong structure)
RUN npm install                 # postinstall runs but might fail or generate in wrong place

# ✅ Correct order and path
COPY package*.json ./
COPY prisma ./prisma            # Copies to ./prisma folder (preserves structure)
RUN npm install                 # postinstall finds schema in expected location
COPY . .
```

More information \[#more-information]

- [Fly.io Node.js documentation](https://fly.io/docs/languages-and-frameworks/node/)
- [Fly.io Prisma documentation](https://fly.io/docs/js/prisma/)
- [Prisma Postgres documentation](/v6/postgres)

# Firebase Studio (/docs/v6/postgres/integrations/idx)

If you want to explore Prisma Postgres without leaving your browser, you can try it out the via Google's [Firebase Studio](https://studio.firebase.google.com/), a fully-fledged online IDE:

1. Open the [**Prisma**](https://pris.ly/idx-starter) template.
2. Select **Prisma Postgres** as your database.
3. Give a **Name** to your workspace and click the **Create** button.
4. Wait until the Firebase Studio workspace has initialized and then follow the instructions in the README.

# Tools & Integrations (/docs/v6/postgres/integrations)

Learn how Prisma Postgres works with popular 3rd-party platforms such as Vercel, Netlify, and Firebase Studio.

Getting started \[#getting-started]

- [Vercel](/v6/postgres/integrations/vercel) - Create databases via the Vercel Marketplace and deploy your applications
- [Netlify](/v6/postgres/integrations/netlify) - Create databases via the official Netlify extension
- [VS Code](/v6/postgres/integrations/vscode) - Management UI for Prisma Postgres and superpowers for Copilot agent mode
