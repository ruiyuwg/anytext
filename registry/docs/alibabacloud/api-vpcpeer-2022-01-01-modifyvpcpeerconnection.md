Modifies the name or description of a VPC peering connection.

## Operation description

-   **ModifyVpcPeerConnection** is an asynchronous operation. After you send a request, the system returns a **RequestId**, while running the task in the background. Call the [GetVpcPeerConnectionAttribute](/help/en/vpc/api-getvpcpeerconnection) operation to query the status of the VPC peering connection.
    
    -   **Updating** indicates that the instance is being modified.
        
    -   **Activated** indicates that the modification is complete.
        
-   The **ModifyVpcPeerConnection** operation does not support concurrent requests to modify the same VPC peering connection.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/ModifyVpcPeerConnection)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/ModifyVpcPeerConnection)

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

vpc:ModifyVpcPeerConnection

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the VPC peering connection.

pcc-lnk0m24khwvtkm\*\*\*\*

Name

string

No

The new name of the VPC peering connection.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

vpcpeername

Description

string

No

The new description of the VPC peering connection.

The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.

newdescription

Bandwidth

integer

No

The new bandwidth of the VPC peering connection. Unit: Mbps. The value must be an integer greater than 0.

100

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: Performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (Default): Sends a normal request. After the check passes, an HTTP 2xx status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a unique token on your client for each request. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

0c593ea1-3bea-11e9-b96b-88e9fe637760

LinkType

string

No

The link type.

Valid values: Platinum and Gold. The default value is Gold.

**Note**

If you specify this parameter, make sure that you create a cross-region peering connection.

Gold

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response object.

RequestId

string

The request ID.

880C99E1-449B-524A-B81F-1EC53D2A7EAC

## Examples

Success response

`JSON` format

```
{
  "RequestId": "880C99E1-449B-524A-B81F-1EC53D2A7EAC"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ResourceNotFound.InstanceId

The specified resource of %s is not found.

The specified instance is not found

400

IncorrectStatus.VpcPeer

The status of %s \[%s\] is incorrect.

The status of the peer-to-peer connection instance does not meet the requirements. In this status, the peer-to-peer connection instance cannot be received.

400

IncorrectBusinessStatus.VpcPeer

The business status of %s \[%s\] is incorrect.

The current instance status is abnormal and the current operation is not allowed.

400

OperationFailed.BandwidthCannotBeChangedInSameRegion

The operation failed because the bandwidth cannot be changed in the same region.

The operation failed because VpcPeer instances in the same region are not allowed to modify the bandwidth value.

400

QuotaExceeded.Bandwidth

The quota of bandwidth is exceeded.

The specified bandwidth is invalid.

400

OperationFailed.InterRegionLinkTypeNotSupported

The same region not supported link type feature.

Link type characteristics are not supported in the same region.

400

OperationFailed.RegionIdNotSupportLinkType

The feature link type is not supported in the region.

The gold, silver and copper settings for this feature are not supported in the region.

400

OperationFailed.SpecificLinkTypeNotSupported

The operation failed because the special link type of user is not opened.

The account does not support special link types.

400

OperationDenied.ServiceManagedInstance

Operation is denied because the specified instance belongs to service manager.

400

OperationFailed.ChargeTypeNotSupported

Operation failed because the CDT charge type of receiver or accepter does not support the Underlay link type.

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/ModifyVpcPeerConnection#workbench-doc-change-demo) for a complete list.
