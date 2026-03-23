# Managed rulesets

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/waf/account/managed-rulesets/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Managed rulesets

Note

This feature requires an Enterprise plan.

Cloudflare provides pre-configured managed rulesets that protect against web application exploits such as the following:

- Zero-day vulnerabilities
- Top-10 attack techniques
- Use of stolen/leaked credentials
- Extraction of sensitive data

Managed rulesets are [regularly updated](https://developers.cloudflare.com/waf/change-log/). Each rule has a default action that varies according to the severity of the rule. You can adjust the behavior of specific rules, choosing from several possible actions.

Rules of managed rulesets have associated tags (such as `wordpress`) that allow you to search for a specific group of rules and configure them in bulk.

## Account-level deployment

At the account level, you can deploy each [WAF managed ruleset](https://developers.cloudflare.com/waf/managed-rules/#available-managed-rulesets) more than once. This means that you can apply the same managed ruleset with different configurations to different subsets of incoming traffic for the Enterprise zones in your account.

For example, you could deploy the [Cloudflare OWASP Core Ruleset](https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/) multiple times with different paranoia levels and a different action (*Managed Challenge* action for PL3 and *Log* action for PL4).

Example: Deploy OWASP with two different configurations

The following example deploys the [Cloudflare OWASP Core Ruleset](https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/) multiple times at the account level through the following execute rules:

- First execute rule: Enable OWASP rules up to paranoia level 3 (PL3) and set the action to *Managed Challenge*.
- Second execute rule: Enable OWASP rules up to PL4 and set the action to *Log*.

This configuration gives you additional protection by enabling PL3 rules, but without blocking the requests, since higher paranoia levels are more prone to false positives.

The second rule logs any matches for PL4 rules, the most strict set of rules in the ruleset, so that it does not affect live traffic. You could use this configuration to understand which traffic would be affected by PL4 rules.

- [ Dashboard ](#tab-panel-7257)
- [ API ](#tab-panel-7258)

1. Deploy the Cloudflare OWASP Core Ruleset by following the [dashboard instructions](https://developers.cloudflare.com/waf/account/managed-rulesets/deploy-dashboard/#deploy-a-managed-ruleset), customizing the ruleset behavior using these settings:
   - **OWASP Anomaly Score Threshold**: *Medium - 40 and higher*
   - **OWASP Paranoia Level**: *PL3*
   - **OWASP Action**: *Managed Challenge*
2. Select **Deploy**.
3. Repeat the deployment procedure for the OWASP ruleset, but with following ruleset configuration:
   - **OWASP Anomaly Score Threshold**: *Medium - 40 and higher*
   - **OWASP Paranoia Level**: *PL4*
   - **OWASP Action**: *Log*

Once you finish your configuration, the **Deployed managed rulesets** list will show two *Execute* rules for the Cloudflare OWASP Core Ruleset.

The following `POST` request for the [Create an account ruleset](https://developers.cloudflare.com/api/resources/rulesets/methods/create/) operation creates an [entry point ruleset](https://developers.cloudflare.com/ruleset-engine/about/rulesets/#entry-point-ruleset) for the `http_request_firewall_managed` phase at the account level. The ruleset includes two rules deploying the Cloudflare OWASP Core Ruleset twice with different configurations.

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Account WAF Write`
- `Account Rulesets Write`

Create an account ruleset

```

curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/rulesets" \

  --request POST \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "name": "My ruleset",

    "description": "Entry point ruleset for WAF managed rulesets (account)",

    "kind": "root",

    "phase": "http_request_firewall_managed",

    "rules": [

        {

            "action": "execute",

            "action_parameters": {

                "id": "4814384a9e5d4991b9815dcfc25d2f1f",

                "overrides": {

                    "categories": [

                        {

                            "category": "paranoia-level-4",

                            "enabled": false

                        }

                    ],

                    "rules": [

                        {

                            "id": "6179ae15870a4bb7b2d480d4843b323c",

                            "action": "managed_challenge"

                        }

                    ]

                }

            },

            "expression": "cf.zone.plan eq \"ENT\"",

            "description": "Execute OWASP ruleset at PL3 with Managed Challenge action"

        },

        {

            "action": "execute",

            "action_parameters": {

                "id": "4814384a9e5d4991b9815dcfc25d2f1f",

                "overrides": {

                    "rules": [

                        {

                            "id": "6179ae15870a4bb7b2d480d4843b323c",

                            "action": "log"

                        }

                    ]

                }

            },

            "expression": "cf.zone.plan eq \"ENT\"",

            "description": "Execute OWASP ruleset at PL4 with Log action"

        }

    ]

  }'


```

## Customize the behavior of managed rulesets

To customize the behavior of managed rulesets, do one of the following:

- [Create exceptions](https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/) to skip the execution of managed rulesets or some of their rules under certain conditions.
- [Configure overrides](https://developers.cloudflare.com/waf/account/managed-rulesets/deploy-dashboard/#configure-a-managed-ruleset) to change the rule action or disable one or more rules of managed rulesets. Overrides can affect an entire managed ruleset, specific tags, or specific rules in the managed ruleset.

Exceptions have priority over overrides.

Important

Ruleset overrides and tag overrides apply to both existing and *future* rules in the managed ruleset. If you want to override existing rules only, you must use rule overrides.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/waf/","name":"WAF"}},{"@type":"ListItem","position":3,"item":{"@id":"/waf/account/","name":"Account-level WAF configuration"}},{"@type":"ListItem","position":4,"item":{"@id":"/waf/account/managed-rulesets/","name":"Managed rulesets"}}]}
```
