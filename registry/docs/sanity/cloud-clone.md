# Cloud clone

> \[!NOTE]
> Enterprise Feature
> This feature is part of our Advanced Dataset Management offering on [the enterprise plan](https://www.sanity.io/enterprise). [Contact us](https://www.sanity.io/contact/sales) if you need this feature and want to discuss this plan.

Cloud Clone provides a more efficient way of duplicating datasets and is ideal for situations when:

- you want to run tests against real production data in a CI flow
- you regularly copy datasets from production for developing new features

Instead of [exporting](https://www.sanity.io/docs/cli-reference/cli-config) and [importing](https://www.sanity.io/docs/content-lake/importing-data) a dataset with the CLI, you can have that process happen inside of Sanity's infrastructure which will be more efficient and reliable.

There are two methods of initiating and monitoring the cloning of datasets in the cloud: through [the Sanity CLI](https://www.sanity.io/docs/apis-and-sdks/cli) or with [the HTTP API](https://www.sanity.io/docs/copy).

Once a copy is successful, the new dataset will appear in [Manage](https://www.sanity.io/manage). Depending on the size of a dataset this may take hours, so we encourage monitoring the outcome of a copy using the `jobId`, discussed below.

## Copying a dataset with the CLI

The quickest way to begin developing with a freshly-copied dataset is to use the CLI.

> \[!WARNING]
> Gotcha
> As with other project-specific CLI commands, this command will only work from within a configured Sanity project.

By default, the CLI command runs the copy synchronously. If you don't want to wait for the process to be completed, you can use the `--detach` flag to skip the progress. It will log a job ID that you can use to watch the progress again with the `--attach <jobId>` flag.

Depending on the size of the dataset, skipping document history with the `--skip-history` flag can make the copy process significantly faster. In cases where document history is not important in the target dataset, this may be a flag worth considering.

```sh
# Syntax:
# sanity dataset copy
# sanity dataset copy <source-dataset>
# sanity dataset copy <source-dataset> <target-dataset>

# This command will ask for which dataset to copy and what to call the new dataset
sanity dataset copy

# This command will copy the production dataset and request a name for the new dataset
sanity dataset copy production

# This command will copy the production dataset into a new dataset named new-feature
sanity dataset copy production new-feature

# This command will initiate the copy between production and new-feature
# It will run in the background and not display progress while it works
sanity dataset copy production new-feature --detach

# This command will initiate the copy between production and new-feature
# It does not copy document history, speeding the copy action 
# at the expense of the history retention
sanity dataset copy production new-feature --skip-history
```

> \[!WARNING]
> Gotcha
> This process creates a new dataset given the specified name. If a dataset already exists with that name—or if a copy job is in progress and a copy is re-attempted using the same dataset name—the command will throw an error `Target dataset <name> already exists`.

It's encouraged to use this feature instead of exporting/importing your data to another dataset. In most cases, this will be a faster method. On large datasets or datasets with a large number of assets and/or large assets, the process will take some time to complete.

## Copying a dataset with the HTTP API

If you'd prefer to use the HTTP API instead of the CLI, there are API endpoints for copying datasets and for monitoring copy completion.

`PUT /v2021-06-07/projects/:projectId/datasets/:datasetName/copy`

In order to start a copy, a PUT request is sent to the specific dataset's `/copy` endpoint.

```text
https://api.sanity.io/v2021-06-07/projects/<project-id>/datasets/<dataset-name>/copy
```

The request needs to be authorized via a Bearer token, which can be generated from the [Manage dashboard](https://www.sanity.io/manage).

The body of the request must be an object containing the following fields:

1. `targetDataset`: Property to name the new dataset. The value must be consistent with [dataset name requirements](https://www.sanity.io/docs/content-lake/datasets).

2. `skipHistory`: Boolean property which allows skipping document history while copying the dataset. It potentially reduces copying duration on datasets with large amount of edit history. Check the [retention period](https://www.sanity.io/docs/user-guides/history-experience) to know how long a dataset's history is kept for.

```json
{
    "targetDataset": "production-copy",
    "skipHistory": true
}
```

### The full request

```text
curl --location --request PUT 'https://api.sanity.io/v2021-06-07/projects/<project-id>/datasets/<dataset-name>/copy' \
  -H 'Authorization: Bearer <token-here>' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "targetDataset": "production-copy",
    "skipHistory": true
  }'
```

### The JSON response

```json
{
    "datasetName": "production",
    "message": "Starting copying dataset production to production-copy...",
    "aclMode": "public",
    "jobId": "jobIdString"
}
```

> \[!WARNING]
> Gotcha
> When copying a dataset, documents‘ `_createdAt` and `_updatedAt` date time fields in the target dataset will remain the same as documents in the source dataset.

## Getting the current status of a copy

`GET /v2021-06-07/jobs/:jobId`

When you run a copy via the HTTP API, you'll receive a Job ID. This ID can be used to query the status of the clone job.

### The Full Request

```text
curl --location --request GET 'https://api.sanity.io/v2021-06-07/jobs/<jobid>' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token here>'
```

### The JSON response

```json
// Running
{
    "id": "jacsfsmnxp",
    "state": "running",
    "authors": [
        "authorId"
    ],
    "created_at": "2020-11-09T17:34:28.071123Z",
    "updated_at": "2020-11-09T17:34:28.144826Z"
}

// Completed
{
    "id": "jarrwsdptf",
    "state": "completed",
    "authors": [
        "authorId"
    ],
    "created_at": "2020-11-09T17:07:41.304227Z",
    "updated_at": "2020-11-09T17:08:30.457692Z"
}

```

## Listening for copy status

`GET /v2021-06-07/jobs/:jobId/listen`

Each job has a `/listen` endpoint to allow you to monitor its status programmatically. Much like the static status endpoint, this endpoint accepts the Job ID that is returned by starting a copy action.

### The full request

```text
curl --location --request GET 'https://api.sanity.io/v2021-06-07/jobs/<jobid>/listen' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <token here>'
```

### The response

While listening, event data will be sent back at intervals providing updates on the status of your copy. The response contains the event name as well as a JSON object containing information about the current status of the copy.

```json
event: welcome
data: {"listener_id": "ladaicdbdo"}

event: job
data: {"job_id":"jacsfsmnxp","state":"running","progress":60}

event: job
data: {"job_id":"jacsfsmnxp","state":"running","progress":80}

event: job
data: {"job_id":"jacsfsmnxp","state":"completed","progress":100}
```
