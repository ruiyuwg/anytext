# x402

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/agents/agentic-payments/x402/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# x402

[x402 ↗](https://www.x402.org/) is a payment standard built around HTTP 402 (Payment Required). Services return a 402 response with payment instructions, and clients pay programmatically without accounts, sessions, or API keys.

## Charge for resources

[ HTTP content ](https://developers.cloudflare.com/agents/agentic-payments/x402/charge-for-http-content/) Gate APIs, web pages, and files with a Worker proxy

[ MCP tools ](https://developers.cloudflare.com/agents/agentic-payments/x402/charge-for-mcp-tools/) Charge per tool call using paidTool

## Pay for resources

[ Agents SDK ](https://developers.cloudflare.com/agents/agentic-payments/x402/pay-from-agents-sdk/) Wrap MCP clients with withX402Client

[ Coding tools ](https://developers.cloudflare.com/agents/agentic-payments/x402/pay-with-tool-plugins/) OpenCode plugin and Claude Code hook

## Related

- [x402.org ↗](https://x402.org) — Protocol specification
- [x402 examples ↗](https://github.com/cloudflare/agents/tree/main/examples) — Complete working code
- [Pay Per Crawl](https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/) — Cloudflare-native monetization

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/agents/","name":"Agents"}},{"@type":"ListItem","position":3,"item":{"@id":"/agents/agentic-payments/","name":"Agentic Payments"}},{"@type":"ListItem","position":4,"item":{"@id":"/agents/agentic-payments/x402/","name":"x402"}}]}
```
