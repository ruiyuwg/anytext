For large clusters or workloads that demand fast resource delivery, standard node autoscaling may not scale quickly enough. Node Instant Elasticity accelerates node provisioning by triggering ECS instance creation directly when pods are unschedulable, bypassing the traditional autoscaler evaluation cycle.

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed cluster or ACK dedicated cluster running Kubernetes 1.24 or later. To upgrade, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster)
    
-   [Auto Scaling service activated](https://ess.console.alibabacloud.com/?spm=5176.12818093.ProductAndResource--ali--widget-product-recent.dre6.3be916d0JBbHR4#/v3/welcome/)
    
-   vSwitches with enough available IP addresses for the target node pools. Query available IPs with the [DescribeVSwitchAttributes](https://api.alibabacloud.com/api/Vpc/2016-04-28/DescribeVSwitchAttributes) operation. If IPs are insufficient, [add CIDR blocks using a secondary CIDR block](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-a-vswitch-to-a-cluster-based-on-a-secondary-cidr-block)
    

**Important**

During scale-in, subscription instances are removed from the cluster but are not released. Use pay-as-you-go instances to avoid unnecessary costs.

## Compatibility

**Condition**

**Supported**

Node pools with **Scaling Mode** set to **Standard**

Yes

Node pools with **Scaling Mode** set to **Swift**

No

**Note**

If the ACK GOATScaler component version is earlier than v0.5.3, manually delete offline nodes. See [FAQ about Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling).

## Step 1: Enable Node Instant Elasticity

Enable and configure automatic cluster scaling so that the node pool can scale nodes.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click **Enable** next to **Node Scaling**.
    
4.  If this is your first time using automatic cluster scaling, follow the on-screen instructions to activate Auto Scaling and grant the required permissions:
    
    -   **ACK managed clusters:** Grant permissions to the [AliyunCSManagedAutoScalerRole](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22CS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunCSManagedAutoScalerRole%22%2C%22TemplateId%22%3A%22AliyunCSManagedAutoScalerRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fcs.console.alibabacloud.com%2F%22%7D) role.
        
    -   **ACK dedicated clusters:** Grant permissions to the **KubernetesWorkerRole** role and attach the **AliyunCSManagedAutoScalerRolePolicy** system policy.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1110461371/p869927.png)
    
5.  On the **Node Scaling Configuration** page, set **Node Scaling Method** to **Instant Scaling**, configure the scaling parameters, and click **OK**. After configuration, the scaling component automatically triggers a scale-out when pods are unschedulable.
    
    **Note**
    
    To switch from Node Instant Elasticity to [Node Autoscaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes), read the on-screen messages and follow the instructions. This option is available only to users on the whitelist. To request access, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### Basic scaling parameters

**Parameter**

**Description**

**Scale-in Threshold**

The ratio of requested resources to node capacity. A node is scaled in only when both CPU and memory utilization fall below this threshold.

**GPU Scale-in Threshold**

The same threshold for GPU-accelerated instances. A GPU node is scaled in only when CPU, memory, and GPU utilization all fall below this threshold.

**Defer Scale-in For**

The wait time between meeting the scale-in condition and executing the scale-in. Unit: minutes. Default: 10 minutes.

### Advanced scaling parameters

**Parameter**

**Description**

**Pod Termination Timeout**

Maximum time to wait for pods on a node to terminate during scale-in. Unit: seconds.

**Minimum Number of Replicated Pods**

Minimum pod count per ReplicaSet before a node can be scaled in. If the actual replica count is less than this value, the node is not scaled in.

**Evict DaemonSet Pods**

When enabled, DaemonSet pods on a node are evicted during scale-in.

**Skip Nodes Hosting Kube-system Pods**

When enabled, nodes running pods in the kube-system namespace are skipped during scale-in. Does not apply to DaemonSet pods and mirror pods.

## Step 2: Configure a node pool for automatic scaling

Node Instant Elasticity scales nodes only in node pools that have automatic scaling enabled. Configure at least one node pool for automatic scaling:

-   **New node pool:** [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool) with automatic scaling enabled.
    
-   **Existing node pool:** [Edit the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool) to enable automatic scaling.
    

**Note**

Expand the range of available instance types by configuring multiple instance types, specifying instance attributes, or adding multiple zones. This helps maintain sufficient inventory and avoid scale-out failures.

## (Optional) Step 3: Verify the result

### Check that automatic scaling is enabled for the node pool

On the **Node Pools** page, verify that the node pool list shows automatic scaling as enabled.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0210722471/p928979.png)

### Check that the ACK GOATScaler component is installed

1.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, click **Add-ons**.
    
2.  On the **Add-ons** page, find the **ACK GOATScaler** component. Its status should be **Installed**.
    

## Scaling events

Node Instant Elasticity produces the following events. Use them to monitor scaling status.

**Event**

**Object**

**Description**

ProvisionNode

pod

A node scale-out was triggered successfully.

ProvisionNodeFailed

pod

A node scale-out failed.

ResetPod

pod

Unschedulable pods that previously triggered a scale-out are re-added to the scale-out scope.

InstanceInventoryStatusChanged

ACKNodePool

The supply status of an instance type in a zone has changed. Format: `{InstanceType}/{Zone} inventory status changed from {Old Inventory Status} to {New Inventory Status}`. See [View the health status of Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-the-status-of-node-instant-elastic).

## Node and pod identifiers

Node Instant Elasticity maintains the following identifiers on nodes and pods. Do not modify them manually.

### Node labels

**Label**

**Description**

`goatscaler.io/managed:true`

Identifies nodes managed by Node Instant Elasticity. The component periodically checks whether scale-in conditions are met for these nodes.

`k8s.aliyun.com: true`

Same as above.

`goatscaler.io/provision-task-id:{task-id}`

Traces the trigger source for node creation.

### Node taint

**Taint**

**Description**

`goatscaler.io/node-terminating`

Applied to nodes being scaled in by Node Instant Elasticity.

### Pod annotations

**Annotation**

**Description**

`goatscaler.io/provision-task-id`

The task ID of the node scaled out for this pod. Prevents duplicate scale-out triggers.

`goatscaler.io/reschedule-deadline`

The wait period before the pod is re-added to the scale-out scope if it remains unschedulable.

## FAQ

For common questions about scale-out behavior, scale-in behavior, custom scaling, and the Node Instant Elasticity component, see [FAQ about Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-instant-scaling).

## View the health status of Node Instant Elasticity

Node Instant Elasticity dynamically selects instance types and zones based on Elastic Compute Service (ECS) instance inventory. To monitor inventory health and get optimization suggestions for your node pool configuration, check the node pool inventory health ConfigMap.

For more information, see [View the health status of Node Instant Elasticity](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-the-status-of-node-instant-elastic).

## Collect component logs

For ACK managed clusters, collect component logs from the **Control Plane Component Logs** page:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, choose **Operations** > **Log Center**.
    
3.  Click the **Control Plane Component Logs** tab, click **Update Component** in the upper-right corner, and then select the Node Instant Elasticity component. After the update, select the Node Instant Elasticity component from the component drop-down list to view its logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0739349371/p910757.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0739349371/p910761.png)
    

## Upgrade the Node Instant Elasticity component

Upgrade the ACK GOATScaler component regularly to get the latest features and fixes. See [Manage components](/help/en/ack/manage-system-components).

## Skip inventory check for private pool resources

If you use a private pool to guarantee resource supply, enable `SkipInventoryCheck` so that Node Instant Elasticity skips the inventory check and directly uses reserved resources during scale-out.

1.  On the **Clusters** page, find the target cluster and click its name. In the left navigation pane, click **Add-ons**.
    
2.  In the **Core Components** section, find the **ACK GOATScaler** component and click **Configuration**.
    
    **Note**
    
    `SkipInventoryCheck` requires component version v0.3.0-582e405-aliyun or later. Upgrade the component first if needed.
    
3.  Set `SkipInventoryCheck` to `true`.
