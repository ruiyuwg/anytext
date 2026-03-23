You can add tags to resources on the **Tag** page of the Resource Management console, on the **Resource Search** or **Cross-account Resource Search** page of the Resource Management console, or in the consoles of other Alibaba Cloud services. We recommend that you add predefined tags to resources to improve tag standardization. This topic describes how to add a predefined tag to resources.

## **Limits**

-   If a resource belongs to an Alibaba Cloud service that can work with the Tag service and the resource type supports tags, you can add tags to the resource. Otherwise, no tags can be added to the resource. For more information, see [Services that work with Tag](/help/en/resource-management/tag/product-overview/services-that-work-with-tag#concept-2537668).
    
-   You can add up to 20 tags to a resource. If you need to add more tags to a resource, you can request a quota increase in [Quota Center](https://quotas.console.alibabacloud.com/products/tag/quotas). For more information, see [Limits](/help/en/resource-management/tag/product-overview/tag-overview#section-fln-n74-2dh).
    

## **Add a predefined tag to a new resource**

When you create a resource in the console of an Alibaba Cloud service, you can add predefined tags to the resource. This section describes how to add a predefined tag when you create a virtual private cloud (VPC) in the VPC console.

1.  Log on to the [VPC console](https://vpc.console.alibabacloud.com/vpc).
    
2.  When you create a VPC, select the key and value of a predefined tag.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5199070371/p855211.png)
    
    For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    

## Add a predefined tag to existing resources

You can add predefined tags to existing resources on the [Tag page of the Resource Management console](https://resourcemanager.console.alibabacloud.com/tags), on the [Resource Search or Cross-account Resource Search page of the Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-center), or in the consoles of other Alibaba Cloud services. This section describes how to add a predefined tag to resources on the **Tag** page of the Resource Management console.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**.
    
3.  In the tag list, find the tag that you want to add to resources and click **Add to Resources** in the **Actions** column.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9501684471/p938470.png)
    
    **Note**
    
    If a tag key has more than three tag values, you can click **View More** in the **Tag Value** column to view all the tag values of the tag key.
    
4.  In the **Add to Resources** dialog box, specify the resources to which you want to add the tag.
    
    -   To add the tag to resources that belong to different services or reside in different regions, set ****Method to Specify Resources**** to **Select from Resource List** and select resources from the displayed resource list. You can specify one or more conditions to filter resources.
        
    -   To add the tag to resources that belong to a specific service and reside in a specific region, set ****Method to Specify Resources**** to **Enter Resource IDs**, select the service and region, and then enter resource IDs. Separate multiple IDs with commas (,).
        
    
5.  Click **Add**.
