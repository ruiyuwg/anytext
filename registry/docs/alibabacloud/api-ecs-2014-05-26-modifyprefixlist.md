Modifies the name, description, or entries of a prefix list. You can add, modify, and delete entries in the prefix list.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   The specified CIDR block must be valid. For example, 10.0.0.0/8 is a valid CIDR block while 10.0.0.1/8 is not. For more information, see the [What is CIDR?](/help/en/ecs/user-guide/network-faq/#section-jua-0tj-q5m) section in the "Network FAQ" topic.
    
-   When you add or delete an entry, you cannot specify duplicate CIDR blocks. Examples:
    
    -   For IPv4 CIDR blocks, you cannot specify the 10.0.0.0/8 CIDR block in two entries. You cannot specify the 10.0.0.1/32 CIDR block in one entry and the 10.0.0.1 CIDR block in another entry. The two CIDR blocks are the same.
    -   For IPv6 CIDR blocks, you cannot specify the 2001:fd01:0:0:0:0:0:0/32 CIDR block in one entry and the 2001:fd01::/32 CIDR block in another entry. The two CIDR blocks are the same.
-   The CIDR block in an entry to be added cannot the same as that in an entry to be deleted. For example, when you add an entry in which the 10.0.0.0/8 CIDR block is specified, make sure that the 10.0.0.0/8 CIDR block is not specified in an entry to be deleted.
    
-   If you want to modify the description of an entry, you must specify the CIDR block (`AddEntry.N.Cidr`) and new description (`AddEntry.N.Description`) for the entry.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPrefixList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyPrefixList)

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

ecs:ModifyPrefixList

update

\*PrefixList

`acs:ecs:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

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

The region ID of the prefix list. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-chengdu

PrefixListId

string

Yes

The ID of the prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

PrefixListName

string

No

The name of the prefix list. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`. The name can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

PrefixListNameSample

Description

string

No

The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is description.

AddEntry

array<object>

No

The entries to be added to the prefix list.

object

No

Description

string

No

The description in entry N. The description must be 2 to 32 characters in length and cannot start with `http://` or `https://`. Valid values of N: 0 to 200.

Description Sample 01

Cidr

string

Yes

The CIDR block in entry N to be added to the prefix list. Valid values of N: 0 to 200.

Take note of the following items when you add the entries:

-   The total number of entries in the prefix list cannot exceed the maximum number of entries you specified for the prefix list. You can call the [DescribePrefixListAttributes](/help/en/ecs/api-describeprefixlistattributes) operation to query the maximum number of entries that the prefix list can contain.
-   You cannot specify duplicate CIDR blocks.
-   The CIDR blocks cannot be the same as the `RemoveEntry.N.Cidr` values.

192.168.2.0/24

RemoveEntry

array<object>

No

The entries to be deleted from the prefix list.

object

No

Cidr

string

Yes

The CIDR block in entry N to be deleted from the prefix list. Valid values of N: 0 to 200.

Take note of the following items when you delete the entries:

-   You cannot specify duplicate CIDR blocks.
-   The CIDR blocks cannot be the same as the `AddEntry.N.Cidr` values.

192.168.1.0/24

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

38793DB8-A4B2-4AEC-BFD3-111234E9188D

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "38793DB8-A4B2-4AEC-BFD3-111234E9188D"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

%s

A parameter is not specified.

400

InvalidParameter.PrefixListName

The parameter PrefixListName is not valid.

The prefix list name is invalid.

400

InvalidDescription.Malformed

The specified Description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidParameter.CidrDuplicated

%s

Duplicate CIDR blocks are specified.

400

InvalidParameter.CidrMalformed

%s

The specified CIDR block is invalid.

400

LimitExceed.MaxEntries

The number of entries exceeds the MaxEntries of the specified prefix list.

The number of specified entries exceeds the MaxEntries value.

400

LimitExceed.Entry

The number of entries added or removed exceeds the limit.

The number of entries to add or remove at a time exceeds the upper limit.

400

TaskConflict

The operation is too frequent, please wait a moment and try again.

\-

404

InvalidPrefixListId.NotFound

The specified prefix list was not found.

The prefix list does not exist.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-13

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrefixList?updateTime=2026-01-13#workbench-doc-change-demo)

2023-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyPrefixList?updateTime=2023-11-13#workbench-doc-change-demo)
