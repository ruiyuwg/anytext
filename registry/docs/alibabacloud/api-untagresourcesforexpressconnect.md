Removes tags from an Express Connect circuit at a time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UntagResourcesForExpressConnect)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UntagResourcesForExpressConnect)

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

vpc:UntagResourcesForExpressConnect

update

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/{#PhysicalConnectionId}`

\*VirtualBorderRouter

`acs:vpc:{#regionId}:{#accountId}:virtualborderrouter/{#VbrId}`

\*RouterInterface

`acs:vpc:{#regionId}:{#accountId}:routerinterface/{#RouterInterfaceId}`

\*TrafficQos

`acs:vpc:{#regionId}:{#accountId}:trafficqos/{#QosId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceType

string

Yes

The type of the resource. Valid values:

-   **PHYSICALCONNECTION**: Express Connect circuit.
-   **VIRTUALBORDERROUTER**: virtual border router (VBR).
-   **ROUTERINTERFACE**: router interface.

PHYSICALCONNECTION

RegionId

string

Yes

The ID of the region in which the resource is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to obtain the region ID.

cn-hangzhou

All

boolean

No

Specifies whether to remove all tags from the specified resource. Valid values:

-   **true**
-   **false** (default)

false

ResourceId

array

Yes

The IDs of the resources from which you want to remove tags.

string

Yes

The resource ID. You can specify up to 20 resource IDs.

pc-bp16qjewdsunr41m1\*\*\*\*

TagKey

array

No

The tags to remove from the specified resource.

string

No

The key of the tag to remove from the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

FinanceDept

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

DE65F6B7-7566-4802-9007-96F2494AC512

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DE65F6B7-7566-4802-9007-96F2494AC512"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidTagKey

The tag keys are not valid.

The tag index is invalid.

400

InvalidTagValue

The tag values are not valid.

The tag value is invalid.

400

InvalidInstanceType.NotFound

The instance type is not found

The instance type is not found.

400

InvalidInstanceIds.NotFound

The instanceIds are not found

The instance ID is not found.

400

Forbidden.TagKeys

The request do not allow to operate the tag keys

You do not have the permissions to set the TagKeys parameter.

400

QuotaExceeded.TagNum

Custom Tags quota exceeded

The upper limit is reached.

400

Forbidden.TagKey.Duplicated

The specified tag key already exists.

The tag resources are duplicate.

400

SizeLimitExceeded.TagNum

The maximum number of tags is exceeded.

The number of tags has reached the upper limit.

400

SizeLimitExceeded.ResourceId

The maximum number of resource IDs is exceeded.

The number of resource group IDs has reached the upper limit.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-11

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UntagResourcesForExpressConnect?updateTime=2023-09-11#workbench-doc-change-demo)
