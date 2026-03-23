# Page Shield FAQ

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/faq.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Page Shield FAQ

## What happens to CSP HTTP headers set by the origin server when I create a policy?

When you create policies, Cloudflare will generate content security policy (CSP) directives from those policies based on their configuration:

- Log policies will create CSP directives for the `Content-Security-Policy-Report-Only` HTTP header.
- Allow policies will create CSP directives for the `Content-Security-Policy` HTTP header.

Page Shield only adds new CSP HTTP headers to the response. This means that Cloudflare will keep any `Content-Security-Policy-Report-Only` and `Content-Security-Policy` HTTP headers in the response set by the origin server and it will add separate HTTP headers for the policies configured on your Cloudflare zone.

It is recommended that you only have one policy in [allow mode](https://developers.cloudflare.com/page-shield/policies/#policy-actions) (that is, a policy being enforced). If there is more than one `Content-Security-Policy` HTTP header in the response, the most restrictive policy wins. For more information, refer to the [MDN documentation ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#multiple%5Fcontent%5Fsecurity%5Fpolicies).

## Can I add a `nonce` CSP directive to a policy?

Page Shield currently does not support [nonce ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#nonces) directives in policies. Instead, you can use a [hash ↗](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP#hashes) CSP directive. For details on the supported directives and values, refer to [Supported CSP directives](https://developers.cloudflare.com/page-shield/policies/csp-directives/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/faq/","name":"Page Shield FAQ"}}]}
```
