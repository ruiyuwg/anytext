Queries a list of Internet Shared Bandwidth instances in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeCommonBandwidthPackages)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeCommonBandwidthPackages)

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

vpc:DescribeCommonBandwidthPackages

get

\*CommonBandwidthPackage

`acs:vpc:{#regionId}:{#accountId}:combandwidthpackage/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

IncludeReservationData

boolean

No

Specifies whether to return the information about pending orders. Valid values:

-   **false** (default)
-   **true**

false

RegionId

string

Yes

The ID of the region where the Internet Shared Bandwidth instance resides.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the region ID.

cn-hangzhou

BandwidthPackageId

string

No

The ID of the Internet Shared Bandwidth instance.

cbwp-2ze2ic1xd2qeqk145\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmxazb4ph\*\*\*\*

Name

string

No

The name of the Internet Shared Bandwidth instance.

test123

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Valid values: **1 to 50**. Default value: **10**.

10

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

Tag

array<object>

No

The tags to add to the Internet Shared Bandwidth instance.

object

No

Key

string

No

The tag key to add to the Internet Shared Bandwidth instance. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

KeyTest

Value

string

No

The tag value to add to the Internet Shared Bandwidth instance. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

ValueTest

SecurityProtectionEnabled

boolean

No

Specifies whether to enable Anti-DDoS Pro/Premium. Valid values:

-   **false** (default)
-   **true**

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

20E6FD1C-7321-4DAD-BDFD-EC8769E4AA33

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

1

CommonBandwidthPackages

array<object>

The details of the Internet Shared Bandwidth instance.

CommonBandwidthPackage

object

ReservationActiveTime

string

The time when the renewal took effect. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.

2018-08-30T16:00:00Z

Status

string

The status of the Internet Shared Bandwidth instance. Valid values:

-   **Available**: The Internet Shared Bandwidth instance is available.
-   **Modifying**: The Internet Shared Bandwidth instance is being modified.

Available

CreationTime

string

The time when the Internet Shared Bandwidth instance was created. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.

2017-06-28T06:39:20Z

ReservationOrderType

string

The renewal method. Valid values:

-   **RENEWCHANGE**: renewal with a specification change
-   **TEMP\_UPGRADE**: renewal with a temporary upgrade
-   **UPGRADE**: renewal with an upgrade

RENEWCHANGE

DeletionProtection

boolean

Indicates whether deletion protection is enabled. Valid values:

-   **true**
-   **false**

true

ReservationInternetChargeType

string

The metering method after the configurations are changed. Valid value:

**PayByTraffic**

PayByBandwidth

Ratio

integer

The percentage of the minimum bandwidth commitment. Only **20** is returned.

**Note** This parameter is supported only on the Alibaba Cloud China site.

20

InstanceChargeType

string

The billing method of the Internet Shared Bandwidth instance. Valid value:

**PostPaid**: pay-as-you-go

PostPaid

RegionId

string

The ID of the region where the Internet Shared Bandwidth instance resides.

cn-hangzhou

BandwidthPackageId

string

The ID of the Internet Shared Bandwidth instance.

cbwp-bp1t3sm1ffzmshdki\*\*\*\*

ServiceManaged

integer

Indicates whether the resource is created by the service account. Valid values:

-   **0**: The resource is not created by the service account.
-   **1**: The resource is created by the service account.

1

Bandwidth

string

The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.

20

Description

string

The description of the Internet Shared Bandwidth instance.

none

ExpiredTime

string

The time when the Internet Shared Bandwidth instance expired. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.

2019-01-15T03:08:37Z

ReservationBandwidth

string

The new maximum bandwidth after the configurations are changed. Unit: Mbit/s.

1000

ResourceGroupId

string

The ID of the resource group.

rg-acfmxazb4ph\*\*\*\*

InternetChargeType

string

The metering method of the Internet Shared Bandwidth instance. Valid value:

**PayByTraffic**

PayByBandwidth

BusinessStatus

string

The service status of the Internet Shared Bandwidth instance. Valid values:

-   **Normal**: The Internet Shared Bandwidth instance runs as expected.
-   **FinancialLocked**: An overdue payment occurs in the Internet Shared Bandwidth instance
-   **Unactivated**: The Internet Shared Bandwidth instance is not activated.

Normal

Name

string

The name of the Internet Shared Bandwidth instance.

abc

ISP

string

The line type. Valid values:

-   **BGP**: BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro line The BGP (Multi-ISP) Pro line is supported in the China (Hong Kong), Singapore (Singapore), Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions.

If you are allowed to use single-ISP bandwidth, one of the following values is returned:

-   **ChinaTelecom**
-   **ChinaUnicom**
-   **ChinaMobile**
-   **ChinaTelecom\_L2**
-   **ChinaUnicom\_L2**
-   **ChinaMobile\_L2**

If your services are deployed in China East 1 Finance, **BGP\_FinanceCloud** is returned.

BGP

HasReservationData

string

Indicates whether the information about pending orders is returned. Valid values:

-   **false**
-   **true**

false

PublicIpAddresses

array<object>

The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.

PublicIpAddresse

object

IpAddress

string

The public IP address.

47.95.XX.XX

AllocationId

string

The ID of the EIP.

eip-bp13e9i2qst4g6jzi\*\*\*\*

BandwidthPackageIpRelationStatus

string

Indicates whether the EIP is associated with the Internet Shared Bandwidth instance. Valid values:

-   **BINDED**
-   **BINDING**

BINDED

SecurityProtectionTypes

array

The editions of Anti-DDoS.

-   If this parameter is empty, Anti-DDoS Origin Basic is enabled.
-   If **AntiDDoS\_Enhanced** is returned, Anti-DDoS Pro/Premium is enabled.

SecurityProtectionType

string

The edition of Anti-DDoS.

-   If this parameter is empty, Anti-DDoS Origin Basic is enabled.
-   If **AntiDDoS\_Enhanced** is returned, Anti-DDoS Pro/Premium is enabled.

AntiDDoS\_Enhanced

Tags

array<object>

The tag that is added to the Internet Shared Bandwidth instance.

Tag

object

Key

string

The tag key that is added to the Internet Shared Bandwidth instance.

KeyTest

Value

string

The tag value that is added to the Internet Shared Bandwidth instance.

ValueTest

BizType

string

The service type of the Internet Shared Bandwidth instance. Valid values:

-   **CloudBox** The cloud box. Only cloud box users can select this type.
-   **Default** (default): The general service type.

CloudBox

Zone

string

The zone of the Internet Shared Bandwidth instance. This parameter is returned only when BizType is set to CloudBox. If BizType is set to Default, an empty value is returned.

ap-southeast-1-lzdvn-cb

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "20E6FD1C-7321-4DAD-BDFD-EC8769E4AA33",
  "PageNumber": 1,
  "TotalCount": 1,
  "CommonBandwidthPackages": {
    "CommonBandwidthPackage": [
      {
        "ReservationActiveTime": "2018-08-30T16:00:00Z",
        "Status": "Available",
        "CreationTime": "2017-06-28T06:39:20Z",
        "ReservationOrderType": "RENEWCHANGE",
        "DeletionProtection": true,
        "ReservationInternetChargeType": "PayByBandwidth",
        "Ratio": 20,
        "InstanceChargeType": "PostPaid",
        "RegionId": "cn-hangzhou",
        "BandwidthPackageId": "cbwp-bp1t3sm1ffzmshdki****",
        "ServiceManaged": 1,
        "Bandwidth": 20,
        "Description": "none",
        "ExpiredTime": "2019-01-15T03:08:37Z",
        "ReservationBandwidth": 1000,
        "ResourceGroupId": "rg-acfmxazb4ph****",
        "InternetChargeType": "PayByBandwidth",
        "BusinessStatus": "Normal",
        "Name": "abc",
        "ISP": "BGP",
        "HasReservationData": false,
        "PublicIpAddresses": {
          "PublicIpAddresse": [
            {
              "IpAddress": "47.95.XX.XX",
              "AllocationId": "eip-bp13e9i2qst4g6jzi****",
              "BandwidthPackageIpRelationStatus": "BINDED"
            }
          ]
        },
        "SecurityProtectionTypes": {
          "SecurityProtectionType": [
            "AntiDDoS_Enhanced"
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
        "BizType": "CloudBox",
        "Zone": "ap-southeast-1-lzdvn-cb"
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

InvalidBandwidthPackageIdNumber.NotSupported

The number of BandwidthPackageIds exceeds the limit.

The number of BandwidthPackageIds exceeds the limit.

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

OperationUnsupported.ResourceGroupId

ResourceGroup is not supported in this region.

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-08

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeCommonBandwidthPackages?updateTime=2023-08-08#workbench-doc-change-demo)

2023-06-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeCommonBandwidthPackages?updateTime=2023-06-12#workbench-doc-change-demo)

2023-05-17

API Description Update. The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DescribeCommonBandwidthPackages?updateTime=2023-05-17#workbench-doc-change-demo)
