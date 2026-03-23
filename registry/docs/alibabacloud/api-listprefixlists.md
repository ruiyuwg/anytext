Queries prefix lists.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListPrefixLists)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListPrefixLists)

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

vpc:ListPrefixLists

list

PrefixList

`acs:vpc:{#regionId}:{#accountId}:prefixlist/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PrefixListIds

array

No

The IDs of prefix lists to be queried. Valid values of **N** are **1** to **100**, which specifies that you can query up to 100 prefix lists at a time.

string

No

The ID of the prefix list.

pl-0b7hwu67\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. Valid values:

-   You do not need to specify this parameter for the first request.
-   You must specify the token that is obtained from the previous query as the value of NextToken.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

long

No

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

20

ResourceGroupId

string

No

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4ph\*\*\*\*

Tags

array<object>

No

The tags.

object

No

Key

string

No

The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The key cannot exceed 64 characters in length, and can contain digits, periods (.), underscores (\_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The tag value. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value cannot exceed 128 characters in length, and can contain digits, periods (.), underscores (\_), and hyphens (-). The key must start with a letter but cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.

FinanceJoshua

RegionId

string

Yes

The ID of the region where you want to query prefix lists.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

PrefixListName

string

No

The name of the prefix list to query.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

name

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

DF72F7BB-5DFA-529C-887E-B0BB70D89C4F

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no next page exists.
-   If a value is returned for **NextToken**, the value indicates the token that is used for the next request to retrieve a new page of results.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

TotalCount

long

The total number of entries returned.

1

MaxResults

long

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

20

PrefixLists

array<object>

The information about the prefix lists.

PrefixList

object

PrefixListId

string

The ID of the prefix list.

pl-m5estsqsdqwg88hjf\*\*\*\*

PrefixListName

string

The name of the prefix list.

test

PrefixListDescription

string

The description of the prefix list.

Created with oss service by system.

IpVersion

string

The IP version of the prefix list. Valid values:

-   **IPV4**
-   **IPV6**

IPV4

CreationTime

string

The time when the prefix list was created.

2022-07-12T14:22:32Z

CidrBlocks

array

The CIDR block specified in the prefix list.

CidrBlock

string

The CIDR block specified in the prefix list.

100.115.XX.XX/24

ShareType

string

Indicates whether the prefix list is shared. Valid values:

-   **Shared**: The prefix list is shared.
-   If an empty value is returned, the prefix list is not shared.

Shared

MaxEntries

integer

The maximum number of CIDR blocks that you can specify in the prefix list.

10

Status

string

The status of the prefix list. Valid values:

-   **Created**
-   **Deleted**
-   **Modifying**

Created

OwnerId

string

The Alibaba Cloud account to which the prefix list belongs.

1210123456123456

PrefixListStatus

string

The status of the prefix list. Valid values:

-   **Created**
-   **Deleted**
-   **Modifying**

**Note** This parameter is the same as the **Status** parameter.

Created

RegionId

string

The region ID of the prefix list.

cn-hangzhou

ResourceGroupId

string

The ID of the resource group to which the prefix list belongs.

rg-bp67acfmxazb4ph\*\*\*\*

Tags

array<object>

The tags.

Tag

object

Key

string

The tag key.

FinanceDept

Value

string

The tag value.

FinanceJoshua

PrefixListType

string

The type of the prefix list.

Custom

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DF72F7BB-5DFA-529C-887E-B0BB70D89C4F",
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "TotalCount": 1,
  "MaxResults": 20,
  "PrefixLists": [
    {
      "PrefixListId": "pl-m5estsqsdqwg88hjf****",
      "PrefixListName": "test",
      "PrefixListDescription": "Created with oss service by system.",
      "IpVersion": "IPV4",
      "CreationTime": "2022-07-12T14:22:32Z",
      "CidrBlocks": [
        "100.115.XX.XX/24"
      ],
      "ShareType": "Shared",
      "MaxEntries": 10,
      "Status": "Created",
      "OwnerId": 1210123456123456,
      "PrefixListStatus": "Created",
      "RegionId": "cn-hangzhou",
      "ResourceGroupId": "rg-bp67acfmxazb4ph****",
      "Tags": [
        {
          "Key": "FinanceDept",
          "Value": "FinanceJoshua"
        }
      ],
      "PrefixListType": "Custom"
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

IllegalParam.NextToken

The specified NextToken is invalid.

The specified NextToken is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-12

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListPrefixLists?updateTime=2023-12-12#workbench-doc-change-demo)
