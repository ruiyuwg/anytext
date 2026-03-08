# Getting Started (/docs/management-api/getting-started)

This guide walks you through setting up a basic TypeScript project that uses the Management API to create a new Prisma Console project with a Prisma Postgres database, and print out all connection details.

You'll authenticate via a service token, set up your environment, and run a script to interact with the API.

Prerequisites \[#prerequisites]

- Node.js and `npm` installed
- A [Prisma Data Platform](https://console.prisma.io/) account

1. Create a service token in Prisma Console \[#1-create-a-service-token-in-prisma-console]

First, you need to create a service token to be able to access the Management API:

1. Open the [Prisma Console](https://console.prisma.io/)

2. Navigate to the **Settings** page of your workspace and select **Service Tokens**

3. Click **New Service Token**

4. Copy and save the generated service token securely, you'll use it in step 2.2.

5. Set up your project directory \[#2-set-up-your-project-directory]

2.1. Create a basic TypeScript project \[#21-create-a-basic-typescript-project]

Open your terminal and run the following commands:

```bash
mkdir management-api-demo
cd management-api-demo
```

Next, initialize npm and install dependencies required for using TypeScript:

````
  npm



  pnpm



  yarn



  bun




```bash
npm init -y
npm install tsx typescript @types/node --save-dev
touch index.ts
```



```bash
pnpm init -y
pnpm add tsx typescript @types/node --save-dev
touch index.ts
```



```bash
yarn init -y
yarn add tsx typescript @types/node --dev
touch index.ts
```



```bash
bun init -y
bun add tsx typescript @types/node --dev
touch index.ts
```
````

You now have an `index.ts` file that you can execute with `npx tsx index.ts`. It's still empty, you'll start writing code in step 3.

2.2. Configure service token environment variable \[#22-configure-service-token-environment-variable]

Create your `.env` file:

```bash
touch .env
```

Next, install the [`dotenv`](https://github.com/motdotla/dotenv) library for loading environment variables from the `.env` file:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install dotenv
```



```bash
pnpm add dotenv
```



```bash
yarn add dotenv
```



```bash
bun add dotenv
```
````

Finally, add your service token (from step 1.) to `.env`:

```bash
PRISMA_SERVICE_TOKEN="ey..."
```

2.3. Install the axios library for HTTP request \[#23-install-the-axios-library-for-http-request]

You're going to use [`axios`](https://github.com/axios/axios/tree/main) as your HTTP client to interact with the Management API. Install it as follows:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install axios
```



```bash
pnpm add axios
```



```bash
yarn add axios
```



```bash
bun add axios
```
````

You're all set, let's write some code to create a project and provision a Prisma Postgres database!

3. Programmatically create a new project with a database \[#3-programmatically-create-a-new-project-with-a-database]

Paste the following code into `index.ts`:

```ts
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const API_URL = "https://api.prisma.io/v1";
const SERVICE_TOKEN = process.env.PRISMA_SERVICE_TOKEN;

if (!SERVICE_TOKEN) {
  throw new Error("PRISMA_SERVICE_TOKEN is not set in the environment");
}

// Set HTTP headers to be used in this script
const headers = {
  Authorization: `Bearer ${SERVICE_TOKEN}`,
  "Content-Type": "application/json",
};

async function main() {
  // Create a new project in your Prisma Console workspace
  const projectName = `demo-project-${Date.now()}`;
  const region = "us-east-1";
  const createProjectRes = await axios.post(
    `${API_URL}/projects`,
    { name: projectName, region },
    { headers },
  );
  const project = createProjectRes.data;
  console.log("Created project: \n", project);

  // Log the database details
  const apiKeys = project.databases[0].apiKeys || [];
  for (const key of apiKeys) {
    console.log(`\nDatabase details`);
    console.log(`- ID: ${key.id}`);
    console.log(`- Created at: ${key.createdAt}`);
    console.log(`- API key: ${key.apiKey}`);
    console.log(`- Prisma Postgres connection string: ${key.connectionString}`);

    if (key.ppgDirectConnection) {
      console.log(`- Direct TCP connection: ${key.ppgDirectConnection.host}`);
      console.log(`  - Host: ${key.ppgDirectConnection.host}`);
      console.log(`  - Username: ${key.ppgDirectConnection.user}`);
      console.log(`  - Password: ${key.ppgDirectConnection.pass}`);
    }
  }
}

main().catch((e) => {
  console.error(e.response?.data || e);
  process.exit(1);
});
```

You can run your script with the following command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx tsx index.ts
```



```bash
pnpm dlx tsx index.ts
```



```bash
yarn dlx tsx index.ts
```



```bash
bunx --bun tsx index.ts
```
````

```text no-copy
Created project:
 {
  createdAt: '2025-07-09T11:52:15.341Z',
  id: 'cmcvwftgs00v5zq0vh3kp7pms',
  name: 'demo-project-1752061932800',
  databases: [
    {
      createdAt: '2025-07-09T11:52:15.341Z',
      id: 'cmcvwftgs00v1zq0v0qrtrg8t',
      name: 'demo-project-1752061932800',
      connectionString: 'prisma+postgres://accelerate.prisma-data.net/?api_key=<api_key>',
      region: 'us-east-1',
      status: 'ready',
      apiKeys: [Array],
      isDefault: true
    }
  ]
}

Database details
- ID: cmcvwftgs00v2zq0vj3v0104j
- Created at: 2025-07-09T11:52:15.341Z
- API key: ey...<actual_api_key>
- Prisma Postgres connection string: prisma+postgres://accelerate.prisma-data.net/?api_key=ey...<actual_api_key>
- Direct TCP connection: db.prisma.io:5432
  - Host: db.prisma.io:5432
  - Username: <username>
  - Password: <password>
```

Your output of the command should look similar to the output above.

Conclusion \[#conclusion]

You have now set up a TypeScript project that interacts with the Management API, creates a new project and database, and prints out all connection strings. You can extend this script to manage more resources or automate other tasks using the Management API.

# Management API (/docs/management-api)

Base URL \[#base-url]

```
https://api.prisma.io/v1
```

Append an endpoint path to construct the full URL. For example: `https://api.prisma.io/v1/projects/{projectId}`

An interactive [OpenAPI 3.1 specification](https://api.prisma.io/v1/swagger-editor) is available for exploring endpoints and request/response formats.

Getting Started \[#getting-started]

- **[Getting Started](/management-api/getting-started)** - Create your first project and database
- **[Authentication](/management-api/authentication)** - OAuth 2.0 and service tokens setup
- **[SDK](/management-api/sdk)** - TypeScript SDK with built-in OAuth and automatic token refresh
- **[Using API Clients](/management-api/api-clients)** - Use with Postman, Insomnia, and Yaak
- **[Partner Integration](/management-api/partner-integration)** - Build integrations that provision and transfer databases
