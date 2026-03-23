Moves resources from one resource group to another. You can move multiple resources that reside in different regions, are used by different Alibaba Cloud services, or belong to different resource groups.

## Operation description

For more information about Alibaba Cloud services whose resources can be moved between resource groups, see the **Supported by the API** column in [Alibaba Cloud services that support resource groups](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group).

In this example, two virtual private clouds (VPCs) `vpc-bp1sig0mjktx5ewx1****` and `vpc-bp1visxm225pv49dz****` that reside in different regions and belong to different resource groups are moved to the resource group `rg-aekzmeobk5w****`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/MoveResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/MoveResources)

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

resourcemanager:MoveResources

update

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceGroupId

string

Yes

The ID of the resource group to which you want to move the resources.

rg-aekzmeobk5w\*\*\*\*

Resources

array<object>

Yes

The resources that you want to move.

**Note** You can move a maximum of 10 resources at a time. If you want to move more than 10 resources, move them in batches.

object

Yes

The resources that you want to move.

**Note** You can move a maximum of 10 resources at a time. If you want to move more than 10 resources, move them in batches.

ResourceId

string

No

The ID of the resource.

vpc-bp1sig0mjktx5ewx1\*\*\*\*

ResourceType

string

No

The type of the resource.

vpc

RegionId

string

No

The region ID of the resource.

cn-hangzhou

Service

string

No

The ID of the Alibaba Cloud service to which the resource belongs.

vpc

**Note**

-   You can call the [ListResources](/help/en/resource-management/api-listresources) operation to obtain the values of the `Service`, `RegionId`, `ResourceId`, `ResourceGroupId`, and `ResourceType` request parameters.
-   For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The ID of the request.

C00B89D3-3247-11DE-95D8-A7C01FB0AB4F

Responses

array<object>

The returned results.

response

object

Responses

Service

string

The ID of the Alibaba Cloud service.

vpc

ResourceId

string

The ID of the resource.

vpc-bp1sig0mjktx5ewx1\*\*\*\*

ResourceType

string

The type of the resource.

vpc

RequestId

string

The ID of the request.

C00B89D3-3247-11DE-95D8-A7C01FB0AB4F

Status

string

The status of the move task. Valid values:

-   SUCCESS
-   FAIL

FAIL

ErrorCode

string

The error code returned.

**Note** This parameter is returned if the resource failed to be moved.

NoPermission

ErrorMsg

string

The error message returned.

**Note** This parameter is returned if the resource failed to be moved.

No permissions

RegionId

string

The region ID of the resource.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C00B89D3-3247-11DE-95D8-A7C01FB0AB4F",
  "Responses": [
    {
      "Service": "vpc",
      "ResourceId": "vpc-bp1sig0mjktx5ewx1****",
      "ResourceType": "vpc",
      "RequestId": "C00B89D3-3247-11DE-95D8-A7C01FB0AB4F",
      "Status": "FAIL",
      "ErrorCode": "NoPermission",
      "ErrorMsg": "No permissions",
      "RegionId": "cn-hangzhou"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

400

SERVICE\_REGION\_NO\_ENDPOINT

Please input right service and region

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceManager/2020-03-31/MoveResources?updateTime=2024-04-11#workbench-doc-change-demo)

2023-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/ResourceManager/2020-03-31/MoveResources?updateTime=2023-03-21#workbench-doc-change-demo)
