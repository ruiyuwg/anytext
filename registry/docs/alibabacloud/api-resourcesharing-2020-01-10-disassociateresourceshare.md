Disassociates shared resources or principals from a resource share.

## Operation description

-   A resource owner can call this API to remove shared resources or principals from a resource share.
    
-   A principal outside your resource directory can call this API to leave the resource share. For more information, see [Exit a resource share](/help/en/resource-management/resource-sharing/user-guide/exit-a-resource-share).
    

This example shows how to use the management account of a resource directory to remove the principal `172050525300****` from the resource share `rs-6GRmdD3X****` in the `cn-hangzhou` region. This action stops the sharing of resources with that principal.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DisassociateResourceShare)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/DisassociateResourceShare)

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

resourcesharing:DisassociateResourceShare

update

\*All Resource

`*`

-   resourcesharing:RequestedResourceType
-   resourcesharing:ResourceArn

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceShareId

string

Yes

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

Resources

array<object>

No

A list of shared resources to disassociate from the resource share.

object

No

A shared resource.

ResourceType

string

No

The type of the shared resource.

You can disassociate up to five shared resources in a single request.

For a list of supported resource types, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

**Note**

The `Resources.N.ResourceId` and `Resources.N.ResourceType` parameters must be specified in pairs.

VSwitch

ResourceId

string

No

The ID of the shared resource.

You can disassociate up to five shared resources in a single request.

**Note**

The `Resources.N.ResourceId` and `Resources.N.ResourceType` parameters must be specified in pairs.

vsw-bp183p93qs667muql\*\*\*\*

Targets

array

No

A list of principals to disassociate from the resource share.

172050525300\*\*\*\*

string

No

The ID of a principal.

You can disassociate up to five principals in a single request.

172050525300\*\*\*\*

ResourceArns

array

No

A list of the Alibaba Cloud Resource Names (ARNs) of the shared resources.

You can disassociate up to five shared resources in a single request.

string

No

The Alibaba Cloud Resource Name (ARN) of the shared resource.

**Note**

For the format of an ARN, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceOwner

string

No

The owner of the resource share. Valid values:

-   `Self` (default): The resource share is owned by the current account. Use this value when a resource owner disassociates shared resources or principals from a resource share within a Resource Directory.
    
-   `OtherAccounts`: The resource share is owned by another account. Use this value when a principal leaves a resource share that was created by an account outside your Resource Directory.
    

Self

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The ID of the request.

95230BC9-A8E8-4493-96BD-4F0C758E37F8

ResourceShareAssociations

array<object>

The associations of shared resources or principals with the resource share.

object

An association of a shared resource or principal with the resource share.

UpdateTime

string

The time the association was last updated. For this operation, this indicates the time of disassociation. The meaning varies based on the `AssociationType`:

-   If the `AssociationType` is `Resource`, this is the time the resource was disassociated.
    
-   If the `AssociationType` is `Target`, this is the time the principal was disassociated.
    

2020-12-04T09:40:45.556Z

ResourceArn

string

The Alibaba Cloud Resource Name (ARN) of the shared resource.

**Note**

This parameter is returned only when `AssociationType` is `Resource`.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceShareName

string

The name of the resource share.

test

CreateTime

string

The time the association was created. The meaning varies based on the `AssociationType`:

-   If the `AssociationType` is `Resource`, this is the time the resource was associated.
    
-   If the `AssociationType` is `Target`, this is the time the principal was associated.
    

2020-12-04T09:40:41.250Z

EntityType

string

The type of the entity. Valid values:

-   If the entity is a resource, this is the resource type. For more information, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).
    
-   If the entity is a principal, the value is `Account`.
    

Account

ResourceShareId

string

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

AssociationStatusMessage

string

The reason why the disassociation failed.

The Resources is invalid.

AssociationType

string

The association type. Valid values:

-   `Resource`: The entity is a resource.
    
-   `Target`: The entity is a principal.
    

Target

AssociationStatus

string

The status of the association. Valid values:

-   `Associating`: The entity is being associated.
    
-   `Associated`: The entity is associated.
    
-   `Failed`: The association failed.
    
-   `Disassociating`: The entity is being disassociated.
    
-   `Disassociated`: The entity is disassociated.
    

**Note**

The system automatically deletes records in the `Failed` and `Disassociated` states within 48 to 96 hours.

Disassociating

TargetProperty

string

The properties of the principal, such as the time period for resource sharing.

**Note**

This parameter is returned only when the principal is an Alibaba Cloud service.

{ "timeRange":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

EntityId

string

The ID of the entity. Its value varies based on the `AssociationType`:

-   If `AssociationType` is `Resource`, the value of this parameter is the resource ID.
    
-   If the `AssociationType` is `Target`, this is the ID of the Resource Directory, Folder, or Member.
    

172050525300\*\*\*\*

ResourceProperty

string

The properties of the resource.

{"sharePrincipals":true,"shareTagOptions":false}

## Examples

Success response

`JSON` format

```
{
  "RequestId": "95230BC9-A8E8-4493-96BD-4F0C758E37F8",
  "ResourceShareAssociations": [
    {
      "UpdateTime": "2020-12-04T09:40:45.556Z",
      "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
      "ResourceShareName": "test",
      "CreateTime": "2020-12-04T09:40:41.250Z",
      "EntityType": "Account",
      "ResourceShareId": "rs-6GRmdD3X****",
      "AssociationStatusMessage": "The Resources is invalid.",
      "AssociationType": "Target",
      "AssociationStatus": "Disassociating",
      "TargetProperty": "{\n    \"timeRange\":{\n        \"timeRangeType\":\"timeRange\",\n        \"beginAtTime\":\"00:00\",\n        \"timezone\":\"UTC+8\",\n        \"endAtTime\":\"19:59\"\n    }\n}",
      "EntityId": "172050525300****",
      "ResourceProperty": "{\"sharePrincipals\":true,\"shareTagOptions\":false}"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingParameter.ResourceShareId

You must specify ResourceShareId.

You must specify ResourceShareId.

400

InvalidParameter.ResourceShareId

The ResourceShareId is invalid.

The ResourceShareId parameter is invalid.

400

InvalidParameter.Resources

The Resources is invalid.

The specified shared resource is invalid.

400

InvalidParameter.Resources.Duplicate

The Resources contains duplicate values.

The specified Resources parameter contains duplicate values.

400

InvalidParameter.Resources.Length

The maximum number of Resources exceeds 5.

The number of specified shared resources cannot exceed 5.

400

InvalidParameter.Targets

The Targets is invalid.

The specified Targets parameter is invalid.

400

InvalidParameter.Targets.Duplicate

The Targets contains duplicate values.

The specified Targets parameter contains duplicate values.

400

InvalidParameter.Targets.Length

The maximum number of Targets exceeds 5.

The number of Targets values cannot exceed 5.

400

ResourceAndTargetBothEmpty

Either a resource or a shared target must be specified.

You must specify a resource or a resource account.

400

DisassociateInvalid

You can not disassociate unassociated resource or target.

The disassociation operation is not supported for an entity that is not associated with the resource share.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

InvalidParameter.ResourceType

The ResourceType is invalid.

The specified ResourceType parameter is invalid.

400

InvalidParameter.ResourceArns

The ResourceArns is invalid.

The ResourceArns parameter is invalid.

400

InvalidParameter.ResourceArns.Duplicate

The ResourceArns contains duplicate values.

The ResourceArns contains duplicate values.

400

InvalidParameter.ResourceArns.Length

The ResourceArns beyond the length limit.

The maximum number of ResourceArns exceeds 5.

400

InvalidParameter.ResourceConflict

Both Resources and ResourceArns cannot be specified simultaneously. Please provide only one of these parameters.

Both Resources and ResourceArns cannot be specified simultaneously. Please provide only one of these parameters.

400

NotSupport.ResourceType.ResourcesParameter

The Resources parameter does not support this resource type. Please use ResourceArns instead.

The Resources parameter does not support this resource type. Please use ResourceArns instead.

404

EntityNotExists.ResourceShare

The resource share does not exist in the current account.

The resource share does not exist in the current account.

409

AccountNotInResourceDirectory

The account is not a master or a member of a resource directory.

The specified Targets value is not a member in the resource directory.

409

ResourceShareStatusMismatchAction

The status of the resource share does not allow the specified operation.

The status of the resource share does not allow the specified operation.

409

DisassociateConflict

You cannot perform the operation while association is already in progress.

The association operation is not supported while an association is being performed.

409

LeavingFailed.Account

The account was added to the resource share automatically by resoucre directory.

The current account is a principal of a resource share and cannot proactively exit the resource share. Contact the owner of the resource share to remove the account from the resource share.

409

LeavingFailed.ResourceType

The resource share contains resources of the resource types that dont support this action.

The resource share contains resources that cannot proactively exit the resource share. Contact the owner of the resource share to remove the current account from the resource share.

409

ExternalTargetWithdrawConflict

Existing internal association task in resource directory when disassociating with resource share.

The current account is a principal of a resource share and cannot proactively exit the resource share. Contact the owner of the resource share to remove the account from the resource share.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/DisassociateResourceShare#workbench-doc-change-demo) for a complete list.
