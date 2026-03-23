Retrieves one or more historical backup snapshots that meet the specified criteria.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/SearchHistoricalSnapshots)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/SearchHistoricalSnapshots)

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

hbr:SearchHistoricalSnapshots

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SourceType

string

No

The type of the data source. Valid values:

-   **ECS\_FILE**: a backup snapshot of ECS files.
    
-   **OSS**: a backup snapshot of Alibaba Cloud OSS.
    
-   **NAS**: a backup snapshot of Alibaba Cloud NAS.
    

ECS\_FILE

Query

array

Yes

The query conditions. For example:

```
[
  {
    "field": "VaultId",
    "value": "v-0003rf9m*****qx5",
    "operation": "MATCH_TERM"
  },
  {
    "field": "InstanceId",
    "value": "i-bp1i20zq2*****e9368m",
    "operation": "MATCH_TERM"
  },
  {
    "field": "PlanId",
    "value": "plan-0005vk*****gkd1iu4f",
    "operation": "MATCH_TERM"
  },
  {
    "field": "CompleteTime",
    "value": "1626769913",
    "operation": "GREATER_THAN_OR_EQUAL"
  }
]
```

-   Supported fields:
    
    -   VaultId: This parameter is required. The ID of the backup vault.
        
    -   InstanceId: This parameter is required only when SourceType is set to ECS\_FILE. The ID of the ECS instance.
        
    -   Bucket: This parameter is required only when SourceType is set to OSS. The name of the OSS bucket.
        
    -   FileSystemId: This parameter is required only when SourceType is set to NAS. The ID of the NAS file system.
        
    -   CreateTime: This parameter is required only when SourceType is set to NAS. The time when the NAS file system was created.
        
    -   CompleteTime: The time when the snapshot was completed.
        
    -   PlanId: The ID of the backup plan.
        
-   Supported operations:
    
    -   MATCH\_TERM: exact match.
        
    -   GREATER\_THAN: greater than.
        
    -   GREATER\_THAN\_OR\_EQUAL: greater than or equal to.
        
    -   LESS\_THAN: less than.
        
    -   LESS\_THAN\_OR\_EQUAL: less than or equal to.
        
    -   BETWEEN: a range. The value is a JSON array in the `[lower bound,upper bound]` format.
        
    -   IN: in a collection. The value is an array.
        
    -   NOT\_IN: not in a collection. The value is an array.
        

\[ { "field": "VaultId", "value": "v-0003rf9m17pap3ltpqx5", "operation": "MATCH\_TERM" }, { "field": "InstanceId", "value": "i-bp1i20zq2wuzdie9368m", "operation": "MATCH\_TERM" }, { "field": "PlanId", "value": "plan-0005vkqhpesqgkd1iu4f", "operation": "MATCH\_TERM" }, { "field": "CompleteTime", "value": 1626769913, "operation": "GREATER\_THAN\_OR\_EQUAL" } \]

any

No

The query conditions. For example:

```
[
  {
    "field": "VaultId",
    "value": "v-0003rf9m*****qx5",
    "operation": "MATCH_TERM"
  },
  {
    "field": "InstanceId",
    "value": "i-bp1i20zq2*****e9368m",
    "operation": "MATCH_TERM"
  },
  {
    "field": "PlanId",
    "value": "plan-0005vk*****gkd1iu4f",
    "operation": "MATCH_TERM"
  },
  {
    "field": "CompleteTime",
    "value": "1626769913",
    "operation": "GREATER_THAN_OR_EQUAL"
  }
]
```

-   Supported fields:
    
    -   VaultId: This parameter is required. The ID of the backup vault.
        
    -   InstanceId: This parameter is required only when SourceType is set to ECS\_FILE. The ID of the ECS instance.
        
    -   Bucket: This parameter is required only when SourceType is set to OSS. The name of the OSS bucket.
        
    -   FileSystemId: This parameter is required only when SourceType is set to NAS. The ID of the NAS file system.
        
    -   CreateTime: This parameter is required only when SourceType is set to NAS. The time when the NAS file system was created.
        
    -   CompleteTime: The time when the snapshot was completed.
        
    -   PlanId: The ID of the backup plan.
        
-   Supported operations:
    
    -   MATCH\_TERM: exact match.
        
    -   GREATER\_THAN: greater than.
        
    -   GREATER\_THAN\_OR\_EQUAL: greater than or equal to.
        
    -   LESS\_THAN: less than.
        
    -   LESS\_THAN\_OR\_EQUAL: less than or equal to.
        
    -   BETWEEN: a range. The value is a JSON array in the `[lower bound,upper bound]` format.
        
    -   IN: in a collection. The value is an array.
        
    -   NOT\_IN: not in a collection. The value is an array.
        

\[ { "field": "VaultId", "value": "v-0003rf9m17pap3ltpqx5", "operation": "MATCH\_TERM" }, { "field": "InstanceId", "value": "i-bp1i20zq2wuzdie9368m", "operation": "MATCH\_TERM" }, { "field": "PlanId", "value": "plan-0005vkqhpesqgkd1iu4f", "operation": "MATCH\_TERM" }, { "field": "CompleteTime", "value": 1626769913, "operation": "GREATER\_THAN\_OR\_EQUAL" } \]

Limit

integer

No

The maximum number of results to return. To retrieve only the number of rows without any data, set Limit to `0`.

10

NextToken

string

No

The token that is required to obtain the next page of snapshots.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

SortBy

string

No

The field to sort by.

CreatedTime

Order

string

No

The sort order. The default value is ASC.

-   ASC: ascending
    
-   DESC: descending
    

ASC

Edition

string

No

The edition. Valid values are BASIC and STANDARD. The default value is STANDARD.

BASIC

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

The token that is required to obtain the next page of snapshots.

BE

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Limit

integer

The number of historical snapshots displayed on the current page.

10

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request is successful, \`successful\` is returned. If the request fails, an error message is returned.

successful

TotalCount

integer

The total number of snapshots that meet the specified criteria.

20

Snapshots

object

Snapshot

array<object>

The list of historical snapshots.

array<object>

Status

string

The status of the backup snapshot job. Valid values:

-   **COMPLETE**: The job is successful.
    
-   **PARTIAL\_COMPLETE**: The job is partially successful.
    
-   **FAILED**: The job failed.
    

COMPLETE

SnapshotHash

string

The hash value of the snapshot.

f2fe...

VaultId

string

The ID of the backup vault that stores the backup snapshot.

v-0003rf9m17pap3ltpqx5

ActualItems

integer

The actual number of items in the snapshot.

**Note**

This parameter is available only for file backups.

6

BackupType

string

The backup type. The value is **COMPLETE**, which indicates a full backup.

COMPLETE

CreateTime

integer

This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.

1607436917

ActualBytes

integer

The actual data volume of the snapshot after deduplication. Unit: bytes.

600

SourceType

string

The type of the data source. Valid values:

-   **ECS\_FILE**: a backup snapshot of ECS files.
    
-   **OSS**: a backup snapshot of Alibaba Cloud OSS.
    
-   **NAS**: a backup snapshot of Alibaba Cloud NAS.
    

ECS\_FILE

Prefix

string

This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the backup prefix.

example/

ClientId

string

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. This parameter indicates the ID of the backup client.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BytesTotal

integer

The total volume of the data source. Unit: bytes.

1000

ItemsDone

integer

The number of backed up items.

**Note**

This parameter is available only for file backups.

8

CompleteTime

integer

The time when the backup snapshot was completed. This value is a UNIX timestamp. Unit: seconds.

1554347313

Retention

integer

The retention period of the backup snapshot in days.

7

CreatedTime

integer

The time when the backup snapshot was created. This value is a UNIX timestamp. Unit: seconds.

1554347313

Bucket

string

This parameter is valid only when **SourceType** is set to **OSS**. This parameter indicates the name of the OSS bucket.

hbr-backup-oss

ParentSnapshotHash

string

The hash value of the parent backup snapshot.

f2fe..

InstanceId

string

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. This parameter indicates the ID of the ECS instance.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

FileSystemId

string

This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the ID of the file system.

005494

ErrorFile

string

The file that records information about backup failures. This includes information about partially completed backups.

Item Error Message C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat Open: open \\\\?\\C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat: The process cannot access the file because it is being used by another process. C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af\_contrib.ini Open: open \\\\?\\C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af\_contrib.ini: Access is denied.

StartTime

integer

The time when the snapshot started. This value is a UNIX timestamp. Unit: seconds.

1554347313

UpdatedTime

integer

The time when the backup snapshot was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

SnapshotId

string

The ID of the backup snapshot.

s-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

JobId

string

The ID of the backup job.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Path

string

This parameter is valid only when **SourceType** is set to **ECS\_FILE**. This parameter indicates the path of the backed up files.

\["/home"\]

ItemsTotal

integer

The total number of items in the data source.

**Note**

This parameter is available only for file backups.

10

BytesDone

integer

The data volume of the incremental backup. Unit: bytes.

800

Paths

object

Path

array

The list of paths to the backed up files.

"/home"

string

This parameter is valid only when **SourceType** is set to **NAS**. This parameter indicates the path of the backed up files.

"/home"

InstanceName

string

The name of the Tablestore instance.

instancename

TableName

string

The name of the data table in the Tablestore instance.

table2

RangeStart

integer

The time when the backup job started. This value is a UNIX timestamp. Unit: milliseconds.

1642492553038

RangeEnd

integer

The time when the backup job ended. This value is a UNIX timestamp. Unit: milliseconds.

1642521709966

ExpireTime

integer

The expiration time of the snapshot. This value is a UNIX timestamp. Unit: seconds.

1640334062

SourceSnapshotHash

string

The hash value of the snapshot before it was archived.

qwer\*\*\*

SourceParentSnapshotHash

string

The hash value of the parent snapshot before it was archived.

qwer\*\*\*

StorageClass

string

The storage class. Valid values:

-   **Standard**: Standard.
    
-   **Archive**: Archive.
    
-   **ColdArchive**: Cold Archive.
    

STANDARD

ArchiveTime

integer

The time when the snapshot was archived.

1640334062

UseCommonNas

boolean

Indicates whether a local NAS file system is used.

false

Include

string

The backup paths that are included in the backup job.

\[\\"/test/example\_cn-huhehaote\_3.txt\\", \\"/test/example\_cn-huhehaote\_9.txt\\", \\"/test/example\_cn-huhehaote\_5.txt\\", \\"/test/example\_cn-huhehaote\_1.txt\\", \\"/test/example\_cn-huhehaote\_7.txt\\"\]

Exclude

string

The backup paths that are excluded from the backup job.

\[\\"/test/example\_cn-hangzhou\_7.txt\\", \\"/test/example\_cn-hangzhou\_1.txt\\", \\"/test/example\_cn-hangzhou\_3.txt\\", \\"/test/example\_cn-hangzhou\_9.txt\\", \\"/test/example\_cn-hangzhou\_6.txt\\"\]

ProtectedDataSize

integer

The amount of data on the source side that is protected. Unit: bytes. If SourceType is set to ECS\_FILE, this parameter indicates the capacity of the protected disk.

42949672960

## Examples

Success response

`JSON` format

```
{
  "NextToken": "BE",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Limit": 10,
  "Code": "200",
  "Message": "successful",
  "TotalCount": 20,
  "Snapshots": {
    "Snapshot": [
      {
        "Status": "COMPLETE",
        "SnapshotHash": "f2fe...",
        "VaultId": "v-0003rf9m17pap3ltpqx5",
        "ActualItems": 6,
        "BackupType": "COMPLETE",
        "CreateTime": 1607436917,
        "ActualBytes": 600,
        "SourceType": "ECS_FILE",
        "Prefix": "example/",
        "ClientId": "c-*********************",
        "BytesTotal": 1000,
        "ItemsDone": 8,
        "CompleteTime": 1554347313,
        "Retention": 7,
        "CreatedTime": 1554347313,
        "Bucket": "hbr-backup-oss",
        "ParentSnapshotHash": "f2fe..",
        "InstanceId": "i-*********************",
        "FileSystemId": "005494",
        "ErrorFile": "Item\tError Message C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat\tOpen: open \\\\?\\C:\\Program Files (x86)\\Symantec\\Symantec Endpoint Protection\\14.3.558.0000.105\\Bin\\service.dat: The process cannot access the file because it is being used by another process. C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini\tOpen: open \\\\?\\C:\\ProgramData\\McAfee\\Agent\\data\\InstallerFiles\\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini: Access is denied.",
        "StartTime": 1554347313,
        "UpdatedTime": 1554347313,
        "SnapshotId": "s-*********************",
        "JobId": "v-*********************",
        "Path": "[\"/home\"]",
        "ItemsTotal": 10,
        "BytesDone": 800,
        "Paths": {
          "Path": [
            "\"/home\""
          ]
        },
        "InstanceName": "instancename",
        "TableName": "table2",
        "RangeStart": 1642492553038,
        "RangeEnd": 1642521709966,
        "ExpireTime": 1640334062,
        "SourceSnapshotHash": "qwer***",
        "SourceParentSnapshotHash": "qwer***",
        "StorageClass": "STANDARD",
        "ArchiveTime": 1640334062,
        "UseCommonNas": false,
        "Include": "[\\\"/test/example_cn-huhehaote_3.txt\\\", \\\"/test/example_cn-huhehaote_9.txt\\\", \\\"/test/example_cn-huhehaote_5.txt\\\", \\\"/test/example_cn-huhehaote_1.txt\\\", \\\"/test/example_cn-huhehaote_7.txt\\\"]",
        "Exclude": "[\\\"/test/example_cn-hangzhou_7.txt\\\", \\\"/test/example_cn-hangzhou_1.txt\\\", \\\"/test/example_cn-hangzhou_3.txt\\\", \\\"/test/example_cn-hangzhou_9.txt\\\", \\\"/test/example_cn-hangzhou_6.txt\\\"]",
        "ProtectedDataSize": 42949672960
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/SearchHistoricalSnapshots#workbench-doc-change-demo) for a complete list.
