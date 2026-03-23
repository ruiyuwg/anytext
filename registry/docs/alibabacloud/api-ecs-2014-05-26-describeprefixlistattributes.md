Queries the details of a prefix list, including the name, address family, maximum number of entries, and details of the entries.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrefixListAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribePrefixListAttributes)

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

ecs:DescribePrefixListAttributes

get

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-chengdu

PrefixListId

string

Yes

The ID of the prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

CreationTime

string

The time when the prefix list was created.

2021-02-20T07:11Z

MaxEntries

integer

The maximum number of entries in the prefix list.

10

RequestId

string

The request ID.

38793DB8-A4B2-4AEC-BFD3-111234E9188D

Description

string

The description of the prefix list.

This is description.

AddressFamily

string

The IP address family of the prefix list. Valid values:

-   IPv4
-   IPv6

IPv4

PrefixListName

string

The name of the prefix list.

PrefixListNameSample

PrefixListId

string

The ID of the prefix list.

pl-x1j1k5ykzqlixdcy\*\*\*\*

Entries

array<object>

Details about the entries in the prefix list.

Entry

object

Description

string

The description in entry N.

Description Sample 01

Cidr

string

The CIDR block in entry N.

192.168.1.0/24

## Examples

Sample success responses

`JSON`format

```
{
  "CreationTime": "2021-02-20T07:11Z",
  "MaxEntries": 10,
  "RequestId": "38793DB8-A4B2-4AEC-BFD3-111234E9188D",
  "Description": "This is description.",
  "AddressFamily": "IPv4",
  "PrefixListName": "PrefixListNameSample",
  "PrefixListId": "pl-x1j1k5ykzqlixdcy****",
  "Entries": {
    "Entry": [
      {
        "Description": "Description Sample 01",
        "Cidr": "192.168.1.0/24"
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

2025-01-02

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrefixListAttributes?updateTime=2025-01-02#workbench-doc-change-demo)

2023-11-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribePrefixListAttributes?updateTime=2023-11-13#workbench-doc-change-demo)
