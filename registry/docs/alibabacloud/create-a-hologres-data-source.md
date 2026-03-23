To develop and manage Hologres tasks in DataWorks, you must first associate your Hologres instance as a Hologres computing resource. After the resource is associated, you can use it in DataWorks to connect to the Hologres instance. This lets you perform operations such as data synchronization, data development, and data analysis.

## **Prerequisites**

-   [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224) and [create a database](/help/en/hologres/getting-started/create-a-database#task-1928593).
    
    **Important**
    
    -   When you purchase a Hologres instance, ensure that it is in the same region as the DataWorks workspace. Otherwise, the instance cannot be associated.
        
    -   Before you associate the instance, confirm that the Running Status of the Hologres instance is **Normal**.
        
    
-   A DataWorks [workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm). The RAM user who performs this operation must be added to the workspace and assigned the Workspace Administrator role.
    
-   A resource group is associated to the workspace and network connectivity is established.
    
    -   If you use a Serverless resource group, ensure that the Hologres computing resource can connect to the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), ensure that the Hologres computing resource can connect to the **exclusive resource group for integration**, **exclusive resource group for scheduling**, and **exclusive service resource group**, depending on the scenario.
        

## **Limits**

-   **Feature limits**: If you enable SSL authentication when you create a computing resource, the resource cannot be used for data development or periodic scheduling tasks.
    
-   **Region limits**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), Japan (Tokyo), Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permission limits**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **Alibaba Cloud RAM user/RAM role**
    
    **DataWorks management permissions**: Only workspace members with the **O&M** or **Workspace Administrator** role, or members with the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant the Workspace Administrator permission to a user](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
    **Hologres service permissions:**
    
    -   Grant the `AliyunHologresFullAccess` access policy. Otherwise, the Hologres computing resource cannot be configured.
        
    -   Add the account or role information to [User Management](/help/en/hologres/user-guide/manage-users). Otherwise, the destination database cannot be configured.
        
    

## **DataStudio: Associate a Hologres computing resource**

Associate a Hologres computing resource to a workspace that **Use Data Studio (New Version)**.

### **Go to the Computing Resource page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, click **More** > **Management Center**. Select the target workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource** to go to the Computing Resource page.
    

### **Associate a Hologres computing resource**

On the [Computing Resource page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure and associate the Hologres computing resource.

1.  Select a computing resource type to associate.
    
    1.  Click **Associate Computing Resource** to go to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **Hologres** to go to the **Associate Hologres Computing Resource** configuration page.
        
2.  Configure the Hologres computing resource.
    
    On the **Associate a Hologres Hologres Computing Resource** configuration page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Hologres Instance**
    
    Select the Hologres instance that you created. You can also click **Create** in the drop-down list to [purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
    **Hologres Compute Group**
    
    The current Hologres instance supports compute groups. You can also click **Create** in the drop-down list to [create a Hologres compute group](/help/en/hologres/user-guide/manage-virtual-warehouses).
    
    **Database Name**
    
    Select the database that you want to use. You can also click **Create** in the drop-down list to [create a database](/help/en/hologres/getting-started/create-a-database#task-1928593).
    
    **Default Access Identity**
    
    -   **Development environment**: Only the **Executor** identity is supported.
        
    -   **Production environment**: The **Alibaba Cloud Account**, **Alibaba Cloud RAM User**, **Alibaba Cloud RAM Role**, or **Task Owner** identity is supported.
        
        **Note**
        
        -   **If you are logged on with an Alibaba Cloud account**: You can select all identities.
            
        -   **If you are logged on with a RAM user or RAM role**:
            
            -   **If you have the AdministratorAccess access policy**: You can select all identities.
                
            -   **If you do not have the AdministratorAccess access policy**: You can select only your own identity.
                
        
    
    **Authentication Method**
    
    -   **No Authentication**: No other operations are required.
        
    -   **SSL Authentication**: If you select this option, you must enable **SSL Encryption** on the [Data Security](/help/en/hologres/user-guide/data-security) page of the Hologres instance.
        
        **Note**
        
        If SSL authentication is enabled for the Hologres instance, the instance cannot be used for data development or periodic scheduling tasks.
        
    
    **SSL Encryption**
    
    This parameter is required if you set **Authentication Option** to **SSL Authentication**. Only the **require** encryption mode is supported.
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource instance. When a task runs, you can select the computing resource for the task based on the computing resource name.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks uses to run Hologres tasks and click **Test Network Connectivity** to ensure that the resource group can access your Hologres instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK** to complete the configuration of the Hologres computing resource.
    
    **Note**
    
    After the resource is associated, the system automatically creates a Hologres data source with the same name in the **Data Sources** list of the current workspace.
    

## **Legacy** Data Studio**: Associate a Hologres computing resource**

You can Associate a Hologres computing resource to a workspace that has **not** **Use Data Studio (New Version)**.

### **Go to the Computing Resource page**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to go to the **Computing Resource** page.
    

### **Associate a Hologres computing resource**

On the Computing Resource page, configure and Associate a Hologres computing resource.

1.  Select a computing resource type to associate.
    
    1.  Click **Create Computing Resource** to go to the **Create Computing Resource** page.
        
    2.  On the **Create Computing Resource** page, set the computing resource type to **Hologres** to go to the **Create Computing Resource** configuration page.
        
2.  Configure the Hologres computing resource.
    
    On the **Create Computing Resource** configuration page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Enter a custom name for the computing resource.
    
    **Authentication Method**
    
    Only **Alibaba Cloud Account And Alibaba Cloud RAM Role** is supported.
    
    **Alibaba Cloud Account**
    
    You can select **Current Alibaba Cloud Account** or **Other Alibaba Cloud Account**.
    
    **Note**
    
    If you select **Other Alibaba Cloud Account**, enter the information about the other account as prompted on the page.
    
    **Region**
    
    The region where your workspace resides.
    
    **Hologres Instance**
    
    Select the Hologres instance that you created.
    
    **Database Name**
    
    Select the database that you want to use.
    
    **Default Access Identity**
    
    -   **Development environment**: Only the **Executor** identity is supported.
        
    -   **Production environment**: The **Alibaba Cloud Account**, **Alibaba Cloud RAM User**, **Alibaba Cloud RAM Role**, or **Task Owner** identity is supported.
        
        **Note**
        
        -   **If you are logged on with an Alibaba Cloud account**: You can select all identities.
            
        -   **If you are logged on with a RAM user or RAM role**:
            
            -   **If you have the AdministratorAccess access policy**: You can select all identities.
                
            -   **If you do not have the AdministratorAccess access policy**: You can select only your own identity.
                
        
    
    **Authentication Method**
    
    -   **No Authentication**: No other operations are required.
        
    -   **SSL Authentication**: If you select this option, you must enable **SSL Encryption** on the [Data Security](/help/en/hologres/user-guide/data-security) page of the Hologres instance.
        
        **Note**
        
        If SSL authentication is enabled for the Hologres instance, the instance cannot be used for data development or periodic scheduling tasks.
        
    
    **SSL Encryption**
    
    This parameter is required if you set **Authentication Method** to **SSL Authentication**. Only the **require** encryption mode is supported.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks uses to run Hologres tasks and click **Test Network Connectivity** to ensure that the resource group can access your Hologres instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Create and Associate Computing Resource with DataStudio** to complete the configuration of the Hologres computing resource.
    

**Note**

After the resource is associated, the system automatically creates a Hologres data source with the same name in the **Data Sources** list of the current workspace.

## **What to do next**

For a smoother development experience, we recommend that you first read [Instructions for using DataWorks on Hologres](/help/en/dataworks/user-guide/development-process-of-hologres-nodes-in-dataworks). This document helps you understand the development process, fees, environment preparation, and access control for using Hologres in DataWorks.

-   **New Data Studio**: After you configure the Hologres computing resource, you can use a [batch synchronization node](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio) for data synchronization and [Hologres-related nodes](/help/en/dataworks/user-guide/hologres-new-data-studio/) for data development in Data Studio.
    
-   **Legacy** **Data****Studio**: After you configure the Hologres computing resource, you can use a **[Data Integration](/help/en/dataworks/user-guide/data-integration-1)** > **Offline Synchronization** node for data synchronization and [legacy Hologres-related nodes](/help/en/dataworks/user-guide/hologres-nodes/) for data development.
    

## **FAQ**

-   **Error message**: FAILED: Build connection error! Connection to xxx.hologres.aliyuncs.com:80 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
    
    **Solution**: Go to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance) to check whether the instance is running correctly. If the instance is shut down, restart the Hologres instance.
    
-   **Error message**: FAILED: An I/O error occurred while sending to the backend.
    
    **Solution**: On the [Data Security](/help/en/hologres/user-guide/data-security) page of the Hologres instance, check whether the **SSL Encryption** switch is turned on. If it is turned on, turn it off and wait 5 to 10 seconds before you run the task again.
