# Get started - API

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/style-guide/api-content-strategy/api-content-types/get-started-api.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Get started - API

## Purpose

The Get started section provides a brief overview of the Cloudflare’s API and lists requirements and tasks users must complete before successfully making their first request.

## Structure

### Required components

**Overview**: High-level explanation of Cloudflare’s API and includes information about our architectural style, schema, and base URL.

**Authentication**: Explains how users can authenticate with the Cloudflare API and how users should or can utilize API tokens, API token templates, and API token permissions.

## Example

**Overview**: Cloudflare's API exposes the entire Cloudflare infrastructure via a standardized programmatic interface. Cloudflare’s API uses `REST` and returns `JSON` responses, and the latest version is `v4`.

**Recommended workflow**:

1. Sign up for a Cloudflare account.
2. Create an API token.
3. (Optional) Use API token templates and token permissions.
4. Make your first request.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/style-guide/","name":"Style Guide"}},{"@type":"ListItem","position":3,"item":{"@id":"/style-guide/api-content-strategy/","name":"API docs content strategy"}},{"@type":"ListItem","position":4,"item":{"@id":"/style-guide/api-content-strategy/api-content-types/","name":"API content types"}},{"@type":"ListItem","position":5,"item":{"@id":"/style-guide/api-content-strategy/api-content-types/get-started-api/","name":"Get started - API"}}]}
```
