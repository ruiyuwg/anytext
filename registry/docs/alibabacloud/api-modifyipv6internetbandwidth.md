Modifies the Internet bandwidth of an IPv6 address.

## Operation description

You cannot repeatedly call the **ModifyIpv6InternetBandwidth** operation to modify the Internet bandwidth value of an IPv6 CIDR block within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyIpv6InternetBandwidth)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyIpv6InternetBandwidth)

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

vpc:ModifyIpv6InternetBandwidth

update

\*Ipv6InternetBandwidth

`acs:vpc:{#regionId}:{#accountId}:ipv6bandwidth/{#Ipv6InternetBandwidthId}`

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

Ipv6AddressId

string

No

The ID of the IPv6 address.

**Note** You must specify one of **Ipv6AddressId** and **Ipv6InternetBandwidthId**.

ipv6-2zen5j4axcp5l5qyy\*\*\*\*

Ipv6InternetBandwidthId

string

No

The instance ID of the Internet bandwidth of the IPv6 address.

ipv6bw-uf6hcyzu65v98v3du\*\*\*\*

Bandwidth

long

Yes

The Internet bandwidth value of the IPv6 address. Unit: Mbit/s.

-   If the billing method is pay-by-data-transfer, valid values are **1** to **1000**.
-   If the billing method is pay-by-bandwidth, valid values are **1** to **2000**.

4

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

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: pre-checks the request but does not create the IPv4 gateway. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): sends the API request. After the request passes the check, an HTTP 2xx status code is returned and the IPv4 gateway is created.

false

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

D560AF68-4CE8-4A5C-B3FE-469F558094D0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D560AF68-4CE8-4A5C-B3FE-469F558094D0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParam.Ipv6InstanceId

The param of Ipv6InstanceId is missing.

The error message returned because Ipv6InstanceId is not set.

400

InvalidIpv6Instance.NotFound

The specified Ipv6AddressId or Ipv6InternetBandwidthId is not found.

The error message returned because Ipv6AddressId or Ipv6InternetBandwidthId is not set.

400

IllegalParam.Bandwidth

The param of bandwidth is illegal.

The Bandwidth parameter is set to an invalid value.

400

OperationUnsupported.FinancialLocked

The operation is forbidden because of financialLocked.

The error message returned because the resource is locked due to overdue payments and the operation is denied.

400

OperationFailed.InternetBandwidthNonExist

The operation is forbidden because of InternetBandwidthNonExist.

The error message returned because the specified bandwidth is invalid and the operation is denied.

400

OperationFailed.InternetBandwidthUnstable

The operation is forbidden because of InternetBandwidthUnstable.

\-

400

OperationFailed.BandwidthExceedLimit

The operation is forbidden because of BandwidthExceedLimit.

The error message returned because the specified bandwidth exceeds the upper limit and the operation is denied.

400

ParamExclusive.Ipv6AddressIdAndIpv6InternetBandwidthId

Ipv6AddressId and Ipv6InternetBandwidthId is mutually exclusive.

The error message returned because Ipv6AddressId and Ipv6InternetBandwidthId are not set for the same instance.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

OperationFailed.SaleValidate

Validate sale condition with subArticle failed.

Failed to validate the sales condition with a subproject.

500

OperationFailed.QuerySpInfo

query resource by sp error

Failed to query the instance order.

500

OperationFailed.QueryAccountInfo

Query account info failed when create order.

Failed to query the account information when the order is placed.

500

OperationFailed.SyncTradeResource

Resource transaction information synchronization failed

Failed to synchronize the resource transaction information.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-24

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyIpv6InternetBandwidth?updateTime=2024-07-24#workbench-doc-change-demo)

2024-02-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyIpv6InternetBandwidth?updateTime=2024-02-26#workbench-doc-change-demo)

2023-08-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyIpv6InternetBandwidth?updateTime=2023-08-14#workbench-doc-change-demo)

2023-08-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyIpv6InternetBandwidth?updateTime=2023-08-03#workbench-doc-change-demo)

2023-03-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyIpv6InternetBandwidth?updateTime=2023-03-23#workbench-doc-change-demo)
