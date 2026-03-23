Releases the public endpoint of an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ReleasePublicNetworkAddress)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ReleasePublicNetworkAddress)

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

dds:ReleasePublicNetworkAddress

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbInstanceId}`

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

**Note**

If you set this parameter to the ID of a sharded cluster instance, you must also specify the **NodeId** parameter.

dds-bp2235\*\*\*\*

NodeId

string

No

The ID of the mongos, shard, or Configserver node in the sharded cluster instance.

**Note**

-   This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.
    
-   You can call the [DescribeDBInstanceAttribute](/help/en/mongodb/api-describedbinstanceattribute) operation to view the ID of the mongos, shard, or Configserver node.
    

s-bp2235\*\*\*\*

ConnectionType

string

No

The public endpoint type. Valid values:

-   **SRV**
    
-   **Normal**
    

**Note**

This parameter is valid only when you want to release an SRV endpoint.

SRV

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

1D6AFE36-1AF5-4DE4-A954-672159D4CC69

## Examples

Success response

`JSON` format

```
{
  "RequestId": "1D6AFE36-1AF5-4DE4-A954-672159D4CC69"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ReleasePublicNetworkAddress#workbench-doc-change-demo) for a complete list.
