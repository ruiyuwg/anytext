Default IPv6 gateways support only private communication. You can call the AllocateIpv6InternetBandwidth operation to purchase Internet bandwidth resources for an IPv6 address. This way, ECS instances in a VPC can access the Internet through the IPv6 address. IPv6 clients can also access the ECS instances over the Internet.

## Operation description

-   Before you call this operation, make sure that an ECS instance that supports IPv6 is created in a VPC that has an IPv6 CIDR block. For more information, see [Create a VPC with an IPv6 CIDR block](/help/en/ipv6-gateway/getting-started/create-a-vpc-with-an-ipv6-cidr-block).
-   You cannot repeatedly call **AllocateIpv6InternetBandwidth** within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateIpv6InternetBandwidth)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AllocateIpv6InternetBandwidth)

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

vpc:AllocateIpv6InternetBandwidth

create

\*Ipv6InternetBandwidth

`acs:vpc:{#regionId}:{#accountId}:ipv6bandwidth/*`

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

The ID of the region where the IPv6 gateway is deployed. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-huhehaote

Ipv6GatewayId

string

Yes

The ID of the IPv6 gateway.

ipv6gw-uf6hcyzu65v98v3du\*\*\*\*

Ipv6AddressId

string

Yes

The ID of the IPv6 address.

ipv6-2zen5j4axcp5l5qyy\*\*\*\*

InternetChargeType

string

No

The metering method of the Internet bandwidth for the IPv6 address. Valid values:

-   **PayByTraffic**: pay-by-data-transfer
-   **PayByBandwidth** (default): pay-by-bandwidth

PayByBandwidth

Bandwidth

integer

Yes

The Internet bandwidth of the IPv6 address. Unit: Mbit/s.

-   If you set **InternetChargeType** to **PayByTraffic**, valid values are **1** to **1000**.
-   If you set **InternetChargeType** to **PayByBandwidth**, valid values are **1** to **2000**.

2

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized RAM users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false**: sends the API request. After the request passes the check, a 2XX HTTP status code is returned and the route table is associated. This is the default value.

false

## Response parameters

Parameter

Type

Description

Example

object

Ipv6AddressId

string

The ID of the IPv6 address.

ipv6-2zen5j4axcp5l5qyy\*\*\*\*

RequestId

string

The request ID.

6972A26E-99B1-4367-9890-FBDEBB0F5E7D

InternetBandwidthId

string

The ID of the Internet bandwidth that you purchased for the IPv6 gateway.

ipv6bw-uf6hcyzu65v98v3du\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Ipv6AddressId": "ipv6-2zen5j4axcp5l5qyy****",
  "RequestId": "6972A26E-99B1-4367-9890-FBDEBB0F5E7D",
  "InternetBandwidthId": "ipv6bw-uf6hcyzu65v98v3du****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IllegalParam.Bandwidth

The param of %s is illegal.

Invalid Bandwidth value. See the API reference and specify a valid value.

400

MissingParam.Ipv6InstanceId

The param of Ipv6InstanceId is missing.

The error message returned because Ipv6InstanceId is not set.

400

InvalidIpv6Instance.NotFound

The specified Ipv6AddressId or Ipv6InternetBandwidthId is not found.

The error message returned because Ipv6AddressId or Ipv6InternetBandwidthId is not set.

400

IllegalParam.ChargeType

The param of %s is illegal.

Invalid ChargeType value. See the API reference and specify a valid value.

400

IllegalParam.InternetChargeType

The param of %s is illegal.

Invalid InternetChargeType value. See the API reference and specify a valid value.

400

OperationUnsupported.PrePaid

%s is unsupported.

IPv6 Internet bandwidth does not support the subscription billing method. Change the billing method.

400

OperationFailed.Ipv6GatewayDisMatchIpv6Address

The operation is failed because of %s.

The IPv6 address and IPv6 gateway do not belong to the same VPC.

400

OperationFailed.InternetBandwidthAlreadyExisted

The operation is failed because of %s.

Internet bandwidth is already enabled for the IPv6 address.

400

OperationFailed.Ipv6GatewayNotExist

The operation is failed because of %s.

No IPv6 gateway exists in the VPC to which the IPv6 address belongs. Create an IPv6 gateway and try again.

400

IncorrectStatus.Ipv6Instance

The status of %s \[%s\] is incorrect.

The IPv6 address is in an unstable state. Try again later.

400

IllegalParam.Ipv6Address

The param of %s is illegal.

The IPv6 address is invalid.

400

UnsupportedFeature.InternetChargeTypeOnFreeIpv6Address

The feature of %s is not supported.

The status of the IPv6 address does not support the billing method. For more information, see the API reference.

400

UnsupportedFeature.InternetChargeTypeOnStaticIsp

The feature of %s is not supported.

The IPv6 address is of the single ISP type and does not support the billing method.

400

OperationUnsupported.ULA

%s is unsupported.

This operation does not support ULA addresses.

400

OperationFailed.OpenCdtServiceFirst

The operation is failed because of %s.

The billing method requires CDT billing enabled. Enable CDT billing and try again.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

ResourceNotFound.Ipv6Address

The specified resource of %s is not found.

The IPv6 address is not found.

500

OperationFailed.QueryAccountInfo

Query account info failed when create order.

Failed to query the account information when the order is placed.

500

OperationFailed.SaleValidate

Validate sale condition with subArticle failed.

Failed to validate the sales condition with a subproject.

500

SystemBusy

The system is busy. Please try again later.

The system is busy. Please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2025-12-11#workbench-doc-change-demo)

2025-04-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2025-04-29#workbench-doc-change-demo)

2024-07-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2024-07-24#workbench-doc-change-demo)

2023-12-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2023-12-08#workbench-doc-change-demo)

2023-08-30

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2023-08-30#workbench-doc-change-demo)

2023-08-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AllocateIpv6InternetBandwidth?updateTime=2023-08-03#workbench-doc-change-demo)
