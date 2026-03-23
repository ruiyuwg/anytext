You can call the CreateTransitRouter operation to create an Enterprise Edition transit router instance.

## Operation description

-   You can call the **CreateTransitRouter** operation to create an Enterprise Edition transit router instance. Enterprise Edition transit routers are available only in some regions. For more information about the supported regions, see [What is Cloud Enterprise Network?](/help/en/cen/product-overview/what-is-cen/).
    
-   **CreateTransitRouter** is an asynchronous operation. After you send a request, the system returns an Enterprise Edition transit router instance ID, but the instance is still being created in the background. You can call the [ListTransitRouters](/help/en/cen/developer-reference/api-listtransitrouters) operation to query the status of the Enterprise Edition transit router instance.
    -   If an Enterprise Edition transit router instance is in the **Creating** state, you can only query the instance and cannot perform other operations.
        
    -   If an Enterprise Edition transit router instance is in the **Active** state, the instance has been created.
        
-   You can create only one transit router instance in each region for a CEN instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouter)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouter)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:CreateTransitRouter

create

CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/*`

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

Generate a client token to make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

CenId

string

Yes

The ID of the CEN instance.

cen-j3jzhw1zpau2km\*\*\*\*

RegionId

string

Yes

The ID of the region where the Enterprise Edition transit router is deployed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to query the most recent region list.

cn-zhangjiakou

TransitRouterName

string

No

The name of the Enterprise Edition transit router instance.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

testname

TransitRouterDescription

string

No

The description of the Enterprise Edition transit router instance.

The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.

testdesc

DryRun

boolean

No

Specifies whether to perform a dry run. The dry run checks permissions and whether the required parameters are specified. Valid values:

-   **false** (default): sends the request and creates the instance after the request passes the check.
    
-   **true**: sends a dry run request to check the parameters without creating the instance. The system checks the required parameters, request format, and permissions. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    

false

SupportMulticast

boolean

No

Specifies whether to enable the multicast feature for the Enterprise Edition transit router. Valid values:

-   **false** (default): disables the multicast feature.
    
-   **true**: enables the multicast feature.
    

The multicast feature is supported only in some regions. You can call the [ListTransitRouterAvailableResource](/help/en/cen/developer-reference/api-listtransitrouteravailableresource) operation to query the regions that support multicast.

false

TransitRouterCidrList

array<object>

No

The CIDR blocks of the transit router.

object

No

The CIDR blocks of the transit router.

You can add at most five CIDR blocks. For more information about CIDR blocks of transit routers, see [CIDR blocks of transit routers](/help/en/cen/user-guide/transit-router-cidr-blocks).

**Note**

Only Enterprise Edition transit routers support CIDR blocks.

Cidr

string

No

The CIDR block of the transit router.

192.168.10.0/24

Name

string

No

The name of the CIDR block.

The name must be 1 to 128 characters in length.

nametest

Description

string

No

The description of the CIDR block.

The description must be 1 to 256 characters in length.

desctest

PublishCidrRoute

boolean

No

Specifies whether to automatically advertise the route of the CIDR block to the route table of the transit router.

-   **true** (default): yes.
    
    If you select this option, after you create a VPN connection that uses a private gateway and create a route learning correlation for the VPN connection, the system automatically adds the following route to the route table of the transit router with which the VPN connection is associated:
    
    A blackhole route whose destination CIDR block is the CIDR block of the transit router. The CIDR block of the transit router refers to the CIDR block from which a gateway IP address is allocated to the IPsec connection.
    
    This blackhole route is advertised only to the route tables of virtual border router (VBR) instances that are connected to the transit router.
    
-   **false**: no.
    

true

Tag

array<object>

No

The tag.

object

No

The tag.

You can specify at most 20 tags.

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://` .

You can specify at most 20 tag keys.

tagtest

Value

string

No

The tag value.

The tag value can be empty or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://` .

Each tag key must have a unique tag value. You can specify at most 20 tag values.

TagValue

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

TransitRouterId

string

The ID of the Enterprise Edition transit router instance.

tr-uf6llz2286805i44g\*\*\*\*

RequestId

string

The request ID.

404DA7EC-F495-44B5-B543-6EDCDF90F3D1

## Examples

Success response

`JSON` format

```
{
  "TransitRouterId": "tr-uf6llz2286805i44g****",
  "RequestId": "404DA7EC-F495-44B5-B543-6EDCDF90F3D1"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationUnsupported.RegionId

The specified Region is not supported.

The error message returned because this operation is not supported in the specified region.

400

InstanceExist.TransitRouterInstance

The instance already exists.

The error message returned because a transit router with the same ID already exists in the current region. Transit router IDs in the same region must be unique.

400

Forbbiden.TransitRouterServiceNotOpen

The user has not open transit router service.

The error message returned because the transit router is disabled. Enable the transit router and try again.

400

OperationUnsupported.SupportMulticast

The multicast is not supported in the specified region.

The error message returned because multicast is not supported in the specified region.

400

OperationUnsupported.CenFullLevel

CEN full level does not support TransitRouter.

400

IllegalParam.Cidr

Cidr is illegal.

The error message returned because the specified CIDR block is invalid.

400

Illegal.TrType

The TransitRouter type is illegal.

The error message returned because the specified type of transit router does not support this operation.

400

OperationUnsupported.TransitRouterCidrList

The TransitRouterCidrList is not support in the specified Region.

The error message returned because this operation is not supported in the specified region.

400

OperationFailed.CidrConflict

Operation is invalid because the cidr conflict.

The error message returned because the specified CIDR block conflicts with another one.

400

IllegalParam.Region

The specified region is invalid.

400

OverLappingExist.Cidr

The cidr overlapping exist.

The error message returned because CIDR overlapping is already enabled.

400

IllegalParam.ServiceMode

The specified ServiceMode is invalid.

The error message returned because the specified service mode is invalid.

400

ParamExclusive.ServiceModeAndSupportMulticast

ServiceMode and SupportMulticast is mutually exclusive.

The error message returned because transit routers in the current mode do not support multicast.

400

ParamExclusive.ServiceModeAndTransitRouterCidrList

ServiceMode and TransitRouterCidrList is mutually exclusive.

The error message returned because transit routers in the current mode do not support CIDR blocks.

400

OperationUnsupported.Tag

The Tag is not supported in the specified region.

The error message returned because transit routers in the current region do not support tags.

400

IllegalParam.SupportMulticast

Basic Transit router is not support multicast.

The error message returned because Basic Edition transit routers do not support multicast.

400

ParamExclusive.BasicAndPrimaryStandby

Basic and PrimaryStandby is mutually exclusive.

The error message returned because Basic Edition transit routers do not support the PrimaryStandby mode.

400

ParamExclusive.BasicAndMultiPrimary

Basic and MultiPrimary is mutually exclusive.

The error message returned because Basic Edition transit routers do not support the MultiPrimary mode.

400

IllegalParam.RegionId

The Specified Parameter RegionId is illegal.

The region specified in the parameter is invalid.

400

OperationFailed.PostPay95BwpNotAllowEnterpriseTr

Cbn with post pay 95 bandwidth package does not allow enterprise tr.

Cbn with post pay 95 bandwidth package does not allow enterprise tr.

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

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouter#workbench-doc-change-demo) for a complete list.
