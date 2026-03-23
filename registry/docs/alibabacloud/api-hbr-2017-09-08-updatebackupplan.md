Updates a backup plan.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateBackupPlan)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateBackupPlan)

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

hbr:UpdateBackupPlan

update

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

PlanId

string

Yes

The ID of the backup plan.

plan-20211\*\*\*735

PlanName

string

No

The name of the backup plan.

planname

Schedule

string

No

The backup policy. Use the `I|{startTime}|{interval}` format. This specifies that a backup job runs at a recurring interval. The `{startTime}` is when the backup starts. The `{interval}` is the time between jobs. HBR does not run overdue backup jobs. If the previous backup job is not finished, the next one does not start. For example, `I|1631685600|P1D` means the backup runs once a day, starting at 14:00:00 on September 15, 2021.

-   **startTime**: The start time of the backup. This is a UNIX timestamp in seconds.
    
-   **interval**: The time interval. Use the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
    

I|1602673264|P1D

Retention

integer

No

The number of days to retain backups. The minimum value is 1.

7

Prefix

string

No

This parameter is required only when **SourceType** is set to **OSS**. This parameter specifies the prefix of objects to back up. After you specify a prefix, only objects that match the prefix are backed up.

oss-prefix

VaultId

string

No

The ID of the backup repository.

v-0006\*\*\*\*\*\*q

Detail

object

No

The details of the ECS instance backup. This is a JSON string.

-   snapshotGroup: Specifies whether to use a snapshot-consistent group. This feature is available only when all disks of the instance are Enhanced Solid-State Drives (ESSDs).
    
-   appConsistent: Specifies whether to enable application consistency. You must also configure the preScriptPath and postScriptPath parameters.
    
-   preScriptPath: The path to the pre-freeze script.
    
-   postScriptPath: The path to the post-thaw script.
    

{\\"EnableFsFreeze\\":true,\\"appConsistent\\":false,\\"postScriptPath\\":\\"\\",\\"preScriptPath\\":\\"\\",\\"snapshotGroup\\":true,\\"timeoutInSeconds\\":60}

SourceType

string

No

The type of the data source. Valid values:

-   **ECS\_FILE**: Backs up ECS files.
    
-   **OSS**: Backs up Alibaba Cloud OSS.
    
-   **NAS**: Backs up Alibaba Cloud NAS.
    
-   **OTS**: Backs up Alibaba Cloud Tablestore.
    
-   **UDM\_ECS**: Backs up an entire ECS instance.
    

ECS\_FILE

SpeedLimit

string

No

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies traffic shaping for backups. Traffic shaping helps you control backup traffic during peak business hours to avoid affecting your services. The format is `{start}|{end}|{bandwidth}`. You can specify multiple traffic shaping rules. Separate them with vertical bars (|). The time ranges of the rules cannot overlap.

-   **start**: The start hour.
    
-   **end**: The end hour.
    
-   **bandwidth**: The maximum speed. Unit: KB/s.
    

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

This parameter is required only when **SourceType** is set to **ECS\_FILE**. This parameter specifies whether to use Volume Shadow Copy Service (VSS) to define the backup path.

-   This feature is available only for Windows ECS instances.
    
-   If data changes occur in the backup source, set this parameter to `["UseVSS":true]` to ensure data consistency.
    
-   If you enable VSS, you cannot back up multiple file directories at the same time.
    

{"UseVSS":false}

UpdatePaths

boolean

No

Specifies whether to update the backup paths if the Path parameter is empty.

-   true: Updates the backup paths based on the paths specified in this call.
    
-   false: Does not update the backup paths. The backup paths that were configured when the backup plan was created are used.
    

false

Path

array

No

The backup paths.

string

No

The backup path. The value can be up to 65,536 characters in length. The following rules apply:

-   If you do not use wildcard characters (\*), you can enter up to 20 paths.
    
-   If you use wildcard characters (\*), you can enter only one path. Wildcard characters such as `/*/*` are supported.
    
-   Each path must be an absolute path.
    
-   If you use VSS, you cannot specify multiple paths, UNC paths, wildcard characters, or excluded files.
    
-   If you use a UNC path, you cannot use VSS, wildcard characters, or excluded files. If the backup source contains a UNC path, Windows Access Control Lists (ACLs) are not backed up.
    

\["/home"\]

Rule

array<object>

No

The rules of the backup plan.

object

No

DestinationRetention

integer

No

The number of days to retain the geo-redundant backup.

7

Schedule

string

No

The backup policy. Use the I|{startTime}|{interval} format. This specifies that a backup job runs at a recurring interval. The {startTime} is when the backup starts. The {interval} is the time between jobs. HBR does not run overdue backup jobs. If the previous backup job is not finished, the next one does not start. For example, I|1631685600|P1D means the backup runs once a day, starting at 14:00:00 on September 15, 2021.

startTime: The start time of the backup. This is a UNIX timestamp in seconds. interval: The time interval. Use the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.

I|1631685600|P1D

Disabled

boolean

No

Specifies whether to disable the policy.

false

Retention

integer

No

The number of days to retain backups. The minimum value is 1.

7

DoCopy

boolean

No

Specifies whether to enable geo-redundant replication.

false

DestinationRegionId

string

No

The ID of the destination region for the geo-redundant backup.

cn-shanghai

RuleName

string

No

The name of the policy.

rule-test-name

BackupType

string

No

The backup type. Set the value to **COMPLETE**. This indicates a full backup.

COMPLETE

OtsDetail

[OtsDetail](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-struct-otsdetail)

No

The details of the Tablestore instance.

KeepLatestSnapshots

integer

No

Specifies whether to permanently retain the latest backup version.

-   0: No
    
-   1: Yes
    

1

ChangeListPath

string

No

The configuration for the incremental file synchronization list. (This parameter is required only for file synchronization.)

{"dataSourceId": "ds-123456789", "path": "/changelist"}

Edition

string

No

The edition. Valid values are BASIC and STANDARD. The default value is STANDARD.

STANDARD

## Response elements

**Element**

**Type**

**Description**

**Example**

object

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
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdateBackupPlan#workbench-doc-change-demo) for a complete list.
