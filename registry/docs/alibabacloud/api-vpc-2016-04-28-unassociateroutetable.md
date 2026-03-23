Disassociates a route table from a vSwitch.

## Operation description

## [](#references)[](#)References

-   **UnassociateRouteTable** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeVSwitchAttributes](/help/en/vpc/api-describevswitchattributes) operation to query the status of the task.
    
    -   If the vSwitch is in the **Pending** state, the route table is being disassociated.
    -   If the vSwitch is in the **Available** state, the route table is disassociated.
-   You cannot repeatedly call the **UnassociateRouteTable** operation to disassociate a route table from a vSwitch within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateRouteTable)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/UnassociateRouteTable)

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

vpc:UnassociateRouteTable

update

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#VSwitchId}`

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

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

VSwitchId

string

Yes

The ID of the vSwitch from which you want to disassociate the route table.

vsw-25naue4\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-0016e04115b

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

62172DD5-6BAC-45DF-8D44-xxxxxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "62172DD5-6BAC-45DF-8D44-xxxxxxx"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidRegionId.NotFound

Specified value of RegionId is not supported.

\-

404

InvalidParameter.Action

This vpc feature is not supported in this region

\-

404

InvalidRouteTableId.NotFound

Specified route table does not exist.

The specified route table does not exist.

404

InvalidVSwitchId.NotFound

Specified VSwitch does not exist.

\-

404

IncorrectVSwitchStatus

The current status of the virtual switch does not support this operation.

\-

404

InvalidBindingStatus.RouteTable

The specified virtual switch and route table does not bind

\-

404

OperationUnsupported.SystemRouteTable

System route table can not be unassociated.

You cannot disassociate the system route table.

404

InvalidStatus.VSwitch

Specified vswitch is not in stable status and cannot operate.

\-

404

OperationFailed.VSwitchNotAssociate

Specified vswitch is not associated with the routeTable and cannot operate.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/UnassociateRouteTable?updateTime=2025-12-12#workbench-doc-change-demo)
