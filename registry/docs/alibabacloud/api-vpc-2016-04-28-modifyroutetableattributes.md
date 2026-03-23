Modifies the name and description of a route table.

## Operation description

You cannot repeatedly call the **ModifyRouteTableAttributes** operation to modify the name and description of a route table within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyRouteTableAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyRouteTableAttributes)

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

vpc:ModifyRouteTableAttributes

update

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/{#RouteTableId}`

-   vpc:VRouter

none

## Request parameters

Parameter

Type

Required

Description

Example

RouteTableId

string

Yes

The ID of the route table.

vtb-bp145q7glnuzdvzu2\*\*\*\*

RouteTableName

string

No

The name of the route table.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

doctest

Description

string

No

The description of the route table.

The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.

test

RegionId

string

Yes

The region ID of the virtual private cloud (VPC) to which the custom route table belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

RoutePropagationEnable

boolean

No

Indicates whether to enable route propagation to receive dynamic routes. Valid values:

-   **true** (default): enables route propagation.
    
-   **false**: disables route propagation.
    

true

## Response parameters

Parameter

Type

Description

Example

object

The response.

RequestId

string

The request ID.

62172DD5-6BAC-45DF-8D44

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "62172DD5-6BAC-45DF-8D44"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Abs.InvaliTableName.Malformed

Table name format is invalid.

The new name of the route table is invalid.

400

Abs.InvalidRouteTableId.NotExist

The route table id is not exist.

\-

400

InvalidDescription.Malformed

Description format is invalid.

\-

400

Forbidden.DisableRoutePropagation

The operation of disable route propagation is forbidden.

Shutting down route propagation for this routing table is not allowed.

400

ResourceNotFound.RouteTable

The specified resource gatewayRouteTable is not found.

The gateway route table does not exist.

400

IncorrectStatus.RouteTable

The route table is in an invalid state.

The specified routing table is in the wrong state

400

IncorrectStatus.RoutePropagationStatus

Route table propagation status not stable. Please wait and try again.

Route table propagation status not stable. Please wait and try again.

400

IncorrectStatus.RouteEntry

The status of %s \[%s\] is incorrect.

Route entry is in non-steady state

400

IncorrectStatus.Vpc

Vpc status is invalid.

The VPC is in an unstable state.

403

Forbbiden

User not authorized to operate on the specified resource.

User not authorized to operate on the specified resource.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2025-03-20#workbench-doc-change-demo)

2025-03-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2025-03-13#workbench-doc-change-demo)

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2025-02-28#workbench-doc-change-demo)

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2025-01-14#workbench-doc-change-demo)

2024-11-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2024-11-28#workbench-doc-change-demo)

2024-08-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2024-08-21#workbench-doc-change-demo)

2024-06-24

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyRouteTableAttributes?updateTime=2024-06-24#workbench-doc-change-demo)
