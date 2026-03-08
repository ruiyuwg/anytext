# Prisma Documentation - Full Content Feed

This file contains the complete Prisma documentation in machine-readable format.
Includes both v7 (current) and v6 documentation.

***

# Introduction to Prisma (/docs)

[**Prisma ORM**](/orm) is an open-source ORM that provides fast, type-safe access to Postgres, MySQL, SQLite, and other databases, and runs smoothly across Node.js, Bun, and Deno.

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

[**Prisma Postgres**](/postgres) is a fully managed PostgreSQL database that scales to zero, integrates with [Prisma ORM](/orm) and [Prisma Studio](/studio), and includes a [generous free tier](https://www.prisma.io/pricing).

````
  npm



  pnpm



  yarn



  bun




```bash
npx create-db
```



```bash
pnpm dlx create-db
```



```bash
yarn dlx create-db
```



```bash
bunx --bun create-db
```
````

\<Card
href="/prisma-orm/quickstart/prisma-postgres"
title="Use Prisma Postgres"
icon={
}

>

```
**Need a database?** Get started with your favorite framework and Prisma Postgres.
```

}>
**Already have a database?** Use Prisma ORM for a type-safe developer experience and automated migrations.

# Build faster with Prisma + AI (/docs/ai)

In the era of AI, where code is increasingly written by agents, ensuring clarity, type safety, and reliable infrastructure is essential. With 5+ years of leadership in the TypeScript ecosystem, Prisma ORM and Prisma Postgres provide the proven foundation for AI-assisted development.

Get started \[#get-started]

Run the following command to bootstrap your database with a prompt:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma init --prompt "Create a habit tracker application"
```



```bash
pnpm dlx prisma init --prompt "Create a habit tracker application"
```



```bash
yarn dlx prisma init --prompt "Create a habit tracker application"
```



```bash
bunx --bun prisma init --prompt "Create a habit tracker application"
```
````

AI Coding Tools \[#ai-coding-tools]

Prisma ORM and Prisma Postgres integrate seamlessly with your AI coding tools. Check out our documentation with tips and tricks for working with Prisma in various AI editors.

- [Cursor](/ai/tools/cursor) - Define project-specific rules and use your schema as context to generate accurate queries and code.
- [Windsurf](/ai/tools/windsurf) - Automate your database workflows by generating schemas, queries, and seed data in this AI-powered editor.
- [Github Copilot](/ai/tools/github-copilot) - Get Prisma-aware code suggestions, run CLI commands from chat, and query the Prisma docs.
- [ChatGPT](/ai/tools/chatgpt) - Learn how to connect the Prisma MCP server to ChatGPT to manage your databases with natural language.

Agent Skills \[#agent-skills]

AI agents often generate outdated Prisma v6 code. Install Prisma Skills to give your agent accurate, up-to-date v7 knowledge - CLI commands, Client API, upgrade guides, database setup, and Prisma Postgres workflows.

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

- [Available skills and setup](/ai/tools/skills) - See all available skills and learn how to install them.

MCP server \[#mcp-server]

With Prisma's MCP server, your AI tool can take database actions on your behalf: Provisioning a new Prisma Postgres instance, creating database backups and executing SQL queries are just a few of its capabilities.

```json title="Integrate in AI tool"
{
  "mcpServers": {
    "Prisma-Remote": {
      "url": "https://mcp.prisma.io/mcp"
    }
  }
}
```

- [Capabilities and tools](/ai/tools/mcp-server#tools) - Discover all the tools that make up the capabilities of the Prisma MCP server.
- [Integrating in AI tools](/ai/tools/mcp-server#integrating-in-ai-tools) - Learn how to integrate Prisma's MCP server in your favorite AI tool, such as Cursor, Claude, Warp, and more.
- [How we built it](https://www.prisma.io/blog/about-mcp-servers-and-how-we-built-one-for-prisma) - Read this technical deep dive about the MCP protocol and how we built the Prisma MCP server.

Vibe Coding Tutorials \[#vibe-coding-tutorials]

Build complete, production-ready applications from scratch with AI assistance.

- [Build a Linktree Clone SaaS](/ai/tutorials/linktree-clone) - A complete vibe coding tutorial: build a full Linktree clone SaaS with Next.js, Prisma Postgres, and Clerk auth using AI assistance.

Resources \[#resources]

- [Vibe Coding with Limits](https://www.prisma.io/blog/vibe-coding-with-limits-how-to-build-apps-in-the-age-of-ai) - How to Build Apps in the Age of AI
- [Vibe Coding an E-commerce App](https://www.prisma.io/blog/vibe-coding-with-prisma-mcp-and-nextjs) - with Prisma MCP and Next.js
- [Integrating the Vercel AI SDK](/guides/integrations/ai-sdk) - in a Next.js application

Integrations \[#integrations]

- [Automate with Pipedream](https://pipedream.com/apps/prisma-management-api) - Connect Prisma Postgres to 2,800+ apps for powerful automation
- [Firebase Studio](/guides/postgres/idx) - Prompt your application with Firebase Studio & Prisma Postgres
