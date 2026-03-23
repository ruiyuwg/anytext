After you create a serverless cluster, you can set a resource scaling policy for the cluster to control the scaling range. Also, you can configure a lifecycle policy to scale up or out the cluster during foreseeable peak hours (such as promotions and traffic spikes) to guarantee performance, and scale back the cluster during off-peak hours to release idle resources.

## Limits

-   The following features are not supported:
    
    -   [X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/x-engine-edition#concept-2010571)
        
    -   [Multi-master Cluster (Database/Table) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-edition-database-or-table#concept-2161312)
        
    -   [Add a custom cluster endpoint](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-7kj-t7m-y8f).
        
    -   [Manually scale up or scale down the storage capacity](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1) (for Enterprise Edition)
        
    -   [Manually scale down the storage capacity](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1) (for Standard Edition)
        
-   [Global Database Network (GDN)](/help/en/polardb/polardb-for-mysql/user-guide/overview-49#concept-2560838) is supported, but is subject to the following limits:
    
    -   Automatic start and stop cannot be enabled on all serverless clusters in a GDN.
        
    -   Each serverless cluster in the GDN must have at least one read-only node if the cluster meets the following requirements:
        
        -   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.42 or later.
            
        -   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.23 or later.
            
    
-   The following operations are supported: [add or remove read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#task-1580301), [manually upgrade or downgrade a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301), [perform a temporary cluster upgrade](/help/en/polardb/polardb-for-mysql/user-guide/temporary-upgrade#task-1580301), and [perform auto scaling for clusters that do not support serverless](/help/en/polardb/polardb-for-mysql/user-guide/automatic-configuration-changes-auto-scaling#task-2085804).
    
-   The In-Memory Column Index ([IMCI](/help/en/polardb/polardb-for-mysql/user-guide/overview-29)) feature is supported for serverless clusters that contain at least one read-only node. Before you can add read-only column store nodes to a serverless cluster, you must set the **Minimum Read-only Nodes** parameter to 1 for the serverless cluster.
    

## **Scaling**

### **Trigger conditions for scale-up or scale-out**

-   **Scale-up**
    
    PolarDB monitors the CPU utilization, memory usage, and other kernel metrics of the primary node and read-only nodes. During a monitoring cycle, the scale-up of serverless resources is triggered when one of the following conditions is met:
    
    -   When the CPU utilization of a single node is higher than the default scale-up threshold 80% or a custom threshold, the scale-up of the CPU specifications of the node is triggered.
        
    -   When the memory usage of a single node is higher than 90%, the scale-up of the memory specifications of the node is triggered.
        
    -   When the specifications of a read-only node are less than half of the specifications of the primary node, the scale-up of the specifications of the read-only node is triggered. For example, if the specifications of a read-only node are 4 PCUs and the specifications of the primary node are 10 PCUs, the specifications of the read-only node are scaled up to at least 5 PCUs.
        
-   **Scale-out**
    
    When a read-only node of a cluster is scaled in to the maximum specifications and the business workloads are still higher than the threshold for a scale-in (CPU utilization is higher than the default threshold 80% or the specified threshold), the scale-out of read-only nodes is triggered.
    

### **Trigger conditions for scale-down**

When the CPU utilization of a single node is lower than the default scale-down threshold 50% or a custom threshold and the memory usage is lower than 80%, the scale-down of the node is triggered.

**Note**

-   The metrics for triggering scaling vary based on cluster parameter configurations and serverless configurations. You can specify thresholds for CPU scaling, but cannot change thresholds for other metrics.
    
-   When the workloads of a serverless cluster suddenly increase, the nodes of the cluster are scaled step by step to approach the expected specifications, instead of one step at a time. The minimum step size for node scaling is 0.5 PCUs. To quickly adapt to the current workloads, the next scaling step size increases based on the current number of PCUs per node.
    
-   You can configure alert rules in **Performance Monitoring** of the PolarDB console to get notifications when scale-down is triggered for cluster nodes. For more information, see [Create an alert rule](/help/en/polardb/polardb-for-mysql/user-guide/create-an-alert-rule).
    

## **Usage notes**

-   The maximum number of connections to a serverless cluster is 100,000, and the maximum IOPS of a serverless cluster is 84,000.
    
-   PCUs are the unit for second-level billing and resource scaling for the serverless feature. One PCU is approximately equal to 1 core and 2 GB of memory The PCUs of a node is dynamically adjusted within the specified range based on the workloads. The minimum granularity for scaling is 0.5 PCUs.
    

## Configure serverless parameters

Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Click **Clusters** in the left-side navigation pane. Select a region in the upper-left corner and click the ID of the cluster in the list to go to the Basic Information page. In the **Database Nodes** section of the **Basic Information** page, click **Serverless Configuration**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0894888271/p850577.png)

### **Configure current parameters**

**In the **Configure Serverless-related Parameters** dialog box, click Edit** to the right of the Current Parameters parameter to configure the following parameters:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0894888271/p850794.png)

-   **Current Parameters**
    
    -   **Minimum Read-only Nodes**: the minimum number of read-only nodes that can be added. Valid values: 0 to 15.
        
    -   **Maximum Read-only Nodes**: the maximum number of read-only nodes that can be added. Valid values: 0 to 15.
        
    
    **Note**
    
    -   The number of read-only nodes automatically increases or decreases within the specified range based on the actual workloads. For more information, see [Scaling](#9801ca239f4pr).
        
    -   To ensure high availability of serverless clusters, we recommend that you set **Minimum Read-only Nodes** to 1.
        
    
    -   **Minimum Resources for Single Node**: the minimum number of PCUs per node in the cluster. Valid values: 0.25 PCU to 32 PCUs.
        
    -   **Maximum Resources for Single Node**: the maximum number of PCUs per node in the cluster. Valid values: 1 PCU to 32 PCUs.
        
    
    **Note**
    
    Example: If you set the **Minimum Resources for Single Node** parameter to 2 PCUs and the **Maximum Resources for Single Node** parameter to 16 PCUs, the default specifications of a node in the serverless cluster are 2 PCUs (2 CPU cores and 4 GB memory). When the business load increases, the system automatically increases the number of PCUs of the primary node or read-only nodes. However, the maximum number of PCUs can only be increased to 16 PCUs (16 CPU cores and 32 GB memory) based on the settings.
    
    -   **Read-only Column Store Nodes**: the maximum number of read-only column store nodes that can be added. Valid values: 0 to 15.
        
        **Note**
        
        -   Before you can add read-only column store nodes to a serverless cluster, make sure that the cluster contains at least one read-only node, which means **Minimum Read-only Nodes** is set to 1.
            
        -   For more information about read-only column store nodes, see [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
            
        
    -   **Enable No-activity Suspension**: If your serverless cluster does not receive requests within specific periods of time, you can configure the automatic start and stop feature for the instance. After you enable this feature and if no service is connected to the cluster within the period defined by the **Detection Period for No-activity Suspension** parameter, the cluster automatically enters the suspended state. During the suspension period, you are still charged for the storage space on a pay-as-you-go basis. If any service is connected to the cluster, the cluster immediately starts.
        
    -   **Detection Period for No-activity Suspension**: The detection period must be a multiple of 5 minutes within a range from 5 minutes to 24 hours.
        
    
-   **Advanced Settings**
    
    You can modify the advanced parameters based on the resource pressure of serverless clusters.
    
    -   **Scan Interval**: In Sensitive mode, serverless clusters with defined specifications respond to workloads in a faster manner, which reduces the observation window and execution period of the clusters. You can select **Standard** or **Sensitive** from the Scan Interval drop-down list.
        
    -   **Maximum CPU Resources for Elastic Upgrade**: the CPU scale-up threshold for the cluster. Valid values: 40% to 100%.
        
    -   **Minimum CPU Resources for Elastic Upgrade**: the CPU scale-down threshold for the cluster. Valid values: 10% to 70%.
        
    
    **Note**
    
    -   The maximum CPU resources must be the same as or higher than the minimum CPU resources. The difference between the maximum CPU resources and the minimum CPU resources must be equal to or larger than 30 PCUs.
        
    -   Serverless clusters in sensitive mode respond to load changes faster than clusters in standard mode and are suitable for businesses with instantaneous load fluctuations (such as instantaneous CPU usage spikes). Such clusters are frequently scaled based on load fluctuations.
        
    

### **Lifecycle Policy**

Create a lifecycle policy to scale the cluster at specified time points monthly, weekly, or daily within a specified time range. It allows you to scale up or out the cluster during foreseeable peak hours (such as promotions and traffic spikes) to guarantee performance, and scale back the cluster during off-peak hours to release idle resources.

**Warning**

Proceed with caution.

-   When you delete a recurring policy for serverless resources, you cannot undo the task that is being executed in the current policy. The tasks that have not been executed are deleted.
    
-   If you disable the serverless feature, recurring policies and scheduled tasks are deleted.
    

1.  In the **Configure Serverless-related Parameters** dialog box, click **\+ Add Lifecycle Policy**. Set the following parameters:
    
    **Parameter**
    
    **Valid values**
    
    **Maximum Resources for Single Node**
    
    1 to 32.
    
    **Minimum Resources for Single Node**
    
    1 to 32. The value of the Minimum Resources for Single Node parameter must be less than or equal to the value of the Maximum Resources for Single Node parameter.
    
    **Maximum Read-only Nodes**
    
    0 to 15.
    
    **Minimum Read-Only Nodes**
    
    0 to 15. The value of the Minimum Read-only Nodes parameter must be less than or equal to the value of the **Maximum Read-only Nodes** parameter.
    
    **Read-only Column Store Nodes**
    
    0 to 15.
    
    **Start/End Time**
    
    The validity period of the recurring policy.
    
    **Policy Scheduling**
    
    The scheduling settings of the recurring policy. Valid values for the options of the Every parameter:
    
    1.  Month: specifies the counting method of days and the days and time for execution. **Positive** indicates forward counting from the first day of a month. **Last** indicates backward counting from the last day of a month. Separate multiple days with commas (`,` ). Example: `1,3,5`.
        
    2.  Weekly: Specifies the day and time for execution.
        
    3.  Daily: Specifies the time for execution.
        
    
    **Note**
    
    After a lifecycle policy is created, the system adjusts the serverless parameters of the cluster within the time range specified by **Start/End Time** based on the schedule specified by **Policy Scheduling**. Adjusted parameters are not automatically changed back. You can create another lifecycle policy to change back the parameters at a specified point in time. For more information, see [Example](#e2aa24ffbbumk).
    
2.  (Optional) Query scheduled tasks. You can use one of the following methods to query scheduled tasks:
    
    **Note**
    
    After a recurring policy is created, scheduled tasks are automatically generated based on the policy.
    
    -   After a recurring policy is created for a cluster, you can view scheduled tasks in the Pending Scheduled and Failed Tasks section on the Basic Information page of the cluster.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839275.png)
        
    -   Choose **Task Management** > **Scheduled Tasks** on the PolarDB console to view scheduled tasks.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p825078.png)
        

#### **Example**

If you want to scale up 5 PCUs at 9:30 and scale down 1 PCU at 22:00 every business day (Monday to Friday) from August 1 to September 30, you can configure the settings as shown in the following figures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839633.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839626.png)
