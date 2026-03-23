Queries the detail of a Classic Load Balancer (CLB) instance.

## Operation description

**Note**

If backend servers are deployed in a vServer group, you can call the [DescribeVServerGroupAttribute](/help/en/slb/api-describevservergroupattribute) operation to query the backend servers.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeLoadBalancerAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeLoadBalancerAttribute)

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

slb:DescribeLoadBalancerAttribute

get

\*loadbalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#loadbalancerId}`

-   slb:tag
-   slb:tag
-   slb:tag
-   slb:tag
-   slb:tag

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

The region ID of the CLB instance.

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

LoadBalancerId

string

Yes

The CLB instance ID.

lb-bp1b6c719dfa08ex\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

VpcId

string

The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.

vpc-25dvzy9f8\*\*\*\*

Tags

object

Tag

array<object>

The tags.

object

TagKey

string

The tag key. Valid values of N: **1** to **20**. The tag key cannot be an empty string.

The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.

test

TagValue

string

The tag value. Valid values of N: **1** to **20**. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.

value

CreateTimeStamp

integer

The timestamp generated when the CA certificate is uploaded.

1504147745000

CreateTime

string

The time when the CLB instance was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.

2017-08-31T02:49:05Z

LoadBalancerId

string

The CLB instance ID.

lb-bp1b6c719dfa08ex\*\*\*\*

PayType

string

The billing method of the CLB instance. Valid values:

-   Only **PayOnDemand** may be returned, which indicates the pay-as-you-go billing method.
    

PayOnDemand

AddressType

string

The address type of the CLB instance.

internet

NetworkType

string

The network type of the CLB instance.

vpc

AddressIPVersion

string

The version of the IP address. Valid values: **ipv4** and **ipv6**.

ipv4

RenewalCycUnit

string

The auto-renewal cycle. Valid values: **Year** and **Month**. Default value: Month.

**Note**

This parameter is valid only if you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay** and **RenewalStatus** must be set to **AutoRenewal**.

Month

RequestId

string

The request ID.

365F4154-92F6-4AE4-92F8-7FF34B540710

Bandwidth

integer

The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.

5

LoadBalancerName

string

The name of the CLB instance.

lb-instance-test

Address

string

The service IP address of the CLB instance.

42.XX.XX.6

SlaveZoneId

string

The ID of the secondary zone to which the CLB instance belongs.

cn-hangzhou-d

EndTimeStamp

integer

The timestamp that indicates the expiration time of the CLB instance.

3249380160000

MasterZoneId

string

The ID of the primary zone to which the CLB instance belongs.

cn-hangzhou-b

LoadBalancerSpec

string

The specification of the CLB instance.

**Note**

Pay-as-you-go CLB instances are not subject to specifications. By default, **slb.lcu.elastic** is returned.

slb.s1.small

AutoReleaseTime

integer

The timestamp generated when the CLB instance is released.

1513947075000

ModificationProtectionReason

string

The reason why the configuration read-only mode is enabled. The value is 1 to 80 characters in length. It starts with a letter and can contain digits, periods (.), underscores (\_), and hyphens (-).

**Note**

This parameter is valid only when **ModificationProtectionStatus** is set to **ConsoleProtection**.

Instance service guarantee period

RegionId

string

The region ID of the CLB instance.

cn-hangzhou

ModificationProtectionStatus

string

Indicates whether the configuration read-only mode is enabled. Valid values:

-   **NonProtection**: The configuration read-only mode is disabled. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
    
-   **ConsoleProtection**: The configuration read-only mode is enabled.
    

**Note**

If this parameter is set to **ConsoleProtection**, you cannot modify instance configurations in the CLB console. However, you can modify instance configurations by calling API operations.

ConsoleProtection

EndTime

string

The time when the CLB instance expires.

2022-09-08T16:00:00Z

VSwitchId

string

The ID of the vSwitch to which the internal-facing CLB instance belongs.

vsw-255ecrwq5\*\*\*\*

LoadBalancerStatus

string

The status of the CLB instance. Valid values:

-   **inactive**: The CLB instance is disabled. CLB instances in the inactive state do not forward traffic.
    
-   **active**: The CLB instance is running as expected. Newly created CLB instances are in the **active** state by default.
    
-   **locked**: The CLB instance is locked. CLB instances may be locked due to overdue payments or other reasons.
    

active

ResourceGroupId

string

The resource group ID.

rg-atstuj3rtop\*\*\*\*

InternetChargeType

string

The metering method of the Internet-facing CLB instance. Valid values:

-   **paybytraffic**
    
-   **paybybandwidth**
    

paybytraffic

DeleteProtection

string

Indicates whether deletion protection is enabled for the CLB instance.

Valid values: **on** and **off**.

off

RegionIdAlias

string

The alias of the region to which the CLB instance belongs.

cn-hangzhou

RenewalStatus

string

Indicates whether auto-renewal is enabled. Valid values:

-   **AutoRenewal**: Auto-renewal is enabled.
    
-   **Normal**: Auto-renewal is disabled. You must manually renew the CLB instance.
    
-   **NotRenewal**: The CLB instance will not be renewed upon expiration. If this value is returned, the system does not send notifications until three days before the expiration date.
    
    \*\*
    
    **Note** This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, **PayType** must be set to **PrePay**.
    

AutoRenewal

RenewalDuration

integer

The auto-renewal duration. This parameter is valid only if **RenewalStatus** is set to **AutoRenewal**.

-   Valid values when **PeriodUnit** is set to **Year**: **1**~**5**.
    
-   Valid values when **PeriodUnit** is set to **Month**: **1**~ **9**.
    

**Note**

This parameter is valid only when you create a subscription CLB instance on the Alibaba Cloud China site. In this case, the **PayType** parameter must be set to **PrePay**.

1

ListenerPorts

object

ListenerPort

array

The frontend port used by the CLB instance.

integer

The frontend port used by the CLB instance.

80

ListenerPortsAndProtocal

object

ListenerPortAndProtocal

array<object>

The ports or protocols of the listeners.

object

ListenerProtocal

string

The frontend protocol that is used by the CLB instance.

http

ListenerPort

integer

The frontend port that is used by the CLB instance.

443

ListenerPortsAndProtocol

object

ListenerPortAndProtocol

array<object>

The ports or protocols of the listeners.

object

ListenerPort

integer

The frontend port that is used by the CLB instance.

80

ListenerProtocol

string

The frontend protocol that is used by the CLB instance.

https

ListenerForward

string

Indicates whether the listener is enabled.

on

Description

string

Indicates whether the listener is enabled.

The description of listener port and protocol.

ForwardPort

integer

The destination listening port to which requests are forwarded. The port must be open and use HTTPS.

443

BackendServers

object

BackendServer

array<object>

The backend servers of the CLB instance.

object

Type

string

The type of the backend server.

ecs

Weight

integer

The weight of the backend server.

90

Description

string

The description of the backend server.

**Note**

This parameter is not returned if Description is not set.

Backend servers

ServerIp

string

The ID of the elastic network interface (ENI) or elastic container instance.

192.XX.XX.11

ServerId

string

The backend server ID.

i-2zej4lxhjoq1icu\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "VpcId": "vpc-25dvzy9f8****",
  "Tags": {
    "Tag": [
      {
        "TagKey": "test",
        "TagValue": "value"
      }
    ]
  },
  "CreateTimeStamp": 1504147745000,
  "CreateTime": "2017-08-31T02:49:05Z",
  "LoadBalancerId": "lb-bp1b6c719dfa08ex****",
  "PayType": "PayOnDemand",
  "AddressType": "internet",
  "NetworkType": "vpc",
  "AddressIPVersion": "ipv4",
  "RenewalCycUnit": "Month",
  "RequestId": "365F4154-92F6-4AE4-92F8-7FF34B540710",
  "Bandwidth": 5,
  "LoadBalancerName": "lb-instance-test",
  "Address": "42.XX.XX.6",
  "SlaveZoneId": "cn-hangzhou-d",
  "EndTimeStamp": 3249380160000,
  "MasterZoneId": "cn-hangzhou-b",
  "LoadBalancerSpec": "slb.s1.small",
  "AutoReleaseTime": 1513947075000,
  "ModificationProtectionReason": "Instance service guarantee period",
  "RegionId": "cn-hangzhou",
  "ModificationProtectionStatus": "ConsoleProtection",
  "EndTime": "2022-09-08T16:00:00Z",
  "VSwitchId": "vsw-255ecrwq5****",
  "LoadBalancerStatus": "active",
  "ResourceGroupId": "rg-atstuj3rtop****",
  "InternetChargeType": "paybytraffic",
  "DeleteProtection": "off",
  "RegionIdAlias": "cn-hangzhou",
  "RenewalStatus": "AutoRenewal",
  "RenewalDuration": 1,
  "ListenerPorts": {
    "ListenerPort": [
      80
    ]
  },
  "ListenerPortsAndProtocal": {
    "ListenerPortAndProtocal": [
      {
        "ListenerProtocal": "http",
        "ListenerPort": 443
      }
    ]
  },
  "ListenerPortsAndProtocol": {
    "ListenerPortAndProtocol": [
      {
        "ListenerPort": 80,
        "ListenerProtocol": "https",
        "ListenerForward": "on",
        "Description": "The description of listener port and protocol.",
        "ForwardPort": 443
      }
    ]
  },
  "BackendServers": {
    "BackendServer": [
      {
        "Type": "ecs",
        "Weight": 90,
        "Description": "Backend servers",
        "ServerIp": "192.XX.XX.11",
        "ServerId": "i-2zej4lxhjoq1icu*****"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

LocationServiceTimeout

Location service connection timeout. Please try again later.

403

UnauthorizedRegion

The specified region of is not authorized.

The specified region of is not authorized.

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/DescribeLoadBalancerAttribute#workbench-doc-change-demo) for a complete list.
