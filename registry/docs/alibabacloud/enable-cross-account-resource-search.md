After you activate Resource Center, you can only view and search for resources within the current Alibaba Cloud account by default. If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or the delegated administrator account of Resource Center to view the resources within members in the resource directory.

## Background information

For more information about a resource directory, see [What is Resource Directory?](/help/en/resource-management/resource-directory/product-overview/resource-directory-overview#concept-2436329).

## Procedure

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center).
    
2.  In the left-side navigation pane, choose **Resource Center** > **Cross-account Resource Search**.
    
3.  Click **Enable Cross-account Resource Search**.
    
    After the cross-account resource search feature is enabled, Resource Center is activated for all members in the resource directory, and a service-linked role named AliyunServiceRoleForResourceMetaCenter is created for each member. Resource Center then can assume this role to obtain the organizational structure of the resource directory and build a multi-account resource center. For more information, see [Service-linked role for Resource Center](/help/en/resource-management/security-and-compliance/service-linked-role-for-resource-center#concept-2281154).
    
    In most cases, the system requires a few minutes to build the resource center and update resource information. If you have a large amount of resources, the system may require more time.
