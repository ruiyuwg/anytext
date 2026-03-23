# Enable New Relic

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/enable-destinations/new-relic.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable New Relic

Cloudflare Logpush supports pushing logs directly to New Relic via the Cloudflare dashboard or via API.

## Manage via the Cloudflare dashboard

1. In the Cloudflare dashboard, go to the **Logpush** page at the account or or domain (also known as zone) level.\
   For account: [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/logs)\
   For domain (also known as zone): [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/:zone/analytics/logs)
2. Depending on your choice, you have access to [account-scoped datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/) and [zone-scoped datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/), respectively.
3. Select **Create a Logpush job**.
4. In **Select a destination**, choose **New Relic**.
5. Enter the **New Relic Logs Endpoint**:

- [ US ](#tab-panel-5588)

- [ EU ](#tab-panel-5589)

- `"https://log-api.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare"`

- `"https://log-api.eu.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare"`

Use the region that matches the one that has been set on your New Relic account. The **License key** field can be found on the New Relic dashboard. It can be retrieved by following [these steps ↗](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#manage-license-key).

When you are done entering the destination details, select **Continue**.

1. Select the dataset to push to the storage service.
2. In the next step, you need to configure your logpush job:
   - Enter the **Job name**.
   - Under **If logs match**, you can select the events to include and/or remove from your logs. Refer to [Filters](https://developers.cloudflare.com/logs/logpush/logpush-job/filters/) for more information. Not all datasets have this option available.
   - In **Send the following fields**, you can choose to either push all logs to your storage destination or selectively choose which logs you want to push.
3. In **Advanced Options**, you can:
   - Choose the format of timestamp fields in your logs (`RFC3339`(default),`Unix`, or `UnixNano`).
   - Select a [sampling rate](https://developers.cloudflare.com/logs/logpush/logpush-job/api-configuration/#sampling-rate) for your logs or push a randomly-sampled percentage of logs.
   - Enable redaction for `CVE-2021-44228`. This option will replace every occurrence of `${` with `x{`.
4. Select **Submit** once you are done configuring your logpush job.

## Manage via API

Ensure **Log Share** permissions are enabled, before attempting to read or configure a Logpush job. For more information refer to the [Roles section](https://developers.cloudflare.com/logs/logpush/permissions/#roles).

### 1. Create a job

To create a job, make a `POST` request to the Logpush jobs endpoint with the following fields:

- **name** (optional) - Use your domain name as the job name.
- **output\_options** (optional) - To configure fields, sample rate, and timestamp format, refer to [Log Output Options](https://developers.cloudflare.com/logs/logpush/logpush-job/log-output-options/).\
  Note\
  To query Cloudflare logs, New Relic requires fields to be sent as a UNIX timestamp.
- **destination\_conf** - A log destination consisting of an endpoint URL, a license key and a format in the string format below.
  - `<NR_ENDPOINT_URL>`: The New Relic HTTP logs intake endpoint, which is `https://log-api.newrelic.com/log/v1` for US or `https://log-api.eu.newrelic.com/log/v1` for the EU, depending on the region that has been set on your New Relic account.
  - `<NR_LICENSE_KEY>`: This key can be found on the New Relic dashboard and it can be retrieved by following [these steps ↗](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#manage-license-key).
  - `format`: The format is `cloudflare`.\
    US: `"https://log-api.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare"`\
    EU: `"https://log-api.eu.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare"`
- **max\_upload\_records** (optional) - The maximum number of log lines per batch. This must be at least 1,000 lines or more. Note that there is no way to specify a minimum number of log lines per batch. This means that log files may contain many fewer lines than specified.
- **max\_upload\_bytes** (optional) - The maximum uncompressed file size of a batch of logs. This must be at least 5 MB. Note that there is no way to set a minimum file size. This means that log files may be much smaller than this batch size. Nevertheless, it is recommended to set this parameter to 5,000,000.
- **dataset** - The category of logs you want to receive. Refer to [Datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/) for the full list of supported datasets.

Example request using cURL:

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Logs Write`

Create Logpush job

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/logpush/jobs" \

  --request POST \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "name": "<DOMAIN_NAME>",

    "output_options": {

        "field_names": [

            "ClientIP",

            "ClientRequestHost",

            "ClientRequestMethod",

            "ClientRequestURI",

            "EdgeEndTimestamp",

            "EdgeResponseBytes",

            "EdgeResponseStatus",

            "EdgeStartTimestamp",

            "RayID"

        ],

        "timestamp_format": "unix"

    },

    "destination_conf": "https://log-api.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare",

    "max_upload_bytes": 5000000,

    "dataset": "http_requests",

    "enabled": true

  }'


```

Response:

```

{

  "errors": [],

  "messages": [],

  "result": {

    "dataset": "http_requests",

    "destination_conf": "https://log-api.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare",

    "enabled": true,

    "error_message": null,

    "id": <JOB_ID>,

    "kind": "",

    "last_complete": null,

    "last_error": null,

    "output_options": {

      "field_names": ["ClientIP", "ClientRequestHost", "ClientRequestMethod", "ClientRequestURI", "EdgeEndTimestamp","EdgeResponseBytes", "EdgeResponseStatus", "EdgeStartTimestamp", "RayID"],

      "timestamp_format": "unix"

    },

    "max_upload_bytes": 5000000,

    "name": "<DOMAIN_NAME>"

  },

  "success": true

}


```

### 2. Enable (update) a job

To enable a job, make a `PUT` request to the Logpush jobs endpoint. You will use the job ID returned from the previous step in the URL and send `{"enabled": true}` in the request body.

Example request using cURL:

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/)is required:

- `Logs Write`

Update Logpush job

```

curl "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/logpush/jobs/$JOB_ID" \

  --request PUT \

  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \

  --json '{

    "enabled": true

  }'


```

Response:

```

{

  "errors": [],

  "messages": [],

  "result": {

    "dataset": "http_requests",

    "destination_conf": "https://log-api.newrelic.com/log/v1?Api-Key=<NR_LICENSE_KEY>&format=cloudflare",

    "enabled": true,

    "error_message": null,

     "id": <JOB_ID>,

     "kind": "",

     "last_complete": "null",

     "last_error": null,

     "output_options": {

       "field_names": ["ClientIP", "ClientRequestHost", "ClientRequestMethod", "ClientRequestURI", "EdgeEndTimestamp","EdgeResponseBytes", "EdgeResponseStatus", "EdgeStartTimestamp", "RayID"],

       "timestamp_format": "unix"

     },

     "max_upload_bytes": 5000000,

     "name": "<DOMAIN_NAME>"

  },

  "success": true

}


```

Note

To analyze and visualize Cloudflare metrics using the Cloudflare Network Logs quickstart, follow the steps in the [New Relic Analytics integration page](https://developers.cloudflare.com/analytics/analytics-integrations/new-relic/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/","name":"Enable destinations"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/new-relic/","name":"Enable New Relic"}}]}
```
