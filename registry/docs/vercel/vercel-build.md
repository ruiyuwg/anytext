# vercel build

The `vercel build` command can be used to build a Vercel Project locally or in your own CI environment.
Build artifacts are placed into the `.vercel/output` directory according to the
[Build Output API](/docs/build-output-api/v3).

When used in conjunction with the `vercel deploy --prebuilt` command, this allows a Vercel Deployment
to be created *without* sharing the Vercel Project's source code with Vercel.

This command can also be helpful in debugging a Vercel Project by receiving error messages for a failed
build locally, or by inspecting the resulting build artifacts to get a better understanding of
how Vercel will create the Deployment.

It is recommended to run the `vercel pull` command before invoking `vercel build` to ensure that
you have the most recent Project Settings and Environment Variables stored locally.

## Usage

```bash filename="terminal"
vercel build
```

*Using the \`vercel build\` command to build a Vercel
Project.*

## Unique Options

These are options that only apply to the `vercel build` command.

### Production

The `--prod` option can be specified when you want to build the Vercel Project using Production Environment Variables. By default, the Preview Environment Variables will be used.

```bash filename="terminal"
vercel build --prod
```

*Using the \`vercel build\` command with the
\`--prod\` option.*

### Yes

The `--yes` option can be used to bypass the confirmation prompt and automatically pull environment variables and Project Settings if not found locally.

```bash filename="terminal"
vercel build --yes
```

*Using the \`vercel build\` command with the
\`--yes\` option.*

### target

Use the `--target` option to define the environment you want to build against. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

```bash filename="terminal"
vercel build --target=staging
```

### Output

The `--output` option specifies a custom directory where the build artifacts will be written to, instead of the default `.vercel/output` directory.

```bash filename="terminal"
vercel build --output ./custom-output
```

*Using the \`vercel build\` command with the
\`--output\` option to specify a custom output directory.*

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

## Related guides

- [How can I use the Vercel CLI for custom workflows?](/kb/guide/using-vercel-cli-for-custom-workflows)

title: "vercel buy"
description: "Learn how to purchase Vercel products like credits, addons, subscriptions, and domains using the vercel buy CLI command."
last\_updated: "2026-03-23T09:40:06.584Z"
source: "https://vercel.com/docs/cli/buy"
