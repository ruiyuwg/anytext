This document explains how to use Alibaba Cloud Simple Log Service (SLS) and its collector, LoongCollector, to efficiently collect, process, and analyze Kubernetes container logs. It covers core principles, key processes, selection guidance, and best practices, and provides links to detailed operational documents.

## **Features**

Simple Log Service provides the following core capabilities for Kubernetes container log collection:

-   Multiple log sources
    
    -   [Log types](#UqC34): Standard output (stdout), standard error (stderr), and container text file logs.
        
-   Fine-grained container filtering
    
    -   Specify or exclude containers from collection based on namespace, pod name, container name, container label, or environment variable.
        
-   Complex log processing
    
    -   Collect [multi-line logs](#75ed767b9dngg)**:** Recognize log entries that span multiple lines, such as Java exception stack traces, and process them as a single log event. This prevents logs from being incorrectly split by line feeds.
        
    -   Pre-process logs: Use plugins such as the filter plugin to filter invalid data on the collector. Use the log masking and field extraction plugins to prevent raw logs from being exposed.
        
    -   Parse and structure fields: Use parsing plugins for regular expressions, JSON, or separators to parse raw logs before they are stored.
        
-   Intelligent metadata association
    
    -   When reporting container logs, LoongCollector [automatically associates metadata](#6e8aa75f1chbj) such as container name, image, pod, namespace, and environment variables.
        
-   Reliability assurance
    
    -   The [checkpoint](#UqC34) mechanism records the current collection position to ensure log integrity.
        
    -   SLS provides different strategies for [handling logs when a container stops](#373e0ef26am24) based on the container runtime.
        

## **Limits**

-   **Container runtime:** Only Docker and Containerd are supported.
    
    Docker:
    
    -   Requires access permissions for docker.sock.
        
    -   Standard output collection supports only the JSON logging driver.
        
    -   Only the overlay and overlay2 storage drivers are supported. For other storage drivers, you must mount the log directory as a volume.
        
    
    Containerd:
    
    -   Requires access permissions for containerd.sock.
        

-   **Multi-line log limits**:
    
    To prevent a multi-line log entry from being split by output latency, the last collected log line is cached for a specified period. The default cache time is 3 seconds. You can change this time using the `BeginLineTimeoutMs` parameter. To prevent incorrect splitting, the value must be at least 1000 milliseconds.
    
-   **Standard output**:
    
    Maximum size for a single log entry: The default is 524288 bytes (512 KB), and the maximum is 8388608 bytes (8 MB). If a single log entry exceeds 524288 bytes, you can change the limit by adding the `max_read_buffer_size` environment variable to the LoongCollector container.
    
    **Important**
    
    Do not enable standard output and standard error at the same time. This can cause out-of-order log collection.
    

## Collection process overview

1.  **Log on to the cluster and prepare log sources**: Prepare standard output logs or text file logs for collection.
    
2.  **Install the LoongCollector collector**: Install LoongCollector, which is used by SLS to collect and transmit logs.
    
3.  **Configure collection rules and parsing plugins**: Define the rules for log collection.
    
4.  **Query and analyze logs**: Query the collected logs to analyze the status of your business.
    

## Key process descriptions

### **Log source and mount target requirements (Important)**

-   For standard output logs, LoongCollector automatically identifies the file path based on container metadata.
    
-   For container text file logs, LoongCollector mounts the host root directory to its own `/logtail_host` directory by default, so manual mounting is not required. If you use a custom mount target, it must meet the following requirements:
    
    **Custom mount target requirements**
    
    **Log file path:**
    
    -   Do not use symbolic links:
        
        -   Incorrect configuration: `/var/log -> /mnt/logs`.
            
        -   Correct configuration: Use the physical path directly, such as `/mnt/logs`.
            
    -   Mount path matching rule: If the data directory of the application container is mounted using a volume, **the collection path must be the same as or a subdirectory of the mount target path.**
        
        ```
        1 Mount target: /var/log/service
        2 ✅ Valid collection path: /var/log/service or /var/log/service/subdir
        3 ❌ Invalid collection path: /var/log (Path is too short)
        ```
        
    

### **Install the collector**

Select a deployment mode based on your scenario:

**Deployment mode:** SLS supports installing LoongCollector in DaemonSet or Sidecar mode.

-   DaemonSet deployment mode: Configure once to automatically deploy a LoongCollector on each node in the cluster. This is the recommended mode for most scenarios.
    
    -   If you use DaemonSet mode, select a deployment method based on the relationship between your cluster and SLS.
        
        -   If you use an ACK cluster, the loongcollector-ds component is already integrated. To complete the installation, enable the component in the ACK console. By default, this method binds the collector to the Alibaba Cloud account that owns the ACK cluster and stores the logs in that account's SLS instance. For more information, see [Install LoongCollector (Kubernetes)](/help/en/sls/loongcollector-installation-kubernetes-1#c89d06a96d0po).
            
        -   If you use an ACK cluster but need to collect its logs into an SLS project that belongs to a different Alibaba Cloud account for reasons such as organizational structure, permission isolation, or unified monitoring, you must manually install the LoongCollector component. Then, configure the component with the destination account's ID or access credential (AccessKey) to establish the association. For more information, see [Install LoongCollector (Kubernetes)](/help/en/sls/loongcollector-installation-kubernetes-1#3763805391bbn).
            
        -   If you use a self-managed cluster, you must manually install the LoongCollector component. Then, configure the component with the destination account's ID or access credential (AccessKey) to establish the association. For more information, see [Install LoongCollector (Kubernetes)](/help/en/sls/loongcollector-installation-kubernetes-1#3763805391bbn).
            
        
        > Installing LoongCollector is a prerequisite for log collection. For the complete collection process, including LoongCollector installation, see [Collect container logs from a Kubernetes cluster using a CRD (standard output/file)](/help/en/sls/collect-text-logs-of-self-built-k8s-clusters-deploy-logtail-in-daemonset-mode-2).
        
-   Sidecar deployment mode: A LoongCollector Sidecar container is injected into each pod alongside the application container. This mode involves more complex deployment and operations and maintenance (O&M). Use this mode for serverless container log collection, when the data volume of pods on a single node exceeds the DaemonSet collection limit, or for log collection from Kubernetes with secure container runtimes. For more information, see [Collect text logs from a Kubernetes pod (Sidecar mode)](/help/en/sls/collect-k8s-cluster-logs-through-sidecar).
    

### **Configure collection rules**

SLS provides two ways to define collection configuration rules:

**Configuration method**

**Features**

**Scenarios**

**Notes**

[Kubernetes CRD](/help/en/sls/collect-text-logs-of-self-built-k8s-clusters-deploy-logtail-in-daemonset-mode-2)

-   **Cloud-native friendly:** Declare configurations using a CustomResourceDefinition (CRD), which seamlessly integrates with the Kubernetes API.
    
-   **Configuration as code**: Supports GitOps workflows and version control.
    
-   **Dynamic updates**: The operator automatically listens for changes and syncs them to LoongCollector in real time.
    

Use the CRD mode for production clusters and scenarios that support CI/CD automation.

-   For a single collection configuration, use only one method for configuration and modification. Otherwise, the configuration may become invalid.
    
-   If multiple collection configurations cover the same file, enable [Allow multiple collections for a file](/help/en/sls/container-log-collection-in-a-kubernetes-cluster/#31ad3fc99ehaf). Otherwise, a random configuration takes effect. Use [data transformation](/help/en/sls/data-processing-new-version-quick-start) to save multiple copies of the logs.
    

[Simple Log Service console](/help/en/sls/container-log-collection-in-a-kubernetes-cluster/)

-   **Simple to use**: Configure through a graphical user interface (GUI) with zero coding.
    
-   **Quick validation**: Suitable for rapid testing.
    
-   **Centralized management**: View all configurations in the SLS console.
    

Because configurations must be associated one by one, this method is suitable for small clusters, temporary debugging, and non-production environments.

## Core concepts

-   **Kubernetes:** Kubernetes (K8s) is an open-source container orchestration platform. It automates the deployment, scaling, and management of containerized applications. It is the core infrastructure for modern cloud-native application development and operations and maintenance (O&M).
    
-   **Standard output, standard error, and text file logs**: Standard output (stdout) is the information printed by a program during normal operation, such as business logs and operation records. It is output to the terminal by default and captured by the container engine for storage. Standard error (stderr) is the error or warning information from a program, such as exception stack traces and startup failure reasons. It is also captured by the container engine and can be mixed with stdout. Text file logs are logs that an application writes to a file, such as Nginx's `access.log` or custom log files. These logs are written directly to the container's internal file system and are destroyed when the container is destroyed. You can use a volume for persistence.
    
-   **Checkpoint mechanism**: A checkpoint records the last collected position in a file. By default, the checkpoint is saved in `/tmp/logtail_checkpoint`. This mechanism ensures the reliability of log collection in the event of a LoongCollector restart or node failure.
    
-   **LoongCollector (Logtail)**: A high-performance log collector developed by Alibaba Cloud. It supports DaemonSet and Sidecar deployment modes in Kubernetes. LoongCollector is an upgraded version of Logtail and is compatible with all Logtail features.
    
-   **Kubernetes CRD:** A CustomResourceDefinition (CRD) is a Kubernetes mechanism that allows users to define custom resources and create instances for configuration. The custom resource type provided by SLS is [AliyunPipelineConfig](/help/en/sls/recommend-use-aliyunpipelineconfig-to-manage-collection-configurations).
    
-   **Collection configuration**: Defines the rules for log collection, including the log type, collection path, log filtering, content parsing, and storage location in Simple Log Service. For more information, see [What is a LoongCollector collection configuration?](/help/en/sls/machine-group-and-collection-configuration-association-guide#3b72034bbewg6).
    
-   **Parsing plugin**: Used in the [processor plugin configuration](/help/en/sls/processing-plug-ins/) of a collection configuration. SLS provides multiple processing units to structure, split, filter, and mask log content. These units support various processing modes, such as regular expression, separator, JSON, and multi-line.
    

## **How log collection works**

1.  A user creates a custom resource (CR) using kubectl to define collection rules.
    
2.  The loongcollector-operator continuously listens for changes to CRs in the cluster.
    
3.  When a CR change is detected, the operator converts it into a specific configuration and submits it to SLS.
    
4.  LoongCollector periodically sends heartbeats to SLS to retrieve configuration updates. It pulls the latest collection configuration and hot-reloads it.
    
5.  loongcollector-ds collects logs based on the latest configuration and sends them to SLS through the configured endpoint.
    

### **How DaemonSet mode works**

A LoongCollector is deployed on each node of the cluster to collect logs from all containers on that node. This mode features simple O&M, low resource consumption, and flexible configuration. However, it provides weak isolation.

**How DaemonSet mode works**

-   In DaemonSet mode, the Kubernetes cluster ensures that only one LoongCollector container runs on each node. This container collects logs from all other containers on the same node.
    
-   When a new node joins the cluster, Kubernetes automatically creates a LoongCollector container on it. When a node leaves the cluster, Kubernetes automatically destroys the LoongCollector container on that node. The auto-scaling mechanism of DaemonSet and identifier-based machine groups eliminates the need for manual management of LoongCollector instances.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9485546671/CAEQTRiBgMCw_8ioyxkiIDVhZTBjOTRlOGFkNjRiNDRiYjg1ZGVkNGNhYzg2MDhl4246905_20240307160520.367.svg)

### **How Sidecar mode works**

A LoongCollector Sidecar container is injected into each pod alongside the application container. The log directory of the application container is mounted as a shared volume using a Kubernetes volume, such as emptyDir, hostPath, or a persistent volume (PV). This makes the log files available in the mount paths of both the application container and the Sidecar container so that LoongCollector can read them directly. This mode features good multi-tenant data isolation and performance. However, it consumes more resources and is more complex to configure and maintain.

**How Sidecar mode works**

-   In Sidecar mode, a LoongCollector container runs in each pod to collect logs from all other containers within that pod. Log collection for different pods is isolated.
    
-   To collect log files from other containers in the same pod, you can use a shared volume. The same volume must be mounted to both the application container and the LoongCollector container.
    
-   If the data volume of pods on a node is exceptionally large and exceeds the collection performance limit of DaemonSet mode, you can use Sidecar mode to allocate specific resources to LoongCollector. This improves log collection performance and stability.
    
-   Serverless containers do not have the concept of nodes, so the traditional DaemonSet deployment mode cannot be used. In this scenario, Sidecar mode can be combined with a serverless architecture to ensure a flexible and adaptable log collection process.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9485546671/CAEQTRiBgMD06cmoyxkiIGViODk2ZWI5Y2UwMDRiYTA5ODQ1Njg1ZTAxMDhmNzc24246905_20240307160520.367.svg)

### **How container discovery works**

For a LoongCollector container to collect logs from other containers, it must discover and identify which containers are running. This process is called container discovery.

-   During the container discovery phase, the LoongCollector container does not communicate with the Kubernetes cluster's [kube-apiserver](https://kubernetes.io/zh-cn/docs/reference/command-line-tools-reference/kube-apiserver/). Instead, it communicates directly with the container runtime daemon on the node to retrieve information about all containers on that node. This avoids putting pressure on the cluster's kube-apiserver.
    
-   LoongCollector can retrieve container context information by accessing the sock file of the container runtime, such as Docker Engine or Containerd, on the host. It supports specifying or excluding containers for log collection based on criteria such as namespace name, pod name, pod label, and container environment variables.
    

### **Standard output collection**

LoongCollector automatically identifies the API or logging driver of different container runtimes, such as Docker and Containerd, based on container metadata. No manual configuration is required. It directly reads the standard output stream of all containers without accessing their internal file systems.

When collecting a container's standard output, LoongCollector periodically saves the collection progress to a checkpoint file. If LoongCollector stops and then restarts, it resumes collection from the last saved position.

### **Container text file log collection**

-   Kubernetes isolates container file systems, so a collector cannot directly access files in other containers. However, container file systems are mounted from the host file system. You can mount the host's root file system to the LoongCollector container to access any file on the host. This lets you indirectly collect files from the application container's file system.
    
-   By default, LoongCollector mounts the file system of the host's root directory to its own `/logtail_host` directory. Manual mounting is not required. For example, if the path of a log file inside the container is `/log/app.log`, and its mapped path on the host is `/var/lib/docker/containers/<container-id>/log/app.log`, then the actual path that LoongCollector collects from is `/logtail_host/var/lib/docker/containers/<container-id>/log/app.log`.
    

### **How multi-line log recognition works**

Each log line is matched against a custom regular expression that defines the start of a line.

-   If a match is found, the line is treated as the start of a new log entry, and a new log entry is started.
    
-   If no match is found, the line is appended to the end of the current log entry.
    

When another line that matches the start-of-line regular expression is found, the current log entry is considered complete, and a new one is started.

### **Log handling when a container stops**

**Runtime**

**Container destruction latency risk**

**Log integrity**

**Optimization suggestion**

Docker

When a container is stopped, LoongCollector immediately releases the container's file handle, allowing the container to exit normally.

If collection is delayed before the container stops due to network latency or high resource usage, some logs from before the stop may be lost.

Increase the log sending frequency by decreasing the value of `flush_interval`.

Containerd

If collection is delayed due to network latency or high resource usage, the application container may not be destroyed promptly.

When a container is stopped, LoongCollector continues to hold the handle of the files inside the container (keeps the log files open) until all log file content has been sent.

Configure `max_hold_buffer_size` to limit memory usage.

### **How container metadata is retrieved**

To retrieve container metadata, LoongCollector interacts directly with the container runtime based on the standard Container Runtime Interface (CRI) API. This allows LoongCollector to retrieve various types of metadata in Kubernetes and implement the Kubernetes metadata AutoTagging feature non-intrusively during collection. This mechanism of direct interaction with the runtime enhances real-time data retrieval and improves the ability to manage container status.

-   **Docker**: The Docker client communicates with the Docker daemon to directly obtain container metadata. This enables in-depth monitoring and management of containers. The main interfaces used include the following:
    
    -   ContainerList: Retrieves a list of currently running containers to quickly identify which containers are running on the current node.
        
    -   ContainerInspect: Provides detailed information for each container, including key information such as configuration and status.
        
    -   Events: Listens for container change events in real time to dynamically track the container lifecycle and promptly update the relevant processing logic.
        
    
    When you retrieve container metadata through the Docker Client, the following information is important:
    
    -   LogPath: This is the storage path of the container's standard output log file on the host. It facilitates log collection and analysis.
        
    -   GraphDriver.Data: This provides the path of the container's rootfs on the host node. This path is key to understanding the storage method of the container's file system and helps with fault diagnosis and performance optimization.
        
-   **Containerd**: Through the CRI, LoongCollector fully supports various scenarios that use containerd and cri-o runtime environments. It can efficiently collect and retrieve container metadata regardless of whether the underlying runtime is runc or Kata Containers. This ensures accurate and unified log data collection regardless of the environment in which the container is running, helping you monitor and analyze log data in real time.
    
    -   The container metadata provided by the CRI includes only the path of the container's standard output log file on the host node. The container's Rootfs path cannot be obtained directly. To solve this problem, you can use one of the following solutions:
        
        -   File path search: Search the host's file system to locate the container's Rootfs path. This method involves traversing the file directories on the host and using the container's unique identifier, such as the container ID, for association and lookup. This lets you retrieve the container's file system. This dynamic search mechanism can overcome issues caused by missing path information and provide support for subsequent log collection and monitoring.
            
        -   Bypass the CRI and interact directly with containerd: Communicate directly with containerd to retrieve more comprehensive and accurate container information. This allows LoongCollector to bypass the limitations of the CRI to obtain the container's Rootfs path and other important metadata.
            

## **Best practices**

### **Unified query and analysis for logs from multiple clusters or environments**

For example, to uniformly query and analyze logs from clusters in different environments, such as testing and production, you can use one of the following three methods:

-   When collecting data, store it in the same Logstore. Add tags to distinguish between environments by following the method in [Collect container logs from a Kubernetes cluster using the console (standard output/file)](/help/en/sls/collect-kubernetes-cluster-text-logs-daemonset#febda209a23im). To perform a unified query, you can directly query and analyze the logs in that Logstore.
    
-   When collecting data, collect it into different Logstores or even projects in different regions. To perform a unified query and analysis, create a [StoreView](/help/en/sls/cross-logstore-query-and-analysis) virtual resource to associate multiple Logstores for querying. This method does not add extra storage costs, but you can only query, not modify, the data. It also does not support setting alerts for monitoring. When using this method, you can use the tag field to determine which Logstore the log came from.
    
-   (**Recommended**) When collecting data, collect it into different Logstores or even projects in different regions. To perform a unified query and analysis, use [data transformation](/help/en/sls/data-processing-new-version-quick-start) to copy the selected data and store it in a specified Logstore. This method lets you parse and process the selected data before you store it and supports setting alerts for monitoring. However, this feature incurs additional charges.
    

### **Collect logs from different sources with a single configuration**

A single collection configuration does not currently support multiple sources. To collect logs from different sources, you must configure multiple collection configurations.

### **Fine-grained collection and multitenancy isolation**

In a multitenancy scenario, you can configure different collection configurations to collect data into different projects for isolation. Data cannot be directly accessed between different projects. You can also configure different access permissions for different projects to meet security isolation requirements.

### **Automated O&M and CI/CD integration**

You can use the CRD method to incorporate collection configurations into GitOps or Infrastructure as Code (IaC) workflows. This enables batch, automated, and traceable management of log collection.
