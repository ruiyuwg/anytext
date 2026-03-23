Queries the tags that are added to the resources of various Alibaba Cloud services.

## Operation description

For information about the Alibaba Cloud services that support tags, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTagResources)

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

tag:ListTagResources

get

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

RegionId

string

Yes

The region ID.

-   If the resources belong to a service that is centrally deployed, set the value to the region ID of the resources by referring to [Regions supported by tag-related operations on resources of centrally deployed Alibaba Cloud services](/help/en/resource-management/tag/product-overview/region-of-the-centralized-cloud-service-supported-by-the-tag).
-   If the resources belong to a service that is not centrally deployed, set the value to the region ID of the resources.

cn-hangzhou

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

PageSize

integer

No

The number of entries to return on each page.

Maximum value: 1000. Default value: 50.

50

Tags

string

No

The key-value pairs of tags. You can specify 1 to 10 key-value pairs.

If you specify multiple tags, the system queries the resources to which all these tags are added.

Limits:

-   A tag key must be 1 to 128 characters in length.
-   A tag value must be 1 to 128 characters in length.
-   Tag keys and tag values are case-sensitive.
-   Each tag key on a resource can have only one tag value. If you create a tag that has the same key as an existing tag, the value of the existing tag is overwritten.

{"k1":"v1","k2":"v2"}

Category

string

No

The type of the tag. Valid values:

-   Custom
-   System
-   All

Default value: All.

Custom

ResourceARN

array

No

The Alibaba Cloud Resource Name (ARN) of a resource.

Valid values of N: 1 to 50.

ARN format: `arn:acs:${ProductCode}:${Region}:${Account}:${ResourceType}/${ResourceId}` Fields:

-   `ProductCode`: the service code. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation.
-   `Region`: the region ID of the resource. You can set this field to an asterisk (\*) to indicate the current region.
-   `Account`: the ID of the Alibaba Cloud account to which the resource belongs. You can set this field to an asterisk (\*) to indicate the current Alibaba Cloud account.
-   `ResourceType`: the resource type. You can set this field to a value obtained from the response of the [ListSupportResourceTypes](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-listsupportresourcetypes) operation.
-   `ResourceId`: the ID of the resource.

**Note** You can set `ProductCode` and `ResourceType` in ResourceARN to values defined in Resource Group, ActionTrail, or Resource Center.

string

No

The ARN of the resource.

arn:acs:ecs:cn-hangzhou:123456789\*\*\*\*:instance/i-bp15hr53jws84akg\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

Indicates whether the `next query` is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the `next query` is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the `token` used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

RequestId

string

The ID of the request.

014738E0-3C7F-47D8-8FB9-469500C6F387

TagResources

array<object>

The information of the tags that are added to the resources.

TagResource

object

The information of the tags that are added to the resources.

ResourceARN

string

The ARN of the resource.

arn:acs:ecs:cn-hangzhou:123456789\*\*\*\*:instance/i-bp15hr53jws84akg\*\*\*\*

Tags

array<object>

The information of the tags.

Tag

object

The information of the tags.

Key

string

The tag key.

k1

Value

string

The tag value.

v1

Category

string

The type of the tag. Valid values:

-   Custom
-   System

Custom

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "RequestId": "014738E0-3C7F-47D8-8FB9-469500C6F387",
  "TagResources": [
    {
      "ResourceARN": "arn:acs:ecs:cn-hangzhou:123456789****:instance/i-bp15hr53jws84akg****",
      "Tags": [
        {
          "Key": "k1",
          "Value": "v1",
          "Category": "Custom"
        }
      ]
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidResourceARN.Account

The Account specified in the ResourceARN parameter does not match the actual account, specifically: %s.

The Account in the ResourceARN do not match the actual user, namely: %s

400

InvalidResourceARN.FormatError

The format of parameter ResourceARN: %s is not valid, for the correct format, you can refer to the Recommend.

The ResourceARN format does not conform to the specification. For the correct format, please refer

400

InvalidResourceARN.Region

The Region specified in the ResourceARN parameter does not match the RegionId parameter, specifically: %s.

The Region in the ResourceARN does not match the parameter RegionId. They are: %s

400

InvalidParameter.TagKey

The TagKey parameter is invalid. The following TagKeys are invalid: %s.

Illegal tag keys exist in the parameter. Illegal tag keys are as follows: %s

400

InvalidParameter.Tags

The Tags parameter cannot be empty, and JSON parsing should adhere to the format of a Map.

\-

400

InvalidParameter.RegionId

%s.

The region parameter is illegal.

403

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

The Tag.N.Key contains duplicate keys.

403

InvalidParameter.Category

The specified Category is invalid. Valid values are Custom and System.

The specified Category is invalid. Valid values are Custom and System.

403

MissingParameter.ResourceIds

You must specify ResourceIds.

You must specify ResourceIds.

403

NoPermission.Operator

The user is not authorized to operate on the specified resource.

The user is not authorized to operate on the specified resource.

403

NoPermission.SystemTag

The user does not have permission to operate the system tag.

The user does not have permission to operate the system tag.

403

NoPermissionKey.Category

Some keys cannot be modified because the user does not have permission.

Some keys cannot be modified because the user does not have permission.

403

NoPermissionKey.Operator

You are not authorized to operate the tag key.

You are not authorized to operate the tag key.

403

NumberExceed.ResourceIds

The maximum number of ResourceIds is exceeded.

The maximum number of ResourceIds is exceeded.

403

NumberExceed.Tags

The maximum number of Tags is exceeded.

The maximum number of Tags is exceeded.

403

QuotaExceed.TagsPerResource

The maximum number of tags for each resource is exceeded.

The maximum number of tags for each resource is exceeded.

403

Invalid.NextToken

The parameter NextToken is invalid.

The parameter NextToken is invalid.

403

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

The Tag.N.Value parameter is invalid.

403

InvalidParameter.ResourceType

The ResourceType parameter is invalid.

The ResourceType parameter is invalid.

404

Missing.TagKey

Tag.N.Value has been specified and you must specify Tag.N.Key.

Tag.N.Value has been specified and you must specify Tag.N.Key.

404

MissingParameter.AliUid

You must specify AliUid.

You must specify AliUid.

404

MissingParameter.Bid

You must specify Bid.

You must specify Bid.

404

MissingParameter.RegionId

You must specify RegionId.

You must specify RegionId.

404

MissingParameter.RemoveNum

You must specify RemoveNum.

You must specify RemoveNum.

404

MissingParameter.ResourceIdARN

You must specify ResourceIdARN.

You must specify ResourceIdARN.

404

MissingParameter.TagKey

You must specify TagKey.

You must specify TagKey.

404

MissingParameter.Tags

You must specify Tags.

You must specify Tags.

404

NoMatch.RemoveNum

The specified DataNum does not match the deleted number.

The specified DataNum does not match the deleted number.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListTagResources?updateTime=2024-02-27#workbench-doc-change-demo)
