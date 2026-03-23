# vercel init

The `vercel init` command is used to initialize [Vercel supported framework](/docs/frameworks) examples locally from the examples found in the [Vercel examples repository](https://github.com/vercel/vercel/tree/main/examples).

## Usage

```bash filename="terminal"
vercel init
```

*Using the \`vercel init\` command to initialize a Vercel
supported framework example locally. You will be prompted with a list of
supported frameworks to choose from.*

## Extended Usage

```bash filename="terminal"
vercel init [framework-name]
```

*Using the \`vercel init\` command to initialize a
specific framework example from the Vercel examples
repository locally.*

```bash filename="terminal"
vercel init [framework-name] [new-local-directory-name]
```

*Using the \`vercel init\` command to initialize a
specific Vercel framework example locally and rename the directory.*

## Unique Options

These are options that only apply to the `vercel env` command.

### Force

The `--force` option, shorthand `-f`, is used to forcibly replace an existing local directory.

```bash filename="terminal"
vercel init --force
```

*Using the \`vercel init\` command with the
\`--force\` option.*

```bash filename="terminal"
vercel init gatsby my-project-directory --force
```

*Using the \`vercel init\` command with the
\`--force\` option.*

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the  command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

title: "vercel inspect"
description: "Learn how to retrieve information about your Vercel deployments using the vercel inspect CLI command."
last\_updated: "2026-03-23T09:40:06.813Z"
source: "https://vercel.com/docs/cli/inspect"
