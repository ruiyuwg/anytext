Queries the automatic backup policy of a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeBackupPolicy)

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

polardb:DescribeBackupPolicy

get

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/api-polardb-2017-08-01-describedbclusters) operation to query the details of all clusters in a region, including the cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PreferredBackupPeriod

string

The backup cycle. Valid values:

-   Monday
    
-   Tuesday
    
-   Wednesday
    
-   Thursday
    
-   Friday
    
-   Saturday
    
-   Sunday
    

**Note**

This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.

Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday

DataLevel1BackupRetentionPeriod

string

The retention period of level-1 backups. Valid values: 3 to 14. Unit: days.

**Note**

This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.

7

RequestId

string

The request ID.

EADFCE0F-9FB5-4685-B395-1440B\*\*\*\*\*\*

PreferredBackupTime

string

The time range when an automatic backup is performed. The time is in the `HH:mmZ-HH:mmZ` format. The time is displayed in UTC.

07:00Z-08:00Z

BackupRetentionPolicyOnClusterDeletion

string

The policy to retain backups when you delete a cluster:

-   **ALL**: Retains all backups permanently.
    
-   **LATEST**: Retains the last backup permanently.
    
-   **NONE** (Default): Does not retain backup sets.
    

NONE

PreferredNextBackupTime

string

The time of the next backup. The time is in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.

2020-11-16T07:30Z

DataLevel2BackupRetentionPeriod

string

The retention period of level-2 backups. Valid values:

-   0: The level-2 backup feature is disabled.
    
-   30 to 7300: The retention period of level-2 backups in days.
    
-   \-1: The level-2 backups are permanently retained.
    

**Note**

-   -   When you create a cluster, the default value is **0**. This means the level-2 backup feature is disabled.
        
-   -   This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
        

0

BackupFrequency

string

The backup frequency. Valid values:

-   **Normal** (Default): Standard backup. A backup is performed once a day.
    
-   **2/24H**: Enhanced backup. A backup is performed every 2 hours.
    
-   **3/24H**: Enhanced backup. A backup is performed every 3 hours.
    
-   **4/24H**: Enhanced backup. A backup is performed every 4 hours.
    

**Note**

-   If you enable enhanced backup, all backups that are completed within 24 hours are retained. For backups that are completed more than 24 hours ago, the system retains only the first backup that is completed after 00:00 every day. Other backups are deleted.
    
-   If you enable enhanced backup, the **PreferredBackupPeriod** parameter is automatically set to all days of the week (Monday to Sunday).
    

Normal

DataLevel1BackupFrequency

string

The backup frequency. Valid values:

-   **Normal** (Default): Standard backup. A backup is performed once a day.
    
-   **2/24H**: High-frequency backup. A backup is performed every 2 hours.
    
-   **3/24H**: High-frequency backup. A backup is performed every 3 hours.
    
-   **4/24H**: High-frequency backup. A backup is performed every 4 hours.
    

**Note**

-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
-   -   This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
-   -   This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
        

Normal

DataLevel1BackupPeriod

string

The cycle of a level-1 backup. Valid values:

-   **Monday**
    
-   **Tuesday**
    
-   **Wednesday**
    
-   **Thursday**
    
-   **Friday**
    
-   **Saturday**
    
-   **Sunday**
    

**Note**

-   -   Select at least two days. Separate multiple values with commas (,).
        
-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
-   -   This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
-   -   This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
        

Monday,Tuesday

DataLevel1BackupTime

string

The time range when an automatic backup is performed. The time is in the `hh:mmZ-hh:mmZ` format and is displayed in UTC. The specified time range must be a 1-hour interval on the hour, such as `14:00Z-15:00Z`.

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
    
-   This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
    

15:00Z-16:00Z

DataLevel2BackupPeriod

string

The cycle of a level-2 backup. Valid values:

-   **Monday**
    
-   **Tuesday**
    
-   **Wednesday**
    
-   **Thursday**
    
-   **Friday**
    
-   **Saturday**
    
-   **Sunday**
    

**Note**

-   -   Select at least two days. Separate multiple values with commas (,).
        
-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
-   -   This parameter is not supported if the cross-region backup feature is unavailable in the region where your PolarDB for MySQL cluster resides. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
-   -   This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
        

Monday,Tuesday

DataLevel2BackupAnotherRegionRetentionPeriod

string

The retention period of cross-region level-2 backups. Valid values:

-   **0**: The level-2 backup feature is disabled.
    
-   **30 to 7300**: The retention period of level-2 backups in days.
    
-   **\-1**: The level-2 backups are permanently retained.
    

**Note**

-   -   When you create a cluster, the default value is **0**. This means the cross-region backup feature for level-2 backups is disabled.
        
-   -   This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.
        

30

DataLevel2BackupAnotherRegionRegion

string

The destination region of the cross-region level-2 backup. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).

**Note**

This parameter is not recommended if the advanced backup feature is enabled. Use the AdvancedDataPolicies parameter instead.

cn-hangzhou

BackupPolicyLevel

string

The level of the backup policy. Valid values:

-   **Normal**: standard backup
    
-   **Advanced**: advanced backup
    

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
    

Normal

AdvancedPolicyOption

string

The advanced backup policy option. Valid values:

-   **enable**: Advanced backup is enabled.
    
-   **disable**: Advanced backup is disabled. You can enable it.
    
-   **notSupport**: Advanced backup is not supported.
    

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
    

disable

AdvancedDataPolicies

object

AdvancedDataPolicy

array<object>

The details of the advanced backup policy.

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
    

object

PolicyId

string

The ID of the backup policy.

71930ac2e9f15e41615e10627c\*\*\*\*\*\*

RetentionType

string

The retention period type of the backup set. The return value is:

-   **never**: permanent retention
    
-   **delay**: retention for a specified number of days
    

delay

RetentionValue

string

The number of days to retain the backup.

7

FilterType

string

The filter type for the advanced policy. The return value is:

-   **crontab**: recurring schedule
    
-   **event**: event-triggered schedule
    

crontab

FilterKey

string

The scheduling type. The return value is:

-   **dayOfWeek**: weekly schedule
    
-   **dayOfMonth**: monthly schedule
    
-   **dayOfYear**: yearly schedule
    
-   **backupInterval**: fixed-interval schedule
    

**Note**

This parameter is returned only when FilterType is set to **crontab**.

dayOfWeek

FilterValue

string

The backup cycle.

1,2,3,4,5,6,7

SrcType

string

The source type of the backup policy. The return value is:

-   **db**: database cluster
    
-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: cross-region level-2 backup
    

level1

SrcRegion

string

The source region of the backup policy.

cn-beijing

DestType

string

The destination type of the backup policy. The return value is:

-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: cross-region level-2 backup
    

level1

DestRegion

string

The destination region of the backup policy.

cn-hangzhou

DumpAction

string

The method to convert a level-1 backup to a level-2 backup. The return value is:

-   **copy**: copy
    

copy

AutoCreated

boolean

Indicates whether the backup policy is automatically generated by the system. The return value is:

-   **true**: The policy is generated by the system.
    
-   **false**: The policy is a custom policy.
    

true

OnlyPreserveOneEachHour

boolean

The hourly backup retention policy. Valid values:

-   **true**: Retain only the earliest backup set that is created within the hour.
    
-   **false**: Retain all backup sets.
    

true

OnlyPreserveOneEachDay

boolean

The 24-hour backup retention policy.

-   **true**: Retain only the first backup set of the day if the backup set is created more than 24 hours ago.
    
-   **false**: Retain all backup sets.
    

true

BakType

string

The backup type. The return value is:

-   **F**: full backup
    

F

## Examples

Success response

`JSON` format

```
{
  "PreferredBackupPeriod": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday",
  "DataLevel1BackupRetentionPeriod": "7",
  "RequestId": "EADFCE0F-9FB5-4685-B395-1440B******",
  "PreferredBackupTime": "07:00Z-08:00Z",
  "BackupRetentionPolicyOnClusterDeletion": "NONE",
  "PreferredNextBackupTime": "2020-11-16T07:30Z",
  "DataLevel2BackupRetentionPeriod": "0",
  "BackupFrequency": "Normal",
  "DataLevel1BackupFrequency": "Normal",
  "DataLevel1BackupPeriod": "Monday,Tuesday",
  "DataLevel1BackupTime": "15:00Z-16:00Z",
  "DataLevel2BackupPeriod": "Monday,Tuesday",
  "DataLevel2BackupAnotherRegionRetentionPeriod": "30",
  "DataLevel2BackupAnotherRegionRegion": "cn-hangzhou",
  "BackupPolicyLevel": "Normal",
  "AdvancedPolicyOption": "disable",
  "AdvancedDataPolicies": {
    "AdvancedDataPolicy": [
      {
        "PolicyId": "71930ac2e9f15e41615e10627c******\n",
        "RetentionType": "delay",
        "RetentionValue": "7",
        "FilterType": "crontab",
        "FilterKey": "dayOfWeek",
        "FilterValue": "1,2,3,4,5,6,7",
        "SrcType": "level1",
        "SrcRegion": "cn-beijing",
        "DestType": "level1",
        "DestRegion": "cn-hangzhou",
        "DumpAction": "copy",
        "AutoCreated": true,
        "OnlyPreserveOneEachHour": true,
        "OnlyPreserveOneEachDay": true,
        "BakType": "F"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeBackupPolicy#workbench-doc-change-demo) for a complete list.
