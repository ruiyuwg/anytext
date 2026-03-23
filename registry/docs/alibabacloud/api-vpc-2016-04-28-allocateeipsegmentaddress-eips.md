Applies for contiguous elastic IP addresses (EIPs).

## Operation description

**AllocateEipSegmentAddress** is an asynchronous operation. After a request is sent, the system returns the ID of a contiguous EIP group and runs the task in the background. You can call the [DescribeEipSegment](/help/en/eip/developer-reference/api-156063) operation to query the status of the task.

-   If the contiguous EIP group is in the **Allocating** state, the EIPs are being allocated. In this case, you can only perform the query operation and cannot perform other operations.
-   If the contiguous EIP group is in the **Allocated** state, the EIPs are allocated.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipSegmentAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateEipSegmentAddress)

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

vpc:AllocateEipSegmentAddress

create

\*SegmentAddress

`acs:vpc:{#regionId}:{#accountId}:eip/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate a token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

Bandwidth

string

No

The maximum bandwidth of the contiguous EIP group. Unit: Mbit/s.

-   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByBandwidth**: **1** to **500**.\*\*\*\*
-   Valid values when **InstanceChargeType** is set to **PostPaid** and **InternetChargeType** is set to **PayByTraffic**: **1** to **200**.\*\*\*\*
-   Valid values when **InstanceChargeType** is set to **PrePaid**: **1** to **1000**.\*\*\*\*

Default value: **5**. Unit: Mbit/s.

5

RegionId

string

Yes

The ID of the region in which the contiguous EIP group resides.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the region ID.

cn-hangzhou

EipMask

string

Yes

The subnet mask of the contiguous EIP group. Valid values:

-   **28**: applies for 16 contiguous EIPs in each call.
-   **27**: applies for 32 contiguous EIPs in each call.
-   **26**: applies for 64 contiguous EIPs in each call.
-   **25**: applies for 128 contiguous EIPs in each call.
-   **24**: applies for 256 contiguous EIPs in each call.

**Note** Some IP address are reserved for specific purposes. Therefore, the actual number of the contiguous EIPs may be one, three, or four less than the expected number.

28

Netmode

string

No

The network type. Set the value to **public**, which specifies the public network type.

public

InternetChargeType

string

No

The metering method of contiguous EIPs. Valid values:

-   **PayByBandwidth** (default)
-   **PayByTraffic**

PayByBandwidth

ResourceGroupId

string

No

The resource group ID.

rg-bp67acfmxazb4ph\*\*\*\*

Isp

string

No

The line type. Valid values:

-   **BGP** (default): BGP (Multi-ISP) line The BGP (Multi-ISP) line is supported in all regions.
-   **BGP\_PRO**: BGP (Multi-ISP) Pro line BGP (Multi-ISP) Pro line is supported only in the China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok) regions.

For more information about the BGP (Multi-ISP) line and BGP (Multi-ISP) Pro line, see [EIP line types](/help/en/eip/product-overview/what-is-eip).

If you are allowed to use single-ISP bandwidth, you can also use one of the following values:

-   **ChinaTelecom**
-   **ChinaUnicom**
-   **ChinaMobile**
-   **ChinaTelecom\_L2**
-   **ChinaUnicom\_L2**
-   **ChinaMobile\_L2**

If your services are deployed in China East 1 Finance, this parameter is required and you must set the parameter to **BGP\_FinanceCloud**.

BGP

Zone

string

No

The zone of the contiguous EIP group.

cn-hangzhou-a

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

F7A6301A-64BA-41EC-8284-8F4838C15D1F

EipSegmentInstanceId

string

The ID of the contiguous EIP group.

eipsg-2zett8ba055tbsxme\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F7A6301A-64BA-41EC-8284-8F4838C15D1F\t",
  "EipSegmentInstanceId": "eipsg-2zett8ba055tbsxme****"
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

OperationFailed.ChargeTypeInvalid

Operation failed because hybrid netmode do not support PayByTraffic.

\-

400

IllegalParam.EipMask

EipMask is illegal.

\-

400

IllegalParam.Name

Name is illegal.

\-

400

IllegalParam.Description

Description is illegal.

\-

400

InstanceExist.EipSegment

The eipSegment instance already exists.

\-

400

OperationFailed.QuotaExceed

Operation failed because over threshold bandwidth quota exceed.

\-

400

OperationFailed.FrequentPurchase

Operation failed because eip frequent purchase.

\-

400

OperationFailed.AllocateEipSegment

Operation failed because eip segment is out of stock.

Insufficient inventory of continuous EIP.

400

OperationFailed.CreateOrderFailed

Operation failed because create order failed.

\-

400

MissingParam.Bandwidth

The parameter Bandwidth is mandatory when allocate hybrid EipSegment.

\-

400

OperationFailed.EipQuotaExceed

Operation failed because eip quota exceed.

\-

400

OrderError.EIP

The Account failed to create order.

Failed to place the order.

400

OperationConflict

Request was denied due to conflict with a previous request.

The request conflicts with another one. Try again later.

400

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

400

UnsupportedFeature.AllocateEipAddressWithZone

The feature of AllocateEipAddressWithZone is not supported.

You are not allowed to create an instance in a specified zone in the region.

400

IllegalParam.Zone

The specified zone is invalid.

Zone is set to an invalid value.

400

Forbidden.AllocateEipSegmentAddress

Authentication is failed for allocating eip segment address.

Failed to apply for continuous EIP. The service has been offline. Please use the IP address pool service.

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

2025-03-24

The API operation is deprecated. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2025-03-24#workbench-doc-change-demo)

2024-07-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2024-07-16#workbench-doc-change-demo)

2023-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2023-08-29#workbench-doc-change-demo)

2023-07-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2023-07-26#workbench-doc-change-demo)

2023-05-22

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2023-05-22#workbench-doc-change-demo)

2023-03-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateEipSegmentAddress?updateTime=2023-03-17#workbench-doc-change-demo)
