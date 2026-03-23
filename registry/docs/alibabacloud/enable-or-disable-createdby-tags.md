You can use createdby tags only after you enable createdby tags. This topic describes how to enable or disable createdby tags.

## Background information

Only an Alibaba Cloud account or a RAM user to which the [AliyunTagAdministratorAccess](/help/en/ram/developer-reference/aliyuntagadministratoraccess) policy is attached can be used to enable or disable createdby tags. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).

## Enable createdby tags

After you enable createdby tags, the system automatically adds `createdby` tags to newly created resources. The system does not add `createdby` tags to the resources that are created before you enable createdby tags.

You cannot manually add `createdby` tags to or remove createdby tags from resources. `createdby` tags are not included in the number of tags that can be added to a resource.

1.  Go to the [Createdby Tag](https://resourcemanager.console.alibabacloud.com/tag-createby) page.
    
2.  Click **Enable Createdby Tag**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5736248471/p961700.png)
    
3.  Read the information about the service-linked role for the Tag service and click **OK**.
    
    For more information, see [Service-linked role for Tag](/help/en/resource-management/security-and-compliance/service-linked-role-for-tag#concept-2117721).
    

## Disable createdby tags

After you disable `createdby` tags, the system no longer adds createdby tags to newly created resources but retains the createdby tags that are added.

1.  Go to the [Createdby Tag](https://resourcemanager.console.alibabacloud.com/tag-createby) page.
    
2.  Click **Createdby Tag**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5736248471/p961701.png)
    
3.  In the **Disable Createdby Tag** message, click **OK**.
