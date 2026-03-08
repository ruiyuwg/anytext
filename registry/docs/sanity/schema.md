# Schema

## Available commands

```sh
usage: npx sanity schema [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   delete    Delete schemas by their IDs.
   deploy    Deploy schemas into workspace datasets.
   extract   Extracts a JSON representation of a Sanity schema within a Studio context.
   list      Lists all schemas in the current dataset.
   validate  Validates all schema types specified in a workspace.

See 'sanity help schema <command>' for specific information on a subcommand.
```

## Delete a schema

```sh
usage: npx sanity schema delete 

   Delete schemas by their IDs.

Options
  --ids <schema_id_1,schema_id_2,...> comma-separated list of schema IDs to delete
  --dataset <dataset_name> delete schemas from a specific dataset
  --manifest-dir <directory> directory containing your manifest file if it's not in the default location
  --no-extract-manifest disables manifest generation – the command will fail if no manifest exists

Examples
  # Delete single schema
  sanity schema delete --ids <schema_id>

  # Delete multiple schemas
  sanity schema delete --ids <schema_id_1,schema_id_2,...>
```

## Deploy schemas

```sh
usage: npx sanity schema deploy 

   Deploy schemas into workspace datasets.

Options:
  --workspace <workspace_name> deploy schema for a specific workspace
  --manifest-dir <directory> directory containing your manifest file if it's not in the default location
  --no-extract-manifest disables manifest generation – the command will fail if no manifest exists
  --id-prefix <prefix> add a prefix to the schema ID
  --schema-required fail if schema file is not found
  --verbose print detailed information during store

Examples
  # if no options are provided all workspace schemas will be deployed
  sanity schema deploy
  # Deploy the schema for only the workspace 'default'
  sanity schema deploy --workspace default
```

## Extract a schema

```
usage: npx sanity schema extract

   Extracts a JSON representation of a Sanity schema within a Studio context.

**Note**: This command is experimental and subject to change.

Options
  --workspace <name> The name of the workspace to generate a schema for
  --path Optional path to specify destination of the schema file
  --enforce-required-fields Makes the schema generated treat fields marked as required as non-optional. Defaults to false.
  --format=[groq-type-nodes] Format the schema as GROQ type nodes. Only available format at the moment.

Examples
  # Extracts schema types in a Sanity project with more than one workspace
  sanity schema extract --workspace default
```

## List schemas

```sh
usage: npx sanity schema list 

   Lists all schemas in the current dataset.

Options
  --json get schemas as json
  --id <schema_id> fetch a specific schema by its ID
  --manifest-dir <directory> directory containing your manifest file if it's not in the default location
  --no-extract-manifest disables manifest generation – the command will fail if no manifest exists

Examples
  # Get full json schemas
  sanity schema list --json

  # Get a specific schema by ID
  sanity schema list --id <schema_id>
```

## Validate a schema

```
usage: npx sanity schema validate

  Validates all schema types specified in a workspace.

Options
  --workspace <name> The name of the workspace to use when validating all schema types.
  --format <pretty|ndjson|json> The output format used to print schema errors and warnings.
  --level <error|warning> The minimum level reported out. Defaults to warning.

Examples
  # Validates all schema types in a Sanity project with more than one workspace
  sanity schema validate --workspace default

  # Save the results of the report into a file
  sanity schema validate > report.txt

  # Report out only errors
  sanity schema validate --level error
```

# Start

```markdown
usage: sanity start [BUILD_OUTPUT_DIR] [--port <port>] [--host <host>]

   Alias of `sanity preview`

Notes
  Changing the hostname or port number might require a new CORS-entry to be added.

Options
  --port <port> TCP port to start server on. [default: 3333]
  --host <host> The local network interface at which to listen. [default: "127.0.0.1"]

Examples
  sanity start --host=0.0.0.0
  sanity start --port=1942
  sanity start some/build-output-dir
```

# Telemetry

```markdown
usage: sanity telemetry [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   disable  Disable telemetry for your logged in user
   enable   Enable telemetry for your logged in user
   status   Check telemetry consent status for your logged in user
```

See the [Telemetry overview page](https://www.sanity.io/telemetry) for more details.

# TypeGen

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

```sh
usage: sanity typegen [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   generate  Generates TypeScript types from schema types and GROQ queries
   

See 'sanity help typegen <command>' for specific information on a subcommand.
```

## Generate

```sh
usage: sanity typegen generate [--watch] [--config-path <value>]

Options:
  --watch
    Run the typegen in watch mode
    Default: false

  --config-path <path>
    Specifies the path to the typegen configuration file. This file should be a JSON file that contains settings for the type generation process.
    Default: "sanity-typegen.json"
```

# Undeploy

```text
usage: sanity undeploy

Removes the deployed studio from .sanity.studio

Examples
sanity undeploy
```

The `undeploy` command reads the studio host name from the `sanity.cli.ts` file in your studio directory. To enable support for deploying/undeploying multiple instances, follow the CI/CD instructions in the [deployment guide](https://www.sanity.io/docs/studio/deployment).

Once a studio is undeployed, the name (e.g., `<your-studio-name>`) becomes publicly available. Local instances of the studio are not affected.

# Users

```markdown
usage: sanity users [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   invite  Invite a new user to the project
   list    List all users of the project

See 'sanity help users <command>' for specific information on a subcommand.
```

## Commands

### Invite

```markdown
usage: sanity users invite [EMAIL]

   Invite a new user to the project

Options
  --role Role to invite the user as

Examples
  # Invite a new user to the project (prompt for details)
  sanity users invite

  # Send a new user invite to the email "pippi@sanity.io", prompt for role
  sanity users invite pippi@sanity.io

  # Send a new user invite to the email "pippi@sanity.io", as administrator
  sanity users invite pippi@sanity.io --role administrator
```

### List

```markdown
usage: sanity users list

   List all users of the project

Options
  --no-invitations Don't include pending invitations
  --no-robots Don't include robots (token users)
  --sort <field> Sort users by specified column: id, name, role, date
  --order <asc/desc> Sort output ascending/descending

Examples
  # List all users of the project
  sanity users list

  # List all users of the project, but exclude pending invitations and robots
  sanity users list --no-invitations --no-robots

  # List all users, sorted by role
  sanity users list --sort role
```

# Versions

```markdown
usage: sanity versions

   Shows the installed versions of Sanity CLI and core components

Shows a list of installed Sanity modules and their respective versions, and
checks the npm registry for the latest available versions.
```

# Tokens

**Terminal**

```text
usage: npx sanity tokens [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   add     Create a new API token for this project
   delete  Delete an API token from this project
   list    List all API tokens for this project

See 'npx sanity help tokens <command>' for specific information on a subcommand.
```

## Commands

### Add

**Terminal**

```text
Usage
  sanity tokens add "My API Token"
  sanity tokens add "My API Token" --role=editor
  sanity tokens add "My API Token" --role=viewer
Options
  --role <role> Role to assign to the token. Default: editor
```

### Delete

**Terminal**

```text
Usage
  sanity tokens delete
  sanity tokens delete silJ2lFmK6dONB
  sanity tokens delete "My API Token"
Options
  --force Skip confirmation prompt
```

### List

**Usage**

```text
Usage
  sanity tokens list
  sanity tokens list --json
Options
  --json JSON output format
```

## Examples

**Terminal**

```text
# Interactive token creation (prompts for role)
sanity tokens add "My Token"

# Create token with specific role (no prompts)
sanity tokens add "CI Token" --role=editor

# Unattended mode with default role
sanity tokens add "Deploy Token" --yes

# JSON output for programmatic usage
sanity tokens add "API Token" --json

# List all tokens
sanity tokens list

# List as JSON
sanity tokens list --json

# Delete token (interactive selection)
sanity tokens delete

# Delete specific token by ID (unattended)
sanity tokens delete silJ2lFmK6dONB --yes
```

# Store and query structured content

#### Query and retrieve content

[GROQ introduction](https://www.sanity.io/docs/content-lake/groq-introduction)

[GraphQL](https://www.sanity.io/docs/content-lake/graphql)

[Perspectives for Content Lake](https://www.sanity.io/docs/content-lake/perspectives)

[Libraries and clients](https://www.sanity.io/docs/libraries)

#### Document storage

[Documents](https://www.sanity.io/docs/content-lake/documents)

[Drafts and versions](https://www.sanity.io/docs/content-lake/drafts)

[IDs and Paths](https://www.sanity.io/docs/content-lake/ids)

[Datasets](https://www.sanity.io/docs/content-lake/datasets)

[Assets](https://www.sanity.io/docs/content-lake/assets)

#### Create and mutate documents

[Introduction to document mutations](https://www.sanity.io/docs/content-lake/mutations-introduction)

[Mutate documents with actions](https://www.sanity.io/docs/content-lake/dispatch-actions)

[Document mutation patterns](https://www.sanity.io/docs/content-lake/mutation-patterns)

#### Real-time & integration features

[Live Content API](https://www.sanity.io/docs/content-lake/live-content-api)

[API CDN](https://www.sanity.io/docs/content-lake/api-cdn)

#### Content operations

[Migrating your schema and content](https://www.sanity.io/docs/content-lake/schema-and-content-migrations)

[Connected Content](https://www.sanity.io/docs/studio/connected-content)
