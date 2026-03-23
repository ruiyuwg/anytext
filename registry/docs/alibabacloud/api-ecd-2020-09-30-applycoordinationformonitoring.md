Applies for coordination monitoring. This operation is mainly used in administrator assistance scenarios and education scenarios.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/ApplyCoordinationForMonitoring)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/ApplyCoordinationForMonitoring)

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

ecd:ApplyCoordinationForMonitoring

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](https://next.api.aliyun.com/document/ecd/2020-09-30/DescribeRegions) operation to query the most recent region list.

cn-hangzhou

Uuid

string

Yes

The universally unique identifier (UUID) of the device.

62f2f1f252f04e0e9d8bc\*\*\*\*

InitiatorType

string

No

The type of the initiator.

Set the value to ADMIN\_INITIATE.

-   The value ADMIN\_INITIATE specifies that the administrator initiates the coordination request.
    

ADMIN\_INITIATE

CoordinatePolicyType

string

Yes

The coordination policy.

Set the value to FULL\_CONTROL.

-   The value FULL\_CONTROL specifies that the cloud desktop is shared and remote access to the cloud desktop is allowed.
    

FULL\_CONTROL

ResourceCandidates

array<object>

Yes

The list of cloud desktops that run the collaboration task at the same time.

object

Yes

ResourceType

string

Yes

The resource type.

Set the value to CLOUD\_DESKTOP.

-   The value CLOUD\_DESKTOP specifies that the resource is a cloud desktop.
    

CLOUD\_DESKTOP

ResourceRegionId

string

Yes

The region where the resource resides.

cn-hangzhou

ResourceProperties

string

No

The properties of the cloud desktop.

TestProperty

OwnerEndUserId

string

No

The ID of the current end user.

alice

ResourceId

string

Yes

The ID of the cloud desktop.

ecd-08zhejm3h7ilr\*\*\*\*

ResourceName

string

Yes

The name of the cloud desktop.

TestDesktop

OwnerAliUid

long

Yes

The ID of the Alibaba Cloud account to which the current cloud desktop belongs.

130247021517\*\*\*\*

EndUserId

string

No

The ID of the end user who initiates the stream collaboration. If the initiator is the administrator, do not specify this parameter.

alice

## Response parameters

Parameter

Type

Description

Example

object

The information that is returned.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

CoordinateFlowModels

array<object>

The list of stream collaboration models.

CoordinateFlowModel

object

CoordinateStatus

string

The current status of the collaboration task.

Valid values:

-   COORDINATING: The collaboration task is being executed.
    
-   TERMINATING: The collaboration task is being terminated.
    
-   TERMINATED: The collaboration task is terminated.
    
-   PENDING: The collaboration task is pending to be executed.
    

PENDING

InitiatorType

string

The type of the initiator.

Valid values:

-   ADMIN\_INITIATE\_FORCE: The administrator forcibly initiates the collaboration request.
    
-   ADMIN\_INITIATE: The administrator initiates the collaboration request.
    
-   COORDINATOR\_INITIATE\_FORCE: The coordinator forcibly initiates the collaboration request.
    

COORDINATOR\_INITIATE\_FORCE

OwnerUserId

string

The ID of the Alibaba Cloud account of the end user.

alice

CoordinateTicket

string

The ticket that is used to establish the Adaptive Streaming Protocol (ASP)-based connection.

1VDQ0VTUw0KW0Rlc2t0b3BdDQpHV1Rva2VuPTAwTzgwL3liS25zUEVGdkF6eU1Pc1ExeHZWdmk4VEE3NFJvU1V1d0dPYm1BNkNJWklDMHVNQklWcjU2NS80S0ZQekQ4aGFTR0ZHelZqMTFGbkRpWWgvUFF1Zm1xSXNGdFRFNFRWMExJNit3TkU0L2RMb04wNXBBSE5Tc3M4dWFXY3lwWE\*\*\*\*

CoId

string

The ID of the stream collaboration.

co-0sot77uale3\*\*\*\*

ResourceId

string

The ID of the cloud desktop.

ecd-96vi03f9emqnl\*\*\*\*

ResourceName

string

The name of the cloud desktop.

TestDesktop

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "CoordinateFlowModels": [
    {
      "CoordinateStatus": "PENDING",
      "InitiatorType": "COORDINATOR_INITIATE_FORCE",
      "OwnerUserId": "alice",
      "CoordinateTicket": "1VDQ0VTUw0KW0Rlc2t0b3BdDQpHV1Rva2VuPTAwTzgwL3liS25zUEVGdkF6eU1Pc1ExeHZWdmk4VEE3NFJvU1V1d0dPYm1BNkNJWklDMHVNQklWcjU2NS80S0ZQekQ4aGFTR0ZHelZqMTFGbkRpWWgvUFF1Zm1xSXNGdFRFNFRWMExJNit3TkU0L2RMb04wNXBBSE5Tc3M4dWFXY3lwWE****",
      "CoId": "co-0sot77uale3****",
      "ResourceId": "ecd-96vi03f9emqnl****",
      "ResourceName": "TestDesktop"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
