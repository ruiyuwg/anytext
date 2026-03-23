Queries router interfaces in a specified region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouterInterfaces)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouterInterfaces)

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

vpc:DescribeRouterInterfaces

list

\*RouterInterface

`acs:vpc:{#regionId}:{#accountId}:routerinterface/{#RouterInterfaceId}`

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

The region ID of the router interface.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

IncludeReservationData

boolean

No

Specifies whether renewal data is included. Valid values:

-   **true**
-   **false** (default)

false

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

Filter

array<object>

No

The filter information.

object

No

Key

string

No

The filter conditions. You can specify up to five filter conditions. The following filter conditions are supported:

-   **RouterInterfaceId**: the ID of the router interface.
-   **RouterId**: the ID of the router.
-   **RouterType**: the router type. Valid values: **VRouter** and **VBR**.
-   **RouterInterfaceOwnerId**: the ID of the Alibaba Cloud account to which the router interface belongs.
-   **OppositeInterfaceId**: the ID of the peer router interface.
-   **OppositeRouterType**: the type of the peer router interface. Valid values: **VRouter** and **VBR**.
-   **OppositeRouterId**: the ID of the peer router.
-   **OppositeInterfaceOwnerId**: the ID of the Alibaba Cloud account to which the peer router interface belongs.
-   **Status**: the status of the router interface.
-   **Name**: the name of the router interface.

**Note** The logical operator among multiple values in a filter condition is OR. In this case, the filter condition is met if one of the values is matched. The logical operator among filter conditions is AND. Only routers that meet all the filter conditions are queried.

Filter.1.Status

Value

array

No

Specifies the value in the filter condition based on the key. You can specify multiple filter values for one key. The logical operator among filter values is OR. If one filter value is matched, the filter condition is matched.

string

No

Specifies the value in the filter condition based on the key. You can specify multiple filter values for one key. The logical operator among filter values is OR. If one filter value is matched, the filter condition is matched.

test

ResourceGroupId

string

No

Resource Group ID.

For more information about resource groups, please refer to [What is a Resource Group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tags

array<object>

No

The tags of the resource.

object

No

Key

string

No

The key of the resource tag. At least one tag key must be entered, and a maximum of 20 tag keys are supported. If this value needs to be passed in, it cannot be an empty string.

A tag key can support up to 128 characters, cannot start with 'aliyun' or 'acs:', and cannot contain 'http://' or 'https://'.

FinanceDept

Value

string

No

The value of the resource tag. A maximum of 20 tag values can be entered. If this value needs to be passed in, an empty string can be entered.

A maximum of 128 characters are supported, it cannot start with 'aliyun' or 'acs:', and it cannot contain 'http://' or 'https://'.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

C7F6FCBD-F9CC-4501-8EF3-CDC9577CAE45

PageNumber

integer

The page number. Default value: **1**.

1

PageSize

integer

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

TotalCount

integer

The number of entries returned.

1

RouterInterfaceSet

array<object>

The details of the router interface.

RouterInterfaceType

object

ReservationActiveTime

string

The time when the renewal takes effect.

The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.

2021-03-11T16:00:00Z

HealthCheckTargetIp

string

The destination IP address that is used for the health check.

116.62.XX.XX

Status

string

The status of the router interface.

active

CreationTime

string

The time when the route table was created.

The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.

2021-06-08T12:20:55

ReservationOrderType

string

The type of the renewal order. Valid values:

RENEWCHANGE

OppositeInterfaceId

string

The ID of the peer router interface.

ri-bp1itx13bwe6f2wfh\*\*\*\*

Spec

string

The specification of the router interface.

Large

ChargeType

string

The billing method.

PayByTraffic

RouterInterfaceId

string

The ID of the router interface.

ri-2zenfgfpyu3v93koa\*\*\*\*

HcThreshold

integer

The health check threshold.

2

OppositeRouterType

string

The type of the router to which the peer router interface belongs.

VRouter

VpcInstanceId

string

The ID of the local virtual private cloud (VPC) in the peering connection.

vpc-2ze3tq4uxhysg717x\*\*\*\*

OppositeInterfaceOwnerId

string

The ID of the Alibaba Cloud account to which the peer router interface belongs.

271598332402530847

OppositeVpcInstanceId

string

The ID of the peer VPC.

vpc-bp1qpo0kug3a20qqe\*\*\*\*

ReservationInternetChargeType

string

The metering method that is used after the renewal takes effect. Valid values:

PayByBandwidth

CrossBorder

boolean

Indicates whether the connection is a cross-border connection.

false

Bandwidth

integer

The bandwidth of the router interface. Unit: Mbit/s.

10

Description

string

The description of the router interface.

The description of the router interface.

HcRate

integer

The rate of heath checks.

1

ReservationBandwidth

string

The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.

10

Name

string

The custom name.

test

OppositeRouterId

string

The ID of the router to which the peer router interface belongs.

vrt-bp1d3bxtdv68tfd7g\*\*\*\*

OppositeInterfaceSpec

string

The specification of the peer router interface.

Large

RouterId

string

The ID of the router to which the route entry belongs.

vrt-bp1d3bxtdv68tfd7g\*\*\*\*

OppositeInterfaceBusinessStatus

string

The service status of the peer router interface.

Normal

ConnectedTime

string

The time when the connection was established.

The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.

2021-06-08T12:20:55

HealthCheckSourceIp

string

The source IP address that is used for the health check.

116.62.XX.XX

OppositeInterfaceStatus

string

The status of the peer router interface.

Normal

EndTime

string

The end of the time range during which data was queried.

The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.

2021-06-08T12:20:55

OppositeRegionId

string

The region ID of the peer router interface.

cn-shanghai

OppositeAccessPointId

string

The ID of the peer access point.

ap-cn-shanghaiSZ-\*\*\*\*

BusinessStatus

string

The service status of the router interface. Valid values:

-   **Normal**
-   **FinancialLocked**
-   **SecurityLocked**

Normal

OppositeBandwidth

integer

The maximum bandwidth of the peer router interface. Unit: Mbit/s.

12

RouterType

string

The type of the router to which the route table belongs. Valid values:

-   **VRouter**
-   **VBR**

VRouter

Role

string

Indicates whether the router interface is the initiator or acceptor of the peering connection.

InitiatingSide

HasReservationData

string

Indicates whether renewal data is included.

false

AccessPointId

string

The ID of the access point.

ap-cn-shanghaiSZ-\*\*\*\*

Ipv6Status

string

Indicates whether protection against malicious IPv6 traffic is enabled. Valid values:

-   **on**
-   **off**
-   **unsupport**

on

FastLinkMode

boolean

Indicates whether the VBR that is created in the Fast Link mode is uplinked to the router interface. The Fast Link mode helps automatically connect router interfaces that are created for the VBR and its peer VPC. Valid values:

-   **true**
-   **false** (default)

false

ResourceGroupId

string

Resource Group ID.

For more information about resource groups, please refer to [What is a Resource Group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tags

array<object>

The tags of the resource.

Tags

object

Key

string

The key of the resource tag. At least one tag key must be entered, and a maximum of 20 tag keys are supported. If this value needs to be passed in, it cannot be an empty string.

A tag key can support up to 128 characters, cannot start with 'aliyun' or 'acs:', and cannot contain 'http://' or 'https://'.

FinanceDept

Value

string

The value of the resource tag. A maximum of 20 tag values can be entered. If this value needs to be passed in, an empty string can be entered.

A maximum of 128 characters are supported, it cannot start with 'aliyun' or 'acs:', and it cannot contain 'http://' or 'https://'.

FinanceJoshua

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C7F6FCBD-F9CC-4501-8EF3-CDC9577CAE45",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 1,
  "RouterInterfaceSet": {
    "RouterInterfaceType": [
      {
        "ReservationActiveTime": "2021-03-11T16:00:00Z",
        "HealthCheckTargetIp": "116.62.XX.XX",
        "Status": "active",
        "CreationTime": "2021-06-08T12:20:55",
        "ReservationOrderType": "RENEWCHANGE",
        "OppositeInterfaceId": "ri-bp1itx13bwe6f2wfh****",
        "Spec": "Large",
        "ChargeType": "PayByTraffic",
        "RouterInterfaceId": "ri-2zenfgfpyu3v93koa****",
        "HcThreshold": 2,
        "OppositeRouterType": "VRouter",
        "VpcInstanceId": "vpc-2ze3tq4uxhysg717x****",
        "OppositeInterfaceOwnerId": 271598332402530850,
        "OppositeVpcInstanceId": "vpc-bp1qpo0kug3a20qqe****",
        "ReservationInternetChargeType": "PayByBandwidth",
        "CrossBorder": false,
        "Bandwidth": 10,
        "Description": "The description of the router interface.",
        "HcRate": 1,
        "ReservationBandwidth": 10,
        "Name": "test",
        "OppositeRouterId": "vrt-bp1d3bxtdv68tfd7g****",
        "OppositeInterfaceSpec": "Large",
        "RouterId": "vrt-bp1d3bxtdv68tfd7g****",
        "OppositeInterfaceBusinessStatus": "Normal",
        "ConnectedTime": "2021-06-08T12:20:55",
        "HealthCheckSourceIp": "116.62.XX.XX",
        "OppositeInterfaceStatus": "Normal",
        "EndTime": "2021-06-08T12:20:55",
        "OppositeRegionId": "cn-shanghai",
        "OppositeAccessPointId": "ap-cn-shanghaiSZ-****",
        "BusinessStatus": "Normal",
        "OppositeBandwidth": 12,
        "RouterType": "VRouter",
        "Role": "InitiatingSide",
        "HasReservationData": false,
        "AccessPointId": "ap-cn-shanghaiSZ-****",
        "Ipv6Status": "on",
        "FastLinkMode": false,
        "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
        "Tags": {
          "Tags": [
            {
              "Key": "FinanceDept",
              "Value": "FinanceJoshua"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParam.NotNull

The parameter must not be null.

A required parameter is not specified.

400

EndPoint.Empty

the rc endpoint is empty.

\-

400

InvalidConnectionType.MalFormed

Connection type must be vpc2vpc or vbr2vpc.

\-

400

InvalidProductForm.MalFormed

Product form must be routerinterface or expressconnect.

\-

400

InvalidRole.Malformed

role must be InitiatingSide or AcceptingSide.

\-

400

IllegalParam.AliUid

Specified value of aliuid invalid.

\-

400

Parameter.Illegal

The parameter is illegal.

The parameter is invalid.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidFilterKey.ValueNotSupported

Specified filter key is not supported: Filter.X.key

Filter.X.key is not supported.

404

InvalidRegionId.NotFound

The parameter wrong, pageNum or pageSize.

The parameter is set to an invalid value.

404

InvalidRegionId.NotFound

The specified region does not exist.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-11

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaces?updateTime=2023-09-11#workbench-doc-change-demo)

2023-07-20

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaces?updateTime=2023-07-20#workbench-doc-change-demo)

2021-09-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaces?updateTime=2021-09-29#workbench-doc-change-demo)

2021-09-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaces?updateTime=2021-09-29#workbench-doc-change-demo)
