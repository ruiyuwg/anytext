After network instances (VPC, VBR, IPsec connection) are connected to a transit router, you need to create an inter-region connection to enable communication between network instances in different regions. You can call the CreateTransitRouterPeerAttachment operation to create an inter-region connection for an Enterprise Edition transit router instance.

## Operation description

-   Enterprise Edition transit routers allow you to allocate bandwidth resources to inter-region connections using the following methods:
    
    -   **From bandwidth plan**:
        
        You must purchase a bandwidth plan and then allocate bandwidth resources from the plan to inter-region connections. For more information about how to purchase a bandwidth plan, see [CreateCenBandwidthPackage](/help/en/cen/developer-reference/api-10654e).
        
    -   **Pay-by-traffic**:
        
        You can set a maximum bandwidth value for an inter-region connection. You are then charged based on the amount of data transferred over the connection. For more information about billing, see [Inter-region traffic](/help/en/cdt/inter-region-data-transfers).
        
-   The **CreateTransitRouterPeerAttachment** operation is asynchronous. After you call this operation, the system returns an inter-region connection ID. However, the inter-region connection is not created immediately. The creation task runs in the background. You can call the **ListTransitRouterPeerAttachments** operation to query the status of the inter-region connection.
    
    -   When the inter-region connection is in the **Attaching** state, the connection is being created. In this state, you can only query the inter-region connection. You cannot perform other operations.
        
    -   When the inter-region connection is in the **Attached** state, the connection creation is complete.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterPeerAttachment)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterPeerAttachment)

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

cen:CreateTransitRouterPeerAttachment

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

The client token used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** is different for each API request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

CenId

string

No

The ID of the Cloud Enterprise Network (CEN) instance.

cen-j3jzhw1zpau2km\*\*\*\*

TransitRouterId

string

No

The ID of the local Enterprise Edition transit router instance.

tr-bp1su1ytdxtataupl\*\*\*\*

RegionId

string

No

The ID of the region where the local Enterprise Edition transit router instance is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query region IDs.

cn-hangzhou

TransitRouterAttachmentName

string

No

The name of the inter-region connection.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

testname

TransitRouterAttachmentDescription

string

No

The description of the inter-region connection.

The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.

testdesc

PeerTransitRouterId

string

Yes

The ID of the peer transit router instance.

tr-m5eq27g6bndum7e88\*\*\*\*

PeerTransitRouterRegionId

string

No

The ID of the region where the peer transit router instance is deployed.

cn-qingdao

AutoPublishRouteEnabled

boolean

No

Specifies whether to enable the local Enterprise Edition transit router to automatically advertise the routes of the inter-region connection to the peer transit router. Valid values:

-   **false** (default): no.
    
-   **true**: yes.
    

false

Bandwidth

integer

No

The bandwidth value of the inter-region connection. Unit: Mbps.

-   When **BandwidthType** is set to **BandwidthPackage**, this parameter specifies the bandwidth value that the inter-region connection can use.
    
-   When **BandwidthType** is set to **DataTransfer**, this parameter specifies the maximum bandwidth value of the inter-region connection.
    

2

CenBandwidthPackageId

string

No

The ID of the bandwidth plan that you want to associate with the inter-region connection.

**Note**

You do not need to configure this parameter when **BandwidthType** is set to **DataTransfer**.

cenbwp-3xrxupouolw5ou\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run to check information such as the permissions and instance status. Valid values:

-   **false** (default): sends a normal request. After the request passes the check, the system creates an inter-region connection.
    
-   **true**: sends a check request. The system checks the required parameters and request syntax. If the request fails the dry run, an error message is returned. If the request passes the dry run, a request ID is returned.
    

false

BandwidthType

string

No

The method that is used to allocate bandwidth to the inter-region connection. Valid values:

-   **BandwidthPackage**: allocates bandwidth from a bandwidth plan.
    
-   **DataTransfer**: does not allocate bandwidth to the inter-region connection and charges based on pay-by-traffic.
    

BandwidthPackage

Tag

array<object>

No

The tag information.

You can specify at most 20 tags in each call.

object

No

The tags.

Key

string

No

The key of the tag that you want to attach.

You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://` .

You can specify at most 20 tag keys in each call.

tag\_A1

Value

string

No

The value of the tag that you want to attach to the specified resource.

The tag value can be an empty string or a string of up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://` .

Each key-value pair must be unique. You can specify at most 20 tag values in each call.

value\_A1

DefaultLinkType

string

No

The default line type.

Valid values: Platinum and Gold. Default value: Gold.

You can set this parameter to Platinum only when the bandwidth allocation method is pay-by-traffic.

Gold

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

TransitRouterAttachmentId

string

The ID of the inter-region connection.

tr-attach-nwkiqfvw22qesz\*\*\*\*

RequestId

string

The request ID.

59422BF5-BAAD-4CFD-9019-9557BD3ACFA3

## Examples

Success response

`JSON` format

```
{
  "TransitRouterAttachmentId": "tr-attach-nwkiqfvw22qesz****",
  "RequestId": "59422BF5-BAAD-4CFD-9019-9557BD3ACFA3"
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

NoPermission.AliyunServiceRolePolicyForCEN

You are not authorized to create the service linked role. Role Name: AliyunServiceRolePolicyForCEN. Service Name: cen.aliyuncs.com. Make sure that the user has been granted the ram:CreateServiceLinkedRole permission.

The error message returned because you do not have the permissions to create the service-linked role whose role name is AliyunServiceRolePolicyForCEN and service name is cen.aliyuncs.com. You must acquire the ram:CreateServiceLinkedRole permission before you can create the service-linked role.

400

InvalidTransitRouterId.NotFound

TransitRouterId is not found.

The error message returned because the ID of the transit router does not exist.

400

IllegalParam.PeerTransitRouterId

PeerTransitRouterId is illegal.

The error message returned because the ID of the peer transit router is invalid.

400

OperationUnsupported.TransitRouterId

TransitRouterId is unsupported.

The error message returned because Basic Edition transit routers do not support the operation.

400

MissingParam.Bandwidth

The parameter Bandwidth is mandatory.

The error message returned because no bandwidth value is specified. You must specify a bandwidth value.

400

IllegalParam.Bandwidth

Bandwidth is illegal.

The error message returned because the specified bandwidth plan ID is invalid.

400

Forbbiden.TransitRouterServiceNotOpen

The user has not open transit router service.

The error message returned because the transit router is disabled. Enable the transit router and try again.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationUnsupported.BandwidthType

The specified BandwidthType does not support the operation.

The error message returned because this operation is not supported by the specified bandwidth type.

400

InvalidCenId.NotFound

CenId is not found.

The error message returned because the specified CEN instance does not exist.

400

IllegalParam.BandwidthType

BandwidthType is illegal.

The error message returned because the specified bandwidth plan type is invalid.

400

MissingParam.CenIdOrRegionId

Either CenId or RegionId must be specified.

The error message returned because the CenId or RegionId parameter is not set.

400

OperationUnsupported.BandwidthHS

This bandwidth limit can only be set in China-AsiaPacific-HS

400

OperationUnsupported.CenFullLevel

CEN full level does not support TransitRouter

The error message returned because CEN instances of the Full type do not support Enterprise Edition transit routers.

400

OperationUnsupported.CloudDataTransferService

CCN region not support cloud data transfer service.

The error message returned because the Cloud Data Transfer (CDT) service is not supported in the region of the CCN instance.

400

InvalidPeerTransitRouterId.NotFound

The specified PeerTransitRouterId is not found.

The error message returned because the specified peer transit router ID (PeerTransitRouterId) does not exist.

400

IllegalParam.RegionId

RegionId is illegal.

The error message returned because the specified region is invalid.

400

IllegalParam.PeerRegionId

PeerRegionId is illegal.

The error message returned because the specified peer region ID (PeerRegionId) is invalid.

400

IllegalParam.TransitRouterRegionId

TransitRouterRegionId is illegal.

The error message returned because the specified transit router region ID (TransitRouterRegionId) is invalid.

400

InvalidOperation.CenInstanceStatus

The CEN instance is not in a valid state for the operation.

400

IncorrectStatus.TransitRouter

The status of TransitRouter is incorrect.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

InvalidOperation.BwpNotAssociated

Operation is invalid because a bandwidth package corresponding to the geographic span is not associated.

The error message returned because this operation is not supported when no bandwidth plan is applied to the specified region.

400

InvalidOperation.BwpBusinessStatus

The CBN bandwidth package is not in a valid business state for the operation.

The error message returned because this operation is not supported when the specified bandwidth plan is in an unstable state.

400

IllegalParam.CenBandwidthPackageId

Parameter CenBandwidthPackageId is illegal.

The error message returned because the specified bandwidth plan ID (CenBandwidthPackageId) is invalid.

400

InvalidOperation.BwpBandwidthExceeded

Operation is invalid because the total bandwidth limit has exceeded that of the bandwidth package.

400

ParameterIllegal.CdtDefaultLinkTypeOnlySupportPlatinumOrGold

DataTransfer only support Platinum and Gold.

DataTransfer only support Platinum and Gold.

400

ParameterIllegal.BandwidthPackageDefaultLinkTypeOnlySupportGold

Cen bandwidthPackage only support Gold.

Cen bandwidthPackage only support Gold.

400

ParameterIllegal.CdtDefaultLinkTypeOnlySupportGold

CDT only support Gold when both transitrouters for cross regional connections are not all enterprise version.

CDT only support Gold when both transitrouters for cross regional connections are not all enterprise version.

400

OperationNotAllowed.DefaultLinkTypeOnlySupportGold

Operation is not allowed because this user can only set default link type to Gold.

This user can only set the default link type to Gold.

400

OperationInvalid.UserCanNotBuyCrossBorderBwp

According to the laws and regulations of the operator and mainland China, you are currently not eligible to purchase or renew a cross-border bandwidth package. Please contact online customer service or your business manager for consultation.

According to the laws and regulations of the operator and mainland China, you are currently not eligible to purchase or renew a cross-border bandwidth package. Please contact online customer service or your business manager for consultation.

400

OperationInvalid.IdentityRegistrationStatusNotSupport

Real name registration of enterprises required.

Since you have selected a certain region of "Mainland China" in the "Region" or "Opposite Region" , you must complete the enterprise real name registration before subscription. Please refer to the documentation on enterprise real name registration for details.

400

InvalidOperation.OnlyOneRegionSupportIpv6

Peer Attachment is only allowed when both regions support IPv6 or do not support IPv6 at all.

Peer Attachment is only allowed when both regions support IPv6 or do not support IPv6 at all.

400

InvalidOperation

Operation is invalid.

The error message returned because the operation is invalid.

400

Forbidden.ResourceOwnerTransitRouterServiceExpired

The transit router service of the account to which the resource belongs has been suspended due to arrears. Please notify the other party to renew the service and try again.

The transit router service of the account to which the resource belongs has been suspended. Please notify the other party to renew the service and try again.

400

Forbidden.TransitRouterServiceExpired

The transit router service is out of service.

The transit router service has been suspended due for payment. Please renew the service and try again.

400

OperationUnsupported.RegionId

The specified RegionId does not support the operation.

The error message returned because this operation is not supported in the specified region.

400

QuotaExceeded.Bandwidth

Bandwidth quota exceeded.

Bandwidth quota exceeded.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

InvalidParameter.PeerTransitRouterId

The specified parameter PeerTransitRouterId is invalid.

400

InvalidParameter.ResourceType

The specified parameter ResourceType is invalid.

400

ParameterIllegal.CdtDefaultLinkTypeOnlySupportUnderlaySilver

CDT only support UnderlaySilver when both transitrouters for cross regional connections are not all enterprise version.

CDT only support UnderlaySilver when both transitrouters for cross regional connections are not all enterprise version.

400

ParameterIllegal.DefaultLinkTypeOnlySupportUnderlaySilver

Cen bandwidthPackage only support UnderlaySilver.

When the bandwidth allocation method is bandwidth package, the default link type supports only silver (UnderlaySilver)

400

OperationNotAllowed.DefaultLinkTypeOnlySupportUnderlaySilver

This user can only set the default link type to UnderlaySilver.

This user can only set the default link type to UnderlaySilver.

400

OperationFailed.ValidateVbrInstanceFailedForLowLatencyCircuit

Operation failed when validate VBR instance for Low Latency Circuit.

Failed to verify the loaded VBR instance when creating a low latency link.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouterPeerAttachment#workbench-doc-change-demo) for a complete list.
