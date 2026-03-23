To develop and manage AnalyticDB for MySQL 3.0 tasks in DataWorks, you must first bind your AnalyticDB for MySQL 3.0 cluster as an AnalyticDB for MySQL (V3.0) computing resource. After the resource is bound, DataWorks can use it to connect to the AnalyticDB for MySQL 3.0 cluster. This lets you perform operations such as data synchronization, data development, and data analysis.

## **Prerequisites**

-   An [AnalyticDB for MySQL 3.0 cluster is created](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster).
    
    **Note**
    
    When you purchase an AnalyticDB for MySQL 3.0 cluster, select the same **Region** as your DataWorks workspace. If the regions are different, you cannot bind the cluster to the workspace as a computing resource.
    
-   A [DataWorks workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm). The Resource Access Management (RAM) user who performs the operation must be added to the workspace and assigned the Workspace Administrator role.
    
-   A resource group is bound to the workspace, and its network connectivity is confirmed.
    
    -   If you use a Serverless resource group, ensure that the AnalyticDB for MySQL (V3.0) computing resource can connect to the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), ensure that the AnalyticDB for MySQL (V3.0) computing resource can connect to the **exclusive resource group for scheduling** for the relevant scenario.
        
    -   The resource group must be bound to the same VPC as the AnalyticDB for MySQL 3.0 cluster. Add the [IP addresses of the resource group](/help/en/dataworks/user-guide/add-whitelist) to the [whitelist](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-whitelist-1#section-xgs-sgy-tlg) of the AnalyticDB for MySQL 3.0 cluster.
        

## **Limitations**

-   **Region**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permissions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **RAM user/RAM role**
    
    Only workspace members with the **O&M** or **Workspace Administrator** role, or members with the `AliyunDataWorksFullAccess` permission can create computing resources. For more information about authorization, see [Grant permissions to a workspace administrator](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **New Data Studio: Bind an** AnalyticDB for MySQL (V3.0) **computing resource**

Bind an AnalyticDB for MySQL (V3.0) computing resource to a workspace that **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, click **More** > **Management Center**. Select the desired workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources** to go to the computing resources page.
    

### **Bind the** AnalyticDB for MySQL (V3.0) **computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure the AnalyticDB for MySQL (V3.0) computing resource.

1.  Select the computing resource type.
    
    1.  Click **Bind Computing Resource** to go to the **Bind Computing Resource** page.
        
    2.  On the **Bind Computing Resource** page, set the computing resource type to **AnalyticDB for MySQL (V3.0)**. You are redirected to the **Bind AnalyticDB For MySQL (V3.0) Computing Resource** configuration page.
        
2.  Configure the AnalyticDB for MySQL (V3.0) computing resource.
    
    On the **Bind AnalyticDB For MySQL (V3.0) Computing Resource** configuration page, set the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Configuration Mode**
    
    Only Alibaba Cloud Instance Mode is supported.
    
    **Alibaba Cloud Account**
    
    Only the current Alibaba Cloud account is supported.
    
    **Instance**
    
    Select the AnalyticDB for MySQL 3.0 cluster to bind. You can also click **Create** in the drop-down menu to [create an AnalyticDB for MySQL 3.0 cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-a-cluster).
    
    **Database Name**
    
    Enter the name of a [database that is already created](/help/en/analyticdb/analyticdb-for-mysql/getting-started/getting-started-for-data-warehouse-edition#a8cf3c35b0cr8) in the AnalyticDB for MySQL 3.0 cluster.
    
    **Username** and **Password**
    
    The database account and password that can be used to access the AnalyticDB for MySQL 3.0 cluster. If you do not have an account, you can [create a database account](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-database-accounts).
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource. At runtime, you can select the computing resource for a task based on this name.
    
3.  Test the connectivity.
    
    In the connection settings section, select the resource group that DataWorks will use to run AnalyticDB for MySQL 3.0 tasks. Click **Test Connectivity** to verify that the resource group can access your AnalyticDB for MySQL (V3.0) cluster. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Confirm** to complete the configuration.
    
    **Note**
    
    When you bind an AnalyticDB for MySQL (V3.0) computing resource, the system automatically creates an AnalyticDB for MySQL (V3.0) data source with the same name in the **Data Source** section of the current workspace.
    

## **Legacy Data Studio: Bind an** AnalyticDB for MySQL (V3.0) **computing resource**

Bind an AnalyticDB for MySQL (V3.0) computing resource to a workspace that does **not** **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to go to the **Computing Resources** page.
    

### **Bind the** AnalyticDB for MySQL (V3.0) **computing resource**

On the computing resources page, configure the AnalyticDB for MySQL (V3.0) computing resource.

1.  Select the computing resource type.
    
    1.  Click **Create Computing Resource** to go to the **Create Computing Resource** page.
        
    2.  On the **Create Computing Resource** page, set the computing resource type to **AnalyticDB for MySQL (V3.0)**. You are redirected to the **Create Computing Resource** configuration page.
        
2.  Configure the AnalyticDB for MySQL (V3.0) computing resource.
    
    On the **Create Computing Resource** configuration page, set the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Enter a custom name for the computing resource. At runtime, you can select the computing resource for a task based on this name.
    
    **Configuration Mode**
    
    Select **Alibaba Cloud Instance Mode**.
    
    **Note**
    
    Computing resources bound in **Connection String Mode** cannot be bound to the current workspace. They can only be generated as data sources.
    
    **Alibaba Cloud Account**
    
    You can select **Current Alibaba Cloud Account** or **Other Alibaba Cloud Account**.
    
    **Note**
    
    If you select **Other Alibaba Cloud Account**, enter the parameters related to the other account as prompted on the page.
    
    **Region**
    
    The region where your workspace resides.
    
    **Instance**
    
    Select the AnalyticDB for MySQL 3.0 cluster that you want to bind in the current region.
    
    **Database Name**
    
    Enter the name of a [database that is already created](/help/en/analyticdb/analyticdb-for-mysql/getting-started/getting-started-for-data-warehouse-edition#a8cf3c35b0cr8) in the AnalyticDB for MySQL 3.0 cluster.
    
    **Username and Password**
    
    The database account and password that can be used to access the AnalyticDB for MySQL 3.0 cluster. If you do not have an account, you can [create a database account](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-database-accounts).
    
3.  Test the connectivity.
    
    In the connection settings section, select the resource group that DataWorks will use to run AnalyticDB for MySQL 3.0 tasks. Click **Test Connectivity** to verify that the resource group can access your AnalyticDB for MySQL 3.0 cluster. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Create Computing Resource And Bind To Data Development** to complete the configuration.
    
    **Note**
    
    When you bind an AnalyticDB for MySQL (V3.0) computing resource, the system automatically creates an AnalyticDB for MySQL (V3.0) data source with the same name in the **Data Source** section of the current workspace.
    

### **Appendix**

**Connection String Mode** does not support binding a computing resource. It only supports creating a data source. You can use **Connection String Mode** to configure an AnalyticDB for MySQL 3.0 data source.

**Parameter**

**Description**

**JDBC URL**

**Format**: jdbc:mysql://ServerIP:Port/Database.

**Note**

`**ServerIP**`: The [Internet or VPC endpoint](/help/en/analyticdb/analyticdb-for-mysql/user-guide/apply-for-or-release-a-public-endpoint#title-y26-ub8-snk) of the AnalyticDB for MySQL 3.0 cluster.

`**Port**`: The VPC port number of the AnalyticDB for MySQL 3.0 cluster. The default value is 3306.

`**Database**`: The name of a [database that is already created](/help/en/analyticdb/analyticdb-for-mysql/getting-started/create-a-database) in your AnalyticDB for MySQL 3.0 cluster.

**Username and Password**

The database account and password that can be used to access the AnalyticDB for MySQL 3.0 cluster. If you do not have an account, you can [create a database account](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-database-accounts).

## More operations

-   **New Data Development**: After you configure the AnalyticDB for MySQL (V3.0) computing resource, you can use an [offline sync node](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio) for data synchronization and an [ADB for MySQL node](/help/en/dataworks/user-guide/adb-for-mysql) for data development.
    
-   **Legacy Data Development**: After you configure the AnalyticDB for MySQL (V3.0) computing resource, you can use a **[Data Integration](/help/en/dataworks/user-guide/data-integration-1)** > **Offline Synchronization** node for data synchronization and an [AnalyticDB for MySQL](/help/en/dataworks/user-guide/create-and-use-an-analyticdb-for-mysql-node) node for data development.
