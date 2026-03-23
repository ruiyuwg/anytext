# vercel flags

The `vercel flags` command manages [Vercel Flags](/docs/flags/vercel-flags) for a project directly from the command line. You can create, list, inspect, open, update, set, enable, disable, archive, and delete feature flags, as well as manage SDK keys.

## Usage

```bash filename="terminal"
vercel flags list
```

*Using the \`vercel flags\` command to list all active
feature flags.*

```bash filename="terminal"
vercel flags create [slug]
```

*Using the \`vercel flags create\` command to create a new feature flag.*

```bash filename="terminal"
vercel flags inspect [flag]
```

*Using the \`vercel flags\` command to display information
about a feature flag.*

```bash filename="terminal"
vercel flags open [flag]
```

*Opening the project feature flags dashboard, or a specific feature flag, in
the Vercel dashboard.*

```bash filename="terminal"
vercel flags update [flag]
```

*Using the \`vercel flags\` command to update a flag's variants.*

```bash filename="terminal"
vercel flags set [flag]
```

*Using the \`vercel flags\` command to set the served variant in an
environment.*

```bash filename="terminal"
vercel flags enable [flag]
```

*Using the \`vercel flags\` command to enable a boolean feature flag in an
environment.*

```bash filename="terminal"
vercel flags disable [flag]
```

*Using the \`vercel flags\` command to disable a boolean feature flag in an
environment.*

```bash filename="terminal"
vercel flags archive [flag]
```

*Using the \`vercel flags\` command to archive a feature flag.*

```bash filename="terminal"
vercel flags rm [flag]
```

*Using the \`vercel flags\` command to delete a feature flag.*

## Extended usage

### Adding flags

Boolean flags are created by default. The `vercel flags create` command creates
a new feature flag.

```bash filename="terminal"
vercel flags create welcome-message --kind string --description "Homepage welcome copy" \
  --variant control="Welcome back" --variant treatment="Start for free"
```

*Creating a string feature flag with explicit variants.*

For string and number flags, repeat `--variant VALUE[=LABEL]` to define the exact variants you want to create. If you omit `--variant` in a terminal, the CLI prompts you to add variants interactively. In non-interactive environments, you must pass `--variant`.

Boolean flags always use the built-in `false` and `true` variants, labelled `Off` and `On`.

New boolean flags serve `true` in development and `false` in preview and production. The create output shows the initial environment behavior for the flag you just created.

### Opening flags

Use `vercel flags open` to jump straight to the Vercel dashboard.

```bash filename="terminal"
vercel flags open welcome-message
```

*Opening a specific feature flag in the Vercel dashboard.*

### Updating variants

Use `vercel flags update` to change an existing variant's value, label, or both. If you omit one of the update flags, the CLI can guide you interactively.

```bash filename="terminal"
vercel flags update welcome-message --variant control --value welcome-back \
  --label "Welcome back" --message "Refresh control copy"
```

*Updating a variant and recording a revision message.*

`--variant` matches a variant ID or current value. Run `vercel flags inspect` if you want to confirm the available variants before updating them.

For boolean flags, `vercel flags update` can rename the `true` or `false` variant labels, but it cannot change the boolean values themselves.

### Setting a served variant

Use `vercel flags set` to choose which variant a specific environment serves.

```bash filename="terminal"
vercel flags set welcome-message --environment preview --variant control \
  --message "Serve the control copy in preview"
```

*Setting the variant served in preview for a string flag.*

### Enabling and disabling flags

The `enable` and `disable` commands are shortcuts for boolean flags. They control whether an environment serves the `true` variant or the `false` variant. If you do not provide the `--environment` option, the CLI prompts you to select one interactively.

```bash filename="terminal"
vercel flags enable my-feature --environment production --message "Resume rollout"
```

*Enabling a boolean flag in production and recording why the change was made.*

```bash filename="terminal"
vercel flags disable my-feature -e production --variant false \
  --message "Pause rollout in production"
```

*Disabling a boolean flag and serving the \`false\` variant in production.*

> **💡 Note:** The `enable` and `disable` commands only work with boolean flags. For string
> or number flags, use `vercel flags set` to change the served variant in an
> environment and `vercel flags update` to change variant values or labels.

### Archiving and removing flags

A flag must be archived before it can be deleted. Archived flags stop evaluating and can be restored from the [dashboard](/docs/flags/vercel-flags/dashboard).

```bash filename="terminal"
vercel flags archive my-feature --yes
```

*Archiving a flag without a confirmation prompt.*

```bash filename="terminal"
vercel flags rm my-feature --yes
```

*Deleting an archived flag without a confirmation prompt.*

### SDK keys

The `vercel flags sdk-keys` subcommand manages SDK keys for your project. SDK keys authenticate your application when evaluating flags. You can create keys for different environments and key types.

```bash filename="terminal"
vercel flags sdk-keys ls
```

*Using the \`vercel flags sdk-keys ls\` command to list
all SDK keys.*

```bash filename="terminal"
vercel flags sdk-keys add --type server --environment production
```

*Creating a server SDK key for the production environment.*

```bash filename="terminal"
vercel flags sdk-keys rm [hash-key]
```

*Using the \`vercel flags sdk-keys rm\` command to delete
an SDK key.*

When you create an SDK key, the output includes:

- **Hash key**: A truncated identifier shown in the key list
- **SDK key**: The full key value, shown only at creation time
- **Connection string**: A `flags:` URI containing all configuration needed to connect to Vercel Flags

> **⚠️ Warning:** Save the SDK key when it's created. It won't be shown again.

If you don't provide the `--environment` option, you'll be prompted to select one interactively.

## Unique options

These are options that only apply to the `vercel flags` command.

### State

The `--state` option, shorthand `-s`, filters the list of flags by state when using `vercel flags list`. Valid values are `active` and `archived`. Defaults to `active`.

```bash filename="terminal"
vercel flags ls --state archived
```

*Using the \`vercel flags ls\` command with the
\`--state\` option to list archived flags.*

### Kind

The `--kind` option, shorthand `-k`, specifies the type of a new flag when using `vercel flags create`. Valid values are `boolean`, `string`, and `number`. Defaults to `boolean`.

```bash filename="terminal"
vercel flags create my-feature --kind string
```

*Using the \`vercel flags create\` command with the
\`--kind\` option to create a string flag.*

### Description

The `--description` option, shorthand `-d`, sets a description for a new flag when using `vercel flags create`.

```bash filename="terminal"
vercel flags create my-feature --description "Controls the new onboarding flow"
```

*Using the \`vercel flags create\` command with the
\`--description\` option.*

### Environment

The `--environment` option, shorthand `-e`, specifies the target environment for `vercel flags set`, `vercel flags enable`, `vercel flags disable`, and `vercel flags sdk-keys add`. Valid values are `production`, `preview`, and `development`.

```bash filename="terminal"
vercel flags set welcome-message --environment production --variant control
```

*Using the \`vercel flags set\` command with the
\`--environment\` option.*

### Variant

The `--variant` option, shorthand `-v`, defines variants on `vercel flags create`, and selects a variant by ID or value on `vercel flags update`, `vercel flags set`, and `vercel flags disable`.

```bash filename="terminal"
vercel flags create welcome-message --kind string \
  --variant control="Welcome back" --variant treatment="Start for free"
```

*Using repeated \`--variant\` options to create a string flag with explicit
variants.*

### Value

The `--value` option sets the new value for a variant when using `vercel flags update`. Boolean variants can keep their existing `true` or `false` value, but they cannot be changed to a different boolean value.

```bash filename="terminal"
vercel flags update welcome-message --variant control --value welcome-back
```

*Using the \`vercel flags update\` command with the \`--value\` option.*

### Label

The `--label` option, shorthand `-l`, sets a variant label when using `vercel flags update`, or an SDK key label when using `vercel flags sdk-keys add`.

```bash filename="terminal"
vercel flags update welcome-message --variant control --label "Welcome back"
```

*Using the \`vercel flags update\` command with the \`--label\` option.*

### Message

The `--message` option sets an optional revision message when using `vercel flags update`, `vercel flags set`, `vercel flags enable`, or `vercel flags disable`.

```bash filename="terminal"
vercel flags set welcome-message -e preview --variant control \
  --message "Keep preview on control"
```

*Using the \`vercel flags set\` command with the \`--message\` option.*

### Type

The `--type` option specifies the type of SDK key when using `vercel flags sdk-keys add`.

```bash filename="terminal"
vercel flags sdk-keys add --type server --environment production
```

*Using the \`vercel flags sdk-keys add\` command with the \`--type\` option.*

### Yes

The `--yes` option, shorthand `-y`, skips the confirmation prompt when archiving or deleting a flag, or when deleting an SDK key.

```bash filename="terminal"
vercel flags archive my-feature --yes
```

*Using the \`vercel flags archive\` command with the
\`--yes\` option to skip confirmation.*

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

title: "vercel git"
description: "Learn how to manage your Git provider connections using the vercel git CLI command."
last\_updated: "2026-03-23T09:40:06.771Z"
source: "https://vercel.com/docs/cli/git"

# vercel git

The `vercel git` command is used to manage a Git provider repository for a Vercel Project,
enabling deployments to Vercel through Git.

When run, Vercel CLI searches for a local `.git` config file containing at least one remote URL.
If found, you can connect it to the Vercel Project linked to your directory.

[Learn more about using Git with Vercel](/docs/git).

## Usage

```bash filename="terminal"
vercel git connect
```

*Using the \`vercel git\` command to connect a Git
provider repository from your local Git config to a Vercel Project.*

```bash filename="terminal"
vercel git disconnect
```

*Using the \`vercel git\` command to disconnect a
connected Git provider repository from a Vercel Project.*

## Unique Options

These are options that only apply to the `vercel git` command.

### Yes

The `--yes` option can be used to skip connect confirmation.

```bash filename="terminal"
vercel git connect --yes
```

*Using the \`vercel git connect\` command with the
\`--yes\` option.*

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

title: "Vercel CLI Global Options"
description: "Global options are commonly available to use with multiple Vercel CLI commands. Learn about Vercel CLI"
last\_updated: "2026-03-23T09:40:06.765Z"
source: "https://vercel.com/docs/cli/global-options"
