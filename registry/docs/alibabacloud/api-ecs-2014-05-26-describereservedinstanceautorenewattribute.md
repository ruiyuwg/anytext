Queries the auto-renewal attributes of one or more reserved instances, including the auto-renewal duration and auto-renewal status.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute)

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

ecs:DescribeReservedInstanceAutoRenewAttribute

get

\*ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#ReservedInstanceId}`

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

The region ID of the reserved instance.

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ReservedInstanceId

array

No

The IDs of reserved instances.

string

No

The ID of the reserved instance. You can call the [DescribeReservedInstances](/help/en/ecs/api-describereservedinstances) operation to query the IDs of reserved instances that you purchased.

You can specify the IDs of up to 100 reserved instances in a single request.

ecsri-ajdfaj\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE7\*\*\*\*

ReservedInstanceRenewAttributes

array<object>

Details about the auto-renewal settings of the reserved instances.

ReservedInstanceRenewAttribute

object

PeriodUnit

string

The unit of the auto-renewal duration.

Valid values: Year and Month.

Month

Duration

integer

The auto-renewal duration.

1

ReservedInstanceId

string

The ID of the reserved instance.

ecsri-ajdfaj\*\*\*\*

RenewalStatus

string

The auto-renewal status of the reserved instance. Valid values:

-   AutoRenewal: automatically renews the reserved instance.
-   Normal: manually renews the reserved instances.

AutoRenewal

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE7****",
  "ReservedInstanceRenewAttributes": {
    "ReservedInstanceRenewAttribute": [
      {
        "PeriodUnit": "Month",
        "Duration": 1,
        "ReservedInstanceId": "ecsri-ajdfaj****",
        "RenewalStatus": "AutoRenewal"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

403

ChargeTypeViolation

Pay-As-You-Go dedicated host do not support this operation.

403

MissingParamter.InstanceId

ReservedInstanceId should not be null.

403

InvalidParameter.ToManyInstanceIds

ReservedInstanceId should be less than 100.

403

InValidParameter

Parameter invalid.%s

403

ResourceStatusViolation

The operation is not permitted due to resource status of the instance.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute?updateTime=2025-12-08#workbench-doc-change-demo)

2024-12-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeReservedInstanceAutoRenewAttribute?updateTime=2024-12-26#workbench-doc-change-demo)
