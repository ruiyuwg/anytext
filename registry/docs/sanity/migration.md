# Migration

**CLI output**

```sh
npx sanity migration --help
```

## Commands

### `create`

**CLI output**

```sh
USAGE
  $ sanity migration create [TITLE]

ARGUMENTS
  [TITLE]  Title of migration

DESCRIPTION
  Create a new migration within your project

EXAMPLES
  Create a new migration, prompting for title and options

    $ sanity migration create

  Create a new migration with the provided title, prompting for options

    $ sanity migration create "Rename field from location to address"
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity migration list

DESCRIPTION
  List available migrations

EXAMPLES
  List all available migrations in the project

    $ sanity migration list
```

### `run`

**CLI output**

```sh
USAGE
  $ sanity migration run [ID] [--api-version <value>] [--concurrency <value>] [--confirm] [--dataset <value>] [--dry-run] [--from-export <value>] [--progress] [--project <value>]

ARGUMENTS
  [ID]  ID

FLAGS
      --api-version=<value>  API version to use when migrating. Defaults to v2024-01-29.
      --concurrency=<value>  How many mutation requests to run in parallel. Must be between 1 and 10. Default: 6.
      --confirm              Prompt for confirmation before running the migration (default: true). Use --no-confirm to skip.
      --dataset=<value>      Dataset to migrate. Defaults to the dataset configured in your Sanity CLI config.
      --dry-run              By default the migration runs in dry mode. Use --no-dry-run to migrate dataset.
      --from-export=<value>  Use a local dataset export as source for migration instead of calling the Sanity API. Note: this is only supported for dry runs.
      --progress             Display progress during migration (default: true). Use --no-progress to hide output.
      --project=<value>      Project ID of the dataset to migrate. Defaults to the projectId configured in your Sanity CLI config.

DESCRIPTION
  Run a migration against a dataset

EXAMPLES
  dry run the migration

    $ sanity migration run <id>

  execute the migration against a dataset

    $ sanity migration run <id> --no-dry-run --project xyz --dataset staging

  execute the migration using a dataset export as the source

    $ sanity migration run <id> --from-export=production.tar.gz --no-dry-run --project xyz --dataset staging
```

# Preview

**CLI output**

```sh
USAGE
  $ sanity preview [OUTPUTDIR] [--host <value>] [--port <value>]

ARGUMENTS
  [OUTPUTDIR]  Output directory

FLAGS
      --host=<value>  [default: localhost] The local network interface at which to listen.
      --port=<value>  [default: 3333] TCP port to start server on.

DESCRIPTION
  Starts a server to preview a production build

EXAMPLES
    $ sanity preview --host=0.0.0.0

    $ sanity preview --port=1942

    $ sanity preview some/build-output-dir
```

# Projects

**CLI output**

```sh
npx sanity projects --help
```

## Commands

### `create`

**CLI output**

```sh
USAGE
  $ sanity projects create [PROJECTNAME] [--yes] [--dataset <value>] [--dataset-visibility <value>] [--json] [--organization <slug|id>]

ARGUMENTS
  [PROJECTNAME]  Name of the project to create

FLAGS
  -y, --yes                         Skip prompts and use defaults (project: "My Sanity Project", dataset: production, visibility: public)
      --dataset=<value>             Create a dataset. Prompts for visibility unless specified or --yes used
      --dataset-visibility=<value>  Dataset visibility: public or private
      --json                        Output in JSON format
      --organization=<slug|id>      Organization to create the project in

DESCRIPTION
  Create a new Sanity project

EXAMPLES
  Interactively create a project

    $ sanity projects create

  Create a project named "My New Project"

    $ sanity projects create "My New Project"

  Create a project in a specific organization

    $ sanity projects create "My Project" --organization=my-org

  Create a project with a private dataset named "staging"

    $ sanity projects create "My Project" --dataset=staging --dataset-visibility=private

  Create a project non-interactively with JSON output

    $ sanity projects create "CI Project" --yes --json
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity projects list [--order <value>] [--sort <value>]

FLAGS
      --order=<value>
      --sort=<value>

DESCRIPTION
  Lists projects connected to your user

EXAMPLES
  List projects

    $ sanity projects list

  List all users of the project, but exclude pending invitations and robots

    $ sanity projects list --sort=members --order=asc
```
