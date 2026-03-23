## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`ResourceSharing/2020-01-10`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. [Create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API-only access and use RAM policies to apply the principle of least privilege (PoLP). Alibaba Cloud accounts are only used when explicitly required.

To call APIs securely, configure the following:

-   A RAM user account
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) for the account
    

## Resource shares

**API**

**Title**

**Description**

[EnableSharingWithResourceDirectory](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-enablesharingwithresourcedirectory)

EnableSharingWithResourceDirectory

Enables resource sharing for a resource directory.

[CreateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-createresourceshare)

CreateResourceShare

Creates a resource share.

[ListResourceShares](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourceshares)

ListResourceShares

Queries resource shares.

[UpdateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-updateresourceshare)

UpdateResourceShare

Modifies the information of a resource share.

[DeleteResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-deleteresourceshare)

DeleteResourceShare

Deletes a resource share.

[AssociateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-associateresourceshare)

AssociateResourceShare

Associates a shared resource or a principal with a resource share.

[DisassociateResourceShare](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-disassociateresourceshare)

DisassociateResourceShare

Removes shared resources or principals from a resource share.

[ListResourceShareAssociations](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourceshareassociations)

ListResourceShareAssociations

Queries the records of resources or principals that are associated with a resource share.

[ListSharedResources](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listsharedresources)

ListSharedResources

Queries the resources that you have shared or that other accounts have shared with you.

[ListSharedTargets](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listsharedtargets)

ListSharedTargets

Queries the principals of a resource share.

[DescribeRegions](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-describeregions)

DescribeRegions

Queries the regions where the Resource Sharing service is available.

[CheckSharingWithResourceDirectoryStatus](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-checksharingwithresourcedirectorystatus)

CheckSharingWithResourceDirectoryStatus

Checks the status of resource sharing within a resource directory.

[ChangeResourceGroup](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-changeresourcegroup)

ChangeResourceGroup

Transfers a resource share from one resource group to another.

[TagResources](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-tagresources)

TagResources

Adds tags to a resource share.

[ListTagResources](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listtagresources)

ListTagResources

Queries the tags that are added to resource shares.

[UntagResources](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-untagresources)

UntagResources

Removes tags from resource shares.

## Resource sharing invitations

**API**

**Title**

**Description**

[ListResourceShareInvitations](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourceshareinvitations)

ListResourceShareInvitations

A principal calls the ListResourceShareInvitations operation to query the resource sharing invitations that it has received.

[AcceptResourceShareInvitation](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-acceptresourceshareinvitation)

AcceptResourceShareInvitation

A principal calls the AcceptResourceShareInvitation operation to accept a resource sharing invitation.

[RejectResourceShareInvitation](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-rejectresourceshareinvitation)

RejectResourceShareInvitation

Rejects a resource sharing invitation.

## Resource sharing permissions

**API**

**Title**

**Description**

[AssociateResourceSharePermission](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-associateresourcesharepermission)

AssociateResourceSharePermission

Associates permissions with a resource share.

[DisassociateResourceSharePermission](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-disassociateresourcesharepermission)

DisassociateResourceSharePermission

Disassociates a permission from a resource share. You can disassociate a permission from a resource share only if the resource share does not contain resources of the type indicated by the permission.

[ListResourceSharePermissions](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listresourcesharepermissions)

ListResourceSharePermissions

Queries the permissions that are associated with a resource share.

[GetPermission](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-getpermission)

GetPermission

Queries the information about a permission.

[ListPermissionVersions](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listpermissionversions)

ListPermissionVersions

Queries the versions of a permission.

[ListPermissions](/help/en/resource-management/resource-sharing/developer-reference/api-resourcesharing-2020-01-10-listpermissions)

ListPermissions

Queries the information about the default permission.
