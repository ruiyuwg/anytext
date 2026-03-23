By creating a Hologres data source in DataWorks and associating the data source with Data Studio, you can read, replicate, develop, and analyze data using DataWorks.

## Prerequisites

-   A Hologres instance and a database are created. For more information, see the following topics:
    
    1.  [Create an instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224)
        
    2.  [Create a database](/help/en/hologres/getting-started/create-a-database)
        
    
    **Note**
    
    Hologres offers database-level access control through three primary models: the standard PostgreSQL model (expert model), the schema-level permission model (SLPM), and the simple permission model ([SPM](/help/en/hologres/security-and-compliance/simple-permission-model/#concept-2449386)). SPM simplifies permission management, using the console for granting permissions. Choosing SPM during database creation streamlines this process. For more information, see [Manage databases](/help/en/hologres/user-guide/manage-databases#section-06o-c9o-hij).
    
-   [A DataWorks workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm); RAM users for data development are added to the workspace with the administrator role.
    
    **Note**
    
    To associate your Hologres instance and DataWorks workspace, ensure they reside in the same region.
    
-   A resource group is bound to the workspace, and network connection is created.
    
    -   Using a serverless resource group: Ensure your Hologres computing resource can connect to [serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   Using [a legacy resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/): Ensure thyoure Hologres computing resource can connect to the exclusive resource group for integration, the exclusive resource group for scheduling, and the exclusive resource group for services for your scenario.
        

## **DataStudio: Associate a Hologres computing resource**

Associate a Hologres computing resource to a workspace that **Use Data Studio (New Version)**.

### **Go to the Computing Resource page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, click **More** > **Management Center**. Select the target workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource** to go to the Computing Resource page.
    

### **Associate a Hologres computing resource**

On the [Computing Resource page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure and associate the Hologres computing resource.

1.  Select a computing resource type to associate.
    
    1.  Click **Associate Computing Resource** to open to the **Associate Computing Resource** panel.
        
    2.  On the **Associate Computing Resource** panel, set the computing resource type to **Hologres**.
        
2.  Configure the Hologres computing resource.
    
    On the **Associate Hologres Computing Resource** configuration panel, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Hologres Instance**
    
    Select your Hologres instance. You can also click **Create** in the drop-down list to [purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
    **Hologres Virtual Warehouse**
    
    Select a virtual warehouse. You can also click **Create** in the drop-down list to [create a Hologres compute group](/help/en/hologres/user-guide/manage-virtual-warehouses).
    
    **Database Name**
    
    Select a database. You can also click **Create** in the drop-down list to [create a database](/help/en/hologres/getting-started/create-a-database#task-1928593).
    
    **Default Access Identity**
    
    -   **Development environment**: Only the **Executor** identity is supported.
        
    -   **Production environment**: The **Alibaba Cloud Account**, **Alibaba Cloud RAM User**, **Alibaba Cloud RAM Role**, and **Task Owner** identity is supported.
        
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
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource instance. When a task runs, you can select the computing resource for the task based on the computing resource name.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks uses to run Hologres tasks and click **Test Network Connectivity** to ensure that the resource group can access your Hologres instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK** to complete the configuration of the Hologres computing resource.
    
    **Note**
    
    After the resource is associated, DataWorks automatically creates a Hologres data source with the same name in the **Data Sources** list of the current workspace.
    

## **Legacy** Data Studio**: Associate a Hologres computing resource**

You can Associate a Hologres computing resource to a workspace that do **not** **Use Data Studio (New Version)**.

### **Go to the Computing Resource page**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) **Computing Resource**.
    

### **Associate a Hologres computing resource**

On the **Computing Resource** page, configure and associate a Hologres computing resource.

1.  Select a computing resource type to associate.
    
    1.  Click **Create Computing Resource**.
        
    2.  In the **Create Computing Resource** wizard, select **Hologres**.
        
2.  Configure the Hologres computing resource.
    
    In the **Create Computing Resource** wizard, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Enter a custom name for the computing resource.
    
    **Authentication Method**
    
    Only **Alibaba Cloud Account and RAM Role** is supported.
    
    **Alibaba Cloud Account**
    
    You can select **Current Alibaba Cloud Account** or **Another Alibaba Cloud Account**.
    
    **Note**
    
    If you select **Another Alibaba Cloud Account**, you need to set two additional fields: **UID of Alibaba Cloud Account** and **RAM Role**.
    
    **Region**
    
    The region where your workspace resides.
    
    **Hologres Instance**
    
    Select the Hologres instance that you created.
    
    **Database Name**
    
    Select the database that you want to use.
    
    **Default Access Identity**
    
    -   **Development environment**: Only the **Executor** identity is supported.
        
    -   **Production environment**: The **Alibaba Cloud Account**, **Alibaba Cloud RAM User**, **Alibaba Cloud RAM Role**, and **Task Owner** identity is supported.
        
        **Note**
        
        -   **If you are logged on with an Alibaba Cloud account**: You can select all identities.
            
        -   **If you are logged on with a RAM user or RAM role**:
            
            -   **If you have the AdministratorAccess access policy**: You can select all identities.
                
            -   **If you do not have the AdministratorAccess access policy**: You can select only your own identity.
                
        
    
    **Authentication Method**
    
    -   **No Authentication**: No authentication operations are required.
        
    -   **SSL Authentication**: If you select this option, you must enable **SSL Encryption** on the [Data Security](/help/en/hologres/user-guide/data-security) page of the Hologres instance.
        
        **Note**
        
        If SSL encrption is enabled for the Hologres instance, the instance cannot be used for data development or periodic scheduling tasks.
        
    
    **SSL Encryption**
    
    This parameter is required if you set **Authentication Method** to **SSL Authentication**. Only the **require** encryption mode is supported.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks uses to run Hologres tasks and click **Test Network Connectivity** to ensure that the resource group can access your Hologres instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Create and Associate Computing Resource with DataStudio** to complete the configuration.
    

**Note**

After the resource is associated, DataWorks automatically creates a Hologres data source with the same name in the **Data Sources** list of the current workspace.

## **FAQ**

### **What do I do if the connectivity test fails?**

-   Symptom: When associating a Hologres instance with a DataWorks workspace, the connectivity test fails.
    
-   Cause: The parameters that you configure to associate the Hologres instance are invalid, or the current account has no permissions on the Hologres instance.
    
-   Solution:
    
    -   If the instance display name already exists in DataWorks, change the display name.
        
    -   Check whether the database name is valid.
        
    -   Check whether the information entered includes extra spaces. If so, delete them.
        
    -   Check whether your account has required Hologres permissions and the administrator role of the DataWorks workspace.
        

## **Next steps**

After you associate a Hologres data source with a DataWorks workspace, refer to the following topics for next steps:

-   [Development with Hologres SQL](/help/en/hologres/user-guide/hologres-sql)
    
-   [Create MaxCompute foreign tables](/help/en/hologres/user-guide/synchronize-the-table-schema)
    
-   [Replicate data from MaxCompute to Hologres](/help/en/hologres/user-guide/import-maxcompute-data-to-hologres)
    
-   [Import MaxCompute data to Hologres regularly with DataWorks](/help/en/hologres/user-guide/periodically-import-maxcompute-data)
