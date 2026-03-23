Queries all account groups within the current management account or delegated administrator account.

## Operation description

The sample request in this topic shows you how to query account groups. A maximum of 10 entries can be returned for the request. As shown in the responses, the account group returned is named as `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type, which indicates a custom account group. The account group contains two member accounts.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregators)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregators)

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

config:ListAggregators

get

\*Aggregator

`acs:config:*:{#accountId}:aggregator/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0

MaxResults

integer

Yes

The maximum number of entries to return in a request. Valid values: 1 to 100.

10

Tag

array<object>

No

The tags of the resource.

You can add up to 20 tags to a resource.

object

No

The tags of the resource.

You can add up to 20 tags to a resource.

Key

string

No

The tag key of the resource. You can specify up to 20 tag keys.

The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs`:. The tag key cannot contain `http://` or `https://`.

key-1

Value

string

No

The tag values.

The tag values can be an empty string or up to 128 characters in length. The tag values cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Each key-value must be unique. You can specify at most 20 tag values in each call.

value-1

For information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response parameters

Parameter

Type

Description

Example

object

This operation does not return any operation-specific parameters.

RequestId

string

The request ID.

20C8526D-12C5-4336-BC72-EBD5D1BA732F

AggregatorsResult

object

The account groups.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0

Aggregators

array<object>

The list of the account groups.

Aggregators

object

N/A.

AggregatorCreateTimestamp

long

The timestamp generated when the account group was created.

1623036305000

AggregatorAccountCount

long

The number of member accounts in the account group.

2

Description

string

The description of the account group.

Example-description

AggregatorName

string

The name of the account group.

Test\_Group

AggregatorStatus

integer

The status of the account group. Valid values:

-   0: The account group is being created.
-   1: The account group was created.

1

AggregatorType

string

The type of the account group. Valid values:

-   RD: global account group.
-   FOLDER: account group of the folder.
-   CUSTOM: custom account group.

CUSTOM

AccountId

long

The ID of the management account that is used to create the account group.

100931896542\*\*\*\*

AggregatorId

string

The ID of the account group.

ca-88ea626622af0055\*\*\*\*

FolderId

string

The ID of the folder.

r-BU\*\*\*\*

Tags

array<object>

tags

tags

object

tags

TagKey

string

The tag keys of the resource.

key-1

TagValue

string

The tag values of the resource.

value-1

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "20C8526D-12C5-4336-BC72-EBD5D1BA732F",
  "AggregatorsResult": {
    "NextToken": "TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0",
    "Aggregators": [
      {
        "AggregatorCreateTimestamp": 1623036305000,
        "AggregatorAccountCount": 2,
        "Description": "Example-description",
        "AggregatorName": "Test_Group",
        "AggregatorStatus": 1,
        "AggregatorType": "CUSTOM",
        "AccountId": 0,
        "AggregatorId": "ca-88ea626622af0055****",
        "FolderId": "r-BU****",
        "Tags": [
          {
            "TagKey": "key-1",
            "TagValue": "value-1"
          }
        ]
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

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

404

AccountNotExisted

Your account does not exist.

\-

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Config/2020-09-07/errorCode).
