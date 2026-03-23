-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Gke Backup V1 Client - Class GetBackupRequest (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.3.3 (latest) 1.3.2 1.2.1 1.0.3 0.8.1 0.7.2 0.6.0 0.5.3 0.4.0 0.3.1 0.2.0 0.1.7

Reference documentation and code samples for the Google Cloud Gke Backup V1 Client class GetBackupRequest.

Request message for GetBackup.

Generated from protobuf message `google.cloud.gkebackup.v1.GetBackupRequest`

## Methods

### build

**Parameter**

**Name**

**Description**

`name`

`string`  

Required. Full name of the Backup resource. Format: projects/_/locations/_/backupPlans/_/backups/_ Please see {@see \\Google\\Cloud\\GkeBackup\\V1\\BackupForGKEClient::backupName()} for help formatting this field.

**Returns**

**Type**

**Description**

`[Google\Cloud\GkeBackup\V1\GetBackupRequest](/php/docs/reference/cloud-gke-backup/0.2.0/V1.GetBackupRequest)`

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

Required. Full name of the Backup resource. Format: projects/_/locations/_/backupPlans/_/backups/_

### getName

Required. Full name of the Backup resource.

Format: projects/_/locations/_/backupPlans/_/backups/_

**Returns**

**Type**

**Description**

`string`

### setName

Required. Full name of the Backup resource.

Format: projects/_/locations/_/backupPlans/_/backups/_

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
