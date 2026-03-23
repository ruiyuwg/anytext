You can create an action policy to manage how alert notifications are sent. You can configure an action policy to dynamically send alert notifications to specific users, user groups, or on-duty groups. You can also configure an action policy to escalate an alert that remains unresolved for a long period of time.

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  Go to the Action Policy tab.
    
    1.  In the Projects section, click a project.
        
    2.  In the left-side navigation pane, click **Alerts**.
        
    3.  On the **Alert Center** page, choose **Notification Management** > **Action Policy**.
        
3.  On the **Action Policy** tab, click **Create**.
    
4.  In the **Add Action Policy** dialog box, configure the **ID** and **Name** parameters.
    
    **Parameter**
    
    **Description**
    
    **ID**
    
    The ID of the action policy. Make sure that the ID is unique within your Alibaba Cloud account.
    
    **Name**
    
    The name of the action policy.
    
5.  Create a primary action policy.
    
    1.  On the **Primary Action Policy** tab, click the ![条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6841072261/p243402.png) icon.
        
    2.  Specify a condition to trigger an alert notification.
        
        **Parameter**
        
        **Description**
        
        Condition
        
        -   **All**: The action policy is executed only if all alerts in an alert set meet the specified condition.
            
        -   **Any**: The action policy is executed if one or more alerts in an alert set meet the specified condition.
            
        
        Conditional expression
        
        Alerts that meet a condition are processed based on the action policy. A condition is specified by a conditional expression. You can specify an object, an operator, and an object value for a condition. For example, you can set the object to Alibaba Cloud Account ID, the operator to Equal to, and the object value to 174\*\*\*\*2745.
        
        Mode
        
        You can add multiple conditions in standard mode or advanced mode.
        
        -   **Standard Mode**: If you specify multiple conditions, the conditions are evaluated by using the AND operator.
            
        -   **Advanced Mode**: If you specify multiple conditions, you can use the AND operator or the OR operator to evaluate the conditions. You can also group multiple conditions by using parentheses ().
            
        
    3.  Configure an action group.
        
        Select the notification method that you want to use and configure the related parameters. For more information, see [Notification methods](/help/en/sls/notification-methods#reference-2066133).
        
        **Note**
        
        If you set the Notification Method parameter to EventBridge or Function Compute, you must authorize Simple Log Service to access the required resources. The authorization operation is required only once. During the authorization process, a service-linked role named AliyunServiceRoleForSLSAlert is automatically created. Then, Simple Log Service can assume the service-linked role to access the resources of Alibaba Cloud services such as EventBridge and Function Compute.
        
    4.  Click the ![结束 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0356352261/p243468.png) icon for the **Condition** or **Action Group** node to end the configuration.
        
        If you want to add more conditions and action groups, click the ![条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6841072261/p243402.png) icon.
        
6.  Click **Confirm**.
    

## What to do next

-   Delete a node
    
    Right-click the node that you want to delete and select **Delete Node**.
    
    ![删除节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1079898561/p447857.png)
    
-   Add a node
    
    **Note**
    
    If you added the **End** node, you must delete the **End** node before you can add other nodes, such as **Condition** and **Action Group**.
    
    -   Click the ![条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6841072261/p243402.png) icon to add a **Condition** node.
        
    -   Click the ![行动策略](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0470475661/p447862.png) icon to add an **Action Group** node.
        
    -   Click the ![结束 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0356352261/p243468.png) icon to add an **End** node.
        
    
    ![行动策略](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0470475661/p447859.png)
