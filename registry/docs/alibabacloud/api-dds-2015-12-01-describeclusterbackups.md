Queries the cluster backup sets for an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.

## Operation description

For sharded cluster instances that use cloud disks and were created before October 19, 2023, you must first call the [TransferClusterBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transferclusterbackup) operation to convert shard backups to cluster backups.

Sharded cluster instances that use cloud disks and were created after October 19, 2023 use cluster backups by default.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeClusterBackups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeClusterBackups)

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

dds:DescribeClusterBackups

get

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}`

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

dds-bp16cb162771\*\*\*\*

BackupId

string

No

The ID of the cluster backup.

5664\*\*\*\*

PageNo

integer

No

The number of the page to return. The value must be a positive integer. Default value: **1**.

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

2019-03-13T12:11Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. Specify the time in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

**Note**

This parameter is invalid if you specify the BackupId parameter.

2019-03-14T13:10Z

IsOnlyGetClusterBackUp

boolean

No

Specifies whether to query the information about the child nodes in the cluster backup. Valid values:

-   **true**: Returns only the basic information about the cluster backup, not the backup information about all child nodes.
    
-   **false** (Default): Returns the backup information about all child nodes.
    

true

SrcRegion

string

No

The region where the instance resides.

**Note**

-   This parameter is required when you query the backup sets of a released instance.
    
-   This parameter is required when you query geo-redundant backups.
    

cn-hangzhou

DestRegion

string

No

The region where the geo-redundant backup resides.

**Note**

This parameter is required when you query geo-redundant backups.

cn-shanghai

ResourceGroupId

string

No

The ID of the resource group.

rg-xxxx

BackupJobId

string

No

The ID of the backup job.

775051

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

RequestId

string

The request ID.

2F42BB4E-461F-5B55-A37C-53B1141C\*\*\*\*

MaxResults

integer

The maximum number of entries returned in this request.

10

PageNumber

integer

The page number of the returned page.

1

PageSize

integer

The number of entries returned per page.

30

ClusterBackups

array<object>

The details of the cluster backup sets. A cluster backup contains the backup sets of all nodes.

array<object>

The details of the cluster backup sets. A cluster backup contains the backup sets of all nodes.

IsAvail

integer

Indicates whether the cluster backup set is valid. Valid values:

-   **1**: The cluster backup set is valid.
    
-   **0**: The backup sets of child nodes are not complete or have failed.
    

1

ClusterBackupId

string

The ID of the cluster backup.

cb-o8c2ugnxo26kx\*\*\*

ClusterBackupStatus

string

The status of the cluster backup.

OK

ClusterBackupStartTime

string

The time when the cluster backup started.

2023-10-16T19:33:20Z

ClusterBackupSize

string

The size of the cluster backup set, in bytes.

107374182400

ClusterBackupEndTime

string

The time when the cluster backup finished.

2023-10-16T19:33:20Z

ClusterBackupMode

string

The mode of the cluster backup.

Automated

ExtraInfo

object

The supplementary information. The value is a JSON-formatted string.

RegistryFromHistory

string

Indicates whether the backup set was migrated from a historical backup. A value of **1** indicates that the backup was migrated.

1

Backups

array<object>

The backup sets of each child node in the cluster backup.

array<object>

The backup sets of each child node in the cluster backup.

BackupId

string

The ID of the backup.

738025367

InstanceName

string

The name of the shard in the MongoDB cluster.

d-bp16cb162771\*\*\*\*

BackupDownloadURL

string

The public URL from which you can download the backup file. If the backup file is unavailable for download, an empty string is returned.

http://oss.com/xxx

BackupIntranetDownloadURL

string

The internal URL from which you can download the backup file. If the backup file is unavailable for download, an empty string is returned.

http://oss.com/xxx

BackupStartTime

string

The time when the backup started. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

2023-10-16T19:33:20Z

BackupEndTime

string

The time when the backup finished. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

2023-10-16T19:33:20Z

BackupSize

string

The size of the backup file, in bytes.

77544597650

IsAvail

string

Indicates whether the backup set is available. Valid values:

-   **0**: unavailable.
    
-   **1**: available.
    

1

BackupStatus

string

The backup status. Valid values:

-   **Success**: The backup is successful.
    
-   **Failed**: The backup failed.
    

Success

BackupName

string

The name of the backup.

12345678.tar.gz

ExtraInfo

object

The information about the instance node that is associated with the backup.

NodeId

string

The ID of the node.

d-2ze75ab1fa5d\*\*\*\*

StorageSize

string

The storage space of the node, in MB.

20480

InstanceClass

string

The specifications of the node.

mdb.shard.4x.large.d

NodeType

string

The type of the node.

db

Progress

string

The backup progress in percentage. This parameter is returned only for backups that are in progress.

50

AttachLogStatus

string

The status of the attached log backup. Valid values:

-   **Init**: initialization.
    
-   **No\_Need**: No attached log backup is available.
    
-   **Running**: The attached log backup is in progress.
    
-   **Ready**: The attached log backup is complete.
    
-   **Failed**: The attached log backup failed.
    

**Note**

If the value of the **ClusterBackupStatus** parameter is OK, it only indicates that the full backup was successful. For a cluster instance for which log backup is enabled, the attached log backup must be complete before you can perform a point-in-time restore or ensure data consistency.

Ready

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

The time when the backup expires. The time is in the _yyyy-MM-dd_T_HH:mm:ss_Z format and is displayed in UTC.

**Important** A value of "9999-01-01T00:00:00Z" indicates that the backup is permanently retained.

2025-03-29T03:47:12Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2F42BB4E-461F-5B55-A37C-53B1141C****",
  "MaxResults": 10,
  "PageNumber": 1,
  "PageSize": 30,
  "ClusterBackups": [
    {
      "IsAvail": 1,
      "ClusterBackupId": "cb-o8c2ugnxo26kx***",
      "ClusterBackupStatus": "OK",
      "ClusterBackupStartTime": "2023-10-16T19:33:20Z",
      "ClusterBackupSize": "107374182400",
      "ClusterBackupEndTime": "2023-10-16T19:33:20Z",
      "ClusterBackupMode": "Automated",
      "ExtraInfo": {
        "RegistryFromHistory": "1"
      },
      "Backups": [
        {
          "BackupId": "738025367",
          "InstanceName": "d-bp16cb162771****\n",
          "BackupDownloadURL": "http://oss.com/xxx",
          "BackupIntranetDownloadURL": "http://oss.com/xxx",
          "BackupStartTime": "2023-10-16T19:33:20Z",
          "BackupEndTime": "2023-10-16T19:33:20Z",
          "BackupSize": "77544597650",
          "IsAvail": "1",
          "BackupStatus": "Success",
          "BackupName": "12345678.tar.gz",
          "ExtraInfo": {
            "NodeId": "d-2ze75ab1fa5d****",
            "StorageSize": "20480",
            "InstanceClass": "mdb.shard.4x.large.d",
            "NodeType": "db"
          }
        }
      ],
      "Progress": "50",
      "AttachLogStatus": "Ready",
      "EngineVersion": "4.2",
      "BackupExpireTime": "2025-03-29T03:47:12Z"
    }
  ]
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

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeClusterBackups#workbench-doc-change-demo) for a complete list.
