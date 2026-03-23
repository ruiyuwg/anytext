Deletes multiple custom route entries at a time.

## Operation description

When you call this operation, take note of the following items:

-   You can delete only routes that are in the **Available** state.
    
-   You cannot delete a route of a virtual private cloud (VPC) in which a vSwitch or another route is being created or deleted.
    
-   **DeleteRouteEntries** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeRouteEntryList](/help/en/vpc/api-describerouteentrylist) operation to query the status of the task.
    
    -   If the route is in the **Deleting** state, the route is being deleted.
    -   If you cannot query the route, the route is deleted.
-   You cannot repeatedly call **DeleteRouteEntries** within a specific period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteRouteEntries)

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

vpc:DeleteRouteEntries

delete

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#routetableId}`

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

The region ID of the route table.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RouteEntries

array<object>

No

The information about the routes that you want to delete.

object

No

RouteTableId

string

Yes

The ID of the route table to which the routes to be deleted belongs. You can specify up to 50 route table IDs.

vtb-2ze3jgygk9bmsj23s\*\*\*\*

RouteEntryId

string

No

The ID of the route that you want to delete. You can specify up to 50 route IDs.

**Note** If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.

rte-bp1mnnr2al0naomnpv\*\*\*\*

DstCidrBlock

string

No

The destination CIDR block of the route that you want to delete. IPv4 and IPv6 CIDR blocks are supported. You can specify up to 50 destination CIDR blocks.

**Note** If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.

47.100.XX.XX/24

NextHop

string

No

The ID of the next hop that you want to delete. You can specify up to 50 next hop IDs.

**Note** If **RouteEntryId** is not specified, **DstCidrBlock** and **NextHop** are required.

i-j6c2fp57q8rr4jlu\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

RequestId

string

The request ID.

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

SuccessCount

integer

The number of route entries that were deleted.

2

FailedCount

integer

The number of route entries that failed to be deleted.

2

FailedRouteEntries

array<object>

The information about the route entry that failed to be deleted.

FailedRouteEntries

object

RouteEntryId

string

The ID of the route entry that failed to be deleted.

rte-bp1mnnr2al0naomnpv\*\*\*\*

DstCidrBlock

string

The destination CIDR block of the route entry that failed to be deleted. IPv4 and IPv6 CIDR blocks are supported.

47.100.XX.XX/24

NextHop

string

The ID of the next hop that failed to be deleted.

i-j6c2fp57q8rr4jlu\*\*\*\*

FailedCode

string

The error code.

VPC\_ROUTER\_ENTRY\_NOT\_EXIST

FailedMessage

string

The error message.

vRouterEntry not exists

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0",
  "SuccessCount": 2,
  "FailedCount": 2,
  "FailedRouteEntries": [
    {
      "RouteEntryId": "rte-bp1mnnr2al0naomnpv****",
      "DstCidrBlock": "47.100.XX.XX/24",
      "NextHop": "i-j6c2fp57q8rr4jlu****",
      "FailedCode": "VPC_ROUTER_ENTRY_NOT_EXIST",
      "FailedMessage": "vRouterEntry not exists"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The request passed the dry run.

400

TaskConflict

The operation is too frequent. Please wait a moment and try again.

The system is unavailable. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-05-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntries?updateTime=2025-05-19#workbench-doc-change-demo)

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntries?updateTime=2025-03-20#workbench-doc-change-demo)

2025-02-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntries?updateTime=2025-02-10#workbench-doc-change-demo)

2023-08-07

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteRouteEntries?updateTime=2023-08-07#workbench-doc-change-demo)
