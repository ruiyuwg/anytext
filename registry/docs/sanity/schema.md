# Schema

## Available commands

**CLI output**

```sh
npx sanity schema --help
```

## Commands

### `delete`

**CLI output**

```sh
USAGE
  $ sanity schema delete [-d <name>] [-p <id>] --ids <value> [--verbose]

FLAGS
  -d, --dataset=<name>  Delete schemas from a specific dataset
      --ids=<value>     Comma-separated list of schema ids to delete
      --verbose         Enable verbose logging

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete schema from (overrides CLI configuration)

DESCRIPTION
  Delete schema documents by id

EXAMPLES
  Delete a single schema

    $ sanity schema delete --ids sanity.workspace.schema.workspaceName

  Delete multiple schemas

    $ sanity schema delete --ids sanity.workspace.schema.workspaceName,prefix.sanity.workspace.schema.otherWorkspace
```

### `deploy`

**CLI output**

```sh
USAGE
  $ sanity schema deploy [--extract-manifest] [--manifest-dir <directory>] [--tag <tag>] [--verbose] [--workspace <name>]

FLAGS
      --extract-manifest          Disables manifest generation - the command will fail if no manifest exists
      --manifest-dir=<directory>  Directory containing manifest file
      --tag=<tag>                 Add a tag suffix to the schema id
      --verbose                   Print detailed information during deployment
      --workspace=<name>          The name of the workspace to deploy a schema for

DESCRIPTION
  Deploy schema documents into workspace datasets.
  
  **Note**: This command is experimental and subject to change.
  
  This operation (re-)generates a manifest file describing the sanity config workspace by default.
  To re-use an existing manifest file, use --no-extract-manifest.

EXAMPLES
  Deploy all workspace schemas

    $ sanity schema deploy

  Deploy the schema for only the workspace "default"

    $ sanity schema deploy --workspace default
```

### `extract`

**CLI output**

```sh
USAGE
  $ sanity schema extract [--enforce-required-fields] [--format <format>] [--path <value>] [--watch] [--watch-patterns <glob>] [--workspace <name>]

FLAGS
      --enforce-required-fields  Makes the schema generated treat fields marked as required as non-optional
      --format=<format>          Format the schema as GROQ type nodes. Only available format at the moment.
      --path=<value>             Optional path to specify destination of the schema file
      --watch                    Enable watch mode to re-extract schema on file changes
      --watch-patterns=<glob>    Additional glob pattern(s) to watch (can be specified multiple times)
      --workspace=<name>         The name of the workspace to generate a schema for

DESCRIPTION
  Extracts a JSON representation of a Sanity schema within a Studio context.
  
  **Note**: This command is experimental and subject to change.

EXAMPLES
  Extracts schema types in a Sanity project with more than one workspace

    $ sanity schema extract --workspace default

  Watch mode - re-extract on changes

    $ sanity schema extract --watch

  Watch with custom glob patterns

    $ sanity schema extract --watch --watch-patterns "lib/**/*.ts"
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity schema list [--id <schema_id>] [--json]

FLAGS
      --id=<schema_id>  Fetch a single schema by id
      --json            Get schema as json

DESCRIPTION
  Lists all schemas in the current dataset.
  
  **Note**: This command is experimental and subject to change.
  
  This operation (re-)generates a manifest file describing the sanity config workspace by default.
  To re-use an existing manifest file, use --no-extract-manifest.

EXAMPLES
  List all schemas found in any workspace dataset in a table

    $ sanity schema list

  Get a schema for a given id

    $ sanity schema list --id _.schemas.workspaceName

  Get stored schemas as pretty-printed json-array

    $ sanity schema list --json

  Get singular stored schema as pretty-printed json-object

    $ sanity schema list --json --id _.schemas.workspaceName
```

### `validate`

**CLI output**

```sh
USAGE
  $ sanity schema validate [--debug-metafile-path <value>] [--format <value>] [--level <value>] [--workspace <value>]

FLAGS
      --format=<value>     The output format used to print schema errors and warnings
      --level=<value>      The minimum level reported out
      --workspace=<value>  The name of the workspace to use when validating all schema types

DEBUG FLAGS
      --debug-metafile-path=<value>  Optional path where a metafile will be written for build analysis. Only written on successful validation. Can be analyzed at https://esbuild.github.io/analyze/

DESCRIPTION
  Validates all schema types specified in a workspace

EXAMPLES
  Validates all schema types in a Sanity project with more than one workspace

    $ sanity schema validate --workspace default

  Save the results of the report into a file

    $ sanity schema validate > report.txt

  Report out only errors

    $ sanity schema validate --level error

  Generate a report which can be analyzed with https://esbuild.github.io/analyze/

    $ sanity schema validate --debug-metafile-path metafile.json
```

# Start

**CLI output**

```sh
USAGE
  $ sanity start [OUTPUTDIR]

ARGUMENTS
  [OUTPUTDIR]           Output directory

FLAGS
      --host=<HOST>                 The local network interface at which to listen.
      --port=<PORT>                 TCP port to start server on.

DESCRIPTION
  Starts a server to preview a production build

EXAMPLES
    sanity start --host=0.0.0.0

    sanity start --port=1942

    sanity start some/build-output-dir
```

# Telemetry

**CLI output**

```sh
npx sanity telemetry --help
```

## Commands

### `disable`

**CLI output**

```sh
USAGE
  $ sanity telemetry disable

DESCRIPTION
  Disable telemetry for your logged in user

EXAMPLES
  Disable telemetry for your logged in user

    $ sanity telemetry telemetry disable
```

### `enable`

**CLI output**

```sh
USAGE
  $ sanity telemetry enable

DESCRIPTION
  Enable telemetry for your logged in user

EXAMPLES
  Enable telemetry for your logged in user

    $ sanity telemetry telemetry enable
```

### `status`

**CLI output**

```sh
USAGE
  $ sanity telemetry status

DESCRIPTION
  Check telemetry consent status for your logged in user

EXAMPLES
  Check telemetry consent status for your logged in user

    $ sanity telemetry telemetry status
```

# TypeGen

#### New to the TypeGen?

This is reference documentation for the CLI's typegen command. If you're new to TypeGen, check out our getting started guide.
[Get started](https://www.sanity.io/docs/apis-and-sdks/sanity-typegen)

**CLI output**

```sh
npx sanity typegen --help
```

## Commands

### `generate`

**CLI output**

```sh
USAGE
  $ sanity typegen generate [--config-path <value>] [--watch]

FLAGS
      --config-path=<value>  [Default: sanity-typegen.json] Specifies the path to the typegen configuration file. This file should be a JSON file that contains settings for the type generation process.
      --watch                [Default: false] Run the typegen in watch mode

DESCRIPTION
  Sanity TypeGen
  
  Configuration:
  This command can utilize configuration settings defined in a `sanity-typegen.json` file. These settings include:
  
  - "path": Specifies a glob pattern to locate your TypeScript or JavaScript files.
    Default: "./src/**/*.{ts,tsx,js,jsx}"
  
  - "schema": Defines the path to your Sanity schema file. This file should be generated using the `sanity schema extract` command.
    Default: "schema.json"
  
  - "generates": Indicates the path where the generated TypeScript type definitions will be saved.
    Default: "./sanity.types.ts"
  
  The default configuration values listed above are used if not overridden in your `sanity-typegen.json` configuration file. To customize the behavior of the type generation, adjust these properties in the configuration file according to your project's needs.
  
  Note:
  - The `sanity schema extract` command is a prerequisite for extracting your Sanity Studio schema into a `schema.json` file, which is then used by the `sanity typegen generate` command to generate type definitions.

EXAMPLES
  Generate TypeScript type definitions from a Sanity Studio schema extracted using the `sanity schema extract` command.

    $ sanity typegen generate
```

# Undeploy

**CLI output**

```sh
USAGE
  $ sanity undeploy [--yes]

FLAGS
  -y, --yes  Unattended mode, answers "yes" to any "yes/no" prompt and otherwise uses defaults

DESCRIPTION
  Removes the deployed Sanity Studio/App from Sanity hosting
```

The `undeploy` command reads the studio host name from the `sanity.cli.ts` file in your studio directory. To enable support for deploying/undeploying multiple instances, follow the CI/CD instructions in the [deployment guide](https://www.sanity.io/docs/studio/deployment).

Once a studio is undeployed, the name (e.g., `<your-studio-name>`) becomes publicly available. Local instances of the studio are not affected.

# Users

**CLI output**

```sh
npx sanity users --help
```

## Commands

### `invite`

**CLI output**

```sh
USAGE
  $ sanity users invite [EMAIL] [-p <id>] [--role <value>]

ARGUMENTS
  [EMAIL]  Email address to invite

FLAGS
      --role=<value>  Role to invite the user as

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to invite user to (overrides CLI configuration)

DESCRIPTION
  Invite a new user to the project

EXAMPLES
  Invite a new user to the project (prompt for details)

    $ sanity users invite

  Send a new user invite to the email "pippi@sanity.io", prompt for role

    $ sanity users invite pippi@sanity.io

  Send a new user invite to the email "pippi@sanity.io", as administrator

    $ sanity users invite pippi@sanity.io --role administrator

  Invite a user to a specific project

    $ sanity users invite pippi@sanity.io --project-id abc123
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity users list [-p <id>] [--invitations] [--order <value>] [--robots] [--sort <value>]

FLAGS
      --invitations    Includes or excludes pending invitations
      --order=<value>  Sort output ascending/descending
      --robots         Includes or excludes robots (token users)
      --sort=<value>   Sort users by specified column

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list users for (overrides CLI configuration)

DESCRIPTION
  List all users of the project

EXAMPLES
  List all users of the project

    $ sanity users list

  List all users of the project, but exclude pending invitations and robots

    $ sanity users list --no-invitations --no-robots

  List all users, sorted by role

    $ sanity users list --sort role

  List users for a specific project

    $ sanity users list --project-id abc123
```

# Versions

**CLI output**

```sh
USAGE
  $ sanity versions

DESCRIPTION
  Shows installed versions of Sanity Studio and components

EXAMPLES
    $ sanity versions
```
