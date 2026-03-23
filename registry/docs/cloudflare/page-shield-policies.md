# Policies

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/policies/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Policies

Note

Only available to Enterprise customers with a paid add-on.

Policies define the resources allowed on your applications through Content Security Policy (CSP) directives. Policies can log violations and also enforce an allowlist of resources, effectively blocking resources not included in the policies. These two types of policies are called log policies and allow policies, respectively.

In the [new security dashboard](https://developers.cloudflare.com/security/), policies are called content security rules, and they are one of the available types of [security rules](https://developers.cloudflare.com/security/rules/). Security rules perform security-related actions on incoming requests that match specified filters.

Create [allow policies](#policy-actions) to define a positive security model, also known as positive blocking. According to this model, you define what is allowed and reject everything else. Such an approach helps you reduce the attack surface for unwanted third-party scripts in your application.

A policy can control both client-side resources monitored by Cloudflare, such as scripts and their connections, and other types of resources. Refer to [Supported CSP directives](https://developers.cloudflare.com/page-shield/policies/csp-directives/) for details.

### Important remarks

Third-party service providers may require specific CSP directives. Refer to your provider's documentation for more information on the CSP directives you need to include in your policy.

## Policy actions

A policy — or content security rule — can perform one of the following actions:

- **Log**: Cloudflare will log any resources not covered by the policy, without blocking any resources. Use this action to validate a new policy before deploying it. Resources not covered by the policy will be reported as [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/).
- **Allow**: Cloudflare will block any resources not explicitly allowed by the policy. Switch to the *Allow* action after validating a new policy with the *Log* action, so that your policy does not block essential application resources, which would affect your application's end users. Policies with the *Allow* action will log [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/) for any blocked resources.

For details on the CSP directives Cloudflare creates for each type of policy action, refer to [How Page Shield works](https://developers.cloudflare.com/page-shield/how-it-works/#positive-security-model-using-policies). For more information on the CSP directives supported by policies, refer to [Supported CSP directives](https://developers.cloudflare.com/page-shield/policies/csp-directives/).

## Next steps

Refer to the following pages for instructions on creating a policy or content security rule:

- [Create a policy in the dashboard](https://developers.cloudflare.com/page-shield/policies/create-dashboard/)
- [Page Shield API: Create a policy](https://developers.cloudflare.com/page-shield/reference/page-shield-api/#create-a-policy)

Shortly after you configure policies, the Cloudflare dashboard will start displaying any [violations](https://developers.cloudflare.com/page-shield/policies/violations/) of those policies.

You can filter Page Shield alert notifications according to the policies you configured in a zone. These alerts are called [scoped alerts](https://developers.cloudflare.com/page-shield/alerts/#scoped-alerts).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/policies/","name":"Policies"}}]}
```
