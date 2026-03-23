Checks the connection string of a cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/CheckConnectionString)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/CheckConnectionString)

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

polardb:CheckConnectionString

get

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

DBClusterId

string

Yes

The ID of the cluster.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to view the details of all clusters in your account, including cluster IDs.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ConnectionStringPrefix

string

Yes

The prefix of the new connection string. The prefix must meet the following requirements:

-   It must consist of lowercase letters, digits, and periods (.).
    
-   It must start with a letter and end with a letter or a digit.
    

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*.pg.polardb.pre.rds.aliyuncs.com:5432

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

CD3FA5F3-FAF3-44CA-AFFF-BAF869\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CD3FA5F3-FAF3-44CA-AFFF-BAF869******"
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

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/CheckConnectionString#workbench-doc-change-demo) for a complete list.
