This topic describes how to set automatic start for or manually start a serverless cluster.

## Set automatic start

You can enable or disable the automatic start feature for a serverless cluster. After you enable this feature and if no service is connected to the cluster within the period defined by the **Detection Period for No-activity Suspension** parameter, the cluster automatically enters the suspended state. If any service is connected to the cluster, the cluster immediately starts.

**Note**

-   The automatic start feature is only supported on the default cluster endpoint and custom endpoints. This means that the cluster is connected only when a service connects to its default cluster endpoint and a custom endpoint, but not when a service connects to its primary endpoint. For more information about how to apply for a cluster endpoint, see [Manage an endpoint](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint).
    
-   After a serverless cluster is automatically suspended, all read-only nodes are automatically released even if you set the **Minimum Number of Read-only Nodes** parameter to a value greater than 1. This reduces resource usage and prevents HA compatibility issues when the cluster is suspended. After the serverless cluster is automatically started, the primary node is pulled up first so that the cluster can provide services. Then, read-only nodes are pulled up based on the value of **Minimum Number of Read-only Nodes**.
    
-   You cannot enable the automatic start feature for a serverless cluster with defined specifications.
    

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the region in which the cluster that you want to manage is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the **Database Nodes** section of the **Basic Information** page, click **Serverless Configuration**.
    
5.  In the **Configure Serverless-related Parameters** dialog box, set **Enable No-activity Suspension** to Enable or Disable.
    
6.  **Optional:** If you set **Enable No-activity Suspension** to Enable, you must set the **Detection Period for No-activity Suspension** parameter.
    
    **Note**
    
    The detection period must be within a range from 5 minutes to 24 hours.
    
7.  Click **OK**.
    

## Manually start a cluster

If you want to restore the cluster to the normal running state after a serverless cluster that has the automatic start feature enabled enters the suspended state, you must manually start the cluster.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the top navigation bar, select the region in which the cluster that you want to manage is deployed.
    
3.  On the **Clusters** page, find the cluster that is in the Suspended state.
    
4.  In the **Database Nodes** section of the **Basic Information** page, click **Start Cluster**.
    
    ![启动集群](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9244409761/p570565.png)
    
5.  In the **Start Cluster** message, click **OK**.
