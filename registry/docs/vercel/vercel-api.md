# vercel api

> **⚠️ Warning:** The `vercel api` command is currently in beta. Features and behavior may change.

The `vercel api` command lets you make authenticated HTTP requests to the Vercel API directly from your terminal. It handles authentication automatically using your CLI session, supports interactive endpoint discovery, and provides features like automatic pagination and request body construction.

This command is useful for scripting, debugging, and exploring the Vercel API without needing to manage tokens or construct requests manually.

## Usage

```bash filename="terminal"
vercel api [endpoint]
```

*Using the \`vercel api\` command to make a request to the Vercel API.*

If you run `vercel api` without an endpoint, the command enters interactive mode where you can search and select from all available API endpoints.

## Examples

### Get current user information

Retrieve information about the authenticated user:

```bash filename="terminal"
vercel api /v2/user
```

*Making a GET request to the \`/v2/user\` endpoint.*

### List projects with team scope

List projects for a specific team:

```bash filename="terminal"
vercel api /v9/projects --scope my-team
```

*Using the \`--scope\` option to target a specific team.*

### Create a new project

Create a project using a POST request with field data:

```bash filename="terminal"
vercel api /v10/projects -X POST -F name=my-project
```

*Using \`-X POST\` to set the method and \`-F\` to add a typed field.*

### Delete a deployment

Delete a specific deployment:

```bash filename="terminal"
vercel api /v13/deployments/dpl_abc123 -X DELETE
```

*Making a DELETE request to remove a deployment.*

### Paginate through all deployments

Fetch all pages of deployments automatically:

```bash filename="terminal"
vercel api /v6/deployments --paginate
```

*Using \`--paginate\` to fetch all pages of results.*

### Post JSON from a file

Send a request body from a JSON file:

```bash filename="terminal"
vercel api /v10/projects -X POST --input config.json
```

*Using \`--input\` to read the request body from a file.*

### Add custom headers

Include custom headers in your request:

```bash filename="terminal"
vercel api /v2/user -H "X-Custom-Header: value"
```

*Using \`-H\` to add a custom HTTP header.*

### Interactive mode

Launch interactive endpoint selection:

```bash filename="terminal"
vercel api
```

*Running without an endpoint to enter interactive mode.*

### Generate a curl command

Output a curl command instead of executing the request:

```bash filename="terminal"
vercel api /v2/user --generate=curl
```

*Using \`--generate=curl\` to output a curl command with authentication placeholder.*

## How it works

When you run `vercel api`:

1. The CLI authenticates using your current session (the same credentials used by other CLI commands)
2. It constructs the request with your specified method, headers, and body
3. It sends the request to `https://api.vercel.com` with the appropriate authorization
4. It formats and displays the JSON response

For interactive mode, the CLI fetches the OpenAPI specification to provide endpoint discovery and parameter prompts.

## Unique options

These options only apply to the `vercel api` command.

### Method

The `--method` option, shorthand `-X`, sets the HTTP method for the request. Defaults to GET, or POST if a body is provided.

```bash filename="terminal"
vercel api /v10/projects -X POST -F name=my-project
```

*Using \`-X POST\` to make a POST request.*

### Field

The `--field` option, shorthand `-F`, adds a typed parameter to the request body. Values are automatically parsed as numbers, booleans, or strings. Use `@file` syntax to read field content from a file.

```bash filename="terminal"
vercel api /v10/projects -X POST -F name=my-project -F framework=nextjs
```

*Adding multiple fields to the request body.*

### Raw field

The `--raw-field` option, shorthand `-f`, adds a string parameter without type parsing.

```bash filename="terminal"
vercel api /v10/projects -X POST -f name=my-project
```

*Adding a field as a raw string value.*

### Header

The `--header` option, shorthand `-H`, adds a custom HTTP header to the request.

```bash filename="terminal"
vercel api /v2/user -H "Accept: application/json"
```

*Adding a custom header to the request.*

### Input

The `--input` option reads the request body from a file. Use `-` to read from stdin.

```bash filename="terminal"
vercel api /v10/projects -X POST --input project.json
```

*Reading the request body from a JSON file.*

### Paginate

The `--paginate` flag fetches all pages of results and combines them into a single output.

```bash filename="terminal"
vercel api /v6/deployments --paginate
```

*Automatically fetching all pages of deployments.*

### Include

The `--include` option, shorthand `-i`, includes response headers in the output.

```bash filename="terminal"
vercel api /v2/user -i
```

*Including HTTP response headers in the output.*

### Silent

The `--silent` flag suppresses response output. The exit code indicates success (0) or failure (1).

```bash filename="terminal"
vercel api /v2/user --silent && echo "Success"
```

*Running silently and checking the exit code.*

### Verbose

The `--verbose` flag shows debug information including the full request and response details.

```bash filename="terminal"
vercel api /v2/user --verbose
```

*Enabling verbose output for debugging.*

### Raw

The `--raw` flag outputs JSON without pretty-printing.

```bash filename="terminal"
vercel api /v2/user --raw
```

*Outputting raw, non-formatted JSON.*

### Refresh

The `--refresh` flag forces a refresh of the cached OpenAPI specification used for interactive mode.

```bash filename="terminal"
vercel api --refresh
```

*Refreshing the cached API specification.*

### Generate

The `--generate` option outputs the request in a different format instead of executing it. Currently supports `curl`.

```bash filename="terminal"
vercel api /v2/user --generate=curl
```

*Generating a curl command with a token placeholder.*

### Dangerously skip permissions

The `--dangerously-skip-permissions` flag skips confirmation prompts for DELETE operations. Use with caution.

```bash filename="terminal"
vercel api /v13/deployments/dpl_abc123 -X DELETE --dangerously-skip-permissions
```

*Skipping the confirmation prompt for a DELETE request.*

## Subcommands

### list

The `list` subcommand (alias `ls`) displays all available API endpoints.

```bash filename="terminal"
vercel api ls
```

*Listing all available API endpoints.*

You can output the list as JSON:

```bash filename="terminal"
vercel api ls --format json
```

*Listing endpoints in JSON format for scripting.*

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the  command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

## Related

- [Vercel REST API](/docs/rest-api)
- [vercel curl](/docs/cli/curl)
- [Global Options](/docs/cli/global-options)

title: "vercel bisect"
description: "Learn how to perform a binary search on your deployments to help surface issues using the vercel bisect CLI command."
last\_updated: "2026-03-23T09:40:06.545Z"
source: "https://vercel.com/docs/cli/bisect"
