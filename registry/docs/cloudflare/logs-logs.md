# Logs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/changelog/logs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Logs

[ Subscribe to RSS ](https://developers.cloudflare.com/changelog/rss/logs.xml)

## 2026-03-09

**New MCP Portal Logs dataset and new fields across multiple Logpush datasets in Cloudflare Logs**

Cloudflare has added new fields across multiple [Logpush datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/):

#### New dataset

- **MCP Portal Logs**: A new dataset with fields including `ClientCountry`, `ClientIP`, `ColoCode`, `Datetime`, `Error`, `Method`, `PortalAUD`, `PortalID`, `PromptGetName`, `ResourceReadURI`, `ServerAUD`, `ServerID`, `ServerResponseDurationMs`, `ServerURL`, `SessionID`, `Success`, `ToolCallName`, `UserEmail`, and `UserID`.

#### New fields in existing datasets

- **DEX Application Tests**: `HTTPRedirectEndMs`, `HTTPRedirectStartMs`, `HTTPResponseBody`, and `HTTPResponseHeaders`.
- **DEX Device State Events**: `ExperimentalExtra`.
- **Firewall Events**: `FraudUserID`.
- **Gateway HTTP**: `AppControlInfo` and `ApplicationStatuses`.
- **Gateway DNS**: `InternalDNSDurationMs`.
- **HTTP Requests**: `FraudEmailRisk`, `FraudUserID`, and `PayPerCrawlStatus`.
- **Network Analytics Logs**: `DNSQueryName`, `DNSQueryType`, and `PFPCustomTag`.
- **WARP Toggle Changes**: `UserEmail`.
- **WARP Config Changes**: `UserEmail`.
- **Zero Trust Network Session Logs**: `SNI`.

For the complete field definitions for each dataset, refer to [Logpush datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/).

## 2025-12-11

**SentinelOne as Logpush destination**

Cloudflare Logpush now supports **SentinelOne** as a native destination.

Logs from Cloudflare can be sent to [SentinelOne AI SIEM ↗](https://www.sentinelone.com/) via [Logpush](https://developers.cloudflare.com/logs/logpush/). The destination can be configured through the Logpush UI in the Cloudflare dashboard or by using the [Logpush API](https://developers.cloudflare.com/api/resources/logpush/subresources/jobs/).

For more information, refer to the [Destination Configuration](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/sentinelone/) documentation.

## 2025-11-11

**Logpush Health Dashboards**

We’re excited to introduce **Logpush Health Dashboards**, giving customers real-time visibility into the status, reliability, and performance of their [Logpush](https://developers.cloudflare.com/logs/logpush/) jobs. Health dashboards make it easier to detect delivery issues, monitor job stability, and track performance across destinations. The dashboards are divided into two sections:

- **Upload Health**: See how much data was successfully uploaded, where drops occurred, and how your jobs are performing overall. This includes data completeness, success rate, and upload volume.
- **Upload Reliability** – Diagnose issues impacting stability, retries, or latency, and monitor key metrics such as retry counts, upload duration, and destination availability.
  ![Health Dashboard](https://developers.cloudflare.com/_astro/Health-Dashboard.CP0mV0IW_Z1GdXr6.webp)

Health Dashboards can be accessed from the Logpush page in the Cloudflare dashboard at the account or zone level, under the Health tab. For more details, refer to our [**Logpush Health Dashboards**](https://developers.cloudflare.com/logs/logpush/logpush-health) documentation, which includes a comprehensive troubleshooting guide to help interpret and resolve common issues.

## 2025-11-05

**Logpush Permission Update for Zero Trust Datasets**

[Permissions](https://developers.cloudflare.com/logs/logpush/permissions/) for managing Logpush jobs related to [Zero Trust datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/) (Access, Gateway, and DEX) have been updated to improve data security and enforce appropriate access controls.

To view, create, update, or delete Logpush jobs for Zero Trust datasets, users must now have both of the following permissions:

- Logs Edit
- Zero Trust: PII Read

Note

Update your UI, API or Terraform configurations to include the new permissions. Requests to Zero Trust datasets will fail due to insufficient access without the additional permission.

## 2025-10-27

**Azure Sentinel Connector**

Logpush now supports integration with [Microsoft Sentinel ↗](https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-sentinel).The new Azure Sentinel Connector built on Microsoft’s Codeless Connector Framework (CCF), is now avaialble. This solution replaces the previous Azure Functions-based connector, offering significant improvements in security, data control, and ease of use for customers. Logpush customers can send logs to Azure Blob Storage and configure this new Sentinel Connector to ingest those logs directly into Microsoft Sentinel.

This upgrade significantly streamlines log ingestion, improves security, and provides greater control:

- Simplified Implementation: Easier for engineering teams to set up and maintain.
- Cost Control: New support for Data Collection Rules (DCRs) allows you to filter and transform logs at ingestion time, offering potential cost savings.
- Enhanced Security: CCF provides a higher level of security compared to the older Azure Functions connector.
- ata Lake Integration: Includes native integration with Data Lake.

Find the new solution [here ↗](https://marketplace.microsoft.com/en-us/product/azure-application/cloudflare.azure-sentinel-solution-cloudflare-ccf?tab=Overview) and refer to the [Cloudflare's developer documention ↗](https://developers.cloudflare.com/analytics/analytics-integrations/sentinel/#supported-logs:~:text=WorkBook%20fields,-Analytic%20rules)for more information on the connector, including setup steps, supported logs and Microsfot's resources.

## 2025-08-22

**Dedicated Egress IP for Logpush**

Cloudflare Logpush can now deliver logs from using fixed, dedicated egress IPs. By routing Logpush traffic through a Cloudflare zone enabled with [Aegis IP](https://developers.cloudflare.com/smart-shield/configuration/dedicated-egress-ips/), your log destination only needs to allow Aegis IPs making setup more secure.

Highlights:

- Fixed egress IPs ensure your destination only accepts traffic from known addresses.
- Works with any supported Logpush destination.
- Recommended to use a dedicated zone as a proxy for easier management.

To get started, work with your Cloudflare account team to provision Aegis IPs, then configure your Logpush job to deliver logs through the proxy zone. For full setup instructions, refer to the [Logpush documentation](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/egress-ip/).

## 2025-08-13

**IBM Cloud Logs as Logpush destination**

Cloudflare Logpush now supports IBM Cloud Logs as a native destination.

Logs from Cloudflare can be sent to [IBM Cloud Logs ↗](https://www.ibm.com/products/cloud-logs) via [Logpush](https://developers.cloudflare.com/logs/logpush/). The setup can be done through the Logpush UI in the Cloudflare Dashboard or by using the [Logpush API](https://developers.cloudflare.com/api/resources/logpush/subresources/jobs/). The integration requires IBM Cloud Logs HTTP Source Address and an IBM API Key. The feature also allows for filtering events and selecting specific log fields.

For more information, refer to [Destination Configuration](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/ibm-cloud-logs/) documentation.

## 2025-04-18

**Custom fields raw and transformed values support**

Custom Fields now support logging both **raw and transformed values** for request and response headers in the HTTP requests dataset.

These fields are configured per zone and apply to all Logpush jobs in that zone that include request headers, response headers. Each header can be logged in only one format—either raw or transformed—not both.

By default:

- Request headers are logged as raw values
- Response headers are logged as transformed values

These defaults can be overidden to suit your logging needs.

Note

Transformed and raw values for request and response headers are available **only via the API** and cannot be set through the UI.

For more information refer to [Custom fields](https://developers.cloudflare.com/logs/logpush/logpush-job/custom-fields/) documentation

## 2025-03-06

**One-click Logpush Setup with R2 Object Storage**

We’ve streamlined the [Logpush](https://developers.cloudflare.com/logs/logpush/) setup process by integrating R2 bucket creation directly into the Logpush workflow!

Now, you no longer need to navigate multiple pages to manually create an R2 bucket or copy credentials. With this update, you can seamlessly **configure a Logpush job to R2 in just one click**, reducing friction and making setup faster and easier.

This enhancement makes it easier for customers to adopt Logpush and R2.

For more details refer to our [Logs](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/r2/) documentation.

## 2024-10-08

**New fields added to Gateway-related datasets in Cloudflare Logs**

Cloudflare has introduced new fields to two Gateway-related datasets in Cloudflare Logs:

- **Gateway HTTP**: `ApplicationIDs`, `ApplicationNames`, `CategoryIDs`, `CategoryNames`, `DestinationIPContinentCode`, `DestinationIPCountryCode`, `ProxyEndpoint`, `SourceIPContinentCode`, `SourceIPCountryCode`, `VirtualNetworkID`, and `VirtualNetworkName`.
- **Gateway Network**: `ApplicationIDs`, `ApplicationNames`, `DestinationIPContinentCode`, `DestinationIPCountryCode`, `ProxyEndpoint`, `SourceIPContinentCode`, `SourceIPCountryCode`, `TransportProtocol`, `VirtualNetworkID`, and `VirtualNetworkName`.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/changelog/","name":"Changelog"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/changelog/logs/","name":"Logs"}}]}
```
