# Resources

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/api-content-strategy/api-content-types/resources.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Resources

## Purpose

The resource groups all of the associated endpoints together.

## Structure

### Required components

**Name**: Name of the resource that serves as a top-level grouping. Short noun phrase.

**Description**: Describes the collective group of endpoints that fall under the resource and provides a high-level description of the endpoints.

## Example

**Name**: Audit logs

**Description**: A log of changes made to your Cloudflare account.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/api-content-strategy/","name":"API docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/api-content-strategy/api-content-types/","name":"API content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/api-content-strategy/api-content-types/resources/","name":"Resources"}}]}
```
