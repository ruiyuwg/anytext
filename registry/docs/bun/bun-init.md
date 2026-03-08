# bun init

Source: https://bun.com/docs/runtime/templating/init

Scaffold an empty Bun project with the interactive `bun init` command

Get started with Bun by scaffolding a new project with `bun init`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun init my-app
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
? Select a project template - Press return to submit.
❯ Blank
  React
  Library

✓ Select a project template: Blank

 + .gitignore
 + CLAUDE.md
 + .cursor/rules/use-bun-instead-of-node-vite-npm-pnpm.mdc -> CLAUDE.md
 + index.ts
 + tsconfig.json (for editor autocomplete)
 + README.md
```

Press `enter` to accept the default answer for each prompt, or pass the `-y` flag to auto-accept the defaults.

***

`bun init` is a quick way to start a blank project with Bun. It guesses with sane defaults and is non-destructive when run multiple times.

![Demo](https://user-images.githubusercontent.com/709451/183006613-271960a3-ff22-4f7c-83f5-5e18f684c836.gif)

It creates:

- a `package.json` file with a name that defaults to the current directory name
- a `tsconfig.json` file or a `jsconfig.json` file, depending if the entry point is a TypeScript file or not
- an entry point which defaults to `index.ts` unless any of `index.{tsx, jsx, js, mts, mjs}` exist or the `package.json` specifies a `module` or `main` field
- a `README.md` file

AI Agent rules (disable with `$BUN_AGENT_RULE_DISABLED=1`):

- a `CLAUDE.md` file when Claude CLI is detected (disable with `CLAUDE_CODE_AGENT_RULE_DISABLED` env var)
- a `.cursor/rules/*.mdc` file to guide [Cursor AI](https://cursor.sh) to use Bun instead of Node.js and npm when Cursor is detected

If you pass `-y` or `--yes`, it will assume you want to continue without asking questions.

At the end, it runs `bun install` to install `@types/bun`.

***

## CLI Usage

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun init <folder?>
```

### Initialization Options

Accept all default prompts without asking questions. Alias: -y

Only initialize type definitions (skip app scaffolding). Alias: -m

### Project Templates

Scaffold a React project. When used without a value, creates a baseline React app.
Accepts values for presets:

```
  tailwind – React app preconfigured with Tailwind CSS



  shadcn – React app with @shadcn/ui and Tailwind CSS
```

Examples:

```
bun init --react bun init --react=tailwind bun init --react=shadcn
```

### Output & Files

Initializes project files and configuration for the chosen options (e.g., creating essential config files and a
starter directory structure). Exact files vary by template.

### Global Configuration & Context

Run bun init as if started in a different working directory (useful in scripts).

### Help

Print this help menu. Alias: -h

### Examples

- Accept all defaults

  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun init -y
  ```

- React

  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun init --react
  ```

- React + Tailwind CSS

  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun init --react=tailwind
  ```

- React + @shadcn/ui
  ```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
  bun init --react=shadcn
  ```
