Releases a pay-as-you-go Dedicated Host or an expired subscription Dedicated Host.

## Operation description

## [](#usage-notes)Usage notes

Before you release a pay-as-you-go dedicated host, make sure that no ECS instances are deployed on the dedicated host.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReleaseDedicatedHost)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ReleaseDedicatedHost)

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

ecs:ReleaseDedicatedHost

delete

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

RegionId

string

Yes

The region ID of the dedicated host. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DedicatedHostId

string

Yes

The ID of the dedicated host.

dh-bp199lyny9b3\*\*\*\*

TerminateSubscription

boolean

No

The expiration time of the subscription dedicated host.

-   true
-   false

Default value: false.

false

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

A1B15AC8-E6F6-49A4-8985-8C07104B9199

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A1B15AC8-E6F6-49A4-8985-8C07104B9199"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ChargeTypeViolation

The operation is not permitted due to charge type of the dedicated host.

\-

400

IncorrectHostStatus.Initializing

The specified ddh status does not support this operation.

\-

403

InstanceExist

Instance exists on the dedicated host.

Instances are present on the dedicated host. You must remove the instances before you can release the dedicated host.

403

OperationDenied.DedicatedHostShared

The specified ddh is shared to other users. Remove it from the resource share before releasing.

\-

404

InvalidDedicatedHostId.NotFound

The specified DedicatedHostId does not exist.

\-

404

InvalidDedicatedHostId.NotFound

The specified Dedicated Host does not exist.

The specified dedicated host does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-10-29

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReleaseDedicatedHost?updateTime=2025-10-29#workbench-doc-change-demo)

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReleaseDedicatedHost?updateTime=2025-02-20#workbench-doc-change-demo)

2023-08-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ReleaseDedicatedHost?updateTime=2023-08-01#workbench-doc-change-demo)
