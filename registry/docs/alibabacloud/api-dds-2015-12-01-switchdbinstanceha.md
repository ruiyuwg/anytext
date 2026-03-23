Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.

## Operation description

The instance must be running when you call this operation.

**Note**

-   This operation is applicable to replica set instances and sharded cluster instances, but cannot be performed on standalone instances.
    
-   On replica set instances, the switch is performed between instances. On sharded cluster instances, the switch is performed between shards.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/SwitchDBInstanceHA)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/SwitchDBInstanceHA)

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

dds:SwitchDBInstanceHA

none

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

The ID of the instance

dds-bpxxxxxxxx

NodeId

string

No

The ID of the shard node in the sharded cluster instance.

**Note**

You must specify this parameter if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.

d-bpxxxxxxxx

RoleIds

string

No

The IDs of the roles who switch the primary and secondary nodes for the instance. You can call the [DescribeRoleZoneInfo](/help/en/mongodb/api-describerolezoneinfo) operation to view the IDs and information of roles of nodes.

**Note**

-   Separate role IDs with commas (,). If this parameter is not specified, the primary and secondary nodes are switched.
    
-   If you set the **DBInstanceId** parameter to the ID of a sharded cluster instance, the roles who switch the primary and secondary nodes for the instance must belong to one shard node.
    

972xxxx,972xxxx

SwitchMode

integer

No

The time when the primary and secondary nodes are switched. Valid values:

-   0: The primary and secondary nodes are immediately switched.
    
-   1: The primary and secondary nodes are switched during the O&M time period.
    

0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

26BD4E5F-BDB4-47BA-B232-413AA78CFA8F

## Examples

Success response

`JSON` format

```
{
  "RequestId": "26BD4E5F-BDB4-47BA-B232-413AA78CFA8F"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidSwitchType

Specified Swtich Type is not valid.

400

InvalidInstanceId

Specified Instance ID is not valid.

400

HaStatusNotSupport

Current DB instance HA status does not support this operation.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/SwitchDBInstanceHA#workbench-doc-change-demo) for a complete list.
