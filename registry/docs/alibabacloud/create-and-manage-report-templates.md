You can dynamically configure report templates on the Report Template Management page. Data Quality can generate and send reports based on a report template as scheduled.

## Prerequisites

DataWorks Enterprise Edition or a more advanced edition is activated so that you can use the report template management feature.

## Create a report template

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  In the left-side navigation pane, choose **Quality Analysis** > **Quality Report**.
    
3.  Click **Create Report Template**.
    
4.  On the **Create Report Template** page, configure the parameters.
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    **Basic Settings**
    
    **Name**
    
    The name of the report template.
    
    **Sending Cycle**
    
    Valid values: **Every Day**, **Every Week**, **Every Month**, and **Do Not Send**.
    
    -   If you select **Every Day**, reports are sent at 11:05 every day by default.
        
    -   If you select **Every Week** or **Every Month**, you must specify the specific day.
        
    
    **Timespan**
    
    The number of days that have elapsed before the current day. The maximum value of this parameter is 30.
    
    **Statistics of Rule Configuration**
    
    You can select metrics based on your business requirements.
    
    **Offline data**
    
    The metrics include **Table count**, **Partition expression count**, **Count of rule on offline data**, and **Rule coverage on tables**.
    
    **Note**
    
    Monitoring coverage indicates the ratio of tables that are configured with data quality monitoring rules to all tables in a workspace.
    
    **Realtime data**
    
    The metrics include **Topic count**, **Count of rule on realtime data**, **Count of rule on cut off data**, **Rule coverage on topic**, **Count of rule on delayed data**, and **Count of customized rule**.
    
    **Statistics of Rule Execution**
    
    You can select metrics based on your business requirements. Quality reports display the selected metrics in charts.
    
    **Offline data**
    
    The metrics are classified into the following types: **About rules**, **About partitions**, and **About tables**.
    
    **Realtime data**
    
    The metrics are classified into the following types: **About messages**, **About alarms**, and **About cut-offs**.
    
    **Subscriptions**
    
    **Notification Method**
    
    DataWorks sends report notifications to subscribers by email.
    
    **Recipient**
    
    The recipient of report notifications. You can add multiple recipients.
    
    **Actions**
    
    You can modify or delete subscriptions that you have added.
    
    **Add Subscription**
    
    Click **Add Subscription** and configure a subscription.
    
5.  Click **Save** in the upper-right corner. A template of data quality reports is generated.
    
    You can also perform the following operations:
    
    -   Click **Preview** in the upper-right corner to view the display format of the report template.
        
        **Note**
        
        If report subscribers view reports in emails, they can view the reports only in tables. If report subscribers view reports on the Data Quality page, they can view the reports in tables or charts.
        
    -   Click **Cancel** in the upper-right corner. In the **Confirm** message, click **OK** to cancel the creation of the report template.
        

## Manage a report template

After a report template is created, the **Report Template Management** page appears. On this page, you can view the details of the report template. You can also perform the following operations:

-   Find the required report template and click **Edit**. On the **Edit Report Template** page, modify the report template.
    
-   Find the required report template and click **Delete**. In the **Confirm** message, click **OK** to delete the report template.
    
-   Find the required report template and click **View Report**. Set the **Query Range** parameter and view related reports.
    
-   Add, modify, and delete subscriptions.
    
    -   Add a subscription.
        
        1.  Find the required report template and click **Manage Subscriptions**.
            
        2.  In the **Subscriptions** dialog box, click **Add Subscription**.
            
        3.  Select the required recipient and click **Save**.
            
        4.  Click **OK**.
            
    -   Modify a subscription.
        
        1.  Find the required report template and click **Manage Subscriptions**.
            
        2.  In the **Subscriptions** dialog box, find the required subscription and click **Modify**.
            
        3.  Select the **required recipient** and click **Save**.
            
        4.  Click **OK**.
            
    -   Delete a subscription.
        
        1.  Find the required report template and click **Manage Subscriptions**.
            
        2.  In the **Subscriptions** dialog box, find the required subscription and click **Delete**.
