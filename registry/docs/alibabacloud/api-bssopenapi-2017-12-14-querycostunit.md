Queries all cost centers within the current node of the cost center tree. If the ParentUnitId parameter is set to -1, all cost centers are queried.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/QueryCostUnit)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/BssOpenApi/2017-12-14/QueryCostUnit)

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

bss:QueryCostUnit

get

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

OwnerUid

long

Yes

The user ID of the cost center owner.

28394563429587

ParentUnitId

long

Yes

The ID of the parent cost center. A value of -1 indicates the root cost center.

\-1

PageNum

integer

No

The page number of the page to return.

1

PageSize

integer

No

The number of entries per page. A maximum of 300 entries can be returned per page.

20

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The status code.

Success

Message

string

The error message returned.

Successful!

RequestId

string

The ID of the request.

6000EE23-274B-4E07-A697-FF2E999520A4

Success

boolean

Indicates whether the request was successful.

true

Data

object

The data returned.

PageNum

integer

The page number of the returned page.

1

PageSize

integer

The number of entries returned on each page.

20

TotalCount

integer

The total number of returned entries.

1

CostUnitDtoList

array<object>

The cost centers.

CostUnitDtoList

object

ParentUnitId

long

The ID of the parent cost center. A value of -1 indicates the root cost center.

\-1

UnitName

string

The name of the cost center.

test

UnitId

long

The ID of the cost center.

23534

OwnerUid

long

The user ID of the cost center owner.

2343464

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "Success",
  "Message": "Successful!",
  "RequestId": "6000EE23-274B-4E07-A697-FF2E999520A4",
  "Success": true,
  "Data": {
    "PageNum": 1,
    "PageSize": 20,
    "TotalCount": 1,
    "CostUnitDtoList": [
      {
        "ParentUnitId": -1,
        "UnitName": "test",
        "UnitId": 23534,
        "OwnerUid": 2343464
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/BssOpenApi/2017-12-14/errorCode).
