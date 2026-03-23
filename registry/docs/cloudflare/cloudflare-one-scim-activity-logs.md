# SCIM activity logs

[Skip to content](#%5Ftop)

### Tags

[ SCIM ](https://developers.cloudflare.com/search/?tags=SCIM)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/insights/logs/scim-logs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# SCIM activity logs

SCIM activity logs allow administrators to audit how [SCIM provisioning](https://developers.cloudflare.com/cloudflare-one/team-and-resources/users/scim/) events in an identity provider (such as create, update, and delete) affect a user's identity and group membership in Zero Trust. You can compare your Zero Trust SCIM logs with your identity provider's SCIM logs to track how identity data is shared between the two services and pinpoint the source of any provisioning errors.

## View SCIM logs

For an overview of SCIM events across all users, log in to [Cloudflare One ↗](https://one.dash.cloudflare.com/) and go to **Logs** > **SCIM provisioning**. This page lists the inbound SCIM requests from all identity providers configured with SCIM. You can select an individual request to view more details about the SCIM operation.

To investigate how SCIM events impacted a specific user, go to their [User Registry identity](https://developers.cloudflare.com/cloudflare-one/team-and-resources/users/users/).

Note

New users must first [register the Cloudflare One Client](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/deployment/manual-deployment/) or authenticate to an Access application before SCIM provisioning can begin.

## Log fields

SCIM provisioning logs show the following information for each inbound SCIM request:

- **IdP name**: Name of the identity provider
- **Timestamp**: Date and time of the request
- **Action**: HTTP request method (`POST`, `PUT`, `PATCH`, `DELETE`)
- **User email**: User who received the SCIM identity update
- **Group name**: Group that received the SCIM identity update
- **Resource type**: SCIM resource that was modified (`GROUP` or `USER`)
- **CF resource ID**: Persistent identifier for the user or group created by Cloudflare SCIM
- **IDP resource ID**: Identifier for the user or group provided by the identity provider
- **Outcome**: Whether the SCIM request was applied successfully (`SUCCESS` or `ERROR`)
- **Request body**: HTTP request body containing the data that was added, modified, or removed
- **JSON log**: SCIM request log in JSON format

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/insights/","name":"Insights"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/insights/logs/","name":"Logs"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/insights/logs/scim-logs/","name":"SCIM activity logs"}}]}
```
