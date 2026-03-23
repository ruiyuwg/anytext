# Init

**CLI output**

```sh
USAGE
  $ sanity init [--yes] [--auto-updates] [--bare] [--coupon <code>] [--create-project <name>] [--dataset <name>] [--dataset-default] [--env <filename>] [--git <message>] [--json] [--mcp] [--nextjs-add-config-files] [--nextjs-append-env] [--nextjs-embed-studio] [--organization <id>] [--output-path <path>] [--overwrite-files] [--package-manager <manager>] [--project <id>] [--project-plan <name>] [--provider <provider>] [--template <template>] [--typescript] [--visibility <mode>]

FLAGS
  -y, --yes                        Unattended mode, answers "yes" to any "yes/no" prompt and otherwise uses defaults
      --auto-updates               Enable auto updates of studio versions
      --bare                       Skip the Studio initialization and only print the selected project ID and dataset name to stdout
      --coupon=<code>              Optionally select a coupon for a new project (cannot be used with --project-plan)
      --create-project=<name>      Create a new project with the given name
      --dataset=<name>             Dataset name for the studio
      --dataset-default            Set up a project with a public dataset named "production"
      --env=<filename>             Write environment variables to file
      --git=<message>              Specify a commit message for initial commit, or disable git init
      --mcp                        Enable AI editor integration (MCP) setup
      --organization=<id>          Organization ID to use for the project
      --output-path=<path>         Path to write studio project to
      --overwrite-files            Overwrite existing files
      --package-manager=<manager>  Specify which package manager to use [allowed: npm, yarn, pnpm]
      --project=<id>               Project ID to use for the studio
      --project-plan=<name>        Optionally select a plan for a new project
      --provider=<provider>        Login provider to use
      --template=<template>        Project template to use [default: "clean"]
      --typescript                 Enable TypeScript support
      --visibility=<mode>          Visibility mode for dataset

GLOBAL FLAGS
      --json  Format output as json.

Next.js FLAGS
      --nextjs-add-config-files  Add config files to Next.js project
      --nextjs-append-env        Append project ID and dataset to .env file
      --nextjs-embed-studio      Embed the Studio in Next.js application

DESCRIPTION
  Initialize a new Sanity Studio, project and/or app

EXAMPLES
    $ sanity init

  Initialize a new project with a public dataset named "production"

    $ sanity init --dataset-default

  Initialize a project with the given project ID and dataset to the given path

    $ sanity init -y --project abc123 --dataset production --output-path ~/myproj

  Initialize a project with the given project ID and dataset using the moviedb template to the given path

    $ sanity init -y --project abc123 --dataset staging --template moviedb --output-path .

  Create a brand new project with name "Movies Unlimited"

    $ sanity init -y --create-project "Movies Unlimited" --dataset moviedb --visibility private --template moviedb --output-path /Users/espenh/movies-unlimited
```

# Install

**CLI output**

```sh
USAGE
  $ sanity install [PACKAGES]

ARGUMENTS
  [PACKAGES]  Packages to install

DESCRIPTION
  Installs dependencies for Sanity Studio project

EXAMPLES
    $ sanity install

    $ sanity install @sanity/vision

    $ sanity install some-package another-package
```

# Learn

**CLI output**

```sh
USAGE
  $ sanity learn

DESCRIPTION
  Opens Sanity Learn in your web browser
```

# Login

**CLI output**

```sh
USAGE
  $ sanity login [--open] [--provider <providerId>] [--sso <slug>]

FLAGS
      --open                   Open a browser window to log in (`--no-open` only prints URL)
      --provider=<providerId>  Log in using the given provider
      --sso=<slug>             Log in using Single Sign-On, using the given organization slug

DESCRIPTION
  Authenticates the CLI for access to Sanity projects

EXAMPLES
  Log in using default settings

    $ sanity login

  Log in using Single Sign-On with the "my-organization" slug

    $ sanity login --sso my-organization

  Login with GitHub provider, but do not open a browser window automatically

    $ sanity login --provider github --no-open
```

The `sanity login` process requires a browser. To run a command that requires authentication but where a browser is not available, such as on a server, you can login locally, run `sanity debug --secrets` to get a personal auth token, and then precede the command requiring authentication with `SANITY_AUTH_TOKEN=<token>`.

```markdown
SANITY_AUTH_TOKEN=ab97ae7...0f9ff sanity init -y \
  --create-project "Movies Unlimited" \
  --dataset moviedb \
  --visibility private \
  --template moviedb \
  --output-path /path/to/folder
```

## Login with SAML SSO

> \[!NOTE]
> SAML SSO Prerequisites
> SAML SSO requires an organization with a business or enterprise plan and an external identity provider that supports SAML authentication, such as Okta, Azure AD, or Google.

Users configured with [SAML SSO](https://www.sanity.io/docs/developer-guides/sso-saml) can use the `--sso` flag when logging in to pass their slug and log into a project using their third-party identity provider. The slug is set via the [Sanity Management Console](https://www.sanity.io/manage) and is configured under the Settings tab for the Organization.

```markdown
usage: sanity login --sso <slug>

   Authenticates against a third-party identity provider

```

# Logout

**CLI output**

```sh
USAGE
  $ sanity logout

DESCRIPTION
  Logs out the CLI from the current user session
```

# Manage

**CLI output**

```sh
USAGE
  $ sanity manage

DESCRIPTION
  Opens project management interface in your web browser
```

# Manifest

**CLI output**

```sh
npx sanity manifest --help
```

## Commands

### `extract`

**CLI output**

```sh
USAGE
  $ sanity manifest extract [--path <value>]

FLAGS
      --path=<value>  Optional path to specify destination directory of the manifest files

DESCRIPTION
  Extracts the studio configuration as one or more JSON manifest files.
  
  **Note**: This command is experimental and subject to change. It is currently intended for use with Create only.

EXAMPLES
  Extracts manifests

    $ sanity manifest extract

  Extracts manifests into /public/static

    $ sanity manifest extract --path /public/static
```

# MCP

#### New to the Sanity MCP server?

This is reference documentation for the CLI's MCP command. If you're new to the Sanity MCP server, check out our getting started guide.
[Get started](https://www.sanity.io/docs/ai/mcp-server)

**CLI output**

```sh
npx sanity mcp --help
```

## Commands

### `configure`

**CLI output**

```sh
USAGE
  $ sanity mcp configure

DESCRIPTION
  Configure Sanity MCP server for AI editors (Claude Code, Codex CLI, Cursor, Gemini CLI, GitHub Copilot CLI, VS Code)

EXAMPLES
  Configure Sanity MCP server for detected AI editors

    $ sanity mcp configure
```
