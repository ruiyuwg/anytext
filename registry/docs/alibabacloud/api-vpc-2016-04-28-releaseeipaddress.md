Releases an elastic IP address (EIP).

## Operation description

Before you call this operation, take note of the following items:

-   Before you release an EIP, make sure that the EIP meets the following requirements:
    
    -   You can release only an EIP that is in the **Available** state.
    -   You can release only a pay-as-you-go EIP. You cannot release a subscription EIP.
-   **ReleaseEipAddress** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEipAddresses](/help/en/eip/developer-reference/api-120193) operation to query the status of the task:
    
    -   If the EIP is in the **Releasing** state, the EIP is being released. In this state, you can only query the EIP and cannot perform other operations.
    -   If you cannot query the EIP, the EIP is released.
-   You cannot repeatedly call the **ReleaseEipAddress** operation to release an EIP within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ReleaseEipAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ReleaseEipAddress)

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

vpc:ReleaseEipAddress

update

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

-   vpc:tag

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The ID of the region to which the EIP belongs. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

AllocationId

string

Yes

The ID of the EIP that you want to release.

eip-2zeerraiwb7uj6i0d\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

748C38F6-9A3D-482E-83FB-DB6C39C68AEA

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "748C38F6-9A3D-482E-83FB-DB6C39C68AEA"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectEipStatus

Current elastic IP status does not support this operation.

You cannot perform the operation when the specified EIP is in the current state.

400

Forbidden.ChargeTypeIsPrepaid

It's forbidden to release a prepaid EIP

You cannot release subscription EIPs.

400

TaskConflict.AssociateGlobalAccelerationInstance

Operate too frequent.

The number of requests that you send exceeds the upper limit.

400

InvalidOperation.DeletionProtection

The instance cannnot delete because of deletion protecion.

\-

400

Forbidden.ReleaseSegmentEip

Release single segment eip is forbidden.

\-

400

Forbidden

The eip instance owner error

The EIP does not belong to your account. Check whether you are authorized to perform the operation on the EIP.

400

Mismatch.%sAnd%s

The %s and %s are mismatched.

The parameter does not match. Check the parameter.

404

InvalidAllocationId.NotFound

Specified allocation ID is not found.

The error message returned because the specified EIP does not exist. Check whether the value of the parameter is valid.

404

Forbidden.RegionNotFound

Specified region is not found during access authentication.

The specified region does not exist. Check whether the specified region ID is valid.

500

InternalError

The request processing has failed due to some unknown error.

An unknown error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ReleaseEipAddress?updateTime=2026-02-27#workbench-doc-change-demo)
