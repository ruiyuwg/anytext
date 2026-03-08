# Get started

AI tools can dramatically accelerate Sanity development, but without proper guidance, they often produce generic code that fails to leverage Sanity's full capabilities.

This guide will help you:

- Set up AI tools to generate high-quality Sanity code.
- Avoid common pitfalls of AI-generated configurations.
- Implement best practices from Sanity into your AI workflow.

## Configure the MCP server

The fastest way to connect your AI tools to Sanity is with the [Sanity MCP server](https://www.sanity.io/docs/ai/mcp-server). Run the following command to automatically detect and configure the MCP server for Cursor, Claude Code, and VS Code:

**Terminal**

```sh
npx sanity@latest mcp configure
```

This detects and configures the MCP server automatically. See the [MCP server documentation](https://www.sanity.io/docs/ai/mcp-server) for manual configuration options and troubleshooting. If you’re starting a new project with `sanity init`, the CLI will help you set up the MCP server as part of the setup steps.

## Add best practice rules and skills

The [Sanity Agent Toolkit](https://github.com/sanity-io/agent-toolkit) is a collection of resources to help AI agents build better with Sanity.

It includes:

- **20+ context rules** covering schema design, GROQ, Visual Editing, SEO, localization, migrations, and framework integrations.
- **Claude Code plugin** with slash commands and interactive skills for common workflows.
- **Knowledge router** (`AGENTS.md`) that directs AI to the right guidance based on task keywords.

You can also install skills directly by running the following command from your project directory:

**Terminal**

```sh
npx skills add sanity-io/agent-toolkit
```

## Leveraging documentation content

The Sanity documentation has several ways you can use AI to get the job done:

- **For quick, specific reference**: Use the **Copy article** button on all articles that puts the markdown version of the content on your clipboard. You can also add `.md` at the end of any article URL to get the markdown version.
- **For comprehensive context**: You can point LLMs to `/docs/llms.txt` and `/docs/llms-full.txt` to access all the links and the full corpus as markdown formatted content.
- **For interactive queries**: Use the [MCP server](https://www.sanity.io/docs/ai/mcp-server)'s `search_docs` and `read_docs` tools.
- **For CLI-based work**: You can even tell LLMs to use `sanity docs search` and `sanity docs read` to find docs articles.

In tools like Cursor that support local docs, you can add the Sanity Docs and Learn materials directly by typing `@Docs` in their agent chats.

## Leveraging Sanity Learn content

All course and lesson material on [Sanity Learn](https://www.sanity.io/learn) is also available in the LLM-friendly `llms.txt` standard. You can read [how we made this](https://www.sanity.io/blog/improving-the-agent-experience-for-sanity-learn) on our blog.

There are two different sizes you can import into your IDE:

- `/llms.txt` is an abbreviated index of all the content with links.
- `/llms-full.txt` is the complete content (sometimes optimized to fit within the context window limits).
