This topic describes how to use DataStudio to import MaxCompute data into Hologres.

## Prerequisites

A Hologres data source is created in DataWorks and attached to the Data Studio module. For more information, see [Attach a Hologres instance](/help/en/hologres/user-guide/associate-a-hologres-instance-with-a-workspace).

## Background information

DataStudio supports the **one-click MaxCompute data synchronization** feature. This feature lets you import and query MaxCompute table data through a visual interface. This method provides better performance than creating a foreign table to query data directly.

You can also use SQL statements to import MaxCompute data. For more information, see [Replicate MaxCompute data to internal table](/help/en/hologres/user-guide/import-data-from-maxcompute-to-hologres-by-executing-sql-statements#task-2560752).

## Procedure

1.  Create a **one-click MaxCompute data synchronization** node.
    
    1.  Go to the DataStudio page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
        
    2.  In the navigation pane on the left of the **DataStudio** interface, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9400334371/p877155.png) to go to the **Data Development** page.
        
    3.  In the top menu bar, click **Create**, and choose **Create Node** > **Hologres** > **One-click MaxCompute Data Synchronization**.
        
    4.  In the **Create Node** dialog box, select an **Engine Instance** and a **Path**, enter a **Name**, and click **OK**.
        
2.  On the node configuration page, configure the parameters.
    
    **Parameter**
    
    **Configuration**
    
    **Description**
    
    MaxCompute source table
    
    Destination Connection
    
    The name of the attached Hologres data source.
    
    Destination Database
    
    The name of the database in the Hologres instance.
    
    Foreign Table Source
    
    -   Existing foreign table
        
        A foreign table that maps to MaxCompute data has already been created in Hologres.
        
    -   Creating a foreign table
        
        No corresponding foreign table exists. A new one is created during synchronization.
        
    
    External Schema
    
    The schema in Hologres where the existing MaxCompute foreign table is located.
    
    This parameter is required when **Source Table Type** is set to **Existing Foreign Table**.
    
    Foreign Table Name
    
    The name of the existing MaxCompute foreign table in Hologres.
    
    This parameter is required when **Source Table Type** is set to **Existing Foreign Table**.
    
    External server
    
    After a Hologres instance is created, a server named odps\_server is automatically created and can be called directly. For information about the principles, see [postgres\_fdw](https://www.postgresql.org/docs/11/postgres-fdw.html).
    
    This parameter is required when **Source Table Type** is set to **Create Foreign Table**.
    
    MaxCompute Project
    
    The name of the MaxCompute project.
    
    This parameter is required when **Source Table Type** is set to **Create Foreign Table**.
    
    MaxCompute Table Name
    
    The name of the MaxCompute table from which to synchronize data.
    
    This parameter is required when **Source Table Type** is set to **Create Foreign Table**.
    
    Destination table settings
    
    Target Schema
    
    The name of the schema in the current Hologres database.
    
    Destination Table Name
    
    The name of the Hologres internal table to which data is imported. If a table with the same name exists, the original table and its data are deleted and recreated upon execution.
    
    Destination Table Description
    
    A custom description for the Hologres internal table.
    
    Import GUC parameter settings
    
    GUC Parameters
    
    The Grand Unified Configuration (GUC) parameters to set before importing MaxCompute data. For supported GUC parameters, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters). Other SQL statements are not supported.
    
    Synchronization settings
    
    Fields to Synchronize
    
    The fields from the MaxCompute table to synchronize. You can select all fields or a subset of fields.
    
    Partition Configuration
    
    The partition fields to synchronize. Hologres currently supports only single-level partitioning.
    
    For MaxCompute tables with multi-level partitions, one level is set as the partition in Hologres, and the remaining partition levels are automatically mapped to regular fields in Hologres.
    
    Index Configuration
    
    The indexes to build for the destination table. For information about how to create indexes, see [Table creation overview](/help/en/hologres/developer-reference/create-tables#section-l9q-k83-z01).
    
    SQL Script
    
    SQL Script
    
    The SQL statement that is currently running is automatically parsed for your reference.
    
3.  On the node configuration page, click the ![save](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4259623061/p134275.png) icon to save the configuration.
    
4.  On the node configuration page, click the ![run](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4259623061/p134276.png) icon to run the sync task and import the MaxCompute table data.
    
5.  View the synchronized MaxCompute table data.
    
    1.  In the navigation pane on the left, click the ![PG management](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5770096061/p171904.png) icon to go to the table management page.
        
    2.  Double-click the Hologres internal table that you want to view. The table configuration page appears.
        
        **Note**
        
        If the destination table does not appear on the table management page, perform metadata acquisition for Hologres in DataWorks Data Map. For more information, see [Data Map](/help/en/hologres/user-guide/data-map).
        
6.  (Optional) Periodically schedule the task.
    
    1.  On the node configuration page, click **Scheduling Configuration** on the right side of the node configuration section to configure the scheduling properties for the node. For more information, see [Configure basic properties](/help/en/dataworks/user-guide/configure-basic-properties#concept-dlk-2lq-p2b).
        
    2.  On the node configuration page, click the ![save](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p113864.png) icon in the toolbar to save the node.
        
    3.  Click the ![commit](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2272191371/p98393.png) icon in the toolbar to commit the node.
        
    4.  In the **Commit New Version** dialog box, enter a description in the **Change description** field, and click **OK**.
