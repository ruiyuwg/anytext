# vercel contract

The `vercel contract` command displays contract commitment information for your Vercel account. It shows details about your contract periods, commitment types, and values.

## Usage

```bash filename="terminal"
vercel contract
```

*Using the \`vercel contract\` command to view all
contract commitments.*

The command outputs a table grouped by contract ID showing:

| Field               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| **Contract ID**     | The unique identifier for each contract                  |
| **Contract Period** | The start and end dates of the contract                  |
| **Commitment Type** | The type of commitment (e.g., spend or usage-based)      |
| **Category**        | Either "Spend" (Pro plans) or "Usage" (Enterprise plans) |
| **Period**          | The commitment period                                    |
| **Commitment**      | The committed value                                      |
| **Description**     | Additional details about the commitment                  |

## Unique options

These are options that only apply to the `vercel contract` command.

### Format

The `--format` option, shorthand `-F`, specifies the output format. Currently, `json` is the only supported format option.

```bash filename="terminal"
vercel contract --format json
```

*Using the \`vercel contract\` command to output contract
data as JSON.*

The JSON output includes:

- `context`: The user or team context
- `commitments`: An array of contract commitments with full details
- `totalCount`: The total number of commitments

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

title: "vercel curl"
description: "Learn how to make HTTP requests to your Vercel deployments with automatic deployment protection bypass using the vercel curl CLI command."
last\_updated: "2026-03-23T09:40:06.621Z"
source: "https://vercel.com/docs/cli/curl"
