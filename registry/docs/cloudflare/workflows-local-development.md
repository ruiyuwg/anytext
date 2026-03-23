# Local Development

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workflows/build/local-development.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Local Development

**Last reviewed:**  over 1 year ago

Workflows support local development using [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/), the command-line interface for Workers. Wrangler runs an emulated version of Workflows compared to the one that Cloudflare runs globally.

## Prerequisites

To develop locally with Workflows, you will need:

- [Wrangler v3.89.0 ↗](https://blog.cloudflare.com/wrangler3/) or later.
- Node.js version of `18.0.0` or later. Consider using a Node version manager like [Volta ↗](https://volta.sh/) or [nvm ↗](https://github.com/nvm-sh/nvm) to avoid permission issues and change Node versions.
- If you are new to Workflows and/or Cloudflare Workers, refer to the [Workflows Guide](https://developers.cloudflare.com/workflows/get-started/guide/) to install `wrangler` and deploy their first Workflows.

## Start a local development session

Open your terminal and run the following commands to start a local development session:

Terminal window

```

# Confirm we are using wrangler v3.89.0+

npx wrangler --version


```

```

⛅️ wrangler 3.89.0


```

Start a local dev session

Terminal window

```

# Start a local dev session:

npx wrangler dev


```

```

------------------

Your worker has access to the following bindings:

- Workflows:

  - MY_WORKFLOW: MyWorkflow

⎔ Starting local server...

[wrangler:inf] Ready on http://127.0.0.1:8787/


```

Local development sessions create a standalone, local-only environment that mirrors the production environment Workflows runs in so you can test your Workflows *before* you deploy to production.

Refer to the [wrangler dev documentation](https://developers.cloudflare.com/workers/wrangler/commands/general/#dev) to learn more about how to configure a local development session.

## Known Issues

Workflows are not supported as [remote bindings](https://developers.cloudflare.com/workers/development-testing/#remote-bindings) or when using `npx wrangler dev --remote`.

Wrangler Workflows commands `npx wrangler workflow [cmd]` are not supported for local development, as they target production API. The methods to `pause()`, `resume()`, `terminate()`, and `restart()` are also not yet implemented in local development.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workflows/","name":"Workflows"}},{"@type":"ListItem","position":3,"item":{"@id":"/workflows/build/","name":"Build with Workflows"}},{"@type":"ListItem","position":4,"item":{"@id":"/workflows/build/local-development/","name":"Local Development"}}]}
```
