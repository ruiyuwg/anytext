On the Quality inspection task page, you can view all monitors that are created in the current workspace. You can search for monitors that you subscribe to by email or SMS.

## Procedures

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  In the left-side navigation pane, choose **Quality O&M** > **Monitor**.
    
3.  In the Connection section on the left side of the Quality inspection task page, select the database where the table for which you configure a monitor resides and find the desired monitor. Alternatively, select **My Subscriptions** at the top of the page to find the desired monitor.
    
    Data Quality supports various data source types, such as MaxCompute, E-MapReduce (EMR), Hologres, CDH Hive, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, StarRocks, and MySQL. You can select a data source type based on your business requirements and view the monitors that you subscribe to.
    
    -   Click the name of the monitor in the **Monitor ID/name/description** column. You can view quality monitoring details or click **Edit** at the bottom of the page to modify the configuration. For more information, see [Configure a monitoring rule for a single table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
        
    -   Click **Latest Running Record** in the **Actions** column to go the **Quality inspection task running details** page. For more information, see [View the details of a monitor](/help/en/dataworks/user-guide/view-monitoring-results#concept-wq3-v43-r2b).
        
    -   Click **Alert Subscription** in the **Actions** column to modify the alert notification settings. The following notification methods are supported: **Email**, **Email and SMS**, **DingTalk Chatbot**, **DingTalk Chatbot @ALL**, **Lark Group Chatbot**, **Enterprise WeChat Chatbot**, **Custom Webhook**, and **Telephone**.
        
        **Note**
        
        -   After adding DingTalk chatbots, Lark group chatbots, or enterprise wechat chatbots and obtaining their WebHook URLs, simply copy the WebHook URL to the **Alert Subscription** section.
            
        -   The **Custom WebHook** notification method is supported only in the DataWorks Enterprise Edition. For the message format, see [Appendix: Message format of alert notifications sent by using a custom webhook URL](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#section-75a-729-m3w).
            
        -   When the subscription method is set to **Email**, **Email and SMS**, or **Telephone**, you can specify the authorized recipients as one of the following:
            
            -   **Data Quality Monitoring Owner**: The alert will be sent to the person configured as the **Quality Monitoring Owner** in the **Basic Configurations**.
                
            -   **Shift Schedule**: If a quality rule check is triggered by an associated node, the alert will be sent to the [on-duty engineer scheduled for the day](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule).
                
            -   **Scheduling Task Owner**: The alert will be sent to the owner of the scheduling node associated with the quality monitoring rule.
                
        
    -   You can also click **Delete** in the **Actions** column to delete subscription information.
