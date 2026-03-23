If your business workloads fluctuate, we recommend that you enable auto scaling for your E-MapReduce (EMR) cluster and configure auto scaling rules to increase or decrease task nodes in the cluster based on your business requirements. Auto scaling helps you reduce costs and ensures sufficient computing resources for your jobs. This topic describes how to configure custom auto scaling rules in the EMR console.

## Prerequisites

-   A DataLake cluster, a Dataflow cluster, an online analytical processing (OLAP) cluster, a DataServing cluster, or a custom cluster is created. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
-   A task node group that contains pay-as-you-go instances or preemptible instances is created in the cluster. For more information, see [Create a node group](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters#section-49o-tfm-c7l).
    

## Limitations

-   To prevent auto scaling failures due to insufficient Elastic Compute Service (ECS) instances, you can select multiple instance types when you add a node group. You can select up to 10 ECS instance types. Nodes are created based on the order of the instance types in the list. By default, the instance type that is first selected is preferentially used when your cluster is scaled out. If an instance type is unavailable, the next instance type is used. The instance type that is used to create the node varies based on the inventory.
    
-   Only clusters in which the YARN service is deployed support load-based scaling rules.
    

## Usage notes

-   You can add auto scaling rules to node groups that meet the requirements. When the auto scaling rules are triggered, the node groups are automatically scaled in or out based on the auto scaling configurations. If no auto scaling rule is configured, no auto scaling activity is triggered.
    
-   The system automatically searches for the instance types that match the instance specifications you specified and displays the instance types in the Instance Type section. You must select one or more instance types in the Instance Type section. This way, the cluster can be scaled based on the selected instance types.
    

**Note**

If multiple auto scaling rules are configured and the specified conditions are met at the same time, the system triggers and executes the rules based on the following rules:

-   Scale-out rules take precedence over scale-in rules.
    
-   The time-based scaling rules and load-based scaling rules are executed based on the trigger sequence.
    
-   The load-based scaling rules are triggered based on the time when the cluster load metrics are triggered.
    
-   The load-based scaling rules that are configured with the same cluster load metrics are triggered based on the order in which the rules are configured.
    

## **Procedure**

### **Method 1: Add custom scaling rules for an existing cluster**

1.  Go to the Auto Scaling tab.
    
    1.  [Log on to the EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click the name of the cluster in the Cluster ID/Name column.
        
    4.  On the page that appears, click the **Auto Scaling** tab.
        
2.  Configure auto scaling rules.
    
    1.  In the **Configure Auto Scaling** tab of the **Configure Auto Scaling Rule** section, click **Custom Auto Scaling Rule**. In the Modify Auto Scaling Rule message, click **Reconfigure**. Find the desired node group and click **Edit** in the **Actions** column.
        
    2.  In the **Configure Auto Scaling** panel, configure the following parameters:
        
        -   **Limits On Node Quantity Of Current Node Group**: specifies the range of the number of nodes in the current node group. This parameter defines the upper and lower limits for the number of nodes in the node group when the node group is automatically scaled in or out based on the auto scaling rules. To change the maximum and minimum numbers of nodes in a node group, click **Modify Limit**.
            
            -   **Maximum Number Of Instances**: specifies the upper limit for the number of nodes in the current node group. The node group can no longer be scaled out when the number of nodes in the node group reaches the upper limit.
                
            -   **Minimum Number Of Instances**: specifies the lower limit for the number of nodes in the current node group. The node group can no longer be scaled in when the number of nodes in the node group reaches the lower limit.
                
        -   **Trigger Rule**: displays the auto scaling rules that are configured for the current node group. You can also add more auto scaling rules for the node group.
            
            -   Time-based scaling
                
                If the computing workloads of a cluster fluctuate on a regular basis, you can add or remove a specific number of task nodes at fixed points in time every day, every week, or every month to supplement or save computing resources. This ensures that jobs can be completed at low costs. Auto scaling rules are divided into scale-out rules and scale-in rules.
                
                **Important**
                
                To prevent potential conflicts and ensure that scaling operations proceed smoothly, do not set the execution time of scale-out and scale-in rules to the same point in time.
                
                The following table describes the parameters for a scale-out rule.
                
                **Parameter**
                
                **Description**
                
                **Scale Out Type**
                
                Scale Out by Time.
                
                **Rule Name**
                
                The name of the scale-out rule. The names of auto scaling rules must be unique in a cluster.
                
                **Frequency**
                
                -   **Execute Repeatedly**: Auto scaling is performed at a specific point in time every day, every week, or every month.
                    
                -   **Execute Only Once**: Auto scaling is performed only once at a specific point in time.
                    
                
                **Execution Time**
                
                The specific point in time at which the scale-out rule is executed.
                
                **Rule Expiration Time**
                
                The expiration time of the scale-out rule. After the scale-out rule expires, no scale-out activity is triggered. This parameter is available only if you set the **Frequency** parameter to **Execute Repeatedly**.
                
                **Retry Time Range**
                
                The retry interval. Auto scaling may fail at the specified point in time due to various reasons. If the retry interval is specified, the system retries auto scaling every 30 seconds during the retry interval specified by this parameter until auto scaling is performed. Valid values: 0 to 3600. Unit: seconds.
                
                For example, auto scaling operation A needs to be performed in a specified time period. If auto scaling operation B is still in progress or is in the cooldown state during this period, operation A cannot be performed. In this case, the system tries to perform operation A every 30 seconds within the retry interval you specified. If required conditions are met, the cluster immediately performs auto scaling.
                
                **Nodes For Each Scale Out**
                
                The number of nodes that are added to the node group each time the scale-out rule is triggered.
                
                **Best-effort Delivery**
                
                We recommend that you turn on the switch. After you turn on this switch, the system will deliver all successfully created nodes in a best-effort manner to ensure continuity of your business.
                
                For example, you configure a scale-out rule to add 100 nodes at 00:00 every day, and only 90 nodes are added. If you do not turn on the Best-effort Delivery switch, the scale-out fails. If you turn on the switch, 90 nodes are delivered.
                
            -   Load-based scaling
                
                **Note**
                
                Only clusters in which the YARN service is deployed support load-based scaling rules.
                
                You can add load-based scaling rules for task node groups in a cluster for which you cannot accurately estimate the fluctuation of big data computing workloads. Auto scaling rules are divided into scale-out rules and scale-in rules. The following table describes the parameters for a scale-out rule.
                
                **Parameter**
                
                **Description**
                
                **Scale Out Type**
                
                Scale Out by Load.
                
                **Rule Name**
                
                The name of the scale-out rule. The names of auto scaling rules must be unique in a cluster.
                
                **Load Metric-based Trigger Conditions**
                
                The conditions that must be met to trigger the scale-out rule. You must select at least one system-defined load metric. To select multiple system-defined load metrics, click **Add Metric**. You must configure the following parameters:
                
                -   Load metrics: Select system-defined YARN load metrics. For information about the mappings between EMR auto scaling metrics and YARN load metrics, see [Description of EMR auto scaling metrics that match YARN load metrics](#72d13223ddwbo).
                    
                    **Note**
                    
                    System-defined load metrics vary based on the cluster type. You can view the supported system-defined load metrics in the EMR console.
                    
                -   Statistical method: the rule that is used to specify the threshold for each load metric. The scale-out rule is triggered once if the value of the specified aggregation dimension (average, maximum, or minimum) for each selected load metric reaches the threshold within a statistical period.
                    
                
                **Multi-metric Relationship**
                
                The relationship among the metrics that are used to trigger the scale-out rule. Valid values: **All Metrics Meet the Conditions** and **Any Metric Meets the Condition**.
                
                **Statistical Period**
                
                The statistical period for measuring whether the value of the specified aggregation dimension (average, maximum, or minimum) for each selected load metric reaches the threshold. Data is collected, summarized, and compared based on the specified statistical period. The shorter the statistical period is, the more frequently the scale-out rule is likely to be triggered. Specify the statistical period based on your business requirements.
                
                **Repetitions That Trigger Scale Out**
                
                Based on the aggregation method, Auto Scaling records each occurrence when a load metric value exceeds the threshold. It triggers the corresponding scaling rule only after reaching a specified number of occurrences.
                
                **Nodes For Each Scale Out**
                
                The number of nodes that are added to the node group each time the scale-out rule is triggered.
                
                **Best-effort Delivery**
                
                After you turn on this switch, the system will deliver all successfully created nodes in a best-effort manner. Load-based scaling is affected by metrics. You can determine whether to turn on the switch based on your business requirements.
                
                **Cooldown Time**
                
                The interval between two scale-out activities. During the cooldown time, the scale-out rule is not triggered even if the scale-out conditions are met. A scale-out activity is performed after the cooldown time ends and the scale-out conditions are met again.
                
                After the node group is scaled out and reaches the expected state, the cooldown time keeps the cluster load metric that triggers subsequent scale-out activities in a stable state.
                
                **Effective Time Period**
                
                The time range in which the scale-out rule takes effect. This parameter is optional. By default, the scale-out rule is available 24 hours a day. A scale-out activity is triggered only within the time range specified by this parameter.
                
    3.  Click **Save And Apply**.
        
        Scale-out activities are triggered for the node group when the scale-out conditions are met.
        

### **Method 2: Add custom auto scaling rules when you create a cluster**

1.  [Log on to the EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
    
2.  In the top navigation bar, select a region and a resource group based on your business requirements.
    
3.  Click **Create Cluster**. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
    **Note**
    
    You must add a pay-as-you-go task node group before you can configure custom auto scaling rules.
    
4.  Configure the **Cluster Scaling** parameter.
    
    1.  Click **Custom Auto Scaling Rule**. Find the desired node group and click **Edit** in the **Actions** column.
        
    2.  In the **Configure Auto Scaling** panel, configure the parameters. For more information, see [Configure auto scaling rules](#27f4384ac582c).
        
    3.  Click Save And Apply.
        
5.  Confirm the order.
    
    After the cluster is created, scaling activities are triggered for the node group when the specific conditions are met.
    

### **Method 3: Use SDK to add custom auto scaling rules**

When you call a specific API operation to create a cluster or create a task node group, you can configure custom auto scaling rules for the task node group to allow the system to automatically manage nodes. For more information, see [CreateCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createcluster) and [CreateNodeGroup](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createnodegroup). You can also configure custom auto scaling rules for existing task node groups. For more information, see [PutAutoScalingPolicy](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-putautoscalingpolicy).

The following Java code shows how to configure a load-based scale-out rule.

**Note**

We recommend that you use a Security Token Service (STS) token that provides higher security to initialize a Credentials client. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

```
// This file is auto-generated, don't edit it. Thanks.
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    /**
     * description
```

## **Descriptions of EMR auto scaling metrics that match YARN load metrics**

**Note**

-   For queue-related auto scaling metrics, the queue\_name parameter specifies the queue name. The default value is root. You can specify a custom queue.
    
-   For partition-related auto scaling metrics, the partition\_name parameter specifies the partition name. This parameter cannot be empty.
    

**EMR auto scaling metric**

**Service**

**Description**

yarn\_resourcemanager\_queue\_AvailableVCores

YARN

The number of available virtual CPU cores for the specified queue.

yarn\_resourcemanager\_queue\_PendingVCores

YARN

The number of pending virtual CPU cores for the specified queue.

yarn\_resourcemanager\_queue\_AllocatedVCores

YARN

The number of allocated virtual CPU cores for the specified queue.

yarn\_resourcemanager\_queue\_ReservedVCores

YARN

The number of reserved virtual CPU cores for the specified queue.

yarn\_resourcemanager\_queue\_AvailableMB

YARN

The amount of available memory for the specified queue.

yarn\_resourcemanager\_queue\_PendingMB

YARN

The amount of pending memory for the specified queue.

yarn\_resourcemanager\_queue\_AllocatedMB

YARN

The amount of allocated memory for the specified queue.

yarn\_resourcemanager\_queue\_ReservedMB

YARN

The amount of reserved memory for the specified queue.

yarn\_resourcemanager\_queue\_AppsRunning

YARN

The number of running jobs in the specified queue.

yarn\_resourcemanager\_queue\_AppsPending

YARN

The number of suspended jobs in the specified queue.

yarn\_resourcemanager\_queue\_AppsKilled

YARN

The number of stopped jobs in the specified queue.

yarn\_resourcemanager\_queue\_AppsFailed

YARN

The number of failed jobs in the specified queue.

yarn\_resourcemanager\_queue\_AppsCompleted

YARN

The number of completed jobs in the specified queue.

yarn\_resourcemanager\_queue\_AppsSubmitted

YARN

The number of submitted jobs in the specified queue.

yarn\_resourcemanager\_queue\_AllocatedContainers

YARN

The number of allocated containers in the specified queue.

yarn\_resourcemanager\_queue\_PendingContainers

YARN

The number of pending containers in the specified queue.

yarn\_resourcemanager\_queue\_ReservedContainers

YARN

The number of reserved containers in the specified queue.

yarn\_resourcemanager\_queue\_AvailableMBPercentage

YARN

The percentage of available memory resources in the specified queue. `(MemoryAvailablePercentage= AvailableMemory/Total Memory)`.

**Note**

This metric is available for EMR clusters of V3.43.0, V5.9.0, and minor versions later than V3.43.0 or V5.9.0.

yarn\_resourcemanager\_queue\_PendingContainersRatio

YARN

The ratio of pending containers to allocated containers in the specified queue. `(ContainerPendingRatio = PendingContainers/AllocatedContainers).`

**Note**

This metric is available for EMR clusters of V3.43.0, V5.9.0, and minor versions later than V3.43.0 or V5.9.0.

yarn\_resourcemanager\_queue\_AvailableVCoresPercentage

YARN

The percentage of available CPU cores in the specified queue. `AvailableVCoresPercentage = AvailableVCores / (ReservedVCores + AvailableVCores + AllocatedVCores) * 100`

**Note**

This metric is available for EMR clusters of V3.43.0, V5.9.0, and minor versions later than V3.43.0 or V5.9.0.

yarn\_cluster\_numContainersByPartition

YARN

The number of containers for a specified partition. The partition\_name parameter specifies the partition name.

**Note**

This metric is available for EMR clusters of V3.44.0, V5.10.0, and minor versions later than V3.44.0 or V5.10.0.

yarn\_cluster\_usedMemoryMBByPartition

YARN

The amount of used memory for a specified partition. The partition\_name parameter specifies the partition name.

**Note**

This metric is available for EMR clusters of V3.44.0, V5.10.0, and minor versions later than V3.44.0 or V5.10.0.

yarn\_cluster\_availMemoryMBByPartition

YARN

The amount of available memory for a specified partition. The partition\_name parameter specifies the partition name.

**Note**

This metric is available for EMR clusters of V3.44.0, V5.10.0, and minor versions later than V3.44.0 or V5.10.0.

yarn\_cluster\_usedVirtualCoresByPartition

YARN

The number of used CPU cores for a specified partition. The partition\_name parameter specifies the partition name.

**Note**

This metric is available for EMR clusters of V3.44.0, V5.10.0, and minor versions later than V3.44.0 or V5.10.0.

yarn\_cluster\_availableVirtualCoresByPartition

YARN

The number of available CPU cores for a specified partition. The partition\_name parameter specifies the partition name.

**Note**

This metric is available for EMR clusters of V3.44.0, V5.10.0, and minor versions later than V3.44.0 or V5.10.0.

## **FAQ**

**Why do I fail to scale out an EMR cluster? How do I improve the scale-out success rate?**

**Causes**

1.  Insufficient ECS resources: If the number of ECS instances of specific instance types that you want to add exceeds the number of available ECS instances in the current zone, the scale-out fails. This is because the underlying ECS resources are dynamically changing and may be temporarily in short supply due to high demand.
    
2.  Selection of ECS instances of a single instance type: If you select ECS instances of a single type, and ECS instances of the instance type are in short supply, the scale-out process may be blocked.
    

**Solutions**

-   Turn on the Best-effort Delivery switch when you configure auto scaling rules: After you turn on this switch, the system will deliver all successfully created nodes in a best-effort manner if some resources are unavailable, instead of completely abandoning the scale-out request.
    
-   We recommend that you configure multiple instance types: To improve the success rate, specify multiple ECS instance types when you configure a task node group. For more information, see [Create a node group](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters#section-49o-tfm-c7l). This way, when your cluster is scaled out, nodes are created based on the order of the instance types in the list. By default, the instance type that is first selected is preferentially used. If an instance type is unavailable, the next instance type is used. The scale-out ends when the system has attempted to add nodes of all instance types.
    

By implementing these measures, you can effectively improve the success rate of EMR cluster elastic scaling.
