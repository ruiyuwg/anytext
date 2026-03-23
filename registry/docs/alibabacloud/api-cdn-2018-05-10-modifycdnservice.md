Changes the metering method of Alibaba Cloud CDN.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/ModifyCdnService)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/ModifyCdnService)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:ModifyCdnService

none

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

InternetChargeType

string

Yes

The new metering method for Alibaba Cloud CDN. Valid values:

-   **PayByTraffic**: pay-by-data-transfer
-   **PayByBandwidth**: pay-by-bandwidth

PayByTraffic

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

16A96B9A-F203-4EC5-8E43-CB92E68F4CD8

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "16A96B9A-F203-4EC5-8E43-CB92E68F4CD8"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter

The specified value of parameter "InternetChargeType" is not valid.

The specified InternetChargeType parameter is invalid.

400

InsufficientBalance

Your account does not have enough balance.

You have insufficient balance in your account. Top up or add funds to your account.

400

FUWU\_BIZ\_COMMODITY\_VERIFY\_FAIL\_INVALID\_PAY\_METHOD

INVALID\_PAY\_METHOD

The specified payment method is invalid.

400

FUWU\_BIZ\_COMMODITY\_VERIFY\_FAIL\_HASORDER

You have an order not yet effective

The previous order that you placed has not taken effect.

400

CSS\_CHECK\_UPDOWNGRADE\_ERROR

You have an order not yet effective

\-

400

COMMODITY.INVALID\_COMPONENT

The specified value of parameter "InternetChargeType" is not valid.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/ModifyCdnService?updateTime=2024-12-18#workbench-doc-change-demo)
