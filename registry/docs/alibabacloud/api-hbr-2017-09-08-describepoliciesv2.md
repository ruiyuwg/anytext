Queries one or more policies.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribePoliciesV2)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribePoliciesV2)

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

hbr:DescribePoliciesV2

list

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

NextToken

string

No

The token that is used to retrieve the next page of policies.

caeba0bbb2be03f84eb48b699f0a

MaxResults

integer

No

The number of entries to return on each page.

Valid values: 10 to 100. Default value: 10.

10

PolicyId

string

No

The policy ID.

po-000\*\*\*\*\*\*\*\*\*\*\*\*2l6

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DescribePoliciesResponse

Policies

array<object>

The list of policies.

object

The details of the policy.

CreatedTime

integer

The time when the policy was created. This value is a UNIX timestamp. Unit: seconds.

1650248136

UpdatedTime

integer

The time when the policy was updated. This value is a UNIX timestamp. Unit: seconds.

1662080404

PolicyId

string

The policy ID.

po-000\*\*\*\*\*\*\*\*\*\*\*\*bkz

PolicyName

string

The policy name.

Daily Local Backup + Remote Backup

PolicyDescription

string

The description of the policy.

Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.

Rules

array<object>

The list of policy rules.

object

The details of the policy rule.

RuleId

string

The rule ID.

rule-000\*\*\*\*\*\*\*\*\*\*\*\*f1e

RuleType

string

The type of the rule. Each policy must have at least one rule of the **BACKUP** type and can have only one rule of the **TRANSITION** type. Valid values:

-   **BACKUP**: the backup rule.
    
-   **TRANSITION**: the lifecycle rule.
    
-   **REPLICATION**: the replication rule.
    

BACKUP

Schedule

string

This parameter is required only when **RuleType** is set to **BACKUP**. The backup schedule. The format is `I|{startTime}|{interval}`. The system runs a backup job at a specified interval, starting from the specified time. The system does not run a backup job to compensate for a missed job. If the last backup job is not complete, the next backup job is not triggered. For example, `I|1631685600|P1D` indicates that a backup job is run every day, starting from 2021-09-15 14:00:00.

-   startTime: The time to start the backup. This value is a UNIX timestamp. Unit: seconds.
    
-   interval: The backup interval. The value must be in the ISO 8601 standard. For example, PT1H indicates an interval of one hour. P1D indicates an interval of one day.
    

I|1648647166|P1D

BackupType

string

This parameter is required only when **RuleType** is set to **BACKUP**. The backup type. The value **COMPLETE** indicates a full backup.

COMPLETE

VaultId

string

This parameter is required only when RuleType is set to BACKUP. The ID of the backup vault.

v-000\*\*\*\*\*\*\*\*\*\*\*\*\*\*kgm

ReplicationRegionId

string

This parameter is required only when **RuleType** is set to **REPLICATION**. The ID of the destination region for replication.

cn-shanghai

Retention

integer

This parameter is required only when **RuleType** is set to **TRANSITION** or **REPLICATION**.

-   If **RuleType** is set to **TRANSITION**: the retention period of the backup. The minimum value is 1. Unit: days.
    
-   If **RuleType** is set to **REPLICATION**: the retention period of the remote backup. The minimum value is 1. Unit: days.
    

7

RetentionRules

array<object>

This parameter is required only when **RuleType** is set to **TRANSITION**. The list of special retention rules.

object

The special retention rule.

AdvancedRetentionType

string

The type of the special retention rule. Valid values:

-   **WEEKLY**: weekly backups
    
-   **MONTHLY**: monthly backups
    
-   **YEARLY**: yearly backups
    

YEARLY

WhichSnapshot

integer

Specifies which backup is retained. This parameter is valid only for the first backup. The value must be 1.

1

Retention

integer

The special retention period of the backup. The minimum value is 1. Unit: days.

730

ArchiveDays

integer

This parameter is required only when **RuleType** is set to **TRANSITION**. The number of days before a backup is converted to an archive backup. Unit: days.

30

KeepLatestSnapshots

integer

Specifies whether to retain at least one backup version. Valid values:

-   **0**: No.
    
-   **1**: Yes.
    

1

DataSourceFilters

array<object>

This parameter is required only when **RuleType** is set to **TAG**. The filter rules for data sources.

object

SourceType

string

The type of the data source. Valid values:

-   **UDM\_ECS**: ECS instance backup
    
-   **OSS**: OSS backup
    
-   **NAS**: Alibaba Cloud NAS backup
    
-   **ECS\_FILE**: ECS file backup
    
-   **OTS**: Tablestore backup
    

UDM\_ECS

DataSourceIds

array

This parameter is deprecated.

string

This parameter is deprecated.

Deprecated.

TagFilters

array<object>

This parameter is required only when **RuleType** is set to **TAG**. The filter rules for resource tags.

object

Key

string

The tag key.

env

Value

string

The tag value. If you leave this parameter empty, all tag values are matched.

prod

Operator

string

The tag matching rule. Valid values:

-   **EQUAL**: Matches the tag key and tag value.
    
-   **NOT**: Matches the tag key but not the tag value.
    

EQUAL

Immutable

boolean

This parameter is valid only when **PolicyType** is set to**UDM\_ECS\_ONLY**. This parameter specifies whether to enable backup locking.

true

PolicyBindingCount

integer

The number of data sources that are bound to the policy.

5

PolicyType

string

The type of the policy. Valid values:

-   **STANDARD**: a standard backup policy. This policy type supports all data sources except ECS instance backup.
    
-   **UDM\_ECS\_ONLY**: an ECS instance backup policy. This policy type supports only ECS instance backup.
    

STANDARD

BusinessStatus

string

The business status.

ACTIVE

NextToken

string

The token that is used to retrieve the next page of policies.

caeba0bbb2be03f84eb48b699f0a

MaxResults

integer

The number of entries returned on each page.

Valid values: 10 to 100. Default value: 10.

10

TotalCount

integer

The total number of records.

12

Success

boolean

Indicates whether the request was successful. Valid values:

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request was successful, \`successful\` is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Success response

`JSON` format

```
{
  "Policies": [
    {
      "CreatedTime": 1650248136,
      "UpdatedTime": 1662080404,
      "PolicyId": "po-000************bkz",
      "PolicyName": "Daily Local Backup + Remote Backup\n",
      "PolicyDescription": "Data is backed up at 10:00:00 every day and replicated to the China (Shanghai) region for geo-redundancy.\n",
      "Rules": [
        {
          "RuleId": "rule-000************f1e",
          "RuleType": "BACKUP",
          "Schedule": "I|1648647166|P1D",
          "BackupType": "COMPLETE",
          "VaultId": "v-000**************kgm",
          "ReplicationRegionId": "cn-shanghai",
          "Retention": 7,
          "RetentionRules": [
            {
              "AdvancedRetentionType": "YEARLY",
              "WhichSnapshot": 1,
              "Retention": 730
            }
          ],
          "ArchiveDays": 30,
          "KeepLatestSnapshots": 1,
          "DataSourceFilters": [
            {
              "SourceType": "UDM_ECS",
              "DataSourceIds": [
                "Deprecated.\n"
              ]
            }
          ],
          "TagFilters": [
            {
              "Key": "env",
              "Value": "prod",
              "Operator": "EQUAL"
            }
          ],
          "Immutable": true
        }
      ],
      "PolicyBindingCount": 5,
      "PolicyType": "STANDARD",
      "BusinessStatus": "ACTIVE"
    }
  ],
  "NextToken": "caeba0bbb2be03f84eb48b699f0a",
  "MaxResults": 10,
  "TotalCount": 12,
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribePoliciesV2#workbench-doc-change-demo) for a complete list.
