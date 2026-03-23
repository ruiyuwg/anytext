Call the RoutePrivateZoneInCenToVpc operation to configure the PrivateZone service.

## Operation description

Alibaba Cloud DNS PrivateZone is a private Domain Name System (DNS) resolution and management service that is based on a Virtual Private Cloud (VPC). After a virtual border router (VBR) instance or a Cloud Connect Network (CCN) instance is attached to a Cloud Enterprise Network (CEN) instance, the associated on-premises network can access the PrivateZone service through the CEN instance.

-   An on-premises network that is associated with a VBR or CCN instance can access the PrivateZone service only in the same region.
    
    For example, if the PrivateZone service is in the China (Beijing) region, only on-premises networks that are associated with VBR instances in the China (Beijing) region or with CCN instances in the Chinese mainland can access the PrivateZone service.
    
-   The **RoutePrivateZoneInCenToVpc** operation is asynchronous. After a request is sent, the system returns a **RequestId**. The configuration is then added in the background. You can call the **DescribeCenPrivateZoneRoutes** operation to query the status of the PrivateZone service.
    
    -   If the PrivateZone service is in the **Creating** state, the configuration is being added. In this state, you can only query the configuration and cannot perform other operations.
        
    -   If the PrivateZone service is in the **Active** state, the configuration is complete.
        
    -   If the PrivateZone service is in the **Failed** state, the configuration failed.
        

#### Prerequisites

Before you call the **RoutePrivateZoneInCenToVpc** operation, make sure that the following conditions are met:

-   The PrivateZone service is deployed. For more information, see [Quick Start for Alibaba Cloud DNS PrivateZone](/help/en/privatezone/latest/subscribe-service).
    
-   The VPC instance associated with the PrivateZone service and the VBR or CCN instance in the access region are attached to the same CEN instance. For more information, see [AttachCenChildInstance](/help/en/cen/developer-reference/api-attachcenchildinstance).
    
-   If an on-premises network connects to Alibaba Cloud through a CCN instance, and the CCN, VPC, and CEN instances belong to different accounts, the CCN instance must be authorized first. For more information, see [Cloud Connect Network authorization](/help/en/cen/user-guide/grant-permissions-to-ccn).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/RoutePrivateZoneInCenToVpc)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/RoutePrivateZoneInCenToVpc)

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

cen:RoutePrivateZoneInCenToVpc

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

CenId

string

Yes

The ID of the CEN instance.

cen-7qthudw0ll6jmc\*\*\*\*

AccessRegionId

string

Yes

The ID of the region from which the PrivateZone service is accessed.

The access region is the region from which the PrivateZone service is accessed.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

HostRegionId

string

Yes

The ID of the region where the PrivateZone service is located.

cn-hangzhou

HostVpcId

string

Yes

The ID of the VPC instance that is associated with the PrivateZone service.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

C0245BEF-52AC-44A8-A776-EF96FD26A5CA

## Examples

Success response

`JSON` format

```
{
  "RequestId": "C0245BEF-52AC-44A8-A776-EF96FD26A5CA\t"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationUnsupported.CrossRegionNotSupport

Operation Failed. Host region Id is not equal to access region Id, VPC or VBR not support cross region privatezone service.

The host region ID is different from the service region ID. The VPC or VBR does not support PrivateZone across regions.

400

Forbidden.PrivatezoneServiceNotAuthorize

Privatezone service not to grant authorization.

The error message returned because PrivateZone does not have the required permissions.

400

ParameterIllegal.AccessRegionIdNoCCN

Parameter Access RegionId illegal.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

403

InvalidOperation.PvtzNotAssociatedWithVpc

Privatezone not associated with the specified vpc.

The error message returned because PrivateZone is not associated with the specified VPC.

409

InvalidOperation.PrivatezoneRouteExisted

Privatezone routes already existed.

The error message returned because the PrivateZone route already exists.

409

InvalidOperation.VpcNotAttachedToCen

Vpc not attached to cen.

The error message returned because the specified VPC is not attached to a CEN instance.

409

InvalidOperation.UnmatchRouteInVpcRegion

Operation Failed.Unmatch route in vpc region.

The VPC routes do not match the match conditions.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/RoutePrivateZoneInCenToVpc#workbench-doc-change-demo) for a complete list.
