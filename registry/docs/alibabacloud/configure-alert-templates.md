Database Autonomy Service (DAS) provides the alerting feature. You can customize alert rules and templates in the DAS console. When an alert is triggered in a database instance, DAS automatically sends an alert notification. This topic describes how to configure and manage alert templates in the DAS console before you configure the alerting feature.

## Create an alert template

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Tools** > **Alert Service** > **Alert Templates**.
    
3.  On the **Alert Templates** page, click **Create Template** in the upper-right corner.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7371484271/p171107.png)
    
4.  In the **Create Template** dialog box, configure the parameters that are described in the following table and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Template Name
    
    The name of the alert template.
    
    Template Type
    
    The type of the alert template. The parameter is set to Database Resource Template.
    
    Select Rule
    
    The alert rules. Select rules from the Existing Rule section or create rules and add the rules to the Selected Rule section. For more information, see [Configure alert rules](/help/en/das/user-guide/configure-alert-rules).
    
    Alert Contact
    
    The alert contacts to which alert notifications are sent. Select contact groups from the Existing Contact Group section or create contact groups and add the contact groups to the Selected Contact Group section. For more information, see [Manage alert contacts](/help/en/das/user-guide/manage-alert-contacts).
    
5.  After the alert template is created, you can configure alerts. For more information, see [Configure alerting](/help/en/das/user-guide/configure-alerting).
    

## Manage an alert template

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Tools** > **Alert Service** > **Alert Templates**.
    
3.  On the **Alert Templates** page, find the alert template that you want to manage and click one of the following buttons in the **Actions** column.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8092672371/p171108.png)
    
    -   **Search**: View the details or alert history of the alert template.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8092672371/p826459.png)
        
        **Note**
        
        You can click **X** next to a resource associated with the alert template to disassociate the resource.
        
    -   **Associate**: Associate the alert template with clusters or instances.![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7371484271/p171110.png)
        
        **Parameter**
        
        **Description**
        
        Associated Dimension
        
        Specify whether you want to associate the alert template with all resources, specific clusters, or specific instances.
        
        Resource Object
        
        Select the resources that you want to associate with the alert template.
        
    -   **Edit**: Modify the alert template.
        
    -   **Disable**: Disable the alert template.
        
    -   **Delete**: Delete the alert template.
