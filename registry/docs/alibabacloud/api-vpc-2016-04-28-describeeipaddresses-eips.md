Queries elastic IP addresses (EIPs) created in a region.

## Operation description

You can call this operation to query information about EIPs in a region, including maximum bandwidth, billing methods, and associated instances.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeEipAddresses)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeEipAddresses)

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

vpc:DescribeEipAddresses

list

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/*`

-   vpc:tag

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

The region ID of the EIP.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the region ID.

cn-hangzhou

IncludeReservationData

boolean

No

Specifies whether to return information about pending orders. Valid values:

-   **false** (default)
-   **true**

false

Status

string

No

The state of the EIP. Valid values:

-   **Associating**
-   **Unassociating**
-   **InUse**
-   **Available**
-   **Releasing**

Available

EipAddress

string

No

The EIP that you want to query.

You can specify up to 50 EIPs. Separate multiple EIPs with commas (,).

**Note** If both **EipAddress** and **AllocationId** are specified, you can specify up to 50 EIPs for **EipAddress**, and specify up to 50 EIP IDs for **AllocationId**.

47.75.XX.XX

AllocationId

string

No

The ID of the EIP that you want to query.

You can specify up to 50 EIP IDs. Separate multiple IDs with commas (,).

**Note** If both **EipAddress** and **AllocationId** are specified, you can specify up to 50 EIP IDs for **AllocationId**, and specify up to 50 EIPs for **EipAddress**.

eip-2zeerraiwb7ujxscd\*\*\*\*

SegmentInstanceId

string

No

The ID of the contiguous EIP group.

eipsg-t4nr90yik5oy38xdy\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group to which the EIP belongs.

rg-acfmxazb4pcdvf\*\*\*\*

PageNumber

integer

No

The page number. Default value: **1**.

10

PageSize

integer

No

The number of entries per page. Valid values: 1 to **100**. Default value: **10**.

10

ISP

string

No

The line type. Valid values:

-   **BGP** (default): Border Gateway Protocol (BGP) (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro lines. Only the following regions support BGP (Multi-ISP) Pro lines: China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).

For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the [Line types](/help/en/eip/product-overview/what-is-eip) section of the "What is EIP?" topic.

If you are allowed to use single-ISP bandwidth, you can also use one of the following values:

-   **ChinaTelecom**
-   **ChinaUnicom**
-   **ChinaMobile**
-   **ChinaTelecom\_L2**
-   **ChinaUnicom\_L2**
-   **ChinaMobile\_L2**

If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP\_FinanceCloud**.

BGP

Filter.1.Key

string

No

The filter key used to query resources. Set the value to **CreationStartTime**, which specifies the time when the system started to create the resource.

CreationStartTime

Filter.2.Key

string

No

The filter key used to query resources. Set the value to **CreationEndTime**, which specifies the time when the system finished creating the resource.

CreationEndTime

Filter.1.Value

string

No

The filter value used to query resources. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time must be in Coordinated Universal Time (UTC).

2023-01-01T01:00Z

Filter.2.Value

string

No

The filter value used to query resources. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time must be in UTC.

2023-01-06T02:00Z

LockReason

string

No

The reason why the EIP is locked. Valid values:

-   **financial**: The EIP is locked due to overdue payments.
-   **security**: The EIP is locked for security reasons.

financial

AssociatedInstanceType

string

No

The type of the cloud resource with which you want to associate the EIP. Valid values:

-   **EcsInstance** (default): an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC).
-   **SlbInstance**: a CLB instance in a VPC.
-   **Nat**: a NAT gateway.
-   **HaVip**: an HAVIP.
-   **NetworkInterface**: a secondary ENI.
-   **IpAddress**: an IP address.

**Note** Each ECS instance, CLB instance, HAVIP, and IP address can be associated with only one EIP. A NAT gateway can be associated with multiple EIPs. The number of EIPs that you can associate with a secondary ENI depends on the association mode. For more information, see [Associate EIPs with and disassociate EIPs from cloud resources](/help/en/eip/bind-an-eip-to-a-cloud-resource/).

EcsInstance

AssociatedInstanceId

string

No

The ID of the instance associated with the EIP.

i-2zebb08phyccdvf\*\*\*\*

ChargeType

string

No

The billing method of the EIP. Valid values:

-   **PostPaid**: pay-as-you-go.
-   **PrePaid**: subscription.

PostPaid

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

EipName

string

No

The name of the EIP.

The name must be 1 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter.

EIP-01

Tag

array<object>

No

The tags used to filter EIPs.

object

No

The tags.

Key

string

No

The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

FinanceDept

Value

string

No

The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.

FinanceJoshua

SecurityProtectionEnabled

boolean

No

Specifies whether to activate Anti-DDoS Pro/Premium. Valid values:

-   **false**
-   **true**

false

PublicIpAddressPoolId

string

No

The IP address pool to which the EIP that you want to query belongs.

pippool-2vc0kxcedhquybdsz\*\*\*\*

ServiceManaged

boolean

No

Indicates whether the instance is managed. Valid values:

-   **true**: yes
-   **false**: no.

If you do not specify this parameter, all instances are queried.

false

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

4EC47282-1B74-4534-BD0E-403F3EE64CAF

PageNumber

integer

The page number.

10

TotalCount

integer

The total number of entries returned.

1

EipAddresses

array<object>

Details of the EIPs.

EipAddress

object

The details of the EIP.

ReservationActiveTime

string

The time when the renewal took effect. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.

2021-05-23T16:00:00Z

Status

string

The status of the EIP. Valid values:

-   **Associating**
-   **Unassociating**
-   **InUse**
-   **Available**
-   **Releasing**

Available

ReservationOrderType

string

The type of the renewal order. Valid values:

-   **RENEWCHANGE**: renewal with an upgrade or a downgrade.
-   **TEMP\_UPGRADE**: temporary upgrade.
-   **UPGRADE**: upgrade.

RENEWCHANGE

AllocationTime

string

The time when the EIP was created. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.

2021-04-23T01:37:38Z

Netmode

string

The network type. Only **public** may be returned.

public

ChargeType

string

The billing method of the EIP. Valid values:

-   **PostPaid**: pay-as-you-go.
-   **PrePaid**: subscription.

PostPaid

Description

string

The description of the EIP.

abc

Mode

string

The association mode. Valid values:

-   **NAT**: NAT mode
-   **MULTI\_BINDED**: multi-EIP-to-ENI mode
-   **BINDED**: cut-through mode

NAT

SegmentInstanceId

string

The ID of the contiguous EIP group.

This value is returned only when you query contiguous EIPs.

eipsg-t4nr90yik5oy38xd\*\*\*\*

ReservationInternetChargeType

string

The metering method that is used after the renewal takes effect. Valid values:

-   **PayByBandwidth**
-   **PayByTraffic**

PayByBandwidth

BandwidthPackageId

string

The ID of the Internet Shared Bandwidth instance.

cbwp-bp1ego3i4j07ccdvf\*\*\*\*

IpAddress

string

The EIP.

47.75.XX.XX

Bandwidth

string

The maximum bandwidth of the EIP. Unit: Mbit/s.

5

ReservationBandwidth

string

The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.

12

EipBandwidth

string

The maximum bandwidth of the EIP when it is not associated with an Internet Shared Bandwidth instance. Unit: Mbit/s.

101

Name

string

The name of the EIP.

EIP-01

PrivateIpAddress

string

The private IP address of the secondary ENI with which the EIP is associated.

192.168.XX.XX

InstanceRegionId

string

The region ID of the associated instance.

cn-hangzhou

DeletionProtection

boolean

Indicates whether deletion protection is enabled. Valid values:

-   **true**
-   **false**

true

InstanceId

string

The ID of the associated instance.

i-bp15zckdt37cdvf\*\*\*\*

SecondLimited

boolean

Indicates whether level-2 throttling is configured. Valid values:

-   **true**
-   **false**

false

InstanceType

string

The type of the associated instance. Valid values:

-   **EcsInstance**: an ECS instance in a VPC.
-   **SlbInstance**: a CLB instance in a VPC.
-   **Nat**: a NAT gateway.
-   **HaVip**: an HAVIP.
-   **NetworkInterface**: a secondary ENI.
-   **IpAddress**: an IP address.

EcsInstance

HDMonitorStatus

string

Indicates whether fine-grained monitoring is enabled for the EIP. Valid values:

-   **false**
-   **true**

false

RegionId

string

The region ID of the EIP.

cn-hangzhou

BandwidthPackageBandwidth

string

The maximum bandwidth of the Internet Shared Bandwidth instance with which the EIP is associated. Unit: Mbit/s.

50

ServiceManaged

integer

Indicates whether the instance is managed. Valid values:

-   **1**: yes
-   **0**: no

0

ExpiredTime

string

The time when the EIP expires. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format.

2021-05-23T02:00:00Z

ResourceGroupId

string

The resource group ID.

rg-acfmxazcdxs\*\*\*\*

AllocationId

string

The ID of the EIP.

eip-2zeerraiwb7ujcdvf\*\*\*\*

InternetChargeType

string

The metering method of the EIP. Valid values:

-   **PayByBandwidth**
-   **PayByTraffic**

PayByBandwidth

BusinessStatus

string

The service status of the EIP. Valid values:

-   **Normal**
-   **OperationLock**
-   **Unactivated**

Normal

BandwidthPackageType

string

The type of the bandwidth. Only **CommonBandwidthPackage** may be returned, which indicates Internet Shared Bandwidth.

CommonBandwidthPackage

HasReservationData

string

Indicates whether renewal data is included. Valid values:

-   **false**
-   **true** A value of **true** is returned only when **IncludeReservationData** is set to **true** and some orders have not taken effect.

false

ISP

string

The line type. Valid values:

-   **BGP**: BGP (Multi-ISP). The BGP (Multi-ISP) line is supported in all regions.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro line is supported only in the China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.

For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the [Line types](/help/en/eip/product-overview/what-is-eip) section of the "What is EIP?" topic.

If you are allowed to use single-ISP bandwidth, one of the following values may be returned:

-   **ChinaTelecom**
-   **ChinaUnicom**
-   **ChinaMobile**
-   **ChinaTelecom\_L2**
-   **ChinaUnicom\_L2**
-   **ChinaMobile\_L2**

If your services are deployed in China East 1 Finance, **BGP\_FinanceCloud** is returned.

BGP

OperationLocks

array<object>

The details about the locked EIP.

LockReason

object

The details about the locked EIP.

LockReason

string

The reason why the EIP is locked. Valid values:

-   **financial**: The EIP is locked due to overdue payments.
-   **security**: The instance is locked for security purposes.
-   **sharedPool**: The shared IP address pool is locked due to overdue payments.

financial

Tags

array<object>

The tags of the EIP.

Tag

object

The tags.

Key

string

The tag key of the EIP.

KeyTest

Value

string

The tag value of the EIP.

ValueTest

SecurityProtectionTypes

array

The edition of Anti-DDoS.

-   If an empty value is returned, it indicates that Anti-DDoS Origin Basic is used.
-   If **AntiDDoS\_Enhanced** is returned, it indicates that Anti-DDoS Pro/Premium is used.

SecurityProtectionType

string

The edition of Anti-DDoS.

-   If an empty value is returned, it indicates that Anti-DDoS Origin Basic is used.
-   If **AntiDDoS\_Enhanced** is returned, it indicates that Anti-DDoS Pro/Premium is used.

AntiDDoS\_Enhanced

PublicIpAddressPoolId

string

The ID of the IP address pool to which the EIP belongs.

pippool-2vc0kxcedhquybdsz\*\*\*\*

VpcId

string

The ID of the VPC in which an IPv4 gateway is created and that is deployed in the same region as the EIP.

When you associate an EIP with an IP address, the system can enable the IP address to access the Internet based on VPC route configurations.

**Note** This parameter is returned if the value of **InstanceType** is **IpAddress**. In this case, the EIP is associated with an IP address.

vpc-bp15zckdt37pq72zv\*\*\*\*

Zone

string

The zone of the EIP.

This parameter is returned only when the service type is CloudBox.

cn-hangzhou-a

BizType

string

The service type. Valid values:

-   **CloudBox** Only cloud box users can select this type.
-   **Default** (default)

CloudBox

ServiceID

long

The ID of the service provider to which the managed instance belongs.

**Note** This is only valid when the ServiceManaged parameter is set to True.

197\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "4EC47282-1B74-4534-BD0E-403F3EE64CAF",
  "PageNumber": 10,
  "TotalCount": 1,
  "EipAddresses": {
    "EipAddress": [
      {
        "ReservationActiveTime": "2021-05-23T16:00:00Z",
        "Status": "Available",
        "ReservationOrderType": "RENEWCHANGE",
        "AllocationTime": "2021-04-23T01:37:38Z",
        "Netmode": "public",
        "ChargeType": "PostPaid",
        "Description": "abc",
        "Mode": "NAT",
        "SegmentInstanceId": "eipsg-t4nr90yik5oy38xd****",
        "ReservationInternetChargeType": "PayByBandwidth",
        "BandwidthPackageId": "cbwp-bp1ego3i4j07ccdvf****",
        "IpAddress": "47.75.XX.XX",
        "Bandwidth": 5,
        "ReservationBandwidth": 12,
        "EipBandwidth": 101,
        "Name": "EIP-01",
        "PrivateIpAddress": "192.168.XX.XX",
        "InstanceRegionId": " cn-hangzhou",
        "DeletionProtection": true,
        "InstanceId": "i-bp15zckdt37cdvf****",
        "SecondLimited": false,
        "InstanceType": "EcsInstance",
        "HDMonitorStatus": false,
        "RegionId": "cn-hangzhou",
        "BandwidthPackageBandwidth": 50,
        "ServiceManaged": 0,
        "ExpiredTime": "2021-05-23T02:00:00Z",
        "ResourceGroupId": "rg-acfmxazcdxs****",
        "AllocationId": "eip-2zeerraiwb7ujcdvf****",
        "InternetChargeType": "PayByBandwidth",
        "BusinessStatus": "Normal",
        "BandwidthPackageType": "CommonBandwidthPackage",
        "HasReservationData": false,
        "ISP": "BGP",
        "OperationLocks": {
          "LockReason": [
            {
              "LockReason": "financial"
            }
          ]
        },
        "Tags": {
          "Tag": [
            {
              "Key": "KeyTest",
              "Value": "ValueTest"
            }
          ]
        },
        "SecurityProtectionTypes": {
          "SecurityProtectionType": [
            "AntiDDoS_Enhanced"
          ]
        },
        "PublicIpAddressPoolId": "pippool-2vc0kxcedhquybdsz****",
        "VpcId": "vpc-bp15zckdt37pq72zv****",
        "Zone": "cn-hangzhou-a",
        "BizType": "CloudBox",
        "ServiceID": 0
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

InvalidIAssociatedInstanceType.ValueNotSupported

The specified value of AssociatedInstanceType is not supported.

The AssociatedInstanceType parameter is set to an invalid value.

400

InvalidChargeType.ValueNotSupported

The specified ChargeType is not supported.

The specified billing method is not supported. Specify a supported billing method.

400

InvalidAliuid

User Id is not valid.

\-

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

InstanceType.Invalid

InstanceType is not null

\-

400

InstanceIdLength.Exceed

InstanceId length is exceed

\-

400

InvalidTagKey

The tag keys are not valid.

The tag index is invalid.

400

InvalidTagValue

The tag values are not valid.

The tag value is invalid.

400

OperationUnsupported.ResourceGroupId

ResourceGroup is not supported in this region.

\-

400

IellgalParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The specified parameter OwnerAccount is illegal.

404

InvalidFilterValue

The specified FilterValue is not supported.

\-

404

Forbidden.RegionNotFound

Specified region is not found during access authentication.

The specified region does not exist. Check whether the specified region ID is valid.

404

InvalidFilterKey.NotFound

The specified Filterkey is not supported.

\-

404

InvalidLockReason.NotFound

The specified LockReason is not found

The reason why the instance is locked is unknown.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-27

The API operation is not deprecated.. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2026-02-27#workbench-doc-change-demo)

2025-02-10

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2025-02-10#workbench-doc-change-demo)

2024-03-14

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2024-03-14#workbench-doc-change-demo)

2023-12-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2023-12-07#workbench-doc-change-demo)

2023-08-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2023-08-09#workbench-doc-change-demo)

2023-08-09

API Description Update. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2023-08-09#workbench-doc-change-demo)

2023-08-08

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2023-08-08#workbench-doc-change-demo)

2022-12-02

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeEipAddresses?updateTime=2022-12-02#workbench-doc-change-demo)
