DataWorks allows you to configure notifications for governance issues that are displayed on the To-Do List page based on your business requirements. You can choose **Overview** > **To-Do List** in the left-side navigation pane to go to the page. The system sends the notifications to the specified contacts by system message, email, or DingTalk group message. This way, the governance issues can be viewed and handled at the earliest opportunity. This topic describes how to add a periodic notification.

## **Permissions**

-   To add and view periodic notifications from the **Global** dimension, you must meet one of the following requirements:
    
    -   You have an Alibaba Cloud account.
        
    -   You have created a Resource Access Management (RAM) user and the `AliyunDataWorksFullAccess` policy is attached to the RAM user.
        
    -   You are a tenant administrator.
        
    -   You are a tenant-level data governance administrator.
        
-   To add and view periodic notifications from the **Workspace** dimension, you must meet one of the following requirements:
    
    -   You have an Alibaba Cloud account.
        
    -   You have created a RAM user and the `AliyunDataWorksFullAccess` policy is attached to the RAM user.
        
    -   You are a workspace administrator.
        
    -   You are a tenant administrator.
        
    -   You are a tenant-level data governance administrator.
        
    -   You are a workspace-level data governance administrator.
        
-   Regular users can add periodic notifications only from the **Individual** dimension.
    

## Go to the Alert Settings page

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **System Settings** > **Alert Settings** to go to the Alert Settings page.
    

## Add a periodic notification

On the **Alert Settings** page, you can select a dimension and add a periodic notification for governance issues from the selected dimension based on your business requirements.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5848625371/p867571.png)

1.  Select a dimension from which you want to add a periodic notification for governance issues.
    
    The following dimensions are supported: **Global**, **Workspace**, and **Individual**. You can select a dimension based on your business requirements.
    
    -   **Global**: You can add periodic notifications for the governance issues in all DataWorks workspaces of a tenant.
        
    -   **Workspace**: You can add periodic notifications for the governance issues in a DataWorks workspace in which you are assigned the Workspace Administrator role. After you click Workspace on the Alert Settings page, you can select a workspace from the **Workspace** drop-down list.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5848625371/p867575.png)
        
        **Note**
        
        If you log on to the DataWorks console with your Alibaba Cloud account or as a RAM user to which the AliyunDataWorksFullAccess policy is attached, you can select any workspace from the Workspace drop-down list.
        
    -   **Individual**: You can add periodic notifications for governance issues that belong to the current account. This means that the current account is the owner of these governance issues.
        
2.  Click **Add Notification**. In the Periodic Notification Settings dialog box, configure the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5848625371/p867579.png)
    
    **Parameter**
    
    **Description**
    
    **Status**
    
    Specify whether to enable the periodic notification. You can turn on or off the switch to enable or disable the periodic notification.
    
    **Notification Event**
    
    Governance issues for which the periodic notification is configured. You can add and configure periodic notifications only for governance issues on the To-Do List page. You can choose **Overview** > **To-Do List** in the left-side navigation pane to go to the page.
    
    **Event Scope**
    
    The scope of governance issues. The scope varies based on the dimension that you select.
    
    -   **Global**: By default, the periodic notification is configured for governance issues in all DataWorks workspaces of a tenant.
        
    -   **Workspace**: The periodic notification is configured for governance issues in a DataWorks workspace in which you are assigned the Workspace Administrator role.
        
    -   **Individual**: The periodic notification is configured for governance issues that belong to the current account. This means that the current account is the owner of these governance issues.
        
    
    **Push Time**
    
    The time when the periodic notification is pushed. The system sends the periodic notification at the top of the hour after the time when all data on the current notification push day is generated. In most cases, the time is `10:00`.
    
    **Note**
    
    The system can send periodic notifications on business days from Monday to Friday.
    
    **Method**
    
    The method that is used to send the periodic notification to the specified contact. Valid values: **System Message**, **Email**, **DingTalk Group**, and **Webhook**.
    
    -   If you select System Message, you can go to the Reminder page. You can choose **Overview** > **Reminder** in the left-side navigation pane to go to the page to view notifications.
        
    -   If you select **DingTalk Group**, you must configure a **DingTalk chatbot**. For more information, see [Scenario practices: Send alert notifications to a DingTalk group](/help/en/dataworks/user-guide/create-a-custom-alert-rule#section-u55-nxf-x4l).
        
    
    **Notification Recipient**
    
    The role or member to which the periodic notification is sent. After you configure this parameter, only the specified role or member can receive the periodic notification.
    
    -   **Role**:
        
        -   If you select the **Global** dimension, only tenant owners and tenant administrators can be selected.
            
        -   If you select the **Workspace** dimension, only roles created in the current workspace can be selected.
            
        -   If you select the **Individual** dimension, the Role parameter is unavailable.
            
    -   **Member**:
        
        -   If the **Global** dimension or **Individual** dimension is selected, you can select a RAM user who belongs to the current tenant.
            
        -   If the **Workspace** dimension is selected, you can select a member in the current workspace. For information about how to add a workspace member, see [Add a RAM user to a workspace as a member and assign roles to the member](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
            
    
3.  Manage the periodic notification.
    
    You can **modify**, **delete**, or **enable or disable** the periodic notification. After you delete or disable the periodic notification, the system no longer sends the periodic notification to the specified contact.
    
4.  View the details of the periodic notification.
    
    After the configuration is complete, the contact will receive the periodic notification for governance issues. The details of the periodic notification include the overview and detailed information of the governance issues from different dimensions, such as computing, storage, and R&D.
    
    -   Overview of the governance issues: the total number of governance issues, the total number of tables involved, and the total number of nodes involved.
        
    -   Pay close attention to the following dimensions:
        
        -   Computing: the total number of issues, the number of nodes involved, the consumed CUs, and the top N governance issues (sorted based on the number of issues).
            
        -   Storage: the total number of issues, the number of tables involved, the consumed storage resources, and the top N governance issues (sorted based on the number of issues).
            
        -   R&D: the total number of issues, the number of nodes involved, the number of tables involved, and the top N governance issues (sorted based on the number of issues).
            
    
    **Note**
    
    If no governance issues are found from one of the preceding dimensions, no information related to the dimension is contained in the periodic notification. If the number of governance issues to be handled is zero, the system does not send periodic notifications.
