Transfers a resource share from one resource group to another.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ChangeResourceGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/ChangeResourceGroup)

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

resourcesharing:ChangeResourceGroup

update

\*ResourceShare

`acs:resourcesharing:{#regionId}:{#accountId}:resourceshare/{#ResourceShareId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceId

string

Yes

The ID of the resource share.

rs-dz3Ek1iiO\*\*\*

ResourceRegionId

string

Yes

The ID of the region where the resource share resides.

cn-hangzhou

ResourceGroupId

string

Yes

The destination resource group.

rg-aek2nb47ueqk\*\*\*

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

0A900114-22D3-5E9D-87A2-48E5EB5BF310

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0A900114-22D3-5E9D-87A2-48E5EB5BF310"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission.ChangeResourceGroup

You are not authorized to change resourcegroup

You do not have permissions to change the resource group.

400

MissingParameter.ResourceRegionId

The ResourceRegionId parameters that are required for processing this request are missing

The ResourceRegionId parameter is not configured.

400

MissingParameter.ResourceId

The ResourceId parameters that are required for processing this request are missing

The ResourceId parameter is not configured.

400

MissingParameter.ResourceGroupId

The ResourceGroupId parameters that are required for processing this request are missing

The ResourceGroupId parameter is not configured.

400

InvalidResourceGroup

The specified ResourceGroupId is invalid

The ResourceGroupId parameter is invalid.

400

SystemError

A system error occurred while processing your request

A system exception occurred.

400

ResourceNotFound

The specified resource is not found

The resource does not exist within your account.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/ChangeResourceGroup#workbench-doc-change-demo) for a complete list.
