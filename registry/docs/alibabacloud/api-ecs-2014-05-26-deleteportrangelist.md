Deletes a port list and all entries in the port list.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeletePortRangeList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeletePortRangeList)

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

ecs:DeletePortRangeList

delete

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

**Note** If the port list is associated with other resources, you cannot delete the port list. You must disassociate the port list from the resources and then delete the port list.

prl-2ze9743\*\*\*\*

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidOperation.Conflict

The port range list has conflict task.

The port list has conflicting tasks.

400

InvalidPortRangeListId.AssociationExist

The specified port range list has association resources.

The associated resource exists in the port list.

400

InvalidPortRangeListId.NotFound

The specified port range list was not found.

The specified port list was not found.

404

InvalidRegionId.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
