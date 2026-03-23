Data Quality provides preset table-level and field-level monitoring templates. This topic describes how to configure monitoring rules using a template.

## Limits

You can configure monitoring rules using templates for MaxCompute, EMR, Hologres, CDH Hive, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, StarRocks, MySQL, Lindorm, SQL Server, and DLF data sources.

## Configuration flow

The following steps outline the process of configuring quality rules using a template:

1.  [Select a rule template and configure the rule parameters](#ba9f32bdd8d7m).
    
    The built-in templates are categorized as table-level and field-level rule templates. After you select a template, you can define the check method for the Data Quality rule. The rule uses the **table** to be checked as the object. The Data Quality rule defines the specific method to check the table data and determine whether it meets your expectations.
    
2.  [Add tables or fields that require rule checks in batches](#96b91ba9a8ctr)
    
    You can select the tables or fields to check in batches and apply the rule template to them.
    
3.  [Associate the rule with a new or existing monitor](#1b36699b6bioe)
    
    You can associate quality rules with a quality monitor for a specific object, which is a **Data Range** of a table, such as a specific partition of a partitioned table, to define the quality checks to perform on the data.
    

## **Procedure**

### **Step 1. Go to the Configure by Template page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  In the navigation pane on the left, select **Configure Rules** > **Configure by Template**.
    
    Data Quality provides built-in **Table Level** and **Field Level** rule templates. Click **Configure Monitoring Rules** for a template to configure rules for multiple tables or fields simultaneously.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6986489471/p776289.png)
    

### **Step 2. Configure the properties of the monitoring rule**

1.  Select the template to apply to multiple tables or partitions in batches, and click **Configure Monitoring Rules** in the **Actions** column to open the **Batch Add Monitoring Rules** page.
    
2.  You can configure the **Basic Attributes** of the monitoring rule.
    
    **Parameter**
    
    **Description**
    
    **Data Source Type**
    
    Select the data source type for the table to which this monitoring rule will apply.
    
    **Note**
    
    You can configure monitoring rules using templates for MaxCompute, EMR, Hologres, CDH Hive, AnalyticDB for PostgreSQL, AnalyticDB for MySQL, StarRocks, MySQL, Lindorm, SQL Server, and DLF data sources.
    
    **Rule Source**
    
    Displays **Built-in Template** and the selected rule templates. This setting cannot be modified. For more built-in rule templates, see [View built-in rule templates](/help/en/dataworks/user-guide/built-in-monitoring-rule-templates#concept-2452118).
    
    **Template**
    
    **Rule Name**
    
    The system automatically generates a rule name. You can adjust the name suffix as needed.
    
3.  Configure the advanced properties of the monitoring rule.
    
    **Parameter**
    
    **Description**
    
    **Degree of importance**
    
    The strength of the rule in your business.
    
    -   Strong rules are important rules. If you set the parameter to Strong rules and the critical threshold is exceeded, the scheduling node that you associate with the monitor is blocked by default.
        
    -   Weak rules are regular rules. If you set the parameter to Weak rules and the critical threshold is exceeded, the scheduling node that you associate with the monitor is not blocked by default.
        
    
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
            
    
    **Status**
    
    Specifies whether to **Enable** or **Disable** the rule in the production environment.
    
    **Important**
    
    If you **Disable** the rule, the rule cannot be triggered to perform a test run or triggered by the associated scheduling nodes.
    
4.  Click **Next** to proceed to the **Generate Monitoring Rule** page.
    

### **Step 3. Add multiple tables or fields to check**

Based on the **Table-level Rule Template** or **Field-level Rule Template** you select, you can batch add tables or fields for rule checking.

## Add tables

1.  Click **Add Table**. On the **Batch Create** page, select the tables for which you want to configure rules.
    
    **Note**
    
    The list displays all tables that match the **Data Source Type** you configured in the **Basic Attributes** section in the previous step. You can also enter a **Table Name** to filter the results.
    
2.  After you select the tables, click **Confirm** to add them to the **Tables for Which You Want to Configure Rules** list.
    

## Add fields

1.  Click **Add Fields**. In the **Select a field** dialog box, select the table containing the field for which you want to configure a monitoring rule.
    
    **Note**
    
    The **Tables to Be Selected** area lists the available tables based on the **Data Source Type** that you configured in the **Basic Attributes** section in the previous step.
    
2.  After you select a table, the **Select Fields** section displays all fields from that table, which you can filter by **Field Name** and **Field Description**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6986489471/p966527.png)
    
3.  Select the field for which you want to configure a monitoring rule and click **Create**. The field is added to the **Fields for Which You Want to Configure Rules** list.
    

### **Step 4. Create or associate a quality monitor**

You can define which quality rules to use for checking the object data by associating the quality rules with a quality monitor. The object is a specific timestamp range of the table to check, such as a specific partition of a partitioned table.

You can configure monitors individually or in batches.

## Batch configuration

1.  After selecting one or more tables or fields to add rules to, click **Configure Monitor**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6986489471/p794561.png)
    
2.  You can perform batch Automatically Associatie, batch **Disassociate**, and **Batch Add**.
    
    -   **Automatically Associatie**: Automatically associates selected tables or fields with existing quality monitoring.
        
    -   **Disassociate**: Cancels quality monitoring for the selected tables or fields.
        
    -   **Batch Add**: Configure the data range and run settings for quality monitoring on selected tables.
        
        **Configuration item**
        
        **Note**
        
        **Data Range**
        
        The range of table data whose quality you want to monitor. You can use a partition filter expression to define the partition that needs to be checked.
        
        -   For non-partitioned tables, the entire table is checked by default. Use a WHERE clause to specify a scope.
            
        -   For a partitioned table, you must set this parameter to a value in the `Partition key=Partition value` format. The partition value can be a constant or a [built-in partition filter expression](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#f6e0bd917aalm).
            
        
        **Running Settings**
        
        **Trigger Method**
        
        The trigger method for the monitor.
        
        -   **Triggered by Node Scheduling in Production Environment**: After the scheduling node that you associate with the monitor finishes running in Operation Center, the rules that are associated with the monitor are automatically triggered. Note that dry-run nodes do not trigger monitoring rules to run.
            
        -   **Triggered Manually**: The monitoring rules that are associated with the monitor are manually triggered.
            
        
        **Important**
        
        If the table whose data quality you want to check is a non-MaxCompute table and **Triggered By Node Scheduling In Production Environment** is selected for **Trigger Method**, **you cannot associate scheduling nodes that are run on the shared resource group for scheduling with the monitor**. Otherwise, an error may be reported when the monitor is run.
        
        **Associated Scheduling Node**
        
        If you set the **Trigger Method** parameter to **Triggered By Node Scheduling In Production Environment**, you can configure this parameter to select the scheduling nodes that you want to associate with the monitor. After the scheduling nodes finish running, the rules that are associated with the monitor are automatically triggered.
        
        **Running Resources**
        
        The resources that are required to run the rules. By default, the data source to which the monitored table in the current workspace belongs is selected. If you select another data source, make sure that the related resources can access the monitored table.
        

## Single-table configuration

1.  In the **Quality Monitoring** column to the right of the target table or field, you can associate a quality rule with a quality monitoring job. You can select an existing quality monitoring job or click **New Quality Monitoring** to create a new one.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3538669471/p795329.png)
    
2.  If no monitor is available, you can create one by clicking **Create Monitor**. The following table describes the parameters.
    
    **Configuration item**
    
    **Parameter**
    
    **Description**
    
    **Basic Configurations**
    
    **Monitor Name**
    
    The name of the monitor.
    
    **Quality Monitoring Owner**
    
    You can specify the owner of the monitor as needed. When you configure alert subscriptions, you can specify the monitor owner as the alert recipient by using **Email**, **Email and SMS**, or **Telephone**.
    
    **Monitored Object**
    
    The object for which you want to check the data quality. The default value is the current table.
    
    **Data Range**
    
    The range of table data whose quality you want to monitor. You can use a partition filter expression to define the partition that needs to be checked.
    
    -   For a non-partitioned table, you do not need to configure this parameter. All data in the table is checked by default.
        
    -   For a partitioned table, you must set this parameter to a value in the `Partition key=Partition value` format. The partition value can be a constant or a [built-in partition filter expression](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#f6e0bd917aalm).
        
    
    **Note**
    
    If you configure a monitoring rule based on a custom template or a custom SQL statement, this parameter does not take effect. Instead, the partition checked by the rule is determined by the custom SQL statement that is specified in the rule.
    
    **Monitoring Rule**
    
    **Monitoring Rule**
    
    The monitoring rules that you want to associate with the monitor. The quality of data in the specified range is monitored based on the rules.
    
    **Note**
    
    -   You can create different monitors for different partitions of the same table and associate different monitoring rules with the monitors. This way, the partitions can be monitored based on different data quality check logic.
        
    -   If you have not created monitoring rules, you can skip the configuration of this parameter and complete the creation of the monitor first. When you create and configure a monitoring rule, you can add the monitoring rule to a monitor. For information about how to create and configure a monitoring rule, see [Step 3: Configure a monitoring rule](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table#1fc379ba663sj).
        
    
    **Running Settings**
    
    **Trigger Method**
    
    The trigger method for the monitor.
    
    -   **Triggered by Node Scheduling in Production Environment**: After the scheduling node that you associate with the monitor finishes running in Operation Center, the rules that are associated with the monitor are automatically triggered. Note that dry-run nodes do not trigger monitoring rules to run.
        
    -   **Triggered Manually**: The monitoring rules that are associated with the monitor are manually triggered.
        
    
    **Important**
    
    If the table whose data quality you want to check is a non-MaxCompute table and **Triggered By Node Scheduling In Production Environment** is selected for **Trigger Method**, **you cannot associate scheduling nodes that are run on the shared resource group for scheduling with the monitor**. Otherwise, an error may be reported when the monitor is run.
    
    **Associated Scheduling Node**
    
    If you set the **Trigger Method** parameter to **Triggered By Node Scheduling In Production Environment**, you can configure this parameter to select the scheduling nodes that you want to associate with the monitor. After the scheduling nodes finish running, the rules that are associated with the monitor are automatically triggered.
    
    **Running Resources**
    
    The resources that are required to run the rules. By default, the data source to which the monitored table in the current workspace belongs is selected. If you select another data source, make sure that the related resources can access the monitored table.
    
    **Handling Policies**
    
    **Quality Issue Handling Policies**
    
    The blocking or alerting policy that is used to process detected data quality issues.
    
    -   Blocks: If a data quality issue is detected in the table, the scheduling node in the production environment that generates the table is identified, and the system sets the running status of the node to Failed. In this case, the descendant nodes of the node cannot be run, which blocks the production link to prevent the spread of dirty data.
        
        Default value: `Strong rules · Red anomaly`.
        
    -   Alert: If a data quality issue is detected in the table, the system sends alert notifications to the alert recipient by using the configured notification method.
        
        Default values: `Strong rules · Red anomaly`, `Strong rules · Orange exception`, `Strong rules · Check Failed`, `Weak rules · Red anomaly`, `Weak rules · Orange exception`, and `Weak rules · Check Failed`.
        
    
    **Alert Method Configuration**
    
    You can send alert notifications by using **Email**, **Email and SMS**, **DingTalk Chatbot**, **DingTalk Chatbot @ALL**, **Lark Group Chatbot**, **Enterprise Wecha Robot**, **Custom WebHook**, or **Telephone**.
    
    **Note**
    
    -   You can add a DingTalk chatbot, Lark chatbot, or WeChat chatbot and obtain a webhook URL. Then, copy the webhook URL to the Recipient field in the Manage Subscriptions dialog box.
        
    -   The **Custom Webhook** notification method is supported only in DataWorks Enterprise Edition. For information about the message format of an alert notification sent by using a **Custom Webhook**, see [Appendix: Message format of alert notifications sent by using a custom webhook URL](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#section-75a-729-m3w).
        
    -   When you select **Email**, **Email and SMS**, or **Telephone** as the notification method, you can specify **Recipient** as **Monitor Owner**, **Shift Schedule**, or **Node Owner**.
        
        -   **Data Quality Monitoring Owner**: Alert information will be sent to the **Quality Monitoring Owner** set in the **Basic Configurations** section of the current quality monitor.
            
        -   **Shift Schedule**: When the monitoring rule associated with the monitor is triggered and an alert is generated, the system sends alert notifications to [the person on duty for the current day in the shift schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule).
            
        -   **Scheduling Task Owner**: Alert notifications are sent to the owner of the scheduling node associated with the monitor.
            
    
3.  Go back to the step for adding monitoring rules in a batch and click **Refresh**. Then, in the **Quality Monitoring** column, select the quality monitoring rule that you created.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6986489471/p966576.png)
    

### **Step 5. Test the rule execution**

1.  Click **Generate Monitoring Rule** to open the **Verify Monitoring Rule** page. On the **Verify Monitoring Rule** page, you can perform the following operations:
    
    -   **Test Run**: Verifies that the rule configuration is correct.
        
        After the rules are created, you can select one or more rules to perform a **Test Run**. In the **Test Run** dialog box, select a **Data Timestamp** (the simulated trigger time). The system calculates the partition values for the table to be verified based on the specified time and **Data Range**. Click **Test Run** to check whether the data in the specified table partition complies with the configured data quality rule.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6986489471/p966582.png)
        
        After a test run completes, you can click **Running Records** in the Actions column to view its details and perform related operations.
        
    -   **Subscriptions**: The recipients of the alert.
        
        You can send alert notifications by using **Email**, **Email and SMS**, **DingTalk Chatbot**, **DingTalk Chatbot @ALL**, **Lark Group Chatbot**, **Enterprise Wecha Robot**, **Custom WebHook**, or **Telephone**.
        
        **Note**
        
        -   You can add a DingTalk chatbot, Lark chatbot, or WeChat chatbot and obtain a webhook URL. Then, copy the webhook URL to the Recipient field in the Manage Subscriptions dialog box.
            
        -   The **Custom Webhook** notification method is supported only in DataWorks Enterprise Edition. For information about the message format of an alert notification sent by using a **Custom Webhook**, see [Appendix: Message format of alert notifications sent by using a custom webhook URL](/help/en/dataworks/user-guide/configure-monitoring-rules-based-on-a-monitoring-rule-template#section-75a-729-m3w).
            
        -   When you select **Email**, **Email and SMS**, or **Telephone** as the notification method, you can specify **Recipient** as **Monitor Owner**, **Shift Schedule**, or **Node Owner**.
            
            -   **Data Quality Monitoring Owner**: Alert information will be sent to the **Quality Monitoring Owner** set in the **Basic Configurations** section of the current quality monitor.
                
            -   **Shift Schedule**: When the monitoring rule associated with the monitor is triggered and an alert is generated, the system sends alert notifications to [the person on duty for the current day in the shift schedule](/help/en/dataworks/user-guide/create-and-manage-a-shift-schedule).
                
            -   **Scheduling Task Owner**: Alert notifications are sent to the owner of the scheduling node associated with the monitor.
                
        
    -   **Associated Scheduling**: Specifies the trigger method for the rule.
        
        You can click **Use Recommended Running Mode** or **Manually Specify Running Mode** to associate one or more Data Quality rules with scheduling nodes that generate table data. In Operation Center, these nodes include automatically scheduled recurring instances, manually triggered data backfill instances, and test instances. When a node task is executed, a Data Quality rule check is triggered. You can set the rule strength to control whether the node fails and exits, which prevents the spread of dirty data.
        
        -   Recommended running mode: The system automatically associates the selected rules with the recommended scheduling nodes based on the data lineage of the nodes that output the table data.
            
        -   Manual running mode: You can manually associate the selected rules with specified scheduling nodes.
            
        
        **Important**
        
        The rule must be associated with a corresponding scheduling node to be triggered automatically.
        
        ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6792626171/p368101.png)
        
    -   **Delete**: Deletes one or more selected rules.
        
    -   **View Rule Details**: Click **View Rule Details** in the **Actions** column of a rule to open its details page. On this page, you can modify, start, stop, or delete the rule, specify its strength, and view logs.
        
2.  Click **Complete Check** after the test run is successful and a schedule is associated.
    

## Next steps

After the monitor is run, you can choose **Quality O&M** in the left-side navigation pane and click **Monitor** and **Running Records** to view the quality check status of the specified table and the complete quality rule check records.

## Appendix: Webhook message format

This section describes the message format and parameters of alert notifications that DataWorks sends using a **Custom Webhook**.

### Sample message

```
{
  "detailUrl": "https://dqc-cn-zhangjiakou.data.aliyun.com/?defaultProjectId=3058#/jobDetail?envType=ODPS&projectName=yongxunQA_zhangbei_standard&tableName=sx_up_001&entityId=10878&taskId=16876941111958fa4ce0e0b5746379cd9bc67999d05f8&bizDate=1687536000000&executeTime=1687694111000",
  "datasourceName": "emr_test_01",
  "engineTypeName": "EMR",
  "projectName": "Project name",
  "dqcEntityQuality": {
    "entityName": "tb_auto_test",
    "actualExpression": "ds=20230625",
    "strongRuleAlarmNum": 1,
    "weakRuleAlarmNum": 0
  },
  "ruleChecks": [
    {
      "blockType": 0,
      "warningThreshold": 0.1,
      "property": "id",
      "tableName": "tb_auto_test",
      "comment": "Test a monitoring rule",
      "checkResultStatus": 2,
      "templateName": "Compare the Number of Unique Field Values Against Expectation",
      "checkerName": "fulx",
      "ruleId": 123421,
      "fixedCheck": false,
      "op": "",
      "upperValue": 22200,
      "actualExpression": "ds=20230625",
      "externalId": "123112232",
      "timeCost": "10",
      "trend": "up",
      "externalType": "CWF2",
      "bizDate": 1600704000000,
      "checkResult": 2,
      "matchExpression": "ds=$[yyyymmdd]",
      "checkerType": 0,
      "projectName": "auto_test",
      "beginTime": 1600704000000,
      "dateType": "YMD",
      "criticalThreshold": "0.6",
      "isPrediction": false,
      "ruleName": "Rule name",
      "checkerId": 7,
      "discreteCheck": true,
      "endTime": 1600704000000,
      "MethodName": "max",
      "lowerValue": 2344,
      "entityId": 12142421,
      "whereCondition": "type!='type2'",
      "expectValue": 90,
      "templateId": 5,
      "taskId": "16008552981681a0d6",
      "id": 234241453,
      "open": true,
      "referenceValue": [
        {
          "discreteProperty": "type1",
          "value": 20,
          "bizDate": "1600704000000",
          "singleCheckResult": 2,
          "threshold": 0.2
        }
      ],
      "sampleValue": [
        {
          "discreteProperty": "type2",
          "bizDate": "1600704000000",
          "value": 23
        }
      ]
    }
  ]
}
```

### Parameter description

**Name**

**Type**

**Sample value**

**Description**

ProjectName

String

autotest

The name of the compute engine instance or data source whose data quality is monitored.

actualExpression

String

ds=20200925

The partition in the monitored data source table.

RuleChecks

Array of RuleChecks

A list of validation results.

BlockType

Integer

1

The strength of the validation rule. This value indicates the importance of the rule. Valid values:

-   1: Strong rule.
    
-   0: Soft rule.
    
    Set important rules as strong rules as needed. If a strong rule triggers a red alert, it blocks scheduling tasks.
    

WarningThreshold

Float

0.1

Warning threshold. This value shows the deviation from an expected value. Customize this threshold as needed.

Property

String

type

The column in the data source table that the rule checks.

TableName

String

dual

The name of the table that is validated.

Comment

String

The description of the rule.

The description of the validation rule.

CheckResultStatus

Integer

2

The status of the check result.

TemplateName

String

Compare number of unique field values against expectation

The name of the validation template.

CheckerName

String

fulx

The name of the checker.

RuleId

Long

123421

The rule ID.

FixedCheck

Boolean

false

Specifies whether to use a fixed value for the check. Valid values:

-   true: A fixed value is used.
    
-   false: A fixed value is not used.
    

Op

String

\>

The comparison operator.

UpperValue

Float

22200

The predicted upper limit. It is automatically generated after a threshold is set.

ActualExpression

String

ds=20200925

The actual partition in the data source table that is verified.

ExternalId

String

123112232

The ID of the node for the scheduled task.

TimeCost

String

10

The duration of the verification task.

Trend

String

up

The trend of monitoring results.

ExternalType

String

CWF2

The type of the CDN mapping system. Only CWF is supported.

BizDate

Long

1600704000000

The data timestamp. If the checked business entity is offline data, the data timestamp is usually one day before the check is run.

CheckResult

Integer

2

The verification result.

MatchExpression

String

ds=$\[yyyymmdd\]

The partition filter expression.

CheckerType

Integer

0

The type of the checker.

ProjectName

String

autotest

The name of the compute engine or data source for the data quality check.

BeginTime

Long

1600704000000

The start time of the verification operation.

DateType

String

YMD

The type of scheduling cycle. The value is usually YMD, which stands for yearly, monthly, and daily tasks.

CriticalThreshold

Float

0.6

The error threshold indicates the degree of deviation from the expected value. Customize this threshold as needed. If a strong rule triggers the error threshold, scheduling tasks are blocked.

IsPrediction

Boolean

false

Specifies whether the result is a prediction. Valid values:

-   true: The result is a prediction.
    
-   false: The result is not a prediction.
    

RuleName

String

The name of the rule.

The name of the rule.

CheckerId

Integer

7

The ID of the checker.

DiscreteCheck

Boolean

true

Specifies whether the monitoring is discrete. Valid values:

-   true: Enables discrete validation.
    
-   false: The check is non-discrete.
    

EndTime

Long

1600704000000

The end time for the verification results query.

MethodName

String

max

The method used to collect sample data, such as avg, count, sum, min, max, count\_distinct, user\_defined, table\_count, table\_size, table\_dt\_load\_count, table\_dt\_refuseload\_count, null\_value, null\_value/table\_count, (table\_count-count\_distinct)/table\_count, or table\_count-count\_distinct.

LowerValue

Float

2344

The lower prediction limit. This value is automatically generated based on the threshold that you set.

EntityId

Long

14534343

The ID of the partition filter expression.

WhereCondition

String

type!='type2'

The filter condition for the validation task.

ExpectValue

Float

90

The expected value.

TemplateId

Integer

5

The ID of the validation template.

TaskId

String

16008552981681a0d6\*\*\*\*

The ID of the verification task.

Id

Long

2231123

The ID of the primary key.

ReferenceValue

Array of ReferenceValue

The historical sample values.

DiscreteProperty

String

type1

The values of the sample field that result from grouping with the GROUP BY clause. For example, if you group by the Gender field, the possible values for DiscreteProperty are Male, Female, and null.

Value

Float

20

The sample value.

BizDate

String

1600704000000

The data timestamp. If the checked entity is offline data, the timestamp is usually one day before the check is run.

SingleCheckResult

Integer

2

The verification result string.

Threshold

Float

0.2

Threshold.

SampleValue

Array of SampleValue

The current sample values.

DiscreteProperty

String

type2

The values of the sample field that are grouped by the GROUP BY clause. For example, if you group by the Gender field, the DiscreteProperty values are Male, Female, and null.

BizDate

String

1600704000000

The data timestamp. In most cases, if the verified business entity is offline data, the value is one day before the verification operation.

Value

Float

23

Sample value.

Open

Boolean

true

Whether the rule is enabled.
