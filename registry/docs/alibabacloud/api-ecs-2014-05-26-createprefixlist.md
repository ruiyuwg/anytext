Creates a prefix list.

## Operation description

## [](#usage-notes)[](#)Usage notes

-   A prefix list is a collection of network prefixes (CIDR blocks) and can be referenced to configure network rules for other resources. For more information, see [Overview](/help/en/ecs/user-guide/overview-32) .
    
-   When you create a prefix list, take note of the following items:
    
    -   You must specify an IP address family (IPv4 or IPv6) for the prefix list, and cannot change the IP address family after the prefix list is created. You cannot combine IPv4 and IPv6 CIDR blocks in a single prefix list.
    -   You must specify the maximum number of entries that the prefix list can contain. You cannot modify the maximum number of entries after the prefix list is created.
    -   You can specify entries for the prefix list. Each entry consists of a CIDR block and the description for the CIDR block. The total number of entries cannot exceed the maximum number of entries that you specified.
-   For more information about the limits on prefix lists and other resources, see [Limits](/help/en/ecs/user-guide/limitations) .
    
-   You can create Resource Access Management (RAM) users and grant them minimum permissions. This eliminates the need to share the AccessKey pair of your Alibaba Cloud account with other users and reduces security risks for your enterprises. For information about how to grant permissions on prefix lists to RAM users, see [Grant a RAM user permissions on prefix lists](/help/en/doc-detail/206175.html)
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreatePrefixList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreatePrefixList)

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

ecs:CreatePrefixList

create

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

The ID of the region in which to create the prefix list.

cn-chengdu

MaxEntries

integer

Yes

The maximum number of entries that the prefix list can contain. Valid values: 1 to 200.

10

AddressFamily

string

Yes

The IP address family. Valid values:

-   IPv4
-   IPv6

IPv4

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

0c593ea1-3bea-11e9-b96b-88e9fe637760

PrefixListName

string

Yes

The name of the prefix list. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-). It must start with a letter and cannot start with `http://`, `https://`, `com.aliyun`, or `com.alibabacloud`.

PrefixListNameSample

Description

string

No

The description of the prefix list. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.

This is description.

Entry

array<object>

No

The details of entries in the prefix list.

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

The CIDR block in entry N. Valid values of N: 0 to 200. Notes:

-   The total number of entries cannot exceed the `MaxEntries` value.
-   CIDR block types are determined by the IP address family. You cannot combine IPv4 and IPv6 CIDR blocks in a single prefix list.
-   CIDR blocks must be unique across all entries in a prefix list. For example, you cannot specify 192.168.1.0/24 twice in the entries of the prefix list.
-   You can set a single IP address. The system automatically converts the IP address to a CIDR block. For example, if you set 192.168.1.100, the system automatically converts it to 192.168.1.100/32.
-   If you use an IPv6 CIDR block, the system automatically converts the CIDR block to zero and the letters to lowercase. For example, if you specify 2001:0DB8:0000:0000:0000:0000:0000:0000/32, the system converts it to 2001:db8::/32.

For more information about CIDR blocks, see [What is CIDR?](/help/en/vpc/frequently-asked-questions#598efe6ef1v00)

This parameter is left empty by default.

192.168.1.0/24

Tag

array<object>

No

The tags to add to the prefix list.

object

No

Tag N to add to the prefix list.

Key

string

No

The key of tag N. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

TestKey

Value

string

No

The value of tag N. Valid values of N: 1 to 20. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http:// or https://`.

TestValue

ResourceGroupId

string

No

The ID of the resource group to which to assign the prefix list.

rg-bp67acfmxazb4p\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PrefixListId

string

The ID of the prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

RequestId

string

The request ID.

38793DB8-A4B2-4AEC-BFD3-111234E9188D

## Examples

Sample success responses

`JSON`format

```
{
  "PrefixListId": "pl-x1j1k5ykzqlixdcy****",
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

InvalidParameter.AddressFamily

The parameter AddressFamily should be IPv4 or IPv6.

The specified AddressFamily parameter is invalid. The valid values of this parameter are IPv4 and IPv6.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidParameter.PrefixListName

The parameter PrefixListName is not valid.

The prefix list name is invalid.

400

InvalidDescription.Malformed

The specified Description is wrongly formed.

The resource description is invalid. The description must be 2 to 256 characters in length and cannot start with http:// or https://.

400

InvalidClientToken.ValueNotSupported

The ClientToken provided is invalid.

The specified ClientToken parameter is invalid.

400

InvalidParameter.CidrMalformed

%s

The specified CIDR block is invalid.

400

InvalidParameter.CidrDuplicated

%s

Duplicate CIDR blocks are specified.

400

LimitExceed.Entry

The number of entries added or removed exceeds the limit.

The number of entries to add or remove at a time exceeds the upper limit.

400

LimitExceed.MaxEntries

The number of entries exceeds the MaxEntries of the specified prefix list.

The number of specified entries exceeds the MaxEntries value.

404

LimitExceed.PrefixListPerRegion

The number of prefix lists in the region exceeds the limit.

The maximum number of prefix lists in the current region has been reached.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidResourceGroup.NotFound

The specified resource group is not found.

Cannot find the corresponding resource group

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreatePrefixList?updateTime=2025-11-24#workbench-doc-change-demo)

2025-04-21

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreatePrefixList?updateTime=2025-04-21#workbench-doc-change-demo)

2025-01-02

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreatePrefixList?updateTime=2025-01-02#workbench-doc-change-demo)

2023-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreatePrefixList?updateTime=2023-11-13#workbench-doc-change-demo)
