Queries VPN gateways in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpnGateways)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVpnGateways)

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

vpc:DescribeVpnGateways

list

VpnGateway

`acs:vpc:{#regionId}:{#accountId}:vpngateway/*`

VpnGateway

`acs:vpc:{#regionId}:{#accountId}:vpngateway/{#VpnInstanceId}`

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

The region ID of the VPN gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

VpcId

string

No

The ID of the virtual private cloud (VPC) to which the VPN gateway belongs.

vpc-bp1m3i0kn1nd4wiw9\*\*\*\*

VpnGatewayId

string

No

The ID of the VPN gateway.

vpn-bp17lofy9fd0dnvzv\*\*\*\*

Status

string

No

The status of the VPN gateway. Valid values:

-   **init**
-   **provisioning**
-   **active**
-   **updating**
-   **deleting**

active

BusinessStatus

string

No

The payment status of the VPN gateway. Valid values:

-   **Normal**
-   **FinancialLocked**

Normal

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Valid values: **1** to **50**. Default value: **10**.

10

IncludeReservationData

boolean

No

Specifies whether to return information about pending orders. Valid values:

-   **false** (default)
-   **true**

true

Tag

array<object>

No

The tags that are added to the VPN gateway.

object

No

The tag added to the VPN gateway.

Key

string

No

The tag key.

You can specify at most 20 tag keys at a time.

FinanceDept

Value

string

No

The tag value.

Each tag key corresponds to one tag value. You can specify at most 20 tag values at a time.

FinanceJoshua

ResourceGroupId

string

No

The ID of the resource group to which the VPN gateway belongs.

You can call the [ListResourceGroups](/help/en/resource-management/api-listresourcegroups) operation to query the resource group list.

rg-acfmzs372yg\*\*\*\*

GatewayType

string

No

VPN 网关类型，取值： Traditional：传统型 VPN 网关，覆盖 IPsec 功能和 SSL 功能 Enhance.SiteToSite：增强型站点入云 VPN，只覆盖 IPsec 功能

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageSize

integer

The number of entries returned per page.

10

RequestId

string

The request ID.

DF11D6F6-E35A-41C3-9B20-6FC8A901FE65

PageNumber

integer

The number of the returned page.

1

TotalCount

integer

The number of entries returned.

1

VpnGateways

object

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "DF11D6F6-E35A-41C3-9B20-6FC8A901FE65",
  "PageNumber": 1,
  "TotalCount": 1,
  "VpnGateways": {
    "test": "test",
    "test2": 1
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.TagKey

The specified parameter TagKey is invalid.

The error message returned because the specified tag key is invalid.

400

InvalidParameter.TagValue

The specified parameter TagValue is invalid.

The error message returned because the specified tag value is invalid.

400

Duplicated.TagKey

The specified parameter TagKey is duplicated.

The error message returned because the specified tag key already exists.

400

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error occurred.

403

Forbidden.SubUser

User not authorized to operate on the specified resource as your account is created by another user.

The error message returned because you are unauthorized to perform this operation on the specified resource. Acquire the required permissions and try again.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-15

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateways?updateTime=2026-01-15#workbench-doc-change-demo)

2024-05-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateways?updateTime=2024-05-06#workbench-doc-change-demo)

2023-10-19

API Description Update. The API operation is not deprecated.. The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateways?updateTime=2023-10-19#workbench-doc-change-demo)

2023-06-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateways?updateTime=2023-06-30#workbench-doc-change-demo)

2023-05-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVpnGateways?updateTime=2023-05-04#workbench-doc-change-demo)
