# Prisma Postgres on Deno (/docs/guides/integrations/deno)

[Deno Deploy](https://deno.com/deploy) includes a feature that allows you to provision a Prisma Postgres database directly within the platform. This guide demonstrates how to integrate Prisma Postgres in a Deno Deploy project using a minimal Deno application that logs HTTP requests to the database.

By the end of this guide, you will have a deployed Deno app that writes to and reads from a Prisma Postgres database provisioned in Deno Deploy, using Prisma Client with `runtime = "deno"`.

Prerequisites \[#prerequisites]

- A [Deno Deploy](https://deno.com/deploy) account
- Deno runtime installed ([installation guide](https://docs.deno.com/runtime/#install-deno))
- [Deno extension for VS Code](https://docs.deno.com/runtime/reference/vscode/)

1. Create and set up a new Deno project \[#1-create-and-set-up-a-new-deno-project]

Create a new Deno project using the `deno init` command, which generates a basic project structure with a main entry file and configuration.

```bash
deno init prisma-postgres-deno-deploy
cd prisma-postgres-deno-deploy
```

1.1 Configure VS Code for Deno \[#11-configure-vs-code-for-deno]

To ensure VS Code recognizes this as a Deno project and provides proper TypeScript validation, you need to initialize the workspace. Without this, VS Code will show errors when using Deno-specific APIs like `Deno.serve`.

Install the [Deno extension for VS Code](https://docs.deno.com/runtime/reference/vscode/), then:

1. Select **View** > **Command Palette** *(or press `Cmd+Shift+P` on macOS or `Ctrl+Shift+P` on Windows)*
2. Run the command **Deno: Initialize Workspace Configuration**

1.2 Create a basic HTTP server \[#12-create-a-basic-http-server]

Update the `main.ts` file to create a simple HTTP server that responds with "Hello, World!", establishing the foundation for your application before adding database functionality.

```tsx title="main.ts"
function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

Deno.serve(handler);
```

You can test the server locally by running:

```bash
deno run dev
```

Visit `localhost:8000` in your browser to see the application running.

1.3 Push initial project to GitHub \[#13-push-initial-project-to-github]

To connect your project to Deno Deploy and get a database connection string, you need to have a successful deployment. Set up a GitHub repository and push your project to it.

2. Deploy the project to Deno Deploy \[#2-deploy-the-project-to-deno-deploy]

Deploy your repository to Deno Deploy. Any subsequent commits will trigger automatic redeployments. You need to deploy now, as the database string requires a successful deployment to generate.

1. Navigate to the [Deno Deploy dashboard](https://dash.deno.com/) and select **New App**
2. Configure GitHub app permissions by following GitHub's prompts
3. Choose your GitHub repository in the Deno Deploy interface
4. Click **Create App** to complete the deployment

The application will deploy automatically.

3. Provision a Prisma Postgres database \[#3-provision-a-prisma-postgres-database]

Provision a Prisma Postgres database in Deno Deploy, and link it to your application:

1. Go to the **Databases** section in the Deno Deploy dashboard
2. Select **Provision Database** and choose **Prisma Postgres**
3. Complete the database configuration and confirm provisioning
4. Click **Assign** and select your application
5. Copy the **Production connection string**
6. Add the connection string to your `.env` file:

```text
DATABASE_URL="postgresql://<username>:<password>@db.prisma.io:5432/<database_name>-production"
```

4. Configure Prisma ORM \[#4-configure-prisma-orm]

4.1 Enable environment variables \[#41-enable-environment-variables]

To access the database connection string during local development, configure Deno to load environment variables from your `.env` file using the `--env-file` flag.

Update the `dev` task in `deno.json`:

```json title="deno.json"
{
  "tasks": {
    "dev": "deno run --watch --env-file main.ts" // [!code highlight]
  }
}
```

4.2 Initialize Prisma and create schema \[#42-initialize-prisma-and-create-schema]

Install the Prisma Client, PostgreSQL adapter, and development dependencies:

````
  npm



  pnpm



  yarn



  bun




```bash
deno install npm:@prisma/client npm:@prisma/adapter-pg npm:pg npm:prisma npm:@types/pg
```



```bash
deno install npm undefined
# couldn't auto-convert command:@prisma/client npm undefined
# couldn't auto-convert command:@prisma/adapter-pg npm undefined
# couldn't auto-convert command:pg npm undefined
# couldn't auto-convert command:prisma npm undefined
# couldn't auto-convert command:@types/pg
```



```bash
deno install npm undefined
# couldn't auto-convert command:@prisma/client npm undefined
# couldn't auto-convert command:@prisma/adapter-pg npm undefined
# couldn't auto-convert command:pg npm undefined
# couldn't auto-convert command:prisma npm undefined
# couldn't auto-convert command:@types/pg
```



```bash
deno install npm 
# couldn't auto-convert command:@prisma/client npm 
# couldn't auto-convert command:@prisma/adapter-pg npm 
# couldn't auto-convert command:pg npm 
# couldn't auto-convert command:prisma npm 
# couldn't auto-convert command:@types/pg
```
````

Initialize Prisma in your project, which creates the necessary configuration files and folder structure for defining your database models.

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init
```



```bash
pnpm dlx prisma init
```



```bash
yarn dlx prisma init
```



```bash
bunx --bun prisma init
```
````

Update the Prisma schema with these changes:

1. Change the client output from `prisma-client-js` to `prisma-client`.
2. Add the Deno runtime configuration. *(This is required for Deno to run properly)*
3. Add the Log model for storing request information.

```prisma title="prisma/schema.prisma"
generator client {
  provider = "prisma-client" // [!code highlight]
  output   = "../generated/prisma"
  runtime  = "deno" // [!code ++]
}

datasource db {
  provider = "postgresql"
}

model Log { // [!code ++]
  id      Int    @id @default(autoincrement()) // [!code ++]
  level   Level // [!code ++]
  message String // [!code ++]
  meta    Json // [!code ++]
} // [!code ++]
 // [!code ++]
enum Level { // [!code ++]
  Info // [!code ++]
  Warn // [!code ++]
  Error // [!code ++]
} // [!code ++]
```

4.3 Generate and apply migrations \[#43-generate-and-apply-migrations]

Migrations create the actual database tables based on your Prisma schema. This command generates SQL migration files and executes them against your database, creating the `Log` table with the specified fields.

````
  npm



  pnpm



  yarn



  bun




```bash
deno run -A npm:prisma migrate dev --name init
deno run -A npm:prisma generate
```



```bash
deno run -A npm undefined
# couldn't auto-convert command:prisma migrate dev --name init
deno run -A npm undefined
# couldn't auto-convert command:prisma generate
```



```bash
deno run -A npm undefined
# couldn't auto-convert command:prisma migrate dev --name init
deno run -A npm undefined
# couldn't auto-convert command:prisma generate
```



```bash
deno run -A npm 
# couldn't auto-convert command:prisma migrate dev --name init
deno run -A npm 
# couldn't auto-convert command:prisma generate
```
````

5\. Update the application to use Prisma \[#5-update-the-application-to-use-prisma]

Now that the database is configured, update your application to interact with it. This implementation creates a logging system that captures every HTTP request, stores it in the database, and returns the logged entry as JSON.

```tsx title="main.ts"
import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaPg } from "npm:@prisma/adapter-pg";
import process from "node:process";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

async function handler(request: Request) {
  const url = new URL(request.url);
  if (url.pathname === "/favicon.ico") {
    return new Response(null, { status: 204 });
  }

  const log = await prisma.log.create({
    data: {
      level: "Info",
      message: `${request.method} ${request.url}`,
      meta: {
        headers: JSON.stringify(request.headers),
      },
    },
  });
  const body = JSON.stringify(log, null, 2);
  return new Response(body, {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

Deno.serve(handler);
```

Test the application locally by running:

```bash
deno run dev
```

```
It may ask you for access to your environment variables. Select **Allow** to grant access.
```

Visit `localhost:8000` in your browser to see the application running. You should see a JSON response containing the log entry:

```json
{
  "id": 1,
  "level": "Info",
  "message": "GET http://localhost:8000/",
  "meta": {
    "headers": "..."
  }
}
```

6. Deploy the application \[#6-deploy-the-application]

The build command must generate the Prisma Client code to ensure it is available in production.

6.1 Update build command in Deno Deploy \[#61-update-build-command-in-deno-deploy]

1. Go to the application in Deno Deploy and click **Settings**
2. Under **Build configuration**, hit **Edit** and add `deno run -A npm:prisma generate` to the build command
3. Click **Save**

6.2 Push changes to GitHub \[#62-push-changes-to-github]

Commit and push your changes to trigger an automatic deployment:

```bash
git add .
git commit -m "added prisma"
git push
```

Navigate back to Deno Deploy and you should see a successful build. Once deployed, click the deployment URL at the top right of the dashboard.

6.3 Verify the deployment \[#63-verify-the-deployment]

When you visit your deployed application, you should see a response that looks like this:

```json
{
  "id": 1,
  "level": "Info",
  "message": "GET https://prisma-postgres-deno-deploy.<org-name>.deno.net/",
  "meta": {
    "headers": "{}"
  }
}
```

You're done! Each time you refresh the page, a new log entry is created in your database.

Next Steps \[#next-steps]

Now that you have a working Deno app connected to a Prisma Postgres database, you can:

- **Enhance your data model** - Add relationships, validations, and indexes to your Prisma schema
- **Secure your API** - Implement authentication, rate limiting, and proper error handling
- **Improve deployment** - Set up CI/CD, monitoring, and database backups for production

More info \[#more-info]

- [Prisma ORM Documentation](/orm)
- [Deno Deploy Documentation](https://docs.deno.com/deploy)
