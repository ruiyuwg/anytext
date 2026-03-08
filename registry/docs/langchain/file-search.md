### File search

Provide Glob and Grep search tools over a filesystem. File search middleware is useful for the following:

- Code exploration and analysis
- Finding files by name patterns
- Searching code content with regex
- Large codebases where file discovery is needed

**API reference:** [`FilesystemFileSearchMiddleware`](https://reference.langchain.com/python/langchain/agents/middleware/file_search/FilesystemFileSearchMiddleware)

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import FilesystemFileSearchMiddleware

agent = create_agent(
    model="gpt-4.1",
    tools=[],
    middleware=[
        FilesystemFileSearchMiddleware(
            root_path="/workspace",
            use_ripgrep=True,
        ),
    ],
)
```

```
Root directory to search. All file operations are relative to this path.



Whether to use ripgrep for search. Falls back to Python regex if ripgrep is unavailable.



Maximum file size to search in MB. Files larger than this are skipped.
```

The middleware adds two search tools to agents:

**Glob tool** - Fast file pattern matching:

- Supports patterns like `**/*.py`, `src/**/*.ts`
- Returns matching file paths sorted by modification time

**Grep tool** - Content search with regex:

- Full regex syntax support
- Filter by file patterns with `include` parameter
- Three output modes: `files_with_matches`, `content`, `count`

```python theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
from langchain.agents import create_agent
from langchain.agents.middleware import FilesystemFileSearchMiddleware
from langchain.messages import HumanMessage


agent = create_agent(
    model="gpt-4.1",
    tools=[],
    middleware=[
        FilesystemFileSearchMiddleware(
            root_path="/workspace",
            use_ripgrep=True,
            max_file_size_mb=10,
        ),
    ],
)

# Agent can now use glob_search and grep_search tools
result = agent.invoke({
    "messages": [HumanMessage("Find all Python files containing 'async def'")]
})

# The agent will use:
# 1. glob_search(pattern="**/*.py") to find Python files
# 2. grep_search(pattern="async def", include="*.py") to find async functions
```
