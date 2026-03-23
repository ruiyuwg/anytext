# Manage PII

[Skip to content](#%5Ftop)

### Tags

[ Privacy ](https://developers.cloudflare.com/search/?tags=Privacy)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/insights/logs/gateway-logs/manage-pii.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Manage PII

Cloudflare Gateway gives you multiple ways to safely handle your employees' personally identifiable information (PII). By default, PII is redacted from Gateway Activity logs for all permission roles except the Super Administrator and users with the [Cloudflare Zero Trust PII role](https://developers.cloudflare.com/cloudflare-one/roles-permissions/#cloudflare-zero-trust-pii) assigned to them. Only the Super Administrator can assign roles and determine who has permission to view PII. Redacting PII does not affect the way PII is captured in logs as the data is simply hidden and no information is lost.

To add or remove the Cloudflare Zero Trust PII role for a user in your organization, refer to [Roles](https://developers.cloudflare.com/fundamentals/manage-members/roles/). Alternatively, you can choose to [exclude PII](#exclude-pii) from Gateway activity logs for all users.

## Types of PII

Cloudflare Gateway can log the following types of PII:

- Source IP
- User email
- User ID
- Device ID
- URL
- Referer
- User agent

## Exclude PII

Turning on the setting to exclude PII means Cloudflare Gateway will log activity without storing any employee PII. Changes to this setting will not change PII storage of any previous logs. This means if the setting is turned on and then turned off, there will be no PII data for logs captured while this setting was turned on. The PII data will be unavailable to all roles within your Zero Trust organization, including the Super Administrator.

To turn on the setting to exclude PII:

1. In [Cloudflare One ↗](https://one.dash.cloudflare.com/), go to **Traffic policies** > **Traffic settings**.
2. In **Traffic logging**, turn on **Exclude personally identifiable information (PII) from logs**.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/insights/","name":"Insights"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/insights/logs/","name":"Logs"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/insights/logs/gateway-logs/","name":"Gateway activity logs"}},{"@type":"ListItem","position":6,"item":{"@id":"/cloudflare-one/insights/logs/gateway-logs/manage-pii/","name":"Manage PII"}}]}
```
