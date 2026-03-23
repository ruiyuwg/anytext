Queries the backups of a MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeBackups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeBackups)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dds:DescribeBackups

get

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBInstanceId

string

Yes

The ID of the instance.

**Note**

If the instance is a sharded cluster instance, you must also specify the **NodeId** parameter.

dds-bp1a7009eb24\*\*\*\*

NodeId

string

No

The ID of the shard node in the sharded cluster instance.

**Note**

This parameter is required if you specify the ID of a sharded cluster instance for the **DBInstanceId** parameter.

d-bp128a003436\*\*\*\*

BackupId

string

No

The backup ID.

If you specify the ID of a sharded cluster instance for the **DBInstanceId** parameter, the number of backup IDs must be the same as the number of shard nodes. Separate the backup IDs with commas (,).

2072\*\*\*\*,2072\*\*\*\*,2072\*\*\*\*

PageNumber

integer

No

The page number. The value must be greater than 0 and not greater than the maximum value of the integer data type. Default value: **1**.

1

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30** (Default)
    
-   **50**
    
-   **100**
    

30

StartTime

string

No

The beginning of the time range to query. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in Coordinated Universal Time (UTC).

**Note**

This parameter is invalid if you specify the BackupId parameter.

2022-01-13T13:00Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

**Note**

This parameter is invalid if you specify the BackupId parameter.

2022-01-14T13:00Z

SrcRegion

string

No

The region where the instance resides.

**Note**

-   This parameter is required to restore a deleted instance.
    
-   This parameter is required for geo-redundancy.
    

cn-beijing

DestRegion

string

No

The region where the backup resides.

**Note**

This parameter is required for geo-redundancy.

cn-hangzhou

ResourceGroupId

string

No

The resource group ID.

rg-xxxx

BackupJobId

string

No

The backup job ID.

775051

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of backups.

1

RequestId

string

The request ID.

275D43C3-F12F-5224-B375-\*\*\*\*\*\*\*\*\*\*\*\*

PageSize

integer

The number of entries returned per page. Valid values:

-   **30** (Default)
    
-   **50**
    
-   **100**
    

30

PageNumber

integer

The page number.

1

Backups

object

Backup

array<object>

The details of the backup files.

object

The details of the backup files.

BackupStatus

string

The backup status. Valid values:

-   **Success**: The backup is successful.
    
-   **Failed**: The backup failed.
    

Success

BackupType

string

The backup type. Valid values:

-   **FullBackup**: full backup.
    
-   **IncrementalBackup**: incremental backup.
    

FullBackup

BackupStartTime

string

The start time of the backup. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

2022-01-14T03:56:17Z

BackupIntranetDownloadURL

string

The internal download URL for the backup file.

**Note**

Use this URL to download the backup file from an ECS instance. The ECS instance must be in the same network as the MongoDB instance.

http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/custins5559\*\*\*\*\*/hins1936\*\*\*\*\_data\_2022052504\*\*\*\*\_qp.xb?Expires=165361\*\*\*\*&OSSAccessKeyId=\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*&Signature=\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*&Region=cn-hangzhou

BackupSize

integer

The size of the backup file. Unit: bytes.

6168576

BackupDownloadURL

string

The external download URL for the backup file. If the file is not available for download, an empty string is returned.

http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/custins5559\*\*\*\*/hins1936\*\*\*\*\_data\_2022052504\*\*\*\*\_qp.xb?Expires=165361\*\*\*\*&OSSAccessKeyId=\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*&Signature=\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*&Region=cn-hangzhou

BackupMode

string

The backup mode. Valid values:

-   **Automated**: automatic backup.
    
-   **Manual**: manual backup.
    

Automated

BackupEndTime

string

The end time of the backup. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

2022-01-14T03:57:34Z

BackupId

string

The backup ID.

32102\*\*\*\*

BackupDBNames

string

The name of the database that is backed up.

database

BackupMethod

string

The backup method. Valid values:

-   **Snapshot**: snapshot backup.
    
-   **Physical**: physical backup.
    
-   **Logical**: logical backup.
    

Physical

BackupJobId

string

The ID of the backup set job.

1123xxxx

BackupName

string

The name of the backup set. This parameter is currently invalid.

12345678.tar.gz

BackupScale

string

The backup granularity. This parameter is currently invalid.

DBInstance

IsAvail

boolean

Indicates whether the backup set is available. Valid values:

-   **false**: unavailable.
    
-   **true**: available.
    

1

EngineVersion

string

The database engine version of the instance when the backup was created. Valid values:

-   **7.0**
    
-   **6.0**
    
-   **5.0**
    
-   **4.4**
    
-   **4.2**
    
-   **4.0**
    
-   **3.4**
    

4.2

BackupExpireTime

string

The expiration time of the backup. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

**Important**

A value of "9999-01-01T00:00:00Z" indicates that the backup is permanently retained.

2025-08-30T09:49:11Z

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "RequestId": "275D43C3-F12F-5224-B375-************",
  "PageSize": 30,
  "PageNumber": 1,
  "Backups": {
    "Backup": [
      {
        "BackupStatus": "Success",
        "BackupType": "FullBackup",
        "BackupStartTime": "2022-01-14T03:56:17Z",
        "BackupIntranetDownloadURL": "http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/custins5559*****/hins1936****_data_2022052504****_qp.xb?Expires=165361****&OSSAccessKeyId=***********************&Signature=******************************&Region=cn-hangzhou",
        "BackupSize": 6168576,
        "BackupDownloadURL": "http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/custins5559****/hins1936****_data_2022052504****_qp.xb?Expires=165361****&OSSAccessKeyId=************************&Signature=******************************&Region=cn-hangzhou",
        "BackupMode": "Automated",
        "BackupEndTime": "2022-01-14T03:57:34Z",
        "BackupId": "32102****",
        "BackupDBNames": "database",
        "BackupMethod": "Physical",
        "BackupJobId": "1123xxxx",
        "BackupName": "12345678.tar.gz",
        "BackupScale": "DBInstance",
        "IsAvail": true,
        "EngineVersion": "4.2",
        "BackupExpireTime": "2025-08-30T09:49:11Z"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidStartTime.Malformed

The Specified parameter StartTime is not valid.

400

InvalidEndTime.Malformed

The Specified parameter EndTime is not valid.

400

InvalidStartTimeAndEndTime.Malformed

The Specified parameter StartTime or EndTime is not valid.

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeBackups#workbench-doc-change-demo) for a complete list.
