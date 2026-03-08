# vercel guidance

The `vercel guidance` command allows you to enable or disable guidance messages. Guidance messages are helpful suggestions shown after certain CLI commands complete, such as recommended next steps after a deployment.

## Usage

```bash filename="terminal"
vercel guidance <subcommand>
```

*Using the vercel guidance command to manage guidance
message settings.*

## Subcommands

### enable

Enable guidance messages to receive command suggestions after operations complete.

```bash filename="terminal"
vercel guidance enable
```

*Using vercel guidance enable to turn on guidance
messages.*

### disable

Disable guidance messages if you prefer a quieter CLI experience.

```bash filename="terminal"
vercel guidance disable
```

*Using vercel guidance disable to turn off guidance
messages.*

### status

Check whether guidance messages are currently enabled or disabled.

```bash filename="terminal"
vercel guidance status
```

*Using vercel guidance status to see the current
guidance setting.*

## Examples

### Enable guidance after deployment

```bash filename="terminal"
vercel guidance enable
vercel deploy
```

*After enabling guidance, deployments will show suggested next steps.*

### Check current status

```bash filename="terminal"
vercel guidance status
```

*Shows whether guidance messages are enabled or disabled.*

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the \`\` command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

title: "vercel help"
description: "Learn how to use the vercel help CLI command to get information about all available Vercel CLI commands."
last\_updated: "2026-03-08T05:03:12.179Z"
source: "https://vercel.com/docs/cli/help"

# vercel help

The `vercel help` command generates a list of all available Vercel CLI commands and [options](/docs/cli/global-options) in the terminal. When combined with a second argument - a valid Vercel CLI command - it outputs more detailed information about that command.

Alternatively, the [`--help` global option](/docs/cli/global-options#help) can be added to commands to get help information about that command.

## Usage

```bash filename="terminal"
vercel help
```

*Using the vercel help command to generate a list of
Vercel CLI commands and options.*

## Extended Usage

```bash filename="terminal"
vercel help [command]
```

*Using the vercel help command to generate detailed
information about a specific Vercel CLI command.*

title: "vercel httpstat"
description: "Learn how to visualize HTTP request timing statistics for your Vercel deployments using the vercel httpstat CLI command."
last\_updated: "2026-03-08T05:03:12.192Z"
source: "https://vercel.com/docs/cli/httpstat"
