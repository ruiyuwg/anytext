The performance and availability of an ACK cluster are affected by factors such as the resource count, resource access frequency, and access mode. Different combinations of these variables can place varying levels of pressure on the API Server and affect its performance. In a large-scale ACK managed cluster Pro, which typically has more than 500 nodes or 10,000 pods, cluster administrators must plan and use the cluster based on business requirements. You should also closely monitor metrics to ensure cluster stability and availability.

## Considerations for using large-scale clusters

Building a single large-scale cluster can reduce cluster management and O&M overhead and improve resource utilization compared to using multiple clusters. However, in some complex business scenarios, you may need to split services into multiple clusters based on your business logic or requirements. For example, you can separate non-production (testing) services from production (development) services, or separate database services from frontend applications.

If you have the following considerations, we recommend that you use multiple clusters instead of a single large-scale cluster.

**Classification**

**Description**

Isolation

Using multiple clusters ensures isolation between different environments, such as production and testing clusters. This practice prevents an issue in one cluster from affecting all business services and reduces the blast radius of failures.

Location

Some services must be deployed in specific geographic regions closer to end users to meet availability and low-latency requirements. In this scenario, we recommend deploying multiple clusters across different regions.

Single-cluster size limit

The ACK managed control plane uses elastic scaling and cluster component performance optimization to adapt to clusters of different sizes. However, the Kubernetes architecture itself has performance bottlenecks. An excessively large cluster may affect its availability and performance. Before you plan a large-scale cluster, understand the [capacity limits](https://github.com/kubernetes/community/blob/master/sig-scalability/configs-and-limits/thresholds.md) and [SLOs](https://github.com/kubernetes/community/blob/master/sig-scalability/slos/slos.md) defined by the Kubernetes community. Then, go to the [Quota Center](https://quotas.console.alibabacloud.com/products/csk/quotas) to view and request an increase in the quota limit for Container Service for Kubernetes. If your requirements exceed the limits of the community and ACK, consider splitting your business into multiple clusters.

To manage multiple clusters for tasks such as application deployment, traffic management, job distribution, and global monitoring, you can enable [fleet management](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/fleet-management/).

## **How to use this topic**

This topic provides general recommendations for planning and using large-scale clusters. It is intended for developers and administrators of ACK managed cluster Pro. You can adjust the recommendations based on your specific cluster environment and business needs.

**Note**

According to the [shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model#section-6bh-fr1-i0y), ACK is responsible for the default security of the cluster control plane components, including Kubernetes control plane components and etcd, and the related Alibaba Cloud infrastructure. You are responsible for the security protection of your business applications deployed on the cloud, along with the secure configuration and updates of your cloud resources. For more information, see [Shared responsibility model](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/shared-responsibility-model).

* * *

-   [Use the latest cluster versions](#section-la7-e4o-7h8)
    
-   [Monitor cluster resource limits](#section-7ly-oby-2u0)
    
-   [Configure control plane component parameters](#section-ayz-h14-0o8)
    
-   [Plan cluster resource scaling rates](#04a151487eqwt)
    
-   [Optimize client access patterns for clusters](#section-yvm-ngw-oer)
    
-   [Plan large-scale workloads](#305c3623daa0t)
    
-   [Monitor control plane metrics](#section-9lq-apt-x9g)
    

## Use the latest cluster versions

The Kubernetes community regularly releases new versions that introduce new features and optimizations. Newer Kubernetes versions offer improvements in stability, performance, and scalability. Typical optimizations include the following:

-   In version [1.31](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-31-release-notes), kube-apiserver provides consistent reads for List requests from the cache. This reduces the need to pass requests through to etcd, improves the efficiency of List requests, and significantly lowers the load on etcd. For more information, see [Consistent Reads from Cache](https://kubernetes.io/blog/2024/08/15/consistent-read-from-cache-beta/).
    
-   In version [1.33](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-1-33-release-notes), kube-apiserver uses a streaming encoding mechanism, including [StreamingCollectionEncodingToJSON](https://github.com/kubernetes/kubernetes/pull/129334) and [StreamingCollectionEncodingToProtobuf](https://github.com/kubernetes/kubernetes/pull/129407). This improvement optimizes the performance of List operations by processing resource retrieval requests as a stream. For List requests that involve many resources, this can effectively reduce the memory usage of kube-apiserver and improve system stability. For more information, see [Streaming List responses](https://kubernetes.io/blog/2025/05/09/kubernetes-v1-33-streaming-list-responses/).
    

ACK regularly releases supported Kubernetes versions in sync with the Kubernetes community and gradually discontinues technical support for expired versions. For expired versions, ACK stops releasing new features, fixing functional or security bugs, and provides only limited technical support.

You can follow version release information through help documents, console messages, and internal messages. You should upgrade your cluster promptly to avoid potential security and stability issues.

-   For information about Kubernetes versions supported by ACK, see [Version Guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#concept-186482).
    
-   For information about cluster upgrades, including impacts, procedures, notes, and methods, see [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
-   For information about cluster upgrade operations, see [Manually upgrade an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster) and [Automatically upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).
    

## Monitor cluster resource limits

To ensure the availability, stability, and performance of large-scale clusters, monitor the limits and follow the recommended solutions listed in the following table.

**Limit**

**Description**

**Recommended solution**

etcd database size (DB Size)

An excessively large database affects performance, including data read and write latency, system resource usage, and election delays. It also makes service and data restoration more difficult and time-consuming.

Keep the total etcd DB Size below 8 GB.

-   Control the total number of cluster resources and promptly clean up unused resources.
    
-   For resources that are frequently modified, keep the size of a single resource below 100 KB. In etcd, each update to a key-value pair generates a new historical version. In scenarios where large data objects are updated frequently, etcd consumes more resources to save their historical versions.
    

Total data size of each resource type in etcd

If the total number of objects for a resource type is too large, a client request to list all of them can consume a large amount of system resources. In severe cases, this may prevent the API Server or custom controllers from initializing.

Keep the total size of objects for each resource type below 800 MB.

-   When you define a new type of CustomResourceDefinition (CRD), plan the final expected number of CRs in advance to ensure that the total size of each CRD resource is controllable.
    
-   When you use Helm to deploy a chart, Helm creates a release to track the deployment status. By default, Helm uses secrets to store release information. In a large-scale cluster, storing a large amount of release information in secrets may exceed the Kubernetes limit on the total size of secrets. Instead, you can use [Helm's SQL storage backend](https://helm.sh/docs/topics/advanced/#sql-storage-backend).
    

API Server: CLB connections and bandwidth

The ACK cluster API Server uses a Classic Load Balancer (CLB) instance, which has connection and bandwidth limits. The maximum bandwidth is 5120 Mbps. For more information about the maximum number of connections, see [CLB Instances](/help/en/slb/classic-load-balancer/user-guide/clb-instance/).

Exceeding the SLB connection or bandwidth limits may cause nodes to become NotReady.

For clusters with 1,000 or more nodes, we recommend selecting pay-by-usage CLB instances.

> To improve network connectivity speed and bandwidth, large-scale clusters should use the ENI direct connection mode when accessing Kubernetes services in the default namespace. Clusters created after February 2023 with a version of 1.20 or later use ENI direct connection by default. For more information, see [Access the API server of an ACK cluster using an internal endpoint](/help/en/ack/product-overview/kube-api-server).

Number of services per namespace

The kubelet injects information about services defined in the cluster as environment variables into the pods running on that node. This lets pods discover and communicate with services through environment variables.

An excessive number of services in each namespace can lead to too many environment variables being injected into pods, which may cause pods to start slowly or even fail.

Keep the number of services in each namespace below 5,000.

You can choose not to fill these environment variables by setting `enableServiceLinks` in the `podSpec` to `false`. For more information, see [Accessing the Service](https://kubernetes.io/docs/tutorials/services/connect-applications-service/#accessing-the-service).

Total number of services in the cluster

An excessive number of services increases the number of network rules that kube-proxy needs to process, which in turn affects the performance of kube-proxy.

For LoadBalancer-type services, an excessive number of services increases the delay when syncing to the SLB. The delay can reach the minute level.

Keep the total number of all services below 10,000.

For LoadBalancer-type services, keep the total number of services below 500.

Maximum number of endpoints per service

The kube-proxy component runs on each node and watches for updates related to services to promptly update the network rules on the node. When a service has many endpoints, its corresponding Endpoints resource also becomes large. Each update to the Endpoints object causes a large amount of traffic between the control plane's kube-apiserver and the node's kube-proxy. The larger the cluster, the more data needs to be updated, and the more pronounced the storm effect becomes.

**Note**

To solve this problem, kube-proxy in clusters of v1.19 and later uses [EndpointSlices](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/) by default to improve performance.

Keep the number of backend pods for a single service's endpoints below 3,000.

-   In large-scale clusters, use [EndpointSlices](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/) instead of Endpoints to split and manage network endpoints. After splitting, the amount of data transmitted during each resource change is effectively reduced.
    
-   If you have a custom controller that relies on the Endpoints resource for routing decisions, you can still use the Endpoints object. However, ensure that the number of backend pods for a single Endpoints object does not exceed 1,000. If it does, the service's Endpoints object is automatically truncated. For more information, see [Over-capacity endpoints](https://kubernetes.io/docs/concepts/services-networking/service/#over-capacity-endpoints).
    

Total number of endpoints for all services

An excessive number of endpoints in the cluster may cause excessive load on the API Server and lead to reduced network performance.

Keep the total number of endpoints associated with all services below 64,000.

Number of pending pods

When the number of pending pods is too high, newly submitted pods may remain in a waiting state for a long time and cannot be scheduled to suitable nodes. During this process, if a pod cannot be scheduled, the scheduler periodically generates events, which can lead to an event storm.

Keep the total number of pending pods below 10,000.

Number of secrets in a cluster with [encryption at rest for secrets using KMS](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2) enabled

When you use KMS v1 to encrypt data, a new data encryption key (DEK) is generated for each encryption. When the cluster starts, it needs to access and decrypt the secrets stored in etcd. If the cluster stores too many secrets, it needs to decrypt a large amount of data during startup or upgrade, which affects cluster performance.

Keep the number of secrets stored in a cluster with KMS V1 encryption enabled below 2,000.

## **Configure control plane component parameters**

ACK managed cluster Pro provides a feature that lets you [customize the parameters of control plane components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811). This feature supports modifying the parameters of core managed components such as kube-apiserver, kube-controller-manager, and kube-scheduler. In a large-scale cluster, you need to properly adjust the throttling-related parameters of the control plane components.

#### kube-apiserver

To prevent many concurrent requests from overloading the control plane, kube-apiserver limits the number of concurrent requests it can handle at any given time. Once this limit is exceeded, the API Server starts throttling requests, returns an HTTP 429 response code (Too Many Requests) to the client, and instructs the client to retry later. If the server-side has no throttling measures, the control plane may become overloaded from handling requests beyond its capacity, which severely affects the stability and availability of the entire service or cluster. Therefore, you should configure a server-side throttling mechanism to prevent broader issues caused by a control plane crash.

##### **Throttling classification**

The throttling of kube-apiserver is divided into two types.

-   Versions earlier than v1.18: kube-apiserver only supports maximum concurrency throttling. It distinguishes requests as read or write types and limits the maximum concurrency of read and write requests through the startup parameters `--max-requests-inflight` and `--max-mutating-requests-inflight`. This method does not differentiate request priorities. Some low-priority slow requests may consume a large amount of resources, causing a backlog of API Server requests and preventing some higher-priority or more urgent requests from being processed promptly.
    
    ACK managed cluster Pro supports custom configuration of the max-requests-inflight and max-mutating-requests-inflight parameters for kube-apiserver. For more information, see [Customize the parameters of control plane components in an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811).
    
-   v1.18 and later: The [API Priority and Fairness (APF)](https://kubernetes.io/zh-cn/docs/concepts/cluster-administration/flow-control/) mechanism is introduced for more fine-grained traffic management. It supports classifying and isolating requests based on preset rules and priorities. This ensures that more important and urgent requests are processed first, and follows certain fairness policies to ensure that different types of requests receive a reasonable opportunity for processing. This feature entered the Beta stage in v1.20 and is enabled by default.
    
    **Expand to view** [**APF**](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/) **description**
    
    In Kubernetes clusters of v1.20 and later, kube-apiserver configures the total number of requests that can be processed concurrently through the sum of the `--max-requests-inflight` and `--max-mutating-requests-inflight` parameters. It uses two types of CustomResourceDefinitions (CRDs), FlowSchema and PriorityLevelConfiguration, to control the concurrency allocated among different types of requests for more fine-grained traffic control.
    
    -   [PriorityLevelConfiguration](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/#prioritylevelconfiguration): A priority configuration that determines the proportion of the total concurrency that a certain priority level can be allocated.
        
    -   [FlowSchema](https://kubernetes.io/docs/concepts/cluster-administration/flow-control/#flowschema): Determines which PriorityLevelConfiguration a request belongs to.
        
    
    PriorityLevelConfiguration and FlowSchema are automatically maintained by kube-apiserver. The default configuration for the current cluster version is automatically generated in the Kubernetes cluster. You can run the following commands to view it.
    
    **Click to view the PriorityLevelConfiguration query command and expected output**
    
    ```
    kubectl get PriorityLevelConfiguration
    # Expected output
    NAME              TYPE      ASSUREDCONCURRENCYSHARES   QUEUES   HANDSIZE   QUEUELENGTHLIMIT   AGE
    catch-all         Limited   5                          <none>   <none>     <none>             4m20s
    exempt            Exempt    <none>                     <none>   <none>     <none>             4m20s
    global-default    Limited   20                         128      6          50                 4m20s
    leader-election   Limited   10                         16       4          50                 4m20s
    node-high         Limited   40                         64       6          50                 4m20s
    system            Limited   30                         64       6          50                 4m20s
    workload-high     Limited   40                         128      6          50                 4m20s
    workload-low      Limited   100                        128      6          50                 4m20s
    ```
    
    **Click to view the FlowSchema query command and expected output**
    
    **Note**
    
    ACK adds the classifications ack-system-leader-election and ack-default related to ACK core components to the FlowSchema. The rest are consistent with the community.
    
    ```
    kubectl get flowschemas
    # Expected output
    NAME                           PRIORITYLEVEL     MATCHINGPRECEDENCE   DISTINGUISHERMETHOD   AGE     MISSINGPL
    exempt                         exempt            1                    <none>                4d18h   False
    probes                         exempt            2                    <none>                4d18h   False
    system-leader-election         leader-election   100                  ByUser                4d18h   False
    endpoint-controller            workload-high     150                  ByUser                4d18h   False
    workload-leader-election       leader-election   200                  ByUser                4d18h   False
    system-node-high               node-high         400                  ByUser                4d18h   False
    system-nodes                   system            500                  ByUser                4d18h   False
    ack-system-leader-election     leader-election   700                  ByNamespace           4d18h   False
    ack-default                    workload-high     800                  ByNamespace           4d18h   False
    kube-controller-manager        workload-high     800                  ByNamespace           4d18h   False
    kube-scheduler                 workload-high     800                  ByNamespace           4d18h   False
    kube-system-service-accounts   workload-high     900                  ByNamespace           4d18h   False
    service-accounts               workload-low      9000                 ByUser                4d18h   False
    global-default                 global-default    9900                 ByUser                4d18h   False
    catch-all                      catch-all         10000                ByUser                4d18h   False
    ```
    

##### **Throttling monitoring and recommended solutions**

A client can determine if the server-side is throttling by checking for the return status code 429 or by monitoring the `apiserver_flowcontrol_rejected_requests_total` metric. When throttling behavior is observed, you can resolve it in the following ways.

-   Monitor API Server resource usage. When resource usage is low, you can adjust the sum of the `max-requests-inflight` and `max-mutating-requests-inflight` parameters to increase the total throttling limit.
    
    For clusters with more than 500 nodes, we recommend that you set the sum of the parameters between 2,000 and 3,000. For clusters with more than 3,000 nodes, we recommend that you set it between 3,000 and 5,000.
    
-   Reconfigure PriorityLevelConfiguration.
    
    -   High-priority requests: For requests that you do not want to be throttled, you can create a new FlowSchema and match it with a high-priority PriorityLevelConfiguration, such as `workload-high` or `exempt`. However, requests with the `exempt` priority are not throttled by APF, so you should configure them with caution. You can also configure a new PriorityLevelConfiguration for high-priority requests to give them higher concurrency.
        
    -   Low-priority requests: When certain slow client requests cause high API Server resource usage or slow responses, you can add a new FlowSchema for this type of request and match it with a low-concurrency PriorityLevelConfiguration.
        

**Important**

-   ACK managed cluster Pro manages the kube-apiserver component for you. By default, kube-apiserver is highly available across multiple zones, which ensures at least 2 replicas. It gradually adjusts to a maximum of 6 replicas as the control plane resource usage increases. `Total actual concurrent requests = Number of replicas × Total requests per replica`.
    
-   Modifying the custom parameters of kube-apiserver triggers a rolling update of the API Server. This may cause client controllers to re-perform List-Watch operations. In a large-scale cluster, this can cause the API Server load to become too high, which leads to temporary service unavailability.
    

#### kube-controller-manager **and** kube-scheduler

kube-controller-manager and kube-scheduler control the QPS of communication with the API Server through the kubeAPIQPS/kubeAPIBurst and connectionQPS/connectionBurst parameters, respectively. For more information, see [Customize the parameters of control plane components in an ACK Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-ack-pro-control-plane-component-parameters-1693464061811) and [Customize scheduler parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-scheduler-parameters).

-   kube-controller-manager: For clusters with more than 1,000 nodes, we recommend that you adjust kubeAPIQPS/kubeAPIBurst to 300/500 or higher.
    
-   kube-scheduler: Generally, no adjustment is needed. When the pod rate exceeds 300/s, we recommend that you adjust connectionQPS/connectionBurst to 800/1000.
    

#### **kubelet**

The default value for the kubelet component's `kube-api-burst/qps` is 5/10, which generally does not need adjustment. When your cluster experiences significant performance issues such as slow pod status updates, scheduling delays, or slow persistent volume mounting, we recommend that you increase the parameter values. For the procedure and description, see [Customize kubelet configurations for a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/customize-the-kubelet-configurations-of-a-node-pool).

**Important**

-   Increasing this kubelet parameter increases the communication QPS between the kubelet and the API Server. If the kubelet sends too many requests, it may increase the load on the API Server. We recommend that you gradually increase the value and monitor the performance and resource usage of the API Server to ensure control plane stability.
    
-   When you make changes to a node's kubelet, you should control the update frequency. To ensure the stability of the control plane during the change process, ACK limits the maximum number of parallel updates per batch in a single node pool to no more than 10.
    

## **Plan cluster resource scaling rates**

In a large-scale cluster, the control plane is usually under low pressure during stable operation. However, when the cluster undergoes large-scale changes, such as rapidly creating or deleting many resources or scaling many nodes, the pressure may become excessive, which affects the cluster's performance and response speed.

For example, in a 5,000-node cluster with many fixed pods running stably, the pressure on the control plane is usually not too high. However, in a 1,000-node cluster, if you create 10,000 short-lived jobs within a minute or concurrently scale out 2,000 nodes, the pressure on the control plane will surge.

Therefore, when you perform resource change operations in a large-scale cluster, you should carefully plan the change rate of scaling operations based on the cluster's running state to ensure the stability of the cluster and the control plane.

The recommended operations are as follows.

**Important**

Because many factors affect the cluster control plane, the following numbers are for reference only. During actual operations, gradually increase the change rate. Ensure that the control plane responds normally before you increase the scaling rate further.

-   Node scale-out and scale-in: For clusters with more than 2,000 nodes, when you manually scale nodes through a node pool, the number of nodes in a single operation for a single node pool should not exceed 100. The total number of nodes in a single operation across multiple node pools should not exceed 300.
    
-   Application pod scale-out and scale-in: If your application is associated with a service, updates to Endpoint and EndpointSlice during scaling are pushed to all nodes. In scenarios with many nodes, a lot of data needs to be updated, which may cause a cluster storm effect. For clusters with more than 5,000 nodes, we recommend that the update QPS for pods not associated with an Endpoint should not exceed 300/s. The update QPS for pods associated with Endpoints should not exceed 10/s. For example, when you declare a Rolling Update strategy for a deployment, we recommend that you set smaller values for `maxUnavailable` and `maxSurge` first to reduce the pod update rate.
    

## Optimize client access patterns for clusters

In a Kubernetes cluster, clients obtain cluster resource information through the API Server. As the number of resources in the cluster increases, frequent requests from clients can increase the burden on the cluster control plane, which leads to response delays or even an avalanche effect. You should understand and plan the size and frequency of resource access. The recommendations are as follows.

#### **Prioritize using informers to access local cached data**

Prioritize using client-go's [informer](https://pkg.go.dev/k8s.io/client-go/informers) to retrieve resources. Query data from the local cache to avoid List requests that directly access the API Server, which reduces the load on the API Server.

#### **Optimize the way resources are obtained through the** API Server

For local caches that have not been accessed, you still need to retrieve resources directly through the API Server. However, you can follow these recommendations.

-   Set `resourceVersion=0` in List requests.
    
    `resourceVersion` indicates the version of the resource state. When set to `0`, the request retrieves cached data from the API Server instead of directly accessing etcd. This reduces the number of internal interactions between the API Server and etcd and allows for faster responses to client List requests. The following is an example.
    
    ```
    k8sClient.CoreV1().Pods("").List(context.Background(), metav1.ListOptions{ResourceVersion: "0"})
    ```
    
-   Avoid listing all resources to prevent excessive data retrieval.
    
    To reduce the amount of data returned by a request, you can use a filter condition to limit the scope of the List request, such as a label-selector (based on resource tags) or a field-selector (based on resource fields).
    
    **Note**
    
    etcd is a key-value (KV) storage system and does not have the function to filter data by label or field. The filter conditions included in the request are actually processed by the API Server. Therefore, when you use the filter function, we recommend that you set the `resourceVersion` of the List request to `0` at the same time. The request data is retrieved from the API Server's cache and does not directly access etcd, which reduces the pressure on etcd.
    
-   Use protobuf (not JSON) to access non-CRD resources.
    
    The API Server can return resource objects to clients in different data formats, including JSON and protobuf. By default, when a client requests the Kubernetes API, Kubernetes returns objects serialized as JSON, with a content type of `application/json`. The client can specify that the request use the protobuf format. Protobuf has advantages over JSON in terms of memory usage and network transmission traffic.
    
    However, not all API resource types support protobuf. When you send a request, you can specify multiple content types in the `Accept` request header (for example, `application/json` and `application/vnd.kubernetes.protobuf`). This supports falling back to the default JSON format when protobuf cannot be used. For more information, see [Alternate representations of resources](https://kubernetes.io/docs/reference/using-api/api-concepts/#alternate-representations-of-resources) . The following is an example.
    
    ```
    Accept: application/vnd.kubernetes.protobuf, application/json
    ```
    

#### **Use a centralized controller**

You should avoid creating independent controllers on each node to watch the full data of the cluster. In this case, when the controllers start, they send many List requests to the API Server almost simultaneously to sync the current cluster state. This puts enormous pressure on the control plane, which can lead to service instability or crashes.

To avoid this problem, we recommend that you adopt a centralized controller design. You can create one or a group of centrally managed controller instances for the entire cluster, running on a single node or a few nodes. The centralized controller is responsible for listening to and processing the required cluster data. It only starts one (or a few) List requests and maintains only the necessary number of Watch connections, which greatly reduces the pressure on the API Server.

## **Plan large-scale workloads**

#### **Disable automatic mount of the default Service Account**

To ensure the synchronous update of secrets in a pod, the kubelet establishes a persistent Watch connection for each secret configured for the pod. The Watch mechanism lets the kubelet receive real-time notifications of secret updates. However, when the total number of Watches created by all nodes is too high, the large number of Watch connections may affect the performance of the cluster control plane.

-   Before Kubernetes version 1.22: When a pod is created, if no ServiceAccount is specified, Kubernetes automatically mounts a secret for the default ServiceAccount into the pod. This lets the application inside the pod communicate securely with the API Server.
    
    For batch processing systems and application pods that do not need to access the API Server, we recommend that you explicitly declare that automatic mounting of the ServiceAccount token is prohibited. This avoids creating related secrets and Watches (for more information, see [automountServiceAccountToken](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#opt-out-of-api-credential-automounting)). In a large-scale cluster, this operation can avoid creating unnecessary secrets and Watch connections with the API Server, which reduces the burden on the cluster control plane.
    
-   Kubernetes 1.22 and later: You can use the TokenRequest API to obtain a short-term, automatically rotated token and mount this token as a [projected volume](https://kubernetes.io/docs/concepts/storage/projected-volumes/#serviceaccounttoken). While improving secret security, this operation also reduces the number of Watch connections that the kubelet establishes for each ServiceAccount's secret, which lowers the cluster's performance overhead.
    
    For information about how to enable the ServiceAccount token projected volume feature, see [Use ServiceAccount token volume projection](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/enable-service-account-token-volume-projection).
    

#### **Control the number and size of Kubernetes objects**

You should promptly clean up unused Kubernetes resources, such as ConfigMaps, secrets, and PVCs, to reduce system resource usage and keep the cluster healthy and efficient. The following are usage recommendations.

-   Limit deployment history: [revisionHistoryLimit](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit) declares how many old ReplicaSets to retain for a deployment. If the value is too high, Kubernetes retains many historical versions of ReplicaSets, which increases the management burden on the kube-controller-manager. In a large-scale cluster, if there are many deployments and they are updated frequently, you can lower the value of the deployment's revisionHistoryLimit to clean up old ReplicaSets. The default value of a deployment's revisionHistoryLimit is 10.
    
-   Clean up unused jobs and related pods: If many job objects are created in the cluster through CronJob or other mechanisms, you can use [ttlSecondsAfterFinished](https://kubernetes.io/docs/concepts/workloads/controllers/ttlafterfinished/) to automatically clean up completed jobs and their related pods. This specifies that the job and its related pods are automatically deleted after a certain period.
    

#### **Properly configure the resources of Informer-type components**

Informer-type components are mainly used to monitor and sync the resource status of a Kubernetes cluster. Informer-type components establish a Watch connection to the resource status of the cluster's API Server and maintain a local cache of resource objects to quickly respond to changes in resource status.

For Informer-type components, such as controller components and kube-scheduler, the component's memory usage is related to the size of the resources it watches. In a large-scale cluster, you should pay attention to the memory consumption of these components to prevent out-of-memory (OOM) errors. Frequent OOMs can cause problems with continuous resource monitoring by the component. When a component restarts frequently, the List-Watch operations performed each time also put extra pressure on the cluster control plane, especially the API Server.

## Monitor control plane metrics

You can view the control plane component monitoring dashboard to obtain a list of metrics for core control plane components, analysis of abnormal metric issues, and more. In a large-scale cluster, you should focus on the following metrics. For more information about usage instructions and detailed descriptions of the metrics, see [Control plane component monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-control-plane-components/).

#### **Control resource usage**

Currently, the resource usage of all control plane components is available for viewing. The relevant metrics and descriptions are as follows:

**Metric name**

**Prometheus Query Language (PromQL)**

**Description**

**Memory Usage**

memory\_utilization\_byte{container="kube-apiserver"}

The memory usage of the API Server. Unit: bytes.

**CPU Usage**

cpu\_utilization\_core{container="kube-apiserver"}\*1000

The CPU usage of the API Server. Unit: millicores.

#### kube-apiserver

For information about how to view the metrics and their complete descriptions, see [kube-apiserver component monitoring metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-apiserver).

-   Resource object count
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **Resource Object Count**
    
    -   max by(resource)(apiserver\_storage\_objects)
        
    -   max by(resource)(etcd\_object\_counts)
        
    
    -   The metric name is apiserver\_storage\_objects if your ACK cluster runs Kubernetes 1.22 or later.
        
    -   The metric name is etcd\_object\_counts if your ACK cluster runs Kubernetes 1.22 or earlier.
        
    
    **Note**
    
    Due to compatibility issues, both the apiserver\_storage\_objects and etcd\_object\_counts metrics exist in Kubernetes 1.22.
    
-   Request latency
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **GET Read Request Latency**
    
    histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb="GET",resource!="",subresource!~"log|proxy"}\[$interval\])) by (pod, verb, resource, subresource, scope, le))
    
    Shows the response time of GET requests. Dimensions include API Server Pod, Verb (GET), Resources, and Scope.
    
    **LIST Read Request Latency**
    
    histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb="LIST"}\[$interval\])) by (pod\_name, verb, resource, scope, le))
    
    The response time of LIST requests displayed based on the following dimensions: API server pods, LIST verb, resources, and scope.
    
    **Write request delay P\[0.9\]**
    
    histogram\_quantile($quantile, sum(irate(apiserver\_request\_duration\_seconds\_bucket{verb!~"GET|WATCH|LIST|CONNECT"}\[$interval\])) by (cluster, pod\_name, verb, resource, scope, le))
    
    The response time of Mutating requests displayed based on the following dimensions: API server pods, verbs such as GET, WATCH, LIST, and CONNECT, resources, and scope.
    

-   Request throttling
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **Request Limit Rate**
    
    sum(irate(apiserver\_dropped\_requests\_total{request\_kind="readOnly"}\[$interval\])) by (name)
    
    sum(irate(apiserver\_dropped\_requests\_total{request\_kind="mutating"}\[$interval\])) by (name)
    
    The throttling rate of kube-apiserver. `No data` or `0` indicates that request throttling is not triggered.
    

#### kube-scheduler

For information about how to view the metrics and their complete descriptions, see [kube-scheduler component monitoring metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-scheduler).

-   Number of pending pods
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **Scheduler Pending Pods**
    
    scheduler\_pending\_pods{job="ack-scheduler"}
    
    The number of pending pods. Pending pods consist of the following types:
    
    -   **unschedulable**: unschedulable pods.
        
    -   **backoff**: backoff queue pods, which are the pods that fail to be scheduled due to specific reasons.
        
    -   **active**: active queue pods, which are the pods ready to be scheduled.
        
    
-   Request latency
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **Kube API Request Latency**
    
    histogram\_quantile($quantile, sum(rate(rest\_client\_request\_duration\_seconds\_bucket{job="ack-scheduler"}\[$interval\])) by (verb,url,le))
    
    The time interval between a request sent by kube-scheduler and a response returned by kube-apiserver. The latency is calculated based on Verbs and URLs.
    

#### kube-controller-manager

For information about how to view the metrics and their complete descriptions, see [kube-controller-manager component monitoring metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-kube-controller-manager).

Workqueue

**Name**

**PromQL**

**Description**

**Workqueue depth**

sum(rate(workqueue\_depth{job="ack-kube-controller-manager"}\[$interval\])) by (name)

The change of the workqueue length in the specified interval.

**Workqueue processing delay**

histogram\_quantile($quantile, sum(rate(workqueue\_queue\_duration\_seconds\_bucket{job="ack-kube-controller-manager"}\[5m\])) by (name, le))

The duration of the events in the workqueue.

#### **etcd**

For information about how to view the metrics and their complete descriptions, see [etcd component monitoring metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-etcd).

-   Total KV count
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **total kv**
    
    etcd\_debugging\_mvcc\_keys\_total
    
    The total number of key-value pairs in the etcd cluster.
    
-   Database size (DB Size)
    
    **Name**
    
    **PromQL**
    
    **Description**
    
    **Disk Size**
    
    etcd\_mvcc\_db\_total\_size\_in\_bytes
    
    The size of the etcd backend database.
    
    etcd\_mvcc\_db\_total\_size\_in\_use\_in\_bytes
    
    The usage of the etcd backend database.
    

## **References**

-   For information about the quotas and limits of ACK clusters, see [Quotas and limits](/help/en/ack/product-overview/limits).
    
-   For information about how to properly plan the cluster VPC network and container network, see [Plan CIDR blocks for an ACK managed cluster](/help/en/ack/plan-cidr-blocks-for-an-ack-cluster-2).
    
-   For information about how to achieve high-reliability configurations for cluster creation and workloads, see [Recommended workload configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-configurations-for-high-reliability).
    
-   If you encounter errors or related issues when you use an ACK cluster, you can see [Troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/troubleshooting-10/) and [FAQ about cluster management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-cluster-management) for troubleshooting information.
