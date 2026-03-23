Modifies the backup policy of a MongoDB instance.

## Operation description

Geo-redundancy is available only for replica set instances and sharded cluster instances that use cloud disks.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyBackupPolicy)

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

dds:ModifyBackupPolicy

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

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

The instance ID.

dds-bp16cb162771\*\*\*\*

PreferredBackupTime

string

No

The time range to perform a backup. Specify the time in the _HH:mm_Z-_HH:mm_Z format. The time is displayed in Coordinated Universal Time (UTC).

**Note**

The time range must be 1 hour.

03:00Z-04:00Z

PreferredBackupPeriod

string

No

The backup cycle. Valid values:

-   **Monday**
    
-   **Tuesday**
    
-   **Wednesday**
    
-   **Thursday**
    
-   **Friday**
    
-   **Saturday**
    
-   **Sunday**
    

**Important**

To ensure data security, back up the MongoDB instance at least twice a week.

**Note**

To specify multiple backup cycles, separate them with commas (,).

Monday,Wednesday,Friday,Sunday

BackupRetentionPeriod

integer

No

The number of days to retain full backups.

**Note**

-   For instances that were created before September 10, 2021, the default retention period is 7 days.
    
-   For instances that are created after September 10, 2021, the default retention period is 30 days.
    

30

EnableBackupLog

integer

No

Specifies whether to enable log backup. Valid values:

-   **0**: Disable log backup. This is the default value.
    
-   **1**: Enable log backup.
    

**Important**

You cannot disable log backup for sharded cluster instances.

0

LogBackupRetentionPeriod

integer

No

The number of days to retain log backups. Default value: 7.

Valid values: 7 to 730.

7

SnapshotBackupType

string

No

The snapshot backup type. Valid values:

-   **Flash**: second-level backup.
    
-   **Standard**: conventional backup. This is the default value.
    

Standard

BackupInterval

string

No

The frequency of high-frequency backups. Valid values:

-   **\-1**: High-frequency backup is disabled.
    
-   **30**: every 30 minutes.
    
-   **60**: every 1 hour.
    
-   **120**: every 2 hours.
    
-   **180**: every 3 hours.
    
-   **240**: every 4 hours.
    
-   **360**: every 6 hours.
    
-   **480**: every 8 hours.
    
-   **720**: every 12 hours.
    

**Note**

-   If you set **SnapshotBackupType** to **Standard**, the value of this parameter is -1.
    
-   High-frequency backup takes effect only if you set **SnapshotBackupType** to **Flash** and set this parameter to a value greater than 0.
    

\-1

HighFrequencyBackupRetention

integer

No

The number of days to retain high-frequency backups. Before you specify this parameter, you must set the BackupInterval parameter. The default retention period is 1 day.

1

BackupRetentionPolicyOnClusterDeletion

integer

No

The policy to retain backups when you release the instance.

-   0: All backup sets of the instance are deleted when the instance is released.
    
-   1: An automatic backup is performed when the instance is released, and this backup is retained for a long time.
    
-   2: An automatic backup is performed when the instance is released, and all backup sets of the instance are retained for a long time.
    

For more information, see [Long-term backup retention](/help/en/mongodb/user-guide/retain-backups-for-a-long-time).

2

CrossBackupType

string

No

The policy for geo-redundant backups. Valid values:

-   update: Modify the geo-redundancy policy.
    
-   delete: Delete the geo-redundancy policy.
    

**Note**

This parameter is required if you enable geo-redundancy.

update

SrcRegion

string

No

The region ID of the instance.

**Note**

-   This parameter is required if you restore a deleted instance.
    
-   This parameter is required if you enable geo-redundancy.
    

cn-beijing

DestRegion

string

No

The region ID of the geo-redundant backup.

**Note**

This parameter is required if you enable geo-redundancy.

cn-hangzhou

CrossRetentionType

string

No

The retention policy for geo-redundant backups. Valid values:

-   delay: Retain the backup for a specified period.
    
-   never: Retain the backup permanently.
    

**Note**

This parameter is required if you enable geo-redundancy.

delay

CrossRetentionValue

integer

No

The number of days to retain geo-redundant backups. Valid values: 3 to 1825.

**Note**

-   This parameter is required if you enable geo-redundancy.
    
-   This parameter is required if you set CrossRetentionType to delay.
    

7

CrossBackupPeriod

string

No

The days of the week to perform geo-redundant backups. Valid values:

1.  Monday
    
2.  Tuesday
    
3.  Wednesday
    
4.  Thursday
    
5.  Friday
    
6.  Saturday
    
7.  Sunday
    

**Note**

This parameter is required if you enable geo-redundancy.

-   To specify multiple days, separate them with commas (,).
    
-   If you set the backup method to conventional backup, the days of the week specified by this parameter must be a subset of the days of the week specified by PreferredBackupPeriod.
    

Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday

EnableCrossLogBackup

integer

No

Specifies whether to enable cross-region log backup. Valid values:

**Note**

This parameter is required if you enable geo-redundancy.

-   1: Enable cross-region log backup. This value is required for sharded cluster instances. This value is also required for replica set instances if you want to enable geo-redundant point-in-time recovery.
    
-   0: Disable cross-region log backup.
    

1

CrossLogRetentionType

string

No

The retention policy for cross-region log backups. Valid values:

-   delay: Retain the backup for a specified period.
    
-   never: Retain the backup permanently.
    

**Note**

This parameter is required if you enable geo-redundancy.

delay

CrossLogRetentionValue

integer

No

The number of days to retain cross-region log backups. Valid values: 3 to 1825. The value must be less than or equal to the value of CrossRetentionValue.

**Note**

This parameter is required if you enable geo-redundancy.

3

InstanceType

string

No

The instance type. Valid values:

-   replicate
    
-   sharding
    

**Note**

-   This parameter is required when you restore a deleted instance.
    
-   This parameter is required when you clone an instance from a geo-redundant backup.
    

replicate

PreserveOneEachHour

boolean

No

Specifies whether to enable hourly sparse backup. Valid values:

-   true: If the backup frequency is in minutes, all snapshots that are generated within the last hour are retained. For snapshots that were generated more than 1 hour ago but less than 24 hours ago, only the first snapshot that is generated after each full hour is retained.
    
-   false: All snapshots are retained within the high-frequency backup retention period.
    

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

644A359C-B871-4DD3-97B5-ED91EF5809C2

## Examples

Success response

`JSON` format

```
{
  "RequestId": "644A359C-B871-4DD3-97B5-ED91EF5809C2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidPreferredBackupPeriod.Malformed

Specified parameter PreferredBackupPeriod is not valid.

400

InvalidPreferredBackupTime.Malformed

Specified parameter PreferredBackupTime is not valid.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyBackupPolicy#workbench-doc-change-demo) for a complete list.
