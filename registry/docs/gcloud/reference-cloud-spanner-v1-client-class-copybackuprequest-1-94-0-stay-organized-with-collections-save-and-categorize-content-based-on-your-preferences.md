-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner V1 Client - Class CopyBackupRequest (1.94.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner V1 Client class CopyBackupRequest.

The request for CopyBackup.

Generated from protobuf message `google.spanner.admin.database.v1.CopyBackupRequest`

## Namespace

Google \\ Cloud \\ Spanner \\ Admin \\ Database \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects/<project>/instances/<instance>`.

`↳ backup_id`

`string`  

Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup\_uri of the form `projects/<project>/instances/<instance>/backups/<backup>`.

`↳ source_backup`

`string`  

Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects/<project>/instances/<instance>/backups/<backup>`.

`↳ expire_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.

`↳ encryption_config`

`[CopyBackupEncryptionConfig](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig)`  

Optional. The encryption configuration used to encrypt the backup. If this field is not specified, the backup will use the same encryption configuration as the source backup by default, namely [encryption\_type](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig#_Google_Cloud_Spanner_Admin_Database_V1_CopyBackupEncryptionConfig__getEncryptionType__) = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.

### getParent

Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects/<project>/instances/<instance>`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects/<project>/instances/<instance>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getBackupId

Required. The id of the backup copy.

The `backup_id` appended to `parent` forms the full backup\_uri of the form `projects/<project>/instances/<instance>/backups/<backup>`.

**Returns**

**Type**

**Description**

`string`

### setBackupId

Required. The id of the backup copy.

The `backup_id` appended to `parent` forms the full backup\_uri of the form `projects/<project>/instances/<instance>/backups/<backup>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getSourceBackup

Required. The source backup to be copied.

The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects/<project>/instances/<instance>/backups/<backup>`.

**Returns**

**Type**

**Description**

`string`

### setSourceBackup

Required. The source backup to be copied.

The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects/<project>/instances/<instance>/backups/<backup>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getExpireTime

Required. The expiration time of the backup in microsecond granularity.

The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasExpireTime

### clearExpireTime

### setExpireTime

Required. The expiration time of the backup in microsecond granularity.

The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionConfig

Optional. The encryption configuration used to encrypt the backup. If this field is not specified, the backup will use the same encryption configuration as the source backup by default, namely [encryption\_type](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig#_Google_Cloud_Spanner_Admin_Database_V1_CopyBackupEncryptionConfig__getEncryptionType__) = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.

**Returns**

**Type**

**Description**

`[CopyBackupEncryptionConfig](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig)|null`

### hasEncryptionConfig

### clearEncryptionConfig

### setEncryptionConfig

Optional. The encryption configuration used to encrypt the backup. If this field is not specified, the backup will use the same encryption configuration as the source backup by default, namely [encryption\_type](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig#_Google_Cloud_Spanner_Admin_Database_V1_CopyBackupEncryptionConfig__getEncryptionType__) = `USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION`.

**Parameter**

**Name**

**Description**

`var`

`[CopyBackupEncryptionConfig](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupEncryptionConfig)`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The name of the destination instance that will contain the backup copy. Values are of the form: `projects/<project>/instances/<instance>`. Please see DatabaseAdminClient::instanceName() for help formatting this field.

`backupId`

`string`  

Required. The id of the backup copy. The `backup_id` appended to `parent` forms the full backup\_uri of the form `projects/<project>/instances/<instance>/backups/<backup>`.

`sourceBackup`

`string`  

Required. The source backup to be copied. The source backup needs to be in READY state for it to be copied. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects/<project>/instances/<instance>/backups/<backup>`. Please see DatabaseAdminClient::backupName() for help formatting this field.

`expireTime`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

Required. The expiration time of the backup in microsecond granularity. The expiration time must be at least 6 hours and at most 366 days from the `create_time` of the source backup. Once the `expire_time` has passed, the backup is eligible to be automatically deleted by Cloud Spanner to free the resources used by the backup.

**Returns**

**Type**

**Description**

`[CopyBackupRequest](/php/docs/reference/cloud-spanner/1.94.0/Admin.Database.V1.CopyBackupRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
