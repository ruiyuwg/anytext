# Media

Interact with Media Library with the `npx sanity media` command.

**CLI output**

```sh
npx sanity media --help
```

The `media` command must be run from within a directory that contains a valid `santy.cli.ts` configuration file. We recommend running it from within an existing Sanity project. [Learn more about configuring Media Library](https://www.sanity.io/docs/media-library/configure-library).

## Commands

### `create-aspect`

**CLI output**

```sh
USAGE
  $ sanity media create-aspect

DESCRIPTION
  Create a new aspect definition file

EXAMPLES
  Create a new aspect definition file

    $ sanity media create-aspect
```

### `delete-aspect`

**CLI output**

```sh
USAGE
  $ sanity media delete-aspect ASPECTNAME [-p <id>] [--media-library-id <value>] [--yes]

ARGUMENTS
  ASPECTNAME  Name of the aspect to delete

FLAGS
      --media-library-id=<value>  The id of the target media library
      --yes                       Skip confirmation prompt

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete media aspect from (overrides CLI configuration)

DESCRIPTION
  Undeploy an aspect

EXAMPLES
  Delete the aspect named "someAspect"

    $ sanity media delete-aspect someAspect
```

### `deploy-aspect`

**CLI output**

```sh
USAGE
  $ sanity media deploy-aspect [ASPECTNAME] [-p <id>] [--all] [--media-library-id <value>]

ARGUMENTS
  [ASPECTNAME]  Name of the aspect to deploy

FLAGS
      --all                       Deploy all aspects
      --media-library-id=<value>  The id of the target media library

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to deploy media aspect to (overrides CLI configuration)

DESCRIPTION
  Deploy an aspect

EXAMPLES
  Deploy the aspect named "someAspect"

    $ sanity media deploy-aspect someAspect

  Deploy all aspects

    $ sanity media deploy-aspect --all
```

### `export`

**CLI output**

```sh
USAGE
  $ sanity media export [DESTINATION] [-p <id>] [--asset-concurrency <value>] [--media-library-id <value>] [--no-compress] [--overwrite]

ARGUMENTS
  [DESTINATION]  Output destination file path

FLAGS
      --asset-concurrency=<value>  Concurrent number of asset downloads
      --media-library-id=<value>   The id of the target media library
      --no-compress                Skips compressing tarball entries (still generates a gzip file)
      --overwrite                  Overwrite any file with the same name

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to export media from (overrides CLI configuration)

DESCRIPTION
  Export an archive of all file and image assets including their aspect data from the target media library. Video assets are excluded from the export.

EXAMPLES
  Export media library interactively

    $ sanity media export

  Export media library to output.tar.gz

    $ sanity media export output.tar.gz

  Export specific media library

    $ sanity media export --media-library-id my-library-id
```

### `import`

**CLI output**

```sh
USAGE
  $ sanity media import SOURCE [-p <id>] [--media-library-id <value>] [--replace-aspects]

ARGUMENTS
  SOURCE  Image file or folder to import from

FLAGS
      --media-library-id=<value>  The id of the target media library
      --replace-aspects           Replace existing aspect data. All versions will be replaced (e.g. published and draft aspect data)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to import media to (overrides CLI configuration)

DESCRIPTION
  Import a set of assets to the target media library.

EXAMPLES
  Import all assets from the "products" directory

    $ sanity media import products

  Import all assets from "gallery" archive

    $ sanity media import gallery.tar.gz

  Import all assets from the "products" directory and replace aspects

    $ sanity media import products --replace-aspects
```
