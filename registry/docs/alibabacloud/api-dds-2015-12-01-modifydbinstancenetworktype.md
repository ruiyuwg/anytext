Changes the network type of an ApsaraDB for MongoDB instance.

## Operation description

This operation is applicable to replica set instances and sharded cluster instances, but not standalone instances. You can call this operation to change the network of an instance from a classic network to a VPC.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceNetworkType)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyDBInstanceNetworkType)

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

dds:ModifyDBInstanceNetworkType

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

dds-bp11483712c1\*\*\*\*

NetworkType

string

Yes

The network type to switch to. Valid value:

-   **VPC**
    

VPC

VpcId

string

No

The ID of the VPC.

**Note**

This parameter is required when the **NetworkType** parameter is set to **VPC**.

vpc-bp1n3i15v90el48nx\*\*\*\*

VSwitchId

string

No

The ID of the vSwitch in the VPC.

**Note**

This parameter is required when the **NetworkType** parameter is set to **VPC**.

vsw-bp1vj604nj5a9zz74\*\*\*\*

RetainClassic

string

No

Specifies whether to retain the original classic network address when you change the network type to VPC. Valid values:

-   **True**: retains the original classic network address.
    
-   **False**: does not retain the original classic network address.
    

**Note**

-   This parameter is required when the **NetworkType** parameter is set to **VPC**.
    
-   If you set this parameter to **True**, you must also specify the **ClassicExpiredDays** parameter.
    

False

ClassicExpiredDays

integer

No

The retention period of the original classic network address when you change the network type to VPC. Valid values: **14**, **30**, **60**, and **120**. Unit: days.

**Note**

This parameter is required when the **NetworkType** parameter is set to **VPC** and the **RetainClassic** parameter is set to **True**.

30

ZoneId

string

Yes

可用区 ID，您可以通过调用 [DescribeRegions](/help/en/mongodb/api-describeregions) 接口查询可用区 ID。

cn-hangzhou-b

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

D0E605FD-6ECE-5FBE-84A4-99AAB1B8\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D0E605FD-6ECE-5FBE-84A4-99AAB1B8****"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

InstanceVpcAuthMode.NotSupported

Instance VpcAuthMode is NotSupported.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyDBInstanceNetworkType#workbench-doc-change-demo) for a complete list.
