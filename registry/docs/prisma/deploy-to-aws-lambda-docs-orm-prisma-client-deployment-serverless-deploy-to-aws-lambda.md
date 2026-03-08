# Deploy to AWS Lambda (/docs/orm/prisma-client/deployment/serverless/deploy-to-aws-lambda)

```
Quick summary



This guide explains how to avoid common issues when deploying a project using Prisma ORM to [AWS Lambda](https://aws.amazon.com/lambda/).





Questions answered in this page
```

- How to deploy Prisma to AWS Lambda?
- Which binaryTargets should I configure?
- How to handle connection pooling on Lambda?

While a deployment framework is not required to deploy to AWS Lambda, this guide covers deploying with:

- [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam/) is an open-source framework from AWS that can be used in the creation of serverless applications. AWS SAM includes the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-reference.html#serverless-sam-cli), which you can use to build, test, and deploy your application.

- [Serverless Framework](https://www.serverless.com/framework) provides a CLI that helps with workflow automation and AWS resource provisioning. While Prisma ORM works well with the Serverless Framework "out of the box", there are a few improvements that can be made within your project to ensure a smooth deployment and performance. There is also additional configuration that is needed if you are using the [`serverless-webpack`](https://www.npmjs.com/package/serverless-webpack) or [`serverless-bundle`](https://www.npmjs.com/package/serverless-bundle) libraries.

- [SST](https://sst.dev/) provides tools that make it easy for developers to define, test, debug, and deploy their applications. Prisma ORM works well with SST but must be configured so that your schema is correctly packaged by SST.

General considerations when deploying to AWS Lambda \[#general-considerations-when-deploying-to-aws-lambda]

This section covers changes you will need to make to your application, regardless of framework. After following these steps, follow the steps for your framework.

- [Deploying with AWS SAM](#deploying-with-aws-sam)
- [Deploying with the Serverless Framework](#deploying-with-the-serverless-framework)
- [Deploying with SST](#deploying-with-sst)

Connection pooling \[#connection-pooling]

In a Function as a Service (FaaS) environment, each function invocation typically creates a new database connection. Unlike a continuously running Node.js server, these connections aren't maintained between executions. For better performance in serverless environments, implement connection pooling to reuse existing database connections rather than creating new ones for each function call.

You can use [Prisma Postgres](/postgres), which has built-in connection pooling, to solve this issue. For other solutions, see the [connection management guide for serverless environments](/orm/prisma-client/setup-and-configuration/databases-connections#serverless-environments-faas).

Deploying with AWS SAM \[#deploying-with-aws-sam]

Loading environment variables \[#loading-environment-variables]

AWS SAM does not directly support loading values from a `.env` file. You will have to use one of AWS's services to store and retrieve these parameters. [This guide](https://medium.com/bip-xtech/a-practical-guide-to-surviving-aws-sam-d8ab141b3d25) provides a great overview of your options and how to store and retrieve values in Parameters, SSM, Secrets Manager, and more.

Deploying with the Serverless Framework \[#deploying-with-the-serverless-framework]

Loading environment variables via a .env file \[#loading-environment-variables-via-a-env-file]

Your functions will need the `DATABASE_URL` environment variable to access the database. The `serverless-dotenv-plugin` will allow you to use your `.env` file in your deployments.

First, make sure that the plugin is installed:

````
  npm



  pnpm



  yarn



  bun




```bash
npm install -D serverless-dotenv-plugin
```



```bash
pnpm add -D serverless-dotenv-plugin
```



```bash
yarn add --dev serverless-dotenv-plugin
```



```bash
bun add --dev serverless-dotenv-plugin
```
````

Then, add `serverless-dotenv-plugin` to your list of plugins in `serverless.yml`:

```yaml title="serverless.yml"
plugins:
  - serverless-dotenv-plugin
```

The environment variables in your `.env` file will now be automatically loaded on package or deployment.

```bash
serverless package
```

```bash
Running "serverless" from node_modules
DOTENV: Loading environment variables from .env:
         - DATABASE_URL

Packaging deployment-example-sls for stage dev (us-east-1)
.
```

Deploying with SST \[#deploying-with-sst]

Working with environment variables \[#working-with-environment-variables]

While SST supports `.env` files, [it is not recommended](https://v2.sst.dev/config#should-i-use-configsecret-or-env-for-secrets). SST recommends using `Config` to access these environment variables in a secure way.

The SST guide [available here](https://v2.sst.dev/config#overview) is a step-by-step guide to get started with `Config`. Assuming you have created a new secret called `DATABASE_URL` and have [bound that secret to your app](https://v2.sst.dev/config#bind-the-config), you can set up `PrismaClient` with the following:

```ts title="prisma.ts" showLineNumbers
import { PrismaClient } from "./generated/client";
import { Config } from "sst/node/config";
import { PrismaPg } from "@prisma/adapter-pg";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const adapter = new PrismaPg({ connectionString });

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
```

# Deploy to Azure Functions (/docs/orm/prisma-client/deployment/serverless/deploy-to-azure-functions)

This guide explains how to avoid common issues when deploying a Node.js-based function app to Azure using [Azure Functions](https://azure.microsoft.com/en-us/products/functions/).

Azure Functions is a serverless deployment platform. You do not need to maintain infrastructure to deploy your code. With Azure Functions, the fundamental building block is the [function app](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference?tabs=blob\&pivots=programming-language-typescript). A function app provides an execution context in Azure in which your functions run. It is comprised of one or more individual functions that Azure manages, deploys, and scales together. You can organize and collectively manage multiple functions as a single logical unit.

Prerequisites \[#prerequisites]

- An existing function app project with Prisma ORM

Things to know \[#things-to-know]

While Prisma ORM works well with Azure functions, there are a few things to take note of before deploying your application.

Connection pooling \[#connection-pooling]

Generally, when you use a FaaS (Function as a Service) environment to interact with a database, every function invocation can result in a new connection to the database. This is not a problem with a constantly running Node.js server. Therefore, it is beneficial to pool DB connections to get better performance. To solve this issue, you can use [Prisma Postgres](/postgres). For other solutions, see the [connection management guide for serverless environments](/orm/prisma-client/setup-and-configuration/databases-connections#serverless-environments-faas).

Summary \[#summary]

For more insight into Prisma Client's API, explore the function handlers and check out the [Prisma Client API Reference](/orm/reference/prisma-client-reference)
