This topic describes the diagnostic procedure for pods and how to troubleshoot pod errors. This topic also provides answers to some frequently asked questions about pods.

**Note**

To learn about how to troubleshoot pod issues in the console, see [Troubleshoot in the console](#section-qg5-gds-iwn). In the console, you can view the status, basic information, configuration, events, and logs of pods, use a terminal to access containers, and enable pod diagnostics.

## Diagnostic procedure

If a pod does not run as normal, you can identify the cause by checking the events, log, and configuration of the pod. The following figure shows the procedure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0434091371/CAEQLxiBgMCJmbf9mBkiIGI0MTdkY2RjOTU5NjQyYzJhMjU2ZjE3NzliMTdmZmRl4700556_20241009135458.830.svg)

## **Phase 1: Scheduling issues**

### The pod failed to be scheduled

If the pod remains in the Pending state for a long period of time, it means that the pod failed to be scheduled. The following table describes the possible causes.

**Error message**

**Description**

**Suggested solution**

`no nodes available to schedule pods.`

The cluster does not have nodes available for pod scheduling.

1.  Check whether the nodes in the cluster are in the NotReady state. If a node is in the NotReady state, troubleshoot and repair the node.
    
2.  Check whether the node selector, node affinity rules, or taint tolerations are configured for the pod. If no affinity rules are configured for the pod, increase the number of nodes in the node pool.
    

-   `0/x nodes are available: x Insufficient cpu.`
    
-   `0/x nodes are available: x Insufficient memory.`
    

The cluster does not have nodes that can fulfill the CPU or memory request of the pod.

On the **Nodes** page, view the **pod**, **CPU**, and **memory** usage and check the cluster resource utilization.

**Note**

When the CPU and memory utilization of a node is maintained at a low level, scheduling a new pod to the node does not exhaust the node resources. However, the scheduler still checks whether the new pod will cause node resource shortage during peak hours and attempts to avoid improper resource scheduling.

When the CPU or memory resources in the cluster are exhausted, use the following methods:

-   Delete unnecessary pods. For more information, see [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#task-1779995).
    
-   Modify the resource configuration of the pod. For more information, see [Modify the upper and lower limits of CPU and memory resources for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#section-pha-i7u-5ow). Enable [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) to obtain the suggested resource requests and limits for containers.
    
-   Add nodes to the cluster based on the affinity rules of the pod. For more information, see [Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#section-a2i-luy-mnw).
    
-   Upgrade nodes. For more information, see [Upgrade the configurations of a worker node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node#task-895194).
    

-   `x node(s) didn't match node selector.`
    
-   `x node(s) didn't match pod affinity/anti-affinity.`
    

The cluster does not have nodes that match the node affinity rules (nodeSelector) or affinity and anti-affinity rules (podAffinity and podAnitiAffinity) of the pod.

1.  Check and modify the node affinity rules of the pod, including node labels, nodeSelector, nodeAffinity, taints, and tolerations.
    
2.  Check and modify the pod affinity rules of the pod. Assess whether nodes can match the pod affinity rules. If podAffinity is configured, check for pods that match podAffinity on the desired node. If podAntiAffinity is configured, check for pods that match podAntiAffinity on the desired node.
    

`0/x nodes are available: x node(s) had volume node affinity conflict.`

The volume used by the pod has encounters a node affinity conflict because disk volumes cannot be mounted across zones. Consequently, the pod failed to be scheduled.

-   If the pod uses a statically provisioned persistent volume (PV) and you want to schedule the pod to a node in the zone of the PV, you must configure a node affinity rule for the pod.
    
-   If the pod uses a dynamically provisioned PV, you must set the volumeBindingMode in the StorageClass of the disk volume to WaitForFirstConsumer. This way, the volume is created only after the pod is scheduled to a node. This ensures that the volume resides in the zone of the node that hosts the pod.
    

`InvalidInstanceType.NotSupportDiskCategory`

The disk type is not supported by Elastic Compute Service (ECS) instances.

Refer to [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb) and check the disk types supported by ECS instances. Mount a disk that is supported by ECS instances to the pod.

`0/x nodes are available: x node(s) had taints that the pod didn't tolerate.`

The pod failed to be scheduled to the desired node because the node has a taint.

-   If the taint is manually added by you, delete the taint. If the taint must be retained, you can add a toleration to the pod. For more information, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) and [Manage taints](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-taints-and-tolerations#task-2553278).
    
-   If the taint is added by the system, refer to the following solution and wait for the scheduler to reschedule the pod.
    
    **View taints added by the system**
    
    -   `node.kubernetes.io/not-ready`: The node is in the NotReady state.
        
    -   `node.kubernetes.io/unreachable`: The node controller failed to access the node. The value of the `Ready` field of the node is `Unknown`.
        
    -   `node.kubernetes.io/memory-pressure`: The node does not have sufficient memory resources.
        
    -   `node.kubernetes.io/disk-pressure`: The node does not have sufficient disk space.
        
    -   `node.kubernetes.io/pid-pressure`: The node does not have sufficient process IDs (PIDs).
        
    -   `node.kubernetes.io/network-unavailable`: The network of the node is unavailable.
        
    -   `node.kubernetes.io/unschedulable`: The node is in the Unschedulable state.
        
    

`0/x nodes are available: x Insufficient ephemeral-storage.`

The node does not have sufficient ephemeral storage space.

1.  Check whether the pod has a limit on ephemeral volumes, which is specified in `spec.containers.resources.request.ephemeral-storage` of the pod YAML file. If the value exceeds the ephemeral storage capacity of the node, the pod failed to be scheduled.
    
2.  Run the `kubectl describe node | grep -A10 Capacity` command to view the total ephemeral storage space of all nodes. If the storage space does not meet your requirement, expand the disks of the nodes or add nodes.
    

`0/x nodes are available: pod has unbound immediate PersistentVolumeClaims.`

The persistent volume claim (PVC) failed to be bound to the pod.

Check whether the PVC or PV specified for the pod is created. You can run the `kubectl describe pvc <pvc-name>` or `kubectl describe pv <pv-name>` command to view the events of the PVC or PV. For more information, see [Why does the system generate the "0/x nodes are available: x pod has unbound immediate PersistentVolumeClaims" event for a pod?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-csi#section-4xc-k2n-l04)

### The pod is already scheduled to a node

If the pod is already scheduled to a node but remains in the Pending state, refer to the following solution.

1.  Check whether the pod is configured with a `hostPort`: If the pod is configured with a `hostPort`, only one pods that uses the `hostPort` can run on each node. Therefore, the value of `Replicas` in a Deployment or ReplicationController must not exceed the number of nodes in the cluster. If the host port of a node is used by other applications, the pod failed to be scheduled to the node.
    
    The `hostPort` setting increases the complexity of pod management and scheduling. We recommend that you use Services to access pods. For more information, see [Services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#section-8r6-o68-beu).
    
2.  If the pod is not configured with a `hostPort`, perform the following steps.
    
    1.  Run the `kubectl describe pod <pod-name>` command to view the events of the pod and troubleshoot the issue. The events may display the cause of the pod startup failure, such as image pulling failures, insufficient resources, limits due to security policies, or configuration errors.
        
    2.  If you failed to locate the cause in the events, check the logs of the kubelet on the node. You can run the `grep -i <pod name> /var/log/messages* | less` command to check for log entries that contain the pod name in the system log file (`/var/log/messages*`).
        

## **Phase 2: Image pulling issues**

**Error message**

**Description**

**Suggested solution**

`Failed to pull image "xxx": rpc error: code = Unknown desc = Error response from daemon: Get xxx: denied:`

Access to the image repository is denied because `imagePullSecret` is not configured for the pod.

Check whether the Secret specified in the `spec.template.imagePullSecrets` parameter of the pod YAML file exists.

If Container Registry is used, you can use the aliyun-acr-credential-helper component to pull images without a password. For more information, see [Use the aliyun-acr-credential-helper component to pull images without using a secret](/help/en/doc-detail/2705224.html).

`Failed to pull image "xxxx:xxx": rpc error: code = Unknown desc = Error response from daemon: Get https://xxxxxx/xxxxx/: dial tcp: lookup xxxxxxx.xxxxx: no such host`

Failed to parse the image address when pulling an image from the specified image repository over HTTP.

1.  Check whether the address of the image repository specified in the `spec.containers.image` parameter of the pod YAML file is correct. If not, revise the image repository address.
    
2.  If the address is correct, check whether the node of the pod is connected to the network of the image repository. Refer to [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance) and log on to the node of the pod, and run the `curl -kv https://xxxxxx/xxxxx/` command to check whether the node can access the image repository. If an error is thrown, check the network configuration, firewall rules, and DNS configuration for network access issues.
    

`Failed create pod sandbox: rpc error: code = Unknown desc = failed to create a sandbox for pod "xxxxxxxxx": Error response from daemon: mkdir xxxxx: no space left on device`

The node does not have sufficient disk space.

Refer to [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance) and log on to the node of the pod, and run the `df -h` command to view the disk space. If the disk space is exhausted, expand the disk. For more information, see [Step 1: Resize a disk to extend the capacity of the disk](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity#concept-syg-jxz-2hb).

`Failed to pull image "xxx": rpc error: code = Unknown desc = error pulling image configuration: xxx x509: certificate signed by unknown authority`

The third-party image repository uses a certificate signed and issued by an unknown or untrusted certificate authority.

1.  We recommend that you use a certificate signed and issued by a trusted certificate authority.
    
2.  Check whether the image is pulled from a private image repository. For more information, see [Create an application from a private image repository](/help/en/ack/create-an-application-by-using-a-private-image-repository#task-1614276).
    
3.  If you cannot change the image repository, refer to the following procedure and configure the node to use an untrusted certificate to pull images from and push images to the image repository. We recommend that you use this method in a staging environment because this method may affect other pods on the node.
    

**View the procedure**

1.  Create a certificate directory for containerd to store certificate configuration files related to the image repository.
    
    ```
       $ mkdir -p /etc/containerd/cert.d/xxxxx
    ```
    
2.  Configure containerd to trust the image repository.
    
    ```
       $ cat << EOF > /etc/containerd/cert.d/xxxxx/hosts.toml
       server = "https://harbor.test-cri.com"
       [host."https://harbor.test-cri.com"]
         capabilities = ["pull", "resolve", "push"]
         skip_verify = true
         # ca = "/opt/ssl/ca.crt"  # You can also upload a CA certificate.
       EOF
    ```
    
3.  Add the untrusted image repository to the Docker daemon configuration.
    
    ```
       vi /etc/docker/daemon.json
    ```
    
    Add the following content. Replace `your-insecure-registry` with the address of the untrusted image repository.
    
    ```
       {
         "insecure-registries": ["your-insecure-registry"]
       }
    ```
    
4.  Restart the service for the modification to take effect.
    
    ```
       systemctl restart systemd
       systemctl restart docker
    ```
    

`Failed to pull image "XXX": rpc error: code = Unknown desc = context canceled`

The operation is canceled because the image file is too large. Kubernetes has a default timeout period for image pulling. if the progress of image pulling is not updated within a specific time period, Kubernetes considers that an error occurs or no response is returned and then cancels the operation.

1.  Check whether the `imagePullPolicy` parameter in the pod YAML file is set to `IfNotPresent`.
    
2.  Refer to [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance) and log on to the node of the pod, and run the `docker pull` or `ctr images pull` command to check whether the image can be successfully pulled.
    

`Failed to pull image "xxxxx": rpc error: code = Unknown desc = Error response from daemon: Get https://xxxxxxx: xxxxx/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)`

Failed to connect to the image repository.

1.  Refer to [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance) and log on to the node of the pod, and run the `curl https://xxxxxx/xxxxx/` command to check whether the address of the image repository is accessible. If an error is thrown, check the network configuration, firewall rules, and DNS configuration for network access issues.
    
2.  Check whether the Internet access policy of the node is configured as expected. For example, check the Source Network Address Translation (SNAT) entries and EIP.
    

`Too Many Requests.`

DockerHub sets a [rate limit](https://www.docker.com/increase-rate-limits/) on image pulling requests.

Upload the image to [Container Registry](/help/en/acr/product-overview/what-is-container-registry) and pull the image from Container Registry.

`Pulling image` is consistently displayed

The upper limit of image pulling by using the kubelet may be reached.

Refer to [Customize the kubelet parameters of a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool) and modify the maximum image repository QPS (registryPullQPS) and the maximum size of a burst of image pulling (registryBurst).

## **Phase 3: Startup issues**

### **The pod is in the Init state**

**Error message**

**Description**

**Suggested solution**

The pod remains in the `Init:N/M` state

The pod contains M Init containers. N containers have been started. M-N Init containers have not started.

1.  Run the `kubectl describe pod -n <ns> <pod name>` command to view the events of the pod. Make sure that no anomalies occur in the Init containers that have not started.
    
2.  Run the `kubectl logs -n <ns> <pod name> -c <container name>` command to view the logs of the Init containers that have not started in the pod and troubleshoot the error based on the log data.
    
3.  Check whether the Init container configuration in the pod configuration contains errors, such as the health check configuration.
    

For more information about init containers, see [Debug init containers](https://kubernetes.io/zh/docs/tasks/debug/debug-application/debug-init-containers/).

The pod remains in the `Init:Error` state

Init containers in the pod failed to start.

The pod remains in the `Init:CrashLoopBackOff` state

Init containers in the pod failed to start and repetitively restart.

### **The pod is being created (Creating)**

**Error message**

**Description**

**Suggested solution**

`failed to allocate for range 0: no IP addresses available in range set: xx.xxx.xx.xx-xx.xx.xx.xx`

This error is expected due to the design of the Flannel network plug-in.

Update Flannel to v0.15.1.11-7e95fe23-aliyun or later. For more information, see [Flannel](/help/en/ack/product-overview/flannel).

If the cluster runs a Kubernetes version earlier than 1.20 and a pod repetitively restarts or pods created by a CronJob complete the tasks and exit after a short period of time, an IP leak may occur.

Update the Kubernetes version of the cluster to 1.20 or later. We recommend that you update to the latest version. For more information, see [Manually upgrade ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

containerd and runC have defects.

For more information, see [What do I do if a pod fails to be started and the "no IP addresses available in range" error message appears?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-iiz-3h3-xyl)

`error parse config, can't found dev by mac 00:16:3e:01:c2:e8: not found`

The internal database status maintained by Terway and used to track and manage elastic network interfaces (ENIs) on the node of the pod is inconsistent with the actual network device configuration. Consequently, ENIs failed to be allocated.

1.  ENIs are asynchronously loaded. When you configure the CNI, the system may still be loading ENIs. This can cause the CNI to retry ENI allocation. This does not affect the final ENI allocation result. You can determine whether the operation is successful based on the final state of the pod.
    
2.  If the pod failed to be created for a long period of time and the preceding error is thrown, the driver failed to be loaded during ENI attaching because of insufficient high-level memory. To address this issue, restart the corresponding ECS instance. For more information, see [Restart an instance](/help/en/ecs/user-guide/restart-instances).
    

-   `cmdAdd: error alloc ip rpc error: code = DeadlineExceeded desc = context deadline exceeded`
    
-   `cmdAdd: error alloc ip rpc error: code = Unknown desc = error wait pod eni info, timed out waiting for the condition`
    

Terway failed to request an IP address from the vSwitch.

1.  View the container log of the Terway pod on the node that hosts the pod and check the ENI allocation process.
    
2.  Run the `kubectl logs -n kube-system <terwayPodName > -c terway | grep <podName>` command to view the ENI information of the Terway pod. Obtain the request ID of the operation that is performed to request an IP address and the error message returned by the API.
    
3.  Locate the cause based on the request ID and error message.
    

### **The pod failed to start (CrashLoopBackOff)**

**Error message**

**Description**

**Suggested solution**

The log displays `exit(0)`.

1.  Log on to the node where the abnormal workload is deployed.
    
2.  Run the `docker ps -a | grep $podName` command. If no persistent process exists in the pod, `exit (0)` is displayed.
    

The event information displays `Liveness probe failed: Get http…`.

A health check failure occurred.

Check the liveness probe policy of the pod. Make sure that the liveness probing result can indicate the actual status of the applications running in the containers of the pod.

The pod log displays `no left space`.

The disk space is insufficient.

-   Refer to [Step 1: Resize a disk to extend the capacity of the disk](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity) and expand the disk.
    
-   Delete unused images to free disk space and configure imageGCHighThresholdPercent to adjust the threshold for triggering image garbage collection on the node.
    

The pod failed to start and no event is generated

The resource limits of the pod are lower than the resources requested by the pod. Consequently, containers in the pod failed to start.

Check the resource configuration of the pod. You can enable [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) to obtain suggested resource requests and resource limits.

The pod log displays `Address already in use`.

Containers in the pod encounter a port conflict.

1.  Check whether `hostNetwork: true` is configured for the pod. If yes, containers in the pod share ENIs and ports with the host. If you do not want to use the host network, specify `hostNetwork: false`.
    
2.  If `hostNetwork: true` is configured, configure pod anti-affinity rules to ensure that pods of the same replica set are not scheduled to the same node.
    
3.  Make sure that pods using the same port are not scheduled to the same node.
    

The pod log displays `container init caused \"setenv: invalid argument\"": unknown`.

The workload is mounted with a Secret. The key value of the Secret is not encoded by using Base64.

-   The key values of Secrets created in the console are automatically encoded by using Base64. For more information, see [Manage Secrets](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-secrets).
    
-   Use YAML to create a Secret and run the `echo -n "xxxxx" | base64` command to encrypt the key value by using Base64.
    

A business issue exists.

Locate the cause based on the pod log.

## **Phase 4: pod operation issues**

### **OOM**

If the memory usage of a container in the cluster exceeds the specified memory limit, the container may be terminated and trigger an OOM event, which causes the container to exit. For more information about OOM events, see [Allocate memory resources to containers and pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/).

-   If the terminated process causes the stuck container, the container may restart.
    
-   If an OOM error occurs, log on to the console and navigate to the pod details page. On the **Events** tab, you can view the following OOM event: **pod was OOM killed**.
    
-   If the cluster is configured with an alert rule for container replica exceptions, you will receive an alert when an OOM event occurs. For more information, see [Alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#task-2056339).
    

**OOM level**

**Description**

**Suggested solution**

OS level

The kernel log (`/var/log/messages`) of the node that hosts the pod displays a killed process but no cgroup log is generated. This means that the OOM error is OS-level.

Possible causes are insufficient system global memory, insufficient node memory, or insufficient buddy system memory during memory fragmentation. For more information about the causes of memory shortage, see [Possible causes](/help/en/alinux/support/causes-of-and-solutions-to-the-issue-of-oom-killer-being-triggered#section-v6c-lau-22i). For more information about the solutions, see [Solutions](/help/en/alinux/support/causes-of-and-solutions-to-the-issue-of-oom-killer-being-triggered#section-ljw-i5l-rtm).

cgroup level

The kernel log (`/var/log/messages`) of the node that hosts the pod displays an error message similar to `Task in /kubepods.slice/xxxxx killed as a result of limit of /kubepods.slice/xxxx`. This means that the OOM error is cgroup-level.

If the process runs as normal, increase the memory limit of the pod accordingly. Make sure that the actual memory usage of the pod does not exceed 80% of the memory limit. For more information, see [Modify the upper limit and lower limit of CPU and memory resources for pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#section-pha-i7u-5ow). You can enable [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) to obtain suggested resource requests and resource limits for containers.

### **Terminating**

**Possible cause**

**Description**

**Suggested solution**

The node is abnormal and in the NotReady state.

A NotReady node is automatically removed after it recovers.

Finalizers are configured for the pod.

If finalizers are configured for the pod, Kubernetes performs the cleanup operations specified by the finalizers before deleting the pod. If no responses are returned for the cleanup operations, the pod remains in the Terminating state.

Run the `kubectl get pod -n <ns> <pod name> -o yaml` command to view the finalizer configuration of the pod and locate the cause.

The preStop hook of the pod is invalid.

If the preStop hook is configured for the pod, Kubernetes performs the operations specified by the preStop hook before terminating the pod. The pod is at the preStop stage and will enter the Terminating state.

Run the `kubectl get pod -n <ns> <pod name> -o yaml` command to view the preStop configuration of the pod and locate the cause.

The pod is configured with a graceful shutdown period.

If the pod is configured with a graceful shutdown period (`terminationGracePeriodSeconds`), the pod enters the Terminating state after receiving a termination command, such as `kubectl delete pod <pod_name>`. Kubernetes considers that the pod is terminated after the graceful shutdown period (`terminationGracePeriodSeconds`) ends or all containers in the pod exit before the graceful shutdown period ends.

After the containers gracefully exit, Kubernetes deletes the pod.

Containers do not respond.

After you initiate a request to terminate or delete the pod, Kubernetes sends the `SIGTERM` signal to the containers in the pod. If the containers do not respond to the `SIGTERM` signal, the pod may remain in the Terminating state.

1.  Run the `kubectl delete pod <pod-name> --grace-period=0 --force` command to forcefully delete the pod.
    
2.  Check the containerd or Docker log of the node that hosts the pod and locate the cause.
    

### **Evicted**

**Possible cause**

**Description**

**Suggested solution**

The node does not have sufficient resources, such as memory or disk space resources. Consequently, the kubelet evicts one or more pods on the node to reclaim resources.

The node may not have sufficient memory, disk space, or PIDs. Run the `kubectl describe node <node name> | grep Taints` command to query node taints.

-   Insufficient memory: The node has the `node.kubernetes.io/memory-pressure` taint.
    
-   Insufficient disk space: The node has the `node.kubernetes.io/disk-pressure` taint.
    
-   Insufficient PIDs: The node has the `node.kubernetes.io/pid-pressure` taint.
    

-   Insufficient memory:
    
    -   Adjust the resource configuration of the pod. For more information, see [Manage pods](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#section-pha-i7u-5ow).
        
    -   Upgrade the node. For more information, see [Upgrade the configurations of a worker node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-worker-node#task-895194).
        
-   Insufficient disk space:
    
    -   Periodically delete the logs of application pods on the node.
        
    -   Expand the disk of the node. For more information, see [Step 1: Resize a disk to extend the capacity of the disk](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity#concept-syg-jxz-2hb).
        
-   Insufficient PIDs: Modify the resource settings of the pod. For more information, see [Process ID Limits And Reservations](https://kubernetes.io/docs/concepts/policy/pid-limiting/).
    

An unexpected eviction occurs.

The node that hosts the pod has the NoExecute taint. Consequently, an unexpected eviction occurs.

Run the `kubectl describe node <node name> | grep Taints` command to check whether the node has the NoExecute taint. If yes, delete the taint.

The pod is not evicted as expected.

-   `--pod-eviction-timeout`: the pod eviction timeout period. When the node downtime exceeds the specified timeout period, pods are evicted from the node. The default timeout period is 5 minutes.
    
-   `--node-eviction-rate`: the number of pods evicted per second. The default is 0.1, which means that at least one pod is evicted from the node every 10 seconds.
    
-   `--secondary-node-eviction-rate`: the secondary pod eviction rate. If an excessive number of nodes are down, pod eviction is tuned to the secondary rate. The default value is 0.01.
    
-   `--unhealthy-zone-threshold`: the unhealthy zone threshold. The default value is 0.55. When the number of failed nodes exceeds 55% of the total number of nodes, the zone is considered unhealthy.
    
-   `--large-cluster-size-threshold`: the large cluster threshold. The default value is 50. When the number of cluster nodes exceeds 50, the cluster is considered a large cluster.
    

In a small cluster which contains no more than 50 nodes, if more than 55% of the nodes are down, pod eviction is stopped. For more information, see [Rate limits on eviction](https://kubernetes.io/docs/concepts/architecture/nodes/#rate-limits-on-eviction).

In a large cluster which contains more than 50 nodes, if the ratio of unhealthy nodes to total nodes exceeds the value of `--unhealthy-zone-threshold` (the default is 0.55), the eviction rate is set to the value of `--secondary-node-eviction-rate`. This parameter specifies the maximum proportion of pods evicted per minute. The default value is 0.01. For more information, see [Rate limits on eviction](https://kubernetes.io/docs/concepts/architecture/nodes/#rate-limits-on-eviction).

The pod is still frequently scheduled to the original node after it is evicted.

Pods are evicted from a node based on the resource usage of the node. The pod scheduling rule depends on the allocated resources on the node. An evicted pod may be scheduled to the original node again.

Check whether the resource requests of the pod are properly configured based on the allocatable resources on the node. For more information, see [Modify the upper and lower limits of CPU and memory resources for a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-pods#section-pha-i7u-5ow). You can enable [resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling) to obtain suggested resource requests and resource limits for containers.

### **Completed**

When a pod is in the Completed state, all containers in the pod have started and all processes in the containers have successfully exited. The Completed state is usually suitable for Job and Init containers.

## **Other frequently asked questions**

### **The pod remains in the Running state but does not run as normal**

If the pod YAML file contains errors, the pod may remain in the Running state but does not run as normal. To address this issue, perform the following steps.

1.  Inspect the configurations of the pod and check whether the containers in the pod are configured as expected.
    
2.  Use the following method to check whether the keys of the environment variables contain spelling errors.
    
    If the key of an environment variable contains spelling errors, for example, `command` is spelled as `commnd`, the cluster can ignore the spelling errors and create pods based on the YAML file. However, containers cannot execute the commands specified in the YAML file.
    
    The following example describes how to identify spelling errors if you spell `command` as `commnd`.
    
    1.  Add `--validate` before the `kubectl apply -f` command and run the `kubectl apply --validate -f XXX.yaml` command.
        
        If a spelling error exists, the `XXX] unknown field: commnd XXX] this may be a false alarm, see https://gXXXb.XXX/6842pods/test` message is displayed.
        
    2.  Run the following command to compare the pod.yaml file that you checked with the YAML file used to create pods.
        
        **Note**
        
        Replace `[$Pod]` with the name of the abnormal pod. You can run the `kubectl get pods` command to obtain the name.
        
        ```
          kubectl get pods [$Pod] -o yaml > pod.yaml
        ```
        
        -   If the pod.yaml file contains more lines than the original YAML file used to create pods, this means that pods are created as expected.
            
        -   If the YAML command lines for creating pods are not found in the pod.yaml file, this means that the original YAML file contains spelling errors.
            
3.  Check the log of the pod and troubleshoot the issue based on the log data.
    
4.  You can log on to a container of the pod by using the terminal and check the local files in the container.
    

### **A network disconnection issue occasionally occurs when a pod accesses a database**

If a network disconnection issue occasionally occurs when a pod in the ACK cluster accesses a database, you can perform the following operations to troubleshoot the issue.

#### **1\. Check the pod**

-   View the events of the pod and check for unstable connection events, such as events related to network exceptions, restarts, and insufficient resources.
    
-   View the logs of the pod and check for database connection errors, such as connection timeouts, authentication failures, or reconnection.
    
-   View the CPU and memory usage of the pod. Make sure that the application or database driver does not exceptionally exit due to insufficient resources.
    
-   View the resource requests and limits of the pod. Make sure that the pod has sufficient CPU and memory resources.
    

#### **2\. Check the node**

-   Check the resource usage of the node and ensure that resources such as memory and disk resources are sufficient. For more information, see [Monitor nodes](/help/en/ack/monitor-nodes).
    
-   Test whether network disconnection occasionally occurs between the node and the database.
    

#### **3\. Check the database**

-   Check the status and performance metrics of the database to ensure that no restarts or performance bottlenecks exist.
    
-   View the number of abnormal connections and check the timeout period setting, and modify the setting based on your business requirements.
    
-   Analyze the database logs related to disconnections from the database.
    

#### **4\. Check the status of the cluster components**

Cluster component exceptions affect the communication between pods and other components in the cluster. Run the following command to check the status of the components in the ACK cluster:

```
kubectl get pod -n kube-system  # View the component status.
```

Check the network components:

-   CoreDNS: Check the status and logs of the component. Make sure that the pod can parse the address of the database service.
    
-   Flannel: Check the status and logs of kube-flannel.
    
-   Terway: Check the status and logs of terway-eniip.
    

#### **5\. Analyze the network traffic**

You can use `tcpdump` to capture packets and analyze network traffic to help locate the cause.

1.  Run the following command to identify the pod and node where the database disconnection issue occurred.
    
    ```
    kubectl  get pod -n [namespace] -o wide 
    ```
    
2.  Log on to the node. For more information, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).
    
    Run the following commands to query the container PID based on different Kubernetes versions.
    
    ## containerd (Kubernetes versions later than 1.22)
    
    1.  Run the following command to view the `CONTAINER`:
        
        ```
        crictl ps |grep <Pod name keyword>
        ```
        
        Expected output:
        
        ```
        CONTAINER           IMAGE               CREATED             STATE                      
        a1a214d2*****       35d28df4*****       2 days ago          Running
        ```
        
    2.  Specify the `CONTAINER ID` parameter and run the following command to view the container PID:
        
        ```
        crictl inspect  a1a214d2***** |grep -i PID
        ```
        
        Expected output:
        
        ```
        "pid": 2309838, # The PID of the container. 
                    "pid": 1
                    "type": "pid"
        ```
        
    
    ## Docker (Kubernetes 1.22 and earlier)
    
    1.  Run the following command to view the `CONTAINER ID`:
        
        ```
        docker ps | grep <Pod name or keyword>
        ```
        
        Expected output:
        
        ```
        CONTAINER ID        IMAGE                  COMMAND     
        a1a214d2*****       35d28df4*****          "/nginx
        ```
        
    2.  Specify the `CONTAINER ID` parameter and run the following command to view the PID of the container:
        
        ```
        docker inspect  a1a214d2***** |grep -i PID
        ```
        
        Expected output:
        
        ```
        "Pid": 2309838, # The PID of the container. 
                    "PidMode": "",
                    "PidsLimit": null,
        ```
        
    
3.  Run the packet capture command.
    
    Run the following command based on the container PID to capture packets transmitted between the pod and database:
    
    ```
    nsenter -t <Container PID> tcpdump -i any -n -s 0 tcp and host <IP address of the database>
    ```
    
    Run the following command based on the container PID to capture packets transmitted between the pod and host:
    
    ```
    nsenter -t <Container PID> tcpdump -i any -n -s 0 tcp and host <IP address of the node>
    ```
    
    Run the following command to capture packets transmitted between the host and database.
    
    ```
    tcpdump -i any -n -s 0 tcp and host <IP address of the database>
    ```
    

#### **6\. Optimize the application**

-   Configure your application to support the automatic reconnection mechanism to ensure that the application can automatically restore the connection without manual intervention when the database is changed or migrated.
    
-   Use persistent connections instead of short-lived connections to communicate with the database. Persistent connections can significantly reduce performance loss and resource consumption, and enhance the overall system efficiency.
    

## Troubleshoot in the console

You can log on to the [ACK console](https://cs.console.alibabacloud.com), navigate to the cluster details page, and then troubleshoot abnormal pods.

**Operation**

**Layout of the console**

Check the status of a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  In the upper-left corner of the **Pods** page, select the **namespace** to which the pod belongs and check the status of the pod.
    
    -   If the pod is in the Running state, the pod runs as expected.
        
    -   If the pod is not in the Running state, the pod is abnormal. To troubleshoot the issue, read this topic.
        

Check the basic information of a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  In the upper-left corner of the **Pods** page, select the **namespace** to which the pod belongs. In the list of pods, find the pod and click the name of the pod or click View Details in the Actions column to view information about the pod. You can view the name, image, and IP address of the pod and the node that hosts the pod.
    

Check the configuration of a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  In the upper-left corner of the **Pods** page, select the **namespace** to which the pod belongs. In the list of pods, find the pod and click the name of the pod or click View Details in the Actions column.
    
3.  In the upper-right corner of the pod details page, click **Edit** to view the YAML file and configuration of the pod.
    

Check the events of a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  In the upper-left corner of the **Pods** page, select the **namespace** to which the pod belongs. In the list of pods, find the pod and click the name of the pod or click View Details in the Actions column.
    
3.  At the bottom of the pod details page, click the **Events** tab to view events of the pod.
    
    **Note**
    
    By default, Kubernetes retains the events that occurred within the previous hour. If you want to retain events that occurred within a longer time period, see [Create and use an event center](/help/en/sls/create-and-use-an-event-center#task-2389213).
    

Check the logs of a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  In the upper-left corner of the **Pods** page, select the **namespace** to which the pod belongs. In the list of pods, find the pod and click the name of the pod or click View Details in the Actions column.
    
3.  At the bottom of the pod details page, click the **Logs** tab to view the log data of the pod.
    

**Note**

ACK clusters are interfaced with Simple Log Service. You can enable Simple Log Service for your cluster to quickly collect container logs. For more information, see [Collect text logs from Kubernetes containers in DaemonSet mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents).

Check the monitoring information about a pod

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Operations** > **Prometheus Monitoring**.
    
2.  On the **Prometheus Monitoring** page, click the **Cluster Overview** tab to view the following monitoring information about pods: CPU usage, memory usage, and network I/O.
    

**Note**

ACK clusters are interfaced with Managed Service for Prometheus. You can enable Managed Service for Prometheus for an ACK cluster to monitor the cluster and containers in the cluster in real time. After you enable Managed Service for Prometheus, you can view metrics displayed on Grafana dashboards. For more information, see [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).

Log on to a container of a pod by using the terminal and view local files in the container

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  On the **Pods** page, find the pod that you want to manage and click **Terminal** in the **Actions** column.
    

Enable pod diagnostics

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Workloads** > **Pods**.
    
2.  On the **Pods** page, find the pod that you want to diagnose and click **Diagnose** in the **Actions** column.
    

**Note**

Container Intelligent Service provides the cluster diagnostics feature to allow you to diagnose pods, Services, and Ingresses with one click and help you locate the cause. For more information, see [Work with cluster diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/).
