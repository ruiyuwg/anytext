Modifies the automatic backup policy for a PolarDB cluster.

## Operation description

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyBackupPolicy)

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

polardb:ModifyBackupPolicy

update

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

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the information about all clusters in a specific region, including cluster IDs.

pc-bp13wz9586voc\*\*\*\*

PreferredBackupTime

string

No

The time window to perform an automatic backup. Specify the time in the `hh:mmZ-hh:mmZ` format and in UTC. The time window must be one hour and start on the hour. For example, `14:00Z-15:00Z`.

15:00Z-16:00Z

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
    

**Note**

-   -   Select at least two days. Separate multiple values with commas (,).
        
    -   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

Monday,Tuesday

DataLevel1BackupRetentionPeriod

string

No

The retention period of level-1 backups. Valid values: 3 to 14. Unit: day.

**Note**

-   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
    

3

DataLevel2BackupRetentionPeriod

string

No

The retention period of level-2 backups. Valid values:

-   **0**: Disables the level-2 backup feature.
    
-   **30 to 7300**: The retention period of level-2 backups in days.
    
-   **\-1**: Level-2 backups are permanently retained.
    

**Note**

-   -   When you create a cluster, the default value is **0**, which disables the level-2 backup feature.
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

0

BackupRetentionPolicyOnClusterDeletion

string

No

Specifies whether to retain backups when you delete the cluster.

-   **ALL**: Permanently retains all backups.
    
-   **LATEST**: Permanently retains the last backup.
    
-   **NONE**: Does not retain backup sets.
    

**Note**

The default value is NONE.

NONE

BackupFrequency

string

No

The backup frequency. Valid values:

-   **Normal** (default): Standard backup. The system backs up the cluster once a day.
    
-   **2/24H**: High-frequency backup. The system backs up the cluster every 2 hours.
    
-   **3/24H**: High-frequency backup. The system backs up the cluster every 3 hours.
    
-   **4/24H**: High-frequency backup. The system backs up the cluster every 4 hours.
    

**Note**

-   -   If you enable high-frequency backup, all backups that are completed within 24 hours are retained. For backups that are more than 24 hours old, the system retains only the first backup that is completed after 00:00 each day. The other backups are deleted.
        
    -   If you enable high-frequency backup, the **PreferredBackupPeriod** parameter is automatically set to all days of the week (from Monday to Sunday).
        
    -   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

Normal

DataLevel1BackupFrequency

string

No

The backup frequency. Valid values:

-   **Normal** (default): Standard backup. The system backs up the cluster once a day.
    
-   **2/24H**: High-frequency backup. The system backs up the cluster every 2 hours.
    
-   **3/24H**: High-frequency backup. The system backs up the cluster every 3 hours.
    
-   **4/24H**: High-frequency backup. The system backs up the cluster every 4 hours.
    

**Note**

-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
    -   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

Normal

DataLevel1BackupTime

string

No

The time window to perform an automatic backup. Specify the time in the `hh:mmZ-hh:mmZ` format and in UTC. The time window must be one hour and start on the hour. For example, `14:00Z-15:00Z`.

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
    
-   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
    

15:00Z-16:00Z

DataLevel1BackupPeriod

string

No

The level-1 backup cycle. Valid values:

-   **Monday**
    
-   **Tuesday**
    
-   **Wednesday**
    
-   **Thursday**
    
-   **Friday**
    
-   **Saturday**
    
-   **Sunday**
    

**Note**

-   -   Select at least two days. Separate multiple values with commas (,).
        
    -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
    -   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

Monday,Tuesday

DataLevel2BackupPeriod

string

No

The level-2 backup cycle. Valid values:

-   **Monday**
    
-   **Tuesday**
    
-   **Wednesday**
    
-   **Thursday**
    
-   **Friday**
    
-   **Saturday**
    
-   **Sunday**
    

**Note**

-   -   Select at least two days. Separate multiple values with commas (,).
        
    -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
    -   This parameter is not supported if the region where your PolarDB for MySQL cluster is located supports the cross-region backup feature. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

Monday,Tuesday

DataLevel2BackupAnotherRegionRegion

string

No

The destination region for the cross-region level-2 backup. For more information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).

**Note**

-   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
    

cn-hangzhou

DataLevel2BackupAnotherRegionRetentionPeriod

string

No

The retention period of the cross-region level-2 backup. Valid values:

-   **0**: Disables the cross-region level-2 backup feature.
    
-   **30 to 7300**: The retention period of the cross-region level-2 backup in days.
    
-   **\-1**: The cross-region level-2 backups are permanently retained.
    

**Note**

-   -   When you create a cluster, the default value is **0**, which disables the cross-region level-2 backup feature.
        
    -   After you enable the advanced backup feature, this parameter is no longer effective. Use the AdvancedDataPolicies parameter instead.
        

30

BackupPolicyLevel

string

No

The level of the backup policy. Valid values:

-   **Normal**: Standard backup
    
-   **Advanced**: Advanced backup
    

**Note**

-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
    -   Check the \`AdvancedPolicyOption\` parameter in the response of the [DescribeBackupPolicy](/help/en/polardb/api-polardb-2017-08-01-describebackuppolicy) operation to determine if the cluster supports advanced backup. If the cluster supports advanced backup, request this feature in [Advanced backup settings](~611727~~).
        
    -   After you enable advanced backup, you **cannot** switch back to standard backup.
        

Normal

AdvancedDataPolicies

array<object>

No

The advanced backup policy.

**Note**

-   -   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) and PolarDB for PostgreSQL.
        
    -   This parameter is supported only for clusters for which \`BackupPolicyLevel\` is set to \`Advanced\`.
        

object

No

ActionType

string

No

The operation type. Valid values:

-   **CREATE**: Create
    
-   **UPDATE**: Update
    
-   **DELETE**: Delete
    

CREATE

OnlyPreserveOneEachHour

boolean

No

The retention policy for hourly backups. Valid values:

-   **true**: Retains only the earliest backup set of each hour for backups that are more than one hour old.
    
-   **false**: Retains all backup sets.
    

**Note**

This parameter cannot be modified. The value is fixed to \`true\`.

true

RetentionValue

string

No

The number of days to retain the backup.

7

BakType

string

No

The backup type. Valid values:

-   **F**: Full backup
    

**Note**

This parameter cannot be modified. The value is fixed to \`F\`.

F

FilterKey

string

No

The scheduling type. Valid values:

-   **dayOfWeek**: Weekly schedule
    
-   **dayOfMonth**: Monthly schedule
    
-   **dayOfYear**: Yearly schedule
    
-   **backupInterval**: Fixed interval schedule
    

**Note**

This parameter is required only when \`FilterType\` is set to **crontab**.

dayOfWeek

FilterValue

string

No

The backup cycle.

1,2,3,4,5,6,7

DestType

string

No

The destination type for the backup policy. Valid values:

-   **level1**: Level-1 backup
    
-   **level2**: Level-2 backup
    
-   **level2Cross**: Cross-region level-2 backup
    

level2

FilterType

string

No

The filter type for the advanced policy. Valid values:

-   **crontab**: Recurring schedule
    
-   **event**: Event-based schedule
    

crontab

SrcRegion

string

No

The source region of the backup policy.

cn-shanghai

AutoCreated

boolean

No

Indicates whether the backup policy is automatically generated by the system.

**Note**

This parameter is automatically generated. Do not specify this parameter.

false

SrcType

string

No

The source type of the backup policy. Valid values:

-   **db**: Database cluster
    
-   **level1**: Level-1 backup
    
-   **level2**: Level-2 backup
    
-   **level2Cross**: Cross-region level-2 backup
    

level1

OnlyPreserveOneEachDay

boolean

No

The retention policy for backups that are more than 24 hours old.

-   **true**: Retains only the first backup set of the day for backups that are more than 24 hours old.
    
-   **false**: Retains all backups.
    

true

DumpAction

string

No

The method to convert a level-1 backup to a level-2 backup. Valid values:

-   **copy**: Copy
    

copy

PolicyId

string

No

The ID of the backup policy. Call the [DescribeBackupPolicy](/help/en/polardb/api-polardb-2017-08-01-describebackuppolicy) operation to view the ID.

71930ac2e9f15e41615e10627c\*\*\*\*\*\*

DestRegion

string

No

The destination region of the backup policy.

cn-beijing

RetentionType

string

No

The type of the retention period for the backup set. Valid values:

-   **never**: Never expires
    
-   **delay**: Expires after a specified number of days.
    

delay

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

C5A5DF0E-5968-4DC1-882E-AC2FE7\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C5A5DF0E-5968-4DC1-882E-AC2FE7******"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDataLevel1BackupRetentionPeriod.Malformed

The specified parameter DataLevel1BackupRetentionPeriod is not valid.

The specified DataLevel1BackupRetentionPeriod parameter is invalid.

400

InvalidDataLevel2BackupRetentionPeriod.Malformed

The specified parameter DataLevel2BackupRetentionPeriod is not valid.

The specified DataLevel2BackupRetentionPeriod parameter is invalid.

400

InvalidBackupRetentionPeriod.Malformed

The specified parameter BackupRetentionPeriod is not valid.

The specified BackupRetentionPeriod parameter is invalid.

400

InvalidBackupFrequency.Malformed

The specified parameter BackupFrequency is not valid.

The specified BackupFrequency parameter is invalid.

400

InvalidPreferredBackupPeriod.Malformed

The specified parameter PreferredBackupPeriod is not valid.

The specified PreferredBackupPeriod parameter is invalid.

400

InvalidDataLevel2BackupPeriod.Malformed

The specified parameter DataLevel2BackupPeriod is not valid.

The specified DataLevel2BackupPeriod parameter is invalid.

400

InvalidDataLevel1BackupPeriod.Malformed

The specified parameter DataLevel1BackupPeriod is not valid.

The specified DataLevel1BackupPeriod parameter is invalid.

400

InvalidPreferredBackupTime.Malformed

The specified parameter PreferredBackupTime is not valid.

The specified PreferredBackupTime parameter is invalid.

400

InvalidDataLevel1BackupTime.Malformed

The specified parameter DataLevel1BackupTime is not valid.

The specified DataLevel1BackupTime parameter is invalid.

400

InvalidDataLevel1BackupFrequency.Malformed

The specified parameter DataLevel1BackupFrequency is not valid.

The specified DataLevel1BackupFrequency parameter is invalid.

400

InvalidDataLevel2AnotherRegionRegion.NotFound

The specified parameter DataLevel2BackupAnotherRegionRegion does not found.

The specified DataLevel2BackupAnotherRegionRegion parameter cannot be found.

400

InvalidDataLevel2AnotherRegionBackupRetentionPeriod.Malformed

The specified parameter DataLevel2BackupAnotherRegionRetentionPeriod is not valid.

The specified DataLevel2BackupAnotherRegionRetentionPeriod parameter is invalid.

403

IncorrectBackupPolicy

Current DB type does not support low frequency backupPolicy operation.

Infrequent access backup operations are not supported by the current database type.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidParam

new archiveBackup policy already exists. dumpretention parameter cannot used alone

An archive backup policy has been created. The dumpretation parameter cannot be used alone.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyBackupPolicy#workbench-doc-change-demo) for a complete list.
