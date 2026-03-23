You can use node auto scaling to automatically scale nodes when resources in the current Container Service for Kubernetes (ACK) cluster cannot fulfil pod scheduling. The node auto scaling feature applies to scenarios with limited scaling requirements. This includes clusters that have less than 20 node pools with auto scaling enabled, or where nodes per node pool remain below 100. Node auto scaling is optimal for workloads with stable traffic patterns, periodic or predictable resource demands, and operations where single-batch scaling meets business requirements.

## **Before you start**

To better work with the node auto scaling feature, we recommend that you read the [Node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/) topic and pay attention to the following items:

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) How node auto scaling works and its features

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) Use scenarios of node auto scaling

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) Usage notes for node auto scaling

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) During scale-in, subscription instances will be removed but not released. To avoid additional costs, use pay-as-you-go instances when enabling this feature.

## **Prerequisite**

-   You have activated [Auto Scaling](https://ess.console.alibabacloud.com/?spm=5176.12818093.ProductAndResource--ali--widget-product-recent.dre6.3be916d0JBbHR4#/v3/welcome/).
    
-   You have reviewed [Usage notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/#title-eq2-yst-ngi) to understand quotas and limitations of node scaling.
    
-   Node auto scaling has [known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#0578d5906a4ve) in certain scheduling policies, which may result in unexpected scaling results. If your workloads/components use unsupported scheduling policies, adopt one of the following solutions:
    
    -   Option 1: Switch to [node instant scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity).
        
    -   Option 2: Deploy affected workloads/components in node pools with auto scaling disabled.
        
        Take [ack-node-local-dns-admission-controller](/help/en/ack/product-overview/ack-nodelocal-dnscache) as an example, deploy it in node pools with node scaling disabled and declare the following node affinity rules in the component configuration file:
        
        ```
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
            - matchExpressions:
              - key: "k8s.aliyun.com"
                operator: "NotIn"
                values: ["true"]
        ```
        

This feature involves the following workflow:

1.  [Step 1: Enable node auto scaling for the cluster](#title-2gy-7ok-45m)
    
    The node pool auto scaling mode only takes effect after auto scaling is enabled for the cluster.
    
2.  [Step 2: Configure a node pool with auto scaling enabled](#title-rpu-6of-hjk)
    
    The node auto scaling feature only applies to node pools with auto scaling enabled. You must explicitly set the **Scaling Mode** to **Auto** for target node pools.
    

## Step 1: Enable node auto scaling for the cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click **Enable** next to **Node Scaling**.
    
    ![1.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1151538171/p731800.jpg)
    
4.  If this is the first time you use the node auto scaling feature, follow the prompted instructions to activate the service and complete authorization. Otherwise, skip this step.
    
    -   For an ACK managed cluster, authorize ACK to use the [AliyunCSManagedAutoScalerRole](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22CS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedAutoScalerRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedAutoScalerRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) for accessing your cloud resources.
        
    -   For an ACK dedicated cluster, authorize ACK to use the KubernetesWorkerRole and AliyunCSManagedAutoScalerRolePolicy for scaling management. The following figure shows the console page on which you can make the authorization when you enable **Node Scaling**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1110461371/p869927.png)
        
5.  In the **Node Scaling Configuration** panel, set **Node Scaling Method** to **Auto Scaling**, configure scaling parameters, and click **OK**.
    
    > **Node Scaling Configuration** can be modified by switching to [Instant Scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity) and completing the configuration workflow as prompted.
    
    **Parameter**
    
    **Description**
    
    **Node Pool Scale-out Policy**
    
    -   **Random Policy**: randomly scale out a node pool when multiple scalable node pools exist.
        
    -   **Default Policy**: scale out the node pool that wastes the least resources when multiple scalable node pools exist.
        
    -   **Priority-based Policy**: scale out node pools based on their scale-out priorities when multiple scalable node pools exist.
        
        The scale-out priority of a node pool is defined through the **Node Pool Scale-out Priority** parameter.
        
    
    **Node Pool Scale-out Priority**
    
    -   Specify the scaling order during a scale-out operation. Only effective when **Node Pools Scale-out Policy** is set to **Priority-based Policy**.
        
    -   Valid values: integers from 1 to 100. A larger number indicates a higher priority.
        
    -   Configuration steps:
        
        a. Click **\+ Add** next to the parameter.
        
        b. Select the node pool with auto scaling enabled.
        
        c. Set a priority value.
        
    -   If no node pools with auto scaling enabled are available, skip this parameter for now, and configure it after completing [Step 2: Configure a node pool with auto scaling enabled](#title-rpu-6of-hjk).
        
    
    **Scan Interval**
    
    Specify the interval at which the cluster is evaluated for scaling. Default value: 60s.
    
    The autoscaler triggers scale-out activities based on the actual scheduling status.
    
    **Important**
    
    -   Elastic Compute Service (ECS) nodes: The autoscaler performs scale-in activities only when the **Scale-in Threshold**, **Defer Scale-in For**, and **Cooldown** conditions are met.
        
    -   GPU-accelerated nodes: The autoscaler performs scale-in activities only when the **GPU Scale-in Threshold**, **Defer Scale-in For:**, and **Cooldown** conditions are met.
        
    
    **Allow Scale-in**
    
    Specify whether to allow scale-in activities. The scale-in configuration does not take effect when this switch is turned off. Proceed with caution.
    
    **Scale-in Threshold**
    
    Specify the ratio of the resource request of a node to resource capacity of the node in a node pool that has node auto scaling enabled.
    
    A scale-in activity is performed only when the CPU and memory utilization of a node is lower than the **Scale-in Threshold**.
    
    **GPU Scale-in Threshold**
    
    The scale-in threshold for GPU-accelerated nodes.
    
    A scale-in activity is performed only when the CPU, memory, and GPU utilization of a node is lower than the **Scale-in Threshold**.
    
    **Defer Scale-in For**
    
    The interval between detecting scale-in requirements and the actual execution of scale-in operations. Unit: minutes. Default value: 10.
    
    **Important**
    
    The autoscaler performs scale-in activities only when **Scale-in Threshold** is configured and the **Defer Scale-in For** condition is met.
    
    **Cooldown**
    
    After the autoscaler performs a scale-out activity, it undergoes a cooldown period before it can perform a scale-in activity.
    
    The autoscaler cannot perform scale-in activities during the cooldown period, but can check if the nodes meet the scale-in conditions. After the cooldown period, if a node meets the scale-in conditions and the waiting period specified in the Defer Scale-in For parameter has ended, the node is removed. For example, the Cooldown parameter is set to 10 minutes and Defer Scale-in For is set to 5 minutes. The autoscaler cannot scale in activities during the cooldown period, but can still check if the nodes meet the scale-in conditions. The ones that do are removed 5 minutes after the cooldown period ends.
    
    **View advanced scale-in settings**
    
    **Parameter**
    
    **Description**
    
    **Pod Termination Timeout**
    
    The maximum amount of time to wait for pods on a node to terminate during a scale-in activity. Unit: seconds.
    
    **Minimum Number Of Replicated Pods**
    
    The minimum number of pods allowed in each ReplicaSet before nodes are scaled down. When the number of replicas in the ReplicaSet to which the pod belongs is fewer than this parameter, the nodes are not scaled in.
    
    **Evict DaemonSet Pods**
    
    When enabled, DaemonSet pods are evicted during a scale-in activity.
    
    **Skip Nodes Hosting Kube-system Pods**
    
    When enabled, nodes with pods running in the kube-system namespace are ignored during a scale-in activity, ensuring they are not affected.
    
    **Note**
    
    This feature does not take effect on mirror pods and DaemonSet pods.
    

## Step 2: Configure a node pool with auto scaling enabled

You can either modify existing node pools by switching their **Scaling Mode** to **Auto**, or create new node pools with auto scaling enabled. For detailed steps, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

Key configurations include:

**Parameter**

**Description**

**Scaling Mode**

**Manual** and **Auto** scalings are supported. Computing resources are automatically adjusted based on your business requirements and policies to reduce cluster costs.

-   **Manual**: ACK adjusts the number of nodes in the node pool based on the value of the **Expected Nodes** parameter. The number of nodes is always the same as the value of the **Expected Nodes** parameter. For more information, see [Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool).
    
-   **Auto**: When the capacity planning of the cluster cannot meet the requirements of pod scheduling, ACK automatically scales out nodes based on the configured minimum and maximum number of instances. By default, node instant scaling is enabled for clusters running Kubernetes 1.24 and later, and node auto scaling is enabled for clusters running Kubernetes versions earlier than 1.24. For more information, see [Node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/).
    

**Instances**

The **Min. Instances** and **Max. Instances** defined for a node pool exclude your existing instances.

**Note**

-   If you set **Min. Instances** above zero, the scaling group will automatically create the specified number of ECS instances when changes are applied.
    
-   Configure **Max. Instances** to be no lower than the current number of nodes in the node pool. Otherwise, a scale-down will be triggered immediately once auto scaling takes effect.
    

Instance-related parameters

Select the ECS instances used by the worker node pool based on instance types or attributes. You can filter [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) by attributes such as vCPU, memory, instance family, and architecture. For more information about the instance specifications not supported by ACK and how to configure nodes, see [ECS specification recommendations for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

When the node pool is scaled out, ECS instances of the selected instance types are created. The scaling policy of the node pool determines which instance types are used to create new nodes during scale-out activities. Select multiple instance types to improve the success rate of node pool scale-out operations.

The instance types of the nodes in the node pool. If you select only one, the fluctuations of the ECS instance stock affect the scaling success rate. We recommend that you select multiple instance types to increase the scaling success rate.

Select the ECS instances used by the worker node pool based on instance types or attributes. You can filter [instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) by attributes such as vCPU, memory, instance family, and architecture. For more information about the instance specifications not supported by ACK and how to configure nodes, see [ECS specification recommendations for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

When the node pool is scaled out, ECS instances of the selected instance types are created. The scaling policy of the node pool determines which instance types are used to create new nodes during scale-out activities. Select multiple instance types to improve the success rate of node pool scale-out operations.

**Operating System**

When you enable auto scaling, you can select an image based on Alibaba Cloud Linux, Windows, or Windows Core.

If you select an image based on Windows or Windows Core, the system automatically adds the `{ effect: 'NoSchedule', key: 'os', value: 'windows' }` taint to nodes in the node pool.

**Node Labels**

Node labels are automatically added to nodes that are added to the cluster by scale-out activities.

**Important**

Auto scaling can recognize node labels and taints only after the node labels and taints are mapped to node pool tags. A node pool can have only a limited number of tags. Therefore, you must limit the total number of ECS tags, taints, and node labels of a node pool that has auto scaling enabled to less than 12.

**Scaling Policy**

-   **Priority**: The system scales the node pool based on the priorities of the **vSwitches** that you select for the node pool. The ones you select are displayed in descending order of priority. If Auto Scaling fails to create ECS instances in the zone of the vSwitch with the highest priority, Auto Scaling attempts to create ECS instances in the zone of the vSwitch with the next highest priority.
    
-   **Cost Optimization**: The system creates instances based on the vCPU unit prices in ascending order.
    
    If the **Billing Method** of the node pool is set to **Preemptible Instance**, such instances are preferentially created. You can also set the **Percentage of Pay-as-you-go Instances** parameter. If preemptible instances cannot be created due to reasons such as insufficient stocks, pay-as-you-go instances are automatically created as a supplement.
    
-   **Distribution Balancing**: The even distribution policy takes effect only when you select multiple vSwitches. This policy ensures that ECS instances are evenly distributed among the zones (the vSwitches) of the scaling group. If they are unevenly distributed due to reasons such as insufficient stocks, you can perform a rebalancing operation.
    

**Use Pay-as-you-go Instances When Preemptible Instances Are Insufficient**

> You must set the Billing Method parameter to Preemptible Instance.

After this feature is enabled, if enough preemptible instances cannot be created due to price or inventory constraints, ACK automatically creates pay-as-you-go instances to meet the required number of ECS instances.

**Enable Supplemental Preemptible Instances**

> You must set the Billing Method parameter to Preemptible Instance.

After this feature is enabled, when a system receives a message that preemptible instances are reclaimed, the node pool with auto scaling enabled attempts to create new instances to replace the reclaimed preemptible ones.

**Scaling Mode**

> You must enble **Node Scaling** on the **Node Pools** page and set the **Scaling Mode** of the node pool to **Auto**.

-   **Standard**: Auto scaling is implemented by creating and releasing ECS instances.
    
-   **Swift**: Auto scaling is implemented by creating, stopping, and starting ECS instances. Those in the stopped state can be directly restarted to accelerate scaling.
    
    When an ECS instance is stopped, only disk fees are charged. Computing fees are not charged. This rule does not apply to instance families that use local disks, such as big data and local SSDs instance families. For more information about the billing rules and limits of the economical mode, see [Economical mode](/help/en/ecs/user-guide/economical-mode).
    

**Taints**

After you add taints to a node, ACK no longer schedules pods to it.

## Step 3: (Optional) Verify node auto scaling

After you complete the preceding configuration, you can use the node auto scaling feature. The node pool displays that auto scaling is enabled and cluster-autoscaler is installed in the cluster.

### Auto scaling is enabled for the node pool

The **Node Pools** page displays node pools with auto scaling enabled.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0210722471/p928979.png)

### cluster-autoscaler is installed

1.  In the left-side navigation pane of the details page, choose **Workloads** > **Deployments**.
    
2.  Select the kube-system namespace. The cluster-autoscaler component is displayed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0210722471/p929002.png)
    

## FAQs

**Category**

**Subcategory**

**Issue**

Scaling behavior of node auto scaling

[Known limitations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#0578d5906a4ve)

[Scale-out behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#3d73c9bce2x1y)

-   [What scheduling policies does cluster-autoscaler use to determine whether unschedulable pods can be scheduled to a node pool for which node auto scaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5e458ca0fdeyz)
    
-   [What resources can cluster-autoscaler simulate?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9081e1305c7f2)
    
-   [Why does cluster-autoscaler fail to add nodes after a scale-out activity is triggered?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4bd69dc0fda87)
    
-   [How does cluster-autoscaler evaluate the resource capacity of a scaling group that uses multiple types of instances?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#29a70230fdx9t)
    
-   [How do I choose between multiple node pools for which auto scaling is enabled when I perform a scaling activity?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#5679b320fde95)
    
-   [How do I add custom resources to node pools for which auto-scaling is enabled?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#fff85a7068y34)
    
-   [Why does the configuration of auto scaling for a node pool fail?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#3bdd2091cber0)
    

[Scale-in behavior](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#d965c40777nu9)

-   [Why does cluster-autoscaler fail to remove nodes after a scale-in activity is triggered?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#51d75430fdnp3)
    
-   [How do I enable or disable pod eviction for a DaemonSet pod?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-kg5-cli-y3i)
    
-   [What types of pods can prevent cluster-autoscaler from removing nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4000d01068gao)
    

[Extended support](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#4d35a60fc8vqv)

[Does cluster-autoscaler support CRD?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#b5fff6905c7fv)

Custom scaling behavior

[Use pods to manage scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c3186b2465my5)

-   [How do I set a scale-out delay in cluster-autoscaler for unschedulable pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#c7d74de068d5w)
    

[Use nodes to manage scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9008f67409m0b)

-   [How do I prevent cluster-autoscaler from removing nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#9197847068xlh)
    
-   [How do I use pod annotations to allow cluster-autoscaler to remove the node that hosts the pod or prevent cluster-autoscaler from removing the node that hosts the pod?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#section-mwn-b6z-apt)
    

Questions related to cluster-autoscaler

-   [How do I update cluster-autoscaler to the latest version?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#bb7882f068f94)
    
-   [What operations can trigger the system to automatically update cluster-autoscaler?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#60a012b0effpp)
    
-   [Why does node scaling still fail after I complete role authorization in the ACK managed cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-auto-scaling#cfae8542e6jyf)
    

## References

If your cluster is large, your cluster requires faster resource scaling, or you require auto scaling across multiple instance types and zones, we recommend that you use the node instant scaling feature. A cluster is considered large if a node pool that has auto scaling enabled in the cluster contains more than 100 nodes or more than 20 node pools in the cluster have auto scaling enabled. For more information, see [Enable node instant scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/instant-elasticity).
