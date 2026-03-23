Creates or obtains a virtual license order.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateOrGetVirtualLicenseOrder)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/CreateOrGetVirtualLicenseOrder)

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

polardb:CreateOrGetVirtualLicenseOrder

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

Engine

string

Yes

The type of the engine. Valid values: PG, Oracle, and MySQL.

PG

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

ActivatedCodeCount

integer

The number of generated activation codes.

1

ActivationCodeQuota

integer

The maximum number of activation codes that you can apply for.

10

AliyunOrderId

string

The Alibaba Cloud order ID (including the virtual order ID).

2233\*\*\*\*445566

AllowEmptySystemIdentifier

boolean

Indicates whether activation codes can be generated without the system identifier.

false

GmtCreated

string

The time when the order was created.

2024-10-16 16:46:20

GmtModified

string

The time when the order was last updated.

2024-10-16 16:46:20

IsVirtualOrder

boolean

Indicates whether the order is a virtual order (virtual orders allow pre-generation of activation codes).

true

IsVirtualOrderFrozen

boolean

Indicates whether the virtual order is frozen (activation codes cannot be generated for a frozen virtual order).

false

PackageType

string

The plan type.

pre\_generation\_long\_term

PackageValidity

string

The validity period of the plan, which is one year (common) or thirty years (long-term).

30 years

PurchaseChannel

string

The purchase channel.

aliyun\_market

RequestId

string

The ID of the request.

45D24263-7E3A-4140-9472-\*\*\*\*\*\*\*\*\*\*\*\*

VirtualOrderId

string

The ID of the virtual order.

2024\*\*\*\*\*\*\*\*483

## Examples

Sample success responses

`JSON`format

```
{
  "ActivatedCodeCount": 1,
  "ActivationCodeQuota": 10,
  "AliyunOrderId": "2233****445566",
  "AllowEmptySystemIdentifier": false,
  "GmtCreated": "2024-10-16 16:46:20",
  "GmtModified": "2024-10-16 16:46:20",
  "IsVirtualOrder": true,
  "IsVirtualOrderFrozen": false,
  "PackageType": "pre_generation_long_term",
  "PackageValidity": "30 years",
  "PurchaseChannel": "aliyun_market",
  "RequestId": "45D24263-7E3A-4140-9472-************",
  "VirtualOrderId": "2024********483"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
