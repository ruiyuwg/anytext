# Additional configuration

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-challenges/challenge-types/challenge-pages/additional-configuration.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Additional configuration

## Multi-language support

Refer to [supported languages](https://developers.cloudflare.com/cloudflare-challenges/reference/supported-languages/) for more information.

## Favicon customization

Cloudflare Challenges take the favicon of your website using `GET /favicon.ico` and displays it on the Challenge Page.

You can customize your favicon by using the HTML snippet below.

HTML element

```

<link rel="shortcut icon" href="<FAVICON_LINK>" />


```

## Custom Content Security Policy (CSP) and error pages

Cloudflare-served Challenge Pages operate in a strictly controlled environment to maximize security and ensure the challenge mechanism functions correctly. Because of this, you cannot set your own Content Security Policy (CSP) or Referer-Policy using `<meta>` tags or Transform Rules on Challenge Pages. Origin headers can be modified within the Challenge Page context and are not immutable, but they may cause issues.

If you have an active Transform Rule configured to modify HTTP response headers globally across your website, such as adding custom CSP headers, this rule will interfere with and cause the Challenge Page to fail.

To prevent this conflict, you must modify your Transform Rule expression to explicitly exclude Challenge Page error types. Prefix your Transform Rule expression with the following logical exclusion:

```

not cf.response.error_type in {"managed_challenge" "iuam" "legacy_challenge" "country_challenge"}


```

This exclusion ensures that your custom header modification logic is only applied to traffic destined for your origin, allowing Cloudflare's Challenge Platform to function without being impacted by conflicting response headers.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-challenges/","name":"Challenges"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-challenges/challenge-types/","name":"Available Challenges"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-challenges/challenge-types/challenge-pages/","name":"Interstitial Challenge Pages"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-challenges/challenge-types/challenge-pages/additional-configuration/","name":"Additional configuration"}}]}
```
