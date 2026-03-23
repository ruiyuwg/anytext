Create a resource share

## Operation description

Alibaba Cloud Resource Sharing lets you share resources from your account with one or more Principals. For more information, see [Resource Sharing overview](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview).

This example shows how to use the management account of a Resource Directory to create a resource share named `test` in the `cn-hangzhou` region and share the vSwitch `vsw-bp183p93qs667muql****` with member `172050525300****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/CreateResourceShare)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceSharing/2020-01-10/CreateResourceShare)

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

resourcesharing:CreateResourceShare

create

\*All Resource

`*`

-   resourcesharing:RequestedAllowExternalTargets
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

ResourceShareName

string

Yes

The name of the resource share.

The name must be 1 to 50 characters in length.

It can contain letters, digits, Chinese characters, periods (.), underscores (\_), and hyphens (-).

test

Resources

array<object>

No

A list of shared resources.

object

No

A shared resource.

ResourceId

string

No

The ID of the shared resource.

You can add up to five shared resources at a time.

**Note**

Specify the `Resources.N.ResourceId` and `Resources.N.ResourceType` parameters in pairs.

vsw-bp183p93qs667muql\*\*\*\*

ResourceType

string

No

The type of the shared resource.

You can add up to five shared resources at a time.

For a list of supported resource types, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

**Note**

Specify the `Resources.N.ResourceId` and `Resources.N.ResourceType` parameters in pairs.

VSwitch

Targets

array

No

A list of principals.

172050525300\*\*\*\*

string

No

The ID of a principal. Valid values depend on the setting of `AllowExternalTargets`:

-   If `AllowExternalTargets` is set to `false`, the value can be the ID of a Resource Directory, a Folder, or a Member.
    
-   If `AllowExternalTargets` is set to `true`, the value can be the ID of an Alibaba Cloud Account, a Resource Directory, a Folder, a Member, or an Alibaba Cloud service.
    

For more information, see [Methods used to share resources](/help/en/resource-management/resource-sharing/product-overview/resource-sharing-overview), [View the ID of a resource directory](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-resource-directory), [View the ID of a folder](/help/en/resource-management/resource-directory/user-guide/view-the-basic-information-of-a-folder), or [View the ID of a member](/help/en/resource-management/resource-directory/user-guide/view-the-detailed-information-of-a-member).

You can add up to five principals at a time.

172050525300\*\*\*\*

ResourceArns

array

No

The Alibaba Cloud Resource Names (ARNs) of the shared resources.

You can add up to five shared resources at a time.

string

No

The ARN of the shared resource.

**Note**

For the format of a resource ARN, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

PermissionNames

array

No

The name of the permission. If unspecified, the system attaches the default permission for the resource type. For details, see [Permission Library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

string

No

The name of the permission. If unspecified, the system attaches the default permission for the resource type. For details, see [Permission Library](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing).

AliyunRSDefaultPermissionVSwitch

AllowExternalTargets

boolean

No

Specifies whether to allow sharing with accounts outside your resource directory. Valid values:

-   `false` (default): Resources can be shared only with accounts within your resource directory.
    
-   `true`: Resources can be shared with any Alibaba Cloud account.
    

false

ResourceGroupId

string

No

The ID of the resource group.

rg-aekz5nlvlak\*\*\*\*

TargetProperties

array<object>

No

The properties of the principal.

**Note**

This parameter is available only when the principal is an Alibaba Cloud service.

object

No

The properties of the principal.

**Note**

This parameter is available only when the principal is an Alibaba Cloud service.

Property

string

No

The property of the principal. For example, you can specify a time range for resource sharing. Valid values for `timeRangeType`:

-   `timeRange`: a specified time range.
    
-   `day`: the entire day.
    

**Note**

Specify the `TargetProperties.N.TargetId` and `TargetProperties.N.Property` parameters in pairs.

{ "timeRange":{ "timeRangeType":"timeRange", "beginAtTime":"00:00", "timezone":"UTC+8", "endAtTime":"19:59" } }

TargetId

string

No

The ID of the principal.

**Note**

Specify the `TargetProperties.N.TargetId` and `TargetProperties.N.Property` parameters in pairs.

172050525300\*\*\*\*

ResourceProperties

array<object>

No

A list of resource properties.

object

No

A resource property.

Property

string

No

The resource property.

{"sharePrincipals":true,"shareTagOptions":false}

ResourceArn

string

No

The ARN of the resource.

acs:vpc:cn-shanghai:103755469187\*\*\*\*:vswitch/vsw-uf62b11ue4m8oz2di\*\*\*\*

Tag

array<object>

No

The tags of the resource share. You can add a maximum of 20 tags.

object

No

A tag.

Key

string

No

The tag key.

**Note**

The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.

k1

Value

string

No

The tag value.

**Note**

The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.

v1

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

2C3FA051-61DC-4F3E-81E9-E4830524DF4B

ResourceShare

object

The information about the resource share.

AllowExternalTargets

boolean

Indicates whether accounts outside the resource directory are allowed to access the shared resources. Valid values:

-   `false`: Sharing with accounts outside the resource directory is not allowed.
    
-   `true`: Sharing with any account is allowed.
    

false

CreateTime

string

The time when the resource share was created.

2020-12-03T08:02:22.413Z

ResourceShareId

string

The ID of the resource share.

rs-qSkW1HBY\*\*\*\*

ResourceShareName

string

The name of the resource share.

test

ResourceShareOwner

string

The owner of the resource share.

151266687691\*\*\*\*

ResourceShareStatus

string

The status of the resource share. Valid values:

-   `Active`: The resource share is enabled.
    
-   `Pending`: The resource share is waiting for the invitee to confirm the invitation.
    
-   `Deleting`: The resource share is being deleted.
    
-   `Deleted`: The resource share is deleted.
    

**Note**

A resource share in the `Deleted` state is automatically removed by the system within 48 to 96 hours.

Active

UpdateTime

string

The time when the resource share was last updated.

2020-12-03T08:02:22.413Z

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2C3FA051-61DC-4F3E-81E9-E4830524DF4B",
  "ResourceShare": {
    "AllowExternalTargets": false,
    "CreateTime": "2020-12-03T08:02:22.413Z",
    "ResourceShareId": "rs-qSkW1HBY****",
    "ResourceShareName": "test",
    "ResourceShareOwner": "151266687691****",
    "ResourceShareStatus": "Active",
    "UpdateTime": "2020-12-03T08:02:22.413Z"
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter.ResourceShareName

The ResourceShareName is invalid.

The ResourceShareName parameter is invalid.

400

InvalidParameter.ResourceShareName.Length

The maximum length of ResourceShareName exceeds 50 characters.

The length of ResourceShareName cannot exceed 50 characters.

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

InvalidParameter

The specified parameter is invalid.

The specified parameter is invalid.

400

MissingParameter.ResourceShareName

You must specify ResourceShareName.

The ResourceShareName parameter is missing.

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

QuotaExceeded.ResourceShare.Count

The maximum number of ResourceShare exceeds the limit.

The maximum number of ResourceShare exceeds the limit.

409

EntityAlreadyExists.ResourceShare

The specified resource share ID already exists.

The specified resource share ID already exists.

409

QuotaExceeded.SharedResource.Count

The maximum number of shared resources per account exceeds the limit.

The maximum number of Resources values per account is exceeded.

409

ShareWithYourself

You cannot share resources with yourself.

You cannot share resources with yourself.

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

See [Error Codes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceSharing/2020-01-10/CreateResourceShare#workbench-doc-change-demo) for a complete list.
