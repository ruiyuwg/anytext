Requests a specified elastic IP address (EIP).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipAddressPro)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipAddressPro)

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

vpc:AllocateEipAddressPro

create

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/*`

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

The ID of the region to which the EIP belongs.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the region ID.

cn-hangzhou

IpAddress

string

No

The IP address of the EIP.

Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.

192.0.XX.XX

InstanceId

string

No

The EIP ID.

Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.

eip-25877c70gddh\*\*\*\*

Bandwidth

string

No

The maximum bandwidth of the specified EIP. Unit: Mbit/s.

-   When **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**, valid values for **Bandwidth** are **1** to **500**.
-   When **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**, valid values for **Bandwidth** are **1** to **200**.
-   When **InstanceChargeType** is set to **PrePaid**, valid values for **Bandwidth** are **1** to **1000**.

Default value: **5** Mbit /s.

5

Period

integer

No

The subscription duration.

-   Valid values when **PricingCycle** is set to **Month**: **1 to 9**.\*\*\*\*
-   Valid values when **PricingCycle** is set to **Year**: **1 to 3**.\*\*\*\*

This parameter is required if **InstanceChargeType** is set to **PrePaid**.

Leave this parameter empty if **InstanceChargeType** is set to **PostPaid**.

1

ISP

string

No

The line type. Valid values:

-   **BGP** (default): BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro line The BGP (Multi-ISP) Pro line is supported in the China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.

For more information about the BGP (Multi-ISP) line and BGP (Multi-ISP) Pro line, see the "Line types" section of [What is EIP?](/help/en/eip/product-overview/what-is-eip)

-   If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
    
    -   **ChinaTelecom**
    -   **ChinaUnicom**
    -   **ChinaMobile**
    -   **ChinaTelecom\_L2**
    -   **ChinaUnicom\_L2**
    -   **ChinaMobile\_L2**
-   If your services are deployed in China East 1 Finance, this parameter is required and you must set the parameter to **BGP\_FinanceCloud**.
    

BGP

Netmode

string

No

The network type. By default, this value is set to **public**, which specifies the public network type.

public

AutoPay

boolean

No

Specifies whether to enable automatic payment. Default value: true. Valid values:

-   **false**: Automatic payment is disabled. After an order is generated, you must go to the Order Center to complete the payment.
-   **true**: Automatic payment is enabled. After an order is generated, the payment is automatically completed.

This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is optional if **InstanceChargeType** is set to **PostPaid**.

true

PricingCycle

string

No

The billing cycle of the subscription EIP. Valid values:

-   **Month** (default)
-   **Year**

This parameter is required if **InstanceChargeType** is set to **PrePaid**. This parameter is optional if **InstanceChargeType** is set to **PostPaid**.

Month

InstanceChargeType

string

No

The billing method of the EIP. Valid values:

-   **PrePaid**: subscription
-   **PostPaid** (default): pay-as-you-go

Set the value of **InternetChargeType** to **PayByBandwidth** if **InstanceChargeType** is set to **PrePaid**.

Valid values when **InstanceChargeType** is set to **PostPaid**: **PayByBandwidth** or **PayByTraffic**.

PostPaid

InternetChargeType

string

No

The metering method of the EIP. Valid values:

-   **PayByBandwidth** (default): pay-by-bandwidth.
-   **PayByTraffic**: pay-by-data-transfer.

If **InstanceChargeType** is set to **PrePaid**, you must set **InternetChargeType** to **PayByBandwidth**.

If **InstanceChargeType** is set to **PostPaid**, **InternetChargeType** can be set to **PayByBandwidth** or **PayByTraffic**.

PayByBandwidth

ResourceGroupId

string

No

The ID of the resource group to which the EIP belongs.

rg-resourcegroup\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe6\*\*\*\*

SecurityProtectionTypes

array

No

The editions of Anti-DDoS.

-   If you do not specify this parameter, Anti-DDoS Origin Basic is used.
-   If you set the parameter to **AntiDDoS\_Enhanced**, Anti-DDoS Pro/Premium is used.

You can configure Anti-DDoS editions for up to 10 EIPs.

string

No

The edition of Anti-DDoS.

-   If you do not specify this parameter, Anti-DDoS Origin Basic is used.
-   If you set the parameter to **AntiDDoS\_Enhanced**, Anti-DDoS Pro/Premium is used.

You can configure Anti-DDoS editions for up to 10 EIPs.

AntiDDoS\_Enhanced

PublicIpAddressPoolId

string

No

The ID of the IP address pool.

The EIP is allocated from the IP address pool.

By default, the IP address pool feature is unavailable. If you need to use this feature, contact your account manager.

pippool-2vc0kxcedhquybdsz\*\*\*\*

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

4EC47282-1B74-4534-BD0E-403F3EE64CAF

OrderId

long

The order ID.

This parameter is returned when InstanceChargeType is set to PrePaid. If AutoPay is set to false, you must manually complete the payment in the [Order Center](https://usercenter2-intl.console.alibabacloud.com/order/list).

20190000

ResourceGroupId

string

The ID of the resource group. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.

rg-resourcegroup\*\*\*\*

EipAddress

string

The IP address that is allocated to the EIP. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.

192.0.XX.XX

AllocationId

string

The EIP ID.

eip-25877c70gddh\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4EC47282-1B74-4534-BD0E-403F3EE64CAF",
  "OrderId": 20190000,
  "ResourceGroupId": "rg-resourcegroup****",
  "EipAddress": "192.0.XX.XX",
  "AllocationId": "eip-25877c70gddh****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

FrequentPurchase.EIP

eip frequent purchase

\-

400

COMMODITY\_NO\_EXIST

commodity is not exist

\-

400

QuotaExceeded.Eip

Elastic IP address quota exceeded

\-

400

InvalidParameter

Specified value of "InternetChargeType" is not valid

\-

400

InvalidParameter

Specified value of "Bandwidth" is not valid.

The specified bandwidth value is invalid.

400

InsufficientBalance

Your account does not have enough balance.

Your account balance is insufficient. Top up your account and try again.

400

QuotaExceeded.Eip

Elastic IP address quota exceeded.

The number of EIPs exceeds the quota limit. If you need more EIPs, you can apply to increase the EIPs quota or use NAT Gateway.

400

ReserveIpFail

Reserve eip failed.

The system failed to reserve the specified EIP.

400

InvalidRegion.NotSupport

The specified region does not support.

The specified region does not support.

400

InvalidBandwidth.Malformed

The specified Bandwidth is invalid.

\-

400

INSTANCE\_TYPE\_NOT\_SUPPORT

The instance type is invalid.

\-

400

QueryParameter.Illegal

query parameter illegal

\-

400

SYSTEM.UNKNOWN.ERROR

The Account failed to create order.

\-

400

TokenVerfiy.Failed

token verify failed.

\-

400

OrderFailed

The Account failed to create order.

\-

400

QuotaExceeded.LargeSpecEip

Elastic IP address with large spec quota exceeded.

\-

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

Invalid.Reserve.Ip

The reserve ip is invalid.

\-

400

Ip.Allocated

The reserve ip has been allocated.

Reserved IP addresses are already specified.

400

Ip.Keeped

The reserve ip been keeped in an hour.

\-

400

OperationFailed.AllocateUnfamiliarIp

The operation failed because only IP addresses used within the last seven days can be allocated.

Only IP addresses used within the last seven days can be used to apply for EIP.

400

INVALID\_INSTANCE\_STATUS

The instance status is invalid.

\-

400

OperationFailed.InstanceNotExist

Eip instanceId does not exist.

\-

400

InvalidStatus.ValueNotSupported

The specified status is not supported.

\-

400

OperationFailed.RiskControl

Risk control check failed.

The error message returned because your payment method has security risks. Click the link for verification in your email or console message and submit your order after verification.

400

OrderError.EIP

The Account failed to create order.

Failed to place the order.

400

ResourceNotEnough.PublicIpAddressPool

The specified resource of PublicIpAddressPool is not enough.

\-

400

Mismatch.IpAndPublicIpAddressPool

The Ip and PublicIpAddressPool are mismatched.

\-

400

ResourceNotFound.PublicIpAddressPool

The specified resource of PublicIpAddressPool is not found.

\-

400

ResourceNotFound.Ip

The specified ip is not found.

The specified IP could not be found.

400

OperationDenied.IpBelongToOtherUser

The operation is not allowed because of ip belong to other user.

Your application failed because the IP address belongs to another user.

400

IncorrectStatus.Ip

The status of ip is incorrect.

The status of the IP is incorrect.

400

OperationFailed.IpIsLocked

The operation is failed because of ip is locked.

Your application failed because the IP address is locked.

400

Mismatch.IpAndIsp

The specified IP address does not match the ISP.

The system failed to allocate the specified EIP because the ISP and IP address do not match.

400

IncorrectStatus.PublicIpAddressPool

The status of PublicIpAddressPool is incorrect.

EIPs are not allowed to be allocated because the address pool is in an unstable state.

400

IllegalParam.IpAddress

The specified IpAddress (%s) is illegal.

The IpAddress parameter is set to an invalid value.

400

OperationFailed.ResourceNotEnough

The resources you have applied for are insufficient.

The resources you have applied for are insufficient. If you still need to apply, please submit a work order for processing.

400

Mismatch.EipSecurityProtectionTypeAndPoolSecurityProtectionType

The EipSecurityProtectionType and PoolSecurityProtectionType are mismatched.

The EIP protection type does not match the address pool protection type.

400

IllegalParam.Isp

The param of Isp \[%s\] is illegal.

The error message returned because the Isp parameter is set to an invalid value. Specify a valid value and try again.

400

OperationFailed.ResourceNotEnough

Insufficient resources.

The resources that you request are insufficient. If you still want to request the resources, submit a ticket.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

404

InvalidRegionId.NotFound

Specified value of "RegionId" is not supported.

RegionId is set to an invalid value. Check whether the service is available in the specified region and try again.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId parameter is set to an invalid value. Specify a valid value and try again.

404

FUWU\_BIZ\_COMMODITY\_VERIFY\_FAIL

????????, ????????PD.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error occurred.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2025-11-06#workbench-doc-change-demo)

2025-03-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2025-03-26#workbench-doc-change-demo)

2024-07-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2024-07-16#workbench-doc-change-demo)

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2024-01-22#workbench-doc-change-demo)

2023-10-19

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2023-10-19#workbench-doc-change-demo)

2023-07-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2023-07-06#workbench-doc-change-demo)

2023-05-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2023-05-15#workbench-doc-change-demo)

2022-12-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddressPro?updateTime=2022-12-02#workbench-doc-change-demo)
