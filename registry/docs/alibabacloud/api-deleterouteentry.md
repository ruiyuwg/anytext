Deletes a route entry from a route table of a VRouter or virtual border router (VBR).

## Operation description

When you call this operation, take note of the following items:

-   You can delete only routes that are in the **Available** state.
    
-   You cannot delete a route entry of a virtual private cloud (VPC) in which a vSwitch or another route entry is being created or deleted.
    
-   Before you call this operation to delete a route of a VBR route table, call the [DescribeRouteEntryList](/help/en/vpc/api-describerouteentrylist) operation to query the **NextHopId** of the route first.
    
-   **DeleteRouteEntry** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeRouteEntryList](/help/en/vpc/api-describerouteentrylist) operation to query the status of the task.
    
    -   If the route is in the **Deleting** state, the route is being deleted.
    -   If you cannot query the route entry, the route entry is deleted.
-   You cannot repeatedly call the **DeleteRouteEntry** operation to delete a route from the route table of a vRouter or a VBR within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteEntry)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteEntry)

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

vpc:DeleteRouteEntry

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

No

The region ID of the route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteTableId

string

No

The ID of the route table to which the route belongs.

vtb-2ze3jgygk9bmsj23s\*\*\*\*

RouteEntryId

string

No

The ID of the route that you want to delete.

rte-bp1mnnr2al0naomnpv\*\*\*\*

DestinationCidrBlock

string

No

The destination CIDR block of the route. Only IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix lists are supported.

47.100.XX.XX/16

NextHopId

string

No

The ID of the next hop.

-   To delete a route other than an equal-cost multi-path (ECMP) route, set the **NextHopId** parameter and ignore the **NextHopList** parameter.
-   To delete an ECMP route, set the **NextHopList** parameter and ignore the **NextHopId** parameter.

ri-2zeo3xzyf38r4urzd\*\*\*\*

NextHopList

array<object>

No

The list of the next hop of the ECMP route.

object

No

The information about the next hop of the ECMP route.

NextHopId

string

No

The ID of the next hop that is configured for ECMP routing. You can specify information about at most 16 next hops.

ri-2zeo3xzyf38r43cd\*\*\*\*

NextHopType

string

No

The type of the next hop that is configured for ECMP routing. Set the value to **RouterInterface**. You can specify information about at most 16 next hops.

RouterInterface

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

**true**: sends a request without deleting the route entry. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.

**false** (default): performs a dry run and the actual request. If the request passes the check, a 2xx HTTP status code is returned and the route entry is deleted.

## Response parameters

Parameter

Type

Description

Example

object

The returned information.

RequestId

string

The ID of the request.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

Miss mandatory parameter.

Some required parameters are not specified. Specify all required parameters and try again.

400

IncorrcetRouteEntryStatus

Some route entry status blocked this operation.

One or more routes in the route table are in the Pending or Modifying state.

400

InvalidCidrBlock.Malformed

Specified CIDR block is not valid.

The format of the CIDR block is invalid.

400

OperationDenied

Specified operation is denied as route entry type is system.

The specified route is a system route.

400

InvalidRouteEntry.NotFound

Route entry not exists.

The route entry does not exist.

400

InvalidVRouter.NotFound

vRouter not exists.

The specified vRouter does not exist. Check whether the specified vRouter is valid.

400

IncorrectRouteEntryStatus

Some route entry status blocked this operation.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

IncorrectRouteEntryStatus

VBR has NotStable route entry.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

IncorrectRouteEntryStatus

Specified routeEntry status error.

The operation is not supported because the route table contains routes in the Pending or Modifying state.

400

Forbbiden

Specified RouteEntry cannot allowed delete by openApi.

You cannot call this operation to delete the specified route.

400

InvalidNextHop

Specified nexthop and nexthop list cannot both null.

The next hop and next hop list cannot be empty at the same time.

400

InvalidRouteEntry

Specified routeEntry not exist.

The specified route entry does not exist.

400

Forbidden.VRouterNotFound

pecified virtual switch is not found during access authentication.

\-

400

TaskConflict

The operation is too frequent, TaskConflict.

The system is unavailable. Try again later.

400

InvalidRouteEntryId.NotFound

Specified RouteEntryId does not exist.

The specified route is not found.

400

IncorrectVpcStatus

Current VPC status does not support this operation.

This operation cannot be performed when the VPC is in the current state.

400

InvalidVpnInstanceId.NotFound

%s

\-

400

ParamExclusive.RouteEntryIdAndRouteTableIdOrDestCidrBlock

%s

\-

400

InvalidNextHopList.Size

Nexthop list size should be between 2 and 16

\-

400

ParamExclusive.NextHopIdAndList

NextHopId and NextHopList cannot both be not null.

\-

400

OperationFailed.DeleteMultiScopeEntry

Multi or ecmp scope must delete with force.

\-

400

OperationFailed.DistibuteLock

Distibute lock fail.

The operation is locked by another request;

400

OperationDenied.DeleteManagedRouteEntry

The operation is not allowed because of route entry is managed.

You cannot delete hosted routes.

400

OperationDenied.RouteTableTypeNotPermitted

The operation is not allowed because the type of route table is not permitted.

You cannot create routes for route tables of the specified type.

400

IncorrectStatus.VpcRouteEntry

The status of the specified routeEntry is invalid.

The status of the VPC route entry is invalid.

400

OperationDenied.NextHopNotChanged

The operation is not allowed because of NextHopNotChanged.

The operation is not allowed because the next hop is not changed.

400

OperationDenied.DeleteGatewayEndpointRoute

The operation is not allowed to delete route entry pointing gateway endpoint..

You cannot delete a route that points to a gateway endpoint.

400

IncorrectStatus.PrefixList

The status of prefixList is incorrect.

The prefix list is in an unstable state.

400

InvalidNextHopList.Size

Has more than one nexthop.

Has more than one nexthop.

400

InvalidCidrBlock

Specified CIDR block is not valid.

Possible reasons for error reporting: 1. You are not in the whitelist of the 10.0.0.0/8 CIDR block and cannot use this CIDR block. 2. The target CIDR block of the added custom route cannot belong to the CIDR block of all vSwitches under the same VPC. 3. Because 100.64.0.0/10 is a cloud service address, you cannot add this CIDR block to point to the IDC under the cloud. 4. Except for 100.64.0.0/10, the detailed route network segments such as 100.64.0.0/11 and 100.96.0.0/11 cannot be used in the IDC under the cloud.

400

OperationDenied.VbrAttachEcrInMiddleStatus

The operation is not allowed because of VBR attach or detach ECR in middle status.

The current operation cannot be performed because the VBR is in the process of loading or unloading the leased line gateway. Please wait a moment and try again.

400

UnsupportedFeature.NextHopType

The operation is not allowed because the NextHopType of specified RouteEntry is modified from Local type.

The operation is not allowed because the next hop type of the route is modified from the Local type.

400

TaskConflict

The operation is too frequent, please wait a moment and try again.

Your requests are too frequent. Try again later.

400

ResourceNotFound.PrefixList

The specified resource of prefixList is not found.

The prefix list does not exist.

404

InvalidRouteTableId.NotFound

Specified route table does not exist.

The specified route table does not exist.

404

InvalidVpcId.NotFound

Specified value of VpcId is not found in our record.

The VPC does not exist. Check whether the specified VPC is valid.

404

ResourceNotFound.GatewayLoadBalancerEndpoint

GatewayLoadBalancerEndpoint instance not found.

GatewayLoadBalancerEndpoint instance not found.

500

Vpc.Error

error code 500,Internal server error.

\-

500

Internal.Error

The request processing has failed due to some unknown error, exception or failure.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2025-05-19#workbench-doc-change-demo)

2025-04-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2025-04-18#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2025-03-20#workbench-doc-change-demo)

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2025-01-14#workbench-doc-change-demo)

2024-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2024-10-28#workbench-doc-change-demo)

2024-06-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2024-06-19#workbench-doc-change-demo)

2024-06-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2024-06-05#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2024-06-03#workbench-doc-change-demo)

2023-09-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2023-09-06#workbench-doc-change-demo)

2023-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2023-08-15#workbench-doc-change-demo)

2023-08-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2023-08-03#workbench-doc-change-demo)

2023-07-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2023-07-20#workbench-doc-change-demo)

2023-05-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntry?updateTime=2023-05-08#workbench-doc-change-demo)
