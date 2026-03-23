Kubernetes 1.24 and later no longer support Docker as the built-in container runtime. The Dockershim component was also removed in version 1.24. This means the kubelet cannot interact with Docker to create and manage containers. For this reason, Alibaba Cloud Container Service for Kubernetes (ACK) no longer supports Docker as the container runtime in version 1.24 and later. To upgrade your ACK cluster to version 1.24 or later, you must migrate the node container runtime from Docker to containerd.

[Containerd](https://containerd.io/) is an industry-standard container runtime supported by Kubernetes. Compared to the Docker runtime, containerd starts faster, uses fewer resources, and is more secure.

## **Docker to containerd Migration and Upgrade Plan**

**Important**

Before you upgrade, confirm that your workloads do not depend on Docker on the nodes to build images. In most cases, your workloads do not depend on the container runtime. Docker’s backend also calls containerd. Therefore, your workloads should not be affected after the migration.

First, migrate your staging environment. Then, migrate your production environment during off-peak hours.

Use one of the following two methods to migrate the node container runtime from Docker to containerd.

### **Option 1: Upgrade the existing node pool (Recommended)**

Use the **Kubelet Update** feature on the **Node Pools** page to migrate from Docker to containerd. This method automatically replaces the system disks of nodes. Do not save important data on the system disks, or make sure to back up the data in advance. Data disks are not affected during the upgrade.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
    
3.  In the **Actions** column of the target node pool, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9137614471/p932934.png) > **Kubelet Update**.
    
4.  Confirm the information about the runtime upgrade and click **Precheck**. After the pre-check is passed, follow the on-screen instructions to complete the runtime upgrade.
    
    > For more information about the notes and parameter configurations, see [Upgrade a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-updates).
    

### **Option 2: Create a new containerd node pool for rotational migration (Optional)**

Create a node pool and set the runtime to containerd. Then, scale out the nodes. Cordon the old node pool or update the application workloads to schedule them to the new node pool using methods such as labels. Gradually migrate all applications to the new node pool. Then, unpublish the old node pool.

For more information about how to create a node pool, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool). For more information about how to set a node as unschedulable, see [Drain a node and manage its schedulability](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-management/#1a240c2ce787y).

## **Post-migration considerations**

-   After the migration, the main syntax of Dockerfiles remains unchanged. However, pay attention to configurations related to the runtime environment. These include base image compatibility, environment variable settings, and runtime command definitions. This ensures that images can be built and run smoothly in the containerd environment.
    
-   Because containerd does not have a built-in image building feature, you cannot use Docker Build on cluster nodes after the upgrade. However, pulling images is not affected.
    
-   After you migrate the container runtime to containerd, Docker no longer manages the container lifecycle. Therefore, you cannot use Docker commands or the Docker API on nodes to view container status or interact with containers. However, you can use containerd commands instead of Docker commands. For more information about the mapping between containerd commands and Docker commands, see [Comparison of containerd, sandboxed containers, and Docker runtimes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-of-docker-containerd-and-sandboxed-container).
    

## **How disk replacement upgrades work**

ACK automatically performs a disk replacement upgrade to migrate from Docker to containerd. The process is as follows.

1.  Drain the node and set it as unschedulable.
    
2.  Shut down the ECS instance to stop the node.
    
3.  Replace the system disk. The system disk ID changes, but the disk type, instance IP address, and elastic network interface (ENI) MAC address remain unchanged.
    
4.  Re-initialize the node and install the containerd runtime.
    
5.  Restart the node. When the node is ready, set it as schedulable.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3253282771/CAEQVBiBgIDYooiS5hkiIDQ1NTc3MDViZmY0NDRjM2U4NjZkNzBhN2Y1NWRmNDM04953517_20250228142321.828.svg)

## **FAQ**

### **How long does each batch upgrade take?**

When you migrate from Docker to containerd from the node pool upgrade page, a disk replacement upgrade is used. If no snapshot is created, the upgrade typically takes less than 8 minutes. If you choose to create a snapshot during the upgrade, the upgrade starts after the snapshot is created. The running time depends on how long it takes to create the snapshot. The node pool upgrade allows 40 minutes for snapshot creation. If the snapshot is not created within 40 minutes, the node upgrade times out and fails. The upgrade operation does not start on the failed node. If you do not store business data on the system disk, you can choose not to create a snapshot to avoid a long upgrade time.

The number of nodes upgraded in each batch is 1, 2, 4, 8, and so on, until the maximum number of concurrent upgrades is reached. After the maximum number is reached, each subsequent batch upgrades that number of nodes. For example, if you set the maximum number of nodes per batch to 4, the first batch upgrades 1 node, the second batch upgrades 2 nodes, and the third batch upgrades 4 nodes. All subsequent batches upgrade 4 nodes.

### **Are my services affected during the upgrade?**

When you migrate from Docker to containerd from the node pool upgrade page, a disk replacement upgrade is used. During the upgrade, nodes are drained. If your pods implement graceful shutdown logic ([Graceful shutdown and zero downtime deployments in Kubernetes](https://learnk8s.io/graceful-shutdown)) and you have multiple replicas deployed on different nodes, your services are not affected. To prevent multiple replicas of the same application from being upgraded in the same batch, you can manually set the number of concurrent upgrades to be less than the number of pod replicas.

### **Can I roll back after migrating from Docker to containerd?**

Rollback is not supported.

### **Is node data lost during the migration from Docker to containerd?**

When you migrate from Docker to containerd from the node pool upgrade page, a disk replacement upgrade is used. This method replaces the system disks of nodes. Do not save important data on the system disks, or make sure to back up the data in advance. Data disks are not affected during the upgrade.

### After the system disk of a node is replaced, **does the IP address of the node change?**

When the system disk is replaced, the system disk ID changes. However, the disk type, instance IP address, and ENI MAC address remain unchanged. For more information, see [Replace the system disk of an instance (change the OS)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance-1).

### **How compatible is containerd with Docker?**

In most cases, your workloads do not depend on the container runtime. Docker’s backend also calls containerd. Therefore, your workloads should not be affected after the migration.

Because containerd does not have a built-in image building feature, you cannot use Docker Build on cluster nodes after the upgrade. However, pulling images is not affected.

After you migrate the container runtime to containerd, Docker no longer manages the container lifecycle. Therefore, you cannot use Docker commands or the Docker API on nodes to view container status or interact with containers.

### What should I do if I previously used Docker to build images on cluster nodes and have now upgraded the runtime to containerd?

You can use Alibaba Cloud Container Registry (ACR) to build images, or you can build images manually.

-   **Build with ACR (Recommended)**: ACR image building is based on BuildKit, the official image building tool from Docker. You can create an ACR instance and configure build rules based on a Dockerfile to automatically trigger image builds. The Dockerfile is then run to execute the build. After the build is complete, the image is automatically committed to the image repository. For more information, see [Build images using an Enterprise Edition instance](/help/en/acr/user-guide/build-images-on-container-registry-enterprise-edition-instances).
    
-   **Build manually**: To ensure optimal node performance, create a separate Elastic Compute Service (ECS) instance. Manually install Docker on the instance and then use Docker commands to build images. For more information, see [Install and use Docker and Docker Compose](/help/en/ecs/user-guide/install-and-use-docker).
    

### **After the node runtime switches from Docker to containerd, what should I do if the Docker directory is not cleaned up and occupies disk space?**

In addition to container, image, and log files managed by the Kubernetes cluster, the Docker directory also contains file paths you created yourself. If not needed, please manually delete the Docker directory in the data disk after the runtime switch.
