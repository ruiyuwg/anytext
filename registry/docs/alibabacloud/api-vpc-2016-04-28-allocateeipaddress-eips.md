Applies for an elastic IP address (EIP).

## Operation description

Before you call this operation, make sure that you are familiar with the billing methods and pricing of EIPs. For more information, see [Billing overview](/help/en/eip/billing-overview).

After you call this operation, the system randomly allocates an EIP that is in the **Available** state in the specified region. EIPs support only the ICMP, TCP, and UDP transport layer protocols. The IGMP and SCTP protocols are not supported.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipAddress)

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

vpc:AllocateEipAddress

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

Bandwidth

string

No

The maximum bandwidth of the EIP. Unit: Mbit/s.

-   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**: **1** to **500**.\*\*\*\*
-   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**: **1** to **200**.\*\*\*\*
-   Valid values when **InstanceChargeType** is set to **PrePaid**: **1** to **1000**.\*\*\*\*

Default value: **5**. Unit: Mbit/s.

5

Period

integer

No

The subscription duration of the EIP.

Valid values when **PricingCycle** is set to **Month**: **1** to **9**.\*\*\*\*

Valid values when **PricingCycle** is set to **Year**: **1** to **5**.\*\*\*\*

This parameter must be specified when **InstanceChargeType** is set to **PrePaid**. This parameter is optional when **InstanceChargeType** is set to **PostPaid**.

1

ISP

string

No

The line type. Valid values:

-   **BGP** (default): BGP (Multi-ISP) All regions support BGP (Multi-ISP) EIPs.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro Only the following regions support BGP (Multi-ISP) Pro lines: China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).

For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the "Line types" section of [What is EIP?](/help/en/eip/product-overview/what-is-eip)

-   If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
    
    -   **ChinaTelecom**
    -   **ChinaUnicom**
    -   **ChinaMobile**
    -   **ChinaTelecom\_L2**
    -   **ChinaUnicom\_L2**
    -   **ChinaMobile\_L2**
-   If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP\_FinanceCloud**.
    

BGP

ActivityId

long

No

The promotion code. This parameter is not required.

123456

Netmode

string

No

The network type. Default value: **public**.

public

AutoPay

boolean

No

Specifies whether to enable automatic payment. Valid values:

-   **false** (default): The automatic payment is disabled. If you select this option, you must go to the Order Center to complete the payment after an order is generated.
-   **true**: The automatic payment is enabled. Payments are automatically complete after an order is generated.

If **InstanceChargeType** is set to **PrePaid**, this parameter is required. If **InstanceChargeType** is set to **PostPaid**, this parameter is not required.

false

PricingCycle

string

No

The billing cycle of the subscription EIP. Valid values:

-   **Month** (default)
-   **Year**

If **InstanceChargeType** is set to **PrePaid**, this parameter is required. If **InstanceChargeType** is set to **PostPaid**, this parameter is not required.

Month

InstanceChargeType

string

No

The billing method of the EIP. Valid values:

-   **PrePaid**: subscription
-   **PostPaid** (default): pay-as-you-go

If **InstanceChargeType** is set to **PrePaid**, set **InternetChargeType** to **PayByBandwidth**. If **InstanceChargeType** is set to **PostPaid**, set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.

PostPaid

InternetChargeType

string

No

The metering method of the EIP. Valid values:

-   **PayByBandwidth** (default): pay-by-bandwidth
-   **PayByTraffic**: pay-by-data-transfer

When **InstanceChargeType** is set to **PrePaid**, set **InternetChargeType** to **PayByBandwidth**.

When **InstanceChargeType** is set to **PostPaid**, set **InternetChargeType** to **PayByBandwidth** or **PayByTraffic**.

PayByTraffic

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmxazffggds\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate a token, but you must make sure that the token is unique among different requests. The **client token** can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the value of **RequestId** as the **client token**. The value of **RequestId** is different for each API request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

Name

string

No

The EIP name.

The name must be 1 to 128 characters in length and start with a letter, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

**Note** You cannot specify this parameter if you create a subscription EIP.

EIP1

Description

string

No

The description of the EIP.

The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.

**Note** You cannot specify this parameter if you create a subscription EIP.

test

SecurityProtectionTypes

array

No

The editions of Anti-DDoS.

-   If you do not specify this parameter, Anti-DDoS Origin Basic is used.
-   If you set the parameter to **AntiDDoS\_Enhanced**, Anti-DDoS Pro/Premium is used.

You can specify up to 10 editions of Anti-DDoS.

string

No

The edition of Anti-DDoS.

-   If you do not specify this parameter, Anti-DDoS Origin Basic is used.
-   If you set the parameter to **AntiDDoS\_Enhanced**, Anti-DDoS Pro/Premium is used.

You can specify up to 10 editions of Anti-DDoS.

AntiDDoS\_Enhanced

PublicIpAddressPoolId

string

No

The ID of the IP address pool.

The EIP is allocated from the IP address pool.

By default, the IP address pool feature is unavailable. To use the IP address pool, apply for the privilege in the Quota Center console. For more information, see the "Request a quota increase in the Quota Center console" section in [Manage EIP quotas](/help/en/eip/manage-eip-quotas).

pippool-2vc0kxcedhquybdsz\*\*\*\*

Zone

string

No

The zone of the EIP.

When the service type of the IP address pool specified by **PublicIpAddressPoolId** is CloudBox, the default value is the zone of the IP address pool.

For more information, see [ListPublicIpAddressPools](/help/en/eip/developer-reference/api-429433) .

cn-hangzhou-a

IpAddress

string

No

The IP address of the EIP that you want to request.

Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.

192.0.XX.XX

InstanceId

string

No

The EIP ID.

Specify **IpAddress** or **InstanceId**. If you leave both parameters empty, the system randomly allocates an EIP.

eip-25877c70gddh\*\*\*\*

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

The order ID. This parameter is returned only when **InstanceChargeType** is set to **PrePaid**.

10

ResourceGroupId

string

The ID of the resource group. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.

rg-acfmxazfdgdg\*\*\*\*

EipAddress

string

The EIP that is allocated. This parameter is returned only when **InstanceChargeType** is set to **PostPaid**.

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
  "OrderId": 10,
  "ResourceGroupId": "rg-acfmxazfdgdg****",
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

PAYFOR.CREDIT\_PAY\_INSUFFICIENT\_BALANCE

Your account does not have enough balance.

\-

400

SYSTEM.SALE\_VALIDATE\_UNEXPECTED\_ERROR

You have arrears and do not meet the purchase conditions.

\-

400

Trade\_Sync\_Create\_Sub\_ERROR

SyncOrderToSub error.

\-

400

InvalidComponent.EipBandwidthMax

The eip\_bandwidth\_max component is invalid.

\-

400

OperationFailed.RiskControl

Risk control check failed.

The error message returned because your payment method has security risks. Click the link for verification in your email or console message and submit your order after verification.

400

OperationFailed.SaleValidate

Validate sale condition with subArticle failed.

Failed to validate the sales condition with a subproject.

400

IllegalParam.OrderParamComponent

Product order param has invalid component.

\-

400

OperationFailed.SaleExpression

Get the sales expression exception attached to the item.

\-

400

OperationFailed.CompleteUserInfo

Complete user info failed.

\-

400

OperationFailed.QueryPrice

Query price failed when create order.

Failed to query the price when creating the order.

400

OperationFailed.InsufficientEIP

Eip resource is not enough.

\-

400

OperationFailed.InvokeInnerApi

Failed to invoke inner api.

\-

400

OperationFailed.AccountMoneyInvalid

Account money is invalid.

\-

400

OperationFailed.QueryCredtiInfo

Failed to query credit info.

\-

400

FrequentPurchase.EIP

eip frequent purchase

\-

400

OperationFailed.QueryUserLabel

Failed to query user label info.

\-

400

PAY.INSUFFICIENT\_BALANCE

Your account does not have enough balance.

Your account does not have enough balance.

400

ORDER.QUANTITY\_INVALID

User quota has exceeded the limit.

The maximum number of EIPs you maintain is exceeded. You can go to quota management to increase the upper limit of EIPs.

400

PAY.MAYI\_WITHHOLDING\_AGREEMENT\_ILLEGAL

User withhoding argeement is illegal.

\-

400

OrderError.EIP

FThe Account failed to create order.

\-

400

IellgalParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The specified parameter OwnerAccount is illegal.

400

OrderError.EIP

The Account failed to create order.

Failed to place the order.

400

ResourceNotFound.PublicIpAddressPool

The specified resource of PublicIpAddressPool is not found.

\-

400

ResourceNotEnough.PublicIpAddressPool

The specified resource of PublicIpAddressPool is not enough.

\-

400

Mismatch.IpAndPublicIpAddressPool

The Ip and PublicIpAddressPool are mismatched.

\-

400

CreditPayInsufficientBalance

The balance is insufficient, please contact your channel partner to increase the balance

The quota is insufficient. Contact your partner to increase the quota.

400

OperationDenied.NotOpenDdosOriginProtectService

The operation is not allowed because of you do not open Ddos Origin Protection Service

You can not create an anti-DDoS Enhanced EIP because you do not open Ddos Origin Protection Service.

400

IncorrectStatus.PublicIpAddressPool

The status of PublicIpAddressPool is incorrect.

EIPs are not allowed to be allocated because the address pool is in an unstable state.

400

IncorrectStatus.PublicIpAddressPool

The status of %s \[%s\] is incorrect.

The EIP cannot be allocated because the IP address pool is in an invalid state.

400

IllegalParam.Isp

The param of %s is illegal.

The EIP cannot be allocated because the ISP is invalid.

400

AccountMoneyValidateError

The available amount of the account is insufficient.

The account does not have sufficient balance.

400

OrderFailed.ConcurrentOperate

Failed to create the order due to concurrent operations.

Failed to create the order because concurrent operations are performed.

400

OperationFailed.BasicInfoUncompleted

Your information is incomplete. Complete your information before the operation.

The error message returned because your basic information is incomplete. Complete your basic information and try again.

400

OperationFailed.QuotaNotEnough

Your quota is insufficient. Please contact your channel partner to increase your quota

\-

400

ExclusiveParam.ZoneAndPublicIpAddressPoolId

The Zone and PublicIpAddressPoolId parameters are mutually exclusive.

You cannot specify Zone and PublicIpAddressPoolId at the same time.

400

IllegalParam.Zone

The specified zone is invalid.

Zone is set to an invalid value.

400

OperationFailed.AllocateUnfamiliarIp

The operation failed because only IP addresses used within the last seven days can be allocated.

Only IP addresses used within the last seven days can be used to apply for EIP.

400

Ip.Allocated

The reserve ip has been allocated.

Reserved IP addresses are already specified.

400

IncorrectStatus.Ip

The status of ip is incorrect.

The status of the IP is incorrect.

400

UnsupportedFeature.AllocateEipAddressWithZone

The feature of AllocateEipAddressWithZone is not supported.

You are not allowed to create an instance in a specified zone in the region.

400

ResourceNotFound.Ip

The specified ip is not found.

The specified IP could not be found.

400

OperationFailed.CreditPayInsufficientBalance

Your account does not have enough balance.

Your account balance is negative. Top up your account before you can make a purchase.

400

OperationFailed.ResourceNotEnough

The resources you have applied for are insufficient.

The resources you have applied for are insufficient. If you still need to apply, please submit a work order for processing.

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

409

OperationConflict

Request was denied due to conflict with a previous request.

The request conflicts with another one. Try again later.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error occurred.

500

OperationFailed.SystemBusy

Operation failed because system is busy.

The error message returned because the system is busy. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2026-02-28#workbench-doc-change-demo)

2025-11-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2025-11-06#workbench-doc-change-demo)

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2025-04-29#workbench-doc-change-demo)

2025-03-26

The API operation is not deprecated.. The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2025-03-26#workbench-doc-change-demo)

2024-07-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-07-16#workbench-doc-change-demo)

2024-05-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-05-17#workbench-doc-change-demo)

2024-03-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-03-14#workbench-doc-change-demo)

2024-03-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-03-14#workbench-doc-change-demo)

2024-02-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-02-02#workbench-doc-change-demo)

2024-01-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2024-01-22#workbench-doc-change-demo)

2023-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-12-13#workbench-doc-change-demo)

2023-10-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-10-19#workbench-doc-change-demo)

2023-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-08-29#workbench-doc-change-demo)

2023-07-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-07-26#workbench-doc-change-demo)

2023-07-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-07-24#workbench-doc-change-demo)

2023-07-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-07-08#workbench-doc-change-demo)

2023-07-06

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-07-06#workbench-doc-change-demo)

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-06-26#workbench-doc-change-demo)

2023-06-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-06-19#workbench-doc-change-demo)

2023-04-20

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipAddress?updateTime=2023-04-20#workbench-doc-change-demo)
