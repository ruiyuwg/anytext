Elastic Remote Direct Memory Access (eRDMA) is a high-performance RDMA network service from Alibaba Cloud that provides low latency, high throughput, and high elasticity. eRDMA is a cost-effective RDMA service for ECS instances that is built on the fourth-generation X-Dragon system architecture and VPC networks. eRDMA is fully compatible with the RDMA ecosystem and supports large-scale network deployments. This topic describes how to configure and use eRDMA in an ACK cluster.

## Prerequisites

-   You have created a cluster that runs version 1.20 or later. To upgrade a cluster, see [Upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
-   You have created nodes that support [elastic Remote Direct Memory Access (eRDMA)](/help/en/ecs/user-guide/elastic-rdma-erdma/) in a node pool.
    
    You can bind ERIs only to ECS instances of specific instance families. For information about the instance families that support ERIs, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families).
    

## Step 1: Install the ACK eRDMA Controller component

Install the ACK eRDMA Controller component.

**Note**

-   If your cluster uses the Terway network plugin, you must also configure a whitelist for Terway to prevent the Terway component from modifying the eRDMA-capable ENIs. For more information, see [Configure a whitelist for ENIs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-whitelist-for-an-eni).
    
-   If a node has multiple network interface controllers (NICs), the [ACK eRDMA Controller](/help/en/ack/product-overview/ack-erdma-controller) configures routes for the attached eRDMA-capable ENIs with a lower priority than the routes for NICs in the same CIDR block. The default route priority is `200`. To manually configure NICs after you install the [ACK eRDMA Controller](/help/en/ack/product-overview/ack-erdma-controller), make sure to avoid route conflicts.
    

1.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
2.  On the **Add-ons** page, click the **Network** tab, find the ACK eRDMA Controller component, and then follow the prompts to configure and install it.
    
    **Configuration item**
    
    **Description**
    
    **preferDriver** **Driver type**
    
    Select the eRDMA driver type to use on cluster nodes. Valid values:
    
    -   `default`: The default driver mode.
        
    -   `compat`: The RoCE-compatible driver mode.
        
    -   `ofed`: The OFED-based driver mode. This mode is suitable for GPU-accelerated instance types.
        
    
    For more information about driver types, see [Enable eRDMA](/help/en/ecs/user-guide/erdma-usage/).
    
    **Specifies whether to assign all eRDMA devices of nodes to pods**
    
    Valid values:
    
    -   True (selected): Allocates all eRDMA devices on the node to the pod.
        
    -   False (cleared): Allocates one eRDMA device to the pod based on the NUMA topology. The node must have the static CPU management policy enabled to ensure fixed NUMA allocation for pods and devices. For information about how to configure the CPU policy, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#info-602-lgv-xix).
        
    
    After the installation is complete, in the navigation pane on the left, choose **Workloads** **\>** **Pods**. Then, set the namespace to ack-erdma-controller and view the status of the pods to confirm that the component is running as expected.
    

## Step 2: Use eRDMA to accelerate container networks

After you install the ACK eRDMA Controller component, you can use the following configurations in a pod to enable eRDMA acceleration.

**Configuration**

**Method**

**Description**

Enable eRDMA

Declare the `aliyun/erdma` resource in the container resources of the application's pod.

```
spec:
  containers:
  - name: erdma-container
    resources:
      limits:
        aliyun/erdma: 1
```

Declare the `aliyun/erdma` resource in the application's pod to allocate eRDMA devices to the pod.

After the devices are allocated, view them in the pod.

```
/# ls /dev/infiniband/
rdma_cm  uverbs0
```

Enable transparent acceleration with SMC-R

After you enable eRDMA, declare `network.alibabacloud.com/erdma-smcr: "true"` in the pod's `Annotation` to enable transparent acceleration for TCP connections in the pod.

```
metadata:
  annotations:
    network.alibabacloud.com/erdma-smcr: "true"
```

After you enable transparent acceleration with SMC-R, eRDMA acceleration can be used only if both ends of the TCP connection are configured with SMC-R.

You can install the `smc-tools` tool in the pod and run the `smcss` command to check the acceleration status of the connection.

**Note**

-   This feature is supported only on Alibaba Cloud Linux 3 with kernel version 5.10.134-17 or later. For more information, see [Alibaba Cloud Linux 3 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux#undefined).
    
-   This option is not supported when the driver type is set to `ofed` or `compat`.
    
-   Alibaba Cloud ERI eRDMA devices and SMC do not currently support IPv6 addresses. If the application layer uses an IPv6 address, SMC falls back to the TCP protocol stack.
    

### **Scenario 1: Use eRDMA to accelerate NCCL communication for GPU-accelerated instance types**

1.  Follow the instructions in [Step 1: Install the ACK eRDMA Controller component](#3817ac64949pt) to install the component. Set `preferDriver` to `ofed` for NCCL communication.
    
2.  Add GPU nodes to the node pool. For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
3.  Install the eRDMA-related packages when you build the application container image.
    
    **Install eRDMA-related packages when building an image**
    
    ```
    # For Debian or Ubuntu: Make sure that the OS name and version in sources.list are consistent with the version that you use.
    wget -qO - https://mirrors.aliyun.com/erdma/GPGKEY | apt-key add - && echo "deb [ arch=amd64 ] https://mirrors.aliyun.com/erdma/apt/{OS|ubuntu} {Version|focal}/erdma main" | tee /etc/apt/sources.list.d/erdma.list && apt update && apt install -y libibverbs1 ibverbs-providers ibverbs-utils librdmacm1
    
    # For Alibaba Cloud Linux or RHEL: Find the repo directory that corresponds to your OS and configure it in the yum.repos.d directory.
    cat > /etc/yum.repos.d/erdma.repo <<EOF
    [erdma]
    name = ERDMA Repository
    baseurl = http://mirrors.aliyun.com/erdma/yum/redhat/7/erdma/x86_64/
    gpgcheck = 0
    enabled = 1
    EOF
    yum install --disablerepo=*  --enablerepo erdma -y libibverbs ibverbs-providers ibverbs-utils librdmacm
    ```
    
4.  Run a GPU application that uses eRDMA in the cluster. This example uses `nccl-test`.
    
    **Sample template for a GPU application that uses eRDMA**
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: nccltest
    spec:
      selector:
        matchLabels:
          app: nccltest
      serviceName: "nccltest"
      replicas: 2
      template:
        metadata:
          labels:
            app: nccltest
        spec:
          hostNetwork: true 
          dnsPolicy: ClusterFirstWithHostNet
          containers:
          - env:
            - name: NCCL_SOCKET_IFNAME
              value: "eth0"
            - name: NCCL_DEBUG
              value: "INFO"
            - name: NCCL_IB_GID_INDEX
              value: "1"
            image: <nccl-test-image-with-erdma>
            imagePullPolicy: Always
            name: nccltest
            securityContext:
              privileged: true
            resources:
              limits:
                nvidia.com/gpu: "8"
                aliyun/erdma: "1"
              requests:
                nvidia.com/gpu: "8"
                aliyun/erdma: "1"
    ```
    
5.  Verify that NCCL uses eRDMA for acceleration.
    
    You can check the application logs to view the communication type and the number of NICs used by NCCL. The following figure shows an example.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7709113371/p874798.png)
    
    The expected output shows that the `erdma_0` and `erdma_1` eRDMA devices are used for acceleration.
    

### **Scenario 2: Use SMC-R to transparently accelerate application networks**

1.  Follow the instructions in [Step 1: Install the ACK eRDMA Controller component](#3817ac64949pt) to install the component. Set `preferDriver` to `default` for standard communication acceleration.
    
2.  Use the following sample code to create an application that is accelerated by SMC-R in the cluster.
    
    **Sample template for an application accelerated by SMC-R**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: app-with-erdma
      name: app-with-erdma
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: app-with-erdma
      template:
        metadata:
          labels:
            app: app-with-erdma
          annotations:
            network.alibabacloud.com/erdma-smcr: "true"
        spec:
          containers:
          - image: <application image>
            imagePullPolicy: Always
            name: app-with-erdma
            resources:
              limits:
                aliyun/erdma: 1
    ```
    
3.  Check the acceleration status of network connections in the pod.
    
    You can install `smc-tools` in the container and run the `smcss` command to view the acceleration effect.
    
    ```
    /# smcss
    State          UID   Inode   Local Address           Peer Address            Intf Mode 
    ACTIVE         00000 0059964 172.17.192.73:47772     172.17.192.10:80        0000 SMCR
    ```
    
    The expected output shows `SMCR` in the `Mode` column, which indicates that the connection has been accelerated by eRDMA.
