# Function CLI commands

The `functions` CLI command enables managing and testing functions. It's used alongside the `blueprints` command to create and deploy functions.

[Functions introduction](https://www.sanity.io/docs/functions/functions-introduction)

[Blueprints introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

**CLI output**

```sh
npx sanity functions --help
```

## Commands

### `add`

**CLI output**

```sh
USAGE
  $ sanity functions add [--install] [-n <value>] [--example <value>] [--helpers] [--installer <value>] [--javascript] [--language <value>] [--type <value>]

FLAGS
  -i, --install            Shortcut for --fn-installer npm
  -n, --name=<value>       Name of the Function to add
      --example=<value>    Example to use for the Function
      --helpers            Add helpers to the new Function
      --installer=<value>  How to install the @sanity/functions helpers
      --javascript         Use JavaScript instead of TypeScript
      --language=<value>   Language of the new Function
      --type=<value>       Document change event(s) that should trigger the function; you can specify multiple events by specifying this flag multiple times

DESCRIPTION
  Scaffolds a new Function in the functions/ folder and templates a resource for your Blueprint manifest.
  
  Functions are serverless handlers triggered by document events (create, update, delete, publish) or media library events.
  
  After adding, use 'functions dev' to test locally, then 'blueprints deploy' to publish.

EXAMPLES
    $ sanity functions add

    $ sanity functions add --helpers

    $ sanity functions add --name my-function

    $ sanity functions add --name my-function --type document-create

    $ sanity functions add --name my-function --type document-create --type document-update --lang js
```

### `dev`

**CLI output**

```sh
USAGE
  $ sanity functions dev [-h <value>] [-p <value>] [-t <value>]

FLAGS
  -h, --host=<value>     The local network interface at which to listen. [default: "localhost"]
  -p, --port=<value>     TCP port to start emulator on. [default: 8080]
  -t, --timeout=<value>  Maximum execution time for all functions, in seconds. Takes precedence over function-specific `timeout`

DESCRIPTION
  Runs a local, web-based development server to test your functions before deploying.
  
  Open the emulator in your browser to interactively test your functions with the payload editor.
  
  Optionally, set the host and port with the --host and --port flags. Function timeout can be configured with the --timeout flag.
  
  To invoke a function with the CLI, use 'functions test'.

EXAMPLES
    $ sanity functions dev --host 127.0.0.1 --port 8974

    $ sanity functions dev --timeout 60
```

### `env`

#### `add`

**CLI output**

```sh
USAGE
  $ sanity functions env add NAME KEY VALUE

ARGUMENTS
  NAME   The name of the Sanity Function
  KEY    The name of the environment variable
  VALUE  The value of the environment variable

DESCRIPTION
  Sets an environment variable in a deployed Sanity Function. If the variable already exists, its value is updated.
  
  Environment variables are useful for API keys, configuration values, and other secrets that shouldn't be hardcoded. Changes take effect on the next function invocation.

EXAMPLES
    $ sanity functions env add MyFunction API_URL https://api.example.com/
```

#### `list`

**CLI output**

```sh
USAGE
  $ sanity functions env list NAME

ARGUMENTS
  NAME  The name of the Sanity Function

DESCRIPTION
  Displays all environment variables (keys only) configured in a deployed Sanity Function.
  
  Use 'functions env add' to set variables or 'functions env remove' to delete them.

EXAMPLES
    $ sanity functions env list MyFunction
```

#### `remove`

**CLI output**

```sh
USAGE
  $ sanity functions env remove NAME KEY

ARGUMENTS
  NAME  The name of the Sanity Function
  KEY   The name of the environment variable

DESCRIPTION
  Deletes an environment variable from a deployed Sanity Function. The change takes effect on the next function invocation.
  
  Use 'functions env list' to see current variables before removing.

EXAMPLES
    $ sanity functions env remove MyFunction API_URL
```

### `logs`

**CLI output**

```sh
USAGE
  $ sanity functions logs [NAME] [--delete] [--force] [--json] [-l <value>] [--utc] [--watch] [--stack <value>]

ARGUMENTS
  [NAME]  The name of the Sanity Function

FLAGS
  -d, --delete         Delete all logs for the function
  -f, --force          Skip confirmation for deleting logs
  -j, --json           Return logs in JSON format
  -l, --limit=<value>  Total number of log entries to retrieve
  -u, --utc            Show dates in UTC time zone
  -w, --watch          Watch for new logs (streaming mode)
      --stack=<value>  Stack name or ID to use instead of the locally configured Stack

DESCRIPTION
  Fetches execution logs from a deployed function, useful for debugging production issues or monitoring activity.
  
  Use --watch (-w) to stream logs in real-time. Use --delete to clear all logs for a function (requires confirmation unless --force is specified).

EXAMPLES
    $ sanity functions logs <name>

    $ sanity functions logs <name> --json

    $ sanity functions logs <name> --limit 100

    $ sanity functions logs <name> --delete
```

### `test`

**CLI output**

```sh
USAGE
  $ sanity functions test [NAME] [-a <value>] [-d <value>] [-e <value>] [-f <value>] [-t <value>] [--data-after <value>] [--data-before <value>] [--dataset <value>] [--document-id <value>] [--document-id-after <value>] [--document-id-before <value>] [--file-after <value>] [--file-before <value>] [--media-library-id <value>] [--project-id <value>] [--with-user-token]

ARGUMENTS
  [NAME]  The name of the Sanity Function

FLAGS
  -a, --api=<value>                 Sanity API Version to use
  -d, --data=<value>                Data to send to the function
  -e, --event=<value>               Type of event (create, update, delete)
  -f, --file=<value>                Read data from file and send to the function
  -t, --timeout=<value>             Execution timeout value in seconds
      --data-after=<value>          Current document
      --data-before=<value>         Original document
      --dataset=<value>             The Sanity dataset to use
      --document-id=<value>         Document to fetch and send to function
      --document-id-after=<value>   Current document
      --document-id-before=<value>  Original document
      --file-after=<value>          Current document
      --file-before=<value>         Original document
      --media-library-id=<value>    Sanity Media Library ID to use
      --project-id=<value>          Sanity Project ID to use
      --with-user-token             Prime access token from CLI config

DESCRIPTION
  Executes a function locally with the provided payload, simulating how it would run when deployed. Use this to test your function logic before deploying.
  
  Provide test data via --data (inline JSON), --file (JSON file), or --document-id (fetch from Sanity). For update events, use the before/after flag pairs to simulate document changes.

EXAMPLES
    $ sanity functions test <name> --data '{ "id": 1 }'

    $ sanity functions test <name> --file 'payload.json'

    $ sanity functions test <name> --data '{ "id": 1 }' --timeout 60

    $ sanity functions test <name> --event update --data-before '{ "title": "before" }' --data-after '{ "title": "after" }'
```

# Canvas

#### Explore Canvas

[Introduction to Canvas](https://www.sanity.io/docs/canvas/canvas-user-guide)

[Content mapping for Canvas](https://www.sanity.io/docs/canvas/canvas-content-mapping)

[Configure content mapping](https://www.sanity.io/docs/canvas/configure-content-mapping)
