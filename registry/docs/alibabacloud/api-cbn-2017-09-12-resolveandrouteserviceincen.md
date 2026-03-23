Connects an on-premises network to a cloud service.

## Operation description

Cloud services refer to Alibaba Cloud services that use the 100.64.0.0/10 CIDR block to provide services. These cloud services include Object Storage Service (OSS), Simple Log Service (SLS), and Data Transmission Service (DTS). If your on-premises network needs to access a cloud service, you must attach the virtual border router (VBR) or Cloud Connect Network (CCN) instance that is connected to your on-premises network to a Cloud Enterprise Network (CEN) instance. In addition, you must attach a virtual private cloud (VPC) that is deployed in the same region as the cloud service to the CEN instance. This way, your on-premises network can connect to the VPC that is deployed in the same region as the cloud service and access the cloud service through the VPC.

-   This operation is supported only by Basic Edition transit routers. An on-premises network associated with a VBR can use CEN to access only a cloud service that is deployed in the same region.
    
    For example, if cloud services are deployed in the China (Beijing) region, only on-premises networks connected to VBRs in the China (Beijing) region can access the cloud services.
    
-   **ResolveAndRouteServiceInCen** is an asynchronous operation. After a request is sent, the system returns a **request ID** and runs the task in the background. You can call **DescribeRouteServicesInCen** to query the status of a cloud service.
    
    -   If the cloud service is in the **Creating** state, the connection to the cloud service is being created. In this case, you can query the cloud service but cannot perform other operations.
        
    -   If the cloud service is in the **Active** state, the connection to the cloud service is created.
        
    -   If the cloud service is in the **Failed** state, the connection to the cloud service failed.
        

### [](#)Prerequisites

Before you call this operation, make sure that the following conditions are met:

-   The VBR or CCN instance to which your on-premises network is connected is attached to a CEN instance.
    
-   A VPC that is deployed in the same region as the cloud service is attached to the CEN instance. For more information, see [AttachCenChildInstance](/help/en/cen/developer-reference/api-attachcenchildinstance).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ResolveAndRouteServiceInCen)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ResolveAndRouteServiceInCen)

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

cen:ResolveAndRouteServiceInCen

create

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

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

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

02fb3da4\*\*\*\*

CenId

string

Yes

The ID of the CEN instance.

cen-ckwa2hhmuislse\*\*\*\*

Host

string

Yes

The IP addresses or CIDR blocks of the cloud service.

**Note**

In most cases, multiple IP addresses or CIDR blocks are assigned to a cloud service. We recommend that you call this operation multiple times to add all IP addresses and CIDR blocks of the cloud service.

100.118.28.0/24

HostRegionId

string

Yes

The ID of the region in which the cloud service is deployed.

cn-hangzhou

HostVpcId

string

Yes

The ID of the VPC that is associated with the cloud service.

vpc-o6woh5s494zueq40v\*\*\*\*

Description

string

No

The description of the cloud service.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.

descname

AccessRegionIds

array

Yes

The IDs of the regions where the cloud service is accessed.

cn-hangzhou

string

No

The ID of the region where the cloud service is accessed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to query the most recent region list.

cn-hangzhou

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

C0245BEF-52AC-44A8-A776-EF96FD26A5CA

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C0245BEF-52AC-44A8-A776-EF96FD26A5CA"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ParameterIllegal.Ipv6CloudRouteCidrNotAllow

Parameter Host not in valid ipv6 cidr.

The error message returned because the specified cloud service routes do not support IPv6.

400

ParameterIllegal.AccessRegionId

Parameter Access RegionId illegal.

The error message returned because the specified access region ID (AccessRegionId) is invalid.

400

ParameterIllegal.CloudRouteHost

Parameter Host is not valid.

The error message returned because the specified cloud route host (CloudRouteHost) is invalid.

400

ParameterIllegal.ClouteRouteNotSupportIpv6

Parameter Host not support IPv6

The error message returned because the specified cloud service routes do not support IPv6.

400

ParameterIllegal.ClouteRouteCidrNotAllow

Parameter Host not in 100.64.0.0/10

The error message returned because the specified cloud service CIDR block is invalid.

400

CloudRoute.Exist

The Specified Cloud Route already Exists

The error message returned because the cloud service route already exists.

400

ParameterIllegal.Host

Parameter Host does not support domain.

400

CloudRoute.Conflict

The Specified Cloud Route Conflicts.

The error message returned because the routes of the cloud services conflict with each other.

400

CloudRoute.VpcNotAttached

The Specified Vpc instance is not attached to CEN.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

ParameterIllegal.AccessRegionIdNoCCN

Parameter Access RegionId illegal.

The error message returned because the specified access region ID (AccessRegionId) is invalid.

400

IncorrectStatus.TransitRouter

The resource is not in a valid state for the operation.

The CEN TR instance is not in a valid state for the operation. Please try again later.

400

InvalidOperation.InstanceNotSupportIPv6Route

IPv6 routing has not been enabled for the CEN instance.

IPv6 routing is disabled for CEN.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ResolveAndRouteServiceInCen#workbench-doc-change-demo) for a complete list.
