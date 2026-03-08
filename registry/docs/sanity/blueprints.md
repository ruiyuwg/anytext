# Blueprints

The `blueprints` CLI command enables initializing, managing, and deploying Blueprints and resources like Functions.

[Blueprints introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

[Functions introduction](https://www.sanity.io/docs/functions/functions-introduction)

**CLI output**

```text
usage: npx sanity blueprints [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   add     Add a Resource to a Blueprint
   config  View or edit local Blueprints configuration
   deploy  Deploy a Blueprint to create or update a Stack
   destroy Destroy a Blueprint to undeploy the Stack
   doctor   Check the health of a Blueprint project
   info    Retrieve information about a Blueprint Stack
   init    Initialize a new Blueprint manifest file
   logs    Display logs for the current Blueprint Stack
   plan    Enumerate Resources to be deployed
   stacks  List all Blueprint Stacks for the current Project

See 'npx sanity help blueprints <command>' for specific information on a subcommand.
```

## Commands

### `add`

**CLI output**

```text
usage: npx sanity blueprints add <type> [--name <name>] [--fn-type <document-publish>] [--fn-lang <ts|js>] [--javascript]

   Add a Resource to a Blueprint

Arguments
  <type>  Type of Resource to add (currently only 'function' is supported)

Options
  --name, -n <name>              Name of the Resource
  --fn-type <type>               Type of Function to add (e.g. document-publish)
  --fn-language, --lang <ts|js>  Language of the Function. Default: "ts"
  --js, --javascript             Shortcut for --fn-language=js
  --fn-helpers, --helpers        Add helpers to the Function
  --no-fn-helpers                Do not add helpers to the Function
  --fn-installer,                Package manager to use for Function helpers
    --installer <npm|pnpm|yarn>    sets --fn-helpers to true
  --install, -i                  Shortcut for --fn-installer=npm

Examples:
  # Add a Function (TypeScript by default)
  sanity blueprints add function

  # Add a Function with a specific name and install helpers with npm
  sanity blueprints add function --name my-function -i

  # Add a Function with a specific type
  sanity blueprints add function --fn-type document-publish

  # Add a JavaScript Function
  sanity blueprints add function --js

  # Add a Function without helpers
  sanity blueprints add function --no-fn-helpers

  # Add a document-publish .js Function with helpers and install with npm
  sanity blueprints add function -n roboto --fn-type document-publish --js -i
```

### `config`

**CLI output**

```text
usage: npx sanity blueprints config [--edit] [-e] [--test] [-t] [--project-id <id>]

   View or edit local Blueprints configuration

Options
  --edit, -e           Modify the configuration interactively, or directly when combined with ID flags.
  --project-id <id>    Directly set the Project ID in the configuration. Requires --edit flag
  --stack-id <id>      Directly set the Stack ID in the configuration. Requires --edit flag
  --verbose            Output verbose logs

Examples:
  # View current configuration
  sanity blueprints config

  # Edit configuration
  sanity blueprints config --edit

  # Test configuration
  sanity blueprints config --test

  # Edit and test configuration
  sanity blueprints config -et
```

### `deploy`

**CLI output**

```text
usage: npx sanity blueprints deploy [--no-wait]

   Deploy a Blueprint to create or update a Stack

Options
  --no-wait    Do not wait for deployment to complete

Examples:
  # Deploy the current blueprint
  sanity blueprints deploy

  # Deploy the current blueprint without waiting for completion
  sanity blueprints deploy --no-wait
```

### `destroy`

**CLI output**

```text
usage: npx sanity blueprints destroy [--force] [-f] [--no-wait]

   Destroy a Blueprint deployment

Options
  --force, -f    Force destroy without confirmation
  --no-wait      Do not wait for destroy to complete

Examples:
  # Destroy the current deployment
  sanity blueprints destroy

  # Force destroy without confirmation
  sanity blueprints destroy --force

  # Destroy without waiting for completion
  sanity blueprints destroy --no-wait
```

### `doctor`

**CLI output**

```sh
usage: npx sanity blueprints doctor [--verbose]

   Check the health of a Blueprint project

Examples:
  # Check the health of the current Blueprint project
  sanity blueprints doctor --verbose
```

### `info`

**CLI output**

```text
usage: npx sanity blueprints info 

   Retrieve information about a Blueprint Stack

Examples:
  # Retrieve information about the current Stack
  sanity blueprints info
```

### `init`

**CLI output**

```text
usage: npx sanity blueprints init [dir] [--blueprint-type <type>] [--project-id <id>]

   Initialize a new Blueprint manifest file

Arguments
  [dir]  Path to initialize the Blueprint in

Options
  --blueprint-type, --type <json>    Type of Blueprint to create
  --project-id <id>                  Project ID to use

Examples:
  # Create a new Blueprint manifest file in the current directory
  sanity blueprints init

  # Create a new Blueprint manifest file in a specific directory
  sanity blueprints init my-sanity-project --type json
```

### `logs`

**CLI output**

```text
usage: npx sanity blueprints logs [--watch] [-w]

   Display logs for the current Blueprint Stack

Options
  --watch, -w    Watch for new logs (streaming mode)

Examples:
  # Show logs for the current Stack
  sanity blueprints logs

  # Watch for new logs (streaming mode)
  sanity blueprints logs --watch
```

### `plan`

**CLI output**

```text
usage: npx sanity blueprints plan 

   Enumerate Resources to be deployed

Safe to run at any time. Will not modify any Resources.

Examples:
  # Show deployment plan for the current Blueprint
  sanity blueprints plan
```

# Build

```markdown
usage: sanity build [OUTPUT_DIR]

   Builds the current Sanity configuration to a static bundle

Options
  --auto-updates / --no-auto-updates Enable/disable auto-updates of studio versions
  --source-maps Enable source maps for built bundles (increases size of bundle)
  --no-minify Skip minifying built Javascript (speeds up build, increases size of bundle)
  -y, --yes Use unattended mode, accepting defaults and using only flags for choices

Examples
  sanity build
  sanity build --no-minify --source-maps
```

# Codemod

```text
usage: sanity codemod [CODEMOD_NAME]

   Runs a code modification script

Runs a given code modification script on the current studio folder.
Running the command without a specified codemod name will list available transformations.

Options
  --dry Dry run (no changes are made to files)
  --extensions=EXT Transform files with these file extensions (comma separated list)
                   (default: js,ts,tsx)
  --no-verify Skips verification steps before running codemod

Examples
  # Show available code mods
  sanity codemod

  # Run codemod to transform react-icons imports from v2 style to v3 style,
  # but only as a dry-run (do not write the files)
  sanity codemod reactIconsV3 --dry
```

# CORS

```markdown
usage: sanity cors [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   add     Allow a new origin to use your project API through CORS
   delete  Delete an existing CORS-origin from your project
   list    List all origins allowed to access the API for this project

See 'sanity help cors <command>' for specific information on a subcommand.
```

## Commands

### Add

```
usage: sanity cors add [ORIGIN]

   Allow a new origin to use your project API through CORS

Options
  --credentials Allow credentials (token/cookie) to be sent from this origin
  --no-credentials Disallow credentials (token/cookie) to be sent from this origin

Examples
  sanity cors add
  sanity cors add http://localhost:3000 --no-credentials
```

### Delete

```
usage: sanity cors delete [ORIGIN]

   Delete an existing CORS-origin from your project

Examples
  sanity cors delete
  sanity cors delete http://localhost:3000
```

### List

```
usage: sanity cors list

   List all origins allowed to access the API for this project

Examples
  sanity cors list
```
