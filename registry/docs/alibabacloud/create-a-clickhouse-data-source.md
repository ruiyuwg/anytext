To use DataWorks to develop and manage tasks for an ApsaraDB for ClickHouse cluster, you must add the cluster as a ClickHouse computing resource in DataWorks. This lets you connect to the ApsaraDB for ClickHouse cluster from DataWorks and perform operations such as data synchronization and data development.

## **Prerequisites**

-   An [ApsaraDB for ClickHouse cluster](/help/en/clickhouse/user-guide/create-an-apsaradb-for-clickhouse-cluster) has been created.
    
    **Note**
    
    -   We recommend that you create your ClickHouse cluster in the same **Region** as the DataWorks workspace that is associated to the ClickHouse computing resource.
        
    -   If the cluster and workspace are in different regions, you can add the cluster only as a cross-region data source. This type of data source can be used only for data synchronization tasks and not for computing tasks in Data Studio or Operation Center.
        
    
-   A [workspace has been created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm) in DataWorks. The Resource Access Management (RAM) user who performs the operation has been added to the workspace and assigned the Workspace Administrator role.
    
-   A resource group has been associated to the workspace, and network connectivity is confirmed.
    
    -   If you use a Serverless resource group, ensure that the [Serverless resource group](/help/en/dataworks/user-guide/using-serverless-resource-groups) can connect to the ApsaraDB for ClickHouse cluster.
        
    -   If you [use a legacy exclusive resource group](/help/en/dataworks/user-guide/use-legacy-resource-groups/), ensure that the **exclusive resource group for integration**, **exclusive resource group for scheduling**, and **exclusive resource group for services** can connect to the ApsaraDB for ClickHouse cluster for your scenario.
        
    -   By default, ApsaraDB for ClickHouse clusters deny access from all IP addresses. Before you associate the computing resource, you must [add the **vSwitch CIDR block** of the resource group, the **EIP of a legacy resource group**, or the **EIP of the VPC associated to a Serverless resource group** to the whitelist of the ApsaraDB for ClickHouse cluster](/help/en/clickhouse/user-guide/configure-a-whitelist). Otherwise, the connection fails and you cannot associate the ClickHouse computing resource.
        
        **Note**
        
        For more information about how to obtain the **vSwitch CIDR block**, the **EIP of a legacy resource group**, or the **EIP of the VPC associated to a Serverless resource group**, see [Add IP addresses to the DataWorks whitelist](/help/en/dataworks/user-guide/add-whitelist).
        

## **Limits**

-   **Feature limits**: If the SSL authentication service is enabled for the ClickHouse compute engine, you cannot use it for data development or periodic scheduling tasks.
    
-   **Region limits**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta).
    
-   **Permission limits**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **RAM user/RAM role**
    
    Only workspace members with the **O&M** or **Workspace Administrator** role, or members with the `AliyunDataWorksFullAccess` permission can create computing resources. For more information about authorization, see [Grant a user the Workspace Administrator permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **Associate a ClickHouse computing resource in the new DataStudio**

Associate a ClickHouse computing resource to a workspace that **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the destination region. In the navigation pane on the left, choose **More** > **Management Center**. Select the desired workspace from the drop-down list and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resources** to go to the Computing Resources page.
    

### **Associate the ClickHouse computing resource**

On the [Computing Resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), configure and associate the ClickHouse computing resource.

1.  Select the computing resource type.
    
    1.  Click **Associate Computing Resource** to go to the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **ClickHouse**, which opens the **Associate ClickHouse Computing Resource** configuration page.
        
2.  Configure the ClickHouse computing resource.
    
    On the **Associate ClickHouse Computing Resource** configuration page, set the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Configuration Mode**
    
    Only **Connection String Mode** is supported.
    
    **JDBC URL**
    
    **JDBC URL format**: `jdbc:clickhouse://<ip>:<port>/<dbname>`.
    
    -   **<ip>**: The **VPC Address** or **Public Address** on the ClickHouse **Cluster Information** page. For example, `cc-bp1xxx..clickhouse.ads.aliyuncs.com`.
        
    -   **<port>**: If the **Authentication Option** is **No Authentication**, use the **VPC HTTP Port Number** (`8123`) from the ClickHouse **Cluster Information** page. If the **Authentication Option** is **SSL Authentication**, use the **VPC HTTPS Port Number** (`8443`) from the ClickHouse **Cluster Information** page.
        
    -   **<dbname>**: The ClickHouse database that you use. The default value is `default`. You can [create a new database](/help/en/clickhouse/create-a-database#task827) as needed.
        
    
    **Username and password**
    
    The [account and password for your ApsaraDB for ClickHouse cluster](/help/en/clickhouse/create-an-account).
    
    **Authentication Method**
    
    Select the authentication method to access the ApsaraDB for ClickHouse cluster.
    
    -   **No Authentication**: No other operations are required.
        
    -   **SSL Authentication**: If you select this method, you must **Download The CA Certificate** from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster for later verification.
        
        **Note**
        
        If the SSL authentication service is enabled for the ClickHouse compute engine, you cannot use it for data development or periodic scheduling tasks.
        
    
    **SSL CA Certificate**
    
    If you set Authentication Option to **SSL Authentication**, click **Add Authentication File** below and upload the CA certificate that you downloaded from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster.
    
    **Computing Resource Instance Name**
    
    Enter a custom name for the computing resource instance.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group for running ClickHouse node tasks. Click **Test Network Connectivity** to verify that the resource group can connect to your ApsaraDB for ClickHouse cluster. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **OK** to complete the configuration.
    

## **Associate a ClickHouse computing resource in the legacy** **DataStudio**

Associate a ClickHouse computing resource to a workspace that does **not** **Use Data Studio (New Version)**.

### **Go to the computing resources page**

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8015440571/p964518.png) icon to open the **Computing Resources** page.
    

### **Associate the ClickHouse computing resource**

On the Computing Resources page, configure and associate the ClickHouse computing resource.

1.  Select the computing resource type.
    
    1.  Click **Create Computing Resource** to go to the **Create Computing Resource** page.
        
    2.  On the **Create Computing Resource** page, set the computing resource type to **ClickHouse**. The **Create Computing Resource** configuration page opens.
        
2.  Configure the ClickHouse computing resource.
    
    On the **Create Computing Resource** configuration page, set the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Enter a custom name for the computing resource.
    
    **Configuration Mode**
    
    Only **Connection String Mode** is supported.
    
    **Host Address/IP Address**
    
    The **VPC Address** or **Public Address** on the **Cluster Information** page of the ApsaraDB for ClickHouse cluster. For example, `cc-bp1xxx..clickhouse.ads.aliyuncs.com`.
    
    **Port**
    
    If you set **Authentication Option** to **No Authentication**, use the **VPC HTTP Port** (`8123`) from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster.
    
    If you set **Authentication Option** to **SSL Authentication**, use the **VPC HTTPS Port** (`8443`) from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster.
    
    **Database Name**
    
    The ClickHouse database that you use. The default value is `default`. You can also [create a new database](/help/en/clickhouse/create-a-database#task827) as needed.
    
    **Username and password**
    
    The [account and password for your ApsaraDB for ClickHouse cluster](/help/en/clickhouse/create-an-account).
    
    **Version**
    
    Specify the version of the cluster to associate.
    
    **Advanced Parameters**
    
    This parameter is optional. You can click **Add Property** to configure properties.
    
    **Authentication Method**
    
    Select the authentication method to access the ApsaraDB for ClickHouse cluster.
    
    -   **No Authentication**: No other operations are required.
        
    -   **SSL Authentication**: If you select this method, you must **Download The CA Certificate** from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster for later verification.
        
        **Note**
        
        If the SSL authentication service is enabled for the ClickHouse compute engine, you cannot use it for data development or periodic scheduling tasks.
        
    
    **SSL CA Certificate**
    
    If you set Authentication Option to **SSL Authentication**, click **Add Authentication File** below and upload the CA certificate that you downloaded from the **Cluster Information** page of the ApsaraDB for ClickHouse cluster.
    
3.  Test the connectivity.
    
    In the connection configuration section, select the resource group for running ClickHouse tasks. Click **Test Network Connectivity** to verify that the resource group can connect to your ApsaraDB for ClickHouse cluster. For more information, see [Overview of network connection solutions](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob).
    
4.  Click **Create and Associate Computing Resource with DataStudio** to complete the configuration.
    

## **What to do next**

-   **New** **Data Studio**: After you Associate the ClickHouse computing resource, you can use a [batch synchronization node](/help/en/dataworks/user-guide/offline-synchronization-node-new-data-studio) for data synchronization or a [ClickHouse SQL node](/help/en/dataworks/user-guide/clickhouse-sql) for data development.
    
-   **Legacy** **DataStudio**: After you associate the ClickHouse computing resource, you can use a **[Data Integration](/help/en/dataworks/user-guide/data-integration-1)** > **Offline Synchronization** node for data synchronization.
    

## **FAQ**

-   **Error message**: "not support data sync channel, error code: 0001."
    
    **Solution**: Verify that the JDBC URL parameter does not contain spaces or extra characters.
    
-   **Error message**: ru.yandex.clickhouse.except.ClickHouseUnknownException: ClickHouse exception, code: 1002.
    
    **Solution**: Verify that the **IP** address is correct.
