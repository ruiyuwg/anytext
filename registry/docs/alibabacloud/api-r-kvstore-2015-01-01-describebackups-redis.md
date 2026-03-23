Queries the backup files of the Tair (Redis OSS-compatible) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeBackups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeBackups)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

kvstore:DescribeBackups

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance whose backup files you want to query.

r-bp1zxszhcgatnx\*\*\*\*

BackupId

integer

No

The ID of the backup file.

11611111

BackupJobId

integer

No

The backup task ID, returned by CreateBackup. If CreateBackup returns multiple BackupJobIds, you need to use this interface to query each of them separately.

10001

PageSize

integer

No

The maximum number of entries per page. Valid values: 30, 50, 100, 200, and 300.

30

PageNumber

integer

No

The page number. The value must be an integer that is greater than **0**. Default value: **1**.

1

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2019-03-11T10:00Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC. The end time must be later than the start time.

2019-03-14T18:00Z

NeedAof

string

No

Specifies whether to enable append-only files (AOFs) persistence. Valid values:

-   **0**: no
-   **1**: yes

**Note** The default value is **0**.

1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

963C20F0-7CE1-4591-AAF3-6F3CD1CE\*\*\*\*

PageNumber

integer

The page number of the returned page.

1

PageSize

integer

The number of entries returned on each page.

30

TotalCount

integer

The total number of backup files that were returned.

5

FullStorageSize

long

The size of the full backup file of the instance. Unit: bytes. Full backups originate from scheduled backups, manual backups, and backups generated during cache analysis.

**Note** The value of this parameter is independent of the number and size of the returned backup sets. Instead, it reflects the total size of all valid full backups of the instance.

1000

LogStorageSize

long

The size of the log backup file of the instance. Unit: bytes. This value is valid only when flashback is enabled.

**Note** The value of this parameter is independent of the number and size of the returned backup sets. Instead, it reflects the total size of all valid log backups of the instance.

5000

FreeSize

long

This parameter does not take effect. Ignore this parameter.

100000

Backups

array<object>

The queried backup sets.

Backup

object

The queried backup set.

BackupStatus

string

The status of the backup. Valid values:

-   **Success**
-   **Failed**

Success

BackupStartTime

string

The start time of the backup.

2019-03-14T05:28:50Z

BackupType

string

The backup type. Valid values:

-   **FullBackup**
-   **IncrementalBackup**

FullBackup

BackupDownloadURL

string

The public download URL of the backup file.

https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/\*\*\*\*\*\*\*\*

NodeInstanceId

string

The node ID.

**Note** If the instance uses the standard architecture, this parameter returns the instance ID.

r-bp10noxlhcoim2\*\*\*\*-db-1

BackupEndTime

string

The end time of the backup.

2019-03-14T05:31:13Z

BackupId

integer

The ID of the backup file.

165\*\*\*\*\*50

BackupDBNames

string

The names of the databases that are backed up. The default value is **all**, which indicates that all databases are backed up.

all

EngineVersion

string

The engine version (major version) of the instance.

4.0

BackupIntranetDownloadURL

string

The internal download URL of the backup file.

**Note** You can use this URL to download the backup file from an Elastic Compute Service (ECS) instance that is connected to the Tair instance. The ECS instance must belong to the same classic network or reside in the same virtual private cloud (VPC) as the Tair instance.

https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/\*\*\*\*\*\*\*\*

BackupSize

long

The size of the backup file.

1024

BackupMode

string

The backup mode. Valid values:

-   **Automated**
-   **Manual**

Automated

BackupMethod

string

The backup method. Valid values:

-   **Logical**
-   **Physical**

Physical

BackupJobID

integer

The ID of the backup task.

24340

RecoverConfigMode

string

If the backup includes account information, kernel parameters and whitelist details.

{"whitelist":true,"config":true,"account":true}

AccessDeniedDetail

object

The following parameters are no longer used. Ignore the parameters.

AuthAction

string

This parameter is no longer used. Ignore this parameter.

\_

AuthPrincipalDisplayName

string

This parameter is no longer used. Ignore this parameter.

\_

AuthPrincipalOwnerId

string

This parameter is no longer used. Ignore this parameter.

\_

AuthPrincipalType

string

This parameter is no longer used. Ignore this parameter.

\_

EncodedDiagnosticMessage

string

This parameter is no longer used. Ignore this parameter.

\_

NoPermissionType

string

This parameter is no longer used. Ignore this parameter.

\_

PolicyType

string

This parameter is no longer used. Ignore this parameter.

\_

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "963C20F0-7CE1-4591-AAF3-6F3CD1CE****",
  "PageNumber": 1,
  "PageSize": 30,
  "TotalCount": 5,
  "FullStorageSize": 1000,
  "LogStorageSize": 5000,
  "FreeSize": 100000,
  "Backups": {
    "Backup": [
      {
        "BackupStatus": "Success",
        "BackupStartTime": "2019-03-14T05:28:50Z",
        "BackupType": "FullBackup",
        "BackupDownloadURL": "https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********",
        "NodeInstanceId": "r-bp10noxlhcoim2****-db-1",
        "BackupEndTime": "2019-03-14T05:31:13Z",
        "BackupId": 0,
        "BackupDBNames": "all",
        "EngineVersion": 4,
        "BackupIntranetDownloadURL": "https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********",
        "BackupSize": 1024,
        "BackupMode": "Automated",
        "BackupMethod": "Physical",
        "BackupJobID": 24340,
        "RecoverConfigMode": {
          "whitelist": true,
          "config": true,
          "account": true
        },
        "ExpectExpireTime": ""
      }
    ]
  },
  "AccessDeniedDetail": {
    "AuthAction": "_",
    "AuthPrincipalDisplayName": "_",
    "AuthPrincipalOwnerId": "_",
    "AuthPrincipalType": "_",
    "EncodedDiagnosticMessage": "_",
    "NoPermissionType": "_",
    "PolicyType": "_"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidStartTime.Malformed

The Specified parameter StartTime is not valid.

\-

400

InvalidEndTime.Malformed

The Specified parameter EndTime is not valid.

The end time is invalid. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. Example: 2011-06-11T16:00Z.

400

InvalidEngineVersion.Malformed

The Specified EngieVersion is not valid.

\-

400

InvalidStartTimeAndEndTime.Malformed

The end time must be greater than the start time.

The end time must be later than the start time.

400

InvalidPageSize.Malformed

The specified parameter PageSize is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2025-04-22#workbench-doc-change-demo)

2024-09-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-09-06#workbench-doc-change-demo)

2024-05-23

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-05-23#workbench-doc-change-demo)

2024-05-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-05-06#workbench-doc-change-demo)

2024-03-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-03-26#workbench-doc-change-demo)

2024-01-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-01-22#workbench-doc-change-demo)

2024-01-03

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2024-01-03#workbench-doc-change-demo)

2023-11-13

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2023-11-13#workbench-doc-change-demo)

2023-11-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2023-11-06#workbench-doc-change-demo)

2023-07-25

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2023-07-25#workbench-doc-change-demo)

2022-11-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeBackups?updateTime=2022-11-29#workbench-doc-change-demo)
