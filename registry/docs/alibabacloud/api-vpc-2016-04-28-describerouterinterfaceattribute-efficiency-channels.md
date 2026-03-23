Queries the configuration of a router interface.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouterInterfaceAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeRouterInterfaceAttribute)

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

vpc:DescribeRouterInterfaceAttribute

get

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

The ID of the region to which the router interface belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-qingdao

InstanceId

string

Yes

The ID of the router interface.

ri-m5egfc10sednwk2yt\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

ReservationActiveTime

string

The time when the renewal takes effect.

2022-06-11T16:00:00Z

HealthCheckTargetIp

string

The destination IP address that is used for the health check.

2.2.XX.XX

Status

string

The status of the router interface. Valid values:

-   **Idle**
-   **AcceptingConnecting**
-   **Connecting**
-   **Activating**
-   **Active**
-   **Modifying**
-   **Deactivating**
-   **Inactive**
-   **Deleting**

Active

CreationTime

string

The time when the router interface was created.

2022-04-14T08:57:24Z

ReservationOrderType

string

The type of the renewal order. Only **RENEW** may be returned, which indicates that the order is placed for service renewal.

RENEW

OppositeInterfaceId

string

The ID of the peer router interface.

ri-bp1xkrzttximaoxbl\*\*\*\*

Spec

string

The specification of the router interface. Valid values:

-   **Mini.2**: 2 Mbit/s
-   **Mini.5**: 5 Mbit/s
-   **Small.1**: 10 Mbit/s
-   **Small.2**: 20 Mbit/s
-   **Small.5**: 50 Mbit/s
-   **Middle.1**: 100 Mbit/s
-   **Middle.2**: 200 Mbit/s
-   **Middle.5**: 500 Mbit/s
-   **Large.1**: 1,000 Mbit/s
-   **Large.2**: 2,000 Mbit/s
-   **Large.5**: 5,000 Mbit/s
-   **Xlarge.1**: 10,000 Mbit/s

Mini.2

ChargeType

string

The billing method. Valid values:

-   **AfterPay**: pay-as-you-go
-   **PrePaid**: subscription

AfterPay

RouterInterfaceId

string

The ID of the router interface.

ri-m5egfc10sednwk2yt\*\*\*\*

Message

string

The response parameters.

successful

HcThreshold

integer

The healthy threshold. This value indicates the number of probe packets that are sent during a health check. Unit: packets.

8

OppositeRouterType

string

The type of the router to which the peer router interface belongs. Valid values:

-   **VRouter**
-   **VBR**

VRouter

GmtModified

string

The time when the router interface was modified.

2022-04-28T10:02:12Z

VpcInstanceId

string

The ID of the virtual private cloud (VPC) to which the router interface belongs.

vpc-bp1b49rqrybk45nio\*\*\*\*

OppositeInterfaceOwnerId

string

The ID of the Alibaba Cloud account to which the peer router interface belongs.

1321932713\*\*\*\*

OppositeVpcInstanceId

string

The ID of the peer VPC.

vpc-bp1b49rqrybk45nio\*\*\*\*

ReservationInternetChargeType

string

The metering method that is used after the renewal takes effect. Valid values: If **PayByBandwidth** is returned, it indicates that the Express Connect circuit is billed on a pay-by-bandwidth basis.

PayByBandwidth

CrossBorder

boolean

Indicates whether the connection is a cross-border connection. Valid values:

-   **false**
-   **true**

false

RequestId

string

The request ID.

01818199-04F6-47F4-9ADF-7CC824CF57A4

Bandwidth

integer

The bandwidth of the router interface. Unit: Mbit/s.

2

Description

string

The description of the router interface.

Peer interface.

HcRate

integer

The rate of health checks. Unit: seconds. The value indicates the interval at which probe packets are sent during a health check.

2

ReservationBandwidth

string

The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.

100

Code

string

The HTTP status code.

200

Name

string

The name of the router interface.

RouterInterface1

OppositeRouterId

string

The ID of the router to which the peer router interface belongs.

vrt-bp11xvy6lb9photuu\*\*\*\*

OppositeInterfaceSpec

string

The specification of the peer router interface. Valid values:

-   **Mini.2**: 2 Mbit/s
-   **Mini.5**: 5 Mbit/s
-   **Small.1**: 10 Mbit/s
-   **Small.2**: 20 Mbit/s
-   **Small.5**: 50 Mbit/s
-   **Middle.1**: 100 Mbit/s
-   **Middle.2**: 200 Mbit/s
-   **Middle.5**: 500 Mbit/s
-   **Large.1**: 1,000 Mbit/s
-   **Large.2**: 2,000 Mbit/s
-   **Large.5**: 5,000 Mbit/s
-   **Xlarge.1**: 10,000 Mbit/s
-   **Negative**: not applicable

Negative

RouterId

string

The ID of the router to which the router interface belongs.

vbr-m5ex0xf63xk8s5bob\*\*\*\*

Success

boolean

Indicates whether the request is successful. Valid values: true and false.

true

OppositeInterfaceBusinessStatus

string

The service status of the peer router interface. Valid values:

-   **Normal**
-   **FinancialLocked**
-   **SecurityLocked**

Normal

ConnectedTime

string

The time when the connection was established.

2022-04-14T08:58:04Z

HealthCheckSourceIp

string

The source IP address that is used for the health check.

1.1.XX.XX

OppositeInterfaceStatus

string

The status of the peer router interface. Valid values:

-   **Idle**
-   **AcceptingConnecting**
-   **Connecting**
-   **Activating**
-   **Active**
-   **Modifying**
-   **Deactivating**
-   **Inactive**
-   **Deleting**
-   **Deleted**

Active

EndTime

string

The end of the time range during which data was queried.

2999-09-08T16:00:00Z

OppositeRegionId

string

The region ID of the peer router interface.

cn-hangzhou

OppositeAccessPointId

string

The ID of the peer access point.

ap-cn-qingdao-ls-B

BusinessStatus

string

The status of the router interface. Valid values:

-   **Normal**
-   **FinancialLocked**
-   **SecurityLocked**

Normal

HealthCheckStatus

string

The status of the health check. Valid values:

-   **Abnormal**
-   **Normal**
-   **NoRedundantRoute**
-   **NoHealthCheckConfig**

normal

OppositeBandwidth

integer

The maximum bandwidth of the peer router interface. Unit: Mbit/s.

0

RouterType

string

The type of the router to which the route table belongs. Valid values:

-   **VRouter**
-   **VBR**

VRouter

Role

string

The role of the router interface in the peering connection.

InitiatingSide

HasReservationData

string

Indicates whether renewal data is included. Valid values:

-   **false**
-   **true**

false

AccessPointId

string

The ID of the access point.

ap-cn-qingdao-ls-A

ResourceGroupId

string

The resource group ID.

For more information about resource groups, see [What is a resource group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tags

array<object>

The tag of the resource.

Tags

object

Key

string

The key of tag N added to the resource. You must enter at least one tag key and at most 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

The value of tag N added to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

It can be up to 128 characters in length and can contain digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceJoshua

FastLinkMode

string

Indicates whether the VBR that is created in the Fast Link mode is uplinked to the router interface. The Fast Link mode helps automatically connect router interfaces that are created for the VBR and its peer VPC. Valid values:

-   **true**
-   **false** (default)

**Note**

-   This parameter takes effect only when **RouterType** is set to **VBR** and **OppositeRouterType** is set to **VRouter**.
    
-   When **FastLinkMode** is set to **true**, **Role** must be set to **InitiatingSide**. **AccessPointId**, **OppositeRouterType**, **OpppsiteRouterId**, and **OppositeInterfaceOwnerId** are required.
    

false

## Examples

Sample success responses

`JSON`format

```
{
  "ReservationActiveTime": "2022-06-11T16:00:00Z",
  "HealthCheckTargetIp": "2.2.XX.XX",
  "Status": "Active",
  "CreationTime": "2022-04-14T08:57:24Z",
  "ReservationOrderType": "RENEW",
  "OppositeInterfaceId": "ri-bp1xkrzttximaoxbl****",
  "Spec": "Mini.2",
  "ChargeType": "AfterPay",
  "RouterInterfaceId": "ri-m5egfc10sednwk2yt****",
  "Message": "successful",
  "HcThreshold": 8,
  "OppositeRouterType": "VRouter",
  "GmtModified": "2022-04-28T10:02:12Z",
  "VpcInstanceId": "vpc-bp1b49rqrybk45nio****",
  "OppositeInterfaceOwnerId": "1321932713****",
  "OppositeVpcInstanceId": "vpc-bp1b49rqrybk45nio****",
  "ReservationInternetChargeType": "PayByBandwidth",
  "CrossBorder": false,
  "RequestId": "01818199-04F6-47F4-9ADF-7CC824CF57A4",
  "Bandwidth": 2,
  "Description": "Peer interface.",
  "HcRate": 2,
  "ReservationBandwidth": 100,
  "Code": 200,
  "Name": "RouterInterface1",
  "OppositeRouterId": "vrt-bp11xvy6lb9photuu****",
  "OppositeInterfaceSpec": "Negative",
  "RouterId": "vbr-m5ex0xf63xk8s5bob****",
  "Success": true,
  "OppositeInterfaceBusinessStatus": "Normal",
  "ConnectedTime": "2022-04-14T08:58:04Z",
  "HealthCheckSourceIp": "1.1.XX.XX",
  "OppositeInterfaceStatus": "Active",
  "EndTime": "2999-09-08T16:00:00Z",
  "OppositeRegionId": "cn-hangzhou",
  "OppositeAccessPointId": "ap-cn-qingdao-ls-B",
  "BusinessStatus": "Normal",
  "HealthCheckStatus": "normal",
  "OppositeBandwidth": 0,
  "RouterType": "VRouter",
  "Role": "InitiatingSide",
  "HasReservationData": false,
  "AccessPointId": "ap-cn-qingdao-ls-A",
  "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
  "Tags": {
    "Tags": [
      {
        "Key": "FinanceDept",
        "Value": "FinanceJoshua"
      }
    ]
  },
  "FastLinkMode": false
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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-11

API Description Update. The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaceAttribute?updateTime=2023-09-11#workbench-doc-change-demo)

2023-07-24

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaceAttribute?updateTime=2023-07-24#workbench-doc-change-demo)

2023-07-20

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaceAttribute?updateTime=2023-07-20#workbench-doc-change-demo)

2022-09-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaceAttribute?updateTime=2022-09-14#workbench-doc-change-demo)

2022-09-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeRouterInterfaceAttribute?updateTime=2022-09-14#workbench-doc-change-demo)
