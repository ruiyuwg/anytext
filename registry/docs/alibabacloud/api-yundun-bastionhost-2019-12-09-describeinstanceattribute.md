Queries the detailed configuration of a Bastionhost instance, including the network settings, storage quota, and license information.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Yundun-bastionhost/2019-12-09/DescribeInstanceAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Yundun-bastionhost/2019-12-09/DescribeInstanceAttribute)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

yundun-bastionhost:DescribeInstanceAttribute

get

\*Instance

`acs:yundun-bastionhost:{#regionId}:{#accountId}:instance/{#InstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID of the Bastionhost instance.

cn-hangzhou

InstanceId

string

Yes

The ID of the Bastionhost instance.

**Note**

Call the [DescribeInstances](/help/en/bh/api-ko6161) operation to obtain the ID of the Bastionhost instance.

bastionhost-cn-78v1ghxxxxx

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID. Alibaba Cloud generates this ID to uniquely identify the request. Use this ID to troubleshoot issues.

082FAB35-6AB9-4FD5-8750-D36673548E76

InstanceAttribute

object

The attributes of the instance.

VpcId

string

The ID of the VPC to which the instance is attached.

vpc-bp1c85tzgqu1bf5bxxxxx

VswitchId

string

The ID of the vSwitch to which the instance is attached.

vsw-bp1xfwzzfti0kjbfxxxxx

Description

string

The description.

测试API

ExpireTime

integer

The time when the Bastionhost instance expires. This value is a UNIX timestamp. Unit: milliseconds.

1578326400000

ModifyPasswordModule

string

The status of the password change feature.

-   **Enable**: enabled
    
-   **Disable**: disabled
    

Enable

EniInstanceId

string

The ID of the Elastic Network Interface (ENI).

eni-bp1455jrzwm7moaxxxxx

InstanceId

string

The instance ID.

bastionhost-cn-78v1ghxxxxx

InternetEndpoint

string

The public domain name.

\*\*\*\*\*\*lwb-public.bastionhost.aliyuncs.com

RegionId

string

The region ID of the instance.

cn-hangzhou

IntranetEndpoint

string

The internal endpoint in the same region.

\*\*\*\*\*\*xalwb.bastionhost.aliyuncs.com

StartTime

integer

The time when the Bastionhost instance was purchased or renewed. This value is a UNIX timestamp. Unit: milliseconds.

1577681345000

ResourceGroupId

string

The ID of the resource group to which the instance belongs.

rg-aekzc427db\*\*\*\*\*\*

NetworkProxyModule

string

The status of the network domain proxy.

-   **Enable**: The network domain proxy feature is enabled.
    
-   **Disable**: The network domain proxy feature is disabled.
    

Enable

WebTerminalModule

string

The status of the web terminal.

-   **Enable**: Web-based remote connections are enabled.
    
-   **Disable**: Web-based remote connections are disabled.
    

Enable

InstanceStatus

string

The status of the instance. Valid values:

-   **PENDING**: The instance is not initialized.
    
-   **CREATING**: The instance is being created.
    
-   **RUNNING**: The instance is running.
    
-   **EXPIRED**: The instance has expired.
    
-   **CREATE\_FAILED**: The instance failed to be created.
    
-   **UPGRADING**: The instance is being upgraded or downgraded.
    
-   **UPGRADE\_FAILED**: The instance failed to be upgraded or downgraded.
    

RUNNING

LicenseCode

string

The license code.

bhah\_ent\_50\_asset

PublicNetworkAccess

boolean

Indicates whether the Bastionhost instance is accessible over the Internet. Valid values:

-   **true**: The Bastionhost instance is accessible over the Internet.
    
-   **false**: The Bastionhost instance is not accessible over the Internet.
    

true

Storage

integer

The total storage capacity of the Bastionhost instance. Unit: bytes.

2199023255552

Ports

array<object>

The operations and maintenance (O&M) ports of the Bastionhost instance.

object

An O&M port of the Bastionhost instance.

StandardPort

integer

The standard port of the Bastionhost instance. Valid values:

-   **SSH**: 60022
    
-   **RDP**: 63389
    
-   **HTTPS**: 443
    

60022

CustomPort

integer

The custom port.

**Note**

Only the SSH and RDP ports can be changed. If a custom port is not specified, the value of this parameter is the same as the value of the standard port.

600xx

PublicExportIps

array

The list of public egress IP addresses of the Bastionhost instance.

string

The public egress IP address.

\[10.162.168.xx/32\]

PublicWhiteList

array

The public whitelist.

string

The IP address on the public whitelist.

\[10.162.168.xx/32\]

AuthorizedSecurityGroups

array

The list of IDs of authorized security groups.

string

The ID of the authorized security group.

\[sg-bp14u00sh39jvw5xxxxx\]

PrivateExportIps

array

The list of private egress IP addresses of the Bastionhost instance.

string

The private egress IP address.

192.168.xx.xx

PublicIps

array

The list of public IP addresses of the Bastionhost instance.

string

The public IP address.

116.62.xx.xx

SecurityGroupIds

array

The list of IDs of security groups to which the instance belongs.

string

The ID of a security group to which the instance belongs.

sg-bp15ed6xe1yxeycg7o\*\*\*\*

PrivateWhiteList

array

The private whitelist.

string

The IP address on the private whitelist.

192.168.xx.xx

Bandwidth

string

The total bandwidth of the Bastionhost instance.

30

BandwidthPackage

string

The bandwidth plan for the Bastionhost.

5

DbOperationModule

string

The status of database O&M.

-   **Enable**: Database O&M is enabled.
    
-   **Disable**: Database O&M is disabled.
    

Disable

RouterRules

array

string

IDaaSModule

string

SlaveVswitchId

string

ScriptDeliverModule

string

KmsSecretModule

string

RDModule

string

HSMModule

string

WhiteListPolicies

array<object>

object

Entry

string

Description

string

AppOperationModule

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "082FAB35-6AB9-4FD5-8750-D36673548E76",
  "InstanceAttribute": {
    "VpcId": "vpc-bp1c85tzgqu1bf5bxxxxx",
    "VswitchId": "vsw-bp1xfwzzfti0kjbfxxxxx",
    "Description": "测试API",
    "ExpireTime": 1578326400000,
    "ModifyPasswordModule": "Enable",
    "EniInstanceId": "eni-bp1455jrzwm7moaxxxxx",
    "InstanceId": "bastionhost-cn-78v1ghxxxxx",
    "InternetEndpoint": "******lwb-public.bastionhost.aliyuncs.com",
    "RegionId": "cn-hangzhou",
    "IntranetEndpoint": "******xalwb.bastionhost.aliyuncs.com",
    "StartTime": 1577681345000,
    "ResourceGroupId": "rg-aekzc427db******",
    "NetworkProxyModule": "Enable",
    "WebTerminalModule": "Enable",
    "InstanceStatus": "RUNNING",
    "LicenseCode": "bhah_ent_50_asset",
    "PublicNetworkAccess": true,
    "Storage": 2199023255552,
    "Ports": [
      {
        "StandardPort": 60022,
        "CustomPort": 0
      }
    ],
    "PublicExportIps": [
      "[10.162.168.xx/32]"
    ],
    "PublicWhiteList": [
      "[10.162.168.xx/32]"
    ],
    "AuthorizedSecurityGroups": [
      "[sg-bp14u00sh39jvw5xxxxx]"
    ],
    "PrivateExportIps": [
      "192.168.xx.xx"
    ],
    "PublicIps": [
      "116.62.xx.xx"
    ],
    "SecurityGroupIds": [
      "sg-bp15ed6xe1yxeycg7o****"
    ],
    "PrivateWhiteList": [
      "192.168.xx.xx"
    ],
    "Bandwidth": "30",
    "BandwidthPackage": "5",
    "DbOperationModule": "Disable",
    "RouterRules": [
      ""
    ],
    "IDaaSModule": "",
    "SlaveVswitchId": "",
    "ScriptDeliverModule": "",
    "KmsSecretModule": "",
    "RDModule": "",
    "HSMModule": "",
    "WhiteListPolicies": [
      {
        "Entry": "",
        "Description": ""
      }
    ],
    "AppOperationModule": ""
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Yundun-bastionhost/2019-12-09/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Yundun-bastionhost/2019-12-09/DescribeInstanceAttribute#workbench-doc-change-demo) for a complete list.
