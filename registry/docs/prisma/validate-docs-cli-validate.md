# validate (/docs/cli/validate)

The `prisma validate` command validates the [Prisma Schema Language](/orm/prisma-schema/overview) of your Prisma schema file.

Usage \[#usage]

```bash
prisma validate [options]
```

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Examples \[#examples]

Validate the default schema \[#validate-the-default-schema]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma validate
```



```bash
pnpm dlx prisma validate
```



```bash
yarn dlx prisma validate
```



```bash
bunx --bun prisma validate
```
````

Output on success:

```text
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
The schema at /absolute/path/prisma/schema.prisma is valid
```

Validate a specific schema \[#validate-a-specific-schema]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma validate --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma validate --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma validate --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma validate --schema=./alternative/schema.prisma
```
````

Validate with a config file \[#validate-with-a-config-file]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma validate --config=./prisma.config.ts
```



```bash
pnpm dlx prisma validate --config=./prisma.config.ts
```



```bash
yarn dlx prisma validate --config=./prisma.config.ts
```



```bash
bunx --bun prisma validate --config=./prisma.config.ts
```
````

Error output \[#error-output]

If the schema has validation errors:

```text
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Error: Schema validation error - Error (query-engine-node-api library)
Error code: P1012
error: The preview feature "unknownFeatureFlag" is not known. Expected one of: [...]
  schema.prisma:3
   |
 2 |     provider        = "prisma-client"
 3 |     previewFeatures = ["unknownFeatureFlag"]
   |

Validation Error Count: 1
```
