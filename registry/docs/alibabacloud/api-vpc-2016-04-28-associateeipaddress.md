Associates an elastic IP address (EIP) with an instance in the same region.

## Operation description

-   You can associate an EIP with an Elastic Compute Service (ECS) instance, a Classic Load Balancer (CLB) instance, a secondary elastic network interface (ENI), a NAT gateway, or a high-availability virtual IP address (HAVIP) in the same region. The ECS instance and CLB instance must be deployed in a virtual private cloud (VPC).
    
-   **AssociateEipAddress** is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the [DescribeEipAddresses](/help/en/eip/developer-reference/api-120193) operation to query the status of the task.
    
    -   If the EIP is in the **Associating** state, the EIP is being associated. In this state, you can only query the EIP and cannot perform other operations.
    -   If the EIP is in the **InUse** state, the EIP is associated.
-   You cannot call the **AssociateEipAddress** operation to associate an EIP with multiple instances at a time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateEipAddress)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AssociateEipAddress)

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

vpc:AssociateEipAddress

update

\*Address

`acs:vpc:{#regionId}:{#accountId}:eip/{#AllocationId}`

NatGateway

`acs:vpc:{#regionId}:{#accountId}:natgateway/{#NatGatewayId}`

Instance

`acs:vpc:{#regionId}:{#accountId}:instance/{#InstanceId}`

Association

`acs:vpc:{#regionId}:{#accountId}:havip/{#HaVipId}`

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

AllocationId

string

Yes

The ID of the EIP that you want to associate with an instance.

eip-2zeerraiwb7ujsxdc\*\*\*\*

InstanceId

string

Yes

The ID of the instance with which you want to associate the EIP.

You can enter the ID of a NAT gateway, CLB instance, ECS instance, secondary ENI, HAVIP, or IP address.

i-2zebb08phyczzawe\*\*\*\*

InstanceType

string

No

The type of the instance with which you want to associate the EIP. Valid values:

-   **Nat**: NAT gateway
-   **SlbInstance**: CLB instance
-   **EcsInstance** (default): ECS instance
-   **NetworkInterface**: secondary ENI
-   **HaVip**: HAVIP
-   **IpAddress**: IP address

**Note** The default value is **EcsInstance**. If the instance with which you want to associate the EIP is not an ECS instance, this parameter is required.

EcsInstance

InstanceRegionId

string

No

The ID of the region in which the instance with which you want to associate the EIP resides.

**Note** This parameter is required only when the EIP is added to a shared Global Accelerator (GA) instance.

cn-hangzhou

PrivateIpAddress

string

No

The IP address in the CIDR block of the vSwitch.

If you leave this parameter empty, the system allocates a private IP address based on the VPC ID and vSwitch ID.

192.168.XX.XX

Mode

string

No

The association mode. Valid values:

-   **NAT** (default): NAT mode
-   **MULTI\_BINDED**: multi-EIP-to-ENI mode
-   **BINDED**: cut-network interface controller mode

**Note** This parameter is required only when **InstanceType** is set to **NetworkInterface**.

NAT

VpcId

string

No

The ID of the VPC in which an IPv4 gateway is created. The VPC and the EIP must be in the same region.

When you associate an EIP with an IP address, the system can enable the IP address to access the Internet based on VPC route configurations.

**Note** This parameter is required if **InstanceType** is set to **IpAddress**, which indicates that the EIP is to be associated with an IP address.

vpc-257gqcdfvx6n\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe63\*\*\*\*

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

0ED8D006-F706-4D23-88ED-E11ED28DCAC0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0ED8D006-F706-4D23-88ED-E11ED28DCAC0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidAssociation.Duplicated

Specified instance already is associated.

An EIP or a GA instance is already associated with the specified instance. You must disassociate the EIP or GA instance from the specified instance before you can perform the operation.

400

OperationDenied

Specified instance is not in VPC.

The specified instance does not exist in the VPC.

400

InvalidParameter.Mismatch

Specified elastic IP address and ECS instance are not in the same region.

The EIP and ECS instance do not belong to the same region.

400

IncorrectEipStatus

Current elastic IP status does not support this operation

The status of the EIP does not support the operation.

400

IncorrectInstanceStatus

Current instance status does not support this operation.

This operation cannot be performed while the instance is in the current state.

400

InvalidInstanceType.ValueNotSupported

The specified value of InstanceType is not supported.

InstanceType is set to an invalid value.

400

IncorrectHaVipStatus

HaVip can be operated by this action only when it's status is Available or InUse.

The operation supports only HAVIPs in the Available or InUse state.

400

InvalidParameter

The specified parameter is not valid.

The parameter is set to an invalid value.

400

OperationDenied

Eip of default vpc not allow this operation

The operation is not supported by EIPs in a default VPC.

400

TaskConflict

The eip operate too frequent, TaskConflict.

Operations are too frequent and tasks conflict with each other.

400

InvalidBindingStatus

The eip binding status invalid.

The EIP is in an invalid state.

400

BIND\_INSTANCE\_HAVE\_PORTMAP\_OR\_BIND\_EIP

The instance may have portMap or already bind eip.

The ECS instance already has a port forwarding rule (DNAT). Delete the corresponding port forwarding rule before performing the operation.

400

EIP\_CAN\_NOT\_ASSOCIATE\_WITH\_PUBLIC\_IP

instance already bind natpublicip,cannot bind eip.

\-

400

BIND\_INSTANCE\_OWENER\_ERROR

Cannot operate the eip.

You are unauthorized to manage the specified EIP.

400

NATGATEWAY\_FINANCIALLOCKED

The NatGateway has expire, cannot do bind operation.

\-

400

InvalidParameter.InstanceTypeNotSupport

The specified instance type is not support.

\-

400

QuotaExceeded.NumberOfTrafficEip

The number of traffic eip on natgw exceed limitation.

\-

400

QuotaExceeded.NumberOfEip

Binded eip Quota exceed on this NatGw.

The number of EIPs associated with the NAT gateway exceeds the upper limit.

400

Forbidden.EipCanNotBindGatgw

Eip can not bind on natgw.

\-

400

InvalidAction.Denied

Action is denied due to unfinished Eip configuration modification.

The EIP configurations are not complete and the operation is denied.

400

InstanceType.NotSupport

The instance type is invalid.

\-

400

InvalidParams.NotFound

instance not found

The specified instance does not exist.

400

BindInstance.NotSupported

bind instance type %s is not supported.

\-

400

Forbidden.InstanceBandwidthNotZero

Eip can not bind with instance when it's bandwidth is not zero.

\-

400

INSTANCE\_TYPE\_NOT\_SUPPORT

The instance type is invalid.

\-

400

ServerRegion.Invalid

Eip bind remote server region invalid.

\-

400

Eni.Attached

The eni should be detached from ecs when associating with direct eip.

If the ENI is associated with an EIP in cut-through mode, you must disassociate the ENI from the ECS instance.

400

Eni.HasSubIp

Eni has sub ip can not bind direct eip.

\-

400

Invalid.DirectEip.BindType

The direct eip can be only associated with eni.

\-

400

InvalidStatus.EcsStatusNotSupport

The special instance status is not support operate

\-

400

Invalid.Function.NotSupported

Multi-IP function is under test, the region or uid is not supported.

\-

400

InvalidStatus.EniStatusNotSupport

%s

\-

400

InvalidParameter.EniInstanceId

%s

\-

400

InvalidNexthop.DirectEni

The direct Eni cannot be nexthop.

An ENI in cut-through mode cannot be specified as a next hop.

400

Mode.Conflict

The eni can bind only one mode of eip.

\-

400

Mode.NotSupport

The user cannot use multi direct eip.

\-

400

QuotaExceed.MultiBindedEip

The number of multi binded eip is over limit.

the number of multi-passthrough mode eips that can be bound exceeds the limit.

400

InvalidEIPStatus.BizDisabled

The EIP has been locked.

The error message returned because the EIP is locked.

400

OperationFailed.EniSubIp

Eni has sub ip can not bind direct eip.

\-

400

InvalidEip.EipQuotaExceeded

The specified eni assigned eip is more than privateIp.

\-

400

OperationFailed.QueryCommodityInfo

Operation failed because quey commodity info error.

\-

400

OperationUnsupported.MultiIp

Multi ip function is not support.

\-

400

InvalidNicOrVm.NotFound

Bind nic or vm not exist.

The bound NIC or VM does not exist.

400

OperationUnsupported.EipBindModel

The instance type of ecs does not support MULTI\_BINDED model Eip.

\-

400

IncorrectStatus.NatGateway

%s

\-

400

EipBindRemote.BackendRegionMustBeSingle

eip bind remote instance, backend region must be single

\-

400

InvalidParameter.BindingInstanceRegion

The specified BindingInstanceRegion is not supported.

\-

400

OperationFailed.HavipBoundPortmap

%s

\-

400

IllegalParam.Mode

%s

\-

400

InvalidStatus.NotAllow

Bind instance status invalid

The status of the associated instance is invalid.

400

InvalidInstance.NotExist

Bind instance data not exist

\-

400

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId not exist.

\-

400

ResourceQueryError

The specified resource is queried error.

An error occurred while querying the specified resource.

400

InvalidStatus.InstanceHasBandWidth

The specified instance bandwidth invalid.

\-

400

OperationDenied.CloudBoxResourceExist

The operation is not allowed because there are resources related to the cloud box in VPC.

The operation is not allowed because CloudBox-related resources exist in the VPC.

400

OperationDenied.CloudBoxVSwitchExist

The operation is not allowed because a cloud box type vSwitch exists in VPC.

The operation is not allowed because vSwitches of the CloudBox type exist in the VPC.

400

OperationDenied.NoAvailablePrivateIp

The operation is failed because of vSwitch has not availalbe private ip

The vSwitch does not have sufficient private IP addresses.

400

UnsupportedRegion

%s

\-

400

ResourceAlreadyAssociated.IpAddress

%s

\-

400

OperationFailed.Ipv4GatewayNotOpenedInVpc

The operation is failed because Ipv4Gateway is not opened in Vpc.

The error message returned because the VPC does not have IPv4 gateways enabled and the IP address failed to be associated with the EIP.

400

OperationFailed.Ipv4GatewayNotActivatedInVpc

The operation is failed because Ipv4Gateway is not activated in Vpc.

\-

400

OperationDenied.L2EipBindIpAddress

%s

\-

400

Forbidden

The eip instance owner error

The EIP does not belong to your account. Check whether you are authorized to perform the operation on the EIP.

400

Forbidden.FinancialLocked

The ip business status is invalid.

The error message returned because the instance has overdue payments.

400

UnsupportedFeature.EipBindIpAddress

The feature of EipBindIpAddress is not supported.

The error message returned because the EIP does not support the IpAddress parameter.

400

OperationFailed.InstanceNotExist

The ECS instance does not exist, or is not a VPC VM.

The EIP failed to be associated with the ECS instance because the ECS instance does not exist or is not a VPC virtual machine.

400

OperationDenied.Ipv4GatewayExist

The operation is not allowed because of Ipv4GatewayExist.

The EIP failed to be associated because IPv4 gateways exist in the VPC.

400

OperationFailed.EipBindModeConflict

Eips can not bind Eni with NAT mode and MULTI\_BINDED mode at the same time.

The error message returned because you cannot associate an EIP with an ENI in NAT mode and multi-EIP-to-ENI mode at the same time.

400

OperationFailed.EcsMigrating

The operation is failed because of ECS is migrating.

The error message returned because the ECS instance is being migrated.

400

OperationFailed.IpPrefixConflict

The operation failed due to the IP prefix of the ENI.

The operation conflicts with the IP address prefix of the ENI.

400

UnsupportedFeature.EipBindPrefixIp

The feature of EipBindPrefixIp is not supported.

You cannot associate an EIP with a prefix list in the current region.

400

OperationDenied.UnsupportedEipBindMode

The operation is not supported for the NAT gateway due to its EIP binding mode.

The operation is not supported by the EIP binding mode of the NAT gateway.

400

OperationDenied.Unauthorized

The operation is not allowed because the user is not in the whitelist.

The operation is not allowed because you are not in the whitelist.

400

OperationFailed.SystemBusy

Operation failed because system is busy.

The error message returned because the system is busy. Try again later.

404

InvalidAllocationId.NotFound

Specified allocation ID is not found.

The error message returned because the specified EIP does not exist. Check whether the value of the parameter is valid.

404

InvalidInstanId.NotFound

Specified instance does not exist.

The specified instance does not exist.

404

InvalidRegionId.NotFound

Specified value of InstanceRegionId is not supported.

\-

404

InvalidAllocationId.NotFound

Specified allocation ID is not found

The specified EIP does not exist. Check whether the specified value is valid.

404

Forbidden.RegionNotFound

Specified instance is not found during access authentication.

The error message returned because the region is not supported.

404

OperationDenied.VpcIpv4GatewayEnabled

The operation is not allowed because of the VPC of the NAT gateway has opened IPv4 Gateway.

IPv4 gateways are enabled for the VPC where the NAT gateway resides and the operation is denied.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request failed due to a temporary server error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2024-11-18#workbench-doc-change-demo)

2024-09-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2024-09-25#workbench-doc-change-demo)

2023-12-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2023-12-13#workbench-doc-change-demo)

2023-08-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2023-08-24#workbench-doc-change-demo)

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2023-06-26#workbench-doc-change-demo)

2023-03-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AssociateEipAddress?updateTime=2023-03-23#workbench-doc-change-demo)
