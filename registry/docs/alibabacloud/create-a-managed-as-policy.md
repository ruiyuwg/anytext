The managed auto scaling feature allows you to configure the maximum and minimum number of task nodes. This way, E-MapReduce (EMR) can automatically adjust the number of task nodes based on your workloads and optimize resource allocation based on the job execution history. This ensures the smooth execution of tasks and reduces the cost. This topic describes how to add managed auto scaling rules in the EMR console.

## Prerequisites

-   A DataLake cluster, a Dataflow cluster, an online analytical processing (OLAP) cluster, a DataServing cluster, or a custom cluster is created. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
-   A task node group that contains pay-as-you-go instances or preemptible instances is created in the cluster. For more information, see [Create a node group](/help/en/emr/emr-on-ecs/user-guide/manage-node-groups-for-datalake-dataflow-olap-and-dataserving-clusters#section-49o-tfm-c7l).
    

## Limits

-   To prevent auto scaling failures due to insufficient Elastic Compute Service (ECS) instances, you can select multiple instance types when you add a node group. You can select up to 10 ECS instance types. Nodes are created based on the order of the instance types in the list. By default, the instance type that is first selected is preferentially used when your cluster is scaled out. If an instance type is unavailable, the next instance type is used. The actual instance types used to create nodes are subject to inventory availability.
    
-   Only clusters in which the YARN service is deployed support managed auto scaling rules.
    
-   If the Trino, Presto, StarRocks, Impala, or ClickHouse service is deployed in the cluster, managed auto scaling rules may become ineffective.
    

## **Usage notes**

If you switch the auto scaling mode, the original auto scaling rules may become ineffective. Proceed with caution when you switch the auto scaling mode.

## **Procedure**

### **Method 1: Add managed scaling rules for an existing cluster**

After the managed auto scaling feature is enabled, the system continuously monitors the loads of the YARN cluster and calculates the peak loads over the past period to automatically adjust the number of task nodes.

1.  Go to the Auto Scaling tab.
    
    1.  [Log on to the EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
    3.  On the EMR on ECS page, find the desired cluster and click the name of the cluster in the Cluster ID/Name column.
        
    4.  On the page that appears, click the **Auto Scaling** tab.
        
2.  In the **Configure Auto Scaling Rule** section of the **Configure Auto Scaling** subtab, click **Managed Auto Scaling Rule**.
    
3.  Configure auto scaling rules.
    
    1.  In the dialog box that appears, click **Reconfigure** and configure the relevant parameters.
        
        -   **Minimum Number of Task Nodes**: the minimum number of task nodes reserved for auto scaling of the cluster when the managed scale-in rule is triggered.
            
        -   **Maximum Number of Task Nodes**: the maximum number of task nodes reserved for auto scaling of the cluster when the managed scale-out rule is triggered.
            
        -   **Maximum Number of Pay-as-you-go Task Nodes**: the maximum number of pay-as-you-go nodes that can be added after a scale-out is triggered. This parameter is used to configure the proportions of pay-as-you-go nodes and preemptible instances. The default value is the maximum number of task nodes.
            
            **Note**
            
            If the cluster has the task node group of preemptible instances, the value of **Maximum Number of Pay-as-you-go Task Nodes** can be less than the value of **Maximum Number of Task Nodes**. For example, if Minimum Number of Task Nodes is set to 0, Maximum Number of Task Nodes is set to 20, and Maximum Number of Pay-as-you-go Task Nodes is set to 15, the system first attempts to add 15 pay-as-you-go nodes during the scale-out process. If more nodes are required, add preemptible instances instead.
            
    2.  Click **Save and Apply****.**
        

### **Method 2: Add managed auto scaling rules when you create a cluster**

1.  [Log on to the EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  In the top navigation bar, select the region where your cluster resides and select a resource group based on your business requirements.
    
3.  Click **Create Cluster**. For more information about parameters, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
    **Note**
    
    You must add a task node group for pay-as-you-go or preemptible instances in the cluster before you can configure managed auto scaling rules.
    
4.  Configure **auto scaling for the cluster**.
    
    1.  Select **Managed Auto Scaling Rule****.**
        
    2.  Click **Edit** next to **Managed Auto Scaling Rule**, set the parameters, and then click **Save and Apply**.
        
        -   **Minimum Number of Task Nodes**: the minimum number of task nodes reserved for auto scaling of the cluster when the managed scale-in rule is triggered.
            
        -   **Maximum Number of Task Nodes**: the maximum number of task nodes reserved for auto scaling of the cluster when the managed scale-out rule is triggered.
            
        -   **Maximum Number of Pay-as-you-go Task Nodes**: the maximum number of pay-as-you-go nodes that can be added after a scale-out is triggered. This parameter is used to configure the proportions of pay-as-you-go nodes and preemptible instances. The default value is the maximum number of task nodes.
            
            **Note**
            
            If the cluster has the task node group of preemptible instances, the value of **Maximum Number of Pay-as-you-go Task Nodes** can be less than the value of **Maximum Number of Task Nodes**. For example, if Minimum Number of Task Nodes is set to 0, Maximum Number of Task Nodes is set to 20, and Maximum Number of Pay-as-you-go Task Nodes is set to 15, the system first attempts to add 15 pay-as-you-go nodes during the scale-out process. If more nodes are required, add preemptible instances instead.
            
5.  Confirm the order.
