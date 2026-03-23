# Alerts

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/alerts/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Alerts

Note

New resource alerts require a Business plan or higher. Code change and malicious resource alerts require an Enterprise plan with a paid add-on. For details, refer to [Alert types](https://developers.cloudflare.com/page-shield/alerts/alert-types/).

Once you have activated Page Shield's client-side resource monitoring, you can set up one or more alerts informing you of relevant client-side changes on your zones.

You can configure unscoped or scoped alerts:

- **Unscoped alert**: An alert configured for all zones in your Cloudflare account. Unscoped alerts are trigged either daily, hourly, or immediately, depending on the [alert type](https://developers.cloudflare.com/page-shield/alerts/alert-types/).
- **Scoped alert**: An alert scoped to one or more zones. You must configure [policies](https://developers.cloudflare.com/page-shield/policies/) for the zones you select to receive any notifications. Scoped alerts are triggered immediately. Policy violations will not trigger an alert. For more information, refer to [Scoped alerts](#scoped-alerts).

For alerts sent at regular intervals, you might experience a delay between adding a new script and receiving an alert.

For instructions on configuring alerts, refer to [Configure an alert](https://developers.cloudflare.com/page-shield/alerts/configure/).

## Scoped alerts

Note

Applies to Enterprise customers with a paid add-on.

If you have configured [policies](https://developers.cloudflare.com/page-shield/policies/) in a zone, you can filter alert notifications according to those policies. These alerts are called scoped alerts.

When you create a scoped alert using the **Policies of these zones** alert filter, you will only receive the most relevant notifications based on the policies you configured.

For each scoped alert, Cloudflare does the following:

1. Check which policies in a zone are enabled, either in allow or in log mode.
2. For every enabled policy, compare the URL of the new or changed resource against the allowed sources in the policy.
3. If the resource is allowed by the policy, check if the new or modified resource should trigger the current alert.
4. If the alert should trigger, send an alert notification to the configured destinations.

When you create a scoped alert you will not receive notifications for resources that are not allowed by a policy (either [in allow or in log mode](https://developers.cloudflare.com/page-shield/policies/#policy-actions)). These are [policy violations](https://developers.cloudflare.com/page-shield/policies/violations/) that you can review in the dashboard, through GraphQL, or via Logpush.

Note

You will not receive notifications for a scoped alert in the following cases:

- No configured policies in the zone
- Policy is not enabled

For unscoped alerts, you will receive alerts for resources detected in all your zones, and you may receive alerts about resources that violate your configured policies.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/alerts/","name":"Alerts"}}]}
```
