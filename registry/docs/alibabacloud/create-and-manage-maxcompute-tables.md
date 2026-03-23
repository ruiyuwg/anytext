You can create and manage MaxCompute tables using MaxCompute SQL statements or the visualization features in DataWorks. The visualization method is more convenient than using SQL statements. This topic describes how to create and manage MaxCompute tables using the visualization method.

## Notes

-   **Table operation principles**
    
    When you create and operate on MaxCompute tables, you must follow the basic requirements for MaxCompute table operations. For example, you cannot delete fields from a table after it is created. For more information, see [Limits on MaxCompute table operations](/help/en/maxcompute/product-overview/limits-4#concept-525550).
    
-   **Changes to physical table properties**
    
    You can change the physical properties of MaxCompute tables by running MaxCompute SQL commands. For more information, see [Table operations](/help/en/maxcompute/user-guide/table-operations#concept-jvv-vk2-vdb). DataWorks enforces access control when you operate on MaxCompute tables. If a Resource Access Management (RAM) user runs commands to operate on a table, an error may be reported in some scenarios. For more information, see [Details of MaxCompute data permission control](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance#task-2256464).
    
-   **Metadata update latency**
    
    Metadata operations may have a certain latency. After you create, update, or delete a table using the visualization method, the table may not be found in a search, or it may still be visible after deletion. In such cases, you can go to **DataMap** and [refresh the table metadata](/help/en/dataworks/overview-datamap#section-9uq-tbw-ivj) to manually synchronize the operation results.
    

## Preparations

A [MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#88b78c19cfz94) is bound to your workspace.

## Go to DataStudio

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.

## Create a MaxCompute table

### Ways to create a table

You can create a table in the Table Management directory of DataWorks or create a table for a specific business process.

-   **Create a table from Table Management**
    
    In the navigation pane on the left of DataStudio, select [Table Management](/help/en/dataworks/user-guide/manage-tables#task-2459379) and click the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6158425761/p538598.png) icon to create a table. If the Table Management module is not displayed in the navigation pane on the left, you can add it. For more information, see [Customize the interface](/help/en/dataworks/user-guide/adjust-the-displayed-datastudio-modules#task-2215286).
    
-   **Create a table from a specific business process**
    
    DataWorks uses business processes to organize and manage code. You can create tables that are related to a business process. If you have not created a business process, you must create one first. For more information, see [Business processes](/help/en/dataworks/user-guide/create-a-workflow#task-2510738). If a business process exists, right-click the business process and choose **Create Table** > **MaxCompute** > **Table**.
    
    **Important**
    
    If you cannot find the button, check whether a MaxCompute computing resource is bound to the workspace.
    

### Configure basic table information

After you create a table, the table editing page appears. On this page, DataWorks lets you configure table information in **DDL** mode or **visualization** mode.

-   **Configure the table in DDL mode**
    
    Click the ![ddl](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1934035761/p540424.png) icon on the table editing page and use a [standard MaxCompute table creation statement](/help/en/maxcompute/user-guide/table-operations#concept-jvv-vk2-vdb) to generate the MaxCompute table schema. After you use DDL to generate the table schema, DataWorks automatically populates the configurations on the table editing page. Use this method if you are accustomed to writing code for tasks.
    
    **Important**
    
    -   The table name is defined before you go to the table editing page. You cannot change the table name in the DDL creation command. Otherwise, an error is reported.
        
    -   DDL mode supports only defining the physical properties of a table using commands. You can edit the business properties of the table on the table editing page after the table is created in DDL mode and the configurations are populated in the interface.
        
    
-   **Configure the table using the visualization interface**
    
    Follow the instructions on the table editing page to configure the table properties. Use this method if you want to perform convenient visual operations. The following example shows how to configure table information using the visualization interface.
    
    1.  **Configure** **General** **properties.**![配置表基本属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1934035761/p540563.png) The following table describes the main configuration items.
        
        **Configuration item**
        
        **Description**
        
        **Display Name**
        
        The display name of the table.
        
        **Theme**
        
        A subject in DataWorks is equivalent to a folder. Define the level-1 and level-2 folders for the table. You can classify tables based on business purposes and attach tables of the same type to the same folder.
        
        **Note**
        
        The level-1 and level-2 Theme are presented as folders for table management in DataWorks to help you better manage tables. You can quickly find the current table by subject on the [Table Management](/help/en/dataworks/user-guide/manage-tables#task-2459379) page. If no subject is available, you can create one. For more information, see [Define table subjects](/help/en/dataworks/user-guide/manage-settings-for-tables#section-uxl-6q0-ebc).
        
    2.  Design the **Physical Model****.**![物理模型设计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1934035761/p540564.png) The following table describes the configuration items.
        
        **Configuration item**
        
        **Description**
        
        **Level**
        
        The physical data warehouse Level to which the table belongs. Level are used to define and manage data warehouse layers. Data warehouse layers are typically divided into operational data store (ODS), dimension (DIM), data warehouse detail (DWD), data warehouse summary (DWS), and application data service (ADS). You can attach the table to an appropriate layer based on its business purpose.
        
        **Note**
        
        You can also customize layers. For more information, see [Layer management](/help/en/dataworks/user-guide/manage-settings-for-tables#section-fl1-6ba-inm).
        
        **Category**
        
        Defines the physical category of the table. This provides a more detailed classification of tables from a business usage perspective. Categories typically include basic business layer, advanced business layer, and others.
        
        **Note**
        
        You can also customize physical categories. For more information, see [Category management](/help/en/dataworks/user-guide/manage-settings-for-tables#section-fl1-6ba-inm).
        
        **TTL**
        
        Defines the lifecycle of the table.
        
        -   For more information about the lifecycle of a MaxCompute table, see [Lifecycle](/help/en/maxcompute/product-overview/lifecycle#concept-zbq-yfb-5db).
            
        -   For more information about lifecycle actions on a MaxCompute table, see [Lifecycle actions](/help/en/maxcompute/user-guide/lifecycle-management-operations#concept-axp-nj1-wdb).
            
        
        **Partition Type**
        
        Defines whether the table is a partitioned table or a non-partitioned table. For more information about partitioned and non-partitioned MaxCompute tables, see [Partition](/help/en/maxcompute/product-overview/partition#concept-qlm-lz1-5db).
        
        **Table Type**
        
        Defines whether the table is an Internal table or an External table. When you query data in an internal table, real data is imported, which results in faster queries. When you query data in an external table, you can query the data without importing it, which saves memory. For more information about internal and external MaxCompute tables, see [Tables](/help/en/maxcompute/product-overview/table#concept-nbg-my1-5db).
        
    3.  Design the **Schema****.**![表结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2934035761/p540565.png) The following table describes the main configuration items.
        
        **Configuration**
        
        **Description**
        
        **Field Type**
        
        Defines the data type of a field. You can only select data types supported by MaxCompute from the drop-down list. For more information about MaxCompute data types, see [Data type version guide](/help/en/maxcompute/user-guide/data-type-editions#concept-jhp-4bb-5db).
        
        **Field Security Level**
        
        Defines the security level of a field. This configuration item is visible only when label-based access control is enabled for the MaxCompute project. For more information about MaxCompute field security levels, see [Label-based access control](/help/en/maxcompute/user-guide/label-based-access-control#concept-nq3-zz1-wdb).
        
        **Primary Key Field**
        
        Defines the business primary key of the table. MaxCompute tables do not support primary keys, so the primary key here is used only for management from a business dimension.
        
    

### Commit and publish the MaxCompute table

After you define the table schema, you must commit it to the development and production environments.

**Note**

The process for committing and publishing MaxCompute tables varies based on the [workspace mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b):

-   Basic mode: You need to commit the table only to the production environment.
    
-   Standard mode: Only users with the **Workspace Manager** or **O&M** role can publish tables to the production environment. To publish a table to the production environment, you must grant the user the required permissions. For more information about authorization, see [Add workspace members and manage their roles and permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

**Operation**

**Description**

**Load From Development Environment**

Loads the information of the development table from the development environment and displays it on the current page.

**Important**

You can perform this operation only after the table is committed to the development environment. After you perform this operation, the information of the table created in the development environment overwrites the table information on the current page.

**Commit To Development Environment**

Commits the table to the development environment of DataWorks. This creates the current table in the MaxCompute project that corresponds to the MaxCompute computing resource added in the development environment. After the commit is successful, you can perform the following operations:

-   **View the table schema**
    
    In DataStudio, [develop an ODPS SQL node](/help/en/dataworks/user-guide/create-an-odps-sql-node#task-2513475) and run the `desc tablename` command to view the table schema.
    
-   **View engine information**
    
    View the MaxCompute engine and the new table in the development environment. For more information, see [Bind a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#88b78c19cfz94).
    

**Load From Production Environment**

Loads the information of the production table from the production environment and displays it on the current page.

**Important**

You can perform this operation only after the table is committed to the production environment. After you perform this operation, the information of the table created in the production environment overwrites the table information on the current page.

**Commit To Production Environment**

Commits the table to the production environment of DataWorks. This creates the current table in the MaxCompute project that corresponds to the MaxCompute computing resource added in the production environment. After the commit is successful, you can perform the following operations:

-   **View the table schema**
    
    [Develop a task on an ODPS SQL node](/help/en/dataworks/user-guide/create-an-odps-sql-node#task-2513475) in DataStudio, and run the `desc projectname.tablename` command to view the schema of the table.
    
-   **View engine information**
    
    View the MaxCompute engine and the new table in the production environment. For more information, see [Bind a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#88b78c19cfz94).
    

## Write data to and export data from a MaxCompute table

You can import and export MaxCompute data as described in the following sections.

### Write data to a MaxCompute table

You can use a [data integration task](/help/en/dataworks/user-guide/overview-of-data-integration/#concept-dr3-k2v-42b) and a [MaxCompute node task](/help/en/dataworks/user-guide/create-an-odps-sql-node#task-2513475) to write data to a MaxCompute table. DataWorks also provides the [Upload data](/help/en/dataworks/user-guide/import-data-to-a-maxcompute-table#task-2136651) feature to import local data into a MaxCompute table.

### Export data from a MaxCompute table

After you query data in DataStudio, you can click **Download** on the query result page to download the table data to your local computer. By default, you can download a maximum of 10,000 data records at a time. Tenant administrators and tenant security administrators can go to the [Data query and analysis control](/help/en/dataworks/user-guide/use-the-data-query-and-analysis-control-feature#task-2262140) page in Security Center to configure the maximum number of data records that can be downloaded at a time.

**Important**

If the number of data records that you want to export exceeds 10,000, you can run [Tunnel command](/help/en/maxcompute/user-guide/tunnel-commands#concept-rkf-2wc-5db) on the MaxCompute client to export the data.

## Query data in a MaxCompute table

You can use an [ODPS SQL node](/help/en/dataworks/user-guide/create-an-odps-sql-node#task-2513475) or the [ad hoc query](/help/en/dataworks/user-guide/create-an-ad-hoc-query#task-2495718) feature to query data in a MaxCompute table by executing [SQL statements](/help/en/maxcompute/table-operations-1#concept-l3j-w31-wdb).

### Preset permissions

[Basic mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b) workspaces do not support fine-grained access control or data isolation between development and production environments. This topic uses a [standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b) workspace as an example.

After a RAM user is added to a workspace as a member, the preset data access permissions are as follows:

**Permission type**

**Description**

**Permissions on a MaxCompute project in the development environment**

DataWorks uses a mapping between workspace-level preset roles and MaxCompute engine roles in the development environment. This mapping grants a RAM user who is assigned a workspace role the permissions of the mapped development engine role. By default, the RAM user has permissions on the corresponding engine project in the development environment but does not have permissions on the corresponding engine project in the production environment.

**Permissions on a MaxCompute project in the production environment**

The RAM user that is used as a scheduling access identity has high-level permissions on a MaxCompute project in the production environment. Other RAM users do not have permissions on the MaxCompute project in the production environment. To perform operations on production tables, you must go to [Security Center](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910) to request the required permissions.

DataWorks provides a default approval flow and allows administrators to customize approval flows.

For more information about MaxCompute data access control, see [Details of MaxCompute data permission control](/help/en/dataworks/user-guide/manage-permissions-on-data-in-a-maxcompute-compute-engine-instance#task-2256464).

### Data access behavior

MaxCompute supports cross-project table queries. Therefore, you can query production data in a DataWorks workspace across projects by specifying the project name in the DataStudio interface. The following table describes the methods for accessing tables across projects and the accounts that are used for execution in different interfaces.

**Note**

-   In DataStudio, you can view the binding information for MaxCompute computing resources that are added to different environments and the execution accounts that are used for environment configuration. For more information, see [Resource Management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).
    
-   For a DataWorks workspace in standard mode, the personal identity of a **task executor** is used to run MaxCompute tasks in the development environment by default. An Alibaba Cloud account is used as the scheduling access identity to run MaxCompute tasks in the production environment. For more information, see [Add a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#88b78c19cfz94).
    

**Sample code**

**Code execution in the development environment (****Data Studio** **and Operation Center for the development environment)**

**Code execution in the production environment (Operation Center for the production environment)**

Access a development table in a development project:

```
select col1 from projectname_dev.tablename;
```

The personal Alibaba Cloud account of the task executor is used to access the development table.

-   If a RAM user runs the task, the personal Alibaba Cloud account of the RAM user is used to access the development table.
    
-   If an Alibaba Cloud account runs the task, the Alibaba Cloud account is used to access the development table.
    

The scheduling access identity is used to access the development table.

Access a production table in a production project:

```
select col1 from projectname.tablename;
```

The personal Alibaba Cloud account of the task executor is used to access the production table.

**Note**

Due to security control on production data, a personal Alibaba Cloud account does not have permissions to access production tables by default. You must go to [Security Center](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910) to request the permissions. DataWorks provides a default approval flow and supports custom approval flows that are defined by administrators.

The scheduling access identity is used to access the production table.

Run a statement in a target environment, such as the development environment, to access a table in the corresponding environment. In this example, the table is the development table:

```
select col1 from tablename;
```

When the statement is run in the development environment, the personal Alibaba Cloud account of the task executor is used to access the target table in the development engine.

When the statement is run in the production environment, the scheduling access identity is used to access the target table in the production engine.

## View MaxCompute data assets

You can view MaxCompute data assets as described in the following sections.

### View production tables under a tenant

In the [Tenant Tables](/help/en/dataworks/user-guide/view-tenant-tables#task-2459212) pane of the DataStudio page in the DataWorks console, you can view all tables that are in the production environment of your Alibaba Cloud account in the current region.

### View metadata

You can go to [Data Map](/help/en/dataworks/overview-datamap#concept-265529) to view the details and metadata of a MaxCompute table.

### View table lineage

On the table details page in [Data Map](/help/en/dataworks/overview-datamap#concept-265529), you can view the upstream and downstream lineage of the table.

**Note**

To find the tasks in the workspace that use the table, you can use the [code search](/help/en/dataworks/user-guide/code-search#task-2126577) feature.

## Manage MaxCompute tables in batches

You can manage MaxCompute tables in batches as described in the following sections.

### Delete MaxCompute tables in batches

You can go to the [My Data](/help/en/dataworks/user-guide/view-and-manage-tables-and-data-permissions#task-2476652) page in Data Map to delete multiple tables that you own.

**Note**

Due to security control for data in the production environment, you cannot directly run commands to delete tables in the production environment. If you want to delete a table that belongs to another user, you must go to [Security Center](/help/en/dataworks/user-guide/manage-permissions-on-maxcompute#task-2065910) to request the required permissions.

### Change table owners in batches

You can go to the [My Data](/help/en/dataworks/user-guide/view-and-manage-tables-and-data-permissions#task-2476652) page in Data Map to change the owner of multiple tables that you own at the same time.

### Modify table lifecycles in batches

You can go to the [My Data](/help/en/dataworks/user-guide/view-and-manage-tables-and-data-permissions#task-2476652) page in Data Map to modify the lifecycle of your tables in batches.

**Note**

The lifecycle of a single table can be modified in Table Management. For more information, see [Create a MaxCompute table](#section-23k-qyb-f0c).
