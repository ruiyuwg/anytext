# Hook

**CLI output**

```sh
npx sanity hook --help
```

## Commands

### `attempt`

**CLI output**

```sh
USAGE
  $ sanity hook attempt ATTEMPTID [-p <id>]

ARGUMENTS
  ATTEMPTID  The delivery attempt ID to get details for

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to view webhook attempt for (overrides CLI configuration)

DESCRIPTION
  Print details of a given webhook delivery attempt

EXAMPLES
  Print details of webhook delivery attempt with ID abc123

    $ sanity hook attempt abc123

  Get attempt details for a specific project

    $ sanity hook attempt abc123 --project-id projectId
```

### `create`

**CLI output**

```sh
USAGE
  $ sanity hook create [-p <id>]

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to create webhook for (overrides CLI configuration)

DESCRIPTION
  Create a new webhook for the current project

EXAMPLES
  Create a new webhook for the current project

    $ sanity hook create

  Create a webhook for a specific project

    $ sanity hook create --project-id abc123
```

### `delete`

**CLI output**

```sh
USAGE
  $ sanity hook delete [NAME] [-p <id>]

ARGUMENTS
  [NAME]  Name of hook to delete (will prompt if not provided)

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to delete webhook from (overrides CLI configuration)

DESCRIPTION
  Delete a hook within your project

EXAMPLES
  Interactively select and delete a hook

    $ sanity hook delete

  Delete a specific hook by name

    $ sanity hook delete my-hook

  Delete a hook from a specific project

    $ sanity hook delete --project-id abc123
```

### `list`

**CLI output**

```sh
USAGE
  $ sanity hook list [-p <id>]

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to list webhooks for (overrides CLI configuration)

DESCRIPTION
  List hooks for a given project

EXAMPLES
  List hooks for a given project

    $ sanity hook list

  List hooks for a specific project

    $ sanity hook list --project-id abc123
```

### `logs`

**CLI output**

```sh
USAGE
  $ sanity hook logs [NAME] [-p <id>] [--detailed]

ARGUMENTS
  [NAME]  Name of the hook to show logs for

FLAGS
      --detailed  Include detailed payload and attempts

OVERRIDE FLAGS
  -p, --project-id=<id>  Project ID to view webhook logs for (overrides CLI configuration)

DESCRIPTION
  List latest log entries for a given hook

EXAMPLES
  List latest log entries for a given hook

    $ sanity hook logs

  List latest log entries for a specific hook by name

    $ sanity hook logs [NAME]

  List hook logs for a specific project

    $ sanity hook logs --project-id abc123
```
