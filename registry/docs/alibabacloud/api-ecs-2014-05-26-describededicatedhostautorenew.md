Queries the auto-renewal status of one or more subscription dedicated hosts.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostAutoRenew)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostAutoRenew)

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

ecs:DescribeDedicatedHostAutoRenew

get

\*DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DedicatedHostIds

string

Yes

The ID of the dedicated host. You can specify up to 100 subscription dedicated host IDs. Separate multiple IDs with commas (,).

dh-bp165p6xk2tlw61e\*\*\*\*,dh-bp1f9vxmno\*\*\*\*

RegionId

string

Yes

The ID of the region where the dedicated host resides.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

DedicatedHostRenewAttributes

array<object>

The array that consists of dedicated host auto-renewal attributes.

DedicatedHostRenewAttribute

object

PeriodUnit

string

The unit of the auto-renewal duration. Valid values:

-   Week
-   Month

Month

Duration

integer

The auto-renewal period.

0

DedicatedHostId

string

The ID of the dedicated host.

dh-bp165p6xk2tlw61e\*\*\*\*

RenewalStatus

string

Indicates whether the subscription dedicated host is automatically renewed. Valid values:

-   AutoRenewal: The dedicated host is automatically renewed.
-   Normal: The dedicated host is not automatically renewed, but renewal notifications are sent.
-   NotRenewal: The dedicated host is not automatically renewed, and no expiration notification is sent. Alibaba Cloud sends only a non-renewal notice three days before the host expires. If the renewal status of a dedicated host is NotRenewal, you can change the value to Normal and then call [RenewDedicatedHosts](/help/en/ecs/api-renewdedicatedhosts) to manually renew the dedicated host, or directly change the value to AutoRenewal.

Normal

AutoRenewEnabled

boolean

Indicates whether auto-renewal is enabled. Valid values:

-   true
-   false

false

AutoRenewWithEcs

string

Indicates whether the dedicated host is automatically renewed if a subscription ECS instance it hosts, after being automatically renewed, has a new expiration time that is later than that of the dedicated host. Valid values:

-   AutoRenewWithEcs: The dedicated host is automatically renewed along with the ECS instance.
-   StopRenewWithEcs: The dedicated host is not automatically renewed along with the ECS instance.

StopRenewWithEcs

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368",
  "DedicatedHostRenewAttributes": {
    "DedicatedHostRenewAttribute": [
      {
        "PeriodUnit": "Month",
        "Duration": 0,
        "DedicatedHostId": "dh-bp165p6xk2tlw61e****",
        "RenewalStatus": "Normal",
        "AutoRenewEnabled": false,
        "AutoRenewWithEcs": "StopRenewWithEcs"
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

403

ChargeTypeViolation

Pay-As-You-Go dedicated host does not support this operation.

\-

403

MissingParameter.DedicatedHostId

DedicatedHostId should not be null.

The DedicatedHostId parameter is required.

403

InvalidParameter.ToManyDedicatedHostIds

DedicatedHostId should be less than 100.

More than 100 dedicated host IDs are specified in the DedicatedHostIds value.

403

InvalidParameter.InvalidDedicatedHostId

%s

The specified DedicatedHostId parameter is invalid.

403

IncorrectDedicatedHostStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

MissingParamter.InstanceId

InstanceId should not be null.

The instance ID must be specified.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHostAutoRenew?updateTime=2023-06-13#workbench-doc-change-demo)
