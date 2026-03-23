Changes the lock status of a PolarDB database account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountLockState)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/ModifyAccountLockState)

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

polardb:ModifyAccountLockState

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

The ID of the cluster.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to view the details of all clusters in a region, including cluster IDs.

pc-\*\*\*

AccountName

string

Yes

The name of the database account.

your\_account\_name

AccountLockState

string

Yes

The lock status of the account. Valid values:

-   **UnLock**: The account is not locked.
    
-   **Lock**: The account is locked.
    

Lock

AccountPasswordValidTime

string

No

The expiration time of the account. The time must be in the \`YYYY-MM-DDThh:mm:ssZ\` format.

2026-09-17T10:00:00Z

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

B762E8C5-0129-51DB-80C8-\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "B762E8C5-0129-51DB-80C8-********"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/ModifyAccountLockState#workbench-doc-change-demo) for a complete list.
