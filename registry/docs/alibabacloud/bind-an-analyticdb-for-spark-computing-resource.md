To develop and manage AnalyticDB for Spark tasks in DataWorks, you must associate an AnalyticDB for MySQL cluster as an AnalyticDB for Spark computing resource. After the cluster is associated, you can use this computing resource for data development in DataWorks.

## **Prerequisites**

-   An [AnalyticDB for MySQL cluster is created](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster).
    
    After the cluster is created, you must [create an interactive resource group of the Spark engine type](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-the-resource-group#task-1964736) for the cluster. Otherwise, the cluster cannot be associated as an AnalyticDB for Spark computing resource.
    
    **Note**
    
    The AnalyticDB for MySQL cluster and the DataWorks workspace must be in the same **Region**. If they are in different regions, you cannot associate the cluster as a computing resource to the workspace.
    
-   A [workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm) in DataWorks. The RAM user who performs the operation is added to the workspace and assigned the Workspace Administrator role.
    
    **Important**
    
    This feature is supported only in workspaces that are set to **Use Data Studio (New Version)**.
    
-   A resource group is associated to the workspace.
    
    -   If you use a Serverless resource group, ensure that the AnalyticDB for Spark computing resource can connect to the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use legacy exclusive resource groups](/help/en/dataworks/user-guide/use-legacy-resource-groups/), ensure that the AnalyticDB for Spark computing resource can connect to the **exclusive resource group for scheduling** for the corresponding scenario.
        
    -   The resource group must be in the same VPC as the AnalyticDB for MySQL cluster. The [IP address of the resource group](/help/en/dataworks/user-guide/add-whitelist) must be added to the [whitelist](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-whitelist-1#section-xgs-sgy-tlg) of the AnalyticDB for MySQL cluster.
        

## **Limitations**

-   **Region**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permissions**:
    
    **User**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No additional authorization is required.
    
    **RAM user/RAM role**
    
    **DataWorks management permissions**: Only workspace members who have the **O&M** or **Workspace Administrator** role, or the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant workspace administrator permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
    **AnalyticDB for MySQL service permissions:** When you associate an AnalyticDB for Spark computing resource, to create a database for the AnalyticDB for MySQL cluster, grant the `AliyunADBFullAccess` policy to the RAM user to ensure that the user has full operational permissions on the AnalyticDB for MySQL cluster.
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources**.
    

## **Associate an AnalyticDB for Spark computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure and associate an AnalyticDB for Spark computing resource.

1.  Select the computing resource type.
    
    1.  Click **Associate Computing Resource** to open the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **AnalyticDB for Spark**. You are then redirected to the **Associate AnalyticDB For Spark Computing Resource** configuration page.
        
2.  Configure the AnalyticDB for Spark computing resource.
    
    On the **Associate AnalyticDB For Spark Computing Resource** configuration page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Configuration Mode**
    
    Only the **Alibaba Cloud Instance Pattern** is supported.
    
    **Alibaba Cloud Account**
    
    Supports only the **Current Alibaba Cloud Account**.
    
    **Instance**
    
    Select the AnalyticDB for MySQL cluster to associate. You can also click **New** in the drop-down menu to [create an AnalyticDB for MySQL cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster).
    
    **Note**
    
    When you create an AnalyticDB for MySQL cluster, you must [create an Interactive resource group with the engine type set to Spark](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-the-resource-group#task-1964736) for the cluster. Otherwise, you cannot associate the cluster as an AnalyticDB for Spark computing resource.
    
    **Database Name**
    
    Enter the name of the [database that you created](/help/en/analyticdb/analyticdb-for-mysql/getting-started/getting-started-for-data-warehouse-edition#a8cf3c35b0cr8) in the AnalyticDB for MySQL cluster.
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource. At runtime, you can select the computing resource for a task based on this name.
    
3.  Test the network connection.
    
    In the Connection Configuration section, select the resource group that DataWorks uses to run AnalyticDB for Spark tasks and click **Test Network Connectivity** to verify that the resource group can access your AnalyticDB for MySQL cluster. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK** to complete the configuration.
    
    **Note**
    
    When you associate an AnalyticDB for Spark computing resource, the system automatically syncs a new AnalyticDB for Spark data source with the same name to the **Data Sources** section of the current workspace.
    

## **What to do next**

After you configure the AnalyticDB for Spark computing resource, you can use it in Data Studio to develop [ADB Spark node](/help/en/dataworks/user-guide/adb-spark-node) and [ADB Spark SQL node](/help/en/dataworks/user-guide/adb-spark-sql-node) tasks.
