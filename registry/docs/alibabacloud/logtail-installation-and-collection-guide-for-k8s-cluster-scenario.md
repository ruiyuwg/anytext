The operations that allow Logtail to collect logs vary based on collection scenarios. This topic describes how to use Logtail to collect logs in various collection scenarios, such as hosts, Kuberneter clusters, and containers.

## Install Logtail to collect logs from servers

When you collect text logs from servers, Simple Log Service supports Logtail installation in automatic or manual mode. The mode varies based on the account or region to which your server belongs.

### **Automatic installation**

If the following conditions are met, Simple Log Service can automatically install Logtail on an Elastic Compute Service (ECS) instance by using CloudOps Orchestration Service (OOS) in the Simple Log Service console. For more information, see [Automatically install Logtail to collect text logs from servers](/help/en/sls/host-text-log-collection-auto-install).

-   An ECS instance is used.
    
-   The ECS instance and the Simple Log Service project belong to the same Alibaba Cloud account and reside in the same region.
    

### **Manual installation**

If one of the following conditions is met, you must manually install Logtail on a server. For more information, see [Manually install Logtail to collect text logs from servers](/help/en/sls/host-text-log-collection-manual-installation).

-   The server that is used is not an ECS instance.
    
-   An ECS instance is used, but the ECS instance and the Simple Log Service project belong to different Alibaba Cloud accounts.
    
-   An ECS instance is used. The ECS instance and the Simple Log Service project belong to the same Alibaba Cloud account but reside in different regions.
    

## Install Logtail to collect logs from Kubernetes clusters

Kubernetes container logs can be used for troubleshooting, performance optimization, security audit, and resource utilization analysis. Simple Log Service allows you to collect container logs from a Kubernetes cluster in either DaemonSet or Sidecar mode.

### **DaemonSet mode**

-   Only one Logtail container runs on a node in a Kubernetes cluster. You can use Logtail to collect logs from all containers on a node.
    
-   When a node is added to a Kubernetes cluster, the cluster automatically creates a Logtail container on the new node. When a node is removed from a Kubernetes cluster, the cluster automatically destroys the Logtail container on the node. DaemonSets and custom identifier-based machine groups eliminate the need to manually manage Logtail processes.
    

### Sidecar mode

-   Each pod runs a Logtail container. You can use Logtail to collect logs from all containers in the pod. Log collection from each pod is isolated.
    
-   To ensure that Logtail can collect logs from other containers in a pod, make sure that the Logtail container and application containers share the same volume. For more information about how to collect container logs in Sidecar mode, see [Sidecar container with a logging agent](https://kubernetes.io/docs/concepts/cluster-administration/logging/#sidecar-container-with-a-logging-agent) and [Pods with multiple containers](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/#how-pods-manage-multiple-containers). For more information about volumes, see [Storage basics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics).
    

Collection method

Scenario

Advantage

Disadvantage

DaemonSet

Generally recommended for most scenarios.

Provides simple O&M, low resource usage, and flexible configurations. Allows collection for container stdout, stderr, and text logs.

Logtail collects logs from all containers on a DaemonSet-specific node. However, performance bottleneck issues may occur on Logtail, and containers are loosely isolated.

Sidecar

Used when each pod requires a separate Logtail for collection. By default, Logtail is installed in Serverless Kubernetes (ASK) clusters in Sidecar mode.

Creates a Sidecar container for each container from which you want to collect logs. Tenants are completely isolated.

High resource consumption and complex configuration and maintenance.

### Container discovery

-   Before a Logtail container can collect logs from other containers, the Logtail container must identify and determine which containers are running. This process is called container discovery. During container discovery, the Logtail container does not communicate with the [kube-apiserver](https://kubernetes.io/zh-cn/docs/reference/command-line-tools-reference/kube-apiserver/) component of the Kubernetes cluster. Instead, the Logtail container communicates with the container runtime daemon of the node on which the Logtail container runs to obtain information about all containers on the node. This prevents container discovery from putting pressure on the kube-apiserver component.
    
-   When you use Logtail to collect logs, you can specify conditions such as namespaces, pod names, pod labels, and container environment variables to determine containers from which Logtail collects or does not collect logs.
    

### File path mapping for containers

Pods in a Kubernetes cluster are isolated. As a result, the Logtail container in a pod cannot directly access the files of containers in a different pod. The file system of a container is created by mounting the file system of the container host to the container. A Logtail container can access any file on the container host only after the file system that includes the root directory of the container host is mounted to the Logtail container. This lets the Logtail container collect logs from the files in the file system. The relationship between file paths in a container and file paths on the container host is called file path mapping.

For example, a log file path in a container is `/log/app.log`. After file path mapping, the file path on the container host is `/var/lib/docker/containers/<container-id>/log/app.log`. By default, the file system that includes the root directory of the container host is mounted to the `/logtail_host` directory of the Logtail container. Therefore, the Logtail container collects logs from `/logtail_host/var/lib/docker/containers/<container-id>/log/app.log`.

### **Usage notes**

#### **Container runtime**

-   Supported engines:
    
    -   Docker
        
    -   Containerd
        
-   Storage drivers (only for Docker containers):
    
    -   Only overlay and overlay2 storage drivers are supported.
        
    -   If you use a non-overlay driver, you must **mount a volume on the directory of logs to generate a temporary directory**.
        

#### **Volume mounting**

An Apsara File Storage NAS (NAS) file system is mounted to the directory of logs by using a PersistentVolumeClaim (PVC).

-   Disabled: install Logtail in DaemonSet mode.
    
-   Recommended:
    
    -   [Collect text logs from a Kubernetes cluster in Sidecar mode](/help/en/sls/collect-k8s-cluster-logs-through-sidecar): deploy a separate Logtail container for each pod.
        
        _Scenarios_: High level of isolation and multi-tenant environments
        

#### **Log file path specifications**

-   Do not use symbolic links.
    
    -   Invalid configuration: `/var/log/app -> /mnt/nas/logs`.
        
    -   Valid configuration: Use the `/mnt/nas/logs` path.
        
-   Mount path matching rules:
    
    If a volume is mounted to the data directory of an application container, **you must specify data directory or its subdirectory as the collection directory**.
    
    _Example_:
    
    ```
    1Mount target: /var/log/service
    2✅ Valid collection path: /var/log/service or /var/log/service/subdir
    3❌ Invalid collection path: /var/log (path too short)
    ```
    

#### **Log handling when a container is stopped**

**Runtime**

**Log integrity**

**Container destruction delay risk**

**Optimization suggestions**

Docker

If collection latency exists due to issues such as network latency or resource overconsumption before the container is stopped, some logs that are collected before the container is stopped may be lost.

When a container is stopped, Logtail immediately releases the current container file handles. Then, the container can exit as expected.

Increase log sending frequency (specify a small value for `flush_interval`).

Containerd

When a container is stopped, Logtail does not release the current container file handles until all logs are sent. In this period, the files remain open.

If collection latency exists due to issues such as network latency or resource overconsumption, the container may fail to be destroyed in a timely manner.

Configure the `max_hold_buffer_size` parameter to limit memory usage.

## Install Logtail to collect logs from a Docker container

After Docker is deployed on a server, you can collect logs from the application container that is deployed on the server. Docker logs are divided into two types: stdout and stderr and text logs.

Text logs refer to the logs that are generated by the container and written to a specific file directory on a server. Stdout and stderr refers to the real-time output of the container.

-   [Collect text logs from a Docker container](/help/en/sls/collect-docker-container-text-logs)
    
-   [Collect stdout and stderr from a Docker container](/help/en/sls/collect-docker-container-standard-output)
