Creates a backup plan.

## Operation description

-   A backup plan associates a data source with a backup policy and other backup information. When a backup plan is executed, a backup job is generated to record the backup progress and result. If the backup job is successful, a backup snapshot is generated, which you can use to create a restore job.
    
-   A backup plan supports only one type of data source.
    
-   A backup plan supports only one backup policy with a fixed-interval backup cycle.
    
-   A backup plan can back up data to only one backup repository.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateBackupPlan)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateBackupPlan)

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

hbr:CreateBackupPlan

create

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

Yes

The type of the data source. Valid values:

-   **ECS\_FILE**: Backs up Elastic Compute Service (ECS) files.
    
-   **OSS**: Backs up Alibaba Cloud Object Storage Service (OSS) buckets.
    
-   **NAS**: Backs up Alibaba Cloud Apsara File Storage NAS (NAS) file systems.
    
-   **OTS**: Backs up Alibaba Cloud Tablestore instances.
    
-   **UDM\_ECS**: Backs up an entire ECS instance.
    
-   **SYNC**: Data synchronization.
    

ECS\_FILE

PlanName

string

No

The name of the backup plan. The name must be 1 to 64 characters in length. The name of a backup plan for each data source type must be unique within a repository.

planname

BackupType

string

No

The backup type. Set the value to **COMPLETE**, which indicates a full backup.

COMPLETE

VaultId

string

No

The ID of the backup repository.

v-0006\*\*\*\*\*\*q

Schedule

string

No

The backup policy. Format: `I|{startTime}|{interval}`. This indicates that a backup job is performed every `{interval}` starting from `{startTime}`. Backup jobs that are overdue are not performed. If the last backup job is not complete, the next backup job is not triggered. For example, `I|1631685600|P1D` indicates that a backup job is performed every day starting from 2021-09-15 14:00:00.

-   **startTime**: The start time of the backup. This value is a UNIX timestamp. Unit: seconds.
    
-   **interval**: The interval of the backup. The value must be in the ISO 8601 format. For example, PT1H indicates an interval of one hour. P1D indicates an interval of one day.
    

I|1602673264|P1D

Retention

integer

No

The retention period of the backup. The minimum value is 1. Unit: days.

7

ClusterId

string

No

The ID of the client group that executes the data synchronization plan. This parameter is required only for data synchronization.

cl-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

FileSystemId

string

No

This parameter is required only when **SourceType** is set to **NAS**. This parameter specifies the ID of the file system.

005494

CreateTime

integer

No

This parameter is required only when **SourceType** is set to **NAS**. This parameter specifies the time when the file system was created. This value is a UNIX timestamp. Unit: seconds.

1607436917

Bucket

string

No

This parameter is required only when **SourceType** is set to **OSS**. This parameter specifies the name of the OSS bucket.

hbr-backup-oss

Prefix

string

No

This parameter is required only when **SourceType** is set to **OSS**. This parameter specifies the prefix of the objects to back up. If you specify this parameter, only objects that have the specified prefix are backed up.

oss-prefix

InstanceId

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies the ID of the ECS instance.

i-m5e\*\*\*\*\*6q

Detail

object

No

The details of the entire instance backup. This parameter is a JSON string.

-   snapshotGroup: Specifies whether to use a snapshot-consistent group. This feature is available only when all disks of the instance are Enhanced SSDs (ESSDs).
    
-   appConsistent: Specifies whether to enable application consistency. You must also configure the preScriptPath and postScriptPath parameters.
    
-   preScriptPath: The path of the pre-freeze script.
    
-   postScriptPath: The path of the post-thaw script.
    

{\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}

UdmRegionId

string

No

The region where the instance for the entire instance backup resides.

cn-shanghai

SpeedLimit

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies the traffic shaping settings. Format: `{start}:{end}:{bandwidth}`. Separate multiple traffic shaping settings with vertical bars (|). The time periods of the traffic shaping settings cannot overlap.

-   **start**: The start hour.
    
-   **end**: The end hour.
    
-   **bandwidth**: The bandwidth. Unit: KB/s.
    

0:24:5120

Include

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies the paths to the files to back up. All files in the specified paths are backed up. The value can be up to 255 characters in length.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

Exclude

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies the paths to the files to exclude from the backup. All files in the specified paths are not backed up. The value can be up to 255 characters in length.

\["/var", "/proc"\]

Options

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies whether to use the Windows Volume Shadow Copy Service (VSS) to define a backup path.

-   This feature is available only for Windows ECS instances.
    
-   If data in the backup source is changed, you can set this parameter to `{"UseVSS":true}` to ensure data consistency between the backup and the source.
    
-   After you enable VSS, you cannot back up multiple file folders at the same time.
    

{"UseVSS":false}

DataSourceId

string

No

The ID of the source data source. This parameter is required only for data synchronization.

ds-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Path

array

No

The source paths.

string

No

The source paths. The value can be up to 65,536 characters in length. The following rules apply:

-   If you do not use wildcard characters (\*), you can specify up to 20 paths.
    
-   If you use wildcard characters (\*), you can specify only one path. The path must be in a format such as `/*/*`.
    
-   Each path must be an absolute path.
    
-   If you use VSS, you cannot specify multiple paths, UNC paths, or wildcard characters, or exclude files.
    
-   If you use a UNC path, you cannot use VSS or wildcard characters, or exclude files. If the backup source contains a UNC path, the Windows Access Control List (ACL) is not backed up.
    

\["/home"\]

Rule

array<object>

No

The backup plan rules.

object

No

The backup plan rules.

DestinationRetention

integer

No

The retention period of the geo-redundant backup.

7

Schedule

string

No

The backup policy. Format: I|{startTime}|{interval}. This indicates that a backup job is performed every {interval} starting from {startTime}. Backup jobs that are overdue are not performed. If the last backup job is not complete, the next backup job is not triggered. For example, I|1631685600|P1D indicates that a backup job is performed every day starting from 2021-09-15 14:00:00.

startTime: The start time of the backup. This value is a UNIX timestamp. Unit: seconds. interval: The interval of the backup. The value must be in the ISO 8601 format. For example, PT1H indicates an interval of one hour. P1D indicates an interval of one day.

I|1602673264|P1D

Retention

integer

No

The retention period of the backup.

7

Disabled

boolean

No

Indicates whether the rule is enabled.

false

DoCopy

boolean

No

Specifies whether to enable geo-redundancy.

false

DestinationRegionId

string

No

The ID of the destination region for geo-redundancy.

cn-hangzhou

RuleName

string

No

The name of the rule.

rule-test-name

BackupType

string

No

The backup type.

COMPLETE

InstanceName

string

No

The name of the Tablestore instance.

instancename

OtsDetail

[OtsDetail](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-struct-otsdetail)

No

The details of the Tablestore instance.

CrossAccountType

string

No

The type of the cross-account backup. Valid values:

-   SELF\_ACCOUNT: Backs up data within the same account.
    
-   CROSS\_ACCOUNT: Backs up data across accounts.
    

**Valid values:**

-   SELF\_ACCOUNT :
    
    SELF\_ACCOUNT
    
-   CROSS\_ACCOUNT :
    
    CROSS\_ACCOUNT
    

CROSS\_ACCOUNT

CrossAccountUserId

integer

No

The ID of the source account for the cross-account backup.

15897534xxxx4625

CrossAccountRoleName

string

No

The name of the RAM role that is created in the source account for the cross-account backup.

BackupRole

KeepLatestSnapshots

integer

No

Specifies whether to permanently retain the latest backup.

-   0: No.
    
-   1: Yes.
    

**Valid values:**

-   0 :
    
    No
    
-   1 :
    
    Yes
    

1

DestSourceType

string

No

The type of the destination data source. This parameter is required only for data synchronization.

OSS

DestDataSourceId

string

No

The ID of the destination data source. This parameter is required only for data synchronization.

ds-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DestDataSourceDetail

object

No

The details of the destination data source. This parameter is required only for data synchronization.

{\\"prefix\\":\\"/\\"}

ChangeListPath

string

No

The configuration of the incremental file synchronization list. This parameter is required only for data synchronization.

{"dataSourceId": "ds-123456789", "path": "/changelist"}

Disabled

boolean

No

Specifies whether to disable the backup plan by default.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data.

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message returned. If the request is successful, \`successful\` is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PlanId

string

The ID of the backup plan.

plan-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PlanId": "plan-*********************",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateBackupPlan#workbench-doc-change-demo) for a complete list.
