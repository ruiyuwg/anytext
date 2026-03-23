-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Storage](https://docs.cloud.google.com/docs/storage)
-   [Storage Transfer Service](https://docs.cloud.google.com/storage-transfer/docs/overview)

Send feedback

# Cloud Logging for Storage Transfer Service Stay organized with collections Save and categorize content based on your preferences.

This page describes how to configure and view Cloud Logging for Storage Transfer Service logs.

Cloud Logging for Storage Transfer Service is supported for all transfers. `FIND` operations are not logged for agent-based transfers.

File system transfers can additionally configure [file system transfer logs](/storage-transfer/docs/on-prem-transfer-log-format).

## Before you begin

Before you begin, verify that you have access to Cloud Logging. We recommend the **Logs Viewer (roles/logging.viewer)** Identity and Access Management role. For more information on Logging access, see [Access control with IAM](/logging/docs/access-control).

The following describe how to verify and grant IAM access:

-   [View current access](/iam/docs/granting-changing-revoking-access#view-access) to verify the access that each principal has.
-   [Grant a role](/iam/docs/granting-changing-revoking-access#single-role) to relevant principals in your project.

## Loggable actions

The following actions can be logged:

-   `FIND`: Finding work to do, such as listing files in a directory, listing objects in a bucket, or listing managed folders in a bucket. Not supported for agent-based transfers.
-   `COPY`: Copying files or objects to Cloud Storage.
-   `DELETE`: Deleting files or objects at the source or the destination. For transfers between two file systems, also logs the deletion of files from the intermediary Cloud Storage bucket.

## Loggable states

For each action, you can choose to log one or more of the following states:

-   `SUCCEEDED`: The action was successful.
-   `FAILED`: The action failed.
-   `SKIPPED`: Only applies to the COPY action, and only supported for agent-based transfer jobs. Must be set using `gcloud` or REST API. This state means that the copy was skipped. This occurs when the file already exists in the sink, and your transfer job is configured to ignore existing files.

## Enable logging

To enable logging, specify the actions and the states to log.

### gcloud CLI

When creating a transfer job with `gcloud transfer jobs create`, use the following flags to enable logging:

```
gcloud transfer jobs create SOURCE DESTINATION \
  --log-actions=copy,delete,find \
  --log-action-states=succeeded,failed,skipped
```

You must specify at least one value for each flag.

### REST

To create a logging configuration, use [`transferJobs.create`](/storage-transfer/docs/reference/rest/v1/transferJobs/create) with a [`LoggingConfig`](/storage-transfer/docs/reference/rest/v1/transferJobs#LoggingConfig):

```
{
  "name":"transferJobs/myFirstTransfer",
  "status": "ENABLED",
  "projectId": "test-id-001",
  "loggingConfig": {
     "logActions": ["FIND", "DELETE", "COPY"],
     "logActionStates": ["SUCCEEDED", "FAILED", "SKIPPED"], #SKIPPED is only supported for agent-based transfers
  },
  "transferSpec": {
      "awsS3DataSource": {
          "bucketName": "AWS_SOURCE_NAME",
          "awsAccessKey": {
              "accessKeyId": "AWS_ACCESS_KEY_ID",
              "secretAccessKey": "AWS_SECRET_ACCESS_KEY"
          }
      },
      "gcsDataSink": {
           "bucketName": "destination_bucket",
           "path": "foo/bar/"
      },
   }
}
```

Adjust `loggingConfig` to include the specific `logActions` and `logActionStates` to log. For example, to log when copy and find actions fail, provide the following `loggingConfig`:

```
"loggingConfig": {
  "logActions": ["COPY", "FIND"],
  "logActionStates": ["FAILED"],
}
```

## Update a logging configuration

### gcloud CLI

To update an existing job's logging configuration, use the appropriate flags with the [`gcloud transfer jobs update`](/sdk/gcloud/reference/transfer/jobs/update) command:

```
gcloud transfer jobs update NAME \
  --log-actions=copy,delete,find \
  --log-action-states=succeeded,failed,skipped
```

To disable logging for this job, specify `--clear-log-config`:

```
gcloud transfer jobs update NAME --clear-log-config
```

### REST

To update an existing transfer job's logging configuration, use [`transferJobs.patch`](/storage-transfer/docs/reference/rest/v1/transferJobs/patch) with [`LoggingConfig`](/storage-transfer/docs/reference/rest/v1/transferJobs#LoggingConfig):

```
{
  "projectId": "test-id-001",
  "transferJob": {
    "loggingConfig": {
       "logActions": ["FIND", "DELETE", "COPY"],
       "logActionStates": ["SUCCEEDED", "FAILED", "SKIPPED"], #SKIPPED is only supported for agent-based transfers
    },
  },
  "updateTransferJobFieldMask": "loggingConfig"
}
```

The `updateTransferJobFieldMask` specifies the field that is being updated in this request and is required.

To disable logging for this job, send a `loggingConfig` with empty lists for `logActions` and `logActionStates`:

```
{
  "projectId": "test-id-001",
  "transferJob": {
    "loggingConfig": {
       "logActions": [],
       "logActionStates": [],
    },
  },
  "updateTransferJobFieldMask": "loggingConfig"
}
```

## View logs

To view transfer logs, do the following:

### Google Cloud console

1.  Go to the Google Cloud navigation menu _menu_ and select **Logging \> Logs Explorer** :
    
    [Go to the Logs Explorer](https://console.cloud.google.com/logs/query)
    
2.  Select a Google Cloud project.
    
3.  From the **Upgrade** menu, switch from **Legacy Logs Viewer** to **Logs Explorer**.
    
4.  To filter your logs to show only Storage Transfer Service entries, type `storage_transfer_job` into the query field and click **Run query**.
    
5.  In the **Query results** pane, click **Edit time** to change the time period for which to return results.
    

For more information on using the Logs Explorer, see [Using the Logs Explorer](/logging/docs/view/logs-viewer-interface).

### gcloud CLI

To use the gcloud CLI to search for Storage Transfer Service logs, use the [`gcloud logging read`](/logging/docs/reference/tools/gcloud-logging#reading_log_entries) command.

Specify a filter to limit your results to Storage Transfer Service logs.

```
gcloud logging read "resource.type=storage_transfer_job"
```

### Cloud Logging API

Use the [`entries.list`](/logging/docs/reference/v2/rest/v2/entries/list) Cloud Logging API method.

To filter your results to include only Storage Transfer Service-related entries, use the `filter` field. A sample JSON request object is below.

```
{
"resourceNames":
  [
    "projects/my-project-name"
  ],
  "orderBy": "timestamp desc",
  "filter": "resource.type=\"storage_transfer_job\""
}
```

## Transfer log format

The following section describes the fields for Storage Transfer Service logs.

All Storage Transfer Service-specific fields are contained within a `jsonPayload` object.

### `FIND` actions

```
{
  "jsonPayload": {
    "@type": "type.googleapis.com/google.storagetransfer.logging.TransferActivityLog",
    "action": "FIND",
    "completeTime": "2021-12-16T18:58:49.344509695Z",
    "destinationContainer": {
      "gcsBucket": {
        "bucket": "my-bucket-2",
      },
      "type": "GCS",
    },
    "operation": "transferOperations/transferJobs-7876027868280507149--3019866490856027148",
    "sourceContainer": {
      "gcsBucket": {
        "bucket": "my-bucket-1"
      },
      "type": "GCS"
    },
    "status": {
      "statusCode": "OK"
    }
  }
}
```

### `COPY` and `DELETE` actions

```
{
  "jsonPayload": {
    "@type": "type.googleapis.com/google.storagetransfer.logging.TransferActivityLog",
    "action": "COPY",
    "completeTime": "2021-12-16T18:59:00.510509049Z",
    "destinationObject": {
      "gcsObject": {
        "bucket": "my-bucket-2",
        "objectKey": "README.md"
      },
      "type": "GCS",
    },
    "operation": "transferOperations/transferJobs-7876027868280507149--3019866490856027148",
    "sourceObject": {
      "gcsObject": {
        "bucket": "my-bucket-1",
        "lastModifiedTime": "2021-12-07T16:41:09.456Z",
        "md5": "WgnCOIdfCXNTUDpQJSKb2w==",
        "objectKey": "README.md",
      },
      "type": "GCS",
    },
    "status": {
      "statusCode": "OK"
    }
  }
}
```

Log field

Description

`@type`

The value is always `type.googleapis.com/google.storagetransfer.logging.TransferActivityLog`.

`action`

Describes the action of this particular task. One of the following:

-   `FIND`: Finding work to do, such as listing files in a directory or listing objects in a bucket. Not reported for agent-based transfers.
-   `COPY`: Copying files or objects to Cloud Storage.
-   `DELETE`: Deleting files or objects at the source, destination, or intermediary bucket.

`findAction`

Specifies whether the subject of the find action was an object or a [managed folder](/storage-transfer/docs/managed-folders).

`completeTime`

The ISO 8601-compliant timestamp at which the operation completed.

`destinationContainer`

_Only present for `FIND` operations. `FIND` operations are not logged for agent-based transfers._

The destination container for this transfer. Contains two sub-fields:

-   `gcsBucket.bucket`: The destination Cloud Storage bucket name.
-   `type`: Always `GCS`.

`destinationObject`

_Only present for `COPY` and `DELETE` operations._

Information about the object at the destination. Contains two sub-fields:

-   One of `gcsObject`, `gcsManagedFolder`, or `posixFile`, depending on the destination. All options contain multiple sub-fields that specify name, location, date/time info, and the object or file's hash.
-   `type` is one of `GCS` or `POSIX_FS`.

For example:

"destinationObject": {
  "type": "POSIX\_FS",
  "posixFile": {
    "crc32c": "0",
    "path": "/tmp/data/filename.txt",
    "lastModifiedTime": "2022-09-22T04:33:45Z"
  }
}

`operation`

The fully-qualified [`transferOperations`](/storage-transfer/docs/reference/rest/v1/transferOperations) name.

`sourceContainer`

_Only present for `FIND` operations. `FIND` operations are not logged for agent-based transfers._

The source container for this transfer. Contains two sub-fields:

-   An entry specifying the source location. The field is named according to the source type. Possible fields are as follows.
    -   `awsS3Bucket.bucket`: The AWS S3 bucket name.
    -   `azureBlobContainer`: Contains sub-fields `account` and `container`, which together define the Microsoft Azure Blob storage URI.
    -   `gcsBucket.bucket`: The Cloud Storage bucket name.
    -   `httpManifest.url`: The URL of a [URL list](/storage-transfer/docs/create-url-list) that specifies publicly-available files to download from an HTTP(S) server.
-   `type` is one of `AWS_S3`, `AZURE_BLOB`, `GCS`, or `HTTP`.

For example:

"sourceContainer": {
  "gcsBucket": {
    "bucket": "my-bucket-1"
  }
  type: "GCS"
}

`sourceObject`

_Only present for `COPY` and `DELETE` operations._

Information about the source object. Contains two sub-fields:

-   An entry specific to the source object's host. The field is named according to the source type and contains subfields for metadata. Possible fields are as follows.
    -   `awsS3Object`: An AWS S3 object.
    -   `azureBlob`: A file in Azure Blob Storage.
    -   `gcsObject`: A Cloud Storage object.
    -   `gcsManagedFolder`: A Cloud Storage managed folder.
    -   `httpFile`: A file specified by a [URL list](/storage-transfer/docs/create-url-list).
    -   `posixFile`: A file on a POSIX file system.
-   `type` is one of `AWS_S3`, `AZURE_BLOB`, `GCS`, `HTTP`, or `POSIX_FS`.

For example:

"sourceObject": {
  "gcsObject": {
    "bucket": "my-bucket-1"
    "lastModifiedTime": "2021-12-07T16:41:09.456Z"
    "md5": "WgnCOIdfCXNTUDpQJSKb2w=="
    "objectKey": "README.md"
  }
  type: "GCS"
}

`status`

The status of the action. If `status.statusCode` is `OK`, the action succeeded. Otherwise, the action failed. The `status.errorType` and `status.errorMessage` fields are only populated if the status is not `OK`.

In addition, the top-level `resource` field contains the following fields.

```
"resource": {
  "labels": {
    "job_id": "transferJobs/7876027868280507149"
    "project_id": "my-project-id"
  }
  "type": "storage_transfer_job"
}
```

Log field

Description

`resource.labels.job_id`

The Storage Transfer Service job name to which this log belongs.

`resource.labels.project_id`

The Google Cloud project ID for this transfer.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
