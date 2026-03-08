# init (/docs/cli/init)

The `prisma init` command bootstraps a fresh Prisma project within the current directory.

Usage \[#usage]

```bash
prisma init [options]
```

The command creates a `prisma` directory containing a `schema.prisma` file. By default, the project is configured for [local Prisma Postgres](/postgres/database/local-development), but you can choose a different database using the `--datasource-provider` option.

Options \[#options]

| Option                  | Description                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| `-h`, `--help`          | Display help message                                                                                      |
| `--db`                  | Provision a fully managed Prisma Postgres database on the Prisma Data Platform                            |
| `--datasource-provider` | Define the datasource provider: `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb`, or `cockroachdb` |
| `--generator-provider`  | Define the generator provider to use (default: `prisma-client-js`)                                        |
| `--preview-feature`     | Define a preview feature to use (can be specified multiple times)                                         |
| `--output`              | Define Prisma Client generator output path                                                                |
| `--url`                 | Define a custom datasource URL                                                                            |

Flags \[#flags]

| Flag           | Description                                     |
| -------------- | ----------------------------------------------- |
| `--with-model` | Add an example model to the created schema file |

Examples \[#examples]

Set up a new Prisma project (default) \[#set-up-a-new-prisma-project-default]

Sets up a new project configured for local Prisma Postgres:

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

Specify a datasource provider \[#specify-a-datasource-provider]

Set up a new project with MySQL as the datasource provider:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --datasource-provider mysql
```



```bash
pnpm dlx prisma init --datasource-provider mysql
```



```bash
yarn dlx prisma init --datasource-provider mysql
```



```bash
bunx --bun prisma init --datasource-provider mysql
```
````

Specify a generator provider \[#specify-a-generator-provider]

Set up a project with a specific generator provider:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --generator-provider prisma-client-js
```



```bash
pnpm dlx prisma init --generator-provider prisma-client-js
```



```bash
yarn dlx prisma init --generator-provider prisma-client-js
```



```bash
bunx --bun prisma init --generator-provider prisma-client-js
```
````

Specify preview features \[#specify-preview-features]

Set up a project with specific preview features enabled:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --preview-feature metrics
```



```bash
pnpm dlx prisma init --preview-feature metrics
```



```bash
yarn dlx prisma init --preview-feature metrics
```



```bash
bunx --bun prisma init --preview-feature metrics
```
````

Multiple preview features:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --preview-feature views --preview-feature metrics
```



```bash
pnpm dlx prisma init --preview-feature views --preview-feature metrics
```



```bash
yarn dlx prisma init --preview-feature views --preview-feature metrics
```



```bash
bunx --bun prisma init --preview-feature views --preview-feature metrics
```
````

Specify a custom output path \[#specify-a-custom-output-path]

Set up a project with a custom output path for Prisma Client:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --output ./generated-client
```



```bash
pnpm dlx prisma init --output ./generated-client
```



```bash
yarn dlx prisma init --output ./generated-client
```



```bash
bunx --bun prisma init --output ./generated-client
```
````

Specify a custom datasource URL \[#specify-a-custom-datasource-url]

Set up a project with a specific database URL:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --url mysql://user:password@localhost:3306/mydb
```



```bash
pnpm dlx prisma init --url mysql://user:password@localhost:3306/mydb
```



```bash
yarn dlx prisma init --url mysql://user:password@localhost:3306/mydb
```



```bash
bunx --bun prisma init --url mysql://user:password@localhost:3306/mydb
```
````

Add an example model \[#add-an-example-model]

Set up a project with an example `User` model:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --with-model
```



```bash
pnpm dlx prisma init --with-model
```



```bash
yarn dlx prisma init --with-model
```



```bash
bunx --bun prisma init --with-model
```
````

Provision a Prisma Postgres database \[#provision-a-prisma-postgres-database]

Create a new project with a managed Prisma Postgres database:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --db
```



```bash
pnpm dlx prisma init --db
```



```bash
yarn dlx prisma init --db
```



```bash
bunx --bun prisma init --db
```
````

This requires authentication with the [Prisma Data Platform Console](https://console.prisma.io).

Generated files \[#generated-files]

After running `prisma init`, you'll have the following files:

prisma/schema.prisma \[#prismaschemaprisma]

The Prisma schema file where you define your data model:

```prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}
```

prisma.config.ts \[#prismaconfigts]

A TypeScript configuration file for Prisma:

```typescript
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

.env \[#env]

Environment variables file for your project:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

.gitignore \[#gitignore]

Git ignore file configured for Prisma projects:

```bash
node_modules
.env
/generated/prisma
```

# mcp (/docs/cli/mcp)

The `prisma mcp` command starts a Model Context Protocol (MCP) server that enables AI development tools to interact with your Prisma project.

Usage \[#usage]

```bash
prisma mcp
```

Overview \[#overview]

MCP (Model Context Protocol) is a standard for AI tools to interact with development environments. The Prisma MCP server exposes your Prisma schema and database context to AI assistants, enabling them to:

- Understand your data model
- Generate queries and migrations
- Provide context-aware suggestions

See also \[#see-also]

- [Prisma MCP Server](/ai/tools/mcp-server)
