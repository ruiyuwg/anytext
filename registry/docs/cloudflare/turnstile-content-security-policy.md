# Content Security Policy

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/turnstile/reference/content-security-policy.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Content Security Policy

The HTTP Content-Security-Policy response header allows website administrators to control resources the user agent is allowed to load for a given page.

We recommend using the nonce-based approach documented with [CSP3 ↗](https://w3c.github.io/webappsec-csp/#framework-directive-source-list). Make sure to include your nonce in the `api.js` script tag and we will handle the rest. Cloudflare Turnstile works with **strict-dynamic**.

Alternatively, add the following values to your CSP header:

- **script-src**: `https://challenges.cloudflare.com`
- **frame-src**: `https://challenges.cloudflare.com`

We recommend validating your CSP with [Google's CSP Evaluator ↗](https://csp-evaluator.withgoogle.com/).

Note

You cannot set your own CSP and/or Referer-Policy via meta tags or [Transform rules](https://developers.cloudflare.com/rules/transform/) in challenge pages.

## Pre-clearance support

If you are using [Turnstile in pre-clearance mode](https://developers.cloudflare.com/cloudflare-challenges/concepts/clearance/#pre-clearance-support-in-turnstile), Turnstile sets the `cf_clearance` cookie by doing a fetch request to a special endpoint in [/cdn-cgi/](https://developers.cloudflare.com/fundamentals/reference/cdn-cgi-endpoint/) of your domain.

For this request to succeed, your `connect-src` directive must include `'self'`.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/turnstile/","name":"Turnstile"}},{"@type":"ListItem","position":3,"item":{"@id":"/turnstile/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/turnstile/reference/content-security-policy/","name":"Content Security Policy"}}]}
```
