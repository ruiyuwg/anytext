Accepts a VPC peering connection request.

## Operation description

-   A cross-account VPC peering connection is activated only after the accepter VPC accepts the request.
    
-   **AcceptVpcPeerConnection** is an asynchronous operation. After you send a request, the system returns a **RequestId** while running the task in the background. Call [GetVpcPeerConnectionAttribute](/help/en/vpc/api-getvpcpeerconnection) to query the status of the VPC peering connection instance.
    
    -   **Updating** indicates that the VPC peering connection is being activated.
        
    -   **Activated** indicates that the VPC peering connection is activated.
        
-   **AcceptVpcPeerConnection** does not support concurrent requests for the same VPC peering connection.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/AcceptVpcPeerConnection)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/VpcPeer/2022-01-01/AcceptVpcPeerConnection)

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

vpc:AcceptVpcPeerConnection

create

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

The ID of VPC peering connection.

pcc-guzvyqlj0n6e10\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: Sends a request without accepting the VPC peering connection request. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the check passes, the `DryRunOperation` error code is returned.
    
-   **false** (default): Sends a normal request. After the check passes, an HTTP 2xx status code is returned and the operation is performed.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a token from your client to make sure that it is unique among different requests. The client token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each API request may be different.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

For more information, see [What is a resource group?](/help/en/resource-management/product-overview/what-is-resource-management)

rg-acfmxazb4ph6aiy\*\*\*\*

Tag

array<object>

No

The tags.

object

No

The tags.

Key

string

No

The key of the tag. You can specify 1 to 20 tag keys. It cannot be an empty string.

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

FinanceDept

Value

string

No

The value of the tag. You can specify 1 to 20 tag values. It can be an empty string.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

FinanceJoshua

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The request ID.

RequestId

string

The request ID.

4EC47282-1B74-4534-BD0E-403F3EE64CAF

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4EC47282-1B74-4534-BD0E-403F3EE64CAF"
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

OperationFailed.CdtNotOpened

The operation failed because the Cdt service is not opened.

The operation failed because CDT is not activated.

400

IncorrectBusinessStatus.VpcPeer

The business status of %s \[%s\] is incorrect.

The current instance status is abnormal and the current operation is not allowed.

400

OperationFailed.NotExist.ResourceGroup

The operation failed because the resource group does not exist.

The operation failed because the resource group does not exist.

400

OperationFailed.CrossBorderCdtNotOpened

The cross-border data transmission function of Alibaba Cloud is not enabled.

See [Error Codes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/VpcPeer/2022-01-01/AcceptVpcPeerConnection#workbench-doc-change-demo) for a complete list.
