Releases contiguous elastic IP addresses (EIPs).

## Operation description

-   After you call the **ReleaseEipSegmentAddress** operation, all EIPs in the specified group are released.
    
-   **ReleaseEipSegmentAddress** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeEipSegment](/help/en/eip/developer-reference/api-156063) operation to query the status of the task.
    
    -   If the group is in the **Releasing** state, EIPs in the group are being released. In this state, you can only query the group and cannot perform other operations.
    -   If you cannot query the group of contiguous EIPs, the contiguous EIPs are released.
-   You cannot repeatedly call the **ReleaseEipSegmentAddress** operation to release a group of contiguous EIPs within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ReleaseEipSegmentAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ReleaseEipSegmentAddress)

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

vpc:ReleaseEipSegmentAddress

delete

\*SegmentAddress

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

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

The region ID of the contiguous EIPs. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

SegmentInstanceId

string

Yes

The ID of the contiguous EIP group to be released.

The system releases all EIPs in the group.

eipsg-2zett8ba055tbsxme\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001sdfg

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

F7A6301A-64BA-41EC-8284-8F4838C15D1F

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F7A6301A-64BA-41EC-8284-8F4838C15D1F"
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

Forbidden

The eip instance owener error

The EIP does not belong to your account. Check whether you have the permissions to perform the operation on the EIP.

400

TaskConflict.AssociateGlobalAccelerationInstance

Operate too frequent.

The number of requests that you send exceeds the upper limit.

400

InvalidOperation.DeletionProtection

The instance cannnot delete because of deletion protecion.

\-

400

OperationFailed.InstanceNotExist

Operation failed because eip segment instance not exist.

\-

400

OperationFailed.EipNumInconsistent

Operation failed because the number of eip is inconsistent.

\-

400

OperationFailed.EipStatusInvalid

Operation failed because eip instance status invalid.

The operation failed because the status of the EIP is invalid.

400

OperationFailed.EipInBwp

Operation failed because eip instance has been added to the bandwidth package.

\-

400

Forbidden.EipInBwp

The EIP has been associated with an EIP bandwidth plan.

You cannot delete the contiguous EIP group because EIPs in the group are associated with an EIP bandwidth plan.

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

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ReleaseEipSegmentAddress?updateTime=2026-02-27#workbench-doc-change-demo)

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ReleaseEipSegmentAddress?updateTime=2023-06-26#workbench-doc-change-demo)

2023-05-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ReleaseEipSegmentAddress?updateTime=2023-05-15#workbench-doc-change-demo)
