# WranglerCommand

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/wrangler-command.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# WranglerCommand

The `WranglerCommand` component is used `90` times on `7` pages.

See all examples of pages that use WranglerCommand

Used **90** times.

**Pages**

- [/workers/wrangler/commands/certificates/](https://developers.cloudflare.com/workers/wrangler/commands/certificates/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/wrangler/commands/certificates.mdx)
- [/workers/wrangler/commands/general/](https://developers.cloudflare.com/workers/wrangler/commands/general/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/wrangler/commands/general.mdx)
- [/workers/wrangler/commands/secrets-store/](https://developers.cloudflare.com/workers/wrangler/commands/secrets-store/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/wrangler/commands/secrets-store.mdx)
- [/workers/wrangler/commands/workers-for-platforms/](https://developers.cloudflare.com/workers/wrangler/commands/workers-for-platforms/)-[Source](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/docs/workers/wrangler/commands/workers-for-platforms.mdx)

**Partials**

- [src/content/partials/workers/wrangler-commands/kv.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/workers/wrangler-commands/kv.mdx)
- [src/content/partials/workers/wrangler-commands/r2-sql.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/workers/wrangler-commands/r2-sql.mdx)
- [src/content/partials/workers/wrangler-commands/r2.mdx](https://github.com/cloudflare/cloudflare-docs/blob/production/src/content/partials/workers/wrangler-commands/r2.mdx)

The `WranglerCommand` component documents the available options for a given command.

This is generated using the Wrangler version in the [cloudflare-docs repository ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/package.json).

## Import

```

import { WranglerCommand } from "~/components";


```

## Usage

## `deploy`

Deploy a [Worker](https://developers.cloudflare.com/workers/)

- [  npm ](#tab-panel-7075)
- [  pnpm ](#tab-panel-7076)
- [  yarn ](#tab-panel-7077)

Terminal window

```

npx wrangler deploy [SCRIPT]


```

Terminal window

```

pnpm wrangler deploy [SCRIPT]


```

Terminal window

```

yarn wrangler deploy [SCRIPT]


```

- `[SCRIPT]` string\
  The path to an entry point for your Worker
- `--name` string\
  Name of the Worker
- `--no-bundle` boolean default: false\
  Skip internal build steps and directly deploy Worker
- `--outdir` string\
  Output directory for the bundled Worker
- `--outfile` string\
  Output file for the bundled worker
- `--compatibility-date` string\
  Date to use for compatibility checks
- `--compatibility-flags` string alias: --compatibility-flag\
  Flags to use for compatibility checks
- `--latest` boolean default: false\
  Use the latest version of the Workers runtime
- `--assets` string\
  Static assets to be served. Replaces Workers Sites.
- `--var` string\
  A key-value pair to be injected into the script as a variable
- `--define` string\
  A key-value pair to be substituted in the script
- `--alias` string\
  A module pair to be substituted in the script
- `--triggers` string aliases: --schedule, --schedules\
  cron schedules to attach
- `--routes` string alias: --route\
  Routes to upload
- `--domains` string alias: --domain\
  Custom domains to deploy to
- `--jsx-factory` string\
  The function that is called for each JSX element
- `--jsx-fragment` string\
  The function that is called for each JSX fragment
- `--tsconfig` string\
  Path to a custom tsconfig.json file
- `--minify` boolean\
  Minify the Worker
- `--dry-run` boolean\
  Don't actually deploy
- `--metafile` string\
  Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir.
- `--keep-vars` boolean default: false\
  When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration. When used (and set to true), the environment variables are not deleted before the deployment. If you set variables via the dashboard you probably want to use this flag. Note that secrets are never deleted by deployments.
- `--logpush` boolean\
  Send Trace Events from this Worker to Workers Logpush. This will not configure a corresponding Logpush job automatically.
- `--upload-source-maps` boolean\
  Include source maps when uploading this Worker.
- `--old-asset-ttl` number\
  Expire old assets in given seconds rather than immediate deletion.
- `--dispatch-namespace` string\
  Name of a dispatch namespace to deploy the Worker to (Workers for Platforms)
- `--containers-rollout` "immediate" | "gradual"\
  Rollout strategy for Containers changes. If set to immediate, it will override `rollout_percentage_steps` if configured and roll out to 100% of instances in one step.
- `--tag` string\
  A tag for this Worker Version
- `--message` string\
  A descriptive message for this Worker Version and Deployment
- `--strict` boolean default: false\
  Enables strict mode for the deploy command, this prevents deployments to occur when there are even small potential risks.
- `--experimental-autoconfig` boolean aliases: --x-autoconfig default: true\
  Experimental: Enables framework detection and automatic configuration when deploying
- `--secrets-file` string\
  Path to a file containing secrets to upload with the deployment (JSON or .env format). Secrets from previous deployments will not be deleted - see `--keep-secrets`

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `d1 execute`

Execute a command or SQL file

You must provide either --command or --file for this command to run successfully.

- [  npm ](#tab-panel-7078)
- [  pnpm ](#tab-panel-7079)
- [  yarn ](#tab-panel-7080)

Terminal window

```

npx wrangler d1 execute [DATABASE]


```

Terminal window

```

pnpm wrangler d1 execute [DATABASE]


```

Terminal window

```

yarn wrangler d1 execute [DATABASE]


```

- `[DATABASE]` string required\
  The name or binding of the DB
- `--command` string\
  The SQL query you wish to execute, or multiple queries separated by ';'
- `--file` string\
  A .sql file to ingest
- `--yes` boolean alias: --y\
  Answer "yes" to any prompts
- `--local` boolean\
  Execute commands/files against a local DB for use with wrangler dev
- `--remote` boolean\
  Execute commands/files against a remote D1 database for use with remote bindings or your deployed Worker
- `--persist-to` string\
  Specify directory to use for local persistence (for use with --local)
- `--json` boolean default: false\
  Return output as JSON
- `--preview` boolean default: false\
  Execute commands/files against a preview D1 database

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

```

import { WranglerCommand } from "~/components";


<WranglerCommand

  command="deploy"

  description={"Deploy a [Worker](/workers/)"}

/>


<WranglerCommand command="d1 execute" />


```

## With ExtraFlagDetails

You can add or replace help text for specific flags using the `ExtraFlagDetails` component:

## `deploy`

🆙 Deploy a Worker to Cloudflare

- [  npm ](#tab-panel-7081)
- [  pnpm ](#tab-panel-7082)
- [  yarn ](#tab-panel-7083)

Terminal window

```

npx wrangler deploy [SCRIPT]


```

Terminal window

```

pnpm wrangler deploy [SCRIPT]


```

Terminal window

```

yarn wrangler deploy [SCRIPT]


```

- `[SCRIPT]` string\
  The path to an entry point for your Worker
- `--name` string\
  Name of the Worker
- `--no-bundle` boolean default: false\
  Skip internal build steps and directly deploy Worker
- `--outdir` string\
  Output directory for the bundled Worker
- `--outfile` string\
  Output file for the bundled worker
- `--compatibility-date` string\
  Custom help text that completely replaces the original description for this flag.
- `--compatibility-flags` string alias: --compatibility-flag\
  Flags to use for compatibility checks
- `--latest` boolean default: false\
  Use the latest version of the Workers runtime
- `--assets` string\
  Static assets to be served. Replaces Workers Sites.
- `--var` string\
  A key-value pair to be injected into the script as a variable
- `--define` string\
  A key-value pair to be substituted in the script
- `--alias` string\
  A module pair to be substituted in the script
- `--triggers` string aliases: --schedule, --schedules\
  cron schedules to attach
- `--routes` string alias: --route\
  Routes to upload
- `--domains` string alias: --domain\
  Custom domains to deploy to
- `--jsx-factory` string\
  The function that is called for each JSX element
- `--jsx-fragment` string\
  The function that is called for each JSX fragment
- `--tsconfig` string\
  Path to a custom tsconfig.json file
- `--minify` boolean\
  Minify the Worker
- `--dry-run` boolean\
  Don't actually deploy\
  Additional details about the dry-run flag that will be appended to the original help text. Here is a [link ↗](https://cloudflare.com) for more information.
- `--metafile` string\
  Path to output build metadata from esbuild. If flag is used without a path, defaults to 'bundle-meta.json' inside the directory specified by --outdir.
- `--keep-vars` boolean default: false\
  When not used (or set to false), Wrangler will delete all vars before setting those found in the Wrangler configuration. When used (and set to true), the environment variables are not deleted before the deployment. If you set variables via the dashboard you probably want to use this flag. Note that secrets are never deleted by deployments.
- `--logpush` boolean\
  Send Trace Events from this Worker to Workers Logpush. This will not configure a corresponding Logpush job automatically.
- `--upload-source-maps` boolean\
  Include source maps when uploading this Worker.
- `--old-asset-ttl` number\
  Expire old assets in given seconds rather than immediate deletion.
- `--dispatch-namespace` string\
  Name of a dispatch namespace to deploy the Worker to (Workers for Platforms)
- `--containers-rollout` "immediate" | "gradual"\
  Rollout strategy for Containers changes. If set to immediate, it will override `rollout_percentage_steps` if configured and roll out to 100% of instances in one step.
- `--tag` string\
  A tag for this Worker Version
- `--message` string\
  A descriptive message for this Worker Version and Deployment
- `--strict` boolean default: false\
  Enables strict mode for the deploy command, this prevents deployments to occur when there are even small potential risks.
- `--experimental-autoconfig` boolean aliases: --x-autoconfig default: true\
  Experimental: Enables framework detection and automatic configuration when deploying
- `--secrets-file` string\
  Path to a file containing secrets to upload with the deployment (JSON or .env format). Secrets from previous deployments will not be deleted - see `--keep-secrets`

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

```

import { WranglerCommand, ExtraFlagDetails } from "~/components";


<WranglerCommand command="deploy">

  <ExtraFlagDetails key="dry-run">

    Additional details about the dry-run flag that will be appended to the

    original help text. Here is a [link](https://cloudflare.com) for more

    information.

  </ExtraFlagDetails>

  <ExtraFlagDetails key="compatibility-date" mode="replace">

    Custom help text that completely replaces the original description for this

    flag.

  </ExtraFlagDetails>

</WranglerCommand>


```

## Arguments

- `command` string required
  - The name of the command, i.e `d1 execute`.
- `headingLevel` boolean (default: 2) optional
  - The heading level that the command name should be added at on the page, i.e `2` for a `h2`.
- `description` string optional
  - A description to render below the command heading. If not set, defaults to the value specified in the Wrangler help API.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/wrangler-command/","name":"WranglerCommand"}}]}
```
