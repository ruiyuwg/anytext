# Logpush integration

[Skip to content](#%5Ftop)

### Tags

[ Logging ](https://developers.cloudflare.com/search/?tags=Logging)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/cloudflare-one/insights/logs/logpush.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Logpush integration

Note

Only available on Enterprise plans.

With Cloudflare's [Logpush](https://developers.cloudflare.com/logs/logpush/) service, you can configure the automatic export of Zero Trust logs to third-party storage destinations or to third-party security information and event management (SIEM) solutions. Once exported, your team can analyze and audit the data as needed.

## Export Zero Trust logs with Logpush

Dashboard limitation

Cloudflare One does not support configuring [Cloudflare R2](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/r2/) as a Logpush destination in the dashboard. To use R2 as a destination for Zero Trust logs, configure your Logpush jobs [with the API](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/r2/#manage-via-api).

To configure Logpush for Zero Trust logs:

1. In [Cloudflare One ↗](https://one.dash.cloudflare.com/), go to **Insights** > **Logs**.
2. Select **Manage Logpush**.
3. In Logpush, select **Create a Logpush job**.
4. Choose a [Logpush destination](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/).
5. Follow the service-specific instructions to configure and validate your destination.
6. Choose the [Zero Trust datasets](#zero-trust-datasets) to export.
7. Enter a **Job name**, any [filters](https://developers.cloudflare.com/logs/logpush/logpush-job/filters/) you would like to add, and the data fields you want to include in the logs.
8. (Optional) In **Advanced settings**, choose the timestamp format you prefer and whether you want to enable log sampling.
9. Select **Submit**.

The setup of your Logpush integration is now complete. Logpush will send updated logs every five minutes to your selected destination. You can configure multiple destinations and add additional fields to your logs by returning to the **Logpush** page.

For more information on supported destinations, refer to [Enable destinations](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/).

## Zero Trust datasets

Refer to [Logpush datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/) for a list of all available fields.

| Dataset                                                                                                                                           | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Access Requests](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/access%5Frequests/)                                 | HTTP requests to sites protected by Cloudflare Access                                                                                                                                                   |
| [Audit Logs](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/audit%5Flogs/)                                           | Authentication events through Cloudflare Access                                                                                                                                                         |
| [Browser Isolation User Actions](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/biso%5Fuser%5Factions/)              | Data transfer actions performed by a user in the remote browser                                                                                                                                         |
| [CASB Findings](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/casb%5Ffindings/)                                     | Security issues detected by Cloudflare CASB                                                                                                                                                             |
| [Device Posture Results](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/device%5Fposture%5Fresults/)                 | Device posture status from the Cloudflare One Client                                                                                                                                                    |
| [DEX Application Tests](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex%5Fapplication%5Ftests/)                   | Device application synthetic test results from the Cloudflare One Client                                                                                                                                |
| [DEX Device State Events](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/dex%5Fdevice%5Fstate%5Fevents/)             | Device event data like connectivity, CPU usage, and Disk I/O from the Cloudflare One Client                                                                                                             |
| [Gateway DNS](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway%5Fdns/)                                         | DNS queries inspected by Cloudflare Gateway                                                                                                                                                             |
| [Gateway HTTP](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway%5Fhttp/)                                       | HTTP requests inspected by Cloudflare Gateway                                                                                                                                                           |
| [Gateway Network](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/gateway%5Fnetwork/)                                 | Network packets inspected by Cloudflare Gateway                                                                                                                                                         |
| [MCP Portal Logs](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/mcp%5Fportal%5Flogs/)                               | Requests made through [MCP server portals](https://developers.cloudflare.com/cloudflare-one/access-controls/ai-controls/mcp-portals/)                                                                   |
| [SSH Logs](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/ssh%5Flogs/)                                               | SSH command logs for [Access for Infrastructure targets](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/use-cases/ssh/ssh-infrastructure-access/)               |
| [WARP Config Changes](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/warp%5Fconfig%5Fchanges/)                       | Event logs that Cloudflare generates whenever a device changes [profiles](https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/configure/device-profiles/) |
| [WARP Toggle Events](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/warp%5Ftoggle%5Fchanges/)                        | Event logs that Cloudflare generates whenever a device toggles the Cloudflare One Client on or off                                                                                                      |
| [Zero Trust Network Session Logs](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/zero%5Ftrust%5Fnetwork%5Fsessions/) | Network session logs for traffic proxied by Cloudflare Gateway                                                                                                                                          |

## Verify regional map application

If you are using [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/) with Cloudflare One, you can configure which subset of Cloudflare data centers decrypt and route your traffic. This allows you to accommodate regional restrictions like GDPR or meet compliance requirements that include geographic restrictions on data flows or processing.

To verify that your regional map is being applied correctly, check the `IngressColoName` field in your [Zero Trust Network Session logs](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/zero%5Ftrust%5Fnetwork%5Fsessions/#ingresscoloname). This field shows the name of the Cloudflare data center where traffic ingressed. Since regionalization is applied upstream from Gateway, the ingress data center will be located within your configured regional map, confirming that traffic is being processed in the correct region.

## Parse DNS logs

Logpush logs the following fields for each DNS query:

- Query name
- Query type
- Query class
- Response TTL
- Response data

DNS query resource records are available in [Base64-encoded binary format ↗](https://datatracker.ietf.org/doc/html/rfc1035#section-4.1.3) and JSON. For example:

```

{

  "ResourceRecords": [

    {

      "type": "5",

      "data": "d3d3LmV4YW1wbGUuY29tAAABAAUAAABleGFtcGxlLmNvbQ=="

    },

    {

      "type": "1",

      "data": "ZXhhbXBsZS5jb20AAAEAAQAAAQIDBAUGBwgJ"

    }

  ],

  "ResourceRecordsJSON": "[{\"name\":\"www.example.com\",\"type\":\"CNAME\",\"class\":\"IN\",\"ttl\":300,\"rdata\":\"example.com.\"},{\"name\":\"example.com\",\"type\":\"A\",\"class\":\"IN\",\"ttl\":300,\"rdata\":\"203.0.113.0\"}]"

}


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/cloudflare-one/","name":"Cloudflare One"}},{"@type":"ListItem","position":3,"item":{"@id":"/cloudflare-one/insights/","name":"Insights"}},{"@type":"ListItem","position":4,"item":{"@id":"/cloudflare-one/insights/logs/","name":"Logs"}},{"@type":"ListItem","position":5,"item":{"@id":"/cloudflare-one/insights/logs/logpush/","name":"Logpush integration"}}]}
```
