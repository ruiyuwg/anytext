## Implementation variations

This tutorial implemented skills as in-memory Python dictionaries loaded through tool calls. However, there are several ways to implement progressive disclosure with skills:

**Storage backends:**

- **In-memory** (this tutorial): Skills defined as Python data structures, fast access, no I/O overhead
- **File system** (Claude Code approach): Skills as directories with files, discovered via file operations like `read_file`
- **Remote storage**: Skills in S3, databases, Notion, or APIs, fetched on-demand

**Skill discovery** (how the agent learns which skills exist):

- **System prompt listing**: Skill descriptions in system prompt (used in this tutorial)
- **File-based**: Discover skills by scanning directories (Claude Code approach)
- **Registry-based**: Query a skill registry service or API for available skills
- **Dynamic lookup**: List available skills via a tool call

**Progressive disclosure strategies** (how skill content is loaded):

- **Single load**: Load entire skill content in one tool call (used in this tutorial)
- **Paginated**: Load skill content in multiple pages/chunks for large skills
- **Search-based**: Search within a specific skill's content for relevant sections (e.g., using grep/read operations on skill files)
- **Hierarchical**: Load skill overview first, then drill into specific subsections

**Size considerations** (uncalibrated mental model - optimize for your system):

- **Small skills** (< 1K tokens / ~750 words): Can be included directly in system prompt and cached with prompt caching for cost savings and faster responses
- **Medium skills** (1-10K tokens / ~750-7.5K words): Benefit from on-demand loading to avoid context overhead (this tutorial)
- **Large skills** (> 10K tokens / ~7.5K words, or > 5-10% of context window): Should use progressive disclosure techniques like pagination, search-based loading, or hierarchical exploration to avoid consuming excessive context

The choice depends on your requirements: in-memory is fastest but requires redeployment for skill updates, while file-based or remote storage enables dynamic skill management without code changes.

## Progressive disclosure and context engineering

Progressive disclosure is fundamentally a **[context engineering](/oss/javascript/langchain/context-engineering) technique** - you're managing what information is available to the agent and when. This tutorial focused on loading database schemas, but the same principles apply to other types of context.

### Combining with few-shot prompting

For the SQL query use case, you could extend progressive disclosure to dynamically load **few-shot examples** that match the user's query:

**Example approach:**

1. User asks: "Find customers who haven't ordered in 6 months"
2. Agent loads `sales_analytics` schema (as shown in this tutorial)
3. Agent also loads 2-3 relevant example queries (via semantic search or tag-based lookup):
   - Query for finding inactive customers
   - Query with date-based filtering
   - Query joining customers and orders tables
4. Agent writes query using both schema knowledge AND example patterns

This combination of progressive disclosure (loading schemas on-demand) and dynamic few-shot prompting (loading relevant examples) creates a powerful context engineering pattern that scales to large knowledge bases while providing high-quality, grounded outputs.

## Next steps

- Learn about [middleware](/oss/javascript/langchain/middleware) for more dynamic agent behaviors
- Explore [context engineering](/oss/javascript/langchain/context-engineering) techniques for managing agent context
- Explore the [handoffs pattern](/oss/javascript/langchain/multi-agent/handoffs-customer-support) for sequential workflows
- Read the [subagents pattern](/oss/javascript/langchain/multi-agent/subagents-personal-assistant) for parallel task routing
- See [multi-agent patterns](/oss/javascript/langchain/multi-agent) for other approaches to specialized agents
- Use [LangSmith](https://smith.langchain.com) to debug and monitor skill loading

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/langchain/multi-agent/skills-sql-assistant.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
