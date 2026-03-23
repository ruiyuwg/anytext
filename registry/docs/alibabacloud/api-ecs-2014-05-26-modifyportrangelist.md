Modifies the name and entries of a port list. You can call this operation to add, modify, and remove entries for a port list.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPortRangeList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPortRangeList)

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

ecs:ModifyPortRangeList

update

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PortRangeListId

string

Yes

The ID of the port list.

prl-2ze9743\*\*\*\*

PortRangeListName

string

No

The name of the port list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

PortRangeListNameSample

Description

string

No

The description of the port list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

This is description.

AddEntry

array<object>

No

The entries that you want to add or modify for the port list.

object

No

Entry N that you want to add or modify for the port list.

PortRange

string

No

The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:

-   The total number of entries in the port list cannot exceed the `MaxEntries` value.
-   `PortRange` in different entries cannot be duplicated.
-   The value of this parameter cannot be the same as the value of `RemoveEntry.N.PortRange`.

80/80

Description

string

No

The description of the port range in entry N. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.

This is description.

RemoveEntry

array<object>

No

The entries that you want to remove from the port list.

object

No

Entry N that you want to remove from the port list.

PortRange

string

No

The port range in entry N. Valid values of N: 0 to 200. Take note of the following limits:

-   `PortRange` in different entries cannot be duplicated.
-   The value of this parameter cannot be the same as the value of `AddEntry.N.PortRange`.

80/80

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
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

InvalidPortRangeListId.NotFound

The specified port range list was not found.

The specified port list was not found.

400

InvalidOperation.MaxEntriesCountExceed

The specified MaxEntries exceeded the upper limit.

The specified MaxEntries parameter exceeds the maximum limit.

400

InvalidOperation.EntryCountExceedMaxEntries

The number of entries in the port list exceeds MaxEntries.

The number of entries specified exceeds the MaxEntries value of the port list.

400

LimitExceed.MaxEntries

The number of entries exceeds the MaxEntries of the specified PortRangeList.

The number of entries in the port list exceeds the MaxEntries value.

400

LimitExceed.Entry

The number of entries added or removed exceeds the limit.

The number of entries to add or remove at a time exceeds the upper limit.

400

InvalidParameter.PortRangeDuplicated

The specified PortRange is duplicated.

Duplicate port range specified

400

InvalidParameter.PortRangeListName

The specified parameter PortRangeListName is not valid.

The specified port list name is invalid.

400

InvalidMaxEntries.LessThanCurrentEntries

The specified MaxEntries is less than current entries.

The maximum number of entries in the port list, which is less than the current number of entries.

400

InvalidParameter.PortRange

The specified parameter PortRange is not valid. It should be two integers less than 65535 in specified format.

Entries in the port list PortRange not in the required format. Two integers less than 65535 should be specified, separated by a slash.

400

MissingParameter

Missing mandatory parameter.

Required parameters must be specified.

400

InvalidDescription.Malformed

The specifid Description is not valid.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

403

AuthorizationLimitExceed

The limit of authorization records in the security group reaches.

The security group has reached the maximum number of rules that can be added to it.

404

InvalidRegionId.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
