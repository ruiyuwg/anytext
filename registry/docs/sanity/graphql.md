# GraphQL

**CLI output**

```sh
npx sanity graphql --help
```

## Commands

### `deploy`

**CLI output**

```sh
USAGE
  $ sanity graphql deploy [-d <name>] [--api <value>] [--dry-run] [--force] [--generation <value>] [--non-null-document-fields] [--playground] [--tag <value>] [--with-union-cache]

FLAGS
  -d, --dataset=<name>            Deploy API for the given dataset
      --api=<value>               Only deploy API with this ID. Can be specified multiple times.
      --dry-run                   Validate defined GraphQL APIs, check for breaking changes, skip deploy
      --force                     Deploy API without confirming breaking changes
      --generation=<value>        API generation to deploy (defaults to "gen3")
      --non-null-document-fields  Use non-null document fields (_id, _type etc)
      --playground                Enable GraphQL playground for easier debugging
      --tag=<value>               Deploy API(s) to given tag (defaults to "default")
      --with-union-cache          Enable union cache that optimizes schema generation for schemas with many self referencing types

DESCRIPTION
  Deploy a GraphQL API from the current Sanity schema

EXAMPLES
  Deploy all defined GraphQL APIs

    $ sanity graphql deploy

  Validate defined GraphQL APIs, check for breaking changes, skip deploy

    $ sanity graphql deploy --dry-run

  Deploy only the GraphQL APIs with the IDs "staging" and "ios"

    $ sanity graphql deploy --api staging --api ios

  Deploy all defined GraphQL APIs, overriding any playground setting

    $ sanity graphql deploy --playground
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity graphql list [-p <id>]

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list GraphQL endpoints for (overrides CLI configuration)

DESCRIPTION
  List all GraphQL endpoints deployed for this project

EXAMPLES
  List GraphQL endpoints for the current project

    $ sanity graphql list

  List GraphQL endpoints for a specific project

    $ sanity graphql list --project-id abc123
```

### `undeploy`

**CLI output**

```sh
USAGE
  $ sanity graphql undeploy [-d <name>] [-p <id>] [--api <value>] [--force] [--tag <value>]

FLAGS
      --api=<value>  Undeploy API with this ID
      --force        Skip confirmation prompt
      --tag=<value>  Tag to undeploy GraphQL API from

OVERRIDE FLAGS
  -d, --dataset=<name>   Dataset to undeploy GraphQL API from (overrides CLI configuration)
  -p, --project-id=<id>  Project ID to undeploy GraphQL API from (overrides CLI configuration)

DESCRIPTION
  Remove a deployed GraphQL API

EXAMPLES
  Undeploy GraphQL API for current project and dataset

    $ sanity graphql undeploy

  Undeploy API with ID "ios"

    $ sanity graphql undeploy --api ios

  Undeploy GraphQL API for staging dataset

    $ sanity graphql undeploy --dataset staging

  Undeploy GraphQL API for staging dataset with "next" tag

    $ sanity graphql undeploy --dataset staging --tag next

  Undeploy GraphQL API without confirmation prompt

    $ sanity graphql undeploy --force

  Undeploy GraphQL API for a specific project and dataset

    $ sanity graphql undeploy --project-id abc123 --dataset production
```

# Help

**CLI output**

```sh
USAGE
  $ sanity help [COMMAND] [--nested-commands]

ARGUMENTS
  [COMMAND]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for <%= config.bin %>.
```
