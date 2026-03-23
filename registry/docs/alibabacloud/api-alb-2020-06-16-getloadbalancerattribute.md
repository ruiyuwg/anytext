Queries the details of an Application Load Balancer (ALB) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Alb/2020-06-16/GetLoadBalancerAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Alb/2020-06-16/GetLoadBalancerAttribute)

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

alb:GetLoadBalancerAttribute

get

\*LoadBalancer

`acs:alb:{#regionId}:{#accountId}:loadbalancer/{#loadbalancerId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

LoadBalancerId

string

Yes

The ALB instance ID.

alb-o9ulmq5hgn68jk\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The details of the ALB instance configuration.

AccessLogConfig

object

The configuration of the access log feature.

LogProject

string

The Log Service project.

sls-setter

LogStore

string

The Logstore.

test

AddressAllocatedMode

string

The mode in which IP addresses are allocated. Valid values:

-   **Fixed**: allocates a static IP address to the ALB instance.
-   **Dynamic**: dynamically allocates an IP address to each zone of the ALB instance.

Dynamic

AddressType

string

The network type of the ALB instance. Valid values:

-   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
-   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. In this case, the ALB instance can be accessed over the virtual private cloud (VPC) where the ALB instance is deployed.

Intranet

BandwidthPackageId

string

The ID of the elastic IP address (EIP) bandwidth plan that is associated with the Internet-facing ALB instance.

cbwp-bp1vevu8h3ieh\*\*\*\*

CreateTime

string

The time when the resource was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2022-07-02T02:49:05Z

DNSName

string

The domain name of the ALB instance.

alb-95qnr2itwu9orb\*\*\*\*.cn-hangzhou.alb.aliyuncs.com

DeletionProtectionConfig

object

The configuration of deletion protection.

Enabled

boolean

Indicates whether the deletion protection feature is enabled. Valid values:

-   **true**
-   **false**

true

EnabledTime

string

The time when the deletion protection feature was enabled. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2022-08-02T02:49:05Z

LoadBalancerBillingConfig

object

The billing method of the ALB instance.

PayType

string

The billing method.

Only **PostPay** is returned, which indicates the pay-as-you-go billing method.

PostPay

LoadBalancerBussinessStatus

string

The service status of the ALB instance. Valid values:

-   **Abnormal**
-   **Normal**

Normal

LoadBalancerEdition

string

The edition of the ALB instance. The features and billing rules vary based on the edition of the ALB instance. Valid values:

-   **Basic**
-   **Standard**
-   **StandardWithWaf**

Standard

LoadBalancerId

string

The ALB instance ID.

alb-o9ulmq5hgn68jk\*\*\*\*

LoadBalancerName

string

The name of the ALB instance.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

alb1

LoadBalancerOperationLocks

array<object>

The type of the lock. Valid values:

-   **SecurityLocked**: The ALB instance is locked due to security reasons.
-   **RelatedResourceLocked**: The ALB instance is locked due to association issues.
-   **FinancialLocked**: The ALB instance is locked due to overdue payments.
-   **ResidualLocked**: The ALB instance is locked because the associated resources have overdue payments and the resources are released.

LoadBalancerOperationLock

object

LockReason

string

The reason why the ALB instance is locked. This parameter is valid only if **LoadBalancerBussinessStatus** is set to **Abnormal**.

nolock

LockType

string

The lock type. Valid values:

-   **SecurityLocked**: The ALB instance is locked due to security reasons.
-   **RelatedResourceLocked**: The ALB instance is locked due to other resources that are associated with the ALB instance.
-   **FinancialLocked**: The ALB instance is locked due to overdue payments.
-   **ResidualLocked**: The ALB instance is locked because the associated resources have overdue payments and the resources are released.

FinancialLocked

LoadBalancerStatus

string

The status of the ALB instance. Valid values:

-   **Inactive**: The ALB instance is disabled. ALB instances in the Inactive state do not forward traffic.
-   **Active**: The ALB instance is running.
-   **Provisioning**: The ALB instance is being created.
-   **Configuring**: The ALB instance is being modified.
-   **CreateFailed**: The system failed to create the ALB instance. In this case, you are not charged for the ALB instance. You can only delete the ALB instance.

Active

ModificationProtectionConfig

object

The configuration read-only mode settings.

Reason

string

The reason why the configuration read-only mode is enabled.

The name must be 2 to 128 character characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter.

This parameter takes effect only if **Status** is set to **ConsoleProtection**.

test

Status

string

Specifies whether the configuration read-only mode is enabled. Valid values:

-   **NonProtection**: The configuration read-only mode is disabled. In this case, the value of the **Reason** parameter that you specify does not take effect. If you set **Reason**, the value is cleared.
-   **ConsoleProtection**: The configuration read-only mode is enabled. In this case, the value of the **Reason** parameter takes effect.\*\*\*\*

**Note** If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the ALB instance in the ALB console. However, you can call API operations to modify the configurations of the ALB instance.

ConsoleProtection

RegionId

string

The region ID of the ALB instance.

cn-hangzhou

RequestId

string

The request ID.

365F4154-92F6-4AE4-92F8-7FF34B540710

ResourceGroupId

string

The resource group ID.

rg-atstuj3rtop\*\*\*\*

Tags

array<object>

The tag value.

The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.

Tag

object

Key

string

The tag key.

The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.

FinanceDept

Value

string

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

FinanceJoshua

VpcId

string

The ID of the VPC in which the ALB instance is deployed.

vpc-bp1b49rqrybk45nio\*\*\*\*

ZoneMappings

array<object>

The mappings between zones and vSwitches. At most 10 zones are returned. If the current region supports two or more zones, at least two zones are returned.

ZoneMapping

object

The mappings between zones and vSwitches. At most 10 zones are returned. If the current region supports two or more zones, at least two zones are returned.

LoadBalancerAddresses

array<object>

The address of the ALB instance.

LoadBalancerAddress

object

The address of the ALB instance.

Address

string

An IPv4 address.

This parameter takes effect when **AddressIPVersion** is set to **IPv4** or **DualStack**. The network type is determined by the value of **AddressType**.

192.168.10.1

Ipv6Address

string

An IPv6 address.

This parameter takes effect only when **AddressIPVersion** is set to **DualStack**. The network type is determined by the value of **Ipv6AddressType**.

2408:XXXX:39d:eb00::/56

IntranetAddress

string

The private IPv4 address.

10.0.1.181

AllocationId

string

The elastic IP address (EIP).

eip-uf6wm\*\*\*\*1zj9

EipType

string

The type of EIP. Valid values:

-   **Common**: an EIP.
-   **Anycast**: an Anycast EIP.

**Note** For more information about the regions in which ALB supports Anycast EIPs, see [Limits](/help/en/slb/application-load-balancer/use-cases/associate-an-anycast-eip-with-an-alb-instance) .

Common

IntranetAddressHcStatus

string

The health status of the private IPv4 address of the ALB instance. This parameter is returned only when the Status of the zone is Active.Valid values:

-   **Healthy**
    
-   **Unhealthy**
    

Healthy

Ipv6AddressHcStatus

string

The health status of the private IPv6 address of the ALB instance. This parameter is returned only when the Status of the zone is Active.Valid values:

-   **Healthy**
    
-   **Unhealthy**
    

Healthy

Ipv4LocalAddresses

array

The IPv4 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.

Ipv4LocalAddress

string

The IPv4 link-local address.

10.1.0.62

Ipv6LocalAddresses

array

The IPv6 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.

ipv6LocalAddress

string

The IPv6 link-local address.

2408:xxxx:249:dd01:6f4:750f:xxxx:bcda

VSwitchId

string

The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an ALB instance.

vsw-bp12mw1f8k3jgy\*\*\*\*

ZoneId

string

The zone ID of the ALB instance.

You can call the [DescribeZones](/help/en/doc-detail/189196.html) operation to query the most recent zone list.

cn-hangzhou-a

Status

string

The zone status. Valid values:

-   **Active**: The ALB instance is running.
    
-   **Stopped**: The ALB instance is disabled.
    
-   **Shifted**: The ALB instance is removed.
    
-   **Starting**: The ALB instance is starting.
    
-   **Stopping**: The ALB instance is stopping.
    

Active

AddressIpVersion

string

The IP version. Valid values:

-   **IPv4**
-   **DualStack**

DualStack

Ipv6AddressType

string

The type of IPv6 address that is used by the ALB instance. Valid values:

-   **Internet**: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
-   **Intranet**: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC in which the ALB instance is deployed.

Intranet

SecurityGroupIds

array

The IDs of the security groups to which the ALB instance is added.

SecurityGroupId

string

The ID of the security group to which the ALB instance is added.

sg-uf63j385dzwlm6cy\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "AccessLogConfig": {
    "LogProject": "sls-setter",
    "LogStore": "test"
  },
  "AddressAllocatedMode": "Dynamic",
  "AddressType": "Intranet",
  "BandwidthPackageId": "cbwp-bp1vevu8h3ieh****",
  "CreateTime": "2022-07-02T02:49:05Z",
  "DNSName": "alb-95qnr2itwu9orb****.cn-hangzhou.alb.aliyuncs.com",
  "DeletionProtectionConfig": {
    "Enabled": true,
    "EnabledTime": "2022-08-02T02:49:05Z"
  },
  "LoadBalancerBillingConfig": {
    "PayType": "PostPay"
  },
  "LoadBalancerBussinessStatus": "Normal",
  "LoadBalancerEdition": "Standard",
  "LoadBalancerId": "alb-o9ulmq5hgn68jk****",
  "LoadBalancerName": "alb1",
  "LoadBalancerOperationLocks": [
    {
      "LockReason": "nolock",
      "LockType": "FinancialLocked"
    }
  ],
  "LoadBalancerStatus": "Active",
  "ModificationProtectionConfig": {
    "Reason": "test",
    "Status": "ConsoleProtection"
  },
  "RegionId": "cn-hangzhou",
  "RequestId": "365F4154-92F6-4AE4-92F8-7FF34B540710",
  "ResourceGroupId": "rg-atstuj3rtop****",
  "Tags": [
    {
      "Key": "FinanceDept",
      "Value": "FinanceJoshua"
    }
  ],
  "VpcId": "vpc-bp1b49rqrybk45nio****",
  "ZoneMappings": [
    {
      "LoadBalancerAddresses": [
        {
          "Address": "192.168.10.1",
          "Ipv6Address": "2408:XXXX:39d:eb00::/56",
          "IntranetAddress": "10.0.1.181",
          "AllocationId": "eip-uf6wm****1zj9",
          "EipType": "Common",
          "IntranetAddressHcStatus": "Healthy",
          "Ipv6AddressHcStatus": "Healthy",
          "Ipv4LocalAddresses": [
            "10.1.0.62"
          ],
          "Ipv6LocalAddresses": [
            "2408:xxxx:249:dd01:6f4:750f:xxxx:bcda"
          ]
        }
      ],
      "VSwitchId": "vsw-bp12mw1f8k3jgy****",
      "ZoneId": "cn-hangzhou-a",
      "Status": "Active"
    }
  ],
  "AddressIpVersion": "DualStack",
  "Ipv6AddressType": "Intranet",
  "SecurityGroupIds": [
    "sg-uf63j385dzwlm6cy****"
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Forbidden.LoadBalancer

Authentication has failed for LoadBalancer.

\-

404

ResourceNotFound.LoadBalancer

The specified resource %s is not found.

The specified resource %s is not found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Alb/2020-06-16/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2024-11-04#workbench-doc-change-demo)

2024-07-22

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2024-07-22#workbench-doc-change-demo)

2024-06-18

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2024-06-18#workbench-doc-change-demo)

2024-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2024-01-17#workbench-doc-change-demo)

2023-11-03

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2023-11-03#workbench-doc-change-demo)

2023-05-30

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2023-05-30#workbench-doc-change-demo)

2023-05-29

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2023-05-29#workbench-doc-change-demo)

2023-05-08

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2023-05-08#workbench-doc-change-demo)

2023-04-11

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/GetLoadBalancerAttribute?updateTime=2023-04-11#workbench-doc-change-demo)
