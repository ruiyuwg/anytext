ACK provides stable, efficient, and predictable node management. When you create new nodes or scale out existing node pools, ACK follows a standardized initialization process. This process completes software installation and configuration based on the node pool's settings and joins the node to the Kubernetes cluster.

## **Scope**

This topic applies to ECS node pools and EGS node pools in ACK managed clusters and ACK dedicated clusters that run cluster versions 1.20 and later.

## **Process Overview**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3874282771/CAEQVBiBgMD73K6S5hkiIDdmYTRjYTI3ZDU5YTRiZGZhOTZjNzdhMzIzM2YyOWJj5712175_20250910135610.185.svg)

## **Step One: Create Nodes**

When a request to scale out a node pool or automatically add nodes is received, ACK creates Elastic Compute Service (ECS) or EGS instances based on the node pool configuration, such as the instance type, image, and disks. The operating system then completes basic initialization tasks, such as configuring the network and mounting the system disk.

Next, the Cloud-init tool executes the [User Data script](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance#section-lu5-puw-zsj). This script consists of the **Pre-defined Custom Data** script, ACK initialization scripts, and the **User Data** script.

## **Step Two: Execute Pre-Customization Scripts**

Cloud-init first executes the **Pre-defined Custom Data** script. This script is typically used to install specific system dependency packages or monitoring agents, or to perform preliminary environment checks and configurations.

## **Step Three: Execute ACK Initialization Scripts**

This stage includes multiple sub-steps and provides flexible skip mechanisms to meet the needs of different scenarios.

### **3.1 Prepare Basic Environment**

This stage configures the basic environment required for Kubernetes to run on the node.

#### **Execution Flow**

-   Start the chronyd service: Ensures that the node's clock is synchronized with the NTP server.
    
-   Set the Node ID and hostname:
    
    -   Node ID: Calculates and sets a node ID in the Kubernetes cluster.
        
    -   Hostname: If the node pool is configured with a **Custom Node Name**, this name is also set as the node's hostname.
        
-   Data disk initialization: If the node pool is configured with data disks, the system by default finds the last data disk in lexicographic order (prioritizing NVMe), formats it, and mounts it. This disk stores the container runtime environment, such as the containerd working directory `/var/lib/containerd`.
    

#### **Skip Mechanism**

-   To manually manage data disk partitions and file systems, or to use existing data disks that contain data, you can create the file `/var/.skip-auto-fdisk` in the pre-customization data to skip automatic formatting.
    
-   If you do not skip automatic formatting but want to retain and migrate data from the original runtime directory, such as an image cache, you can create the file `/var/.keep-container-data`. After the data disk is mounted, the system copies the old data to the new directory. This avoids repeated image pulls.
    

### **3.2 Install Kubernetes Components**

This stage installs the core components required to run Kubernetes.

-   Install and configure the kubelet. For more information, see [Custom Node Pool Kubelet Configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool).
    
-   Install the runtime: Install and configure the container runtime, such as containerd. For more information, see [Custom Node Pool Containerd Configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-containerd-configurations-of-a-node-pool).
    

### **3.3 Install Components as Needed**

ACK installs components based on the node pool's configuration.

-   Install heterogeneous hardware drivers and the device-plugin: If the node is a heterogeneous computing instance, such as a GPU or NPU instance, the system automatically installs the corresponding drivers and a Kubernetes device plugin, such as the [NVIDIA Device Plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-device-plugin-related-operations). This allows the cluster to recognize and schedule these resources.
    
-   Install image acceleration software: If features such as [using on-demand loading of container images to accelerate container startup](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/accelerate-container-startup-using-on-demand-container-image-loading) are enabled, the system installs the relevant acceleration software and modifies the container runtime configuration to improve container startup speed.
    
-   Install SGX-related software: If [ACK-TEE confidential computing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/tee-based-confidential-computing/) is enabled, the system installs the SGX drivers and related dependencies. This provides a trusted execution environment for running confidential containers.
    

### **3.4 Join Cluster**

After the core components are installed, the kubelet starts and registers with the cluster's API server. After registration, the node officially joins the cluster, and its initial status is marked as `NotReady`.

### **3.5 Install Additional Basic Software**

To ensure node stability and security, ACK installs additional basic software packages and performs security updates by default.

#### **Execution Flow**

-   Install basic tool packages: Installs common tools such as `pigz`, `container-selinux`, and `zlib` to support advanced features for storage and networking.
    
-   Security updates (Alibaba Cloud Linux only):
    
    -   Upgrade `systemd` as needed: To ensure stability and functionality, the `systemd` version may be upgraded.
        
    -   Apply `minimal` security vulnerability fixes: Automatically applies CVE security vulnerability fixes by running the `yum update-minimal --exclude kernel* --security -y` command.
        

#### **Skip Mechanism**

-   You can create the `/var/.skip-yum` file to completely skip this step, including CVE fixes. This is suitable for offline environments or scenarios that require strict version control.
    
-   You can create the `/var/.skip-security-fix` file to skip only CVE vulnerability fixes but still install basic tool packages.
    

### **3.6 Apply Node Pool OS Configuration**

After all software is installed and updated, the system reapplies the node pool's OS configuration to ensure that all settings remain effective in the final environment. For more information, see [Manage Node Pool OS Parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/custom-node-pool-os-parameters).

### **3.7 Perform Security Hardening as Needed**

Based on the node pool's configured **Security Hardening** capabilities, such as Alibaba Cloud OS hardening and , the system executes the corresponding security hardening scripts. These scripts, for example, harden kernel parameters and adjust system permissions to meet enterprise security specifications.

## **Step Four: Execute Custom Scripts**

Next, the system executes the **User Data** script. This script typically performs application-level initialization operations, such as initializing application data catalogs or starting non-containerized helper services.

## **Parallel Execution Flow**

#### **State Change (`NotReady` to `Ready`)**

After a node joins the cluster and is in the `NotReady` state, the node's kubelet continuously communicates with the control plane. When the critical components on the node are ready and the node passes all health checks, its status automatically changes to `Ready`. The Kubernetes scheduler then considers the node an available resource, and the node begins to receive and run pods.

#### **Parallel Mechanism Description**

The node state change and the execution of the **User Data** script are parallel tasks.

-   No blocking: The execution of the **User Data** script and the process of the node becoming `Ready` are independent. The script's execution result, whether success, failure, or duration, does not block the node from transitioning to the `Ready` state.
    
-   Execution timing: Both tasks execute in parallel. Do not assume that application pods are running on the node when the **User Data** script finishes, or vice versa.
    
-   Log tracing: To confirm the execution status of custom scripts, you can [log on to the node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#ac78e94553p3v) and view the execution logs and final status by running the `cat /var/log/cloud-init-output.log` command.
