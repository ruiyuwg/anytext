# Sandbox warm pools

Source: https://docs.langchain.com/langsmith/sandbox-warm-pools

Pre-provision sandboxes for faster execution with automatic replenishment.

Sandboxes are in private preview. APIs and features may change as we iterate. [Sign up for the waitlist](https://www.langchain.com/langsmith-sandboxes-waitlist?ref=docs.langchain.com) to get access.

Warm pools let you pre-provision sandboxes so they are ready to use immediately. When a sandbox from a pool is consumed or deleted, a new one is automatically created to maintain the desired pool size.

## When to use warm pools

Warm pools are ideal for workloads that require:

- **Rapid isolated interactions**—skip container startup time by using a pre-provisioned sandbox
- **A clean state for every execution**—each sandbox starts fresh from the template

## How pools work

1. You create a pool linked to a [template](/langsmith/sandbox-templates) and specify a desired size.
2. The pool pre-creates that many sandbox instances.
3. When you create a sandbox with the same template, it is drawn from the pool.
4. When a sandbox is deleted, the pool automatically replenishes to maintain the target size.

To use a pool, create a sandbox with the same template as the pool. No additional configuration is needed—the system automatically draws from available pool instances.

## Create a warm pool

```python Python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langsmith.sandbox import SandboxClient

client = SandboxClient()

# Create a pool that maintains 5 pre-provisioned sandboxes
client.create_pool(
    name="python-pool",
    template_name="python-sandbox",
    size=5,
)
```

```ts TypeScript theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
import { SandboxClient } from "langsmith/experimental/sandbox";

const client = new SandboxClient();

// Create a pool that maintains 5 pre-provisioned sandboxes
await client.createPool("python-pool", {
  templateName: "python-sandbox",
  size: 5,
});
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/sandbox-warm-pools.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Sandboxes overview

Source: https://docs.langchain.com/langsmith/sandboxes

Use managed sandboxes to safely execute code and interact with the filesystem in isolated environments.

Sandboxes are isolated environments that allow agents to safely execute potentially risky operations—like running arbitrary code or interacting with the filesystem—without affecting your main infrastructure.

Sandboxes are in private preview. APIs and features may change as we iterate. [Sign up for the waitlist](https://www.langchain.com/langsmith-sandboxes-waitlist?ref=docs.langchain.com) to get access.

From the [LangSmith homepage](https://smith.langchain.com), select **Sandboxes** to manage all your sandbox resources.

## Resources

```
Define container images, resource limits, volumes, and auth proxy configuration.



Pre-provision sandboxes for faster execution with automatic replenishment.



Inject credentials into outbound API requests without hardcoding secrets.



Create and manage sandboxes programmatically with the Python or TypeScript SDK.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/sandboxes.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
