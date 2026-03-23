# Managed Rules

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/waf/managed-rules/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Managed Rules

Cloudflare provides pre-configured managed rulesets that protect against web application exploits such as the following:

- Zero-day vulnerabilities
- Top-10 attack techniques
- Use of stolen/leaked credentials
- Extraction of sensitive data

Managed rulesets are [regularly updated](https://developers.cloudflare.com/waf/change-log/). Each rule has a default action that varies according to the severity of the rule. You can adjust the behavior of specific rules, choosing from several possible actions.

Rules of managed rulesets have associated tags (such as `wordpress`) that allow you to search for a specific group of rules and configure them in bulk.

## Available managed rulesets

- [**Cloudflare Managed Ruleset**](https://developers.cloudflare.com/waf/managed-rules/reference/cloudflare-managed-ruleset/): Created by the Cloudflare security team, this ruleset provides fast and effective protection for all of your applications. The ruleset is updated frequently to cover new vulnerabilities and reduce false positives.\
  Ruleset ID: `...376e9aee`
- [**Cloudflare OWASP Core Ruleset**](https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/): Cloudflare's implementation of the Open Web Application Security Project, or OWASP ModSecurity Core Rule Set. Cloudflare routinely monitors for updates from OWASP based on the latest version available from the official code repository.\
  Ruleset ID: `...c25d2f1f`
- [**Cloudflare Exposed Credentials Check**](https://developers.cloudflare.com/waf/managed-rules/reference/exposed-credentials-check/): Deploy an automated credentials check on your end-user authentication endpoints. For any credential pair, the Cloudflare WAF performs a lookup against a public database of stolen credentials. Cloudflare recommends that you use [leaked credentials detection](https://developers.cloudflare.com/waf/detections/leaked-credentials/) instead of this ruleset.\
  Ruleset ID: `...14069605`
- **Cloudflare Free Managed Ruleset**: Available on all Cloudflare plans. Designed to provide mitigation against high and wide impacting vulnerabilities. The rules are safe to deploy on most applications. If you deployed the Cloudflare Managed Ruleset for your site, you do not need to deploy this managed ruleset.\
  Ruleset ID: `...dfb893ba`

The following managed rulesets run in a response phase:

- [**Cloudflare Sensitive Data Detection**](https://developers.cloudflare.com/waf/managed-rules/reference/sensitive-data-detection/): Created by Cloudflare to address common data loss threats. These rules monitor the download of specific sensitive data — for example, financial and personally identifiable information.\
  Ruleset ID: `...499d988e`

## Availability

The managed rulesets you can deploy depend on your Cloudflare plan.

| Free                                              | Pro | Business | Enterprise |     |
| ------------------------------------------------- | --- | -------- | ---------- | --- |
| Availability                                      | Yes | Yes      | Yes        | Yes |
| Free Managed Ruleset                              | Yes | Yes      | Yes        | Yes |
| Cloudflare Managed Ruleset                        | No  | Yes      | Yes        | Yes |
| Cloudflare OWASP Core Ruleset                     | No  | Yes      | Yes        | Yes |
| Cloudflare Exposed Credentials Check (deprecated) | No  | Yes      | Yes        | Yes |
| Cloudflare Sensitive Data Detection               | No  | No       | No         | Yes |

## Customize the behavior of managed rulesets

To customize the behavior of managed rulesets, do one of the following:

- [Create exceptions](https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/) to skip the execution of managed rulesets or some of their rules under certain conditions.
- [Configure overrides](https://developers.cloudflare.com/waf/managed-rules/deploy-zone-dashboard/#configure-a-managed-ruleset) to change the rule action or disable one or more rules of managed rulesets. Overrides can affect an entire managed ruleset, specific tags, or specific rules in the managed ruleset.

Exceptions have priority over overrides.

Important

Ruleset overrides and tag overrides apply to both existing and *future* rules in the managed ruleset. If you want to override existing rules only, you must use rule overrides.

## Interaction with other app security features

If you are using several app security features like custom rules, Managed Rules, and Super Bot Fight Mode, it is important to understand how these features interact and the order in which they execute. Refer to [Security features interoperability](https://developers.cloudflare.com/waf/feature-interoperability/) for more information.

## Important remarks

### Maximum body size

Cloudflare analyzes the body of incoming requests up to a certain maximum size that varies according to your Cloudflare plan:

- For Enterprise customers, the maximum body size is 128 KB.
- For other paid plans, the limit is lower by default — reach out to your account team or to Cloudflare Support to increase the limit.
- For users in the Free plan, the limit is 1 MB.

This means that the behavior of specific managed rules that analyze request bodies can vary according to your current plan. For example, the OWASP Core Ruleset might have a higher rate of false positives with larger payload sizes because analyzing more data increases the likelihood that the total score exceeds the [threshold](https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/concepts/#score-threshold).

If included in your plan, you can use [request body fields](https://developers.cloudflare.com/ruleset-engine/rules-language/fields/reference/?field-category=Body) such as `http.request.body.truncated` or `http.request.headers.truncated` in [custom rules](https://developers.cloudflare.com/waf/custom-rules/) that apply appropriate actions to requests that have not been fully analyzed by Cloudflare due to the maximum body size.

### Zone-level deployment

At the zone level, you can only deploy each managed ruleset once. At the [account level](https://developers.cloudflare.com/waf/account/managed-rulesets/) you can deploy each managed ruleset multiple times.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/waf/","name":"WAF"}},{"@type":"ListItem","position":3,"item":{"@id":"/waf/managed-rules/","name":"Managed Rules"}}]}
```
