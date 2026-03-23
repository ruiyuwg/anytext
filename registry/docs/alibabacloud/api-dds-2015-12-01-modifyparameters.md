Modifies the parameters of an ApsaraDB for MongoDB instance.

## Operation description

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyParameters)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyParameters)

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

dds:ModifyParameters

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

RegionId

string

No

The region ID of the instance. To query the latest region list, call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation.

cn-hangzhou

DBInstanceId

string

Yes

The instance ID.

**Note**

If this parameter is a sharded cluster instance ID, you must also specify the NodeId parameter.

dds-bp19f409d75\*\*\*\*

NodeId

string

No

The ID of the mongos or shard node in the sharded cluster instance.

**Note**

This parameter is active only when the DBInstanceId parameter is set to a sharded cluster instance ID.

d-bp1b7bb3bbe\*\*\*\*

Parameters

string

Yes

The parameters and their new values. The value must be a JSON string. Example: {"ParameterName1":"ParameterValue1","ParameterName2":"ParameterValue2"}.

**Note**

Call the [DescribeParameterTemplates](/help/en/mongodb/api-describeparametertemplates) operation to query the list of default parameter templates.

{"operationProfiling.mode":"all","operationProfiling.slowOpThresholdMs":"200"}

CharacterType

string

No

The type of the node. Valid values:

-   **db**: shard node.
    
-   **cs**: Configserver node.
    
-   **mongos**: mongos node.
    

db

SwitchMode

string

No

The time to apply the parameter modifications. Valid values:

-   0: Immediately.
    
-   1: During the maintenance window.
    

**Valid values:**

-   0 :
    
    0
    
-   1 :
    
    1
    

0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

36923CC2-DDAB-4B48-A144-DA92C1E19537

## Examples

Success response

`JSON` format

```
{
  "RequestId": "36923CC2-DDAB-4B48-A144-DA92C1E19537"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameters.Format

Specified parameters is not valid.

The parameter entered is invalid.

400

InvalidParameterForInstanceVersion

Parameter %s is not valid for instance's MinorVersion.

Parameter %s is not valid for the instance's minor version，you can try to upgrade the mini version.

400

InvalidParameter

The specified parameter %s is not valid.

The specified parameter %s is not valid.

400

OplogSizeLowerThanInstanceStorage

The oplogSizeMB parameter entered is less than 10% of the instance store size.

The oplogSizeMB parameter entered is less than 10% of the instance store size.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyParameters#workbench-doc-change-demo) for a complete list.
