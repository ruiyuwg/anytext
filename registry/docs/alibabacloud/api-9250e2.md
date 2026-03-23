Detaches a network instance from a Cloud Enterprise Network (CEN) transit router.

## Operation description

The transit router must be a Basic Edition transit router.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DetachCenChildInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DetachCenChildInstance)

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

cen:DetachCenChildInstance

update

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

\*virtualborderrouter

`acs:vpc:*:{#accountId}:virtualborderrouter/{#virtualborderrouterId}`

\*VPC

`acs:vpc:*:{#accountId}:vpc/{#vpcId}`

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

cen-7qthudw0ll6jmx\*\*\*\*

ChildInstanceId

string

Yes

The ID of the network instance that you want to detach from the CEN instance.

vpc-bp18sth14qii3pnvx\*\*\*\*

ChildInstanceType

string

Yes

The type of the network instance. Valid values:

-   **VPC**: virtual private cloud (VPC)
    
-   **VBR**: virtual border router (VBR)
    
-   **CCN**: Cloud Connect Network (CCN) instance
    

VPC

ChildInstanceRegionId

string

Yes

The ID of the region where the network instance is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ChildInstanceOwnerId

integer

No

The ID of the Alibaba Cloud account to which the network instance belongs.

1699000000000000

CenOwnerId

integer

No

The ID of the Alibaba Cloud account to which the CEN instance belongs.

1688000000000000

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

OperationFailed.AttachmentReferencedVpcRouteEntryExisted

Operation is failed because there is at least one route entry which next hop is the specified attachment.

The error message returned because this operation is not supported when a route points to an attachment.

400

Forbidden.OptimizationCCNExisted

Operation Forbidden. CCN with optimization is on, please turn it off firstly.

400

Forbidden.PrivatezoneRouteExisted

Operation Forbidden. There is a Privatezone Route associated with the instance, please dessociate it firstly.

The error message returned because the PrivateZone route already exists. Delete the route and relevant configurations and try again.

400

Forbidden.TypeInvalid

The specified ChildInstanceType or TransitRouterType is not supported by this operation.

The error message returned because the ChildInstanceType or TransitRouterType parameter does not support this operation.

400

IncorrectStatus.Vpc

The resource is not in a valid state for the operation.

The error message returned because the status of the VPC does not support this operation. Try again later.

400

OperationFailed.VbrAttachedVbrHa

The operation is failed because of VbrAttachedVbrHa.

400

OperationFailed.RIInstanceExist

Operation is failed because RI exists.

The error message returned because this operation is not supported when an RI instance exists.

400

IncorrectStatus.VpcRouteTable

The VPC route table is not in a desired state.

The error message returned because the VPC route table is in an unstable state. Try again later.

400

OperationFailed.CenReferencedVpcRouteEntryExisted

Operation is failed because there is at least one route entry which next hop is the specified cen.

400

InvalidOperation.BondVbrAssociated

Illegal operation due to associated BondVBR.

Illegal operation due to associated BondVBR.

400

OperationFailed.VbrWithAllowPrefixes

Operation failed because allow prefixes referenced by vbr exists.

A route prefix on the VBR is assigned the Allow action, which causes the operation to fail.

400

InvalidOperation.CustomRegionDomainRouteEntryExist

Operation is invalid because custom region-domain route entry exist.

Operation is invalid because custom region-domain route entry exist.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

OperationNotPermitted.AttachmentManagedByCloudService

The specified Attachment managed by cloud service can only be deleted through cloud service.

404

Bid.NotFound

Not found Bid by specified AliUid.

The error message returned because the BID does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DetachCenChildInstance#workbench-doc-change-demo) for a complete list.
