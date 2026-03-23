# Enable other providers

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/enable-destinations/other-providers.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable other providers

Cloudflare Logpush supports pushing logs to a limited set of services providers. However, you can configure Logpush via API.

## Manage via the Cloudflare dashboard

Refer to [Enable destinations](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/) for the list of services you can configure to use with Logpush through the Cloudflare dashboard. Interested in a different service? Take this [survey ↗](https://docs.google.com/forms/d/e/1FAIpQLScwOSabROywVajpMX2ZYCVl3saYs11cP4NIC8QR-wmOAnxOtA/viewform).

## Manage via API

The Cloudflare Logpush API allows you to configure and manage jobs via create, retrieve, update, and delete operations (CRUD).

With Logpush, you can create a job to upload logs of the metadata Cloudflare collects in batches as soon as possible to your cloud service provider. The default number of jobs that you can setup per dataset per domain is four, but you can setup more jobs depending on your plan and subscriptions.

Ensure **Log Share** permissions are enabled, before attempting to read or configure a Logpush job. For more information refer to the [Roles section](https://developers.cloudflare.com/logs/logpush/permissions/#roles).

To get started:

1. Set up a storage provider and grant Cloudflare access. Your storage provider may request your Cloudflare API credentials and other information including:
   - Email address
   - Cloudflare API key
   - Zone ID
   - Destination access details for your cloud service provider
2. Configure your Logpush job. For more information on how to configure a Logpush job, refer to [API configuration](https://developers.cloudflare.com/logs/logpush/logpush-job/api-configuration/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/","name":"Enable destinations"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/other-providers/","name":"Enable other providers"}}]}
```
