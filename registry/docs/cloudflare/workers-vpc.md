# VPC

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/wrangler/commands/vpc.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# VPC

Manage [Workers VPC](https://developers.cloudflare.com/workers-vpc/) services using Wrangler. VPC services allow your Workers to connect to private services on your network through Cloudflare Tunnels.

## `vpc service create`

Create a new VPC service

- [  npm ](#tab-panel-9442)
- [  pnpm ](#tab-panel-9443)
- [  yarn ](#tab-panel-9444)

Terminal window

```

npx wrangler vpc service create [NAME]


```

Terminal window

```

pnpm wrangler vpc service create [NAME]


```

Terminal window

```

yarn wrangler vpc service create [NAME]


```

- `[NAME]` string required\
  The name of the VPC service
- `--type` string required\
  The type of the VPC service
- `--http-port` number\
  HTTP port (default: 80)
- `--https-port` number\
  HTTPS port number (default: 443)
- `--ipv4` string\
  IPv4 address for the host \[conflicts with --ipv6]
- `--ipv6` string\
  IPv6 address for the host \[conflicts with --ipv4]
- `--hostname` string\
  Hostname for the host
- `--resolver-ips` string\
  Comma-separated list of resolver IPs
- `--tunnel-id` string required\
  UUID of the Cloudflare tunnel

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

## `vpc service delete`

Delete a VPC service

- [  npm ](#tab-panel-9445)
- [  pnpm ](#tab-panel-9446)
- [  yarn ](#tab-panel-9447)

Terminal window

```

npx wrangler vpc service delete [SERVICE-ID]


```

Terminal window

```

pnpm wrangler vpc service delete [SERVICE-ID]


```

Terminal window

```

yarn wrangler vpc service delete [SERVICE-ID]


```

- `[SERVICE-ID]` string required\
  The ID of the service to delete

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

## `vpc service get`

Get a VPC service

- [  npm ](#tab-panel-9448)
- [  pnpm ](#tab-panel-9449)
- [  yarn ](#tab-panel-9450)

Terminal window

```

npx wrangler vpc service get [SERVICE-ID]


```

Terminal window

```

pnpm wrangler vpc service get [SERVICE-ID]


```

Terminal window

```

yarn wrangler vpc service get [SERVICE-ID]


```

- `[SERVICE-ID]` string required\
  The ID of the VPC service

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

## `vpc service list`

List VPC services

- [  npm ](#tab-panel-9451)
- [  pnpm ](#tab-panel-9452)
- [  yarn ](#tab-panel-9453)

Terminal window

```

npx wrangler vpc service list


```

Terminal window

```

pnpm wrangler vpc service list


```

Terminal window

```

yarn wrangler vpc service list


```

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

## `vpc service update`

Update a VPC service

- [  npm ](#tab-panel-9454)
- [  pnpm ](#tab-panel-9455)
- [  yarn ](#tab-panel-9456)

Terminal window

```

npx wrangler vpc service update [SERVICE-ID]


```

Terminal window

```

pnpm wrangler vpc service update [SERVICE-ID]


```

Terminal window

```

yarn wrangler vpc service update [SERVICE-ID]


```

- `[SERVICE-ID]` string required\
  The ID of the VPC service to update
- `--name` string required\
  The name of the VPC service
- `--type` string required\
  The type of the VPC service
- `--http-port` number\
  HTTP port (default: 80)
- `--https-port` number\
  HTTPS port number (default: 443)
- `--ipv4` string\
  IPv4 address for the host \[conflicts with --ipv6]
- `--ipv6` string\
  IPv6 address for the host \[conflicts with --ipv4]
- `--hostname` string\
  Hostname for the host
- `--resolver-ips` string\
  Comma-separated list of resolver IPs
- `--tunnel-id` string required\
  UUID of the Cloudflare tunnel

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
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/wrangler/","name":"Wrangler"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/wrangler/commands/","name":"Commands"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/wrangler/commands/vpc/","name":"VPC"}}]}
```
