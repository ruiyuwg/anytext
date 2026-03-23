Lifecycle management supports multiple types of lifecycle rules. You can easily manage data lifecycles in data lakes by creating different lifecycle rules to save storage costs. This topic describes the basic operations of lifecycle rules.

## Feature description

You can use lifecycle management to configure data management rules for databases and tables in a data lake. You can convert the storage class of data on a regular basis based on the following rule types: Last Access Time of Data, Partition Value By Time, Partition/Table Creation Time, and Last Partition/Table Update Time. This reduces data storage costs.

### Scenarios

A large amount of historical database or table data is stored in data lakes. The historical data is no longer used for your business over time. In this case, you want to convert the storage class of the historical data to Infrequent Access (IA), Archive, or Cold Archive to reduce costs. Examples:

-   Order tables. The partitions of order tables are created based on the time, such as the partition named 20220101. Only the order table data of the last three years needs to be analyzed. The storage class of the historical partition data must be changed to Cold Archive to reduce storage costs. In this case, you can configure periodic archiving based on the Partition Value By Time rule type.
    
-   Database A of Business A. Business A is no longer actively developing, and thus the historical data must be temporarily archived in Database A. You can change the storage class of data in Database A from IA, Standard, or Archive to Cold Archive.
    

**Important**

Exercise caution when you configure data management rules.

-   Data whose storage class is converted to Archive or Cold Archive will not be accessible to compute engines. You must manually restore the data before you can use the data, which will incur associated costs. For more information, see [OSS storage classes](/help/en/oss/user-guide/overview-53/) and [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes).
    
-   Data stored in the IA class may demonstrate lower access efficiency when retrieved by compute engines.
    

### Limits

-   Metadata is managed by using Data Lake Formation (DLF), and the data is stored in Object Storage Service (OSS).
    
-   Unstructured data management is not supported. If you require unstructured data management, see Lifecycle in OSS documentation.
    

### Billing

If you want to use the lifecycle management feature, the following fees are involved:

1.  The lifecycle management feature of DLF is in public preview. This feature is free of charge.
    
2.  For more information about the fees related to lifecycle rules, see [Fees related to lifecycle rules](/help/en/oss/user-guide/fees-related-to-lifecycle-rules).
    

### Precautions

1.  If the storage class of data is changed to Archive or Cold Archive, the data cannot be accessed by compute engines. You must manually restore the data before you use the data, and related fees are generated. For more information, see [Storage classes](/help/en/oss/user-guide/overview-53/) and [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes).
    
    Configure the lifecycle rules based on your business requirements.
    
2.  If the storage class of data is changed to IA, the performance of the data is degraded when the data is accessed by compute engines. Configure lifecycle rules based on your business requirements.
    
3.  After you turn on the Execution Scheduling switch for lifecycle rule tasks, the lifecycle rule tasks are periodically executed every night and take effect before 08:00 the next day. For lifecycle rule tasks that are manually executed, the lifecycle rule tasks immediately take effect after they are executed.
    

## Instructions

### Prerequisites

1.  OSS is activated. If you have not activated OSS, go to the [OSS console](https://oss.console.alibabacloud.com/overview) to activate OSS.
    
2.  The permissions on databases and tables for lifecycle management are subject to data permission control enforced by DLF. Consequently, you can configure lifecycle rules only for databases and tables within your authorized permissions.
    

### Create a lifecycle rule

Perform the following steps to create a lifecycle rule:

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home).
    
2.  In the left-side navigation pane, choose **Lake Management** > **Lifecycle Management**.
    
3.  Click **Create Rule** to configure the rule**.**
    
    1.  Fill in the basic information: **Name**, **Description**, **Catalog List**, **Resource Type**.
        
        **Resource Type** can be set to Database or Table, corresponding to metadatabase or metadata table for lifecycle rule configuration.
        
    2.  Select the rule type. DLF supports the following four rule types:
        
        -   Last Access Time of Data: You can define a lifecycle based on the time when the data is last accessed. If a table has partitions, the last partition access time at the finest granularity is used. If a table does not have partitions, the last table access time is used.
            
        -   Partition Value By Time: You can define a lifecycle based on partition values. This rule type is suitable for tables whose level-1 partitions contain time formats.
            
        -   Last Partition/Table Update Time: You can define a lifecycle based on the time when partitions or tables are modified. If the table has partitions, the time when the partition at the finest granularity was last modified is used. If a table does not have partitions, the time when the table was last modified is used.
            
        -   Partition/Table Creation Time: You can define a lifecycle based on the time when partitions or tables are created. If a table has partitions, the partition creation time at the finest granularity is used. If a table does not have partitions, the table creation time is used.
            
    3.  Select the interval at which the storage class of the data is converted to IA, Archive, or Cold Archive.
        
    4.  Configure the execution mechanism.
        
        If you want DLF to automatically execute the current lifecycle rule every day, turn on the **Execution Scheduling** switch. If the current lifecycle rule does not need to be automatically executed every day, you can click **Manual Execution** on the Lifecycle Management page to manually execute the lifecycle rule after the lifecycle rule is created. The periodic execution is completed before 08:00 every day.
        
4.  Click **Next** to select the metadatabase or metadata table to be archived.
    
5.  Click **Add Database Resource**, select the resources to bind, support search and cross-page selection, and click **Add**.
    
6.  After adding resources, click **OK** to view the resource binding results.
    
    If the binding is successful, you can see the number of successfully bound resources. If the binding fails, you can see the reason for the failure.
    
    **Note**
    
    -   If you set the Resource Type parameter to Database, you can add database resources. If you set the Resource Type parameter to Table, you can add table resources.
        
    -   The priority of a table rule is higher than that of a database rule. If a table has been associated with a database rule, the original database rule associated with the table is replaced.
        
    -   Each database or table can be associated with only one lifecycle rule at a time.
        
    -   Each lifecycle rule can be associated with a maximum of 1,000 resources.
        
    -   You can configure a lifecycle rule and then associate resources with the lifecycle rule. After you associate resources with the lifecycle rule, click Save.
        
    

### Edit a lifecycle rule

If you want to modify or edit the current lifecycle rule, find the desired lifecycle rule and click **Edit** in the **Actions** column on the **Lifecycle Management** page.

**Important**

1.  After the lifecycle rule is modified, the modifications take effect the following day if you turn on the Execution Scheduling switch.
    
2.  After the modified lifecycle rule is executed again, all resources that are associated with the lifecycle rule are affected. The following items are the impacts:
    
    -   If the storage class of data is set to IA, Archive, or Cold Archive, the current storage class remains unchanged.
        
    -   If the storage class of data is not set to IA, Archive, or Cold Archive, the modified lifecycle rule takes effect.
        

### View a lifecycle rule

1.  In the left-side navigation pane, choose **Lake Management** > **Lifecycle Management**.
    
2.  Select a rule and click the rule ID to view the current information of the rule.
    
    -   **Basic Information**: On the Basic Information tab, you can check the basic information, rule details, and the execution mechanism.
        
    -   **Resource Information**: On the Resource Information tab, you can check the information about the associated databases or tables.
        
    -   **Execution History**: The historical information of manual execution and scheduled execution of the rule.
        

### Delete a lifecycle rule

1.  In the left-side navigation pane, choose **Lake Management** > **Lifecycle Management**
    
2.  Find the lifecycle rule you want to delete, click **Delete** in the **Actions** column, and click **Delete** in the pop-up box.
    

**Note**

-   After you delete a lifecycle rule, the lifecycle rule cannot be executed either manually, or automatically and periodically.
    
-   After deleting a lifecycle rule, the data previously affected by the rule will remain in its current state.
    

### Manually execute a lifecycle rule

1.  In the left-side navigation pane, choose **Lake Management** > **Lifecycle Management**.
    
2.  Find the lifecycle rule you want to manually execute, click **Manual Execution** in the **Actions** column, carefully read the pop-up prompt, and click **OK** to start the task.
    

**Important**

The manually executed operation will be executed immediately and will affect the data of the currently bound resources, which may affect business access. Please accurately assess the risks before execution.

### View task execution records

1.  In the left-side navigation pane, choose **Lake Management** > **Lifecycle Management**.
    
2.  Click the **Execution History** tab to query all historical execution archive tasks and view execution logs.
    
3.  Click the task name to view task execution information and execution logs.
    

### **Restore a table**

1.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
2.  Click the **Table** tab and click the table name.
    
3.  Click the **Storage Rule** tab. The DLF product supports table restore. Click **Restore Table** to convert the storage class to Standard Storage.
    
4.  If you want to convert cold data to hot data, see the following topics:
    
    -   [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes)
        
    -   [How to use automatic storage tiering of OSS-HDFS](/help/en/oss/user-guide/enable-the-automatic-storage-tiering-feature-for-the-oss-hdfs-service#a5e20b4131vqq)
