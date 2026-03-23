Creates an order for resource occupation of an Express Connect circuit.

## Operation description

**Note** You can call this operation only when the Express Connect circuit is in the **Complete** state.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreatePhysicalConnectionOccupancyOrder)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreatePhysicalConnectionOccupancyOrder)

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

vpc:CreatePhysicalConnectionOccupancyOrder

create

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/{#PhysicalConnectionId}`

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

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

PhysicalConnectionId

string

Yes

The ID of the Express Connect circuit.

pc-bp1hp0wr072f6\*\*\*\*

Period

integer

No

The subscription duration.

-   If **PricingCycle** is set to **Month**, set **Period** to a value from **1 to 9**.
-   If **PricingCycle** is set to **Year**, set **Period** to a value from **1 to 5**.

1

InstanceChargeType

string

No

The billing method. Set the value to

**PrePaid**, which specifies the subscription billing method. If you choose this billing method, make sure that your Alibaba Cloud account supports balance payments or credit payments.

PrePaid

AutoPay

boolean

No

Specifies whether to enable automatic payments. Valid values:

-   **true**: yes Make sure that you have a sufficient balance in your account. Otherwise, your order becomes invalid and is automatically canceled.
-   **false**: disables automatic payment. This is the default value.

false

PricingCycle

string

No

The billing cycle of the subscription. Valid values:

-   **Month** (default)
-   **Year**

Month

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests.

CBCE910E-D396-4944

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

9B9300FE-11E2-4E3B-949C-BED3B44DD26D

Data

object

The details.

OrderId

string

The ID of the order that is placed.

50187055895\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "9B9300FE-11E2-4E3B-949C-BED3B44DD26D",
  "Data": {
    "OrderId": "50187055895****"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IAbs.InvalidStatus.ValueNotSupported

status is not supported.

The status is invalid.

400

InvalidPrice.NotFound

Pricing plan result not found.

The Price parameter is set to an invalid value.

400

InvalidPhysicalConnectionChargeType.Malformed

Specified Physical Connection ChargeType is not valid.

The InstanceChargeType parameter is set to an invalid value.

400

InvalidPhysicalConnectionPeriod.Malformed

Specified Physical Connection Period is not valid.

The Period parameter is set to an invalid value.

400

InvalidPhysicalConnectionPricingCycle.Malformed

Specified Physical Connection PricingCycle is not valid.

\-

400

Forbidden.NotAllowedInState

The request does not allow in this state.

The operation cannot be performed when the Express Connect circuit in the current state.

400

INSTANCE.STATUS.NOT.ALLOW

Instance status not allow

The instance in the current state does not support the operation.

400

Abs.InstanceNotExist

The specified instance does not exist.

The specified instance does not exist.

400

IncorrectStatus.PhysicalConnection

Invalid physical connection status.

The Express Connect circuit is in an invalid state.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidPhysicalConnectionId.NotFound

The PhysicalConnectionId provided does not exist in our records.

The Express Connect circuit does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnectionOccupancyOrder?updateTime=2024-07-29#workbench-doc-change-demo)

2023-12-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnectionOccupancyOrder?updateTime=2023-12-21#workbench-doc-change-demo)

2023-09-11

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreatePhysicalConnectionOccupancyOrder?updateTime=2023-09-11#workbench-doc-change-demo)
