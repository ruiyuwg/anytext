To use DataWorks to develop and manage tasks for your AnalyticDB for PostgreSQL instance, you must first associate the instance to DataWorks as an AnalyticDB for PostgreSQL computing resource. Once the resource is associated, you can use it in various DataWorks modules to connect to the AnalyticDB for PostgreSQL instance and perform operations such as data synchronization and data development.

## **Prerequisites**

-   An [AnalyticDB for PostgreSQL instance is created](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management).
    
    **Note**
    
    When you purchase an AnalyticDB for PostgreSQL instance, ensure that it is in the same **Region** as your DataWorks workspace. Otherwise, you cannot associate the instance to the workspace as a computing resource.
    
-   A [workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm) in DataWorks. The Resource Access Management (RAM) user who performs the operation must be added to the workspace and granted the Workspace Administrator role.
    
-   A resource group is associated to the workspace, and network connectivity is established.
    
    -   If you use a Serverless resource group, ensure that the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups) can connect to the AnalyticDB for PostgreSQL instance.
        
    -   If you [use a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), ensure that the **exclusive resource group for scheduling** can connect to the AnalyticDB for PostgreSQL instance for your scenario.
        
    -   The resource group must be in the same Virtual Private Cloud (VPC) as the AnalyticDB for PostgreSQL instance. You must also add the [IP addresses of the resource group](/help/en/dataworks/user-guide/add-whitelist) to the [whitelist](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-an-ip-address-whitelist-user-guide) of the AnalyticDB for PostgreSQL instance.
        

## **Limits**

-   **Supported regions**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permissions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **Alibaba Cloud RAM user/RAM role**
    
    Only workspace members with the **O&M** and **Workspace Administrator** roles, or workspace members with the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant a user the permissions of a workspace administrator](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **Associate an AnalyticDB for PostgreSQL computing resource in DataStudio**

Associate an AnalyticDB for PostgreSQL computing resource to a workspace that **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. Select the desired workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

### **Associate the** AnalyticDB for PostgreSQL **computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure the parameters to associate the AnalyticDB for PostgreSQL computing resource.

1.  Select the type of computing resource to associate.
    
    1.  Click **Associate Computing Resource** to open the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, select **AnalyticDB for PostgreSQL** as the computing resource type. The **Associate AnalyticDB For PostgreSQL Computing Resource** configuration page appears.
        
2.  Configure the AnalyticDB for PostgreSQL computing resource.
    
    On the **Associate AnalyticDB For PostgreSQL Computing Resource** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Configuration Mode**
    
    Select Alibaba Cloud Instance mode.
    
    **Alibaba Cloud Account**
    
    Select Current Alibaba Cloud account.
    
    **Instance**
    
    Select the AnalyticDB for PostgreSQL instance to associate. You can also click **New** in the drop-down menu to [create an AnalyticDB for PostgreSQL instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management).
    
    **Database Name**
    
    Enter the name of the database that you use.
    
    **Username** and **Password**
    
    The username and password of an account that can be used to access the AnalyticDB for PostgreSQL instance. If you do not have an account, you can [create a privileged account](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-and-manage-users#task-bhh-2mr-52b).
    
    **Computing Resource Instance Name**
    
    Specify a custom name for the computing resource. When a task runs, you can select the computing resource for the task based on this name.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks will use to run AnalyticDB for PostgreSQL tasks. Then, click **Test Network Connectivity** to verify that the resource group can access your AnalyticDB for PostgreSQL instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK**.
    
    **Note**
    
    When you associate an AnalyticDB for PostgreSQL computing resource, the system automatically creates an AnalyticDB for PostgreSQL data source with the same name on the **Data Sources** page of the current workspace.
    

## **Associate an AnalyticDB for PostgreSQL computing resource in legacy Data Development**

Associate an AnalyticDB for PostgreSQL computing resource to a workspace that does **not** use **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to go to the **Computing Resource** page.
    

### **Associate the** AnalyticDB for PostgreSQL **computing resource**

On the computing resources page, configure and associate the AnalyticDB for PostgreSQL computing resource.

1.  Select the type of computing resource to associate.
    
    1.  Click Create Computing Resource. The **Create Computing Resource** page appears.
        
    2.  On the **Create Computing Resource** page, select **AnalyticDB for PostgreSQL** as the computing resource type. The **Create Computing Resource** configuration page appears.
        
2.  Configure the AnalyticDB for PostgreSQL computing resource.
    
    On the **Create Computing Resource** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Specify a custom name for the computing resource. When a task runs, you can select the computing resource for the task based on this name.
    
    **Configuration Mode**
    
    Select **Alibaba Cloud Instance Mode**.
    
    **Note**
    
    A computing resource associated in **Connection String Mode** cannot be associated to the current workspace. It can only be created as a data source.
    
    **Alibaba Cloud Account**
    
    Select **Current Alibaba Cloud Account**.
    
    **Note**
    
    If you use **Another Alibaba Cloud Account**, enter the parameter information for the other account as prompted on the page.
    
    **Instance**
    
    Select the AnalyticDB for PostgreSQL instance to associate. If you have not created an instance, you can [create an AnalyticDB for PostgreSQL instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-an-instance-instance-management).
    
    **Database Name**
    
    Enter the name of the database that you use.
    
    **Username** and **Password**
    
    The username and password of an account that can be used to access the AnalyticDB for PostgreSQL instance. If you do not have an account, you can [create a privileged account](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-and-manage-users#task-bhh-2mr-52b).
    
    **Authentication Method**
    
    Select the authentication method for subsequent access to the AnalyticDB for PostgreSQL instance.
    
    -   **No Authentication**: No other operations are required.
        
    -   **SSL Authentication**: If you select this authentication method, you must [configure SSL encryption](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-ssl-encryption) for the AnalyticDB for PostgreSQL instance and download the certificate file for subsequent verification.
        
    
    **Truststore Certificate File**
    
    When the authentication option is set to **SSL authentication**, click **Add Authentication File** below and upload the `.pem` file from the certificate folder that you downloaded from the **Data Security** page of the AnalyticDB for PostgreSQL instance.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks will use to run AnalyticDB for PostgreSQL tasks. Then, click **Test Network Connectivity** to verify that the resource group can access your AnalyticDB for PostgreSQL instance. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Create and Associate Computing Resource with DataStudio**.
    
    **Note**
    
    When you associate an AnalyticDB for PostgreSQL computing resource, the system automatically creates an AnalyticDB for PostgreSQL data source with the same name on the **Data Source** page of the current workspace.
    

### **Appendix**

**Connection String Mode** does not support associateing a computing resource. You can use **Connection String Mode** to create a data source, such as an AnalyticDB for PostgreSQL data source.

**Parameter**

**Description**

**JDBC URL**

**Format**: `jdbc:postgresql://ServerIP:Port/Database`.

**ServerIP**: The [internal network endpoint](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/manage-public-endpoints#title-ana-d3k-d86) of the AnalyticDB for PostgreSQL instance.

**Port**: The internal network port number of the AnalyticDB for PostgreSQL instance. The default value is `5432`.

**Database**: The name of the database that you use.

**Username** and **Password**

The username and password of an account that can be used to access the AnalyticDB for PostgreSQL instance. If you do not have an account, you can [create a privileged account](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/create-and-manage-users#task-bhh-2mr-52b).

## **What to do next**

-   **DataStudio**: After you associate the AnalyticDB for PostgreSQL computing resource, you can use a [batch synchronization node](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio) in Data Development to perform data synchronization and use an [ADB for PostgreSQL node](/help/en/dataworks/user-guide/adb-for-postgresql) to perform data development.
    
-   **Legacy Data Development**: After you associate the AnalyticDB for PostgreSQL computing resource, you can use a **[Data Integration](/help/en/dataworks/user-guide/data-integration-1)** > **Offline Synchronization** node in Data Development to perform data synchronization and [create and use an AnalyticDB for PostgreSQL node](/help/en/dataworks/user-guide/create-an-adb-for-postgresql-node) to perform data development.
