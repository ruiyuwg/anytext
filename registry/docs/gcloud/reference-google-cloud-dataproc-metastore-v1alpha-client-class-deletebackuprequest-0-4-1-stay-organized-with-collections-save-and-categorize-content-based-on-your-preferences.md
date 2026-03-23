-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Dataproc Metastore V1alpha Client - Class DeleteBackupRequest (0.4.1) Stay organized with collections Save and categorize content based on your preferences.

1.2.3 (latest) 1.2.2 1.1.1 1.0.4 0.11.5 0.10.2 0.9.0 0.8.1 0.7.0 0.6.1 0.5.1 0.4.1

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Dataproc Metastore V1alpha Client class DeleteBackupRequest.

Request message for [DataprocMetastore.DeleteBackup](/php/docs/reference/cloud-dataproc-metastore/0.4.1/V1alpha.DataprocMetastoreClient#_Google_Cloud_Metastore_V1alpha_DataprocMetastoreClient__deleteBackup__).

Generated from protobuf message `google.cloud.metastore.v1alpha.DeleteBackupRequest`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Required. The relative resource name of the backup to delete, in the following form: `projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}`.

`↳ request_id`

`string`  

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request. For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

### getName

Required. The relative resource name of the backup to delete, in the following form: `projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}`.

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Returns**

**Type**

**Description**

`string`

### setName

Required. The relative resource name of the backup to delete, in the following form: `projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}`.

Generated from protobuf field `string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = {`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRequestId

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.

For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

Generated from protobuf field `string request_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`string`

### setRequestId

Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.

For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments. The request ID must be a valid [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.

Generated from protobuf field `string request_id = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
