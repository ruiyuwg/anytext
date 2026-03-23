# How Page Shield works

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/how-it-works/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# How Page Shield works

Page Shield helps manage client-side resources (which include scripts and their connections) loaded by your website visitors, and provides visibility on the [cookies ↗](https://www.cloudflare.com/learning/privacy/what-are-cookies/) recently detected in HTTP traffic. Page Shield can trigger alert notifications when resources change or are considered malicious.

Enabling resource monitoring adds a [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) deployed with a [report-only directive](https://developers.cloudflare.com/page-shield/reference/csp-header/) to collect information from the browser. This allows Cloudflare to provide you with a list of all scripts running on your application and the connections they make to third-party endpoints. Cloudflare also monitors ingress and egress traffic for cookies, either set by origin servers or by the visitor's browser.

The client-side resource monitoring dashboard shows the list of active scripts, connections, and cookies. The **All Reported Scripts** and **All Reported Connections** dashboards show the full list of detected scripts and connections in your domain, respectively, including infrequent and inactive ones.

Cloudflare adds a CSP report-only HTTP header used to monitor webpage resources to a sample of sent responses. This means that there may be a [small delay](https://developers.cloudflare.com/page-shield/troubleshooting/#cloudflare-does-not-show-any-client-side-resources-after-activation) between deploying a script or cookie and having its data displayed in the resource monitoring dashboards.

Enterprise customers with a paid add-on have access to additional classification mechanisms based on threat feeds to determine if a script, or a connection made by a script, is malicious. For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).

## Positive security model using policies

Enterprise customers with a paid add-on can create [policies](https://developers.cloudflare.com/page-shield/policies/) to define a positive security model (also known as positive blocking) for resources such as scripts.

When you create policies, Cloudflare will generate content security policy (CSP) directives from those policies based on their configuration:

- Log policies will create CSP directives for the `Content-Security-Policy-Report-Only` HTTP header.
- Allow policies will create CSP directives for the `Content-Security-Policy` HTTP header.

For more information, refer to [Policies](https://developers.cloudflare.com/page-shield/policies/).

## Learn more

For more background on Page Shield and client-side resource monitoring, refer to our [blog post ↗](https://blog.cloudflare.com/page-shield-generally-available/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/how-it-works/","name":"How Page Shield works"}}]}
```
