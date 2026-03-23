# Documents

**CLI output**

```sh
npx sanity documents --help
```

## Commands

### `create`

**CLI output**

```sh
USAGE
  $ sanity documents create [FILE] [-d <name>] [-p <id>] [--id <value>] [--json5] [--missing] [--replace] [--watch]

ARGUMENTS
  [FILE]  JSON file to create document(s) from

FLAGS
      --id=<value>  Specify a document ID to use. Will fetch remote document ID and populate editor.
      --json5       Use JSON5 file type to allow a "simplified" version of JSON
      --missing     On duplicate document IDs, don't modify the target document(s)
      --replace     On duplicate document IDs, replace existing document with specified document(s)
      --watch       Write the documents whenever the target file or buffer changes

OVERRIDE FLAGS
  -d, --dataset=<name>   Dataset to create document(s) in (overrides CLI configuration)
  -p, --project-id=<id>  Project ID to create document(s) in (overrides CLI configuration)

DESCRIPTION
  Create one or more documents

EXAMPLES
  Create the document specified in "myDocument.json"

    $ sanity documents create myDocument.json

  Open configured $EDITOR and create the specified document(s)

    $ sanity documents create

  Fetch document with the ID "myDocId" and open configured $EDITOR with the current document content (if any). Replace document with the edited version when the editor closes

    $ sanity documents create --id myDocId --replace

  Open configured $EDITOR and replace the document with the given content on each save. Use JSON5 file extension and parser for simplified syntax.

    $ sanity documents create --id myDocId --watch --replace --json5

  Create documents in a specific project

    $ sanity documents create myDocument.json --project-id abc123
```

### `delete`

**CLI output**

```sh
USAGE
  $ sanity documents delete ID [IDS] [-d <name>] [-p <id>]

ARGUMENTS
  ID     Document ID to delete
  [IDS]  Additional document IDs to delete

OVERRIDE FLAGS
  -d, --dataset=<name>   Dataset to delete from (overrides CLI configuration)
  -p, --project-id=<id>  Project ID to delete from (overrides CLI configuration)

DESCRIPTION
  Delete one or more documents from the projects configured dataset

EXAMPLES
  Delete the document with the ID "myDocId"

    $ sanity documents delete myDocId

  ID wrapped in double or single quote works equally well

    $ sanity documents delete 'myDocId'

  Delete document with ID "someDocId" from dataset "blog"

    $ sanity documents delete --dataset=blog someDocId

  Delete the document with ID "doc1" and "doc2"

    $ sanity documents delete doc1 doc2

  Delete a document from a specific project

    $ sanity documents delete myDocId --project-id abc123
```

### `get`

**CLI output**

```sh
USAGE
  $ sanity documents get DOCUMENTID [-d <name>] [-p <id>] [--pretty]

ARGUMENTS
  DOCUMENTID  Document ID to retrieve

FLAGS
      --pretty  Colorize JSON output

OVERRIDE FLAGS
  -d, --dataset=<name>   Dataset to get document from (overrides CLI configuration)
  -p, --project-id=<id>  Project ID to get document from (overrides CLI configuration)

DESCRIPTION
  Get and print a document by ID

EXAMPLES
  Get the document with ID "myDocId"

    $ sanity documents get myDocId

  Get document with colorized JSON output

    $ sanity documents get myDocId --pretty

  Get document from a specific dataset

    $ sanity documents get myDocId --dataset production

  Get a document from a specific project

    $ sanity documents get myDocId --project-id abc123
```

### `query`

**CLI output**

```sh
USAGE
  $ sanity documents query QUERY [-d <name>] [-p <id>] [--anonymous] [--api-version <value>] [--pretty]

ARGUMENTS
  QUERY  GROQ query to run against the dataset

FLAGS
      --anonymous            Send the query without any authorization token
      --api-version=<value>  API version to use (defaults to 2025-08-15)
      --pretty               Colorize JSON output

OVERRIDE FLAGS
  -d, --dataset=<name>   Dataset to query (overrides CLI configuration)
  -p, --project-id=<id>  Project ID to query (overrides CLI configuration)

DESCRIPTION
  Query for documents

EXAMPLES
  Fetch 5 documents of type "movie"

    $ sanity documents query '*[_type == "movie"][0..4]'

  Fetch title of the oldest movie in the dataset named "staging"

    $ sanity documents query '*[_type == "movie"]|order(releaseDate asc)[0]{title}' --dataset staging

  Use API version v2021-06-07 and do a query

    $ sanity documents query '*[_id == "header"] { "headerText": pt::text(body) }' --api-version v2021-06-07

  Query documents in a specific project and dataset

    $ sanity documents query '*[_type == "post"]' --project-id abc123 --dataset production
```

### `validate`

**CLI output**

```sh
USAGE
  $ sanity documents validate [-d <name>] [-p <id>] [--yes] [--file <value>] [--format <value>] [--level <value>] [--max-custom-validation-concurrency <value>] [--max-fetch-concurrency <value>] [--workspace <value>]

FLAGS
  -d, --dataset=<name>                             Override the dataset used. By default, this is derived from the given workspace
  -p, --project-id=<id>                            Override the project ID used. By default, this is derived from the given workspace
  -y, --yes                                        Skips the first confirmation prompt
      --file=<value>                               Provide a path to either an .ndjson file or a tarball containing an .ndjson file
      --format=<value>                             The output format used to print the found validation markers and report progress
      --level=<value>                              The minimum level reported. Defaults to warning
      --max-custom-validation-concurrency=<value>  Specify how many custom validators can run concurrently
      --max-fetch-concurrency=<value>              Specify how many `client.fetch` requests are allowed to run concurrently
      --workspace=<value>                          The name of the workspace to use when downloading and validating all documents

DESCRIPTION
  Validate documents in a dataset against the studio schema

EXAMPLES
  Validates all documents in a Sanity project with more than one workspace

    $ sanity documents validate --workspace default

  Override the dataset specified in the workspace

    $ sanity documents validate --workspace default --dataset staging

  Save the results of the report into a file

    $ sanity documents validate --yes > report.txt

  Report out info level validation markers too

    $ sanity documents validate --level info

  Validate documents in a specific project and dataset

    $ sanity documents validate --project-id abc123 --dataset production
```

# Exec

**CLI output**

```sh
USAGE
  $ sanity exec SCRIPT [--mock-browser-env] [--with-user-token]

ARGUMENTS
  SCRIPT  Path to the script to execute

FLAGS
      --mock-browser-env  Mocks a browser-like environment using jsdom
      --with-user-token   Prime access token from CLI config into getCliClient()

DESCRIPTION
  Executes a script within the Sanity Studio context

EXAMPLES
  Run the script at some/script.js in Sanity context

    $ sanity exec some/script.js

  Run the script at migrations/fullname.ts and configure `getCliClient()` from `sanity/cli` to include the current user's token

    $ sanity exec migrations/fullname.ts --with-user-token

  Run the script at scripts/browserScript.js in a mock browser environment

    $ sanity exec scripts/browserScript.js --mock-browser-env

  Pass arbitrary arguments to scripts by separating them with a `--`. Arguments are available in `process.argv` as they would in regular node scripts (eg the following command would yield a `process.argv` of: `['/path/to/node', '/path/to/myscript.js', '--dry-run', 'positional-argument']`)

    $ sanity exec --mock-browser-env myscript.js -- --dry-run positional-argument
```
