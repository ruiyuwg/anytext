# Media

Interact with Media Library with the `npx sanity media` command.

**CLI output**

```text
usage: npx sanity media [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   create-aspect  Create a new aspect definition file.
   delete-aspect  Undeploy an aspect.
   deploy-aspect  Deploy an aspect.
   export         Export an archive of all file and image assets including their aspect data from the target media library.
   import         Import a set of assets to the target media library.

See 'npx sanity help media <command>' for specific information on a subcommand.
```

The `media` command must be run from within a directory that contains a valid `santy.cli.ts` configuration file. We recommend running it from within an existing Sanity project. [Learn more about configuring Media Library](https://www.sanity.io/docs/media-library/configure-library).

## Commands

### `create-aspect`

Usage details are available in the [aspects guide](https://www.sanity.io/docs/media-library/create-aspect).

**CLI output**

```text
usage: npx sanity media create-aspect 

   Create a new aspect definition file.

Examples
  # Create a new aspect definition file.
  sanity media create-aspect
```

### `delete-aspect`

**CLI output**

```text
usage: npx sanity media delete-aspect [ASPECT_NAME]

   Undeploy an aspect.

Options
  --media-library-id The id of the target media library.

Examples
  # Delete the aspect named "someAspect".
  sanity media delete-aspect someAspect
```

### `deploy-aspect`

**CLI output**

```text
usage: npx sanity media deploy-aspect [ASPECT_NAME]

   Deploy an aspect.

Options
  --media-library-id The id of the target media library.
  --all              Deploy all aspects.

Examples
  # Deploy the aspect named "someAspect".
  sanity media deploy-aspect someAspect

  # Deploy all aspects.
  sanity media deploy-aspect --all
```

### `export`

**CLI output**

```text
usage: npx sanity media export [FILE]

   Export an archive of all file and image assets including their aspect data from the target media library.

Options
  --media-library-id The id of the target media library.

Examples
  # Export all file and image assets including their aspects.
  sanity media export
```

**Note:** Video assets are excluded from the export because original source files are not retained after transcoding.

### `import`

**CLI output**

```text
usage: npx sanity media import [FILE | FOLDER]

   Import a set of assets to the target media library.

Options
  --media-library-id The id of the target media library.
  --replace-aspects  Replace existing aspect data. All versions will be replaced (e.g. published and draft aspect data).

Examples
  # Import all assets from the "products" directory.
  sanity media import products

  # Import all assets from "gallery" archive.
  sanity media import gallery.tar.gz

  # Import all assets from the "products" directory and replace aspects.
  sanity media import products --replace-aspects
```

# Migration

## Commands

```text
usage: sanity migration [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   create  Create a new content migration within your project
   list    List available migrations
   run     Run a migration against a dataset

See 'sanity help migration <command>' for specific information on a subcommand.
```

### Creating a content migration

```text
usage: sanity migration create [TITLE]

   Create a new content migration within your project

Create a new migration within your project

Examples:
    # Create a new migration, you will be prompted to provide a type
    sanity migration create

    # Create a new migration, specifying the title
    sanity migration create "Rename field from location to address"
```

### Listing content migrations

```
usage: sanity migration list [NAME]

   List available migrations
```

### Running content migrations

```
usage: sanity migration run ID

   Run a migration against a dataset

Options
  --dry-run <boolean> Whether or not to dry run the migration. Default to true, to actually run the migration, pass --no-dry-run
  --concurrency <concurrent> How many mutation requests to run in parallel. Must be between 1 and 10. Default: 6.
  --no-progress Don't output progress. Useful if you want to debug your migration script and only see the output of console.log() statements.
  --dataset <dataset> Dataset to migrate. Defaults to the dataset configured in your Sanity CLI config.
  --project <project id> Project ID of the dataset to migrate. Defaults to the projectId configured in your Sanity CLI config.
  --no-confirm Skip the confirmation prompt before running the migration. Make sure you know what you're doing before using this flag.


Examples
  # dry run the migration
  sanity migration run <id>

  # execute the migration against a dataset
  sanity migration run <id> --no-dry-run --project xyz --dataset staging
```

# Preview

```text
usage: sanity preview [BUILD_OUTPUT_DIR] [--port <port>] [--host <host>]

   Starts a local web server for previewing production build

Notes
  Changing the hostname or port number might require a new entry to the CORS-origins allow list.

Options
  --port <port> TCP port to start server on. [default: 3333]
  --host <host> The local network interface at which to listen. [default: "127.0.0.1"]

Examples
  sanity preview --host=0.0.0.0
  sanity preview --port=1942
  sanity preview some/build-output-dir
```

# Projects

```markdown
usage: sanity projects [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   list  Lists projects connected to your user

See 'sanity help projects <command>' for specific information on a subcommand.
```
