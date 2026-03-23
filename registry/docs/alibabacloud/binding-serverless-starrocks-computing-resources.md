To develop and manage EMR Serverless StarRocks tasks in DataWorks, you must first associate your EMR Serverless StarRocks instance as a Serverless StarRocks computing resource. After the instance is associated, you can use it for data development.

## **Prerequisites**

-   An [EMR Serverless StarRocks instance is created](/help/en/emr/emr-serverless-starrocks/create-an-instance).
    
    When you purchase an EMR Serverless StarRocks instance, select the same **Region** as the DataWorks workspace to which you want to associate the instance. If the instance and the workspace are in different regions, you cannot associate the instance as a computing resource.
    
-   A DataWorks [workspace is created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm). The Resource Access Management (RAM) user is added to the workspace and assigned the Workspace Administrator role.
    
    **Important**
    
    -   Support is available only for workspaces that **use the new version of DataStudio**.
        
    -   In workspaces that do **not** use the new version of DataStudio, you can [create a StarRocks data source](/help/en/dataworks/user-guide/dataworks-on-emr-serverless-starrocks-best-practices#1dede08059yux) in DataWorks.
        
    
-   A resource group is associated to the workspace, and its network connectivity is verified.
    
    -   If you use a Serverless resource group, make sure that the computing resource instance can connect to the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups).
        
    -   If you [use an exclusive resource group of an earlier version](/help/en/dataworks/user-guide/use-legacy-resource-groups/), make sure that the computing resource instance can connect to the **exclusive resource group for scheduling** for the relevant scenario.
        
-   [Obtain the internal network CIDR block of the resource group](/help/en/dataworks/user-guide/add-whitelist#963643bf9feog) and add it to the [internal network whitelist of the EMR Serverless StarRocks instance](/help/en/emr/emr-serverless-starrocks/configure-network-access-and-security-settings#title-ic7-mzg-cje). This ensures network connectivity between the resource group and the instance.
    

## **Limits**

-   **Region restrictions**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), and US (Virginia).
    
-   **Permission restrictions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **RAM user/RAM role**
    
    Only workspace members who have the **O&M** or **Workspace Administrator** role, or members who have the `AliyunDataWorksFullAccess` permission can create computing resources. For more information about how to grant permissions, see [Grant the Workspace Administrator role to a user](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

## Associate a Serverless StarRocks **computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure the parameters to associate a Serverless StarRocks computing resource.

1.  Select the computing resource type to associate.
    
    1.  Click **Associate Computing Resource** to open the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **Serverless StarRocks**. The **Associate Serverless StarRocks Computing Resource** configuration page opens.
        
2.  Configure the Serverless StarRocks computing resource.
    
    On the **Associate Serverless StarRocks Computing Resource** page, you can configure the settings as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Configuration Mode**
    
    **Alibaba Cloud Instance Mode** and **Connection String Mode**. Configure the parameters based on the selected mode.
    
    **Alibaba Cloud Instance Mode**
    
    **Instance**
    
    Select the EMR Serverless StarRocks instance that you want to associate. You can also click **Create** in the drop-down list to [create an EMR Serverless StarRocks instance](/help/en/emr/emr-serverless-starrocks/create-an-instance).
    
    **Note**
    
    If you chose to isolate the production and development environments when you [created the workspace](/help/en/dataworks/user-guide/create-a-workspace), you must select StarRocks instances for both environments.
    
    **Database Name**
    
    Select a database in the EMR Serverless StarRocks instance. If no database is created, you can create one in the EMR Serverless StarRocks instance.
    
    **Authentication Method**
    
    This option is available only for the Enterprise Edition. Other editions support only the **Account and Password** method. If the authentication method is set to **Owner**, the tenant administrator for the DataWorks Enterprise Edition must configure mappings between RAM users and engine accounts in Security Center by adding Manage Ranger and Identity Credentials.
    
    **Username**
    
    The username and password that you set when you created the EMR Serverless StarRocks instance. The default username is `admin`. If you forget the password, you can **Reset The Password** on the instance details page of the EMR Serverless StarRocks instance.
    
    **Password**
    
    **Connection String Mode**
    
    **Host/IP Address**
    
    The IP address of the StarRocks front-end (FE).
    
    **Port**
    
    The query port of the StarRocks FE. The default port is `9030`. Specify the port based on your StarRocks configurations.
    
    **Load URL**
    
    The address of the StarRocks FE for StreamLoad. The format is `FE_IP:FE_HTTP`. If there are multiple FE addresses, separate them with commas.
    
    **Note**
    
    The `FE_IP` must be an internal network address. Internet addresses are not supported. The `FE_HTTP` port is typically `8030` or `18030`. Specify the port based on your StarRocks configurations.
    
    **Database Name**
    
    Select a database in the EMR Serverless StarRocks instance. If no database is created, you can create one in the [SQL Editor](/help/en/emr/emr-serverless-starrocks/manage-connections-in-starrocks-manager) of the EMR Serverless StarRocks instance.
    
    **Username**
    
    The username and password that you set when you created the EMR Serverless StarRocks instance. The default username is `admin`. If you forget the password, you can **Reset The Password** on the instance details page of the EMR Serverless StarRocks instance.
    
    **Password**
    
    **Advanced Parameters**
    
    This parameter is optional. You can click **Add Property** to add property parameters. For more information about the parameters, see the [official MySQL documentation](https://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html).
    
    **Computing Resource Instance Name**
    
    The name that identifies the computing resource. When a task runs, the computing resource is selected based on this name.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group that DataWorks uses to run StarRocks node tasks. Click **Test Network Connectivity** to verify that the resource group can access your EMR Serverless StarRocks instance. For more information, see [Overview of network connectivity solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK** to configure the Serverless StarRocks computing resource.
    
    **Note**
    
    When you associate a Serverless StarRocks computing resource, a Serverless StarRocks data source with the same name is automatically created in the **Data Sources** section of the current workspace.
    

## **What to do next**

After you associate the Serverless StarRocks computing resource, you can use it for data development in the following nodes:

-   You can use the computing resource to develop batch synchronization tasks in a **Data Integration** > **Offline Synchronization** node. For more information, see [Batch Synchronization nodes](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio).
    
-   You can use the computing resource to develop EMR Serverless StarRocks tasks in a **Serverless StarRocks** > **Serverless StarRocks SQL** node. For more information, see [Serverless StarRocks SQL nodes](/help/en/dataworks/user-guide/serverless-starrocks-sql-node).
