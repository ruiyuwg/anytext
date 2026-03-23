# Review resources considered malicious

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/detection/review-malicious-scripts.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Review resources considered malicious

Note

Only available to Enterprise customers with a paid add-on.

Cloudflare displays scripts and connections considered malicious at the top of the dashboard lists, so that you can quickly identify those resources, review them, and take action.

## Review malicious scripts

To review the scripts considered malicious:

1. Go to the client-side resources page:
   - [  New dashboard ](#tab-panel-5628)
   - [ Old dashboard ](#tab-panel-5629)
   1. In the Cloudflare dashboard, go to the **Web assets** page.\
      [ Go to **Web assets** ](https://dash.cloudflare.com/?to=/:account/:zone/security/web-assets)
   2. Select the **Client-side resources** tab.
   3. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.
   4. Go to **Security** > **Page Shield**.
2. Select the **Scripts** tab.
3. Select **Details** for each script considered malicious. The script details will contain:
   - **Malicious code analysis**: Scores between 1-99 classifying how malicious the current script version is, where 1 means definitely malicious and 99 means definitely not malicious.
   - **Code behavior analysis**: Scores classifying the behavior of the current script version in terms of code obfuscation and data exfiltration. The scores vary between 1-99, where 1 means definitely malicious and 99 means definitely not malicious.
   - **Threat intelligence**: Whether the script URL and/or domain is known to be malicious according to threat intelligence feeds. If the script is considered malicious according to the feeds, the dashboard will show a list of associated threat [categories](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/#malicious-script-and-connection-categories). If threat intelligence feeds do not have any information about the script URL or domain, the dashboard will show **Not present**.\
     The script details also include the last 10 script versions detected by Cloudflare.\
     Note\
     The **Hash** value shown in the script details for each script version is an internal identifier. This differs from the file content hash defined by [Subresource Integrity (SRI) ↗](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource%5FIntegrity) that is required to be used in [Page Shield policies](https://developers.cloudflare.com/page-shield/policies/).\
     For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).
4. Based on the displayed information, and with the help of the [last seen/first seen fields in the script details](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/#view-details), review and update the pages where the malicious script was detected.

You can configure alerts for detected malicious scripts. Refer to [Alerts](https://developers.cloudflare.com/page-shield/alerts/) for more information.

## Review malicious connections

To review the connections considered malicious:

1. Go to the client-side resources page:
   - [  New dashboard ](#tab-panel-5630)
   - [ Old dashboard ](#tab-panel-5631)
   1. In the Cloudflare dashboard, go to the **Web assets** page.\
      [ Go to **Web assets** ](https://dash.cloudflare.com/?to=/:account/:zone/security/web-assets)
   2. Select the **Client-side resources** tab.
   3. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/), and select your account and domain.
   4. Go to **Security** > **Page Shield**.
2. Select **Connections**.
3. Select **Details** for each connection considered malicious. The connection details will contain:
   - **URL match**: Whether the connection's target URL is known to be malicious according to threat intelligence feeds. This field requires that you configure Page Shield to analyze the [full URI](https://developers.cloudflare.com/page-shield/reference/settings/#connection-target-details) of outgoing connections.
   - **Domain match**: Whether the connection's target domain is known to be malicious according to threat intelligence feeds.
   - **Category**: The categorization of the connection considered malicious according to threat intelligence feeds.\
     For more information, refer to [Malicious script and connection detection](https://developers.cloudflare.com/page-shield/how-it-works/malicious-script-detection/).
4. Based on the displayed information, and with the help of the [last seen/first seen fields in the connection details](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/#view-details), review and update the pages where the malicious connection was detected.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/detection/","name":"Detection"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/detection/review-malicious-scripts/","name":"Review resources considered malicious"}}]}
```
