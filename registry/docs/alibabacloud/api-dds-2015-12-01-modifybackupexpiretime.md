Modifies the time-to-live (TTL) of a MongoDB backup set.

## Operation description

You can modify the TTL only for manual backups.

This operation is applicable only to MongoDB instances that use cloud disks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyBackupExpireTime)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyBackupExpireTime)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The instance ID.

dds-bp16cb162771\*\*\*\*

BackupExpireTime

string

No

The time-to-live (TTL) of the backup. The time must be in the _yyyy-MM-dd_T_HH:mm:ss_Z format and in UTC.

**Note**

-   _9999-01-01_T_00:00:00_Z _indicates that the backup is retained permanently._
    
_-   You can only extend the retention period. You cannot shorten it.
    
-   If you do not set the time to _9999-01-01_T_00:00:00_Z, the new expiration time must be within 730 days after the end time of the backup set.
    _

2025-03-29T03:47:12Z

BackupId

string

Yes

The backup ID.

260032xxxx

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A0181AC4-XXXX-XXXX-87CA-100C70B86729

BackupExpireTime

string

The time-to-live (TTL) of the backup. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is in UTC.

**Note**

-   _9999-01-01_T_00:00:00_Z _indicates that the backup is retained permanently._
    

2025-03-29T03:47:12Z

BackupId

string

The backup ID.

260032xxxx

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A0181AC4-XXXX-XXXX-87CA-100C70B86729",
  "BackupExpireTime": "2025-03-29T03:47:12Z",
  "BackupId": "260032xxxx"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidBackupMethod.ValueNotSupport

The specified parameter BackupMethod is not valid.

403

OperationDenied.BackupJobExists

The operation is not permitted due to backup job exist.

A backup task is in progress. Try again later.

403

OperationDenied.NoDatabase

The operation is not permitted due to no database.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyBackupExpireTime#workbench-doc-change-demo) for a complete list.
