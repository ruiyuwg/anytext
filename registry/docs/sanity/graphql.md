# GraphQL

## Available commands

```markdown
usage: sanity graphql [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   deploy    Deploy a GraphQL API from the current Sanity schema
   list      Lists all the GraphQL endpoints deployed for this project
   undeploy  Remove a deployed GraphQL API

See 'sanity help graphql <command>' for specific information on a subcommand.
```

> \[!WARNING]
> Gotcha
> Dataset names with dashes `-` in the name currently list incorrectly in the `sanity graphql list` command. If this causes issues for you please use a different delimiter in your dataset names. This is something we are aware of and looking to fix in the future.

## Deploying/updating an API

```markdown
usage: sanity graphql deploy

   Deploy a GraphQL API from the current Sanity schema

Options
  --dry-run Validate defined APIs, exiting with an error on breaking changes
  --force Deploy API without confirming breaking changes
  --api <api-id> Only deploy API with this ID. Can be specified multiple times.

The following options will override any setting from the CLI configuration file
(sanity.cli.js/sanity.cli.ts) - and applies to ALL defined APIs defined in that
configuration file. Tread with caution!

  --tag Deploy API(s) to given tag (defaults to 'default')
  --dataset <name> Deploy API for the given dataset
  --generation <gen1|gen2|gen3> API generation to deploy (defaults to 'gen3')
  --non-null-document-fields Use non-null document fields (_id, _type etc)
  --playground Enable GraphQL playground for easier debugging
  --no-playground Disable GraphQL playground
  --with-union-cache *Experimental:* Enable union cache that optimizes schema generation for schemas with many self referencing types

Examples
  # Deploy all defined GraphQL APIs
  sanity graphql deploy

  # Validate defined GraphQL APIs, check for breaking changes, skip deploy
  sanity graphql deploy --dry-run

  # Deploy only the GraphQL APIs with the IDs "staging" and "ios"
  sanity graphql deploy --api staging --api ios

  # Deploy all defined GraphQL APIs, overriding any playground setting
  sanity graphql deploy --playground
```

## Deleting/undeploying an API

```markdown
usage: sanity graphql undeploy undefined

   Remove a deployed GraphQL API

Options
  --dataset <dataset> Delete GraphQL API for the given dataset
  --tag <tag> Delete GraphQL API for the given tag (defaults to 'default')

Examples
  sanity graphql undeploy
  sanity graphql undeploy --dataset staging
  sanity graphql undeploy --dataset staging --tag next
```

# Help

```markdown
usage: sanity help [COMMAND]

   Displays help information about Sanity

With no options and no COMMAND given, the synopsis of the sanity command and a
list of the most commonly used commands are printed on the standard output.

If a command is given, the help page for that command is printed to standard
output. This will usually be more in-depth than the brief description shown in
the command list.
```

# Hook

```markdown
usage: sanity hook [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   attempt  Print details of a given webhook delivery attempt
   create   Create a new hook for the given dataset
   delete   Delete a hook within your project
   list     List hooks for a given project
   logs     List latest log entries for a given hook

See 'sanity help hook <command>' for specific information on a subcommand.
```

## Commands

### Attempt

```markdown
usage: sanity hook attempt ATTEMPT_ID

   Print details of a given webhook delivery attempt

```

### Create

```markdown
usage: sanity hook create

   Create a new hook for the given dataset

```

### Delete

```markdown
usage: sanity hook delete [NAME]

   Delete a hook within your project
```

### List

```markdown
usage: sanity hook list

   List hooks for a given project
```

### Logs

```markdown
usage: sanity hook logs [NAME]

   List latest log entries for a given hook
```

# Init

```markdown
usage: sanity init

   Initialize a new Sanity studio project

Options
  -y, --yes Use unattended mode, accepting defaults and using only flags for choices
  --project <projectId> Project ID to use for the studio
  --organization <organizationId> Organization ID to use for the project
  --dataset <dataset> Dataset name for the studio
  --dataset-default Set up a project with a public dataset named "production"
  --output-path <path> Path to write studio project to
  --template <template> Project template to use [default: "clean"]
  --bare Output only the project id and dataset to stdout
  --env <filename> Write environment variables to file [default: ".env"]
  --provider <provider> Login provider to use
  --visibility <mode> Visibility mode for dataset (public/private)
  --create-project <name> Create a new project with the given name
  --project-plan <name> Optionally select a plan for a new project
  --coupon <name> Optionally select a coupon for a new project (cannot be used with --project-plan)
  --no-typescript Do not use TypeScript for template files
  --package-manager Specify a package manager

Examples
  # Initialize a new project, prompt for required information along the way
  sanity init

  # Initialize a new project with a public dataset named "production"
  sanity init --dataset-default

  # Initialize a project with the given project ID and dataset to the given path
  sanity init -y --project abc123 --dataset production --output-path ~/myproj

  # Initialize a project with the given project ID and dataset using the moviedb
  # template to the given path
  sanity init -y --project abc123 --dataset staging --template moviedb --output-path .

  # Create a brand new project with name "Movies Unlimited"
  sanity init -y \
    --create-project "Movies Unlimited" \
    --dataset moviedb \
    --visibility private \
    --template moviedb \
    --output-path /Users/espenh/movies-unlimited
```

# Install

```markdown
usage: sanity install

   Installs dependencies of the current project
```

# Login

```markdown
usage: sanity login

   Authenticates against the Sanity.io API

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

```markdown
usage: sanity logout

   Logs out of the Sanity.io session

```

# Manage

```markdown
usage: sanity manage

   Opens the Sanity project management UI


```

# Manifest

```
usage: sanity manifest extract

   Extracts the studio configuration as one or more JSON manifest files.

**Note**: This command is experimental and subject to change. It is currently intended for use with Create only.

Options
  --path Optional path to specify destination directory of the manifest files. Default: /dist/static

Examples
  # Extracts manifests
  sanity manifest extract

  # Extracts manifests into /public/static
  sanity manifest extract --path /public/static
```
