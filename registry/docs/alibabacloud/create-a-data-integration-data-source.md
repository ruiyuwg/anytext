A data source connects to various databases and storage services, such as MaxCompute, MySQL, and OSS. It is a prerequisite for a synchronization task in Data Integration. It defines the database from which the task reads data (the source) and the database to which it writes data (the destination).

## The role of a data source

In a Data Integration task, a data source acts as an **endpoint** at both ends of the data flow:

-   Source (Reader): The task reads data from the data source configured as the source.
    
-   Destination (Writer): The task writes the processed data to the data source configured as the destination.
    

You must configure both a source and a destination data source before you can synchronize a single table or a full database, in either batch or real-time mode. A correctly configured data source with proper network connectivity is required for tasks to run successfully.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3011250771/CAEQUxiBgMC95qnG4RkiIGZlZGMyOGViMDg2YjQyY2I4YTVkZDQ4MjMwYTMwMmY15578990_20250807151159.062.svg)

## **Supported data source types**

For a list of data sources supported by DataWorks Data Integration, see [Supported data sources and synchronization solutions](/help/en/dataworks/user-guide/supported-data-source-types-and-read-and-write-operations). The configuration process might vary slightly depending on the data source type. Refer to the UI for specific details.

## **Create a data source**

**Important**

DataWorks recommends creating and managing all data sources centrally in **Management Center**. Data sources created here are reusable, manageable, and support features like [environment isolation](/help/en/dataworks/user-guide/add-and-manage-data-sources/#025f80e1d94gt). This approach is a best practice for enterprise-level data development and production workloads.

For configuration instructions, see: [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).

You can create a data source in either Management Center or Data Integration. The following table compares the two methods.

**Capability**

**Management Center (recommended)**

**Data Integration**

Management location

**Management Center** > **Data Sources**.

**Data Integration** > **Data Sources**.

[Environment isolation](/help/en/dataworks/user-guide/add-and-manage-data-sources/#025f80e1d94gt)

Supports separate configurations for the development environment and production environment to protect production workloads.

Not supported. Only a production environment is available.

Multi-module reusability

Can be used across all modules, including Data Integration, Data Studio, and Data Analysis.

Has limited functionality when used in other modules.

Permission control

Supports cross-workspace authorization.

Does not support authorization.

Applicable mode

Recommended for workspaces in standard mode. Aligns with enterprise standards.

Suitable for basic mode, or for standard mode scenarios that do not require isolation.

Cloning

Supports cloning to quickly create a new data source.

Not supported.

> Both methods support [third-party authentication](/help/en/dataworks/user-guide/manage-third-party-authentication-files) and [Use the RAM role-based authorization mode to add a data source](/help/en/dataworks/user-guide/use-the-ram-role-based-authorization-mode-to-add-a-data-source).

-   The creation process is the same in both locations.
    
-   When you create a data source in Management Center, a corresponding data source with the same name is automatically created in Data Integration. Both share the same production environment configuration.
    
-   When you create a data source in Data Integration, a corresponding data source with the same name is also automatically created in Management Center. However, this data source contains information only for the production environment. The development environment will be marked as incomplete and must be configured manually.
    
-   Configuration parameters vary by data source type. For more information, see: [Data source list](/help/en/dataworks/user-guide/data-sources/).
    

## **Use a data source**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3011250771/CAEQUxiBgIDcoevG4RkiIDhlYWFhMmY0YjhkOTQyY2I5NDdhYTc2Yjk1NDRlNzRm5578990_20250808172348.598.svg)

**Basic mode**:

In a workspace that uses basic mode, there is only one environment. data sources created in **Management Center** and **Data Integration** are identical.

**Standard mode**:

A [workspace in standard mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode) supports environment isolation for data sources. A single data source name can have two separate configurations: one for the development environment and one for the production environment. You can set them to different databases or instances to isolate test data from production data, which helps protect your production data.

-   In **Data Integration**, only the **batch synchronization for a single table** task type supports environment isolation. All other types of **synchronization tasks** use the production environment data source.
    
-   A data source created in Data Integration contains only the production environment configuration. Because its development environment information is missing, it cannot be used directly in data development tasks. You must go to Management Center to complete the development environment configuration before you can use it in Data Studio and for batch synchronization of a single table.
    

## **Next steps**

After you configure the data source and it passes the [connectivity test](/help/en/dataworks/user-guide/add-and-manage-data-sources/#f99d499a78psc), you can configure a synchronization task in Data Integration:

-   Batch synchronization for a single table: [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui), [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor).
    
-   Real-time synchronization for a single table: [Configure a real-time synchronization task in Data Integration](/help/en/dataworks/user-guide/real-time-synchronization-task-configuration/).
    
-   Batch synchronization for a full database: [Configure a batch synchronization task for a full database](/help/en/dataworks/user-guide/configure-a-database-wide-offline-synchronization-task).
    
-   Real-time synchronization for a full database: [Configure a real-time synchronization task for a full database](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration).
    
-   Full and incremental synchronization for a full database: [Configure a full and incremental synchronization task for a full database](/help/en/dataworks/user-guide/full-incremental-near-real-time-synchronization-of-mysql-whole-database-to-maxcompute).
    

## FAQ

-   [Why does data source connectivity sometimes succeed and sometimes fail?](/help/en/dataworks/network-connectivity-and-operations-on-resource-groups#section-5eo-21v-c2b)
    
-   [I have purchased an exclusive resource group, but I cannot find it when testing data source connectivity or running tasks. What should I do?](/help/en/dataworks/network-connectivity-and-operations-on-resource-groups#section-5eo-21v-c2b)
    
-   [The connectivity test fails when I access a database in a VPC. How do I fix this?](/help/en/dataworks/network-connectivity-and-operations-on-resource-groups#section-9hz-mqh-20x)
    
-   [How do I configure an allowlist for a database?](/help/en/dataworks/configure-an-ip-address-whitelist)
    

For more frequently asked questions about data sources, see: [FAQ](/help/en/dataworks/user-guide/faq-4).
