Data Integration supports real-time synchronization of entire databases from data sources such as ApsaraDB for OceanBase, MySQL, Oracle, and PolarDB to Hologres. This topic uses MySQL as the source and Hologres as the destination to describe how to synchronize both full and incremental data from an entire MySQL database to Hologres.

## **Prerequisites**

-   You have purchased a [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration).
    
-   You have created MySQL and Hologres data sources. For more information, see [Create a data source in Data Integration](/help/en/dataworks/user-guide/create-a-data-integration-data-source/).
    
-   You have established network connectivity between the resource group and data sources. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity).
    

## Precautions

When you synchronize data from MySQL to Hologres, you can write data only to child partitioned tables.

## Procedure

### **1\. Select a synchronization type**

1.  Go to the Data Integration page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Integration** > **Data Integration**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Integration**.
    
2.  In the left-side navigation pane, click **Synchronization Task**, and then click **Create Synchronization Task** at the top of the page to go to the synchronization task creation page. Configure the following basic information:
    
    -   **Source And Destination**: `MySQL`→`Hologres`
        
    -   **New Node Name**: Specify a name for the synchronization task.
        
    -   **Synchronization Method**: `Real-time migration of entire database`.
        
    -   **Synchronization Mode**: Select **Full Initialization** and **Incremental Synchronization**.
        

### **2\. Configure network and resources**

1.  In the **Network And Resource Configuration** section, select a **Resource Group** for the synchronization task. You can allocate a number of compute units (CUs) for **Task Resource Usage**.
    
2.  **Source** Select the added `MySQL` data source, **Destination** Select the added `Hologres` data source, and then click **Test Connectivity**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2337810571/p973900.png)
    
3.  After you make sure that both the source and destination data sources are connected successfully, click **Next**.
    

### 3\. Select the tables from which you want to synchronize data

In this step, you can select the tables from which you want to synchronize data in the **Source Table** section and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7077631471/p791982.png) icon to move them to the **Selected Tables** section on the right.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2337810571/p973903.png)

-   **Select Specific Tables**:
    
    -   In the **Database Filter** and **Table Filter** fields of the source tables, you can filter databases and tables by entering characteristic information of database names or table names. Select all the databases and tables from which you want to synchronize data, and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0929579471/p966745.png) icon to move them to the **Selected Tables** section.
        
    -   In the **Selected Tables** section, you can filter databases and tables that you do not want to synchronize by entering characteristic information in the **Database Filter** and **Table Filter** fields. Select all the databases and tables that you do not want to synchronize, and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0929579471/p966755.png) icon to move them back to the **Source Table** section.
        
-   **Use Regular Expression To Select Tables (Support Adding Or Removing Tables By Regular Expression During Runtime)**:
    
    Filter tables using regular expressions configured in the **Database Filter** and **Table Filter** fields. Click **Confirm Selection** to select the databases and tables from which you want to synchronize data.
    
    **Note**
    
    For example, if you want to filter and synchronize databases with names that have the prefix `a` and tables with names that have the prefix `order`, you can enter in the **Database Filter**`a.*`**Table Filter** field and `order.*` in the Table Filter field.
    

### 4\. Configure settings related to the destination

After you select the tables from which you want to synchronize data, the selected tables are automatically displayed in the Mapping Rules for Destination Tables section. The properties of the destination tables are waiting to be mapped. You must manually define mappings between the source tables and destination tables to determine the data reading and writing relationships. Then, you can click **Refresh** in the Actions column. You can directly refresh mappings between source tables and destination tables. You can also refresh mappings between source tables and destination tables after you configure settings related to destination tables.

**Note**

-   You can select the tables that you want to synchronize and click **Batch Refresh Mapping Results**. If no mapping rules are configured, the default table name rule is `${Table name}`. If a table with the same name does not exist in the destination, the system automatically creates one.
    
-   You can click **Configure** in the **Customize Mapping Rules For Destination Schema Names** column to customize destination schema name rules.
    
    You can concatenate built-in variables and manually entered strings into a final **Destination Schema Name**. You can edit built-in variables. For example, you can create a new schema name rule that adds a suffix to the source database name to form a **Destination Schema Name**.
    
-   You can click **Edit** in the **Customize Mapping Rules for Destination Table Names** column to configure mapping rules for destination table names based on your business requirements.
    
    You can concatenate a built-in variable and a specific string into a destination table name. You can edit built-in variables. For example, when you create a mapping rule, you can add a suffix to a variable that indicates a source table name to form a destination table name.
    

#### a. Modify data type mappings for fields

Default mappings exist between data types of source fields and data types of destination fields. You can click **Edit Mapping of Field Data Types** in the upper-right corner of the Mapping Rules for Destination Tables section to configure data type mappings between source fields and destination fields based on your business requirements. After the configuration is complete, click **Apply and Refresh Mapping**.

#### b. Modify the schema of a destination table to add fields to the table and assign values to the fields

If a destination table is in the **To Be Created** state, you can perform the following steps to add fields to the table and assign values to the fields:

1.  Add fields to one or more destination tables.
    
    -   Add fields to a single destination table: Find the destination table to which you want to add fields and click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9077631471/p781330.png) icon in the **Destination Table Name** column. In the dialog box that appears, add fields.
        
    -   Add fields to multiple destination tables at a time: Select the destination tables to which you want to add fields at a time, click **Batch Modify** in the lower part of the page, and then click **Destination Table Schema - Batch Modify and Add Field**.
        
2.  Assign values to the fields. You can perform one of the following operations to assign values to the fields:
    
    -   Assign values to the fields that are added to a single destination table: Find the destination table in which you want to assign values to newly added fields and click **Configure** in the **Value assignment** column. In the Additional Field dialog box, assign values to the fields.
        
    -   Assign values to the fields that are added to multiple destination tables at a time: Select the destination tables in which you want to assign values to newly added fields, click **Batch Modify** in the lower part of the page, and then click **Value assignment** to assign values to the same fields in the selected destination tables at a time.
        
    
    **Note**
    
    You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0502519471/p964521.png) icon to switch the value assignment method and assign constants and variables to the fields that are added to a destination table.
    

#### **c. Configure DML processing rules**

Data Integration provides default DML processing rules. You can also configure DML processing rules for destination tables based on your business requirements.

-   Configure DML processing rules for a single destination table: Find the destination table for which you want to configure DML processing rules and click **Configure** in the **Configure DML Rule** column to configure DML processing rules for the table.
    
-   Configure DML processing rules for multiple destination tables at a time: Select the destination tables for which you want to configure DML processing rules, click **Batch Modify** in the lower part of the page, and then click **Configure DML Rule**.
    

#### **4\. Configure advanced parameters**

If you want to make fine-grained configurations to meet your business requirements, you can click **Configure** in the **Custom Advanced Parameters** column to modify advanced parameters.

**Important**

Before you modify the configurations of advanced parameters, make sure that you understand the meanings of the parameters to prevent unexpected errors or data quality issues.

#### **5\. Configure source split columns**

You can select a field from the source table in the Source Split Column drop-down list or select **No Split**.

#### **6\. Specify whether to perform full synchronization**

If you selected **Full Initialization** for the **Synchronization Mode** parameter when you [selected a synchronization type](#867a4aeed9qkv), you can disable full synchronization for specific tables here.

### **5\. Configure alert rules**

To prevent the failure of the synchronization task from causing latency on business data synchronization, you can configure different alert rules for the synchronization task.

1.  In the upper-right corner of the page, click **Configure Alert Rule** to go to the **Alert Rule Configurations for Real-time Synchronization Subnode** panel.
    
2.  In the Configure Alert Rule panel, click **Add Alert Rule**. In the Add Alert Rule dialog box, configure the parameters to configure an alert rule.
    
    **Note**
    
    The alert rules that you configure in this step take effect for the real-time synchronization subtask that will be generated by the synchronization task. After the configuration of the synchronization task is complete, you can refer to [Run and manage real-time synchronization tasks](/help/en/dataworks/user-guide/manage-real-time-synchronization-nodes#task-1954994) to go to the Real-time Synchronization Task page and modify alert rules configured for the real-time synchronization subtask.
    
3.  Manage alert rules.
    
    You can enable or disable alert rules that are created. You can also specify different alert recipients based on the severity levels of alerts.
    

### **6\. Configure advanced parameters**

You can change the values of specific parameters configured for the synchronization task based on your business requirements. For example, you can specify an appropriate value for the Maximum read connections parameter to prevent the current synchronization task from imposing excessive pressure on the source database and data production from being affected.

**Note**

To prevent unexpected errors or data quality issues, we recommend that you understand the meanings of the parameters before you change the values of the parameters.

1.  In the upper-right corner of the configuration page, click **Configure Advanced Parameters**.
    
2.  In the **Configure Advanced Parameters** panel, change the values of the desired parameters.
    

### 7\. Configure DDL processing rules

DDL operations may be performed on the source. You can click **Configure DDL Capability** in the upper-right corner of the page to configure rules to process DDL messages from the source based on your business requirements.

**Note**

For more information, see [Configure rules to process DDL messages](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#step-n7i-5m0-g2y).

### 8\. View and change resource groups

You can click **Configure Resource Group** in the upper-right corner of the page to view and change the resource groups that are used to run the current synchronization task.

### **9\. Run the synchronization task**

1.  After the configuration of the synchronization task is complete, click **Complete** in the lower part of the page.
    
2.  In the **Synchronization Task** section of the **Data Integration** page, find the created synchronization task and click **Start** in the ****Operation**** column.
    
3.  Click the ****Name/ID**** of the synchronization task in the **Tasks** section and view the detailed running process of the synchronization task.
    

## Perform O&M operations on the synchronization task

### View the status of the synchronization task

After you create a synchronization task, you can view the list of created synchronization tasks and the basic information about each synchronization task on the Synchronization Task page.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2337810571/p973927.png)

-   You can **Start** or **Stop** a synchronization task in the Actions column. You can also **Edit**, **View**, and perform other operations on a synchronization task from the More drop-down list.
    
-   For a started task, you can see the basic status of the task in the **Execution Overview** section. You can also click the corresponding overview area to view execution details.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2337810571/p973929.png)
    
    The real-time synchronization task from MySQL to Hologres consists of three stages:
    
    -   Schema Migration: This tab displays information such as whether a destination table is a newly created table or an existing table. For a newly created table, the DDL statement that is used to create the table is displayed.
        
    -   Full Data Initialization: This tab displays information such as the source tables and destination tables involved in batch synchronization, the synchronization progress, and the number of data records that are synchronized.
        
    -   Real-time Synchronization: This tab displays statistical information about real-time synchronization, including the synchronization progress, DDL records, DML records, and alert information.
        

### Rerun the synchronization task

In some special cases, if you add tables to or remove tables from the source, or change the schema or name of a destination table, you can click More in the ****Operation**** column of the synchronization task and then click **Rerun** to rerun the task after the change. During the rerun process, the synchronization task synchronizes data only from the newly added tables to the destination or only from the mapped source table to the destination table whose schema or name is changed.

-   If you want to rerun the synchronization task without modifying the configuration of the task, click More in the Actions column and then click **Rerun** to rerun the task to perform full synchronization and incremental synchronization again.
    
-   If you want to rerun the synchronization task after you add tables to or remove tables from the task, click **Complete** after the change. In this case, **Apply Updates** is displayed in the Actions column of the synchronization task. Click **Apply Updates** to trigger the system to rerun the synchronization task. During the rerun process, the synchronization task synchronizes data from the newly added tables to the destination. Data in the original tables is not synchronized again.
