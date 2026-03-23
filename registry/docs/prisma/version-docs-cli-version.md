# version (/docs/cli/version)

The `prisma version` command outputs information about your current Prisma version, platform, and engine binaries.

Usage \[#usage]

```bash
prisma version [options]
```

Or use the shorthand:

```bash
prisma -v [options]
```

Options \[#options]

| Option         | Description                               |
| -------------- | ----------------------------------------- |
| `-h`, `--help` | Display help message                      |
| `--json`       | Output version information in JSON format |

Examples \[#examples]

Display version information \[#display-version-information]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma version
```



```bash
pnpm dlx prisma version
```



```bash
yarn dlx prisma version
```



```bash
bunx --bun prisma version
```
````

Output:

```text
Environment variables loaded from .env
prisma               : 2.21.0-dev.4
@prisma/client       : 2.21.0-dev.4
Current platform     : windows
Query Engine         : query-engine 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6
Migration Engine     : migration-engine-cli 2fb8f444d9cdf7c0beee7b041194b42d7a9ce1e6
Format Binary        : prisma-fmt 60ba6551f29b17d7d6ce479e5733c70d9c00860e
Default Engines Hash : 60ba6551f29b17d7d6ce479e5733c70d9c00860e
Studio               : 0.365.0
```

Display version using shorthand \[#display-version-using-shorthand]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma -v
```



```bash
pnpm dlx prisma -v
```



```bash
yarn dlx prisma -v
```



```bash
bunx --bun prisma -v
```
````

Display version as JSON \[#display-version-as-json]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma version --json
```



```bash
pnpm dlx prisma version --json
```



```bash
yarn dlx prisma version --json
```



```bash
bunx --bun prisma version --json
```
````

Output:

```json
{
  "prisma": "2.21.0-dev.4",
  "@prisma/client": "2.21.0-dev.4",
  "current-platform": "windows",
  "query-engine": "query-engine 60ba6551f29b17d7d6ce479e5733c70d9c00860e",
  "migration-engine": "migration-engine-cli 60ba6551f29b17d7d6ce479e5733c70d9c00860e",
  "format-binary": "prisma-fmt 60ba6551f29b17d7d6ce479e5733c70d9c00860e",
  "default-engines-hash": "60ba6551f29b17d7d6ce479e5733c70d9c00860e",
  "studio": "0.365.0"
}
```
