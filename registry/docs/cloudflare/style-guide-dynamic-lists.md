# Dynamic lists

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/documentation-content-strategy/component-attributes/dynamic-lists.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Dynamic lists

## Definition

Dynamic lists automatically add or remove elements based on set criteria.

## Used in

When at all possible, Cloudflare seeks to avoid creating static representations of dynamic options.

## Structure

Potential examples include:

- Exhaustive listing of fields
- Replicating API content in developer docs
- Maintaining lists of potential options in the UI (i.e., Alert types)
- Verified Bots

The preferred approach would be speak more generally to the categories or specific, high-value fields.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/documentation-content-strategy/","name":"Product docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/","name":"Component attributes"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/documentation-content-strategy/component-attributes/dynamic-lists/","name":"Dynamic lists"}}]}
```
