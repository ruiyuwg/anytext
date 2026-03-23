Attaches virtual private clouds (VPCs) that you want to connect to a transit router. After you attach the VPCs to the same transit router, the VPCs can communicate with each other.

## Operation description

-   You can use the following methods to create a VPC connection from an Enterprise Edition transit router:
    
    -   If an Enterprise Edition transit router is already created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **TransitRouterId**, and **RegionId** parameters.
        
    -   If no Enterprise Edition transit router is created in the region where you want to create a VPC connection, configure the **VpcId**, **ZoneMappings.N.VSwitchId**, **ZoneMappings.N.ZoneId**, **CenId**, and **RegionId** parameters. Then, the system automatically creates an Enterprise Edition transit router in the specified region.
        
-   **CreateTransitRouterVpcAttachment** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListTransitRouterVpcAttachments](/help/en/cen/developer-reference/api-listtransitroutervpcattachments) operation to query the status of a VPC connection.
    
    -   If the VPC connection is in the **Attaching** state, the VPC connection is being created. You can query the VPC connection but cannot perform other operations.
        
    -   If the VPC connection is in the **Attached** state, the VPC connection is created.
        
-   By default, route learning and associated forwarding are disabled between transit router route tables and VPC connections.
    

### [](#)Prerequisites

Before you call this operation, make sure that the following requirements are met:

-   The VPC in the zones of the Enterprise Edition transit router contains at least one vSwitch. Each vSwitch must have at least one idle IP address. For more information, see [Regions and zones supported by Enterprise Edition transit routers](/help/en/cen/product-overview/what-is-cen/).
    
-   To connect to a network instance that belongs to another Alibaba Cloud account, you must first acquire the permissions from the account. For more information, see [Acquire permissions to connect to a network instance that belongs to another account](/help/en/cen/user-guide/grant-permissions-on-a-network-instance-that-belongs-to-another-account).
    
-   VPC connections incur fees. Make sure that you understand the billing rules of VPC connections before you create a VPC connection. For more information, see [Billing](/help/en/cen/product-overview/billing-rules).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterVpcAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterVpcAttachment)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:CreateTransitRouterVpcAttachment

create

CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/{#TransitRouterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

CenId

string

No

The ID of the Cloud Enterprise Network (CEN) instance.

cen-j3jzhw1zpau2km\*\*\*\*

TransitRouterId

string

No

The ID of the Enterprise Edition transit router.

tr-bp1su1ytdxtataupl\*\*\*\*

RegionId

string

No

The ID of the region where the VPC is deployed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to query the most recent region list.

cn-hangzhou

TransitRouterAttachmentName

string

No

The name of the VPC connection.

The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

testname

TransitRouterAttachmentDescription

string

No

The description of the VPC connection.

The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

testname

VpcId

string

Yes

The VPC ID.

vpc-bp1kbjcre9vtsebo1\*\*\*\*

VpcOwnerId

integer

No

The ID of the Alibaba Cloud account to which the VPC belongs. The default value is the ID of the current Alibaba Cloud account.

**Note**

If the network instance and CEN instance belong to different Alibaba Cloud accounts, this parameter is required.

1250123456123456

ChargeType

string

No

The billing method. The default value is **POSTPAY**, which specifies the pay-as-you-go billing method.

POSTPAY

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **false** (default): performs a dry run and sends the request.
    
-   **true**: performs a dry run. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    

false

ZoneMappings

array<object>

Yes

A zone that supports Enterprise Edition transit routers.

You can specify at most 10 zones.

object

No

The zone that supports Enterprise Edition transit routers and the information about the vSwitch in the zone.

VSwitchId

string

Yes

A vSwitch that is deployed in the zone that supports Enterprise Edition transit routers.

You can specify vSwitches for at most 10 zones in each call.

vsw-bp1a214sbus8z3b54\*\*\*\*

ZoneId

string

Yes

The ID of the zone that supports Enterprise Edition transit routers.

You can call the [DescribeZones](/help/en/vpc/api-describezones) operation to query the most recent zone list.

You can specify at most 10 zones in each call.

cn-hangzhou-h

AutoPublishRouteEnabled

boolean

No

Specifies whether to enable the Enterprise Edition transit router to automatically advertise routes to VPCs. Valid values:

-   **false:** (default)
    
-   **true**
    

true

TransitRouterVPCAttachmentOptions

object

No

Feature configurations of the VPC connection.

string

No

The feature of the VPC connection.

**ipv6Support**: specifies whether to enable IPv6.

-   **enable**: enables IPv6.
    
-   **disable** (default): disables IPv6.
    

**Note**

Before you enable IPv6 for a VPC connection, make sure that IPv6 is enabled for the VPC and the vSwitches of the VPC. For more information, see [AllocateVpcIpv6Cidr](/help/en/vpc/developer-reference/api-vpc-2016-04-28-allocatevpcipv6cidr) and [CreateVSwitchCidrReservation](/help/en/vpc/developer-reference/api-vpc-2016-04-28-createvswitchcidrreservation).

disable

Tag

array<object>

No

The information about the tags.

You can specify at most 20 tags in each call.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

You can specify at most 20 tag keys.

tagtest

Value

string

No

The tag value.

The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.

tagtest

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

TransitRouterAttachmentId

string

The ID of the VPC connection.

tr-attach-ia340z7xis7t5s\*\*\*\*

RequestId

string

The ID of the request.

C087A369-82B9-43EF-91F4-4B63A9C6E6B6

## Examples

Success response

`JSON` format

```
{
  "TransitRouterAttachmentId": "tr-attach-ia340z7xis7t5s****",
  "RequestId": "C087A369-82B9-43EF-91F4-4B63A9C6E6B6"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationUnsupported.TransitRouterRegionId

The specified TransitRouterRegion does not support the operation.

400

NoPermission.AliyunServiceRoleForCEN

You are not authorized to create the service linked role. Role Name: AliyunServiceRoleForCEN. Service Name: cen.aliyuncs.com. Make sure that the user has been granted the ram:CreateServiceLinkedRole permission.

The error message because you do not have the permissions to create the service-linked role whose role name is AliyunServiceRoleForCEN and service name is cen.aliyuncs.com. You must acquire the ram:CreateServiceLinkedRole permission before you can create the service-linked role.

400

IllegalParam.RegionId

The Specified Parameter RegionId is illegal

The error message returned because the specified region is invalid.

400

MissingParam.CenIdOrRegionId

Either CenId or RegionId must be specified.

The error message returned because the CenId or RegionId parameter is not set.

400

IllegalParam.ZoneId

The specified ZoneId is illegal.

The error message returned because the specified zone is invalid.

400

IllegalParam.ChargeType

The specified ChargeType is illegal.

The error message returned because the specified billing method is invalid.

400

InvalidTransitRouterId.NotFound

The specified TransitRouterId is not found.

The error message returned because the specified transit router does not exist.

400

IncorrectStatus.VpcResource

The resource is not in a valid state for the attachment operation.

The error message returned because this operation is not supported when the specified VPC is in an unstable state. Wait until all operations related to the VPC are completed.

400

IncorrectStatus.Vpc

The resource is not in a valid state for the attachment operation.

The error message returned because the status of the VPC does not support this operation. Try again later.

400

IncorrectStatus.VpcOrVswitch

The Vpc Or Vswith is not in a valid state for the attachment operation.

The error message returned because the status of the VPC or vSwitch does not support this operation. Try again later.

400

OperationNotSupport.VpcAutoRoutesPublish

Auto publish vpc routes is not supported in this region.

The error message returned because automatic route advertising for VPCs is not supported in the specified region.

400

InvalidOperation.VpnAssociated

The operation is not supported because the VPC is associated with VPN.

The error message returned because the specified VPC is associated with a VPN.

400

Forbbiden.TransitRouterServiceNotOpen

The user has not open transit router service.

The error message returned because the transit router is disabled. Enable the transit router and try again.

400

IllegalParam.ZoneMappings

The Specified Parameter ZoneMappings is illegal

The error message returned because the specified zone mappings (ZoneMappings) is invalid.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

InvalidCenId.NotFound

CenId is not found.

The error message returned because the specified CEN instance does not exist.

400

IllegalParam.VSwitchId

VSwitchId is illegal.

The error message returned because the specified vSwitch ID is invalid.

400

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

OperationUnsupported.CenFullLevel

CEN full level does not support TransitRouter

The error message returned because CEN instances of the Full type do not support Enterprise Edition transit routers.

400

IllegalParam.ServiceMode

ServiceMode is illegal.

The error message returned because the specified service mode is invalid.

400

QuotaFull.ChildInstanceRelatedCen

The childinstance has exceed the quota of the times that a childinstance can be attached as an attachment.

The error message returned because the number of CEN instances to which the instance is attached has reached the upper limit. You cannot attach the instance to more CEN instances.

400

OperationUnsupported.CloudBoxVswNotSupport

Cloud Box vsw does not support.

The error message returned because the instance cannot be connected to the CloudBox vSwitch.

400

IncorrectStatus.TransitRouter

The status of TransitRouter is incorrect.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

Duplicated.ZoneMapping

The parameter ZoneMapping is duplicated.

The error message returned because the zone mapping contains duplicate routes.

400

QuotaExceeded.CenQuotaVpcAttachPerTransitRouter

The maximum number of VPC attachment per Transit Router is exceeded.

The error message returned because the specified number of VPCs to be attache to the transit router exceeds the upper limit.

400

IncorrectStatus.VpcRouteTable

The VPC route table is not in a desired state.

The error message returned because the VPC route table is in an unstable state. Try again later.

400

InvalidStatus.VpcAttachedFullModeCen

The VPC has been attached to another CEN instance whose protection level is FULL.

The error message returned because the specified VPC is already attached to a CEN instance whose protection level is FULL. The VPC cannot be attached to other CEN instances.

400

Forbbiden.AttachChildInstanceAcrossBid

VPCs that belong to another BID cannot be associated. You need to apply for cross-BID attaching.

The error message returned because you cannot associate with VPCs that belong to another BID.

400

InvalidOperation.VpcAutoRoutesPublishInOtherCEN

The specified VPC already has its routes synchronized with another CEN instance.

The error message returned because this operation is not supported when route synchronization is enabled between the current VPC and another CEN instance.

400

QuotaExceeded.VpcAutoRoutesPublishPerTransitRouter

The number of VPCs that have route synchronization enabled has reached the upper limit.

The error message returned because the number of VPCs that have route synchronization enabled has reached the upper limit.

400

InsufficientIpAddr.vsw

Insufficient available IP addresses in the vSwitch.

The error message returned because the number of available IP addresses in the vSwitch is insufficient.

400

Forbidden.ResourceOwnerTransitRouterServiceNotOpen

The resource owner user has not opened transit router service.

The transit router service for the resource owner's account is not currently opened. Please inform them to open the transit router service and then try again.

400

IllegalParam.TransitRouterRegionId

TransitRouterRegionId is illegal.

The error message returned because the specified transit router region ID (TransitRouterRegionId) is invalid.

400

InvalidTransitRouterMode.NeedUpgrade

TransitRouter need to upgrade.

The error message returned because the specified transit router mode is not supported.

400

IllegalParam.Ipv6Support

Ipv6Support is illegal. Valid Values are \[enable, disable\].

The Ipv6Support value of the request parameter is invalid. The valid value is enable or disable.

400

OperationFailed.VSwitchNotFound

The specified vswitch not found.

The specified vswitch not found.

400

OperationFailed.VSwitchIpv6CidrNotAllocated

The specified vswitch does not have IPv6 address allocated.

The specified vswitch does not have IPv6 address allocated.

400

Forbidden.ResourceOwnerTransitRouterServiceExpired

The transit router service of the account to which the resource belongs has been suspended due to arrears. Please notify the other party to renew the service and try again.

The transit router service of the account to which the resource belongs has been suspended. Please notify the other party to renew the service and try again.

400

Forbidden.TransitRouterServiceExpired

The transit router service is out of service.

The transit router service has been suspended due for payment. Please renew the service and try again.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InvalidParameter.ResourceType

The specified parameter ResourceType is invalid.

400

ParamExclusive.TransitRouterVPCAttachmentOptionsAndOptions

When creating or modifying a VPC attachment, the input parameter TransitRouterVPCAttachmentOptions and Options cannot be used at the same time.

When creating or modifying a VPC attachment, the input parameter TransitRouterVPCAttachmentOptions and Options cannot be used at the same time.

400

InvalidParameter.ApplianceModeSupport

The specified parameter ApplianceModeSupport is invalid.

The parameter ApplianceModeSupport entered is illegal.

400

InvalidParameter.Ipv6Support

The specified parameter Ipv6Support is invalid.

The parameter Ipv6Support entered is illegal.

400

INVALID\_OPERATION\_RESOURCE\_NOT\_SUPPORT\_APPLIANCE\_MODE

Only VPC attachment support appliance mode.

Only VPC attachment support appliance mode.

404

InvalidVSwitchId.NotFound

The specified VSwitchId is not found.

The error message returned because the specified vSwitch ID does not exist.

409

InvalidOperation.CenInstanceStatus

The CEN instance is not in a valid state for the operation.

The error message returned because the status of the CEN instance does not support this operation.

409

IncorrectStatus.VpcSwitch

The resource is not in a valid state for the attachment operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouterVpcAttachment#workbench-doc-change-demo) for a complete list.
