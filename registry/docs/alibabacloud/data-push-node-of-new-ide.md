The Data Push Node sends query results from other nodes within a Data Studio Workflow to various destinations, including DingTalk, Lark, WeCom, Microsoft Teams, and email. This allows your team members to receive timely data updates.

## **Background**

The Data Push Node retrieves output parameters from upstream SQL query nodes (such as the Assignment Node, Hologres SQL Node, and ClickHouse SQL Node) using **Input and Output Parameters**. You can then use these parameters as placeholders within the message body, which the node sends to a configured destination.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0136902771/CAEQUxiBgICnk4rE5BkiIDRhNDU3NmVkYzQ2NTRmYzVhODllNzUwNTE0MzhjZjU35381100_20250711143904.620.svg)

-   After an upstream SQL query node runs, it generates an output parameter named `outputs` containing the results.
    
-   In the downstream Data Push Node, you use **Input and Output Parameters** to retrieve the `outputs` parameter from the upstream node and assign it as an input parameter.
    
-   In the Data Push Node, you configure the message content to reference the input parameter and specify a destination. The node then pushes the content.
    

The following upstream **SQL query nodes** are supported:

-   [Assignment Node](/help/en/dataworks/user-guide/assignment-node): The Data Push Node cannot directly retrieve data from a MaxCompute SQL Node. You must first use an `Assignment Node` to query this data.
    
-   **Other SQL nodes**: [Hologres SQL Node](/help/en/dataworks/user-guide/hologres-sql-node), [ClickHouse SQL Node](/help/en/dataworks/user-guide/clickhouse-sql), [EMR Spark SQL Node](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio), [EMR Hive Node](/help/en/dataworks/user-guide/emr-hive-new-data-studio), [MaxCompute Script Node](/help/en/dataworks/user-guide/maxcompute-script-node), [ADB for PostgreSQL Node](/help/en/dataworks/user-guide/adb-for-postgresql), and [MySQL Node](/help/en/dataworks/user-guide/new-studio-database-node).
    

## **Prerequisites**

-   A [Workspace](/help/en/dataworks/user-guide/create-a-workspace) is created.
    
-   A [Serverless Resource Group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) is created and bound to the target DataWorks Workspace.
    

## **Limitations**

-   The Data Push feature has the following data size limits per destination:
    
    **Destination**
    
    **Limit**
    
    DingTalk
    
    The data size cannot exceed **20 KB**.
    
    Lark
    
    The data size cannot exceed **20 KB**, and images must be smaller than **10 MB**.
    
    WeCom
    
    Each bot can send a maximum of **20 messages per minute**.
    
    Teams
    
    The data size cannot exceed **28 KB**.
    
    Email
    
    Each Data Push task supports only one email body. For more limits, refer to the **SMTP** restrictions of your email service provider.
    
-   The Data Push feature is available in the following regions:
    
    China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), US (Virginia).
    

## **Navigate to Data Studio**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852353.png) icon to open the Data Studio page.
    

## **Create a data push workflow**

Create and configure a workflow that includes an SQL query node and a Data Push Node.

1.  Create a [Scheduled Workflow](/help/en/dataworks/user-guide/workflow) and add an SQL query node and a Data Push Node.
    
2.  In the SQL query node, write a query to retrieve the data you want to push.
    
    **Note**
    
    -   The Data Push Node cannot directly retrieve data from a MaxCompute SQL node. To use this data, you must first [create an Assignment Node](/help/en/dataworks/user-guide/assignment-node) and in the [Assignment Node](/help/en/dataworks/user-guide/assignment-node) query the result information to be pushed.
        
    -   You can create and use other types of SQL query nodes directly.
        
    
3.  Configure the SQL query node.
    
    On the right side of the node configuration pane, go to the **Scheduling** section and configure **Computing Resource**, **Resource Group**, and **Same-cycle Dependency**. If there are no upstream nodes, you can select **Use Workspace Root Node**. The output parameter configuration varies by node type:
    
    **Node type**
    
    **Description**
    
    Assignment Node
    
    The Assignment Node has a default output parameter. No additional configuration is required.
    
    Other SQL query nodes
    
    These nodes do not have a default output parameter. In the **Scheduling** section on the right, find the **Input and Output Parameters** section. Under **Node Output Parameters**, click **Add Assignment Parameter** to pass the query results to the downstream node.
    
4.  [Create a Data Push Node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and configure the SQL query node as its upstream node.
    
    1.  Click **Scheduling**. Under **Scheduling Dependencies** > **Same-cycle Dependency** section, find your SQL query node by name and click **Add** to make it an upstream node.
        
    2.  Under **Scheduling Policies** > **Resource Group** field, select your Serverless Resource Group.
        
    3.  Under **Input and Output Parameters** > **Input Parameters** section and click **Add Parameter**. Configure the new parameter to use the **output parameter** of the SQL query node as its value source.
        

## **Configure the destination and content**

In the editor for the Data Push Node, you can define a custom push title and configure the destination and message body.

### **Configure the destination**

In the **Destination** section, select a destination.

1.  If the destination does not exist, click **Create Destination**. Alternatively, you can [set a data push destination](/help/en/dataworks/user-guide/push-data#e0805cb8a075x) in DataService Studio.
    
    **Note**
    
    To modify a destination, go to **DataService Studio** > [Data Push](/help/en/dataworks/user-guide/push-data#2b49b60e7105b).
    
2.  On the **Create Destination** page, configure the following parameters:
    
    ## Webhook
    
    **Parameter**
    
    **Description**
    
    **Destination**
    
    Select **DingTalk**, **Lark**, **WeCom**, or **Teams**.
    
    **Destination Name**
    
    Enter a custom name for the destination.
    
    **Webhook**
    
    Obtain the Webhook URL for your selected destination and enter it here.
    
    -   To obtain a Lark bot Webhook, see [Configure a Lark Webhook trigger](https://open.larksuite.com/document/client-docs/bot-v3/add-custom-bot#399d949c).
        
    -   To obtain a Teams Webhook, see [Create an incoming webhook in a Microsoft Teams workflow](https://support.microsoft.com/en-us/office/create-incoming-webhooks-with-workflows-for-microsoft-teams-8ae491c7-0394-4861-ba59-055e33f75498).
        
    
    ## Email
    
    **Parameter**
    
    **Description**
    
    **Destination**
    
    Select **Email**.
    
    **SMTP Host**
    
    The SMTP server address.
    
    **SMTP Port**
    
    The SMTP server port. The default is 465.
    
    **Sender Address**
    
    The sender's email address.
    
    **Sender Nickname**
    
    Optional. A custom display name for the sender.
    
    **SMTP Account**
    
    The SMTP login account.
    
    **SMTP Password**
    
    The password for the SMTP account.
    
    **Receiver Address**
    
    Recipient email addresses. Separate multiple addresses with commas.
    

### **Configure the message body**

You can configure the message body using Markdown, a table, or a dedicated email body.

-   In the Markdown editor, you can use placeholders in the format `${parameter_name}` to include the values of the node's **Input Parameters** from the upstream node.
    
-   When configuring a table in the message body, you can use the field names from the upstream SQL query node's output as **Parameters** to populate the table.
    
-   You can add a dedicated body for email notifications. Note the following:
    
    -   Each Data Push task supports only one email body.
        
    -   The email body is rendered only for Email destinations. For other destinations, such as Webhooks, the content in the **Email bodies** section is ignored.
        

## Run and debug the workflow

After configuring and saving the SQL query node and the Data Push Node, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8524150671/p983255.png) icon in the workflow toolbar to run and debug the task.

## **Next steps**

-   [Configure node scheduling](/help/en/dataworks/user-guide/node-scheduling/): To run the node on a schedule, configure its properties in the **Scheduling** pane under **Scheduling Policies**.
    
-   [Deploy the node](/help/en/dataworks/user-guide/task-release/): To run the task in the Production Environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to start the deployment process. Scheduled tasks run only after you deploy them to the Production Environment.
