# Wrangler commands

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workflows/reference/wrangler-commands.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Wrangler commands

## `workflows list`

List Workflows associated to account

- [  npm ](#tab-panel-9754)
- [  pnpm ](#tab-panel-9755)
- [  yarn ](#tab-panel-9756)

Terminal window

```

npx wrangler workflows list


```

Terminal window

```

pnpm wrangler workflows list


```

Terminal window

```

yarn wrangler workflows list


```

- `--page` number default: 1\
  Show a sepecific page from the listing, can configure page size using "per-page"
- `--per-page` number\
  Configure the maximum number of workflows to show per page

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows describe`

Describe Workflow resource

- [  npm ](#tab-panel-9757)
- [  pnpm ](#tab-panel-9758)
- [  yarn ](#tab-panel-9759)

Terminal window

```

npx wrangler workflows describe [NAME]


```

Terminal window

```

pnpm wrangler workflows describe [NAME]


```

Terminal window

```

yarn wrangler workflows describe [NAME]


```

- `[NAME]` string required\
  Name of the workflow

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows delete`

Delete workflow - when deleting a workflow, it will also delete it's own instances

- [  npm ](#tab-panel-9760)
- [  pnpm ](#tab-panel-9761)
- [  yarn ](#tab-panel-9762)

Terminal window

```

npx wrangler workflows delete [NAME]


```

Terminal window

```

pnpm wrangler workflows delete [NAME]


```

Terminal window

```

yarn wrangler workflows delete [NAME]


```

- `[NAME]` string required\
  Name of the workflow

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows trigger`

Trigger a workflow, creating a new instance. Can optionally take a JSON string to pass a parameter into the workflow instance

- [  npm ](#tab-panel-9763)
- [  pnpm ](#tab-panel-9764)
- [  yarn ](#tab-panel-9765)

Terminal window

```

npx wrangler workflows trigger [NAME] [PARAMS]


```

Terminal window

```

pnpm wrangler workflows trigger [NAME] [PARAMS]


```

Terminal window

```

yarn wrangler workflows trigger [NAME] [PARAMS]


```

- `[NAME]` string required\
  Name of the workflow
- `[PARAMS]` string default:\
  Params for the workflow instance, encoded as a JSON string
- `--id` string\
  Custom instance ID, if not provided it will default to a random UUIDv4

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances list`

Instance related commands (list, describe, terminate, pause, resume)

- [  npm ](#tab-panel-9766)
- [  pnpm ](#tab-panel-9767)
- [  yarn ](#tab-panel-9768)

Terminal window

```

npx wrangler workflows instances list [NAME]


```

Terminal window

```

pnpm wrangler workflows instances list [NAME]


```

Terminal window

```

yarn wrangler workflows instances list [NAME]


```

- `[NAME]` string required\
  Name of the workflow
- `--reverse` boolean default: false\
  Reverse order of the instances table
- `--status` string\
  Filters list by instance status (can be one of: queued, running, paused, errored, terminated, complete)
- `--page` number default: 1\
  Show a sepecific page from the listing, can configure page size using "per-page"
- `--per-page` number\
  Configure the maximum number of instances to show per page

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances describe`

Describe a workflow instance - see its logs, retries and errors

- [  npm ](#tab-panel-9769)
- [  pnpm ](#tab-panel-9770)
- [  yarn ](#tab-panel-9771)

Terminal window

```

npx wrangler workflows instances describe [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances describe [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances describe [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string default: latest\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it
- `--step-output` boolean default: true\
  Don't output the step output since it might clutter the terminal
- `--truncate-output-limit` number default: 5000\
  Truncate step output after x characters

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances send-event`

Send an event to a workflow instance

- [  npm ](#tab-panel-9772)
- [  pnpm ](#tab-panel-9773)
- [  yarn ](#tab-panel-9774)

Terminal window

```

npx wrangler workflows instances send-event [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances send-event [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances send-event [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string required\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and send an event to it
- `--type` string required\
  Type of the workflow event
- `--payload` string default: {}\
  JSON string for the workflow event (e.g., '{"key": "value"}')

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances terminate`

Terminate a workflow instance

- [  npm ](#tab-panel-9775)
- [  pnpm ](#tab-panel-9776)
- [  yarn ](#tab-panel-9777)

Terminal window

```

npx wrangler workflows instances terminate [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances terminate [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances terminate [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string required\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances restart`

Restart a workflow instance

- [  npm ](#tab-panel-9778)
- [  pnpm ](#tab-panel-9779)
- [  yarn ](#tab-panel-9780)

Terminal window

```

npx wrangler workflows instances restart [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances restart [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances restart [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string required\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and describe it

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances pause`

Pause a workflow instance

- [  npm ](#tab-panel-9781)
- [  pnpm ](#tab-panel-9782)
- [  yarn ](#tab-panel-9783)

Terminal window

```

npx wrangler workflows instances pause [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances pause [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances pause [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string required\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and pause it

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

## `workflows instances resume`

Resume a workflow instance

- [  npm ](#tab-panel-9784)
- [  pnpm ](#tab-panel-9785)
- [  yarn ](#tab-panel-9786)

Terminal window

```

npx wrangler workflows instances resume [NAME] [ID]


```

Terminal window

```

pnpm wrangler workflows instances resume [NAME] [ID]


```

Terminal window

```

yarn wrangler workflows instances resume [NAME] [ID]


```

- `[NAME]` string required\
  Name of the workflow
- `[ID]` string required\
  ID of the instance - instead of an UUID you can type 'latest' to get the latest instance and resume it

Global flags

- `--v` boolean alias: --version\
  Show version number
- `--cwd` string\
  Run as if Wrangler was started in the specified directory instead of the current working directory
- `--config` string alias: --c\
  Path to Wrangler configuration file
- `--env` string alias: --e\
  Environment to use for operations, and for selecting .env and .dev.vars files
- `--env-file` string\
  Path to an .env file to load - can be specified multiple times - values from earlier files are overridden by values in later files
- `--experimental-provision` boolean aliases: --x-provision default: true\
  Experimental: Enable automatic resource provisioning
- `--experimental-auto-create` boolean alias: --x-auto-create default: true\
  Automatically provision draft bindings with new resources

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workflows/","name":"Workflows"}},{"@type":"ListItem","position":3,"item":{"@id":"/workflows/reference/","name":"Platform"}},{"@type":"ListItem","position":4,"item":{"@id":"/workflows/reference/wrangler-commands/","name":"Wrangler commands"}}]}
```
