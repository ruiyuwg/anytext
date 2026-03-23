Deletes a custom route table.

## Operation description

## [](#description)[](#)Description

-   **DeleteRouteTable** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeRouteTableList](/help/en/vpc/api-describeroutetablelist) operation to query the status of the task.
    
    -   If the custom route table is in the **Deleting** state, the custom route table is being deleted.
    -   If you cannot query the custom route table, the custom route table is deleted.
-   You cannot repeatedly call the **DeleteRouteTable** operation to delete a custom route table within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteTable)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteTable)

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

vpc:DeleteRouteTable

delete

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

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

The region ID of the virtual private cloud (VPC) to which the custom route table belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteTableId

string

Yes

The ID of the custom route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

DC668356-BCB4-42FD-9BC3-FA2B2E04B634

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DC668356-BCB4-42FD-9BC3-FA2B2E04B634"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.GatewayAssociated

You cannot delete the specified route table because it still associates with gateway.

You cannot delete the route table because it is associated with a gateway.

400

MissingParam.RouteTableId

The param of RouteTableId is missing.

\-

400

IncorrectRouteTableType

Route table can be deleted by this action only when it's type is custom.

\-

400

IncorrectVSwitchStatus

The current virtual switch status does not support this operation.

The error message returned because the vSwitch is in the Pending state and cannot be deleted.

400

IncorrectRouteTableStatus.RouteEntryExist

You cannot delete the specified route table because it still has custom route entry.

You cannot delete the route table because custom routes exist in the route table.

400

IncorrectStatus.cbnStatus

Current CBN status does not support this operation.

The status of the CEN instance is invalid.

404

InvalidRegionId.NotFound

Specified value of RegionId is not supported.

\-

404

InvalidParameter.Action

This vpc feature is not supported in this region

\-

404

IncorrectRouteTableStatus

The current status of the route table does not support this operation.

You cannot delete the route table in the current state.

404

DependencyViolation.RouteEntry

Vpc route table has route entry.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteTable?updateTime=2025-12-12#workbench-doc-change-demo)

2025-02-10

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteTable?updateTime=2025-02-10#workbench-doc-change-demo)
