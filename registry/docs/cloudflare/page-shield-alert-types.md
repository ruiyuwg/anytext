# Alert types

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/alerts/alert-types.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Alert types

You can configure alerts for resources detected in your domain. Refer to [Alerts](https://developers.cloudflare.com/page-shield/alerts/) for more information.

## New resource alerts

Note

Requires a Business plan or higher.

New resource alerts notify you about new resources detected on your domain, resources detected from new host domains, or issues with the URL length of newly detected resources.

Page Shield New Resources Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when new resources appear in their domain.

**Other options / filters**

None.

**Included with**

Business plans or higher.

**What should you do if you receive one?**

Investigate to confirm that it is an expected change.

**Additional information**

Triggered daily. If configured with a zone filter, the alert is triggered immediately.

Page Shield New Domain Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when resources from new host domains appear in their domain.

**Other options / filters**

None.

**Included with**

Business plans or higher.

**What should you do if you receive one?**

Investigate to confirm that it is an expected change.

**Additional information**

Triggered hourly. If configured with a zone filter, the alert is triggered immediately.

Page Shield New Resource Exceeds Max URL Length Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when a resource's URL exceeds the maximum allowed length.

**Other options / filters**

None.

**Included with**

Business plans or higher.

**What should you do if you receive one?**

Manually check the resource.

## Code change alert

Note

Requires an Enterprise plan with a paid add-on.

This alert notifies you about [code changes](https://developers.cloudflare.com/page-shield/detection/review-changed-scripts/) in previously detected scripts.

Page Shield New Code Change Detection Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when JavaScript dependencies change in the pages of their domain.

**Other options / filters**

None.

**Included with**

Enterprise plans with paid add-on.

**What should you do if you receive one?**

Investigate to confirm that it is an expected change.

**Additional information**

Triggered daily. If configured with a zone filter, the alert is triggered immediately.

## Malicious resource alerts

Note

Requires an Enterprise plan with a paid add-on.

Malicious resource alerts notify you about [resources considered malicious](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/), based on their [domain](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/#malicious-domain-checks), [URL](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/#malicious-url-checks), or [script content](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/#malicious-script-detection).

Page Shield New Malicious Domain Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when resources from a known malicious domain appear in their domain. For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).

**Other options / filters**

None.

**Included with**

Enterprise plans with paid add-on.

**What should you do if you receive one?**

Review the information in the Page Shield dashboard about the detected malicious resources, then update the pages where those resources were detected.

For more information, refer to [Review scripts and connections considered malicious](https://developers.cloudflare.com/page-shield/detection/review-malicious-scripts/).

Page Shield New Malicious URL Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when resources from a known malicious URL appear in their domain. For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).

**Other options / filters**

None.

**Included with**

Enterprise plans with paid add-on.

**What should you do if you receive one?**

Review the information in the Page Shield dashboard about the detected malicious resources, then update the pages where those resources were detected.

For more information, refer to [Review scripts and connections considered malicious](https://developers.cloudflare.com/page-shield/detection/review-malicious-scripts/).

Page Shield New Malicious Script Alert

**Who is it for?**

[Page Shield](https://developers.cloudflare.com/page-shield/) customers who want to receive a notification when Cloudflare classifies JavaScript dependencies in their domain as malicious. For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).

**Other options / filters**

None.

**Included with**

Enterprise plans with paid add-on.

**What should you do if you receive one?**

Review the information in the Page Shield dashboard about the detected malicious resources, then update the pages where those resources were detected.

For more information, refer to [Review scripts and connections considered malicious](https://developers.cloudflare.com/page-shield/detection/review-malicious-scripts/).

Malicious resource alerts will only include resources with an *Active* status. Refer to [Script and connection statuses](https://developers.cloudflare.com/page-shield/reference/script-statuses/) for more information.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/alerts/","name":"Alerts"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/alerts/alert-types/","name":"Alert types"}}]}
```
