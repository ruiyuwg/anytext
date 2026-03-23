This topic describes the operating system images, OS filtering rules, and limits for Container Service for Kubernetes.

## Operating system images supported by Container Service for Kubernetes

When you create an ACK cluster or a node pool, you can select an operating system image for the nodes. By default, only the latest version of each image type is available. The following table describes the OS images that ACK supports and the corresponding supported ACK cluster versions.

**Important**

-   ACK maintains its own list of supported OS images. This list may not include the latest image versions available on ECS.
    
-   Alibaba Cloud Linux 2 and CentOS reached their end of life (EOL) on March 31, 2024, 00:00:00 and June 30, 2024, 00:00:00, respectively. Alibaba Cloud no longer provides technical support for ECS instances that use these OS versions. To ensure business stability and receive efficient technical support, we recommend that you use Alibaba Cloud Linux 3 or ContainerOS. For more information about the changes and solutions, see [\[Product Change\] End of Maintenance for Alibaba Cloud Linux 2 and CentOS 7](/help/en/ack/product-overview/announcement-on-stopping-maintenance-of-alibaba-cloud-linux-2-and-centos-7).
    

**Image type**

**Image name (including version)**

**Image ID**

**Platform**

**System architecture**

**Boot mode**

**System size**

**Supported cluster versions**

Alibaba Cloud Linux 3.2104 LTS 64-bit Container-Optimized Edition

Alibaba Cloud Linux 3.2104 Container-Optimized

aliyun\_3\_x64\_20G\_container\_optimized\_20241226.vhd

> Uses cgroup v2 by default

Aliyun

x86\_64

UEFI-Preferred

20 GiB

1.26 and later

ContainerOS

ContainerOS 3

lifsea\_3\_x64\_10G\_containerd\_1\_6\_28\_alibase\_20240705.vhd

> ContainerOS 3.3 and later use cgroup v2 by default

Aliyun

x86\_64

BIOS

10 GiB

1.24 and later

Alibaba Cloud Linux 3

Alibaba Cloud Linux 3.2104 LTS 64-bit

aliyun\_3\_x64\_20G\_alibase\_20240528.vhd

Aliyun

x86\_64

BIOS

20 GiB

1.18 and later

Alibaba Cloud Linux 3 ARM Edition

Alibaba Cloud Linux 3.2104 LTS 64-bit ARM Edition

aliyun\_3\_arm64\_20G\_alibase\_20240528.vhd

Aliyun

arm64

UEFI

20 GiB

1.20 and later

Alibaba Cloud Linux UEFI 3

Alibaba Cloud Linux UEFI 3.2104 Security Enhanced

aliyun\_3\_x64\_20G\_uefi\_alibase\_20230727.vhd

Aliyun

x86\_64

UEFI

20 GiB

1.18 and later

Red Hat

Red Hat Enterprise Linux (RHEL) 9.3 64-bit

[Red Hat Enterprise Linux 9.3 64bit](https://marketplace.alibabacloud.com/products/56732001/sgcmjj00034001.html)

> RHEL 9 and later use cgroup v2 by default

Red Hat

x86\_64

BIOS

20 GiB

1.20 and later

Ubuntu

Ubuntu 22.04

ubuntu\_22\_04\_x64\_20G\_alibase\_20240508.vhd

> Ubuntu 22 and later use cgroup v2 by default

Ubuntu

x86\_64

BIOS

20 GiB

1.30 and later

Windows

Windows Server 2022 (20240220)

win2022\_21H2\_x64\_dtc\_en-us\_40G\_container\_alibase\_20240220.vhd

WindowsServer2022

x86\_64

BIOS

40 GiB

1.18 and later

Windows

Windows Server 2019 (20240220)

win2019\_1809\_x64\_dtc\_en-us\_40G\_container\_alibase\_20240220.vhd

WindowsServer2019

x86\_64

BIOS

40 GiB

1.18 and later

Windows Core

Windows Server Core, version 2022 (20240223)

wincore\_2022\_x64\_dtc\_en-us\_40G\_container\_alibase\_20240223.vhd

WindowsServer2022

x86\_64

BIOS

40 GiB

1.18 and later

Alibaba Cloud Linux 2 (EOL)

Alibaba Cloud Linux 2.1903 LTS 64-bit

aliyun\_2\_1903\_x64\_20G\_alibase\_20231221.vhd

Aliyun

x86\_64

BIOS

20 GiB

Less than 1.30

CentOS (EOL)

CentOS 7.9 64-bit

centos\_7\_9\_x64\_20G\_alibase\_20230718.vhd

CentOS

x86\_64

BIOS

20 GiB

Less than 1.30

## Usage notes

### **Operating system limits**

The list of available operating systems is filtered based on the images that the selected instance types support. If you select multiple instance types, the list of available operating systems is the intersection of the images that all selected instance types support.

**Operating system type**

**Limits**

Windows

You can create Windows nodes only in an existing ACK managed cluster. You cannot create Windows nodes when you create a new ACK managed cluster. The Windows operating system is not supported in the following scenarios:

-   The node pool is not a managed node pool.
    
-   The cluster network plugin is Terway.
    
-   The node container runtime is containerd.
    
-   The instance must be a non-GPU instance type with at least 4 cores and 8 GB of memory.
    

For more information about the limits and notes for the Windows operating system, see [Limits](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-windows-node-pool#4181b6b036ju2).

Alibaba Cloud Linux

Only the Alibaba Cloud Linux operating system is supported in the following scenarios:

-   The cluster network plugin is Terway-Eniip and IPvlan or DataPath V2 is selected.
    
-   The container runtime is Sandboxed-Container.
    
-   You create a Confidential Computing ACK managed cluster.
    

Alibaba Cloud Linux 3 ARM Edition

Only instance types with an Arm architecture are supported.

Ubuntu

-   The cluster version is 1.30 or later. To upgrade the cluster, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   During node initialization, automatic OS upgrades are disabled.
    
-   During node initialization, the `/etc/resolv.conf` symbolic link points to `/run/systemd/resolve/stub-resolv.conf`, and the DNS server is configured by DHCP.
    
-   Features such as Cloud Parallel File System (CPFS) persistent volumes (PVs), image acceleration plugins, and security hardening are not currently supported.
    

RHEL 9.3

You can use the RHEL operating system in ACK clusters, but you must use a custom image. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance).

After you create the custom image, you can use it to create a node pool. All nodes in the node pool are deployed based on this image.

**Expand to view the procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  In the upper-right corner of the page, click **Create Node Pool**. For **Operating System**, select Custom Image, and then select the image that you created.
    
    For more information about how to configure all parameters for creating a node pool, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    

Operating system of a custom image

-   Create custom images only from operating systems that are supported by ACK clusters.
    
-   Do not build custom images on running ECS instances in an ACK cluster. To do this, you must first remove the ECS instances from the cluster. For more information, see [Remove a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).
    
-   The predefined behavior logic in a custom image may affect operations such as cluster node initialization, container launching, node updates, and automatic recovery of nodes in a managed node pool. Before you use it in a production environment, ensure that the custom image has been tested and validated.
    
-   Do not enable the swap partition in the operating system.
    

### **cgroup versions**

The Linux kernel uses cgroups (v1 and v2) to limit and isolate process resources. Due to the [differences](/help/en/alinux/differences-between-cgroup-v1-and-cgroup-v2) between the versions, when you migrate applications from cgroup v1 to cgroup v2, you must change the operating system of the node pool and adjust workloads to ensure compatibility.

## References

-   For more information about the Alibaba Cloud Linux 3 container-optimized image, see [Alibaba Cloud Linux 3 container-optimized image](/help/en/alinux/alibaba-cloud-linux-3-container-optimized-images).
    
-   You can use [node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/#task-2013378) to manage nodes in groups for operations such as maintenance, patching OS CVE vulnerabilities, and auto scaling.
    
-   When you [create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb), you only need to create nodes and do not need to maintain the cluster control plane. ACK creates and hosts the control plane, which reduces your maintenance costs and lets you focus on your business applications.
