# Enable BigQuery

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/enable-destinations/bigquery.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable BigQuery

Configure Logpush to send batches of Cloudflare logs to BigQuery.

BigQuery supports loading up to 1,500 jobs per table per day (including failures) with up to 10 million files in each load. That means you can load into BigQuery once per minute and include up to 10 million files in a load. For more information, refer to BigQuery's quotas for load jobs.

Logpush delivers batches of logs as soon as possible, which means you could receive more than one batch of files per minute. Ensure your BigQuery job is configured to ingest files on a given time interval, like every minute, as opposed to when files are received. Ingesting files into BigQuery as each Logpush file is received could exhaust your BigQuery quota quickly.

For a community-supported example of how to set up a schedule job load with BigQuery, refer to [Cloudflare + Google Cloud | Integrations repository ↗](https://github.com/cloudflare/cloudflare-gcp/tree/master/logpush-to-bigquery). Note that this repository is provided on a best-effort basis and is not maintained routinely.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/","name":"Enable destinations"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/bigquery/","name":"Enable BigQuery"}}]}
```
