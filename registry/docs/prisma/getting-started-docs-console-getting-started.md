# Getting Started (/docs/console/getting-started)

This guide walks you through setting up your Console account and creating your first project.

Prerequisites \[#prerequisites]

- A GitHub account (for authentication)
- A Prisma project (optional, but recommended)

Step 1: Create your account \[#step-1-create-your-account]

1. Go to [console.prisma.io/login](https://console.prisma.io/login)
2. Click **Sign in with GitHub**
3. Authorize Prisma Console to access your GitHub account

You now have a Console account with a default workspace.

Step 2: Set up a workspace \[#step-2-set-up-a-workspace]

When you create an account, a default workspace is automatically created for you. You can create additional workspaces for different teams or organizations.

Create a workspace (optional) \[#create-a-workspace-optional]

To create an additional workspace:

1. Click the workspace dropdown in the top navigation
2. Click **Create Workspace**
3. Enter a name for your workspace
4. Click **Create**

Using the CLI \[#using-the-cli]

List all workspaces:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform workspace show --early-access
```



```bash
pnpm dlx prisma platform workspace show --early-access
```



```bash
yarn dlx prisma platform workspace show --early-access
```



```bash
bunx --bun prisma platform workspace show --early-access
```
````

Step 3: Create a project \[#step-3-create-a-project]

Projects organize your databases and environments within a workspace.

Using the Console web interface \[#using-the-console-web-interface]

1. Navigate to your workspace
2. Click **Create Project**
3. Enter a project name
4. Click **Create**

Using the CLI \[#using-the-cli-1]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
pnpm dlx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
yarn dlx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
bunx --bun prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```
````

Step 4: Create a resource \[#step-4-create-a-resource]

Resources are the actual databases or environments within your project.

For Prisma Postgres \[#for-prisma-postgres]

1. Navigate to your project
2. Click **Create Database**
3. Enter a database name
4. Select a region
5. Click **Create**

For Accelerate \[#for-accelerate]

1. Navigate to your project
2. Click **Create Environment**
3. Enter an environment name (e.g., "production")
4. Click **Create**

Using the CLI \[#using-the-cli-2]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
pnpm dlx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
yarn dlx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
bunx --bun prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```
````

Step 5: Generate a connection string \[#step-5-generate-a-connection-string]

Connection strings authenticate your application's requests to Prisma products.

Using the Console web interface \[#using-the-console-web-interface-1]

1. Navigate to your resource (database or environment)
2. Click **Connection Strings** tab
3. Click **Create Connection String**
4. Enter a name for the connection string
5. Copy the connection string and store it securely
6. Click **Done**

Using the CLI \[#using-the-cli-3]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
pnpm dlx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
yarn dlx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
bunx --bun prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```
````

Step 6: Use the connection string in your application \[#step-6-use-the-connection-string-in-your-application]

Add the connection string to your `.env` file:

```bash
# For Accelerate
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"

# For Optimize
OPTIMIZE_API_KEY="YOUR_API_KEY"
```

Next steps \[#next-steps]

- Learn more about [Console concepts](/console/concepts)
- Explore [database metrics](/console/features/metrics)
- Check out the [CLI reference](/cli/console)

# Console (/docs/console)

Overview \[#overview]

The [Console](https://console.prisma.io/login) enables you to manage and configure your projects that use Prisma products, and helps you integrate them into your application:

- [Query Insights](/query-insights): Inspect slow queries, connect Prisma calls to SQL, and apply focused fixes.
- [Prisma Postgres](/postgres): A managed PostgreSQL database that is optimized for Prisma ORM.

Getting started \[#getting-started]

To start using Prisma products, you'll need to:

1. Create a Console account
2. Set up a workspace for your team
3. Create a project for your application
4. Generate connection strings for your resources

Learn more in the [Getting Started](/console/getting-started) guide.

Core concepts \[#core-concepts]

The Console is organized around four main concepts:

- **[User account](/console/concepts#user-account)**: Your personal account to manage workspaces and projects
- **[Workspaces](/console/concepts#workspace)**: Team-level container where billing is managed
- **[Projects](/console/concepts#project)**: Application-level container within a workspace
- **[Resources](/console/concepts#resources)**: Actual services or databases within a project (databases for Prisma Postgres)

Read more about [Console concepts](/console/concepts).

Console CLI \[#console-cli]

In addition to the web interface, the Prisma CLI provides another way to interact with your Console account and manage Prisma products. This can be useful for programmatic access, such as integrating into CI workflows.

Learn more about the [Console CLI commands](/cli/console).

# Guides (/docs/guides)

Welcome to the Guides section! Here you'll find practical, step-by-step guides to help you accomplish specific tasks with Prisma products, including Prisma ORM, Prisma Accelerate, Prisma Postgres, and more.

Browse through our guides using the sidebar navigation or use the search to find specific topics.

Getting started \[#getting-started]

- [Next.js](/guides/frameworks/nextjs) - Learn how to use Prisma ORM in a Next.js app and deploy it to Vercel
- [Hono](/guides/frameworks/hono) - Learn how to use Prisma ORM in a Hono app
- [SvelteKit](/guides/frameworks/sveltekit) - Learn how to use Prisma ORM in a SvelteKit app
