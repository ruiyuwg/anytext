[Tags](/help/en/resource-management/tag/product-overview/tag-overview) are used to identify resources. You can use tags to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. This topic describes how to create a predefined tag and add the tag to resources. This topic also describes the operations that you can perform on resources after tags are added to resources.

## **Prerequisites**

The types of resources to which you want to add tags are supported by the Tag service. For more information, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).

## **Step 1: Create a** predefined **tag**

A predefined tag is a tag that you create in advance and is available for resources in all Alibaba Cloud regions. You can plan your tags based on your business requirements by referring to [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design), create a predefined tag, and then add the predefined tag to Alibaba Cloud resources. For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag#t2042780.html).

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**. On the page that appears, click **Create Tag**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7541684471/p938433.png)
    
3.  In the **Create Tag** dialog box, configure tag key and a tag value and click **Create**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7541684471/p938464.png)
    

## **Step 2: Add the predefined tag to resources**

## Add the predefined tag to a new resource

You can use one of the following methods to add the predefined tag to a new resource:

-   Specify the predefined tag when you create a resource in the Alibaba Cloud Management Console. For more information, see the documentation of an Alibaba Cloud service.
    
-   Specify the predefined tag when you create a resource by calling an API operation. For more information, see the documentation of an Alibaba Cloud service.
    

The following example describes how to add the predefined tag when you create a virtual private cloud (VPC) in the VPC console.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  Create a VPC. You must specify the predefined tag for the VPC.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5199070371/p855211.png)
    
    For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    

## Add the predefined tag to an existing resource

You can use one of the following methods to add the predefined tag to an existing resource:

-   Add the predefined tag to an existing resource on the [Tag](https://resourcemanager.console.alibabacloud.com/tags) or [Resource Search](https://resourcemanager.console.alibabacloud.com/resource-center) page of the Resource Management console, or in the console of the Alibaba Cloud service to which the resource belongs.
    
-   Call the [TagResource](/help/en/resource-management/tag/developer-reference/api-tag-2018-08-28-tagresources) operation provided by the Tag service or a tag-related operation provided by the Alibaba Cloud service to which the resource belongs.
    
-   Use CloudOps Orchestration Service (OOS) to add the predefined tag to multiple resources at a time. For more information, see [Use OOS to add tags to multiple ECS instances at a time](/help/en/resource-management/tag/use-cases/use-oos-to-add-tags-to-multiple-ecs-instances-at-a-time-1#task-2387657).
    

The following example describes how to add the predefined tag created in [Step 1](#a90e8ee6fax94) to an existing resource on the Tag page of the Resource Management console.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**.
    
3.  On the Tag page, find the created predefined tag and click **Add to Resources** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9501684471/p938470.png)
    
    **Note**
    
    If a tag key has more than three tag values, you can click **View More** in the Tag Value column to view all tag values of the tag key.
    
4.  In the **Add to Resources** dialog box, specify the resources to which you want to add the predefined tag.
    
    Valid values of the **Method to Specify Resources** parameter:
    
    -   **Select from Resource List**: allows you to select resources from the resource list.
        
    -   **Enter Resource IDs**: allows you to configure the Service and Region parameters and enter resource IDs. Separate multiple IDs with commas (,).
        
    
5.  Click **Add**.
    

**Note**

-   Resource Management provides the Associated Resource Tagging feature. When you manage the tags of a primary resource or establish relationships between the primary resource and other resources, this feature enables the associated resources of the primary resource to automatically inherit the tag changes that are made to the primary resource. This improves O&M efficiency and reduces tag management costs. For example, when you add a tag to or remove a tag from an Elastic Compute Service (ECS) instance, the tag is automatically added to or removed from the cloud disks, elastic network interface (ENI), and elastic IP address (EIP) of the ECS instance. When you attach a cloud disk to the ECS instance, bind an ENI to the ECS instance, or associate an EIP with the ECS instance, the cloud disk, ENI, or EIP automatically inherits the tags of the ECS instance. For more information, see [Inherit tags from associated resources](/help/en/resource-management/tag/user-guide/associated-resource-label-settings).
    
-   You can create a tag policy and specify the compliant tags that must be added to resources in the tag policy. Compliant tags can help you improve efficiency in aspects such as tag-based cost allocation, tag-based access control, and automated O&M. For more information, see [Overview](/help/en/resource-management/tag/user-guide/overview).
    

## **Operations that you can perform based on tags**

After you add tags to resources, you can search for resources, perform resource access control, and implement automated resource O&M based on the tags. The following table lists the services that you can use to perform the preceding operations.

**Service name**

**Scenario**

**Operation**

**References**

Tag

You can add tags to resources and search for resources based on the tags in the Resource Management console or by calling a tag-related API operation.

Search for resources based on tags

[Use tags to query resources](/help/en/resource-management/tag/user-guide/use-tags-to-query-cloud-resources#task-2537601)

OOS

You can add different tags to resources in different environments, resources that run different operating systems, or resources on different mobile platforms. The environments include the production environment and test environment. The operating systems include Windows and Linux. The mobile platforms include iOS and Android. Then, you can create a template in OOS and execute the template to implement automated O&M on multiple resources at a time based on the tags.

Implement automated O&M based on tags

[Use tags to implement automated O&M](/help/en/resource-management/tag/user-guide/use-tag-for-automated-operations#concept-1948862)

Resource Access Management (RAM)

You can use tags in RAM to manage the access and operation permissions of RAM users on different resources.

Perform resource access control based on tags

[Use tags to enable RAM users to manage only authorized ECS instances](/help/en/resource-management/use-tags-to-control-access-to-ecs-resources#task-2376470)
