The PolarDB cluster architecture consists of three layers: the database proxy (PolarProxy), the database kernel (DB), and the distributed storage (Store). You can upgrade the proxy and the kernel separately or together.

## Precautions

-   An upgrade usually takes no more than 30 minutes. During the upgrade, the database proxy (Proxy) or the database kernel (DB) is restarted, which may cause transient connection interruptions. Perform the upgrade during off-peak hours and ensure that your application has an automatic reconnection mechanism.
    
    **Note**
    
    If you have configured [CloudMonitor](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor) to monitor your PolarDB cluster, you may receive notifications about issues, such as cluster access exceptions, during the upgrade.
    
-   If you select **Upgrade PolarDB Database Proxy and Kernel**, connections to the primary endpoint and cluster endpoint are interrupted for 30 to 90 seconds. Ensure that your application has a reconnection mechanism.
    
    **Note**
    
    Aside from this interruption, the minor version upgrade does not affect the normal operation of the cluster.
    
-   If you select **Upgrade PolarDB Database Proxy Only**, connections to the cluster endpoint and custom endpoints are interrupted for 30 seconds. Connections to the primary endpoint are not affected. Ensure that your application has a reconnection mechanism.
    
-   If you select **Upgrade Kernel Only**, PolarDB clusters with a PolarProxy version of or 2.3.50 or later can use the Connection Preserving feature to keep 95% of database connections from being interrupted.
    
-   During the upgrade, you cannot use features in the PolarDB console that change the cluster state, such as upgrading or downgrading configurations, adding or deleting nodes, modifying parameters, or restarting nodes. Query features, such as performance monitoring, are not affected.
    
-   You cannot downgrade the version after an upgrade.
    

## View version information

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the navigation pane on the left, click **Clusters**. Select the **region** where the cluster is located, and then click the ID of the target cluster to open the cluster details page.
    
2.  In the navigation pane on the left, choose **Settings and Management** > **Version Management**.
    
3.  On the **Minor Version Upgrade** page, view the version information of the database proxy and the kernel in the **Version Information** section.
    

## Upgrade the version

If the current version of the database proxy or the kernel is not the latest, you can upgrade it as needed.

1.  Go to the **Settings and Management** > **Version Management** menu for the target cluster. On the **Minor Version Upgrade** page, in the **Upgrade Version** section, select **Upgrade PolarDB Database Proxy and Kernel**, **Upgrade Kernel Only**, or **Upgrade PolarDB Database Proxy Only** as needed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1913217471/p953346.png)
    
    **Note**
    
    -   If the current version of the database proxy or the kernel is the latest, the **Upgrade PolarDB Database Proxy and Kernel**, **Upgrade Kernel Only**, and **Upgrade PolarDB Database Proxy Only** options are unavailable.
        
    -   If you select **Upgrade PolarDB Database Proxy Only**, only features related to read/write splitting are upgraded, such as consistency level (global consistency), transaction splitting, and whether the primary database accepts read requests.
        
    
2.  Click **Upgrade Now** or **Upgrade in Maintenance Window**.
    
    If you select **Upgrade in Maintenance Window**, you can also view the task details or cancel the task on the **Scheduled Tasks** page. For more information, see [Scheduled tasks](/help/en/polardb/polardb-for-oracle/view-or-cancel-a-scheduled-task).
    
    **Important**
    
    -   If you select **Upgrade PolarDB Database Proxy and Kernel**, connections to the primary endpoint and cluster endpoint are interrupted for 30 to 90 seconds. Ensure that your application has a reconnection mechanism.
        
        **Note**
        
        Aside from this interruption, the minor version upgrade does not affect the normal operation of the cluster.
        
    -   If you select **Upgrade PolarDB Database Proxy Only**, connections to the cluster endpoint and custom endpoints are interrupted for 30 seconds. Connections to the primary endpoint are not affected. Ensure that your application has a reconnection mechanism.
        
    -   If you select **Upgrade Kernel Only**, PolarDB clusters with a PolarProxy version of or 2.3.50 or later can use the Connection Preserving feature to keep 95% of database connections from being interrupted.
