# Resend CLI

Source: https://resend.com/docs/resend-cli

Send emails, manage your account, and develop locally — from the terminal.

The [Resend CLI](https://github.com/resend/resend-cli) is the official command-line interface for Resend. It's built for humans, AI agents, and CI/CD pipelines.

## Installation

````
```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
curl -fsSL https://resend.com/install.sh | bash
```



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install -g resend-cli
```



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
brew install resend/cli/resend
```



```powershell theme={"theme":{"light":"github-light","dark":"vesper"}}
irm https://resend.com/install.ps1 | iex
```
````

## Quick start

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
# Authenticate
resend login

# Send an email
resend emails send \
  --from "you@yourdomain.com" \
  --to recipient@example.com \
  --subject "Hello from Resend CLI" \
  --text "Sent from my terminal."

# Check your environment
resend doctor
```

For a full list of commands and options, see the [CLI README](https://github.com/resend/resend-cli).

## Agent Skills

The Resend CLI includes built-in Agent Skills that help AI agents understand how to use the CLI effectively.

Install the skill using the following command:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-cli
```

When running in non-interactive mode, all output is JSON, exit codes are consistent, and errors always include a `message` and `code` field.

## Local development with webhooks

The CLI has a built-in `webhooks listen` command that handles everything for local development: it starts a local server, registers a temporary webhook, streams incoming events to your terminal, and cleans up when you exit.

### Prerequisites

- Resend CLI installed and authenticated (`resend login`)
- A [verified domain](/dashboard/domains/introduction) with **receiving enabled**
- [Tailscale](https://tailscale.com/) installed and connected

Verify your environment is ready to proceed:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
resend doctor
```

This command verifies your API key, lists your verified domains, and confirms you're ready to proceed.

````
`webhooks listen` runs on port `4318` by default. Expose that port publicly:

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
tailscale funnel 4318
```

Tailscale will give you a stable public URL at `https://hostname.tailnet-name.ts.net`.



```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
resend webhooks listen \
  --url https://hostname.tailnet-name.ts.net \
  --events email.received
```

You can add any available [event type](/webhooks/event-types) to the `--events` flag. The `all` event type is also available to listen to all events.

```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
resend webhooks listen --events all
```

The CLI will register a temporary webhook pointing at your Tailscale URL and stream incoming events to your terminal. The webhook is automatically deleted when you exit (`Ctrl+C`).


  To forward payloads to your own local server (e.g. for integration testing),
  add `--forward-to <your-local-url>`. The CLI will pass along the original Svix headers so you can verify signatures. For example:

  ```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
  resend webhooks listen --forward-to http://localhost:4321/api/webhook
  ```




```bash theme={"theme":{"light":"github-light","dark":"vesper"}}
resend emails send \
  --from "onboarding@resend.dev" \
  --to "agent@yourdomain.com" \
  --subject "Test inbound" \
  --text "Hello, agent."
```

You should see the `email.received` event appear in your terminal within seconds.


  For a permanent setup, deploy a webhook handler and register it via `resend
          webhooks create` pointing to your production URL.
````

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



github.com/resend/resend-chat-sdk
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
