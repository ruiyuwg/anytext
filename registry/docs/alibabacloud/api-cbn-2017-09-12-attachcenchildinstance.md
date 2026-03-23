Attaches a network instance to a Cloud Enterprise Network (CEN) instance.

## Operation description

CEN allows you to attach a network instance that belongs to another Alibaba Cloud account to your CEN instance. Before you attach the network instance, CEN must acquire permissions to access the network instance that belongs to another Alibaba Cloud account.

-   For more information about how to grant CEN permissions on virtual private clouds (VPCs) that belong to another Alibaba Cloud account, see [GrantInstanceToCen](/help/en/vpc/api-grantinstancetocen).
    
-   For more information about how to grant CEN permissions on Cloud Connect Network (CCN) instances that belong to another Alibaba Cloud account, see [GrantInstanceToCbn](/help/en/sag/api-grantinstancetocbn).
    
-   By default, you cannot grant permissions on virtual border routers (VBRs) that belong to another Alibaba Cloud account to a CEN instance. If you need to use this feature, contact your account manager.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/AttachCenChildInstance)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/AttachCenChildInstance)

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

cen:AttachCenChildInstance

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

cen-7qthudw0ll6jmc\*\*\*\*

ChildInstanceId

string

Yes

The ID of the network instance that you want to attach to the CEN instance.

vpc-bp18sth14qii3pnvx\*\*\*\*

ChildInstanceType

string

Yes

The type of the network instance. Valid values:

-   **VPC**: VPC
    
-   **VBR**: VBR
    
-   **CCN**: CCN instance
    

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

**Note**

If the network instance and the CEN instance belong to different Alibaba Cloud accounts, this parameter is required.

1688000000000000

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

A278B8A6-A5B8-4FDE-9F70-95F0F6A1D68A

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A278B8A6-A5B8-4FDE-9F70-95F0F6A1D68A"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Forbbiden.AttachChildInstanceAcrossBid

Operation is invalid, please apply for cross-bid attaching.

400

IncorrectStatus.VpcSwitch

Operation is failed because some virtual switch is modifying within the same VPC.

The error message returned because the status of the vSwitch does not support this operation. Try again later.

400

Forbbiden.CloudBoxVSwitchExist

The operation is not allowed because of cloud box vswitch existed.

The error message returned because the specified vSwitch is associated with a CloudBox. You cannot associate with the vSwitch.

400

OperationFailed.InvalidVpcStatus

Operation is failed because the child-instance is configuring.

400

OperationFailed.InvalidTransitRouter

Operation failed because the transit router is not supported.

Operation failed because the transit router is not supported.

400

OperationUnsupported.CenFullLevel

CEN full level does not support vpn bgp.

The error message returned because CEN instances in FULL mode do not support BGP for VPN gateways.

400

IncorrectStatus.VpcRouteTable

The VPC route table is not in a desired state.

The error message returned because the VPC route table is in an unstable state. Try again later.

400

InvalidOperation.VbrAttachedToEcr

VBR has alreay attached to ECR.

VBR has alreay attached to ECR.

400

OperationUnsupported.VpcRoutePropagationSource

The operation on this VPC route propagation source is not supported.

The operation on this VPC route propagation source is not supported.

400

InvalidStatus.ResourceStatus

The resource is not in a valid state for the attachment operation.

The error message returned because the status of the specified resource does not support this operation. Try again later.

400

IncorrectStatus.TransitRouter

The status of TransitRouter is incorrect.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

IllegalParam.RegionId

The specified RegionId is illegal.

The error message returned because the specified region is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

403

Forbidden.AttachChildInstance

The attached VBR on some access device models are not supported. Please submit a ticket to continue using this VBR on CEN.

The attached VBR on some access device models are not supported. Please submit a ticket to continue using this VBR on CEN.

404

Bid.NotFound

Not found childInstance Bid by specified AliUid.

The error message returned because the BID does not exist.

404

Operation.FailedAndTryAgain

Fail to get customer label by the specified aliUid.

409

InvalidOperation.ChildInstanceRIAlreadyExist

Operation is invalid because the child-instance has already been attached to Express Connect.

409

Forbbiden.AttachChildInstanceAcrossUid

Operation is invalid because the child-instance is not authorized to CEN.

409

InvalidOperation.ChildInstanceAlreadyAttached

Operation is invalid because the child-instance has already been attached to another CEN.

409

InvalidOperation.CenAlreadyAutoPubilshRouteToInstance

Operation is invalid because other cen has already auto published route to this instance.

The error message returned because this operation is not supported when one or more other CEN instance can advertise routes to the specified instance.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/AttachCenChildInstance#workbench-doc-change-demo) for a complete list.
