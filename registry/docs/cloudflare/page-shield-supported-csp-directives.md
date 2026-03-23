# Supported CSP directives

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/policies/csp-directives.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Supported CSP directives

Page Shield [policies](https://developers.cloudflare.com/page-shield/policies/) support most Content Security Policy (CSP) directives, covering both monitored and unmonitored resources. You can use a policy to control other types of resources besides scripts and their connections, even though Cloudflare is not monitoring these resources.

Each CSP directive can contain multiple values, including:

- Schemes
- Hostnames
- URIs
- Special keywords between single quotes (for example, `'none'`)
- Hashes between single quotes (for example, `'sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC'`)

Hostname and URI values support a `*` wildcard for the leftmost subdomain.

The following table lists the supported CSP directives and special values you can use in policies:

| Directive                 | Name in the dashboard     | Supported special values                         | Monitored                                                                                   |
| ------------------------- | ------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| script-src                | Scripts                   | 'none''self''unsafe-inline''unsafe-eval''' | [Yes](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/) |
| connect-src               | Connections               | 'none''self''unsafe-inline''unsafe-eval''' | [Yes](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/) |
| default-src               | Default                   | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| img-src                   | Images                    | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| style-src                 | Styles                    | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| font-src                  | Fonts                     | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| object-src                | Objects                   | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| media-src                 | Media                     | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| child-src                 | Child                     | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| form-action               | Form actions              | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| worker-src                | Workers                   | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| base-uri                  | Base URI                  | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| manifest-src              | Manifests                 | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| frame-src                 | Frames                    | 'none''self''unsafe-inline''unsafe-eval''' | No                                                                                          |
| frame-ancestors           | Frame ancestors           | 'none''self'                                     | No                                                                                          |
| upgrade-insecure-requests | Upgrade insecure requests | N/A                                              | No                                                                                          |

## More resources

For more information on CSP directives and their values, refer to the following resources in the MDN documentation:

- [Content-Security-Policy response header ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)
- [CSP guide ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/policies/","name":"Policies"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/policies/csp-directives/","name":"Supported CSP directives"}}]}
```
