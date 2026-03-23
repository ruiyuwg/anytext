Alibaba Cloud Container Service for Kubernetes is certified conformant with the community release. This topic describes the major changes in the ACK release of Kubernetes 1.34, including upgrade considerations, major changes, new features, deprecated features and APIs, and feature gates.

## Component version guide

The following table lists the versions of the core components in an ACK cluster.

**Core component**

**Version number**

Kubernetes

1.34.1-aliyun.1, 1.34.3-aliyun.1

etcd

v3.5.21

containerd

2.1.3

CoreDNS

v1.11.3.5-5321daf49-aliyun

CSI

Upgraded to the latest supported version of the component. For more information, see the component changelogs for [csi-plugin](/help/en/ack/product-overview/csi-plugin#DAS) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner#DAS).

CNI

Flannel v0.15.1.23-33d25c1-aliyun

Terway and TerwayControlplane are v1.15.0 or later

## Major changes

-   Starting from version 1.34, if you do not specify an OS image when you create a new node pool, the container-optimized version of [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alibaba-cloud-linux-3-container-optimized-image-overview) is used by default.
    
-   Starting from version 1.34, for new clusters that use the [Terway network plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway) with DataPath V2 enabled, the kube-proxy container no longer runs on nodes that use Terway. DataPath V2 uses eBPF to accelerate network access in shared ENI mode.
    
    This change applies only to new clusters.
    
-   Starting from version 1.34, the `serverTLSBootstrap` parameter and the `RotateKubeletServerCertificate` feature gate are enabled by default when you create [regular and managed node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool) in ACK Pro clusters.
    
    When this configuration is enabled, the kubelet server-side certificates on each node in the node pool automatically rotate. This configuration also allows the cluster CA to validate kubelet server-side certificates, which enhances the security of cluster nodes.
    
-   Starting from version 1.34, the kubelet server-side no longer supports the `TLS_RSA_WITH_AES_256_GCM_SHA384` and `TLS_RSA_WITH_AES_128_GCM_SHA256` TLS cipher suites. After you upgrade an existing cluster to version 1.34, new nodes automatically apply this change.
    
-   Starting from version 1.34, marking a node as `unschedulable` during registration is no longer supported. As a result, the node pool configuration to [**make nodes unschedulable**](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#d256e62445jgs) no longer takes effect. For more information, see [kubelet: remove --register-schedulable flag #122384](https://github.com/kubernetes/kubernetes/pull/122384/files).
    
    You can use node [**taints**](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#be2f97e9bc6ej) as an alternative to prevent pods from being scheduled on newly registered nodes. When you configure taints, do not use `node.kubernetes.io/unschedulable` as the key.
    

## Feature changes

-   The core features of [Dynamic Resource Allocation (DRA)](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/) have graduated to General Availability (GA) and are enabled by default. With DRA, workloads can request resources by specifying required device properties. The scheduler handles the device allocation and places the pod on a node that can access the allocated devices. Then, the device driver and kubelet configure the device and grant the pod access.
    
    Other DRA-related features have graduated to Beta and are enabled by default. These features include support for administrators to access devices that are already in use with limited permissions for monitoring and diagnostics. They also support configuring an optional list of suitable device allocation plans at request time. In addition, Kubelet now monitors and reports the DRA resources allocated to pods on a node.
    
-   Kubelet supports using short-term credentials to authenticate with container image repositories. This avoids the potential risks of using long-term credentials and improves security. For more information, see [Service Account Token Integration for Image Pulls Graduates to Beta](https://kubernetes.io/blog/2025/09/03/kubernetes-v1-34-sa-tokens-image-pulls-beta/).
    
-   The pod replacement policy for Jobs has graduated to GA, which optimizes the creation of replacement pods. By default, a replacement pod is created as soon as the old pod begins to terminate, which can cause resource contention. By configuring the `.spec.podReplacementPolicy` field, you can delay the creation of the replacement pod until the old pod is fully terminated. This helps avoid resource contention and unnecessary node scale-outs.
    
-   `RecoverVolumeExpansionFailure` has graduated to GA. If a volume expansion fails because the requested capacity in a PVC is too large, this feature lets you recover by reducing the capacity request in the PVC.
    
-   [Volume Attributes Classes](https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/) has graduated to GA and is enabled by default. This feature lets you define common volume parameters in a `VolumeAttributesClass` object. A PVC can then reference this object to apply these parameters.
    
-   If an API object referenced by a static pod, such as a Secret, ConfigMap, PVC, or ServiceAccount, does not exist, the kubelet will not start its containers. This prevents the pod from starting with missing dependencies and entering an unstable state.
    
-   The stability and performance of kube-apiserver have been optimized in the following ways:
    
    -   Read requests are now served from the cache. This reduces pass-through requests to etcd and lowers the memory pressure on kube-apiserver. Version 1.31 introduced support for [Consistent Reads from Cache](https://github.com/serathius/enhancements/blob/16ccca2b4ab117c4f321af75ad47c80ca90a417e/keps/sig-api-machinery/2340-Consistent-reads-from-cache/README.md), and version 1.34 adds support for a [Snapshottable API server cache](https://github.com/serathius/enhancements/blob/16ccca2b4ab117c4f321af75ad47c80ca90a417e/keps/sig-api-machinery/4988-snapshottable-api-server-cache/README.md) for historical data.
        
    -   For `LIST` requests, data can be returned as a stream. This allows the server-side to use a constant, small amount of memory when processing requests and prevents server-side memory spikes caused by clients that pull large amounts of data. For more information, see [Streaming Encoding for LIST Responses](https://github.com/kubernetes/enhancements/tree/master/keps/sig-api-machinery/5116-streaming-response-encoding).
        
-   Version 1.34.3-aliyun.1 resolves an issue where pods that request resources using DRA get stuck in the `Terminating` state when deleted. For more information, see [#133920](https://github.com/kubernetes/kubernetes/issues/133920).
    

## Features

-   [PodLevelResources](https://kubernetes.io/docs/tasks/configure-pod-container/assign-pod-level-resources/) has graduated to Beta. Unlike traditional container-level resource definitions, this feature lets you set total resource requests and limits at the pod level. This ensures that the resource consumption of all containers within a pod does not exceed the pod's own limits. For more information, see [Pod Level Resource Specifications](https://github.com/ndixita/enhancements/blob/6bb4c3570639e2e8f47c9cc7aceca316e6f49a83/keps/sig-node/2837-pod-level-resource-spec/README.md).
    
    > This feature is not supported on Windows nodes.
    
-   By default, kubectl supports defining user preferences in a `.kuberc` file. Unlike the `kubeconfig` file, which contains authentication credentials, this file is specifically for storing non-sensitive client configurations. For more information, see [Introduce kuberc](https://github.com/soltysh/k8s-enhancements/blob/2546dc6c79250f2a8302055fcb375b40ab448464/keps/sig-cli/3104-introduce-kuberc/README.md).
    
-   `ExternalServiceAccountTokenSigner` has graduated to Beta. This feature introduces the `ExternalJWTSigner` gRPC service, which uses an external key management solution to sign ServiceAccount tokens instead of the local static key signing method.
    
-   `SchedulerAsyncAPICalls` has graduated to Beta and enables asynchronous API calls in kube-scheduler by default.
    
    This feature resolves performance bottlenecks in kube-scheduler caused by blocking API calls during the scheduling cycle. By handling these calls asynchronously, it reduces scheduling latency, prevents scheduler threads from being blocked by slow API responses, and provides faster retry opportunities for unschedulable pods. For more information, see [Asynchronous API calls during scheduling](https://github.com/macsko/enhancements/blob/b0bba8abc9664fbe96181412719aa16c653dca60/keps/sig-scheduling/5229-asynchronous-api-calls-during-scheduling/README.md).
    
-   `WindowsGracefulNodeShutdown` has graduated to Beta and supports graceful node shutdown for Windows nodes.
    
-   PreferSameTrafficDistribution has graduated to Beta. It lets you prioritize routing traffic to endpoints within the same zone or on the same node by setting the `.spec.trafficDistribution` field of a Service to `PreferSameZone` or `PreferSameNode`. The previous `PreferClose` option is now deprecated. For more information, see [Traffic Distribution](https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-distribution).
    
-   The kubeletPSI feature has graduated to Beta. It allows kubelet to expose Pressure Stall Information (PSI) metrics in the Summary API and through Prometheus. For more information, see [PSI Metrics for Kubernetes Graduates to Beta](https://kubernetes.io/blog/2025/09/04/kubernetes-v1-34-introducing-psi-metrics-beta/).
    
-   The static policy of the CPU manager now supports the `prefer-align-cpus-by-uncorecache` option. This optimizes the performance of workloads that run on processors with a separate uncore cache architecture. For more information, see [Introducing CPU Manager Static Policy Option for Uncore Cache Alignment](https://kubernetes.io/blog/2025/09/02/kubernetes-v1-34-prefer-align-by-uncore-cache-cpumanager-static-policy-optimization/).
    

## Reference links

For the complete changelog for Kubernetes 1.34, see [CHANGELOG-1.34](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) and [Kubernetes v1.34: Of Wind & Will (O' WaW)](https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/).
