Creates a port list. You can associate a port list with resources, such as security groups.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreatePortRangeList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreatePortRangeList)

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

ecs:CreatePortRangeList

create

\*PortRangeList

`acs:ecs:{#regionId}:{#accountId}:portrangelist/*`

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

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

MaxEntries

integer

Yes

The maximum number of entries in the port list. The value cannot be changed after you create the port list. Valid values: 1 to 2000.

**Note** When you reference a port list in a resource, such as a security group, the maximum number of entries (instead of the actual number of entries) in the port list counts against the rule quota for the resource. Set a proper value for MaxEntries.

10

PortRangeListName

string

Yes

The name of the port list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http://, https://, com.aliyun, or com.alibabacloud. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

PortRangeListNameSample

Description

string

No

The description of the port list. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

Description information of PortRangeList

Entry

array<object>

No

The port list entries.

object

No

The port list entry.

PortRange

string

No

Port range N. Valid values of N: 0 to 200.

-   The total number of entries cannot exceed the `MaxEntries` value.
-   `PortRange` in multiple entries cannot be duplicated.

80/80

Description

string

No

The description of port range N. The description must be 2 to 32 characters in length and cannot start with http:// or https://. Valid values of N: 0 to 200.

Description information of Entry

ResourceGroupId

string

No

The ID of the resource group to which the port list belongs.

rg-aek3b6jzp66\*\*\*\*

Tag

array<object>

No

The tags to add to the port list. You can add 0 to 20 tags to the port list.

object

No

Tag N to add to the port list.

Key

string

No

The key of tag N to add to the port list.

The tag key cannot be empty or an empty string. The tag key can be up to 128 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.

key for PortRangeList

Value

string

No

The value of tag N to add to the port list.

The tag value cannot be empty but can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.

value for PortRangeList

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

PortRangeListId

string

The ID of the port list.

prl-2ze9743\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "PortRangeListId": "prl-2ze9743****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParam.Entry

The specified parameter Entry is not valid.

The specified entry parameter is invalid.

400

InvalidOperation.MaxEntriesCountExceed

The specified MaxEntries exceeded the upper limit.

The specified MaxEntries parameter exceeds the maximum limit.

400

InvalidOperation.EntryCountExceedMaxEntries

The number of entries in the port list exceeds MaxEntries.

The number of entries specified exceeds the MaxEntries value of the port list.

400

InvalidParameter.PortRange

The specified parameter PortRange is not valid. It should be two integers less than 65535 in specified format.

Entries in the port list PortRange not in the required format. Two integers less than 65535 should be specified, separated by a slash.

400

InvalidParameter.PortRangeListName

The specified parameter PortRangeListName is not valid.

The specified port list name is invalid.

400

LimitExceed.MaxEntries

The number of entries exceeds the MaxEntries of the specified PortRangeList.

The number of entries in the port list exceeds the MaxEntries value.

400

LimitExceed.Entry

The number of entries added or removed exceeds the limit.

The number of entries to add or remove at a time exceeds the upper limit.

400

InvalidOperation.MaxCountExceed

The number of port range list in the current account has exceeded quota.

The number of port lists under the current account exceeds the limit of the number of port lists under the user account.

400

InvalidParameter.PortRangeDuplicated

The specified PortRange is duplicated.

Duplicate port range specified

400

InvalidDescription.Malformed

The specifid Description is not valid.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

404

InvalidRegionId.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).
