Removes tags from Tair (Redis OSS-compatible) instances.

## Operation description

-   You can remove up to 20 tags at a time.
-   If a tag is removed from an instance and is not added to other instances, the tag is deleted.

You can also remove tags from instances in the Tair (Redis OSS-compatible) console. For more information, see [Remove a tag](/help/en/redis/remove-or-delete-tags).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/UntagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/UntagResources)

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

kvstore:UntagResources

delete

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeregions-redis) operation to query the most recent region list.

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **INSTANCE**.

INSTANCE

All

boolean

No

Specifies whether to remove all tags from the instance. Valid values:

-   **true**: removes all tags from the instance.
-   **false** (default): does not remove all tags from the instance.

**Note** If you specify both this parameter and the **TagKey.N** parameter, this parameter does not take effect.

false

ResourceId

array

Yes

The IDs of the instances.

string

Yes

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

TagKey

array

No

The list of tag keys.

string

No

The tag key.

demokey

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

601B6F25-21E7-4484-99D5-3EF2625C\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "601B6F25-21E7-4484-99D5-3EF2625C****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidTagKey.Malformed

The specified parameter Tag.n.Key or TagKey.n is not valid.

\-

400

InvalidTagValue.Malformed

The specified parameter Tag.n.Value is not valid.

\-

400

InvalidParameter.ResourceId

The specified parameter ResourceId.n is not valid.

\-

400

MissParameter.TagOrResourceId

The parameter Tag.n or ResourceId.n is needed.

The parameters Tag and ResourceId cannot all be empty. At least one of them is passed in.

400

InvalidParameter.Scope

The specified parameter Scope is not valid.

\-

400

NumberExceed.ResourceIds

The ResourceIds parameter number is exceed.

\-

400

NumberExceed.Tags

The Tags parameter number is exceed.

\-

400

Duplicate.TagKey

The specified parameter Tag.n.Key is duplicated.

\-

400

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

\-

404

InvalidDbInstanceId.NotFound

Specified instance does not exist.

The specified instance does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/UntagResources?updateTime=2023-07-20#workbench-doc-change-demo)
