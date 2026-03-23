Queries virtual border routers (VBRs).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVirtualBorderRouters)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVirtualBorderRouters)

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

vpc:DescribeVirtualBorderRouters

list

\*VirtualBorderRouter

`acs:vpc:{#regionId}:{#AccountId}:virtualborderrouter/{#VbrId}`

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

The ID of the region in which the VBR is deployed. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to obtain the region ID.

cn-shanghai

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

The information about the filter.

object

No

The information about the filter.

Key

string

No

The filter conditions. You can specify up to five filter conditions. Valid values:

-   **PhysicalConnectionId**: Filter by Express Connect circuit ID.
-   **VbrId**: Filter by VBR ID.
-   **Status**: Filter by VBR status.
-   **Name**: Filter by VBR name.
-   **AccessPointId**: Filter by access point ID.
-   **eccId:** Filter by Express Cloud Connect (ECC) instance ID.
-   **type**: Filter by Express Connect circuit type.

Status

Value

array

No

The filter values for keys. You can specify multiple filter values for one key. The logical operator between filter values is OR. If one filter value is matched, the filter condition is matched.

string

No

The filter value for the key. You can specify multiple filter values for one key. The logical operator between filter values is OR. If one filter value is matched, the filter condition is matched.

Active

IncludeCrossAccountVbr

boolean

No

Specifies whether cross-account VBRs are included.

-   **true**
-   **false** (default)

false

ResourceGroupId

string

No

The resource group ID.

For more information about resource groups, see [What is a resource group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tags

array<object>

No

The list of tags.

object

No

The tags.

Key

string

No

The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.

The key cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`. The key cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The tag value. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value cannot exceed 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

The information about each virtual border router (VBR) that is queried.

RequestId

string

The request ID.

DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6

PageNumber

integer

The page number. Default value: **1**.

1

PageSize

integer

The number of entries per page. Valid values: **1 to 50**. Default value: **10**.

10

TotalCount

integer

The number of entries returned.

1

VirtualBorderRouterSet

array<object>

The information about the VBR.

VirtualBorderRouterType

object

CreationTime

string

The time when the VBR was created.

2020-06-08T12:20:55

Status

string

The status of the VBR. Valid values:

-   **unconfirmed**
-   **active**
-   **terminating**
-   **terminated**
-   **recovering**
-   **deleting:**

active

Type

string

The VBR type.

pconnVBR

MinTxInterval

long

The time interval to send Bidirectional Forwarding Detection (BFD) packets. Valid values: **200 to 1000**. Unit: milliseconds.

300

PeerIpv6GatewayIp

string

The IPv6 address of the VBR on the user side.

2001:XXXX:3c4d:0015:0000:0000:0000:1a2b

PConnVbrExpireTime

string

The time when the VBR expires.

2021-06-08T12:20:55

PhysicalConnectionOwnerUid

string

The ID of the account to which the Express Connect circuit belongs.

1688000000000\*\*\*\*

ActivationTime

string

The time when the VBR was activated for the first time.

2021-06-08T12:20:55

PhysicalConnectionBusinessStatus

string

The business status of the Express Connect circuit. Valid values:

-   **Normal:** The Express Connect circuit is running as normal.
-   **FinancialLocked:** The Express Connect circuit is locked due to overdue payments.

Normal

Description

string

The description of the VBR.

desc

TerminationTime

string

The last time when the VBR was terminated.

2021-06-08T12:20:55

MinRxInterval

long

The time interval to receive BFD packets. Valid values: **200 to 1000**. Unit: milliseconds.

300

PeerGatewayIp

string

The IPv4 address of the VBR on the user side.

192.168.XX.XX

Name

string

The VBR name.

test

VbrId

string

The VBR ID.

vbr-bp1jcg5cmxjbl9xgc\*\*\*\*

VlanId

integer

The VLAN ID of the VBR.

10

VlanInterfaceId

string

The ID of the VBR interface.

ri-2zeo3xzyf38r4xx\*\*\*\*

CircuitCode

string

The circuit code of the Express Connect circuit, which is provided by the connectivity provider.

longtel0\*\*\*\*

LocalIpv6GatewayIp

string

The IPv6 address of the VBR on the Alibaba Cloud side.

2001:XXXX:3c4d:0015:0000:0000:0000:1a2b

LocalGatewayIp

string

The IPv4 address of the VBR on the Alibaba Cloud side.

192.168.XX.XX

PeeringSubnetMask

string

The subnet mask for the IPv4 addresses on the Alibaba Cloud side and on the user side.

255.255.255.252

EnableIpv6

boolean

Indicates whether IPv6 is enabled. Valid values:

-   **true**
-   **false**

false

RouteTableId

string

The ID of the route table of the VBR.

rtb-bp1\*\*\*\*

DetectMultiplier

long

The multiple of the detection time.

This value indicates the maximum number of dropped packets that is allowed by the receiver when the initiator transmits packets. This value can be used to check whether the connection works as expected.

Valid values: **3 to 10**.

3

EccId

string

The ID of the Express Cloud Connect (ECC) instance.

ecc-h\*\*\*\*

CloudBoxInstanceId

string

The ID of the cloud box.

cb-\*\*\*\*

RecoveryTime

string

The last time when the status of the VBR changed from **terminated** to **active**.

2021-05-08T12:20:55

PhysicalConnectionStatus

string

The status of the Express Connect circuit. Valid values:

-   **Initial:** The application is under review.
-   **Approved**: The application is approved.
-   **Allocating**: The system is allocating resources.
-   **Allocated**: The Express Connect circuit is under construction.
-   **Confirmed**: The Express Connect circuit is to be confirmed.
-   **Enabled**: The Express Connect circuit is enabled.
-   **Rejected**: The application is rejected.
-   **Canceled**: The application is canceled.
-   **Allocation Failed:** The system failed to allocate resources.
-   **Terminated:** The Express Connect circuit is disabled.

Normal

PeeringIpv6SubnetMask

string

The subnet mask for the IPv6 addresses on the user side and on the Alibaba Cloud side.

2000:1234:0:a000::/55

AccessPointId

string

The ID of the access point.

ap-cn-kojok1x\*\*\*\*

PConnVbrChargeType

string

The billing method of the VBR. Valid values:

-   **PrePaid:** subscription. If you choose this billing method, make sure that your account supports balance payments or credit payments.
-   **PostPaid:** pay-as-you-go.

PrePaid

PhysicalConnectionId

string

The ID of the Express Connect circuit to which the VBR belongs.

pc-119mfjzm7x\*\*\*\*

AssociatedPhysicalConnections

array<object>

The information about the Express Connect circuit that is associated with the VBR.

AssociatedPhysicalConnection

object

The information about the Express Connect circuit that is associated with the VBR.

Status

string

The status of the VBR. Valid values:

-   **unconfirmed**
-   **active:**
-   **terminating**
-   **terminated**
-   **recovering**
-   **deleting:**

active

VlanInterfaceId

string

The ID of the VBR interface, which can be used as a next hop of a VBR route.

ri-kojok19x3j0q6k\*\*\*\*

CircuitCode

string

The circuit code of the Express Connect circuit, which is provided by the connectivity provider.

longtel0\*\*

PeerIpv6GatewayIp

string

The IPv6 address of the VBR on the user side.

2001:XXXX:3c4d:0015:0000:0000:0000:1a2b

LocalIpv6GatewayIp

string

The IPv6 address of the VBR on the Alibaba Cloud side.

2001:XXXX:3c4d:0015:0000:0000:0000:1a2b

PhysicalConnectionOwnerUid

string

The ID of the account to which the Express Connect circuit belongs.

12345678\*\*\*\*

LocalGatewayIp

string

The IPv4 address of the VBR on the Alibaba Cloud side.

192.168.XX.XX

PhysicalConnectionBusinessStatus

string

The business status of the Express Connect circuit. Valid values:

-   **Normal:** The Express Connect circuit is running as normal.
-   **FinancialLocked:** The Express Connect circuit is locked due to overdue payments.

Normal

PeeringSubnetMask

string

The subnet mask for the IPv4 addresses of the VBR on the user side and on the Alibaba Cloud side.

Both IPv4 addresses must belong to the same subnet.

255.255.255.252

EnableIpv6

boolean

Indicates whether IPv6 is enabled. Valid values:

-   **true**
-   **false**

true

PhysicalConnectionStatus

string

The status of the Express Connect circuit. Valid values:

-   **Initial:** The application is under review.
-   **Approved**: The application is approved.
-   **Allocating**: The system is allocating resources.
-   **Allocated**: The Express Connect circuit is under construction.
-   **Confirmed**: The Express Connect circuit is to be confirmed.
-   **Enabled**: The Express Connect circuit is enabled.
-   **Rejected**: The application is rejected.
-   **Canceled**: The application is canceled.
-   **Allocation Failed:** The system failed to allocate resources.
-   **Terminated:** The Express Connect circuit is disabled.

Enabled

PeerGatewayIp

string

The IPv4 address of the VBR on the user side.

116.62.XX.XX

PeeringIpv6SubnetMask

string

The subnet mask for the IPv6 addresses on the user side and on the Alibaba Cloud side.

Both IPv6 addresses must belong to the same subnet.

2408:4004:cc:400::/56

PhysicalConnectionId

string

The ID of the Express Connect circuit.

pc-119mfjzm7\*\*\*\*

VlanId

string

The VLAN ID of the VBR.

0

AssociatedCens

array<object>

The information about the Cloud Enterprise Network (CEN) instance to which the VBR is attached.

AssociatedCen

object

The information about the Cloud Enterprise Network (CEN) instance to which the VBR is attached.

CenOwnerId

long

The ID of the account to which the CEN instance belongs.

1688000000000\*\*\*\*

CenId

string

The CEN instance ID.

cen-kojok19xxx\*\*\*\*

CenStatus

string

The status of the CEN instance. Valid values:

-   **Attached**
-   **Attaching**
-   **Detached**
-   **Detaching**
-   If no value is returned, the VBR is not attached to a CEN instance.

Attached

Bandwidth

integer

The bandwidth value of the VBR. Unit: Mbit/s.

50

ResourceGroupId

string

The resource group ID.

For more information about resource groups, see [Resource groups](/help/en/resource-management/product-overview/what-is-resource-management).

rg-acfmxazb4ph6aiy\*\*\*\*

Tags

array<object>

The tag of the resource.

Tags

object

The tag list.

Key

string

The tag key of the resource.

FinanceDept

Value

string

The tag value of the resource.

FinanceJoshua

EcrId

string

The ID of the Express Connect Router (ECR).

ecr-7vrbqv9lcgvzqbwwkm

SitelinkEnable

boolean

Indicates whether to allow service access between data centers. Valid values:

-   **true**
-   **false**

**Note** If no value is returned, service access between data centers is not allowed.

false

EcrAttatchStatus

string

The status of the ECR. Valid values:

-   **Attached**
-   **Attaching**
-   **Detached**
-   **Detaching**
-   If no value is returned, the VBR is not attached to a CEN instance.

Attached

EcrOwnerId

string

The ID of the Alibaba Cloud account (primary account) to which the ECR belongs.

192732132151xxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 1,
  "VirtualBorderRouterSet": {
    "VirtualBorderRouterType": [
      {
        "CreationTime": "2020-06-08T12:20:55",
        "Status": "active",
        "Type": "pconnVBR",
        "MinTxInterval": 300,
        "PeerIpv6GatewayIp": "2001:XXXX:3c4d:0015:0000:0000:0000:1a2b",
        "PConnVbrExpireTime": "2021-06-08T12:20:55",
        "PhysicalConnectionOwnerUid": "1688000000000****",
        "ActivationTime": "2021-06-08T12:20:55",
        "PhysicalConnectionBusinessStatus": "Normal",
        "Description": "desc",
        "TerminationTime": "2021-06-08T12:20:55",
        "MinRxInterval": 300,
        "PeerGatewayIp": "192.168.XX.XX",
        "Name": "test",
        "VbrId": "vbr-bp1jcg5cmxjbl9xgc****",
        "VlanId": 10,
        "VlanInterfaceId": "ri-2zeo3xzyf38r4xx****",
        "CircuitCode": "longtel0****",
        "LocalIpv6GatewayIp": "2001:XXXX:3c4d:0015:0000:0000:0000:1a2b",
        "LocalGatewayIp": "192.168.XX.XX",
        "PeeringSubnetMask": "255.255.255.252",
        "EnableIpv6": false,
        "RouteTableId": "rtb-bp1****",
        "DetectMultiplier": 3,
        "EccId": "ecc-h****",
        "CloudBoxInstanceId": "cb-****",
        "RecoveryTime": "2021-05-08T12:20:55",
        "PhysicalConnectionStatus": "Normal",
        "PeeringIpv6SubnetMask": "2000:1234:0:a000::/55",
        "AccessPointId": "ap-cn-kojok1x****",
        "PConnVbrChargeType": "PrePaid",
        "PhysicalConnectionId": "pc-119mfjzm7x****",
        "AssociatedPhysicalConnections": {
          "AssociatedPhysicalConnection": [
            {
              "Status": "active",
              "VlanInterfaceId": "ri-kojok19x3j0q6k****",
              "CircuitCode": "longtel0**",
              "PeerIpv6GatewayIp": "2001:XXXX:3c4d:0015:0000:0000:0000:1a2b",
              "LocalIpv6GatewayIp": "2001:XXXX:3c4d:0015:0000:0000:0000:1a2b",
              "PhysicalConnectionOwnerUid": "12345678****",
              "LocalGatewayIp": "192.168.XX.XX",
              "PhysicalConnectionBusinessStatus": "Normal",
              "PeeringSubnetMask": "255.255.255.252",
              "EnableIpv6": true,
              "PhysicalConnectionStatus": "Enabled",
              "PeerGatewayIp": "116.62.XX.XX",
              "PeeringIpv6SubnetMask": "2408:4004:cc:400::/56",
              "PhysicalConnectionId": "pc-119mfjzm7****",
              "VlanId": 0
            }
          ]
        },
        "AssociatedCens": {
          "AssociatedCen": [
            {
              "CenOwnerId": 0,
              "CenId": "cen-kojok19xxx****",
              "CenStatus": "Attached"
            }
          ]
        },
        "Bandwidth": 50,
        "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
        "Tags": {
          "Tags": [
            {
              "Key": "FinanceDept",
              "Value": "FinanceJoshua"
            }
          ]
        },
        "EcrId": "ecr-7vrbqv9lcgvzqbwwkm",
        "SitelinkEnable": false,
        "EcrAttatchStatus": "Attached",
        "EcrOwnerId": "192732132151xxxx"
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

OperationFailed.InternalError

The request processing has failed due to some unknown error.

Unknown error. Please retry the operation. The error still exists. Please submit the work order for processing.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

InvalidFilterKey.ValueNotSupported

Specified filter key is not supported: Filter.X.key

Filter.X.key is not supported.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVirtualBorderRouters?updateTime=2024-11-12#workbench-doc-change-demo)

2024-04-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVirtualBorderRouters?updateTime=2024-04-17#workbench-doc-change-demo)

2023-12-26

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVirtualBorderRouters?updateTime=2023-12-26#workbench-doc-change-demo)

2023-09-11

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVirtualBorderRouters?updateTime=2023-09-11#workbench-doc-change-demo)

2023-07-20

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeVirtualBorderRouters?updateTime=2023-07-20#workbench-doc-change-demo)
