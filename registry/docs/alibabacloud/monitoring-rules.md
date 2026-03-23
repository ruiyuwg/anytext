This topic describes how to configure a monitoring rule in Data Quality, how a monitoring rule can take effect, and the operations that you can perform on the Rules page.

## **Procedure of configuring a monitoring rule in Data Quality**

You can configure a monitoring rule for a single table or configure a monitoring rule for multiple tables at the same time based on a template. Check the following content for configuring a monitoring rule for multiple tables at the same time based on a template.

-   Configure a monitoring rule for a single table
    
    You need to perform the following steps to configure monitoring rules for a table:
    
    1.  Select the table whose data quality you want to check based on monitoring rules.
        
    2.  [Create a monitor for the table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#c9ea80ff524gc).
        
        When you create and configure a monitor for the table, you can specify **the range of table data whose quality you want to monitor**, such as a partition, and select the monitoring rules that you want to associate with the monitor. This way, the monitor can be used to monitor the quality of the specified table data based on the rules.
        
        -   You can create different monitors for different partitions of the same table and associate different monitoring rules with the monitors. This way, the partitions can be monitored based on different data quality check logic.
            
        -   You can specify a trigger method for the monitor. The monitor can be triggered when the scheduling node that generates the table is run or when you manually run the monitor.
            
        -   You can specify the conditions under which alerts are sent. You can determine whether to send alerts based on the severity of data quality check results. You can determine whether to block the task that generates the monitored table based on the severity of data quality issues when data changes in the table are automatically checked.
            
    3.  [Associate monitoring rules](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#1fc379ba663sj) with the monitor.
        
        You can select the monitoring rules based on which you want to monitor the data quality of the **table**. The specific check methods that are defined in the rules are implemented to determine whether the table data meets your business requirements.
        
        Data Quality allows you to create monitoring rules based on built-in rule templates or create custom template rules based on custom SQL statement logic.
        
        -   Built-in template rules: You can create monitoring rules based on [built-in rule templates](/help/en/dataworks/user-guide/built-in-monitoring-rule-templates) provided by DataWorks.
            
        -   Custom template rules: You can create [custom template rules](/help/en/dataworks/user-guide/create-manage-and-use-rule-templates) if the built-in rule templates cannot meet your requirements for monitoring the quality of data specified by partition filter expressions. You can save frequently used custom rules as rule templates for future use.
            
    4.  Test and subscribe to the monitor.
        
    
    For more information, see [Configure rules for a single table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
    
-   Configure a monitoring rule for multiple tables at the same time based on a template
    
    You can perform the following steps to configure a monitoring rule based on a template:
    
    1.  [Select a rule template and configure the rule parameters](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#ba9f32bdd8d7m).
        
        Built-in rule templates are classified into table-level and field-level rule templates. After you select a template, you can configure a rule based on the template to check the data quality of a **table**. You can use the monitoring rule to determine whether the table data is as expected.
        
    2.  [Add multiple tables or fields whose data quality needs to be checked by the rule at the same time](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#96b91ba9a8ctr).
        
        You can select tables or fields whose data quality needs to be checked and apply the rule to the tables or fields.
        
    3.  [Associate the rule with a new monitor or an existing monitor](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#1b36699b6bioe).
        
        You can associate the rule with a new monitor or an existing monitor to specify **the range of data whose quality you want to monitor** based on the rule. If you want to monitor the data quality of a partitioned table, the data range is a partition.
        
    
    For more information, see [Configure a monitoring rule for multiple tables based on a template](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template).
    
    **Note**
    
    You can configure multiple monitoring rules for a single table at a time.
    

## Go to the Rules page

1.  Go to the Data Quality page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  In the left-side navigation pane, choose **Assets** > **Rule List**. The Rules page appears.
    

## View the list of monitoring rules

![规则列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3422669471/p426017.png)

**Area**

**Feature**

**Description**

①

Database selection

You can select the database where the table for which you configure rules resides.

②③

Filter conditions

You can use filter conditions to search for monitoring rules that you want to query.

The filter conditions include **Table Name**, **Template**, **Configuration Source**, **Quality Dimension**, **Degree of importance**, **Enabled Status**, **Association Range**, and **Associated Scheduling**.

④

List of monitoring rules

You can view the details of a monitoring rule. The details include **ID/rule name**, **Quality Dimension**, **Table Name**, **Association Range**, **Template**, **Monitoring Threshold**, **Data range of quality inspection task**, **Degree of importance**, **Enabled Status**, and **Associated Scheduling**. You can also click the options in the Actions column of a monitoring rule to perform different operations on the rule. For example, you can modify the rule, configure alert subscription, delete the rule, and view the operation logs.

-   **Alert Subscription**: allows you to subscribe to check results for nodes based on a monitoring rule. The system notifies you by using notification methods such as **Email**, **Email and SMS**, **DingTalk Chatbot**, **DingTalk Chatbot @ALL**, **Lark Group Chatbot**, **Enterprise Wechat Chatbot**, **Custom Webhook**, and **Telephone**.
    
-   **Operation Logs**: allows you to view the operation logs of a monitoring rule.
    

⑤

Batch operations

You can select multiple monitoring rules and then click options such as **Manage Linked Nodes**, **Subscriptions**, **Enable**, **Disable**, or **Delete** below the rule list to perform the related operation on the selected rules at the same time.
