Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Reference](https://docs.docker.com/reference/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Manuals](/manuals/)

# docker model skills

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Description

Install Docker Model Runner skills for AI coding assistants

Usage

`docker model skills`

## [Description](#description)

Install Docker Model Runner skills for AI coding assistants.

Skills are configuration files that help AI coding assistants understand how to use Docker Model Runner effectively for local model inference.

Supported targets: --codex Install to ~/.codex/skills (OpenAI Codex CLI) --claude Install to ~/.claude/skills (Claude Code) --opencode Install to ~/.config/opencode/skills (OpenCode) --dest Install to a custom directory

Example: docker model skills --claude docker model skills --codex --claude docker model skills --dest /path/to/skills

## [Options](#options)

Option

Default

Description

`--claude`

Install skills for Claude Code (~/.claude/skills)

`--codex`

Install skills for OpenAI Codex CLI (~/.codex/skills)

`--dest`

Install skills to a custom directory

`-f, --force`

Overwrite existing skills without prompting

`--opencode`

Install skills for OpenCode (~/.config/opencode/skills)

Table of contents
