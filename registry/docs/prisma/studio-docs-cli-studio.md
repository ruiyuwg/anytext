# studio (/docs/cli/studio)

The `prisma studio` command starts a local web server with a web app to interactively browse and manage your data.

Usage \[#usage]

```bash
prisma studio [options]
```

```
Supported databases



Prisma Studio currently supports PostgreSQL, MySQL, and SQLite. Support for CockroachDB and MongoDB is not available yet but may be added in future releases.
```

Prerequisites \[#prerequisites]

Configure your database connection in `prisma.config.ts`:

```prisma file=schema.prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript file=prisma.config.ts
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

Options \[#options]

| Option            | Description                                          | Default        |
| ----------------- | ---------------------------------------------------- | -------------- |
| `-h`, `--help`    | Display help message                                 |                |
| `-p`, `--port`    | Port number to start Studio on                       | `5555`         |
| `-b`, `--browser` | Browser to auto-open Studio in                       | System default |
| `--config`        | Custom path to your Prisma config file               |                |
| `--url`           | Database connection string (overrides Prisma config) |                |

Examples \[#examples]

Start Studio on the default port \[#start-studio-on-the-default-port]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio
```



```bash
pnpm dlx prisma studio
```



```bash
yarn dlx prisma studio
```



```bash
bunx --bun prisma studio
```
````

Start Studio on a custom port \[#start-studio-on-a-custom-port]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --port 7777
```



```bash
pnpm dlx prisma studio --port 7777
```



```bash
yarn dlx prisma studio --port 7777
```



```bash
bunx --bun prisma studio --port 7777
```
````

Start Studio in a specific browser \[#start-studio-in-a-specific-browser]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --browser firefox
```



```bash
pnpm dlx prisma studio --browser firefox
```



```bash
yarn dlx prisma studio --browser firefox
```



```bash
bunx --bun prisma studio --browser firefox
```
````

Or using the `BROWSER` environment variable:

```bash
BROWSER=firefox prisma studio
```

Start Studio without opening a browser \[#start-studio-without-opening-a-browser]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --browser none
```



```bash
pnpm dlx prisma studio --browser none
```



```bash
yarn dlx prisma studio --browser none
```



```bash
bunx --bun prisma studio --browser none
```
````

Start Studio with a custom config file \[#start-studio-with-a-custom-config-file]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --config=./prisma.config.ts
```



```bash
pnpm dlx prisma studio --config=./prisma.config.ts
```



```bash
yarn dlx prisma studio --config=./prisma.config.ts
```



```bash
bunx --bun prisma studio --config=./prisma.config.ts
```
````

Start Studio with a direct database connection string \[#start-studio-with-a-direct-database-connection-string]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
pnpm dlx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
yarn dlx prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```



```bash
bunx --bun prisma studio --url="postgresql://user:password@localhost:5432/dbname"
```
````
