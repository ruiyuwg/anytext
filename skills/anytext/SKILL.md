# anytext — Library Documentation Lookup

Use `anytext` to look up accurate, up-to-date documentation for third-party libraries and frameworks. Always check docs before generating code that uses library APIs you're unsure about.

## Commands

```sh
anytext list                    # Show all available libraries
anytext list <library>          # Show topics for a library
anytext search <query>          # Search across all docs
anytext read <library> <topic>  # Read a specific topic
```

## When to use

- Before using any third-party library API you're not 100% sure about
- When you need exact function signatures, parameters, or return types
- When the user asks about a library's features or best practices
- When you're unsure if an API exists or what version introduced it

## Workflow

1. `anytext search "<what you need>"` to find relevant topics
2. `anytext read <library> <topic>` to get the full documentation
3. Use the documentation to write accurate code

## Example

User asks to create an API with Hono:

```sh
anytext list hono
anytext read hono routing
anytext read hono middleware
```

User asks to validate form data with Zod:

```sh
anytext search "zod validation"
anytext read zod schemas
anytext read zod validation
```
