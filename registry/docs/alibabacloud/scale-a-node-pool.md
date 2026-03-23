Adjust the expected number of nodes in a node pool to scale out for more capacity or scale in to reduce costs. The node pool automatically adds or removes nodes to match the target count.

**Note**

ACK also supports autoscaling. To automatically scale node resources based on workload demand, see [Node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/).

## Prerequisites

Before you begin, make sure that you have:

-   An ACK managed or dedicated cluster with at least one node pool
    
-   A security group that allows access to `100.64.0.0/10` (required for scale-out; otherwise, new nodes cannot join the cluster)
    

**Important**

Do not manage node pool nodes outside the ACK console:

-   Running `kubectl delete node` does not release the underlying ECS instance. The node pool still counts the instance toward its expected number, and the node appears as **Unknown**.
    
-   Releasing an ECS instance from the ECS console or through an API call triggers the node pool to automatically create a replacement instance to maintain the expected count, which can cause unexpected costs.
    
-   Modifying the Auto Scaling group directly (removing instances, enabling health checks) can cause the node pool to behave unpredictably. To remove nodes, use the ACK console. For details, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node).
    

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  In the **Actions** column for the target node pool, click **Scale** and set **Scaling Mode** to **Manual**.
    
4.  (Optional) If prompted to authorize the CloudOps Orchestration Service (OOS), create the `AliyunOOSLifecycleHook4CSRole` role:
    
    -   **Alibaba Cloud account**: Click [AliyunOOSLifecycleHook4CSRole](https://ram.console.alibabacloud.com/role/authorize?spm=5176.2020520152.0.0.5b4716ddI6QevL&request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fram.console.alibabacloud.com%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunOOSLifecycleHook4CSRole%22%2C%22TemplateId%22%3A%22AliyunOOSLifecycleHook4CSRole%22%7D%5D%2C%22Service%22%3A%22OOS%22%7D%5D%7D) to grant the required permissions.
        
    -   **RAM user**: Verify that your Alibaba Cloud account has the `AliyunOOSLifecycleHook4CSRole` role assigned, then attach the `AliyunRAMReadOnlyAccess` policy to the RAM user. For details, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        
5.  Enter a value for **Expected Nodes** and submit the configuration.
    

### Verify the result

After submission, the node pool status changes to **Updating**, followed by **Scaling Out** or **Removing Node**.

-   **Scale-out**: The **Status** column shows **Scaling Out** while nodes are being added. When the status returns to **Active**, the scale-out is complete.
    
-   **Scale-in**: The **Status** column shows **Removing** while nodes are being removed. When the status returns to **Active**, the scale-in is complete.
    

## How scaling works

The expected number of nodes is the target count that the node pool maintains. When you change this value, the node pool automatically triggers a scale-out or scale-in operation to reach the target.

### Scale-out

When the expected count exceeds the current node count, the node pool creates new nodes in two steps:

1.  **Create ECS instances**: ACK uses Auto Scaling as the underlying service. After you adjust the expected count, ACK updates the scaling group and provisions new ECS instances based on the node pool configuration. The node pool status changes from **Scaling Out** to **Active** when the instances are created. For more information about the expected number of instances, see [Expected number of instances](/help/en/auto-scaling/user-guide/expected-number-of-instances).
    
2.  **Add nodes to the cluster**: Each new ECS instance runs the `cloud-init` script (maintained by ACK) to initialize itself and join the node pool. Execution logs are saved to `/var/log/messages` on the node.
    
    **Note**
    
    If the node joins the cluster successfully, the log entries in `/var/log/messages` are automatically purged. The logs are only available for troubleshooting failed joins. If a node fails to join, key information from the log is extracted and displayed on the **Cluster Tasks** tab. Click **View Cause** for details.
    

The instance type and zone of new nodes are determined by the [scaling policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). If a node fails to be added, the system automatically retries until the expected count is reached.

**Important**

ECS Bare Metal GPU instances (instance families ebmgn7 and ebmgn7e) do not support automatic multi-instance GPU (MIG) cleanup. ACK resets existing MIG settings when adding these nodes, and the reset duration is unpredictable. If the reset takes too long, automatic node addition may fail.

-   To troubleshoot, see [What do I do if adding an ECS Bare Metal instance node fails?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq#section-htv-zt0-oxz)
    
-   For more information about ebmgn7e, see [GPU-accelerated compute-optimized instance families](/help/en/egs/gpu-accelerated-compute-optimized-instance-families).
    

### Scale-in

When the expected count is lower than the current node count, the node pool removes nodes. Which nodes are removed depends on the scaling policy:

**Scaling policy**

**Behavior**

**Priority**

Removes the most recently created instances first.

**Distribution Balancing**

Selects instances by zone using a balanced release policy, then removes the most recently created instances. This keeps instance counts roughly equal across zones.

**Cost Optimization**

Removes instances with the highest vCPU unit prices first.

**Important**

When scaling in by changing the expected number of nodes, nodes are removed even if the drain operation fails. If draining nodes before removal is required, remove specific nodes instead. For details, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node).

### Scale-in considerations

-   **Subscription instances are not released** during scale-in. To release them, log on to the [ECS console](https://ecs.console.alibabacloud.com), convert the subscription instances to pay-as-you-go, and then release them. For details, see [Convert a subscription instance to a pay-as-you-go instance](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).
    
-   **Disks are released with the node.** The system disk and data disks share the node lifecycle. When a node is released, all disk data is permanently lost and cannot be recovered. To persist data across node removals, use a PersistentVolume (PV) to decouple storage from the node lifecycle.
    

### Billing

During a scale-out, costs are based on the instance types created. The cost for a billing period is calculated as:

`Unit price of instance type x Number of nodes x Billing duration`

For example, if a node pool uses two instance types with pay-as-you-go billing and the **Priority** scaling policy, a scale-out might create 2 Node A instances in the first-priority zone and 3 Node B instances in the second-priority zone (if Node A resources are insufficient). The hourly cost is:

`Unit price of Node A x 2 x 1 + Unit price of Node B x 3 x 1`

## Operations to avoid

The expected number of nodes is based on the number of ECS instances in the Auto Scaling group, not the number of nodes in the Kubernetes cluster. Operations performed outside the ACK console can cause the node pool to behave unexpectedly.

**Important**

Do not perform any of the following operations.

**Operation**

**Node pool behavior**

**Recommended action**

Run `kubectl delete node` to remove a node.

The ECS instance is not released. The node count does not change, but the node appears as **Unknown** in the node pool.

On the node pool page, click the node pool name. On the **Nodes** tab, remove the node. You do not need to select **Drain Node** because the node is already removed from the cluster. Choose whether to select **Release ECS Instance**. Manually added nodes and subscription nodes are not automatically released. Manage them in the [ECS console](https://ecs.console.alibabacloud.com).

Release an ECS instance from the [ECS console](https://ecs.console.alibabacloud.com) or through an API call.

The node pool detects the release and automatically creates a replacement instance to maintain the expected count.

Use the ACK console to remove nodes. Automatic replacement can cause unexpected costs. For details, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node). Manually added and subscription nodes are not automatically released.

Remove an ECS instance from the Auto Scaling group without changing the expected count.

The node pool creates a replacement instance to maintain the expected count.

Do not directly manage the scaling group associated with the node pool.

A subscription ECS instance expires and is released.

The node pool creates a replacement instance, which can cause unexpected costs.

Handle expiring instances promptly: either [remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node) or [renew the subscription](/help/en/ecs/manually-renew-an-instance-1).

Enable health checks for the Auto Scaling group from the [Auto Scaling console](https://ess.console.alibabacloud.com/) or through an API call.

A new ECS instance is created automatically whenever an unhealthy instance (such as a stopped instance) is detected.

By default, ACK does not enable Auto Scaling health checks. Do not directly manage the Auto Scaling group of a node pool.

## Scale-out error codes

If a scale-out fails, click the cluster name on the **Clusters** page, then click **View Cause** on the **Cluster Tasks** tab.

### Instance stock and compatibility errors

**Error code**

**Cause**

**Solution**

RecommendEmpty.InstanceTypeNoStock

ECS instance inventory in the current zone is insufficient.

[Edit the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#9cff721669kc3) to add vSwitches in different zones and configure multiple instance types. For more information, see [View the elastic strength of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754).

OperationDenied.NoStock

The selected instance type is out of stock in the specified zone.

Change the instance types in the node pool configuration. For more information, see [View the elastic strength of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754).

InvalidResourceType.NotSupported

The instance type is not supported or is unavailable in the zone.

Call the [DescribeAvailableResource](https://next.api.aliyun.com/api/Ecs/2014-05-26/DescribeAvailableResource?lang=JAVA) operation to check instance type availability, then modify the instance type.

RecommendEmpty.DiskTypeNoStock

Disk inventory in the specified zone is insufficient.

Add more zones (vSwitches) to the node pool, or change the disk type.

RecommendEmpty.InstanceTypeNotAuthorized

The instance type requires authorization before use.

[submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to ECS to request authorization.

### Image and instance type compatibility errors

**Error code**

**Cause**

**Solution**

InvalidParameter.NotMatch (Image bootMode)

The boot mode of the OS image is not compatible with the instance type.

Change the instance type. Click **Details** for the node pool to view the operating system and image ID on the **Overview** tab. Call [DescribeImageSupportInstanceTypes](https://next.api.aliyun.com/api/Ecs/2014-05-26/DescribeImageSupportInstanceTypes) to check compatible instance types. For supported images, see [Operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).

InvalidImage.NotSupported

The OS image does not support security-enhanced (vSGX) instances.

Change the instance type. For supported images, see [Create a security-enhanced instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance).

InvalidParameter.NotMatch (vTPM image)

The OS image does not support the security-enhanced instance family.

Change the instance type. For supported images, see [Create a security-enhanced instance](/help/en/ecs/user-guide/create-a-security-enhanced-instance).

InvalidInstanceType.NotSupported

The instance type is not compatible with the OS image architecture.

Change the instance type. Click **Details** for the node pool to view the operating system and image ID on the **Overview** tab. For supported images, see [Operating system](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/#task-2286366).

### Disk and encryption errors

**Error code**

**Cause**

**Solution**

InvalidParameter.Conflict

The instance type does not support the specified disk category.

Change the instance type or disk type.

NotSupportSnapshotEncrypted.DiskCategory

System disk encryption is supported only for Enhanced SSDs (ESSDs).

Select a supported disk type. For details, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

InvalidParameter.KmsNotEnabled

The specified KMS key is not enabled.

Check the key status in the [Key Management Service (KMS) console](https://yundun.console.alibabacloud.com/?p=kms).

InvalidParameter.KMSKeyId.KMSUnauthorized

ECS is not authorized to access KMS.

Grant ECS the `AliyunECSDiskEncryptDefaultRole` service role in the [ECS console](https://ecs.console.alibabacloud.com). For details, see [Permissions for encryption](/help/en/ecs/user-guide/encryption-related-permissions).

### Quota and billing errors

**Error code**

**Cause**

**Solution**

QuotaExceed.ElasticQuota

The number of instances of the selected type exceeds your quota in the region.

Select other instance types, reduce the current instance count, or request a quota increase in the [Quota Center](https://quotas.console.alibabacloud.com/products/ecs-spec/quotas).

QuotaExceeded.PrivateIpAddress

The vSwitch has insufficient available private IP addresses.

Add more vSwitches to the node pool.

InvalidAccountStatus.NotEnoughBalance

Insufficient account balance.

Add funds to your account.

InsufficientBalance.CreditPay

Insufficient account balance.

Add funds to your account.

Account.Arrearage

Insufficient account balance.

Add funds to your account.

### Cluster and API server errors

**Error code**

**Cause**

**Solution**

NodepoolScaleFailed.FailedJoinCluster

The node failed to join the ACK cluster.

Log on to the node and run `grep cloud-init /var/log/messages` to view the execution log.

ApiServer.InternalError

The cluster API server is inaccessible.

Check whether the API server is available. For details, see [Troubleshoot cluster access issues](/help/en/ack/ack-managed-and-ack-dedicated/support/ack-console-troubleshooting-cluster-access-exceptions).

Err.QueryEndpoints

API server access failed.

Check whether the API server is available. For details, see [Troubleshoot cluster access issues](/help/en/ack/ack-managed-and-ack-dedicated/support/ack-console-troubleshooting-cluster-access-exceptions).

ApiServer.TooManyRequests

The API server is throttling the scale-out job.

Reduce the number of requests to the API server or retry later.

### Scaling activity errors

**Error code**

**Cause**

**Solution**

ScalingActivityInProgress

The node pool is already undergoing a scaling activity.

Wait for the current activity to finish. Do not scale nodes directly from the Auto Scaling console.

Instance.StartInstanceFailed

The ECS instance failed to start.

Try the operation again later. If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to ECS.

NodepoolScaleFailed.WaitForDesiredSizeTimeout

The scale-out task timed out.

View the scaling activity details: in the ACK console, click **Clusters**, find the cluster, and click its name. Choose **Nodes** > **Node Pools**, then click the node pool name. Check the **Scaling Activities** tab for details.

NodepoolScaleFailed.PartialSuccess

Some nodes were created, but others failed due to insufficient inventory.

Select different instance types and retry. For more information, see [View the elastic strength of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754).

## References

-   [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11)
    
-   [Node pool O&M](/help/en/doc-detail/476578.html): upgrade node pools, enable automatic node recovery, and fix OS CVEs
    
-   [Best practices for nodes and node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-nodes-and-node-pools/): use deployment sets for high availability or create node pools from spot instances
