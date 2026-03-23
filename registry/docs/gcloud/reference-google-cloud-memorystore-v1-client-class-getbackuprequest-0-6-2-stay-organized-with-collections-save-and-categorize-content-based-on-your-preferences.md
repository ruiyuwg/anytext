-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Memorystore V1 Client - Class GetBackupRequest (0.6.2) Stay organized with collections Save and categorize content based on your preferences.

0.6.2 (latest) 0.6.1 0.5.1 0.4.2 0.3.0 0.2.0 0.1.1

Reference documentation and code samples for the Google Cloud Memorystore V1 Client class GetBackupRequest.

Request for \[GetBackup\].

Generated from protobuf message `google.cloud.memorystore.v1.GetBackupRequest`

## Namespace

Google \\ Cloud \\ Memorystore \\ V1

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

Required. Instance backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`

### getName

Required. Instance backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`

**Returns**

**Type**

**Description**

`string`

### setName

Required. Instance backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. Instance backup resource name using the form: `projects/{project_id}/locations/{location_id}/backupCollections/{backup_collection_id}/backups/{backup_id}` Please see MemorystoreClient::backupName() for help formatting this field.

**Returns**

**Type**

**Description**

`[GetBackupRequest](/php/docs/reference/cloud-memorystore/latest/V1.GetBackupRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
