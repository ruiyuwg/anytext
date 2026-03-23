Creates a Network Load Balancer (NLB) instance in a specified region.

## Operation description

-   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
    
-   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](/help/en/slb/api-getloadbalancerattribute-nlb) to query the status of an NLB instance.
    
    -   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
    -   If an NLB instance is in the **Active** state, the NLB instance is created.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateLoadBalancer)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateLoadBalancer)

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

nlb:CreateLoadBalancer

create

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/*`

\*VSwitch

`acs:vpc:{#regionId}:{#accountId}:vswitch/{#VSwitchId}`

EipAddress

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

-   nlb:AddressType

none

## Request parameters

Parameter

Type

Required

Description

Example

LoadBalancerType

string

No

The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which indicates an NLB instance.

network

LoadBalancerName

string

No

The name of the NLB instance.

It must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (\_), and hyphens (-), and must start with a letter.

NLB1

AddressType

string

Yes

The type of IPv4 addresses used for the NLB instance. Valid values are:

-   **Internet**: The nodes of an Internet-facing NLB instance have public IP addresses. The DNS name of an Internet-facing NLB instance is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing NLB instances can route requests from clients over the Internet.
-   **Intranet**: The nodes of an internal-facing NLB instance have only private IP addresses. The DNS name of an internal-facing NLB instance is publicly resolvable to the private IP addresses of the nodes. Therefore, internal-facing NLB instances can route requests only from clients with access to the virtual private cloud (VPC) for the NLB instance.

**Note** To enable a public IPv6 address for a dual-stack NLB instance, call the [EnableLoadBalancerIpv6Internet](/help/en/slb/api-enableloadbalanceripv6internet) operation.

Internet

AddressIpVersion

string

No

The version of IP addresses used for the NLB instance. Valid values:

-   **ipv4** (default)
-   **DualStack**

ipv4

VpcId

string

Yes

The ID of the VPC where you want to create the NLB instance.

vpc-bp1b49rqrybk45nio\*\*\*\*

ZoneMappings

array<object>

Yes

The mappings between zones and vSwitches. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, you must specify at least two zones.

ZoneMapping

object

Yes

The mapping between the zone and the vSwitch. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, you must specify at least two zones.

VSwitchId

string

Yes

The ID of the vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an NLB instance. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, you must specify at least two zones.

vsw-sersdf\*\*\*\*

ZoneId

string

Yes

The ID of the zone where the NLB instance is deployed. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, specify at least two zones.

You can call the [DescribeZones](/help/en/slb/api-describezones) operation to query the most recent zone list.

cn-hangzhou-a

PrivateIPv4Address

string

No

The private virtual IP address (VIP) of the IPv4 version. The private IPv4 address that the NLB instance uses to provide external services.

192.168.10.1

AllocationId

string

No

The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance. Each zone is assigned one EIP. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, specify at least two zones.

eip-bp1aedxso6u80u0qf\*\*\*\*

Ipv6Address

string

No

The VIP of the IPv6 version. The IPv6 address that the NLB instance uses to provide external services.

2408:400a:d5:3080:b409:840a:ca:e8e5

Ipv4LocalAddresses

array

No

The local IPv4 addresses. The IP addresses that the NLB instance uses to communicate with the backend servers. The number of IP addresses must be an even number, which must be at least 2 and at most 8.

string

No

The local IPv4 address.

192.168.10.2

Ipv6LocalAddresses

array

No

The local IPv6 addresses. The IP addresses that the NLB instance uses to communicate with the backend servers. The number of IP addresses must be an even number, which must be at least 2 and at most 8.

string

No

The local IPv6 address.

2408:400a:d5:3080:b409:840a:ca:e8e6

BandwidthPackageId

string

No

The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing NLB instance.

cbwp-bp1vevu8h3ieh\*\*\*\*

LoadBalancerBillingConfig

object

No

The billing settings of the NLB instance.

PayType

string

No

The billing method of the NLB instance.

Set the value to **PostPay**, which specifies the pay-as-you-go billing method.

PostPay

ResourceGroupId

string

No

The ID of the resource group to which the instance belongs.

rg-atstuj3rtop\*\*\*\*

DryRun

boolean

No

Perform a dry run without actually making the request. Valid values are:

-   **true**: Perform only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the check, an error message specifying the issue is returned. If the request passes, the `DryRunOperation` error code is returned.
-   **false** (default): Check the request and perform the operation. If the request passes the check, a 2xx HTTP status code is returned, and the operation is performed.

false

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.

**Note** If you do not specify this parameter, the value of **RequestId** is used.\*\*\*\* The value of **RequestId** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The ID of the region where the NLB instance is deployed.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DeletionProtectionConfig

object

No

The configuration of the deletion protection feature.

Enabled

boolean

No

Specifies whether to enable the deletion protection feature. Valid values:

-   **true**
-   **false** (default)

false

Reason

string

No

The reason why the deletion protection feature is enabled or disabled. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (\_), and hyphens (-), and must start with a letter.

The instance is running

ModificationProtectionConfig

object

No

The configuration of the configuration read-only mode.

Status

string

No

Specifies whether to enable the configuration read-only mode. Valid values:

-   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
-   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.

**Note** If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the NLB instance in the NLB console. However, you can call API operations to modify the configurations of the NLB instance.

ConsoleProtection

Reason

string

No

The reason for enabling the configuration read-only mode. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (\_), and hyphens (-), and must start with a letter.

**Note** This parameter takes effect only when **Status** is set to **ConsoleProtection**.

Service guarantee period

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of the tag. The tag key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The tag key can contain letters, digits, and the following special characters: \_ . : / = + - @

You can specify up to 20 tags in each call.

env

Value

string

No

The value of the tag. The tag value can be up to 128 characters in length, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag value can contain letters, digits, and the following special characters: \_ . : / = + - @

You can specify up to 20 tags in each call.

product

## Response parameters

Parameter

Type

Description

Example

object

response

RequestId

string

The ID of the request.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

LoadbalancerId

string

The ID of the NLB instance.

nlb-83ckzc8d4xlp8o\*\*\*\*

OrderId

long

The ID of the order for the NLB instance.

20230000

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "LoadbalancerId": "nlb-83ckzc8d4xlp8o****",
  "OrderId": 20230000
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.OnlyPayByTrafficSupported

The operation is not allowed because of OnlyPayByTrafficSupported.

\-

400

OperationFailed.%s

The operation failed because of %s.

Failed to call the API operation due to %.

400

Mismatch.ZoneIdAndVswitchId

The ZoneIdAndVswitchId is mismatched for %s and %s.

\-

400

QuotaExceeded.%s

The quota of %s is exceeded, usage %s/%s.

\-

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

OperationDenied.OnlyPostPaidSupported

The operation is not allowed because of OnlyPostPaidSupported.

\-

400

OperationFailed.DuplicateZones.

The operation failed because of Can not Specify duplicate zones.

\-

400

ResourceNotEnough.VSwitchIp

The specified resource of VSwitchIp is not enough.

The specified virtual switch (vSwitch) IP resources are insufficient.

400

DuplicatedParam.AllocationId

The param of AllocationId is duplicated.

\-

400

ResourceInConfiguring.VswitchId

The specified resource of VswitchId is being configured, please try again later.

The specified resource of VswitchId is being configured, please try again later.

400

IllegalParam

The param of %s is illegal.

\-

400

OperationFailed.UnpaidBill

The operation failed because of UnpaidBill.

\-

400

OperationDenied.ServiceLinkedRoleNotExist

The operation is not allowed because of ServiceLinkedRoleNotExist.

The operation is not allowed because of ServiceLinkedRoleNotExist.Please check if the necessary permissions are granted in RAM for the NLB.

400

ResourceAlreadyAssociated.AllocationId

The specified resource of %s is already associated.

\-

400

OperationFailed.vSwitchNotSupportIpv6

The operation failed because of vSwitchNotSupportIpv6.

\-

400

InvalidZones

The current zone list is illegal.

The Availability Zone used in Zone maping is illegal.

400

QuotaExceeded.QuotaInsufficient

The quota of %s is exceeded, usage %s/%s.

The quota is insufficient, currently used %s/%s. Please modify the quota size in the quota center.

400

ResourceInUse.IP

The specified resource of IP is in use.

\-

400

OperationFailed.CreateOrderError

Operation failed because CreateOrderError.

The operation failed because the order creation failed.

400

OperationFailed.NotExist.ResourceGroup

Operation failed because ResourceGroup not exist.

The specified resource group does not exist.

400

IllegalParam.loadBalancerName

Param loadBalancerName is illegal.

The instance name is invalid. Check the parameters.

400

SystemBusy

System is busy, please try again later.

\-

400

MissingParam.%s

The parameter of %s is missing.

\-

400

IllegalParam.loadBalancerName

The parameter loadBalancerName of listener is illegal.

The NLB instance name does not meet the input requirements, please modify according to the details in the error.

400

IllegalParam.DeletionProtectionConfig

DeletionProtectionConfig reason is illegal.

The reason parameter for changing the delete protection status is invalid.

400

IllegalParam.ModificationProtectionConfig

ModificationProtectionConfig reason is illegal.

ModificationProtectionConfig reason is illegal.

400

Throttling.User

Request was denied due to api flow control.

Request was denied due to api flow control.

403

UnauthorizedZone

The specified zone of %s is not authorized.

\-

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

403

UnauthorizedRegion

The specified region of %s is not authorized.

\-

404

ResourceNotFound.VSwitch

The specified resource of vSwitch is not found.

The specified vSwitch resource was not found. Please check the input parameters.

404

ResourceNotFound.Vpc

The specified resource of Vpc is not found.

The specified VPC resource was not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-09-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-09-06#workbench-doc-change-demo)

2024-09-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-09-04#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-02-04#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-02-04#workbench-doc-change-demo)

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-02-04#workbench-doc-change-demo)

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2024-01-22#workbench-doc-change-demo)

2023-12-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-12-20#workbench-doc-change-demo)

2023-11-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-11-27#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-10-09#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-09-12#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-09-08#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-08-22#workbench-doc-change-demo)

2023-06-30

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-06-30#workbench-doc-change-demo)

2023-06-29

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateLoadBalancer?updateTime=2023-06-29#workbench-doc-change-demo)
