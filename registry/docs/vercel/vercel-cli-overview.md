# Vercel CLI Overview

Vercel gives you multiple ways to interact with and configure your Vercel Projects. With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system, enabling you to [retrieve logs](/docs/cli/logs), manage [certificates](/docs/cli/certs), replicate your deployment environment [locally](/docs/cli/dev), manage Domain Name System (DNS) [records](/docs/cli/dns), and more.

If you'd like to interface with the platform programmatically, check out the [REST API documentation](/docs/rest-api).

## Installing Vercel CLI

To download and install Vercel CLI, run the following command:

````
```bash
pnpm i vercel
```


```bash
yarn i vercel
```


```bash
npm i vercel
```


```bash
bun i vercel
```
````

## Updating Vercel CLI

When there is a new release of Vercel CLI, running any command will show you a message letting you know that an update is available.

If you have installed our command-line interface through [npm](http://npmjs.org/) or [Yarn](https://yarnpkg.com), the easiest way to update it is by running the installation command yet again.

````
```bash
pnpm i vercel
```


```bash
yarn i vercel
```


```bash
npm i vercel
```


```bash
bun i vercel
```
````

If you see permission errors, please read npm's [official guide](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally). Yarn depends on the same configuration as npm.

## Checking the version

The `--version` option can be used to verify the version of Vercel CLI currently being used.

```bash filename="terminal"
vercel --version
```

*Using the \`vercel\` command with the \`--version\` option.*

## Using in a CI/CD environment

Vercel CLI requires you to log in and authenticate before accessing resources or performing administrative tasks. In a terminal environment, you can use [`vercel login`](/docs/cli/login), which requires manual input. In a CI/CD environment where manual input is not possible, you can create a token on your [tokens page](/account/tokens) and then use the [`--token` option](/docs/cli/global-options#token) to authenticate.

## Available Commands

### alias

Apply custom domain aliases to your Vercel deployments.

```bash
vercel alias set [deployment-url] [custom-domain]
vercel alias rm [custom-domain]
vercel alias ls
```

[Learn more about the alias command](/docs/cli/alias)

### api

Make authenticated HTTP requests to the Vercel API from your terminal. This is a beta command.

```bash
vercel api [endpoint]
vercel api /v2/user
vercel api /v9/projects -X POST -F name=my-project
```

[Learn more about the api command](/docs/cli/api)

### bisect

Perform a binary search on your deployments to help surface issues.

```bash
vercel bisect
vercel bisect --good [deployment-url] --bad [deployment-url]
```

[Learn more about the bisect command](/docs/cli/bisect)

### blob

Interact with Vercel Blob storage to upload, download, list, delete, and copy files.

```bash
vercel blob list
vercel blob put [path-to-file]
vercel blob get [url-or-pathname]
vercel blob del [url-or-pathname]
vercel blob copy [from-url] [to-pathname]
```

[Learn more about the blob command](/docs/cli/blob)

### build

Build a Vercel Project locally or in your own CI environment.

```bash
vercel build
vercel build --prod
```

[Learn more about the build command](/docs/cli/build)

### cache

Manage cache for your project (CDN cache and Data cache).

```bash
vercel cache purge
vercel cache purge --type cdn
vercel cache purge --type data
vercel cache invalidate --tag foo
vercel cache dangerously-delete --tag foo
```

[Learn more about the cache command](/docs/cli/cache)

### certs

Manage certificates for your domains.

```bash
vercel certs ls
vercel certs issue [domain]
vercel certs rm [certificate-id]
```

[Learn more about the certs command](/docs/cli/certs)

### curl

Make HTTP requests to your Vercel deployments with automatic deployment protection bypass. This is a beta command.

```bash
vercel curl [path]
vercel curl /api/hello
vercel curl /api/data --deployment [deployment-url]
```

[Learn more about the curl command](/docs/cli/curl)

### deploy

Deploy your Vercel projects. Default command when no subcommand is specified.

```bash
vercel
vercel deploy
vercel deploy --prod
```

[Learn more about the deploy command](/docs/cli/deploy)

### dev

Replicate the Vercel deployment environment locally and test your project.

```bash
vercel dev
vercel dev --port 3000
```

[Learn more about the dev command](/docs/cli/dev)

### dns

Manage your DNS records for your domains.

```bash
vercel dns ls [domain]
vercel dns add [domain] [name] [type] [value]
vercel dns rm [record-id]
```

[Learn more about the dns command](/docs/cli/dns)

### domains

Buy, sell, transfer, and manage your domains.

```bash
vercel domains ls
vercel domains add [domain] [project]
vercel domains rm [domain]
vercel domains buy [domain]
```

[Learn more about the domains command](/docs/cli/domains)

### env

Manage environment variables in your Vercel Projects.

```bash
vercel env ls
vercel env add [name] [environment]
vercel env update [name] [environment]
vercel env rm [name] [environment]
vercel env pull [file]
vercel env run -- <command>
```

[Learn more about the env command](/docs/cli/env)

### flags

Manage feature flags for your Vercel Project.

```bash
vercel flags list
vercel flags create [slug]
vercel flags set [flag] --environment [environment] --variant [variant]
vercel flags open [flag]
```

[Learn more about the flags command](/docs/cli/flags)

### git

Manage your Git provider connections.

```bash
vercel git ls
vercel git connect
vercel git disconnect [provider]
```

[Learn more about the git command](/docs/cli/git)

### guidance

Enable or disable guidance messages shown after CLI commands.

```bash
vercel guidance enable
vercel guidance disable
vercel guidance status
```

[Learn more about the guidance command](/docs/cli/guidance)

### help

Get information about all available Vercel CLI commands.

```bash
vercel help
vercel help [command]
```

[Learn more about the help command](/docs/cli/help)

### httpstat

Visualize HTTP request timing statistics for your Vercel deployments with automatic deployment protection bypass.

```bash
vercel httpstat [path]
vercel httpstat /api/hello
vercel httpstat /api/data --deployment [deployment-url]
```

[Learn more about the httpstat command](/docs/cli/httpstat)

### init

Initialize example Vercel Projects locally from the examples repository.

```bash
vercel init
vercel init [project-name]
```

[Learn more about the init command](/docs/cli/init)

### inspect

Retrieve information about your Vercel deployments.

```bash
vercel inspect [deployment-id-or-url]
vercel inspect [deployment-id-or-url] --logs
vercel inspect [deployment-id-or-url] --wait
```

[Learn more about the inspect command](/docs/cli/inspect)

### install

Install a marketplace integration and provision a resource. Alias for `vercel integration add`.

```bash
vercel install <integration-name>
```

[Learn more about the install command](/docs/cli/install)

### integration

Manage marketplace integrations: provision resources, discover available integrations, view setup guides, check balances, and more.

```bash
vercel integration add <integration-name>
vercel integration list [project-name]
vercel integration discover
vercel integration guide <integration-name>
vercel integration balance <integration-name>
vercel integration open <integration-name> [resource-name]
vercel integration remove <integration-name>
```

[Learn more about the integration command](/docs/cli/integration)

### integration-resource

Manage individual resources from marketplace integrations: remove, disconnect from projects, and configure auto-recharge thresholds.

```bash
vercel integration-resource remove <resource-name>
vercel integration-resource disconnect <resource-name> [project-name]
vercel integration-resource create-threshold <resource-name> <minimum> <spend> <limit>
```

[Learn more about the integration-resource command](/docs/cli/integration-resource)

### link

Link a local directory to a Vercel Project.

```bash
vercel link
vercel link [path-to-directory]
```

[Learn more about the link command](/docs/cli/link)

### list

List recent deployments for the current Vercel Project.

```bash
vercel list
vercel list [project-name]
```

[Learn more about the list command](/docs/cli/list)

### login

Login to your Vercel account through CLI.

```bash
vercel login
vercel login [email]
vercel login --github
```

[Learn more about the login command](/docs/cli/login)

### logout

Logout from your Vercel account through CLI.

```bash
vercel logout
```

[Learn more about the logout command](/docs/cli/logout)

### logs

List runtime logs for a specific deployment.

```bash
vercel logs [deployment-url]
vercel logs [deployment-url] --follow
```

[Learn more about the logs command](/docs/cli/logs)

### mcp

Set up MCP client configuration for your Vercel Project.

```bash
vercel mcp
vercel mcp --project
```

[Learn more about the mcp command](/docs/cli/mcp)

### microfrontends

Work with microfrontends configuration.

```bash
vercel microfrontends pull
vercel microfrontends pull --dpl [deployment-id-or-url]
```

[Learn more about the microfrontends command](/docs/cli/microfrontends)

### open

Open your current project in the Vercel Dashboard.

```bash
vercel open
```

[Learn more about the open command](/docs/cli/open)

### project

List, add, inspect, remove, and manage your Vercel Projects.

```bash
vercel project ls
vercel project add
vercel project rm
vercel project inspect [project-name]
```

[Learn more about the project command](/docs/cli/project)

### promote

Promote an existing deployment to be the current deployment.

```bash
vercel promote [deployment-id-or-url]
vercel promote status [project]
```

[Learn more about the promote command](/docs/cli/promote)

### pull

Update your local project with remote environment variables and project settings.

```bash
vercel pull
vercel pull --environment=production
```

[Learn more about the pull command](/docs/cli/pull)

### redeploy

Rebuild and redeploy an existing deployment.

```bash
vercel redeploy [deployment-id-or-url]
```

[Learn more about the redeploy command](/docs/cli/redeploy)

### redirects

Manage project-level redirects.

```bash
vercel redirects list
vercel redirects add /old /new --status 301
vercel redirects upload redirects.csv --overwrite
vercel redirects promote <version-id>
```

[Learn more about the redirects command](/docs/cli/redirects)

### remove

Remove deployments either by ID or for a specific Vercel Project.

```bash
vercel remove [deployment-url]
vercel remove [project-name]
```

[Learn more about the remove command](/docs/cli/remove)

### rollback

Roll back production deployments to previous deployments.

```bash
vercel rollback
vercel rollback [deployment-id-or-url]
vercel rollback status [project]
```

[Learn more about the rollback command](/docs/cli/rollback)

### rolling-release

Manage your project's rolling releases to gradually roll out new deployments.

```bash
vercel rolling-release configure --cfg='[config]'
vercel rolling-release start --dpl=[deployment-id]
vercel rolling-release approve --dpl=[deployment-id]
vercel rolling-release complete --dpl=[deployment-id]
```

[Learn more about the rolling-release command](/docs/cli/rolling-release)

### switch

Switch between different team scopes.

```bash
vercel switch
vercel switch [team-name]
```

[Learn more about the switch command](/docs/cli/switch)

### teams

List, add, remove, and manage your teams.

```bash
vercel teams list
vercel teams add
vercel teams invite [email]
```

[Learn more about the teams command](/docs/cli/teams)

### target

Manage custom environments (targets) and use the `--target` flag on relevant commands.

```bash
vercel target list
vercel target ls
vercel deploy --target=staging
```

[Learn more about the target command](/docs/cli/target)

### telemetry

Enable or disable telemetry collection.

```bash
vercel telemetry status
vercel telemetry enable
vercel telemetry disable
```

[Learn more about the telemetry command](/docs/cli/telemetry)

### webhooks

Manage webhooks for your account. This command is in beta.

```bash
vercel webhooks list
vercel webhooks get <id>
vercel webhooks create <url> --event <event>
vercel webhooks rm <id>
```

[Learn more about the webhooks command](/docs/cli/webhooks)

### whoami

Display the username of the currently logged in user.

```bash
vercel whoami
```

[Learn more about the whoami command](/docs/cli/whoami)

title: "vercel project"
description: "Learn how to list, add, remove, and manage your Vercel Projects using the vercel project CLI command."
last\_updated: "2026-03-23T09:40:06.973Z"
source: "https://vercel.com/docs/cli/project"
