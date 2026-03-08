## How it works

Here's the flow when a user asks for a SQL query:

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#4CAF50','primaryTextColor':'#fff','primaryBorderColor':'#2E7D32','lineColor':'#666','secondaryColor':'#FF9800','tertiaryColor':'#2196F3','tertiaryBorderColor':'#1565C0','tertiaryTextColor':'#fff'}}}%%
flowchart TD
    Start([💬 User: Write SQL query<br/>for high-value customers]) --> SystemPrompt[📋 Agent sees skill descriptions:<br/>• sales_analytics<br/>• inventory_management]

    SystemPrompt --> Decide{🤔 Need sales schema}

    Decide --> LoadSkill[🔧 load_skill<br/>'sales_analytics']

    LoadSkill --> Schema[📊 Schema loaded:<br/>customers, orders tables<br/>+ business logic]

    Schema --> WriteQuery[✍️ Agent writes SQL query<br/>using schema knowledge]

    WriteQuery --> Response([✅ Returns valid SQL<br/>following business rules])

    %% Styling for light and dark modes
    classDef startEnd fill:#DCFCE7,stroke:#16A34A,stroke-width:2px,color:#14532D
    classDef process fill:#FEF3C7,stroke:#F59E0B,stroke-width:2px,color:#78350F
    classDef decision fill:#DBEAFE,stroke:#2563EB,stroke-width:2px,color:#1E3A8A
    classDef enrichment fill:#F3E8FF,stroke:#9333EA,stroke-width:2px,color:#581C87

    class Start,Response startEnd
    class SystemPrompt,LoadSkill,WriteQuery process
    class Decide decision
    class Schema enrichment
```

**Why progressive disclosure:**

- **Reduces context usage** - load only the 2-3 skills needed for a task, not all available skills
- **Enables team autonomy** - different teams can develop specialized skills independently (similar to other multi-agent architectures)
- **Scales efficiently** - add dozens or hundreds of skills without overwhelming context
- **Simplifies conversation history** - single agent with one conversation thread

**What are skills:** Skills, as popularized by Claude Code, are primarily prompt-based: self-contained units of specialized instructions for specific business tasks. In Claude Code, skills are exposed as directories with files on the file system, discovered through file operations. Skills guide behavior through prompts and can provide information about tool usage or include sample code for a coding agent to execute.

Skills with progressive disclosure can be viewed as a form of [RAG (Retrieval-Augmented Generation)](/oss/python/langchain/rag), where each skill is a retrieval unit—though not necessarily backed by embeddings or keyword search, but by tools for browsing content (like file operations or, in this tutorial, direct lookup).

**Trade-offs:**

- **Latency**: Loading skills on-demand requires additional tool calls, which adds latency to the first request that needs each skill
- **Workflow control**: Basic implementations rely on prompting to guide skill usage - you cannot enforce hard constraints like "always try skill A before skill B" without custom logic

  **Implementing your own skills system**

  When building your own skills implementation (as we do in this tutorial), the core concept is progressive disclosure - loading information on-demand. Beyond that, you have full flexibility in implementation:

  - **Storage**: databases, S3, in-memory data structures, or any backend
  - **Discovery**: direct lookup (this tutorial), RAG for large skill collections, file system scanning, or API calls
  - **Loading logic**: customize latency characteristics and add logic to search through skill content or rank relevance
  - **Side effects**: define what happens when a skill loads, such as exposing tools associated with that skill (covered in section 8)

  This flexibility lets you optimize for your specific requirements around performance, storage, and workflow control.
