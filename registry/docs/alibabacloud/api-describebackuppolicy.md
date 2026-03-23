Queries the backup policy of a MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeBackupPolicy)

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

dds:DescribeBackupPolicy

get

\*dbinstance

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

InstanceType

string

No

The instance type.

-   replicate: replica set instance
    
-   sharding: sharded cluster instance
    

sharding

SrcRegion

string

No

The region where the instance is located.

cn-beijing

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

The returned data.

PreferredBackupPeriod

string

The backup cycle. Valid values:

-   **Monday**: Monday.
    
-   **Tuesday**: Tuesday.
    
-   **Wednesday**: Wednesday.
    
-   **Thursday**: Thursday.
    
-   **Friday**: Friday.
    
-   **Saturday**: Saturday.
    
-   **Sunday**: Sunday.
    

Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday

RequestId

string

The request ID.

5A9464CA-F7DC-5434-90B1-DF7F197C\*\*\*\*

PreferredBackupTime

string

The backup time in the format of _HH:mm_Z-_HH:mm_Z (UTC time).

09:00Z-10:00Z

BackupRetentionPeriod

string

The backup retention period in days.

30

PreferredNextBackupTime

string

The next regular backup time in the format of _yyyy-mm-dd_t_hh:mm_z (UTC time).

2024-06-19T19:11Z

EnableBackupLog

integer

Indicates whether log backup is enabled. Valid values:

-   **0**: disabled (default).
    
-   **1**: enabled.
    

1

LogBackupRetentionPeriod

integer

The log backup retention period in days. Valid values: 7 to 730.

7

SnapshotBackupType

string

The snapshot backup type. Valid values:

-   **Flash**: second-level backup.
    
-   **Standard**: regular backup (default).
    

Standard

BackupInterval

integer

The high-frequency backup frequency. Valid values:

-   **\-1**: high-frequency backup is disabled.
    
-   **15**: every 15 minutes.
    
-   **30**: every 30 minutes.
    
-   **60**: every 1 hour.
    
-   **120**: every 2 hours.
    
-   **180**: every 3 hours.
    
-   **240**: every 4 hours.
    
-   **360**: every 6 hours.
    
-   **480**: every 8 hours.
    
-   **720**: every 12 hours.
    

\-1

HighFrequencyBackupRetention

string

The high-frequency backup retention period in days.

1

BackupRetentionPolicyOnClusterDeletion

integer

The backup retention policy.

1.  0: All backup sets of the instance are immediately deleted when the instance is released
    
2.  1: The instance is automatically backed up when it is released, and the backup set is retained for a long time
    
3.  2: The instance is automatically backed up when it is released, and all backup sets of the cluster are retained for a long time
    

For more information, see [Long-term backup retention](/help/en/mongodb/user-guide/retain-backups-for-a-long-time)

0

SrcRegion

string

The region where the source instance is located.

cn-hangzhou

DestRegion

string

The region where the geo-redundancy backup is located.

cn-shenzhen

CrossRetentionType

string

The geo-redundancy backup retention type.

-   delay: retained for a period of time
    
-   never: never expires
    

delay

CrossRetentionValue

integer

The geo-redundancy backup retention period.

7

CrossBackupPeriod

string

The geo-redundancy backup retention time.

1.  Monday: Monday.
    
2.  Tuesday: Tuesday.
    
3.  Wednesday: Wednesday.
    
4.  Thursday: Thursday.
    
5.  Friday: Friday.
    
6.  Saturday: Saturday.
    
7.  Sunday: Sunday.
    

**Note**

Required for geo-redundancy backup

Monday

EnableCrossLogBackup

integer

Indicates whether cross-region log backup is enabled.

**Note**

Required for geo-redundancy backup

-   1: enabled (must be 1 for sharded cluster instances)
    
-   0: disabled (must be 0 for replica set instances)
    

1

CrossLogRetentionType

string

The geo-redundancy log backup retention type.

-   delay: retained for a period of time
    
-   never: never expires
    

delay

CrossLogRetentionValue

integer

The geo-redundancy log backup retention period.

7

PreserveOneEachHour

boolean

Indicates whether sparse backup within an hour is enabled.

-   true: When the backup frequency is at the minute level, all snapshots within 1 hour from the current time are retained. For snapshots that are more than 1 hour but within 24 hours from the current time, only the first snapshot after each hour is retained.
    
-   false: Sparse backup within an hour is disabled: all snapshots within the high-frequency backup retention period are retained.
    

## Examples

Success response

`JSON` format

```
{
  "PreferredBackupPeriod": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
  "RequestId": "5A9464CA-F7DC-5434-90B1-DF7F197C****",
  "PreferredBackupTime": "09:00Z-10:00Z",
  "BackupRetentionPeriod": "30",
  "PreferredNextBackupTime": "2024-06-19T19:11Z",
  "EnableBackupLog": 1,
  "LogBackupRetentionPeriod": 7,
  "SnapshotBackupType": "Standard",
  "BackupInterval": -1,
  "HighFrequencyBackupRetention": "1",
  "BackupRetentionPolicyOnClusterDeletion": 0,
  "SrcRegion": "cn-hangzhou",
  "DestRegion": "cn-shenzhen",
  "CrossRetentionType": "delay",
  "CrossRetentionValue": 7,
  "CrossBackupPeriod": "Monday",
  "EnableCrossLogBackup": 1,
  "CrossLogRetentionType": "delay",
  "CrossLogRetentionValue": 7,
  "PreserveOneEachHour": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeBackupPolicy#workbench-doc-change-demo) for a complete list.
