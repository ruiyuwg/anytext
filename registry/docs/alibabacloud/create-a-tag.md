You can create tags on the **Tag** page of the Resource Management console, on the **Resource Search** or **Cross-account Resource Search** page of the Resource Management console, or in the consoles of other Alibaba Cloud services. By default, tags created on the **Tag** page of the Resource Management console are predefined tags. To standardize tag management and ensure compliance in tag management, we recommend that you create predefined tags. This topic describes how to create a predefined tag on the **Tag** page of the Resource Management console.

## **What is a** predefined **tag?**

A predefined tag is a tag that you create in advance and is available for resources in all Alibaba Cloud regions. You can plan tags based on your business requirements by referring to [Best practices for tag design](/help/en/resource-management/tag/use-cases/best-practices-for-tag-design), create predefined tags, and then add the tags to resources in the stage of tag implementation.

You can create predefined tags but do not add them to resources.

You can specify only a tag key when you create a predefined tag. You can specify a tag value for the predefined tag in subsequent operations.

## **Limits**

-   Maximum number of predefined tags that can be created within a single Alibaba Cloud account: 1,000
    
-   Maximum number of tag values that can be specified for a single predefined tag key: 1,000
    

## **Procedure**

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**.
    
3.  On the **Tag** page, click **Create Tag**.
    
4.  In the **Create Tag** dialog box, specify a tag key and a tag value, or click **Upload .xlsx File** to upload an Excel file that contains tag information. Then, click **Create**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7555784471/p942091.png)
    
    -   **Tag Key**: Required. A tag key can contain up to 128 characters. It cannot start with aliyun or acs: and cannot contain http:// or https://. The value must be a UTF-8 encoded string and can contain letters, digits, space characters, and the following special characters: \_ . # / = + - @. You can enter up to 10 tag keys at a time.
        
    -   **Tag Value**: Optional. A tag value can contain up to 128 characters. It cannot start with aliyun or acs: and cannot contain http:// or https://. The value must be a UTF-8 encoded string and can contain letters, digits, space characters, and the following special characters: \_ . # / = + - @.
        
    
    **Note**
    
    -   The allowed characters for tag keys and values can vary by cloud service. Please refer to the specific constraints for each service.
        
    -   If the tag key you enter already exists, the tag value you enter is added for the tag key.
        
    
5.  In the **Create Tag** dialog box, click **I Understand**.
    

## What to do next

After the predefined tag is created, you can add it to resources. For more information, see [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag#task-2043261).

## **References**

You can downgrade a predefined tag to a regular tag or upgrade a regular tag to a predefined tag based on your business requirements. For more information, see [Downgrade or upgrade a tag](/help/en/resource-management/tag/user-guide/delete-a-tag).
