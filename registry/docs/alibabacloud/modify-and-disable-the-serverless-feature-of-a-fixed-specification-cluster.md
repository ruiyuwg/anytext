After you enable the serverless feature for a cluster with defined specifications, you can customize a scaling policy for serverless resources to control the scaling range. Also, you can configure a lifecycle policy to scale up or out the cluster during foreseeable peak hours (such as promotions and traffic spikes) to guarantee performance, and scale back the cluster during off-peak hours to release idle resources.

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
    

## **Precautions**

-   After you enable the serverless feature for an existing cluster with defined specifications, the maximum number of connections and the maximum IOPS of the cluster are proportional to the value of the **Maximum Resources for Single Node** parameter.
    
-   To enable the serverless feature on read-only column store nodes in an existing cluster with defined specifications, add read-only column store nodes to the cluster. After that, you can configure the maximum number of serverless read-only column store nodes that can be added.
    
-   PolarDB capacity unit (PCU) scaling of a compute node in a serverless cluster with defined specifications is subject to the following limits:
    
    -   PCU scaling is not supported for a compute node with dedicated specifications that has more than 32 CPU cores.
        
    -   PCU scaling is not supported for a compute node with general-purpose specifications that has more than 16 CPU cores.
        
-   PolarDB Capacity Units (PCUs) are the unit for second-level billing and resource scaling for serverless clusters. One PCU is approximately equal to 1 core and 2 GB of memory. The PCUs of a node is dynamically adjusted within the specified range based on the workloads. The minimum granularity for scaling is 0.5 PCUs.
    
-   After the serverless feature is disabled, the scaled resources are reclaimed. Exceptions may occur if the resources to be reclaimed are being used during the reclaim process. We recommend that you disable the serverless feature during off-peak hours.
    
-   Only the Cluster Edition supports the [lifecycle policy](#8e763ccc4b9bb) feature.
    

## Configure serverless parameters

Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Click **Clusters** in the left-side navigation pane. Select a region in the upper-left corner and click the ID of the cluster in the list to go to the Basic Information page. In the **Database Nodes** section of the **Basic Information** page, click **Serverless Configuration**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9801716171/p762079.png)

### **Configure current parameters**

In the **Configure Serverless-related Parameters** dialog box, click **Edit** to the right of the Current Parameters parameter to configure the following parameters:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0894888271/p850794.png)

-   **Current Parameters**
    
    -   **Minimum Read-only Nodes**: the minimum number of read-only nodes that can be added. Valid values: 0 to 15.
        
    -   **Maximum Read-only Nodes**: the maximum number of read-only nodes that can be added. Valid values: 0 to 15.
        
    
    **Note**
    
    The number of read-only nodes automatically increases or decreases within the specified range based on the actual workloads. For more information, see [Scaling](/help/en/polardb/polardb-for-mysql/user-guide/set-the-scale-up-strategy-of-serverless-cluster#9801ca239f4pr).
    
    -   **Minimum Resources for Single Node**: the minimum number of PCUs per node in the cluster. Valid values: 0 to 16.
        
    -   **Maximum Resources for Single Node**: the maximum number of PCUs per node in the cluster. Valid values: 0 to 16.
        
    
    **Note**
    
    Example: If you set the **Minimum Resources for Single Node** parameter to 2 PCUs and the **Maximum Resources for Single Node** parameter to 8 PCUs, the original resource specifications of a node in the cluster are the defined specifications plus 2 PCUs (2 CPU cores and 4 GB memory). When the business load increases, the system automatically increases the number of PCUs of the node. However, the maximum number of PCUs can only be increased to 8 (approximately equal to 8 CPU cores and 16 GB memory) based on the settings. The resource specifications of a node in the cluster can be increased to the defined specifications plus 8 PCUs (approximately equal to 8 CPU cores and 16 GB memory).
    
    -   **Read-only Column Store Nodes**: the maximum number of read-only column store nodes that can be added. Valid values: 0 to 15.
        
        **Note**
        
        -   This parameter is displayed and available for configuration only when read-only column store nodes are already added to the cluster.
            
        -   For more information about read-only column store nodes, see [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
            
        
    
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

-   Only the Cluster Edition supports the lifecycle policy feature.
    
-   Proceed with caution.
    
    -   When you delete a recurring policy for serverless resources, you cannot undo the task that is being executed in the current policy. The tasks that have not been executed are deleted.
        
    -   If you disable the serverless feature, recurring policies and scheduled tasks are deleted.
        

1.  In the **Configure Serverless-related Parameters** dialog box, click **\+ Add Lifecycle Policy**. Set the following parameters:
    
    **Parameter**
    
    **Valid value**
    
    **Maximum Resources for Single Node**
    
    Valid values: 0 to 16.
    
    **Minimum Resources for Single Node**
    
    Valid values: 0 to 16. The value of the Minimum Resources for Single Node parameter must be less than or equal to the value of the Maximum Resources for Single Node parameter.
    
    **Maximum Read-only Nodes**
    
    Valid values: 0 to 15.
    
    **Minimum Read-Only Nodes**
    
    Valid values: 0 to 15. The value of the Minimum Read-only Nodes parameter must be less than or equal to the value of the **Maximum Read-only Nodes** parameter.
    
    **Read-only Column Store Nodes**
    
    Valid values: 0 to 15.
    
    **Note**
    
    -   This parameter is displayed and available for configuration only when read-only column store nodes are already added to the cluster.
        
    -   For more information about read-only column store nodes, see [IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/imcis/).
        
    
    **Start/End Time**
    
    The validity period of the recurring policy.
    
    **Policy Scheduling**
    
    The scheduling settings of the recurring policy. Valid values for the options of the Every parameter:
    
    1.  Month: specifies the counting method of days and the days and time for execution. **Positive** indicates forward counting from the first day of a month. **Last** indicates backward counting from the last day of a month. Separate multiple days with commas (`,` ). Example: `1,3,5`.
        
    2.  Weekly: specifies the day and time for execution.
        
    3.  Daily: specifies the time for execution.
        
    
    **Note**
    
    After a lifecycle policy is created, the system adjusts the serverless parameters of the cluster within the time range specified by **Start/End Time** based on the schedule specified by **Policy Scheduling**. Adjusted parameters are not automatically changed back. You can create another lifecycle policy to change back the parameters at a specified point in time. For more information, see [Example](#e2aa24ffbbumk).
    
2.  (Optional) Query scheduled tasks by using one of the following methods:
    
    **Note**
    
    After a recurring policy is created, scheduled tasks are automatically generated based on the policy.
    
    -   After the recurring policy is created, you can view its execution plans on the cluster details page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839275.png)
        
    -   Choose **Task Management** > **Scheduled Tasks** on the PolarDB console to view scheduled tasks.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p825078.png)
        

#### **Example**

If you want to scale up 5 PCUs at 9:30 and scale down 1 PCU at 22:00 every business day (Monday to Friday) from August 1 to September 30, you can configure the settings as shown in the following figures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839633.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3071738271/p839626.png)

## **Disable the serverless feature**

**Important**

After the serverless feature is disabled, the scaled resources are reclaimed. Exceptions may occur if the resources to be reclaimed are being used during the reclaim process. We recommend that you disable the serverless feature during off-peak hours.

Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Click **Clusters** in the left-side navigation pane. Select a region in the upper-left corner and click the ID of the cluster in the list to go to the Basic Information page. In the **Database Nodes** section of the **Basic Information** page, click **Disable Serverless**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7425700471/p916907.png)

## **References**

[Enable the serverless feature for a cluster with defined specifications](/help/en/polardb/polardb-for-mysql/user-guide/enable-the-serverless-function-for-fixed-specification-clusters)

## **Related API operation**

API

Description

[DescribeDBClusterServerlessConf](/help/en/polardb/api-polardb-2017-08-01-describedbclusterserverlessconf)

Queries the serverless configuration of a cluster.

[ModifyDBClusterServerlessConf](/help/en/polardb/api-polardb-2017-08-01-modifydbclusterserverlessconf)

Modifies the serverless configuration of a cluster.

[DisableDBClusterServerless](/help/en/polardb/api-polardb-2017-08-01-disabledbclusterserverless)

Disables the serverless feature.
