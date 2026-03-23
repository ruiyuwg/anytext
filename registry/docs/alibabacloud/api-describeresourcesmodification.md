Queries available instance types or system disk categories in a specific zone before you change the instance type or system disk category of an Elastic Compute Service (ECS) instance.

## Operation description

Examples of common scenarios in which this operation is used:

### [](#example-1-query-the-instance-types-to-which-you-can-change-the-instance-type-of-an-instance)[](#-1)Example 1: Query the instance types to which you can change the instance type of an instance.

Query the instance types to which you can change the instance type of the i-bp67acfmxazb4p\*\*\*\* instance and the inventory of the queried instance types in the zone in which the instance resides.

```
http(s)://ecs.aliyuncs.com/?Action=DescribeResourcesModification
&RegionId=cn-hangzhou
&ResourceId=i-bp67acfmxazb4p****
&DestinationResource=InstanceType
&OperationType=Upgrade
&<Common request parameters>
```

### [](#example-2-query-the-instance-types-to-which-you-can-change-the-instance-type-of-an-instance-after-a-system-disk-category-change)[](#-2)Example 2: Query the instance types to which you can change the instance type of an instance after a system disk category change.

Query the instance types to which you can change the instance type of the i-bp67acfmxazb4p\*\*\*\* instance after a system disk category change and the inventory of the queried instance types in the zone in which the instance resides.

```
http(s)://ecs.aliyuncs.com/?Action=DescribeResourcesModification
&RegionId=cn-hangzhou
&ResourceId=i-bp67acfmxazb4p****
&DestinationResource=InstanceType
&OperationType=Upgrade
&Conditions.0=DiskCategory
&<Common request parameters>
```

### [](#example-3-query-the-system-disk-categories-supported-by-the-instance-type-to-which-you-want-to-change-the-instance-type-of-an-instance)[](#-3)Example 3: Query the system disk categories supported by the instance type to which you want to change the instance type of an instance.

Query the system disk categories supported by the instance type to which you want to change the instance type of the i-bp67acfmxazb4p\*\*\*\* instance and the inventory of the disk categories in the zone in which the instance resides. In this example, the ecs.g7.large instance type is used. To change to the instance type, you must change the system disk category of the instance to a category supported by the instance type.

**Note** You can call this operation as described in Example 2 to query the instance types to which you can change the instance type of an instance.

```
http(s)://ecs.aliyuncs.com/?Action=DescribeResourcesModification
&RegionId=cn-hangzhou
&ResourceId=i-bp67acfmxazb4p****
&DestinationResource=SystemDisk
&OperationType=Upgrade
&InstanceType=ecs.g7.large
&<Common request parameters>
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeResourcesModification)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeResourcesModification)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:DescribeResourcesModification

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the instance for which you want to change the instance type or system disk category. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceId

string

Yes

The ID of the instance for which you want to change the instance type or system disk category.

i-bp67acfmxazb4p\*\*\*\*

MigrateAcrossZone

boolean

No

Specifies whether cross-cluster instance type upgrades are supported. Valid values:

-   true
-   false

Default value: false.

When MigrateAcrossZone is set to true and you upgrade the instance type of an instance based on the returned information, take note of the following items:

-   Instance that resides in the classic network:
    
    -   For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the private IP address, disk device names, and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\* such as xvda and xvdb, and ultra disks (cloud\_efficiency) and standard SSDs (cloud\_ssd) are identified as vd\* such as vda and vdb.
    -   For [instance families available for purchase](/help/en/ecs/user-guide/overview-of-instance-families), when the instance type of an instance is changed, the private IP address of the instance changes.
-   Instance that resides in a virtual private cloud (VPC): For [retired instance types](/help/en/ecs/user-guide/retired-instance-types), when a non-I/O optimized instance is upgraded to an I/O optimized instance, the disk device names and software authorization codes of the instance change. For a Linux instance, basic disks (cloud) are identified as xvd\* such as xvda and xvdb, and ultra disks (cloud\_efficiency) and standard SSDs (cloud\_ssd) are identified as vd\* such as vda and vdb.
    

true

DestinationResource

string

Yes

The resource type that you want to change. Valid values:

-   InstanceType
    
-   SystemDisk
    
    If you set this parameter to SystemDisk, you must specify the InstanceType parameter. In this case, this operation queries the system disk categories supported by the specified instance type.
    

InstanceType

OperationType

string

No

The operation of changing resource configurations.

-   Valid values for subscription resources:
    
    -   Upgrade: upgrades resources.
    -   Downgrade: downgrades resources.
    -   RenewDowngrade: renews and downgrades resources.
    -   RenewModify: renews an expired instance and changes its configurations.
-   Set the value to Upgrade for pay-as-you-go resources.
    

Default value: Upgrade.

Upgrade

InstanceType

string

No

The instance type to which you want to change the instance type of the instance. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families). You can also call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes) operation to query the most recent instance type list.

If you set the DestinationResource parameter to SystemDisk, you must specify the InstanceType parameter. In this case, this operation queries the system disk categories supported by the specified instance type.

ecs.g5.large

Cores

integer

No

The number of vCPUs of the instance type. For information about the valid values, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

This parameter is valid only when the DestinationResource parameter is set to InstanceType.

2

Memory

float

No

The memory size of the instance type. Unit: GiB. For information about the valid values, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).

This parameter is valid only when the DestinationResource parameter is set to InstanceType.

8.0

ZoneId

string

No

The ID of the destination zone to which you want to migrate the instance.

If you want to change the instance type across zones, you must specify this parameter.

cn-hangzhou-e

Conditions

array

No

The conditions.

string

No

Set the value to DiskCategory. When you set this parameter to DiskCategory, this operation queries the instance types to which you can change the instance type of the instance after a system disk category change.

This parameter is valid only when the DestinationResource parameter is set to InstanceType.

DiskCategory

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

AvailableZones

array<object>

The information about the queried zones.

AvailableZone

object

ZoneId

string

The zone ID.

cn-hangzhou-e

Status

string

The state of the resource. Valid values:

-   Available
-   SoldOut

Available

StatusCategory

string

The category of the resource based on stock status. Valid values:

-   WithStock: resources that are in sufficient stock
-   ClosedWithStock: resources that are in insufficient stock
-   WithoutStock: resources that are out of stock

WithStock

RegionId

string

The region ID.

cn-hangzhou

AvailableResources

array<object>

The resources that are available in the zone.

AvailableResource

object

Type

string

The resource type. Valid values:

-   InstanceType
-   SystemDisk

InstanceType

SupportedResources

array<object>

The information about the supported resources.

SupportedResource

object

Status

string

The state of the resource. Valid values:

-   Available
-   SoldOut

Available

Value

string

The resource type.

ecs.g5.large

Max

integer

The maximum disk capacity.

This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

2

Unit

string

The unit of the disk capacity. This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

null

StatusCategory

string

The category of the resource based on stock status. Valid values:

-   WithStock: resources that are in sufficient stock
-   ClosedWithStock: resources that are in insufficient stock
-   WithoutStock: resources that are out of stock

WithStock

Min

integer

The minimum disk capacity.

This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

1

ConditionSupportedResources

array<object>

The resource types that resources can be changed to after the resources meet specified conditions. If the conditions are met, you can change the current resource to a resource in the list.

ConditionSupportedResource

object

The resource types that resources can be changed to after the resources meet specified conditions.

Conditions

array<object>

The conditions.

Condition

object

The conditions.

Key

string

The condition name. Valid value:

DiskCategory, which indicates a disk category change.

DiskCategory

Status

string

The stock state of the resource. Valid values:

-   Available
-   SoldOut

Available

Value

string

The resource type.

ecs.g5.large

Max

integer

The maximum disk capacity.

This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

2

Unit

string

The unit of the disk capacity.

This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

null

StatusCategory

string

The category of the resource based on stock status. Valid values:

-   WithStock: resources that are in sufficient stock
-   ClosedWithStock: resources that are in insufficient stock
-   WithoutStock: resources that are out of stock

WithStock

Min

integer

The minimum disk capacity.

This parameter takes effect only when the DestinationResource request parameter is set to SystemDisk.

1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "AvailableZones": {
    "AvailableZone": [
      {
        "ZoneId": "cn-hangzhou-e",
        "Status": "Available",
        "StatusCategory": "WithStock",
        "RegionId": "cn-hangzhou",
        "AvailableResources": {
          "AvailableResource": [
            {
              "Type": "InstanceType",
              "SupportedResources": {
                "SupportedResource": [
                  {
                    "Status": "Available",
                    "Value": "ecs.g5.large",
                    "Max": 2,
                    "Unit": null,
                    "StatusCategory": "WithStock",
                    "Min": 1
                  }
                ]
              },
              "ConditionSupportedResources": {
                "ConditionSupportedResource": [
                  {
                    "Conditions": {
                      "Condition": [
                        {
                          "Key": "DiskCategory"
                        }
                      ]
                    },
                    "Status": "Available",
                    "Value": "ecs.g5.large",
                    "Max": 2,
                    "Unit": null,
                    "StatusCategory": "WithStock",
                    "Min": 1
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.OperationType

The specified operationType is not valid.

The specified OperationType parameter is invalid.

400

Invalid.Param

The input parameter DestinationResource that is mandatory for processing this request is not supplied.

The specified DestinationResource parameter is invalid.

400

Invalid.InstanceChargeType

The specified InstanceChargeType is not valid.

The specified InstanceChargeType parameter is invalid.

400

InvalidCondition.Malformed

The specified Condition is not valid.

\-

403

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist in our records.

\-

403

InvalidParam.TypeAndCpuMem.Conflict

The specified 'InstanceType' and 'Cores','Memory' are not blank at the same time.

\-

403

InvalidParam.Cores

The specified parameter 'Cores' should be empty.

The specified parameter 'Cores' should be empty.

403

InvalidParam.Memory

The specified parameter 'Memory' should be empty.

The specified parameter 'Memory' should be empty.

403

InvalidParameter.ResourceOwnerId

The specified parameter ResourceOwnerId is not available anymore.

\-

404

Invalid.RegionId

The specified RegionId does not exist.

The specified RegionId parameter is invalid.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

Unavailable.Regions

The available regions does not exists.

The available region does not exist.

404

Invalid.ResourceType

The ResourceType provided does not exist in our records.

The specified resource type is invalid.

404

Invalid.DestinationResource

The specified DestinationResource is not valid.

The specified DestinationResource parameter is invalid.

404

Invalid.IoOptimized

The specified IoOptimized is not valid.

The specified IoOptimized parameter is invalid.

404

Invalid.NetworkCategory

The specified NetworkCategory is not valid.

The specified NetworkCategory parameter is invalid.

404

Invalid.SpotStrategy

The specified SpotStrategy is not valid.

The specified SpotStrategy parameter is invalid.

404

Invalid.ResourceId

The specified ResourceId is not valid.

The specified ResourceId parameter is invalid.

404

Invalid.InstancePayType

The specified InstancePayType is not valid.

The specified InstanceChargeType parameter is invalid.

404

Invalid.OperationType

The specified OperationType is not valid.

The specified OperationType parameter is invalid.

404

OperationDenied

The specified operation is denied as this instanceType is not support.

The instance type does not support this operation.

404

InvalidInstanceId.NotFound

The specified InstanceId provided does not exist in our records.

The specified instance does not exist.

404

InvalidResourceId.NotFound

The specified ResourceId is not found in our records.

The specified resource does not exist. Check whether the resource ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeResourcesModification?updateTime=2025-02-28#workbench-doc-change-demo)

2023-04-14

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeResourcesModification?updateTime=2023-04-14#workbench-doc-change-demo)

2022-09-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeResourcesModification?updateTime=2022-09-14#workbench-doc-change-demo)

2022-09-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeResourcesModification?updateTime=2022-09-14#workbench-doc-change-demo)
