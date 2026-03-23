Queries the tags that are added to one or more Elastic Compute Service (ECS) resources.

## Operation description

## [](#usage-notes)[](#)Usage notes

Specify at least one of the following parameters or parameter pairs in a request to determine a query object:

-   `ResourceId.N`
-   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
-   `TagFilter.N`

If one of the following sets of request parameters is specified as filter conditions, only ECS resources that meet all the specified filter conditions are returned:

-   Set 1: `Tag.N.Key, Tag.N.Value` and `ResourceId.N`
-   Set 2: `TagFilter.N.TagKey, TagFilter.N.TagValues.N` and `ResourceId.N`

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ListTagResources)

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

ecs:ListTagResources

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

The region ID of the resource. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a4883

ResourceType

string

Yes

The resource type. Valid values:

-   instance: ECS instance
-   disk: disk
-   snapshot: snapshot
-   image: image
-   securitygroup: security group
-   volume: storage volume
-   eni: elastic network interface (ENI)
-   ddh: dedicated host
-   ddhcluster: dedicated host cluster
-   keypair: SSH key pair
-   launchtemplate: launch template
-   reservedinstance: reserved instance
-   snapshotpolicy: automatic snapshot policy
-   elasticityassurance: elasticity assurance
-   capacityreservation: capacity reservation
-   command: Cloud Assistant command
-   invocation: Cloud Assistant command execution result or file delivery result
-   activation: activation code for a Cloud Assistant managed instance
-   managedinstance: Cloud Assistant managed instance

instance

ResourceId

array

No

The resource IDs. Valid values of N: 1 to 50.

string

No

The resource ID. Valid values of N: 1 to 50.

i-bp1j6qtvdm8w0z1o\*\*\*\*

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of tag N used for exact search of ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.

Methods of using the `Tag.N` parameter pair (Tag.N.Key and Tag.N.Value):

-   Method 1: Use this parameter pair for exact search of ECS resources that have specified tags added. Each tag is a key-value pair.
    
    -   If you specify only `Tag.N.Key`, all ECS resources whose tags contain the specified tag key are returned.
    -   If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error is returned.
    -   If you specify multiple tag key-value pairs, only the ECS resources that have all these tag key-value pairs added are returned.
-   Method 2: Use this parameter pair to query resource information of a non-default resource group. Set `Key` to `acs:rm:rgId` and `Value` to the ID of a resource group.
    
    -   If you set `Key` to `acs:rm:rgId`, you must set `Value` to the ID of a non-default resource group. If you set Value to the ID of the default resource group, an error message is returned.
    -   If you set `Key` to `acs:rm:rgId`, you cannot specify other Tag.N parameter pairs. If you specify multiple `Tag.N` parameter pairs to query resource groups and resources at the same time, an error message is returned.

TestKey

Value

string

No

The value of tag N used for exact search of ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.

**Note** When Key is set to `acs:rm:rgId`, you can set Value only to the ID of a non-default resource group.

TestValue

TagFilter

array<object>

No

The regular expressions used to filter tags.

object

No

The regular expression used to filter tags.

TagValues

array

No

The values of tag N used for fuzzy search of ECS resources. The tag values must be 1 to 128 characters in length. Valid values of N: 1 to 5. For more information, see the description of `TagFilter.N.TagKey`.

string

No

The value of tag N used for fuzzy search of ECS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 5. For more information, see the description of `TagFilter.N.TagKey`.

TestTagFilter

TagKey

string

No

The key of tag N used for fuzzy search of ECS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 5.

The `TagFilter.N` parameter pair (TagFilter.N.TagKey and TagFilter.N.TagValues.N) is used for fuzzy search of ECS resources that have specified tags added. In the specified tags, a single tag key may correspond to one or more tag values. Fuzzy search may have a latency of 2 seconds. A fuzzy search can return a result set of entries about a maximum of 5,000 resources.

-   When you use `TagFilter.N.TagKey` for fuzzy search of ECS resources, you must leave `TagFilter.N.TagValues.N` empty. For example, to query ECS resources whose tags contain the `environment` tag key, you can set `TagFilter.1.TagKey` to `env*` for prefix search, `*env*` for infix search, or `env` for exact search, but you must leave `TagFilter.1.TagValues` empty.
-   When you use `TagFilter.N.TagValues.N` for fuzzy search of ECS resources, you must set `TagFilter.N.TagKey` to an exact value. For example, to query ECS resources that have a tag composed of the `env` tag key and the `product` tag value, you must set `TagFilter.1.TagKey` to `env` and can set `TagFilter.1.TagValues.1` to `proc*` for prefix search, to `*proc*` for infix search, or to `proc` for exact search. Only one of the preceding search methods can be used for each tag key (`TagFilter.N.TagKey`). If multiple search methods are configured for a tag key, the first search method prevails.
-   If you specify multiple tag keys, only the ECS resources that have all the specified tag keys added are returned.
-   If you specify a tag key that corresponds to multiple tag values, all the ECS resources that have one or more of these tag key-value pairs added are returned.

**Note** The `TagFilter.N` parameter pair (TagFilter.N.TagKey and TagFilter.N.TagValues.N) cannot be used together with the `Tag.N` parameter pair (Tag.N.Key and Tag.N.Value). Otherwise, an error message is returned.

env

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The request ID.

484256DA-D816-44D2-9D86-B6EE4D5BA78C

TagResources

array<object>

The information about the resource and its tags, including the resource ID, the resource type, and the keys and values of the tags.

TagResource

object

TagValue

string

The tag value of the resource.

TestValue

ResourceType

string

The resource type. Valid values:

-   instance: ECS instance
-   disk: disk
-   snapshot: snapshot
-   image: image
-   securitygroup: security group
-   volume: storage volume
-   eni: ENI
-   ddh: dedicated host
-   ddhcluster: dedicated host cluster
-   keypair: SSH key pair
-   launchtemplate: launch template
-   reservedinstance: reserved instance
-   snapshotpolicy: automatic snapshot policy
-   elasticityassurance: elasticity assurance
-   capacityreservation: capacity reservation
-   command: Cloud Assistant command
-   invocation: Cloud Assistant command execution result
-   activation: activation code for a Cloud Assistant managed instance
-   managedinstance: Cloud Assistant managed instance

instance

ResourceId

string

The resource ID.

i-bp1j6qtvdm8w0z1o\*\*\*\*

TagKey

string

The tag key of the resource.

TestKey

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "484256DA-D816-44D2-9D86-B6EE4D5BA78C",
  "TagResources": {
    "TagResource": [
      {
        "TagValue": "TestValue",
        "ResourceType": "instance",
        "ResourceId": "i-bp1j6qtvdm8w0z1o****",
        "TagKey": "TestKey"
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

InvalidDefaultResourceGroup.NotSupported

The specified parameter Tag is not support for default resource group.

The default resource group cannot be queried.

400

InvalidTag.NotSupported

You can only specify Tag for either resource tag or resource group.

Resource groups and tags cannot be queried at the same time.

400

NumberExceed.ResourceIds

The ResourceIds parameter's number is exceed , Valid : 50.

The number of ResourceIds parameters specified exceeds the limit.

400

NumberExceed.Tags

The Tags parameter's number is exceed , Valid : 20.

The number of labels specified exceeds the limit.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

OperationDenied.QuotaExceed

The quota of tags on resource is beyond permitted range.

The maximum number of tags on resource is exceeded.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

400

Invalid.Scope

The specified scope is invalid.

The specified Scope parameter is invalid.

400

InvalidTags.MalFormed

The tags must be empty, when the tagFilters is not empty.

\-

403

PermissionDenied.TagOwnerBid

The specified operator not have permission to set TagOwnerBid value.

\-

403

PermissionDenied.TagOwnerUid

The specified operator not have permission to set TagOwnerUid value.

You are not authorized to specify the TagOwnerUid parameter.

403

PermissionDenied.Scope

The specified operator not have permission to set Scope value.

You are not authorized to specify the Scope parameter.

403

InvalidResourceId.NotSupported

The specified ResourceId does not support tagging.

The specified resource does not support tagging.

403

NoPermission.Tag

The operator is not permission for the tag.

You are not authorized to manage the tag.

403

BothEmpty.TagsAndResources

The specified Tags and ResourcesIds are not allow to both empty.

The parameter passed in must contain Tags or

403

PermissionDenied.TagsFuzzyQuery

The specified operator has not permission to query fuzzy tags.

\-

403

NumberExceed.TagValues

The number of the specified TagValues is beyond permitted range, the max is 5.

\-

403

InvalidFilter.Malformed

The specified Filter is not valid.

\-

403

InvalidTagFilter.Malformed

The specified TagFilter is not valid.

\-

403

Invalid.NextToken

The specified NextToken is not valid.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidRegionId.NotFound

%s

The specified region ID does not exist.

404

MissingParameter.ResourceIds

The parameter - ResourceIds.N should not be null.

\-

404

MissingParameter.TagOwnerUid

The parameter - TagOwnerUid should not be null.

\-

404

MissingParameter.TagOwnerBid

The parameter - TagOwnerBid should not be null.

\-

404

MissingParameter.ResourceType

The parameter - ResourceType should not be null.

The ResourceType parameter is required.

404

MissingParameter.Tags

The parameter - Tags should not be null.

\-

404

MissingParameter.RegionId

The parameter - RegionId should not be null.

\-

404

InvalidResourceId.NotFound

The specified ResourceIds are not found in our records.

The specified resource does not exist. Check whether the ResourceId parameter is correct.

404

InvalidResourceType.NotFound

The ResourceType provided does not exist in our records.

The specified resource type does not exist.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

500

ServiceUnavailable

The service is unavailable, please try again later.

\-

500

InternalError

The process of creating snapshot has failed due to some unknown error.

The snapshot cannot be created.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
