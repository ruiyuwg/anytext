Queries the resources that are associated with a port list, such as security groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePortRangeListAssociations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePortRangeListAssociations)

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

ecs:DescribePortRangeListAssociations

list

\*PortRangeList

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

The region ID of the port list. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PortRangeListId

string

Yes

The ID of the port list.

prl-2ze9743\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

AAAAARbaCuN6hiD08qrLdwJ9Fh15YZPnzqF7Vs2EB6Ix327v

MaxResults

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

The data returned.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If the return value is empty, no more data is returned.

caeba0bbb2be03f84eb48b699f0a4883

PortRangeListAssociations

array<object>

The resources that are associated with the port list.

PortRangeListAssociation

object

The resource that is associated with the port list.

ResourceId

string

The ID of the resource.

sg-2zefu72\*\*\*\*

ResourceType

string

The type of the resource. Valid value: SecurityGroup.

SecurityGroup

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "PortRangeListAssociations": [
    {
      "ResourceId": "sg-2zefu72****",
      "ResourceType": "SecurityGroup"
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

InvalidPortRangeListId.NotFound

The specified port range list was not found.

The specified port list was not found.

400

InvalidParameter

The specified parameter is not valid.

A specified parameter is invalid.

404

InvalidRegionId.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
