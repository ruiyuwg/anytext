Creates an IPv4 gateway.

## Operation description

-   **CreateIpv4Gateway** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [GetIpv4GatewayAttribute](/help/en/vpc/api-getipv4gatewayattribute) operation to query the status of an IPv4 gateway:
    
    -   If the IPv4 gateway is in the **Creating** state, the IPv4 gateway is being created.
    -   If the IPv4 gateway is in the **Created** state, the IPv4 gateway is created.
-   You cannot repeatedly call the **CreateIpv4Gateway** operation to create IPv4 gateways in a virtual private cloud (VPC) within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateIpv4Gateway)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateIpv4Gateway)

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

vpc:CreateIpv4Gateway

create

\*Ipv4Gateway

`acs:vpc:{#regionId}:{#accountId}:ipv4gateway/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Ipv4GatewayName

string

No

The name of the IPv4 gateway.

The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.

ipv4

Ipv4GatewayDescription

string

No

The description of the IPv4 gateway.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

test

VpcId

string

Yes

The ID of the VPC where you want to create the IPv4 gateway.

You can create only one IPv4 gateway in a VPC.

vpc-5tss06uvoyps5xoya\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. ClientToken can contain only ASCII characters.

**Note** If you do not set this parameter, the system sets **ClientToken** to the value of **RequestId**. The value of **RequestId** for each API request is different.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The ID of the region where you want to create the IPv4 gateway.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

ap-southeast-6

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmxazb4ph6aiy\*\*\*\*

Tag

array<object>

No

The tags of the resource.

object

No

Key

string

No

The key of tag N to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

Ipv4GatewayId

string

The ID of the IPv4 gateway.

ipv4gw-5tsnc6s4ogsedtp3k\*\*\*\*

ResourceGroupId

string

The ID of the resource group.

rg-acfmxazb4ph6aiy\*\*\*\*

RequestId

string

The ID of the request.

F282742B-1BBB-5F63-A3AF-E92EC575A1A6

## Examples

Sample success responses

`JSON`format

```
{
  "Ipv4GatewayId": "ipv4gw-5tsnc6s4ogsedtp3k****",
  "ResourceGroupId": "rg-acfmxazb4ph6aiy****",
  "RequestId": "F282742B-1BBB-5F63-A3AF-E92EC575A1A6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.ExistDirectEip

The operation is not allowed because of existing direct eip.

You are not allowed to create an IPv4 gateway because an EIP in cut-through mode exists.

400

UnsupportedRegion

The feature of ipv4Gateway is not supported in the region.

IPv4 gateways are not supported in this region.

400

Forbidden.OperateShareResource

You cannot operate shared resources.

Shared resources do not support this operation.

400

OperationDenied.SubnetRouteV1Exist

The operation is not allowed because of existing subnetRouteV1.

The subnet routes in the VPC do not meet the requirements.

400

OperationDenied.NormalNatExist

The operation is not allowed because of existing normalNat.

Standard NAT gateways are deployed in the specified VPC.

400

OperationDenied.VpcExistIpv4Gateway

An IPv4 gateway already exists in the VPC.

You are not allowed to create an IPv4 gateway in the VPC because an IPv4 gateway already exists in the VPC.

400

UnsupportedFeature.Ipv4Gateway

The feature of ipv4Gateway is not supported for \[%s\].

The system failed to create the IPv4 gateway because IPv4 gateways are not supported.

400

OperationDenied.VpnExist

The operation is not allowed because of existing vpn.

You are not allowed to create an IPv4 gateway because a VPN gateway already exists in the VPC.

400

OperationDenied.DirectEipExist

The operation is not allowed because of existing directEip.

EIPs are associated with the VPC in cut-through mode or enhanced NAT gateways are deployed in the VPC.

400

OperationFailed.GetNfvServiceList

The operation is failed because of get nfv serviceList failed.

Failed to obtain the nfc service list.

400

IncorrectStatus.Vpc

The status of %s \[%s\] is incorrect.

The instance is in an invalid state.

400

OperationFailed.VpcNotExist

The operation is failed because of vpc is not found.

The operation failed because the VPC is not found.

400

IllegalParam.ResourceGroupId

Invalid ResourceGroupld value.

The specified resource group is invalid or does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateIpv4Gateway?updateTime=2023-07-18#workbench-doc-change-demo)

2023-07-05

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateIpv4Gateway?updateTime=2023-07-05#workbench-doc-change-demo)
