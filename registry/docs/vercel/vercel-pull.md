# vercel pull

The `vercel pull` command is used to store [Environment Variables](/docs/environment-variables) and Project Settings in a local cache (under `.vercel/.env.$target.local.`) for offline use of `vercel build` and `vercel dev`. **If you aren't using those commands, you don't need to run `vercel pull`**.

When environment variables or project settings are updated on Vercel, remember to use `vercel pull` again to update your local environment variable and project settings values under `.vercel/`.

> **💡 Note:** To download [Environment Variables](/docs/environment-variables) to a specific
> file (like `.env`), use [`vercel env
>   pull`](/docs/cli/env#exporting-development-environment-variables)  
> instead.

## Usage

```bash filename="terminal"
vercel pull
```

*Using the \`vercel pull\` fetches the latest
"development" Environment Variables and Project Settings from the cloud.*

```bash filename="terminal"
vercel pull --environment=preview
```

*Using the \`vercel pull\` fetches the latest "preview"
Environment Variables and Project Settings from the cloud.*

```bash filename="terminal"
vercel pull --environment=preview --git-branch=feature-branch
```

*Using the \`vercel pull\` fetches the "feature-branch"
Environment Variables and Project Settings from the cloud.*

```bash filename="terminal"
vercel pull --environment=production
```

*Using the \`vercel pull\` fetches the latest "production"
Environment Variables and Project Settings from the cloud.*

## Unique Options

These are options that only apply to the `vercel pull` command.

### Yes

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel Project.
The questions will be answered with the default scope and current directory for the Vercel Project name and location.

```bash filename="terminal"
vercel pull --yes
```

*Using the \`vercel pull\` command with the
\`--yes\` option.*

### environment

Use the `--environment` option to define the environment you want to pull environment variables from. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

```bash filename="terminal"
vercel pull --environment=staging
```

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

title: "vercel redeploy"
description: "Learn how to redeploy your project using the vercel redeploy CLI command."
last\_updated: "2026-03-23T09:40:07.006Z"
source: "https://vercel.com/docs/cli/redeploy"
