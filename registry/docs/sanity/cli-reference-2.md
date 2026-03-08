# CLI reference

The `functions` CLI command enables managing and testing functions. It's used alongside the `blueprints` command to create and deploy functions.

[Functions introduction](https://www.sanity.io/docs/functions/functions-introduction)

[Blueprints introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

**CLI output**

```text
usage: npx sanity functions [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:
   dev   Start the Sanity Function emulator
   env   Add or remove an environment variable or list environment variables for a Sanity function
   logs  Retrieve or delete logs for a Sanity Function
   test  Invoke a local Sanity Function

See 'npx sanity help functions <command>' for specific information on a subcommand.
```

## Commands

### dev

**CLI output**

```text
usage: npx sanity functions dev [--port <port> --open]

   Start the Sanity Function emulator

Options
  --port <port> Port to start emulator on
  --open Open dev server in a new browser tab

Examples
  # Start dev server on default port
  sanity functions dev

  # Start dev server on specific port
  sanity functions dev --port 3333

  # Start dev server and open a new browser tab
  sanity functions dev --open
```

### env

**CLI output**

```text
usage: npx sanity functions env <add|list|remove> <name> [key] [value]

   Add or remove an environment variable or list environment variables for a Sanity function

Commands
  add    Add or update an environment variable
  list   List the environment variables
  remove Remove an environment variable

Arguments
  <name> The name of the function
  <key> The name of the environment variable
  <value> The value of the environment variable

Examples
  # Add or update an environment variable
  sanity functions env add echo API_URL https://api.example.com/

  # Remove an environment variable
  sanity functions env remove echo API_URL

  # List environment variables
  sanity functions env list echo
```

### logs

**CLI output**

```text
usage: npx sanity functions logs <name> [--limit <number>] [--json] [--utc] [--delete [--force]] [--watch]

   Retrieve or delete logs for a Sanity Function

Arguments
  <name> The name of the Function to retrieve logs for

Options
  --limit <limit> The number of log entries to retrieve [default 50]
  --json          If set return json
  --utc           Use UTC dates in logs
  --delete        Delete all logs for the Function
  --force         Force delete all logs for the Function
  --watch         Watch for new logs (streaming mode)

Examples
  # Retrieve logs for Sanity Function
  sanity functions logs echo

  # Retrieve the last two log entries for Sanity Function
  sanity functions logs echo --limit 2

  # Retrieve logs for Sanity Function in json format
  sanity functions logs echo --json

  # Delete all logs for Sanity Function
  sanity functions logs echo --delete

  # Watch for new logs (streaming mode)
  sanity functions logs echo --watch
```

### test

**CLI output**

```text
usage: npx sanity functions test <name> [--event create|update|delete] [--data <json>] [--data-before <json>] [--data-after <json>] [--file <filename>] [--file-before <filename>] [--file-after <filename>] [--document-id <id>] [--document-id-before <id>] [--document-id-before <id>] [--timeout <seconds>] [--api <version>] [--dataset <name>] [--project-id] <id>] [--with-user-token]

   Invoke a local Sanity Function

Arguments
  <name> The name of the Sanity Function

Options
  --event <create|update|delete> The type of event to simulate (default: 'create')
  --data <data> Data to send to the function
  --data-before <data> Data to send to the function when event is update
  --data-after <data> Data to send to the function when event is update
  --file <file> Read data from file and send to the function
  --file-before <file> Read data from file and send to the function when event is update
  --file-after <file> Read data from file and send to the function when event is update
  --document-id <id> Document to fetch and send to function
  --document-id-before <id> Document to fetch and send to function when event is update
  --document-id-after <id> Document to fetch and send to function when event is update
  --timeout <timeout> Execution timeout value in seconds
  --api <version> Sanity API Version to use
  --dataset <dataset> The Sanity dataset to use
  --project-id <id> Sanity Project ID to use
  --with-user-token Prime access token from CLI config into context.clientOptions


Examples
  # Test function passing event data on command line
  sanity functions test echo --data '{ "id": 1 }'

  # Test function passing event data via a file
  sanity functions test echo --file 'payload.json'

  # Test function passing event data on command line and cap execution time to 60 seconds
  sanity functions test echo --data '{ "id": 1 }' --timeout 60

  # Test function simulating an update event
  sanity functions test echo --event update --data-before '{ "title": "before" }' --data-after '{ "title": "after" }'
```

# Canvas

#### Explore Canvas

[Introduction to Canvas](https://www.sanity.io/docs/canvas/canvas-user-guide)

[Content mapping for Canvas](https://www.sanity.io/docs/canvas/canvas-content-mapping)

[Configure content mapping](https://www.sanity.io/docs/canvas/configure-content-mapping)
