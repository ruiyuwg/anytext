Queries Express Connect circuits in a region.

## Operation description

By default, the system queries information about all Express Connect circuits in the specified region. You can query Express Connect circuits that meet specific conditions by specifying filter conditions provided by the **DescribePhysicalConnections** operation. For more information about the supported filter conditions, see **Key** in the **Request parameters** section.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribePhysicalConnections)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribePhysicalConnections)

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

vpc:DescribePhysicalConnections

list

\*PhysicalConnection

`acs:vpc:{#regionId}:{#accountId}:physicalconnection/*`

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

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Default value: **10**. Valid values: **1** to **50**.

10

IncludeReservationData

boolean

No

Specifies whether to return the data about pending orders. Valid values:

-   **true**
-   **false** (default)

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

02fb3da4-130e-11e9-8e44-001

Filter

array<object>

No

The filter keys.

object

No

Key

string

No

The key of the filter. Valid values:

-   **PhysicalConnectionId**: the ID of the Express Connect circuit.
    
-   **AccessPointId**: the ID of the access point.
    
-   **Type**: the type of resource to which the Express Connect circuit is connected. You can set Type only to **VPC**.
    
-   **LineOperator**: the connectivity provider of the Express Connect circuit. Valid values:
    
    -   **CT**: China Telecom.
    -   **CU**: China Unicom.
    -   **CM**: China Mobile.
    -   **CO**: other connectivity providers in the Chinese mainland.
    -   **Equinix**: Equinix.
    -   **Other**: other connectivity providers outside the Chinese mainland.
-   **Spec**: the specification of the Express Connect circuit. Valid values:
    
    -   **1G and below**
    -   **10G**
    -   **40G**
    -   **100G**

**Note** By default, you cannot set the value to **40G** or **100G**. To use these values, you must first contact your account manager.

-   **Status**: the status of the Express Connect circuit. Valid values:
    
    -   **Initial**: The application is under review.
    -   **Approved**: The application is approved.
    -   **Allocating**: The system is allocating resources.
    -   **Allocated**: The Express Connect circuit is under construction.
    -   **Confirmed**: The Express Connect circuit is pending for user confirmation.
    -   **Enabled**: The Express Connect circuit is enabled.
    -   **Rejected**: The application is rejected.
    -   **Canceled**: The application is canceled.
    -   **Allocation Failed**: The system failed to allocate resources.
    -   **Terminating**: The Express Connect circuit is being disabled.
    -   **Terminated**: The Express Connect circuit is disabled.
-   **Name**: the name of the Express Connect circuit.
    
-   **ProductType**: the type of the Express Connect circuit. Valid values:
    
    -   **VirtualPhysicalConnection**: shared Express Connect circuit
    -   **PhysicalConnection**: dedicated Express Connect circuit.

You can specify at most five filter conditions in each request. The logical relation among the filter conditions is **AND**. Therefore, an Express Connect circuit is returned only when all specified filter conditions are matched.

Name

Value

array

No

The filter values.

string

No

The value of the filter condition.

You can specify at most five values for a filter condition. The logical relation among the values of each filter condition is **OR**. Therefore, an Express Connect circuit is returned when one of the specified values is matched.

nametest

Tags

array<object>

No

The tag list.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify at most 20 tag keys. The tag key cannot be an empty string.

It can be up to 64 characters in length and can contain digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

It can be up to 128 characters in length and can contain digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceJoshua

ResourceGroupId

string

No

The ID of the resource group to which the Express Connect circuit belongs.

rg-aek2yvwibxrmrkq

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

0E6D0EC4-7C91-53E2-9F65-64BF713114B0

PageNumber

integer

The page number. Default value: **1**.

1

PageSize

integer

The number of entries per page. Default value: **10**. Valid values: **1** to **50**.

10

TotalCount

integer

The number of returned entries.

1

PhysicalConnectionSet

array<object>

The list of Express Connect circuits.

PhysicalConnectionType

object

Type

string

The type of resource to which the Express Connect circuit is connected. Only **VPC** may be returned.

VPC

Status

string

The status of the Express Connect circuit. Valid values:

-   **Initial**
-   **Approved**
-   **Allocating**
-   **Allocated**
-   **Confirmed**
-   **Enabled**
-   **Rejected**
-   **Canceled**
-   **Allocation Failed**
-   **Terminating**
-   **Terminated**

Enabled

CreationTime

string

The time when the Express Connect circuit was created.

2021-08-24T07:30:58Z

AdLocation

string

The location of the access point.

Number 10, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.

ReservationActiveTime

string

The time when the pending order takes effect.

2022-02-25T11:01:04Z

ReservationOrderType

string

The type of the pending order.

If the value is **RENEW**, it indicates that the order is placed for service renewal.

RENEW

PortNumber

string

The ID of the port on the access device.

1/1/1

Spec

string

The specification of the Express Connect circuit.

Unit: **G** (Gbit/s).

10G

ChargeType

string

The billing method of the Express Connect circuit.

If **Prepaid** is returned, it indicates that the Express Connect circuit is billed on a subscription basis.

Prepaid

ReservationInternetChargeType

string

The billing method of the pending order.

If **PayByBandwidth** is returned, it indicates that the Express Connect circuit is billed on a pay-by-bandwidth basis.

PayByBandwidth

Description

string

The description of the Express Connect circuit.

desctest

Bandwidth

long

The maximum bandwidth of the Express Connect circuit.

Unit: Mbit/s.

10

EnabledTime

string

The time when the Express Connect circuit was enabled.

2021-08-24T07:33:18Z

LineOperator

string

The connectivity provider of the Express Connect circuit. Valid values:

-   **CT**: China Telecom.
-   **CU**: China Unicom.
-   **CM**: China Mobile.
-   **CO**: other connectivity providers in the Chinese mainland.
-   **Equinix**: Equinix.
-   **Other**: other connectivity providers outside the Chinese mainland.

CT

PeerLocation

string

The geographical location of the data center.

XX Number, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.

RedundantPhysicalConnectionId

string

The ID of the standby Express Connect circuit.

pc-119mfjzm\*\*\*\*

Name

string

The name of the Express Connect circuit.

nametest

CircuitCode

string

The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.

longtel001

EndTime

string

The time when the Express Connect circuit expires.

2022-04-24T16:00:00Z

PortType

string

The port type of the Express Connect circuit. Valid values:

-   **100Base-T**: 100 Mbit/s copper Ethernet port
-   **1000Base-T**: 1,000 Mbit/s copper Ethernet port
-   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
-   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
-   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
-   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
-   **100GBase-LR**: 100,000 Mbit/s single-mode optical port

**Note** Whether 40GBase-LR and 100GBase-LR ports can be created depends on resource supplies. For more information, contact your account manager.

10GBase-LR

BusinessStatus

string

The status of the Express Connect circuit. Valid values:

-   **Normal**: enabled
-   **FinancialLocked**: locked due to overdue payments
-   **SecurityLocked**: locked for security reasons

Normal

LoaStatus

string

The status of the letter of authorization (LOA). Valid values:

-   **Applying**: The LOA is pending for approval.
-   **Accept**: The LOA is approved.
-   **Available**: The LOA is available.
-   **Rejected**: The LOA is rejected.
-   **Completing**: The Express Connect circuit is under construction.
-   **Complete**: The Express Connect circuit is installed.
-   **Deleted**: The LOA is deleted.

Available

AccessPointId

string

The ID of the Express Connect circuit.

ap-cn-hangzhou-finance-yh-E

AccessPointType

string

The type of the access point.

VPC

HasReservationData

string

Indicates whether the data about pending orders is returned. Valid values:

-   **true**
-   **false**

false

PhysicalConnectionId

string

The ID of the Express Connect circuit.

pc-bp1ciz7ekd2grn1as\*\*\*\*

ProductType

string

The type of the Express Connect circuit. Valid values:

-   **VirtualPhysicalConnection**: shared Express Connect circuit
-   **PhysicalConnection**: dedicated Express Connect circuit

PhysicalConnection

VirtualPhysicalConnectionCount

integer

The number of Express Connect circuits that are established.

0

ParentPhysicalConnectionId

string

The ID of the parent Express Connect circuit.

pc-bp1ciz7ekd2grn1as\*\*\*\*

ParentPhysicalConnectionAliUid

long

The ID of the Alibaba Cloud account to which the parent Express Connect circuit belongs.

283117732402483989

VlanId

string

The VLAN ID of the shared Express Connect circuit.

10

OrderMode

string

The payer for the hosted connection. Valid values:

-   **PayByPhysicalConnectionOwner**: The partner pays for the shared Express Connect circuit.
-   **PayByVirtualPhysicalConnectionOwner**: The tenant pays for the shared Express Connect circuit.

PayByPhysicalConnectionOwner

VpconnStatus

string

The status of the shared Express Connect circuit. Valid values:

-   **Confirmed**
-   **UnConfirmed**
-   **Deleted**

Confirmed

ExpectSpec

string

The estimated maximum bandwidth of the shared Express Connect circuit. The estimated bandwidth takes effect after you complete the payment.

Unit: **M** (Mbit/s) and **G** (Gbit/s).

50M

ResourceGroupId

string

The resource group ID to which the instance belongs.

rg-acfmwu3k52prgdi

AdDetailLocation

string

The information about the data center and rack.

Position 30, Server Rack JXX, Booth ET135ET135-XX-2, Room XX, Building 10, XX Road, XX Town, XX District, Hangzhou, Zhejiang Province

Tags

array<object>

The tags that are added to the cluster.

tags

object

Key

string

The key of tag N added to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

The value of tag N added to the resource. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceJoshua

QosId

string

The ID of the QoS policy.

qos-bp10s3szn8rgnxuw7\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0E6D0EC4-7C91-53E2-9F65-64BF713114B0",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 1,
  "PhysicalConnectionSet": {
    "PhysicalConnectionType": [
      {
        "Type": "VPC",
        "Status": "Enabled",
        "CreationTime": "2021-08-24T07:30:58Z",
        "AdLocation": "Number 10, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.",
        "ReservationActiveTime": "2022-02-25T11:01:04Z",
        "ReservationOrderType": "RENEW",
        "PortNumber": "1/1/1",
        "Spec": "10G",
        "ChargeType": "Prepaid",
        "ReservationInternetChargeType": "PayByBandwidth",
        "Description": "desctest",
        "Bandwidth": 10,
        "EnabledTime": "2021-08-24T07:33:18Z",
        "LineOperator": "CT",
        "PeerLocation": "XX Number, XX Road, XX Town, XX District, Hangzhou City, Zhejiang Province.",
        "RedundantPhysicalConnectionId": "pc-119mfjzm****",
        "Name": "nametest",
        "CircuitCode": "longtel001",
        "EndTime": "2022-04-24T16:00:00Z",
        "PortType": "10GBase-LR",
        "BusinessStatus": "Normal",
        "LoaStatus": "Available",
        "AccessPointId": "ap-cn-hangzhou-finance-yh-E",
        "AccessPointType": "VPC",
        "HasReservationData": false,
        "PhysicalConnectionId": "pc-bp1ciz7ekd2grn1as****",
        "ProductType": "PhysicalConnection",
        "VirtualPhysicalConnectionCount": 0,
        "ParentPhysicalConnectionId": "pc-bp1ciz7ekd2grn1as****",
        "ParentPhysicalConnectionAliUid": 283117732402484000,
        "VlanId": 10,
        "OrderMode": "PayByPhysicalConnectionOwner",
        "VpconnStatus": "Confirmed",
        "ExpectSpec": "50M",
        "ResourceGroupId": "rg-acfmwu3k52prgdi",
        "AdDetailLocation": "Position 30, Server Rack JXX, Booth ET135ET135-XX-2, Room XX, Building 10, XX Road, XX Town, XX District, Hangzhou, Zhejiang Province\n",
        "Tags": {
          "tags": [
            {
              "Key": "FinanceDept",
              "Value": "FinanceJoshua"
            }
          ]
        },
        "QosId": "qos-bp10s3szn8rgnxuw7****"
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

OperationUnsupported.ResourceGroupId

ResourceGroupId in financial region is unsupported.

The operation is not supported because Alibaba Finance Cloud does not support resource group IDs.

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

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2024-11-12#workbench-doc-change-demo)

2024-06-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2024-06-13#workbench-doc-change-demo)

2024-02-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2024-02-01#workbench-doc-change-demo)

2023-08-08

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2023-08-08#workbench-doc-change-demo)

2023-04-25

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2023-04-25#workbench-doc-change-demo)

2021-11-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2021-11-17#workbench-doc-change-demo)

2021-09-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2021-09-27#workbench-doc-change-demo)

2021-09-27

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribePhysicalConnections?updateTime=2021-09-27#workbench-doc-change-demo)
