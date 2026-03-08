# Dataset

```markdown
usage: sanity dataset [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   alias       You can manage your dataset alias using this command.
   copy        Manages dataset copying, including starting a new copy job, listing copy jobs and following the progress of a running copy job
   create      Create a new dataset within your project
   delete      Delete a dataset within your project
   export      Export dataset to local filesystem as a gzipped tarball
   import      Import documents to given dataset from ndjson file
   list        List datasets of your project
   visibility  Set visibility of a dataset

See 'sanity help dataset <command>' for specific information on a subcommand.
```

## Commands

### Alias

```text
usage: sanity dataset alias SUBCOMMAND [ALIAS_NAME, TARGET_DATASET]

   You can manage your dataset alias using this command.

Below are examples of the alias subcommand

Create Alias
  sanity dataset alias create
  sanity dataset alias create <alias-name>
  sanity dataset alias create <alias-name> <target-dataset>

Delete Alias
  Options
    --force Skips security prompt and forces link command

  Usage
    sanity dataset alias delete <alias-name>
    sanity dataset alias delete <alias-name> --force

Link Alias
  Options
    --force Skips security prompt and forces link command

  Usage
    sanity dataset alias link
    sanity dataset alias link <alias-name>
    sanity dataset alias link <alias-name> <target-dataset>
    sanity dataset alias link <alias-name> <target-dataset> --force

Un-link Alias
  Options
    --force Skips security prompt and forces link command

  Usage
    sanity dataset alias unlink
    sanity dataset alias unlink <alias-name>
    sanity dataset alias unlink <alias-name> --force
```

### Copy

```text
usage: sanity dataset copy [SOURCE_DATASET] [TARGET_DATASET]

   Manages dataset copying, including starting a new copy job, listing copy jobs and following the progress of a running copy job

Options
  --detach Start the copy without waiting for it to finish
  --attach <job-id> Attach to the running copy process to show progress
  --skip-history Don't preserve document history on copy
  --list Lists all dataset copy jobs corresponding to a certain criteria.
  --offset Start position in the list of jobs. Default 0. With --list.
  --limit Maximum number of jobs returned. Default 10. Maximum 1000. With --list.

Examples
  sanity dataset copy
  sanity dataset copy <source-dataset>
  sanity dataset copy <source-dataset> <target-dataset>
  sanity dataset copy <source-dataset> <target-dataset> --skip-history
  sanity dataset copy <source-dataset> <target-dataset> --detach
  sanity dataset copy --attach <job-id>
  sanity dataset copy --list
  sanity dataset copy --list --offset=2
  sanity dataset copy --list --offset=2 --limit=10
```

### Create

```text
usage: sanity dataset create [NAME]

   Create a new dataset within your project

Options
  --visibility <mode> Set visibility for this dataset (public/private)

Examples
  sanity dataset create
  sanity dataset create <name>
  sanity dataset create <name> --visibility private
```

### Delete

```text
usage: sanity dataset delete [datasetName]

   Delete a dataset within your project

Options
  --force Do not prompt for delete confirmation - forcefully delete

Examples
  sanity dataset delete
  sanity dataset delete my-dataset
  sanity dataset delete my-dataset --force
```

### Export

```text
usage: sanity dataset export [NAME] [DESTINATION]

   Export dataset to local filesystem as a gzipped tarball. Assets failing with HTTP status codes 401, 403 and 404 upon download are ignored and excluded from export.

Options
  --raw                     Extract only documents, without rewriting asset references
  --no-assets               Export only non-asset documents and remove references to image assets
  --no-drafts               Export only published versions of documents
  --no-compress             Skips compressing tarball entries (still generates a gzip file)
  --types                   Defines which document types to export
  --overwrite               Overwrite any file with the same name
  --asset-concurrency <num> Concurrent number of asset downloads
  --mode <stream|cursor> Uses a cursor when exporting, this might be more performant for larger datasets, but might not be as accurate if the dataset is being modified during export. Defaults to stream.

Examples
  sanity dataset export moviedb localPath.tar.gz
  sanity dataset export moviedb assetless.tar.gz --no-assets
  sanity dataset export staging staging.tar.gz --raw
  sanity dataset export staging staging.tar.gz --types products,shops
```

### Import

```text
usage: sanity dataset import [FILE | FOLDER | URL] [TARGET_DATASET]

   Import documents to given dataset from ndjson file

Options
  --missing On duplicate document IDs, skip importing document in question
  --replace On duplicate document IDs, replace existing document with imported document
  --allow-failing-assets Skip assets that cannot be fetched/uploaded
  --replace-assets Skip reuse of existing assets

Rarely used options (should generally not be used)
  --allow-assets-in-different-dataset Allow asset documents to reference different project/dataset
  --allow-system-documents Allow system documents like dataset permissions and custom retention to be imported

Examples
  # Import "moviedb.ndjson" from the current directory to the dataset called "moviedb"
  sanity dataset import moviedb.ndjson moviedb

  # Import "moviedb.tar.gz" from the current directory to the dataset called "moviedb",
  # replacing any documents encountered that have the same document IDs
  sanity dataset import moviedb.tar.gz moviedb --replace

  # Import from a folder containing an ndjson file, such as an extracted tarball
  # retrieved through "sanity dataset export".
  sanity dataset import ~/some/folder moviedb

  # Import from a remote URL. Will download and extract the tarball to a temporary
  # location before importing it.
  sanity dataset import https://some.url/moviedb.tar.gz moviedb --replace
```

### List

```text
usage: sanity dataset list

   List datasets of your project
```

### Visibility

```text
usage: sanity dataset visibility get/set [dataset] [mode]

   Set visibility of a dataset
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

```markdown
usage: sanity deploy [SOURCE_DIR] [--no-build] [--source-maps] [--no-minify] [--external]

   Builds and deploys Sanity Studio or application to Sanity hosting

Options
  --external        Register an externally hosted studio
                    Note: Ignores --source-maps, --no-minify, and --no-build flags
                    Note: Schema deployment is skipped unless --schema-required is also passed
  --source-maps     Enable source maps for built bundles (increases size of bundle)
  --no-minify       Skip minifying built JavaScript (speeds up build, increases size of bundle)
  --no-build        Don't build the studio prior to deploy, instead deploying the version currently in `dist/`
  --schema-required Fail-fast deployment if schema store fails
  --verbose         Enable verbose logging
  -y, --yes         Unattended mode, answers "yes" to any "yes/no" prompt and otherwise uses defaults

Examples
  # Build and deploy the studio to Sanity hosting
  sanity deploy

  # Deploys non-minified build with source maps
  sanity deploy --no-minify --source-maps

  # Fail fast on schema store fails – for when other services rely on the stored schema
  sanity deploy --schema-required

  # Register an externally hosted studio (studioHost contains full URL)
  sanity deploy --external
```

# Dev

**TERMINAL**

```sh
usage: sanity dev [--port <port>] [--host <host>]
   Starts a development server for the Sanity Studio
Notes
  Changing the hostname or port number might require a new entry to the CORS-origins allow list.
Options
  --port <port> TCP port to start server on. [default: 3333]
  --host <host> The local network interface at which to listen. [default: "127.0.0.1"]
  --load-in-dashboard Open the studio within Dashboard
Examples
  sanity dev --host=0.0.0.0
  sanity dev --port=1942
```

# Docs

```text
usage: npx sanity docs [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   browse  Open Sanity docs in a web browser
   read    Read an article in terminal
   search  Search Sanity docs

See 'npx sanity help docs <command>' for specific information on a subcommand.
```

## Commands

## `browse`

```text
usage: npx sanity docs browse 

   Open Sanity docs in a web browser
```

### `read`

```text
usage: npx sanity docs read <path|url> [-w, --web]

   Read an article in terminal

Arguments
  <path> Path or URL to article, found in search results and docs content as links

Options
  -w, --web               Open in a web browser

Examples
  # Read as markdown in terminal
  sanity docs read /docs/studio/installation
  sanity docs read https://www.sanity.io/docs/studio/installation

  # Open in web browser
  sanity docs read /docs/studio/installation --web
  sanity docs read https://www.sanity.io/docs/studio/installation -w
```

### `search`

```text
usage: npx sanity docs search <query> [--limit <limit>]

   Search Sanity docs

Arguments
  <query> Search query for documentation

Options
  --limit <limit>   Maximum number of results to return [default: 10]

Examples
  # Search for documentation about schemas
  sanity docs search schema

  # Search with phrase
  sanity docs search "groq functions"

  # Limit search results
  sanity docs search "deployment" --limit=5
```
