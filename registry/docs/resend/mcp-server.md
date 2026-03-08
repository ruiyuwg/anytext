# MCP Server

Source: https://resend.com/docs/mcp-server

Learn how to use the MCP Server to send emails.

## What is an MCP Server?

MCP is an open protocol that standardizes how applications provide context to LLMs. Among other benefits, it provides LLMs tools to act on your behalf.

## What can Resend's MCP Server do?

Resend's [MCP Server](https://github.com/resend/resend-mcp) gives your AI agent native access to the full Resend platform through a single integration. You can manage all aspects of your email infrastructure using natural language.

- **Emails** — Send, list, get, cancel, update, and batch send emails. Supports HTML, plain text, attachments (local file, URL, or base64), CC/BCC, reply-to, scheduling, tags, and topic-based sending.
- **Received Emails** — List and read inbound emails. List and download received email attachments.
- **Contacts** — Create, list, get, update, and remove contacts. Manage segment memberships and topic subscriptions. Supports custom contact properties.
- **Broadcasts** — Create, send, list, get, update, and remove broadcast campaigns. Supports scheduling, personalization placeholders, and preview text.
- **Domains** — Create, list, get, update, remove, and verify sender domains. Configure tracking, TLS, and sending/receiving capabilities.
- **Segments** — Create, list, get, and remove audience segments.
- **Topics** — Create, list, get, update, and remove subscription topics.
- **Contact Properties** — Create, list, get, update, and remove custom contact attributes.
- **API Keys** — Create, list, and remove API keys.
- **Webhooks** — Create, list, get, update, and remove webhooks for event notifications.

As an example, you could use this to automate email workflows, manage your contact database, or build AI-powered email campaigns.

## Prerequisites

The Resend MCP server is available on NPM and can be easily integrated into any [supported MCP client](#mcp-client-integrations) using `npx`. To use the MCP Server, you'll need to:

- [Create an API key](https://resend.com/api-keys)
- [Verify your domain](https://resend.com/domains)

## How to use the MCP Server

The server supports two transport modes: **stdio** (default) and **HTTP**.

Choose your preferred mode and client below to get started. Remember to replace `re_xxxxxxxxx` with your actual API key.

### Stdio Transport (Default)

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
claude mcp add --env RESEND_API_KEY=re_xxxxxxxxx resend -- npx -y resend-mcp
```



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
codex mcp add resend \
  --env RESEND_API_KEY=re_xxxxxxxxx \
  -- npx -y resend-mcp
```



Open the command palette and choose "Cursor Settings" > "MCP" > "Add new global MCP server".

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "command": "npx",
      "args": ["-y", "resend-mcp"],
      "env": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```



Open Claude Desktop settings > "Developer" tab > "Edit Config".

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "command": "npx",
      "args": ["-y", "resend-mcp"],
      "env": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```



To use Github Copilot in VS Code, add the following to your `settings.json`:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcp": {
    "servers": {
      "resend": {
        "command": "npx",
        "args": ["-y", "resend-mcp"],
        "env": {
          "RESEND_API_KEY": "re_xxxxxxxxx"
        }
      }
    }
  }
}
```



```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "command": "npx",
      "args": ["-y", "resend-mcp"],
      "env": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```



Add to your `opencode.json` config:

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "resend": {
      "type": "local",
      "command": ["npx", "-y", "resend-mcp"],
      "enabled": true,
      "environment": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```
````

### HTTP Transport

Run the server over HTTP for remote or web-based integrations. In HTTP mode, each client authenticates by passing their Resend API key as a Bearer token in the `Authorization` header.

Start the server:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx -y resend-mcp --http --port 3000
```

The server will listen on `http://127.0.0.1:3000` and expose the MCP endpoint at `/mcp` using Streamable HTTP.

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
claude mcp add resend --transport http http://127.0.0.1:3000/mcp --header "Authorization: Bearer re_xxxxxxxxx"
```



Open the command palette and choose "Cursor Settings" > "MCP" > "Add new global MCP server".

```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "url": "http://127.0.0.1:3000/mcp",
      "headers": {
        "Authorization": "Bearer re_xxxxxxxxx"
      }
    }
  }
}
```
````

You can also set the port via the `MCP_PORT` environment variable:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
MCP_PORT=3000 npx -y resend-mcp --http
```

### Options

You can pass additional arguments to configure the server:

- `--key`: Your Resend API key (stdio mode only; HTTP mode uses the Bearer token from the client)
- `--sender`: Default sender email address from a verified domain
- `--reply-to`: Default reply-to email address (can be specified multiple times)
- `--http`: Use HTTP transport instead of stdio (default: stdio)
- `--port`: HTTP port when using `--http` (default: 3000, or `MCP_PORT` env var)

**Environment variables:**

- `RESEND_API_KEY`: Your Resend API key (required for stdio, optional for HTTP since clients pass it via Bearer token)
- `SENDER_EMAIL_ADDRESS`: Default sender email address from a verified domain (optional)
- `REPLY_TO_EMAIL_ADDRESSES`: Comma-separated reply-to email addresses (optional)
- `MCP_PORT`: HTTP port when using `--http` (optional)

  If you don't provide a sender email address, the MCP server will ask you to
  provide one each time you call the tool.

## Local Development

Clone the project and build:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
git clone https://github.com/resend/resend-mcp.git
pnpm install
pnpm run build
```

To use the local build, replace the `npx` command with the path to your local build:

#### Stdio

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
claude mcp add --env RESEND_API_KEY=re_xxxxxxxxx resend -- node ABSOLUTE_PATH_TO_PROJECT/dist/index.js
```



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
codex mcp add resend \
  --env RESEND_API_KEY=re_xxxxxxxxx \
  -- node ABSOLUTE_PATH_TO_PROJECT/dist/index.js
```



```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "command": "node",
      "args": ["ABSOLUTE_PATH_TO_PROJECT/dist/index.js"],
      "env": {
        "RESEND_API_KEY": "re_xxxxxxxxx"
      }
    }
  }
}
```
````

#### HTTP

First, start the local HTTP server:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
node ABSOLUTE_PATH_TO_PROJECT/dist/index.js --http --port 3000
```

Then configure your client:

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
claude mcp add resend --transport http http://127.0.0.1:3000/mcp --header "Authorization: Bearer re_xxxxxxxxx"
```



```json theme={"theme":{"light":"github-light","dark":"vesper"}}
{
  "mcpServers": {
    "resend": {
      "url": "http://127.0.0.1:3000/mcp",
      "headers": {
        "Authorization": "Bearer re_xxxxxxxxx"
      }
    }
  }
}
```
````

### Testing with MCP Inspector

Make sure you've built the project first (see [Local
Development](#local-development) section above).

#### Using Stdio Transport

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
export RESEND_API_KEY=re_your_key_here
```



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm inspector
```



In the Inspector UI:

* Choose **stdio** (launch a process)
* **Command:** `node`
* **Args:** `dist/index.js` (or the full path to `dist/index.js`)
* **Env:** `RESEND_API_KEY=re_your_key_here` (or leave blank if you already exported it in the same terminal)
* Click **Connect**, then use "List tools" to verify the server is working
````

#### Using HTTP Transport

````
In one terminal:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
node dist/index.js --http --port 3000
```



In another terminal:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
pnpm inspector
```



In the Inspector UI:

* Choose **Streamable HTTP** (connect to URL)
* **URL:** `http://127.0.0.1:3000/mcp`
* Add a custom header: `Authorization: Bearer re_your_key_here` and activate the toggle
* Click **Connect**, then use "List tools" to verify the server is working
````

# React Email Skill

Source: https://resend.com/docs/react-email-skill

Build HTML emails using React components with AI agents.

The React Email skill enables AI agents to build production-ready HTML emails using React components. It provides a modern development experience for creating responsive, cross-client compatible emails.

## Installation

Install the skill using the following command:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/react-email
```

## Advantages

- **Component-based email development**: Build emails using reusable React components for consistent, maintainable templates.
- **Brand-consistent styling with Tailwind**: Use Tailwind CSS to style emails with your brand's design system.
- **Multi-format rendering**: Automatically generate both HTML and plain text versions of your emails.
- **Email client compatibility handling**: Built-in support for rendering emails correctly across all major email clients.
- **Built-in preview server**: Preview your emails in real-time during development with hot reloading.

## Learn More

See the full source code and documentation.

# Send emails with Replit and Resend

Source: https://resend.com/docs/replit-integration

Learn how to add the Resend integration to your Replit project.

[Replit](https://replit.com/) is a platform for building sites and apps with AI. You can add Resend in a Replit project by asking the chat to add email sending with Resend.

**Example prompt**

```
When someone fills out the contact form, send an email using Resend.
```

Prefer watching a video? Check out our video walkthrough below.

## 1. Add a custom domain to your Resend account

By default, you can only send emails to your own email address.

To send emails to other email addresses:

1. Add a [custom domain to your Resend account](https://resend.com/domains).
2. Add the custom domain to the `from` field in the `resend` function in Replit (or ask the chat to update these fields).

Get more help adding a custom domain in [Resend's documentation](/dashboard/domains/introduction).

## 2. Add your Resend API key and from address

To use Resend with Replit, you'll need to add a Resend API key, which you can create in the [Resend Dashboard](https://resend.com/api-keys). Do not share your API key with others or expose it in the browser or other client-side code.

The from address is the email address that will be used to send emails. Use your custom domain you added in step 1 here (e.g., `hello@yourdomain.com`).

Replit tracks the details of your Resend integration in the [Integrations
page](https://replit.com/integrations).

# Resend Skill

Source: https://resend.com/docs/resend-skill

Send emails through the Resend API with AI agents.

The Resend skill enables AI agents to send emails through the Resend API using our official recommendations. It provides a streamlined interface for sending single and batch emails with built-in error handling and retry logic.

## Installation

Install the skill using the following command:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-skills
```

## Advantages

Build with our official recommendations for sending emails with Resend.

- **Single and batch email sending**: Send individual emails or batch up to 100 emails per request.
- **Built-in error handling and retry logic**: Automatic retries with exponential backoff for transient failures.
- **Idempotency key support**: Prevent duplicate sends with idempotency keys for safe retries.
- **Multi-language SDK support**: Works with Node.js, Python, Ruby, Go, and other supported SDKs.
- **Automatic activation for email tasks**: AI agents automatically use this skill when email sending is needed.

## Learn More

See the full source code and documentation.

# Official SDKs

Source: https://resend.com/docs/sdks

Open source client libraries for your favorite platforms.

## Official SDKs

```
github.com/resend/resend-node



github.com/resend/resend-php



github.com/resend/resend-laravel



github.com/resend/resend-python



github.com/resend/resend-ruby



github.com/resend/resend-go



github.com/resend/resend-java



github.com/resend/resend-rust



github.com/resend/resend-dotnet
```

## Community SDKs

```
github.com/elixir-saas/resend-elixir



github.com/jiangtaste/nestjs-resend



github.com/coderaveHQ/dart\_resend
```

## OpenAPI

```
github.com/resend/resend-openapi
```
