Queries information about assets that are protected by Cloud Firewall.

## Operation description

You can call this operation to query paginated information about assets that are protected by Cloud Firewall.

## Limits

The queries per second (QPS) limit for this operation is 10 for a single user. If you exceed this limit, throttling is triggered. This may affect your business. Plan your calls accordingly.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeAssetList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cloudfw/2017-12-07/DescribeAssetList)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Lang

string

No

The language of the response. Valid values:

-   **zh** (default): Chinese.
    
-   **en**: English.
    

zh

CurrentPage

string

Yes

The page number for a paged query.

1

PageSize

string

Yes

The number of assets to return on each page for a paged query.

10

RegionNo

string

No

The region ID of Cloud Firewall.

**Note**

For more information about the regions where Cloud Firewall is supported, see [Supported regions](/help/en/cloud-firewall/cloudfirewall/product-overview/supported-regions).

cn-hangzhou

Status

string

No

The status of Cloud Firewall. Valid values:

-   **open**: The firewall is enabled.
    
-   **opening**: The firewall is being enabled.
    
-   **closed**: The firewall is disabled.
    
-   **closing**: The firewall is being disabled.
    

**Note**

If you do not set this parameter, assets in all protection statuses are queried.

open

SearchItem

string

No

The IP address or instance ID of the asset.

192.0.XX.XX

Type

string

No

This parameter is deprecated.

eip

ResourceType

string

No

The asset type. Valid values:

-   **BastionHostEgressIP**: The egress IP address of a bastion host.
    
-   **BastionHostIngressIP**: The ingress IP address of a bastion host.
    
-   **EcsEIP**: An EIP associated with an ECS instance.
    
-   **EcsPublicIP**: A public IP address of an ECS instance.
    
-   **EIP**: An EIP.
    
-   **EniEIP**: An EIP associated with an ENI.
    
-   **NatEIP**: An EIP associated with a NAT gateway.
    
-   **SlbEIP**: An EIP associated with an SLB instance.
    
-   **SlbPublicIP**: A public IP address of an SLB instance.
    
-   **NatPublicIP**: A public IP address of a NAT gateway.
    
-   **HAVIP**: An HAVIP.
    

EIP

SgStatus

string

No

The status of the security group policy. Valid values:

-   **pass**: The policy is applied.
    
-   **block**: The policy is not applied.
    
-   **unsupport**: The policy is not supported.
    

**Note**

If you do not set this parameter, assets with all security group policy statuses are queried.

pass

IpVersion

string

No

The IP version of the asset that is protected by Cloud Firewall. Valid values:

-   **4** (default): IPv4.
    
-   **6**: IPv6.
    

4

MemberUid

integer

No

The UID of the member account.

258039427902\*\*\*\*

UserType

string

No

The user type. Valid values:

-   **buy** (default): A paid user.
    
-   **free**: A free-of-charge user.
    

buy

NewResourceTag

string

No

The time when the asset was discovered. Valid values:

-   **discovered in 1 hour**: The asset was discovered within 1 hour.
    
-   **discovered in 1 day**: The asset was discovered within 1 day.
    
-   **discovered in 7 days**: The asset was discovered within 7 days.
    

discovered in 1 hour

OutStatistic

string

No

Specifies whether to query information about outbound traffic.

true

SensitiveStatus

string

No

The enabling status of data leakage prevention.

open

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of assets that are protected by Cloud Firewall.

12

RequestId

string

The ID of the request.

CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D

Assets

array<object>

The information about the assets that are protected by Cloud Firewall.

object

RiskLevel

string

The risk level of the asset. Valid values:

-   **low**: low
    
-   **middle**: medium
    
-   **high**: high
    

**Note**

This parameter is returned only when the value of UserType is \`free\`.

low

BindInstanceName

string

The name of the instance to which the asset is bound.

instance01

Type

string

This parameter is deprecated.

eip

SgStatusTime

integer

The time when the security group status was last checked. The value is a UNIX timestamp. Unit: second.

1615082937

ResourceInstanceId

string

The instance ID of the asset.

i-8vbdrjrxzt78\*\*\*\*

MemberUid

integer

The UID of the member account.

258039427902\*\*\*\*

IntranetAddress

string

The internal IP address of the server.

192.168.XX.XX

SyncStatus

string

The status of traffic redirection for the asset. Valid values:

-   **enable**: Traffic redirection is supported.
    
-   **disable**: Traffic redirection is not supported.
    

enable

AliUid

integer

The UID of the Alibaba Cloud account.

**Note**

This is the Alibaba Cloud account to which the member account belongs.

158039427902\*\*\*\*

ProtectStatus

string

The status of the firewall. Valid values:

-   **open**: The firewall is enabled.
    
-   **opening**: The firewall is being enabled.
    
-   **closed**: The firewall is disabled.
    
-   **closing**: The firewall is being disabled.
    

open

InternetAddress

string

The public IP address of the server.

192.0.XX.XX

BindInstanceId

string

The ID of the instance to which the asset is bound.

i-8vbdrjrxzt78\*\*\*\*

RegionID

string

The region ID of the asset.

cn-hangzhou

RegionStatus

string

Indicates whether Cloud Firewall is supported in the region where the asset resides. Valid values:

-   **enable**: Supported.
    
-   **disable**: Not supported.
    

enable

ResourceType

string

The asset type. Valid values:

-   **BastionHostEgressIP**: The egress IP address of a bastion host.
    
-   **BastionHostIngressIP**: The ingress IP address of a bastion host.
    
-   **EcsEIP**: An EIP associated with an ECS instance.
    
-   **EcsPublicIP**: A public IP address of an ECS instance.
    
-   **EIP**: An EIP.
    
-   **EniEIP**: An EIP associated with an ENI.
    
-   **NatEIP**: An EIP associated with a NAT gateway.
    
-   **SlbEIP**: An EIP associated with an SLB instance.
    
-   **SlbPublicIP**: A public IP address of an SLB instance.
    
-   **NatPublicIP**: A public IP address of a NAT gateway.
    
-   **HAVIP**: An HAVIP.
    

EIP

IpVersion

integer

The IP version of the asset.

Valid values:

-   **4**: IPv4.
    
-   **6**: IPv6.
    

4

SgStatus

string

The status of the security group policy. Valid values:

-   **pass**: The policy is applied.
    
-   **block**: The policy is not applied.
    
-   **unsupport**: The policy is not supported.
    

block

Note

string

The remarks on the asset. Valid values:

-   **REGION\_NOT\_SUPPORT**: The region is not supported.
    
-   **NETWORK\_NOT\_SUPPORT**: The network is not supported.
    

REGION\_NOT\_SUPPORT

Name

string

The instance name of the asset that is protected by Cloud Firewall.

instance01

CreateTimeStamp

string

The time when the asset was discovered by Cloud Firewall.

2023-02-28 10:29:58

NewResourceTag

string

The time when the asset was discovered. Valid values:

-   **discovered in 1 hour**: The asset was discovered within 1 hour.
    
-   **discovered in 1 day**: The asset was discovered within 1 day.
    
-   **discovered in 7 days**: The asset was discovered within 7 days.
    

discovered in 1 hour

SensitiveDataStatus

string

The enabling status of data leakage prevention.

open

Last7DayOutTrafficBytes

integer

The outbound traffic in the last 7 days.

0

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 12,
  "RequestId": "CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D",
  "Assets": [
    {
      "RiskLevel": "low",
      "BindInstanceName": "instance01",
      "Type": "eip",
      "SgStatusTime": 1615082937,
      "ResourceInstanceId": "i-8vbdrjrxzt78****",
      "MemberUid": 0,
      "IntranetAddress": "192.168.XX.XX",
      "SyncStatus": "enable",
      "AliUid": 0,
      "ProtectStatus": "open",
      "InternetAddress": "192.0.XX.XX",
      "BindInstanceId": "i-8vbdrjrxzt78****",
      "RegionID": "cn-hangzhou",
      "RegionStatus": "enable",
      "ResourceType": "EIP",
      "IpVersion": 4,
      "SgStatus": "block",
      "Note": "REGION_NOT_SUPPORT",
      "Name": "instance01",
      "CreateTimeStamp": "2023-02-28 10:29:58",
      "NewResourceTag": "discovered in 1 hour",
      "SensitiveDataStatus": "open",
      "Last7DayOutTrafficBytes": 0
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ErrorDBSelect

An error occurred while querying database.

An error occurred while querying database.

See [Error Codes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cloudfw/2017-12-07/DescribeAssetList#workbench-doc-change-demo) for a complete list.
