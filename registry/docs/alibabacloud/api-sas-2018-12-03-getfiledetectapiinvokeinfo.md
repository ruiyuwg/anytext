Obtains the usage information of the malicious file detection SDK.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Sas/2018-12-03/GetFileDetectApiInvokeInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Sas/2018-12-03/GetFileDetectApiInvokeInfo)

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

yundun-sas:GetFileDetectApiInvokeInfo

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

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

9f368b6e-d60a-43c5-bd6f-c7087f2d\*\*\*\*

Data

object

Returns the response body.

AuthCount

long

The total number of authorizations.

10000

RemainAuthCount

long

The number of remaining authorizations.

900

FlowRate

integer

The frequency of calls.

20

TimeUnit

string

The time unit of the frequency limit. Value:

-   **SECONDS**
-   **MINUTES**

SECONDS

Expire

long

The timestamp of the expiration date of the authorization number.

1815753600000

SaleVersion

integer

The Authorized Version. Valid values include:

-   **1:** trial version
-   **2:** Enterprise Edition

2

InvokeCount

long

The number of authorizations used.

10

InvokeCountInSaleVersion

long

The number of authorizations used(excluding trials).

20

AuthCountInSaleVersion

long

The total number of authorizations(excluding trials).

20

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9f368b6e-d60a-43c5-bd6f-c7087f2d****",
  "Data": {
    "AuthCount": 10000,
    "RemainAuthCount": 900,
    "FlowRate": 20,
    "TimeUnit": "SECONDS",
    "Expire": 1815753600000,
    "SaleVersion": 2,
    "InvokeCount": 10,
    "InvokeCountInSaleVersion": 20,
    "AuthCountInSaleVersion": 20
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

NoPermission

caller has no permission

You are not authorized to do this operation.

500

ServerError

ServerError

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Sas/2018-12-03/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
