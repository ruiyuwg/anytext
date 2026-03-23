Queries the Elastic Compute Service (ECS) instance types supported by an image.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageSupportInstanceTypes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageSupportInstanceTypes)

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

ecs:DescribeImageSupportInstanceTypes

get

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

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

Details about the instance types that are supported by the image.

cn-hangzhou

ImageId

string

No

The region ID of the image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

m-o6w3gy99qf89rkga\*\*\*\*

ActionType

string

No

The scenario in which the image is used. Valid values:

-   CreateEcs (default): instance creation
-   ChangeOS: replacement of the system disk or operating system

CreateEcs

Filter

array<object>

No

The number of vCPUs of the instance type.

object

No

The filters used to filter instance types.

Key

string

No

Filter N used to filter instance types.

imageId

Value

string

No

The ID of the image.

m-o6w3gy99qf89rkga\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

ImageId

string

The key of filter N. Only the image ID can be used to filter instance types. Valid values:

-   imagId: image ID
-   filter: image ID

m-o6w3gy99qf89rkga\*\*\*\*

RegionId

string

{ "RequestId": "CF661E2D-4AFE-4BCD-959A-A65E14416B44", "RegionId": "cn-hangzhou", "ImageId": "ubuntu\_16\_0402\_64\_20G\_alibase\_20180409.vhd", "InstanceTypes": { "InstanceType": \[{ "InstanceTypeId": "ecs.t1.xsmall", "CpuCoreCount": 1, "MemorySize": 0.5, "InstanceTypeFamily": "ecs.t1" }, { "InstanceTypeId": "ecs.t1.small", "CpuCoreCount": 1, "MemorySize": 1, "InstanceTypeFamily": "ecs.t1" }\] } }

cn-hangzhou

InstanceTypes

array<object>

{ "RequestId": "CF661E2D-4AFE-4BCD-959A-A65E14416B44", "RegionId": "cn-hangzhou", "ImageId": "ubuntu\_16\_0402\_64\_20G\_alibase\_20180409.vhd", "InstanceTypes": { "InstanceType": \[{ "InstanceTypeId": "ecs.t1.xsmall", "CpuCoreCount": 1, "MemorySize": 0.5, "InstanceTypeFamily": "ecs.t1" }, { "InstanceTypeId": "ecs.t1.small", "CpuCoreCount": 1, "MemorySize": 1, "InstanceTypeFamily": "ecs.t1" }\] } }

InstanceType

object

CF661E2D-4AFE-4BCD-959A-A65E14416B44 cn-hangzhou ubuntu\_16\_0402\_64\_20G\_alibase\_20180409.vhd ecs.t1.xsmall 1 0.5 ecs.t1 ecs.t1.small 1 1 ecs.t1

InstanceTypeId

string

Queries the instance types supported by an image.

ecs.t1.xsmall

InstanceTypeFamily

string

DescribeImageSupportInstanceTypes

ecs.t1

CpuCoreCount

integer

The number of vCPUs of the instance type.

1

MemorySize

float

The memory size of the instance type. Unit: GiB.

1024

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": " 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "ImageId": "m-o6w3gy99qf89rkga****",
  "RegionId": "cn-hangzhou",
  "InstanceTypes": {
    "InstanceType": [
      {
        "InstanceTypeId": "ecs.t1.xsmall",
        "InstanceTypeFamily": "ecs.t1",
        "CpuCoreCount": 1,
        "MemorySize": 1024
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

InvalidParamter

Invalid Parameter.

The specified parameter is invalid.

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

404

InvalidUsage

The specifed Usage is not valid.

The specified Usage parameter is invalid.

404

InvalidImageId.NotFound

The specified image %s does not exist.

The specified image does not exist under the current account. check whether the image id is correct.

404

InvalidImageId.NotFound

The specified image is not found, please make sure image is exist in current region or image status is available.

The specified image is not found, please make sure image is exist in current region or image status is available.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSupportInstanceTypes?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSupportInstanceTypes?updateTime=2024-12-17#workbench-doc-change-demo)

2023-08-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSupportInstanceTypes?updateTime=2023-08-25#workbench-doc-change-demo)

2023-03-28

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSupportInstanceTypes?updateTime=2023-03-28#workbench-doc-change-demo)

2023-03-20

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSupportInstanceTypes?updateTime=2023-03-20#workbench-doc-change-demo)
