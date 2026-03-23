# Build a SQL assistant with on-demand skills

Source: https://docs.langchain.com/oss/python/langchain/multi-agent/skills-sql-assistant

This tutorial shows how to use **progressive disclosure** - a context management technique where the agent loads information on-demand rather than upfront - to implement **skills** (specialized prompt-based instructions). The agent loads skills via tool calls, rather than dynamically changing the system prompt, discovering and loading only the skills it needs for each task.

**Use case:** Imagine building an agent to help write SQL queries across different business verticals in a large enterprise. Your organization might have separate datastores for each vertical, or a single monolithic database with thousands of tables. Either way, loading all schemas upfront would overwhelm the context window. Progressive disclosure solves this by loading only the relevant schema when needed. This architecture also enables different product owners and stakeholders to independently contribute and maintain skills for their specific business verticals.

**What you'll build:** A SQL query assistant with two skills (sales analytics and inventory management). The agent sees lightweight skill descriptions in its system prompt, then loads full database schemas and business logic through tool calls only when relevant to the user's query.

For a complete example of a SQL agent with query execution, error correction, and validation, see our [SQL Agent tutorial](/oss/python/langchain/sql-agent). This tutorial focuses on the progressive disclosure pattern which can be applied to any domain.

Progressive disclosure was popularized by Anthropic as a technique for building scalable agent skills systems. This approach uses a three-level architecture (metadata → core content → detailed resources) where agents load information only as needed. For more on this technique, see [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills).
