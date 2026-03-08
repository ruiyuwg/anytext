# API Keys (/docs/console/features/api-keys)

An API key is required to authenticate requests from your Prisma Client to products such as Prisma Accelerate and Prisma Optimize.

You can generate and manage API keys for each resource (database or environment) in your project. These keys are scoped to the specific resource they're created for, allowing for fine-grained access control.

Generating an API key \[#generating-an-api-key]

Using the Console web interface \[#using-the-console-web-interface]

1. Navigate to your workspace in the Console
2. Select the project containing your resource
3. Click on the resource (database or environment)
4. Click the **API Keys** tab
5. Click **Create API Key**
6. Enter a descriptive name for the key (e.g., "production", "staging-api")
7. Click **Create**
8. Copy the API key immediately and store it securely
9. Click **Done**

   API keys are only displayed once when created. Make sure to copy and store them securely before closing the dialog.

Using the CLI \[#using-the-cli]

Create an API key for a resource:

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

List all API keys for a resource:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
pnpm dlx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
yarn dlx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
bunx --bun prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```
````

Using API keys \[#using-api-keys]

For Accelerate \[#for-accelerate]

Add the API key to your database connection string in your `.env` file:

```bash
DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
```

For Optimize \[#for-optimize]

Add the API key to your `.env` file:

```bash
OPTIMIZE_API_KEY="YOUR_API_KEY"
```

Then configure Prisma Client:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  // Optimize will automatically use the API key from the environment
})
```

Managing API keys \[#managing-api-keys]

Viewing API keys \[#viewing-api-keys]

To view all API keys for a resource:

1. Navigate to the resource in the Console
2. Click the **API Keys** tab
3. View the list of keys with their names and creation dates

Deleting API keys \[#deleting-api-keys]

To delete an API key:

1. Navigate to the resource's API Keys tab
2. Find the key you want to delete
3. Click the **Delete** button next to the key
4. Confirm the deletion

Using the CLI:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
pnpm dlx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
yarn dlx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
bunx --bun prisma platform apikey delete --apikey $API_KEY_ID --early-access
```





Deleting an API key will immediately break any applications using that key. Make sure to update your applications with a new key before deleting the old one.
````

Best practices \[#best-practices]

- **Use descriptive names**: Name keys based on their purpose (e.g., "production-app", "staging-api", "dev-local")
- **Rotate keys regularly**: Generate new keys periodically and delete old ones
- **Never commit keys to version control**: Always use environment variables
- **Use separate keys per environment**: Create different keys for development, staging, and production
- **Delete unused keys**: Remove keys that are no longer in use to reduce security risk

# Database Metrics (/docs/console/features/metrics)

You can have a single workspace that hosts several databases. Within each database, you can view detailed reports on how your database is performing, with various metrics like:

- Average response size
- Average query duration
- Total egress
- Total operations
- Cache utilization

Databases \[#databases]

For Prisma Postgres projects, the **Database** tab in the project view lets you configure and manage your databases. This interface provides tools to monitor and maintain your database resources. The **Connections** section displays a table with the following columns:

| Column Name   | Description                                                                      |
| ------------- | -------------------------------------------------------------------------------- |
| **Hint**      | Provides the URL structure for the database in use.                              |
| **Static IP** | Indicates whether static IP is enabled for the database and associated products. |
| **Products**  | Lists the products that are enabled using the database URL.                      |
| **Action**    | Allows you to disable all active products and remove the connection.             |

# Optimize (/docs/console/features/optimize)

You can access Optimize within your [Prisma Data Platform account](https://console.prisma.io/optimize) workspace.

Accessing the Optimize dashboard \[#accessing-the-optimize-dashboard]

To access the Optimize dashboard in your desired workspace:

1. Click the **Optimize** tab on the left navigation.
2. Click the **Generate API key** button.

Generating an Optimize API key \[#generating-an-optimize-api-key]

To obtain the Optimize API key:

1. Navigate to the workspace where you want to use Optimize.
2. Ensure that Optimize is launched. If it isn't, click the **Generate API key** button.
3. In Optimize, click your profile name in the top right corner of the navbar.
4. Select **Settings**.
5. Click **Create API key**.
6. Enter a name for the API key in the **Name** field, then click **Create**.
7. Copy the API key and store it securely. This will be used in your project's [`.env` file](/optimize/getting-started) via the `"OPTIMIZE_API_KEY"`. Finally, click the **"I've stored it securely"** button.

You now have your Optimize API key.
