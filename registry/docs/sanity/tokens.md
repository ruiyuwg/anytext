# Tokens

**CLI output**

```sh
npx sanity tokens --help
```

## Commands

### `add`

**CLI output**

```sh
USAGE
  $ sanity tokens add [LABEL] [-p <id>] [--yes] [--json] [--role viewer]

ARGUMENTS
  [LABEL]  Label for the new token

FLAGS
  -y, --yes          Skip prompts and use defaults (unattended mode)
      --json         Output as JSON
      --role=viewer  Role to assign to the token

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to add token to (overrides CLI configuration)

DESCRIPTION
  Create a new API token for this project

EXAMPLES
  Create a token with a label

    $ sanity tokens add "My API Token"

  Create a token with editor role

    $ sanity tokens add "My API Token" --role=editor

  Create a token in unattended mode

    $ sanity tokens add "CI Token" --role=editor --yes

  Output token information as JSON

    $ sanity tokens add "API Token" --json

  Create a token for a specific project

    $ sanity tokens add "My Token" --project-id abc123 --role=editor
```

### `delete`

**CLI output**

```sh
USAGE
  $ sanity tokens delete [TOKENID] [-p <id>] [--yes]

ARGUMENTS
  [TOKENID]  Token ID to delete (will prompt if not provided)

FLAGS
      --yes  Skip confirmation prompt (unattended mode)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete token from (overrides CLI configuration)

DESCRIPTION
  Delete an API token from this project

EXAMPLES
  Interactively select and delete a token

    $ sanity tokens delete

  Delete a specific token by ID

    $ sanity tokens delete silJ2lFmK6dONB

  Delete a specific token without confirmation prompt

    $ sanity tokens delete silJ2lFmK6dONB --yes

  Delete a token from a specific project

    $ sanity tokens delete --project-id abc123
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity tokens list [-p <id>] [--json]

FLAGS
      --json  Output tokens in JSON format

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list tokens for (overrides CLI configuration)

DESCRIPTION
  List API tokens for the current project

EXAMPLES
  List tokens for the current project

    $ sanity tokens list

  List tokens in JSON format

    $ sanity tokens list --json

  List tokens for a specific project

    $ sanity tokens list --project-id abc123
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
