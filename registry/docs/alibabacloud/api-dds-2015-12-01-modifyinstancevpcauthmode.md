Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.

## Operation description

Before you call this operation, make sure that the ApsaraDB for MongoDB instance meets the following requirements:

-   The instance is a replica set or sharded cluster instance.
    
-   The database engine version of the instance is 4.0 (with the minor version of mongodb\_20190408\_3.0.11 or later) or 4.2. You can call the [DescribeDBInstanceAttribute](/help/en/mongodb/api-describedbinstanceattribute) operation to view the database engine version of the instance. If necessary, you can call the [UpgradeDBInstanceEngineVersion](/help/en/mongodb/api-upgradedbinstanceengineversion) operation to upgrade the database engine version of the instance.
    
-   The network type of the instance must be VPC. If the network type of the instance is classic network, you must call the [ModifyDBInstanceNetworkType](/help/en/mongodb/api-modifydbinstancenetworktype) operation to change the network type to VPC.
    
-   You can only disable but not enable password-free access over VPC.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyInstanceVpcAuthMode)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyInstanceVpcAuthMode)

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

dds:ModifyInstanceVpcAuthMode

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

dds-bpxxxxxxxx

NodeId

string

No

The ID of the mongos node in the sharded cluster instance.

**Note**

This parameter can be used only when the instance type is sharded cluster.

s-bpxxxxxxxx

VpcAuthMode

string

No

Specify whether to disable password-free access over VPC. Set the value to **Close**.

Close

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

BA51E9D9-B14A-4542-B6E6-7DE00BECCB8C

## Examples

Success response

`JSON` format

```
{
  "RequestId": "BA51E9D9-B14A-4542-B6E6-7DE00BECCB8C"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ClassicNotSupport

Classic instance does not support this operation

403

InstanceCurrentKernelVersionNotSupport

Current DB instance CurrentKernelVersion does not support this operation.

Instance version outdated. This feature supports only instances of version 4.0 and later.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyInstanceVpcAuthMode#workbench-doc-change-demo) for a complete list.
