# Script and connection statuses

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/page-shield/reference/script-statuses.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Script and connection statuses

Cloudflare classifies scripts and connections (also known as resources) according to the following:

- The number of times a script/connection was reported.
- Whether the script/connection is considered malicious or not.

Use Page Shield's dashboards to review the scripts loaded in your domain and the connections they make. For more information, refer to [Monitor resources and cookies](https://developers.cloudflare.com/page-shield/detection/monitor-connections-scripts/).

## Available statuses

- **Infrequent**: There are less than three reports for the script/connection. If there are no reports for a script/connection with *Infrequent* status for five days, then Page Shield will delete all the information about the script/connection. Scripts with *Infrequent* status appear only in the All Reported Scripts dashboard, and connections with *Infrequent* status appear only in the All Reported Connections dashboard.
- **Active**: There are more than three reports for the script/connection.
- **Inactive**: A previously active script/connection was not reported in the last seven days. If the script/connection is reported again later, its status will change back to *Active*. If the script/connection is not reported for 30 days, Page Shield will delete all the information about it. Scripts with *Inactive* status appear only in the All Reported Scripts dashboard, and connections with *Inactive* status appear only in the All Reported Connections dashboard.

Note

All scripts and connections considered malicious will appear in the Monitors dashboard, regardless of their status.

Malicious script/connection detection is only available to Enterprise customers with a paid add-on.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/page-shield/","name":"Page Shield"}},{"@type":"ListItem","position":3,"item":{"@id":"/page-shield/reference/","name":"Reference"}},{"@type":"ListItem","position":4,"item":{"@id":"/page-shield/reference/script-statuses/","name":"Script and connection statuses"}}]}
```
