Queries the data retention policy for the log backups of a PolarDB cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLogBackupPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeLogBackupPolicy)

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

polardb:DescribeLogBackupPolicy

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

You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the information about all clusters in a specific region, including the cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

LogBackupRetentionPeriod

integer

The retention period of the log backup. Valid values:

-   3 to 7300: The log backup is retained for 3 to 7300 days.
    
-   \-1: The log backups are retained permanently.
    

**Note**

-   If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
    

7

RequestId

string

The request ID.

62EE0051-102B-488D-9C79-D607B8\*\*\*\*\*\*

LogBackupAnotherRegionRetentionPeriod

string

The retention period of the cross-region log backup. Valid values:

-   **0**: The cross-region log backup feature is disabled.
    
-   **30 to 7300**: The cross-region log backup is retained for 30 to 7300 days.
    
-   **\-1**: The cross-region log backups are retained permanently.
    

**Note**

-   -   When you create a cluster, the default value is **0**. This value indicates that the cross-region log backup feature is disabled.
        
-   -   If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.
        

0

LogBackupAnotherRegionRegion

string

The region in which the cross-region log backup is stored. For information about the regions that support cross-region backup, see [Overview](/help/en/polardb/polardb-for-mysql/user-guide/overview-72).

**Note**

If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.

cn-beijing

EnableBackupLog

integer

Indicates whether the log backup feature is enabled. Valid values:

-   0: The feature is disabled.
    
-   1: The feature is enabled. By default, the log backup feature is enabled and cannot be disabled.
    

**Note**

If the advanced backup feature is enabled, this parameter is not recommended. Use the AdvancedLogPolicies parameter instead.

1

AdvancedLogPolicies

object

AdvancedLogPolicy

array<object>

The details of the advanced log backup policy.

**Note**

-   This parameter is not supported by PolarDB for PostgreSQL (compatible with Oracle) or PolarDB for PostgreSQL.
    

object

PolicyId

string

The ID of the log backup policy.

**Note**

This parameter is returned only for clusters for which the cross-region log backup feature is enabled.

1c75zkmqczcd1vbf6f6d05\*\*\*

LogRetentionType

string

The retention type for the log backup. Valid values:

-   **never**: The log backups never expire.
    
-   **delay**: The log backups are retained for a specified number of days.
    

delay

LogRetentionValue

string

The number of days to retain log backups. Valid values:

-   3 to 7300: The retention period in days.
    
-   \-1: The log backups are retained permanently.
    

7

SrcType

string

The source type for the log backup policy. Valid values:

-   **db**: database cluster
    
-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: level-2 cross-region backup
    

level1

DestType

string

The destination type for the log backup policy. Valid values:

-   **level1**: level-1 backup
    
-   **level2**: level-2 backup
    
-   **level2Cross**: level-2 cross-region backup
    

level2

EnableLogBackup

integer

Indicates whether the log backup feature is enabled. The return value can be:

-   **1**: enabled
    
-   **0**: disabled
    

1

SrcRegion

string

The source region of the log backup policy.

cn-hangzhou

DestRegion

string

The destination region of the log backup policy.

cn-shanghai

## Examples

Success response

`JSON` format

```
{
  "LogBackupRetentionPeriod": 7,
  "RequestId": "62EE0051-102B-488D-9C79-D607B8******",
  "LogBackupAnotherRegionRetentionPeriod": "0",
  "LogBackupAnotherRegionRegion": "cn-beijing",
  "EnableBackupLog": 1,
  "AdvancedLogPolicies": {
    "AdvancedLogPolicy": [
      {
        "PolicyId": "1c75zkmqczcd1vbf6f6d05***",
        "LogRetentionType": "delay",
        "LogRetentionValue": "7",
        "SrcType": "level1",
        "DestType": "level2",
        "EnableLogBackup": 1,
        "SrcRegion": "cn-hangzhou",
        "DestRegion": "cn-shanghai"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeLogBackupPolicy#workbench-doc-change-demo) for a complete list.
