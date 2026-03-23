Data Push is a DataWorks feature that lets you query data from a data source with SQL and push the results to a webhook or email address. You can configure a Scheduled Task to periodically send business data to various destinations in a few simple steps. This topic describes how to configure and use the Data Push feature.

## **Overview**

Data Push lets you create a push task where you can write SQL queries to define the data scope and compose the message content as Rich Text or tables. You can configure a Scheduled Task to periodically push data to a destination webhook or email address.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7835712771/CAEQUxiBgICkrZjE5BkiIGM3ZDFhYWQ2MDQ3MTQzMzNhODM3YzExOTEyNjZmOTRi4419985_20240521093715.279.svg)

## **Supported data sources and channels**

-   Supported data source types:
    
    -   MySQL (compatible with StarRocks and Doris)
        
    -   PostgreSQL (compatible with Snowflake and Redshift)
        
    -   Hologres
        
    -   MaxCompute (ODPS)
        
    -   ClickHouse
        
-   Supported push channels: DingTalk, Lark, WeCom, Email, and Teams.
    

## **Limitations**

-   Each SELECT statement can return a maximum of 10,000 rows.
    
-   Data size limits vary based on the destination:
    
    -   DingTalk: The maximum payload size is **20 KB**.
        
    -   Lark: The maximum payload size is **20 KB**, and images must be smaller than **10 MB**.
        
    -   WeCom: Each bot is limited to sending **20 messages/minute**.
        
    -   Teams: The maximum payload size is **28 KB**.
        
    -   Email: Each Data Push task supports only one email body. If an email body has already been added, you cannot add another one. For other limits, see the SMTP restrictions of your email service provider.
        
-   The Data Push feature is available only in DataWorks Workspaces in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), US (Virginia), and Germany (Frankfurt).
    

## Prerequisites

-   A data source is created. For more information about how to create a data source in DataWorks, see [Manage data sources](/help/en/dataworks/user-guide/add-and-manage-data-sources/#0b62c7ef84yni).
    
-   The resource group has public network access enabled. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).
    

## **1\. Create a data push task**

1.  Go to DataService Studio.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the region where your data source is located. In the left-side navigation pane, choose **Data Analysis and Service** > **DataService Studio**. Select your Workspace from the drop-down list and click **Go to DataService Studio**.
    

2.  Create a Data Push task.
    
    In the left-side navigation pane of **DataService Studio**, choose **Service Development** > **Data Push**. On the **Data Push** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p798907.png) icon and select **Create Data Push Task**. Enter a name for the task and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801175.png)
    

## **2\. Configure the data push task**

### Optional: Prepare sample data

To help you quickly get started, the following sections use an example of pushing the query results from a MaxCompute table named `sales`. In this example, the Data Push feature is used to send the daily sales amount for each department and its change from the previous day to a specified channel. To follow this example, create the `sales` table in your environment. The following code provides the statements to create and insert data into the `sales` table. For more information about how to create a table, see [Create and use a MaxCompute table](/help/en/dataworks/user-guide/create-and-manage-maxcompute-tables).

```
CREATE TABLE IF NOT EXISTS sales (
    id BIGINT COMMENT 'Unique identifier',
    department STRING COMMENT 'Department name',
    revenue DOUBLE COMMENT 'Revenue amount'
) PARTITIONED BY (ds STRING);

-- Insert sample data into partitions
INSERT INTO TABLE sales PARTITION(ds='20240101')(id, department, revenue ) VALUES (1, 'Dept. 1', 12000.00);
INSERT INTO TABLE sales PARTITION(ds='20240101')(id, department, revenue ) VALUES (2, 'Dept. 2', 21000.00);
INSERT INTO TABLE sales PARTITION(ds='20240101')(id, department, revenue ) VALUES (3, 'Dept. 3', 5000.00);
 
INSERT INTO TABLE sales PARTITION(ds='20240102')(id, department, revenue ) VALUES (1, 'Dept. 1', 11000.00);
INSERT INTO TABLE sales PARTITION(ds='20240102')(id, department, revenue ) VALUES (2, 'Dept. 2', 20000.00);
INSERT INTO TABLE sales PARTITION(ds='20240102')(id, department, revenue ) VALUES (3, 'Dept. 3', 10000.00);
```

### **Select a data source**

Select the **Data source type**, **Data source name**, and **Data source env.** for the task. You can select the data source environment based on whether you are using a development table or a production table. If you are following the example, make sure to select the environment where you created the sales table.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801352.png)

**Note**

For a list of supported data source types, see [Supported data sources and channels](#1c1e167f37kt1).

### Write the query SQL

-   Define the data scope and retrieve data.
    
    In the **Edit Query SQL** section, write SQL queries to define the data to push. For example:
    
    ```
    -- Get the sales amount for each department on 20240102
    SELECT id, department, revenue FROM sales WHERE ds='20240102';
    -- Get the change in sales amount from the previous day
    SELECT  a.revenue - b.revenue AS diff FROM sales a LEFT JOIN sales b ON a.id = b.id AND a.ds > b.ds WHERE a.ds = '20240102'AND b.ds = '20240101';
    ```
    
    After you finish writing the SQL statements, the fields from the query result are automatically added to the **Parameters** > **Output Parameters** section. If the output parameters fail to parse or are incorrect, you can turn off **Automatically Parse Parameters** and manually **Add Parameter**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801208.png)
    
    You can also configure custom variables in your SQL using the `${variable_name}` format. These variables are **Assignment Parameters**, which can be assigned **Assignment Parameters** or constants. This allows for dynamic parameter input in your code. For more information, see [Configure the push content](#c5e03aa6397qy).
    
    ```
    -- Dynamically assign time variables by using scheduling parameters.
    -- Get the latest sales amount for each department daily.
    SELECT id, department, revenue FROM sales WHERE ds='${date}';
    -- Also, get the change in sales amount from the previous day.
    SELECT a.revenue - b.revenue AS diff FROM sales a LEFT JOIN sales b ON a.id = b.id  and  a.ds > b.ds WHERE a.ds = '${date}' AND b.ds = '${previous_date}';
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801220.png)
    
-   Perform segmented queries.
    
    For large tables, Data Push lets you query data in segments by using the **Next Token** method. You can click **Code Help** > **Code Template** > **Next Token** in the code editor toolbar for usage instructions.
    

### **Configure the push content**

In the **Content to Push** section, you can edit the message content in formats such as **Markdown** and **Table**. This content is then sent to the webhook.

After you set a custom message title in the **Title** field, click **Add** in the content area to choose **Markdown**, **Table**, or **Email Body** to compose the push content. The following example shows a sample configuration. You can click **Preview** in the toolbar to see how the push message will look.

**Note**

-   If the destination is an email, content from the **Markdown** and **Table** sections is sent as attachments. The **Table** content is rendered and displayed in the email message.
    
-   If the destination is not an email, content from the **Markdown** and **Table** sections is displayed as the webhook message body. The **Email Body** content is hidden.
    

#### **Markdown content**

-   **Use parameter variables**: When composing the push content, you can embed **Assignment Parameters** and **Output Parameters** in your rich text content by using the `${parameter_name}` syntax. When the Data Push task runs, it replaces these variables with their assigned values or SQL query results.
    
    -   **Assignment Parameters**: You need to assign a **constant** or a scheduling parameter's **date and time expression** to the variable in the **Parameters** > **Assignment Parameters** section.
        
    -   **Output Parameters**: These are the field names or aliases, such as `A, B, ...`, in a SQL query like `SELECT A,B… FROM TABLE`. They represent the data returned by the query.
        
-   **@mention members**: You can configure this feature to automatically @mention specific people when pushing messages to a Lark webhook.
    
    -   By default, Markdown mode uses Rich Text to compose messages. To @mention users in Lark, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p801245.png) icon to switch to Markdown source mode. You can then use `<at id="all" />` or `<at email="username@example.com" />` to notify them.
        
-   Markdown also supports features like **adding images** and inserting **DingTalk Emojis**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801242.png)
    

#### **Table content**

-   Click **Add Column** to add more columns to the table and associate **Parameters** with them.
    
-   When the destination is a Lark webhook, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p799479.png) icon next to a table column to open the **Modify Field** dialog. Here, you can adjust the **Field**, **Display Name**, **Display Style**, and **Condition** to customize the appearance of the pushed content.
    
    -   **Field**: You can switch to another **Output Parameters** field.
        
    -   **Display Name**: This is the name you want to display in the table header when the content is pushed to a collaboration tool.
        
    -   **Display Style**: Add a fixed prefix or suffix before or after the **Value** in the table.
        
    -   **Condition**: Compares the table's **Value** with a configured value. You can then customize the display color and **Additional Unicode** based on whether the condition is **Yes**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801423.png)
        
    
    **Note**
    
    -   Table creation and support vary by channel:
        
        -   **DingTalk**: Supports Markdown tables and Data Push's built-in tables. However, it does not support the **Display Style** and **Condition** settings configured in the **Modify Field** dialog. The **DingTalk mobile app** does not support displaying tables.
            
        -   **Lark**: Supports both Markdown tables and Data Push's built-in tables, and can render them.
            
        -   **WeCom**: Supports pushing Markdown tables but does not render them.
            
        -   **Teams mobile app**: Supports Markdown tables and can render them.
            
    

#### **Email body**

Data Push allows you to add an email body to your push content. Keep the following points in mind when editing the email body:

-   Each Data Push task supports only one email body.
    
-   The email body is rendered only when the destination is an email. If the destination is not an email, the **Email Body** content is hidden.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2672872471/p923364.png)
    

## **3\. Configure push settings**

Before configuring the **Push Settings**, you must first create a destination. On the **Service Development** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p801263.png) icon in the lower-left corner to open the settings panel. Switch to the **Destination Management** tab and click **Create Destination**. Supported destination types include DingTalk, Lark, WeCom, Teams, and Email.

### **Create a webhook destination**

When you **Create Destination**, configure the following parameters:

-   **Type**: Select the channel type, such as **DingTalk**, **Lark**, **WeCom**, or **Teams**.
    
-   **Destination Name**: Enter a custom name for the new destination.
    
-   **Webhook**: Enter the webhook URL for the selected destination.
    

**Note**

-   For information about how to obtain a Lark bot webhook, see [Configure a Lark Webhook trigger](https://open.larksuite.com/document/client-docs/bot-v3/add-custom-bot#399d949c).
    
-   For information about how to obtain a Teams webhook, see [Create Incoming Webhooks using Microsoft Teams workflow](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5831111471/p821663.png)

### **Create an email destination**

Before configuring the **Push Settings**, you must first create a destination. On the **Service Development** page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p801263.png) icon in the lower-left corner to open the settings panel. Switch to the **Destination Management** tab and click **Create Destination**.

When you **Create Destination**, configure the following parameters:

-   **Type**: Select **Email**.
    
-   **Destination Name**: Enter a custom name for the new destination.
    
-   **SMTP Host**: The email server address.
    
-   **SMTP Port**: The email server port number. The default is 465, which can be modified.
    
-   **Sender Address**: The email sender address.
    
-   **SMTP Account**: The full email account name.
    
-   **SMTP Password**: The password for the email account.
    
-   **Receiver Address**: The destination email address.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2672872471/p916229.png)

### **Push settings**

Click **Push Settings** on the right to configure the schedule, resource group, and destination for the push task. The task will then run on its configured schedule. The specific settings are as follows:

-   **Schedule configuration**: Configure the schedule and specific time for the Data Push service to push the composed content.
    
    **Schedule**
    
    **Specified time**
    
    **Schedule time**
    
    **Example**
    
    **Month**
    
    Specify the days of the month on which the task runs.
    
    The scheduled time for the task to run on the scheduled days.
    
    **Schedule**: Month
    
    **Specified time**: 1st of every month
    
    **Schedule time**: 08:00
    
    **Actual run time**: The task runs at 08:00 on the 1st of every month.
    
    **Week**
    
    Specify the days of the week on which the task runs.
    
    The scheduled time for the task to run on the scheduled days.
    
    **Schedule**: Week
    
    **Specified time**: Monday
    
    **Schedule time**: 09:00
    
    **Actual run time**: The task runs at 09:00 every Monday.
    
    **Day**
    
    **Note**
    
    A daily schedule runs every day.
    
    The scheduled time for the task to run on the scheduled days.
    
    **Schedule**: Day
    
    **Schedule time**: 08:00
    
    **Actual run time**: The task runs at 08:00 every day.
    
    **Hour**
    
    **Note**
    
    You can choose between two push modes:
    
    -   Push at a specified hourly interval.
        
    -   Push at a specified hour and minute.
        
    
    **Push at an hourly interval**:
    
    **Start Time**: 00:00
    
    **Interval**: 1 hour
    
    **End Time**: 23:59
    
    **Actual run time**: The task runs every hour from 00:00 to 23:59 daily.
    
    **Push at a specified hour and minute**:
    
    **Specified hour**: 0, 1
    
    **Specified minute**: 10
    
    **Actual run time**: The task runs at 00:10 and 01:10 every day.
    
-   **Timeout definition**: You can limit the duration of the data push task. If the task exceeds the configured duration, it will be terminated.
    
    -   **System Default**: The task timeout is dynamically adjusted based on the system load, ranging from 3 to 7 days. A task that times out is automatically terminated.
        
    -   **Example**: If you set a **Custom** timeout of 1 hour, the push task will be terminated if it runs for more than 1 hour after its scheduled start time.
        
-   **Effective Date**: Configure the effective time range for the task. If the current system time is outside this range, the task is not automatically scheduled.
    
    -   **Permanent**: The task is always effective and is not limited by a date range.
        
    -   **Example**: If you set a **Specified time** range from 2024-01-01 to 2024-12-31, the task will be pushed according to its schedule within this period.
        
-   **Resource Group for Scheduling**: You can configure an **exclusive resource group for scheduling** or a **serverless resource group** (general-purpose) to provide scheduling resources for the task. For more information about resource groups, see [Manage resource groups](/help/en/dataworks/user-guide/resource-group-management/).
    
-   **Destination**: You can push the configured content to a selected destination. You can only choose from destinations that have already been created. Destinations are configured in **Data Push Task Management**.
    
    **Note**
    
    When pushing to a DingTalk webhook, you must add keywords in the **Security Settings** > **Custom Keywords** section when configuring the bot. Ensure that the push content includes one of these keywords for the push to succeed.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8247431371/p801259.png)

## **4\. Test the data push task**

After creating the task, click **Save** in the toolbar to save the current configuration. Then, click **Test** to perform a test in the development environment to verify that the data can be pushed successfully. You need to manually assign constant values to variables for the test.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801273.png)

**Note**

Before you can **Submit** and **Publish** a Data Push task, it must pass a test in the development environment.

## **5\. Publish the push task**

### **Manage task versions**

1.  After the test in the development environment succeeds, click **Submit**. Unsubmitted tasks remain in a draft state and do not generate a new version.
    
2.  Submitting the task generates a new version. On the **Version** panel on the right, find the submitted version that is marked as **Can Be Published** and click **Publish**. The task is then published and runs periodically according to the **Push Settings**.
    
    You can manage the Data Push task on the **Version** panel.
    
    **Task status**
    
    **Actions**
    
    **Description**
    
    **Published**
    
    **Data Push Task Management**
    
    Go to the **Data Push Task Management** page to view detailed information about published tasks. For more information, see [Manage data push tasks](#8505d45b308xx).
    
    **Can Be Published**
    
    **Publish**
    
    Publish the corresponding version of the task.
    
    **Deprecate**
    
    Deprecate the corresponding version of the task and change its status to **Deprecated**.
    
    **Off-Line**, **Deprecated**
    
    **Version Details**
    
    View the configuration and push content for the corresponding version.
    
    **Roll back**
    
    Roll back to the corresponding version.
    
    **Note**
    
    The **Version Details** and **Roll back** actions are available for tasks in all statuses and function consistently.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p801276.png)
    

### **Manage data push tasks**

After a Data Push task is published, go to the **Data Push Tasks** list page by clicking **Data Push Task Management** in the **Actions** column of the **Version** panel, or by navigating to **Service Management** > **Data Push Task Management**.

This page lists all published **Data Push Tasks** and displays their **ID**, **Name**, **data source name**, **Data source env.**, **Node Mode**, **Resource Group for Scheduling**, **Owner**, **publisher**, and **Published Time**. You can perform the following actions in the **Actions** column for a published task:

**Actions**

**Description**

**Unpublish**

Takes the selected task offline.

**Test**

Go to the **Test Data Push Task** page to test the published task.

**Note**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001891271/p801629.png) icon in the **Name** column to go to the **Version Details** page for the selected task.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801277.png)

### **Test a published task**

After a Data Push task is published, it pushes content to the specified destination based on your configured settings. You can go to the **Test Data Push task** page in one of the following two ways:

-   **Method 1**: Choose **Service Management** > **Test Data Push Task**.
    
-   **Method 2**: Go to **Service Management** > **Data Push Task Management** > **Data Push Tasks**.
    

By testing a published Data Push task, you can confirm whether the task can push data correctly and whether the destination can receive the data properly.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6460083371/p801275.png)
