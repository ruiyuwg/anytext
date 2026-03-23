Creates a backup policy.

## Operation description

A backup policy contains the information required for a backup. When a backup policy is executed, a backup job is generated to record the backup progress and result. If the backup job is successful, a backup snapshot is created. You can use the backup snapshot to create a restore job.

-   A backup policy can be applied to multiple types of data sources. Currently, only Elastic Compute Service (ECS) instance backup is supported.
    
-   A backup policy can have only one backup cycle with a fixed interval.
    
-   A backup policy can back up data to only one backup vault.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreatePolicyV2)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/CreatePolicyV2)

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

hbr:CreatePolicyV2

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

PolicyName

string

No

The policy name.

每天本地备份 + 异地备份

PolicyType

string

No

The type of the backup policy. Valid values:

-   **STANDARD**: A standard backup policy. This policy type supports data sources other than ECS instance backup.
    
-   **UDM\_ECS\_ONLY**: An ECS instance backup policy. This policy type supports only ECS instance backup.
    

If you do not specify this parameter, Cloud Backup automatically sets the policy type based on whether a backup vault is specified in the policy rules:

-   If a backup vault is specified: **STANDARD**
    
-   If no backup vault is specified: **UDM\_ECS\_ONLY**
    

STANDARD

PolicyDescription

string

No

The description of the backup policy.

每天早上10点备份一次，异地备份到上海。

Rules

array<object>

No

The list of policy rules.

array<object>

No

The policy rule.

RuleType

string

Yes

The type of the rule. Each policy must have at least one rule of the **BACKUP** type and only one rule of the **TRANSITION** type.

-   **BACKUP**: A backup rule.
    
-   **TRANSITION**: A lifecycle rule.
    
-   **REPLICATION**: A replication rule.
    
-   **TAG**: A tag-based rule for linking resources.
    

BACKUP

Schedule

string

No

This parameter is required only when **RuleType** is set to **BACKUP**. The backup schedule. The format is as follows:

-   I|{startTime}|{interval}: This format indicates that a backup job is performed at a fixed interval of {interval}, starting from `{startTime}`. For example, `I|1631685600|P1D` indicates that a backup job is performed every day, starting from 2021-09-15 14:00:00.
    
    -   startTime: The start time of the backup. This value is a UNIX timestamp. Unit: seconds.
        
    -   interval: The backup interval. The value must be in the ISO 8601 format. For example, `PT1H` indicates an interval of one hour. `P1D` indicates an interval of one day.
        
-   C|{startTime}|{crontab}: This format indicates that a backup job is performed based on a cron expression {crontab}, starting from `{startTime}`. For example, `C|1631685600|0 0 2 ? * 3,5,7` indicates that a backup job is performed at 02:00:00 on every Tuesday, Thursday, and Saturday, starting from 2021-09-15 14:00:00.
    
    -   startTime: The start time of the backup. This value is a UNIX timestamp. Unit: seconds.
        
    -   crontab: The cron expression. For example, `0 0 2 ? * 3,5,7` indicates 02:00:00 on every Tuesday, Thursday, and Saturday.
        

Backup jobs that are overdue are not performed. If the last backup job is not complete, the next backup job is not triggered.

I|1648647166|P1D

BackupType

string

No

This parameter is required only when **RuleType** is set to **BACKUP**. The backup type. Set the value to **COMPLETE**. This value indicates a full backup.

COMPLETE

Retention

integer

No

This parameter is required only when **RuleType** is set to **BACKUP**, **TRANSITION**, or **REPLICATION**.

-   If **RuleType** is set to **BACKUP**: The retention period of the backup. The retention period has a lower priority than the retention period in a rule where **RuleType** is set to **TRANSITION**. The value must be an integer from 1 to 364635. Unit: days.
    
-   If **RuleType** is set to **TRANSITION**: The retention period of the backup. The value must be an integer from 1 to 364635. Unit: days.
    
-   If **RuleType** is set to **REPLICATION**: The retention period of the geo-redundant backup. The value must be an integer from 1 to 364635. Unit: days.
    

7

ReplicationRegionId

string

No

This parameter is required only when **RuleType** is set to **REPLICATION**. The ID of the destination region for replication.

cn-shanghai

RetentionRules

array<object>

No

This parameter is required only when **RuleType** is set to **TRANSITION**. The special retention rules.

object

No

The special retention rule.

AdvancedRetentionType

string

No

The type of the special retention rule. Valid values:

-   **DAILY**: Retains the first backup of each day.
    
-   **WEEKLY**: Retains the first backup of each week.
    
-   **MONTHLY**: Retains the first backup of each month.
    
-   **YEARLY**: Retains the first backup of each year.
    

YEARLY

WhichSnapshot

integer

No

Specifies which backup is retained. This parameter is applicable to the first backup. Set the value to 1.

1

Retention

integer

No

The special retention period of the backup. The value must be an integer that is greater than or equal to 1. Unit: days.

730

VaultId

string

No

This parameter is required only when RuleType is set to BACKUP. The ID of the backup vault.

v-0001\*\*\*\*\*\*\*\*\*\*\*\*aseg

KeepLatestSnapshots

integer

No

Specifies whether to retain the latest backup version.

-   0: Does not retain the latest backup version.
    
-   1: Retains the latest backup version.
    

1

Immutable

boolean

No

This parameter is valid only when **PolicyType** is set to **UDM\_ECS\_ONLY**. This parameter specifies whether to enable backup locking.

true

DataSourceFilters

array<object>

No

This parameter is required only when **RuleType** is set to **TAG**. The filter rules for data sources.

object

No

SourceType

string

No

The type of the data source. Valid values:

-   **UDM\_ECS**: ECS instance backup. This data source type is supported only when **PolicyType** is set to **UDM\_ECS\_ONLY**.
    
-   **OSS**: Object Storage Service (OSS) backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
    
-   **NAS**: NAS backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
    
-   **ECS\_FILE**: ECS file backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
    
-   **OTS**: Tablestore backup. This data source type is supported only when **PolicyType** is set to **STANDARD**.
    

UDM\_ECS

DataSourceIds

array

No

This parameter is deprecated.

string

No

This parameter is deprecated.

已废弃。

TagFilters

array<object>

No

This parameter is required only when **RuleType** is set to **TAG**. The filter rules for resource tags.

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

The tag value. If you leave this parameter empty, all tag values are matched.

prod

Operator

string

No

The tag matching rule. Valid values:

-   **EQUAL**: Matches the tag key and tag value.
    
-   **NOT**: Matches the tag key but not the tag value.
    

EQUAL

## Response elements

**Element**

**Type**

**Description**

**Example**

object

CreatePolicyResponse

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

The message that is returned. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F

PolicyId

string

The policy ID.

po-000000zemnuyx2li3y9y

## Examples

Success response

`JSON` format

```
{
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "RequestId": "EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F",
  "PolicyId": "po-000000zemnuyx2li3y9y"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/CreatePolicyV2#workbench-doc-change-demo) for a complete list.
