DataWorks allows you to create a data quality monitoring node and add monitoring rules to the node to monitor the data quality of a specific table of a data source. For example, you can use the data quality monitoring node to check whether dirty data exists. You can also configure a custom scheduling policy for the data quality monitoring node to periodically run the node to check data. This topic describes how to create and use a data quality monitoring node to monitor the data quality of a table.

## **Background information**

To ensure data quality, DataWorks Data Quality detects changes in source data and tracks dirty data that is generated during the extract, transform, load (ETL) process. DataWorks Data Quality automatically blocks the running of tasks that involve dirty data to effectively stop the spread of dirty data to descendant tasks. This way, you can prevent tasks from producing unexpected dirty data that affects the smooth running of tasks and business decision-making. This also helps you reduce the time for troubleshooting issues and prevents the waste of resources caused by rerunning tasks. For more information, see [Data Quality overview](/help/en/dataworks/user-guide/data-quality/).

## **Limits**

-   Supported data source types: MaxCompute, E-MapReduce (EMR), Hologres, Cloudera's Distribution Including Apache Hadoop (CDH) Hive, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, and StarRocks.
    
-   Scope of tables that can be monitored:
    
    -   You can monitor only the tables of a data source that is added to the workspace to which the current data quality monitoring node belongs.
        
    -   Each data quality monitoring node can monitor the data quality of only one table. However, you can add multiple monitoring rules to a data quality monitoring node. The monitoring scope varies based on the table type.
        
        -   Non-partitioned table: By default, all data in the table is monitored.
            
        -   Partitioned table: You must specify a partition filter expression to determine the partition whose data quality you want to monitor.
            
        
        **Note**
        
        If you want to monitor the data quality of multiple tables, create multiple data quality monitoring nodes.
        
-   Supported operations:
    
    -   After you create data quality monitoring rules in Data Studio, you can run, modify, and publish the monitoring rules or perform other management operations on the monitoring rules only in Data Studio. In DataWorks Data Quality, you can view the monitoring rules but cannot trigger the monitoring rules to periodically run or perform management operations on them.
        
    -   If you modify the monitoring rules configured in a data quality monitoring node and deploy the node, the original monitoring rules are replaced.
        

## **Prerequisites**

-   The required computing resource is associated with the workspace. The table whose data quality you want to monitor is created in the computing resource.
    
    Before you run a data quality monitoring node, you must create a table whose data quality you want to monitor. For more information, see [Associate a computing resource](/help/en/dataworks/create-and-manage-compute-resources-new-data-development) and [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/).
    
-   A resource group is created.
    
    You can run data quality monitoring nodes only by using a serverless resource group. For more information, see [Resource group management](/help/en/dataworks/user-guide/resource-group-management/).
    
-   (Required if you use a RAM user to develop tasks) The RAM user is added to the DataWorks workspace as a member and is assigned the **Development** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. We recommend that you assign the Workspace Administrator role to a user only when necessary. For more information about how to add a member and assign roles to the member, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    

## **Step 1: Create a data quality monitoring node**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960533.png) icon. In the **Workspace Directories** section of the DATA STUDIO pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960534.png) icon and choose **Create Node** > **Data Quality** > **Quality Monitoring**. In the Create Node dialog box, configure the Path and Name parameters and click OK.
    

## **Step 2: Configure data quality monitoring rules**

### **1\. Select a table whose data quality you want to monitor**

In the Monitoring Rules section of the configuration tab of the node, click **Add Table**. In the **Add Table** panel, select the table whose data quality you want to monitor. You can click **More** and specify the filter conditions to quickly locate the desired table.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961271.png)

**Note**

If the desired table is not displayed, you can go to Data Map and [manually refresh the metadata of the table](/help/en/dataworks/user-guide/view-and-manage-tables-and-data-permissions#section-wxb-w1r-ta5).

### **2\. Configure the range of data that you want to monitor**

-   Non-partitioned table: By default, all data in a table is monitored. If your table is a non-partitioned table, you can skip this configuration.
    
-   Partitioned table: If your table is a partitioned table, you must select the partition whose data quality you want to monitor. You can use [scheduling parameters](/help/en/dataworks/user-guide/configure-scheduling-parameters/) to specify the partition. You can click **Preview** to check whether the calculation result of the partition filter expression that you specified meets your expectations.
    

### **3\. Configure data quality monitoring rules**

You can create a monitoring rule or import an existing monitoring rule. By default, the configured rules are enabled.

**Note**

-   DataWorks provides the **Copilot-based rule recommendation** feature for you to create data quality monitoring rules for a data quality monitoring node. The feature can automatically generate data quality monitoring rules based on the information of the table. You can accept or reject the monitoring rules based on your business requirements.
    
-   [DataWorks Copilot Code Programming Assistant](/help/en/dataworks/user-guide/dataworks-copilot) is available for public preview only in specific regions. If DataWorks Copilot is unavailable in the region where your workspace resides, you can refer to the following information to import existing or create data quality monitoring rules.
    

-   #### **Create a monitoring rule**
    
    Click **Create Rule** to create a monitoring rule based on a template or a custom SQL statement.
    
    #### **Method 1: Create a monitoring rule based on a built-in rule template**
    
    DataWorks provides various built-in rule templates that you can use to create a data quality monitoring rule. The following figure shows the procedure.
    
    **Note**
    
    You can also find the desired template in the built-in rule template list on the left side of the Create Rule panel and click **\+ Use** to create a monitoring rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961280.png)
    
    **System rule template parameters**
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    The name of the monitoring rule.
    
    **Template**
    
    Define the type of rule validation that needs to be performed on the table.
    
    Data Quality provides many built-in table-level and field-level rule templates that are ready for use. For more information, see [View built-in rule templates](/help/en/dataworks/user-guide/built-in-monitoring-rule-templates#concept-2452118).
    
    **Note**
    
    You can configure field-level monitoring rules of the following types only for numeric fields: average value, sum of values, minimum value, and maximum value.
    
    **Rule Scope**
    
    The application scope of the rule. For a table-level monitoring rule, the application scope is the current table by default. For a field-level monitoring rule, the application scope is a specific field.
    
    **Comparison Method**
    
    The comparison method that is used by the rule to check whether the table data is as expected.
    
    -   **Manual Settings**: You can configure the comparison method to compare the data output result with the expected result based on your business requirements.
        
        You can select different comparison methods for different rule templates. You can view the comparison methods that are supported by a rule template in the DataWorks console.
        
        -   For numeric results, you can compare a numeric result with a fixed value, which is the expected value. The following comparison methods are supported: Greater Than, Greater Than Or Equal To, Equal To, Not Equal To, Less Than, and Less Than Or Equal To. You can configure the normal data range (normal threshold) and abnormal data range (red threshold) based on your business requirements.
            
        -   For fluctuation results, you can compare a fluctuation result with a fluctuation range. The following comparison methods are supported: **Absolute Value**, **Raise**, and **Drop**. You can configure the normal data range (normal threshold) based on your business requirements. You can also define data output exceptions (orange threshold) and unexpected data outputs (red threshold) based on the degree of abnormal deviation.
            
    -   **Intelligent Dynamic Threshold**: If you select this option, you do not need to manually configure the fluctuation threshold or expected value. The system automatically determines the reasonable threshold based on intelligent algorithms. If abnormal data is detected, an alert is immediately triggered or the related task is immediately blocked. When the Comparison Method parameter is set to Intelligent Dynamic Threshold, you can configure the Degree of importance parameter.
        
        **Note**
        
        Only monitoring rules that you configure based on a **custom SQL statement**, **a custom range, or a dynamic threshold** support the intelligent dynamic threshold comparison method.
        
    
    **Monitoring Threshold**
    
    -   If you set the **Comparison Method** parameter to **Manual Settings**, you can configure the **Normal Threshold** and **Red Threshold** parameters.
        
        -   **Normal Threshold**: If the data quality check result meets the specified condition, the data output is as expected.
            
        -   **Red Threshold**: If the data quality check result meets the specified condition, the data output is not as expected.
            
    -   If the rule that you configure is a rule of the **Intelligent Dynamic Threshold**, you must configure the **Orange Threshold**.
        
        -   **Orange Threshold**: If the data quality check result meets the specified condition, the data is abnormal but your business is not affected.
            
    
    **Retain problem data**
    
    If the monitoring rule is enabled and a data quality check based on the rule fails, the system automatically creates a table to store the problematic data that is identified during the data quality check.
    
    **Important**
    
    -   The Retain problem data parameter is available for MaxCompute and Hologres tables.
        
    -   The Retain problem data parameter is available only for specific monitoring rules in Data Quality.
        
    -   If you **Disable** the monitoring rule, problematic data is not stored.
        
    
    **Status**
    
    Specifies whether to **Enable** or **Disable** the rule in the production environment.
    
    **Important**
    
    If you **Disable** the rule, the rule cannot be triggered to perform a test run or triggered by the associated scheduling nodes.
    
    **Degree of importance**
    
    The strength of the rule in your business.
    
    -   Strong rules are important rules. If you set the parameter to Strong rules and the critical threshold is exceeded, the scheduling node that you associate with the monitor is blocked by default.
        
    -   Weak rules are regular rules. If you set the parameter to Weak rules and the critical threshold is exceeded, the scheduling node that you associate with the monitor is not blocked by default.
        
    
    **Configuration Source**
    
    The source of the rule configuration. The default value is **Data Quality**.
    
    **Description**
    
    You can add additional descriptions to the rule.
    
    #### **Method 2: Create a monitoring rule based on a custom rule template**
    
    Before you use this method, you must perform the following steps to create a custom rule template: Go to the **Data Quality** page. In the left-side navigation pane, choose **Quality Assets** > ******Rule Template Library******. In the Custom Template Category section of the Templates page, click the plus icon to create a custom rule template. Then, you can create a monitoring rule based on the rule template. For more information, see [Create and manage custom rule templates](/help/en/dataworks/user-guide/create-manage-and-use-rule-templates).
    
    The following figure shows how to create a monitoring rule based on a custom rule template.
    
    **Note**
    
    You can also find the desired template in the custom rule template list on the left side of the Create Rule panel and click **\+ Use** to create a monitoring rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961281.png)
    
    **Custom rule template parameters**
    
    Only the parameters that are unique to rules based on custom rule templates are described in the following table. For information about other parameters, see the parameters for configuring a rule based on a built-in rule template.
    
    **Parameter**
    
    **Description**
    
    **FLAG parameter**
    
    The SET statement that you want to execute before the SQL statement in the rule is executed.
    
    **SQL**
    
    The SQL statement that determines the complete check logic. The returned results must be numeric and consist of one row and one column.
    
    In the custom SQL statement, enclose the partition filter expression in brackets \[\]. Example:
    
    ```
    SELECT count(*) FROM ${tableName} WHERE ds=$[yyyymmdd];
    ```
    
    **Note**
    
    -   In this statement, the value of the `${tableName}` variable is dynamically replaced with the name of the table for which you are configuring monitoring rules.
        
    -   For information about how to configure a partition filter expression, see the [Appendix 2: Built-in partition filter expressions](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#f6e0bd917aalm) section in this topic.
        
    -   If you have created a [monitor](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#c9ea80ff524gc) for the table, the setting of the table partition that you specify in the **Data Range** parameter during the monitor configuration no longer takes effect for the table after you configure this parameter. The rule determines the table partition to be checked based on the setting of **WHERE** in the SQL statement.
        
    
    #### **Method 3: Create a monitoring rule based on a custom SQL statement**
    
    This method allows you to configure custom data quality check logic for tables.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961284.png)
    
    **Custom SQL parameters**
    
    Only parameters unique to custom SQL are shown here. For explanations of other parameters, see the system rule template parameter descriptions.
    
    **Parameter**
    
    **Description**
    
    **FLAG parameter**
    
    The SET statement that you want to execute before the SQL statement in the rule is executed.
    
    **SQL**
    
    The SQL statement that determines the complete check logic. The returned results must be numeric and consist of one row and one column.
    
    In the custom SQL statement, enclose the partition filter expression in brackets \[\]. Example:
    
    ```
    SELECT count(*) FROM <table_name> WHERE ds=$[yyyymmdd];
    ```
    
    **Note**
    
    -   You must replace `<table_name>` with the name of the table for which you are configuring monitoring rules. The SQL statement determines the table that needs to be monitored.
        
    -   For information about how to configure a partition filter expression, see the [Appendix 2: Built-in partition filter expressions](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#f6e0bd917aalm) section in this topic.
        
    -   If you have created a [monitor](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#c9ea80ff524gc) for the table, the setting of the table partition that you specify in the **Data Range** parameter during the monitor configuration no longer takes effect for the table after you configure this parameter. The rule determines the table partition to be checked based on the setting of **WHERE** in the SQL statement.
        
    
-   #### **Import an existing monitoring rule**
    
    If you already created monitoring rules for the selected table in **Data Quality**, you can import the rules to clone the rules. If you did not create monitoring rules for the table, you can create monitoring rules for the table in Data Quality. For more information, see [Configure rules: By table (single table)](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
    
    **Note**
    
    You can import multiple rules at a time and configure monitoring rules for fields in a table.
    
    Click **Import Rule**. In the Batch Import panel, you can specify filter conditions, such as the rule ID or name, rule template, and association range, to search for and select the rules that you want to import. The association range specifies the range of data that you want to monitor, which can be the entire table or specific fields in the table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961289.png)
    

**Note**

If you add and configure monitoring rules in a **data quality monitoring node**, after you publish the node, you can view the details of the monitoring rules in **Data Quality**. However, you cannot perform management operations on the rules, such as modifying or deleting the rules.

### **4\. Configure runtime resources**

Select the resources required to run the rules. This means that you must select the data source in which you want to run the related data quality monitoring node. By default, the data source to which the monitored table belongs is selected.

**Note**

If you select another data source, make sure that the data source can access the table that you want to monitor.

## **Step 3: Configure a handling policy for the check result**

In the **Handling Policy** section of the configuration tab of the data quality monitoring node, configure a handling policy and a subscription method for the exception that is identified based on the monitoring rule.

### **Exception categories**

**Exception category**

**Description**

Strong rule - Check failed

-   **Rule strength**: The importance of the rule.
    
-   **Red Abnormal**: The data validation metric hits the red threshold range for abnormal quality. This range usually means that the data validation does not meet expectations and will severely affect subsequent business operations.
    
-   **Orange Abnormal**: The data validation metric hits the orange threshold range for abnormal quality. This range usually means that the data validation is abnormal but does not affect subsequent business operations.
    
-   **Check Failed**: The validation task failed to run. For example, the monitored partition was not generated, or the SQL script used for monitoring failed to run.
    

Strong rule - Critical threshold exceeded

Strong rule - Warning threshold exceeded

Weak rule - Check failed

Weak rule - Critical threshold exceeded

Weak rule - Warning threshold exceeded

### **Handling policies for exceptions**

You can configure a policy to handle the exceptions that are identified based on the monitoring rules.

-   Do not ignore: Stop the current node and set the node status to Failed when a specific exception is identified on the node. For example, you can use this policy to handle the exception that the critical threshold of a strong monitoring rule is exceeded.
    
    **Note**
    
    -   If the current node fails to run, the nodes that depend on the current node do not run. This blocks the production link and prevents the spread of dirty data.
        
    -   You can add multiple exception categories for detection.
        
    -   You can use this policy when an exception has a large impact and blocks the running of descendant nodes.
        
    
-   Ignore: Ignore the exception and continue to run the descendant nodes.
    

### **Subscription method for exceptions**

You can specify a method to receive information about exceptions, such as by email. When an exception is identified, DataWorks pushes information about the exception by using the specified method. This way, the related personnel can handle the exception at the earliest opportunity.

**Note**

DataWorks supports multiple methods to receive information about exceptions. You can view the methods in the DataWorks console. Take note of the following items:

-   If you use the email, email and text message, or phone call method, you can configure only the user to which the current account belongs as the recipient. Make sure that the email address or mobile phone number of the related user is correctly configured. For more information, see [View and set alert contacts](/help/en/dataworks/user-guide/configure-and-view-alert-contacts).
    
-   If you use other methods, specify the webhook URL used to receive the exception information. For information about how to obtain a webhook URL, see [Obtain a webhook URL](https://open.dingtalk.com/document/orgapp/assign-a-webhook-url-to-an-internal-chatbot#title-8n9-0a4-x3o).
    

## **Step 4: Configure scheduling properties for the node**

If you want to periodically run the created data quality monitoring node, click **Properties** in the right-side navigation pane of the configuration tab of the node and configure the scheduling properties for the node based on your business requirements. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/schedule/).

## **Step 5: Debug the data quality monitoring node**

You can perform the following operations to check whether the node is configured as expected based on your business requirements:

1.  Optional. Select a resource group and assign scheduling parameters to variables.
    
    -   In the right-side navigation pane of the configuration tab of the data quality monitoring node, click **Run Configuration**. On the Debugging Configurations tab, configure a **resource group for scheduling**.
        
    -   If you configure scheduling parameters for the node, assign values to the scheduling parameters in the **Script Parameters** section for debugging. For information about the value assignment logic of scheduling parameters, see [Task debugging process](/help/en/dataworks/user-guide/debugging-procedure).
        
2.  Save and run the node.
    
    In the top toolbar of the configuration tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961378.png) icon to save the node and the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4102368471/p961379.png) icon to run the node.
    
    After node running is complete, you can view the running result in the lower part of the configuration tab of the node. If the node fails to run, troubleshoot the issue based on the reported error.
    

## **Step 6: Deploy the data quality monitoring node**

After the configuration of the node is complete, you must deploy the node. After the node is deployed, the system periodically runs the node based on the scheduling properties of the node.

**Note**

When you deploy the node, the monitoring rules configured in the node are also deployed.

1.  In the top toolbar of the configuration tab of the node, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960575.png) icon to **save** the node.
    
2.  In the top toolbar, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960577.png) icon to **deploy** the node.
    

For more information about how to deploy a node, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).

## **What to do next**

-   Perform O&M on the node: After you deploy the node, the node is periodically run based on the configurations. To view the scheduling status of the node, such as the node running status and the details of triggered monitoring rules, you can click **O&M** in the upper-right corner of the configuration tab of the node to go to Operation Center. For more information, see [Manage auto triggered tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-1939610).
    
-   Monitor data quality: After the data quality monitoring rule is published, you can go to the Data Quality page to view the details of the rule. However, you cannot perform management operations on the rule, such as modifying or deleting the rule. For more information, see [Data Quality](/help/en/dataworks/user-guide/data-quality/).
