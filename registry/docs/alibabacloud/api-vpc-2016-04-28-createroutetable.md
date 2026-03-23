Creates a custom route table.

## Operation description

-   **CreateRouteTable** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the operation in the background. You can call the [DescribeRouteTableList](/help/en/vpc/api-describeroutetablelist) operation to query the status of the task.
    
    -   If the custom route table is in the **Creating** state, the custom route table is being created.
    -   If the custom route table is in the **Created** state, the custom route table is created.
-   You cannot repeatedly call the **CreateRouteTable** operation within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteTable)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateRouteTable)

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

vpc:CreateRouteTable

create

\*RouteTable

`acs:vpc:{#regionId}:{#accountId}:routetable/*`

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

cn-zhangjiakou

VpcId

string

Yes

The ID of the VPC to which the custom route table belongs.

vpc-bp1qpo0kug3a20qqe\*\*\*\*

RouteTableName

string

No

The name of the route table.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

myRouteTable

Description

string

No

The description of the route table.

The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.

abc

AssociateType

string

No

The type of the route table. Valid values:

-   **VSwitch** (default): vSwitch route table
-   **Gateway**: gateway route table

VSwitch

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** in each API request may be different.

02fb3da4-130e-11e9-8e44-0016e04

Tag

array<object>

No

The tags of the resource.

object

No

The tags.

Key

string

No

The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The tag value. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

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

62172DD5-6BAC-45DF-8D44-E11ED28DCAC0

RouteTableId

string

The IDs of the route tables.

vtb-bp145q7glnuzdvzu2\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "62172DD5-6BAC-45DF-8D44-E11ED28DCAC0",
  "RouteTableId": "vtb-bp145q7glnuzdvzu2****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

UnsupportedRegion

The feature of ipv4Gateway is not supported in the region.

IPv4 gateways are not supported in this region.

400

InvalidParameter.RouteTableName.Malformed

The specified route table name is not valid.

\-

400

InvalidParameter.Description.Malformed

The specified Description is not valid.

The specified description is invalid.

400

QuotaExceeded.RouteTable

VPC RouteTable quota exceeded.

The quota of VPC route tables is exhausted.

400

IncorrectStatus.cbnStatus

Current CBN status does not support this operation.

The status of the CEN instance is invalid.

400

InvalidVpcId.NotSupport

The vpc is not support.

\-

400

OperationUnsupported.AdvancedFeature

Advanced features of the vpc is unsupported.

This advanced feature is not supported.

400

QuotaExceeded.GatewayRouteTable

The quota of Gateway Route Table is exceeded.

The quota of the gateway route table created for a single VPC has reached the upper limit.

400

MissingParam.vpcId

The parameter vpcId is mandatory.

The vpcId parameter is required.

404

InvalidRegionId.NotFound

Specified value of RegionId is not supported.

\-

404

InvalidParameter.Action

This vpc feature is not supported in this region

\-

404

InvalidVpcId.NotFound

Specified VPC does not exist.

The specified VPC does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2025-12-12#workbench-doc-change-demo)

2025-05-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2025-05-21#workbench-doc-change-demo)

2024-05-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2024-05-17#workbench-doc-change-demo)

2023-10-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2023-10-23#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2023-07-05#workbench-doc-change-demo)

2023-06-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2023-06-16#workbench-doc-change-demo)

2023-05-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateRouteTable?updateTime=2023-05-22#workbench-doc-change-demo)
