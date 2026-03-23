# Blueprints CLI commands

The `blueprints` CLI command enables initializing, managing, and deploying Blueprints and resources like Functions.

[Blueprints introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

[Functions introduction](https://www.sanity.io/docs/functions/functions-introduction)

**CLI output**

```sh
npx sanity blueprints --help
```

## Commands

### `add`

**CLI output**

```sh
USAGE
  $ sanity blueprints add TYPE [--install] [-n <value>] [--example <value>] [--fn-helpers] [--fn-installer <value>] [--fn-type <value>] [--javascript] [--language <value>]

ARGUMENTS
  TYPE  Type of resource to add (only "function" is supported)

FLAGS
  -i, --install               Shortcut for --fn-installer npm
  -n, --name=<value>          Name of the resource to add
      --example=<value>       Example to use for the function resource. Discover examples at https://www.sanity.io/exchange/type=recipes/by=sanity
      --fn-helpers            Add helpers to the new function
      --fn-installer=<value>  Which package manager to use when installing the @sanity/functions helpers
      --fn-type=<value>       Document change event(s) that should trigger the function; you can specify multiple events by specifying this flag multiple times
      --javascript            Use JavaScript instead of TypeScript
      --language=<value>      Language of the new function

DESCRIPTION
  Scaffolds a new Sanity Function in your Blueprint. Functions are serverless handlers triggered by document events (create, update, delete, publish) or media library events.
  
  After adding a function, use 'functions dev' to test locally, then 'blueprints deploy' to publish it.

EXAMPLES
    $ sanity blueprints add function

    $ sanity blueprints add function --helpers

    $ sanity blueprints add function --name my-function

    $ sanity blueprints add function --name my-function --fn-type document-create

    $ sanity blueprints add function --name my-function --fn-type document-create --fn-type document-update --lang js
```

### `config`

**CLI output**

```sh
USAGE
  $ sanity blueprints config [--edit] [--project-id <value>] [--stack <value>]

FLAGS
  -e, --edit                Modify the configuration interactively, or directly when combined with ID flags.
      --project-id=<value>  Directly set the project ID in the configuration. Requires --edit flag
      --stack=<value>       Stack name or ID to set in the configuration. Requires --edit flag

DESCRIPTION
  Manages the local Blueprint configuration, which links your Blueprint to a Sanity project and Stack.
  
  Without flags, displays the current configuration. Use --edit to interactively modify settings, or combine --edit with ID flags to update values directly (useful for scripting and automation).
  
  If you need to switch your Blueprint to a different Stack, use --edit --stack.

EXAMPLES
    $ sanity blueprints config

    $ sanity blueprints config --edit

    $ sanity blueprints config --edit --project-id <projectId>

    $ sanity blueprints config --edit --project-id <projectId> --stack <name-or-id>
```

### `deploy`

**CLI output**

```sh
USAGE
  $ sanity blueprints deploy [--no-wait] [--stack <value>]

FLAGS
      --no-wait        Do not wait for Stack deployment to complete
      --stack=<value>  Stack name or ID to use instead of the locally configured Stack

DESCRIPTION
  Pushes your local Blueprint configuration to the remote Stack; provisioning, updating, or destroying resources as needed. This is the primary command for applying infrastructure changes.
  
  Before deploying, run 'blueprints plan' to preview changes. After deployment, use 'blueprints info' to verify Stack status or 'blueprints logs' to monitor activity.
  
  Use --no-wait to queue the deployment and return immediately without waiting for completion.
  
  Use --fn-installer to force which package manager to use when deploying functions.
  
  Set SANITY_ASSET_TIMEOUT (seconds) to override the 60-second timeout for processing resource assets.

EXAMPLES
    $ sanity blueprints deploy

    $ sanity blueprints deploy --no-wait

    $ sanity blueprints deploy --fn-installer npm
```

### `destroy`

**CLI output**

```sh
USAGE
  $ sanity blueprints destroy [--force] [--no-wait] [--project-id <value>] [--stack <value>]

FLAGS
      --force               Force Stack destruction (skip confirmation)
      --no-wait             Do not wait for Stack destruction to complete
      --project-id=<value>  Project associated with the Stack
      --stack=<value>       Stack name or ID to destroy (defaults to the locally configured Stack)

DESCRIPTION
  Permanently removes the remote Stack and all its provisioned resources. Your local Blueprint files remain untouched, allowing you to redeploy later with 'blueprints init' + 'blueprints deploy'.
  
  This is a destructive operation. You will be prompted to confirm unless --force is specified.
  
  Use this to clean up test environments or decommission a Stack you no longer need.

EXAMPLES
    $ sanity blueprints destroy

    $ sanity blueprints destroy --stack <name-or-id> --project-id <projectId> --force --no-wait
```

### `doctor`

**CLI output**

```sh
USAGE
  $ sanity blueprints doctor [-p <value>] [--fix] [--json] [--verbose]

FLAGS
  -p, --path=<value>  Path to a Blueprint file or directory containing one
      --fix           Interactively fix configuration issues
      --json          Format output as json.
      --verbose       Verbose output; defaults to true

DESCRIPTION
  Analyzes your local Blueprint and remote Stack configuration for common issues, such as missing authentication, invalid project references, or misconfigured resources.
  
  Run this command when encountering errors with other Blueprint commands. Use --fix to interactively resolve detected issues.
```

### `info`

**CLI output**

```sh
USAGE
  $ sanity blueprints info [--stack <value>]

FLAGS
      --stack=<value>  Stack name or ID to use instead of the locally configured Stack

DESCRIPTION
  Displays the current state and metadata of your remote Stack deployment, including deployed resources, status, and configuration.
  
  Use this command to verify a deployment succeeded, check what resources are live, or confirm which Stack your local Blueprint is connected to.
  
  Run 'blueprints stacks' to see all available Stacks in your project or organization.

EXAMPLES
    $ sanity blueprints info

    $ sanity blueprints info --stack <name-or-id>
```

### `init`

**CLI output**

```sh
USAGE
  $ sanity blueprints init [DIR] [--blueprint-type <value>] [--dir <value>] [--example <value>] [--project-id <value>] [--stack-id <value>] [--stack-name <value>] [--verbose]

ARGUMENTS
  [DIR]  Directory to create the local Blueprint in

FLAGS
      --blueprint-type=<value>  Blueprint manifest type to use for the local Blueprint
      --dir=<value>             Directory to create the local Blueprint in
      --example=<value>         Example to use for the local Blueprint
      --project-id=<value>      Sanity project ID used to scope local Blueprint and remote Stack
      --stack-id=<value>        Existing Stack ID used to scope local Blueprint
      --stack-name=<value>      Name to use for a new Stack provisioned during initialization
      --verbose                 Verbose output

DESCRIPTION
  A Blueprint is your local infrastructure-as-code configuration that defines Sanity resources (datasets, functions, etc.). A Stack is the remote deployment target where your Blueprint is applied.
  [NOTE: Currently, accounts are limited to three (3) Stacks per project scope.]
  
  This is typically the first command you run in a new project. It creates a local Blueprint manifest file (sanity.blueprint.ts, .js, or .json) and provisions a new remote Stack.
  Additionally, a Blueprint configuration file is created in .sanity/ containing the scope and Stack IDs. This is .gitignored by default.
  
  After initialization, use 'blueprints plan' to preview changes, then 'blueprints deploy' to apply them.

EXAMPLES
    $ sanity blueprints init

    $ sanity blueprints init [directory]

    $ sanity blueprints init --blueprint-type <json|js|ts>

    $ sanity blueprints init --blueprint-type <json|js|ts> --project-id <projectId> --stack-id <stackId>

    $ sanity blueprints init --blueprint-type <json|js|ts> --stack-name <stackName>
```

### `logs`

**CLI output**

```sh
USAGE
  $ sanity blueprints logs [--watch] [--stack <value>]

FLAGS
  -w, --watch          Watch for new Stack logs (streaming mode)
      --stack=<value>  Stack name or ID to use instead of the locally configured Stack

DESCRIPTION
  Retrieves Stack deployment logs, useful for debugging and monitoring deployment activity.
  
  Use --watch (-w) to stream logs in real-time.
  
  If you're not seeing expected logs, verify your Stack is deployed with 'blueprints info'.

EXAMPLES
    $ sanity blueprints logs

    $ sanity blueprints logs --watch
```

### `plan`

**CLI output**

```sh
USAGE
  $ sanity blueprints plan [--stack <value>]

FLAGS
      --stack=<value>  Stack name or ID to use instead of the locally configured Stack

DESCRIPTION
  Use this command to preview what changes will be applied to your remote Stack before deploying. This is a safe, read-only operation—no resources are created, modified, or deleted.
  
  Run 'blueprints plan' after making local changes to your Blueprint manifest to verify the expected diff. When ready, run 'blueprints deploy' to apply changes.

EXAMPLES
    $ sanity blueprints plan
```

### `stacks`

**CLI output**

```sh
USAGE
  $ sanity blueprints stacks [--project-id <value>]

FLAGS
      --project-id=<value>  Project ID to show Stack deployments for

DESCRIPTION
  Shows all Stacks associated with a project or organization. By default, lists Stacks scoped to the local Blueprint.
  
  Use this to discover existing Stacks you can scope a local Blueprint to (using 'blueprints config --edit'), or to audit what's deployed across your project.

EXAMPLES
    $ sanity blueprints stacks

    $ sanity blueprints stacks --project-id <projectId>

    $ sanity blueprints stacks --organization-id <organizationId>
```

# Deploy custom functions to automate content operations

#### Create your first function

[Create a Document Function](https://www.sanity.io/docs/functions/function-quickstart)

[Create a Media Library Asset Function](https://www.sanity.io/docs/functions/asset-function-quickstart)

[Official recipes](https://www.sanity.io/recipes)

#### Core concepts and guides

[Introduction](https://www.sanity.io/docs/functions/functions-introduction)

[Testing functions locally](https://www.sanity.io/docs/functions/functions-local-testing)

[Configure @sanity/client in Functions](https://www.sanity.io/docs/functions/functions-js-client)

[Add environment variables to functions](https://www.sanity.io/docs/functions/function-env-vars)

[Functions cheat sheet](https://www.sanity.io/docs/functions/functions-cheatsheet)
