This topic provides answers to frequently asked questions (FAQs) regarding nodes and node pools in Alibaba Cloud Container Service for Kubernetes (ACK). It covers common operational tasks, such as modifying pod limits, updating OS images, and troubleshooting node-related timeout issues.

## **Index**

> To diagnose and troubleshoot node issues, see [Troubleshoot node exceptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-troubleshooting).

**Category**

**FAQ**

Node pool creation

-   [How do I create a custom image from an existing ECS instance and use it to create nodes?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#10c6965dab82z)
    
-   [How do I use spot instances in a node pool?](#section-u44-llb-26u)
    
-   [Can I configure different ECS instance types in a single node pool?](#aa324abd97wq8)
    
-   [How do I calculate the maximum number of pods per node?](#e2505ff2c9smw)
    
-   [How do I adjust the pod capacity when a node reaches its pod limit?](#3cf020f6f955c)
    
-   [How do I modify node configurations?](#690ed29330ufy)
    
-   [Can I disable the Expected Nodes feature?](#fb3faa1b8eu9e)
    
-   [What is the difference between a node pool with and without Expected Nodes enabled?](#section-pj2-3w9-yu7)
    
-   [How do I add free nodes to a node pool?](#section-9iz-w6e-f9b)
    

Node pool management

-   Node pool OS image:
    
    [How do I change the OS image of a node pool?](#section-h47-zhm-d9u)
    
-   Node resource reservation:
    
    [How do I view the total CPU and memory of a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-reservation-policy#4cacb91fb7evo)
    
-   Add an existing node:
    
    -   [After an ECS instance is added to a cluster, will upgrading or downgrading the instance affect cluster services?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#p-uex-i57-qnz)
        
    -   [What do I do if adding an existing node fails with a timeout error?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#97bbf7cdc39jh)
        
    -   [Can I add existing nodes of different instance types to an ACK cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#aea9d61beanb0)
        
    -   [How do I move a node across ACK clusters?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#c0be5ec195qas)
        
    -   [Does the expected number of instances for a node pool automatically change after I add an existing node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#b4d16bd136dvr)
        
-   Remove a node:
    
    [What do I do if a node fails to be removed?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11#2ec7dce5a7ygx)
    
-   Customize kubelet configurations for a node pool:
    
    -   [Will my custom configurations be deprecated?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#Igv6G)
        
    -   [How do I use a configuration file to manage kubelet?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#dj1qy)
        
    -   [How do I modify a kubelet parameter that is not on the supported list?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool#T9VHb)
        
-   Customize OS parameters for a node pool:
    
    [Configuration using a configuration file](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-node-pool-os-parameters#T9VHb)
    
-   Node auto-repair:
    
    [What should I do if node auto repair fails?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-repair#p-84o-lyi-lmj)
    
-   [How do I release a specific ECS instance?](#3c6ce447a0g7l)
    
-   [How do I change the hostname of a worker node in an ACK cluster?](#section-cob-uvi-y06)
    
-   [How do I manually upgrade the kernel and NVIDIA drivers on GPU nodes?](#section-i7t-2z5-h3n)
    
-   [How do I fix container startup issues on GPU nodes?](#section-wj1-6cu-gtc)
    
-   [If a cluster with nodes across multiple zones fails, how does the cluster determine the node eviction policy?](#eae0e93205kie)
    
-   [Can I customize the kubelet directory path?](#d665cc2503xa4)
    
-   [Can I mount a data disk to a custom directory in an ACK node pool?](#f31552c7acmbb)
    
-   [How do I modify the maximum number of file descriptors?](#9579e31087956)
    
-   [What do I do if I receive the "UNPROTECTED PRIVATE KEY FILE!" error when I log on to a ContainerOS administrative container?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-administrative-container-of-containeros#p-mi3-pr3-ye2)
    
-   [Why does the console display the source of a node pool as Other Nodes?](#22f153a210s4u)
    
-   [How do I configure network ACLs for the vSwitches used by cluster nodes?](#ccf604f0c7w7q)
    

Node pool upgrades

-   [Does node pool upgrade support version rollback?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#p-19t-w8w-zdt)
    
-   [Are my services affected during an upgrade?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#330a6c5046s3v)
    
-   [How long does each batch upgrade take approximately?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#058bfff046wl1)
    
-   [Will node data be lost during the node upgrade process?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#87ef361046qft)
    
-   [After the node replaces the system disk, will the node's IP address change?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#ab4c8e5046qg4)
    
-   [How to upgrade cluster nodes that do not belong to any node pool?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#6f15c6c0032zi)
    
-   [How to restore data based on snapshots?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates#4aca84a5b8zbv)
    
-   [How do I upgrade the container runtime for worker nodes that do not belong to a node pool?](#540311c841z5p)
    

Adjust available pods on a node

-   [In Terway mode, how do I view the maximum number of pods that use the container network on a node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#304bfc88a4tcg)
    
-   [How do I view the maximum number of pods supported by an existing node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#35a9ffb5eaxir)
    
-   [Why is the number of pods on a node close to the maximum limit right after I created a cluster?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#7688b5e4e5o8y)
    
-   [In Terway mode, can I manually modify the number of ENIs or the total pod quota to increase the pod limit for a single node?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#a4918e78aeolq)
    
-   [Why do nodes with the same CPU and memory specifications have different maximum numbers of pods?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#7a3b7d73fbbem)
    

Migrate node runtime from Docker to containerd

-   [How long does each batch upgrade take?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#fa0f07c145z5t)
    
-   [Are my services affected during an upgrade?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#84559700451wa)
    
-   [Can I roll back the migration from Docker to containerd?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#0f11c0e045vn6)
    
-   [Is node data lost during the migration from Docker to containerd?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#fb01ba40451xk)
    
-   [Does the IP address of a node change after its system disk is replaced?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#671cbef045mh3)
    
-   [How compatible is containerd with Docker?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#a5f9949045iir)
    
-   [What do I do if I previously built images on cluster nodes using Docker and now the runtime is upgraded to containerd?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#a31dfb307erx2)
    
-   [After the node runtime switches from Docker to containerd, what should I do if the Docker directory is not cleaned up and occupies disk space?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/change-the-container-runtime-from-docker-to-containerd#5599686087vob)
    

Virtual nodes

-   [How do I use virtual nodes to achieve high availability for services across zones?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#c0beff1d8feny)
    
-   [Do virtual nodes support GPU resources?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#111529edb2y4b)
    
-   [How do I prioritize scheduling pods to ECS nodes, use virtual nodes for ECI pods when ECS resources are insufficient, and scale in reverse order?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#202dce6bc27rp)
    
-   [What do I do if an HTTPS authentication error occurs when I use a virtual node to pull an image from a self-managed image repository?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#333568ffcabdw)
    
-   [When I create an ECI pod by specifying vCPUs and memory, is the pod billed based on the specified specifications or the actual resource usage?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/virtual-node-faq#2560bf2633hti)
    

## How do I use spot instances in a node pool?

You can use spot instances by creating a new node pool or using the `spot-instance-advisor` command. For details, see [Best practices for spot instance node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-preemptible-instance-based-node-pools#task-2188264).

> To maintain consistency within a node pool, you cannot convert an existing pay-as-you-go or subscription node pool to a spot instance node pool, nor can you convert a spot node pool into other billing types.

## **Can I configure different ECS instance types in a single node pool?**

Yes, you can. To prevent scale-out failures caused by instance unavailability or inventory shortages, we recommend the following strategies:

-   Configure multiple vSwitches for a node pool across different availability zones.
    
-   Select multiple Elastic Compute Service (ECS) instance types or specify instance type based on vCPU and memory specifications.  
    You can [view the scalability level of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/check-the-scalability-of-a-node-pool#task-2102754) after creation.
    

> For unsupported instance types and node configuration recommendations, see [ECS instance type configuration recommendations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster).

## **How do I calculate the maximum number of pods per node?**

The maximum number of pods supported per node depends on the network plugin used by the cluster. For detailed calculation methods, see [Maximum number of pods per node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods#efbe8fb830ayv).

-   **Terway**: `Max pods per node = Maximum Elastic Network Interface (ENI)-based pods + Host network pods`.
    
-   **Flannel**: The limit is defined by the **Number of Pods per Node** specified during cluster creation.
    

> You can view the maximum number of pods, which is the **Pod Quota**, in the node list on the **Nodes** page of the ACK console.

## **How do I adjust the pod capacity when a node reaches its pod limit?**

The maximum number of pods supported by a single worker node is determined by the network plugin type and is immutable in most cases.

-   **Terway mode**: The maximum pods per node depends on the number of ENIs provided by the ECS instance.
    

-   **Flannel mode**: The maximum pods per node is defined during cluster creation and cannot be modified once set.
    

If the pod count in your cluster reaches its limit, we recommend **scaling out the node pool** to add more nodes, which increases the total available pod capacity in your cluster. For more information, see [Increase the maximum number of pods in a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/adjusting-the-number-of-node-pods).

## **How do I modify node configurations?**

To ensure cluster stability, certain parameters—specifically those related to networking and high availability—are **immutable** after a node pool is created. For example, you cannot change the container runtime or the virtual private cloud (VPC) to which a node belongs.

For mutable parameters, changes typically apply only to **newly created nodes**. Existing nodes remain unaffected unless otherwise specified (such as **Update ECS Tags of Existing Nodes** and **Update Labels and Taints of Existing Nodes**).

**Best practices for applying new configurations:**  
To apply new settings to existing nodes, follow these steps:

1.  Create a new node pool with the desired configuration.
    
2.  [Cordon and drain](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#1a240c2ce787y) the nodes in the old node pool to migrate workloads to the new nodes.
    
3.  Once the migration is complete, release the instances in the old node pool.
    

For more information about which parameters can be modified and when the modifications take effect, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#9cff721669kc3).

## **Can I disable the** **Expected Nodes** **feature?**

If the **Scaling Mode** of a node pool is set to **Manual**, the **Expected Nodes** parameter is mandatory and cannot be disabled.

If you want to remove or release a specific node, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11). If you want to add a specific node, see [Add an existing node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster). After you [remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) or [add an existing node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster), the expected number of instances is automatically adjusted to the new number of nodes. You do not need to manually change it.

## What is the difference between a **node pool with and without** **Expected Nodes** **enabled?**

The **Expected Nodes** parameter defines the intended capacity of a node pool. You can scale out or scale in a node pool by adjusting this parameter. While most modern node pools use this for reconciliation and scaling, some legacy node pools may not have this feature enabled.

The following table describes how the system responds to different operations based on this setting:

**Operation**

**Expected Nodes** **enabled**

**Expected Nodes** **disabled (****legacy****)**

**Recommendation**

Scale in by reducing the **Expected Nodes** via console/OpenAPI

The system terminates nodes until the count matches the expected value.

If the current number of nodes in the node pool is greater than the expected number of instances, nodes are scaled in until the number of instances reaches the specified number. The expected number of instances feature is then enabled.

N/A

Remove a specific node via console/OpenAPI

The expected count decreases by the number of nodes removed. For example, if the **Expected Nodes** is 10 before removing the node, the value is updated to 7 after you remove 3 nodes.

The specific nodes are removed from the cluster.

N/A

Remove a node via `kubectl delete node`

The expected count remains unchanged.

No change to the pool state.

**Not recommended**

Manually release an ECS instance via console/OpenAPI

The system automatically creates a new ECS instance to maintain the expected count.

The node pool is unaware of the change. No new ECS instance is created. The deleted node will display an `Unknown` status for a period of time.

**Not recommended.** This causes data inconsistency between ACK and Auto Scaling (ESS). See [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node#task-tqk-v54-dgb) for recommended method.

ECS subscription expiration

The system automatically creates a new ECS instance to maintain the expected count.

The node pool is unaware of the change. No new ECS instance is created. The deleted node will display an `Unknown` status for a period of time.

**Not recommended.** This causes data inconsistency between ACK and ESS. Renew instances or remove them via the ACK console before expiration. For a recommended method to remove nodes, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node#task-tqk-v54-dgb).

ECS instance fails the ESS health check (e.g., node stop)

The system automatically creates a new ECS instance to maintain the expected count.

The system replaces the stopped instance with a new one.

**Not recommended.** Do not directly perform operations on scaling groups associated with node pools.

Remove an ECS instance from ESS group without modifying **Expected Nodes**

The system automatically creates a new ECS instance to maintain the expected count.

No new ECS instance is created.

**Not recommended.** Do not directly perform operations on scaling groups associated with node pools.

## How do I add free nodes to a node pool?

Worker nodes created in legacy clusters before the introduction of the node pool feature are considered free nodes. If you no longer need them, release the corresponding ECS instances. Otherwise, to benefit from group management and automated O&M, we recommend migrating them into a node pool.

Create a new node pool or expand an existing one, remove the free nodes from the cluster, then add them to the target node pool. For details, see [Add free nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).

## How do I **change** the OS image of a node pool?

You can switch the OS as needed. For example, from CentOS to Alibaba Cloud Linux or upgrade to a newer version of the current OS. Before proceeding, review the [OS image release notes](/help/en/ack/product-overview/release-notes-for-os-images) for compatibility and usage limits.

For step-by-step instructions, see [Replace the OS of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/replace-the-operating-system).

## **How do I release a specific ECS instance?**

To release a specific ECS instance, you must [remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) via the ACK console. This ensures the Expected Nodes count is updated automatically and correctly without manual intervention. Simply decreasing the Expected Nodes count will trigger a random scale-in, which might not target the specific instance you intend to release.

## **What do I do if adding an existing node fails with a timeout error?**

1.  **Check connectivity**: Ensure the node has network access to the API server Classic Load Balancer (CLB) instance.
    
2.  **Security groups**: Verify that the Security Group rules allow the required traffic. Refer to the [Security group limits](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#section-474-2oi-4ig) for adding existing nodes.
    
3.  **General networking**: For more complex issues, see [Network management FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management).
    

## How do I change the hostname of a worker node in an ACK cluster?

Hostnames cannot be modified directly after a cluster is created. However, you can change them by defining a **Custom Node Name** rule in the node pool settings when creating a cluster. For details, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

Then, perform the following:

1.  [Remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11) from the cluster.
    
2.  Add the removed node back to the node pool. For instructions, see [Manually add nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#section-xrg-1xf-ssb).
    
    The node will be automatically renamed upon re-joining the cluster based on the node pool's naming template.
    

## How do I manually upgrade the kernel and NVIDIA drivers on GPU nodes?

**Note**

-   The current kernel version is below `3.10.0-957.21.3`.
    
-   This procedure involves kernel and driver changes. Confirm your target versions and perform these steps with caution.
    
-   This guide focuses on the driver upgrade required after or during a kernel upgrade. The kernel upgrade itself is not covered.
    

1.  **Connect to the cluster**: [Obtain the cluster kubeconfig and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
    
2.  **Cordon the node**: Prevent new pods from being scheduled on the target GPU node. This example uses the node `cn-beijing.i-2ze19qyi8votgjz*****`.
    
    ```
    kubectl cordon cn-beijing.i-2ze19qyi8votgjz*****
    
    node/cn-beijing.i-2ze19qyi8votgjz***** already cordoned
    ```
    
3.  **Drain the node**: Evict existing pods to other nodes.
    
    ```
    kubectl drain cn-beijing.i-2ze19qyi8votgjz***** --grace-period=120 --ignore-daemonsets=true
    
    node/cn-beijing.i-2ze19qyi8votgjz***** cordoned
    WARNING: Ignoring DaemonSet-managed pods: flexvolume-9scb4, kube-flannel-ds-r2qmh, kube-proxy-worker-l62sf, logtail-ds-f9vbg
    pod/nginx-ingress-controller-78d847fb96-***** evicted
    ```
    
4.  **Uninstall the current NVIDIA driver**:
    
    **Note**
    
    This example uses version `384.111`. Replace it with your actual version.
    
    1.  Log on to the GPU node and run the `nvidia-smi` command to check the driver version.
        
        ```
        sudo nvidia-smi -a | grep 'Driver Version'
        Driver Version                      : 384.111
        ```
        
    2.  Download the matching installer from NVIDIA to perform the uninstallation.
        
        ```
        cd /tmp/
        sudo curl -O https://cn.download.nvidia.cn/tesla/384.111/NVIDIA-Linux-x86_64-384.111.run
        ```
        
        **Note**
        
        You must use the installation package to uninstall the NVIDIA driver.
        
    3.  Uninstall the current NVIDIA driver.
        
        ```
        sudo chmod u+x NVIDIA-Linux-x86_64-384.111.run
        sudo sh ./NVIDIA-Linux-x86_64-384.111.run --uninstall -a -s -q
        ```
        
5.  **Upgrade the kernel**.
    
    You can upgrade the kernel as needed.
    
6.  **Restart the GPU node**.
    
    ```
    sudo reboot
    ```
    
7.  **Install kernel headers**: Log on to the GPU node again and install the corresponding `kernel-devel`.
    
    ```
    sudo yum install -y kernel-devel-$(uname -r)
    ```
    
8.  **Install the new NVIDIA driver**: Go to the NVIDIA website to download and install the required NVIDIA driver. This example uses version `410.79`.
    
    ```
    # Change directory to /tmp
    cd /tmp/
    
    # Download the NVIDIA driver installer
    sudo curl -O https://cn.download.nvidia.cn/tesla/410.79/NVIDIA-Linux-x86_64-410.79.run
    
    # Make the installer executable
    sudo chmod u+x NVIDIA-Linux-x86_64-410.79.run
    
    # Run the installer in silent mode
    sudo sh ./NVIDIA-Linux-x86_64-410.79.run -a -s -q
    
    # Warm up the GPU
    sudo nvidia-smi -pm 1 || true
    sudo nvidia-smi -acp 0 || true
    sudo nvidia-smi --auto-boost-default=0 || true
    sudo nvidia-smi --auto-boost-permission=0 || true
    sudo nvidia-modprobe -u -c=0 -m || true
    ```
    
9.  **Configure persistence mode**: Ensure the following GPU warm-up settings are in  /etc/rc.d/rc.local. Add them manually if necessary.
    
    ```
    sudo nvidia-smi -pm 1 || true
    sudo nvidia-smi -acp 0 || true
    sudo nvidia-smi --auto-boost-default=0 || true
    sudo nvidia-smi --auto-boost-permission=0 || true
    sudo nvidia-modprobe -u -c=0 -m || true
    ```
    
10.  **Restart services**:
     
     ```
     sudo service kubelet stop
     sudo service docker restart
     sudo service kubelet start
     ```
     
11.  **Uncordon the GPU** **node**:
     
     ```
     kubectl uncordon cn-beijing.i-2ze19qyi8votgjz*****
     
     node/cn-beijing.i-2ze19qyi8votgjz***** already uncordoned
     ```
     
12.  **Verify**: Run `nvidia-smi` inside the `nvidia-device-plugin` pod to confirm the version.
     
     ```
     kubectl exec -n kube-system -t nvidia-device-plugin-cn-beijing.i-2ze19qyi8votgjz***** nvidia-smi
     Thu Jan 17 00:33:27 2019
     +-----------------------------------------------------------------------------+
     | NVIDIA-SMI 410.79       Driver Version: 410.79       CUDA Version: N/A      |
     |-------------------------------+----------------------+----------------------+
     | GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
     | Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
     |===============================+======================+======================|
     |   0  Tesla P100-PCIE...  On   | 00000000:00:09.0 Off |                    0 |
     | N/A   27C    P0    28W / 250W |      0MiB / 16280MiB |      0%      Default |
     +-------------------------------+----------------------+----------------------+
     
     +-----------------------------------------------------------------------------+
     | Processes:                                                       GPU Memory |
     |  GPU       PID   Type   Process name                             Usage      |
     |=============================================================================|
     |  No running processes found                                                 |
     +-----------------------------------------------------------------------------+
     ```
     
     **Note**
     
     If you run the `docker ps` command and find that no containers are started on the GPU node, see [Fix container startup failures on GPU nodes](#title-hn1-qun-51l).
     

## Fix container startup failures on GPU nodes

**Symptom**

In certain Kubernetes versions, after restarting `kubelet` and `Docker` on a GPU-enabled node, no containers are initialized or displayed when running `docker ps`.

```
sudo service kubelet stop
# Redirecting to /bin/systemctl stop kubelet.service
sudo service docker stop
# Redirecting to /bin/systemctl stop docker.service
sudo service docker start
# Redirecting to /bin/systemctl start docker.service
sudo service kubelet start
# Redirecting to /bin/systemctl start kubelet.service

sudo docker ps
# Output: CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

**Diagnosis**

This issue typically occurs because the Docker **Cgroup Driver** is incorrectly configured as `cgroupfs` instead of `systemd`, causing a mismatch with the Kubernetes orchestration layer.

Run the following command to check the current Cgroup Driver:

```
sudo docker info | grep -i cgroup
```

Expected output for error state:

```
Cgroup Driver: cgroupfs
```

**Solution**

1.  **Update the Docker configuration**: You must align the Cgroup Driver with `systemd` and ensure the NVIDIA container runtime is set as the default.
    
    1.  Back up your existing configuration (the /etc/docker/daemon.json file).
        
    2.  Apply the corrected configuration: Run the following command to overwrite /etc/docker/daemon.json with the required settings.
        
        ```
        sudo cat >/etc/docker/daemon.json <<-EOF
        {
            "default-runtime": "nvidia",
            "runtimes": {
                "nvidia": {
                    "path": "/usr/bin/nvidia-container-runtime",
                    "runtimeArgs": []
                }
            },
            "exec-opts": ["native.cgroupdriver=systemd"],
            "log-driver": "json-file",
            "log-opts": {
                "max-size": "100m",
                "max-file": "10"
            },
            "oom-score-adjust": -1000,
            "storage-driver": "overlay2",
            "storage-opts":["overlay2.override_kernel_check=true"],
            "live-restore": true
        }
        EOF
        ```
        
2.  Restart services for the changes to take effect.
    
    ```
    sudo service kubelet stop
    # Redirecting to /bin/systemctl stop kubelet.service
    sudo service docker restart
    # Redirecting to /bin/systemctl restart docker.service
    sudo service kubelet start
    # Redirecting to /bin/systemctl start kubelet.service
    ```
    
3.  Confirm that the Cgroup Driver has been successfully switched to systemd.
    
    ```
    sudo docker info | grep -i cgroup
    Cgroup Driver: systemd
    ```
    

## **When a node fails, how do I migrate pods in batch for redeployment?**

You can set the failed node to unschedulable and drain it to move application pods to healthy nodes.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  On the **Nodes** page, find the node that you want to manage. In the **Actions** column, choose **More** > **Drain**. This operation sets the old node to unschedulable and gradually migrates the applications from the old node to a new node.
    
3.  Troubleshoot the failed node. For troubleshooting details, see [Troubleshoot node issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-troubleshooting).
    

## **If a cluster with nodes across multiple zones fails, how does the cluster determine the node eviction policy?**

Typically, when a node fails, the node controller evicts pods from the unhealthy node. The default eviction rate `--node-eviction-rate` is 0.1 nodes per second. This means that at most one pod is evicted from a node every 10 seconds.

However, when an ACK cluster with nodes in multiple zones fails, the node controller determines the eviction policy based on zone health and cluster size.

There are three types of zone health state.

-   FullDisruption: The zone has no healthy nodes and at least one unhealthy node.
    
-   PartialDisruption: The zone has at least two unhealthy nodes, and the proportion of unhealthy nodes, which is calculated as `(Number of unhealthy nodes / (Number of unhealthy nodes + Number of healthy nodes))`, is greater than 0.55.
    
-   Normal: Neither of the above.
    

The eviction rate of the node controller is calculated as follows based on the three zone health states:

-   If all zones are in the FullDisruption state, the eviction feature is disabled for the entire cluster.
    
-   If some zones are in the FullDisruption state, the eviction rate is set to the normal value (0.1), regardless of the cluster size.
    
-   If a zone is in the PartialDisruption state, the eviction rate is affected by the cluster size.
    
    -   Large clusters (>50 nodes): The eviction rate drops to 0.01/s.
        
    -   Small clusters (≤50 nodes): The eviction rate for the zone is 0, which means no eviction occurs.
        
-   If a zone is in the Normal state, the eviction rate is set to the normal value (0.1), regardless of the cluster size.
    

For more information, see [Rate limits on eviction](https://kubernetes.io/docs/concepts/architecture/nodes/#rate-limits-on-eviction).

## Can I customize the kubelet directory path?

No. The kubelet path is fixed at `/var/lib/kubelet` and cannot be customized in ACK.

## **Can I mount a data disk to a custom directory in an ACK node pool?**

This feature is currently in canary release. To apply for this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

Once enabled, you can format and mount disks to specific paths, with the following restrictions:

-   Do not mount to the following reserved OS directories:
    
    -   /
        
    -   /etc
        
    -   /var/run
        
    -   /run
        
    -   /boot
        
-   Do not mount to the following directories that are used by the system and container runtimes, or their subdirectories:
    
    -   /usr
        
    -   /bin
        
    -   /sbin
        
    -   /lib
        
    -   /lib64
        
    -   /ostree
        
    -   /sysroot
        
    -   /proc
        
    -   /sys
        
    -   /dev
        
    -   /var/lib/kubelet
        
    -   /var/lib/docker
        
    -   /var/lib/containerd
        
    -   /var/lib/container
        
-   The mount directories for different data disks must be unique.
    
-   The mount directory must be an absolute path starting with `/`.
    
-   The mount directory cannot contain carriage return or line feed characters (C-style escape characters `\r` and `\n`) and cannot end with a backslash (`\`).
    

## **How do I modify the maximum number of file** descriptors**?**

The maximum number of file descriptors is the maximum number of files that can be opened at the same time. Alibaba Cloud Linux and CentOS systems have two levels of limits:

-   System level: The maximum number of files that can be simultaneously opened by the processes of all users.
    
-   User level: The maximum number of files that can be opened by a single user processes.
    

In a container environment, there is another limit: the maximum number of file descriptors for a single process inside a container.

**Note**

Manual changes made via CLI may be overwritten during node pool upgrades. We recommend [editing the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#9cff721669kc3) in the console for persistent settings.

### **Modify system-level limit**

See [Customize OS parameters for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-node-pool-os-parameters).

### **Modify** user-level limit

1.  Log on to the node and check the `/etc/security/limits.conf` file.
    
    ```
    cat /etc/security/limits.conf
    ```
    
    The maximum file descriptors for individual user processes are defined by the following parameters:
    
    ```
    ...
    root soft nofile 65535
    root hard nofile 65535
    * soft nofile 65535
    * hard nofile 65535
    ```
    
2.  Run the `sed` command to modify the file descriptors limit. The following example sets the value to `65535` (recommended):
    
    ```
    sed -i "s/nofile.[0-9]*$/nofile 65535/g" /etc/security/limits.conf
    ```
    
3.  Log on to the node again and run the following command to check whether the modification is effective.
    
    ```
    # ulimit -n
    ```
    
    If the output matches the value you configured (e.g., `65535`), the modification was successful.
    

* * *

### **Modify** container-level limit

**Important**

This requires restarting the Docker or containerd service, which will interrupt running containers. Perform this operation during off-peak hours.

1.  Log on to the node and run the following command to view the configuration file.
    
    -   containerd node: `cat /etc/systemd/system/containerd.service`
        
    -   Docker node: `cat /etc/systemd/system/docker.service`
        
    
    The file descriptors limit for a single process in a container is set by the following parameters:
    
    ```
    ...
    LimitNOFILE=1048576   ******Maximum number of file handles for a single process
    LimitNPROC=1048576    ******Maximum number of processes
    ...
    ```
    
2.  Run the following command to modify the parameter values. `1048576` is the recommended value for the file descriptors limit.
    
    -   containerd node:
        
        ```
         sed -i "s/LimitNOFILE=[0-9a-Z]*$/LimitNOFILE=65536/g" /etc/systemd/system/containerd.service;sed -i "s/LimitNPROC=[0-9a-Z]*$/LimitNPROC=65537/g" /etc/systemd/system/containerd.service && systemctl daemon-reload && systemctl restart containerd
        ```
        
    -   Docker node:
        
        ```
        sed -i "s/LimitNOFILE=[0-9a-zA-Z]*$/LimitNOFILE=1048576/g" /etc/systemd/system/docker.service && sed -i "s/LimitNPROC=[0-9a-zA-Z]*$/LimitNPROC=1048576/g" /etc/systemd/system/docker.service && systemctl daemon-reload && systemctl restart docker
        ```
        
3.  Run the following command to view the file descriptors limit for a single process in a container.
    
    If the returned value is the same as the value you set, the modification is successful.
    
    -   containerd node:
        
        ```
        # cat /proc/`pidof containerd`/limits | grep files
        Max open files            1048576              1048576              files
        ```
        
    -   Docker node:
        
        ```
        # cat /proc/`pidof dockerd`/limits | grep files
        Max open files            1048576              1048576              files
        ```
        

## **How do I upgrade the container runtime for worker nodes that do not belong to a node pool?**

In legacy clusters created before the introduction of the node pool feature, free worker nodes may exist. To upgrade the container runtime of these nodes, you must first migrate them into a node pool.

**Procedure**:

1.  [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443): If no suitable node pool exists, create one with the same configuration as the free node.
    
2.  [Remove the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11): During the node removal process, the system sets the node to unschedulable and drains it. If the draining fails, the system automatically **cordons** the node (sets it to unschedulable) and performs a **drain** operation to evict pods. If the draining succeeds, the node is removed from the cluster.
    
3.  [Add an existing node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster): Add the target node to an existing node pool. Once the node re-joins the cluster, its container runtime will be automatically updated to match the runtime specified in the node pool configuration.
    
    **Note**
    
    While the node pool feature itself is free of charge, you will be billed for the underlying ECS instances and other cloud resources. For details, see [Cloud resource fees](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/billing-of-cloud-services).
    

## **Why does the console display the source of a node pool as** Other Nodes**?**

ACK allows you to add computing resources via the console, OpenAPI, or CLI (see [Add an existing node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster)). If you add nodes through custom methods not recognized by ACK's standard lifecycle management, the console classifies them under the **Other Nodes** group.

ACK cannot manage these nodes through a node pool, meaning features such as automated O&M, lifecycle management, and guaranteed technical support are unavailable.

If you want to continue using these nodes, you must ensure their compatibility with cluster add-ons and assume the potential risks. These risks include but are not limited to:

-   **Version incompatibility**: During control plane or system component upgrades, the OS and resident components on these nodes may become incompatible with the new version, risking service disruption.
    
-   **Scheduling conflicts**: The cluster may fail to accurately report availability zones or resource remaining capacity for these nodes. This can lead to improper workload scheduling and degraded performance.
    
-   **Data plane mismatches**: Compatibility between node-side components/OS and the cluster control plane has not been validated, posing stability risks.
    
-   **O&M failures**: Maintenance operations performed via the ACK console or OpenAPI may fail or yield unexpected results because the underlying management channel for these nodes is unverified.
    

## **How do I configure network ACLs for the vSwitches used by cluster nodes?**

If an access control list (ACL) is associated with the vSwitch of a node pool, you must explicitly allow specific CIDR blocks. Otherwise, new nodes will fail to join the cluster or will appear in a **Failed** or **Offline** state.

**Procedure to allow traffic and re-add nodes:**

1.  [Configure network ACL rules](/help/en/vpc/network-acl-overview#989c0acf50it6): Ensure both **inbound** and **outbound** rules allow traffic for the following CIDR blocks:
    
    -   `100.104.0.0/16`: ACK control plane management CIDR.
        
    -   `100.64.0.0/10`: Alibaba Cloud internal service CIDR.
        
    -   `100.100.100.200/32`: ECS metadata service address.
        
    -   **VPC/vSwitch CIDR**: The primary and secondary CIDR blocks of the VPC, or the specific CIDR of the node's vSwitch.
        
2.  [Remove faulty nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11#87959b040095n): Remove any nodes that were in a **Failed** or **Offline** state before the ACL rules were applied.
    
3.  [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-eq0-lmv-4a7) or [expand an existing node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool#c53009a06a09h): If the node status transitions to **Ready**, the network ACL rules have been configured correctly.
