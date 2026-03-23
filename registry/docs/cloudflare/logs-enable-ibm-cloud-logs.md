# Enable IBM Cloud Logs

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/logs/logpush/logpush-job/enable-destinations/ibm-cloud-logs.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Enable IBM Cloud Logs

Cloudflare Logpush supports pushing logs directly to IBM Cloud Logs via dashboard or API.

## Manage via the Cloudflare dashboard

1. In the Cloudflare dashboard, go to the **Logpush** page at the account or or domain (also known as zone) level.\
   For account: [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/logs)\
   For domain (also known as zone): [ Go to **Logpush** ](https://dash.cloudflare.com/?to=/:account/:zone/analytics/logs)
2. Depending on your choice, you have access to [account-scoped datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/account/) and [zone-scoped datasets](https://developers.cloudflare.com/logs/logpush/logpush-job/datasets/zone/), respectively.
3. Select **Create a Logpush job**.
4. In **Select a destination**, choose **IBM Cloud Logs**.
5. Enter the following destination information:

- **HTTP Source Address** - For example, `ibmcl://<INSTANCE_ID>.ingress.<REGION>.logs.cloud.ibm.com/logs/v1/singles`.
- **IBM API Key** - For more information refer to the [IBM Cloud Logs documentation ↗](https://cloud.ibm.com/docs/cloud-logs).

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

To set up an IBM Cloud Logs job:

1. Create a job with the appropriate endpoint URL and authentication parameters.
2. Enable the job to begin pushing logs.

Note

Ensure Log Share permissions are enabled, before attempting to read or configure a Logpush job. For more information refer to the [Roles section](https://developers.cloudflare.com/logs/logpush/permissions/#roles).

### 1. Create a job

To create a job, make a `POST` request to the Logpush jobs endpoint with the following fields:

- **name** (optional) - Use your domain name as the job name.
- **output\_options** (optional) - This parameter is used to define the desired output format and structure. Below are the configurable fields:
  - output\_type
  - timestamp\_format
  - batch\_prefix and batch\_suffix
  - record\_prefix and record\_suffix
  - record\_delimiter
- **destination\_conf** - A log destination consisting of Instance ID, Region and [IBM API Key ↗](https://cloud.ibm.com/docs/account?topic=account-iamtoken%5Ffrom%5Fapikey) in the string format below.

`ibmcl://<INSTANCE_ID>.ingress.<REGION>.logs.cloud.ibm.com/logs/v1/singles?ibm_api_key=<IBM_API_KEY>`

- **max\_upload\_records** (optional) - The maximum number of log lines per batch. This must be at least 1,000 lines or more. Note that there is no way to specify a minimum number of log lines per batch. This means that log files may contain many fewer lines than specified.
- **max\_upload\_bytes** (optional) - The maximum uncompressed file size for a batch of logs. We recommend a default value of 2 MB per upload based on IBM's limits, which our system will enforce for this destination. Since minimum file sizes cannot be set, log files may be smaller than the specified batch size.
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

        "output_type": "ndjson",

        "timestamp_format": "rfc3339",

        "batch_prefix": "[",

        "batch_suffix": "]",

        "record_prefix": "{\"applicationName\":\"ibm-platform-log\",\"subsystemName\":\"internet-svcs:logpush\",\"text\":{",

        "record_suffix": "}}",

        "record_delimiter": ","

    },

    "destination_conf": "ibmcl://<INSTANCE_ID>.ingress.<REGION>.logs.cloud.ibm.com/logs/v1/singles?ibm_api_key=<IBM_API_KEY>",

    "max_upload_bytes": 2000000,

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

    "destination_conf": "ibmcl://<INSTANCE_ID>.ingress.<REGION>.logs.cloud.ibm.com/logs/v1/singles?ibm_api_key=<IBM_API_KEY>",

    "enabled": true,

    "error_message": null,

    "id": <JOB_ID>,

    "kind": "",

    "last_complete": null,

    "last_error": null,

    "output_options": {

      "output_type": "ndjson",

      "timestamp_format": "rfc3339",

      "batch_prefix": "[",

      "batch_suffix": "]",

      "record_prefix": "{\"applicationName\":\"ibm-platform-log\",\"subsystemName\":\"internet-svcs:logpush\",\"text\":{",

      "record_suffix": "}}",

      "record_delimiter": ","

    },

    "max_upload_bytes": 2000000,

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

    "destination_conf": "ibmcl://<INSTANCE_ID>.ingress.<REGION>.logs.cloud.ibm.com/logs/v1/singles?ibm_api_key=<IBM_API_KEY>",

    "enabled": true,

    "error_message": null,

    "id": <JOB_ID>,

    "kind": "",

    "last_complete": null,

    "last_error": null,

    "output_options": {

      "output_type": "ndjson",

      "timestamp_format": "rfc3339",

      "batch_prefix": "[",

      "batch_suffix": "]",

      "record_prefix": "{\"applicationName\":\"ibm-platform-log\",\"subsystemName\":\"internet-svcs:logpush\",\"text\":{",

      "record_suffix": "}}",

      "record_delimiter": ","

    },

    "max_upload_bytes": 2000000,

    "name": "<DOMAIN_NAME>"

  },

  "success": true

}


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/logs/","name":"Logs"}},{"@type":"ListItem","position":3,"item":{"@id":"/logs/logpush/","name":"Logpush"}},{"@type":"ListItem","position":4,"item":{"@id":"/logs/logpush/logpush-job/","name":"Logpush job setup"}},{"@type":"ListItem","position":5,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/","name":"Enable destinations"}},{"@type":"ListItem","position":6,"item":{"@id":"/logs/logpush/logpush-job/enable-destinations/ibm-cloud-logs/","name":"Enable IBM Cloud Logs"}}]}
```
