Modifies the name of an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceDescription)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceDescription)

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

dds:ModifyDBInstanceDescription

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

**Note**

To modify the name of a shard or mongos node in a sharded cluster instance, you must also specify the **NodeId** parameter.

dds-bp2234\*\*\*\*

NodeId

string

No

The ID of the shard or mongos node in the sharded cluster instance.

**Note**

This parameter is valid only if you set the **DBInstanceId** parameter to the ID of a sharded cluster instance.

d-bp89067\*\*\*\*

DBInstanceDescription

string

Yes

The name of the instance.

**Note**

-   The name cannot start with `http://` or `https://`.
    
-   It must start with a letter.
    
-   It must be 2 to 256 characters in length, and can contain letters, underscores (\_), hyphens (-), and digits.
    

testdata

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

06F8F642-4009-4FFC-80C4-9D67DBF7B74E

## Examples

Success response

`JSON` format

```
{
  "RequestId": "06F8F642-4009-4FFC-80C4-9D67DBF7B74E"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidDBInstanceDescription.Malformed

Specified parameter DBInstanceDescription is not valid.

Invalid node name.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyDBInstanceDescription#workbench-doc-change-demo) for a complete list.
