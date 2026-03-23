A search for a resource in Resource Center may fail. This topic describes the possible causes for the failure and solutions.

**Cause**

**Solution**

The RAM user that you use to search for the resource does not have access permissions on the resource.

Resource Center allows you to search for only resources on which you have access permissions. If you want to use Resource Center as a RAM user, you must make sure that the RAM user is granted access permissions on the resources that you want to search for.

For information about how to view the permissions of a RAM user, see [View the information about a RAM user](/help/en/ram/user-guide/view-the-basic-information-about-a-ram-user). For information about how to grant permissions to a RAM user, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).

The resource is not supported by Resource Center.

Not all Alibaba Cloud services and resources are supported by Resource Center. You can view and search for only the supported resources. To view and search for resources that are not supported by Resource Center, go to the consoles of the services to which the resources belong. For more information, see [Supported cloud services and resource types for Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center#concept-2134481).

If you want Resource Center to support a type of resource, you can click Submit Feedback in the upper-right corner of the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center) to submit feedback.

The resource is not synchronized to Resource Center.

After you create a resource, Resource Center requires about 2 minutes to synchronize the resource. If you do not find the newly created resource, wait and refresh the resource list.

One or more filter conditions used to search for the resource are invalid.

Check the filter conditions and the logical relationships between them to ensure that the filter conditions meet your expectations.

The resource does not belong to the current account.

After you activate Resource Center, you can only view and search for resources within the current Alibaba Cloud account by default.

If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources within members in the resource directory.

For more information, see [Enable cross-account resource search](/help/en/resource-management/resource-center/user-guide/enable-cross-account-resource-search) and [Manage the delegated administrator account of Resource Center](/help/en/resource-management/resource-center/user-guide/manage-the-delegated-administrator-account-of-resource-center).

The resource does not exist.

The resource is not created or is released. Check whether the resource exists.
