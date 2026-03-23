# WranglerCLI

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/components/wrangler-cli.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# WranglerCLI

The `WranglerCLI` component is used `0` times on `0` pages.

See all examples of pages that use WranglerCLI

Used **0** times.

**Pages**

**Partials**

The `WranglerCLI` component validates your Wrangler command & wraps it in the [PackageManagers](https://developers.cloudflare.com/style-guide/components/package-managers/) component.

This is generated using the Wrangler version in the [cloudflare-docs repository ↗](https://github.com/cloudflare/cloudflare-docs/blob/production/package.json).

## Import

```

import { WranglerCLI } from "~/components";


```

## Usage

- [  npm ](#tab-panel-7072)
- [  pnpm ](#tab-panel-7073)
- [  yarn ](#tab-panel-7074)

Terminal window

```

npx wrangler deploy --name my-worker --containers-rollout immediate src/index.mjs


```

Terminal window

```

pnpm wrangler deploy --name my-worker --containers-rollout immediate src/index.mjs


```

Terminal window

```

yarn wrangler deploy --name my-worker --containers-rollout immediate src/index.mjs


```

```

import { WranglerCLI } from "~/components";


<WranglerCLI

  command="deploy"

  positionals={["src/index.mjs"]}

  flags={{

    name: "my-worker",

    "containers-rollout": "immediate",

  }}

/>


```

## Arguments

- `command` string required
  - The name of the command, i.e `d1 execute`.
- `positionals` string\[]
  - Any positional argument values, i.e `{["src/index.mjs]}"` for the optional `[SCRIPT]` positional argument on `deploy`.
- `flags` Record\<string, any>
  - Any named argument values, i.e `name: "my-worker"` for the optional `name` argument on `deploy`.
- `showArgs` boolean default (false)
  - Show the available arguments in a [Details component](https://developers.cloudflare.com/style-guide/components/details/) below the command.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/components/","name":"Components"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/components/wrangler-cli/","name":"WranglerCLI"}}]}
```
