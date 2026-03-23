Queries the backup sets of a Tair (Redis OSS-compatible) cluster instance.

## Operation description

This operation is applicable only to cloud-native instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeClusterBackupList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeClusterBackupList)

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

kvstore:DescribeClusterBackupList

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

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeregions-redis) operation to query the most recent region list.

cn-zhangjiakou

InstanceId

string

Yes

The instance ID.

r-t4nj72oug5r5646qog

ClusterBackupId

string

No

The backup set ID.

cb-hyxdof5x9kqbtust

PageSize

integer

No

The number of entries per page.

Valid values:

-   30
-   50
-   100
-   200
-   300
-   5
-   10
-   15
-   20

30

PageNumber

integer

No

The page number.

1

StartTime

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2018-12-03T07:01Z

EndTime

string

Yes

The end of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC. The end time must be later than the start time.

2021-05-13T00:00:00Z

NoShardBackup

string

No

Specifies whether to show backup set information for shards in the instance.

-   **true**: does not show backup set information for shards in the instance.
-   **false** (default): shows backup set information for shards in the instance.

Valid values:

-   True
-   False

True

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

C009DA42-3B19-5B81-963D-1509DE2408DD

MaxResults

integer

The maximum number of entries returned.

4

PageNumber

integer

The page number.

1

PageSize

integer

The maximum number of entries returned per page.

30

FullStorageSize

long

The size of the full backup file of the instance. Unit: bytes. Full backups originate from scheduled backups, manual backups, and backups generated during cache analysis.

**Note** The value of this parameter is independent of the number and size of returned backup sets. Instead, it represents the size of all valid full backups of the instance.

1000

LogStorageSize

long

The size of the log backup file of the instance. Unit: bytes. This parameter is valid only when flashback is enabled.

**Note** The value of this parameter is independent of the number and size of returned backup sets. Instead, it represents the size of all valid log backups of the instance.

5000

FreeSize

long

This parameter does not take effect. Ignore this parameter.

100000

ClusterBackups

array<object>

The backup sets of the instance. A backup contains the backup sets of all shards in the instance.

clusterBackup

object

The backup set of the instance. A backup contains the backup sets of all shards in the instance.

IsAvail

integer

Indicates whether the backup set is valid. A value of 0 indicates that shard-level backups failed or have not been completed.

1

ClusterBackupId

string

The ID of the backup set.

cb-zmdqj2m3xyxjtdt0

ClusterBackupStatus

string

The status of the backup set.

-   OK
-   RUNNING
-   Failed

OK

ClusterBackupSize

string

The size of the backup set.

2048

ClusterBackupStartTime

string

The start time of the backup.

2024-01-10T17:21:25Z

ClusterBackupEndTime

string

The end time of the backup.

2024-01-10T17:21:55Z

ClusterBackupMode

string

The backup mode.

Automated

ShardClassMemory

integer

The memory size of a single shard during a full backup. Unit: MB.

1024

Backups

array<object>

The backup sets of all shards in the instance.

backup

object

The queried backup set.

BackupId

string

The ID of the backup file.

514645788

InstanceName

string

The instance name.

hins100322105\_data\_20240108012127.rdb

BackupDownloadURL

string

The public download URL of the backup file.

http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote.aliyuncs.com/custins424747958/hins100322105\_data\_20240110012135.rdb

BackupIntranetDownloadURL

string

The internal download URL of the backup file.

**Note** You can use this URL to download the backup file from an Elastic Compute Service (ECS) instance that is connected to the Tair (Redis OSS-compatible) instance. The ECS instance must reside in the same virtual private cloud (VPC) as the Tair (Redis OSS-compatible) instance.

http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote-internal.aliyuncs.com/custins424747958/hins100322105\_data\_20240110012135.rdb

RecoverConfigMode

string

This parameter does not take effect. Ignore this parameter.

null

BackupStartTime

string

The start time of the backup. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2024-01-09T17:21:30Z

BackupEndTime

string

The end time of the backup. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2024-01-09T17:21:57

BackupSize

string

The size of the backup file. Unit: bytes.

1024

IsAvail

string

Indicates whether the backup set is available. Valid values:

-   **0**: unavailable
-   **1**: available

1

BackupStatus

string

The status of the backup. Valid values:

-   **OK**
-   **ERROR**

OK

BackupName

string

The name of the backup.

hins100322105\_data\_20240110012135.rdb

Engine

string

The database engine. The return value is **redis**.

redis

ExtraInfo

object

The additional information.

CustinsDbVersion

string

The engine version.

5.0

Progress

string

The backup progress. The system displays only the progress of running backup tasks.

100%

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C009DA42-3B19-5B81-963D-1509DE2408DD",
  "MaxResults": 4,
  "PageNumber": 1,
  "PageSize": 30,
  "FullStorageSize": 1000,
  "LogStorageSize": 5000,
  "FreeSize": 100000,
  "ClusterBackups": [
    {
      "IsAvail": 1,
      "ClusterBackupId": "cb-zmdqj2m3xyxjtdt0",
      "ClusterBackupStatus": "OK",
      "ClusterBackupSize": 2048,
      "ClusterBackupStartTime": "2024-01-10T17:21:25Z",
      "ClusterBackupEndTime": "2024-01-10T17:21:55Z",
      "ClusterBackupMode": "Automated",
      "ShardClassMemory": 1024,
      "Backups": [
        {
          "BackupId": 514645788,
          "InstanceName": "hins100322105_data_20240108012127.rdb",
          "BackupDownloadURL": "http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb",
          "BackupIntranetDownloadURL": "http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote-internal.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb",
          "RecoverConfigMode": null,
          "BackupStartTime": "2024-01-09T17:21:30Z",
          "BackupEndTime": "2024-01-09T17:21:57",
          "BackupSize": 1024,
          "IsAvail": 1,
          "BackupStatus": "OK",
          "BackupName": "hins100322105_data_20240110012135.rdb",
          "Engine": "redis",
          "ExtraInfo": {
            "CustinsDbVersion": 5
          }
        }
      ],
      "Progress": "100%"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-22

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeClusterBackupList?updateTime=2025-04-22#workbench-doc-change-demo)

2025-01-15

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeClusterBackupList?updateTime=2025-01-15#workbench-doc-change-demo)

2024-12-27

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeClusterBackupList?updateTime=2024-12-27#workbench-doc-change-demo)

2024-05-23

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeClusterBackupList?updateTime=2024-05-23#workbench-doc-change-demo)

2024-01-22

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeClusterBackupList?updateTime=2024-01-22#workbench-doc-change-demo)
