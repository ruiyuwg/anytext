Queries the details about a Network Load Balancer (NLB) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetLoadBalancerAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetLoadBalancerAttribute)

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

nlb:GetLoadBalancerAttribute

get

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

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

The NLB instance ID.

nlb-83ckzc8d4xlp8o\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: prechecks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The region ID of the NLB instance.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

response

RequestId

string

The request ID.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

RegionId

string

The region ID of the NLB instance.

cn-hangzhou

LoadBalancerId

string

The NLB instance ID.

nlb-83ckzc8d4xlp8o\*\*\*\*

LoadBalancerName

string

The NLB instance name.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

NLB1

LoadBalancerType

string

The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which specifies NLB.

network

AddressType

string

The IPv4 network type of the NLB instance. Valid values:

-   **Internet** The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
-   **Intranet** The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC in which the NLB instance is deployed.

Internet

AddressIpVersion

string

The protocol version. Valid values:

-   **ipv4**: IPv4
-   **DualStack**: dual stack

ipv4

Ipv6AddressType

string

The IPv6 network type of the NLB instance. Valid values:

-   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
-   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. In this case, the NLB instance can be accessed over the VPC where the NLB instance is deployed.

Internet

LoadBalancerStatus

string

The NLB instance status. Valid values:

-   **Inactive**: The NLB instance is disabled. The listeners of NLB instances in the Inactive state do not forward traffic.
-   **Active**: The NLB instance is running.
-   **Provisioning**: The NLB instance is being created.
-   **Configuring**: The NLB instance is being modified.
-   **CreateFailed**: The system failed to create the NLB instance. In this case, you are not charged for the NLB instance. You can only delete the NLB instance.

Active

LoadBalancerBusinessStatus

string

The status of workloads on the NLB instance. Valid values:

-   **Abnormal**
-   **Normal**

Normal

OperationLocks

array<object>

The information about the locked NLB instance. This parameter is returned only when `LoadBalancerBussinessStatus` is **Abnormal**.

OperationLock

object

LockType

string

The type of the lock. Valid values:

-   **SecurityLocked**: The NLB instance is locked due to security reasons.
-   **RelatedResourceLocked**: The NLB instance is locked due to other resources associated with the NLB instance.
-   **FinancialLocked**: The NLB instance is locked due to overdue payments.
-   **ResidualLocked**: The NLB instance is locked because the associated resources have overdue payments and the resources are released.

SecurityLocked

LockReason

string

The reason why the NLB instance is locked.

security

VpcId

string

The VPC ID of the NLB instance.

vpc-bp1b49rqrybk45nio\*\*\*\*

CreateTime

string

The time when the NLB instance was created. This value is a UNIX timestamp.

Unit: milliseconds.

2022-07-02T02:49:05Z

ResourceGroupId

string

The ID of the resource group.

rg-atstuj3rtop\*\*\*\*

DNSName

string

The domain name of the NLB instance.

nlb-wb7r6dlwetvt5j\*\*\*\*.cn-hangzhou.nlb.aliyuncs.com

ZoneMappings

array<object>

The list of zones and vSwitches in the zones. You must specify 2 to 10 zones.

ZoneMapping

object

The mappings between zones and vSwitches. You must add at least two zones. You can add a maximum of 10 zones.

VSwitchId

string

The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet.

vsw-bp1rmcrwg3erh1fh8\*\*\*\*

ZoneId

string

The ID of the zone. You can call the [DescribeZones](/help/en/slb/api-describezones) operation to query the most recent zone list.

cn-hangzhou-a

LoadBalancerAddresses

array<object>

The information about the IP addresses used by the NLB instance.

LoadBalancerAddress

object

EniId

string

The ID of the elastic network interface (ENI).

eni-bp12f1xhs5yal61a\*\*\*\*

PrivateIPv4Address

string

The private IPv4 address of the NLB instance.

192.168.3.32

AllocationId

string

The ID of the elastic IP address (EIP).

eip-bp1aedxso6u80u0qf\*\*\*\*

PublicIPv4Address

string

The public IPv4 address of the NLB instance.

120.XX.XX.69

Ipv6Address

string

The IPv6 address of the NLB instance.

2001:db8:1:1:1:1:1:1

PrivateIPv4HcStatus

string

The health status of the private IPv4 address of the NLB instance. Valid values:

-   **Healthy**
-   **Unhealthy**

**Note** This parameter is returned only when the **Status** of the zone is **Active**.

Healthy

PrivateIPv6HcStatus

string

The health status of the IPv6 address of the NLB instance. Valid values:

-   **Healthy**
-   **Unhealthy**

**Note** This parameter is returned only when the **Status** of the zone is **Active**.

Healthy

Ipv4LocalAddresses

array

The IPv4 link-local addresses. The IP addresses that the NLB instance uses to communicate with the backend servers.

Ipv4LocalAddress

string

The IPv4 link-local address.

192.168.36.16

Ipv6LocalAddresses

array

The IPv6 link-local addresses. The IP addresses that the NLB instance uses to communicate with the backend servers.

Ipv6LocalAddress

string

The IPv6 link-local address.

2408:4005:357:ba00:64a2:221f:5685:8854

Status

string

The zone status. Valid values:

-   **Active**: The zone is available.
-   **Stopped**: The zone is disabled. You can set the zone to this status only by using Cloud Architect Design Tools (CADT).
-   **Shifted**: The DNS record is removed.
-   **Starting**: The zone is being enabled. You can set the zone to this status only by using CADT.
-   **Stopping** You can set the zone to this status only by using CADT.

Active

BandwidthPackageId

string

The ID of the EIP bandwidth plan.

cbwp-bp1vevu8h3ieh\*\*\*\*

SecurityGroupIds

array

The ID of the security group associated with the NLB instance.

SecurityGroupId

string

The ID of the security group associated with the NLB instance.

sg-bp10uag3q0jkxu72\*\*\*\*

CrossZoneEnabled

boolean

Indicates whether the NLB instance is accessible across zones. Valid values:

-   **true**
-   **false**

true

LoadBalancerBillingConfig

object

The billing information of the NLB instance.

PayType

string

The billing method of the NLB instance. Set the value to **PostPay**, which specifies the pay-as-you-go billing method.

PostPay

Cps

integer

The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address). Valid values: **0** to **1000000**.

**0** indicates that the number of connections is unlimited.

100

DeletionProtectionConfig

object

The configuration of the deletion protection feature.

Enabled

boolean

Specifies whether to enable deletion protection. Valid values:

-   **true**: yes
-   **false** (default): no

true

Reason

string

The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The value must start with a letter.

create-by-mse-can-not-delete

EnabledTime

string

The time when the deletion protection feature was enabled. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.

2022-11-02T02:49:05Z

ModificationProtectionConfig

object

The configuration of the configuration read-only mode.

Status

string

Specifies whether to enable the configuration read-only mode. Valid values:

-   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
-   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.

**Note** If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.

ConsoleProtection

Reason

string

The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The value must start with a letter.

**Note** This parameter takes effect only if the **Status** parameter is set to **ConsoleProtection**.

create-by-mse-cannot-modify

EnabledTime

string

The time when the modification protection feature was enabled. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2022-12-02T02:49:05Z

Tags

array<object>

The tags.

Tag

object

TagKey

string

The tag key.

KeyTest

TagValue

string

The tag value.

ValueTest

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "RegionId": "cn-hangzhou",
  "LoadBalancerId": "nlb-83ckzc8d4xlp8o****",
  "LoadBalancerName": "NLB1",
  "LoadBalancerType": "network",
  "AddressType": "Internet",
  "AddressIpVersion": "ipv4",
  "Ipv6AddressType": "Internet",
  "LoadBalancerStatus": "Active",
  "LoadBalancerBusinessStatus": "Normal",
  "OperationLocks": [
    {
      "LockType": "SecurityLocked",
      "LockReason": "security"
    }
  ],
  "VpcId": "vpc-bp1b49rqrybk45nio****",
  "CreateTime": "2022-07-02T02:49:05Z",
  "ResourceGroupId": "rg-atstuj3rtop****",
  "DNSName": "nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com",
  "ZoneMappings": [
    {
      "VSwitchId": "vsw-bp1rmcrwg3erh1fh8****",
      "ZoneId": "cn-hangzhou-a",
      "LoadBalancerAddresses": [
        {
          "EniId": "eni-bp12f1xhs5yal61a****",
          "PrivateIPv4Address": "192.168.3.32",
          "AllocationId": "eip-bp1aedxso6u80u0qf****",
          "PublicIPv4Address": "120.XX.XX.69",
          "Ipv6Address": "2001:db8:1:1:1:1:1:1",
          "PrivateIPv4HcStatus": "Healthy",
          "PrivateIPv6HcStatus": "Healthy",
          "Ipv4LocalAddresses": [
            "192.168.36.16"
          ],
          "Ipv6LocalAddresses": [
            "2408:4005:357:ba00:64a2:221f:5685:8854"
          ]
        }
      ],
      "Status": "Active"
    }
  ],
  "BandwidthPackageId": "cbwp-bp1vevu8h3ieh****",
  "SecurityGroupIds": [
    "sg-bp10uag3q0jkxu72****"
  ],
  "CrossZoneEnabled": true,
  "LoadBalancerBillingConfig": {
    "PayType": "PostPay"
  },
  "Cps": 100,
  "DeletionProtectionConfig": {
    "Enabled": true,
    "Reason": "create-by-mse-can-not-delete",
    "EnabledTime": "2022-11-02T02:49:05Z"
  },
  "ModificationProtectionConfig": {
    "Status": "ConsoleProtection",
    "Reason": "create-by-mse-cannot-modify",
    "EnabledTime": "2022-12-02T02:49:05Z"
  },
  "Tags": [
    {
      "TagKey": "KeyTest",
      "TagValue": "ValueTest"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

DuplicatedParam.%s

The param of %s is duplicated.

\-

400

OperationFailed.GetXipFailed

Operation failed because GetXipFailed.

The operation failed because the instance is still being created.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2024-02-22#workbench-doc-change-demo)

2024-02-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2024-02-04#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2024-02-04#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2023-12-18#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2023-08-22#workbench-doc-change-demo)

2023-06-07

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2023-06-07#workbench-doc-change-demo)

2023-04-04

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetLoadBalancerAttribute?updateTime=2023-04-04#workbench-doc-change-demo)
