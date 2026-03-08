# Documents

```markdown
usage: sanity documents [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   create   Create one or more documents
   delete   Delete a document by ID
   get      Get and print a document
   query    Query for documents
   validate Download and validate documents

See 'sanity help documents <command>' for specific information on a subcommand.
```

## Commands

### Create

```markdown
usage: sanity documents create [FILE]

   Create one or more documents

Options
  --replace On duplicate document IDs, replace existing document with specified document(s)
  --missing On duplicate document IDs, don't modify the target document(s)
  --watch   Write the documents whenever the target file or buffer changes
  --json5   Use JSON5 file type to allow a "simplified" version of JSON
  --id <id> Specify a document ID to use. Will fetch remote document ID and populate editor.
  --dataset NAME to override dataset

Examples
  # Create the document specified in "myDocument.json".
  sanity documents create myDocument.json

  # Open configured $EDITOR and create the specified document(s)
  sanity documents create

  # Fetch document with the ID "myDocId" and open configured $EDITOR with the
  # current document content (if any). Replace document with the edited version
  # when the editor closes
  sanity documents create --id myDocId --replace

  # Open configured $EDITOR and replace the document with the given content
  # on each save. Use JSON5 file extension and parser for simplified syntax.
  sanity documents create --id myDocId --watch --replace --json5
```

### Delete

```markdown
usage: sanity documents delete [ID] [...IDS]

   Delete a document by ID

Delete a document from the projects configured dataset

Options
  --dataset NAME to override dataset

Example
  # Delete the document with the ID "myDocId"
  sanity documents delete myDocId

  # ID wrapped in double or single quote works equally well
  sanity documents delete 'myDocId'

  # Delete document with ID "someDocId" from dataset "blog"
  sanity documents delete --dataset=blog someDocId

  # Delete the document with ID "doc1" and "doc2"
  sanity documents delete doc1 doc2
```

### Get

```markdown
usage: sanity documents get [DOCUMENT_ID]

   Get and print a document by ID

Get and print a document from the projects configured dataset

Options
  --pretty colorized JSON output
  --dataset NAME to override dataset

Examples
  # Get the document with the ID "myDocId"
  sanity documents get myDocId

  # ID wrapped in double or single quote works equally well
  sanity documents get 'myDocId'
```

### Query

```markdown
usage: sanity documents query [QUERY]

   Query for documents

Run a query against the projects configured dataset

Options
  --pretty colorized JSON output
  --dataset NAME to override dataset
  --project PROJECT to override project ID
  --anonymous Send the query without any authorization token
  --api-version API version to use (defaults to `v2022-06-01`)

Environment variables
  `SANITY_CLI_QUERY_API_VERSION` - will use the defined API version,
  unless `--api-version` is specified.

Examples
  # Fetch 5 documents of type "movie"
  sanity documents query '*[_type == "movie"][0..4]'

  # Fetch title of the oldest movie in the dataset named "staging"
  sanity documents query '*[_type == "movie"]|order(releaseDate asc)[0]{title}' --dataset staging

  # Use API version v2021-06-07 and do a query
  sanity documents query --api-version v2021-06-07 '*[_id == "header"] { "headerText": pt::text(body) }'
```

### Validate

```markdown
usage: sanity documents validate

   Downloads and validates all documents specified in a workspace

Options
  -y, --yes Skips the first confirmation prompt.
  --workspace <name> The name of the workspace to use when downloading and validating all documents.
  --dataset <name> Override the dataset used. By default, this is derived from the given workspace.
  --file <filepath> Provide a path to either an .ndjson file or a tarball containing an .ndjson file.
  --format <pretty|ndjson|json> The output format used to print the found validation markers and report progress.
  --level <error|warning|info> The minimum level reported out. Defaults to warning.
  --max-custom-validation-concurrency <number> Specify how many custom validators can run concurrently. Defaults to 5.
  --max-fetch-concurrency <number> Specify how many `client.fetch` requests are allowed concurrently. Defaults to 25.

Examples
  # Validates all documents in a Sanity project with more than one workspace
  sanity documents validate --workspace default

  # Override the dataset specified in the workspace
  sanity documents validate --workspace default --dataset staging

  # Save the results of the report into a file
  sanity documents validate > report.txt

  # Report out info level validation markers too
  sanity documents validate --level info
```

# Exec

```markdown
usage: sanity exec SCRIPT

   Runs a script in Sanity context

Options
  --with-user-token Prime access token from CLI config into getCliClient()
  --mock-browser-env Mocks a browser-like environment using jsdom

Examples
  # Run the script at some/script.js in Sanity context
  sanity exec some/script.js

  # Run the script at migrations/fullname.ts and configure `getCliClient()`
  # from `sanity/cli`to include the current user's token
  sanity exec migrations/fullname.ts --with-user-token

  # Run the script at scripts/browserScript.js in a mock browser environment
  sanity exec scripts/browserScript.js --mock-browser-env

  # Pass arbitrary arguments to scripts by separating them with a `--`.
  # Arguments are available in `process.argv` as they would in regular node scripts
  # eg the following command would yield a `process.argv` of:
  # ['/path/to/node', '/path/to/myscript.js', '--dry-run', 'positional-argument']
  sanity exec --mock-browser-env myscript.js -- --dry-run positional-argument
```
