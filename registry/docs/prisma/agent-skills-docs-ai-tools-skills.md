# Agent Skills (/docs/ai/tools/skills)

AI coding agents often struggle with Prisma 7 -they generate outdated v6 patterns, hallucinate APIs, and miss breaking changes like ESM-only support and required driver adapters. **Prisma Skills** fix this by giving your agent accurate, version-specific knowledge it can reference automatically.

Skills are packaged instructions that follow the open [Agent Skills](https://agentskills.io/) format. Once installed, your agent uses them whenever it detects a relevant task -no prompting required.

Install \[#install]

Add all Prisma skills to your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx skills add prisma/skills
```



```bash
pnpm dlx skills add prisma/skills
```



```bash
yarn dlx skills add prisma/skills
```



```bash
bunx --bun skills add prisma/skills
```
````

Or install only the ones you need:

````
  npm



  pnpm



  yarn



  bun




```bash
npx skills add prisma/skills --skill prisma-client-api
```



```bash
pnpm dlx skills add prisma/skills --skill prisma-client-api
```



```bash
yarn dlx skills add prisma/skills --skill prisma-client-api
```



```bash
bunx --bun skills add prisma/skills --skill prisma-client-api
```





Skills are compatible with any agent that supports the [Agent Skills](https://agentskills.io/) format, including Claude Code, Cursor, and others.
````

Available skills \[#available-skills]

prisma-cli \[#prisma-cli]

Complete reference for all Prisma CLI commands in v7.

Covers `init`, `generate`, `dev`, `migrate dev`, `migrate deploy`, `db push`, `db pull`, `db seed`, `studio`, and more. Use this when your agent needs to run Prisma commands, set up projects, or manage migrations.

prisma-client-api \[#prisma-client-api]

Comprehensive Prisma Client API reference for v7.

Covers CRUD operations (`findMany`, `create`, `update`, `delete`), query options (`select`, `include`, `omit`, `orderBy`), filter operators, transactions (`$transaction`), raw queries (`$queryRaw`, `$executeRaw`), and client methods (`$connect`, `$disconnect`, `$extends`).

prisma-upgrade-v7 \[#prisma-upgrade-v7]

Step-by-step migration guide from Prisma v6 to v7.

Covers ESM module configuration, required driver adapters, the new `prisma.config.ts` file, manual environment variable loading, and removed features (middleware, metrics, deprecated CLI flags). Essential for upgrading existing projects.

prisma-database-setup \[#prisma-database-setup]

Guides for configuring Prisma with different database providers.

Covers PostgreSQL, Prisma Postgres, MySQL/MariaDB, SQLite, MongoDB, SQL Server, and CockroachDB. Use this when setting up a new project or switching databases.

prisma-postgres \[#prisma-postgres]

Prisma Postgres workflows across Console, CLI, Management API, and SDK.

Covers `npx create-db`, Console operations, programmatic provisioning via the Management API, and the `@prisma/management-api-sdk`. Use this when creating or managing Prisma Postgres databases.

Useful commands \[#useful-commands]

List available skills before installing:

````
  npm



  pnpm



  yarn



  bun




```bash
npx skills add prisma/skills --list
```



```bash
pnpm dlx skills add prisma/skills --list
```



```bash
yarn dlx skills add prisma/skills --list
```



```bash
bunx --bun skills add prisma/skills --list
```
````

List skills currently installed in your project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx skills list
```



```bash
pnpm dlx skills list
```



```bash
yarn dlx skills list
```



```bash
bunx --bun skills list
```
````

Example prompts \[#example-prompts]

Once skills are installed, your agent will use them automatically. Try prompts like:

- *"Set up Prisma with PostgreSQL in this project"*
- *"Upgrade this project from Prisma 6 to 7"*
- *"Write a query to find all users with their posts"*
- *"Run migrations for production"*
- *"Create a new Prisma Postgres database"*

Learn more \[#learn-more]

- [Prisma Skills on skills.sh](https://skills.sh/prisma/skills) - browse available skills and install instructions
- [GitHub repository](https://github.com/prisma/skills) - source code, contribution guidelines, and skill structure
- [Agent Skills format](https://agentskills.io/) - the open standard behind skills
