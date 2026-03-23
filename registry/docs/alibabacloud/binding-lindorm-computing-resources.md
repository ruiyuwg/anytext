To use DataWorks for developing and managing Lindorm tasks, you must first associate your Lindorm instance as a DataWorks Lindorm computing resource. After the instance is associated, you can use the computing resource in DataWorks for data synchronization, development, and other operations.

## **Background information**

[Lindorm](/help/en/lindorm/product-overview/product-introduction-overview) is a distributed computing service built on a cloud-native architecture. It supports community-edition computing models, is compatible with Spark interfaces, and deeply integrates with the Lindorm storage engine. Lindorm uses underlying data storage features and indexing to efficiently run distributed jobs. It is ideal for scenarios such as large-scale data processing, interactive analysis, machine learning, and graph computing.

## **Prerequisites**

-   [A workspace has been created](/help/en/dataworks/user-guide/create-a-workspace).
    
    **Important**
    
    Only workspaces that **Use Data Studio (New Version)** are supported.
    
-   [A Lindorm instance has been created](/help/en/lindorm/getting-started/create-an-instance) and meets the following conditions:
    
    -   The **[compute engine](/help/en/lindorm/user-guide/compute-engine/) is enabled** for the Lindorm instance.
        
    -   The Lindorm instance and the DataWorks workspace are in the same region.
        
-   [A Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) has been created and associated to the target DataWorks workspace.
    

## **Associate a** Lindorm **computing resource**

### **Limits**

-   **Regions**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permissions**:
    
    -   Only DataWorks Serverless resource groups are supported for running Lindorm tasks in DataWorks.
        
    -   Only workspace members who have the **O&M** or **Workspace Administrator** role, or members who have the AliyunDataWorksFullAccess permission, can create computing resources. For more information about how to view member roles or grant permissions, see [Add workspace members and manage their roles and permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
        

### **Go to the computing resources page**

1.  Go to the [DataWorks Workspaces](https://dataworks.console.aliyun.com/workspace/list) page. In the top navigation bar, switch to the target region and find the target workspace. Click the workspace name or click **Details** in the **Operation** column to go to the workspace details page.
    
2.  In the navigation pane on the left, click **Computing Resources**. On the page that appears, select a computing resource type.
    

### **Associate** **the Lindorm computing resource**

On the [Computing Resources](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) page, configure and associate the Lindorm computing resource using the following parameters.

1.  Select the computing resource type to associate.
    
    1.  Click **Associate Computing Resource** to navigate to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **Lindorm**. The **Associate Lindorm Computing Resource** configuration page appears.
        
2.  Configure the Lindorm computing resource.
    
    On the **Associate Lindorm Computing Resource** configuration page, configure the parameters listed in the following table.
    
    **Configuration Section**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Configuration Mode**
    
    Only **Alibaba Cloud Instance Mode** is supported.
    
    **Instance**
    
    The drop-down list displays the Lindorm instances in your current region. Select the Lindorm instance that you want to associate to DataWorks.
    
    **Database Name**
    
    Select the database that DataWorks connects to by default when using this Lindorm computing resource. The default database is `default`.
    
    **Username**/**Password**
    
    Enter the username and password for identity authentication when DataWorks uses this Lindorm computing resource. You can find the username and password in the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster). Find the created Lindorm instance, click the **Instance Name**, and find the username and password on the **Database Connection** page in the navigation pane on the left.
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource instance. When a task runs, you can select the computing resource for the task based on this name.
    
    **Connection Configuration**
    
    **Connectivity Status**
    
    In the Connection Settings section, select the Serverless resource group that DataWorks uses to run Lindorm tasks. Click **Test Network Connectivity** to ensure that the resource group can access your Lindorm instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
3.  Click **OK** to finalize the Lindorm computing resource configuration.
    

## **(Optional) Configure global Spark-related parameter**

In DataWorks, you can specify Spark-related parameter for each module at the workspace level. These parameters are then used by default when the modules run tasks. You can customize global Spark-related parameter and set their priority over parameters configured within specific modules, such as Data Studio, DataAnalysis, and Operation Center. For more information, see [Set global](/help/en/dataworks/user-guide/configure-global-spark-parameters#52bdeb60516oj) Spark-related parameter.

### **Background information**

Apache Spark is an engine for large-scale data analysis. In DataWorks, you can configure the Spark-related parameter that scheduling nodes use at runtime in the following ways:

**Method 1**: You can configure global Spark-related parameter to specify the Spark-related parameter that a DataWorks module uses at the workspace level when running EMR tasks. You can also specify whether these global Spark-related parameter take precedence over the Spark-related parameter configured within a specific module. For more information, see [Configure global](#4c55cfa771irw) Spark-related parameter.

**Method 2**: In the Data Studio, you can set specific SPARK properties for an individual node on the node editing page. Currently, other product modules do not support setting SPARK properties within the module.

### **Access control**

Only the following roles can configure global Spark-related parameter:

-   Alibaba Cloud account.
    
-   A Resource Access Management (RAM) user or RAM role that has the `AliyunDataWorksFullAccess` permission.
    
-   A RAM user that has the Workspace Administrator role.
    

### **View global** Spark-related Parameter

1.  Go to the [Computing Resources](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) page and find the Lindorm computing resource that you associated.
    
2.  Click **Spark-related Parameter** to view the global parameter settings in the Spark-related parameter configuration pane.
    

### **Configure global** Spark-related parameter

You can configure SPARK global parameters by following these steps. For more information about configuring Spark-related parameter for Lindorm computing resources, see [Job Configuration Instructions](/help/en/lindorm/user-guide/parameter-description).

1.  Go to the [Computing Resources](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) page and find the Lindorm computing resource that you associated.
    
2.  Click **Spark-related Parameter** to open the SPARK configuration pane and view the global parameter settings.
    
3.  Set global Spark-related Parameter.
    
    In the upper-right corner of the **Spark-related Parameter** page, click **Edit Spark-related Parameter** to configure global Spark-related parameter and set their priorities for each module.
    
    **Note**
    
    This is a global configuration for the workspace. Before you proceed, make sure that you are in the correct workspace.
    
    **Parameter**
    
    **Steps**
    
    **Spark Property**
    
    Configure the Spark properties that each module uses when running Lindorm tasks. For more information, see [Job configuration](/help/en/lindorm/user-guide/parameter-description#%E8%B5%84%E6%BA%90%E8%A7%84%E6%A0%BC).
    
    Click the **Add** button below. Enter a **Spark Property Name** and its corresponding **Spark Property Value**.
    
    **Note**
    
    To enable the collection of data lineage and output information, perform the following configuration:
    
    -   Set **Spark Property Name** to `spark.sql.queryExecutionListeners`.
        
    -   Set **Spark Property Value** to `com.aliyun.dataworks.meta.lineage.LineageListener`.
        
    
    For more information about Spark property settings, see [Job configuration](/help/en/lindorm/user-guide/parameter-description#%E8%B5%84%E6%BA%90%E8%A7%84%E6%A0%BC).
    
    **Global Settings Take Precedence**
    
    If you select this option, the global configuration takes precedence over the configurations within product modules. Tasks will then run uniformly based on the globally configured SPARK properties.
    
    -   **Global configuration**: The Spark properties configured on the **Spark-related Parameter** page for the Lindorm computing resource in **Management Center** > **Computing Resources**.
        
        Currently, you can set global Spark-related parameter only for the Data Studio and Operation Center modules.
        
    -   **Configuration within product modules**:
        
        -   **Data Studio**: For Lindorm Spark and Lindorm Spark SQL nodes, you can set SPARK properties for a single node task on the **Configuration Items** tab of the node editing page.
            
        -   **Other product modules**: Setting SPARK properties within these modules is not supported.
            
    
4.  Click **OK** to save the global Spark-related parameter.
    

## **What to do next**

-   After you configure the Lindorm computing resource, you can use it to develop nodes in Data Studio. For more information, see [Lindorm Spark node](/help/en/dataworks/user-guide/lindorm-spark-node) and [Lindorm Spark SQL node](/help/en/dataworks/user-guide/lindorm-spark-sql-node).
    
-   You can enable the collection of Lindorm data lineage and output information when you [configure global](#4c55cfa771irw) Spark-related Parameter. After you [create and run a metadata collector](/help/en/dataworks/user-guide/metadata-collection/#title-08c-o38-0vm), you can view and manage Lindorm metadata in Data Map. For more information, see [View and manage Lindorm in Data Map](/help/en/dataworks/user-guide/lindorm-table-data).
