# CLI reference

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
