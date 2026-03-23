The data catalog provides a unified interface to manage and perform operations on MaxCompute metadata. This topic describes how to create and manage data objects, such as tables, views, foreign tables, resources, and functions, in the data catalog.

## **Limits**

If you use a Resource Access Management (RAM) user or a RAM role to view MaxCompute data in the data catalog, you must first obtain the required MaxCompute permissions. If the Layer 3 model is enabled for the MaxCompute data source or project, you must also grant the RAM user or RAM role permission to view schema metadata.

**Note**

If a MaxCompute project contains multiple schemas, you must grant metadata permissions for all schemas to view the complete schema list on the project details page in the data catalog.

-   **Grant permissions to a RAM user**:
    
    ```
    GRANT DESCRIBE ON SCHEMA <Schema_Name> TO USER RAM$<Alibaba_Cloud_Account_Name>:<RAM_User_Name>;
    ```
    
-   **Grant permissions to a RAM role**:
    
    ```
    GRANT DESCRIBE ON SCHEMA <Schema_Name> TO USER `RAM$<Alibaba_Cloud_Account_Name>:role/<RAM_Role_Name>`;
    ```
    
-   After you enable the schema feature for a MaxCompute project, you can [manage schemas](#b084ab0502k2n) and [manage object tables](#fe562c60c6pri).
    

## **Go to the MaxCompute data catalog page**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon. In the **DATA** **CATALOG** tree, click **MaxCompute** to go to the MaxCompute data catalog management page.
    

## **Create a MaxCompute data catalog**

On the MaxCompute data catalog management page, you can add existing MaxCompute projects as datasets to the data catalog.

1.  Click to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** icon next to the MaxCompute data catalog.
    
2.  You can add a MaxCompute project in one of the following ways.
    
    **Target source**
    
    **Method**
    
    A [MaxCompute data source created](/help/en/dataworks/user-guide/add-and-manage-data-sources/) in the current workspace
    
    On the **DataWorks Data Source** tab, find the target data source and click **Add**. To add multiple data sources at once, select them and click **Batch Add**.
    
    A [MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) created in the [MaxCompute console](https://maxcompute.console.alibabacloud.com/cn-shanghai/project-list)
    
    On the **MaxCompute-Project** tab, find the target project and click **Add**. To add multiple projects at once, select them and click **Batch Add**. You can also click **Create Project** to manually add a new MaxCompute project.
    
    > For information about internal project configuration items, see [MaxCompute project configuration parameters](/help/en/maxcompute/user-guide/manage-projects-in-the-new-maxcompute-console#section-kyn-naf-x12). For information about foreign project operations, see [MaxCompute data lakehouse](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#1d1f481d5aore).
    
    **Important**
    
    Metadata synchronization has a latency of 10 to 20 seconds. After you create a project, wait a moment and then manually refresh the list to view the latest information.
    

## **Manage a MaxCompute data catalog**

You can add and manage data objects, such as schemas, tables, and views, in the MaxCompute data catalog.

**MaxCompute object**

**View**

**Create**

**Schema**

Supported

Supported

**Table**

Supported

Supported

**Extenal Table**

Supported

Supported

**Object Table**

Supported

Supported

**View**

Supported

Supported

**Materialized View**

Supported

Supported

**Delta Live Materialized View**

Supported

Supported

**Resource**

Supported

Not supported

**Function**

Supported

Not supported

**Note**

The schema level is displayed in the data catalog only after you enable the schema feature for MaxCompute. For more information, see [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations#section-5gv-kle-omh).

### **Manage schemas**

1.  Create a schema.
    
    Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of the MaxCompute project. In the **Create Schema** dialog box that appears, enter a name and press Enter.
    
2.  View a schema.
    
    After you add a schema to a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project to view the added schema.
    
3.  Delete a schema.
    
    If you no longer need to manage a schema, you can right-click the target schema and select **Delete**.
    
    **Important**
    
    -   This operation cannot be undone. Proceed with caution.
        
    -   Before you delete a schema, you must delete the data objects within it, such as tables and views.
        
    

### **Manage tables**

**Create a table**

1.  To the right of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create Table** to go to the **Create Table** page.
    
2.  You can create a table in one of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  In the toolbar at the top of the page, click **Use Copilot to Create Table** to go to the Copilot Chat interface.
            
        2.  Enter an instruction to create a table. For example, `Create a daily aggregate table for product sales`.
            
        3.  Click **Generate and Replace**. The system generates a default table name and field information based on your instruction.
            
        4.  If the table name and fields meet your expectations, click **Accept**.
            
            **Note**
            
            To modify the table information, you can click Accept and then manually edit the system-generated table information.
            
    -   **Create a table manually**:
        
        Create a table based on the parameter descriptions.
        
        **Parameter**
        
        **Description**
        
        Basic Information
        
        Specify a custom **Table Name**, **Lifecycle**, and other information.
        
        Field Information
        
        Edit the field and field annotation information.
        
        -   **Manual editing**: Click the **Insert** button above the field information list. Manually specify the number of rows to insert, and then edit the field and its annotation information.
            
        -   **Intelligent editing with Copilot:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system can generate relevant fields and comments based on the table name and description you set.
            
        
        Advanced Settings
        
        The **Table Type** is set to **Internal Table** by default. You can configure the **Cluster Properties**.
        
3.  After the configuration is complete, click **Publish** in the top toolbar and complete the publishing process to create the table.
    

**Manage a table**

1.  View a table.
    
    After you create a table in a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project and then click **Table** to view basic information about the table. You can also click a specific table name to view details, such as its **Fields** and **DDL**.
    
2.  Table of operations.
    
    1.  Right-click the internal table on which you want to perform operations. You can select **Generate SQL Query Statement**, **Import Data**, **Request Permission**s, [Metadata Mapping to Hologres](/help/en/dataworks/user-guide/mapping-maxcompute-data-to-hologres), or [Data Synchronization to Hologres](/help/en/dataworks/user-guide/synchronize-maxcompute-data-to-hologres).
        
    2.  Double-click the internal table on which you want to perform operations to go to its details page. Click the **Edit** button in the upper-right corner. On the table editing page, you can modify the **Lifecycle** and **Table Description**, or add, modify, or delete fields.
        
        **Important**
        
        -   Before you modify a field name, delete a field, or modify a field type, run the following command in a [MaxCompute SQL node](/help/en/dataworks/user-guide/maxcompute-sql-node) to enable schema evolution: `setproject odps.schema.evolution.enable=true`.
            
        -   To delete a field, select the corresponding row, right-click, and select **Delete**.
            
        -   After you update the table information, you must click **Publish** again. Otherwise, the operation does not take effect.
            
        
3.  Delete a table.
    
    Right-click the internal table that you want to delete and select **Delete**.
    
    **Important**
    
    This operation cannot be undone. Proceed with caution.
    

### **Manage** external **tables**

**Create a foreign table**

1.  To the right of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create External Table** to go to the Create **External** Table page.
    
2.  You can create a foreign table in either of the following ways.
    
    -   **Create a table using Copilot**:
        
        1.  In the toolbar, click **Use Copilot to Create Table** to go to the Copilot Chat interface.
            
        2.  Enter an instruction to create a table. For example, `Create a daily aggregate table for product sales`.
            
        3.  Click **Generate And Replace**. The system generates a default table name and field information based on your instruction.
            
        4.  If the table name and fields meet your expectations, click **Accept**.
            
            **Note**
            
            To modify the table information, you can click Accept and then manually edit the system-generated table information.
            
    -   **Create a table manually**:
        
        You can create a foreign table based on the parameter descriptions.
        
        **Parameter**
        
        **Description**
        
        Basic Information
        
        Specify a custom **Table Name**, **Lifecycle**, and other information.
        
        Field Information
        
        Edit the field and field annotation information.
        
        -   **Manual editing**: Click the **Insert** button above the field information list. Manually specify the number of rows to insert, and then edit the field and its annotation information.
            
        -   **Intelligent editing with Copilot:** Click **Generate Fields** or **Generate Field Descriptions** above the field information list. The system can generate relevant fields and comments based on the table name and description you set.
            
        
        Advanced Settings
        
        The **Table Type** is set to **Externa Table** by default. You must configure the OSS **Storage Location** and **Storage Format**.
        
        -   **Storage Location**: `oss://<OSS_Bucket_Name**>**/`
            
            **Note**
            
            You can obtain the OSS bucket name from [Bucket overview](/help/en/oss/user-guide/oss-bucket-overview).
            
        -   **Storage Format**: Multiple formats are supported, such as CSV, ORC, and TEXTFILE.
            
        
3.  After the configuration is complete, click **Publish** in the toolbar to create the table.
    

**Manage a foreign table**

1.  View a foreign table.
    
    After you create a foreign table in a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project and then click **Externa Table** to view its basic information. You can also click a specific table name to view details such as its **Fields** and **DDL**.
    
2.  Operations on external tables.
    
    Double-click the foreign table that you want to modify to open its details page. Click the **Edit** button in the upper-right corner. On the table editing page, you can modify the **Lifecycle** and **Table Description**, or add, modify, or delete fields.
    
    **Important**
    
    -   Before you modify a field name, delete a field, or modify a field type, run the following command in a [MaxCompute SQL node](/help/en/dataworks/user-guide/maxcompute-sql-node) to enable schema evolution: `setproject odps.schema.evolution.enable=true`.
        
    -   To delete a field, select the corresponding row, right-click, and select **Delete**.
        
    -   After you update the table information, you must click **Publish** again. Otherwise, the operation does not take effect.
        
    
3.  Delete a foreign table.
    
    Right-click the foreign table you want to delete and select **Delete**.
    

### **Manage object tables**

You can manage object tables only in MaxCompute projects where the [schema feature is enabled](/help/en/maxcompute/user-guide/schema-related-operations#66333e0bffs7m).

**Manage an object table**

1.  View an object table.
    
    After you create an OBJECT TABLE in a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project and then click **Object Table** to view basic information about the object table. You can also click a specific table name to view details, such as its **Fields** and **DDL**.
    
2.  Operate on an object table.
    
    Right-click the object table that you want to manage. You can select **Generate SQL Query Statement**, **Request Permissions**, [map MaxCompute metadata to a Hologres foreign table](/help/en/dataworks/user-guide/mapping-maxcompute-data-to-hologres), or [sync MaxCompute data to a Hologres internal table](/help/en/dataworks/user-guide/synchronize-maxcompute-data-to-hologres).
    
3.  Delete an object table.
    
    Right-click the object table you want to delete and select **Delete**.
    
    **Important**
    
    This operation cannot be undone. Proceed with caution.
    

### **Manage views**

**Create a view**

1.  To the right of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create View** to open the **Create View** page.
    
2.  Modify the command as described in [Create or update a view](/help/en/maxcompute/user-guide/view-related-operations#title-hs8-u88-o9w). Change `view_name` to the name of the view that you want to create. After the `AS` keyword, add the query statement for the view's data source.
    
3.  Click **Publish** at the top of the page to create the view.
    

**Manage a view**

1.  View the details of a view
    
    After you create a view in a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project and then click **View** to display its basic information. You can also click a specific view name to view details such as its **Fields** and **DDL**.
    
2.  Operations view
    
    Double-click the view that you want to edit to open its details page. Click the **Edit** button in the upper-right corner. On the view editing page, you can modify the view by changing the data source query statement after the `AS` keyword.
    
3.  Delete a view
    
    Right-click the view you want to delete and select **Delete**.
    

### **Manage materialized views**

**Create a materialized view**

1.  To the right of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create Materialized View** to open the **Create Materialized View** page.
    
2.  Modify the command as described in [Create a materialized view](/help/en/maxcompute/user-guide/materialized-view-operation#title-miz-gk4-zat). Replace `view_name` with the name of the materialized view that you want to create. After the `AS` statement, add the query statement for the data source of the materialized view.
    
3.  Click **Publish** at the top of the page to create the materialized view.
    

**Manage a materialized view**

1.  View a materialized view.
    
    After a materialized view is created in a MaxCompute project, you can view its basic information. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project, and then click **Materialized View**. You can also click a specific materialized view name to view more details, such as its **Fields** and **DDL**.
    
2.  Delete a materialized view.
    
    Right-click the materialized view you want to delete and select **Delete**.
    

### **Manage delta live materialized views**

**Create a dynamic materialized view**

1.  To the right of the schema, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png)** > **Create Delta Live Vaterialized View** to open the **Create Delta Live Vaterialized View** page. The key configuration parameters are as follows:
    
    **Parameter**
    
    **Description**
    
    **Data Generation SQL**
    
    Fill in the **Data Generation SQL** based on the command in [Dynamic materialized view](/help/en/maxcompute/user-guide/delta-live-mv). Click the **Precompile** button to check the syntax of the input SQL.
    
    **Important**
    
    A non-partitioned table must have a primary key.
    
    **Field Details**
    
    The details of the parsed fields after a successful precompilation.
    
    **Primary Key Field Information**
    
    After the data generation SQL is precompiled, the system reads the fields that can be used as primary keys and displays them in the primary key field drop-down list. You can select multiple primary key fields.
    
    **Partition Field Information**
    
    After the data generation SQL is precompiled, the partition field reads the fields that can be partitioned and displays them in the partition field drop-down list. You can select partition fields to decide whether to partition the dynamic materialized view. You can select multiple partition fields.
    
    **Tuning Parameters**
    
    You can configure multiple parameter key-value pairs. These key-value pairs need to be generated into the **TBLPROPERTIES** table property of the DDL.
    
    **Data Refresh Policy**
    
    -   **Non-partitioned Delta Live Materialized View Refresh Configuration**: A non-partitioned dynamic materialized view is created if you do not specify a partition field.
        
        -   For dynamic materialized views in MaxCompute, the refresh mode is set to incremental refresh by default. The table property is TBLPROPERTIES("refresh\_mode"="incremental").
            
        -   The supported refresh scheduling methods are **MaxCompute Auto Refresh** and **DataWorks Scheduled Refresh**.
            
    -   **Partitioned Delta Live Materialized View Refresh Configuration:** A partitioned dynamic materialized view is created if you specify a partition field.
        
        -   **Partition refresh**: Configure settings such as the refresh scheduling method, whether to auto-refresh data, the scheduling epoch, and the refresh duration.
            
        -   **Refresh historical partition data**: Configure whether to refresh data in partitions that have completed their refresh cycle.
            
    
2.  Click **Publish** at the top of the page to create the dynamic materialized view.
    

**Manage a dynamic materialized view**

1.  Publish to a development or production environment: In a standard mode workspace, you can publish an object to a different environment.
    
2.  View a dynamic materialized view.
    
    After you create a dynamic materialized view in a MaxCompute project, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the project name and then click **Delta Live Materialized View** to view its basic information. You can also click a specific materialized view name to view details such as its **Fields** and **DDL** statement.
    
3.  Delete a dynamic materialized view.
    
    Right-click the dynamic materialized view that you want to delete and select **Delete**.
    

### **Manage resource data objects**

**Manage resources**

After you [create a resource](/help/en/dataworks/user-guide/maxcompute-resources-and-functions#d9321d4a480df) in DataWorks Resource Management, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the MaxCompute project and then click **Resource** to view basic information about the resource. You can also click a specific resource name to view more information, such as its storage size.

**Manage functions**

After you [create a function](/help/en/dataworks/user-guide/maxcompute-resources-and-functions#9007662fb5zp0) in DataWorks Resource Management, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the MaxCompute project and then click **Function** to view basic information about the function. You can also click a specific function name to view more information, such as its storage size.

## **View and remove a MaxCompute data catalog**

If you no longer need to use a MaxCompute data catalog, you can view and remove it.

1.  View a project.
    
    1.  After you add a project to the MaxCompute data catalog, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the data catalog to view the project.
        
    2.  Hover your mouse over the MaxCompute project to view its storage usage and other related information.
        
2.  Remove a project.
    
    If you no longer need to manage a MaxCompute project, right-click the target project and select **Remove**.
