Deletes a VPC peering connection.

## Operation description

-   You can delete a VPC peering connection. After you delete the instance, your services are interrupted. Make sure that this operation does not affect your business.
    
    -   If you force delete the instance, the system also deletes the routes that point to the VPC peering connection from the route table.
        
    -   If you do not force delete the instance, the system does not delete the routes that point to the VPC peering connection from the route table. You must manually delete these routes.
        
-   **DeleteVpcPeerConnection** is an asynchronous operation. After you send a request, the system returns a **request ID**, while running the task in the background. Call the [GetVpcPeerConnectionAttribute](/help/en/vpc/developer-reference/api-vpcpeer-2022-01-01-getvpcpeerconnectionattribute) operation to query the status of the VPC peering connection.
    
    -   **Deleting** indicates the instance is being deleted.
        
    -   **Deleted** indicates the instance is deleted.
        
-   You cannot send concurrent requests to delete the same VPC peering connection instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/DeleteVpcPeerConnection)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/DeleteVpcPeerConnection)

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

vpc:DeleteVpcPeerConnection

delete

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

Force

boolean

No

Specifies whether to force delete the VPC peering connection. Valid values:

-   **false** (default): does not force delete the VPC peering connection. Delete the routes that point to the VPC peering connection.
    
-   **true**: force deletes the VPC peering connection. The system deletes the routes that point to the VPC peering connection in the route table.
    

false

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run but does not delete the VPC peering connection. The system checks the request for required parameters, format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a value for this parameter from your client to make sure that the value is unique among different requests. The client token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Success response

`JSON` format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45"
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

OperationDenied.RouteEntryExist

The operation is not allowed because of existing routeEntry point to VpcPeer.

The VPC peering connection cannot be deleted because a route points to the VPC peering connection.

400

OperationDenied.ServiceManagedInstance

Operation is denied because the specified instance belongs to service manager.

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/DeleteVpcPeerConnection#workbench-doc-change-demo) for a complete list.
