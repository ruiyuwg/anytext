This topic describes how to create a service-linked role for the Tag service, view the information about the service-linked role, and delete the service-linked role.

## Overview

A service-linked role is a RAM role whose trusted entity is an Alibaba Cloud service. Service-linked roles can implement authorized access across services. The following table provides the service-linked role for the Tag service.

**Service-linked role for Tag**

**Service identifier**

**Permission policy**

AliyunServiceRoleForTag

tag.aliyuncs.com

AliyunServiceRolePolicyForTag

For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles#concept-2448621).

## Scenarios

-   The Tag service assumes the service-linked role to access resource creation events in ActionTrail, obtain the creator information of resources, and then add createdby tags to the resources.
    
-   The Tag service assumes the service-linked role to access operation records and resources in ActionTrail and Cloud Config, monitor resource changes in real time, and then check the compliance of resource configurations, such as tags.
    

## Create the service-linked role

The Tag service automatically creates the service-linked role when you perform the following operations:

-   Enable createdby tags. For more information, see [Overview](/help/en/resource-management/tag/user-guide/overview-4#task-2117830).
    
-   Enable the Tag Policy feature. For more information, see [Enable the Tag Policy feature](/help/en/resource-management/tag/user-guide/enable-the-tag-policy-feature#task-2182800).
    
-   Enable tag configuration for associated resources. For more information, see [Tag configuration for associated resources](/help/en/resource-management/tag/user-guide/associated-resource-label-settings).
    

## View information about the service-linked role

After the service-linked role is created, you can view the following information about the service-linked role on the details page of the role. To go to the details page of the role, log on to the [RAM console](https://ram.console.alibabacloud.com/roles), go to the Roles page, find the role on the page, and then click the name of the role.

-   **Basic information**
    
    In the **Basic Information** section, you can view the basic information about the role, such as the name, creation time, Alibaba Cloud Resource Name (ARN), and description.
    
-   **Permission policy**
    
    On the **Permissions** tab, you can click the policy name to view the policy document.
    
    **Note**
    
    You cannot view the permission policy that is attached to a service-linked role on the **Policies** page of the RAM console. You can view the permission policy only on the role details page.
    
-   **Trust policy**
    
    On the **Trust Policy** tab, you can view the document of the trust policy that is attached to the role. A trust policy is a policy that contains the trusted entities of a RAM role. A trusted entity refers to an entity that can assume the RAM role. The trusted entity of a service-linked role is a cloud service. You can view the value of the `Service` field in the trust policy of the service-linked role to obtain the trusted entity.
    

For more information about how to view a service-linked role, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role#task-188120).

## Delete the service-linked role

**Warning**

After the service-linked role is deleted, the features that depend on the role cannot be used. Proceed with caution.

If you do not use the Tag service for a long period of time or you want to delete your Alibaba Cloud account, you may need to manually delete the service-linked role.

You can submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to delete the service-linked role.
