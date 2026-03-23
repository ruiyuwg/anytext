DataWorks Data Quality allows you to manage a set of custom rules in a centralized manner and create a self-managed rule template library to configure rules in a more efficient manner. This topic describes how to create and configure a custom rule template.

## Prerequisites

DataWorks Enterprise Edition or a more advanced edition is activated.

## Background information

You can create a rule template on the **Rule Template Library** page. After the rule template is created, you can manage and use the template.

## **Precautions**

The changes that are made to a custom rule take effect only for tasks that **reference the changed custom rule**. Existing tasks for which the original custom rule is applied are not affected.

## Create a custom rule template

1.  Go to the Data Quality page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  In the left-side navigation pane, choose **Assets** > **Rule Template Library**.
    
3.  Click the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7191659951/p94655.png) icon and select **Create Folder**.
    
4.  In the **Create Folder** dialog box, configure the **Name** and Location parameters and click **OK**.
    
5.  In the left-side directory tree, right-click the created folder and select **Create Rule Template**.
    
    You can also **rename** or **delete** a folder.
    
6.  In the **Create Rule Template** dialog box, configure the parameters.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8189731371/p749271.png)
    
    **Parameter**
    
    **Description**
    
    **Template Name**
    
    The name of the custom rule template.
    
    **Field**
    
    The fields that you want to monitor. You can set this parameter only to **Custom SQL**.
    
    **Sampling Method**
    
    The sampling method for the custom rule template. You can set this parameter only to **Custom SQL**.
    
    **Set Flag**
    
    The `SET` clause of the SQL statement that is used to query the fields that you want to monitor.
    
    **Note**
    
    Separate multiple statements with commas (,). You do not need to add a semicolon (;) at the end of each statement.
    
    **Check type**
    
    The threshold type for the custom rule template. Valid values: **Numeric type** and **Fluctuation**.
    
    **Verification Method**
    
    The verification method for the custom rule template. The verification methods that can be selected vary based on the threshold type.
    
    -   If you set the **Check type** parameter to **Numeric type**, you can set this parameter only to **Compare with a specified value**.
        
        Only the value that is calculated by the COUNT or SUM function can be returned. The return value is compared with a specified value.
        
    -   If you set the **Check type** parameter to **Fluctuation**, the following verification methods are used:
        
        -   **Compare the current value with the average value of the last 7 days**
            
        -   **Compare the current value with the average value of the last 30 days**
            
        -   **Compare the current value with the value 1 day before**
            
        -   **Compare the current value with the value 7 days before**
            
        -   **Compare the current value with the value 30 days before**
            
        -   **The variance between the current value and the value 7 days before**
            
        -   **The variance between the current value and the value 30 days before**
            
        -   **Compare with the value 1, 7, and 30 days before**
            
        -   **Compare with the value of the previous cycle**
            
    
    **Custom SQL**
    
    The SQL statement that is used to query the fields to be monitored. You can use ${tableName} to specify a table name.
    
    **Note**
    
    Make sure that the return value is the value in a row of a column and can be compared with the specified threshold.
    
    **Location**
    
    The name of the folder in which you want to store the custom rule template.
    
7.  Click **OK**.
    

## Manage a rule template

In the Templates pane, you can click the name of a rule template to go to the template details page. On the page that appears, you can **view**, **modify**, **delete**, or **copy** the rule template.

**Action**

**Description**

**View**

You can view the parameter settings and **logs** of the rule template and the **rules** that use the rule template.

-   The **Application List** tab displays the rules that use the rule template.
    
-   The **View Log** tab displays the operations logs of the rule template, including the **user who performed each operation**, **the time when each operation was performed**, and the **operation details**.
    

**Edit**

Click **Edit** in the upper-right corner. In the **Edit Rule Template** dialog box, modify the parameters as required and click **OK**.

**Delete**

Click **Delete** in the upper-right corner. In the **Delete Template** message, click **OK**.

**Copy**

Click **Copy** in the upper-right corner. In the **Clone Rule Template** dialog box, configure the **Template Name** and **Location** parameters and click **OK**.

## Apply a custom rule template

When you create a monitoring rule, you can select a custom rule template to create the rule based on the rule template.

1.  Go to the Data Quality page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Quality**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Quality**.
    
2.  Go to the Table Quality Details page.
    
    In the left-side navigation pane, choose **Configure Rules** > **Configure by Table**. The Configure by Table page appears.
    
    1.  In the **Connection** section, select the database where the table for which you want to configure rules resides.
        
    2.  Search for the desired table based on conditions, such as the database type, database, and table name. Then, click the name of the table or click **Rule Management** in the **Actions** column of the table to go to the Table Quality Details page.
        
        This page displays all the rules configured for the table. You can quickly filter rules based on whether the rules are associated with a monitor. For rules that are not associated with a monitor, you can specify the running mode for the rules.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6486855371/p790384.png)
        
3.  On the **Rule Management** tab of the **Table Quality Details** page, select the created monitor and click **Create Rule**. The **Create Rule** panel appears.
    
4.  Create a monitoring rule by using a custom rule template.
    
    When you reference a custom rule template, the basic configurations of the template, such as **FLAG parameter** and **SQL**, are automatically displayed. You can configure the **Rule Name** parameter based on your business requirements, and the Monitoring Threshold parameter based on the rule type. For example, you must define a normal threshold and a critical threshold for a numeric rule, and you must define a warning threshold in addition to a normal threshold and a critical threshold for a fluctuation-type rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6486855371/p790776.png)
    
    For more information about the parameters, see [Create a custom rule template](#step-9d2-mth-vmj).
    
5.  Click **Determine**.
    

## **References**

You can use a custom rule template when you configure a monitoring rule by table. For more information, see [Configure monitoring rules for a single table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).
