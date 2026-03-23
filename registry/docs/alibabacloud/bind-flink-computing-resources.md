To develop and manage Flink tasks in DataWorks, you must first associate your Realtime Compute for Apache Flink cluster as a fully managed Flink computing resource. After the cluster is associated, you can use it for data development in your DataWorks workspace.

## **Prerequisites**

-   You have [activated a Realtime Compute for Apache Flink cluster](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
    **Note**
    
    We recommend that you purchase a Flink cluster in the same **Region** as the DataWorks workspace where you want to create the fully managed Flink computing resource. If the regions do not match, you cannot associate the cluster to the workspace as a computing resource.
    
-   You have [created a DataWorks workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm). The Resource Access Management (RAM) user who performs this operation has been added to the workspace and assigned the Workspace Administrator role.
    
    **Important**
    
    This feature is supported only for workspaces that are set to **Use Data Studio (New Version)**.
    
-   You have [created a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and associated it to the destination workspace.
    

## **Limits**

-   **Region availability**: This feature is available only in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia).
    
-   **Permissions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **Resource Access Management (RAM) user/RAM role**
    
    -   **DataWorks management permissions**: Only workspace members with the **O&M** or **Workspace Administrator** role, or members with the `AliyunDataWorksFullAccess` permission, can create computing resources. For more information about authorization, see [Grant a user the Workspace Administrator permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
        
    -   **Flink service permissions**:
        
        -   The `AliyunStreamFullAccess` access policy. Otherwise, you cannot configure the fully managed Flink computing resource.
            
        -   Management permissions on the project in the Realtime Compute for Apache Flink cluster. For more information, see [Project authorization](/help/en/flink/realtime-flink/user-guide/grant-permissions-for-the-development-console).
            
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

## **Associate a Fully Managed Flink computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), you can configure and associate a fully managed Flink computing resource.

1.  Select the type of computing resource to associate.
    
    1.  Click **Associate Computing Resource** to navigate to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **Fully Managed Flink**, which opens the **Associate Fully Managed Flink Computing Resource** configuration page.
        
2.  Configure the fully managed Flink computing resource.
    
    On the **Associate Fully Managed Flink Computing Resource** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Flink Workspace**
    
    Select your activated Realtime Compute for Apache Flink cluster. You can also click **Create** in the drop-down menu to create a new cluster. For more information, see [Activate a Realtime Compute for Apache Flink cluster](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
    **Note**
    
    If you chose to isolate the production and development environments when you [created the workspace](/help/en/dataworks/user-guide/create-a-workspace), you must select a Flink workspace for both the production and development environments.
    
    **Flink NameSpace**
    
    Select the default Flink project that was generated when you activated the Realtime Compute for Apache Flink cluster. You can also click **Create** in the drop-down menu to create a Flink project. For more information, see [Manage projects](/help/en/flink/realtime-flink/user-guide/create-and-manage-a-namespace).
    
    **Default Resource Queue in Which Namespace is Deployed**
    
    Select the default queue that was generated when you activated the Realtime Compute for Apache Flink cluster. You can also click **Create** in the drop-down menu to create a queue. For more information, see [Manage resource queues](/help/en/flink/realtime-flink/user-guide/manage-resource-queues).
    
    **Default Access Identity**
    
    The default value is **Executor**.
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource. At runtime, you can select the computing resource for a task based on this name.
    
3.  Click **OK** to complete the configuration.
    

## **What to do next**

After you associate the fully managed Flink computing resource, you can use it to develop node tasks in Data Studio For more information, see [Flink SQL Streaming nodes](/help/en/dataworks/user-guide/flink-sql-streaming) and [Flink SQL Batch nodes](/help/en/dataworks/user-guide/flink-sql-batch).
