The ack-koordinator component provides a load-based hot spot descheduling feature. This feature detects changes in node loads within a cluster and automatically deschedules pods from nodes that exceed a safe load threshold. This prevents severe load imbalances. This topic describes how to use load-based hot spot descheduling and its advanced configuration parameters.

## Limits

-   Only [ACK managed Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) are supported.
    
-   The related components must meet the following version requirements.
    
    **Component**
    
    **Version requirements**
    
    ACK Scheduler
    
    v1.22.15-ack-4.0 or later, v1.24.6-ack-4.0 or later
    
    ack-koordinator
    
    v1.1.1-ack.1 or later
    
    Helm
    
    v3.0 or later
    

**Important**

-   The K8s Spot Rescheduler only evicts pods. The pods are then rescheduled by the ACK Scheduler. We recommend that you use the descheduling feature in conjunction with [load-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#task-2105329). This allows the ACK Scheduler to avoid rescheduling pods to hot spot nodes.
    
-   During descheduling, old pods are evicted before new pods are created. Make sure that your application has enough redundant replicas to prevent the eviction from affecting application availability.
    
-   Descheduling uses the standard Kubernetes [eviction API](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/api-eviction/) to evict pods. Make sure that the logic of your application pods is re-entrant so that your service is not disrupted by restarts after the eviction.
    

## Billing

The ack-koordinator component is free to install and use. However, additional fees may be incurred in the following scenarios:

-   ack-koordinator is a self-managed component and consumes worker node resources after installation. You can configure the resource requests for each module when you install the component.
    
-   By default, ack-koordinator exposes monitoring metrics for features such as resource profiling and fine-grained scheduling in Prometheus format. If you select the **Enable Prometheus Monitoring for ACK-Koordinator** option when you configure the component and use the Alibaba Cloud Prometheus service, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and incur fees. The fees depend on factors such as your cluster size and the number of applications. Before you enable this feature, carefully read the [Billing of Prometheus instances](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) documentation for Alibaba Cloud Prometheus to understand the free quota and billing policies for custom metrics. You can monitor and manage your resource usage by [querying usage data](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Introduction to load hotspot descheduling

### Load-aware scheduling

The ACK scheduler supports load-aware scheduling, which can schedule pods to nodes that run with low loads. Because the cluster environment, traffic, and requests change, node utilization also changes dynamically. This can disrupt the load balance between nodes in the cluster and even result in severe load imbalances. This affects the runtime quality of the workload. ack-koordinator can identify changes in node loads and automatically deschedule pods from nodes that exceed a safe load threshold to prevent severe load imbalances. You can combine load-aware scheduling with hot spot descheduling to achieve optimal load balancing among nodes. For more information, see [Use load-aware pod scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#task-2105329).

### How the Koordinator Descheduler module works

The ack-koordinator component provides the Koordinator Descheduler module. In this module, the LowNodeLoad plug-in detects load levels and performs load-based hot spot descheduling. Unlike the LowNodeUtilization plug-in of the native Kubernetes descheduler, the LowNodeLoad plug-in makes descheduling decisions based on the actual resource utilization of nodes, whereas the LowNodeUtilization plug-in makes decisions based on the resource allocation rate.

#### **Execution procedure**

The Koordinator Descheduler module runs periodically. Each execution cycle consists of the following three stages.

![Koordinator Descheduler execution procedure](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0502968761/p562984.jpg)

1.  Data collection: Obtains information about the nodes and workloads in the cluster and their related resource utilization data.
    
2.  Policy plug-in execution.
    
    The following steps use the LowNodeLoad plug-in as an example.
    
    1.  Identifies hot spot nodes. For more information about the classification of nodes, see [LowNodeLoad load threshold parameters](#829fa903f58jg).
        
    2.  Traverses all hot spot nodes, identifies the pods that can be migrated, and sorts the pods. For more information about how pods are scored and sorted, see [Pod scoring policy](#p-9xg-4y9-stg).
        
    3.  Traverses all pods to be migrated and checks whether the pods meet the requirements for migration based on constraints such as the cluster size, resource utilization, and the ratio of replicated pods. For more information, see [Load-aware hot spot descheduling policies](#p-9xg-4y9-stg).
        
    4.  If a pod meets the conditions, it is classified as a replica to be migrated. If not, the process continues to traverse other pods and hot spot nodes.
        
3.  Pod eviction and migration: Evicts the pods that meet the requirements for migration. For more information, see [API-initiated Eviction](https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/api-eviction/).
    

#### **LowNodeLoad Load Threshold Parameters**

The LowNodeLoad plug-in has two important parameters.

-   `highThresholds`: The high load threshold. Pods on nodes with a load higher than this threshold are eligible for descheduling. Pods on nodes with a load lower than this threshold are not descheduled. We recommend that you also enable the load-aware scheduling feature of the scheduler. For more information, see [Scheduling policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#row-42i-i7q-yai). For more information about how to use these features together, see [How do I use load-aware scheduling and load-based hot spot descheduling together?](#p-zuf-5r4-l12).
    
-   `lowThresholds`: The idle load threshold.
    

If the load level of all nodes is higher than `lowThresholds`, the overall cluster load level is considered high. In this case, the Koordinator Descheduler will not perform descheduling even if the load level of some nodes is higher than `highThresholds`.

For example, in the following figure, `lowThresholds` is set to 45% and `highThresholds` is set to 70%. The nodes are classified based on the following criteria. Similarly, if the values of `lowThresholds` and `highThresholds` change, the node classification criteria also change accordingly.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1843579671/CAEQOhiBgMCuncHyshkiIDYxNTg5NmNiNTYwMjQ1ODc4Yjk4OTRkZTdmMWExZWJj3963382_20230830144006.372.svg)

By default, resource utilization data is updated every minute. The granularity is the average value over the last 5 minutes.

-   Idle Node: A node with resource utilization below 45%.
    
-   Normal Node: A node with resource utilization greater than or equal to 45% and less than or equal to 70%. This load level is the desired range.
    
-   Hot Spot Node: A node with resource utilization above 70%. Some pods on a hot spot node are evicted to lower its load level to 70% or less.
    

### Load hotspot descheduling policies

**Policy Name**

**Description**

Hotspot check retry policy

To ensure the accuracy of hotspot detection and avoid frequent application migration caused by monitoring data glitches, Koordinator Descheduler supports configuring retries for hotspot checks. A node is identified as a hotspot only if it consecutively exceeds the threshold multiple times.

Node sorting policy

Among the identified hotspot nodes, Koordinator Descheduler initiates descheduling on nodes in descending order of resource usage. During node sorting, memory and CPU resource usage are compared in sequence. Nodes with higher resource usage are prioritized.

Pod scoring policy

For each hotspot node, Koordinator Descheduler scores and sorts the pods on it, and then initiates eviction operations to migrate them to idle nodes. The comparison order is as follows:

1.  Pods with a lower Priority. If not set, the value is 0, which indicates the lowest priority.
    
2.  Pods with a lower QoS class.
    
3.  For pods with the same priority and QoS class, Koordinator Descheduler sorts them based on factors such as resource utilization and startup time.
    

**Note**

If you have requirements for the pod eviction order, configure different priorities or QoS classes for your pods.

Filter policy

The Koordinator Descheduler module supports multiple filter parameters for pods and nodes to facilitate grayscale control during use.

-   Filter by Namespace: specifies the namespaces of the pods that can be descheduled. For more information, see [evictableNamespaces](#p-9f0-eo8-lz8).
    
-   Filter by pod selector: specifies the label selectors of the pods that can be descheduled. For more information, see [podSelectors](#p-9f0-eo8-lz8).
    
-   Filter by node selector: specifies the label selectors of the nodes that can be descheduled. For more information, see [nodeSelector](#p-9f0-eo8-lz8).
    

Pre-check policy

The Koordinator Descheduler module provides a pre-check feature before pod migration to ensure that each migration is as safe as possible.

-   Check node affinity and resource scheduling capacity to ensure that there are matching nodes in the cluster after descheduling before initiating migration. The checked properties include Node Affinity, Node Selector, Toleration, and the unallocated resource capacity of nodes.
    
-   Check the actual resource usage of idle nodes to ensure that they do not reach the hotspot threshold after receiving new pods. This avoids frequent jitter.
    
    Formula: `**Available capacity of an idle node = (highThresholds - Current load of the idle node) × Total capacity of the idle node**`
    
    For example, the load of the idle node is 20%, the value of `highThresholds` is 70%, and the node has 96 vCores. The available number of vCores on the node is calculated based on the following formula: 48 = (70% - 20%) × 96. In this scenario, Koordinator Descheduler ensures that the total number of vCores requested by the migrated pods does not exceed 48.
    

Migration throttling policy

To ensure the high availability of applications during pod migration, Koordinator Descheduler provides multiple features to control pod migration. You can specify the maximum number of pods that can be migrated at the same time per node, namespace, or workload. Koordinator Descheduler also lets you specify a pod migration time window to prevent pods that belong to the same workload from being migrated too frequently. Koordinator Descheduler is also compatible with the [PDB](https://kubernetes.io/docs/tasks/run-application/configure-pdb/) (Pod Disruption Budgets) mechanism of open source Kubernetes, which lets you configure more fine-grained management policies to ensure the high availability of your workloads.

Observability policy

You can observe the migration process of descheduling through events and view the specific reasons and current status of the migration in the details. The following is a sample.

```
kubectl get event | grep stress-demo-588f9646cf-7****
55s         Normal    Evicting           podmigrationjob/3bf8f623-4d10-4fc5-ab4e-2bead3c4****   Pod "default/stress-demo-588f9646cf-7****" evicted from node "cn-beijing.10.XX.XX.53" by the reason "node is overutilized, cpu usage(76.72%)>threshold(50.00%)"
22s         Normal    EvictComplete      podmigrationjob/3bf8f623-4d10-4fc5-ab4e-2bead3c4****   Pod "default/stress-demo-588f9646cf-7****" has been evicted
55s         Normal    Descheduled        pod/stress-demo-588f9646cf-7****                       Pod evicted from node "cn-beijing.10.XX.XX.53" by the reason "node is overutilized, cpu usage(76.72%)>threshold(50.00%)"
55s         Normal    Killing            pod/stress-demo-588f9646cf-7****                       Stopping container stress
```

## Step 1: Enable descheduling in ack-koordinator

-   If the ack-koordinator component is not installed in the cluster, install the component and select **Enable Descheduling For Ack-koordinator** on the component configuration page. For more information, see [Install the ack-koordinator component](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#section-bhs-x6c-16y).
    
-   If the ack-koordinator component is already installed in your cluster, on the component configuration page, select **Enable Descheduling For Ack-koordinator**. For the procedure, see [Modify the ack-koordinator component](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#section-bhs-x6c-16y).
    

## Step 2: Enable the load hotspot descheduling plug-in

1.  Create a \`koord-descheduler-config.yaml\` file using the following YAML content.
    
    The \`koord-descheduler-config.yaml\` file is a ConfigMap object that is used to enable the LowNodeLoad descheduling plug-in.
    
    **Click to view the YAML file content**
    
    ```
    # koord-descheduler-config.yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: koord-descheduler-config
      namespace: kube-system
    data:
      koord-descheduler-config: |
        # The following content is the system configuration of koord-descheduler. Do not change the configuration.
        apiVersion: descheduler/v1alpha2
        kind: DeschedulerConfiguration
        leaderElection:
          resourceLock: leases
          resourceName: koord-descheduler
          resourceNamespace: kube-system
        deschedulingInterval: 120s # The execution interval. The descheduling plug-in runs every 120s.
        dryRun: false # The global read-only mode switch. If you enable this mode, Koordinator Descheduler does not perform any operations.
        # End of system configuration.
    
        profiles:
        - name: koord-descheduler
          plugins:
            balance:
              enabled:
                - name: LowNodeLoad # Enable the LowNodeLoad plug-in for load hotspot descheduling.
            evict:
              enabled:
                - name: MigrationController # Enable the eviction and migration controller.
    
          pluginConfig:
          - name: MigrationController # Parameters for descheduling and migration control.
            args:
              apiVersion: descheduler/v1alpha2
              kind: MigrationControllerArgs
              defaultJobMode: EvictDirectly
    
          - name: LowNodeLoad # Configuration of the LowNodeLoad plug-in.
            args:
              apiVersion: descheduler/v1alpha2
              kind: LowNodeLoadArgs
    
              lowThresholds:  # lowThresholds specifies the admission threshold for idle nodes. A node is considered idle if its usage of all resources is below the threshold.
                cpu: 20 # The CPU utilization is 20%.
                memory: 30  # The Memory utilization is 30%.
              highThresholds: # highThresholds specifies the admission threshold for hotspot nodes. A node is considered a hotspot if its usage of any resource is above the threshold.
                cpu: 50  # The CPU utilization is 50%.
                memory: 60 # The Memory utilization is 60%.
    
              evictableNamespaces: # The namespaces that can be descheduled. The include and exclude parameters are mutually exclusive. You can configure only one of them.
                include the following: # The include parameter specifies that only the following namespaces are processed.
                  - default
                # exclude: # The exclude parameter specifies the namespaces to be excluded.
                  # - "kube-system"
                  # - "koordinator-system"
    ```
    
2.  Run the following command to apply the configuration to the cluster.
    
    ```
    kubectl apply -f koord-descheduler-config.yaml
    ```
    
3.  Run the following command to restart the Koordinator Descheduler module.
    
    After you restart the Koordinator Descheduler module, the Koordinator Descheduler uses the most recently modified configuration.
    
    ```
    kubectl -n kube-system scale deploy ack-koord-descheduler --replicas 0
    deployment.apps/ack-koord-descheduler scaled
    kubectl -n kube-system scale deploy ack-koord-descheduler --replicas 1
    deployment.apps/ack-koord-descheduler scaled
    ```
    

## Step 3 (Optional): Enable the scheduler load balancing plug-in

To enable the scheduler load balancing plug-in for optimal load balancing among nodes, see [Step 1: Enable load-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#section-ti8-mqr-6sk).

## Step 4: Verify the descheduling feature

The following example uses a cluster that has three nodes, each with 104 cores and 396 GiB of memory.

1.  Create a \`stress-demo.yaml\` file using the following YAML content.
    
    **Click to view the YAML file content.**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: stress-demo
      namespace: default
      labels:
        app: stress-demo
    spec:
      replicas: 6
      selector:
        matchLabels:
          app: stress-demo
      template:
        metadata:
          name: stress-demo
          labels:
            app: stress-demo
        spec:
          containers:
            - args:
                - '--vm'
                - '2'
                - '--vm-bytes'
                - '1600M'
                - '-c'
                - '2'
                - '--vm-hang'
                - '2'
              command:
                - stress
              image: polinux/stress
              imagePullPolicy: Always
              name: stress
              resources:
                limits:
                  cpu: '2'
                  memory: 4Gi
                requests:
                  cpu: '2'
                  memory: 4Gi
          restartPolicy: Always
    ```
    
2.  Create the stress testing pod.
    
    ```
    kubectl create -f stress-demo.yaml
    deployment.apps/stress-demo created
    ```
    
3.  Observe the status of the pod until it is running.
    
    ```
    kubectl get pod -o wide
    ```
    
    Expected output:
    
    ```
    NAME                           READY   STATUS    RESTARTS   AGE   IP            NODE                    NOMINATED NODE   READINESS GATES
    stress-demo-588f9646cf-s****   1/1     Running   0          82s   10.XX.XX.53   cn-beijing.10.XX.XX.53   <none>           <none>
    ```
    
    The output shows that the pod `stress-demo-588f9646cf-s****` is scheduled to the node `cn-beijing.10.XX.XX.53`.
    
4.  Increase the load level of the node `cn-beijing.10.XX.XX.53` and then check the load of each node.
    
    ```
    kubectl top node
    ```
    
    Expected output:
    
    ```
    NAME                      CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
    cn-beijing.10.XX.XX.215   17611m       17%    24358Mi         6%
    cn-beijing.10.XX.XX.53    63472m       63%    11969Mi         3%
    ```
    
    The output shows that the load of the node `cn-beijing.10.XX.XX.53` is high at 63%, which exceeds the configured hot spot threshold of 50%. The load of the node `cn-beijing.10.XX.XX.215` is low at 17%, which is below the configured idle threshold of 20%.
    
5.  Enable load-aware hot spot descheduling. For more information, see [Step 2: Enable the load-based hot spot descheduling plug-in](#section-okm-wqr-56q).
    
6.  Observe the pod changes.
    
    Wait for the descheduler to check for hot spot nodes and perform eviction and migration.
    
    **Note**
    
    By default, a node is identified as a hot spot if it exceeds the hot spot threshold for five consecutive checks, which takes 10 minutes.
    
    ```
    kubectl get pod -w
    ```
    
    Expected output:
    
    ```
    NAME                           READY   STATUS               RESTARTS   AGE     IP           NODE                     NOMINATED NODE   READINESS GATES
    stress-demo-588f9646cf-s****   1/1     Terminating          0          59s   10.XX.XX.53    cn-beijing.10.XX.XX.53     <none>           <none>
    stress-demo-588f9646cf-7****   1/1     ContainerCreating    0          10s   10.XX.XX.215   cn-beijing.10.XX.XX.215    <none>           <none>
    ```
    
7.  Observe the event.
    
    ```
    kubectl get event | grep stress-demo-588f9646cf-s****
    ```
    
    Expected output:
    
    ```
    2m14s       Normal    Evicting            podmigrationjob/00fe88bd-8d4c-428d-b2a8-d15bcdeb****   Pod "default/stress-demo-588f9646cf-s****" evicted from node "cn-beijing.10.XX.XX.53" by the reason "node is overutilized, cpu usage(68.53%)>threshold(50.00%)"
    101s        Normal    EvictComplete       podmigrationjob/00fe88bd-8d4c-428d-b2a8-d15bcdeb****   Pod "default/stress-demo-588f9646cf-s****" has been evicted
    2m14s       Normal    Descheduled         pod/stress-demo-588f9646cf-s****                       Pod evicted from node "cn-beijing.10.XX.XX.53" by the reason "node is overutilized, cpu usage(68.53%)>threshold(50.00%)"
    2m14s       Normal    Killing             pod/stress-demo-588f9646cf-s****                       Stopping container stress
    ```
    
    The expected output is the migration record, which shows that the result is as expected. The pod on the hot spot node is descheduled to another node.
    

## Advanced configuration

### Advanced configuration parameters of the Koordinator Descheduler module

All parameter configurations for the Koordinator Descheduler are provided in a ConfigMap. The following shows the format of the advanced configuration parameters for load-based hot spot descheduling.

**Click to view the YAML file content.**

```
# koord-descheduler-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: koord-descheduler-config
  namespace: kube-system
data:
  koord-descheduler-config: |
    # The following content is the system configuration of koord-descheduler. Do not change the configuration.
    apiVersion: descheduler/v1alpha2
    kind: DeschedulerConfiguration
    leaderElection:
      resourceLock: leases
      resourceName: koord-descheduler
      resourceNamespace: kube-system
    deschedulingInterval: 120s # The execution interval. The descheduling plug-in runs every 120s.
    dryRun: false # The global read-only mode switch. If you enable this mode, koord-descheduler does not perform any operations.
    # End of system configuration.

    profiles:
    - name: koord-descheduler
      plugins:
        deschedule: 
          disabled:
            - name: "*" # All plug-ins are disabled by default. You do not need to explicitly configure this. This is for demonstration purposes only.
        balance:
          enabled:
            - name: LowNodeLoad # Enable the LowNodeLoad plug-in for load hotspot descheduling.
        evict:
          disabled:
            - name: "*" # All plug-ins are disabled by default. You do not need to explicitly configure this. This is for demonstration purposes only.
          enabled:
            - name: MigrationController # Enable the eviction and migration controller.

      pluginConfig:
      - name: MigrationController # Parameters for descheduling and migration control.
        args:
          apiVersion: descheduler/v1alpha2
          kind: MigrationControllerArgs
          defaultJobMode: EvictDirectly
          maxMigratingPerNode: 1 # The maximum number of pods that can be in a migrating state on each node.
          maxMigratingPerNamespace: 1  # The maximum number of pods that can be in a migrating state in each namespace.
          maxMigratingPerWorkload: 1 # The maximum number of pods that can be in a migrating state in each workload, such as a deployment.
          maxUnavailablePerWorkload: 2 # The maximum number of unavailable replicas for each workload, such as a deployment.
          evictLocalStoragePods: false # Specifies whether to allow pods configured with HostPath or EmptyDir to be descheduled.
          objectLimiters:
            workload: # Throttling for pod migration at the workload level. By default, a maximum of one replica can be migrated within 5 minutes after the first eviction.
              duration: 5m
              maxMigrating: 1

      - name: LowNodeLoad # Configuration of the LowNodeLoad plug-in.
        args:
          apiVersion: descheduler/v1alpha2
          kind: LowNodeLoadArgs

          lowThresholds:  # lowThresholds specifies the admission threshold for idle nodes. A node is considered idle if its usage of all resources is below the threshold.
            cpu: 20 # The CPU utilization is 20%.
            memory: 30  # The Memory utilization is 30%.
          highThresholds: # highThresholds specifies the admission threshold for hotspot nodes. A node is considered a hotspot if its usage of any resource is above the threshold.
            cpu: 50  # The CPU utilization is 50%.
            memory: 60 # The Memory utilization is 60%.

          anomalyCondition: # Hotspot node check configuration.
            consecutiveAbnormalities: 5 # A node is identified as a hotspot only if it exceeds highThresholds for multiple consecutive execution cycles. The counter is reset after the hotspot node is evicted.

          detectorCacheTimeout: "5m" # The timeout period for the anomaly check cache. Default value: 5 minutes. Make sure that this value is not less than the execution interval specified in deschedulingInterval.

          evictableNamespaces: # The namespaces that can be descheduled. The include and exclude parameters are mutually exclusive. You can configure only one of them.
            include the following: # The include parameter specifies that only the following namespaces are processed.
              - default
            # exclude: # The exclude parameter specifies the namespaces to be excluded.
              # - "kube-system"
              # - "koordinator-system"

          nodeSelector: # Process only the specified nodes.
            matchLabels:
              alibabacloud.com/nodepool-id: np77f520e1108f47559e63809713ce****

          podSelectors: # Process only some types of pods.
          - name: lsPods
            selector:
              matchLabels:
                koordinator.sh/qosClass: "LS"
```

### Koordinator Descheduler system configuration

**Parameter**

**Type**

**Value**

**Description**

**Example**

dryRun

boolean

-   true
    
-   false (default)
    

The read-only mode switch. If enabled, no pod migration is initiated.

false

deschedulingInterval

time.Duration

\>0s

The descheduling execution interval. When you use the load hotspot descheduling feature, make sure that the value of this parameter is not greater than the value of the `detectorCacheTimeout` parameter in the LowNodeLoad plug-in.

120s

### Eviction and migration control configuration

**Parameter**

**Type**

**Value**

**Description**

**Example**

maxMigratingPerNode

int64

≥0 (default: 2)

The maximum number of pods that can be in a migrating state on each node. 0 indicates no limit.

2

maxMigratingPerNamespace

int64

≥0 (default: unlimited)

The maximum number of pods that can be in a migrating state in each namespace. 0 indicates no limit.

1

maxMigratingPerWorkload

intOrString

≥0 (default: 10%)

The maximum number or percentage of pods that can be in a migrating state in each workload, such as a deployment. 0 indicates no limit.

If a workload has only a single replica, it is not descheduled.

1 or 10%

maxUnavailablePerWorkload

intOrString

≥0 (default: 10%), and less than the total number of replicas for the workload

The maximum number or percentage of unavailable replicas for each workload, such as a deployment. 0 indicates no limit.

1 or 10%

evictLocalStoragePods

boolean

-   true
    
-   false (default)
    

Specifies whether to allow pods configured with HostPath or EmptyDir to be descheduled. For security reasons, this is disabled by default.

false

objectLimiters.workload

A struct in the following data format:

```
type MigrationObjectLimiter struct {
    Duration time.Duration `json:"duration,omitempty"`
    MaxMigrating *intstr.IntOrString `json:"maxMigrating,omitempty"`
}
```

-   The value of Duration is greater than 0 seconds (default: `5m`)
    
-   The value of MaxMigrating is ≥0 (default: 10%)
    

Throttling for pod migration at the workload level.

-   Duration: The length of the time window. For example, `5m` indicates 5 minutes.
    
-   MaxMigrating: The number or percentage of replicas. This can be set to an integer or a percentage. The default value is taken from maxMigratingPerWorkload.
    

```
objectLimiters:
  workload:
    duration: 5m
    maxMigrating: 1
```

This indicates that a maximum of one replica can be migrated for a single workload within 5 minutes.

### LowNodeLoad plug-in configuration

`**Parameter**`

**Type**

**Value**

**Description**

**Example**

`highThresholds`

map\[string\]float64

**Note**

Supports CPU and memory dimensions. The value is a percentage.

\[0,100\]

The hot spot water level for the load. Only pods on nodes that exceed this threshold participate in descheduling. Pods on nodes below this threshold are not descheduled. We recommend that you also enable the load-aware scheduling feature of the scheduler. For more information, see [Policy Description](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#row-42i-i7q-yai). For information about how to use these two features in combination, see [How do I use a combination of load-aware scheduling and load-aware hotspot descheduling?](#p-zuf-5r4-l12).

If the load levels of all nodes are higher than `lowThresholds`, this indicates that the overall cluster load is high. Even if the load level of a node is greater than `highThresholds`, the Koordinator Descheduler will not execute descheduling.

```
highThresholds:
  cpu: 55 # The CPU utilization hotspot threshold is 55%.
  memory: 75 # The Memory utilization hotspot threshold is 75%.
```

`lowThresholds`

map\[string\]float64

**Note**

Supports CPU and memory dimensions. The value is a percentage.

\[0,100\]

The idle load threshold.

If the usage levels of all nodes are higher than `lowThresholds`, the overall cluster usage is considered high, and even if the usage level of any node is greater than `highThresholds`, the Koordinator Descheduler will not execute descheduling.

```
lowThresholds:
  cpu: 25 # The CPU utilization idle threshold is 25%.
  memory: 25 # The Memory utilization idle threshold is 25%.
```

`anomalyCondition.consecutiveAbnormalities`

int64

\>0 (default: 5)

The number of retries for hotspot checks. A node is identified as a hotspot only if it exceeds highThresholds for multiple consecutive execution cycles. The counter is reset after the hotspot node is evicted.

5

`detectorCacheTimeout`

\*metav1.Duration

For more information about the Duration format, see [Duration](https://github.com/kubernetes/apimachinery/blob/master/pkg/apis/meta/v1/duration.go). (Default value: 5m)

The cache duration for hotspot checks. When you use the load hotspot descheduling feature, make sure that the value of this parameter is not less than the value of `deschedulingInterval` in the system configuration.

-   1h
    
-   300s
    
-   2m30s
    

`evictableNamespaces`

-   include the following: string
    
-   exclude: string
    

Namespaces in the cluster

The namespaces that can be descheduled. If you leave this parameter empty, all pods can be descheduled.

The include and exclude policies are supported. The two policies are mutually exclusive.

-   include: Processes only the specified namespaces.
    
-   exclude: Processes all namespaces except the specified ones.
    

```
evictableNamespaces:
  exclude:
    - "kube-system"
    - "koordinator-system"
```

`nodeSelector`

metav1.LabelSelector

For more information about the LabelSelector format, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements)

Selects target nodes using a LabelSelector.

You can configure this parameter in two ways: one for specifying a single node pool and another for specifying multiple node pools.

-   **Method 1**
    
    ```
    # Process only the machines in the specified single node pool.
    nodeSelector:
      matchLabels:
        alibabacloud.com/nodepool-id: np77f520e1108f47559e63809713ce****
    ```
    
-   **Method 2**
    
    ```
    # Process only the machines in the specified multiple node pools.
    nodeSelector:
      matchExpressions:
      - key: alibabacloud.com/nodepool-id
        operator: In
        values:
        - node-pool1
        - node-pool2
    ```
    

`podSelectors`

A list that consists of PodSelector objects. You can configure multiple groups of pods. The data format of PodSelector is as follows:

```
type PodSelector struct {
    name     string
    selector metav1.LabelSelector
}
```

For more information about the LabelSelector format, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements)

Selects the pods for which descheduling is enabled using a LabelSelector.

```
# Process only LS-type pods.
podSelectors:
- name: lsPods
  selector:
    matchLabels:
      koordinator.sh/qosClass: "LS"
```

## FAQ

### What do I do if the node utilization reaches the threshold but pods on the node are not evicted?

This issue may occur for the following reasons. You can refer to the corresponding solutions to resolve the issue.

**Cause classification**

**Cause description**

**Solution**

Component configuration not in effect

The enabled scope is not specified.

The descheduler configuration includes the enabled scope for pods and nodes. Check whether the corresponding namespace and node are enabled.

The descheduler is not restarted after its configuration is modified.

After you modify the configuration of the descheduler, you must restart it for the modification to take effect. For more information about how to restart the descheduler, see [Step 2: Enable the load-based hot spot descheduling plug-in](#section-okm-wqr-56q).

Improper component configuration

The execution interval of the descheduler component is longer than the cache duration of the LowNodeLoad plug-in. As a result, hot spot node detection becomes invalid.

The value of the `deschedulingInterval` parameter (default: 2 minutes) must not be greater than the value of the `detectorCacheTimeout` parameter in the LowNodeLoad plug-in (default: 5 minutes). After you adjust the configuration, restart the descheduler.

Node status does not meet conditions

The average utilization of the node is below the threshold for a long time.

The descheduler continuously monitors utilization for a period and calculates a smoothed average of the monitoring data. Therefore, descheduling is triggered only when a node's utilization continuously exceeds the threshold. By default, this period is about 10 minutes. However, the utilization returned by `kubectl top node` is only for the last minute. Observe the node's utilization over a period based on the retry count and execution interval configurations, and adjust the configuration as needed.

Insufficient remaining capacity in the cluster.

Before evicting a pod, the descheduler checks other nodes in the cluster to ensure sufficient capacity for migration. For example, if a pod that requires 8 cores and 16 GiB of memory is selected for eviction, but the available capacity of all other nodes in the cluster is below this value, the descheduler does not migrate the pod for security reasons. In this case, consider adding nodes to ensure sufficient cluster capacity.

Workload property constraints

The workload is a single-replica edition.

To ensure the high availability of single-replica applications, these pods are not descheduled by default. If you evaluate such single-replica applications and want the pod to be descheduled, append the annotation `descheduler.alpha.kubernetes.io/evict: "true"` to the pod or the TemplateSpec of the workload, such as a deployment or StatefulSet.

**Note**

This annotation configuration is not supported in v1.3.0-ack1.6, v1.3.0-ack1.7, or v1.3.0-ack1.8. To upgrade the component to the latest version, see [Install and manage the component](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#679b1f87c5z3k).

The pod specifies HostPath or EmptyDir.

By default, pods configured with \`emptyDir\` or \`hostPath\` are excluded from descheduling to ensure data security. If you want to deschedule these pods, refer to the \`evictLocalStoragePods\` setting. For more information, see [Eviction and migration control configuration](#table-0nx-s6n-sv1).

The number of unavailable or migrating replicas is too high.

When the number of unavailable or migrating replicas of a workload, such as a deployment or StatefulSet, exceeds the configured limit (maxUnavailablePerWorkload or maxMigratingPerWorkload), the descheduler does not initiate an eviction. For example, if maxUnavailablePerWorkload and maxMigratingPerWorkload are set to 20%, the desired number of replicas for the deployment is 10, and two pods are being evicted or released, the descheduler does not evict any more pods. Wait for the pod eviction or release to complete, or increase the values of these two configurations.

Incorrect replica count constraint configuration.

If the total number of replicas of a workload is less than or equal to the value of maxMigratingPerWorkload or maxUnavailablePerWorkload, the descheduler does not deschedule the workload for security reasons. To resolve this, decrease the values of these two configurations or change them to percentages.

### Why does the descheduler frequently restart?

The descheduler may frequently restart if its ConfigMap is invalid or does not exist. For more information, see [Advanced configuration](#section-qjy-rw6-h2p). Check the content and format of the ConfigMap, modify the ConfigMap, and then restart the descheduler. For more information about how to restart the descheduler, see [Step 2: Enable the load-based hot spot descheduling plug-in](#section-okm-wqr-56q).

### How do I use load-aware scheduling and load hotspot descheduling together?

After you enable load-based hot spot descheduling, pods on hot spot nodes are evicted. The ACK scheduler selects appropriate nodes for pods that are created by upper-layer controllers, such as Deployments. To achieve optimal load balancing, we recommend that you enable load-aware scheduling at the same time. For more information, see [Use load-aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#title-0yq-2eq-a60).

We recommend that you set the loadAwareThreshold parameter for load-aware scheduling to the same value as the highThresholds parameter of the K8s Spot Rescheduler. For more information, see [Scheduling policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-load-aware-pod-scheduling#p-lce-0dg-stv). When the load of a node exceeds highThresholds, the K8s Spot Rescheduler evicts pods on that node. The scheduler then uses loadAwareThreshold to prevent new pods from being scheduled to the hot spot node. If you do not set the parameters to the same value, evicted pods may be rescheduled to the hot spot node. This issue is more likely to occur if a pod has a specified scope of schedulable nodes, but only a small number of nodes are available and the resource utilization of these nodes is similar.

### What is the utilization algorithm that descheduling references?

The descheduler continuously monitors resource usage for a period and calculates an average value. A node is descheduled only if its average resource usage stays above a threshold for a certain period, which is 10 minutes by default. For memory, the descheduler's usage calculation excludes the page cache because the operating system can reclaim these resources. In contrast, the usage value returned by the `kubectl top node` command includes the page cache. You can [use Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster) to view the actual memory usage.
