# Dataset

**CLI output**

```sh
npx sanity dataset --help
```

## Commands

### `alias`

#### `create`

**CLI output**

```sh
USAGE
  $ sanity dataset alias create [ALIASNAME] [TARGETDATASET] [-p <id>]

ARGUMENTS
  [ALIASNAME]      Dataset alias name to create
  [TARGETDATASET]  Target dataset name to link the alias to

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to create dataset alias in (overrides CLI configuration)

DESCRIPTION
  Create a dataset alias within your project

EXAMPLES
  Create alias in a specific project

    $ sanity dataset alias create --project-id abc123 conference conf-2025

  Create an alias with interactive prompts

    $ sanity dataset alias create

  Create alias named "conference" with interactive dataset selection

    $ sanity dataset alias create conference

  Create alias "conference" linked to "conf-2025" dataset

    $ sanity dataset alias create conference conf-2025

  Create alias with explicit ~ prefix

    $ sanity dataset alias create ~conference conf-2025
```

#### `delete`

**CLI output**

```sh
USAGE
  $ sanity dataset alias delete ALIASNAME [-p <id>] [--force]

ARGUMENTS
  ALIASNAME  Dataset alias name to delete

FLAGS
      --force  Skip confirmation prompt and delete immediately

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete dataset alias from (overrides CLI configuration)

DESCRIPTION
  Delete a dataset alias within your project

EXAMPLES
  Delete alias named "conference" with confirmation prompt

    $ sanity dataset alias delete conference

  Delete alias with explicit ~ prefix

    $ sanity dataset alias delete ~conference

  Delete alias named "conference" without confirmation prompt

    $ sanity dataset alias delete conference --force
```

#### `link`

**CLI output**

```sh
USAGE
  $ sanity dataset alias link [ALIASNAME] [TARGETDATASET] [-p <id>] [--force]

ARGUMENTS
  [ALIASNAME]      Dataset alias name to link
  [TARGETDATASET]  Target dataset name to link the alias to

FLAGS
      --force  Skip confirmation prompt when relinking existing alias

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to link dataset alias in (overrides CLI configuration)

DESCRIPTION
  Link a dataset alias to a dataset within your project

EXAMPLES
  Link an alias with interactive prompts

    $ sanity dataset alias link

  Link alias named "conference" with interactive dataset selection

    $ sanity dataset alias link conference

  Link alias "conference" to "conf-2025" dataset

    $ sanity dataset alias link conference conf-2025

  Link alias with explicit ~ prefix

    $ sanity dataset alias link ~conference conf-2025

  Force link without confirmation (skip relink prompt)

    $ sanity dataset alias link conference conf-2025 --force
```

#### `unlink`

**CLI output**

```sh
USAGE
  $ sanity dataset alias unlink [ALIASNAME] [-p <id>] [--force]

ARGUMENTS
  [ALIASNAME]  Dataset alias name to unlink

FLAGS
      --force  Skip confirmation prompt and unlink immediately

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to unlink dataset alias in (overrides CLI configuration)

DESCRIPTION
  Unlink a dataset alias from its dataset within your project

EXAMPLES
  Unlink an alias with interactive selection

    $ sanity dataset alias unlink

  Unlink alias "conference" with confirmation prompt

    $ sanity dataset alias unlink conference

  Unlink alias with explicit ~ prefix

    $ sanity dataset alias unlink ~conference

  Unlink alias "conference" without confirmation prompt

    $ sanity dataset alias unlink conference --force
```

### `copy`

**CLI output**

```sh
USAGE
  $ sanity dataset copy [SOURCE] [TARGET] [-p <id>] [--attach <value>] [--detach] [--limit <value>] [--list] [--offset <value>] [--skip-history]

ARGUMENTS
  [SOURCE]  Name of the dataset to copy from
  [TARGET]  Name of the dataset to copy to

FLAGS
      --attach=<value>  Attach to the running copy process to show progress
      --detach          Start the copy without waiting for it to finish
      --limit=<value>   Maximum number of jobs returned (default 10, max 1000)
      --list            Lists all dataset copy jobs
      --offset=<value>  Start position in the list of jobs (default 0)
      --skip-history    Don't preserve document history on copy

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to copy dataset in (overrides CLI configuration)

DESCRIPTION
  Manages dataset copying, including starting a new copy job, listing copy jobs and following the progress of a running copy job

EXAMPLES
  Interactively copy a dataset

    $ sanity dataset copy

  Copy from source-dataset (prompts for target)

    $ sanity dataset copy source-dataset

  Copy from source-dataset to target-dataset

    $ sanity dataset copy source-dataset target-dataset

  Copy without preserving document history (faster for large datasets)

    $ sanity dataset copy --skip-history source target

  Start copy job without waiting for completion

    $ sanity dataset copy --detach source target

  Attach to a running copy job to follow progress

    $ sanity dataset copy --attach <job-id>

  List all dataset copy jobs

    $ sanity dataset copy --list

  List copy jobs with pagination

    $ sanity dataset copy --list --offset 2 --limit 10
```

### `create`

**CLI output**

```sh
USAGE
  $ sanity dataset create [NAME] [-p <id>] [--embeddings] [--embeddings-projection <value>] [--visibility <value>]

ARGUMENTS
  [NAME]  Name of the dataset to create

FLAGS
      --embeddings                     Enable embeddings for this dataset
      --embeddings-projection=<value>  GROQ projection for embeddings indexing (e.g. "{ title, body }")
      --visibility=<value>             Set visibility for this dataset (custom/private/public)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to create dataset in (overrides CLI configuration)

DESCRIPTION
  Create a new dataset within your project

EXAMPLES
  Interactively create a dataset

    $ sanity dataset create

  Create a dataset named "my-dataset"

    $ sanity dataset create my-dataset

  Create a private dataset named "my-dataset"

    $ sanity dataset create my-dataset --visibility private
```

### `delete`

**CLI output**

```sh
USAGE
  $ sanity dataset delete DATASETNAME [-p <id>] [--force]

ARGUMENTS
  DATASETNAME  Dataset name to delete

FLAGS
      --force  Do not prompt for delete confirmation - forcefully delete

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete dataset from (overrides CLI configuration)

DESCRIPTION
  Delete a dataset within your project

EXAMPLES
  Delete a specific dataset

    $ sanity dataset delete my-dataset

  Delete a specific dataset without confirmation

    $ sanity dataset delete my-dataset --force
```

### `embeddings`

#### `disable`

**CLI output**

```sh
USAGE
  $ sanity dataset embeddings disable [DATASET] [-p <id>]

ARGUMENTS
  [DATASET]  Dataset name to disable embeddings for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to disable embeddings for (overrides CLI configuration)

DESCRIPTION
  Disable embeddings for a dataset

EXAMPLES
  Disable embeddings for the production dataset

    $ sanity dataset embeddings disable production
```

#### `enable`

**CLI output**

```sh
USAGE
  $ sanity dataset embeddings enable [DATASET] [-p <id>] [--projection <value>] [--wait]

ARGUMENTS
  [DATASET]  Dataset name to enable embeddings for

FLAGS
      --projection=<value>  GROQ projection defining which fields to embed (e.g. "{ title, body }")
      --wait                Wait for embeddings processing to complete before returning

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to enable embeddings for (overrides CLI configuration)

DESCRIPTION
  Enable embeddings for a dataset

EXAMPLES
  Enable embeddings for the production dataset

    $ sanity dataset embeddings enable production

  Enable embeddings with a specific projection

    $ sanity dataset embeddings enable production --projection "{ title, body }"

  Enable embeddings and wait for processing to complete

    $ sanity dataset embeddings enable production --wait
```

#### `status`

**CLI output**

```sh
USAGE
  $ sanity dataset embeddings status [DATASET] [-p <id>]

ARGUMENTS
  [DATASET]  The name of the dataset to check embeddings status for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to check embeddings status for (overrides CLI configuration)

DESCRIPTION
  Show embeddings settings and status for a dataset

EXAMPLES
  Show embeddings status for the production dataset

    $ sanity dataset embeddings status production
```

### `export`

**CLI output**

```sh
USAGE
  $ sanity dataset export [NAME] [DESTINATION] [-p <id>] [--asset-concurrency <value>] [--mode <value>] [--no-assets] [--no-compress] [--no-drafts] [--overwrite] [--raw] [--types <value>]

ARGUMENTS
  [NAME]         Name of the dataset to export
  [DESTINATION]  Output destination file path

FLAGS
      --asset-concurrency=<value>  Concurrent number of asset downloads
      --mode=<value>               Mode to export documents with `cursor` might be more performant for larger datasets, but might not be as accurate if the dataset is being modified during export
      --no-assets                  Export only non-asset documents and remove references to image assets
      --no-compress                Skips compressing tarball entries (still generates a gzip file)
      --no-drafts                  Export only published versions of documents
      --overwrite                  Overwrite any file with the same name
      --raw                        Extract only documents, without rewriting asset references
      --types=<value>              Defines which document types to export (comma-separated)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to export dataset from (overrides CLI configuration)

DESCRIPTION
  Export dataset to local filesystem as a gzipped tarball. Assets failing with HTTP status codes 401, 403 and 404 upon download are ignored and excluded from export.

EXAMPLES
  Export dataset "moviedb" to localPath.tar.gz

    $ sanity dataset export moviedb localPath.tar.gz

  Export dataset without assets

    $ sanity dataset export moviedb assetless.tar.gz --no-assets

  Export raw documents without asset reference rewriting

    $ sanity dataset export staging staging.tar.gz --raw

  Export specific document types

    $ sanity dataset export staging staging.tar.gz --types products,shops
```

### `import`

**CLI output**

```sh
USAGE
  $ sanity dataset import SOURCE [TARGETDATASET] [-d <name>] [-p <id>] [-t <value>] [--allow-assets-in-different-dataset] [--allow-failing-assets] [--allow-replacement-characters] [--allow-system-documents] [--asset-concurrency <value>] [--missing] [--replace] [--replace-assets] [--skip-cross-dataset-references]

ARGUMENTS
  SOURCE           Source file (use "-" for stdin)
  [TARGETDATASET]  Target dataset (prefer --dataset flag instead)

FLAGS
  -d, --dataset=<name>                     Dataset to import to
  -t, --token=<value>                      Token to authenticate with
      --allow-assets-in-different-dataset  Allow asset documents to reference different project/dataset
      --allow-failing-assets               Skip assets that cannot be fetched/uploaded
      --allow-replacement-characters       Allow unicode replacement characters in imported documents
      --allow-system-documents             Imports system documents
      --asset-concurrency=<value>          Number of parallel asset imports
      --missing                            Skip documents that already exist
      --replace                            Replace documents with the same IDs
      --replace-assets                     Skip reuse of existing assets
      --skip-cross-dataset-references      Skips references to other datasets

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to import to (overrides CLI configuration)

DESCRIPTION
  Import documents to a Sanity dataset

EXAMPLES
  Import "./my-dataset.ndjson" into dataset "staging"

    $ sanity dataset import -d staging -t someSecretToken my-dataset.ndjson

  Import into dataset "test" from stdin

    $ cat my-dataset.ndjson | sanity dataset import -d test -t someToken -

  Import with explicit project ID (overrides CLI configuration)

    $ sanity dataset import -p projectId -d staging -t someSecretToken my-dataset.ndjson
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity dataset list [-p <id>]

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list datasets for (overrides CLI configuration)

DESCRIPTION
  List datasets of your project

EXAMPLES
  List datasets of your project

    $ sanity dataset list

  List datasets for a specific project

    $ sanity dataset list --project-id abc123
```

### `visibility`

#### `get`

**CLI output**

```sh
USAGE
  $ sanity dataset visibility get DATASET [-p <id>]

ARGUMENTS
  DATASET  The name of the dataset to get visibility for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to get dataset visibility for (overrides CLI configuration)

DESCRIPTION
  Get the visibility of a dataset

EXAMPLES
  Check the visibility of a dataset

    $ sanity dataset visibility get my-dataset
```

#### `set`

**CLI output**

```sh
USAGE
  $ sanity dataset visibility set DATASET MODE [-p <id>]

ARGUMENTS
  DATASET  The name of the dataset to set visibility for
  MODE     The visibility mode to set

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to set dataset visibility for (overrides CLI configuration)

DESCRIPTION
  Set the visibility of a dataset

EXAMPLES
  Make a dataset private

    $ sanity dataset visibility set my-dataset private

  Make a dataset public

    $ sanity dataset visibility set my-dataset public
```

# Debug

```markdown
usage: sanity debug [--secrets]

   Gathers information on Sanity environment

Used to find information about the Sanity environment, and to debug Sanity-related issues.

Options
  --secrets Include API keys in output

Examples
  # Show information about the user, project, and local/global Sanity environment
  sanity debug

  # Include API keys in the output
  sanity debug --secrets
```

# Deploy

**CLI output**

```sh
USAGE
  $ sanity deploy [SOURCEDIR] [--yes] [--auto-updates] [--build] [--external] [--minify] [--schema-required] [--source-maps] [--verbose]

ARGUMENTS
  [SOURCEDIR]  Source directory

FLAGS
  -y, --yes              Unattended mode, answers "yes" to any "yes/no" prompt and otherwise uses defaults
      --auto-updates     Automatically update the studio to the latest version
      --build            Don't build the studio prior to deploy, instead deploying the version currently in `dist/`
      --external         Register an externally hosted studio
      --minify           Skip minifying built JavaScript (speeds up build, increases size of bundle)
      --schema-required  Fail-fast deployment if schema store fails
      --source-maps      Enable source maps for built bundles (increases size of bundle)
      --verbose          Enable verbose logging

DESCRIPTION
  Builds and deploys Sanity Studio or application to Sanity hosting

EXAMPLES
  Build and deploy the studio to Sanity hosting

    $ sanity deploy

  Deploys non-minified build with source maps

    $ sanity deploy --no-minify --source-maps

  Fail fast on schema store fails - for when other services rely on the stored schema

    $ sanity deploy --schema-required

  Register an externally hosted studio (studioHost contains full URL)

    $ sanity deploy --external
```

## What --no-build skips

By default, sanity deploy builds the Studio through Vite, extracts your schema and manifest, packages everything, and uploads it to Sanity hosting. Passing --no-build skips the build step but still runs schema extraction and upload. The dist/ directory must already exist. To make schema extraction fail instead of warn, pass --schema-required.

# Dev

**CLI output**

```sh
USAGE
  $ sanity dev [--auto-updates] [--host <value>] [--load-in-dashboard] [--port <value>]

FLAGS
      --auto-updates       Automatically update Sanity Studio dependencies.
      --host=<value>       [default: localhost] The local network interface at which to listen.
      --load-in-dashboard  Load the app/studio in the Sanity dashboard.
      --port=<value>       [default: 3333] TCP port to start server on.

DESCRIPTION
  Starts a local development server for Sanity Studio with live reloading

EXAMPLES
    $ sanity dev --host=0.0.0.0

    $ sanity dev --port=1942

    $ sanity dev --load-in-dashboard
```

# Docs

**CLI output**

```sh
npx sanity docs --help
```

## Commands

### `browse`

**CLI output**

```sh
USAGE
  $ sanity docs browse

DESCRIPTION
  Open Sanity docs in a web browser
```

### `read`

**CLI output**

```sh
USAGE
  $ sanity docs read PATH [--web]

ARGUMENTS
  PATH  Path or URL to article, found in search results and docs content as links

FLAGS
      --web  Open in a web browser

DESCRIPTION
  Read an article in terminal

EXAMPLES
  Read as markdown in terminal

    $ sanity docs read /docs/studio/installation

  Read using full URL

    $ sanity docs read https://www.sanity.io/docs/studio/installation

  Open in web browser

    $ sanity docs read /docs/studio/installation --web

  Open using full URL in web browser

    $ sanity docs read https://www.sanity.io/docs/studio/installation -w
```

### `search`

**CLI output**

```sh
USAGE
  $ sanity docs search QUERY [--limit <value>]

ARGUMENTS
  QUERY  Search query for documentation

FLAGS
      --limit=<value>  Maximum number of results to return

DESCRIPTION
  Search Sanity docs

EXAMPLES
  Search for documentation about schemas

    $ sanity docs search schema

  Search with phrase

    $ sanity docs search "groq functions"

  Limit search results

    $ sanity docs search "deployment" --limit=5
```
