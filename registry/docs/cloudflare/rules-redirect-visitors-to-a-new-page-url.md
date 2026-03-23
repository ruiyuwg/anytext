# Redirect visitors to a new page URL

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/rules/url-forwarding/examples/redirect-new-url.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Redirect visitors to a new page URL

Create a redirect rule to redirect visitors from `/contact-us/` to the page's new path `/contacts/`.

This example static redirect for zone `example.com` will redirect visitors requesting the `/contact-us/` page to the new page URL `/contacts/`.

**When incoming requests match**

- **Field:** *URI Path*
- **Operator:** *equals*
- **Value:** `/contact-us/`

If you are using the Expression Editor, enter the following expression:\
`http.request.uri.path eq "/contact-us/"`

**Then**

- **Type:** *Static*
- **URL:** `/contacts/`
- **Status code:** *301*
- **Preserve query string:** Enabled

For example, the redirect rule would perform the following redirects:

| Request URL                      | Target URL                     | Status code |
| -------------------------------- | ------------------------------ | ----------- |
| example.com/contact-us/          | example.com/contacts/          | 301         |
| example.com/contact-us/?state=TX | example.com/contacts/?state=TX | 301         |
| example.com/team/                | (unchanged)                    | n/a         |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/rules/","name":"Rules"}},{"@type":"ListItem","position":3,"item":{"@id":"/rules/url-forwarding/","name":"Redirects"}},{"@type":"ListItem","position":4,"item":{"@id":"/rules/url-forwarding/examples/","name":"Redirect examples"}},{"@type":"ListItem","position":5,"item":{"@id":"/rules/url-forwarding/examples/redirect-new-url/","name":"Redirect visitors to a new page URL"}}]}
```
