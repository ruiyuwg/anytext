# Agent identity

Source: https://docs.langchain.com/langsmith/fleet/agent-identity

Choose whether your Fleet agent authenticates with its own credentials or with each user's credentials.

Agent identity controls whose [credentials](/langsmith/fleet/setup) the agent uses when it interacts with apps and services.

Once an agent identity is set, it cannot be changed.

## Fixed credentials ("Claws")

The agent always authenticates with the same API keys and OAuth tokens, regardless of who is interacting with it.

Use fixed credentials when:

- The agent operates as a shared service (for example, a team Slack bot or a daily briefing agent).
- You want a single set of authenticated accounts for all users.
- The agent needs to run on [channels](/langsmith/fleet/channels) or [schedules](/langsmith/fleet/schedules), which require fixed credentials.

With fixed credentials, all actions the agent takes (sending emails, posting messages, reading calendars) use the account that the agent owner connected during setup.

## User credentials ("Assistants")

The agent authenticates with the API keys and OAuth tokens of the user interacting with it, acting on the user's behalf.

Use user credentials when:

- Each user should act through their own accounts (for example, an email assistant that reads and sends from the user's own inbox).
- You need per-user access control so the agent only sees what that user is authorized to see.
- Audit trails need to reflect which user performed each action.

With user credentials, each user authenticates individually the first time they interact with the agent. The agent uses that user's tokens for all subsequent actions in their threads.

## Set agent identity

To set the identity for an agent:

1. In the [LangSmith UI](https://smith.langchain.com), navigate to the agent you want to edit.
2. Click  **Edit** in the top right corner.
3. Click **Set identity** and select the identity you want to use.
4. Click **Save**.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/fleet/agent-identity.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Auth-aware tool responses

Source: https://docs.langchain.com/langsmith/fleet/auth-format

Format tool responses to trigger OAuth flows and resume execution automatically.

Some [tools](/langsmith/fleet/tools) require user authorization (for example, Google, Slack, GitHub). LangSmith Fleet includes middleware to detect when a tool needs authorization and to pause the run with a clear prompt to the user. After the user completes auth, the same tool call is retried automatically.

## Return shape to request auth

If a tool detects missing authorization, return a JSON string containing the following fields:

```json theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
{
  "auth_required": true,
  "auth_url": "https://auth.example.com/start",
  "auth_id": "opaque-tracking-id"
}
```

- `auth_required`: set to `true` to signal an interrupt is needed.
- `auth_url`: where the user should be redirected to authorize.
- `auth_id`: optional correlation ID to track the auth session.

When Fleet detects this response, it interrupts the run, displays the authentication UI to the user, and automatically retries the tool call once authorization completes.

If you want your custom tools to reuse the same authentication required interrupt + UI, ensure your tools return the same shape of JSON.

Return only this JSON as the tool's output. Avoid including additional text or content. Fleet parses the response to trigger the authentication flow.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/fleet/auth-format.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
