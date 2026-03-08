# debug (/docs/cli/debug)

The `prisma debug` command prints information helpful for debugging and bug reports.

```
Available from version 5.6.0 and newer.
```

Usage \[#usage]

```bash
prisma debug [options]
```

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Examples \[#examples]

Display debug information \[#display-debug-information]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma debug
```



```bash
pnpm dlx prisma debug
```



```bash
yarn dlx prisma debug
```



```bash
bunx --bun prisma debug
```
````

Output:

```text
-- Prisma schema --
Path: /prisma/schema.prisma

-- Local cache directory for engines files --
Path: /.cache/prisma

-- Environment variables --
When not set, the line is dimmed and no value is displayed.
When set, the line is bold and the value is inside the `` backticks.

For general debugging
 - CI:
 - DEBUG:
 - NODE_ENV:
 - RUST_LOG:
 - RUST_BACKTRACE:
 - NO_COLOR:
 - TERM: `xterm-256color`
 - NODE_TLS_REJECT_UNAUTHORIZED:
 - NO_PROXY:
 - http_proxy:
 - HTTP_PROXY:
 - https_proxy:
 - HTTPS_PROXY:

For hiding messages
 - PRISMA_DISABLE_WARNINGS:
 - PRISMA_HIDE_PREVIEW_FLAG_WARNINGS:
 - PRISMA_HIDE_UPDATE_MESSAGE:

For downloading engines
 - PRISMA_ENGINES_MIRROR:
 - PRISMA_BINARIES_MIRROR (deprecated):
 - PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING:
 - BINARY_DOWNLOAD_VERSION:

For custom engines
 - PRISMA_SCHEMA_ENGINE_BINARY:
 - PRISMA_MIGRATION_ENGINE_BINARY:

For Prisma Client
 - PRISMA_SHOW_ALL_TRACES:

For Prisma Migrate
 - PRISMA_SCHEMA_DISABLE_ADVISORY_LOCK:

For Prisma Studio
 - BROWSER:

-- Terminal is interactive? --
true

-- CI detected? --
false
```

Use with older versions \[#use-with-older-versions]

If using an older Prisma version:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma@latest debug
```



```bash
pnpm dlx prisma@latest debug
```



```bash
yarn dlx prisma@latest debug
```



```bash
bunx --bun prisma@latest debug
```
````

# format (/docs/cli/format)

The `prisma format` command formats your Prisma schema file. It validates, formats, and persists the schema.

Usage \[#usage]

```bash
prisma format [options]
```

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Examples \[#examples]

Format the default schema \[#format-the-default-schema]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma format
```



```bash
pnpm dlx prisma format
```



```bash
yarn dlx prisma format
```



```bash
bunx --bun prisma format
```
````

Output on success:

```text
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Formatted prisma/schema.prisma in 116ms
```

Format a specific schema \[#format-a-specific-schema]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma format --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma format --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma format --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma format --schema=./alternative/schema.prisma
```
````

Error output \[#error-output]

If the schema has validation errors, formatting will fail:

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
