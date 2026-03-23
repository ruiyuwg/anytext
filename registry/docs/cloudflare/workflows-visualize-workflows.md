# Visualize Workflows

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workflows/build/visualizer.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Visualize Workflows

View a visual representation of your parsed Workflow code as a diagram on the Cloudflare dashboard.

The diagram illustrates your sequenced & parallel steps, conditionals, loops, and nested logic. To see the Workflow at a high level, view the diagram with loops and conditionals collapsed, or expand for a more detailed view.

![Example diagram](https://developers.cloudflare.com/_astro/2026-02-03-workflows-diagram.BfQAnWL3_Z203oFd.webp)

Workflow diagrams are currently in beta for all Typescript and Javascript Workers. View your Workflows in the [Cloudflare dashboard ↗](https://dash.cloudflare.com/?to=/:account/workers/workflows) to see their diagrams.

Warning

Note that this feature is currently in beta.

- Workflows that use a non-default bundler may display unexpected behavior.
- Python Workflows are not currently supported.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workflows/","name":"Workflows"}},{"@type":"ListItem","position":3,"item":{"@id":"/workflows/build/","name":"Build with Workflows"}},{"@type":"ListItem","position":4,"item":{"@id":"/workflows/build/visualizer/","name":"Visualize Workflows"}}]}
```
