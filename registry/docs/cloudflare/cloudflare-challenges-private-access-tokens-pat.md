# Private Access Tokens (PAT)

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-challenges/reference/private-access-tokens.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Private Access Tokens (PAT)

When a user is presented with a Challenge Page, Cloudflare decides what Challenges need to be solved to prove they are human using results from the Private Access Token (PAT). If a user presents a token, they will have an easier time solving the Challenge.

While some Challenges are computationally complex or require interactivity, most of the Challenges served are invisible to the user.

The Challenge Page is an interstitial page and users will encounter it regardless of having a valid PAT or not. A PAT does not automatically solve a Challenge. It prevents certain Challenges from being issued.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-challenges/","name":"Challenges"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-challenges/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-challenges/reference/private-access-tokens/","name":"Private Access Tokens (PAT)"}}]}
```
