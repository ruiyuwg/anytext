# generate (/docs/cli/generate)

The `prisma generate` command generates assets like Prisma Client based on the [`generator`](/orm/prisma-schema/overview/generators) and [`data model`](/orm/prisma-schema/data-model/models) blocks defined in your `schema.prisma` file.

Usage \[#usage]

```bash
prisma generate [options]
```

How it works \[#how-it-works]

1. Inspects the current directory to find a Prisma schema
2. Generates a customized Prisma Client based on your schema into the output directory specified in the generator block

Prerequisites \[#prerequisites]

Add a generator definition in your `schema.prisma` file:

```prisma
generator client {
  provider = "prisma-client"
  output   = "./generated"
}
```

Options \[#options]

| Option             | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `-h`, `--help`     | Display help message                                   |
| `--config`         | Custom path to your Prisma config file                 |
| `--schema`         | Custom path to your Prisma schema                      |
| `--sql`            | Generate typed SQL module                              |
| `--watch`          | Watch the Prisma schema and regenerate after changes   |
| `--generator`      | Generator to use (can be provided multiple times)      |
| `--no-hints`       | Hide hint messages (still outputs errors and warnings) |
| `--require-models` | Do not allow generating a client without models        |

Examples \[#examples]

Generate Prisma Client \[#generate-prisma-client]

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

Output:

```text
✔ Generated Prisma Client to ./node_modules/.prisma/client in 61ms

You can now start using Prisma Client in your code:

import { PrismaClient } from '../prisma/generated/client'

const prisma = new PrismaClient()
```

Generate with a custom schema path \[#generate-with-a-custom-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma generate --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma generate --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma generate --schema=./alternative/schema.prisma
```
````

Watch mode \[#watch-mode]

Automatically regenerate when the schema changes:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate --watch
```



```bash
pnpm dlx prisma generate --watch
```



```bash
yarn dlx prisma generate --watch
```



```bash
bunx --bun prisma generate --watch
```
````

Output:

```text
Watching... /home/prismauser/prisma/schema.prisma

✔ Generated Prisma Client to ./node_modules/.prisma/client in 45ms
```

Generate specific generators \[#generate-specific-generators]

Run only specific generators:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate --generator client
```



```bash
pnpm dlx prisma generate --generator client
```



```bash
yarn dlx prisma generate --generator client
```



```bash
bunx --bun prisma generate --generator client
```
````

Multiple generators:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma generate --generator client --generator zod_schemas
```



```bash
pnpm dlx prisma generate --generator client --generator zod_schemas
```



```bash
yarn dlx prisma generate --generator client --generator zod_schemas
```



```bash
bunx --bun prisma generate --generator client --generator zod_schemas
```
````

Generated assets \[#generated-assets]

The `prisma-client` generator creates a customized client for working with your database. You can [customize the output folder](/orm/reference/prisma-schema-reference#fields-for-prisma-client-provider) using the `output` field in the generator block.
