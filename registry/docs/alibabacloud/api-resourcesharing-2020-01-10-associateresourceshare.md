Associate shared resources or principals with a resource share.

## Operation description

This example shows how to add the VSwitch `vsw-bp183p93qs667muql****` to the Resource Share `rs-6GRmdD3X****` in the `cn-hangzhou` Region and share it with Member `172050525300****` within a resource directory.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AssociateResourceShare)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/AssociateResourceShare)

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

resourcesharing:AssociateResourceShare

update

\*All Resource

`*`

-   resourcesharing:Target
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

The resources to associate with the resource share.

object

No

A resource to associate.

ResourceType

string

No

The type of the shared resource.

You can specify up to five resources in a single request.

For a list of supported resource types, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

**Note**

`Resources.N.ResourceId` and `Resources.N.ResourceType` must be specified together.

VSwitch

ResourceId

string

No

The ID of the shared resource.

**Note**

`Resources.N.ResourceId` and `Resources.N.ResourceType` must be specified together.

vsw-bp183p93qs667muql\*\*\*\*

Targets

array

No

The principals to associate with the resource share.

172050525300\*\*\*\*

string

No

The ID of a principal. Valid values depend on the `AllowExternalTargets` setting for the resource share:

-   If `AllowExternalTargets` is set to `false`, sharing is restricted to your Resource Directory. The principal can be the ID of the Resource Directory, a Folder, or a member.
    
-   If `AllowExternalTargets` is set to `true`, you can share with any Alibaba Cloud account. The principal can be the ID of an Alibaba Cloud account, a Resource Directory, a Folder, a member, or an Alibaba Cloud service.
    

For more information, see [Resource Sharing overview](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview), [View the ID of a resource directory](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-resource-directory), [View the ID of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder), or [View the ID of a member](/help/en/resource-management/resource-directory/user-guide/view-the-detailed-information-of-a-member).

You can specify up to five principals in a single request.

172050525300\*\*\*\*

ResourceArns

array

No

The ARNs of the shared resources.

You can specify up to five resources in a single request.

string

No

The ARN of the shared resource.

**Note**

For details on the ARN format, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

PermissionNames

array

No

The names of the permissions to apply. If this parameter is omitted, the system automatically applies the default permission for the resource type. For more information, see [Permission library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

string

No

The name of a permission. For more information, see [Permission library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

AliyunRSDefaultPermissionVSwitch

TargetProperties

array<object>

No

The properties of the principals.

**Note**

This parameter applies only when a principal is an Alibaba Cloud service.

object

No

The properties for a principal.

TargetId

string

No

The ID of the principal.

**Note**

`TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be specified together.

172050525300\*\*\*\*

Property

string

No

The property of the principal. For example, you can specify the time period for resource sharing. Valid values for `timeRangeType` are:

-   `timeRange`: a specific period of time.
    
-   `day`: an entire day.
    

**Note**

`TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be specified together.

{ "timeRange":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

ResourceProperties

array<object>

No

The properties of the resources.

object

No

The properties of a resource.

ResourceArn

string

No

The ARN of the resource.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

Property

string

No

The property of the resource.

{"sharePrincipals":true,"shareTagOptions":false}

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response body.

RequestId

string

The ID of the request.

111FB84A-60A9-403E-9067-E55D7EE95BD1

ResourceShareAssociations

array<object>

The information about the resources or principals that are associated with the resource share.

object

The information about a resource or principal that is associated with the resource share.

UpdateTime

string

The time when the association was updated. This parameter can be one of the following values:

-   If `AssociationType` is set to `Resource`, this parameter indicates the time when the resource was updated.
    
-   If `AssociationType` is set to `Target`, this parameter indicates the time when the principal was updated.
    

2020-12-04T09:40:41.246Z

ResourceArn

string

The Alibaba Cloud Resource Name (ARN) of the associated resource.

**Note**

This parameter is returned only when `AssociationType` is set to `Resource`.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

ResourceShareName

string

The name of the resource share.

test

CreateTime

string

The time when the association was created. This parameter can be one of the following values:

-   If `AssociationType` is set to `Resource`, this parameter indicates the time when the resource was added.
    
-   If `AssociationType` is set to `Target`, this parameter indicates the time when the principal was added.
    

2020-12-04T09:40:41.246Z

EntityType

string

The type of the associated entity. Valid values:

-   If the associated entity is a resource, the value is the resource type. For more information, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).
    
-   If the associated entity is a principal, the value is `Account`.
    

VSwitch

ResourceShareId

string

The ID of the resource share.

rs-6GRmdD3X\*\*\*\*

AssociationStatusMessage

string

The reason why the association failed.

The reason for the association failure.

AssociationType

string

The type of the association. Valid values:

-   `Resource`: The associated entity is a resource.
    
-   `Target`: The associated entity is a principal.
    

Resource

AssociationStatus

string

The status of the association. Valid values:

-   `Associating`: The association is in progress.
    
-   `Associated`: The association is successful.
    
-   `Failed`: The association failed.
    
-   `Disassociating`: The disassociation is in progress.
    
-   `Disassociated`: The disassociation is successful.
    

**Note**

The records of the `Failed` and `Disassociated` states are automatically deleted by the system within 48 to 96 hours.

Associating

TargetProperty

string

The properties of the principal. For example, the time range for resource sharing.

**Note**

This parameter is returned only if the principal is an Alibaba Cloud service.

{ "plan":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

EntityId

string

The ID of the associated entity. This parameter can be one of the following values:

-   If `AssociationType` is set to `Resource`, this parameter indicates the ID of the resource.
    
-   If `AssociationType` is set to `Target`, this parameter indicates the ID of the principal.
    

vsw-bp183p93qs667muql\*\*\*\*

ResourceProperty

string

The properties of the resource.

{"sharePrincipals":true,"shareTagOptions":false}

## Examples

Success response

`JSON` format

```
{
  "RequestId": "111FB84A-60A9-403E-9067-E55D7EE95BD1",
  "ResourceShareAssociations": [
    {
      "UpdateTime": "2020-12-04T09:40:41.246Z",
      "ResourceArn": "acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****",
      "ResourceShareName": "test",
      "CreateTime": "2020-12-04T09:40:41.246Z",
      "EntityType": "VSwitch",
      "ResourceShareId": "rs-6GRmdD3X****",
      "AssociationStatusMessage": "The reason for the association failure.",
      "AssociationType": "Resource",
      "AssociationStatus": "Associating",
      "TargetProperty": "{\n    \"plan\":{\n        \"timeRangeType\":\"timeRange\",\n        \"beginAtTime\":\"00:00\",\n        \"timezone\":\"UTC+8\",\n        \"endAtTime\":\"19:59\"\n    }\n}",
      "EntityId": "vsw-bp183p93qs667muql****",
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

InvalidTarget

The shared target does not exist in the resource directory.

The specified Targets value is not a member in the resource directory.

400

ResourceAndTargetBothEmpty

Either a resource or a shared target must be specified.

You must specify a resource or a resource account.

400

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

InvalidParameter.ResourceType

The ResourceType is invalid.

The specified ResourceType parameter is invalid.

400

InvalidParameter.PermissionNames.Duplicate

The PermissionNames duplicate values.

Duplicate values are specified for the PermissionNames parameter.

400

InvalidParameter.PermissionNames.Length

The maximum length of PermissionNames exceeds quota limit.

The length of the value specified for the PermissionNames parameter exceeds the limit.

400

InvalidParameter.TargetProperties

The TargetProperties is invalid.

The TargetProperties is invalid.

400

InvalidParameter.TargetProperties.Duplicate

The TargetProperties contains duplicate values.

TargetProperties contains duplicate parameters.

400

InvalidParameter.TargetProperties.Length

The TargetProperties beyond the length limit.

The TargetProperties beyond the length limit.

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

400

InvalidParameter.ResourceProperties

The ResourceProperties is invalid.

The ResourceProperties is invalid.

400

InvalidParameter.ResourceProperties.Duplicate

The ResourceProperties contains duplicate values.

The ResourceProperties contains duplicate values.

400

InvalidParameter.ResourceProperties.Length

The ResourceProperties beyond the length limit.

The ResourceProperties beyond the length limit.

400

NotSupport.ResourceProperty

The resource type does not support resource property.

The resource type does not support resource property.

404

EntityNotExists.ResourceShare

The resource share does not exist in the current account.

The resource share does not exist in the current account.

404

EntityNotExists.Permission

The resource share permission does not exist.

You do not have the required permissions.

409

NotEnableSharingWithResourceDirectory

You have not enabled sharing with your Resource Directory.

You have not enabled sharing with Resource Directory.

409

AccountNotInResourceDirectory

The account is not a master or a member of a resource directory.

The specified Targets value is not a member in the resource directory.

409

ResourceShareStatusMismatchAction

The status of the resource share does not allow the specified operation.

The status of the resource share does not allow the specified operation.

409

QuotaExceeded.SharedResource.Count

The maximum number of shared resources per account exceeds the limit.

The maximum number of Resources values per account is exceeded.

409

ShareWithYourself

You cannot share resources with yourself.

You cannot share resources with yourself.

409

AssociateConflict

You cannot perform the operation while disassociation operation is being performed.

The association operation is not supported while an disassociation is being performed.

409

NotManagementAccount

Only the management account of the service is allowed to share such resources.

Only the management account of the resource directory can be used to share the current type of resource. If you still want to use the current account, contact the owner of the management account to configure the current account as a delegated administrator account of the trusted service to which the resource belongs.

409

QuotaExceeded.PendingInvitations

The maximum number of pending invitations exceeds the limit.

The number of invitations exceeds the upper limit.

409

InvalidTarget.LegalEntityMismatch

The target account does not have the same legal entity as the resource owner account.

The enterprise name of the principal is inconsistent with that of the resource owner.

409

ExternalTargetsNotAllowed.ResourceType

The resource share includes resource types that cannot be shared with accounts outside the resource directory.

The resource share contains resources that do not support this operation.

409

InvalidTarget.SiteMismatch

Cross-site resource sharing is not supported.

The principal and resource owner are registered at different sites.

409

NotSupport.Service.ExistInOtherResourceShare

The resource type has been shared to the target service through other resourceShare. Please share it in the same resourceShare.

409

NotSupport.Service.AssociateConflict

The same resource cannot be shared repeatedly to the target service.

409

NotSupport.ResourcePropertyConflict

The ResourceProperty can not be updated until the last operation is completed.

The ResourceProperty can not be updated until the last operation is completed.

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/AssociateResourceShare#workbench-doc-change-demo) for a complete list.
