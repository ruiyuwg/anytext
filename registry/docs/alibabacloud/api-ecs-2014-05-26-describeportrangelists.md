Queries the port lists.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePortRangeLists)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePortRangeLists)

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

ecs:DescribePortRangeLists

list

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/*`

PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/{#portRangeListId}`

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.

cn-hangzhou

NextToken

string

No

The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

727d41872117f2816343eeb432fbc5bfd21dc824589d2a4be0b5e8707e68181f

MaxResults

integer

No

The maximum number of entries per page.

-   Maximum value: 100
-   Default value: 10.

10

PortRangeListName

string

No

The name of the port list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

PortRangeListNameSample

PortRangeListId

array

No

The ID of the port list. Valid values of N: 0 to 100.

string

No

The ID of the port list.

prl-2ze9743\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group. If you specify this parameter to query resources, up to 1,000 resources that belong to the specified resource group can be returned in the response. You can call the [ListResourceGroups](/help/en/resource-management/resource-group/developer-reference/api-resourcemanager-2020-03-31-listresourcegroups-rg) operation to query the most recent resource group list.

**Note** A default resource group is not supported.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags that are added to the port list.

object

No

The tag (key-value pairs) that is added to the port list.

Key

string

No

The key of tag N. Valid values: 1 to 20.

If you specify a single tag to query resources, up to 1,000 resources to which the tag is added are returned. If you specify multiple tags to query resources, up to 1,000 resources to which all specified tags are added are returned. To query more than 1,000 resources that have specified tags added, call the [ListTagResources](/help/en/ecs/api-listtagresources) operation.

key for PortRangeList

Value

string

No

The value of tag N.

value for PortRangeList

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

A pagination token. If the return value is empty, no more data is returned.

AAAAAdDWBF2

RequestId

string

The request ID.

6040AD98-11C3-5F78-9346-FCA8E9D8960F

PortRangeLists

array<object>

Details of the port lists.

PortRangeList

object

Details of the port list.

PortRangeListId

string

The ID of the port list.

prl-2ze9743\*\*\*\*

PortRangeListName

string

The name of the port list.

PortRangeListNameSample

MaxEntries

integer

The maximum number of entries in the port list.

20

AssociationCount

integer

The number of associated resources.

1

Description

string

The description of the port list.

This is description.

CreationTime

string

The time when the port list was created.

2024-12-04T07:11Z

ResourceGroupId

string

The ID of the resource group to which to assign the port list.

rg-2zeg82g\*\*\*\*

Tags

array<object>

The tags of the port list.

Tag

object

The tag of the port list.

TagKey

string

The key of tag N.

TestKey

TagValue

string

The value of tag N.

TestValue

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "AAAAAdDWBF2",
  "RequestId": "6040AD98-11C3-5F78-9346-FCA8E9D8960F",
  "PortRangeLists": [
    {
      "PortRangeListId": "prl-2ze9743****",
      "PortRangeListName": "PortRangeListNameSample",
      "MaxEntries": 20,
      "AssociationCount": 1,
      "Description": "This is description.",
      "CreationTime": "2024-12-04T07:11Z",
      "ResourceGroupId": "rg-2zeg82g****",
      "Tags": [
        {
          "TagKey": "TestKey",
          "TagValue": "TestValue"
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

LimitExceed.PortRangeListId

The specified number of PortRangeListId exceeds the limit.

The number of port list IDs specified exceeds the limit.

400

InvalidParameter

The specified parameter is not valid.

A specified parameter is invalid.

404

InvalidRegionId.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
