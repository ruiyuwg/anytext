You can add existing Elastic Compute Service (ECS) instances to a cluster as worker nodes or add removed worker nodes back to a node pool. This lets you quickly reuse computing resources without interrupting existing services in the cluster.

ACK provides automatic and manual methods to add nodes. The billing method and instance type of an instance remain unchanged after the instance is added.

**Item**

**Automatic addition**

**Manual addition**

OS reset

Resets and initializes the instance's operating system based on the current node pool configuration.

-   The original system disk is released, and its data is lost.
    
-   Manual snapshots of the system disk are retained, but the retention of automatic snapshots depends on whether the **Release Automatic Snapshots With Disk** option is configured.
    
    > Log on to the [ECS console](https://ecs.console.alibabacloud.com) and see [Set automatic snapshots to be released with disks](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#1abb5dfb98d4a) to configure this setting.
    
-   The original data disks are not released. The data on them is not affected, but their disk IDs change.
    

Keeps the instance's original operating system, which provides more flexibility.

Scenarios

Use this method when you want the instance to match the node pool configuration for standardized management.

Use this method when you need to keep the instance's existing operating system or specific configurations.

## Limits

Before you start, make sure that your environment and instance meet the following conditions.

**Category**

**Limit**

**Description**

Instance and node pool

Cluster node quota

The total number of nodes in the cluster cannot exceed the [quota](/help/en/ack/product-overview/limits#concept-gsf-w2b-5db). To increase the quota, go to [Quota Center](https://quotas.console.alibabacloud.com/products/csk/quotas).

> The default node quota for an ACK managed cluster of the Basic Edition is 10.

Instance ownership

The instance and the cluster must be under the same account, in the same region, and within the same VPC. If not, [migrate the instance](/help/en/ecs/user-guide/migrate-servers#cb734f2deexbc) or create a new instance or cluster that meets these requirements.

> You cannot add an ECS instance from the other end of a VPC peering connection.

Cluster ownership

You cannot add an instance that already belongs to another ACK cluster. First, [remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) from the original cluster, and then add it to the new cluster.

Auto Scaling group (ESS) ownership

You cannot add an instance that already belongs to another [scaling group](/help/en/auto-scaling/user-guide/scaling-group-overview). [Manually remove the instance from the scaling group](/help/en/auto-scaling/user-guide/manually-manage-instances-in-a-scaling-group#section-h4y-ful-knr) and retry.

Node pool type

-   You cannot add existing nodes to an [Auto Mode node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#a1c996ce1cjsg).
    
-   You cannot add existing nodes to a [node pool that has Auto Scaling enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/). After you add an existing node to a node pool, you cannot enable Auto Scaling for that node pool.
    

Operating system

-   The operating system cannot have Swap enabled.
    
-   When you add a node manually, you cannot add instances that run [Windows or ContainerOS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/).
    

Instance type

-   The instance must not be of an [unsupported ECS instance type](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster#1d1c2669e28pa).
    
-   For ECS Bare Metal GPU-accelerated instances (instance families [ebmgn7](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-esc-xnn-7aa) and [ebmgn7e](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-dem-yjl-04w)), automatic multi-instance GPU (MIG) cleanup is not supported. When you add this type of instance, the existing MIG settings are reset. The reset process may take a long time and cause the automatic addition to fail.
    
    > For troubleshooting, see [What do I do if adding a bare metal instance node fails?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq#section-htv-zt0-oxz).
    

Network

API Server access

The instance's IP address must be in the API Server access whitelist. Otherwise, the instance cannot communicate with the control plane. For more information, see [Configure access control policies for the API Server](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-acls-for-the-api-server-of-an-ack-cluster).

Security group

-   Type consistency: The security group type of the instance (basic or advanced security group) must be the same as the node pool's security group type.
    
-   Rule compatibility: The instance's security group must allow access to the API Server's internal network address and port 6443. Its rules must not conflict with the security group rules of the cluster and node pool.
    
    > You can view the API Server's internal network address on the **Basic Information** tab of the **Cluster Information** page.
    
-   Quota limit: The number of security groups an instance can join must not exceed the [security group quota](/help/en/ecs/user-guide/limitations#SecurityGroupQuota).
    

To change the instance's security group type or add the instance to the node pool's security group in advance, see [Associate a security group with an instance (primary ENI)](/help/en/ecs/user-guide/manage-ecs-instances-in-security-groups). To increase the security group quota, see [View or increase Elastic Compute Service quotas](/help/en/ecs/user-guide/quota-management#d0b67f9cc7r0l).

Terway - Maximum pods

The maximum number of pods that the instance supports must meet the following conditions:

> The maximum number of pods supported in different ENI modes depends on the maximum number of ENIs the instance supports. For the calculation method, see [How to calculate the pod quota for a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#99aa011b071mr).

-   [Shared ENI mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#9909637f6e34h): The maximum number of supported pods must be greater than 10.
    
-   [Exclusive ENI mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#9909637f6e34h): The maximum number of supported pods must be greater than 5.
    

If these conditions are not met, [upgrade or downgrade the node resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node) or [purchase a new instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).

Terway - vSwitch configuration

If the instance and the node pool are in different zones, you must update the Terway vSwitch configuration. Otherwise, Terway allocates pod IPs from the vSwitch of the node's primary ENI, which may cause pod IP allocation to fail. For more information, see [Modify the vSwitch for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/increase-pod-vswitches-in-a-terway-cluster#task-2035206).

Terway - ENI

When you add an instance, its attached ENIs are retained. Pod IPs are allocated from the vSwitches associated with these ENIs. Make sure the instance has only one primary network interface card (ENI).

If a pod IP does not belong to a configured vSwitch, [remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) from the cluster, delete all secondary ENIs, and then add the node back to the cluster.

Terway - Worker RAM role

The instance to be added must be attached to the node pool's Worker RAM role. This prevents permission issues that could lead to incorrect calculation of the maximum available pods (MaxPod).

> On the **Node Pools** page, click the node pool name and view the Worker RAM role on the **Overview** tab. To grant the RAM role, see [Grant a RAM role to an ECS instance](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#3e423be01e9yb).

Terway - IPv6 dual-stack

If the cluster has IPv6 dual-stack enabled, you must assign an IPv6 address to the instance's primary ENI. For more information, see [IPv6 communication](/help/en/ecs/user-guide/step-1-create-a-vpc-that-supports-ipv6-addressing-step-1-create-a-vpc-that-supports-ipv6-addressing).

Flannel

The number of custom route entries in the system route table of the cluster's VPC cannot exceed the [route table quota](/help/en/vpc/understanding-vpc-quotas-in-alibaba-cloud#dc0e1fd7fbw8i). To adjust the quota, go to [Quota Center](https://quotas.console.alibabacloud.com/products/vpc/quotas?query=vpc_quota_route_entrys_num).

## Precautions

-   Data backup: Before you start, [create snapshots](/help/en/ecs/user-guide/create-a-snapshot) to back up the system disk and data disks of the instance to prevent data loss.
    
    To ensure that you have a sufficient [snapshot quota](/help/en/ecs/user-guide/limitations#SnapshotQuota), delete any unneeded manual and automatic snapshots before you create new ones.
    
-   Instance release and billing: If you add an instance to a node pool that does not automatically manage the number of nodes, the instance is not automatically released when you delete the cluster or node pool. You must [remove the nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) manually. Monitor the ECS [billing](/help/en/ecs/billing-overview) status to avoid incurring extra charges.
    

## Procedure

> Time required: The node addition process involves replacing the system disk (for automatic addition only) and initializing the node. This process takes about 5 minutes. The actual time may vary based on factors such as network conditions and operating system size.

Adding an existing node does not affect existing nodes and applications in the cluster. To avoid compatibility issues, do not initialize an ECS instance that is already running services as a worker node.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the **Node Pools** page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235326571/p931339.png) in the **Actions** column of the target node pool, and then click **Add Existing Node**.
    
    > If the destination ECS instance is not in the list of cloud servers, it does not meet the conditions to be added to the cluster. You can select **Show Unavailable Instances** to view the unavailable ECS instances and the reasons why they are unavailable. For more information about the reasons, see the [Limits](#section-474-2oi-4ig) and [Precautions](#section-rhp-xuk-319) sections in this topic.
    
4.  Read the on-screen precautions carefully, and then select a method to add the node.
    

## Add a node manually

This method requires you to obtain an installation command and run it on the instance. You can add only one ECS instance at a time.

1.  Set **Method** to **Manual**, select the ECS instance to add from the list of existing cloud servers, and then click **Next Step**.
    
2.  On the **Specify Instance Information** page, confirm the cluster and instance information as prompted. Configure the data disk and instance name, and then click **Next Step**. Follow the on-screen instructions to complete the process.
    
    **Configuration item**
    
    **Description**
    
    **Data Disk**
    
    Specifies whether to store container and image data on a data disk. This separates the system disk from data disks and improves stability.
    
    -   If the ECS instance already has a data disk attached, and the file system of the last data disk is not initialized, ACK automatically formats the last data disk to the ext4 file system. This disk is then used exclusively for /var/lib/containerd or /var/lib/docker (the default data directory for the container runtime) and /var/lib/kubelet (the default data directory for the kubelet component).
        
        **Important**
        
        -   The original data on the formatted data disk will be lost. [Create a snapshot](/help/en/ecs/user-guide/snapshot-overview) to back up the data first.
            
        -   If you want to store containers and images on a data disk, only the ext4 and xfs file systems are supported.
            
        
    -   If the ECS instance does not have a data disk attached, ACK will not automatically attach a new data disk, regardless of whether you select this option.
        
    
    **Retain Instance Name**
    
    -   Enabled: Uses the instance name as the node name.
        
    -   Disabled: ACK renames the node according to the rule specified for custom node names.
        
    
3.  On the **Complete** page, copy the node access command that ACK automatically generates for later use, and then click **Done**.
    
4.  Log on to the [ECS console](https://ecs.console.alibabacloud.com). In the navigation pane on the left, click **Instances & Images** > **Instances**. Select the region where the cluster is located, and then select the destination instance.
    
5.  Click **Connect** for the destination instance. Select a [remote connection method](/help/en/ecs/user-guide/connect-to-instance) and connect to the ECS instance.
    
6.  Follow the on-screen instructions to run the script that you copied in step [3](#1b29ef22bed4y). This automatically configures the instance and adds it to the cluster.
    
    After the script runs successfully, a message is displayed to indicate that the node is added. Wait for the node to initialize. The status of the node changes to Ready in the node list after the node is initialized.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3235326571/p996590.png)
    

## Add a node automatically

You can add an instance automatically from the console.

1.  Set **Method** to **Auto**, select the ECS instances that you want to add from the list of existing cloud servers, and then click **Next Step**.
    
2.  On the **Specify Instance Information** page, confirm the cluster and instance information as prompted. Configure the data disk and instance name, and then click **Next Step**.
    
    **Configuration item**
    
    **Description**
    
    **Data Disk**
    
    Specifies whether to store container and image data on a data disk. This separates the system disk from data disks and improves stability.
    
    -   If the ECS instance already has a data disk attached, and the file system of the last data disk is not initialized, ACK automatically formats the last data disk to the ext4 file system. This disk is then used exclusively for /var/lib/containerd or /var/lib/docker (the default data directory for the container runtime) and /var/lib/kubelet (the default data directory for the kubelet component).
        
        **Important**
        
        -   The original data on the formatted data disk will be lost. [Create a snapshot](/help/en/ecs/user-guide/snapshot-overview) to back up the data first.
            
        -   If you want to store containers and images on a data disk, only the ext4 and xfs file systems are supported.
            
        
    -   If the ECS instance does not have a data disk attached, ACK will not automatically attach a new data disk, regardless of whether you select this option.
        
    
    Logon method and password
    
    If the **Logon Type** for the node pool is set to **Password**, reset the instance password.
    
    **Retain Instance Name**
    
    -   Enabled: Uses the instance name as the node name.
        
    -   Disabled: ACK renames the node according to the rule specified for custom node names.
        
    
3.  In the dialog box that appears, read the precautions carefully, and then click **Confirm**.
    
    After the instance is added, wait for the node to initialize. The status of the node changes to Ready in the node list after the node is initialized.
    

## FAQ

### **Does adding existing nodes affect existing services in the cluster?**

No. Adding an existing node, whether manually or automatically, does not affect existing services in the cluster.

### **After an ECS instance is added to a cluster, will upgrading or downgrading the ECS instance affect cluster services?**

Upgrading or downgrading an ECS instance usually involves actions such as changing the instance type, changing the billing method for public bandwidth, modifying the public bandwidth, or changing the billing method for data disks. For more information, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db). The impact of these operations on an ECS instance varies.

-   Operations that do not require a restart: The impact on your services depends on your specific business requirements.
    
-   Operations that require an ECS instance restart: Operations such as upgrading or downgrading the instance type cause disruptive changes to your services. Before you perform such operations (for example, [upgrade or downgrade node resources](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node)), assess your current workload. You can scale out redundant nodes to handle application pods. Then, drain the node that you want to change and remove it from the scaling group and the ACK cluster. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node).
    
    After the upgrade or downgrade is complete, follow the instructions in this topic to add the node back to the cluster.
    

### **Can I add existing nodes of different instance types to an ACK cluster?**

Yes. ACK lets you manage nodes of multiple instance types in the same node pool. This helps prevent node scale-out failures that are caused by unavailable or out-of-stock instance types. Before you add an ECS instance, make sure that the instance type of the ECS instance is included in the list of instance types that are supported by the node pool. Follow these steps.

1.  Edit or create a node pool and configure the required node specifications. For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
2.  Remove and drain the target node. Do not release the ECS instance when you remove the node. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).
    
3.  Follow the instructions in the [Limits](#section-474-2oi-4ig) and [Procedure](#e66638fe3ch4o) sections of this topic to add ECS instances of different specifications to the node pool.
    

### **How do I move a node across ACK clusters?**

ACK does not allow you to directly move nodes across clusters. However, you can move a node by removing it from the source cluster and then adding it to the destination cluster. Follow these steps.

1.  Remove and drain the target node from the source cluster. Do not release the ECS instance when you remove the node. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).
    
2.  Follow the instructions in the [Limits](#section-474-2oi-4ig) and [Procedure](#e66638fe3ch4o) sections of this topic to add the target ECS instance to a node pool in the destination cluster.
    

### **Can an ECS instance with an ACK EOL operating system be added to a node pool?**

-   Manual addition: You can manually add an existing instance that runs an unsupported operating system to a node pool. However, make sure that the OS version of the instance is compatible with the current cluster version. For more information, see [Operating systems](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-os-images/).
    
    > For example, CentOS 7 and Alibaba Cloud Linux 2 are supported only in clusters that run Kubernetes 1.30 or earlier.
    
-   Automatic addition: Yes. ACK uses the operating system image specified in the node pool configuration to initialize the instance.
    

### **When you add an existing node, is its custom User Data overwritten by the User Data of the node pool?**

Whether the User Data of the original instance is overwritten depends on the addition method.

-   Automatic addition: ACK initializes the system disk. The User Data of the original instance is overwritten by the User Data configuration of the node pool.
    
-   Manual addition: The User Data of the original instance is not overwritten. After the instance is added to the node pool, the instance continues to use its original User Data.
    

### **What do I do if adding an existing node fails with a timeout error?**

1.  **Check connectivity**: Ensure the node has network access to the API server Classic Load Balancer (CLB) instance.
    
2.  **Security groups**: Verify that the Security Group rules allow the required traffic. Refer to the [Security group limits](#section-474-2oi-4ig) for adding existing nodes.
    
3.  **General networking**: For more complex issues, see [Network management FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management).
    

### **Does the desired number of nodes in the node pool change automatically after I add an existing node?**

After you add an existing node, the desired number of nodes automatically increases by the number of nodes added. For example, if the **Expected Nodes** for a node pool is 5 and you add one ECS instance to the node pool, the **Expected Nodes** for the node pool automatically changes to 6.

## References

-   In addition to the console, you can add an ECS instance to an ACK cluster by calling the OpenAPI or using the command-line interface (CLI). For more information, see [Query scripts for adding existing nodes to a cluster node pool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-manually-add-an-existing-instance-to-a-specified-node-pool) and [Add an existing ECS instance](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/add-an-existing-ecs-instance).
    
-   Older clusters that were created before the node pool feature was available may have stray nodes. Stray nodes are cluster nodes that do not belong to any node pool. You can manage these nodes in a node pool. For more information, see [Migrate stray nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).
    
-   If a node, pod, or other component is abnormal, see [Troubleshoot abnormal nodes](/help/en/ack/ack-managed-and-ack-dedicated/support/node-troubleshooting-2), [Troubleshoot pod anomalies](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#section-qv2-yd8-1eg), and [Node and node pool FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-node-management) to troubleshoot the issue.
