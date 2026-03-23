Each type of resource that supports resource sharing has at least one resource sharing-related permission. The permission defines the operations that principals can perform on this type of resource in a resource share.

## Permission library

The permissions supported by a type of resource are defined by the related Alibaba Cloud service. When resource owners create resource shares, they can select permissions for the related types of shared resources. The following table lists the default permissions supported by each type of resource.

**Alibaba Cloud service**

**Resource type**

**Permission name**

Virtual Private Cloud (VPC)

vSwitch

AliyunRSDefaultPermissionVSwitch

Prefix list

AliyunRSDefaultPermissionPrefixList

IP address pool

AliyunRSDefaultPermissionPublicIpAddressPool

IP Address Manager (IPAM) pool

AliyunRSDefaultPermissionIpamPool

Resource Orchestration Service (ROS)

Template

AliyunRSDefaultPermissionROSTemplate

Service Catalog

Product portfolio

AliyunRSDefaultPermissionServiceCatalogPortfolio

Elastic Compute Service (ECS)

Image

AliyunRSDefaultPermissionImage

Snapshot

AliyunRSDefaultPermissionSnapshot

Capacity reservation

AliyunRSDefaultPermissionCapacityReservation

Elasticity assurance

AliyunRSDefaultPermissionElasticityAssurance

Key Management Service (KMS)

Instance

-   AliyunRSDefaultPermissionKMSInstance
    
-   AliyunRSPermissionKMSInstanceReadWrite
    

You can view the details of each permission on the [Permission Library](https://resourcemanager.console.alibabacloud.com/resource-shares/permissions) page of the Resource Management console.

## View the details of a permission

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-share).
    
2.  In the left-side navigation pane, choose **Resource Sharing** > **Permission Library**.
    
3.  On the **Permission Library** page, find the desired permission and click its name.
    
4.  View the details of the permission.
    
    -   Basic Information
        
        In the **Basic Information** section, view the name, version, supported resource type, and creation time of the permission.
        
    -   Permission Details
        
        On the **Permission Details** tab, view the operations that can be performed on the related type of resource.
        
    -   Version Management
        
        On the **Version Management** tab, view the version of the permission. One permission has only one default version.
        
    -   Associated Resource Shares
        
        On the **Associated Resource Shares** tab, view the resource shares to which the permission is added.
        

## Add permissions

When resource owners create or modify resource shares, they can add the permissions of the related types of resources to the resource shares. If a type of resource has multiple permissions, only one permission can be added to a resource share. For more information, see [Create a resource share](/help/en/resource-management/resource-sharing/user-guide/create-a-resource-share-1#task-2436332) or [Modify a resource share](/help/en/resource-management/resource-sharing/user-guide/modify-a-resource-share#task-2436333).
