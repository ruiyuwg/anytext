Withdraw advertised Virtual Private Cloud (VPC) routes.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/WithdrawVpcPublishedRouteEntries)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/WithdrawVpcPublishedRouteEntries)

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

vpc:WithdrawVpcPublishedRouteEntries

update

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

The ID of the region. Call the DescribeRegions operation to access it.

cn-hangzhou

RouteEntries

array<object>

No

The route entries to be withdrawn. Maximum value: 50.

object

No

The list of route entries to be withdrawn.

RouteTableId

string

Yes

The ID of the route table.

vtb-bp145q7glnuzd\*\*\*\*

DestinationCidrBlock

string

Yes

The destination CIDR block

10.0.0.0/24

TargetType

string

Yes

The type of target instance.

ECR

TargetInstanceId

string

Yes

Target instance ID.

ecr-dhw2xsds5\*\*\*\*

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

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

IncorrectStatus.Vpc

The status of %s \[%s\] is incorrect.

The instance is in an invalid state.

400

ResourceNotFound.RouteEntry

The specified resource routeEntry is not found.

The specified route entry does not exist

400

IncorrectStatus.RouteEntry

The status of %s \[%s\] is incorrect.

Route entry is in non-steady state

400

IncorrectStatus.RouteEntryPublishStatus

Route entry publish status is incorrect.

\-

400

Forbidden.OperateCustomRouteTable

The operation is forbidden because publish route entry in custom route table.

The operation is prohibited because it is not allowed to publish route entries in the custom route table.

400

ResourceNotAssociated.TargetInstance

The target instance is not associated with vpc.

The destination instance of the route is not associated with the VPC.

400

OperationDenied.UnsupportedTargetType

The operation is not allowed because the target type is not supported.

The operation was rejected because the type of the route publication target is not currently supported.

400

IncorrectStatus.RouteTable

The route table is in an invalid state.

The specified routing table is in the wrong state

400

OperationUnsupported.PublishSystemRouteEntry

Publishing system route entry is unsupported.

\-

400

OperationUnsupported.UnsupportedNextHop

Unsupported nexthop type for route entry publish operation.

\-

400

OperationUnsupported.PublishPrefixListRouteEntry

Publishing prefix list route entry is unsupported.

\-

400

MissingParam.RouteEntries

The parameter RouteEntries is missing.

Missing parameter RouteEntries

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/WithdrawVpcPublishedRouteEntries?updateTime=2025-03-03#workbench-doc-change-demo)
