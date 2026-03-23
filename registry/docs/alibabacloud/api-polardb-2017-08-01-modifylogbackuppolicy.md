Modifies the log backup retention policy for a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyLogBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyLogBackupPolicy)

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

polardb:ModifyLogBackupPolicy

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

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to view information about all clusters in a specific region, including cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

LogBackupRetentionPeriod

string

No

The retention period of log backups. Valid values:

-   3 to 7300: The retention period in days.
    
-   \-1: long-term retention.
    

**Note**

-   -   After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
        

3

LogBackupAnotherRegionRegion

string

No

The destination region for cross-region log backups. For information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).

**Note**

-   -   After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
        

cn-hangzhou

LogBackupAnotherRegionRetentionPeriod

string

No

The retention period of cross-region log backups. Valid values:

-   **0**: Disables the cross-region log backup feature.
    
-   **30 to 7300**: The retention period in days.
    
-   **\-1**: long-term retention.
    

**Note**

-   -   When you create a cluster, the default value of this parameter is **0**. This value disables the cross-region log backup feature.
        
-   -   After you enable the advanced backup feature, this parameter is no longer valid. Use the AdvancedLogPolicies parameter instead.
        

30

AdvancedLogPolicies

array<object>

No

The advanced backup policies.

**Note**

-   -   This parameter is not supported for PolarDB for PostgreSQL (Oracle Compatible) or PolarDB for PostgreSQL.
        
-   -   This parameter is supported only for clusters for which the BackupPolicyLevel parameter is set to Advanced.
        

object

No

PolicyId

string

No

The ID of the log backup policy.

71930ac2e9f15e41615e10627c\*\*\*\*\*\*

ActionType

string

No

The operation type. Valid values:

-   **CREATE**: Create
    
-   **UPDATE**: Update
    
-   **DELETE**: Delete
    

CREATE

SrcType

string

No

The source type of the log backup policy. Valid values:

-   **db**: database cluster
    
-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: level-2 cross-region backup
    

level1

DestType

string

No

The destination type of the backup policy. Valid values:

-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: level-2 cross-region backup
    

level2

LogRetentionType

string

No

The retention period type for log backups. Valid values:

-   **never**: The backups never expire.
    
-   **delay**: The backups expire after a fixed number of days.
    

delay

LogRetentionValue

string

No

The number of days to retain the log backups. Valid values:

-   3 to 7300: The retention period in days.
    
-   \-1: long-term retention.
    

10

EnableLogBackup

integer

No

Specifies whether to enable log backup. Set the value to 1.

1

SrcRegion

string

No

The source region of the log backup policy.

cn-beijing

DestRegion

string

No

The destination region of the log backup policy.

cn-shanghai

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

345174B4-FAB3-412E-A326-BEDDA9\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "345174B4-FAB3-412E-A326-BEDDA9******"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidLogBackupRetentionPeriod.Malformed

The specified parameter LogBackupRetentionPeriod is not valid.

The specified LogBackupRetentionPeriod parameter is invalid.

400

InvalidLogBackupAnotherRegionRetentionPeriod.Malformed

The specified parameter LogBackupAnotherRegionRetentionPeriod is not valid.

The specified LogBackupAnotherRegionRetentionPeriod parameter is invalid.

400

InvalidLogBackupAnotherRegionRegion.NotFound

The specified parameter LogBackupAnotherRegionRegion does not found.

The specified LogBackupAnotherRegionRegion parameter is not found.

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBInstanceId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyLogBackupPolicy#workbench-doc-change-demo) for a complete list.
