When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# A2A mode

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

A2A mode runs your agent as an HTTP server that other systems can call using the Agent-to-Agent protocol. This lets you expose your agent as a service that other agents or applications can discover and invoke over the network.

Use A2A when you want to make your agent callable by other systems over HTTP. For editor integration, see [ACP integration](https://docs.docker.com/ai/docker-agent/integrations/acp/). For using agents as tools in MCP clients, see [MCP integration](https://docs.docker.com/ai/docker-agent/integrations/mcp/).

## [Prerequisites](#prerequisites)

Before starting an A2A server, you need:

- Docker Agent installed - See the [installation guide](https://docs.docker.com/ai/docker-agent/#installation)
- Agent configuration - A YAML file defining your agent. See the [tutorial](https://docs.docker.com/ai/docker-agent/tutorial/)
- API keys configured - If using cloud model providers (see [Model providers](https://docs.docker.com/ai/docker-agent/model-providers/))

## [Starting an A2A server](#starting-an-a2a-server)

Basic usage:

```console
$ docker agent serve a2a ./agent.yaml
```

Your agent is now accessible via HTTP. Other A2A systems can discover your agent's capabilities and call it.

Custom port:

```console
$ docker agent serve a2a ./agent.yaml --port 8080
```

Specific agent in a team:

```console
$ docker agent serve a2a ./agent.yaml --agent engineer
```

From OCI registry:

```console
$ docker agent serve a2a agentcatalog/pirate --port 9000
```

## [HTTP endpoints](#http-endpoints)

When you start an A2A server, it exposes two HTTP endpoints:

### [Agent card: `/.well-known/agent-card`](#agent-card-well-knownagent-card)

The agent card describes your agent's capabilities:

```console
$ curl http://localhost:8080/.well-known/agent-card
```

```json
{
  "name": "agent",
  "description": "A helpful coding assistant",
  "skills": [
    {
      "id": "agent_root",
      "name": "root",
      "description": "A helpful coding assistant",
      "tags": ["llm", "dockeragent"]
    }
  ],
  "preferredTransport": "jsonrpc",
  "url": "http://localhost:8080/invoke",
  "capabilities": {
    "streaming": true
  },
  "version": "0.1.0"
}
```

### [Invoke endpoint: `/invoke`](#invoke-endpoint-invoke)

Call your agent by sending a JSON-RPC request:

```console
$ curl -X POST http://localhost:8080/invoke \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": "req-1",
    "method": "message/send",
    "params": {
      "message": {
        "role": "user",
        "parts": [
          {
            "kind": "text",
            "text": "What is 2+2?"
          }
        ]
      }
    }
  }'
```

The response includes the agent's reply:

```json
{
  "jsonrpc": "2.0",
  "id": "req-1",
  "result": {
    "artifacts": [
      {
        "parts": [
          {
            "kind": "text",
            "text": "2+2 equals 4."
          }
        ]
      }
    ]
  }
}
```

## [Example: Multi-agent workflow](#example-multi-agent-workflow)

Here's a concrete scenario where A2A is useful. You have two agents:

1. A general-purpose agent that interacts with users
2. A specialized code review agent with access to your codebase

Run the specialist as an A2A server:

```console
$ docker agent serve a2a ./code-reviewer.yaml --port 8080
Listening on 127.0.0.1:8080
```

Configure your main agent to call it:

```yaml
agents:
  root:
    model: anthropic/claude-sonnet-4-5
    instruction: You are a helpful assistant
    toolsets:
      - type: a2a
        url: http://localhost:8080
        name: code-reviewer
```

Now when users ask the main agent about code quality, it can delegate to the specialist. The main agent sees `code-reviewer` as a tool it can call, and the specialist has access to the codebase tools it needs.

## [Calling other A2A agents](#calling-other-a2a-agents)

Your agents can call remote A2A agents as tools. Configure the A2A toolset with the remote agent's URL:

```yaml
agents:
  root:
    toolsets:
      - type: a2a
        url: http://localhost:8080
        name: specialist
```

The `url` specifies where the remote agent is running, and `name` is an optional identifier for the tool. Your agent can now delegate tasks to the remote specialist agent.

If the remote agent requires authentication or custom headers:

```yaml
agents:
  root:
    toolsets:
      - type: a2a
        url: http://localhost:8080
        name: specialist
        remote:
          headers:
            Authorization: Bearer token123
            X-Custom-Header: value
```

## [What's next](#whats-next)

- Review the [CLI reference](https://docs.docker.com/ai/docker-agent/reference/cli/#a2a) for all `docker agent serve a2a` options
- Learn about [MCP mode](https://docs.docker.com/ai/docker-agent/integrations/mcp/) to expose agents as tools in MCP clients
- Learn about [ACP mode](https://docs.docker.com/ai/docker-agent/integrations/acp/) for editor integration
- Share your agents with [OCI registries](https://docs.docker.com/ai/docker-agent/sharing-agents/)

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/docker-agent/integrations/a2a.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fdocker-agent%2fintegrations%2fa2a%2f\&labels=status%2Ftriage)

Table of contents
