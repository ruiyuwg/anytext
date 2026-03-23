Node pools are logical collections of nodes with identical attributes such as instance specifications, operating systems, and labels. ACK supports creating multiple node pools with different configurations for unified node management.

> Before creating a node pool, see [Node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/) to understand node pool basics, use cases, features, and billing.

## **Access entry**

Create, edit, delete, and view node pools on the **Node Pools** page.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    

On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.

## Create a node pool

Configure node pool settings in the console including basic, network, and storage configurations. Some parameters especially network-related ones cannot be modified after creation.

**Note**

Besides the console, ACK also supports creating node pools via [CreateClusterNodePool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool) and [Use Terraform to create a node pool that has auto scaling enabled](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/use-terraform-to-create-an-auto-scaling-node-pool).

1.  On the **Node Pools** page, click **Create Node Pool**. In the **Create Node Pool** dialog, configure the parameters.
    
    After creation, you can modify configuration items on the **Edit Node Pool** page. In the table below, ![Not modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png) indicates not modifiable, ![Modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates modifiable.
    
    ### Basic configuration
    
    **Parameter**
    
    **Description**
    
    **Modifiable**
    
    **Node Pool Name**
    
    Specify a node pool name.
    
    ![Modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)
    
    **Confidential Computing**
    
    **Note**
    
    -   Currently only whitelisted users can configure confidential computing. Please [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for whitelist access.
        
    -   This parameter is required only when **Container Runtime** is set to containerd.
        
    
    Specify whether to enable **Confidential Computing**. Confidential computing is a cloud-native confidential computing container platform based on hardware encryption technologies for users with high security requirements. For more information, see [ACK TEE-based confidential computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/tee-based-confidential-computing/#task-2490003).
    
    ![Not modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)
    
    **Container Runtime**
    
    Specify the **Container Runtime** based on the Kubernetes version. For more information about how to select a container runtime, see [Comparison among containerd, Sandboxed-Container, and Docker](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-of-docker-containerd-and-sandboxed-container#task-2455499).
    
    -   containerd (recommended): supports all Kubernetes versions.
        
    -   Sandboxed-Container: supports Kubernetes 1.31 and earlier.
        
    -   Docker (deprecated): supports Kubernetes 1.22 and earlier.
        
    
    ![Not modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)
    
    **Scaling Mode**
    
    Manual and Auto scalings are supported. Computing resources are automatically adjusted as needed and policies to reduce cluster costs.
    
    -   **Manual**: ACK adjusts the number of nodes in the node pool based on the value of the **Expected Nodes** parameter. The number of nodes is always the same as the value of the **Expected Nodes** parameter. For more information, see [Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool).
        
    -   **Auto**: When the capacity planning of the cluster cannot meet the requirements of pod scheduling, ACK automatically scales out nodes based on the configured minimum and maximum number of instances. By default, node instant scaling is enabled for clusters running Kubernetes 1.24 and later, and node autoscaling is enabled for clusters running Kubernetes versions earlier than 1.24. For more information, see [Node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/).
        
    
    ![Modifiable](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)
    
    ### **Managed configuration**
    
    ACK provides three managed configuration types that enable different levels of automated [operations and maintenance (O&M)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#807e154b6au5m) for node pools.
    
    -   **Intelligent Hosting**: ACK automatically scales based on workload demands and handles OS upgrades, software updates, and security fixes.
        
        > Available only in [clusters with intelligent hosting enabled](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-ack-managed-clusters-in-automode).
        
    -   **Managed Node Pool**: Select required automated O&M capabilities and maintenance window.
        
        **Expand to view related configurations**
        
        **Parameter**
        
        **Description**
        
        **Modifiable**
        
        **Enable Auto Scaling**
        
        > This parameter is available after you select Enable for the managed node pool feature.
        
        After you select this option, ACK automatically monitors the status of nodes in the node pool. When exceptions occur on a node, ACK automatically runs auto repair tasks on the node. If you select **Restart Faulty Node**, ACK may perform node draining and system disk replacement on faulty nodes. For more information about the conditions that trigger auto repair and auto repair events, see [Enable auto repair for nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-repair).
        
        ✓
        
        **Maintenance Window**
        
        > This parameter is available after you select Enable for the managed node pool feature.
        
        After you select this option, the system automatically updates the kubelet when a new version is available. For more information, see [Update a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
        
        ✓
        
        **Auto Upgrade**
        
        > This parameter is available after you select Enable for the managed node pool feature.
        
        You can configure ACK to automatically patch high-risk, medium-risk, and low-risk vulnerabilities. For more information, see [Patch OS CVE vulnerabilities for node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cve-patching).
        
        Some patches take effect only after you restart the servers. After you enable **Restart Nodes If Necessary To Patch CVE Vulnerabilities**, ACK automatically restarts nodes on demand. If you do not select this option, you must manually restart nodes after the patches are applied.
        
        ✓
        
    -   **No Automation**: Manual node and node pool operations without automation.
        

## Edit node pool

After creation, some configurations can be modified through the console. Updates only apply to new nodes, not existing ones.

**Important**

-   Except for special cases (like synchronizing existing node labels), configuration updates don't modify existing node configurations.
    
-   When switching scaling modes: Manual→Auto requires setting min/max instances; Auto→Manual sets min to 0 and max to 2000.
    

1.  In the node pool list, click **Edit** in the **Actions** column for the target node pool.
    
2.  Modify configuration in the edit dialog and save. Node pool **Status** shows **Updating** during changes and **Active** when complete.
    

## View node pool

View node pool basic information, monitoring data, node details, and scaling activity records.

Click the node pool name to view details.

## Delete node pool

**Important**

Deleting releases pay-as-you-go nodes and removes all nodes. Subscription nodes must be released separately. Proceed with caution.

**Node pool type**

**Release rules**

With desired node count enabled

-   Pay-as-you-go nodes released with node pool deletion
    
-   Subscription nodes must be manually converted to pay-as-you-go then released
    

Without desired node count enabled

-   Only auto-added nodes are released; manually added and subscription nodes are retained
    

1.  (Optional) Click the node pool name and check **Desired Node Count** in the **Basic Information** tab.
    
2.  In the **Actions** column, click the menu icon, click **Delete**, then confirm by clicking **OK**.
    
    **Important**
    
    Node system disks and data disks are released with nodes. Data will be permanently lost. Use PersistentVolumes (PV) for persistent storage.
