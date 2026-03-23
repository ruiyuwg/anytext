# Send Zaraz logs to Logpush

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/zaraz/advanced/logpush.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Send Zaraz logs to Logpush

Send Zaraz logs to an external storage provider like R2 or S3.

This is an Enterprise only feature.

## Setup

Follow these steps to configure Logpush support for Zaraz:

### 1. Create a Logpush job

1. In the Cloudflare dashboard, go to the **Logpush** page.\
   [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/:zone/analytics/logs)
2. Select **Create a Logpush Job** and follow the steps described in the [Logpush](https://developers.cloudflare.com/logs/logpush/) documentation.\
   When selecting a dataset, make sure you select **Zaraz Events**.

### 2. Enable Logpush from Zaraz settings

1. Go to your website's [Zaraz settings ↗](https://dash.cloudflare.com/?to=/:account/:zone/zaraz/settings).
2. Enable **Export Zaraz Logs**.

## Fields

Logs will have the following fields:

| Field          | Type   | Description                                                                                                                                 |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| RequestHeaders | JSON   | The headers that were sent with the request.                                                                                                |
| URL            | String | The Zaraz URL to which the request was made.                                                                                                |
| IP             | String | The originating IP.                                                                                                                         |
| Body           | JSON   | The body that was sent along with the request.                                                                                              |
| Event Type     | String | Can be one of the following: server\_request, server\_response, action\_triggered, ecommerce\_triggered, client\_request, component\_error. |
| Event Details  | JSON   | Details about the event.                                                                                                                    |
| TimestampStart | String | The time at which the event occurred.                                                                                                       |

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/zaraz/","name":"Zaraz"}},{"@type":"ListItem","position":3,"item":{"@id":"/zaraz/advanced/","name":"Advanced options"}},{"@type":"ListItem","position":4,"item":{"@id":"/zaraz/advanced/logpush/","name":"Send Zaraz logs to Logpush"}}]}
```
