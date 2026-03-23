DataWorks Data Quality (DQC) is a powerful data monitoring and assurance platform. It helps you proactively identify and block dirty data in your data production pipeline. This prevents problematic data from propagating to downstream systems, ensures the accuracy of business decisions, and significantly reduces the costs of troubleshooting and resource reruns.

## **Core concepts and workflow**

Before using Data Quality, you should understand its core concepts and workflow. The system is built on the following core components:

1.  **Template**: Defines **how to validate** data. DataWorks provides a rich library of built-in templates, such as table row count and the number of distinct values in a column.
    
2.  **Monitoring Rules**: A specific application of a Rule Template. You can apply a template to a column in a table and configure a specific threshold. For example, the `order_count` column in the `daily_sales` table cannot be null.
    
3.  **Monitor**: An execution plan that associates one or more **Monitoring Rules** with a **Scheduling Node**. When the Scheduling Node runs successfully, it automatically triggers all associated rules for validation.
    
4.  **Strong/Weak Rules and Blocking**: You can configure a rule to either **Blocks** downstream Nodes or only send an **Alert** upon validation failure.
    

**A typical workflow is as follows:**

**Important**

Virtual Nodes and dry-run nodes do not generate actual data and therefore cannot trigger Data Quality validation rules.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9007380771/CAEQUxiBgMDnqbC44hkiIGI2Yzk0YmY4MmE0OTQ0YmRhZGNhODQxYTBmMzg1MGFj5272088_20250611104309.881.svg)

## **Features**

DataWorks Data Quality supports quality validation for common big data storage systems, such as MaxCompute, E-MapReduce, Hologres, and AnalyticDB for MySQL. You can configure monitoring rules across multiple dimensions, including completeness, accuracy, and consistency. By associating these rules with Scheduling Nodes, you can enable automated validation, issue alerts, and blocking.

The main functional modules of Data Quality and their corresponding pages in the console are as follows:

**Module**

**Description**

[Dashboard](/help/en/dataworks/user-guide/go-to-the-overview-page#task-2457239)

Provides a comprehensive overview of Data Quality in your Workspace. It displays key metrics, rule validation trends, the tables with the most issues and their owners, and rule coverage. This helps quality managers quickly assess the overall health of their data and address issues promptly.

Quality Assets

[Rules](/help/en/dataworks/user-guide/monitoring-rules#section-is7-vjd-yop)

Displays a list of all configured rules.

[Rule Template Library](/help/en/dataworks/user-guide/create-manage-and-use-rule-templates#task-2452662)

Allows you to create and manage custom Rule Templates for common monitoring needs. This centralizes rule definitions and streamlines Rule Configuration.

Rule Configuration

[Configure by Table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#task-2458316)

This method lets you configure fine-grained monitoring rules for a single table.

[Configure by Template](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#task-2157268)

This method lets you apply a Rule Template in batch to multiple tables that meet specific conditions.

Quality O&M

[Monitor](/help/en/dataworks/user-guide/view-my-subscriptions)

The Monitor page lists all Quality Monitoring plans created in the current Workspace.

[Running Records](/help/en/dataworks/user-guide/view-monitoring-results)

This page shows the validation results from Quality Monitoring plan runs, where you can view the details of each run.

Quality Analysis

[Quality Reports](/help/en/dataworks/user-guide/create-and-manage-report-templates#task-2457337)

Allows you to create report templates and add various metrics related to rule configuration and runs. Reports are automatically generated and sent on a schedule based on your configured statistical period, delivery time, and subscription settings.

## **Billing**

Running Data Quality rules incurs two types of costs:

-   **DataWorks charges**: DataWorks charges a pay-as-you-go fee based on the number of **Rule Instance** runs. For more information, see [Data Quality instance billing](/help/en/dataworks/resource-costs#8b1ddd8f69cpt).
    
-   **Compute Engine costs**: This process incurs computing costs, such as those for MaxCompute. These costs are charged by the engine provider and are not included in your DataWorks bill.
    

## **Considerations**

-   **Supported data sources**: Only MaxCompute, Hologres, E-MapReduce, Data Lake Formation (DLF), CDH Hive, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, StarRocks, MySQL, Lindorm, and SQL Server are supported. Supported regions vary by data source type. Refer to the documentation of each engine for specific region support.
    
-   **Metadata Collection**: Before you configure rules for non-MaxCompute data sources such as E-MapReduce, Hologres, AnalyticDB, and CDH, you must first complete Metadata Collection. For more information, see [Metadata Collection](/help/en/dataworks/user-guide/metadata-collection/#task-2086683).
    
-   **Network Connectivity**: When validating non-MaxCompute data sources, the associated Scheduling Node must run on a resource group configured with a [network connectivity solution](/help/en/dataworks/user-guide/data-source-test-connectivity).
    

## **Configure and use data quality**

### **1\. Configure rules**

-   **Create Rule**: You can create rules for a single table or in batch for multiple tables using built-in or custom rule templates. For more information, see [Configure by Table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#task-2458316) and [Configure by Template](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#task-2157268).
    
-   **Alert subscription**: After creating a rule, you can configure subscriptions to receive Alert notifications. Supported channels include Email, SMS, DingTalk Chatbot, Enterprise Wechat Chatbot, Lark Group Chatbot, Telephone, and Custom Webhook.
    
    > The **Custom Webhook** option is available only in DataWorks Enterprise Edition and higher.
    

### **2\. Trigger rule validation**

In **Monitor**, associate your rules with a Scheduling Node. When the Scheduling Node runs successfully in **Operation Center**, it automatically triggers the associated Data Quality rules for validation. Based on the rule's type (strong or weak) and the validation result, DataWorks determines whether to mark the Node instance as failed and block downstream Nodes, preventing the spread of dirty data.

### **3\. View validation results**

On the **Running Records** page, you can search by table or node name to view the detailed validation results and logs for each Quality Monitoring run. For more information, see [View quality monitoring execution details](/help/en/dataworks/user-guide/view-monitoring-results#task-2457247).
