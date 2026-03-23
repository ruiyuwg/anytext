Modifies a backup policy.

## Operation description

If you modify a backup policy, the modification takes effect on all data sources that are bound to the backup policy. Proceed with caution.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdatePolicyV2)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdatePolicyV2)

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

hbr:UpdatePolicyV2

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PolicyId

string

No

The ID of the backup policy.

po-000\*\*\*\*\*\*\*\*\*\*\*\*viy

PolicyName

string

No

The name of the backup policy.

Daily Local Backup + Remote Backup

PolicyDescription

string

No

The description of the backup policy.

Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.

Rules

array<object>

No

The rules in the backup policy.

Rule

object

No

The details of the rule.

RuleId

string

No

The rule ID.

rule-000\*\*\*\*\*\*\*\*\*\*\*\*rof

RuleType

string

No

The type of the rule. Each backup policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type. Valid values:

-   **BACKUP**: backup rule
-   **TRANSITION**: lifecycle rule
-   **REPLICATION**: replication rule

BACKUP

Schedule

string

No

This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup schedule settings. Formats:

-   `I|{startTime}|{interval}`: The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
    
    -   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
    -   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, `PT1H` specifies an interval of 1 hour. `P1D` specifies an interval of one day.
-   `C|{startTime}|{crontab}`: The system runs backup jobs at a point in time that is specified in the {startTime} parameter based on the {crontab} expression. For example, C|1631685600|0 0 2 ?\* 3,5,7 indicates that the system runs backup jobs at 02:00:00 every Tuesday, Thursday, and Saturday from14:00:00 on September 15, 2021.\`\`
    
    -   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
    -   crontab: the crontab expression. For example, 0 0 2 ?\* 3,5,7 indicates 02:00:00 every Tuesday, Thursday, and Saturday.\`\`

The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed.

I|1648647166|P1D

BackupType

string

No

This parameter is required only if the **RuleType** parameter is set to **BACKUP**. This parameter specifies the backup type. Valid value: **COMPLETE**, which indicates full backup.

COMPLETE

Retention

long

No

This parameter is required only if the **RuleType** parameter is set to **TRANSITION** or **REPLICATION**.

-   If the **RuleType** parameter is set to **TRANSITION**, this parameter specifies the retention period of the backup data. Minimum value: 1. Unit: days.
-   If the **RuleType** parameter is set to **REPLICATION**, this parameter specifies the retention period of remote backups. Minimum value: 1. Unit: days.

7

ReplicationRegionId

string

No

This parameter is required only if the **RuleType** parameter is set to **REPLICATION**. This parameter specifies the ID of the destination region.

cn-shanghai

ArchiveDays

long

No

This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the time when data is dumped from a backup vault to an archive vault. Unit: days.

90

ColdArchiveDays

long

No

This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the time when data is dumped from a backup vault to a cold archive vault. Unit: days.

365

VaultId

string

No

This parameter is required only if the RuleType parameter is set to BACKUP. The ID of the backup vault.

v-0001\*\*\*\*\*\*\*\*\*\*\*\*aseg

RetentionRules

array<object>

No

This parameter is required only if the **RuleType** parameter is set to **TRANSITION**. This parameter specifies the special retention rules.

object

No

The special retention rule.

AdvancedRetentionType

string

No

The type of the special retention rule. Valid values:

-   **WEEKLY**: retains weekly backups
-   **MONTHLY**: retains monthly backups
-   **YEARLY**: retains yearly backups

YEARLY

WhichSnapshot

long

No

Specifies which backup is retained based on the special retention rule. Only the first backup can be retained.

1

Retention

long

No

The special retention period of backups. Minimum value: 1. Unit: days.

365

KeepLatestSnapshots

long

No

Specifies whether to enable the feature of keeping at least one backup version. Valid values:

-   0: The feature is disabled.
-   1: The feature is enabled.

1

DataSourceFilters

array<object>

No

This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the data source filter rule.

object

No

SourceType

string

No

The type of the data source. Valid values:

-   **UDM\_ECS**: Elastic Compute Service (ECS) instance This type of data source is supported only if the **RuleType** parameter is set to **UDM\_ECS\_ONLY**.
-   **OSS**: Object Storage Service (OSS) bucket This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
-   **NAS**: File Storage NAS (NAS) file system This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
-   **ECS\_FILE**: ECS file This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.
-   **OTS**: Tablestore instance This type of data source is supported only if the **RuleType** parameter is set to **STANDARD**.

UDM\_ECS

DataSourceIds

array

No

This parameter is deprecated.

string

No

This parameter is deprecated.

deprecated

TagFilters

array<object>

No

This parameter is required only if the **RuleType** parameter is set to **TAG**. This parameter specifies the resource tag filter rule.

object

No

Key

string

No

The tag key.

env

Value

string

No

The tag value. If you leave this parameter empty, the value is any value.

prod

Operator

string

No

The tag-based matching rule. Valid values:

-   **EQUAL**: Both the tag key and tag value are matched.
-   **NOT**: The tag key is matched and the tag value is not matched.

EQUAL

Immutable

boolean

No

This parameter is required only if the **PolicyType** parameter is set to **UDM\_ECS\_ONLY**. This parameter specifies whether to enable the immutable backup feature.

true

## Response parameters

Parameter

Type

Description

Example

object

UpdatePolicyResponse

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-06

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2025-03-06#workbench-doc-change-demo)

2024-11-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2024-11-13#workbench-doc-change-demo)

2024-09-25

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2024-09-25#workbench-doc-change-demo)

2024-04-18

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2024-04-18#workbench-doc-change-demo)

2024-02-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2024-02-21#workbench-doc-change-demo)

2023-03-29

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UpdatePolicyV2?updateTime=2023-03-29#workbench-doc-change-demo)
