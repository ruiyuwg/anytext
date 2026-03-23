Rejects a connection request for a VPC peering connection.

## Operation description

-   For a cross-account VPC peering connection, the accepter VPC can reject the connection request. After the request is rejected, the VPC peering connection enters the **Rejected** state.
    
-   The **RejectVpcPeerConnection** operation does not support concurrent requests for the same VPC peering connection.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/RejectVpcPeerConnection)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/RejectVpcPeerConnection)

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

vpc:RejectVpcPeerConnection

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

pcc-lnk0m24khwvtkm0\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: Sends a check request without rejecting the connection request. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
    
-   **false** (default): Sends a normal request. After the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a parameter value from your client to make sure that the value is unique among different requests. The ClientToken parameter can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.

123e4567-e89b-12d3-a456-426655440000

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

4EC47282-1B74-4534-BD2E-403F3EE64CAF

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4EC47282-1B74-4534-BD2E-403F3EE64CAF"
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

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/RejectVpcPeerConnection#workbench-doc-change-demo) for a complete list.
