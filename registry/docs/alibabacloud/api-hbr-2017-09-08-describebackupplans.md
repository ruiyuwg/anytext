Gets one or more backup plans that meet specified conditions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupPlans)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupPlans)

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

hbr:DescribeBackupPlans

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

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

SourceType

string

No

The type of the data source. Valid values:

-   **ECS\_FILE**: Files of an Elastic Compute Service (ECS) instance.
    
-   **OSS**: Objects in Object Storage Service (OSS).
    
-   **NAS**: File systems of Apsara File Storage NAS (NAS).
    
-   **OTS**: Tablestore instances.
    
-   **UDM\_ECS**: Entire ECS instances.
    
-   **SYNC**: Data synchronization.
    

ECS\_FILE

Filters

array<object>

No

The filters.

object

No

Key

string

No

The key in the filter. Valid values:

-   **regionId**: The region ID.
    
-   **planId**: The ID of the backup plan.
    
-   **sourceType**: The type of the backup source.
    
-   **vaultId**: The ID of the backup repository.
    
-   **instanceName**: The name of the instance.
    
-   **instanceId**: The ID of the instance.
    
-   **planName**: The name of the backup plan.
    

vaultId

Values

array

No

The value to match in the filter.

\["v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*"\]

string

No

The value to match in the filter.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Edition

string

No

The edition of the backup plan. Valid values: BASIC and STANDARD. Default value: STANDARD.

STANDARD

## Response elements

**Element**

**Type**

**Description**

**Example**

object

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

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request is successful, "successful" is returned. If the request fails, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

TotalCount

integer

The total number of backup plans that meet the specified conditions.

8

BackupPlans

object

BackupPlan

array<object>

The backup plans that meet the specified conditions.

array<object>

VaultId

string

The ID of the backup repository.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BackupType

string

The backup type. The value **COMPLETE** indicates a full backup.

COMPLETE

CreateTime

integer

The time when the file system was created. This parameter is valid only if **SourceType** is set to **NAS**. This value is a UNIX timestamp, in seconds.

1554347313

DataSourceId

string

The ID of the data source.

ds-000ht6o9\*\*\*\*\*w61

SourceType

string

The type of the data source. Valid values:

-   **ECS\_FILE**: Files of an ECS instance.
    
-   **OSS**: Objects in OSS.
    
-   **NAS**: File systems of NAS.
    
-   **OTS**: Tablestore instances.
    
-   **UDM\_ECS**: Entire ECS instances.
    
-   **SYNC**: Data synchronization.
    

ECS\_FILE

Disabled

boolean

Specifies whether the backup plan is paused.

-   true: The backup plan is paused.
    
-   false: The backup plan is not paused.
    

false

Prefix

string

The prefix of the objects to back up. This parameter is valid only if **SourceType** is set to **OSS**.

oss-prefix

Options

string

Specifies whether to use Windows Volume Shadow Copy Service (VSS) to create a shadow copy. This parameter is valid only if **SourceType** is set to **ECS\_FILE**.

{"UseVSS":false}

ClientId

string

The ID of the client.

c-000ge4w\*\*\*\*\*1qb

Exclude

string

The path to the files to exclude from the backup. This parameter is valid only if **SourceType** is set to **ECS\_FILE**. Files in the specified path are not backed up.

\["/var", "/proc"\]

Retention

integer

The retention period of the backup data, in days.

7

CreatedTime

integer

The time when the backup plan was created. This value is a UNIX timestamp, in seconds.

1554347313

ClusterId

string

The ID of the client group.

cl-000ht6o9\*\*\*\*\*\*h

Bucket

string

The name of the OSS bucket. This parameter is valid only if **SourceType** is set to **OSS**.

hbr-backup-oss

Detail

string

The details of the ECS instance backup.

{\\"doCopy\\":true,\\"doBackup\\":false,\\"instanceName\\":\\"instance example\\",\\"appConsistent\\":false,\\"destinationRegionId\\":\\"cn-shanghai\\",\\"enableFsFreeze\\":true,\\"osNameEn\\":\\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\\",\\"osName\\":\\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\\",\\"diskIdList\\":\[\],\\"backupVaultId\\":\\"\\",\\"snapshotGroup\\":true,\\"destinationRetention\\":35,\\"platform\\":\\"Windows Server 2012\\",\\"timeoutInSeconds\\":60,\\"backupRetention\\":1,\\"osType\\":\\"windows\\",\\"preScriptPath\\":\\"\\",\\"postScriptPath\\":\\"\\",\\"enableWriters\\":true,\\"ecsDeleted\\":false}

Schedule

string

The backup policy, formatted as `I|{startTime}|{interval}`. A backup job runs every `{interval}` starting from `{startTime}`. Overdue jobs are skipped. A new job does not start if the previous one is still running. For example, `I|1631685600|P1D` means a backup job runs daily starting from 2021-09-15 14:00:00.

-   **startTime**: The start time of the backup. This is a UNIX timestamp in seconds.
    
-   **interval**: The backup interval in the ISO 8601 format. For example, PT1H means one hour and P1D means one day.
    

I|1602673264|P1D

SpeedLimit

string

The traffic shaping policy for the backup. This parameter is valid only if **SourceType** is set to **ECS\_FILE**. Format: `{start}|{end}|{bandwidth}`. Separate multiple policies with a pipe character (`|`). The time periods of the policies cannot overlap.

-   start: The start hour.
    
-   end: The end hour.
    
-   bandwidth: The bandwidth limit. Unit: KB.
    

0:24:5120

InstanceId

string

The ID of the ECS instance. This parameter is valid only if **SourceType** is set to **ECS\_FILE**.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

PlanId

string

The ID of the backup plan.

plan-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BackupSourceGroupId

string

The ID of the backup data source group.

System-Database

FileSystemId

string

The ID of the file system. This parameter is valid only if **SourceType** is set to **NAS**.

00594

OtsDetail

object

The details of the Tablestore instance.

TableNames

object

TableName

array

The tables in the Tablestore instance.

string

The name of the data table in the Tablestore instance.

test2\_HBR\_RESTORED

InstanceName

string

The name of the Tablestore instance.

instancename

UpdatedTime

integer

The time when the backup plan was updated. This value is a UNIX timestamp, in seconds.

1554347313

PlanName

string

The name of the backup plan.

planname

Include

string

The path to the files to back up. This parameter is valid only if **SourceType** is set to **ECS\_FILE**. All files in the specified path are backed up.

\["/home/alice/\*.pdf", "/home/bob/\*.txt"\]

Rules

object

Rule

array<object>

The backup policies. This parameter is valid only for disk backups.

object

DestinationRetention

integer

The retention period of the geo-redundant backup, in days.

90

Schedule

string

The backup policy, formatted as `I|{startTime}|{interval}`. A backup job runs every `{interval}` starting from `{startTime}`. Overdue jobs are skipped. A new job does not start if the previous one is still running. For example, `I|1631685600|P1D` means a backup job runs daily starting from 2021-09-15 14:00:00.

-   `startTime`: The start time of the backup. This is a UNIX timestamp in seconds.
    
-   `interval`: The backup interval in the ISO 8601 format. For example, PT1H means one hour and P1D means one day.
    

I|1631685600|P1D

Retention

integer

The retention period of the backup data, in days.

90

Disabled

boolean

Specifies whether the policy is disabled.

true

DoCopy

boolean

Specifies whether to copy the backup snapshot to the backup repository.

false

DestinationRegionId

string

The ID of the destination region for the geo-redundant backup.

cn-shanghai

RuleId

string

The ID of the policy.

rule-0008i52rf0ulpni6kn6m

RuleName

string

The name of the policy.

Disk Golden Rule

BackupType

string

The backup type. The value **COMPLETE** indicates a full backup.

COMPLETE

Resources

object

Resource

array<object>

The backup resources. This parameter is valid only for disk backups.

object

SourceType

string

The type of the data source. Valid value: **UDM\_DISK**.

UDM\_DISK

ResourceId

string

The ID of the data source.

d-j6cgioir6m\*\*\*\*\*\*lu4

Extra

string

The extended information about the data source.

{\\"doBackup\\":false,\\"diskName\\":\\"data\_disk\\",\\"size\\":100,\\"type\\":\\"data\\",\\"category\\":\\"cloud\_essd\\",\\"imageId\\":\\"\\",\\"device\\":\\"/dev/xvdb\\",\\"encrypted\\":false}

Paths

object

Path

array

The backup paths. This parameter is valid only if **SourceType** is set to **ECS\_FILE**.

string

The backup path.

\["/home"\]

TrialInfo

object

The free trial information.

TrialStartTime

integer

The time when the free trial starts.

1579413159

TrialVaultReleaseTime

integer

The time when the free trial repository is released.

1594965600

TrialExpireTime

integer

The time when the free trial expires.

1584597600

KeepAfterTrialExpiration

boolean

Specifies whether to convert the plan to a pay-as-you-go plan after the free trial ends.

true

InstanceGroupId

string

The ID of the instance group.

i-\*\*

CrossAccountType

string

The type of the cross-account backup. Valid values:

-   SELF\_ACCOUNT
    
-   CROSS\_ACCOUNT
    

CROSS\_ACCOUNT

CrossAccountUserId

integer

The ID of the source account for the cross-account backup.

1841642xxxxx9795

CrossAccountRoleName

string

The name of the RAM role in the source account for the cross-account backup.

BackupRole

KeepLatestSnapshots

integer

Specifies whether to retain at least one backup version.

-   0: Does not retain.
    
-   1: Retains.
    

0

DestSourceType

string

The type of the destination data source. This parameter is required only for data synchronization.

OSS

DestDataSourceId

string

The ID of the destination data source. This parameter is required only for data synchronization.

ds-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DestDataSourceDetail

string

The details of the destination data source. This parameter is required only for data synchronization.

{\\"prefix\\":\\"/\\"}

ChangeListPath

string

The configurations of the incremental file synchronization. This parameter is required only for data synchronization.

{"dataSourceId": "ds-123456789", "path": "/changelist"}

LatestExecuteJobId

string

The ID of the last backup job run by the plan.

job-12345678

LatestFinishJobId

string

The ID of the last completed backup job.

job-00\*\*\*\*\*\*\*\*\*\*\*\*\*\*9khz

CreatedByTag

boolean

Specifies whether the backup plan was automatically created based on tags.

false

HitTags

object

HitTag

array<object>

The matched tag rules.

object

The matched tag rules.

Key

string

The tag key.

type

Value

string

The tag value.

0

Operator

string

The tag matching rule. Valid values:

-   **EQUAL**: Matches the tag key and tag value.
    
-   **NOT**: Matches the tag key but not the tag value.
    

EQUAL

BusinessStatus

string

The business status.

ACTIVE

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 8,
  "BackupPlans": {
    "BackupPlan": [
      {
        "VaultId": "v-*********************",
        "BackupType": "COMPLETE",
        "CreateTime": 1554347313,
        "DataSourceId": "ds-000ht6o9*****w61",
        "SourceType": "ECS_FILE",
        "Disabled": false,
        "Prefix": "oss-prefix",
        "Options": "{\"UseVSS\":false}",
        "ClientId": "c-000ge4w*****1qb",
        "Exclude": "[\"/var\", \"/proc\"]\t",
        "Retention": 7,
        "CreatedTime": 1554347313,
        "ClusterId": "cl-000ht6o9******h",
        "Bucket": "hbr-backup-oss",
        "Detail": "{\\\"doCopy\\\":true,\\\"doBackup\\\":false,\\\"instanceName\\\":\\\"instance example\\\",\\\"appConsistent\\\":false,\\\"destinationRegionId\\\":\\\"cn-shanghai\\\",\\\"enableFsFreeze\\\":true,\\\"osNameEn\\\":\\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\\",\\\"osName\\\":\\\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\\\",\\\"diskIdList\\\":[],\\\"backupVaultId\\\":\\\"\\\",\\\"snapshotGroup\\\":true,\\\"destinationRetention\\\":35,\\\"platform\\\":\\\"Windows Server 2012\\\",\\\"timeoutInSeconds\\\":60,\\\"backupRetention\\\":1,\\\"osType\\\":\\\"windows\\\",\\\"preScriptPath\\\":\\\"\\\",\\\"postScriptPath\\\":\\\"\\\",\\\"enableWriters\\\":true,\\\"ecsDeleted\\\":false}",
        "Schedule": "I|1602673264|P1D",
        "SpeedLimit": "0:24:5120",
        "InstanceId": "i-*********************",
        "PlanId": "plan-*********************",
        "BackupSourceGroupId": "System-Database",
        "FileSystemId": "00594",
        "OtsDetail": {
          "TableNames": {
            "TableName": [
              "test2_HBR_RESTORED"
            ]
          }
        },
        "InstanceName": "instancename",
        "UpdatedTime": 1554347313,
        "PlanName": "planname",
        "Include": "[\"/home/alice/*.pdf\", \"/home/bob/*.txt\"]",
        "Rules": {
          "Rule": [
            {
              "DestinationRetention": 90,
              "Schedule": "I|1631685600|P1D",
              "Retention": 90,
              "Disabled": true,
              "DoCopy": false,
              "DestinationRegionId": "cn-shanghai",
              "RuleId": "rule-0008i52rf0ulpni6kn6m",
              "RuleName": "Disk Golden Rule",
              "BackupType": "COMPLETE"
            }
          ]
        },
        "Resources": {
          "Resource": [
            {
              "SourceType": "UDM_DISK",
              "ResourceId": "d-j6cgioir6m******lu4",
              "Extra": "{\\\"doBackup\\\":false,\\\"diskName\\\":\\\"data_disk\\\",\\\"size\\\":100,\\\"type\\\":\\\"data\\\",\\\"category\\\":\\\"cloud_essd\\\",\\\"imageId\\\":\\\"\\\",\\\"device\\\":\\\"/dev/xvdb\\\",\\\"encrypted\\\":false}"
            }
          ]
        },
        "Paths": {
          "Path": [
            "[\"/home\"]"
          ]
        },
        "TrialInfo": {
          "TrialStartTime": 1579413159,
          "TrialVaultReleaseTime": 1594965600,
          "TrialExpireTime": 1584597600,
          "KeepAfterTrialExpiration": true
        },
        "InstanceGroupId": "i-**",
        "CrossAccountType": "CROSS_ACCOUNT",
        "CrossAccountUserId": 0,
        "CrossAccountRoleName": "BackupRole",
        "KeepLatestSnapshots": 0,
        "DestSourceType": "OSS",
        "DestDataSourceId": "ds-*********************",
        "DestDataSourceDetail": "{\\\"prefix\\\":\\\"/\\\"}",
        "ChangeListPath": "{\"dataSourceId\": \"ds-123456789\", \"path\": \"/changelist\"}",
        "LatestExecuteJobId": "job-12345678",
        "LatestFinishJobId": "job-00**************9khz",
        "CreatedByTag": false,
        "HitTags": {
          "HitTag": [
            {
              "Key": "type",
              "Value": "0",
              "Operator": "EQUAL"
            }
          ]
        },
        "BusinessStatus": "ACTIVE"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeBackupPlans#workbench-doc-change-demo) for a complete list.
