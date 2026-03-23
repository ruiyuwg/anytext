# Enable destinations

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/enable-destinations/index.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable destinations

Enable pushing logs to your storage service, SIEM solution, or log management provider.

Note

Note that you will need to allowlist IP addresses to accept incoming Cloudflare Logpush traffic. Refer to [Cloudflare IPs ↗](https://www.cloudflare.com/ips/) for the complete list of IPs. If you prefer to have a dedicated IP, you can use dedicated [Dedicated Egress IPs for Cloudflare Logpush](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/egress-ip/).

- [ Enable Cloudflare R2 ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/r2/)
- [ Enable HTTP destination ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/http/)
- [ Enable Amazon S3 ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/aws-s3/)
- [ Enable S3-compatible endpoints ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/s3-compatible-endpoints/)
- [ Enable Datadog ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/datadog/)
- [ Enable Elastic ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/elastic/)
- [ Enable Google Cloud Storage ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/google-cloud-storage/)
- [ Enable BigQuery ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/bigquery/)
- [ Enable Microsoft Azure ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/azure/)
- [ Enable New Relic ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/new-relic/)
- [ Enable SentinelOne ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/sentinelone/)
- [ Enable Splunk ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/splunk/)
- [ Enable Sumo Logic ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/sumo-logic/)
- [ Enable Amazon Kinesis ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/kinesis/)
- [ Enable IBM QRadar ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/ibm-qradar/)
- [ Enable IBM Cloud Logs ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/ibm-cloud-logs/)
- [ Enable other providers ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/other-providers/)
- [ Third-party integrations ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/third-party/)
- [ Dedicated Egress IP for Logpush ](https://developers.cloudflare.com/logs/logpush/logpush-job/enable-destinations/egress-ip/)

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/","name":"Enable destinations"}}]}
```
